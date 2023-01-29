import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import bic from './images/bicycle.webp'
import car from './images/c1.webp'
import bike from './images/b1.png'

function Product() {
  return (

    <>
<main className='main'>
   <h1 className='text-center mt-5'>Product</h1>

<div className='mt-5 container '>
  <div className='row d-flex justify-content-between'>

    <div class="card col-3 box text-center" style={{width: "18rem"}}>
      <img src={car} class="card-img-top" alt="..."/>
    <div class="card-body">
        <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="cars" class="btn btn-primary">View Cars</Link>
    </div>
</div>

<div class="card col-3 box text-center" style={{width: "18rem"}}>
  <img src={bike} class="card-img-top" alt="..."/>
    <div class="card-body">
       <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <Link to="bikes" class="btn btn-primary ">View Bikes</Link>
  </div>
</div>

<div class="card col-3 box text-center" style={{width: "18rem"}}>
    <img src={bic} class="card-img-top" alt="..."/>
  <div class="card-body">
       <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <Link to="bicycles" class="btn btn-primary">View BiCycles</Link>
  </div>
</div>
</div>






</div>
  







   <Outlet/>
</main>
    
    </>
  )
}

export default Product