import styled, { keyframes } from "styled-components";

const images = [
  "./icons/github-icon.png",
  "./icons/js-icon.png",
  "./icons/next-icon.png",
  "./icons/react-icon.png",
  "./icons/ts-icon.png",
];

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

const AboutText = styled.div`
  h1 {
    color: var(--color-soft-white);
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-transform: uppercase;
  }

  li {
    color: var(--color-soft-white);
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    list-style: none;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const CircularIconsContainer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${rotate} 10s linear infinite;
`;

const Icon = styled.img<{ angle: number }>`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 0;
  transform-origin: 140px;
  transform: rotate(${(props) => props.angle}deg) translate(60px);
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const Button = styled.button`
  width: 80px;
  height: 45px;
  background: transparent;
  border-radius: 10px;
  border: 1px solid var(--color-soft-white);
  cursor: pointer;

  color: var(--color-soft-white);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: -10px;

  a {
    text-decoration: none;
    color: var(--color-soft-white);
  }
`;
export function AboutIntro() {
  return (
    <BackGroundAboutIntro>
      <AboutContainer>
        <IntroContainer>
          <RowContainer>
            <AboutText>
              <h1>OLÁ, EU SOU A PAMELA</h1>
              <li>Desenvolvedora Web |</li>
              <li>QA Analyst |</li>
              <li>Apaixonada por tecnologia</li>
            </AboutText>
            <CircularIconsContainer>
              {images.map((src, index) => {
                const angle = (360 / images.length) * index;
                return (
                  <Icon
                    key={index}
                    src={src}
                    alt={`Icone ${index}`}
                    angle={angle}
                  />
                );
              })}
            </CircularIconsContainer>
          </RowContainer>

          <ContactContainer>
            <Button>
              <a href="#">Linkedin</a>
            </Button>
            <Button>
              <a href="#">Github</a>
            </Button>
          </ContactContainer>
        </IntroContainer>
      </AboutContainer>
    </BackGroundAboutIntro>
  );
}
