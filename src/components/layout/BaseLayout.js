// External Dependencies
import PropTypes from 'prop-types';
import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// Internal Dependencies
import Nav from './Nav';
import Container from './Container';

// Local Variables
const propTypes = {
  children: PropTypes.node.isRequired,
};
const Main = styled.main`
  padding-top: ${props => props.paddingTop}px;
`;
const NavWrapper = styled.div`
  position: fixed;
  width: 100%;
`;

// Component Definition
const BaseLayout = ({ children }) => {
  const navRef = useRef(null);
  const [padding, setPadding] = useState(0);

  function handleSetHeight() {
    if (navRef && navRef.current) {
      setPadding(navRef.current.clientHeight);
    }
  }

  function handleUpdateHeight() {
    handleSetHeight();
  }

  useLayoutEffect(() => {
    handleSetHeight();
  });

  return (
    <div>
      <NavWrapper ref={navRef}>
        <Nav onUpdateHeight={handleUpdateHeight} />
      </NavWrapper>
      {/* Enter children here */}
      <Main paddingTop={padding}>
        <Container>
          {children}
        </Container>
      </Main>
    </div>
  );
};

BaseLayout.propTypes = propTypes;

export default BaseLayout;
