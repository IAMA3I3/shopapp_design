import { NavLink } from "react-router-dom"
import { SlMenu } from "react-icons/sl";
import { useState } from "react";
import ModeBtn from "./ModeBtn";

const Navbar = () => {
    const [expanded, setExpanded] = useState(false)

    const toggleMenu = () => {
        setExpanded(!expanded)
    }

    return (
        <div className=" w-full bg-slate-600 dark:bg-slate-900 text-white shadow">
            <div className=" container flex flex-col md:flex-row md:justify-between">
                <div className=" py-1 flex items-center justify-between md:gap-8">
                    <NavLink className=" text-2xl md:text-3xl tracking-wider" to={'/'}>Brand</NavLink>
                    <div className="">
                        <ModeBtn />
                    </div>
                    <div onClick={toggleMenu} className=" md:hidden text-2xl cursor-pointer">
                        <SlMenu />
                    </div>
                </div>
                <div className={`${expanded ? 'py-2 max-h-full' : ' py-0 max-h-0' } transition-spacing md:max-h-full overflow-hidden flex flex-col md:flex-row md:py-0 *:md:px-8 *:md:my-0 *:py-2 hover:*:bg-white hover:*:text-gray-800 *:my-1 *:rounded-md *:md:rounded-none *:px-4`}>
                    <NavLink className={({ isActive }) => (isActive ? ' bg-white text-gray-800' : '')} to={'/'}>Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? ' bg-white text-gray-800' : '')} to={'/about'}>About</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar