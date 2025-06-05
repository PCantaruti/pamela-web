import { Contact } from "./contact";
import { CircularIcons } from "./circular-icons";
import styled from "styled-components";
import { Intro } from "./intro";
import { ContentBox } from "../content-box";
import { BackgroundWrapper } from "../background-wrapper";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    text-align: center;
  }
`;

export function AboutIntro() {
  return (
    <BackgroundWrapper image='url("/background.webp")'>
      <IntroContainer>
        <RowContainer>
          <Intro />
          <CircularIcons />
        </RowContainer>
        <Contact />
      </IntroContainer>
    </BackgroundWrapper>
  );
}
