// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';

// Internal Dependencies

// Local Variables
const propTypes = {
  alt: PropTypes.string.isRequired,
  teamId: PropTypes.number.isRequired,
  width: PropTypes.number,
};
const defaultProps = {
  width: 100,
};

// Component Definition
const TeamLogo = ({
  alt,
  teamId,
  width,
}) => {
  const src = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teamId}.svg`;
  return (
    <img
      alt={alt}
      src={src}
      width={width}
    />
  );
};

TeamLogo.propTypes = propTypes;
TeamLogo.defaultProps = defaultProps;

export default TeamLogo;
