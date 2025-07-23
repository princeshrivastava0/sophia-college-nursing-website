import { useRouter } from "next/router";
import Image from "next/image";
function HeroSection() {
  const router = useRouter();
  const { basePath } = router;

  return (
    <section
      id="hero-section"
      className="d-flex justify-content-center align-items-center pt-5"
      style={{ border: "5px solid blue", height: "100vh" }}
    >
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade w-100 pt-5"
        data-bs-ride="carousel"
        data-bs-interval="2000"
        data-bs-pause="hover"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" style={{ height: "80vh" }}>
          <div
            className="carousel-item active position-relative w-100"
            style={{ height: "100%" }}
          >
            <Image
              src={`${basePath}/event-images/international-yoga-day-2025/1.jpeg`}
              alt="Yoga"
              fill
              style={{ objectFit: "cover" }} // Ensures the image covers the area
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>International Yoga Day - 2025</h5>
              <p>Slide 1</p>
            </div>
          </div>
          <div
            className="carousel-item position-relative w-100"
            style={{ height: "100%" }}
          >
            <Image
              src={`${basePath}/event-images/international-yoga-day-2025/2.jpeg`}
              alt="Yoga"
              fill
              style={{ objectFit: "cover" }} // Ensures the image covers the area
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>International Yoga Day - 2025</h5>
              <p>Slide 2</p>
            </div>
          </div>
          <div
            className="carousel-item position-relative w-100"
            style={{ height: "100%" }}
          >
            <Image
              src={`${basePath}/event-images/international-yoga-day-2025/3.jpeg`}
              alt="Yoga"
              fill
              style={{ objectFit: "cover" }} // Ensures the image covers the area
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>International Yoga Day - 2025</h5>
              <p>Slide 3</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
          data-bs-target="#carouselExampleCaptions"
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
