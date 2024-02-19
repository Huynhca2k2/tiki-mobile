import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgTiki1 from '../assets/images/img1.jpg'
import imgTiki2 from '../assets/images/img2.jpg'
import imgTiki3 from '../assets/images/img3.jpg'
import imgTiki4 from '../assets/images/img4.jpg'
import imgTiki5 from '../assets/images/img5.jpg'
import imgTiki6 from '../assets/images/img6.jpg'

export default function Carousel() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
        ]
    };

    return (
        <Slider {...settings}>
        <div className='px-2'>
            <img src={imgTiki1} alt="hinh anh tiki" className='object-cover rounded-md shadow-md shadow-slate-300'/>
        </div>
        <div className='px-2'>
            <img src={imgTiki2} alt="hinh anh tiki" className='object-cover rounded-md shadow-md shadow-slate-300'/>
        </div>
        <div className='px-2'>
            <img src={imgTiki3} alt="hinh anh tiki" className='object-cover rounded-md shadow-md shadow-slate-300'/>
        </div>
        <div className='px-2'>
            <img src={imgTiki4} alt="hinh anh tiki" className='object-cover rounded-md shadow-md shadow-slate-300'/>
        </div>
        <div className='px-2'>
            <img src={imgTiki5} alt="hinh anh tiki" className='object-cover rounded-md shadow-md shadow-slate-300'/>
        </div>
        <div className='px-2'>
            <img src={imgTiki6} alt="hinh anh tiki" className='object-cover rounded-md shadow-md shadow-slate-300'/>
        </div>
        
    </Slider>
  )
}
