import { useEffect } from "react";

/**
 * Automatically scrolls to the top of the page when the route changes.
 * Usage: call useScrollToTop(location) inside your layout component.
 */
const useScrollToTop = (location) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
};

export default useScrollToTop;