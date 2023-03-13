import React from "react";
import Typical from "react-typical";
import Fade from "react-reveal/Fade";
import { BsArrowRightShort } from "react-icons/bs";

import {
  HeroContainer,
  HeroH1,
  HeroP,
  HomeElement,
  HeroContent,
  SocialIcons,
  NavBtn,
  ResumeSection,
} from "./HeroElements";
import homeElement from "../../images/6.gif";
import github from "../../images/github.png";
import gmail from "../../images/gmail.png";
import linkedin from "../../images/linkedin.png";
import facebook from "../../images/facebook.png";
import medium from "../../images/medium.png";
import {
  fbURL,
  githubURL,
  linkedinURL,
  mailtoURL,
  MainSkills,
  mediumURL,
  Name,
  resumeURL,
} from "../../Data";

function HeroSection() {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <Fade right>
          <div>
            <HeroH1>
              Hey!, I'm <br />
              {Name}
            </HeroH1>
            <HeroP>
              I'm <Typical loop={Infinity} wrapper="b" steps={MainSkills} />
            </HeroP>
            <SocialIcons>
              <NavBtn href={githubURL} target="_blank">
                <img src={github} alt="" />
              </NavBtn>
              <NavBtn href={linkedinURL} target="_blank">
                <img src={linkedin} alt="" />
              </NavBtn>
              <NavBtn href={mailtoURL} target="_blank">
                <img src={gmail} alt="" />
              </NavBtn>
              <NavBtn href={mediumURL} target="_blank">
                <img src={medium} alt="" />
              </NavBtn>
              <NavBtn href={fbURL} target="_blank">
                <img src={facebook} alt="" />
              </NavBtn>
            </SocialIcons>

            <ResumeSection>
              <span> See my Resume</span>
              <a href={resumeURL} target="__blank">
                <BsArrowRightShort />
              </a>
            </ResumeSection>
          </div>
          <HomeElement src={homeElement} alt="" />
        </Fade>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
