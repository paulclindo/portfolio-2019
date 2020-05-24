import React, { useState } from 'react';
import { MenuButton, LogoLink, SLink, CallActionButton, MainNav } from './style';
import LogoIcon from '../assets/Logo';
import * as routes from '../../routes';
import { IoMdMenu, IoIosCloseCircleOutline } from 'react-icons/io';
import HamburguerMenu from '../HamburguerMenu';
import styled from 'styled-components';

const MenuContainer = styled.header`
  height: 100px;
  .header{
    &-inner {
      position:relative;
      z-index: 10;
      height: 100px;
      display: flex;
      justify-content: space-between;
    }
  }
  .
`;

const Topbar = () => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    isOpen: false,
  });

  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        isOpen: true,
      });
      console.log('initial clicked');
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        isOpen: false,
      });
      console.log('1');
    } else if (state.clicked === false) {
      setState((state) => ({
        clicked: !state.clicked,
        isOpen: true,
      }));
      console.log('2');
    }
  };

  const disableMenu = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled((disabled) => !disabled);
    }, 1200);
  };

  return (
    <MenuContainer>
      <div className="container">
        <div className="wrapper">
          <div className="header-inner">
            <LogoLink to={routes.base}>
              <LogoIcon color="#333333" />
            </LogoLink>
            <MainNav>
              <MenuButton disabled={disabled} onClick={handleMenu}>
                {state.clicked ? <IoIosCloseCircleOutline size={30} /> : <IoMdMenu size={30} />}
              </MenuButton>
            </MainNav>
          </div>
        </div>
      </div>
      <HamburguerMenu state={state} />
    </MenuContainer>
  );
};

export default Topbar;

{
  /* <SLink activeClassName="is-selected" to={routes.blog}>
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
        </CallActionButton> */
}
