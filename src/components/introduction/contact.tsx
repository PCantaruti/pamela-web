import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: -10px;

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

const Button = styled.a`
  width: 100px;
  height: 45px;
  border-radius: 10px;
  border: 2px solid var(--color-soft-white);
  cursor: pointer;

  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-decoration: none;
  color: var(--color-soft-white);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--color-soft-white);
    color: var(--color-medium-orange);
  }
`;
export function Contact() {
  return (
    <ContactContainer>
      <Button
        href="https://www.linkedin.com/in/pamela-cantaruti-0b902b199/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </Button>
      <Button
        href="https://github.com/PCantaruti"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </Button>
    </ContactContainer>
  );
}
