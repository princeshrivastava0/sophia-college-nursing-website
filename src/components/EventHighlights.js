import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { eventHightlightPhotos } from "@/data/eventHighlightPhotos";

function EventHighlights() {
  const router = useRouter();
  const { basePath } = router;

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

  //   Image Preview Function
  const previewImage = (activePhoto, photoSrc, altText, index) => {
    if (photoSrc === "") {
      return;
    }

    setActiveImage({
      index: index,
      src: photoSrc,
      altText: altText,
      visible: true,
    });

    setIsImgLoaded(false);
    setIsLoading(true);
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
        setActiveImage({
          index: currentIndex,
          src: photo.src,
          altText: photo.alt,
          visible: true,
        });
        return;
      }
    }
  };

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
          background: #ffffff; /* Frame background */
          padding: 10px; /* Space inside the frame */
          border: 2px solid #ddd; /* Frame border */
          border-radius: 6px;
          box-shadow: 0 0px 16px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
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
          .img-preview-container {
            max-width: 100% !important;
            height: auto !important;
          }

          .photo-grid {
            max-width: 400px !important;
          }
        }
      `}</style>
      <section id="photo-gallery" className="p-5">
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
                <Image
                  id={`photo-id-${index}`}
                  src={
                    !photo.src || isBroken
                      ? `${basePath}/no-photo.jpg`
                      : photo.src
                  }
                  alt={photo.alt || "No Photo Available"}
                  width={100}
                  height={100}
                  unoptimized
                  style={{
                    width: "100%",
                    height: "100%",
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
            );
          })}
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
              style={{ height: "80%", maxWidth: "50%" }}
            >
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {!isLoading && brokenPhotos[activeImage.index] && (
            <p className="text-center text-light mt-3">Image failed to load.</p>
          )}

          <div
            className="position-relative my-auto img-preview-container"
            style={{ height: "80%", maxWidth: "50%" }}
          >
            {/* Close Button */}
            {(isImgLoaded || !isLoading) && (
              <span
                className="d-inline-block mt-3 me-3 position-absolute"
                style={{ right: 0 }}
              >
                <button
                  className="close-btn"
                  onClick={() => {
                    setActiveImage({
                      visible: false,
                    });
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
              sizes="100vw"
              className="img-fluid rounded"
              onLoadingComplete={() => {
                setIsImgLoaded(true);
                setIsLoading(false);
              }}
              onError={() => {
                setIsImgLoaded(true);
                setIsLoading(false);
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
