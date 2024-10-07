import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaJava, FaGitAlt, FaGithub, FaBootstrap, FaNpm } from "react-icons/fa";
import { BackgroundLines } from "../LineBackground/Linebackground";
import './Skills.css';
import { SiExpress, SiJavascript, SiTailwindcss, SiVisualstudiocode, SiPython, SiCplusplus } from "react-icons/si";

function Skills() {
    return (
        <>
            <div className="h-screen w-full bg-[#020617] relative flex-col">
                <div className="w-full">
                    <BackgroundLines className="flex items-center justify-center w-full h-full flex-col px-4">
                        <div className="h-full w-full flex">
                            <div className="h-full w-2/6 relative flex items-center">
                                <p className="rotate-[-90deg] text-white text-6xl font-bold stroke">About me</p>
                            </div>

                            <div className="h-full w-4/6 text-white flex flex-col justify-center items-center p-4">
                                <p className="text-lg leading-relaxed">
                                    My name is <span className="font-semibold text-yellow-300">Rupam Mondal</span>. I love creating things that live on the internet.
                                    My interest in <span className="font-semibold text-yellow-300">web development</span> drives me to learn and build more.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Currently, I’m growing as a <span className="font-semibold text-yellow-300">Fullstack Developer</span>.
                                    I've worked hard, gained experience in software and web development, and I’m continuously improving my skills.
                                </p>
                                <div className="flex justify-start w-full">
                                    <p className="mt-6 text-lg leading-relaxed">
                                        My current stack of languages/technologies are:
                                    </p>
                                </div>

                                {/* Stacked List of Skills */}
                                <div className="flex w-full mt-10 justify-start gap-6">
                                    <div className="w-1/4 h-full flex flex-col gap-3">
                                        <div className="flex justify-center items-center gap-2"><FaReact color="#50ABC4" />React Js</div>
                                        <div className="flex justify-center items-center gap-2"><FaNodeJs color="green" />Node Js</div>
                                        <div className="flex justify-center items-center gap-2"><SiExpress color="green" /> Express Js</div>
                                        <div className="flex justify-center items-center gap-2"><SiJavascript color="yellow" />Javascript</div>
                                    </div>
                                    <div className="w-1/4 h-full flex flex-col gap-3">
                                        <div className="flex justify-center items-center gap-2"><FaJava color="#f89820" />Java</div>
                                        <div className="flex justify-center items-center gap-2"><FaHtml5 color="#E34C26" />HTML</div>
                                        <div className="flex justify-center items-center gap-2"><FaCss3Alt color="#264de4" />CSS</div>
                                        <div className="flex justify-center items-center gap-2"><SiCplusplus color="#00599C" />C++</div>
                                    </div>
                                    <div className="w-1/4 h-full flex flex-col gap-3">
                                        <div className="flex justify-center items-center gap-2"><FaBootstrap color="#7952B3" />Bootstrap</div>
                                        <div className="flex justify-center items-center gap-2"><FaGithub color="white" />Github</div>
                                        <div className="flex justify-center items-center gap-2"><FaGitAlt color="#F05032" />Git</div>
                                        <div className="flex justify-center items-center gap-2"><SiTailwindcss color="#38BDF8" />Tailwind</div>
                                    </div>
                                    <div className="w-1/4 h-full flex flex-col gap-3">
                                        <div className="flex justify-center items-center gap-2"><SiPython color="#3776AB" />Python</div>
                                        <div className="flex justify-center items-center gap-2"><SiCplusplus color="#00599C" />C++</div>
                                        <div className="flex justify-center items-center gap-2"><SiVisualstudiocode color="#007ACC" />VS Code</div>
                                        <div className="flex justify-center items-center gap-2"><FaNpm color="#CB3837" />NPM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BackgroundLines>
                </div>
            </div>
        </>
    );
}

export default Skills;
