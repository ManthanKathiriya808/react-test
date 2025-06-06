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
    console.log(movieVideo[0]?.key)
console.log(movieVideo[0]?.id)

    

    useEffect(()=>{
        apiMovie(movieId)
          VideoApi(movieId)
      },[movieId])





      return (
      <div className="bg-[{`https://image.tmdb.org/t/p/w300${movieInfo.backdrop_path}`}]">
        <div className="row flex border mt-10 pt-10 flex-center text-center">

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
                      
                </div>         
        </div>

        <div className="flex justify-content-center">
        
    
    {movieVideo.length > 0 && (
                    <iframe
                        width="750"
                        height="500"
                        src={`https://www.youtube.com/embed/${movieVideo[0]?.key}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
        </div>
      </div>
    )

}

export default Moredetails