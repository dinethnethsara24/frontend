import { Route, Routes } from "react-router-dom";
import { Header } from "../components/header";
import { ProductCards } from "../components/productCards";


export function HomePage(){

    return(
        
        <div>
            <Header/>
            <div className="w-full flex flex-col items-center">
                <Routes>
                    <Route path="/" element={<h1 className="text-4xl font-bold mt-8">Welcome Home</h1>}/>
                    <Route path="/products" element={<ProductCards />}/>
                </Routes>
            </div>
        </div>


    )

}