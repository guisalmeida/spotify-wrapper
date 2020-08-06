import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'; // integração sinon com chai

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/search';

chai.use(sinonChai); // chai que asserts do sinonchai

global.fetch = require('node-fetch');

describe('Search', () => {
  let stubedFetch;
  let promise;

  beforeEach(() => {
    // spotify = new SpotifyWrapper({
    //   token: 'foo',
    // });

    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    stubedFetch.restore();
  })

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
      const artists = search();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      context('passing one type', () => {
        const artists = search('Incubus', 'artist');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

        const albuns = search('Incubus', 'album');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
      });

      context('passing more then type', () => {
        const artistAndAlbums = search('Incubus', ['artist', 'album']);
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
      });
    });

    // it('should return the correct data from Promise', () => {
    //   const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
    //   album.then((data) => {
    //     expect(data).to.be.eql({ album: 'name' });
    //   });
    // });

    // it('should return the correct data from Promise', () => {
    //   const tracks = getTracks('4aawyAB9vmqN3uQ7FjRGTy');
    //   tracks.then((data) => {
    //     expect(data).to.be.eql({ album: 'name' });
    //   });
    // });

  });

  describe('Search artists', () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const artists = searchArtists('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      const artists2 = searchArtists('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
    });
  });

  describe('Search albums', () => {
    it('should call fetch function', () => {
      const albums = searchAlbums('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const albums = searchAlbums('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

      const albums2 = searchAlbums('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
    });
  });

  describe('Search tracks', () => {
    it('should call fetch function', () => {
      const tracks = searchTracks('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const tracks = searchTracks('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

      const tracks2 = searchTracks('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
    });
  });

  describe('Search playlists', () => {
    it('should call fetch function', () => {
      const playlists = searchPlaylists('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const playlists = searchPlaylists('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

      const playlists2 = searchPlaylists('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
    });
  });
});


