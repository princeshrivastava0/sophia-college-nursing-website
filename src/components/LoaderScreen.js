import { useEffect, useState } from "react";

function LoaderScreen() {
  const [visible, setVisible] = useState(false);
  // Preventing page-scroll when the loading screen is active
  useEffect(() => {
    // Hides scrollbar
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    setVisible(true);
    return () => {
      // Restores scrollbar
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      setVisible(false);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .loader-container {
          height: 100vh;
          z-index: 99999;
          background-color: rgba(255, 255, 255, 0.5);
          transition: background-color 0.25s ease;
        }

        .loader {
          width: 80px;
          height: 80px;
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

        .loader-2 {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          animation: rotation 1.5s linear infinite reverse;
        }
        .loader-2::after {
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
          border-color: #000000ff transparent;
        }
      `}</style>
      <div
        className={`position-fixed w-100 d-flex justify-content-center align-items-center pb-5 pb-md-0 loader-container ${
          visible ? "active" : "in-active"
        }`}
      >
        {/* Spinner & Logo Container */}
        <div className="position-relative d-flex align-items-center justify-content-center mb-5 mb-md-0 p-2">
          <span className="loader position-absolute"></span>
          <span className="loader-2 position-absolute"></span>
        </div>
      </div>
    </>
  );
}

export default LoaderScreen;
