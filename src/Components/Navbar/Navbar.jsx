import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function Navbar() {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="absolute top-3 sm:top-8 z-10">
            <div className="sm:w-full h-10 w-[90vw] m-0 p-0 sm:h-[65px] flex relative bg-gray-800 rounded-3xl">
                <div className="flex h-full w-full items-center gap-10 justify-center px-28 sm:px-10 md:px-28">
                    {["Home", "About", "Projects"].map((v, i) => (
                        <div key={i} className="text-lg font-medium cursor-pointer text-white" onClick={v === "Projects" ? scrollToProjects : undefined}>
                            {v}
                        </div>
                    ))}
                </div>
                <div className="hidden md:flex h-full w-1/2 gap-6 items-center justify-end px-28">
                    {[<FaLinkedin color="#67A7EB" size={25} />,
                    <SiGithub color="black" size={25} />,
                    <FaTwitter color="skyblue" size={25} />,
                    <FaPinterest color="red" size={25} />].map((v, i) => (
                        <div key={i} className="cursor-pointer">{v}</div>
                    ))}
                </div>
                <div className="hidden md:flex h-12 w-12 cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white font-semibold justify-center items-center rounded-full text-lg">
                    RM
                </div>
            </div>
        </div>
    );
}

export default Navbar;
