import React,{useState} from 'react';
import { Carousel } from 'react-bootstrap';
import {Link} from 'react-router-dom'

import image1 from '../img/1.jpg';
import image2 from '../img/2.jpg';
import image3 from '../img/3.jpg';
import image4 from '../img/4.jpg';
import image5 from '../img/5.jpg';
import image6 from '../img/6.jpg';
import image7 from '../img/7.jpg';
import image8 from '../img/8.jpg';

import s1 from '../img/s1.jpg'
import s2 from '../img/s2.jpg'
import s3 from '../img/s3.jpg'
import s4 from '../img/s4.jpg'
import s5 from '../img/s5.jpg'
import s6 from '../img/s6.jpg'
import s7 from '../img/s7.jpg'
import s8 from '../img/s8.jpg'
import s9 from '../img/s9.jpg'
import s10 from '../img/s10.jpg'
import s11 from '../img/s11.jpg'
import s12 from '../img/s12.jpg'

import '../body/styles.css'
import Api from '../api.js'

const CarouselContainer = () => {

  const [Items,setItems]=useState(Api)

  return (
  <div>
    {/* slider */}
    <Carousel className="carousel" fade={true} pause={false}>
     
      <Carousel.Item interval={20}>
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Carousel.Item>
      
      <Carousel.Item interval={2000}>
        <img className="d-block w-100"   src={image2}  alt="Third slide"    />
      </Carousel.Item>
     
      <Carousel.Item interval={2000}>
        <img   className="d-block w-100" src={image3} alt="Third slide"   />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img   className="d-block w-100" src={image4} alt="Third slide"   />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img   className="d-block w-100" src={image5} alt="Third slide"   />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img   className="d-block w-100" src={image6} alt="Third slide"   />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img   className="d-block w-100" src={image7} alt="Third slide"   />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img   className="d-block w-100" src={image8} alt="Third slide"   />
      </Carousel.Item>
    
    
    </Carousel>

    {/* cards */}
    <div className="cardd">

      
        {
          Items.map(e=>{
            return(
              <div className="c">
                <h3>{e.name}</h3>
                <img src={e.img}/>
                <p>{e.price}</p>
              </div>
            )
          })
        }       




    </div>
    {/* carddiv ended */}
  
    <div className="top">
      Back to the Top
    </div>

  </div>
  // main div ended



  )
}

export default CarouselContainer;