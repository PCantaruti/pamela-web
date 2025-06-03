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
  background-attachment: fixed;

  @media (max-width: 375px) {
    background-image: url("/bg-mobile.png");
  }
`;

interface BackgroundWrapperProps {
  children: ReactNode;
}

export function BackgroundWrapper({ children }: BackgroundWrapperProps) {
  return <Wrapper>{children}</Wrapper>;
}
