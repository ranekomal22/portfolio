import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/carousal/one.jpg";
import Slide2 from "../../assets/img/carousal/two.jpg";
import Slide3 from "../../assets/img/carousal/three.jpg";
import Slide4 from "../../assets/img/carousal/four.jpg";
import Slide5 from "../../assets/img/carousal/five.png";
import Slide6 from "../../assets/img/carousal/six.jpg";
import ScrollDown from "../scroll-down/scroll-down.component";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide3} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide1} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide4} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide5} alt="Fifth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide6} alt="Sixth slide" />
        </Carousel.Item>

      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousal;
