import React from 'react'

const Membros = (props) => {
  return (
    <div className="card flex items-center rounded p-2 my-6 bg-zinc-800 cursor-pointer hover:bg-slate-400 hover:text-gray-950">
      <img src={props.membrosImg} className='w-[150px] h-[150px] rounded-full object-cover' alt="" />
      <div className='flex flex-col'>
      <h1 className="card-content text-white pl-4">{props.membrosName}</h1>
      <span className="card-content text-white pl-4">{props.membrosTitle}</span> 
      </div>
    </div>
  )
}

export default Membros