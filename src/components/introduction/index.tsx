import { Contact } from "./contact";
import { CircularIcons } from "./circular-icons";
import styled from "styled-components";
import { IntroductionText } from "./intro-text";
import { BackgroundWrapper } from "./background-wrapper";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    scale: 0.8;
  }
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

export function Introduction() {
  return (
    <BackgroundWrapper>
      <IntroContainer>
        <RowContainer>
          <IntroductionText />
          <CircularIcons />
        </RowContainer>
        <Contact />
      </IntroContainer>
    </BackgroundWrapper>
  );
}
