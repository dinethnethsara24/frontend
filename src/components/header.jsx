import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { useState } from "react";

export function Header() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full h-[70px] bg-gray-900 shadow-md border-b border-white/10 flex items-center px-10 font-poppins">            <div className="flex-1 flex justify-start">
            <img
                onClick={() => navigate("/")}
                src="/logo.jpg"
                alt="Logo"
                className="w-[50px] h-[50px] object-cover cursor-pointer hover:opacity-80 transition-opacity"
            />
        </div>
            <nav className="flex items-center gap-8">
                <Link to="/" className="relative text-white hover: font-medium group transition-colors duration-300">
                    Home
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/products" className="relative text-white hover: font-medium group transition-colors duration-300">
                    Products
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </nav>

            <div className="flex-1 flex justify-end items-center gap-5">
                <Link to="/search">
                    <FaSearch className="text-[20px] text-white hover:scale-110 transition-all" />
                </Link>


                <div className="relative">
                    <button onClick={() => setOpen(!open)}>
                        <FaUserLarge className="text-[20px] text-white hover:scale-110 transition-all cursor-pointer" />
                    </button>

                    {open && (
                        <div className="absolute right-0 mt-3 w-40 bg-white/50 backdrop-blur-md rounded-lg shadow-lg py-2">
                            <Link
                                to="/login"
                                className="block px-4 py-2 text-gray-800 group"
                                onClick={() => setOpen(false)}
                            >
                                <span className="block font-semibold font-poppins transition-transform duration-300 group-hover:scale-110">Login</span>
                            </Link>
                            <Link
                                to="/register"
                                className="block px-4 py-2 text-gray-800 group"
                                onClick={() => setOpen(false)}
                            >
                                <span className="block font-semibold font-poppins transition-transform duration-300 group-hover:scale-110">Sign Up</span>
                            </Link>
                        </div>
                    )}
                </div>

                <Link to="/cart">
                    <FaShoppingCart className="text-[22px] text-white hover:scale-110 transition-all" />
                </Link>
            </div>
        </header>
    );
}