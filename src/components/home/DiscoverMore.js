import Image from "next/image";
import { useRouter } from "next/router";

function DiscoverMore() {
  const router = useRouter();
  const { basePath } = router;
  const card_data = [
    {
      title: "About Us",
      nav: "/discover",
      param: "about",
      logo: `${basePath}/about-us-logo.jpg`,
      alt: "about-us-logo",
      info: "this is card info",
    },
    {
      title: "Staff",
      nav: "/discover",
      param: "staff",
      logo: `${basePath}/staff-logo.jpg`,
      alt: "staff-logo",
      info: "this is card info",
    },
    {
      title: "Card 3",
      nav: "/discover",
      param: "about",
      logo: `${basePath}/staff-logo.jpg`,
      alt: "card-3",
      info: "this is card info",
    },
    {
      title: "Card 4",
      nav: "/discover",
      param: "about",
      logo: `${basePath}/staff-logo.jpg`,
      alt: "card-4",
      info: "this is card info",
    },
  ];

  const discoverDetails = (param) => {
    router.push({
      pathname: "/discover",
      query: {
        type: param,
      },
    });
  };

  return (
    <>
      <style jsx>{`
        .card-custom {
          width: 250px;
          height: 250px;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        /* Hover effect */
        .card-custom:hover {
          transform: translateY(-8px) scale(1.03);

          box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
        }

        .card-container {
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 2rem;
          place-items: center;
          max-width: 1200px;
        }

        .card-img {
          height: 100%;
          width: 100%;
        }

        @media screen and (max-width: 767.98px) {
          .card-container {
            grid-template-columns: repeat(1, 1fr);
          }

          .card-custom {
            width: 90%;
            max-width: 400px;
          }
        }

        @media screen and (min-width: 767.99px) and (max-width: 1200px) {
          .card-container {
            grid-template-columns: repeat(2, 1fr);
            max-width: 600px;
          }

          .card-2,
          .card-3 {
            grid-row: 2;
          }
        }
      `}</style>
      <section
        id="discover-more"
        className="p-5 px-2 px-md-5 text-center w-100"
        style={{ backgroundColor: "#d6d6d654" }}
      >
        <h2
          className="fw-bold mb-3 text-center"
          style={{
            textTransform: "uppercase",
            color: "#e74c3c",
            filter: "drop-shadow(0 0 0.10rem #e74c3c)",
          }}
        >
          Discover More
        </h2>
        {/* Card Container */}
        <div className="d-grid card-container mx-auto p-3">
          {/* Card */}
          {card_data.map((card, index) => {
            return (
              <div
                key={`card-${index}`}
                className={`card-custom card-${index} position-relative `}
                style={{
                  overflow: "hidden",
                  cursor: "pointer",
                  backgroundColor: "#fff",
                }}
                onClick={() => discoverDetails(card.param)}
              >
                {/* Image */}
                <div className="position-relative card-img">
                  <Image
                    src={card.logo}
                    alt={card.alt}
                    fill
                    sizes="100%"
                    style={{ objectFit: "contain" }}
                    className="pb-5 pb-md-0"
                  />
                </div>

                {/* Explore */}
                <div
                  className="w-100 fw-bold d-flex justify-content-center align-items-center position-absolute"
                  style={{
                    height: "55px",
                    backgroundColor: "#e74c3c",
                    color: "#fff",
                    fontSize: "1.25rem",
                    bottom: 0,
                    left: 0,
                  }}
                >
                  {card.title}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default DiscoverMore;
