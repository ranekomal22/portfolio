import React from "react";
import Card from "react-bootstrap/Card";
import Hexaware from "../../assets/img/experience/hexawarelogo.webp";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={Hexaware} alt="Hexaware logo" />
                
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Software Engineer In Test</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                  <strong>Project: AIR CANADA</strong>
                    <br />
                    <strong>Technologies:</strong> Java, NodeJS, SQL, Selenium WebDriverIO, Cucumber, Chai.JS, Git, Jenkins, Jira, Postman, Swagger, WAVE, NVDA
                    <br />
                    <strong>Duration:</strong> Jul 2015 - Jun 2017
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>Performed automation and manual testing of Web and Mobile applications</li>
                      <li>Developed Test Plans, Test Cases, Test Scenarios and Test Strategies</li>
                      <li> Provided application maintenance while working as `Production Support` </li>
                      <li> Performed Behavior driven automated testing </li>
                      <li> Performed back-end API testing using Postman and Swagger </li>
                      <li> Used JIRA for project management, Bug Tracking, Reporting and Analysis </li>
                      <li>Performed User Acceptance and Regression testing for every release to ensure prod release</li>
                      <li> Performed Smoke, Integration, Regression, System, and User Acceptance Testing</li>
                      <li>Performed Accessibility Testing using Wave and NVDA tools</li>

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
        
    </div>
  );
};

export default Experience;
