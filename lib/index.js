"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _search = _interopRequireDefault(require("./search"));

var _album = _interopRequireDefault(require("./album"));

var _config = require("./config");

var _utils = _interopRequireDefault(require("./utils"));

var SpotifyWrapper = /*#__PURE__*/function () {
  function SpotifyWrapper(options) {
    (0, _classCallCheck2["default"])(this, SpotifyWrapper);
    this.apiURL = options.apiURL || _config.API_URL;
    this.token = options.token;
    this.album = _album["default"].bind(this)();
    this.search = _search["default"].bind(this)();
  }

  (0, _createClass2["default"])(SpotifyWrapper, [{
    key: "request",
    value: function request(url) {
      var headers = {
        headers: {
          Authorization: "'Bearer ".concat(this.token, "'")
        }
      };
      return fetch(url, headers).then(_utils["default"]);
    }
  }]);
  return SpotifyWrapper;
}();

exports["default"] = SpotifyWrapper;