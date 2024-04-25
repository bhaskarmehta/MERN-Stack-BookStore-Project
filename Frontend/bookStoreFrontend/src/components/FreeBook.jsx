import React from 'react'
import styles from './FreeBook.module.css';
import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
export default function FreeBook() {

    const filterData  =  list.filter((freeBook)=>freeBook.category==='Free');
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className={`${styles.text_align}`}> 
        <h1>Free Offered Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure provident vero ex amet modi dolore.</p>
    </div>
    <div>
    <Slider {...settings}>
        {filterData.map((data)=>
           <Cards data = {data} key={data.id}/>
        )}
      </Slider>
    </div>
    </>
  )
}
