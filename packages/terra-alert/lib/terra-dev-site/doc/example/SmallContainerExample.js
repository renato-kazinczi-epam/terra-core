'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _Alert = require('terra-alert/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var SmallContainerExample = function (_React$Component) {
  _inherits(SmallContainerExample, _React$Component);

  function SmallContainerExample(props) {
    _classCallCheck(this, SmallContainerExample);

    var _this = _possibleConstructorReturn(this, (SmallContainerExample.__proto__ || Object.getPrototypeOf(SmallContainerExample)).call(this, props));

    _this.state = {
      actionButtonClickCount: 0
    };
    _this.actionFunc = _this.actionFunc.bind(_this);
    return _this;
  }

  _createClass(SmallContainerExample, [{
    key: 'actionFunc',
    value: function actionFunc() {
      var newState = this.state;
      newState.actionButtonClickCount += 1;
      this.setState(newState);
    }
  }, {
    key: 'render',
    value: function render() {
      var alertStartTagStr = '<Alert type="warning" action={<Button text="Action" size="medium" variant="emphasis" onClick={this.actionFunc} />} >';
      var alertEndTagStr = '</Alert>';
      var alertText = 'This is a warning. It is configured with a custom Action button.';
      var alert2StartTagStr = '<Alert type="info" >';
      var alert2EndTagStr = '</Alert>';
      var alert2Text = 'This is an information alert';
      return _react2.default.createElement(
        'div',
        { style: { width: '500px', border: '1px solid black', padding: '5px' } },
        _react2.default.createElement(
          'div',
          { dir: 'ltr' },
          _react2.default.createElement(
            'h3',
            null,
            'Basic Alert of type warning with action button in a small container (500px wide) that will cause the action button section of the alert to render below the message instead of beside it.'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'code',
            null,
            alertStartTagStr,
            _react2.default.createElement('br', null),
            '\xA0\xA0',
            alertText,
            '.',
            _react2.default.createElement('br', null),
            alertEndTagStr
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _Alert2.default,
          { type: 'warning', action: _react2.default.createElement(_terraButton2.default, { text: 'Action', variant: 'emphasis', onClick: this.actionFunc }) },
          alertText
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          'Action button has been clicked',
          this.state.actionButtonClickCount,
          ' ',
          'times.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { dir: 'ltr' },
          _react2.default.createElement(
            'h3',
            null,
            'Basic Alert of type info in a small container (500px wide) which should be rendered the same as in wide container'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'code',
            null,
            alert2StartTagStr,
            alert2Text,
            alert2EndTagStr
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _Alert2.default,
          { type: 'info' },
          alert2Text
        )
      );
    }
  }]);

  return SmallContainerExample;
}(_react2.default.Component);

exports.default = SmallContainerExample;