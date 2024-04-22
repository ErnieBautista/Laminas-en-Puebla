import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import "./carrusel.scss";

export const Carrusel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    console.log(index);
  };

  return (
    <div className="slidesYT pt-5 " id="videos">
      <h2 className="textYT">Videos de nuestro trabajo</h2>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        id="/"
        className="mt-2"
      >
        <Carousel.Item>
          <Container>
            <ReactPlayer
              className="wide-photo mx-auto my-5 w-75"
              url="https://www.youtube.com/embed/aG6qpdOTVfM?si=k3gvLeLxl_TKhPNM"
              title="Youtube video"
              height={700}
              volume={0.15}
              playing={index !== 0 ? false : true}
            />
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <ReactPlayer
              className="wide-photo mx-auto my-5 w-75"
              url="https://www.youtube.com/embed/49cxCJcgxvc?si=Pp_krj-BnqnXcxm5"
              title="Youtube video"
              height={700}
              volume={0.15}
              playing={index !== 1 ? false : true}
            />
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <ReactPlayer
              className="wide-photo mx-auto my-5 w-75"
              url="https://youtube.com/embed/UoV8ZdKn86U?feature=shared"
              title="Youtube video"
              height={700}
              volume={0.15}
              playing={index !== 2 ? false : true}
            />
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
