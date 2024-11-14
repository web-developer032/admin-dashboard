import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = ({ title, children }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]);

  return children; // This component doesn't render anything
};

export default PageTitle;
