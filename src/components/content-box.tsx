import styled from "styled-components";
import { ReactNode } from "react";

const ContentBoxSection = styled.div`
  width: 80%;
  height: 450px;
  border-radius: 10px;
  background: var(--color-overlay);
  padding: 50px 132px;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

interface ContentBoxProps {
  children: ReactNode;
}

export function ContentBox({ children }: ContentBoxProps) {
  return <ContentBoxSection>{children}</ContentBoxSection>;
}
