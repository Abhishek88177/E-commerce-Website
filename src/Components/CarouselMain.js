import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import "../assets/css/carousel.css";


const CarouselMain =() =>{

    const isMobileView = window.innerWidth <= 550;

    // const [carouselImages , setCarouselImages] = useState();

    const carouselImages={
        image1:"https://t4.ftcdn.net/jpg/08/39/04/85/360_F_839048587_buEAlgT3XOgOHONpobdUnCUs3QujwJ14.jpg",
        image2:"https://t3.ftcdn.net/jpg/06/73/13/50/360_F_673135014_QgTc8o3SHftqiFcqKfo1uGCs2nYWTn1q.jpg",

    }

    return(
        <>
    <Carousel className='carousel-main' fade >
      <Carousel.Item className='carousel-item'>
        <img
          className="carousel-image d-block w-100"
          src={isMobileView ? "https://c4.wallpaperflare.com/wallpaper/258/149/303/dream-ride-hdr-wallpaper-preview.jpg" : carouselImages.image1}
          alt="First slide"
        />
        {/* <Carousel.Caption className='caption'>
          <h3>First Slide</h3>
          <p>Some description for the first slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img
          className="carousel-image d-block w-100"
          // src={carouselImages.image2}
          src={isMobileView ? "https://m.media-amazon.com/images/I/81BDDEmxWPL._AC_UF1000,1000_QL80_.jpg" : carouselImages.image2}

          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Some description for the second slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          // src={carouselImages.image3}
          src={isMobileView ? "https://i.pinimg.com/736x/1c/28/47/1c28478aee4ea4dbb089c8671b5ed4ee.jpg" : carouselImages.image3}

          alt="Third slide"
        /> */}
        {/* <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Some description for the third slide.</p>
        </Carousel.Caption> */}
      {/* </Carousel.Item> */}
    </Carousel>
        </>
    )
}

export default CarouselMain;