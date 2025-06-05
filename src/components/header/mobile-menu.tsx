import { navLinks } from "@/data/nav-links";
import styled from "styled-components";

interface MobileMenuProps {
  isopen: boolean;
  setMenuOpen: (state: boolean) => void;
}

export const MobileContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  width: 100%;
  background-color: var(--color-soft-orange);
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  flex-direction: column;
  margin-top: 75px;
  border-top: 1px solid var(--color-soft-white);
  z-index: 1000;
`;

export const MobileItensMenu = styled.div`
  border-bottom: 1px solid var(--color-soft-white);
  width: 100%;

  li {
    list-style: none;
    margin: 20px 0;
    text-align: end;
  }

  a {
    padding-right: 30px;
    font-weight: 700;
    font-size: 16px;
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.5s ease;

    &:hover {
      color: var(--color-medium-orange);
    }
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
export function MobileMenu({ isopen, setMenuOpen }: MobileMenuProps) {
  return (
    <MobileContainer $isOpen={isopen}>
      {Object.entries(navLinks).map(([key, link]) => (
        <MobileItensMenu key={key}>
          <li>
            <NavLink href={link} onClick={() => setMenuOpen(false)}>
              {key}
            </NavLink>
          </li>
        </MobileItensMenu>
      ))}
    </MobileContainer>
  );
}
