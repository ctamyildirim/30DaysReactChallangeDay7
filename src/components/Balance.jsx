import React from 'react'
import {GiTwoCoins} from 'react-icons/gi'
import { BlackjackContext } from '../context/context';


function Balance() {

  const [{balance,bet},dispatch] = BlackjackContext();

  const increase = () =>{
    let total = bet;
    bet >= balance ? alert("You can't increase your bet more than your balance") : total = bet + 250
    dispatch({
      type : 'SET_BET',
      payload: total
    })
  }
  const decrease = () =>{
    let total = bet;
    bet <= 250 ? alert("Your bet can't be 0") : total = bet - 250
    dispatch({
      type : 'SET_BET',
      payload: total
    })
  }

  return (
    <div className='w-1/4  flex flex-col items-center justify-around relative'>
      <div className='w-2/4 aspect-square relative mt-10'> 
        <div className=' w-full h-full rounded-xl bg-emerald-800  animate-[spin_10s_linear_infinite] shadow-inner shadow-slate-900 border-0'>
        </div>
        <div className='w-full flex justify-center items-center absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-3xl '>
            <GiTwoCoins className='text-yellow-200'></GiTwoCoins>
            <span className='text-slate-200'>{balance} $</span>
        </div>
      </div>
      <div className='w-full'>
          <div className='text-center text-3xl font-bold mb-2 border-2 text-white'>
            {bet} $
          </div>      
          <div className='flex justify-between mt-4'>  
            <button onClick = {increase} className=' bg-green-700 text-green-200 font-semibold border-2 border-transparent p-4 rounded-xl shadow-lg hover:shadow-green-900 
            hover:bg-slate-800 hover:border-green-700 hover:text-green-700 hover:scale-110 transition-all duration-300'>Increase Bet</button>
            <button onClick = {decrease} className=' bg-red-700 text-green-200 font-semibold border-2 border-transparent p-4 rounded-xl shadow-lg hover:shadow-red-900 
            hover:bg-slate-800 hover:border-red-700 hover:text-red-700 hover:scale-110 transition-all duration-300'>Decrease Bet</button>
          </div>
      </div>
      
    </div>
  )
}

export default Balance