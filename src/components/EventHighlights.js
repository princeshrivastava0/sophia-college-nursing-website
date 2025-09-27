import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { eventHightlightPhotos } from "@/data/eventHighlightPhotos";
import Link from "next/link";

function EventHighlights() {
  const router = useRouter();
  const { basePath } = router;
  const spinnerTimeoutRef = useRef(null);
  const willShowSpinner = useRef(false);
  const [isImageFailed, setIsImageFailed] = useState(false);

  const [activeImage, setActiveImage] = useState({
    index: 0,
    src: "",
    altText: "",
    visible: false,
  });

  const photos = eventHightlightPhotos(basePath);
  const [brokenPhotos, setBrokenPhotos] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const showImage = (index, photoSrc, altText) => {
    // Cancel previous spinner timer (if any)
    if (spinnerTimeoutRef.current) {
      clearTimeout(spinnerTimeoutRef.current);
    }

    setIsLoading(false);
    willShowSpinner.current = true;

    // Delay spinner visibility
    spinnerTimeoutRef.current = setTimeout(() => {
      if (willShowSpinner.current) {
        setIsLoading(true);
      }
    }, 300); // Only show spinner if loading takes longer than 300ms

    setActiveImage({
      index,
      src: photoSrc,
      altText,
      visible: true,
    });
  };

  //   Image Preview Function
  const previewImage = (activePhoto, photoSrc, altText, index) => {
    if (photoSrc === "") {
      return;
    }

    showImage(index, photoSrc, altText);
  };

  //   Image Control Function
  const imgControlBtn = (direction) => {
    const total = photos.length;
    let currentIndex = activeImage.index;

    for (let i = 0; i < total; i++) {
      // Update index depending on direction
      currentIndex =
        direction === "prev"
          ? (currentIndex - 1 + total) % total
          : (currentIndex + 1) % total;

      const photo = photos[currentIndex];
      const isBroken = brokenPhotos[currentIndex];

      // Skip broken or missing images
      if (photo.src && !isBroken) {
        showImage(currentIndex, photo.src, photo.alt);
        return;
      }
    }
  };

  // Keyboard Escape Exit and Arrow Keys Navigation

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!activeImage.visible) return;

      switch (event.key) {
        case "Escape":
          setActiveImage({
            index: 0,
            src: "",
            altText: "",
            visible: false,
          });
          setIsImgLoaded(false);
          setIsLoading(false);
          setIsImageFailed(false);
          break;

        case "ArrowLeft":
          imgControlBtn("prev");
          break;

        case "ArrowRight":
          imgControlBtn("next");
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage.visible, activeImage.index, brokenPhotos]);

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

        .img-preview-container {
          max-width: 100% !important;
        }

        .view-more-btn {
          border: none;
          outline: none;
          font-weight: 700;
          background-color: #e74c3c;
          color: #fff;
          letter-spacing: 0.15rem;
          transition: transform 0.3s ease-in-out, box-shadow 0.1s ease-in;
        }

        .view-more-btn:hover {
          box-shadow: 0 0px 24px rgba(255, 0, 0, 1);
        }

        .view-more-btn:active {
          transform: scale(0.95);
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

        @media screen and (max-width: 767px) {
          .photo-grid {
            max-width: 400px !important;
          }

          .img-preview-container {
            height: auto !important;
            width: 95% !important;
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
          {photos.map((photo, index) => {
            // brokenPhotos is an Object with Bracket Notation to access Dynamic Keys, of which value is then set to isBroken - undefined or true.
            const isBroken = brokenPhotos[index];
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
                        ? `${basePath}/no-photo.jpg`
                        : photo.src
                    }
                    alt={photo.alt || "No Photo Available"}
                    sizes="100%"
                    fill
                    style={{
                      objectFit: "cover",
                      cursor: photo.src && !isBroken ? "pointer" : "default",
                      boxShadow: "0 0 5px rgba(0,0,0,0.5)",
                    }}
                    onClick={(activePhoto) => {
                      if (!isBroken && photo.src) {
                        previewImage(activePhoto, photo.src, photo.alt, index);
                      }
                    }}
                    onError={() => {
                      setBrokenPhotos((prev) => ({ ...prev, [index]: true }));
                    }}
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
      {activeImage.visible && (
        <div
          className="img-preview-wrapper position-fixed d-flex justify-content-center align-items-center"
          style={{
            height: "100vh",
            width: "100vw",
            top: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.5)",
          }}
        >
          {isLoading && (
            <div
              className="position-absolute my-auto img-preview-container d-flex justify-content-center align-items-center"
              style={{
                zIndex: 9999,
              }}
            >
              <div
                className="spinner-border text-danger"
                role="status"
                style={{ height: "50px", width: "50px", fontSize: "1.25rem" }}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {!isLoading && brokenPhotos[activeImage.index] && (
            <p className="text-center text-light mt-3">Image failed to load.</p>
          )}

          <div
            className="position-relative my-auto img-preview-container"
            style={{
              height: "80%",
              maxWidth: "50%",
            }}
          >
            {/* Close Button */}
            {(isImgLoaded || isImageFailed) && (
              <span
                className="d-inline-block mt-3 me-3 position-absolute"
                style={{ right: 0 }}
              >
                <button
                  className="close-btn"
                  onClick={() => {
                    setActiveImage({
                      index: 0,
                      src: "",
                      altText: "",
                      visible: false,
                    });
                    setIsImgLoaded(false);
                    setIsLoading(false);
                  }}
                >
                  <i className="bi bi-x-octagon-fill"></i>
                </button>
              </span>
            )}

            {/* Image Container */}
            <Image
              src={activeImage.src}
              alt={activeImage.altText}
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              sizes="(max-width: 767px) 95vw, (max-width: 1200px) 80vw, 100vw"
              className="img-fluid rounded"
              onLoad={() => {
                if (spinnerTimeoutRef.current) {
                  clearTimeout(spinnerTimeoutRef.current);
                }
                willShowSpinner.current = false;
                setIsImgLoaded(true);
                setIsLoading(false);
                setIsImageFailed(false);
              }}
              onError={() => {
                if (spinnerTimeoutRef.current) {
                  clearTimeout(spinnerTimeoutRef.current);
                }
                willShowSpinner.current = false;
                setIsImgLoaded(true);
                setIsLoading(false);
                setIsImageFailed(true);

                setBrokenPhotos((prev) => ({
                  ...prev,
                  [activeImage.index]: true,
                }));
              }}
            />

            {/* Control Buttons */}
            {isImgLoaded && (
              <div
                className="d-flex justify-content-between align-items-center position-absolute"
                style={{
                  width: "250px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: "20px",
                }}
              >
                <button
                  type="button"
                  style={{
                    background: "rgba(0,0,0,0.9)",
                    outline: "none",
                    border: "none",
                    width: "100px",
                    borderRadius: "5px",
                  }}
                  className="py-1 img-cntrl-btn"
                  onClick={() => imgControlBtn("prev")}
                >
                  <i
                    className="bi bi-skip-backward-fill fw-bold"
                    style={{ color: "#fff", fontSize: "1.25rem" }}
                  ></i>
                </button>
                <button
                  type="button"
                  style={{
                    background: "rgba(0,0,0,0.9)",
                    outline: "none",
                    border: "none",
                    width: "100px",
                    borderRadius: "5px",
                  }}
                  className="py-1 img-cntrl-btn"
                  onClick={() => imgControlBtn("next")}
                >
                  <i
                    className="bi bi-skip-forward-fill"
                    style={{ color: "#fff", fontSize: "1.25rem" }}
                  ></i>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default EventHighlights;
