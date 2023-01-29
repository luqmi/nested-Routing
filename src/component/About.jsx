import React from 'react'
import { Link } from 'react-router-dom'
import image1 from "./images/b1.png"
import image2 from "./Products/car2.webp"

function About() {
  return (
<>
<div>
  <h1 className='text-center mt-5 mb-5'>About</h1>

  <section className='Main'>
    <div className='img'>
       <img className='pic' src={image1} alt="" />
    </div>
          <div className='para1'>
             <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nostrum voluptas repellendus. Quisquam, cupiditate porro suscipit saepe est consequatur esse autem molestias eveniet sint minima provident sed veritatis unde neque accusantium excepturi incidunt, culpa nemo?\</p>
          </div>
    </section>
    <section className='Main mt-5'>
    
    <div className='para1'>
             <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nostrum voluptas repellendus. Quisquam, cupiditate porro suscipit saepe est consequatur esse autem molestias eveniet sint minima provident sed veritatis unde neque accusantium excepturi incidunt, culpa nemo?\</p>
          </div>
    
    <div className='img'>
       <img className='pic' src={image2} alt="" />
    </div>
        
    </section>

</div>
</>
    )
}

export default About