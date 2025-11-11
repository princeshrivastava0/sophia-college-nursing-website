import { useState, useEffect } from "react";
import Title from "../Title";
import AboutUs from "./about";

function DiscoverDetails({ query }) {
  const headingMap = {
    about: "About Us",
    staff: "Our Staff",
  };

  const heading = headingMap[query] || "About Us";

  return (
    <>
      <style jsx>{`
        .details-container {
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
          <AboutUs />
        </div>
      </section>
    </>
  );
}

export default DiscoverDetails;
