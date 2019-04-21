import axios from 'axios';

const baseUrl = 'https://statsapi.web.nhl.com/api/v1';

async function sendRequest({
  data,
  endpoint,
  method,
}) {
  const url = `${baseUrl}${endpoint}`;
  try {
    const response = await axios({
      data,
      method,
      url,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export function getRequest({ endpoint }) {
  return sendRequest({
    endpoint,
    method: 'GET',
  });
}
