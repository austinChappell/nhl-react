// External Dependencies
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from '../../constants/styles';

// Internal Dependencies

// Local Variables
const propTypes = {
  maxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};
const defaultProps = {
  maxWidth: '1000px',
};

// Component Definition
const Container = styled.div`
  margin: 0 auto;
  max-width: ${props => props.maxWidth};
  padding: ${space.lg};
`;

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
