import React from 'react'
import { BlackjackContext } from '../context/context';

function Computercard() {
  const[{c_total, gameStarted}, dispatch] = BlackjackContext();
  return (
    <div className='w-full relative'>
          <div className='w-full absolute -top-80 transition-all duration-300 hover:scale-105 '>
              <div className='w-full h-full relative flex justify-center'>
                  <div className='w-2/5 aspect-[3/4.4] rounded-xl bg-slate-200 flex justify-center border-2 border-red-900 shadow-xl shadow-black 
                  flex justify-center items-end px-4 '>
                      <h1 className='text-4xl font-extrabold text-red-900 mb-5 '>{gameStarted === false ? c_total : '??'}</h1>
                  </div>
              </div>
          </div>
        </div>
  )
}

export default Computercard