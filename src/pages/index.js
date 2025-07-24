import { useRouter } from "next/router";
import CustomHead from "@/components/CustomHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  // Using useRouter to get the base path for images
  const { basePath } = useRouter();

  return (
    <>
      <CustomHead
        title={"Home"}
        description={
          "Sophia Institute of Medical Science, established in 1999 in Gwalior, offers quality education in Nursing. Affiliated to Jiwaji University and recognized by Central Council of Homoeopathy New Delhi, Indian Nursing Council, Mahakushal Nursing Council Bhopal, Higher Education and Medical Education Govt. of M.P, the institute provides diploma to master's level courses with dedicated faculty, modern facilities, and strong student support."
        }
        url={"https://sophiainstitutes.com/nursing"}
      />

      {/* Header */}
      <div style={{ height: "13vh" }}>
        <Header />
      </div>

      {/* Hero Section */}
      <div
        style={{
          height: "87vh",
          overflow: "hidden",
        }}
      >
        <HeroSection />
      </div>

      <div style={{ height: "100vh" }}></div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </>
  );
}
