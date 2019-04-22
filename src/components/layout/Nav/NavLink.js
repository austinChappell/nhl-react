// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { NavLink as RRNavLink } from 'react-router-dom';

// Internal Dependencies
import { space, colors } from '../../../constants/styles';

// Local Variables
const propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};
const Link = styled(RRNavLink)`
  color: ${colors.font.light};
  cursor: pointer;
  display: inline-block;
  padding: ${space.sm};
  &.active {
    color: ${colors.secondary.light};
  }
`;

// Component Definition
const NavLink = ({
  children,
  to,
  ...props
}) => (
  <Link
    to={to}
    {...props}
  >
    {children}
  </Link>
);

NavLink.propTypes = propTypes;

export default NavLink;
