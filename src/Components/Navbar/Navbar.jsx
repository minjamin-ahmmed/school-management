import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "./navbar.css";
import useAuthStore from "../../store/authStore";

const Navbar = () => {
  const username = useAuthStore((state) => state.username);
  const token = useAuthStore((state) => state.username);
  const logout = useAuthStore((state) => state.logout);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="h-16 bg-secondary">
        <div className="w-10/12 mx-auto">
          <div className="flex items-center justify-between">
            <div className="h-16 bg-accent flex items-center justify-start w-3/12 lg:w-1/12 relative">
              <Link to="/">
                {" "}
                <div className="absolute left-2 lg:left-3 2xl:left-[20%] top-4 flex items-center justify-center">
                  <img src={logo} alt="" />
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              {token ? (
                <div className="dropdown dropdown-end flex items-center gap-2">
                  <h2>{username}</h2>
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                    onClick={() => setIsOpen(!isOpen)} // Toggle the dropdown visibility
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="User Avatar"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  {isOpen && (
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-md z-[10] mt-36 w-52 p-2 shadow"
                    >
                      <li>
                        <Link
                          to="/user-profile"
                          onClick={() => setIsOpen(false)}
                          className="justify-between"
                        >
                          Profile
                        </Link>
                      </li>

                      <li>
                        <button
                          onClick={() => {
                            logout();
                            setIsOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                // Show Sign Up and Login buttons when not logged in
                <>
                  <h3 className="cursor-pointer">Apply</h3>
                  <Link to="/sign-up">
                    <button className="btn bg-white border border-accent rounded-lg text-accent font-bold">
                      Sign Up
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="btn border-none rounded-lg font-bold bg-accent hover:bg-red-700 text-white">
                      Login
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar bg-base-100 border-b border-gray-300 shadow-sm">
        <div className="navbar-start">
          {/* Hamburger Icon */}
          <button onClick={toggleDrawer} className="btn btn-ghost lg:hidden">
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
          </button>

          {/* Drawer */}
          {isDrawerOpen && (
            <div
              className={`fixed top-0 left-0 bg-base-100 z-10 w-80 h-screen p-4 shadow-lg transform transition-transform duration-700 ease-[cubic-bezier(0.22, 1, 0.36, 1)] ${
                isDrawerOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Close Icon */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Menu</h3>
                <button
                  onClick={toggleDrawer}
                  className="text-gray-700 hover:text-red-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <ul className="menu menu-sm">
                <NavLink
                  to="/"
                  onClick={closeDrawer} // Close drawer when link is clicked
                  className={({ isActive }) =>
                    isActive ? "text-accent" : "text-gray-700"
                  }
                >
                  <li>
                    <p>Home</p>
                  </li>
                </NavLink>
                <NavLink
                  to="/about-us"
                  onClick={closeDrawer} // Close drawer when link is clicked
                  className={({ isActive }) =>
                    isActive ? "text-accent" : "text-gray-700"
                  }
                >
                  <li>
                    <p>About Us</p>
                  </li>
                </NavLink>
                <NavLink
                  to="/blogs"
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    isActive ? "text-accent" : "text-gray-700"
                  }
                >
                  <li>
                    <p>Blogs</p>
                  </li>
                </NavLink>
                <NavLink
                  to="/events"
                  onClick={closeDrawer} // Close drawer when link is clicked
                  className={({ isActive }) =>
                    isActive ? "text-accent" : "text-gray-700"
                  }
                >
                  <li>
                    <p>Events</p>
                  </li>
                </NavLink>
                <NavLink
                  to="/news"
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    isActive ? "text-accent" : "text-gray-700"
                  }
                >
                  <li>
                    <p>News</p>
                  </li>
                </NavLink>
                <NavLink
                  to="/campus-gallery"
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    isActive ? "text-accent" : "text-gray-700"
                  }
                >
                  <li>
                    <p>Campus Gallery</p>
                  </li>
                </NavLink>
                <NavLink
                  to="/alumni-association"
                  onClick={closeDrawer} // Close drawer when link is clicked
                  className={({ isActive }) =>
                    isActive ? "text-accent" : "text-gray-700"
                  }
                >
                  <li>
                    <p>Alumni Association</p>
                  </li>
                </NavLink>
              </ul>
            </div>
          )}
        </div>

        <div className="navbar-center hidden lg:flex items-center justify-center">
          <ul className="menu menu-horizontal px-1 h-full flex items-center justify-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-accent" : "text-gray-700"
              }
            >
              <li>
                <p>Home</p>
              </li>
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "text-accent" : "text-gray-700"
              }
            >
              <li>
                <p>About Us</p>
              </li>
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "text-accent" : "text-gray-700"
              }
            >
              <li>
                <p>Blogs</p>
              </li>
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? "text-accent" : "text-gray-700"
              }
            >
              <li>
                <p>Events</p>
              </li>
            </NavLink>

            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive ? "text-accent" : "text-gray-700"
              }
            >
              <li>
                <p>News</p>
              </li>
            </NavLink>
            <NavLink
              to="/campus-gallery"
              className={({ isActive }) =>
                isActive ? "text-accent" : "text-gray-700"
              }
            >
              <li>
                <p>Campus Gallery</p>
              </li>
            </NavLink>
            <NavLink
              to="/alumni-association"
              className={({ isActive }) =>
                isActive
                  ? "text-accent hover:bg-transparent p-2"
                  : "text-gray-700 hover:bg-transparent p-2"
              }
            >
              <li className="hover:bg-transparent p-0 !important">
                <p>Alumni Association</p>
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Navbar;
