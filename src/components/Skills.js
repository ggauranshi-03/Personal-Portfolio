import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I have over a year of experience as a full stack developer, with
                a focus on improving the user experience. I am a Full stack and
                Blockchain intern at Prodigal AI and have been working as a web
                developer for the USS ACM Student Chapter from the past 5
                months. Prior to that, I completed an internship at The Sparks
                Foundation where I worked as a web developer and design intern,
                during which I developed a full stack banking project.
              </p>
              <p>
                Solidity, Blockchain, Smart Contract, Dapps, DeFi |Node.js |
                Express.js | Reactjs, Nextjs, MUI | JavaScript, jQuery |
                Responsive Design | SQL MySQL | Chrome, Edge | NoSQL MongoDB |
                WordPress | HTML, HTML5, CSS, CSS3
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web2 Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Cloud Computing</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Machine Learning</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Web3 Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
