import styled from "styled-components";
import { BackgroundWrapper } from "../background-wrapper";
import { ContentBox } from "../content-box";
import { useState } from "react";

const skills = [
  {
    name: "React",
    icon: "/icons/react-icon.png",
    description:
      "Utilizo React para a criação de projetos front-end, desenvolvendo interfaces dinâmicas e componentes reutilizáveis com foco em performance e experiência do usuário.",
  },
  {
    name: "Next.js",
    icon: "/icons/next-icon.png",
    description:
      "Utilizo Next.js para desenvolvimento front-end, aproveitando recursos como renderização server-side (SSR) e geração de sites estáticos para otimizar performance e SEO.",
  },
  {
    name: "Git",
    icon: "/icons/git-icon.png",
    description:
      "Uso Git diariamente para versionamento de código e automação de testes. Tenho experiência prática com GitHub e GitLab, colaborando em equipes e mantendo controle eficiente dos projetos.",
  },
  {
    name: "TypeScript",
    icon: "/icons/ts-icon.png",
    description:
      "Utilizo TypeScript em meus projetos front-end com React e Next.js para garantir maior segurança, escalabilidade e facilidade na manutenção do código através da tipagem estática.",
  },
  {
    name: "JavaScript",
    icon: "/icons/js-icon.png",
    description:
      "Utilizo JavaScript no desenvolvimento de testes automatizados, sendo esta a linguagem principal da empresa onde trabalho, o que me proporciona experiência sólida e aplicada.",
  },
  {
    name: "Node.js",
    icon: "/icons/node-icon.png",
    description:
      "Tive experiência com Node.js durante meu estágio fullstack, realizando ajustes e alterações pontuais em aplicações back-end, complementando meu conhecimento no desenvolvimento de sistemas completos.",
  },
  {
    name: "Cypress",
    icon: "/icons/cypress-icon.png",
    description:
      "Utilizo diariamente para automatizar testes de API, integrações com banco de dados, autenticação e mensageiria com RabbitMQ em sistemas complexos como plataformas de biometria.",
  },
];

const SkillsText = styled.div`
  p {
    font-weight: 400;
    padding: 10px 0;
  }

  h1 {
    text-transform: uppercase;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -8px;
      top: 35px;
      width: 300px;
      height: 4px;
      background-color: var(--color-soft-white);
      border-radius: 2px;
    }
  }
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;

  padding: 30px 0;
`;

const DescriptionBox = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 20px;
  font-size: 16px;
  color: var(--color-soft-white);
  text-align: center;
`;
export function Skills() {
  const [selectedSkills, setSelectedSkills] = useState<string | null>(null);

  const handleImageClick = (name: string) => {
    setSelectedSkills(selectedSkills === name ? null : name);
  };

  const currentSkill = skills.find((skill) => skill.name === selectedSkills);

  return (
    <BackgroundWrapper>
      <ContentBox>
        <SkillsText>
          <h1>Habilidades</h1>
          <ImagesContainer>
            {skills.map((skill) => (
              <Image
                key={skill.name}
                src={skill.icon}
                alt={skill.name}
                onClick={() => handleImageClick(skill.name)}
              />
            ))}
          </ImagesContainer>
          <DescriptionBox>
            {currentSkill ? (
              <>
                <strong>{currentSkill.name}:</strong> {currentSkill.description}
              </>
            ) : (
              <>
                Clique em uma das tecnologias para saber mais sobre minha
                experiência.
              </>
            )}
          </DescriptionBox>
        </SkillsText>
      </ContentBox>
    </BackgroundWrapper>
  );
}
