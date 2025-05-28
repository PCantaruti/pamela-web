import styled from "styled-components";

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
export function Contact() {
  return (
    <ContactContainer>
      <Button>
        <a href="#">Linkedin</a>
      </Button>
      <Button>
        <a href="#">Github</a>
      </Button>
    </ContactContainer>
  );
}
