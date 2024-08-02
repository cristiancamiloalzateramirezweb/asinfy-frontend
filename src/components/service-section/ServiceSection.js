import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./ServiceSection.css";
import { services } from "../../data/services";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ServiceSection = () => {
  let sliderRefService = useRef(null);

  const next = () => {
    sliderRefService.slickNext();
  };

  const previous = () => {
    sliderRefService.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 1,
    arrows: false,
    className: "service-list",
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      <section className="service-section" id="servicios">
        <div className="service-content">
          <h3>Nuestros servicios</h3>
          <button className="slick-btn prev-btn" onClick={previous}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <Slider
            ref={(slider) => {
              sliderRefService = slider;
            }}
            {...settings}
            className="service-list"
          >
            {services.map((service) => {
              return (
                <div className="col-service">
                  <div className="service-item" key={service.id}>
                    {service.status === "Activo" ? (
                      <Link className="card" /* to={`/${service.id}`} */>
                        <div className="card-icon">
                          <span className="icon">
                            <i className={service.icon}></i>
                          </span>
                        </div>
                        <div className="card-text">
                          <h4>{service.title}</h4>
                          <p>{service.text}</p>
                        </div>
                      </Link>
                    ) : (
                      <div className="card inactive">
                        <div className="enabled">Próximamente</div>
                        <div className="card-icon">
                          <span className="icon">
                            <i className={service.icon}></i>
                          </span>
                        </div>
                        <div className="card-text">
                          <h4>{service.title}</h4>
                          <p>{service.text}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </Slider>
          <button className="slick-btn next-btn" onClick={next}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </section>
    </>
  );
};
