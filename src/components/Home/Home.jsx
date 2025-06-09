import { Pagination } from "react-bootstrap"
import Authi from "../auth/Authi"

import Filter from "../Filter/Filter"
import MovieList from "../MovieList/MovieList"
import Navbars from "../Navbar/Navbar"
import Paginations from "../pagination/Pagination"
import Geners from "../geners/Geners"


const Home = ()=>{
    return(
        <>
            <Navbars/>
            <Authi/>
        <Filter/>
    
        <MovieList/>
        <Paginations/>
        </>
    )
}
export default Home