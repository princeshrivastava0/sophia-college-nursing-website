import CustomHead from "@/components/CustomHead";
import ContactUs from "@/components/contact/ContactUs";

function contact() {
  return (
    <>
      <CustomHead
        title="Contact Us"
        description="Get in touch with us for admissions, course inquiries, or general support. Find our contact details, address, and communication channels here."
      />
      <ContactUs />;
    </>
  );
}

export default contact;
