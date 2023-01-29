import React from 'react'
import car1 from "./car1.jpg"
import car2 from "./car2.webp"
import car3 from "./car4.webp"

function Car() {
  return (

    <div >
   <h1 className='text-center mt-5'>cars</h1>


   <div id="carouselExampleControls" className="carousel slide mt-5" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={car1} className="d-block imges" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={car2} className="d-block imges" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={car3} className="d-block imges" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


    </div>
  )
}

export default Car