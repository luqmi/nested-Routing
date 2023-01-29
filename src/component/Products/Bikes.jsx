import React from 'react'
import bk1 from "./f1.jpg"
import bk2 from "./f2.png"
import bk3 from "./f3.jpg"

function Bikes() {
  return (
    <>
    <div>
    <h1 className='text-center mt-5'>Bikes</h1>  

    <div id="carouselExampleControls" class="carousel slide mt-5" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={bk1} class="d-block imges" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bk2} class="d-block imges" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bk3} class="d-block imges" alt="..."/>
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
    </>
  )
}

export default Bikes