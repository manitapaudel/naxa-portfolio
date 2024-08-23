import { Link } from "react-router-dom";

const CustomTab = ({ children }) => {
  return (
    <div className="container mx-auto  ">
      <div className="grid grid-cols-5 gap-10 bg-white py-2.5 px-7.5 -mt-12 shadow-2xl">
        <Link
          to="/keyhighlights"
          className="hover:bg-primary text-secondary font-semibold p-2"
        >
          Key Highlights
        </Link>
        <Link
          to="/keyhighlights"
          className="bg-primary text-secondary font-semibold p-2"
        >
          Key Highlights
        </Link>
        <Link
          to="/keyhighlights"
          className="bg-primary text-secondary font-semibold p-2"
        >
          Key Highlights
        </Link>
        <Link
          to="/keyhighlights"
          className="bg-primary text-secondary font-semibold p-2"
        >
          Key Highlights
        </Link>
        <Link
          to="/keyhighlights"
          className="bg-primary text-secondary font-semibold p-2"
        >
          Key Highlights
        </Link>
      </div>
      <div className="mt-25">
        {/* Page contents go here! */}
        {/* Children? */}
        {children}
      </div>
    </div>
  );
};

export default CustomTab;
