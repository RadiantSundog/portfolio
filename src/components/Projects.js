import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Seedling",
      description: "Home garden maintenance and plant identification",
      imgUrl: projImg1,
      link: "https://github.com/RadiantSundog/seedling",
    },
    {
      title: "CarCar",
      description: "Automotive business tracking",
      imgUrl: projImg2,
      link: "https://github.com/RadiantSundog/carcar",
    },
    {
      title: "Tasker",
      description: "Organize team projects and tasks with ease",
      imgUrl: projImg3,
      link: "https://github.com/RadiantSundog/tasker",
    },
    {
      title: "Jot",
      description: "React Front-end for a note taking app",
      imgUrl: projImg4,
      link: "https://github.com/RadiantSundog/jot",
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are repositories for some of my works!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
