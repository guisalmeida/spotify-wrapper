import { CLIENT_ID, CLIENT_SECRET } from './config';

export const toJSON = (data) => data.json();

export const getToken = () => fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
  },
  body: 'grant_type=client_credentials',
}).then((data) => data.json())
  .then((result) => result.access_token);
