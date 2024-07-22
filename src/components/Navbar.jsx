// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
   <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/shoeb-antule-422985284/"><FaLinkedin /></a>
    <a href="https://github.com/ShoebAntule"><FaGithub /></a>
    <a href=""><FaSquareXTwitter /></a>
    <a href=""><FaInstagram /></a>
    </div>
  </nav>
  );
}

export default Navbar;
