import { Link, useLocation } from "react-router-dom";

const categories = [
  {
    href: "/keyhighlights",
    name: "Key Highlights",
  },
  {
    href: "/opendatainitiatives",
    name: "Open Data Initiatives",
  },
];

const CustomTab = ({ children }) => {
  const location = useLocation();
  return (
    <div className="container mx-auto  ">
      <div className="grid grid-cols-5 gap-10 bg-white py-2.5 px-7.5 -mt-12 shadow-2xl">
        {categories.map(({ href, name }) => (
          <Link
            to={href}
            className={`hover:bg-primary text-secondary font-semibold p-2 ${
              location.pathname === href ? "bg-primary" : ""
            }`}
            key={name}
          >
            {name}
          </Link>
        ))}
      </div>
      <div className="mt-25">
        {/* Page contents go here! */}
        {children}
      </div>
    </div>
  );
};

export default CustomTab;
