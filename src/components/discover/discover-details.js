import { useState, useEffect } from "react";
import Title from "../Title";
import AboutUs from "./about";
import Staff from "./staff";

function DiscoverDetails({ query }) {
  const headingMap = {
    about: "About Us",
    staff: "Our Staff",
  };

  let discoverCard = <AboutUs />;

  switch (query) {
    case "about":
      discoverCard = <AboutUs />;
      break;
    case "staff":
      discoverCard = <Staff />;
      break;
    default:
      discoverCard = <AboutUs />;
  }

  const heading = headingMap[query] || "About Us";

  return (
    <>
      <style jsx>{`
        .details-container {
          min-height: 100vh;
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
        {/* Heading */}
        <Title title={`${heading}`} />
        <div className="details-container mx-auto my-5 px-3">
          {discoverCard}
        </div>
      </section>
    </>
  );
}

export default DiscoverDetails;
