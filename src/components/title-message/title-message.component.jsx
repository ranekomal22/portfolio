import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;

  strong {
    font-size: 1.5em;
  }
  div {
    color: ${props => props.theme.textColor};

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 60px;
    }

    .sub {
      font-size: 40px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hello, I am
          <br />
          <span id="title-name">
            <strong>Komal Rane</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Test Automation", "API Testing",
              "Manual Testing", "Mobile Testing", "Continuous Integration", "Scrum Methodology"],
              autoStart: true,
              loop: true,
              delay: 40
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
