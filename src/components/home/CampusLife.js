import Image from "next/image";
import { useRouter } from "next/router";
import campusLifePhotos from "@/data/campusLifePhotos";

function CampusLife() {
  const router = useRouter();
  const { basePath } = router;

  return (
    <>
      <style jsx>{`
        .gridWrapper {
          background-color: #2c3e50;
          max-width: 1200px;
          overflow: hidden;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-auto-rows: 200px;
          grid-gap: 4px;
          box-shadow: 0px 0px 10px #fff;
          border-radius: 20px;
          overflow: hidden;
        }

        .grid-img {
          position: relative;
          overflow: hidden;
        }

        /* Make the 2nd image larger */
        .grid-img:nth-child(2) {
          grid-column: span 3;
          grid-row: span 2;
        }

        .grid-img :global(img) {
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .grid-img:hover :global(img) {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 150px;
          }

          .grid-img:nth-child(1) {
            grid-column: 1 / 2;
          }

          .grid-img:nth-child(2) {
            grid-column: 1 / 3;
            grid-row: 1;
          }

          .grid-img:nth-child(10) {
            grid-column: 1 / 3;
          }

          .grid-img:nth-child(3),
          .grid-img:nth-child(5),
          .grid-img:nth-child(7),
          .grid-img:nth-child(9) {
            grid-column: auto;
            grid-row: auto;
          }
        }
      `}</style>

      <section
        id="campus-life"
        style={{ backgroundColor: "#2c3e50" }}
        className="p-5 px-2 px-md-5 text-center w-100"
      >
        <h2
          className="text-center text-uppercase fw-bold mb-3"
          style={{
            color: "#fff",
            filter: "drop-shadow(0 0 0.15rem #fff)",
            letterSpacing: "1px",
          }}
        >
          Campus Life
        </h2>

        <div className={`mx-auto p-3 rounded-3 gridWrapper`}>
          <div className="grid">
            {campusLifePhotos.map((image, index) => (
              <div key={`campus-life-${index}`} className="grid-img">
                <Image
                  src={`${basePath}${image.src}`}
                  alt={image.alt}
                  title={image.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CampusLife;
