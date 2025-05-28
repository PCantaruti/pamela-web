import styled from "styled-components";

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

export function Intro() {
  return (
    <AboutText>
      <h1>OLÁ, EU SOU A PAMELA</h1>
      <li>Desenvolvedora Web |</li>
      <li>QA Analyst |</li>
      <li>Apaixonada por tecnologia</li>
    </AboutText>
  );
}
