import project1 from '../../assets/Projectimages/Project1.jpg'
import project2 from '../../assets/Projectimages/Project2.jpg'
import project3 from '../../assets/Projectimages/Project3.jpg'
import project4 from '../../assets/Projectimages/Project4.png'
import project5 from '../../assets/Projectimages/Project5.jpg'
import project6 from '../../assets/Projectimages/Project6.jpg'
import { PinContainer } from '../3dcard/Floatingcard'

function Projects(){
    return (
        <>
            <div className="w-full bg-[#020617] p-10 flex flex-col gap-36" id="projects">
                <h1 className="text-center text-6xl font-extrabold text-white  decoration-4">
                    My Project Showcase
                </h1>

                {/* section 1 */}

                <div className="flex justify-center">
                    <div className="flex justify-between w-full max-w-screen-xl">

                        <PinContainer
                            title="https://github.com/Rupam-Mondal/Sign-Detection-Project"
                            href="https://github.com/Rupam-Mondal/Sign-Detection-Project"
                        >
                            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[23rem] h-[26rem] ">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-2xl text-white">
                                    Signlanguage Detection
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-zinc-200 ">
                                        A sign detection project developed with React, Flask, and CNN, enabling real-time sign language recognition and translation
                                    </span>
                                </div>
                                <div className="flex flex-1 w-full rounded-lg mt-4 border-2 border-black">
                                    <img src={project2} alt="" className="w-full h-full object-cover rounded-lg" />
                                </div>

                            </div>
                        </PinContainer>





                        <PinContainer
                            title="https://coingecko-chi.vercel.app/"
                            href="https://coingecko-chi.vercel.app/"
                        >
                            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[23rem] h-[26rem] ">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-2xl text-white">
                                    Coingecko Website
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-zinc-200 ">
                                        A website providing real-time cryptocurrency details and insights
                                    </span>
                                </div>
                                <div className="flex flex-1 w-full rounded-lg mt-4 border-2 border-black">
                                    <img src={project3} alt="" className="w-full h-auto rounded-lg object-cover" />
                                </div>

                            </div>
                        </PinContainer>



                        <PinContainer
                            title="https://hangman-game-beta-navy.vercel.app/"
                            href="https://hangman-game-beta-navy.vercel.app/"
                        >
                            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[23rem] h-[26rem] ">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-3xl text-white">
                                    Hangman Game
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-zinc-200 ">
                                        A fun and interactive Hangman game built using React, featuring hints and dynamic word challenges
                                    </span>
                                </div>
                                <div className="flex flex-1 w-full rounded-lg mt-4 border-2 border-black ">
                                    <img src={project1} alt="" className="" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                </div>


                <div className="flex justify-center">
                    <div className="flex justify-between mt-10 w-full max-w-screen-xl">

                        <PinContainer
                            title="https://rupam-mondal.github.io/Tier-List/"
                            href="https://rupam-mondal.github.io/Tier-List/"
                        >
                            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[23rem] h-[26rem] ">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-3xl text-white">
                                    Tier List Maker
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-zinc-200 ">
                                        A tier list that allows organizing images into different tiers based on their ranking
                                    </span>
                                </div>
                                <div className="flex flex-1 w-full rounded-lg mt-4 border-2 border-black ">
                                    <img src={project4} alt="" className="" />
                                </div>
                            </div>
                        </PinContainer>





                        <PinContainer
                            title="https://weather-app-phi-seven-95.vercel.app/"
                            href="https://weather-app-phi-seven-95.vercel.app/"
                        >
                            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[23rem] h-[26rem] ">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-3xl text-white">
                                    Weather Application
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-zinc-200 ">
                                        A weather application that provides real-time weather information for any city
                                    </span>
                                </div>
                                <div className="flex flex-1 w-full rounded-lg mt-4 border-2 border-black ">
                                    <img src={project5} alt="" className="" />
                                </div>
                            </div>
                        </PinContainer>



                        <PinContainer
                            title="https://rupam-mondal.github.io/Snake-Game-JS/"
                            href="https://rupam-mondal.github.io/Snake-Game-JS/"
                        >
                            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[23rem] h-[26rem] ">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-3xl text-white">
                                    Snake Game
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-zinc-200 ">
                                        A fun and interactive Snake game built using HTML,CSS,JS.
                                    </span>
                                </div>
                                <div className="flex flex-1 w-full rounded-lg mt-4 border-2 border-black ">
                                    <img src={project6} alt="" className="" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Projects