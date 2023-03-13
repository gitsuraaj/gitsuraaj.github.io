import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  justify-content: center;
  padding: 8px;
  font-family: "Pangolin", cursive;

  p {
    letter-spacing: 0.5rem;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;

    @media screen and (max-width: 700px) {
      font-size: 1.1rem;
    }
    @media screen and (max-width: 350px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 300px) {
      font-size: 0.6rem;
    }
  }
`;
