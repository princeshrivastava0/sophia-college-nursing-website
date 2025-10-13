import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoaderScreen from "@/components/LoaderScreen";
import Header from "@/components/header-footer/Header";
import Footer from "@/components/header-footer/Footer";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Initial page load
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulated load delay
    return () => clearTimeout(timer);
  }, []);

  // Disable scroll when loader is active
  useEffect(() => {
    const style = isLoading
      ? { overflow: "hidden", height: "100vh" }
      : { overflow: "auto", height: "auto" };

    Object.assign(document.documentElement.style, style);
    Object.assign(document.body.style, style);
  }, [isLoading]);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    };

    const handleComplete = () => {
      setTimeout(() => {
        setIsLoading(false);
        document.documentElement.style.overflow = "auto";
        document.body.style.overflow = "auto";
      }, 1000); // smooth fade-out
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  // Bootstrap Carousel initialization
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);
  return (
    <>
      {isLoading && <LoaderScreen />}
      {/* Header */}
      <Header />
      <Component {...pageProps} />
      {/* Footer */}
      <Footer />
    </>
  );
}
