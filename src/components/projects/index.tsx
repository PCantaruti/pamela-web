import styled from "styled-components";
import { Soon } from "./soon";
import { Title } from "../title";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 100px 0px;

  @media (max-width: 850px) {
    scale: 0.8;
    padding: 40px 0;
    display: block;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

const ContentBoxSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px 70px;
  flex: 1;

  @media (max-width: 480px) {
    padding: 0px 10px;
  }
`;
export function Projects() {
  return (
    <Container>
      <ContentBoxSection>
        <Title title="Projetos" />
        <ProjectsContainer>
          <Soon />
        </ProjectsContainer>
      </ContentBoxSection>
    </Container>
  );
}
