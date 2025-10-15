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
          border: 1px solid black;
          width: 250px;
          height: 400px;
        }
      `}</style>
      <section
        id="discover-more"
        className="py-5"
        style={{ backgroundColor: "#d6d6d654" }}
      >
        {/* Card Container */}
        <div
          className="d-flex justify-content-between align-items-center px-0 p-5 mx-auto"
          style={{ maxWidth: "1200px" }}
        >
          {/* Card */}
          {card_data.map((card, index) => {
            return (
              <div
                key={`card-${index}`}
                className="card-custom rounded shadow mx-3"
                style={{ overflow: "hidden", cursor: "pointer" }}
              >
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

                {/* Title */}
                <h4
                  className="text-center my-3 fw-bold pb-2 mx-auto"
                  style={{ borderBottom: "5px double black", width: "80%" }}
                >
                  {card.title}
                </h4>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default DiscoverMore;
