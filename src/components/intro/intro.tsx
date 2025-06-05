import styled from "styled-components";

const AboutText = styled.div`
  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    color: var(--color-soft-white);
    text-transform: uppercase;
  }

  li {
    font-weight: 500;
    line-height: 150%;
    list-style: none;
    font-size: 18px;
  }
`;

export function Intro() {
  return (
    <AboutText>
      <h1>Olá, eu sou a Pamela</h1>
      <li>Desenvolvedora Web |</li>
      <li>QA Analyst |</li>
      <li>Apaixonada por tecnologia</li>
    </AboutText>
  );
}
