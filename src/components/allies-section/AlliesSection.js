import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AlliesSection.css";
import { allies } from "../../data/allies";

export const AlliesSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 1,
    arrows: false,
    className: "allies-slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="allies-section">
        <Slider {...settings} className="allies-slider">
          {allies.map((allie, index) => (
            <div key={index} className="allie-slide">
              <a href={allie.website} target="_blank" rel="noreferrer">
                <img src={allie.logo} alt={allie.name} />
              </a>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};
