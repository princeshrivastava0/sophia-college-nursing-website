import CustomHead from "@/components/CustomHead";
import Courses from "@/components/Courses";

function courses() {
  return (
    <>
      <CustomHead
        title="Courses"
        description="Explore our comprehensive nursing programs including General Nursing and Midwifery (GNM), B.Sc. Nursing, Post Basic B.Sc. Nursing (P.B.B.Sc), and M.Sc. Nursing—designed to equip future healthcare professionals with excellence."
      />

      <Courses />
    </>
  );
}

export default courses;
