import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const MenuContainer = styled.header`
  height: 100px;
  margin: 0 auto;
  text-transform: uppercase;
`;
export const MainNav = styled.div`
  display: flex;
  align-items: center;
`;
export const SLink = styled(NavLink)`
  margin: 0 2rem;
  position: relative;
  transition: transform 1s;
  &[aria-current='page'] {
    color: ${(props) => props.theme.color.main};
    font-weight: 700;
  }
  &::after {
    content: ' ';
    position: absolute;
    bottom: -10px;
    left: 0;
    /* background: linear-gradient(to right, #e35d5b, #e53935); */
    /* background: linear-gradient(to right, #23074d, #cc5333); */
    background-size: 300%;
    width: 0;
    height: 3px;
    transition: width 1s;
  }
  &:hover {
    color: ${(props) => props.theme.color.main};

    &::after {
      width: 100%;
    }
  }
`;
export const CallActionButton = styled.a`
  margin-left: 1rem;
  padding: 12px 20px;
  border-radius: 20px;
  transition: background 0.8s, transform 0.3s;
  background: linear-gradient(to right, #e35d5b, #e53935);

  background-size: 200%;
  color: #fafafa;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    background-size: 100%;
  }
`;
export const LogoLink = styled(Link)`
  height: 50px;
  line-height: 4;
  transition: transform 0.6s;
  &:hover {
    transform: translateY(-4px);
  }
  /* svg {
    padding: 18px 0;
    transform: scale(0.7);
  } */
`;
export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  transition: transform 0.3s;
  &:active {
    transform: scale(0.9);
  }
`;
