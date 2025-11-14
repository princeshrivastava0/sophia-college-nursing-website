import Link from "next/link";

function ContactBanner() {
  const ContactDetails = [
    {
      icon: "bi bi-telephone-inbound-fill me-1",
      text: "0751-2230522",
    },
    { icon: "bi bi-phone-fill", text: "9522288213" },
  ];
  return (
    <>
      <style jsx>{`
        .contact_banner {
          height: 30px;
          background-color: #e74c3c;
          color: #fff;
          overflow: hidden;
          z-index: 99;
          max-width: 2000px;
        }

        @media screen and (max-width: 350px) {
          .banner-item-margin {
            margin: 0 2rem !important;
          }
        }
      `}</style>
      <div
        className="position-fixed"
        style={{
          backgroundColor: "#e74c3c",
          height: "30px",
          top: "0px",
          right: "0px",
          left: "0px",
          zIndex: "99",
        }}
      >
        <div
          className="contact_banner w-100 position-fixed d-flex align-items-center justify-content-center justify-content-md-end mx-auto"
          style={{
            top: "0px",
            right: "0px",
            left: "0px",
          }}
        >
          <div className="d-flex align-items-center mx-5 banner-item-margin">
            {ContactDetails.map((details, index) => {
              return (
                <span
                  className="d-flex align-items-center"
                  key={`contact-${index}`}
                >
                  <span
                    className={`d-flex align-items-center ${
                      index < 1 ? "me-2" : "ms-2"
                    }`}
                  >
                    <i
                      className={`${details.icon} me-1`}
                      style={{ fontSize: "13px", fontWeight: 900 }}
                    ></i>

                    <Link
                      href={`tel:${details.text}`}
                      className="text-white text-decoration-none"
                      style={{ fontSize: "13px", margin: "0", fontWeight: 600 }}
                    >
                      {details.text}{" "}
                    </Link>
                  </span>
                  {index < 1 && "|"}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactBanner;
