// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { space, colors } from '../../constants/styles';

// Local Variables
const propTypes = {
  game: PropTypes.shape({
    content: PropTypes.shape({
      link: PropTypes.string.isRequired,
    }).isRequired,
    gameDate: PropTypes.string.isRequired,
    gamePk: PropTypes.number.isRequired,
    gameType: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    season: PropTypes.string.isRequired,
    status: PropTypes.shape({
      abstractGameState: PropTypes.string.isRequired,
      codedGameState: PropTypes.string.isRequired,
      detailedState: PropTypes.string.isRequired,
      startTimeTBD: PropTypes.bool.isRequired,
      statusCode: PropTypes.string.isRequired,
    }).isRequired,
    teams: PropTypes.shape({
      away: PropTypes.shape({
        leagueRecord: PropTypes.shape({
          losses: PropTypes.number.isRequired,
          type: PropTypes.string.isRequired,
          wins: PropTypes.number.isRequired,
        }).isRequired,
        score: PropTypes.number.isRequired,
        team: PropTypes.shape({
          id: PropTypes.number.isRequired,
          link: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      home: PropTypes.shape({
        leagueRecord: PropTypes.shape({
          losses: PropTypes.number.isRequired,
          type: PropTypes.string.isRequired,
          wins: PropTypes.number.isRequired,
        }).isRequired,
        score: PropTypes.number.isRequired,
        team: PropTypes.shape({
          id: PropTypes.number.isRequired,
          link: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    venue: PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
const StyledLink = styled(Link)`
  border: 1px solid ${colors.font.dark};
  color: ${colors.font.dark};
  display: block;
  text-decoration: none;
  padding: ${space.md};
`;
const SummaryContainer = styled.div`
  margin-top: ${space.md};
  text-align: right;
`;

function renderTeam(team) {
  return `${team.team.name} ${team.score}`;
}

// Component Definition
const GameSummary = ({ game }) => {
  const {
    teams: {
      away: awayTeam,
      home: homeTeam,
    },
  } = game;
  return (
    <StyledLink to={`/games/${game.gamePk}`}>
      <span>
        {`${moment(game.gameDate).format('h:mm a')} - ${game.status.detailedState}`}
      </span>
      <SummaryContainer>
        <h3>
          {renderTeam(awayTeam)}
        </h3>
        <h3>
          {renderTeam(homeTeam)}
        </h3>
      </SummaryContainer>
    </StyledLink>
  );
};

GameSummary.propTypes = propTypes;

export default GameSummary;
