import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      // speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
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
      <div class="container text-center ">
        <h2> edX For Management </h2>
        <Slider {...settings}>
          <div class="col-md-3">
            <div class="card card-body">
          <img class="img-fluid" src="https://enterprisersproject.com/sites/default/files/2021-12/cio_digital_transformation_change.png"/>
          </div>
          </div>
            <div class="col-md-3">
              <div class="card card-body">
          <img class="img-fluid" src="https://www.searchenginejournal.com/wp-content/uploads/2020/10/5-fundamental-shifts-that-are-shaping-search-digital-marketing-5f7f23593ac21-1280x720.png"/>
          </div>
          </div>
          <div class="col-md-3">
            <div class="card card-body">
          <img class="img-fluid" src="https://enterprisersproject.com/sites/default/files/2021-12/cio_digital_transformation_change.png"/>
          </div>
          </div>
          <div class="col-md-3">
            <div class="card card-body">
          <img class="img-fluid" src="https://www.searchenginejournal.com/wp-content/uploads/2020/10/5-fundamental-shifts-that-are-shaping-search-digital-marketing-5f7f23593ac21-1280x720.png"/>
          </div>
          </div>
          <div class="col-md-3">
            <div class="card card-body">
          <img class="img-fluid" src="https://enterprisersproject.com/sites/default/files/2021-12/cio_digital_transformation_change.png"/>
          </div>
          </div>
          <div class="col-md-3">
            <div class="card card-body">
          <img class="img-fluid" src="https://www.searchenginejournal.com/wp-content/uploads/2020/10/5-fundamental-shifts-that-are-shaping-search-digital-marketing-5f7f23593ac21-1280x720.png"/>
          </div>
          </div>
          
        </Slider>
        
      </div>
    );
  }
}