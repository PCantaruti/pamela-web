import styled from "styled-components";

interface TitleProps {
  title: string;
}

const TitleStyle = styled.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 150%;
  color: var(--color-soft-white);
  text-transform: uppercase;

  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    width: 300px;
    height: 4px;
    background-color: var(--color-medium-orange);
    border-radius: 2px;
  }
`;

export function Title({ title }: TitleProps) {
  return <TitleStyle>{title}</TitleStyle>;
}
