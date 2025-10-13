import { useState, useEffect } from "react";

function ScrollIndicator() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScrollOrResize = () => {
      const winScroll = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const height = scrollHeight - clientHeight;

      // Avoid division by zero
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

      setScrollWidth(scrolled);
    };

    // Initial call to set scroll width on load
    handleScrollOrResize();

    // Attach event listener
    window.addEventListener("resize", handleScrollOrResize);
    window.addEventListener("scroll", handleScrollOrResize);

    return () => {
      window.removeEventListener("resize", handleScrollOrResize);
      window.removeEventListener("scroll", handleScrollOrResize);
    };
  }, []);

  return (
    <div
      className="position-fixed w-100 d-none d-lg-block"
      style={{
        bottom: "0px",
        left: 0,
        height: "3px",
        zIndex: 100,
      }}
    >
      <div
        className="position-absolute"
        style={{
          width: `${scrollWidth}%`,
          height: "5px",
          backgroundColor: "#e74c3c ",
          bottom: 0,
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "0px",
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
      ></div>
    </div>
  );
}

export default ScrollIndicator;
