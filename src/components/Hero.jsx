import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import beachVid from '../assets/beachVid.mp4';

const Hero = () => {
  return (
    <div>
      <video
        className='w-full h-full object-cover'
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4 pt-15'>
        <h1 className='text-black text-3xl font-bold uppercase'>Looking for a place to relax?</h1>
        <h2 className='py-4 font-semibold'>Find your dream getaway today.</h2>
        <form
          className='max-w-[700px] mx-auto w-full sm:px-6 border p-1 rounded-md text-black bg-gray-100/90'
        >
          <div className='flex items-center'>
            <input
              className='bg-transparent w-full sm:w-[300px] md:w-[400px] font-[Poppins] focus:outline-none flex-1'
              type='text'
              placeholder='Search Destinations'
            />
            <button type='submit' className='ml-2'>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;


