import Image from "next/image";
import { useRouter } from "next/router";

function ChairpersonsDesk() {
  const router = useRouter();
  const { basePath } = router;

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

          .responsive-float {
            float: none !important;
            shape-outside: none !important;
            display: block;
            margin: 1rem auto !important;
          }
        }
      `}</style>
      <section
        id="chairperson-desk"
        style={{ backgroundColor: "#d6d6d654" }}
        className="p-5 px-2 px-md-5 text-center w-100"
      >
        {/* Container */}
        <div className="container mx-auto" style={{ width: "80%" }}>
          <h2
            className="fw-bold mb-3"
            style={{ textTransform: "uppercase", color: "#e74c3c" }}
          >
            Chairperson's Message
          </h2>
          <div>
            {/* Chairperson's Image floated right */}
            <div
              className="m-3 responsive-float"
              style={{
                float: "right",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                shapeOutside: "circle()",
                WebkitShapeOutside: "circle()",
                boxShadow: "0 0 15px rgba(0,0,0,0.5)",
                border: "2px solid rgba(0,0,0,0.3)",
              }}
            >
              <Image
                src={`${basePath}/chairperson-img.jpeg`}
                alt="chairperson"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Chairperson's Message */}
            <p
              style={{
                textAlign: "justify",
                fontWeight: "500",
                fontSize: "1.15rem",
              }}
              className="m-0"
            >
              <span style={{ fontSize: "1.5rem" }}>
                <i className="bi bi-quote"></i>
              </span>
              An Educational Institution should be an ideal one to inculcate the
              principles, for which the discipline stand, in the mind of the
              students. Our institute is a center of learning and Knowledge. It
              is a place where students from all parts, develop their inherent
              moral and intellectual qualities. They acquire the Knowledge to
              serve the human society. True educations consists in building
              character and culture. It refines the taste and elevates the
              spiritual status of our personality. Now with the boom in the
              education sector and with the globalization of the world economy,
              the meaning of education has become something more than merely to
              produce men of culture. Education gives us a wider outlook, deeper
              sympathy and insight, it teaches us to devote our energies in
              positive directions and to choose the work most congenital to us.
              It save us from number of pitfalls and makes us aware to overcome
              our limitations and shortcomings. This should not be disheartening
              as it makes us aware to overcome our limitations. Thus, Education
              is not only to give us Knowledge, but also to remove the dirt of
              vulgar passion and prejudices, so that the vision of our soul
              becomes cleaner and brighter to brings forth the best in us. The
              institutes are now required to produce skilled and technical hands
              and professionals with practical mind who becomes useful economic
              units of the Nation. The problem of over population, adulterated
              food, unhygienic living conditions, inventions of weapons of
              destruction and sweep in the transportation had given birth to
              many of the deadly diseases, which have increased the suffering of
              mankind. This has resulted in the increased demand of medicine,
              professionals, hospitals, nursing homes and also trained and
              qualified Doctors and skilled nursing professionals. Thus, we see
              a huge rising demand of nursing professionals in India and abroad.
              But we should not forget that despite all the glare of today’s
              globalpolicies, actual and real knowledge is that which is
              designed for salvation and for the development of our soul. So
              dear students I invite you all to join Sophia Institute of Medical
              Science and become a productive member of our group. Here we
              transform your personality readily to face the challenges of
              tomorrow by your spiritual and moral building and technical
              know-how, so necessary for a worthy citizen of our great country.
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

          {/* Clear float */}
          <div style={{ clear: "both" }}></div>
        </div>
      </section>
    </>
  );
}

export default ChairpersonsDesk;
