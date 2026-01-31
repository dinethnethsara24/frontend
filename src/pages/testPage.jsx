import {useState} from 'react';


export function TestPage() {

    const [count, setCount] = useState(0);
    const [status, setStatus] = useState("Passed");

    return(

      <div className='w-full h-screen flex justify-center items-center'>     
        <div className='w-[300px] h-[200px] shadow flex justify-center items-center'>
            <button onClick={() => setCount(count-1)} className='bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-600 cursor-pointer'>-</button>
            <span className='mx-4 text-xl font-bold'>{count}</span>
            <button onClick={() => setCount(count+1)} className='bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-600 cursor-pointer'>+</button>
        </div>

        <div className='w-[300px] h-[200px] shadow flex flex-col'>
            <span className='mx-4 text-xl font-bold flex justify-center'>{status}</span>
            <button onClick={()=>setStatus("Passed")} className='bg-green-500 text-white font-bold px-4 py-2 rounded hover:bg-green-600 cursor-pointer m-2'>Pass</button>   
            <button onClick={()=>setStatus("Failed")} className='bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-600 cursor-pointer m-2'>Fail</button>
        </div>
      </div>
     )
}