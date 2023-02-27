import { Col, Row, Container, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import proj1 from "../assets/img/proj1.jpg";
import proj2 from "../assets/img/proj2.png";
// import proj3 from "../assets/img/proj3.png";
// import proj4 from "../assets/img/proj4.jpg";
import proj5 from "../assets/img/proj5.png";
import proj6 from "../assets/img/proj6.png";
import proj7 from "../assets/img/proj7.png";
import proj8 from "../assets/img/chatdapp.jpg";
// import proj10 from "../assets/img/chaindrive.jpg";
import proj9 from "../assets/img/defi.jpg";
import proj10 from "../assets/img/blockdrive.jpg";
import proj11 from "../assets/img/doll.jpg";
// import proj11 from "../assets/img/car.jpg";
import proj12 from "../assets/img/algosage.jpg";
import proj13 from "../assets/img/chatbeast.jpg";
import proj14 from "../assets/img/trello.jpg";
import proj15 from "../assets/img/dog.jpg";
import proj16 from "../assets/img/heart.jpg";
import proj17 from "../assets/img/garbage.jpg";
import proj18 from "../assets/img/chatbot.jpg";

import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    {
      title: "Chat Dapp",
      description:
        "Its is the decentralised Chat application based on Blockchain and the smart Contracts are written in solidity.In this your can invite and chat with them publicaly.It uses Metamask for the transaction.Tech Stack used was Next.js, Solidity, Tailwind CSS, etc.",
      imgURL: proj8,
    },
    {
      title: "Decentralized Drive",
      description:
        "This project is build using solidity and tested and deployed using hardhat. Its basically a decentralized version of Google Drive which has share access and display all pictures functionaliy. All the images are stored pinata IPFS file network.",
      imgURL: proj10,
    },
    {
      title: "NFT Market Place",
      description:
        "An NFT Market place for users to upload their NFTs with a minimum price. All the NFTs are listed and users can buy those NFTs by connecting their metamask wallet.",
      imgURL: proj11,
    },
    {
      title: "DeFi Tipping Dapp",
      description:
        "A decentralized application used to receive donations and tips messages. Here the user needs to connect their metamask wallet to perform transactions. The smart contract is build in solidity and deployed through hardhat",
      imgURL: proj9,
    },
  ];

  const projects2 = [
    {
      title: "Algosage",
      description:
        "It is a Backtesting & automated vaults engine in which I worked in Internship which had front-end built on Next.js and Whitepaper was integrated using gitbook which was authorised by Login/Signup function which used MongoDB as Database. It was deployed on algosage.io using Microsoft Azure.",
      imgURL: proj12,
    },
    {
      title: "ChatBeast",
      description:
        "This is chat application with database connectivity where you can invite your friends to use interact on this platform. This has multiuser functionality and users can communicate through text messages, audio call, video call, can share images, pdfs and other documents.",
      imgURL: proj13,
    },
    {
      title: "Basic Banking System",
      description:
        "Built a Full stack Banking System in which the skills used are HTML, CSS, Bootstrap, Javascript as front-end and PHP, Mysql as back-end . In this we can transfer money from one user to another and all the data is stored in MySql database .",
      imgURL: proj6,
    },

    {
      title: "Zoom App Clone",
      description:
        "To develop a app in which people can join the meeting through link provided and share their audio and video . Front-end of the project was integrated to backed with the help of Node and Express. They can also Chat with each other.",
      imgURL: proj7,
    },
    {
      title: "Disney + Hotstar Clone",
      description:
        "Disney + Hotstar Clone build with HTML, CSS, Javascript. It has a neat UI with navabar, crousel and card components.",
      imgURL: proj1,
    },
    {
      title: "Trello Clone",
      description:
        "Its a task manangement app build which has MYSQL database integration. The fronend is developed on Reactjs and has a responsive UI. I created this app along with my team under the USS ACM Chapter.",
      imgURL: proj14,
    },
  ];

  const projects3 = [
    {
      title: "Heart-Disease Predictor",
      description:
        "It is a ML model which predicts whether a patient has heart disease or not based on various input parameters. The dataset for this project was taken from kaggle and jupyter notebook was used as a workspace",
      imgURL: proj16,
    },
    {
      title: "Chatbot",
      description:
        "A simple UI based chat bot was developed during ACM Internal Hackathon. This bot responds to some of the major queries faced by students on USS ACM website.",
      imgURL: proj18,
    },
    {
      title: "Dog Breed Identifier",
      description:
        "This project aims to classify dog breeds using deep learning with TensorFlow and a convolutional neural network (CNN). We will use the Stanford Dogs Dataset which contains 20,580 images of 120 breeds of dogs.",
      imgURL: proj15,
    },
    {
      title: "Waste~Wizard",
      description:
        "This app is help you to classify your waste with 9 different waste materials. The recycling process of these waste materials are very hard and even it's very difficult to classify these 9 different waste materials at recycling factory. ",
      imgURL: proj17,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animated_animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Take a look on my some projects</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Web3 Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Full Stack Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">AI&ML Projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects1.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects3.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
