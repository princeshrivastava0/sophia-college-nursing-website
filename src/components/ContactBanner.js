function ContactBanner() {
  const ContactDetails = [
    {
      icon: "bi bi-telephone-inbound-fill me-1",
      text: "0751-2230522",
    },
    { icon: "bi bi-phone-fill", text: "9522288213" },
  ];
  return (
    <>
      <style jsx>{`
        .contact_banner {
          height: 25px;
          background-color: #e74c3c;
          color: #fff;
          z-index: 999;
          overflow: hidden;
        }
      `}</style>
      <div className="contact_banner position-fixed w-100 d-flex align-items-center justify-content-end px-3">
        <div className="d-flex justify-content-end align-items-center px-3 mx-2">
          {ContactDetails.map((details, index) => {
            return (
              <span
                className="d-flex align-items-center"
                key={`contact-${index}`}
              >
                <span
                  className={`d-flex align-items-center ${
                    index < 1 ? "me-2" : "ms-2"
                  }`}
                >
                  <i
                    className={`${details.icon} me-1`}
                    style={{ fontSize: "13px", fontWeight: 900 }}
                  ></i>
                  <h6
                    style={{ fontSize: "13px", margin: "0", fontWeight: 600 }}
                  >
                    {details.text}
                  </h6>
                </span>
                {index < 1 && "|"}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ContactBanner;
