import { galleryPhotos } from "@/data/galleryPhotos";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

function PhotoGallery() {
  const router = useRouter();
  const { basePath } = router;
  const [activePhoto, setActivePhoto] = useState(null);
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
      `}</style>
      <section id="photo-gallery" style={{ paddingTop: "100px" }}>
        {/* Photo Gallery Container */}
        <div className="mx-auto my-5" style={{ width: "90%" }}>
          {galleryPhotos.map((item, eventIndex) => {
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
                  {item.photos.map((photo, photoIndex) => {
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
                      >
                        <Image
                          src={`${basePath}${photo.src}`}
                          alt={`${photo.alt}`}
                          fill
                          style={{ objectFit: "cover", borderRadius: "5px" }}
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
    </>
  );
}

export default PhotoGallery;
