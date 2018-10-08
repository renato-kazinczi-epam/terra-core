'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Arrange = require('../../../Arrange');

var _Arrange2 = _interopRequireDefault(_Arrange);

var _examplesetup = require('./common/examplesetup');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlignedAllArrange = function AlignedAllArrange() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _examplesetup.ArrangeWrapper,
      null,
      _react2.default.createElement(_Arrange2.default, {
        id: 'default',
        fitStart: _examplesetup.image,
        fill: _examplesetup.simpleText,
        fitEnd: _react2.default.createElement(_examplesetup.IconWrapper, null)
      })
    ),
    _react2.default.createElement(
      _examplesetup.ArrangeWrapper,
      null,
      _react2.default.createElement(_Arrange2.default, {
        id: 'center',
        align: 'center',
        fitStart: _examplesetup.image,
        fill: _examplesetup.simpleText,
        fitEnd: _react2.default.createElement(_examplesetup.IconWrapper, null)
      })
    ),
    _react2.default.createElement(
      _examplesetup.ArrangeWrapper,
      null,
      _react2.default.createElement(_Arrange2.default, {
        id: 'bottom',
        align: 'bottom',
        fitStart: _examplesetup.image,
        fill: _examplesetup.simpleText,
        fitEnd: _react2.default.createElement(_examplesetup.IconWrapper, null)
      })
    ),
    _react2.default.createElement(
      _examplesetup.ArrangeWrapper,
      null,
      _react2.default.createElement(_Arrange2.default, {
        id: 'stretch',
        align: 'stretch',
        fitStart: _examplesetup.image,
        fill: _examplesetup.simpleText,
        fitEnd: _react2.default.createElement(_examplesetup.IconWrapper, null)
      })
    ),
    _react2.default.createElement(
      _examplesetup.ArrangeWrapper,
      null,
      _react2.default.createElement(_Arrange2.default, {
        id: 'icon-stretch',
        align: 'stretch',
        fitStart: _react2.default.createElement(_examplesetup.IconWrapper, null),
        fill: _examplesetup.longText,
        fitEnd: _react2.default.createElement(_examplesetup.IconWrapper, null)
      })
    )
  );
};

exports.default = AlignedAllArrange;