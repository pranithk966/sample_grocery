import { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import Slider from "react-slick";

const Circle = () => {
  const [banners, setBanners] = useState([]);
  
  let url = 'https://hari-hara-backend.onrender.com/get/category';
  useEffect( () => {
    axios.get(url)
    .then( (res) => {
     setBanners(res.data);
    })
    .catch( (err) => console.log(err));
    
  }, []);

  
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay : true,
  arrows : true,
  autoplaySpeed : 1000
};

  return (
    <div className='mx-auto max-w-screen-xl mt-12'>
      <h1 className='text-stone-500 my-4 font-bold border-b-2'>Shop by category &nbsp; &#9759; </h1>
    <Slider {...settings}>
    {banners.map( (item, ind) => (
      <div key={item._id} className='px-4 ml-'>
        <img src={item.categoryImage} className='rounded-full  object-cover max-w-full h-auto ' height={100} width={100} style={{aspectRatio : '1 / 1'}}/>
        <div className='mt-3 text-sm font-semibold ml-4'>

        <span className=''>{item.categoryName}</span>
        </div>
      </div>
    ))}

    </Slider>
    <h1 className='border-b-2 text-stone-500 mb-4'></h1>
  </div>
    


  );

 
  
  
}


export default Circle;