import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 h-20 absolute z-10 w-full'>
      <h1 className='text-3xl font-bold uppercase p-5 pl-10'>Jadoo.</h1>
      <ul className='flex items-center flex-grow justify-center'>
        <li className='pr-10 text-white  font-semibold'>Home</li>
        <li className='pr-10  text-white font-semibold'>Services</li>
        <li className='pr-10  text-white font-semibold'>Destinations</li>
        <li className='pr-10  text-white font-semibold'>Travel</li>
        <li className='pr-10  text-white font-semibold'>View</li>
      </ul>
      <div className='flex items-center'>
        <FontAwesomeIcon icon={faSearch} className='text-white mr-8' /> 
        <FontAwesomeIcon icon={faUser} className='text-white mr-8' /> 
      </div>
    </div>
  );
};

export default Navbar;


