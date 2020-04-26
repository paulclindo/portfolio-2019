import React from 'react';
import * as routes from '../../routes';
import LogoIcon from '../assets/Logo';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  font-family: ${(props) => props.theme.font.alterFont};
  height: 80px;
  text-transform: uppercase;
`;
const Topbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;
const MainNav = styled.div`
  display: flex;
  align-items: center;
`;
const SLink = styled(NavLink)`
  margin: 0 2rem;
  position: relative;
  transition: transform 1s;
  &[aria-current='page'] {
    color: #23074d;
    font-weight: 700;
    transform: scale(1.1);
  }
  &::after {
    content: ' ';
    position: absolute;
    bottom: -10px;
    left: 0;
    /* background: linear-gradient(to right, #e35d5b, #e53935); */
    background: linear-gradient(to right, #23074d, #cc5333);
    background-size: 300%;
    width: 0;
    height: 4px;
    transition: width 1s;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
const CallActionButton = styled.a`
  margin-left: 1rem;
  padding: 12px 20px;
  border-radius: 20px;
  /* border: 1px solid ${(props) => props.theme.color.main}; */
  transition: background 0.8s, transform 0.3s;
  background: linear-gradient(to right, #23074d, #cc5333);
  background-size: 400%;
  color: #fafafa;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    background-size: 100%;
  }
`;
const LogoLink = styled(Link)`
  margin: 0 2rem;
  height: 100%;
  svg {
    padding: 18px 0;
    transform: scale(0.5);
  }
`;

export default function Layout({ children }) {
  return (
    <Container>
      <Topbar>
        <LogoLink to={routes.base}>
          <LogoIcon color="#333333" />
        </LogoLink>
        <MainNav>
          <SLink activeClassName="is-selected" to={routes.blog}>
            Blog
          </SLink>
          <SLink activeClassName="is-selected" to={routes.work}>
            Portfolio
          </SLink>
          <SLink activeClassName="is-selected" to={routes.talks}>
            Talks
          </SLink>
          <SLink activeClassName="is-selected" to={routes.about}>
            About
          </SLink>
          <CallActionButton href="mailto:paulclindo@gmail.com?body=Hi there, Paul! ...">
            Contact me
          </CallActionButton>
        </MainNav>
      </Topbar>
      {children}
    </Container>
  );
}
