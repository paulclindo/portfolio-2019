import React from 'react';
import Topbar from '../Topbar/index';
import styled from 'styled-components';

const Container = styled.div`
  font-family: ${(props) => props.theme.font.alterFont};
  overflow: hidden;
  position: relative;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <Topbar />
      {children}
    </Container>
  );
}
