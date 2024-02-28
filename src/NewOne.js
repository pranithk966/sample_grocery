import { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const  NewOne = () => {
  let url = 'https://hari-hara-backend.onrender.com/get/products';
const [card, setCard] = useState([]);

  useEffect( () => {
    axios.get(url)
    .then((res) => setCard(res.data))
    .catch((err) => console.log(err));
  }, []);


  
  return (
    
    
    
    

    <div className='container mx-auto px-4 py-8'>

      <h1 className='text-stone-500 font-extrabold my-4 border-b-8 inline-block'> Deals of the Day.</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {card.map( (item, index) => (
          

          <div key={item._id} className='bg-white rounded-lg overflow-hidden shadow-lg'>
            <Link to={`/image/${item._id}`} >
            <img src={item.imageUrl} alt='broken_image' className='w-full h-40 object-cover transform transition-transform duration-500 ease-in-out hover:scale-105 '/>
            </Link>
            
            <div className='p-4'>
              <h3 className=' text-xl font-semibold mb-2'>{item.name}</h3>
              <div className=' text-gray-500 font-thin'>
              <h1>Price {item.price}/-</h1>
              <p className='border-b-2 inline-block'>Sale Price {item.sale_price}</p>

              </div>
            </div>
            </div>
         
          ))}

        </div>
    </div>
  );
}


export default NewOne;
