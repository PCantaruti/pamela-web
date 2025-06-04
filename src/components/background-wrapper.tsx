import styled from "styled-components";
import { ReactNode } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 72px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url("/bg-intro.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 401px) {
    background-attachment: fixed;
  }

  @media (max-width: 400px) {
    background-image: none;
    background-color: var(--color-overlay);
  }
`;

interface BackgroundWrapperProps {
  children: ReactNode;
}

export function BackgroundWrapper({ children }: BackgroundWrapperProps) {
  return <Wrapper>{children}</Wrapper>;
}
