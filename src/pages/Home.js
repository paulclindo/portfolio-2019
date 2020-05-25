import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../routes';
import { IoIosArrowRoundForward } from 'react-icons/io';
import styled, { keyframes } from 'styled-components';
import PhotoProfile from '../assets/static/hero-bg.png';
import bgProfile from '../assets/static/bg-profile.svg';

const GlobalWidth = styled.div`
  width: 1280px;
  min-width: 1280px;
  margin: 0 auto;
`;
const HeroLeft = styled.div`
  overflow: hidden;
`;
const HeroRight = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  align-self: flex-start;
`;
const ProfileImage = styled.div`
  width: 80%;
  margin: 2rem auto;
  z-index: -1;

  img {
    width: 100%;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 200px;
  /* height: calc(100vh - 100px); */
  & > div {
    flex: 1.5;
  }
  & > div:last-child {
    flex: 1;
  }
`;
const HeroTitle = styled.h1`
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.2;
  letter-spacing: 0.4rem;
  margin-bottom: ${(props) => props.theme.spacing(4)}px;
  span {
    font-size: 2rem;
  }
`;
const HeroPosition = styled.p`
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.2;
  margin: 0;
  span {
    color: ${(props) => props.theme.color.main};
  }
`;
const HeroSummary = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  font-weight: 300;
  font-family: ${(props) => props.theme.font.mainFont};
  span {
    margin: 0 30px;
    margin-left: 0;
  }
`;
const rotateInfiniteAnimation = keyframes`
  0%{transform: rotate(0)}
  100%{transform: rotate(360deg)}
`;
const BackgroundImage = styled.img`
  position: absolute;
  z-index: -2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /* right: 0; */
  animation: ${rotateInfiniteAnimation} 40s infinite ease-in;
`;

// const MaxWidthContainer = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
// `;
const SLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.main};
  font-size: 0.9rem;
  align-self: auto;
  letter-spacing: 1px;
  span {
    margin-right: 8px;
  }
`;
export default function Home() {
  return (
    <GlobalWidth>
      <HeroContainer>
        <HeroLeft>
          <HeroTitle>
            {/* Welcome, <span>I'm Paul Ccari.</span> */}
            Let's Bring Ideas to Life.
          </HeroTitle>
          <HeroPosition>
            Creating Unique Digital <span>Experiences</span>.
          </HeroPosition>
          <HeroSummary>
            <span>UI/UX Designer</span>
            <span>Front End Developer</span>
          </HeroSummary>
          <SLink to={routes.work}>
            <span>Let's Explore</span> <IoIosArrowRoundForward size="30" />
          </SLink>
        </HeroLeft>
        <HeroRight>
          <BackgroundImage src={bgProfile}></BackgroundImage>
        </HeroRight>
      </HeroContainer>
    </GlobalWidth>
  );
}
