function Title({ title = "Sophia Nursing College" }) {
  return (
    <>
      <style jsx>{`
        .heading {
          text-align: left;
          font-size: 2.5rem;
          width: 80%;
          border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        }

        // for small mobile screens - reduced text size
        @media screen and (max-width: 350px) {
          .heading {
            font-size: 1.5rem !important;
            width: 90% !important;
          }
        }

        @media screen and (max-width: 991.98px) {
          .heading {
            text-align: center;
            font-size: 2rem;
          }
        }
      `}</style>
      <h2 className="fw-bold m-0 pt-lg-5 pt-4 pb-3 ps-lg-3 mx-auto heading">
        {title}
      </h2>
    </>
  );
}

export default Title;
