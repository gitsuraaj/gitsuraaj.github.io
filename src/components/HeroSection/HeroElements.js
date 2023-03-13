import styled from "styled-components";

export const HeroContainer = styled.div`
  background: hsla(223, 62%, 31%, 1);

  background: linear-gradient(
    315deg,
    hsla(223, 62%, 31%, 1) 7%,
    hsla(224, 61%, 33%, 1) 23%,
    hsla(225, 55%, 39%, 1) 45%,
    hsla(228, 50%, 49%, 1) 66%,
    hsla(229, 62%, 57%, 1) 81%,
    hsla(230, 90%, 68%, 1) 98%
  );

  background: -moz-linear-gradient(
    315deg,
    hsla(223, 62%, 31%, 1) 7%,
    hsla(224, 61%, 33%, 1) 23%,
    hsla(225, 55%, 39%, 1) 45%,
    hsla(228, 50%, 49%, 1) 66%,
    hsla(229, 62%, 57%, 1) 81%,
    hsla(230, 90%, 68%, 1) 98%
  );

  background: -webkit-linear-gradient(
    315deg,
    hsla(223, 62%, 31%, 1) 7%,
    hsla(224, 61%, 33%, 1) 23%,
    hsla(225, 55%, 39%, 1) 45%,
    hsla(228, 50%, 49%, 1) 66%,
    hsla(229, 62%, 57%, 1) 81%,
    hsla(230, 90%, 68%, 1) 98%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#1E3A82", endColorstr="#213D87", GradientType=1 );

  font-family: "Roboto Slab", serif;

  letter-spacing: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  position: relative;
  z-index: 1;
  overflow-x: hidden;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
  }
`;

export const HomeElement = styled.img`
  width: 550px;

  @media screen and (max-width: 1180px) {
    width: 400px;
  }
  @media screen and (max-width: 930px) {
    display: none;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  width: 100%;
  position: absolute;
  display: flex;
  padding: 8px 24px;
  align-items: center;
  justify-content: space-around;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 70px;
  text-align: left;

  @media screen and (max-width: 1180px) {
    font-size: 40px;
  }
  @media screen and (max-width: 930px) {
    font-size: 60px;
  }
  @media screen and (max-width: 600px) {
    font-size: 40px;
    letter-spacing: 0.3rem;
  }
  @media screen and (max-width: 365px) {
    font-size: 45px;
    letter-spacing: 0.1rem;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  height: 40px;
  color: #fff;
  font-size: 25px;
  text-align: left;
  width: 600px;
  max-width: 700px;

  @media screen and (max-width: 1180px) {
    font-size: 16px;
    width: 500px;
  }
  @media screen and (max-width: 930px) {
    font-size: 20px;
    width: 600px;
  }
  @media screen and (max-width: 600px) {
    font-size: 18px;
    width: 350px;
    letter-spacing: 0.3rem;
  }
  @media screen and (max-width: 365px) {
    font-size: 18px;
    width: 300px;
    letter-spacing: 0.1rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
`;

export const NavBtn = styled.a`
  cursor: pointer;
  padding: 8px;
  margin-right: 10px;
  transition: all 0.2s ease-in-out;
  /* background: var(--bgColor); */

  img {
    width: 40px;
    cursor: pointer;

    :hover {
      transform: scale(1.05);
      filter: brightness(150%);
    }
  }
`;

export const ResumeSection = styled.div`
  display: flex;
  letter-spacing: 0rem;
  align-items: center;
  font-size: 1.3rem;
  justify-content: space-between;
  width: 220px;
  margin-top: 10px;
  background-color: white;
  border-radius: 50px;

  span {
    margin-left: 10px;
  }

  a {
    padding: 10px 10px;
    background-color: #e17605;
    border-radius: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    * {
      color: white;
      font-size: 1.6rem;
    }
    :hover {
      filter: brightness(120%);
    }
  }
`;
