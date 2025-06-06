import { useContext, useState } from "react"
import Mycontext from "../../context/Mycontext"


const Geners = ()=>{

const [filter,setFilter] = useState([])
    const {movies,setMovies,genres} = useContext(Mycontext)
// console.log(genres)
// console.log(movies)
// const filterGenres(item){

//     const filtered = genres
// }

// console.log(filter)

const genersFilter = (generId)=>{
// console.log(genres[0].name)

const item = movies.filter((ele)=> ele.genre_ids.includes(generId))
setMovies(item)
// console.log(item)
}


return(

        <>
        <div className="row row-cols-12 gap-3 mt-4 px-5">
            {   
     genres?.map((ele)=>{

         
    return(
        <div className="col" key={ele.id}>
            <button onClick={()=>genersFilter(ele.id)}  className="btn btn-warning btn-sm">{ele.name}</button>
        </div>
    )
    
    })}   </div>
        </>
)
}
export default Geners