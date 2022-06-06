import React from "react";

import {
    CheckIcon,
    XIcon
    
} from "@heroicons/react/solid"

const Pricing = () => {
    
    return (
        <div  name="pricing" className="w-full my-24 text-white">
            <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>
            <div className="max-w-[1240px] mx-auto py-12">
                
                <div className="py-8 text-center text-slate-300 ">
                    <h2 className="text-3xl uppercase">Pricing</h2>
                    <h3 className="py-8 text-5xl font-bold text-white">The exact price for solutions</h3>
                    <p className="text-3xl">Pricing details.................!!!!</p>
                </div>

                <div className="grid md:grid-cols-2">
                    <div className="relative p-8 m-4 bg-white shadow-2xl text-slate-900 rounded-xl">
                        <span className="px-3 py-1 text-sm text-indigo-800 uppercase bg-indigo-300 rounded-2xl">Standard</span>
                        <div>
                            <p className="flex py-4 text-6xl font-bold">$49<span className="flex flex-col justify-end text-xl text-slate-500">/mo</span></p>
                        </div>
                        <p className="py-8 text-2xl text-slate-500">Basic price detail....!!!!</p>
                        <div className="relative text-2xl">
                            <p className="flex py-4 "><CheckIcon className="w-8 mr-5 text-green-600" />1st thing offers.</p>
                            <p className="flex py-4 "><CheckIcon className="w-8 mr-5 text-green-600" />2nd thing offers.</p>
                            <p className="flex py-4 "><XIcon className="w-8 mr-5 text-red-400" />3rd thing offers.</p>
                            <p className="flex py-4 "><XIcon className="w-8 mr-5 text-red-400" />4th thing offers.</p>
                            <p className="flex py-4 "><XIcon className="w-8 mr-5 text-red-400" />5th thing offers.</p>
                            <button className="w-full py-4 my-4 rounded-2xl">Get Started</button>
                        </div>
                    </div>
                    <div className="relative p-8 m-4 bg-white shadow-2xl text-slate-900 rounded-xl">
                        <span className="px-3 py-1 text-sm text-indigo-800 uppercase bg-indigo-300 rounded-2xl">Premium</span>
                        <div>
                            <p className="flex py-4 text-6xl font-bold">$99<span className="flex flex-col justify-end text-xl text-slate-500">/mo</span></p>
                        </div>
                        <p className="py-8 text-2xl text-slate-500">Premium price detail....!!!!</p>
                        <div className="relative text-2xl">
                            <p className="flex py-4 "><CheckIcon className="w-8 mr-5 text-green-600" />1st thing offers.</p>
                            <p className="flex py-4 "><CheckIcon className="w-8 mr-5 text-green-600" />2nd thing offers.</p>
                            <p className="flex py-4 "><CheckIcon className="w-8 mr-5 text-green-600" />3rd thing offers.</p>
                            <p className="flex py-4 "><CheckIcon className="w-8 mr-5 text-green-600" />4th thing offers.</p>
                            <p className="flex py-4 "><CheckIcon className="w-8 mr-5 text-green-600" />5th thing offers.</p>
                            <button className="w-full py-4 my-4 rounded-2xl">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;