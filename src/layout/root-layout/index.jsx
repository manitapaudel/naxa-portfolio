import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const RootLayout = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollToTopButtonVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollToTopButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollToTopButtonVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };
  return (
    <div>
      <main>
        <Outlet />
      </main>
      {showButton && <ScrollToTop handleScrollToTop={handleScrollToTop} />}
      <Footer />
    </div>
  );
};

export default RootLayout;
