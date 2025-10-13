function VisionMission() {
  return (
    <>
      <style jsx>{`
        @media screen and (max-width: 767px) {
          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100% !important;
          }
        }
      `}</style>
      <section
        id="vision-mission"
        className="p-5 pt-0 px-2 px-md-5 text-center w-100"
      >
        {/* Container */}
        <div className="container mx-auto" style={{ width: "80%" }}>
          <h2
            className="fw-bold mb-3"
            style={{ textTransform: "uppercase", color: "#e74c3c" }}
          >
            Our Vision & Mission
          </h2>
          <p
            style={{
              textAlign: "center",
              fontWeight: "500",
              fontSize: "1.15rem",
            }}
            className="m-0 text-container"
          >
            <span style={{ fontSize: "1.5rem" }}>
              <i className="bi bi-quote"></i>
            </span>
            Our mission is to serve “The Mankind” irrespective of all castes and
            creed as every man is the creation of God, The all-mighty, who had
            made their beautiful world and every person has full right to live
            happily in this world of God. Our Motto is to make people happy by
            enlightening their lives with the Knowledge that will release them
            from pains and sufferings and help them to achieve best in life.
            <span
              style={{
                fontSize: "1.5rem",
                display: "inline-block",
                transform: "scaleX(-1)",
              }}
            >
              <i className="bi bi-quote"></i>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

export default VisionMission;
