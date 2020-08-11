/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFetch;
  let promise;
  let spotify;

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

  describe('Smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(spotify.album.getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    // verifica se o fetch ocorre
    it('should call fetch method', () => {
      const album = spotify.album.getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    // verifica se o fetch ocorre com a url desejada
    it('should call fetch method with the correct url', () => {
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

      const album2 = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk');
    });

    // verifica se o dado é recebido pela promise
    it('should return the correct data from promise', () => {
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      album.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbums', () => {
    // verifica se o fetch ocorre
    it('should call fetch method', () => {
      const albums = spotify.album.getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    // verifica se o fetch ocorre com a url desejada
    it('should call fetch method with the correct url', () => {
      const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk');
    });

    // verifica se o dado é recebido pela promise
    it('should return the correct data from promise', () => {
      const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      albums.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbumTracks', () => {
    // verifica se o fetch ocorre
    it('should call fetch method', () => {
      const tracks = spotify.album.getAlbumTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    // verifica se o fetch ocorre com a url desejada
    it('should call fetch method with the correct url', () => {
      const tracks = spotify.album.getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
    });

    // verifica se o dado é recebido pela promise
    it('should return the correct data from promise', () => {
      const tracks = spotify.album.getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      tracks.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });
});
