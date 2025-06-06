import styled from "styled-components";

interface HamburgerProps {
  isopen: boolean;
  onClick: () => void;
}

export const HamburgerButtonStyled = styled.button<{ $isOpen?: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 480px) {
    display: block;
  }

  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--color-soft-white);
    margin: 5px 0;
    transition: 0.4s;
    border-radius: 2px;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    `
    span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  `}
`;

export function HamburgerButton({ isopen, onClick }: HamburgerProps) {
  return (
    <HamburgerButtonStyled onClick={onClick} $isOpen={isopen}>
      <span />
      <span />
      <span />
    </HamburgerButtonStyled>
  );
}
