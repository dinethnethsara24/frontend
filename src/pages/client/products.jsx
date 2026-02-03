import { Header } from "../../components/header"
import { ProductCards } from "../../components/productCards"

export function ClientProductsPage(){

    return(
        <div>
            <Header/>
            <div className="w-full min-h-[calc(100vh-80px)] bg-gray-50">
                <ProductCards/>
            </div>
        </div>
    )
}
