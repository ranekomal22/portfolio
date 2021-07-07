import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_ReactTipCalculator from "../../assets/img/projects/reactTipCalculator.webp";
import L_WebDriverIO from "../../assets/img/projects/webDriverIO.webp";
import L_Portfolio from "../../assets/img/projects/portfolio1.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: tip-calculator*/}
        <ImageEvent
            date="01/08/2020"
            className="text-center"
            text="React Tip Calculator"
            src={L_ReactTipCalculator}
            alt="React Tip calculator"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This React application calculates the amount of tip per table and per person if split option is chosen
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Takes in the desired tip percentage</li>
                          <li>Includes the option to split the tip amount by number of people at the table</li>
                          <li>GitHub is used for version control</li>
                          <li>Project is hosted on Netlify hosting platform and it is configured for continuous deliveries</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              React JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              Hosting platform: Netlify
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://kr-tipcalculator-a8969f.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ranekomal22/react-tip-calculator"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://drive.google.com/file/d/14mDuZ6SIEOC0X8m73-rFI2GZlkYkbiq3/view?usp=sharing"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


{/* Project: WebDriverIO with Cucumber */}
<ImageEvent
            date="16/09/2020"
            className="text-center"
            text="Automated tests with WebDriverIO and Cucumber"
            src={L_WebDriverIO}
            alt="WebDriverIO"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is an UI Automation Test framework that is capable of behavioral testing using web browsers.
                        It written to test workflows on http://automationpractice.com. These tests are developed in Javascript with WebDriverIO and Cucumber.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>It gives us a base foundation framework for writing and executing BDD tests in any environment </li>
                          <li>It start the Selenium2-Server-Standalone service and performs Browser actions</li>
                          <li> Report can be generated after tests completion so that results can be presented nicely.
                              Allure report has been used for reporting</li>
                          <li>Host Machine Requirements: NodeJS, NPM and chrome browser</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          
                          <li>
                            <span className="p-2">
                              Node.js
                            </span>
                          </li>
                          <li>
                              <span className="p-2">
                                WebDriverIO
                              </span>
                          </li>
                          <li>
                             <span className="p-2">
                               Cucumber
                             </span>
                          </li>

                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/ranekomal22/wdio_example"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://drive.google.com/file/d/1YSXNhwG57BgBRRzlhh8xZ8BTJr77JJk6/view?usp=sharing"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Portfolio */}
          <ImageEvent
            date="07/12/2019"
            className="text-center"
            text="Portfolio"
            src={L_Portfolio}
            alt="Portfolio"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is my first portfolio website
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Illustrate My profile</li>
                          <li>Elaborate My work experience and projects</li>
                          <li>Easily noticeable contact links and send email functionality</li>
                          <li>Fully functional administration panel</li>
                          <li>Live link to the webapp</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              Bootstrap 4
                            </span>
                          </li> 
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-center flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/ranekomal22/portfolio"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
