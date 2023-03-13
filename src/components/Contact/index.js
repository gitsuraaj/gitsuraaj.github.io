import React from "react";
import {
  Column1,
  Column2,
  Heading,
  Img,
  AboutContainer,
  AboutWrapper,
  Subtitle,
  NavBtn,
  SocialIcons,
} from "./ContactElements";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { ImLocation2 } from "react-icons/im";
import { BiMailSend } from "react-icons/bi";

import profile from "../../images/profile.jpg";
import github from "../../images/github.png";
import gmail from "../../images/gmail.png";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import facebook from "../../images/facebook.png";
import medium from "../../images/medium.png";
import {
  fbURL,
  githubURL,
  instagramURL,
  linkedinURL,
  mailtoURL,
  mediumURL,
} from "../../Data";

function Contact() {
  return (
    <AboutContainer id="contact">
      <AboutWrapper>
        <Fade left>
          <Column1>
            <Heading>Reach Out to Me</Heading>
            <p className="sub">
              DISCUSS A PROJECT? E-MAIL ME
              <BiMailSend size={25} />
            </p>
            <Subtitle>
              I am a Computer Engineer with an affinity for C++ and ReactJS, a
              passionate person when it comes to working and my goal is to
              expand my skills and knowledge in Web Development, I am a hard
              worker and eager to learn to make a valuable asset in any team.
              <br />
              <br />
              Open for opportunities: Yes
            </Subtitle>

            <span className="location">
              <ImLocation2 size={25} />
              Kota, India
            </span>

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
              <NavBtn href={instagramURL} target="_blank">
                <img src={instagram} alt="" />
              </NavBtn>
              <NavBtn href={fbURL} target="_blank">
                <img src={facebook} alt="" />
              </NavBtn>
            </SocialIcons>
          </Column1>
        </Fade>
        <Fade right>
          <Column2>
            <img src={profile} alt="" />
          </Column2>
        </Fade>
      </AboutWrapper>
    </AboutContainer>
  );
}

export default Contact;
