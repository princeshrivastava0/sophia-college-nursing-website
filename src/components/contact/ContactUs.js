import Title from "../Title";

function ContactUs() {
  const ContactDetails = [
    {
      heading: "Principal of Nursing",
      email: "principal.nursing@sophiainstitutes.com",
      phone: "+91-9522288212",
      icon: "bi-person-circle",
      single: true,
    },
    {
      heading: "Admission Cell",
      email: "hr@sophiainstitutes.com",
      phone: "+91-9522288213",
      icon: "bi-info-circle-fill",
      single: false,
    },
    {
      heading: "Account Cell",
      email: "accounts@sophiainstitutes.com",
      phone: "+91-751-2230522",
      icon: "bi-info-circle-fill",
      single: false,
    },
  ];
  return (
    <>
      <style jsx>{`
        .details-container {
          width: 75%;
        }

        .google-map {
          width: 100%;
          height: 400px;
        }

        .quick-contacts {
          grid-template-columns: 1fr 1fr;
        }

        .grid-row-0 {
          grid-row: 1;
          grid-column: 1 / 3;
        }

        .address-phone-grid-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .row-1-address,
        .row-2-phone {
          grid-row: 1;
          width: 100%;
        }

        @media screen and (max-width: 767px) {
          .details-container {
            width: 95vw;
          }

          .quick-contacts {
            grid-template-columns: 1fr;
          }

          .grid-row-0 {
            width: 100% !important;
          }

          .grid-row-1 {
            grid-column: 1 / 3;
          }

          .address-phone-grid-container {
            grid-template-columns: 1fr;
          }

          .row-1-address {
            grid-row: 1;
          }
          .row-2-phone {
            grid-row: 2;
          }

          .mobile-heading {
            font-size: 1.25rem !important;
          }

          .mobile-text {
            letter-spacing: 0 !important;
            word-break: break-all;
            font-size: 0.95rem;
          }
        }

        @media screen and (min-width: 767px) and (max-width: 1300px) {
          .details-container {
            width: 90vw;
          }

          .grid-row-0 {
            width: 100% !important;
          }
        }
      `}</style>

      <section
        id="contact-us"
        style={{
          paddingTop: "100px",
        }}
      >
        {/* Heading */}
        <Title title="Get In Touch" />

        {/* Quick Contacts */}
        <div
          className={`details-container mx-auto mt-md-5 mt-4 ps-3 px-md-3 d-grid quick-contacts`}
        >
          {ContactDetails.map((contactInfo, index) => {
            return (
              <div
                key={`contact-${index}`}
                style={{
                  width: contactInfo.single ? "50%" : "100%",
                }}
                className={`grid-row-${index} mb-md-5 mb-4`}
              >
                {/* Heading */}
                <div className="d-flex align-items-center mx-auto">
                  <i
                    className={`bi ${contactInfo.icon}`}
                    style={{
                      fontSize: "1.25rem",
                      color: "#e74c3c",
                    }}
                  ></i>
                  <h3
                    className="m-0 ms-2 fw-bold mobile-heading"
                    style={{
                      fontSize: "1.5rem",
                      borderBottom: "1px solid rgba(0,0,0,0.25)",
                      letterSpacing: "1px",
                    }}
                  >
                    {contactInfo.heading}
                  </h3>
                </div>
                {/* Details */}
                <span className="px-0 ps-1 px-md-4 mx-md-2 mt-2 d-flex flex-column justify-content-center">
                  {/* Phone Number */}
                  <span>
                    <i
                      className="bi bi-phone-fill me-2"
                      style={{ fontSize: "0.9rem", color: "#e74c3c" }}
                    ></i>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-decoration-none text-black m-0 mobile-text"
                      style={{
                        letterSpacing: "1px",
                        textAlign: "left",
                        fontWeight: "500",
                      }}
                    >
                      {contactInfo.phone}
                    </a>
                  </span>
                  {/* Email */}
                  <span className="d-flex">
                    <i
                      className="bi bi-envelope-fill me-2"
                      style={{ fontSize: "0.9rem", color: "#e74c3c" }}
                    ></i>

                    <span>
                      <a
                        href={`mailto:${contactInfo.email}?subject=Inquiry&body=Hello, I would like to...`}
                        aria-label="Send an email to Sophia Nursing College"
                        className="text-decoration-none text-black mobile-text"
                        style={{
                          letterSpacing: "1px",
                          textAlign: "left",
                          fontWeight: "500",
                        }}
                      >
                        {contactInfo.email}
                      </a>
                    </span>
                  </span>
                </span>
              </div>
            );
          })}
        </div>

        {/* Address-Phone Container */}
        <div className="details-container mx-auto ps-3 px-md-3 address-phone-grid-container">
          {/* Address Container*/}
          <div className="mx-auto row-1-address mb-4 mb-md-0">
            {/* Address Heading */}
            <div className="d-flex align-items-center mx-auto">
              <i
                className="bi bi-globe-central-south-asia"
                style={{
                  fontSize: "1.25rem",
                  color: "#e74c3c",
                }}
              ></i>
              <h3
                className="m-0 ms-2 fw-bold mobile-heading"
                style={{
                  fontSize: "1.5rem",
                  borderBottom: "1px solid rgba(0,0,0,0.25)",
                  letterSpacing: "1px",
                }}
              >
                Our Address
              </h3>
            </div>
            {/* Address Details  */}
            <span className="px-4 mx-md-2 mt-2 d-inline-block">
              <p
                style={{
                  textAlign: "left",
                  fontWeight: "500",
                  letterSpacing: "0.5px",
                }}
                className="m-0 mobile-text"
              >
                Madhav Rao Scindia Road, Opp. R I Training Center, Mahalgoan,
                City Center, Gwalior (M.P.), PIN-474002
              </p>
            </span>
          </div>

          {/* Phone Info Container */}
          <div className="mx-auto row-2-phone">
            {/* Phone Info Heading */}
            <div className="d-flex align-items-center mx-auto">
              <i
                className="bi bi-telephone-fill"
                style={{
                  fontSize: "1.25rem",
                  color: "#e74c3c",
                }}
              ></i>
              <h3
                className="m-0 ms-2 fw-bold mobile-heading"
                style={{
                  fontSize: "1.5rem",
                  borderBottom: "1px solid rgba(0,0,0,0.25)",
                  letterSpacing: "1px",
                }}
              >
                Our Contact Info
              </h3>
            </div>
            {/* Contact Details */}

            <span className="px-0 ps-1 px-md-4 mx-md-2 mt-2 d-flex flex-column">
              {/* Phone Number */}
              <span className="mobile-text d-flex">
                <i
                  className="bi bi-phone-fill me-2"
                  style={{ fontSize: "0.9rem", color: "#e74c3c" }}
                ></i>
                <span className="d-flex flex-wrap">
                  <a
                    href="tel:+917512230522"
                    className="text-decoration-none text-black m-0 mobile-text"
                    style={{
                      letterSpacing: "1px",
                      textAlign: "left",
                      fontWeight: "500",
                    }}
                  >
                    +91-751-2230522
                  </a>
                  &nbsp;,&nbsp;
                  <a
                    href="tel:+919522288213"
                    className="text-decoration-none text-black mobile-text"
                    style={{
                      letterSpacing: "1px",
                      textAlign: "left",
                      fontWeight: "500",
                    }}
                  >
                    +91-9522288213
                  </a>
                </span>
              </span>
              {/* Email */}
              <span className="mobile-text">
                <i
                  className="bi bi-envelope-fill me-2"
                  style={{ fontSize: "0.9rem", color: "#e74c3c" }}
                ></i>

                <a
                  href="mailto:hr@sophiainstitutes.com?subject=Inquiry&body=Hello, I would like to..."
                  aria-label="Send an email HR of Sophia Nursing College"
                  className="text-decoration-none text-black"
                  style={{
                    letterSpacing: "1px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  hr@sophiainstitutes.com
                </a>
              </span>
            </span>
          </div>
        </div>

        {/* GoogleMap Container*/}
        <div className="mx-auto my-md-5 my-4 details-container px-3">
          {/* Heading */}
          <div className="d-flex align-items-center mx-auto">
            <i
              className="bi bi-geo-alt-fill"
              style={{
                fontSize: "1.25rem",
                color: "#e74c3c",
              }}
            ></i>
            <h3
              className="m-0 ms-2 fw-bold mobile-heading"
              style={{
                fontSize: "1.5rem",
                borderBottom: "1px solid rgba(0,0,0,0.25)",
                letterSpacing: "1px",
              }}
            >
              Locate Us
            </h3>
          </div>
          {/* Map */}
          <span className="mt-3 d-flex">
            <iframe
              className="google-map rounded-5 shadow"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1789.928251123118!2d78.18742760102903!3d26.20134587389154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c41080b1bf71%3A0xd043ea0f3ffebe7b!2sSophia%20Nursing%20College!5e0!3m2!1sen!2sin!4v1753351351070!5m2!1sen!2sin"
              style={{ border: 0, borderRadius: "5px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </span>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
