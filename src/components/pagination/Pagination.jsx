import { useContext, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Mycontext from '../../context/Mycontext';


const Paginations = ()=>{

    const {value,setValue,handlePrev,handleNext} = useContext(Mycontext)

    // console.log(value)

return(
    <>
   <Pagination className='mt-5 flex  justify-center '>
      <Pagination.First onClick={handlePrev}/>
     
      <Pagination.Item>{value}</Pagination.Item>
      <Pagination.Ellipsis />

      

      
  
      <Pagination.Last onClick={handleNext}/>
    </Pagination>
    </>
)
}

export default Paginations