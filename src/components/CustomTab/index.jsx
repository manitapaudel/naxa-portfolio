import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchProjectsRequest } from "@/views/portfolio/slice";
import { createCategoryPathname } from "../../utils";

const CustomTab = ({ children }) => {
  const location = useLocation();

  const dispatch = useDispatch();
  const { uniqueCategories } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjectsRequest());
  }, [dispatch]);

  return (
    <div className="container mx-auto  ">
      <div className="grid grid-cols-5 gap-x-10 items-center bg-white py-2.5 px-7.5 -mt-12 shadow-2xl">
        <Link
          to="keyhighlights"
          className={`max-h-max hover:bg-primary font-semibold p-2 ${
            location.pathname === "/keyhighlights"
              ? "bg-primary text-secondary"
              : "text-gray-400"
          }
            `}
        >
          Key Highlights
        </Link>
        {uniqueCategories.map((category) => {
          const categoryPathname = `/${createCategoryPathname(category)}`;
          return (
            <Link
              to={categoryPathname}
              className={`hover:bg-primary font-semibold p-2 ${
                location.pathname === categoryPathname
                  ? "bg-primary text-secondary"
                  : "text-gray-400"
              }
            `}
              key={category}
            >
              {category}
            </Link>
          );
        })}
      </div>
      <div className="mt-25">
        {/* Page contents go here! */}
        {children}
      </div>
    </div>
  );
};

export default CustomTab;
