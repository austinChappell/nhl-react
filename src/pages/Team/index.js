// External Dependencies
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

// Internal Dependencies
import TeamLogo from '../../components/TeamLogo';
import { getTeam } from '../../api/teams';
import Roster from './Roster';

// Local Variables
const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

// Component Definition
const Team = ({ match }) => {
  const [team, setTeam] = useState(null);

  async function fetchTeam() {
    try {
      const response = await getTeam(match.params.id);

      if (response.data && response.data.teams.length) {
        setTeam(response.data.teams[0]);
      }
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    fetchTeam();
  }, []);

  if (!team) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {team.name}
      <TeamLogo
        alt={team.name}
        teamId={team.id}
      />

      <Roster teamId={team.id} />
    </div>
  );
};

Team.propTypes = propTypes;

export default Team;
