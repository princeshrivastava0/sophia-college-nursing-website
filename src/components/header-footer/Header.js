import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ScrollIndicator from "./ScrollIndicator";
import ContactBanner from "./ContactBanner";
import MainLogo from "./MainLogo";
import { Main } from "next/document";

function Header() {
  const router = useRouter();
  const { basePath } = router;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Preventing page-scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.documentElement.style.overflow = "hidden"; // Hides scrollbar
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.documentElement.style.overflow = "auto"; // Restores scrollbar
      document.body.style.overflow = "auto";
    };
  }, [isDrawerOpen]);

  // Detecting Landscape display and disabling active-drawer in landscape mode
  useEffect(() => {
    const handleResize = () => {
      // Landscape mode detected
      if (window.innerWidth > window.innerHeight) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    {
      title: "Home",
      path: "/",
      icon: "house",
    },
    {
      title: "Courses",
      path: "/courses",
      icon: "journal-text",
    },
    {
      title: "Gallery",
      path: "/gallery",
      icon: "image",
    },
    {
      title: "Discover",
      path: "/#discover-more",
      icon: "compass",
    },
    {
      title: "Contact Us",
      path: "/contact",
      icon: "telephone",
    },
  ];

  return (
    <>
      <style jsx>{`
        .active-tab {
          color: #e74c3c !important;
          position: relative;
        }

        .active-tab:before,
        .active-tab:after {
          width: 50% !important;
          border-bottom: 2px solid #e74c3c !important;
        }

        .tab-hover {
          position: relative;
        }

        .tab-hover:before,
        .tab-hover:after,
        .active-tab:before,
        .active-tab:after {
          content: "";
          position: absolute;
          bottom: -3px;
          width: 0;
          transition: width 0.3s ease-in-out;
          padding-top: 10px;
          border-bottom: 2px solid #444444;
        }

        .tab-hover:before,
        .active-tab:before {
          left: 49%;
        }

        .tab-hover:after,
        .active-tab:after {
          right: 49%;
        }

        // .tab-hover:hover:before,
        // .tab-hover:hover:after {
        //   width: 50%;
        //   border-bottom: 2px solid #444444;
        // }

        // disable hover underline on mobile-touch devices
        @media (hover: hover) and (pointer: fine) {
          .tab-hover:hover:before,
          .tab-hover:hover:after {
            width: 50%;
            border-bottom: 2px solid #444444;
          }
        }

        .drawer-overlay {
          transition: opacity 0.3s ease-in-out;
        }
        .drawer-overlay.open {
          z-index: 100;
          opacity: 1;
          pointer-events: auto;
        }
        .drawer-overlay.closed {
          z-index: 99;
          opacity: 0;
          pointer-events: none;
        }

        @media screen and (max-width: 350px) {
          .drawer-tab {
            font-size: 1rem !important;
          }
        }
      `}</style>

      {/* Contact Banner */}
      <ContactBanner />

      <header
        className="position-fixed w-100"
        style={{
          top: "30px",
          height: "70px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#fff",
          boxShadow: "0 0 10px 3px #FF6B6B",
          zIndex: "99",
        }}
      >
        <div
          className="d-flex justify-content-between align-items-center w-100 px-4 mx-auto position-relative"
          style={{
            height: "100%",
            maxWidth: "2000px",
          }}
        >
          {/* Logo */}
          <Link className="text-decoration-none mx-4" href={"/"}>
            <Image
              src={`${basePath}/favicon.png`}
              alt="logo"
              width={50}
              height={50}
              priority
            />
          </Link>

          {/* Main Logo */}
          <MainLogo />

          {/* Right Container */}
          <div className="d-flex">
            {/* DrawerIcon */}
            <button
              className="d-md-none"
              style={{
                backgroundColor: "transparent",
                outline: "none",
                border: "none",
              }}
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <span
                style={{
                  display: "inline-block",
                  transition: "transform 0.3s ease",
                  transform: isDrawerOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <i
                  className={`bi bi-${isDrawerOpen ? "x" : "list"}`}
                  style={{ fontSize: "2rem", color: "#444444" }}
                ></i>
              </span>
            </button>
            {/* Large-Navbar */}
            <nav className="d-none d-md-flex justify-content-end align-items-center">
              {navItems.map((item, index) => {
                return (
                  <Link
                    className={`text-decoration-none ${
                      navItems.length - 1 === index ? "ms-3 me-4" : "mx-3"
                    }`}
                    key={`nav-item-${index}`}
                    href={`${item.path}`}
                  >
                    <span
                      className={`fw-bold ${
                        router.pathname === item.path ||
                        (router.pathname === "/discover" &&
                          item.path === "/#discover-more")
                          ? "active-tab"
                          : "tab-hover"
                      }`}
                      style={{ color: "#444444" }}
                    >
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
        {/* ProgressBar */}
        <ScrollIndicator />
      </header>

      {/* Mobile Menu */}
      <div
        className={`d-flex d-md-none position-fixed w-100 drawer-overlay ${
          isDrawerOpen ? "open" : "closed"
        }`}
        style={{
          height: "100vh",
          top: 0,
          left: 0,
          background: "rgba(0, 0, 0, 0.5)",
        }}
        onClick={() => setIsDrawerOpen(false)}
      >
        <nav
          className="d-flex flex-column align-items-left shadow py-5 px-3"
          style={{
            maxWidth: "250px",
            width: "75%",
            backgroundColor: "#181818ff",
            transition: "transform 0.3s ease-in-out",
            transform: isDrawerOpen ? "translateX(0%)" : "translateX(-100%)",
          }}
        >
          {/* Logo */}
          <span
            className="text-center pb-4 mb-3"
            style={{
              width: "100%",
              borderBottom: "3px double #e74c3c",
              borderBottomRightRadius: "3px",
              borderBottomLeftRadius: "3px",
            }}
          >
            <Image
              src={`${basePath}/favicon.png`}
              alt="logo"
              width={150}
              height={150}
              priority
            />
          </span>

          {/* NavItems */}
          {navItems.map((item, index) => {
            return (
              <Link
                className={`text-decoration-none my-3 mx-2 px-4`}
                key={`nav-item-${index}`}
                href={`${item.path}`}
                onClick={() => {
                  setIsDrawerOpen(false);
                }}
              >
                <span
                  style={{ fontSize: "1.25rem" }}
                  className={`fw-bold ${
                    router.pathname === item.path ||
                    (router.pathname === "/discover" &&
                      item.path === "/#discover-more")
                      ? "active-tab"
                      : "text-light tab-hover"
                  } drawer-tab`}
                >
                  <i className={`me-2 bi bi-${item.icon}`}></i>
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

export default Header;
