import styled from "styled-components";
import { AboutText } from "./about";
import { Skills } from "./skills";

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  padding: 100px 0;

  @media (max-width: 850px) {
    scale: 0.8;
    padding: 40px 0;
    display: block;
  }

  @media (max-width: 480px) {
    padding: 0px 0;
  }
`;

export function About() {
  return (
    <Container>
      <AboutText />
      <Skills />
    </Container>
  );
}
