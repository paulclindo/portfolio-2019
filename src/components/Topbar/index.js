import React, { useState } from 'react';
import { MenuButton, LogoLink, SLink, CallActionButton, MainNav } from './style';
import LogoIcon from '../assets/Logo';
import * as routes from '../../routes';
import { IoMdMenu, IoIosCloseCircleOutline } from 'react-icons/io';
import HamburguerMenu from '../HamburguerMenu';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';

const MenuContainer = styled.header`
  height: 100px;
  .header {
    &-inner {
      position: relative;
      z-index: 10;
      height: 100px;
      display: flex;
      justify-content: space-between;
    }
  }
`;

const Topbar = ({ history }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    // isOpen: false,
  });

  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        // isOpen: true,
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        // isOpen: false,
      });
    } else if (state.clicked === false) {
      setState((state) => ({
        clicked: !state.clicked,
        // isOpen: true,
      }));
    }
  };

  const disableMenu = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled((disabled) => !disabled);
    }, 1200);
  };

  useEffect(() => {
    history.listen(() => {
      setState({
        clicked: false,
      });
    });
  }, [history]);

  return (
    <MenuContainer>
      <div className="container">
        <div className="wrapper">
          <div className="header-inner">
            <LogoLink to={routes.base}>
              <LogoIcon color="#191919" />
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

export default withRouter(Topbar);
