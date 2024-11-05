import React from 'react'
import { useGlobalContext } from '../Context';
import { NavLink } from 'react-router-dom';
import SingleMovei from './SingleMovei';

const Moveis = () => {

   const {movei, loading} = useGlobalContext();
   
   console.log("Testing" , movei);
   console.log ('loading', loading)

   return (


    <div>
      <h1 className='text-center mt-[20px] text-3xl font-bold'>Movies</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[30px] p-4">

      
      {movei.map((curMovie, index) => {
        return (
          <div key={index} className="bg-white shadow-lg rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ... overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <NavLink to={`/movie/${curMovie.imdbID}`} className="block">
              <img src={curMovie.Poster} alt={curMovie.Title} className="w-full h-64 object-cover p-3 rounded-5px" />
              <div className="p-4 ">
                <h2 className="text-lg font-semibold">{curMovie.Title}</h2>
                <p className="text-sm text-gray-500">Year: {curMovie.Year}</p>
                <p className="text-sm text-gray-500">Type: {curMovie.Type}</p>
              </div>
            </NavLink>
          </div>
        );
      })}
    </div>
    </div>
  );

 
  
}

export default Moveis;