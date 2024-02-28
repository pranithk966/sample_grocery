import { Link } from 'react-router-dom';
import './styles.css';


const Navbar = () => {
  return (
    <nav className=" bg-lime-500 text-white  font-semibold relative ">
      <div>
        <div id = "brand-logo">
          <img src='https://www.franchisebazar.com/public/img/business/grocery-mart/profile-pic/logo.jpg' alt='broken-image' className=' py-1 pl-1 ml-4  h-12 md:py-2 md:pl-2 md:ml-6'/>
        </div>

        <div id="brand-feauters " className='flex items-center  '>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-7 md:h-7 ml-6 md:ml-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</div>
<div className='ml-2 h-18 w-50  py-2'>
  <h2 className='text-md md:text-xl'>Delivery in 20' mins</h2>
  <p className=' text-zinc-500 text-xs md:text-lg' >H.No 1-93/73 banglore, greenfiel...</p>
</div>
          </div>     
      </div>

      <div id='links' className='absolute lg:right-10 right-12 md:right-20 top-2' >
        <Link to= '/' className='ml-2 cursor-pointer  hover:text-lg border-r px-2 '>Home</Link>
        <Link to= '/contact' className='ml-2 cursor-pointer  hover:text-lg border-r px-2'>Contact</Link>
        <a className='ml-2 cursor-pointer hover:text-lg'>About</a>

      </div>


    <div className='absolute right-10 md-right-6 lg:top-16 top-14 '>
      <input type='search' className='rounded-full focus:outline-none h-10 w-48  md:w-96 text-gray-600 px-2' placeholder='Search for items..'/>
      
      
    </div>
    </nav>


  );
}

export default Navbar;





{/* <nav className="bg-lime-400 flex items-center justify-between py-4 px-6 text-white">
{/* for brand logo */}
{/* <div className="flex flex-shrink-0 items-center">
  <img src='https://www.franchisebazar.com/public/img/business/grocery-mart/profile-pic/logo.jpg' alt = 'broken' className='h-8'/> */}
  {/* <span className="ml-2 text-lg font-semibold">My Mart</span> */}
// </div>
{/* for brand logo */}

{/* for search button */}
//   <div className="flex justify-center flex-grow">
//     <div className="w-full max-w-xl relative">
//       <input type='search' placeholder='Search for aata, coke & more...' className="bg-gray-300 pl-10 pr-4 py-2 rounded-full  border border-gray-300 focus:outline-none focus:bg-white focus:border-blue-500 lg:w-full   text-black" />
//       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//       <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-400">
// <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
// </svg>

//       </div>
//     </div>
//   </div>
{/* for search button */}

{/* for links */}
{/* <div className='flex items-center space-x-4'>
  <a className='text-gray-100 hover:shadow-md hover:shadow-slate-100' href='/' >Home</a>
  <a className="text-gray-100 hover:shadow-md hover:shadow-slate-100" href='/' >Contact</a>
  <a className='text-gray-100 hover:shadow-md hover:shadow-slate-100' href='/' >About</a>

</div> */}





// </nav> */}