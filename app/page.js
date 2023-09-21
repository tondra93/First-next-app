'use client'
import React,{useState,useEffect} from "react"

export default function Home() {
  const [data,setData] = useState([
    {id:1, item:'Burger', amount: 20},
    {id:2, item:'Fries', amount: 10},
    {id:3, item:'Shake', amount: 5},
  ]);
  const [total,setTotal] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
       <h1 className='text-4xl p-4 text-center'>Expense Tracker</h1>
       <div className='bg-slate-800 p-4 rounded-lg'>
        <form className='grid grid-cols-6 items-center text-black'>
          <input className='col-span-3 p-3 border' type='text' placeholder='Enter item'/>
          <input className='col-span-3 p-3 border mx-4' type='number' placeholder='Enter $'/>
          <button className=' text-white bg-slate-950 hover:bg-slate-900 p-3 text-lg my-5' type='submit'>Add</button>
        </form>
        <ul>
          {data.map((data) => {
            return (
              <li key={data.id} className='flex justify-between p-4 bg-slate-950'>
                <div className="p-4 w-full flex justify-between">
                <span className="capitalize">{data.item}</span>
                <span>{data.amount}</span>
                </div>
               <button className="ml-8 p-4 border-l-2 border-slate-900 hover:bg-slate-700 w-16">X</button>
              </li>
            )
          })}
        </ul>
        {data.length<1 ? ('') : (<div>
          <span>Total</span>
          <span>${total}</span>
        </div>)}
       </div>
      </div>
    </main>
  )
}
