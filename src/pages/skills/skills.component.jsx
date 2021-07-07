import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import { Card, Row, Col} from "react-bootstrap";

import { skills } from "./skills-data";
import "./skills.styles.css";
import Image from "react-bootstrap/Image";

const Skills = () => {
    return (
        <div id="skills">
            <h1 className="pt-3 text-center font-details-b pb-3">SKILLS</h1>
            <CardDeck>
            <Row className="d-flex justify-content-around">
            <Row>
                <Card className="focus mt-2 mb-2 ">
                    <Card.Body>
                        {/* Development Platforms*/}
                        <Card.Title id="card-development" className="text-center  card-title">Development Platforms</Card.Title>
                        <hr />
                        <Card.Text className="card-text d-flex justify-content-center flex-row">
                        
                            {skills.developmentPlatforms.map((skill, index) => (
                                <Card className= "w-25 h-25 position-center border-0 ">
                                    <Card.Body className="p-2">
                                        <span className="c-3" key={index}>
                                            <a id={"skill-"+skill.skillName} className="card-text d-flex justify-content-center " href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                            </a>
                                        </span>
                                    </Card.Body>
                                    <Card.Text className=" text-center">
                                        <span className="caption ">{
                                            skill.skillName}</span>
                                    </Card.Text>
                                </Card>
                            ))}
                            
                        </Card.Text>
                       
                    </Card.Body>
                </Card>
            </Row>
            
            <Row>
                <Card className="focus mt-2 mb-2">
                    <Card.Body>
                        {/* Automation Frameworks */}
                        <Card.Title id="card-automation" className="text-center  card-title">Test Automation Frameworks</Card.Title>
                        <hr />
                        <Card.Text className="card-text d-flex justify-content-center flex-row">
                            {skills.automation.map((skill, index) => (
                                <Card className="p-0 w-25 position-center border-0">
                                    <Card.Body className="p-1" >
                                        <span className="c-3" key={index}>
                                            <a id={"skill-"+skill.skillName} className="card-text d-flex justify-content-center " href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                            </a>
                                        </span>
                                    </Card.Body>
                                    <Card.Text className=" text-center">
                                        <span className="caption ">{
                                            skill.skillName}</span>
                                    </Card.Text>
                                </Card>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card className="focus mt-2 mb-2 ">
                    <Card.Body>
                        {/* Frontend */}
                        <Card.Title id="card-frontend" className="text-center  card-title">Frontend</Card.Title>
                        <hr />
                        <Card.Text className="card-text d-flex justify-content-center flex-row">

                            {skills.frontend.map((skill, index) => (
                                <Card className= "w-25 h-25 position-center border-0 ">
                                    <Card.Body className="p-2">
                                        <span className="c-3" key={index}>
                                            <a id={"skill-"+skill.skillName} className="card-text d-flex justify-content-center " href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                            </a>
                                        </span>
                                    </Card.Body>
                                    <Card.Text className=" text-center">
                                        <span className="caption ">{
                                            skill.skillName}</span>
                                    </Card.Text>
                                </Card>
                            ))}

                        </Card.Text>

                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Col>
                    <Card className="focus mt-2 mb-2">
                        <Card.Body>
                            {/* Project Management Tools */}
                            <Card.Title id="card-management" className="text-center  card-title">Project Management Tools</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-center flex-row">
                                {skills.projectManagementTools.map((skill, index) => (
                                    <Card className="p-0 w-25 h-25 position-center border-0">
                                        <Card.Body className="p-1">
                                            <span className="c-3" key={index}>
                                                <a id={"skill-"+skill.skillName} className="card-text d-flex justify-content-center " href={skill.link} target="_blank" rel="noopener noreferrer">
                                                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                                </a>
                                            </span>
                                        </Card.Body>
                                        <Card.Text className=" text-center">
                                            <span className="caption ">{
                                                skill.skillName}</span>
                                        </Card.Text>
                                    </Card>
                                ))}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="focus mt-2 mb-2">
                        <Card.Body>
                            {/* Continuous Integration */}
                            <Card.Title id="card-ci"className="text-center  card-title">Continuous Integration</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-center flex-row">
                                {skills.continuousIntegration.map((skill, index) => (
                                    <Card className="p-0 w-25 h-25 position-center border-0">
                                        <Card.Body className="p-1" >
                                            <span className="c-3" key={index}>
                                                <a id={"skill-"+skill.skillName} className="card-text d-flex justify-content-center " href={skill.link} target="_blank" rel="noopener noreferrer">
                                                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                                </a>
                                            </span>
                                        </Card.Body>
                                        <Card.Text className=" text-center">
                                            <span className="caption ">{
                                                skill.skillName}</span>
                                        </Card.Text>
                                    </Card>
                                ))}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="focus mt-2 mb-2">
                        <Card.Body>
                            {/* API Testing */}
                            <Card.Title id="card-api-testing" className="text-center  card-title">API Testing</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-center flex-row">
                                {skills.apiTesting.map((skill, index) => (
                                    <Card className="p-0 w-25 h-25 position-center border-0">
                                        <Card.Body className="p-1">
                                            <span className="c-3" key={index}>
                                                <a id={"skill-"+skill.skillName} className="card-text d-flex justify-content-center " href={skill.link} target="_blank" rel="noopener noreferrer">
                                                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                                </a>
                                            </span>
                                        </Card.Body>
                                        <Card.Text className=" text-center">
                                            <span className="caption ">{
                                                skill.skillName}</span>
                                        </Card.Text>
                                    </Card>
                                ))}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="focus mt-2 mb-2">
                        <Card.Body>
                            {/* Hosting Platforms */}
                            <Card.Title id="card-hosting" className="text-center  card-title">Hosting Platforms</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-center flex-row">
                                {skills.hostingPlatforms.map((skill, index) => (
                                    <Card className="p-0 w-25 h-25 position-center border-0">
                                        <Card.Body className="p-1" >
                                            <span className="c-3" key={index}>
                                                <a id={"skill-"+skill.skillName} className="card-text d-flex justify-content-center " href={skill.link} target="_blank" rel="noopener noreferrer">
                                                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                                </a>
                                            </span>
                                        </Card.Body>
                                        <Card.Text className=" text-center">
                                            <span className="caption ">{
                                                skill.skillName}</span>
                                        </Card.Text>
                                    </Card>
                                ))}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Row>
            </CardDeck>
        </div>
    );
};

export default Skills;
