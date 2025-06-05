"use client";
import { useState } from "react";
import styled from "styled-components";
import { HamburgerButton } from "./hamburguer-button";
import { Logo } from "./logo";
import { NavLinks } from "./navlinks";
import { MobileMenu } from "./mobile-menu";

export const TagHeader = styled.header`
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

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <TagHeader>
        <Logo />
        <NavLinks />
        <HamburgerButton
          isOpen={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </TagHeader>

      <MobileMenu isOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}
