import { useEffect, useState } from "react"
import Mycontext from "./Mycontext"



const FetchApi =({children})=>{
  
// let api_key = `?api_key=2254f6a103ea45b2d2965212918395da`
// let b_url = `https://api.themoviedb.org/3/`
// let end_point = `discover/movie`
// let img_endPoint = `https://image.tmdb.org/t/p/w500/`
// let url = `https://api.themoviedb.org/3/discover/movie?api_key=2254f6a103ea45b2d2965212918395da`

// let genarr = JSON.parse(localStorage.getItem("genarr")) || []

// let genre_end_point = `genre/movie/list`;
// let genre_api_url = b_url+genre_end_point+api_key;

// let api_url = b_url+end_point+api_key+`&page=`+page+`&with_genres=${genarr.join(",")}&append_to_response=videos`

const [movies,setMovies] = useState([])
const [singleMovies,setSingleMovies] = useState([])
const [value,setValue] = useState(1)
const [genres,setGeneres] = useState([])

const movieGeners = async()=>{
          const res =await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=2254f6a103ea45b2d2965212918395da`)
        const resp =await res.json()
       setGeneres(resp.genres)
}
    const useApi =async ()=>{
        const res =await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2254f6a103ea45b2d2965212918395da&page=${value}`)
        const resp =await res.json()
        // console.log(resp)
        setMovies(resp.results)
    }
 
    const handlePrev = ()=>{
        setValue(value-1) 
    }
    const handleNext = ()=>{
        setValue(value+1)
    }
// console.log(value)
    

useEffect(()=>{
    useApi()
   
},[value])

useEffect(()=>{
movieGeners()
   
},[])

    return(
            <Mycontext.Provider value={{movies,setMovies,singleMovies,value,setValue,handlePrev,handleNext,setGeneres,genres}}>
                {children}
            </Mycontext.Provider>
    )

}

export default FetchApi