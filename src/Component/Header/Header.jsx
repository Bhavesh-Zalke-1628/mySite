import { Link, useNavigate } from "react-router-dom"
import Container from "../Container/Container"
import bhavesh from '../../assets/Profile.jpeg'
import { Menu, X } from 'lucide-react'
import { useState } from "react"
function Header() {

    const navigate = useNavigate()

    const [mobileDrawer, setMobileDrawer] = useState(false)

    function toggleNavbar() {
        setMobileDrawer(!mobileDrawer)
    }
    const navItems = [
        {
            name: 'Skill',
            // slug: '/login',
        },
        {
            name: 'Product'
        }
    ]
    return (
        <div className=" sticky top-0 backdrop-blur-0 text-white w-dvw px-10 bg-black h-[10vh] flex items-center justify-between">
            <div className="p-2 hidden lg:flex rounded-lg bg-gradient-to-r from-orange-500 to-orange-800">
                bhavesh
            </div>

            <ul className="hidden  lg:flex  ml-14 space-x-10">
                {navItems.map((el, index) => {
                    return (
                        <li
                            className=" text-xl"
                            key={index}>
                            {el.name}
                        </li>
                    );
                })}
            </ul>
            <div className="  flex items-center lg:flex-shrink-0">
                <img
                    className=" rounded-full w-10 "
                    src={bhavesh}
                    alt="logo image"
                />
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
                <button
                    onClick={toggleNavbar}
                >
                    {mobileDrawer ? <X /> : <Menu />}
                </button>

            </div>
        </div>
    )
}

export default Header