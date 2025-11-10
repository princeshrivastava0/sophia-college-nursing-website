import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { eventHightlightPhotos } from "@/data/eventHighlightPhotos";
import Link from "next/link";
import ImagePreview from "../ImagePreview";

function EventHighlights() {
  const router = useRouter();
  const { basePath } = router;

  const [imgPreview, setImgPreview] = useState({
    currentIndex: null,
    isVisible: false,
  });

  const [errorPhotos, setErrorPhotos] = useState({});

  function handleImageError(src) {
    setErrorPhotos((prev) => ({ ...prev, [src]: true }));
  }

  // Disabling Page-Scroll on Image Preview
  useEffect(() => {
    if (imgPreview.isVisible) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }

    // Cleanup to reset on unmount
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [imgPreview.isVisible]);

  // Storing all photos into a new array along with their headings
  const allPhotos = eventHightlightPhotos.map((photo) => ({
    ...photo,
    eventHeading: photo.alt,
  }));

  // Event Photos Handler Function - to set Image Visible State and trigger Image Preview
  function handleImagePreview(index) {
    setImgPreview({
      isVisible: true,
      currentIndex: index,
    });
  }

  return (
    <>
      <style jsx>{`
        .photo-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-auto-rows: 200px;
          gap: 20px;
          background: rgba(128, 128, 128, 0.3);
          border-radius: 3px;
          box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
        }

        .photo-card {
          background: #ffffff;
          border: 6px solid #fff;
          border-radius: 6px;
          box-shadow: 0 0px 16px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          overflow: hidden;
          min-height: 200px;
        }

        .photo-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0px 24px rgba(255, 255, 255, 0.1);
        }

        .close-btn {
          background: transparent;
          outline: none;
          border: none;
          font-size: 2rem;
        }

        .close-btn:hover {
          color: red;
        }

        .img-cntrl-btn:active {
          transform: scale(0.95);
        }

        .view-more-btn {
          border: none;
          outline: none;
          font-weight: 700;
          background-color: #e74c3c;
          color: #fff;
          letter-spacing: 0.15rem;
          transition: transform 0.3s ease-in-out, box-shadow 0.2s ease-in-out;
        }

        .view-more-btn:hover {
          box-shadow: 0 0px 24px rgba(255, 0, 0, 1);
        }

        .view-more-btn:active {
          transform: scale(0.95);
        }

        .img-preview-container {
          max-height: 80vh;
          max-width: 95vw;
          height: 80%;
          border: 5px solid black;
        }

        @media (min-width: 768px) {
          .photo-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .photo-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media screen and (max-width: 767.98px) {
          .photo-grid {
            max-width: 400px !important;
          }

          .img-preview-container {
            height: auto !important;
            width: 95% !important;
            max-height: 80% !important;
            max-width: 50% !important;
          }
        }
      `}</style>

      <section id="event-highlights" className="p-5">
        <h2
          className="text-center text-uppercase fw-bold"
          style={{ color: "#e74c3c" }}
        >
          Event Highlights
        </h2>
        {/* Photo Items */}
        <div className="photo-grid mx-auto p-5" style={{ maxWidth: "1200px" }}>
          {allPhotos.map((photo, index) => {
            // errorPhotos is an Object with Bracket Notation to access Dynamic Keys, of which value is then set to isBroken - undefined or true.
            const isBroken = errorPhotos[photo.src];
            return (
              <div
                key={`photo-${index}`}
                className={`${!photo.src || isBroken ? "" : "photo-card"}`}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  <Image
                    id={`photo-id-${index}`}
                    src={
                      !photo.src || isBroken
                        ? `${basePath}/images/no-photo.jpg`
                        : `${basePath}${photo.src}`
                    }
                    alt={photo.alt || "No Photo Available"}
                    sizes="100%"
                    fill
                    style={{
                      objectFit: "cover",
                      cursor: photo.src && !isBroken ? "pointer" : "default",
                      boxShadow: "0 0 5px rgba(0,0,0,0.5)",
                    }}
                    onClick={
                      errorPhotos[photo.src]
                        ? undefined // disable click
                        : () =>
                            handleImagePreview(
                              allPhotos.findIndex(
                                (p) =>
                                  p.src === photo.src && p.alt === photo.alt
                              )
                            )
                    }
                    onError={() => handleImageError(photo.src)}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="text-center px-3 pt-5">
          <Link href={"/gallery"}>
            <button className="view-more-btn p-3 px-5 rounded-pill">
              View More
            </button>
          </Link>
        </div>
      </section>

      {/* Image Preview Feature */}
      <ImagePreview
        photos={allPhotos}
        imgPreview={imgPreview}
        setImgPreview={setImgPreview}
      />
    </>
  );
}

export default EventHighlights;
