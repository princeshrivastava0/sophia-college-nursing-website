import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import Header from "@/components/header-footer/Header";
import Footer from "@/components/header-footer/Footer";
import { useRouter } from "next/router";
import NextTopLoader from "nextjs-toploader";
import { PagesTopLoader } from "nextjs-toploader/pages";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  // Bootstrap Carousel initialization
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);
  return (
    <>
      <PagesTopLoader
        color="#2c3e50"
        showSpinner={false}
        height={5}
        speed={500}
        easing="ease-in-out"
      />

      {/* Header */}
      <Header />
      <main key={router.route} className="page-fade">
        <Component {...pageProps} />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}
