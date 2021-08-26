import React from "react";
import Card from "react-bootstrap/Card";
import BrooklynLogo from "../../assets/img/education/brooklyn.jpg";
import TernaLogo from "../../assets/img/education/terna.png";
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
                    <strong>City University of New York - Brooklyn College</strong>
                    <br />
                    <strong>Duration:</strong> Dec 2018 - Mar 2021
                    <br/>
                    <strong>GPA:</strong> 3.75
                    <br/>
                    <strong> Courses - </strong>
                    <ul className="text-left">
                      <li> Information Systems Management </li>
                      <li> Database management </li>
                      <li> Networking </li>
                      <li> Operating Systems </li>
                      <li> Software Engineering</li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img id="terna-logo" variant="top" className="img-resize" src={TernaLogo} alt="Terna logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title id="terna-degree" className="text-center">Bachelor of Engineering in Electronics</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-left style">
                    <strong>Terna Engineering College, Mumbai University</strong>
                    <br />
                    <strong>Location:</strong> Mumbai, India
                    <br />
                    <strong>Duration:</strong> Jun 2011 - May 2015
                    <br/>
                    <strong>Grade:</strong> First Class
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
    </div>
  );
};

export default Education;
