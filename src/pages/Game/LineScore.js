// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// Internal Dependencies
import Flex from '../../components/shared/Flex';

// Local Variables
const propTypes = {
  lineScore: PropTypes.shape({}).isRequired,
};
const Box = styled.div`
  border: 1px solid black;
  padding: 12px;
`;

// Component Definition
const LineScore = ({ lineScore }) => {
  const totalScore = lineScore.periods.reduce((acc, curr, idx) => {
    acc.away = acc.away + curr.away.goals;
    acc.home = acc.home + curr.home.goals;
    return acc;
  }, { home: 0, away: 0 })

  return (
    <div>
      <h3>
        {lineScore.currentPeriodOrdinal} - {lineScore.currentPeriodTimeRemaining}
      </h3>

      <Flex>
        <div>
          <Box>
            Teams
          </Box>
          <Box>
            {lineScore.teams.away.team.name}
          </Box>
          <Box>
            {lineScore.teams.home.team.name}
          </Box>
        </div>
        {lineScore.periods.map(period => (
          <div key={period.num}>
            <Box>
              {period.ordinalNum}
            </Box>
            <Box>
              {period.away.goals}
            </Box>
            <Box>
              {period.home.goals}
            </Box>
          </div>
        ))}
        <div>
          <Box>
            <strong>
              Total
            </strong>
          </Box>
          <Box>
            <strong>
              {totalScore.away}
            </strong>
          </Box>
          <Box>
            <strong>
              {totalScore.home}
            </strong>
          </Box>
        </div>
      </Flex>
    </div>
  );
};

LineScore.propTypes = propTypes;

export default LineScore;
