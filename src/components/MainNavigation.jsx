import { Link, NavLink } from "react-router-dom";

function MainNavigation() {

    const menuNav = [
        { name: "Home", path: "/" },
        { name: "Form", path: "/form" },        
    ];

  return (
    <div className="shadow bg-white py-6 sticky top-0 z-10">
      <div className="container mx-auto flex gap-4">
        <Link to="/">
          <img className="w-24 mr-10" src="https://www.dbs.id/id/iwov-resources/flp/splitter/images/dbs_logo.svg" alt="Logo DBS" />
        </Link>
        {menuNav.map((nav) => (
          <NavLink
            key={nav.name}
            to={nav.path}
            className={({ isActive }) =>
              isActive ? "text-[#ee1818] font-bold h-6 text-xl" : "h-6 text-xl"
            }
          >
            {nav.name}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
export default MainNavigation