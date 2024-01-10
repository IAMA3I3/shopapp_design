import { useEffect, useState } from "react"
import { FaRegMoon } from "react-icons/fa"
import { GoSun } from "react-icons/go"

const ModeBtn = () => {
    const [darkMode, setDarkMode] = useState(undefined)

    const switchMode = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if (darkMode) {
            localStorage.setItem("darkMode", "true")
            window.document.documentElement.classList.add("dark")
        } else if (darkMode === false) {
            localStorage.setItem("darkMode", "false")
            window.document.documentElement.classList.remove("dark")
        } else {
            setDarkMode(localStorage.getItem("darkMode") === "true")
        }
    }, [darkMode])

    return (
        <div className=" cursor-pointer hover:animate-spin-slow">
            <div onClick={switchMode}>
                {darkMode ? <GoSun /> : <FaRegMoon />}
            </div>
        </div>
    )
}

export default ModeBtn