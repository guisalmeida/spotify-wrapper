import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'; // integração sinon com chai
import sinonStubPromise from 'sinon-stub-promise'; // para trabalhar com promise
chai.use(sinonChai); //chai que asserts do sinonchai
sinonStubPromise(sinon); // recebe todos objetos do sinon

global.fetch = require('node-fetch');

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main';

describe('Spotify wrapper', () => {

  describe('smoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.be.exist;
    });

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.be.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.be.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.be.exist;
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.be.exist;
    });
  });

  describe('Generic search', () => {
    it('should call fetch function', () => {
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;

      fetchedStub.restore();
    });

    it('should receive the correct url to fetch', () => {
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search('Incubus', 'artist');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      const albuns = search('Incubus', 'album');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album')
    });

  })
})
