// External Dependencies
import React, { useContext } from 'react';

// Internal Dependencies
import { Context } from '../../context';
import { useLoadTeams } from '../../context/loaders/teams';
import TeamLogo from '../../components/TeamLogo';

// Component Definition
const Dashboard = () => {
  const context = useContext(Context);

  useLoadTeams(context)

  return (
    <div>
      <ul>
        {context.state.teams.data.map(team => (
          <li key={team.id}>
            {team.name}
            <TeamLogo
              alt={team.name}
              teamId={team.id}
            />
          </li>
        ))}
      </ul>
      Dashboard
    </div>
  );
};

export default Dashboard;
