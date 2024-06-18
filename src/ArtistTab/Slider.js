import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import '../ArtistCSS/Slider.css';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const testimonials = [
    {
      text: "I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!",
      name: "peter lee",
      img: "https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png"
    },
    {
      text: "I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!",
      name: "peter lee",
      img: "https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png"
    },
    {
      text: "I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!",
      name: "peter lee",
      img: "https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png"
    }
  ];

  return (
    <div>
      <section className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-block">
              <ol className="carousel-indicators tabs">
                {testimonials.map((testimonial, idx) => (
                  <li
                    key={idx}
                    data-target="#carouselExampleIndicators"
                    data-slide-to={idx}
                    className={idx === index ? "active" : ""}
                    onClick={() => handleSelect(idx)}
                  >
                    <figure>
                      <img
                        src={testimonial.img}
                        className="img-fluid"
                        alt=""
                      />
                    </figure>
                  </li>
                ))}
              </ol>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="carousel-container">
                <h3>WHAT OUR CLIENTS SAY</h3>
                <h1>TESTIMONIALS</h1>
                <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
                  {testimonials.map((testimonial, idx) => (
                    <Carousel.Item key={idx}>
                      <div className="quote-wrapper">
                        <p>{testimonial.text}</p>
                        <h3>{testimonial.name}</h3>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
