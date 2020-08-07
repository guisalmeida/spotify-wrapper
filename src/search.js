import { API_URL, HEADERS } from './config';
import { toJSON } from './utils';

const search = (query, type) => fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADERS)
  .then(toJSON)
  .then((result) => result);

const searchArtists = (query) => search(query, 'artist');

const searchAlbums = (query) => search(query, 'album');

const searchTracks = (query) => search(query, 'track');

const searchPlaylists = (query) => search(query, 'playlist');

export {
  search,
  searchArtists,
  searchAlbums,
  searchTracks,
  searchPlaylists,
};
