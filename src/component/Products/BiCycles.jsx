import React from 'react'
import f1 from "./cycle1.jpg"
import f2 from "./cycle2.webp"
import f3 from "./cycle3.jpg"

function BiCycle() {
  return (
    
    <div>
    <h1 className='text-center mt-5'>BiCycle</h1> 


    <div id="carouselExampleControls" class="carousel slide mt-5" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={f1} class="d-block imges" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={f2} class="d-block imges" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={f3} class="d-block imges" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



    </div>
   
  )
}

export default BiCycle