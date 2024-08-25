import { Outlet } from "react-router-dom";

import CustomTab from "@/components/CustomTab";
import Header from "@/components/Header";

const PortfolioLayout = () => {
  return (
    <>
      <Header />
      <CustomTab>
        <Outlet />
      </CustomTab>
    </>
  );
};
export default PortfolioLayout;
