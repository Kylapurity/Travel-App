import React from 'react';
import Dubai from '../assets/Dubai.jpg';
import maldives from '../assets/maldives.jpg';
import mombasa from '../assets/Mombas.jpg';

const destinationData = [
  {
    img: Dubai,
    title: "Dubai",
    price: "$800",
  },
  {
    img: maldives,
    title: "Maldives",
    price: "$1200",
  },
  {
    img: mombasa,
    title: "Mombasa",
    price: "$400",
  },
];

const Destinations = () => {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <h1 className=" text-2xl font-bold underline uppercase ">Our Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
        {destinationData.map((destination, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img className="w-full h-60 object-cover rounded-t-lg p-10" src={destination.img} alt={destination.title} />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{destination.title}</h2>
              <p className="text-gray-600">{destination.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;

