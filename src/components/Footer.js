import Link from "next/link";
import { useRouter } from "next/router";
import { use } from "react";

function Footer() {
  const router = useRouter();
  const { basePath } = router;

  const quickLinks = [
    {
      title: "Home",
      path: "#",
    },
    {
      title: "Chairperson's Desk",
      path: "#",
    },
    {
      title: "Staff",
      path: "#",
    },
    {
      title: "Courses",
      path: "#",
    },
    {
      title: "Admission",
      path: "#",
    },
    {
      title: "Gallery",
      path: "#",
    },
    {
      title: "Contact Us",
      path: "#",
    },
  ];

  return (
    <>
      <style jsx>{`
        .footer-wrapper {
        }
      `}</style>
      <footer
        className="footer-wrapper d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: "#000000" }}
      >
        <div
          className="d-flex justify-content-evenly align-items-start py-5"
          style={{
            color: "#fff",
            width: "80%",
          }}
        >
          {/* Quick Links Container */}
          <div className="d-flex flex-column justify-content-center align-items-start">
            <h6
              style={{
                fontWeight: "900",
                fontSize: "1.25rem",
                letterSpacing: "1px",
              }}
            >
              Quick Links
            </h6>
            {quickLinks.map((link, index) => {
              return (
                <span key={`link-${index}`} className="m-1">
                  <Link
                    href={link.path}
                    className="text-decoration-none text-white"
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      letterSpacing: "1px",
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
            style={{
              width: "33%",
            }}
          >
            <h6
              style={{
                fontWeight: 900,
                fontSize: "1.25rem",
                letterSpacing: "1px",
              }}
            >
              Contact Us
            </h6>
            {/* Address */}
            <span
              className="d-inline-block m-1 me-4 mb-3"
              style={{
                textAlign: "justify",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              <i
                className="bi bi-geo-alt-fill me-2"
                style={{ fontSize: "1rem", color: "#e74c3c" }}
              ></i>
              Madhav Rao Sindhia Road, Opp. R I Training Center, Mahalgoan,City
              Center, Gwalior (M.P.), PIN-474002
            </span>

            {/* Contact Number */}
            <span
              className="d-inline-block m-1 me-4 mb-3"
              style={{
                textAlign: "justify",
                fontSize: "0.9rem",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              <i
                className="bi bi-telephone-inbound-fill me-2"
                style={{ fontSize: "1rem", color: "#e74c3c" }}
              ></i>
              <a
                href="tel:+917512230522"
                className="text-decoration-none text-white"
                style={{ fontWeight: "600", letterSpacing: "2px" }}
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

            {/* Contact-Email */}
            <span
              className="d-inline-block m-1 me-4 mb-3"
              style={{
                textAlign: "justify",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              <i
                className="bi bi-envelope-fill me-2"
                style={{ fontSize: "1rem", color: "#e74c3c" }}
              ></i>
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
              className="d-inline-block m-1 me-4 mb-3"
              style={{
                textAlign: "justify",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              <i
                className="bi bi-globe me-2"
                style={{ fontSize: "1rem", color: "#e74c3c" }}
              ></i>
              <a
                href="https://www.sophiainstitutes.com/nursing"
                target="_blank"
                aria-label="Sophia Nursing College Website"
                className="text-decoration-none text-white"
                style={{ fontWeight: "600", letterSpacing: "1px" }}
              >
                www.sophiainstitutes.com/nursing
              </a>
            </span>
          </div>

          {/* Google Map Container */}
          <div>
            <h6
              style={{
                fontWeight: 900,
                fontSize: "1.25rem",
                letterSpacing: "1px",
              }}
            >
              Locate Us
            </h6>
            <iframe
              className="m-1 mt-2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1789.928251123118!2d78.18742760102903!3d26.20134587389154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c41080b1bf71%3A0xd043ea0f3ffebe7b!2sSophia%20Nursing%20College!5e0!3m2!1sen!2sin!4v1753351351070!5m2!1sen!2sin"
              width="380px"
              height="200px"
              style={{ border: 0, borderRadius: "5px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* copyright */}
        <div
          className="py-5 d-flex flex-column align-items-center justify-content-center mx-auto"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.3)",
            width: "80%",
          }}
        >
          <h6
            className="d-flex d-md-block flex-column justify-content-center align-items-center"
            style={{
              fontSize: "0.8rem",
              color: "#fff",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            Copyright &copy; {new Date().getFullYear()}{" "}
          </h6>
          <a
            href="https://www.princeshrivastava.com"
            className="text-decoration-none fw-bold my-2 my-md-0"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.8rem",
              color: "#fff",
              fontWeight: "400",
            }}
            title="www.princeshrivastava.com"
          >
            Designed & Developed by{" "}
            <span
              style={{
                fontSize: "0.8rem",
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
