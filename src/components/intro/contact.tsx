import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: -10px;

  @media (max-width: 400px) {
    margin-top: 10px;
  }
`;

const Button = styled.a`
  width: 80px;
  height: 45px;
  background: transparent;
  border-radius: 10px;
  border: 1px solid var(--color-soft-white);
  cursor: pointer;

  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-decoration: none;
  color: var(--color-soft-white);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--color-soft-white);
    color: var(--color-dark-gray);
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
