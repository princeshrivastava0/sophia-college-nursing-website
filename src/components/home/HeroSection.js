import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import { heroCarouselItems } from "@/data/heroCarouselItems";

function HeroSection() {
  const router = useRouter();
  const { basePath } = router;

  const [validItems, setValidItems] = useState([]);

  // Preload all images first
  useEffect(() => {
    const checkImages = async () => {
      const checks = await Promise.all(
        heroCarouselItems.map((item) => {
          return new Promise((resolve) => {
            const img = new window.Image();
            img.src = `${basePath}${item.src}`;
            img.onload = () => resolve(item);
            img.onerror = () => resolve(null);
          });
        })
      );
      const filtered = checks.filter(Boolean);
      setValidItems(filtered);
    };

    checkImages();
  }, [basePath]);

  // ✅ Force-start Bootstrap carousel on mount (fix for mobile)
  useEffect(() => {
    if (validItems.length > 0 && typeof window !== "undefined") {
      const carouselEl = document.querySelector("#heroCarousel");
      if (carouselEl && window.bootstrap) {
        const carousel =
          window.bootstrap.Carousel.getInstance(carouselEl) ||
          new window.bootstrap.Carousel(carouselEl, {
            interval: 2000,
            ride: "carousel",
            pause: "hover",
          });
        carousel.cycle(); // Start it manually
      }
    }
  }, [validItems]);

  // Show nothing or a loader until images checked
  if (validItems.length === 0) {
    return null;
  }

  return (
    <section
      id="hero-section"
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100%" }}
    >
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade w-100 pointer-event"
        // data-bs-ride="carousel"
        data-bs-interval="2000"
        data-bs-pause="hover"
      >
        {/* Indicators */}
        <div className="carousel-indicators mb-5 pb-3">
          {validItems.map((_, index) => (
            <button
              key={`indicator-${index}`}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner" style={{ height: "87vh" }}>
          {validItems.map((item, index) => (
            <div
              key={`carousel-item-${index}`}
              className={`carousel-item position-relative w-100 ${
                index === 0 ? "active" : ""
              }`}
              style={{ height: "100%" }}
            >
              <Image
                src={`${basePath}${item.src}`}
                alt={item.alt}
                fill
                sizes="100%"
                style={{ objectFit: "cover" }}
                priority={index === 0}
                unoptimized
              />
              <div
                className="carousel-caption d-none d-md-block w-100 position-absolute p-0"
                style={{
                  bottom: "0",
                  left: 0,
                }}
              >
                <h5
                  className="rounded p-3 m-0"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.5)",
                  }}
                >
                  {item.caption}
                </h5>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
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
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
