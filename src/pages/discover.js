import CustomHead from "@/components/CustomHead";
import DiscoverDetails from "@/components/discover/discover-details";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Discover() {
  const router = useRouter();
  const { type } = router.query;
  const [tabTitle, setTabTitle] = useState("Discover More");

  useEffect(() => {
    if (!router.isReady) return;

    if (!type) {
      router.replace("/#discover-more");
      return;
    }

    const titles = {
      about: "About Us",
      staff: "Staff",
      notice: "Notice / Circulars",
      archives: "Archives",
    };

    if (titles[type]) {
      setTabTitle(titles[type]);
    } else {
      router.replace("/#discover-more");
    }
  }, [router.isReady, type]);

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
