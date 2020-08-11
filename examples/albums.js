/* eslint-disable import/no-extraneous-dependencies */
import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQBwud4NxNQDreCZ_gnlIrORYmFj2PL8RuIaAFDzdg28fURijLugqF87_TM69CXAnWL0vFqmwJFu0VqSA3M',
});

global.fetch = require('node-fetch');

const albums = spotify.search.searchAlbums('Incubus');

albums.then((data) => data.albums.items.map((item) => console.log(item.name)));
