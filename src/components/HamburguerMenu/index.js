import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import gsap from 'gsap';

import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoDribbble,
} from 'react-icons/io';

import * as routes from '../../routes';
import { mediaTo } from '../../themes/helpers/breakpoints';
import {
  staggerReveal,
  staggerRevealClose,
  fadeInUp,
  staggerText,
  handleHover,
  handleHoverOff,
  handleCity,
  handleCityOff,
} from '../../themes/animations';
import dallas from '../../assets/static/citites-images/dallas.webp';
import austin from '../../assets/static/citites-images/austin.webp';
import newyork from '../../assets/static/citites-images/newyork.webp';
import sanfrancisco from '../../assets/static/citites-images/sanfrancisco.webp';
import beijing from '../../assets/static/citites-images/beijing.webp';

const cities = [
  { name: 'Dallas', image: dallas },
  { name: 'Austin', image: austin },
  { name: 'New York', image: newyork },
  { name: 'San Francisco', image: sanfrancisco },
  { name: 'Beijing', image: beijing },
];

const Burguer = styled.div`
  display: none;
  position: fixed;
  z-index: 9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  .burguer {
    &-secondary-bg {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${(props) => props.theme.color.dark};
      z-index: -1;
    }
    &-main {
      position: relative;
      height: 100%;
      background: ${(props) => props.theme.color.main};
      overflow: hidden;
    }
    &-city-bg {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      background-size: cover;
      background-repeat: no-repeat;
      animation: cameraPan 30s infinite;
    }
    .wrapper {
      position: relative;
    }
    &-links {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      position: relative;
      top: 200px;
      ${mediaTo.lg`
        flex-direction: row;
      `}
      nav {
        display: block;
        width: 100%;
        ${mediaTo.lg`
        
        `}
        ul {
          margin: 0;
          padding: 0;
          li {
            font-size: 2rem;
            height: 35px;
            cursor: pointer;
            font-weight: 700;
            overflow: hidden;
            text-transform: uppercase;
            ${mediaTo.lg`
              font-size: 6rem;
              height: 135px;
            `}
            a {
              color: ${(props) => props.theme.text.default};
              position: absolute;
              &:hover {
                color: ${(props) => props.theme.color.dark};
              }
            }
          }
        }
      }
    }
    &-info {
      width: 100%;
      font-family: ${(props) => props.theme.font.mainFont};
      font-weight: 100;
      line-height: 1.4;
      letter-spacing: 1px;
      margin-top: 3rem;
      color: ${(props) => props.theme.text.default};
      ${mediaTo.lg`
        width: 400px;
        margin-top: 0;
      `}
      .latest-info {
        h3 {
          font-size: 1rem;
          margin: 0.5rem auto;
          text-transform: uppercase;
        }
        ul {
          padding: 5px;
          margin: 0;
          li {
            list-style: square;
            font-size: 0.9rem;
            margin: 10px auto;
          }
          a {
            color: ${(props) => props.theme.color.secondary};
            font-weight: bold;
            margin-left: 5px;
          }
        }
      }
      .social-info {
        margin-top: 0.8rem;
        padding: 0.8rem 0;
        display: flex;

        a {
          margin: 0px 10px;
          display: block;
          transition: 0.6s transform;
          ${mediaTo.lg`
              margin:  0px 7px 0 25px;
            `}
          &:hover {
            svg {
              fill: ${(props) => props.theme.color.secondary};
            }
            transform: translateY(-4px);
          }
        }
      }
    }
    &-location {
      display: none;
      position: absolute;
      bottom: -80px;
      color: ${(props) => props.theme.text.default};
      span {
        font-weight: 400;
        &:first-child {
          margin-left: 84px;
        }
        cursor: pointer;
        margin: 0 32px;
        transition: 0.3s ease-out;
        &:hover {
          background-color: ${(props) => props.theme.color.dark};
          padding: 8px 24px;
          border-radius: 4px;
        }
      }
      ${mediaTo.lg`
        display: block;
      `}
    }
  }

  @keyframes cameraPan {
    0% {
      background-position: 0% 0%;
    }
    25% {
      background-position: 30% 10%;
    }
    50% {
      background-position: 0% 10%;
    }
    75% {
      background-position: 10% 40%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

export default function HamburguerMenu(props) {
  const { state } = props;

  let burguer = useRef(null);
  let burguerSecondaryBg = useRef(null);
  let burguerMain = useRef(null);
  let cityBg = useRef(null);
  let burguerInfo = useRef(null);
  let link1 = useRef(null);
  let link2 = useRef(null);
  let link3 = useRef(null);
  let link4 = useRef(null);

  useEffect(() => {
    if (state.clicked === true || (state.clicked === true && state.initial === null)) {
      gsap.to(burguer, {
        duration: 0,
        css: { display: 'block' },
      });

      gsap.to([burguerSecondaryBg, burguerMain], {
        duration: 0,
        opacity: 1,
        height: '100%',
      });

      staggerReveal(burguerSecondaryBg, burguerMain);
      fadeInUp(burguerInfo);
      staggerText(link1, link2, link3, link4);
    } else if (state.clicked === false) {
      staggerRevealClose(burguerMain, burguerSecondaryBg);

      gsap.to(burguer, {
        duration: 1,
        css: { display: 'none' },
      });
    }
  }, [state.clicked]);

  return (
    <Burguer ref={(el) => (burguer = el)} className="burguer">
      <div ref={(el) => (burguerSecondaryBg = el)} className="burguer-secondary-bg"></div>
      <div ref={(el) => (burguerMain = el)} className="burguer-main">
        <div ref={(el) => (cityBg = el)} className="burguer-city-bg"></div>
        <div className="container">
          <div className="wrapper">
            <div className="burguer-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      to={routes.blog}
                      ref={(el) => (link1 = el)}
                      onMouseEnter={(e) => handleHover(e.target)}
                      onMouseOut={(e) => handleHoverOff(e.target)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={routes.work}
                      ref={(el) => (link2 = el)}
                      onMouseEnter={(e) => handleHover(e.target)}
                      onMouseOut={(e) => handleHoverOff(e.target)}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={routes.about}
                      ref={(el) => (link3 = el)}
                      onMouseEnter={(e) => handleHover(e.target)}
                      onMouseOut={(e) => handleHoverOff(e.target)}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={routes.contact}
                      ref={(el) => (link4 = el)}
                      onMouseEnter={(e) => handleHover(e.target)}
                      onMouseOut={(e) => handleHoverOff(e.target)}
                    >
                      Contact me
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (burguerInfo = el)} className="burguer-info">
                <div className="latest-info">
                  <h3>Latest about myself</h3>
                  <ul>
                    <li>
                      Currently making things happen at
                      <a href="https://emurgo.io/" target="_blank">
                        Emurgo.
                      </a>
                    </li>
                    <li>
                      Sharing and Learning through blogs, posts throught instagram in
                      <a href="https://www.instagram.com/frontendui/" target="_blank">
                        FrontendUI
                      </a>
                    </li>
                    <li>Blogs Section & Youtube Channel is comming soon ...</li>
                  </ul>
                </div>
                <div className="social-info">
                  <a href="https://www.linkedin.com/in/paulccari/" target="_blank">
                    <IoLogoLinkedin size={32} />
                  </a>
                  <a href="https://github.com/paulclindo" target="_blank">
                    <IoLogoGithub size={32} />
                  </a>
                  <a href="https://twitter.com/paulclindo" target="_blank">
                    <IoLogoTwitter size={32} />
                  </a>
                  <a href="https://www.instagram.com/paulclindo/" target="_blank">
                    <IoLogoInstagram size={32} />
                  </a>
                  <a href="https://dribbble.com/paulclindo" target="_blank">
                    <IoLogoDribbble size={32} />
                  </a>
                </div>
              </div>
              <div className="burguer-location">
                DO NOT hover places name!
                {cities.map((city) => (
                  <span
                    key={city.name}
                    onMouseEnter={() => handleCity(city.image, cityBg)}
                    onMouseOut={() => handleCityOff(cityBg)}
                  >
                    {city.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Burguer>
  );
}
