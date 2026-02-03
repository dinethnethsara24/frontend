import { Link, useNavigate } from "react-router-dom";

export function Header(){
    const navigate = useNavigate();

    return(

        <div className="w-full h-[55px] shadow-2xl flex">
            <img 
                onClick={()=>{
                    navigate("/")
                }
                }
                src="/logo.png" alt="Logo" className="w-[50px] h-[50px] object-cover"/>
            <div className="w-[calc(100%-50px)] h-full bg-red-400 flex justify-center items-center font-bold gap-5 shadow-2xl">
                <Link to="/">Home</Link>
                <Link to="/products">Product</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Sign up</Link>
            </div>

        </div>
    )
}