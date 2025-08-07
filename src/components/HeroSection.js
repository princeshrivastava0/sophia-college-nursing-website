import { useRouter } from "next/router";
import Image from "next/image";

function HeroSection() {
  const router = useRouter();
  const { basePath } = router;

  const heroCarouselItems = [
    {
      src: `${basePath}/event-images/international-yoga-day-2025/1.jpeg`,
      alt: "Yoga",
      caption: "International Yoga Day - 2025",
      sub_Caption: "Slide 1",
    },
    {
      src: `${basePath}/event-images/international-yoga-day-2025/2.jpeg`,
      alt: "Yoga",
      caption: "International Yoga Day - 2025",
      sub_Caption: "Slide 2",
    },
    {
      src: `${basePath}/event-images/international-yoga-day-2025/3.jpeg`,
      alt: "Yoga",
      caption: "International Yoga Day - 2025",
      sub_Caption: "Slide 3",
    },
  ];

  return (
    <section
      id="hero-section"
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100%" }}
    >
      <div
        id="heroCarousel"
        className={`carousel slide carousel-fade w-100 pointer-event`}
        data-bs-ride="carousel"
        data-bs-interval="2000"
        data-bs-pause="hover"
      >
        <div className="carousel-indicators">
          {heroCarouselItems.map((item, index) => {
            return (
              <button
                key={`indicator-btn-${index}`}
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index}`}
              ></button>
            );
          })}
        </div>
        <div className="carousel-inner" style={{ height: "87vh" }}>
          {heroCarouselItems.map((item, index) => {
            return (
              <div
                key={`carousel-item-${index}`}
                className={`carousel-item position-relative w-100 ${
                  index === 0 ? "active" : ""
                }`}
                style={{ height: "100%" }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="100%"
                  style={{ objectFit: "cover" }} // Ensures the image covers the area
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{item.caption}</h5>
                  <p>{item.sub_Caption}</p>
                </div>
              </div>
            );
          })}
        </div>
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
