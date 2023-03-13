import styled from "styled-components";

export const ExperienceContainer = styled.div`
  background: hsla(223, 62%, 31%, 1);

  background: linear-gradient(
    225deg,
    hsla(223, 62%, 31%, 1) 7%,
    hsla(224, 61%, 33%, 1) 23%,
    hsla(225, 55%, 39%, 1) 45%,
    hsla(228, 50%, 49%, 1) 66%,
    hsla(229, 62%, 57%, 1) 81%,
    hsla(230, 90%, 68%, 1) 98%
  );

  background: -moz-linear-gradient(
    225deg,
    hsla(223, 62%, 31%, 1) 7%,
    hsla(224, 61%, 33%, 1) 23%,
    hsla(225, 55%, 39%, 1) 45%,
    hsla(228, 50%, 49%, 1) 66%,
    hsla(229, 62%, 57%, 1) 81%,
    hsla(230, 90%, 68%, 1) 98%
  );

  background: -webkit-linear-gradient(
    225deg,
    hsla(223, 62%, 31%, 1) 7%,
    hsla(224, 61%, 33%, 1) 23%,
    hsla(225, 55%, 39%, 1) 45%,
    hsla(228, 50%, 49%, 1) 66%,
    hsla(229, 62%, 57%, 1) 81%,
    hsla(230, 90%, 68%, 1) 98%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#1E3A82", endColorstr="#213D87", GradientType=1 );
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  padding: 20px 10px;

  .dateClass {
    font-weight: bold;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: #000;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
