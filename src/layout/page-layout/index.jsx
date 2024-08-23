import { Outlet } from "react-router-dom";

import CustomTab from "@/components/CustomTab";

const PageLayout = () => {
  return (
    <CustomTab>
      <Outlet />
    </CustomTab>
  );
};
export default PageLayout;
