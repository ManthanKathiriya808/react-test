import Filter from "../Filter/Filter"
import MovieList from "../MovieList/MovieList"
import Navbars from "../Navbar/Navbar"


const Home = ()=>{
    return(
        <>
            <Navbars/>
        <Filter/>
        <MovieList/>
        </>
    )
}
export default Home