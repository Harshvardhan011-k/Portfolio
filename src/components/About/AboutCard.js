import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Harshvardhan Kedia</span>{" "}
            from <span className="purple">Nagpur, Maharashtra, India</span>.
            <br />
            <br />
            I am currently pursuing a{" "}
            <span className="purple">
              B.Tech in Computer Science & Engineering (AIML)
            </span>{" "}
            at{" "}
            <span className="purple">
              Shri Ramdeobaba College of Engineering and Management
            </span>, maintaining a strong academic record.
            <br />
            <br />
            I have a keen interest in{" "}
            <span className="purple">
              software development, machine learning, and problem-solving
            </span>, and I enjoy building real-world applications that create
            meaningful impact.
            <br />
            <br />
            Apart from academics and coding, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving DSA & competitive programming problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing and exploring technical concepts
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing basketball and indoor games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Strive to build solutions that make a real-world difference.”
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
