import { getRequest } from '.';

export function getTeams() {
  const endpoint = '/teams';
  return getRequest({ endpoint });
}

export function getTeam(id) {
  const endpoint = `/teams/${id}`;
  return getRequest({ endpoint });
}

export function getTeamRoster(teamId) {
  const endpoint = `/teams/${teamId}/roster`;
  return getRequest({ endpoint });
}