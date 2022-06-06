import React, {useState} from "react";
import { Link } from 'react-scroll'

import {MenuIcon, XIcon} from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav);
    const handleClose = () => setNav(!nav);

    return (
        <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
            <div className="flex items-center justify-between w-full h-full px-2">
                <div className="flex items-center">
                    <h1 className="mr-4 text-3xl font-bold sm:text-4xl"> Brand. </h1>
                    <ul className="hidden md:flex">
                        <li><Link onClick={handleClose} className="home" to="home" spy={true} smooth={true} duration={500} >Home</Link></li>
                        <li><Link onClick={handleClose} className="about" to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                        <li><Link onClick={handleClose} className="support" to="support"  smooth={true} offset={-50} duration={500} >Support</Link></li>
                        <li><Link onClick={handleClose} className="pricing" to="pricing" smooth={true} offset={-50} duration={500} >Pricing</Link></li>
                    </ul>
                </div>
                <div className="hidden pr-4 md:flex">
                    <button className="mr-4 text-black bg-transparent border-none"> Sign In </button>
                    <button className="px-8 py-3"> Sign Up </button>
                </div>
                <div className="mr-4 md:hidden" onClick={handleClick}> 
                    { !nav ? <MenuIcon  className="w-5" /> : <XIcon  className="w-5" /> }
                </div>
            </div>

            <ul className={ !nav ? "hidden" : "absolute w-full px-8 bg-zinc-200"}>
                <li className="w-full border-b-2 border-zinc-300"><Link className="home" to="home" spy={true} smooth={true} duration={500} >Home</Link></li>
                <li className="w-full border-b-2 border-zinc-300"><Link className="about" to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                <li className="w-full border-b-2 border-zinc-300"><Link className="support" to="support"  smooth={true} offset={-50} duration={500} >Support</Link></li>
                <li className="w-full border-b-2 border-zinc-300"><Link className="pricing" to="pricing" smooth={true} offset={-50} duration={500} >Pricing</Link></li>
                <div className="flex flex-col my-4">
                    <button className="px-8 py-3 mb-4 text-indigo-800 bg-transparent "> Sign In </button>
                    <button className="px-8 py-3"> Sign Up </button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;