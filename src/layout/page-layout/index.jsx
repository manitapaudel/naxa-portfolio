import CustomTab from "@/components/CustomTab";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <CustomTab>
      <Outlet />
    </CustomTab>
  );
};
export default PageLayout;
