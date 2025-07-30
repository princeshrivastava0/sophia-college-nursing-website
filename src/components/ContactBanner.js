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
          height: 25px;
          background-color: #e74c3c;
          color: #fff;
          z-index: 999;
          overflow: hidden;
        }
      `}</style>
      <div className="contact_banner position-fixed w-100 d-flex align-items-center justify-content-center justify-content-md-end px-3">
        <div className="d-flex align-items-center px-3 mx-2">
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
    </>
  );
}

export default ContactBanner;
