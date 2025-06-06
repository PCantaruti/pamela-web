"use client";
import styled from "styled-components";

const FooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  align-items: center;

  background-image: url("/footer.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: var(--color-soft-white);
  text-transform: uppercase;
`;

const MainFooter_Upper = styled.div`
  width: 70%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  border-bottom: 1px solid var(--color-soft-white);

  p {
    font-weight: 500;
    line-height: 150%;
    font-size: 18px;
    margin: 4px 0;
  }
`;

const MainFooter_Lower = styled.div`
  padding: 30px 0;
  color: var(--color-soft-white);
`;

const MainFooter_Contend_Left = styled.div``;

const MainFooter_Contend_Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const IconLink = styled.a`
  display: inline-block;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export function Footer() {
  return (
    <FooterStyled>
      <MainFooter_Upper>
        <MainFooter_Contend_Left>
          <Title>&lt;Pamela Cantaruti/&gt;</Title>
          <p>Desenvolvedora Web |</p>
          <p>QA Analyst |</p>
        </MainFooter_Contend_Left>

        <MainFooter_Contend_Right>
          <Title>Social</Title>
          <ImageContainer>
            <IconLink
              href="https://github.com/PCantaruti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Image src="/icons/github-icon.png" alt="GitHub" />
            </IconLink>
            <IconLink
              href="https://www.linkedin.com/in/pamela-cantaruti-0b902b199/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image src="/icons/linkedin-icon.png" alt="LinkedIn" />
            </IconLink>
          </ImageContainer>
        </MainFooter_Contend_Right>
      </MainFooter_Upper>

      <MainFooter_Lower>
        © Copyright 2025. Made by Pamela Cantaruti
      </MainFooter_Lower>
    </FooterStyled>
  );
}
