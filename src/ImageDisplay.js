import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './styles.css';


const ImageDisplay = () => {
  const {id} = useParams();
  const [details, setDetails] = useState([]);

  // console.log(id);

  useEffect( () => {
   
    
    axios.get(`https://hari-hara-backend.onrender.com/get/product/${id}`)
    .then((res) => setDetails(res.data))
    .catch((err) => console.log(err));
  }, []);

  
  



 

  return (
    <div className=" p-8">

    <div className="bg-stone-300 relative ">
      <h1 className="text-stone-500 font-extrabold p-2 mb-2 absolute mt-2 left-80 inline-block border-b-2 border-b-stone-300 ">{details.name}</h1>
      <img className=" h-96 w-96 absolute top-20 left-60 rounded-xl " src= {details.imageUrl} />
      <h1 className="absolute top-36 right-96 font-bold text-stone-500 inline-block  border-b-2 border-b-stone-300 ">Know About Item : </h1>
      <h1 className="absolute top-52 right-60 text-wrap w-96 text-stone-500 font-bold ">{details.description}</h1>


    </div>
    </div>
   
    

    
   
  
    
  );
}
export default ImageDisplay;