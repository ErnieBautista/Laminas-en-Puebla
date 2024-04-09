import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import "./carrusel.scss";

export const Carrusel = () => {
  return (
    <div className="slidesYT pt-5">
      <h2 className="textYT">Videos de nuestro trabajo</h2>
    <Carousel interval={null} id="/" className="mt-2">
      <Carousel.Item>
        <Container>
          <iframe
            className="wide-photo mx-auto my-5"
            src="https://youtube.com/embed/UoV8ZdKn86U?feature=shared"
            title="Youtube video"
            allowFullScreen
            />
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <iframe
            className="wide-photo mx-auto my-5"
            src="https://youtube.com/embed/UoV8ZdKn86U?feature=shared"
            title="Youtube video"
            allowFullScreen
            />
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <iframe
            className="wide-photo mx-auto my-5"
            src="https://youtube.com/embed/UoV8ZdKn86U?feature=shared"
            title="Youtube video"
            allowFullScreen
            />
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <iframe
            className="wide-photo mx-auto my-5"
            src="https://youtube.com/embed/UoV8ZdKn86U?feature=shared"
            title="Youtube video"
            allowFullScreen
            />
        </Container>
      </Carousel.Item>
    </Carousel>
            </div>
  );
};
