import CustomHead from "@/components/CustomHead";
import HeroSection from "@/components/home/HeroSection";
import ChairpersonsDesk from "@/components/home/ChairpersonsDesk";
import EventHighlights from "@/components/home/EventHighlights";
import VisionMission from "@/components/home/VisionMission";
import CampusLife from "@/components/home/CampusLife";

export default function Home() {
  return (
    <>
      <CustomHead
        title={"Home"}
        description={
          "Sophia Institute of Medical Science, established in 1999 in Gwalior, offers quality education in Nursing. Affiliated to Jiwaji University and recognized by Central Council of Homoeopathy New Delhi, Indian Nursing Council, Mahakushal Nursing Council Bhopal, Higher Education and Medical Education Govt. of M.P, the institute provides diploma to master's level courses with dedicated faculty, modern facilities, and strong student support."
        }
        url={"https://sophiainstitutes.com/nursing"}
      />

      {/* Hero Section */}
      <div
        style={{
          height: "100vh",
          overflow: "hidden",
          paddingTop: "100px",
          backgroundColor: "#d6d6d654",
        }}
      >
        <HeroSection />
      </div>

      {/* Chairperson's Desk */}
      <ChairpersonsDesk />

      {/* Campus-Life */}
      <CampusLife />

      {/* Event Highlights */}
      <EventHighlights />

      {/* Vision-Mission */}
      <div>
        <VisionMission />
      </div>
    </>
  );
}
