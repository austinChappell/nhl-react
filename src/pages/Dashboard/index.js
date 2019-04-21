// External Dependencies
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Internal Dependencies
import TeamLogo from '../../components/TeamLogo';
import { Context } from '../../context';
import { useLoadTeams } from '../../context/loaders/teams';

// Component Definition
const Dashboard = () => {
  const context = useContext(Context);

  useLoadTeams(context);

  return (
    <div>
      <ul>
        {context.state.teams.data.map(team => (
          <li key={team.id}>
            <Link to={`/teams/${team.id}`}>
              {team.name}
              <TeamLogo
                alt={team.name}
                teamId={team.id}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
