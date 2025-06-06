import styled from "styled-components";
import { Title } from "../title";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px 70px;
  flex: 1;

  @media (max-width: 480px) {
    padding: 0px 10px;
  }
`;

const Text = styled.div`
  text-align: justify;
  line-height: 150%;
  padding: 20px 0;

  p + p {
    padding-top: 20px;
  }
`;

export function AboutText() {
  return (
    <AboutContainer>
      <Title title="Sobre mim" />
      <Text>
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
      </Text>
    </AboutContainer>
  );
}
