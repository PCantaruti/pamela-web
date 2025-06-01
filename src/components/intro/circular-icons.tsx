import styled, { keyframes } from "styled-components";

const images = [
  "./icons/github-icon.png",
  "./icons/js-icon.png",
  "./icons/next-icon.png",
  "./icons/react-icon.png",
  "./icons/ts-icon.png",
];

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const CircularIconsContainer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${rotate} 10s linear infinite;
`;

const Icon = styled.img<{ angle: number }>`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 0;
  transform-origin: 140px;
  transform: rotate(${(props) => props.angle}deg) translate(60px);
`;
export function CircularIcons() {
  return (
    <CircularIconsContainer>
      {images.map((src, index) => {
        const angle = (360 / images.length) * index;
        return (
          <Icon key={index} src={src} alt={`Icone ${index}`} angle={angle} />
        );
      })}
    </CircularIconsContainer>
  );
}
