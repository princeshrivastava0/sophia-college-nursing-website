import { useState, useEffect } from "react";
import Title from "../Title";
import AboutUs from "./about";
import Image from "next/image";
import { useRouter } from "next/router";

function DiscoverDetails({ query }) {
  const router = useRouter();
  const { basePath } = router;

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

        .logo {
          height: 250px;
          width: 250px;
          float: left;
          border-radius: 50%;
          overflow: hidden;
          shape-outside: circle();
          webkit-shape-utside: circle();
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
          border: 2px solid rgba(0, 0, 0, 0.3);
        }

        @media screen and (max-width: 767.98px) {
          .details-container {
            width: 95vw;
          }
          .logo {
            float: none;
            margin-left: auto !important;
            margin-right: auto !important;
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
        <div className="details-container mx-auto my-md-5 my-4 px-3">
          {/* Logo */}
          <div className="position-relative mb-4 mb-md-0 me-5 logo">
            <Image
              src={`${basePath}/favicon.png`}
              alt="Sophia-Nursing-College-Logo"
              style={{ objectFit: "contain" }}
              fill
            />
          </div>
          <AboutUs />
        </div>
      </section>
    </>
  );
}

export default DiscoverDetails;
