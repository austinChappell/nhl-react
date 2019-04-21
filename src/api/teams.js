import { getRequest } from '.';

export function getTeams() {
  const endpoint = '/teams';
  return getRequest({ endpoint });
}
