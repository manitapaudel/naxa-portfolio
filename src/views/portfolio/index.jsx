import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CustomTab from "@/components/CustomTab";

const Portfolio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/portfolio/keyhighlights");
  });

  return (
    <>
      <div className="">
        <CustomTab />
      </div>
    </>
  );
};

export default Portfolio;
