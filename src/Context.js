import React, { useContext, useEffect, useState } from "react";

export const API = `https://omdbapi.com/?&apikey=1380af18`

const AppContext = React.createContext();





const AppProvider = ({ children }) => {


   const [loading, isLoading] = useState(true);
   const [movei, getMovei] = useState([]);
   const [query, setQuery]= useState('kabhi')
   const getMoveis = async (url) => {
      try {

         const get = await fetch(url);
         const data = await get.json()
         console.log(data);

         if (data.Response === 'True') {

            isLoading(false)
            getMovei(data.Search)
            console.log("Movei data");

         }

      } catch (error) {
         console.log(error)

      }
   }

   useEffect(() => {

    var time =    setTimeout(()=>{
         getMoveis(`${API}&s=${query}`)

      },300)
    
   return ()=> clearTimeout(setTimeout)

   }, [query])

   return <AppContext.Provider value={{ loading , movei , query, setQuery }}>
      {children}
   </AppContext.Provider>

}

//global custom hook

const useGlobalContext =()=>{
   return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext, }