"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = exports.toJSON = void 0;

var _config = require("./config");

var toJSON = function toJSON(data) {
  return data.json();
};

exports.toJSON = toJSON;

var getToken = function getToken() {
  return fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(_config.CLIENT_ID + ':' + _config.CLIENT_SECRET)
    },
    body: 'grant_type=client_credentials'
  }).then(function (data) {
    return data.json();
  }).then(function (result) {
    return result.access_token;
  });
};

exports.getToken = getToken;