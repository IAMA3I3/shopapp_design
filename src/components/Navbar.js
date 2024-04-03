import { NavLink } from "react-router-dom"
import Logo from "../assets/logo.png"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [expandedNav, setExpandedNav] = useState(false)
    const [offset, setOffset] = useState(0)
    const [openAcctMenu, setOpenAcctMenu] = useState(false)
    // const [pos, setPos] = useState({top: "top-0", right: "right-0"})

    const toggleNav = () => {
        setExpandedNav(!expandedNav)
    }

    const handleOpenAcctMenu = (e) => {
        let pX = e.clientX
        let pY = e.clientY

        // setPos({top: pY, right: (window.innerWidth - pX)})
        // setPos({top: `top-[${pY}px]`, right: `right-[${(window.innerWidth - pX)}px]`})
        setOpenAcctMenu(true)
        let subMenu = document.querySelector('#sub-menu')
        if (subMenu) {
            subMenu.style.top = (pY + 30) + 'px'
            subMenu.style.right = (window.innerWidth - pX - 50) + 'px'
        }
    }

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.scrollY)
        }
    }, [])

    return (
        <>
            <div className={`${(expandedNav || (offset > 0)) ? " opacity-100" : " opacity-60"} transition z-30 md:flex md:justify-between md:items-center md:px-4 fixed w-screen top-0 bg-white backdrop-blur-2xl shadow-lg font-semibold shadow-black/30 py-4 text-center`}>
                <div className={`${expandedNav ? " max-h-screen" : " max-h-0 mt-0"} md:max-h-screen md:*:inline-block md:*:my-0 md:*:px-2 md:mt-0 md:z-10 *:py-1 *:my-2 transition-all overflow-hidden  mt-[25px] *:block  hover:*:text-primary tracking-wide`}>
                    <NavLink to={'/'}>HOME</NavLink>
                    <NavLink to={'/'}>EXPLORE</NavLink>
                </div>
                <div className=" absolute flex w-screen justify-between items-center top-0 h-[60px] px-4">
                    <div className=" flex-1 text-left">
                        <div onClick={toggleNav} className=" md:hidden *:w-7 *:h-1 *:bg-gray-800 inline-block *:my-1 *:rounded-full cursor-pointer">
                            <div className={`${expandedNav ? " rotate-[405deg] translate-y-2" : " rotate-0 translate-y-0"} transition`}></div>
                            <div className={`${expandedNav ? " opacity-0" : " opacity-100"} transition`}></div>
                            <div className={`${expandedNav ? " -rotate-[405deg] -translate-y-2" : " rotate-0 translate-y-0"} transition`}></div>
                        </div>
                    </div>
                    <NavLink to={'/'}>
                        <img src={Logo} className=" h-[50px]" alt="" />
                    </NavLink>
                    <div className=" flex-1 text-right">
                        <NavLink to={'/'} className={' inline-block md:hidden'}>
                            <div className=" border-2 rounded py-1 px-4 border-gray-800 hover:text-primary hover:border-primary active:scale-95">JOIN</div>
                        </NavLink>
                    </div>
                </div>
                <div className={`${expandedNav ? " max-h-screen" : " max-h-0"} md:max-h-screen md:*:inline-block md:*:my-0 md:*:px-2 md:last:*:p-0 md:last:*:mx-2 md:z-10 *:py-1 *:my-2 md:last:*:inline-block transition-all overflow-hidden *:block last:*:hidden  hover:*:text-primary tracking-wide`}>
                    <NavLink to={'/'}>BECOME AN ARTISAN</NavLink>
                    <div onClick={(e) => handleOpenAcctMenu(e)} className=" cursor-pointer">ACCOUNT</div>
                    <NavLink to={'/'}>
                        <div className=" border-2 rounded py-1 px-4 border-gray-800 hover:text-primary hover:border-primary active:scale-95">JOIN</div>
                    </NavLink>
                </div>
            </div>
            {
                // openAcctMenu &&
                <div id="sub-menu" className={`${!openAcctMenu && " hidden"} fixed shadow-lg border-2 bg-white rounded-lg overflow-hidden divide-y-2 z-50 font-semibold *:cursor-pointer *:py-1 *:px-3 hover:*:text-primary hover:*:bg-gray-200`}>
                    <div className="">Sign In</div>
                    <div className="">My Account</div>
                    <div className="">Orders</div>
                </div>
            }
            {
                openAcctMenu &&
                <div onClick={() => setOpenAcctMenu(false)} className=" fixed top-0 left-0 w-screen h-screen z-40"></div>
            }
        </>
    )
}

export default Navbar