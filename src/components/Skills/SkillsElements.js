import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  padding: 20px 10px;
  height: 100%;
  justify-content: space-around;
  /* width: 100%; */

  @media screen and (max-width: 935px) {
    flex-direction: column;
  }
`;

export const AllSkills = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  color: #63615f;
  /* font-size: 6rem; */

  align-items: left;
  justify-content: center;

  @media screen and (max-width: 1200px) and (min-width: 935px) {
    p {
      font-size: 0.9rem;
    }
  }
  @media screen and (max-width: 700px) {
    p {
      font-size: 0.9rem;
    }
  }
`;

export const Heading = styled.h1`
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: 600;
  align-items: left;
  color: #000;

  @media screen and (max-width: 1200px) and (min-width: 935px) {
    font-size: 35px;
  }
  @media screen and (max-width: 700px) {
    font-size: 35px;
  }
`;

export const SkillElement = styled.div`
  img {
    width: 600px;

    @media screen and (max-width: 1310px) {
      width: 500px;
    }
    @media screen and (max-width: 1200px) {
      width: 400px;
    }
    @media screen and (max-width: 1035px) {
      width: 300px;
    }
  }
`;

export const SkillIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const SkillIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px 10px;

  .icon {
    font-size: 3rem;
  }

  p {
    margin-top: 15px;
    font-size: 0.6rem;
  }

  :hover {
    color: #6d7adf;
    transform: scale(1.02);
  }
  @media screen and (max-width: 1200px) and (min-width: 935px) {
    .icon {
      font-size: 2.5rem;
    }
    p {
      margin-top: 10px;
      font-size: 0.5rem;
    }
  }
  @media screen and (max-width: 700px) {
    .icon {
      font-size: 2.5rem;
    }
    p {
      margin-top: 10px;
      font-size: 0.5rem;
    }
  }
`;

export const SubPart = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
