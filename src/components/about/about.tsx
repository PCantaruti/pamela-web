import styled from "styled-components";
import { BackgroundWrapper } from "../background-wrapper";
import { ContentBox } from "../content-box";

const AboutText = styled.div`
  p {
    font-weight: 400;
    padding: 10px 0;
  }
`;

export function About() {
  return (
    <BackgroundWrapper>
      <ContentBox>
        <AboutText>
          <h1>SOBRE</h1>
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
            vivência em projetos full stack com Node.js e integração com banco
            de dados na nuvem (AWS).
          </p>
          <p>
            Me destaco pela facilidade em aprender novas tecnologias, atenção
            aos detalhes e pela colaboração entre equipes técnicas e de
            negócios. Estou sempre em busca de desafios que me permitam evoluir
            como desenvolvedora e criar experiências digitais que realmente
            façam a diferença.
          </p>
        </AboutText>
      </ContentBox>
    </BackgroundWrapper>
  );
}
