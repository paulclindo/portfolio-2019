import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../routes';
import styled from 'styled-components';

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
    }
    .wrapper {
      position: relative;
    }
    &-links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      top: 200px;
      nav {
        display: block;
        ul {
          margin: 0;
          padding: 0;
          li {
            font-size: 6rem;
            height: 135px;
            cursor: pointer;
            font-weight: 700;
            overflow: hidden;
            text-transform: uppercase;
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
      width: 300px;
      font-family: ${(props) => props.theme.font.mainFont};

      color: ${(props) => props.theme.text.default};
      h3 {
        font-size: 1.2rem;
        margin: 0.5rem auto;
      }
      p {
        line-height: 1.4;
        font-size: 0.9rem;
        margin: 0 auto;
      }
    }
    &-location {
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
    }
  }
`;

export default function HamburguerMenu(props) {
  const { state } = props;
  let burguer = useRef(null);

  useEffect(() => {
    console.log(burguer);
    if (state.clicked === true) {
      // display block
      burguer.style.display = 'block';
    } else if (state.clicked === false) {
      // display none
      burguer.style.display = 'none';
    }
  });

  return (
    <Burguer ref={(el) => (burguer = el)} className="burguer">
      <div className="burguer-secondary-bg"></div>
      <div className="burguer-main">
        <div className="burguer-city-bg"></div>
        <div className="container">
          <div className="wrapper">
            <div className="burguer-links">
              <nav>
                <ul>
                  <li>
                    <Link to={routes.blog}>Blog</Link>
                  </li>
                  <li>
                    <Link to={routes.work}>Portfolio</Link>
                  </li>
                  <li>
                    <Link to={routes.about}>About</Link>
                  </li>
                  <li>
                    <Link to={routes.contact}>Contact me</Link>
                  </li>
                </ul>
              </nav>
              <div className="burguer-info">
                <h3>Talks</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit modi itaque animi
                  quos corrupti? Itaque sapiente illo optio aspernatur consequuntur inventore, rerum
                  incidunt harum fuga laborum ex ullam, iusto exercitationem.
                </p>
              </div>
              <div className="burguer-location">
                Locations:
                <span>San Francisco</span>
                <span>Lima</span>
                <span>Lima</span>
                <span>Lima</span>
                <span>Lima</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Burguer>
  );
}
