import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Mycontext from "../../context/Mycontext"

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const Moredetails = ()=>{

    const {movieId} = useParams()
    const [movieInfo,setMovieInfo] = useState([])
    const [movieVideo,setMovieVideo] = useState([])
    const [cast,setCast] = useState([])
   const apiMovie =async (movieId)=>{
        const res =await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2254f6a103ea45b2d2965212918395da`)
        const resp =await res.json()
        // console.log(resp)
        setMovieInfo(resp)
        // setMovies(resp.results)
    }
   const VideoApi =async (movieId)=>{
        const res =await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=2254f6a103ea45b2d2965212918395da`)
        const resp =await res.json()
        // console.log(resp)
        setMovieVideo(resp.results)
        // setMovies(resp.results)
    }
   const creditApi =async (movieId)=>{
        const res =await fetch(`

https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=2254f6a103ea45b2d2965212918395da`)
        const resp =await res.json()
        // console.log(resp)
        setCast(resp.cast)
    }

    console.log(cast)

    

    useEffect(()=>{
        apiMovie(movieId)
          VideoApi(movieId)
          creditApi(movieId)
      },[movieId])





      return (
      <div className="bg-[{`https://image.tmdb.org/t/p/w300${movieInfo.backdrop_path}`}]">
        <div className="row flex border pt-3 flex-center text-center">

                 <div className="col border text-start">
                  <img  src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`} className="border mx-auto"/>
                  </div>
                <div className="col flex  flex-column   border">

                  
                        <div className="title fs-large">
                              <h1>Title : {movieInfo.title}</h1>
                        </div>
                        <div className="title fs-large">
                              <h1>Tagline : {movieInfo.tagline}</h1>
                        </div>
                        <div className="title fs-small">
                              <h5>overview : {movieInfo.
overview
}</h5>
                        </div>
                        <div className="title fs-small">
                              <h5>release_date : {movieInfo.
release_date
}</h5>
                        </div>
                      
                        <div className="title fs-small flex">
                              <h5>Production :
                                
                                 {
                                  movieInfo?.production_companies?.map((ele)=>{
                                  // console.log(ele.name)
                                  return (
                                   <div className="flex justify-between w-100  me-4 pt-5 mt5">
                                     <p> {ele.name}</p>
                                    <img src={`https://image.tmdb.org/t/p/w300${ele.logo_path}`} style={{width:"60px"}} alt="" />
                                   </div>
                                  )

                              })}
                              </h5>
                        </div>
                      
                </div>         
        </div>

        <div className="flex justify-content-center">
        
    
    {movieVideo.length > 0 && (
                    <iframe
                        width="100%"
                        height="250"
                        src={`https://www.youtube.com/embed/${movieVideo[0]?.key}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}

        </div>

        <div className="flex flex-column mt-2 px-4 justify-center">
          <h3>Cast :</h3> 
          <div className="row">
            {
              cast.map((ele)=>{

                return(
            <div className="col">

              <div>
                {

                  ele.profile_path ?
                  
                  <img src={`https://image.tmdb.org/t/p/w300/${ele.profile_path}`} className="rounded-circle " style={{width:"60px"}} alt="" />
                  : <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 " >
    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>
                }
                <p>{ele.name}</p>

              </div>
            </div>

                )
              })
            }
          </div>
        </div>
      </div>
    )

}

export default Moredetails