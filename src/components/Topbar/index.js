import React from 'react';
import { TopbarContainer, LogoLink, SLink, CallActionButton, MainNav } from './style';
import LogoIcon from '../assets/Logo';
import * as routes from '../../routes';

const Topbar = () => {
  return (
    <TopbarContainer>
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
    </TopbarContainer>
  );
};

export default Topbar;
