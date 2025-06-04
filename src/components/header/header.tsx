"use client";
import styled from "styled-components";

const TagHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 160px;
  background: var(--color-medium-gray);
  text-transform: uppercase;

  @media (max-width: 768px) {
    width: 100%;
    padding: 18px 40px;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding: 18px 20px;
  }
`;

const Logo = styled.a`
  color: var(--color-soft-white);
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: var(--color-dark-gray);
  }

  @media (max-width: 768px) {
    transform: scale(0.8);
  }
`;

const NavContent = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media (max-width: 768px) {
    transform: scale(0.8);
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
  color: inherit;

  text-decoration: none;

  &:hover {
    color: var(--color-dark-gray);
  }
`;

export function Header() {
  return (
    <TagHeader>
      <Logo href="#home"> &lt;Pamela Cantaruti/&gt; </Logo>
      <NavContent>
        <NavLink href="#about">Sobre</NavLink>
        <NavLink href="#skills">Habilidades</NavLink>
        <NavLink href="#projects">Projetos</NavLink>
      </NavContent>
    </TagHeader>
  );
}
