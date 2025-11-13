import Link from "next/link";
import { useState } from "react";

function Footer() {
  const [hoverLink, setHoverLink] = useState(null);
  const quickLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Courses",
      path: "/courses",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
    {
      title: "Discover",
      path: "/#discover-more",
    },
    {
      title: "Get in touch",
      path: "/contact",
    },
  ];

  return (
    <>
      <style jsx>{`
        .google-map-width {
          width: 380px;
        }

        .contact-text-align {
          text-align: justify;
        }

        .quick-links {
          color: #e74c3c !important;
        }

        @media screen and (max-width: 767px) {
          .footer-row-1-items {
            width: 100% !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          }

          .google-map-width {
            width: 100%;
            margin: 0 !important;
          }

          .contact-text-align {
            text-align: left !important;
          }
        }

        @media screen and (min-width: 767px) and (max-width: 1280px) {
          .contact-text-align {
            text-align: left !important;
          }

          .footer-row-1-items {
            width: 40%;
          }

          .footer-row-1-items:nth-child(2) {
            width: 60% !important;
          }

          .footer-row-1-items:nth-child(3) {
            width: 100% !important;
            border-top: 1px solid rgba(255, 255, 255, 0.3) !important;
            padding-top: 20px !important;
            margin-top: 20px !important;
          }

          .google-map-width {
            width: 100% !important;
            margin: 0 !important;
          }
        }
      `}</style>
      <footer
        className="footer-wrapper d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: "#000000" }}
      >
        <div
          className="d-flex  flex-row flex-wrap justify-content-evenly align-items-center align-items-md-start py-4 mt-1 py-md-5"
          style={{
            color: "#fff",
            width: "80%",
          }}
        >
          {/* Quick Links Container */}
          <div className="footer-row-1-items d-flex flex-column align-items-start pb-3 pb-md-0">
            <h6
              className="mb-4 mb-md-3"
              style={{
                fontWeight: "900",
                fontSize: "1.25rem",
                letterSpacing: "1px",
                textDecoration: "underline",
              }}
            >
              Quick Links
            </h6>
            {quickLinks.map((link, index) => {
              return (
                <span
                  key={`link-${index}`}
                  className="d-inline-block m-0 ms-md-1 mb-2"
                  style={{ cursor: "pointer" }}
                >
                  <Link
                    href={link.path}
                    className="text-decoration-none quick-links"
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      color: hoverLink === link.path ? "#e74c3c" : "#fff",
                    }}
                    onMouseEnter={() => setHoverLink(link.path)}
                    onMouseLeave={() => {
                      setHoverLink(null);
                    }}
                  >
                    {link.title}
                  </Link>
                </span>
              );
            })}
          </div>

          {/* Contact Container */}
          <div
            className="footer-row-1-items py-3 py-md-0"
            style={{
              width: "33%",
            }}
          >
            <h6
              className="text-start mb-4 mb-md-3"
              style={{
                fontWeight: 900,
                fontSize: "1.25rem",
                letterSpacing: "1px",
                textDecoration: "underline",
              }}
            >
              Contact Us
            </h6>
            {/* Address */}
            <span
              className="d-flex contact-text-align mb-3"
              style={{
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              <span className="ms-md-1 me-2">
                <i
                  className="bi bi-geo-alt-fill"
                  style={{
                    fontSize: "1rem",
                    color: "#e74c3c",
                  }}
                ></i>
              </span>

              <span
                style={{
                  fontWeight: "600",
                }}
              >
                Madhav Rao Scindia Road, Opp. R I Training Center,
                Mahalgoan,City Center, Gwalior (M.P.), PIN-474002
              </span>
            </span>

            {/* Contact Number */}
            <span
              className="d-flex mb-3 contact-text-align"
              style={{
                fontSize: "0.9rem",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              <span className="ms-md-1 me-2">
                <i
                  className="bi bi-telephone-inbound-fill"
                  style={{ fontSize: "1rem", color: "#e74c3c" }}
                ></i>
              </span>
              <span className="d-flex flex-wrap">
                <a
                  href="tel:+917512230522"
                  className="text-decoration-none text-white"
                  style={{ fontWeight: "600", letterSpacing: "1px" }}
                >
                  0751-2230522
                </a>
                &nbsp;,&nbsp;
                <a
                  href="tel:+919522288213"
                  className="text-decoration-none text-white"
                  style={{ fontWeight: "600", letterSpacing: "2px" }}
                >
                  +91-9522288213
                </a>
              </span>
            </span>

            {/* Contact-Email */}
            <span
              className="d-block mb-3"
              style={{
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              <span className="ms-md-1 me-2">
                <i
                  className="bi bi-envelope-fill"
                  style={{ fontSize: "1rem", color: "#e74c3c" }}
                ></i>
              </span>

              <a
                href="mailto:hr@sophiainstitutes.com?subject=Inquiry&body=Hello, I would like to..."
                aria-label="Send an email HR of Sophia Nursing College"
                className="text-decoration-none text-white"
                style={{ fontWeight: "600", letterSpacing: "1px" }}
              >
                hr@sophiainstitutes.com
              </a>
            </span>

            {/* Nursing College Website URL */}
            <span
              className="d-flex"
              style={{
                textAlign: "justify",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              <span className="ms-md-1 me-2">
                <i
                  className="bi bi-globe"
                  style={{ fontSize: "1rem", color: "#e74c3c" }}
                ></i>
              </span>

              <a
                href="https://www.sophiainstitutes.com/nursing"
                target="_blank"
                aria-label="Sophia Nursing College Website"
                className="text-decoration-none text-white"
                style={{ fontWeight: "600", letterSpacing: "1px" }}
              >
                www.sophiainstitutes.com
              </a>
            </span>
          </div>

          {/* Google Map Container */}
          <div
            className="footer-row-1-items text-start pt-3 py-md-0"
            style={{ border: "none" }}
          >
            <h6
              className="mb-4 mb-md-3"
              style={{
                fontWeight: 900,
                fontSize: "1.25rem",
                letterSpacing: "1px",
                textDecoration: "underline",
              }}
            >
              Locate Us
            </h6>
            <iframe
              className="google-map-width pt-1"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1789.928251123118!2d78.18742760102903!3d26.20134587389154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c41080b1bf71%3A0xd043ea0f3ffebe7b!2sSophia%20Nursing%20College!5e0!3m2!1sen!2sin!4v1753351351070!5m2!1sen!2sin"
              height="200px"
              style={{ border: 0, borderRadius: "5px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* copyright */}
        <div
          className="py-3 d-flex flex-column align-items-center justify-content-center mx-auto"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.3)",
            width: "80%",
          }}
        >
          <h6
            className="d-flex d-md-block flex-column justify-content-center align-items-center"
            style={{
              fontSize: "0.7rem",
              color: "#fff",
              fontWeight: "600",
              letterSpacing: "1px",
              textAlign: "center",
            }}
          >
            &copy; {new Date().getFullYear()} Sophia Institutes of Medical
            Science <br />
            All rights reserved
          </h6>
          <a
            href="https://www.princeshrivastava.com"
            className="text-decoration-none fw-bold my-2 my-md-0 d-flex flex-wrap justify-content-center align-items-center"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.7rem",
              color: "#fff",
              fontWeight: "400",
            }}
            title="www.princeshrivastava.com"
          >
            Designed & Developed by &nbsp;
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: "700",
                textDecoration: "underline",
                letterSpacing: "0.5px",
              }}
            >
              Prince Shrivastava
            </span>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
