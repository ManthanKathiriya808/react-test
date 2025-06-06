import { useContext } from "react"
import Mycontext from "../../context/Mycontext"
import { Link } from "react-router-dom"


const MovieList = ()=>{

    const {movies,setMovies} = useContext(Mycontext)
    // console.log(movies)



    return(
          <div>
            <div class="container">
  <div class="row row-cols-3 gap-y-4     mt-5">
    
    
    {
        movies?.map((ele)=>{
            
            return(
                            <div class="col" key={ele.id}>
                            
                            <Link to={`/moredetails/${ele.id}`}  class="flex  flex-col items-center bg-white border border-gray-200 rounded-lg text-black text-decoration-none shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={    `https://image.tmdb.org/t/p/w300${ele.poster_path
}`} alt=""/>
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Title :{ele.title}</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.release_date
}</p>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Rating: {ele.vote_average
}</p>

<button className="btn btn-primary">
    Add Movie 
</button>

                                </div>
                            </Link>

    </div>
                        )
                    })
                }
  </div>
</div>
    
</div>
           
            
    )
}

export default MovieList