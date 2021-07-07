import React from "react";
import Card from "react-bootstrap/Card";
import BrooklynLogo from "../../assets/img/education/brooklyn.jpg";
import "./education.styles.css";

const Education = () => {
  return (
    <div id="education">
      <h1 className="pt-3 text-center font-details-b pb-3">EDUCATION</h1>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img id="brooklyn-logo" variant="top" className="img-resize" src={BrooklynLogo} alt="Brooklyn logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title id="brooklyn-degree" className="text-center">Master of Science in Information Systems</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-left style">
                    <strong>Location:</strong> Brooklyn, NY
                    <br />
                    <strong>Duration:</strong> Jan 2019 - Dec 2020
                    <br/>
                    <strong> Courses - </strong>
                    <ul className="text-left">
                      <li> Information Systems Management </li>
                      <li> Database management </li>
                      <li> Networking </li>
                      <li> Operating Systems </li>
                      <li> Data Structures </li>
                      <li> Software Engineering</li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
    </div>
  );
};

export default Education;
