import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/arman-nadaf-9b10b9273/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ArmanNadaf">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/arman_nadaf_5618/?hl=en">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
