import styled from "styled-components";
import { ReactNode } from "react";

interface WrapperProps {
  image?: string;
}

interface BackgroundWrapperProps {
  children: ReactNode;
  image?: string;
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: ${(props) => props.image || "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-size: 16px;
`;

export function BackgroundWrapper({ children, image }: BackgroundWrapperProps) {
  return <Wrapper image={image}>{children}</Wrapper>;
}
