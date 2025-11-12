import CustomHead from "@/components/CustomHead";
import DiscoverDetails from "@/components/discover/discover-details";
import { useRouter } from "next/router";

function Discover() {
  const router = useRouter();
  const { type } = router.query;
  const tabTitle = type === "about" ? "About Us" : "Staff";
  return (
    <>
      <CustomHead
        title={tabTitle}
        description="Discover more about our institution — learn about our history, dedicated staff, and the enriching campus experiences that make our community unique."
      />

      <DiscoverDetails query={type} />
    </>
  );
}

export default Discover;
