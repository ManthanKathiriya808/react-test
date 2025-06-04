import { useContext } from "react"
import { useParams } from "react-router-dom"
import Mycontext from "../../context/Mycontext"



const Moredetails = ()=>{
    const {singleMovies} = useContext(Mycontext)
    const {movieId} = useParams()

      return (
       <div ></div>
    )

}

export default Moredetails