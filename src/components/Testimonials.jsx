import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 const Data = [
  {
    image:"https://oceanreefresorts.icnd-cdn.com/userfiles/beach-person-loves-water.jpg",
    name:"Mara",
    describe:"I really I had a good time during my vacation.Travel App made my vacation memorable due to their transparency and good customer service",
  },
  {
    image:"https://images.unsplash.com/photo-1519338381761-c7523edc1f46?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwb24lMjB0aGUlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
    name:" Alex",
    describe:"My experience with Travel App was amazing. I was able to book my flight and hotel at a very affordable price. I will definitely recommend Travel App to my friends and family",
  },
  {
    image:"https://media.istockphoto.com/id/1369510076/photo/happy-smiling-african-woman-sitting-on-deck-chair-at-beach.jpg?s=612x612&w=0&k=20&c=y3vJdz2Ss2sVqbzK-LqWbmghT1X9hph4pDddnBs0IY4=",
    name:"Jessica",
    describe:"My experince was amoung my best. I had a good quality time with my family. I will definitely use Travel App for my next vacation",
  },
  {
    image:"https://img.freepik.com/premium-photo/cheerful-african-american-man-using-smartphone-beach_128034-1362.jpg",
    name:"Mike",
    describe:"Searchig for a place to spend your vacation? Travel App is the best place to book your flight and hotel. I had a good time with my family during my vacation. I will definitely use Travel App for my next vacation",
  }
]

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};
  return (
    <div className='p-20'> 
      <h1 className='text-gray-600 uppercase text-xl font-bold'>Testimonials</h1>
      <h2 className='text-blue-950 text-5xl font-bold  pt-5'>What People Say <br/>
       About Us.</h2>
       <div>
       <Slider {...settings}>
          {Data.map((item,index)=>(
            <div key={index} className='flex flex-col items-center justify-center'>
              <img src={item.image} alt="testimonials" className='w-20 h-20 rounded-full'/>
              <p className='text-gray-600 text-center font-bold'>{item.name}</p>
              <p className='text-gray-600 text-center'>{item.describe}</p>
            </div>
          ))}
       </Slider>
       </div>
    </div>
  )
}

export default Testimonials;
