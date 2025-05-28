import { Contact } from "./contact";
import { CircularIcons } from "./circular-icons";
import styled from "styled-components";
import { Intro } from "./intro";

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

const AboutContainer = styled.div`
  width: 80%;
  height: 450px;
  border-radius: 10px;
  background: var(--color-overlay);
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export function AboutIntro() {
  return (
    <BackGroundAboutIntro>
      <AboutContainer>
        <IntroContainer>
          <RowContainer>
            <Intro />
            <CircularIcons />
          </RowContainer>
          <Contact />
        </IntroContainer>
      </AboutContainer>
    </BackGroundAboutIntro>
  );
}
