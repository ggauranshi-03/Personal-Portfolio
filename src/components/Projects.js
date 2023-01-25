import { Col, Row, Container, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import proj1 from "../assets/img/proj1.jpg"
import proj2 from "../assets/img/proj2.png"
import proj3 from "../assets/img/proj3.png"
import proj4 from "../assets/img/proj4.jpg"
import proj5 from "../assets/img/proj5.png"
import proj6 from "../assets/img/proj6.png"
import proj7 from "../assets/img/proj7.png"
import TrackVisibility from "react-on-screen"

export const Projects = () => {
    const projects1 = [
        {
            title: "Chat Dapp",
            description: "Its is the decentralised Chat application based on Blockchain and the smart Contracts are written in solidity.In this your can invite and chat with them publicaly.It uses Metamask for the transaction.Tech Stack used was Next.js, Solidity, Tailwind CSS, etc.",
            imgURL: proj1,
        },
        {
            title: "Keeper-Note Taking App",
            description: "This is the front-end project which includes React.js, JSX, HTML, CSS, Javascript. You can keep your Notes in this app.",
            imgURL: proj2,
        },
        


    ]

    const projects2 = [
        {

            title: "Algosage",
            description: "It is a Backtesting & automated vaults engine in which I worked in Internship which had front-end built on Next.js and Whitepaper was integrated using gitbook which was authorised by Login/Signup function which used MongoDB as Database. It was deployed on algosage.io using Microsoft Azure.",
            imgURL: proj5,

        },
        {

            title: "ChatBeast",
            description: "This is chat application with database connectivity where you can invite your friends to use interact on this platform. This has multiuser functionality and users can communicate through text messages, audio call, video call, can share images, pdfs and other documents.",
            imgURL: proj5,

        },
        {

            title: "Newsletter Signup",
            description: "A newsletter signup which records the the details of users in the mailchimp server.",
            imgURL: proj5,

        },
        {

            title: "Basic Banking System",
            description: "Built a Full stack Banking System in which the skills used are HTML, CSS, Bootstrap, Javascript as front-end and PHP, Mysql as back-end . In this we can transfer money from one user to another and all the data is stored in MySql database .",
            imgURL: proj6,

        },

        {

            title: "Zoom App Clone",
            description: "To develop a app in which people can join the meeting through link provided and share their audio and video . Front-end of the project was integrated to backed with the help of Node and Express. They can also Chat with each other.",
            imgURL: proj7,

        },
        {
            title: "Disney + Hotstar Clone",
            description: "This is the front-end project which includes HTML, CSS, Bootstrap, Javascript.",
            imgURL: proj1,
        },
        {
            title: "Keeper-Note Taking App",
            description: "This is the front-end project which includes React.js, JSX, HTML, CSS, Javascript. You can keep your Notes in this app.",
            imgURL: proj2,
        },
        {
            title: "Drum Kit Sound Playe",
            description: "Built a drum kit sound player. The website plays 8 different drum sounds on clicking",
            imgURL: proj3,
        },
        {
            title: "Animal-Tinder",
            description: "It's an online dating app for dogs.",
            imgURL: proj4,
        },
        
    ]

    const projects3 = [
        {
            title: "Heart- Disease Predictor ",
            description: "It is a ML model which predicts whether a patient has heart disease or not based on various input parameters. The dataset for this project was taken from kaggle and jupyter notebook was used as a workspace",
            imgURL: proj1,
        },
        {
            title: "Chatbot",
            description: "A simple UI based chat bot was developed during ACM Internal Hackathon. This bot responds to some of the major queries faced by students on USS ACM website.",
            imgURL: proj2,
        },
        


    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animated_animated animate__slideInUp" : ""}>
                                    <h2>Projects</h2>
                                    <p>Take a look on my some projects</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Full Stack Web3 Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Full Stack Web2 Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        AI&ML Projects
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content >
                                <Tab.Pane eventKey="first">
                                    <Row>{
                                        projects1.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>{
                                        projects2.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>{
                                        projects3.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}