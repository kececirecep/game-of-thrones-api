import React from 'react'

const Familias = (props) => {
  return (
    <div className="card flex items-center rounded p-2 my-6 bg-zinc-800 hover:bg-slate-400 hover:text-gray-950 cursor-pointer">
      <img src={props.familyImg} alt="" />
      <p className="card-content text-white pl-4">{props.familyText}</p>
    </div>
  )
}

export default Familias