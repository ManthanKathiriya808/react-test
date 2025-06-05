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

    const useApi =async ()=>{
        const res =await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2254f6a103ea45b2d2965212918395da`)
        const resp =await res.json()
        // console.log(resp)
        setMovies(resp.results)
    }
 



useEffect(()=>{
    useApi()
   
},[])

    return(
            <Mycontext.Provider value={{movies,setMovies,singleMovies}}>
                {children}
            </Mycontext.Provider>
    )

}

export default FetchApi