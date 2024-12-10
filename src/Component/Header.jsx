import { Link, useNavigate } from "react-router-dom";
import bhavesh from "../assets/Profile.jpeg";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
    const navigate = useNavigate();
    const [mobileDrawer, setMobileDrawer] = useState(false);

    function toggleNavbar() {
        setMobileDrawer(!mobileDrawer);
    }

    const navItems = [
        {
            name: "Skill",
            slug: "/skill",
        },
        {
            name: "Project",
            slug: "/project",
        },
        {
            name: "Contact",
            slug: '/contact'
        }
    ];

    return (
        <div className="sticky top-0 backdrop-blur-0 text-white w-full px-6 bg-black h-[10vh] flex items-center justify-between">
            {/* Logo */}
            <div className="p-2 hidden lg:flex rounded-lg bg-gradient-to-r from-orange-500 to-orange-800">
                Bhavesh
            </div>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex ml-14 space-x-10">
                {navItems.map((el, index) => (
                    <Link to={el.slug} key={index}>
                        <li className="text-xl">{el.name}</li>
                    </Link>
                ))}
            </ul>

            {/* Profile Image */}
            <div className="flex items-center lg:flex-shrink-0">
                <img className="rounded-full w-10" src={bhavesh} alt="Profile" />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleNavbar}>
                    {mobileDrawer ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav Drawer */}
            {mobileDrawer && (
                <div className="absolute top-[10vh] left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4">
                    {navItems.map((el, index) => (
                        <Link
                            to={el.slug}
                            key={index}
                            className="text-xl"
                            onClick={() => setMobileDrawer(false)}
                        >
                            {el.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Navbar;
