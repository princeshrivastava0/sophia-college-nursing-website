import { galleryPhotos } from "@/data/galleryPhotos";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ImagePreview from "./ImagePreview";

function PhotoGallery() {
  const router = useRouter();
  const { basePath } = router;
  const [activePhoto, setActivePhoto] = useState(null);
  const [imgPreview, setImgPreview] = useState({
    currentIndex: null,
    photoSrc: null,
    photoAlt: null,
    isVisible: false,
  });

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
  const allPhotos = galleryPhotos
    .flatMap((event) =>
      event.photos.map((photo) => ({
        ...photo,
        eventHeading: event.heading,
      }))
    )
    .reverse();

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
        .photo {
          transition: transform 0.5s ease-in-out;
        }
        .active-photo {
          transform: scale(1.25);
          z-index: 1;
        }

        .carousel-caption {
          background: rgba(0, 0, 0, 0.5); /* semi-transparent black */
          padding: 8px 12px;
          border-radius: 6px;
          bottom: 0rem !important;
        }

        .carousel-container-height {
          height: 500px;
          overflow: hidden;
        }
      `}</style>

      <section id="photo-gallery" style={{ paddingTop: "100px" }}>
        {/* Carousel Container */}
        <div className="w-100 my-md-5 mt-3 p-md-5 d-flex justify-content-center align-items-center position-relative carousel-container-height">
          <div
            id="galleryCarousel"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
            style={{ width: "100%" }}
          >
            {/* Slides */}
            <div className="carousel-inner">
              {allPhotos.map((photo, index) => (
                <div
                  key={index}
                  className={`carousel-item carousel-container-height ${
                    index === 0 ? "active" : ""
                  }`}
                  style={{ height: "500px" }}
                >
                  <Image
                    src={`${basePath}${photo.src}`}
                    alt={photo.alt}
                    fill
                    sizes="100vw"
                    className="d-block w-100"
                    style={{ objectFit: "contain" }}
                  />
                  <div className="carousel-caption d-block">
                    <h5
                      className="my-2"
                      style={{
                        color: "#fff",
                        fontWeight: "700",
                        wordBreak: "break-word",
                      }}
                    >
                      {photo.eventHeading}
                    </h5>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#galleryCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#galleryCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Photo Gallery Container */}
        <div className="mx-auto my-5" style={{ width: "90%" }}>
          {galleryPhotos
            .slice()
            .reverse()
            .map((item, eventIndex) => {
              return (
                <div key={`event-${eventIndex}`}>
                  {/* Event Heading */}
                  <h3
                    className="m-0 my-4 py-2 ps-3 text-center"
                    style={{
                      borderTop: "3px double black",
                      borderBottom: "3px double black",
                      textTransform: "uppercase",
                      fontWeight: "600",
                      fontSize: "1.4rem",
                      color: "#f32b2bff",
                    }}
                  >
                    {item.heading}
                  </h3>
                  {/* Event Photos */}
                  <div className="d-flex align-items-center justify-content-center flex-wrap my-3">
                    {item.photos
                      .slice()
                      .reverse()
                      .map((photo, photoIndex) => {
                        const key = `${eventIndex}-${photoIndex}`;
                        return (
                          <span
                            key={key}
                            className={`position-relative d-flex m-3 photo ${
                              activePhoto === key ? "active-photo" : ""
                            }`}
                            style={{
                              width: "200px",
                              height: "200px",
                              cursor: "pointer",
                            }}
                            onMouseEnter={() => setActivePhoto(key)}
                            onMouseLeave={() => setActivePhoto(null)}
                            onClick={() =>
                              handleImagePreview(
                                allPhotos.findIndex(
                                  (p) =>
                                    p.src === photo.src && p.alt === photo.alt
                                )
                              )
                            }
                          >
                            <Image
                              src={`${basePath}${photo.src}`}
                              alt={`${photo.alt}`}
                              fill
                              sizes="100%"
                              style={{
                                objectFit: "cover",
                                borderRadius: "5px",
                              }}
                            />
                          </span>
                        );
                      })}
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      {imgPreview.isVisible && (
        <ImagePreview
          photos={allPhotos}
          imgPreview={imgPreview}
          setImgPreview={setImgPreview}
        />
      )}
    </>
  );
}

export default PhotoGallery;
