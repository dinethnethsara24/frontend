import { use, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";


export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function handleLogin() {

        try{
         const response = await axios.post("http://localhost:3000/api/user/login", {
            email: email,
            password: password
        })

        toast.success("login sucessful")
        console.log(response.data)

        }catch(e){
            toast.error(e.response.data.message);
        }
    }    


  return ( 
    <div className="w-screen h-screen  bg-[url('/login.jpg')] bg-cover bg-center flex justify-center items-center">
            <div className="w-[500px] h-[600px] backdrop-blur-md rounded-[25px] shadow-xl justify-center items-center flex flex-col ">
                <input 
                    onChange={
                        (e)=>{
                            setEmail(e.target.value)
                        }
                    }

                    value={email}

                className="w-[300px] h-[50px] border border-gray-300 rounded-lg justify-center my-[20px]"/>
                <input 
                    onChange={
                        (e) =>{
                            setPassword(e.target.value)
                        }
                    }

                    value={password}

                type="password"className="w-[300px] h-[50px] border border-gray-300 rounded-lg "/>
                <button onClick={handleLogin} className="w-[300px] h-[50px] bg-blue-500 text-white font-bold rounded-lg font-bold text-white my-[20px] cursor-pointer hover:bg-blue-600">Login</button>
                <button  className="w-[300px] h-[50px] bg-blue-500 text-white font-bold rounded-lg font-bold text-white cursor-pointer hover:bg-blue-600">Sign Up</button>
            </div>    
    </div>
  )
} 