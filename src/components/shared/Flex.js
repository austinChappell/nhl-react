// External Dependencies
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Local Variables
/* eslint-disable */
// disabling here as most of these prop types are not used directly, but passed into the styles
const propTypes = {
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  children: PropTypes.node.isRequired,
  flex: PropTypes.string,
  flexDirection: PropTypes.string,
  flexGrow: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  flexShrink: PropTypes.string,
  flexWrap: PropTypes.string,
  height: PropTypes.number,
  justifyContent: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
/* eslint-enable */

const defaultProps = {
  alignContent: 'flex-start',
  alignItems: 'center',
  className: '',
  flex: undefined,
  flexDirection: 'row',
  flexGrow: '0',
  flexShrink: '0',
  flexWrap: 'wrap',
  height: null,
  justifyContent: 'flex-start',
  margin: 0,
  padding: 0,
};

// Component Definition
const Flex = styled.div`
  align-content: ${props => props.alignContent};
  align-items: ${props => props.alignItems};
  display: flex;
  flex: ${props => props.flex};
  flex-direction: ${props => props.flexDirection};
  flex-grow: ${props => props.flexGrow};
  flex-shrink: ${props => props.flexShrink};
  flex-wrap: ${props => props.flexWrap};
  height: ${props => props.height || 'auto'};
  justify-content: ${props => props.justifyContent};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

Flex.propTypes = propTypes;
Flex.defaultProps = defaultProps;

export default Flex;