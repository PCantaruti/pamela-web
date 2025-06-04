import { Contact } from "./contact";
import { CircularIcons } from "./circular-icons";
import styled from "styled-components";
import { Intro } from "./intro";
import { ContentBox } from "../content-box";
import { BackgroundWrapper } from "../background-wrapper";

const BackGroundAboutIntro = styled.div`
  background-image: url("/bg-intro.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: calc(100vh - 72px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column; /* agora coluna */
  align-items: center;
  justify-content: center;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export function AboutIntro() {
  return (
    <BackgroundWrapper>
      <ContentBox>
        <IntroContainer>
          <RowContainer>
            <Intro />
            <CircularIcons />
          </RowContainer>
          <Contact />
        </IntroContainer>
      </ContentBox>
    </BackgroundWrapper>
  );
}
