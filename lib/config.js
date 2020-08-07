"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = exports.CLIENT_SECRET = exports.CLIENT_ID = void 0;
var TOKEN_API = 'BQBwud4NxNQDreCZ_gnlIrORYmFj2PL8RuIaAFDzdg28fURijLugqF87_TM69CXAnWL0vFqmwJFu0VqSA3M';
var CLIENT_ID = 'c57ce82bc3f744c9a1182def155edf76';
exports.CLIENT_ID = CLIENT_ID;
var CLIENT_SECRET = '7c9b5198ff1e443bb08e72ffc537843d';
exports.CLIENT_SECRET = CLIENT_SECRET;
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var HEADERS = {
  headers: {
    Authorization: "'Bearer ".concat(TOKEN_API, "'")
  }
};
exports.HEADERS = HEADERS;