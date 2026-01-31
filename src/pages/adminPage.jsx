import { Link, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';


export default function AdminPage() {

    return(

        <div className='w-full h-screen flex '>
            <div className='h-full w-[300px] flex flex-col '>
                <Link to='/admin/products'>Products</Link>
                <Link to='/admin/orders'>Orders</Link>
                <Link to='/admin/users'>Users</Link>
            </div>
                <div className='h-full w-[calc(100%-300px)] bg-yellow-300'>
                    <Routes>
                        <Route path='/products'element={<h1>products</h1>}/>
                        <Route path='/orders' element={<h1>orders</h1>}/>
                        <Route path='/users' element={<h1>users</h1>}/>
                    </Routes>
                    
                </div> 
        </div>
    )
}