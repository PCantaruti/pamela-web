"use client";
import styled from "styled-components";
import { useState } from "react";

const TagHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 160px;
  background: transparent;
  text-transform: uppercase;

  @media (max-width: 768px) {
    padding: 18px 40px;
  }

  @media (max-width: 480px) {
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
    color: var(--color-medium-orange);
  }

  @media (max-width: 768px) {
    transform: scale(0.9);
  }
`;

const NavContent = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  cursor: pointer;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--color-medium-orange);
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-soft-orange);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: end;
  justify-content: center;
  z-index: 1000;
  margin-top: 75px;

  border-top: 1px solid var(--color-soft-white);

  
  }
`;

const MobileItensMenu = styled.div`
  border-bottom: 1px solid var(--color-soft-white);
  width: 100%;

li {
    list-style: none;
    margin: 20px 0;
    display: list-item;
    text-align: end;
  }

  a {
    padding-right: 30px;

    font-weight: 700;
    font-size: 16px;
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-medium-orange);
    }
`;

const HamburgerButton = styled.button<{ isOpen?: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 480px) {
    display: block;
    z-index: 1001;
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

  ${({ isOpen }) =>
    isOpen &&
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

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <TagHeader>
        <Logo href="#home">&lt;Pamela Cantaruti/&gt;</Logo>

        <NavContent>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#skills">Habilidades</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
        </NavContent>

        <HamburgerButton
          onClick={() => setMenuOpen(!menuOpen)}
          isOpen={menuOpen}
        >
          <span />
          <span />
          <span />
        </HamburgerButton>
      </TagHeader>

      <MobileMenu isOpen={menuOpen}>
        <MobileItensMenu>
          <li>
            <NavLink href="#" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
        </MobileItensMenu>

        <MobileItensMenu>
          <li>
            <NavLink href="#about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
        </MobileItensMenu>

        <MobileItensMenu>
          <li>
            <NavLink href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </NavLink>
          </li>
        </MobileItensMenu>
      </MobileMenu>
    </>
  );
}
