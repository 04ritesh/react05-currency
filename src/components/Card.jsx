import React, { useState } from 'react'
const Card = ({Fromhere,setValue,FromVal,allKeys,setCurrency,Val}) => {
    console.log('from card',Val)
  return (
    <div className='h-40 w-96 bg-slate-200'>
      <p className='flex content-center mt-4 m-3'>{Fromhere}</p>
      <input 
      className='w-20 flex ml-5 content-start'
      type='text'
      placeholder='amo'
      value={Val}
      onChange={(e)=>setValue(Number(e.target.value))}
       />
       <div  className=''>
       <select
        onChange={(e)=>setCurrency(e.target.value)}
       >
       {allKeys.map((key)=>(
        <option
       
        >
            {key}
        </option>
       ))}
       </select>
       </div>
    </div>
  )
}

export default Card
