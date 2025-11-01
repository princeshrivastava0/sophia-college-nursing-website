import Image from "next/image";

function DiscoverMore() {
  const card_data = [
    {
      title: "About Us",
      info: "this is card info",
      nav: "/aboutus",
      image: "https://www.freepik.com/vectors/staff",
      alt: "card-1",
    },
    {
      title: "Staff",
      info: "this is card info",
      nav: "/aboutus",
      image: "https://www.freepik.com/vectors/staff",
      alt: "card-2",
    },
    {
      title: "Card 3",
      info: "this is card info",
      nav: "/aboutus",
      image: "https://www.freepik.com/vectors/staff",
      alt: "card-3",
    },
    {
      title: "Card 4",
      info: "this is card info",
      nav: "/aboutus",
      image: "https://www.freepik.com/vectors/staff",
      alt: "card-4",
    },
  ];

  return (
    <>
      <style jsx>{`
        .card-custom {
          width: 200px;
          height: 300px;
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
        }

        .card-container {
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 2rem;
          place-items: center;
          max-width: 1000px;
        }

        @media screen and (max-width: 767px) {
          .card-container {
            grid-template-columns: repeat(1, 1fr);
          }

          .card-custom {
            width: 300px;
          }
        }

        @media screen and (min-width: 768px) and (max-width: 992px) {
          .card-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .card-custom {
            width: 300px;
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
                className={`card-custom rounded-4 card-${index} `}
                style={{ overflow: "hidden", cursor: "pointer" }}
              >
                {/* Title */}
                <h4
                  className="fw-bold py-lg-2 py-3 m-0"
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.25)" }}
                >
                  {card.title}
                </h4>
                {/* Image */}
                <div
                  style={{
                    border: "1px solid red",
                    height: "150px",
                    width: "100%",
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    unoptimized
                    sizes="100%"
                    style={{ objectFit: "cover" }}
                  />
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
