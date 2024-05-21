import logo from "../assets/loggo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
// import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex items-center flex-shrink-0">
                <img className="mx-2 w-13 h-12" src={logo} alt="logo" />
            </div>
            <div className="flex items-center m-8 justify-center gap-4 text-2xl">

                <a href="https://www.linkedin.com/in/anandu-ajesh-90381a254/"><FaLinkedin /></a>
                <a href="https://github.com/anandu-ajesh"><FaGithub /></a>
                {/* <a href="http://"><SiGmail /></a> */}
                <a href="https://www.instagram.com/_ananduajesh_/"><FaInstagram /></a>

            </div>
        </nav>
    )
}

export default Navbar