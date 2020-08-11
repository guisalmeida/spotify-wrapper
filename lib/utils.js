"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var toJSON = function toJSON(data) {
  return data.json();
};

var _default = toJSON; // import { CLIENT_ID, CLIENT_SECRET } from './config';
// export const getToken = () => fetch('https://accounts.spotify.com/api/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
//   },
//   body: 'grant_type=client_credentials',
// }).then((data) => data.json())
//   .then((result) => result.access_token);

exports["default"] = _default;