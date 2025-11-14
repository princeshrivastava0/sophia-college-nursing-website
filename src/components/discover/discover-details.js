import { useEffect, useState } from "react";
import Title from "../Title";
import AboutUs from "./about";
import Staff from "./staff";
import Archives from "./archives";
import Notice from "./notice";
import { useRouter } from "next/router";

function DiscoverDetails() {
  const router = useRouter();
  const { type } = router.query;

  const [discoverCard, setDiscoverCard] = useState(null);
  const loader = (
    <div
      className="w-100 d-flex justify-content-center align-items-center"
      style={{ height: "calc(100dvh - 100px)" }}
    >
      <div
        className="spinner-border text-danger"
        role="status"
        style={{ height: "5rem", width: "5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  useEffect(() => {
    if (!router.isReady) return;

    if (!type) {
      router.replace("/#discover-more");
      return;
    }

    switch (type) {
      case "about":
        setDiscoverCard({
          heading: "About Us",
          card: <AboutUs />,
        });
        break;
      case "staff":
        setDiscoverCard({
          heading: "Our Staff",
          card: <Staff />,
        });
        break;
      case "notice":
        setDiscoverCard({
          heading: "Notice / Circulars",
          card: <Notice />,
        });
        break;
      case "archives":
        setDiscoverCard({
          heading: "Archives",
          card: <Archives />,
        });
        break;
      default:
        router.replace("/#discover-more");
    }
  }, [router.isReady, type, router]);

  const cardNav = [
    {
      title: "About Us",
      query: "about",
    },
    {
      title: "Staff",
      query: "staff",
    },
    {
      title: "Notice / Circular",
      query: "notice",
    },
    {
      title: "Archives",
      query: "archives",
    },
  ];

  return (
    <>
      <style jsx>{`
        .details-container {
          width: 75%;
        }

        .nav-btn {
          transition: transform 0.35s ease;
          background: #1e1e1e;
          color: #ffffff;
          flex: 0 0 auto;
          white-space: nowrap;
        }

        .nav-btn:hover {
          transform: scale(1.1);
        }

        .active-btn {
          background-color: #e74c3c;
          color: #fff;
        }

        @media screen and (max-width: 767.98px) {
          .details-container {
            width: 95vw;
          }

          .nav-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            width: 90vw;
            justify-items: center;
          }

          .nav-btn {
            width: 100%;
            font-size: 14px;
            margin: 0 !important;
          }

          .nav-btn:hover {
            transform: scale(1);
          }
        }

        @media screen and (min-width: 767.99px) and (max-width: 1300px) {
          .details-container {
            width: 90vw;
          }
        }

        @media screen and (max-width: 325px) {
          .nav-container {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
      <section
        id="discover-details"
        style={{
          paddingTop: "100px",
        }}
      >
        {!discoverCard ? (
          <>{loader}</>
        ) : (
          <>
            {/* Heading */}
            <Title title={`${discoverCard.heading}`} />
            {/* Card Navigation */}
            <div className="mx-auto mt-4 nav-container d-grid d-md-flex justify-content-md-center align-items-md-center">
              {cardNav.map((card, index) => {
                return (
                  <button
                    key={`card-${index}`}
                    onClick={() => {
                      router.push(`/discover?type=${card.query}`, undefined, {
                        shallow: true,
                      });
                    }}
                    className={`px-4 py-2 rounded-5 mx-md-3 m-1 border-0 outline-0 fw-bold shadow nav-btn ${
                      type === card.query ? "active-btn" : ""
                    }`}
                  >
                    {card.title}
                  </button>
                );
              })}
            </div>
            <div className="details-container mx-auto my-5 px-3">
              {discoverCard.card}
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default DiscoverDetails;
