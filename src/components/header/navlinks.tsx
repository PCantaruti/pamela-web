import { navLinks } from "@/data/nav-links";
import styled from "styled-components";

export const NavContent = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const NavLink = styled.a`
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

export function NavLinks() {
  return (
    <NavContent>
      {Object.entries(navLinks).map(([key, link]) => (
        <NavLink href={link}>{key}</NavLink>
      ))}
    </NavContent>
  );
}
