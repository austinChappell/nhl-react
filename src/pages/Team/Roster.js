// External Dependencies
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getTeamRoster } from '../../api/teams';

// Local Variables
const propTypes = {
  teamId: PropTypes.number.isRequired,
};

// Component Definition
const Roster = ({ teamId }) => {
  const [roster, setRoster] = useState(null);

  async function fetchRoster() {
    try {
      const response = await getTeamRoster(teamId);
      if (response.data && response.data.roster) {
        setRoster(response.data.roster);
      }
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    fetchRoster();
  }, []);

  if (!roster) {
    return null;
  }

  return (
    <ul>
      {roster.map(player => (
        <li key={player.person.id}>
          {player.person.fullName}
          {' '}
- #
          {player.jerseyNumber}
          {' '}
-
          {player.position.abbreviation}
        </li>
      ))}
    </ul>
  );
};

Roster.propTypes = propTypes;

export default Roster;
