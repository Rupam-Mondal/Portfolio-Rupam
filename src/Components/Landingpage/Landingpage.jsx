import React from "react";
import { Vortex } from "./Vortex";
import Navbar from "../Navbar/Navbar";
import './Landingpage.css'

export function Landingpage() {
    function Resume() {
        window.open('https://drive.google.com/file/d/1EAeQgPkEE_IU4zjOpUqP42QlVv8jRakX/view')
    }
    return (
        (<div
            className="w-full mx-auto  h-screen overflow-hidden relative landingpage">
            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={120}
                className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
                    <Navbar/>
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                    Transforming Vision Into Reality Through Code and Design
                </h2>
                <p className="text-sky-400 text-sm md:text-2xl max-w-xl mt-6 text-center">
                    Hello! I’m <span className="underline">Rupam Mondal</span>, a full-stack developer based in India.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                    <button onClick={Resume}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                        Resume
                    </button>
                </div>
            </Vortex>
        </div>)
    );
}
