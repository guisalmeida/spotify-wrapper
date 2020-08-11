/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'; // integração sinon com chai

import SpotifyWrapper from '../src/index';

chai.use(sinonChai); // chai que asserts do sinonchai

global.fetch = require('node-fetch');

describe('Search', () => {
  let spotify;
  let stubedFetch;
  let promise;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo',
    });

    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {
    it('should exist the spotify.search.searchAlbums method', () => {
      expect(spotify.search.searchAlbums).to.be.exist;
    });

    it('should exist the spotify.search.searchArtists method', () => {
      expect(spotify.search.searchArtists).to.be.exist;
    });

    it('should exist the spotify.search.searchTracks method', () => {
      expect(spotify.search.searchTracks).to.be.exist;
    });

    it('should exist the spotify.search.searchPlaylists method', () => {
      expect(spotify.search.searchPlaylists).to.be.exist;
    });
  });

  describe('Search artists', () => {
    it('should call fetch function', () => {
      const artists = spotify.search.searchArtists('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const artists = spotify.search.searchArtists('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      const artists2 = spotify.search.searchArtists('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
    });
  });

  describe('Search albums', () => {
    it('should call fetch function', () => {
      const albums = spotify.search.searchAlbums('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const albums = spotify.search.searchAlbums('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

      const albums2 = spotify.search.searchAlbums('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
    });
  });

  describe('Search tracks', () => {
    it('should call fetch function', () => {
      const tracks = spotify.search.searchTracks('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const tracks = spotify.search.searchTracks('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

      const tracks2 = spotify.search.searchTracks('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
    });
  });

  describe('Search playlists', () => {
    it('should call fetch function', () => {
      const playlists = spotify.search.searchPlaylists('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const playlists = spotify.search.searchPlaylists('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

      const playlists2 = spotify.search.searchPlaylists('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
    });
  });
});
