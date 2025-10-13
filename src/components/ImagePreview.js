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
  const [hasError, setHasError] = useState(false);
  const [errorPhotos, setErrorPhotos] = useState({});
  const [skipBrokenImg, setSkipBrokenImg] = useState("next");
  const [showSpinner, setShowSpinner] = useState(false);
  const spinnerTimeoutRef = useRef(null);

  useEffect(() => {
    if (imgPreview.currentIndex == null || !photos.length) return;

    // If current photo is already known broken → auto-skip
    const currentPhoto = photos[imgPreview.currentIndex];
    if (errorPhotos[currentPhoto?.src]) {
      handleImgControl(skipBrokenImg);
      return;
    }

    setIsLoading(true);
    setHasError(false); //reset error state

    const imgEl = new window.Image();
    imgEl.src = `${basePath}${photos[imgPreview.currentIndex]?.src}`;

    if (!imgEl.complete) {
      // 300ms timer to show spinner only if loading takes longer
      spinnerTimeoutRef.current = setTimeout(() => setShowSpinner(true), 300);
    }

    // Cancel previous spinner timer (if any)
    if (spinnerTimeoutRef.current) {
      clearTimeout(spinnerTimeoutRef.current);
    }

    imgEl.onload = () => {
      clearTimeout(spinnerTimeoutRef.current);
      setShowSpinner(false);
      setImgSize({
        width: imgEl.width,
        height: imgEl.height,
      });
      setIsLoading(false);
    };

    imgEl.onerror = () => {
      clearTimeout(spinnerTimeoutRef.current);
      setShowSpinner(false);

      setHasError(true);

      setErrorPhotos((prev) => ({
        ...prev,
        [photos[imgPreview.currentIndex]?.src]: true,
      }));
      setIsLoading(false);
      handleImgControl(skipBrokenImg); // skip immediately if broken
    };

    // Cleanup if component unmounts or index changes
    return () => {
      clearTimeout(spinnerTimeoutRef.current);
      setShowSpinner(false);
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

    let attempts = 0;
    do {
      if (btn === "prev") {
        newIndex = newIndex > 0 ? newIndex - 1 : length - 1;
      } else if (btn === "next") {
        newIndex = newIndex < length - 1 ? newIndex + 1 : 0;
      }
      attempts++;
      if (attempts >= length) {
        // All images are broken
        return;
      }
    } while (errorPhotos[photos[newIndex].src]); // keep skipping until a good image is found

    setImgPreview({
      ...imgPreview,
      currentIndex: newIndex,
    });
  }

  const captionText = hasError
    ? "Failed to load image"
    : photos[imgPreview.currentIndex]?.eventHeading;

  if (!imgPreview.isVisible || imgPreview.currentIndex == null) return null;

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
          font-size: 2.2rem;
        }

        .close-btn:hover {
          color: red;
        }

        .img-caption {
          position: absolute;
          bottom: 0rem !important;
          background: rgba(0, 0, 0, 0.5); /* semi-transparent black */
          font-weight: 700;
          padding: 8px 12px;
          border-radius: 6px;
          width: 100%;
          text-align: center;
        }

        .img-container {
          max-height: 75%;
          height: 75%;
          max-width: 95%;
          width: auto;
        }

        @media screen and (max-width: 767px) {
          .img-container {
            width: 95% !important;
            height: auto !important;
          }
        }
      `}</style>
      <div
        role="dialog"
        aria-label="polite"
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
          if (e.key === "ArrowLeft") {
            setSkipBrokenImg("prev");
            handleImgControl("prev");
          }
          if (e.key === "ArrowRight") {
            setSkipBrokenImg("next");
            handleImgControl("next");
          }
        }}
      >
        {/* Image Container */}
        <div className="position-relative img-container d-flex justify-content-center align-items-center ">
          {showSpinner && (
            <div
              className="my-auto d-flex justify-content-center align-items-center position-absolute"
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
            onLoad={() => setIsLoading(false)}
          />

          {/* Image Caption */}

          {!isLoading && captionText && (
            <h5
              style={{
                color: hasError ? "red" : "#fff",
              }}
              className="img-caption m-0 d-none d-lg-block"
            >
              {captionText}
            </h5>
          )}
        </div>

        {/* Image Controls */}
        <div
          className="mx-auto d-flex justify-content-center align-items-center rounded-4 my-2"
          style={{
            height: "50px",
            backgroundColor: "rgba(255,255,255,0.5)",
            border: "none",
            outline: "none",
          }}
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
            onClick={() => {
              setSkipBrokenImg("prev");
              handleImgControl("prev");
            }}
          >
            <i
              className="bi bi-skip-backward-fill fw-bold"
              style={{ color: "#fff", fontSize: "1.25rem" }}
            ></i>
          </button>

          {/* Close Btn */}
          <button
            type="button"
            className="close-btn py-1 mx-3"
            onClick={() =>
              setImgPreview({
                ...imgPreview,
                isVisible: false,
              })
            }
          >
            <i className="bi bi-x-octagon-fill"></i>
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
            onClick={() => {
              setSkipBrokenImg("next");
              handleImgControl("next");
            }}
          >
            <i
              className="bi bi-skip-forward-fill"
              style={{ color: "#fff", fontSize: "1.25rem" }}
            ></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default ImagePreview;
