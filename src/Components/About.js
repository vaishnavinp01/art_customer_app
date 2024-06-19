import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../CSS/About.css";
import img1 from "../images/profile/OIP2.jpeg";
import img2 from "../images/profile/OIP1.jpeg";
import img3 from "../images/profile/download5.jpeg";

const testimonials = [
  {
    text: "The artwork is truly inspiring. I love how the artist plays with colors and emotions! I’m love to paint and make art so seeing it was wonderful and I loved it",
    name: "Ridhima Pawar",
    // img: "https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png",
    img: img1,
  },
  {
    text: "I've never seen such creativity before. This artist's work speaks volumes! I really loved it They are so awesome I genuinely loved the artwork 😍😍😍",
    name: "Disha Pathak",
    // img: "https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png",
    img: img2,
  },
  {
    text: "Absolutely stunning! Each piece tells a unique story. Bought a piece from them recently and I am just in love. Will be going back again and again. Definitely recommend 10/10. Sooooo amazing they are.",
    name: "Gayatri Kulkarni",
    // img: "https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png",
    img: img3,
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="slider-div" style={{marginTop:'100px'}}>
      <section className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-block">
              <ol className="carousel-indicators tabs">
                {testimonials.map((testimonial, idx) => (
                  <li
                    key={idx}
                    className={idx === index ? "active" : ""}
                    onClick={() => handleSelect(idx)}
                  >
                    <figure>
                      <img
                        style={{
                          borderRadius: "50%",
                          height: "232px",
                          width: "232px",
                        }}
                        src={testimonial.img}
                        className="img-fluid"
                        alt={`Testimonial from ${testimonial.name}`}
                      />
                    </figure>
                  </li>
                ))}
              </ol>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="carousel-container">
                {/* <h3>WHAT OUR CLIENTS SAY</h3> */}
                <h1>Customer Review</h1>
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  controls={false}
                >
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

export default About;
