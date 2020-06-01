import React from 'react';
import Topbar from '../Topbar/index';
import styled from 'styled-components';
import { mediaTo } from '../../themes/helpers/breakpoints';

const Container = styled.div`
  font-family: ${(props) => props.theme.font.testFont};
  position: relative;
  ${mediaTo.lg`
    width: 1280px;
    min-width: 1280px;
    margin: 0 auto;
  `}
`;

export default function Layout({ children }) {
  return (
    <Container>
      <Topbar />
      <div className="wrapper">{children}</div>
    </Container>
  );
}
