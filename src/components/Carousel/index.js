import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {
  SCCarousel,
  SCCarouselWrap,
  SCSlider,
  SCAssurance,
  SCQuote,
  SCCarouselDots,
  SCCarouselDot
} from "./styles";
import Assurance from "./Assurance";
import Quote from "./Quote";
import Slide from "./Slide";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    customPaging: () => {
      return <SCCarouselDot />;
    },
    appendDots: dots => {
      return <SCCarouselDots>{dots}</SCCarouselDots>;
    }
  };
  return (
    <SCCarousel>
      <SCCarouselWrap>
        <SCSlider>
          <Slider {...settings}>
            <Slide />
            <Slide />
            <Slide />
            <Slide />
          </Slider>
        </SCSlider>
        <SCAssurance>
          <Assurance />
        </SCAssurance>
        <SCQuote>
          <Quote />
        </SCQuote>
      </SCCarouselWrap>
    </SCCarousel>
  );
};

export default Carousel;
