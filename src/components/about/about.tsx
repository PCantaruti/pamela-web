import styled from "styled-components";
import { BackgroundWrapper } from "../background-wrapper";
import { ContentBox } from "../content-box";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px 132px;
`;

const Tittle = styled.h1`
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    width: 300px;
    height: 4px;
    background-color: var(--color-soft-white);
    border-radius: 2px;
  }
`;
export function About() {
  return (
    <BackgroundWrapper>
      <AboutContainer>
        <Tittle>Sobre mim</Tittle>
        <p>
          Sou desenvolvedora com foco em front-end, apaixonada por criar
          interfaces intuitivas e funcionais. Atualmente, curso Análise e
          Desenvolvimento de Sistemas e atuo como Analista de Qualidade de
          Software, garantindo a confiabilidade de sistemas por meio de testes
          manuais e automatizados.
        </p>
        <p>
          Tenho experiência prática com React, Next, TypeScript, TailwindCSS,
          Styled Components e ferramentas de testes como Cypress, além de
          vivência em projetos full stack com Node.js e integração com banco de
          dados na nuvem (AWS).
        </p>
        <p>
          Me destaco pela facilidade em aprender novas tecnologias, atenção aos
          detalhes e pela colaboração entre equipes técnicas e de negócios.
          Estou sempre em busca de desafios que me permitam evoluir como
          desenvolvedora e criar experiências digitais que realmente façam a
          diferença.
        </p>
      </AboutContainer>
    </BackgroundWrapper>
  );
}
