import styled from "styled-components";

export const DocContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  background: #616c6f;
  color: black;
  overflow-y: hidden;
`;

export const DocWrapper = styled.div`
  max-width: 1000px;
  margin: 25px auto; 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content:center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const DocCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 360px;
  padding: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 1px 3px #a4b0bd;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const DocIcon = styled.img`
  height: 260px;
  width: 260px;
  margin-bottom: 10px;
`

export const DocH1 = styled.h1`
  margin-bottom: 64px;
  color: white;
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const DocH2 = styled.h2`
  margin-bottom: 10px;
  font-size: 1rem;
`;

export const DocP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

