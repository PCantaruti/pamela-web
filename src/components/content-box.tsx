import styled from "styled-components";
import { ReactNode } from "react";

const ContentBoxSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 132px;

  gap: 20px;

  @media (max-width: 768px) {
    transform: scale(0.9);
    width: 100%;
  }

  @media (max-width: 480px) {
    background: transparent;
    padding: 0px 20px;
  }
`;

interface ContentBoxProps {
  children: ReactNode;
}

export function ContentBox({ children }: ContentBoxProps) {
  return <ContentBoxSection>{children}</ContentBoxSection>;
}
