import { Route, Routes } from "react-router-dom";
import { Header } from "../components/header";
import { ProductCards } from "../components/productCards";
import ProductOverviewPage from "./client/productOverview";
import CartPage from "./client/cart";


export function HomePage(){

    return(
        
        <div>
            <Header/>
            <div className="w-full flex flex-col items-center">
                <Routes>
                    <Route path="/" element={<h1 className="text-4xl font-bold mt-8">Welcome Home</h1>}/>
                    <Route path="/products" element={<ProductCards />}/>
                    <Route path="/overview/:id" element={<ProductOverviewPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                </Routes>
            </div>
        </div>


    )

}