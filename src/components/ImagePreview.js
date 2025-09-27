import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

function ImagePreview({ photos, imgPreview, setImgPreview }) {
  const router = useRouter();
  const { basePath } = router;
  const containerRef = useRef(null);
  const [imgSize, setImgSize] = useState({
    width: 0,
    height: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgEl = new window.Image();
    imgEl.src = `${basePath}${photos[imgPreview.currentIndex].src}`;
    imgEl.onload = () => {
      setImgSize({
        width: imgEl.width,
        height: imgEl.height,
      });
      setIsLoading(false);
    };
  }, [imgPreview.currentIndex]);

  useEffect(() => {
    if (imgPreview.isVisible && containerRef.current) {
      containerRef.current.focus(); // force focus when modal opens
    }
  }, [imgPreview.currentIndex]);

  function handleImgControl(btn) {
    const length = photos.length;
    let newIndex = imgPreview.currentIndex;

    if (btn === "prev") {
      newIndex = newIndex > 0 ? newIndex - 1 : length - 1;
    } else if (btn === "next") {
      newIndex = newIndex < length - 1 ? newIndex + 1 : 0;
    }

    setImgPreview({
      ...imgPreview,
      currentIndex: newIndex,
    });
  }

  return (
    <>
      <style jsx>{`
        .img-cntrl-btn:active,
        .close-btn:active {
          transform: scale(0.95);
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

        .img-caption {
          position: absolute;
          bottom: 0rem !important;
          background: rgba(0, 0, 0, 0.5); /* semi-transparent black */
          color: #fff;
          font-weight: 700;
          padding: 8px 12px;
          border-radius: 6px;
          width: 100%;
          text-align: center;
        }

        .img-container {
          max-width: 100%;
          // height: auto !important;
        }

        @media screen and (max-width: 767px) {
          .img-container {
            width: 95% !important;
            height: auto !important;
          }
        }

        @media screen and (min-width: 768px) and (max-width: 991px) {
          .img-container {
            height: 75% !important;
            width: auto !important;
          }
        }
      `}</style>
      <div
        className="w-100 h-100 position-fixed d-flex flex-column justify-content-center align-items-center"
        style={{
          zIndex: 99,
          top: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        tabIndex={0}
        ref={containerRef}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setImgPreview({
              isVisible: false,
            });
          }
          if (e.key === "ArrowLeft") handleImgControl("prev");
          if (e.key === "ArrowRight") handleImgControl("next");
        }}
      >
        {/* Image Container */}
        <div
          className="position-relative img-container"
          style={{
            height: "75%",
          }}
        >
          {/* Close Btn */}
          {!isLoading && (
            <span
              className="d-inline-block position-absolute"
              style={{ right: 10, top: 0, zIndex: 99 }}
            >
              <button
                className="close-btn"
                onClick={() =>
                  setImgPreview({
                    ...imgPreview,
                    isVisible: false,
                  })
                }
              >
                <i className="bi bi-x-octagon-fill"></i>
              </button>
            </span>
          )}
          {isLoading ? (
            <div
              className="h-100 my-auto img-preview-container d-flex justify-content-center align-items-center"
              style={{
                zIndex: 99,
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
          ) : (
            <Image
              src={`${basePath}${photos[imgPreview.currentIndex].src}`}
              alt={`${photos[imgPreview.currentIndex].alt}`}
              width={imgSize.width}
              height={imgSize.height}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
              sizes="(max-width: 767px) 95vw, (max-width: 1200px) 75vw, 75vw"
              className="img-fluid rounded"
            />
          )}

          {/* Image Caption */}
          {!isLoading && (
            <h5 className="img-caption m-0 d-none d-lg-block">{`${
              photos[imgPreview.currentIndex].eventHeading
            }`}</h5>
          )}
        </div>

        {/* Image Controls */}
        {!isLoading && (
          <div
            className=" mx-auto d-flex justify-content-center align-items-center"
            style={{ height: "50px" }}
          >
            {/* Previous Btn */}
            <button
              type="button"
              style={{
                background: "rgba(0,0,0,0.9)",
                outline: "none",
                border: "none",
                width: "100px",
                borderRadius: "5px",
              }}
              className="py-1 img-cntrl-btn mx-3"
              onClick={() => handleImgControl("prev")}
            >
              <i
                className="bi bi-skip-backward-fill fw-bold"
                style={{ color: "#fff", fontSize: "1.25rem" }}
              ></i>
            </button>

            {/* Next Btn */}
            <button
              type="button"
              style={{
                background: "rgba(0,0,0,0.9)",
                outline: "none",
                border: "none",
                width: "100px",
                borderRadius: "5px",
              }}
              className="py-1 img-cntrl-btn mx-3"
              onClick={() => handleImgControl("next")}
            >
              <i
                className="bi bi-skip-forward-fill"
                style={{ color: "#fff", fontSize: "1.25rem" }}
              ></i>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ImagePreview;
