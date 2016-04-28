"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactDisqus = function (_React$Component) {
  _inherits(ReactDisqus, _React$Component);

  function ReactDisqus() {
    _classCallCheck(this, ReactDisqus);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactDisqus).apply(this, arguments));
  }

  _createClass(ReactDisqus, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.embedDisqus();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { id: "disqus_thread" },
          _react2.default.createElement(
            "noscript",
            null,
            _react2.default.createElement(
              "span",
              null,
              "Please enable JavaScript to view the",
              _react2.default.createElement(
                "a",
                { href: "http://disqus.com/?ref_noscript" },
                "comments powered by Disqus."
              )
            )
          )
        )
      );
    }
  }, {
    key: "embedDisqus",
    value: function embedDisqus() {
      var disqus_config = function disqus_config() {
        this.page.url = this.props.pageurl;
        this.page.identifier = this.props.identifier;
      };
      var dsq = document.createElement('script');dsq.type = 'text/javascript';dsq.async = true;
      dsq.src = 'http://' + this.props.shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    }
  }]);

  return ReactDisqus;
}(_react2.default.Component);

ReactDisqus.propTypes = {
  shortname: _react2.default.PropTypes.string.isRequired,
  pageurl: _react2.default.PropTypes.string,
  identifier: _react2.default.PropTypes.string

};
ReactDisqus.defaultProps = {
  shortname: null,
  pageurl: window.location.href,
  identifier: null
};

exports.default = ReactDisqus;
