import React from 'react'

import BoraBora from '../assets/borabora.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives from '../assets/maldives.jpg';
import Mombasa from '../assets/Mombas.jpg';
import Dubai from '../assets/Dubai.jpg';

const View = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-5 px-4 text-center'>
    <h1 className='text-3xl uppercase text-slate-900 text-bold'>All-Inclusive Resorts</h1>
    <p className='py-2 text-xl text-gray-500 text-bold'>On the Caribbean's Best Beaches</p>
    <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Maldives} alt="/" />
        <img className='w-full h-full object-cover' src={BoraBora} alt="/" />
        <img className='w-full h-full object-cover' src={Maldives2} alt="/" />
        <img className='w-full h-full object-cover' src={Mombasa} alt="/" />
        <img className='w-full h-full object-cover' src={Dubai} alt="/" />
    </div>
</div>
  )
}

export default View
