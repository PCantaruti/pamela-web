import styled from "styled-components";

export const LogoTag = styled.a`
  color: var(--color-soft-white);
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: var(--color-medium-orange);
  }

  @media (max-width: 768px) {
    transform: scale(0.9);
  }
`;

export function Logo() {
  return <LogoTag href="#home">&lt;Pamela Cantaruti/&gt;</LogoTag>;
}
