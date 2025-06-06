import styled from "styled-components";
import { ReactNode } from "react";

interface BackgroundWrapperProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url("/background.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  font-size: 16px;
`;

export function BackgroundWrapper({ children }: BackgroundWrapperProps) {
  return <Wrapper>{children}</Wrapper>;
}
