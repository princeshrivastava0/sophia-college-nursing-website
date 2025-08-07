import PhotoGallery from "@/components/Photo-gallery";
import CustomHead from "@/components/CustomHead";

function gallery() {
  return (
    <>
      <CustomHead
        title="Gallery"
        description="Explore our vibrant campus life and academic events through our photo gallery."
      />

      <section id="gallery">
        <PhotoGallery />
      </section>
    </>
  );
}

export default gallery;
