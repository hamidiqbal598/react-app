import React from "react";

import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon
} from '@heroicons/react/solid'

import bgImg from '../assets/background1.png'

const Hero = () => {

    return (
        // w-full h-screen bg-zinc-200 flex flex-col justify-between
        <div name="home" className="flex flex-col justify-between w-full h-screen bg-zinc-300">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className="flex flex-col justify-center w-full px-2 py-3 md:items-start">
                    <p className="text-2xl">Unique Sequence and Checking</p>
                    <h1 className="py-3 text-5xl font-bold md:text-7xl"> Cloud Service </h1>
                    <p className="text-2xl"> This is our IT Brand</p>
                    <button className="px-6 py-3 sm:w-[60%] my-4"> Get Started </button>
                </div>
                <div>
                    <img className="w-full" src={bgImg} alt="/" />
                    <br></br>
                </div>
                {/* absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl */}
                <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
                    mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-300 border border-slate-300 rounded-xl 
                    text-center shadow-xl">
                    <p> Data Service </p>
                    <div className="flex flex-wrap justify-between px-4">
                        <p className="flex px-4 py-2 text-slate-500"><CloudUploadIcon className="h-6 text-indigo-700"/> App Security</p>
                        <p className="flex px-4 py-2 text-slate-500"><DatabaseIcon className="h-6 text-indigo-700"/> Dashboard Design</p>
                        <p className="flex px-4 py-2 text-slate-500"><ServerIcon className="h-6 text-indigo-700"/> cloud Data</p>
                        <p className="flex px-4 py-2 text-slate-500"><PaperAirplaneIcon className="h-6 text-indigo-700" /> API Network</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;