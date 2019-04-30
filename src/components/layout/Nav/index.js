// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// Internal Dependencies
import NavLink from './NavLink';
import TodaysGames from './TodaysGames';
import { colors } from '../../../constants/styles';

// Local Variables
const propTypes = {
  onUpdateHeight: PropTypes.func.isRequired,
};
const GameWrapper = styled.div`
  background: ${colors.font.light};
`;
const NavBar = styled.nav`
  background: ${colors.primary.dark};
`;

// Component Definition
const Nav = ({
  onUpdateHeight,
}) => (
  <>
    <NavBar>
      <ul>
        <NavLink exact to="/">
          Home
        </NavLink>

        <NavLink to="/teams">
          Teams
        </NavLink>
      </ul>
    </NavBar>
    <GameWrapper>
      <TodaysGames onUpdateHeight={onUpdateHeight} />
    </GameWrapper>
  </>
);

Nav.propTypes = propTypes;

export default Nav;
