import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center px-4 h-20 absolute z-10 w-full'>
      <h1 className='text-3xl font-bold uppercase p-5 pl-10'>Jadoo.</h1>
      <ul className='flex flex-col md:flex-row items-center'>
        <li className='pr-10 text-white font-semibold'>Home</li>
        <li className='pr-10 text-white font-semibold'>Destinations</li>
        <li className='pr-10 text-white font-semibold'>Travel</li>
        <li className='pr-10 text-white font-semibold'>View</li>
        <li className='pr-10 text-white font-semibold'>Book</li>
      </ul>
      <div className='flex items-center'>
        <FontAwesomeIcon icon={faSearch} className='text-white mr-4 md:mr-8' /> 
        <FontAwesomeIcon icon={faUser} className='text-white mr-4 md:mr-8' /> 
      </div>
    </div>
  );
};

export default Navbar;



