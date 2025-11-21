import { useEffect } from "react";


const useScrollToTop = (location) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
};

export default useScrollToTop;