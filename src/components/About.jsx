import React from "react";

const About = () => {
    
    return (
        <div name="about" className="w-screen my-32 ">
            <div className="max-w-[1240px] mx-auto">
                <div className="text-center">
                    <h2 className="text-5xl font-bold"> Trust by the Engineers</h2>
                    <p className="py-6 text-3xl text-gray-500">
                        I'm the Full Stack Engineer and learning something new in React specially tailwind css.
                    </p>
                </div>
                <div className="grid gap-1 px-2 text-center md:grid-cols-3">
                    <div className="py-8 border shadow-xl rounded-xl">
                        <p className="text-6xl font-bold text-indigo-700">100%</p>
                        <p className="mt-2 text-gray-400">Completation</p>
                    </div>
                    <div className="py-8 border shadow-xl rounded-xl">
                        <p className="text-6xl font-bold text-indigo-700">24/7</p>
                        <p className="mt-2 text-gray-400">Delivery</p>
                    </div>
                    <div className="py-8 border shadow-xl rounded-xl">
                        <p className="text-6xl font-bold text-indigo-700">500K</p>
                        <p className="mt-2 text-gray-400">Transactions</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;