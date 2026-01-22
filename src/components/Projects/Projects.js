import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import suicide from "../../Assets/Projects/suicide.png";
import stock from "../../Assets/Projects/stock.png";
import crop from "../../Assets/Projects/crop.png";
import { CgShutterstock } from "react-icons/cg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crop}
              isBlog={false}
              title="Crop Yield Prediction Application"
              description="Developed a machine learning–based crop yield prediction system using soil, weather, and crop data, achieving 97% prediction accuracy."
              ghLink="https://github.com/Harshvardhan011-k/ml_project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Price Predictor"
              description="Developed a stock price prediction model using LSTM neural networks, achieving high accuracy in forecasting future stock prices based on historical data."
              ghLink="https://github.com/Harshvardhan011-k/stock_app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Kisan Vikas App"

              description="Built a digital knowledge-sharing platform enabling 100+ farmers to exchange modern farming techniques and best practices through 200+ shared posts/resources."
              ghLink="https://github.com/Harshvardhan011-k/Kisan-Vikas"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Mental Health Analyzer & Movie Recommender"
              description="Collaborated an NLP-based mental health analysis system using text preprocessing and classification, achieving 90%+ accuracy."
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
