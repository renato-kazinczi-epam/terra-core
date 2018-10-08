'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('../../../Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlledMultiple = function (_React$Component) {
  _inherits(ControlledMultiple, _React$Component);

  function ControlledMultiple() {
    _classCallCheck(this, ControlledMultiple);

    var _this = _possibleConstructorReturn(this, (ControlledMultiple.__proto__ || Object.getPrototypeOf(ControlledMultiple)).call(this));

    _this.state = { value: [] };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(ControlledMultiple, [{
    key: 'handleChange',
    value: function handleChange(value) {
      this.setState({ value: value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Select2.default,
        {
          id: 'multiple',
          onChange: this.handleChange,
          placeholder: 'Select a color',
          value: this.state.value,
          variant: 'multiple'
        },
        _react2.default.createElement(_Select2.default.Option, { value: 'blue', display: 'Blue' }),
        _react2.default.createElement(_Select2.default.Option, { value: 'green', display: 'Green' }),
        _react2.default.createElement(_Select2.default.Option, { value: 'purple', display: 'Purple' }),
        _react2.default.createElement(_Select2.default.Option, { value: 'red', display: 'Red' }),
        _react2.default.createElement(_Select2.default.Option, { value: 'violet', display: 'Violet' })
      );
    }
  }]);

  return ControlledMultiple;
}(_react2.default.Component);

exports.default = ControlledMultiple;