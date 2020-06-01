import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../routes';
import { IoIosArrowRoundForward } from 'react-icons/io';
import styled, { keyframes } from 'styled-components';
import PhotoProfile from '../assets/static/hero-bg.png';
import bgProfile from '../assets/static/bg-profile.svg';
import { mediaTo } from '../themes/helpers/breakpoints';
import passion from "../assets/static/passion.jpg"
import teamwork from "../assets/static/teamwork.jpg"

const GlobalWidth = styled.div`
  /* width: 1280px;
  min-width: 1280px;
  margin: 0 auto; */
`;
const HeroContent = styled.div`
  width: 50%;
  /* overflow: hidden;s */
`;
const HeroImages = styled.div`
  position: relative;
  width: 50%;
  height: 100vh;
  .hero-images-inner {
    .hero-image {
      position: absolute;
      overflow:hidden;
      &.code {
        top:0;
        right: 0;
        width: 45%;
        height: 50%;
      }
      &.design {
        bottom: 20px;
        left: 0;
        width: 52%;
        height: 65%;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width:100%;
      }
    }
  }
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
  ${mediaTo.lg`
    /* margin-top: 200px; */
  `}
`;
const HeroPhrase = styled.h1`
  /* font-weight: 300; */
  font-family: ${props => props.theme.font.testFont};
  /* font-size: 1rem; */
  color: #818181;
  text-transform:uppercase;
  /* line-height: 2;
  letter-spacing: 0.4px; */
  font-size: 11px;
    line-height: 25px;
    font-weight: 500;
    letter-spacing: 4px;
  margin-bottom: ${(props) => props.theme.spacing(4)}px;
  span {
    font-size: 2rem;
  }
  ${mediaTo.lg`
    line-height: 1.2;
    letter-spacing: 0.1rem;
  `}
`;
const HeroCaption = styled.p`
  font-family: ${(props) => props.theme.font.alterFont};
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 2rem;
  
  /* span {
    color: ${(props) => props.theme.color.main};
  } */
  ${mediaTo.lg`
    font-size: 3rem;
  `}
`;
const HeroPosition = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  font-weight: 300;
  margin-bottom: 56px;
  color: #626262;
  font-family: ${(props) => props.theme.font.testFont};
  span {
    margin: 0 30px;
    margin-left: 0;
  }
  ${mediaTo.lg`

  `}
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
  right: 0;
  animation: ${rotateInfiniteAnimation} 40s infinite ease-in;
`;

// const MaxWidthContainer = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
// `;
const HeroButton = styled(Link)`

    display: flex;
    position: relative;
    align-items: center;
    cursor: pointer;
    font-size: 0.8rem;
    letter-spacing: .7px;
    text-transform: uppercase;
    font-weight: bold;
  /* span {
    margin-right: 8px;
  } */
  span {
    font-size: 1rem;

  }
  &:before {
    content: "";
    position: absolute;
    width: 56px;
    height: 1px;
    background: #dfdfdf;
    left: -68px;
  }
  .arrow-ic {
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color:  ${(props) => props.theme.color.main};
    width: 42px;
    height: 42px;
    border-radius: 100%;
    left: 10px;
    svg {
      fill : white;
    }
    
}
`;
export default function Home() {
  return (
    <GlobalWidth>
      <HeroContainer>
        <HeroContent>
          <HeroPhrase>Let's Bring Ideas to Life.</HeroPhrase>
          <HeroCaption>
            Creating Unique Digital <span>Experiences</span>.
          </HeroCaption>
          <HeroPosition>
            <span>UI/UX Designer</span>
            <span>Front End Developer</span>
          </HeroPosition>
          <HeroButton to={routes.work}>
            <div>Get to know me</div>
            <span className="arrow-ic"><IoIosArrowRoundForward size="20" /></span>
          </HeroButton>
        </HeroContent>
        <HeroImages>
          <div className="hero-images-inner">
            <div className="hero-image design">
              <img src={passion} alt="designing"/>
            </div>
            <div className="hero-image code">
              <img src={teamwork} alt="coding"/>
            </div>
          </div>
          
        </HeroImages>
      </HeroContainer>
    </GlobalWidth>
  );
}
