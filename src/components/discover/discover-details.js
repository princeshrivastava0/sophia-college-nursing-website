import { useEffect, useState } from "react";
import Title from "../Title";
import AboutUs from "./about";
import Staff from "./staff";
import Archives from "./archives";
import { useRouter } from "next/router";

function DiscoverDetails({ query }) {
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

    switch (query) {
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

  return (
    <>
      <style jsx>{`
        .details-container {
          // min-height: 100vh;
          width: 75%;
        }

        @media screen and (max-width: 767.98px) {
          .details-container {
            width: 95vw;
          }
        }

        @media screen and (min-width: 767.99px) and (max-width: 1300px) {
          .details-container {
            width: 90vw;
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
