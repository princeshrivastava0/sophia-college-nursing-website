import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function LoaderScreen() {
  // Preventing page-scroll when the loading screen is active
  useEffect(() => {
    // Hides scrollbar
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      // Restores scrollbar
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, []);

  const { basePath } = useRouter();

  return (
    <>
      <style jsx>{`
        .loader {
          width: 100%;
          height: 100%;
          border: 3px solid #fff;
          border-radius: 50%;
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          animation: rotation 1.5s linear infinite;
        }
        .loader::after {
          content: "";
          box-sizing: border-box;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 3px solid;
          border-color: #e74c3c transparent;
        }

        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div
        className="position-fixed w-100 d-flex justify-content-center align-items-center bg-white pb-5 pb-md-0"
        style={{
          height: "100vh",
          zIndex: "99999",
          opacity: "0.8",
        }}
      >
        {/* Spinner & Logo Container */}
        <div className="position-relative d-flex align-items-center justify-content-center mb-5 mb-md-0 p-2">
          <Image
            src={`${basePath}/favicon.png`}
            width={200}
            height={200}
            alt="logo"
            priority
          />
          <span className="loader position-absolute"></span>
        </div>
      </div>
    </>
  );
}

export default LoaderScreen;
