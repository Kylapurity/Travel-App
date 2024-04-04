import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20'>
      <h1 className='text-3xl font-bold uppercase p-5 pl-10'>Jadoo.</h1>
      <ul className='flex items-center'>
        <li className='pr-10 text-gray-500 '>Home</li>
        <li className='pr-10 text-gray-500'>Destinations</li>
        <li className='pr-10 text-gray-500'>Travel</li>
        <li className='pr-10 text-gray-500'>View</li>
        <li className='pr-10 text-gray-500'>Book</li>
      </ul>
      <div className='flex items-center pr-8'>
        <FontAwesomeIcon icon={faSearch} className='text-black mr-8' /> 
        <FontAwesomeIcon icon={faUser} className='text-black mr-8' /> 
      </div>
    </div>
  );
};

export default Navbar;

