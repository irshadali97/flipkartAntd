import React from 'react'
import { Carousel } from 'antd';
import './Carousel.css';


function Slider() {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    return (
    <div className="outer">
        <Carousel autoplay >
        <div className="carousel">
      <h3 style={contentStyle}><img src="https://rukminim1.flixcart.com/flap/1688/280/image/65d5d5bf538f3f94.jpg?q=50"/></h3>
        </div>
        <div className="carousel">
      <h3 style={contentStyle}><img src="https://rukminim1.flixcart.com/flap/1688/280/image/3a687095a8533ad1.jpg?q=50"/></h3>
        </div>
        <div className="carousel">
      <h3 style={contentStyle}><img src="https://rukminim1.flixcart.com/flap/1688/280/image/108077a7cdd29d6c.jpg?q=50"/></h3>
        </div>
        <div className="carousel">
      <h3 style={contentStyle}><img src="https://rukminim1.flixcart.com/flap/1688/280/image/ca077afc3ada7fb0.jpg?q=50" /></h3>
        </div>
    </Carousel> 
    </div>
    )
}

export default Slider;
