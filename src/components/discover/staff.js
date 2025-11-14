import staffData from "@/data/staffData";
import { useRouter } from "next/router";

function Staff() {
  const router = useRouter();
  const { basePath } = router;
  return (
    <>
      <style jsx>{`
        .info-table {
          width: 90%;
          max-width: 1000px;
          border-collapse: collapse;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .info-row {
          padding: 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          background: #fff;
        }

        .info-row:nth-child(even) {
          background: #f9f9f9;
        }

        .info-text > span {
          font-weight: 700;
          color: #e74c3c;
          text-transform: uppercase;
          font-size: 1.05rem;
          word-wrap: break-word;
        }

        @media screen and (max-width: 767.98px) {
          .table-heading {
            font-size: 1.15rem;
          }

          .info-table {
            width: 100%;
          }

          .info-text {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
        }

        @media screen and (max-width: 400px) {
          .info-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
      <section id="staff">
        <div className="info-table mx-auto mb-5">
          {staffData.map((item, index) => (
            <div key={`info-table-${index}`} className="info-row">
              <a
                href={`${basePath}/documents/staff/${item.pdfDownloadURL}`}
                className="text-decoration-none info-text d-flex align-items-center w-100"
                title={`Download ${item.title}`}
                rel="noopener noreferrer"
              >
                <span className="w-75 text-start px-3 ">{item.title}</span>
                <span className="w-25 text-end px-3">
                  <i
                    className="bi bi-cloud-arrow-down-fill"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Staff;
