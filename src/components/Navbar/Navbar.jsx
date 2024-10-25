import Logo from "../../assets/logo.png";
import Dollar from "../../assets/dollar.png";
import { AiOutlineClose } from "react-icons/ai";
function Navbar() {
  return (
    <nav className="sticky top-0 left-0 z-20 container mx-auto  py-8" style={{background: "rgba(255, 255, 255, 0.8)",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(27.2px)",
      }}>
      <div className="flex justify-between">
        <div className="flex items-center gap-4 pl-5 lg:pl-0">
          <div className="lg:hidden">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="">
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
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>

                <ul className="menu bg-base-200 min-h-full w-80 p-4 pt-5">
                  {/* Sidebar content here */}
                  <span className="flex justify-end">
                    <label
                      htmlFor="my-drawer"
                      className="cursor-pointer text-2xl absolute top-4 right-4 z-30"
                      aria-label="close drawer"
                    >
                      <AiOutlineClose />
                    </label>
                  </span>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Fixture</a>
                  </li>
                  <li>
                    <a href="">Teams</a>
                  </li>
                  <li>
                    <a href="">Schedules</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <a className="">
            <img src={Logo} alt="BPL Logo" className="w-[30px]" />
          </a>
        </div>

        <div className=" lg:flex">
          <ul className="menu menu-horizontal px-1 hidden lg:flex ">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Fixture</a>
            </li>
            <li>
              <a href="">Teams</a>
            </li>
            <li>
              <a href="">Schedules</a>
            </li>
          </ul>

          <div className="flex gap-2 sm:gap-4 border py-4 px-2 sm:px-5 rounded-xl">
            <span className="sm:font-bold">0 Coin</span>
            <img src={Dollar} alt="Dollar" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
