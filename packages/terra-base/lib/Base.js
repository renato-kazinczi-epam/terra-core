'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntlProvider = exports.FormattedMessage = exports.intlShape = exports.injectIntl = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraI18n = require('terra-i18n');

require('./baseStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * The component(s) that will be wrapped by `<Base />`.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * The locale name.
   */
  locale: _propTypes2.default.string,
  /**
   * Customized translations provided by consuming application only for current locale.
   */
  /* eslint-disable consistent-return */
  customMessages: function customMessages(props, propName, componentName) {
    if (Object.keys(props[propName]).length !== 0 && props.locale === undefined) {
      return new Error('Missing locale prop for ' + propName + ' in ' + componentName + ' props');
    }
  },
  /**
   * Activates [React Strict Mode](https://reactjs.org/docs/strict-mode.html) for descendants
   */
  strictMode: _propTypes2.default.bool,
  /**
   * The component(s) that will be wrapped by `<Base />` ONLY
   * in the event that translations have not been loaded yet.
   * NOTE: Absolutely no locale-dependent logic should be
   * utilized in this placeholder.
   */
  translationsLoadingPlaceholder: _propTypes2.default.node
};

var defaultProps = {
  customMessages: {},
  strictMode: false
};

var Base = function (_React$Component) {
  _inherits(Base, _React$Component);

  function Base(props) {
    _classCallCheck(this, Base);

    var _this = _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).call(this, props));

    _this.state = {
      areTranslationsLoaded: false,
      locale: props.locale,
      messages: {}
    };
    return _this;
  }

  _createClass(Base, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.locale !== undefined) {
        try {
          (0, _terraI18n.i18nLoader)(this.props.locale, this.setState, this);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(e);
        }
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.locale !== undefined && nextProps.locale !== this.props.locale) {
        try {
          (0, _terraI18n.i18nLoader)(nextProps.locale, this.setState, this);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(e);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          locale = _props.locale,
          customMessages = _props.customMessages,
          strictMode = _props.strictMode,
          translationsLoadingPlaceholder = _props.translationsLoadingPlaceholder,
          customProps = _objectWithoutProperties(_props, ['children', 'locale', 'customMessages', 'strictMode', 'translationsLoadingPlaceholder']);

      var messages = _extends({}, this.state.messages, customMessages);
      var renderChildren = strictMode ? _react2.default.createElement(
        _react2.default.StrictMode,
        null,
        children
      ) : children;

      if (locale === undefined) {
        return _react2.default.createElement(
          'div',
          customProps,
          renderChildren
        );
      }

      if (!this.state.areTranslationsLoaded) return _react2.default.createElement(
        'div',
        null,
        this.props.translationsLoadingPlaceholder
      );
      return _react2.default.createElement(
        _terraI18n.I18nProvider,
        _extends({}, customProps, { locale: this.state.locale, messages: messages }),
        renderChildren
      );
    }
  }]);

  return Base;
}(_react2.default.Component);

Base.propTypes = propTypes;
Base.defaultProps = defaultProps;

exports.default = Base;
exports.injectIntl = _terraI18n.injectIntl;
exports.intlShape = _terraI18n.intlShape;
exports.FormattedMessage = _terraI18n.FormattedMessage;
exports.IntlProvider = _terraI18n.IntlProvider;