import React from 'react';
import Topbar from '../Topbar/index';
import styled from 'styled-components';

const Container = styled.div`
  font-family: ${(props) => props.theme.font.alterFont};
  position: relative;
  width: 1280px;
  min-width: 1280px;
  margin: 0 auto;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <Topbar />
      <div className="wrapper">{children}</div>
    </Container>
  );
}
