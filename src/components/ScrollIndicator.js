import { useState, useEffect } from "react";

function ScrollIndicator() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollWidth(scrolled);
    };

    // Attach event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup event listener on unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="position-fixed w-100 d-none d-md-block"
      style={{
        bottom: "0px",
        left: 0,
        height: "3px",
        zIndex: 99,
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
