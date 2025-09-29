import CustomHead from "@/components/CustomHead";
import dynamic from "next/dynamic";
// Dynamically import PhotoGallery and disable SSR
const PhotoGallery = dynamic(() => import("@/components/Photo-gallery"), {
  ssr: false, // This ensures it only renders on the client
});

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
