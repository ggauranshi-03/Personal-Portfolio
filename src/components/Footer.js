import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import G_logo from "../assets/img/Glogo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={G_logo} alt="Logo" />
          </Col>
          <Col sn={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/gauranshi-gupta-414865227/">
                <img src={navIcon1} />
              </a>
              <a href="#">
                <img src={navIcon2} />
              </a>
              <a href="https://www.instagram.com/gauranshigupta2003/">
                <img src={navIcon3} />
              </a>
            </div>
            <p>CopyRight 2022. Developed by Gauranshi Gupta</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
