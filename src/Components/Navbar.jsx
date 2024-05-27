import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const menu = useRef();
  function openMenu() {
    menu.current.classList.toggle("left-0");
    menu.current.classList.toggle("-left-full");
    menu.current.classList.toggle("opacity-0");
  }
  return (
    <nav className="sticky top-0 flex justify-between items-center px-5 sm:px-20 py-3 bg-main text-white shadow-xl z-50">
      <Link
        to="/"
        className="font-extrabold text-3xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent"
      >
        Mahmoud Ahmed
      </Link>
      <span onClick={openMenu} className="cursor-pointer sm:hidden">
        <FaBars />
      </span>
      <ul
        ref={menu}
        className="list-none opacity-0 bg-main duration-500 absolute top-14 w-full -left-full py-1 px-8 sm:p-0 sm:relative sm:top-auto sm:w-auto sm:flex sm:gap-3 sm:left-auto sm:opacity-100 text-lg font-medium hover:*:text-cyan-500 *:duration-500"
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">Link</Link>
        </li>
        <li>
          <Link to="#">Link</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
