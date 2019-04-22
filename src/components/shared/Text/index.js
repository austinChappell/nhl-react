// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// Internal Dependencies
import { colors } from '../../../constants/styles';

// Local Variables
/* eslint-disable react/no-unused-prop-types */
// props appear unused, but actually are when passed into styled export
export const textProps = {
  as: PropTypes.oneOf(['p', 'span', 'h1', 'h2', 'h3', 'h4']),
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
};
/* eslint-enable react/no-unused-prop-types */
const defaultProps = {
  as: 'p',
  light: false,
};

// Component Definition
const Text = ({
  as,
  children,
}) => React.createElement(as, {}, [...children]);

Text.propTypes = textProps;
Text.defaultProps = defaultProps;

export default styled(Text)`
  color: ${props => (props.light ? colors.font.light : colors.font.dark)};
`;
