import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/Slider.css";
import { SliderData } from "./../../AllData";

function AutoPlay() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="card" id="card">
          <img
            src={SliderData[0].cover}
            className="card-img"
            id="img-hero"
            alt="..."
          />
          <div className="card-img-overlay">
            <h5 className="card-title">50% Off For Your First Shopping</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              molltatis, ipsum id unde quod minima? Error provident
              consequuntur, magni maiores et voluptas molestiae ut.
            </p>
            <p class="card-text btn btn-secondary opacity-75 fs-5 ">
              Vist For More Collections
            </p>
          </div>
        </div>
        <div className="card " id="card">
          <img
            src={SliderData[3].cover}
            className="card-img"
            id="img-watch"
            alt="..."
          />
          <div className="card-img-overlay">
            <h5 className="card-title">50% Off For Your First Shopping</h5>
            <p className="card-text">
              olor sit amet consectetur adipisicing elit. Ad mollitia
              perspiciatis nobis, or provident consequuntur, magni maiores et
              voluptas molestiae ut.
            </p>
            <p className="card-text btn btn-secondary opacity-75 fs-5 ">
              Vist For More Collections
            </p>
          </div>
        </div>
        <div className="card " id="card">
          <img
            src={SliderData[1].cover}
            className="card-img"
            id="img"
            alt="..."
          />
          <div className="card-img-overlay">
            <h5 className="card-title">50% Off For Your First Shopping</h5>
            <p className="card-text">
              sum dolor sit amet consectetur adipisicing elit. Ad mollitia
              perspiciatis nobis, dolores cumque, ipsam veritatis, ipsum id unde
              quod minima? Error pre ut.
            </p>
            <p className="card-text btn btn-secondary opacity-75 fs-5 ">
              Vist For More Collections
            </p>
          </div>
        </div>
        <div className="card" id="card">
          <img
            src={SliderData[2].cover}
            className="card-img"
            id="img"
            alt="..."
          />
          <div className="card-img-overlay">
            <h5 className="card-title">50% Off For Your First Shopping</h5>
            <p className="card-text">
              u dolor sit amet consectetur adipisicing elit. Ad mollitia
              perspiciatism id unde quod mient consequuntur, magni maiores et
              voluptas molestiae ut.
            </p>
            <p className="card-text btn btn-secondary opacity-75 fs-5  ">
              Vist For More Collections
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
