import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const navLinks = (
    <>
      <li className="font-bold">
        {" "}
        <NavLink to={"/spots"}>Tourists Spot</NavLink>{" "}
      </li>
      {user && (
        <li className="font-bold">
          {" "}
          <NavLink to={"/addtouristspot"}>Add Tourists Spot</NavLink>{" "}
        </li>
      )}
      {user && (
        <li className="font-bold">
          {" "}
          <NavLink to={"/myList"}>My List</NavLink>{" "}
        </li>
      )}
    </>
  );
  const userLogout = () => toast("You have logout successfully");

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        // logout();
        userLogout();
        // alert("Sign-out successful.");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="sticky top-0 z-10 w-11/12 m-auto">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start ">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"./"}>
            <img
              className="w-14 rounded-full"
              src="https://i.ibb.co/Ht1kh0w/logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="m-1">
                <div className="m-1">
                  <button className="text-2xl p-1 w-12 rounded-full bg-gray-300">
                    {user.photoURL ? (
                      <img
                        className="rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                    ) : (
                      <FaUser />
                    )}
                  </button>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Profile: {user.displayName}</a>
                </li>
                <Link to={"/signin"}>
                  <li>
                    <p onClick={handleSignOut}>Sign Out</p>
                  </li>
                </Link>
              </ul>
            </div>
          ) : (
            <Link to={"/signin"}>
              <button className="btn bg-cyan-600 text-white">Signin</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
