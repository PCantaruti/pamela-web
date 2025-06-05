import styled, { keyframes } from "styled-components";

const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 12ch;
  }
`;

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

const TypewriterText = styled.p`
  color: var(--color-soft-white);
  font-size: 22px;
  font-weight: 500;
  overflow: hidden;
  border-right: 2px solid var(--color-soft-white);
  white-space: nowrap;
  width: 0;
  animation: ${typewriter} 4s steps(12) infinite,
    ${blink} 0.7s step-end infinite;

  @media (max-width: 768px) {
    transform: scale(0.8);
  }
`;
export function Soon() {
  return <TypewriterText>Em breve ...</TypewriterText>;
}
