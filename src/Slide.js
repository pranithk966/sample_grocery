import axios from 'axios';
import './styles.css';
import Slider from "react-slick";
import { useEffect, useState } from 'react';




export default function SimpleSlider() {

  const [banner, setBanner] = useState([]);

useEffect ( () => {

  axios.get('https://hari-hara-backend.onrender.com/get/banner-images')
  .then( (res) => {
    // console.log(res.data)
    setBanner(res.data);
  })
  .catch( (err) => {
    console.log(err);
  })
}, []);

 
  
  

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    arrows : true,
    autoplaySpeed : 2000
  };
  
  return (
    
 <Slider {...settings}>
 

{banner.map( (i,ind) => (
  <div key={i._id} className='h-96 relative bg-orange-400 bg-opacity-10'>

    <h1 className='absolute text-stone-400 font-bold left-5 top-5'>{i.bannerName}</h1>
    
    <h1 className=' absolute text-stone-500 font-extrabold left-96 top-48'>Burger or Chips We deliver everything..</h1>

    <button className='text-white font-semibold bg-lime-400 absolute rounded-full p-3 top-60 left-96'>Shop Now &rarr;</button>

<img src = {i.bannerImageUrl} className='absolute right-4 top-4 rounded-md h-72 w-fit' />
  </div>

))}

</Slider>
    
    );
}


