import Image from "next/image";
import { useRouter } from "next/router";

function MainLogo() {
  const router = useRouter();
  const { basePath } = router;
  return (
    <>
      <section id="main-logo" className="d-none d-xxl-block">
        <div
          className="bg-transparent position-absolute main-logo-div"
          style={{
            height: "90%",
            width: "100%",
            left: 0,
          }}
        >
          <Image
            src={`${basePath}/main_logo.png`}
            fill
            sizes="100%"
            style={{ objectFit: "contain" }}
            alt="main-logo"
            priority
          />
        </div>
      </section>
    </>
  );
}

export default MainLogo;
