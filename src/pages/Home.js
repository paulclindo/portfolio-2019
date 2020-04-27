import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../routes';
import { IoIosArrowRoundForward } from 'react-icons/io';
import styled, { keyframes } from 'styled-components';
import PhotoProfile from '../assets/static/hero-bg.png';
import bgProfile from '../assets/static/bg-profile.svg';

const GlobalWidth = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
const HeroLeft = styled.div``;
const HeroRight = styled.div`
  /* position: relative; */

  min-width: 500px;
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
  height: calc(100vh - 103px);
`;
const HeroTitle = styled.h1`
  font-size: 3em;
  line-height: 1.2;
  margin-bottom: ${(props) => props.theme.spacing(4)}px;
`;
const HeroPosition = styled.p`
  font-size: 2em;
  margin: 0;
`;
const HeroSummary = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  font-weight: 300;
  font-family: ${(props) => props.theme.font.mainFont};
`;
const rotateInfiniteAnimation = keyframes`
  0%{transform: rotate(0)}
  100%{transform: rotate(360deg)}
`;
const BackgroundImage = styled.img`
  position: absolute;
  z-index: -2;
  width: 200%;
  height: 200%;
  top: 0%;
  left: 0%;
  animation: ${rotateInfiniteAnimation} 20s infinite both;
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
            Hey there, <br /> I am Paul Ccari
          </HeroTitle>
          <HeroPosition>I'm Frontend Developer & UX Designer</HeroPosition>
          <HeroSummary>
            I'm always looking for experiences to learn and continue challenging myself to take out
            of my comfort zone. Would you mind if I show you some of my lastest projects?
          </HeroSummary>
          <SLink to={routes.work}>
            <span>Let's Explore</span> <IoIosArrowRoundForward size="30" />
          </SLink>
        </HeroLeft>
        <HeroRight>
          {/* <ProfileImage>
            <img src={PhotoProfile} alt="" />
          </ProfileImage> */}
          <BackgroundImage src={bgProfile}></BackgroundImage>
        </HeroRight>
      </HeroContainer>
    </GlobalWidth>
  );
}
