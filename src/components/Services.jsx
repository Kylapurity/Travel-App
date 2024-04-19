import React from 'react';
import beach from '../assets/beach.jpg';
import flights from '../assets/flights.jpg';
import Hot_Air from '../assets/Hot-Air-Balloon-Festivals.jpg';
import tarvel from '../assets/travel-concept-with-baggage.jpg';

const servicesData = [
  {
    img: beach,
    title: "Relaxing Beach Getaway",
    description: "Indulge in a serene retreat by the ocean with our relaxing beach getaway package. Spend your days lounging on the soft sands, taking refreshing dips in the crystal-clear waters, and soaking up the warm sunshine."
  },
  {
    img: flights,
    title: "Exciting Flight Adventures",
    description: "Embark on an exhilarating journey through the skies with our exciting flight adventures. Take off on thrilling flights high above the clouds, where you'll witness breathtaking views of stunning landscapes and majestic landmarks."
  },
  {
    img: Hot_Air,
    title: "Scenic Hot Air Balloon Rides",
    description: "Experience the beauty of the world from a bird's-eye view with our scenic hot air balloon rides. Drift gracefully through the air as you admire panoramic vistas of rolling countryside, picturesque vineyards, and charming villages below."
  },
  {
    img: tarvel,
    title: "Memorable Travel Experiences",
    description: "Embark on a journey of discovery and adventure with our memorable travel experiences. Explore vibrant cultures, savor exotic cuisines, and immerse yourself in breathtaking landscapes as you travel to destinations near and far."
  },
];

const Services = () => {
  return (
    <div className='flex flex-col items-center pt-5'>
      <h1 className='text-3xl font-bold underline uppercase'>We Offer The Best Services</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 p-20'>
        {servicesData.map((service, index) => (
          <div key={index} className='w-full'>
            <img src={service.img} alt={service.title} className='w-full h-40 object-cover' />
            <div className='p-4'>
              <h2 className='text-xl font-bold mb-2 underline text-blue-950'>{service.title}</h2>
              <p className='text-gray-700 font-semibold leading-snug '>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;



