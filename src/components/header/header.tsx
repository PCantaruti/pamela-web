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
`;
const Logo = styled.a`
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  cursor: pointer;
  &:hover {
    color: var(--color-dark-gray);
  }
`;

const NavContent = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  li {
    font-weight: 600;
    line-height: 150%;
    cursor: pointer;
    list-style: none;
    &:hover {
      color: var(--color-dark-gray);
    }
  }
`;

export function Header() {
  return (
    <TagHeader>
      <Logo>&lt;Pamela Cantaruti/&gt;</Logo>
      <NavContent>
        <li>Sobre</li>
        <li>Habilidades</li>
        <li>Projetos</li>
      </NavContent>
    </TagHeader>
  );
}
