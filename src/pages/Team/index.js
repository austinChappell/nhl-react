// External Dependencies
import React, { useEffect, useState } from 'react';

// Internal Dependencies
import TeamLogo from '../../components/TeamLogo';
import { getTeam } from '../../api/teams';
import Roster from './Roster';

// Component Definition
const Team = (props) => {
  const [team, setTeam] = useState(null);

  async function fetchTeam() {
    try {
      const response = await getTeam(props.match.params.id);

      if (response.data && response.data.teams.length) {
        setTeam(response.data.teams[0])
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  useEffect(() => {
    fetchTeam();
  }, []);

  if (!team) {
    return <h2>Loading...</h2>
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
  )
}

export default Team;
