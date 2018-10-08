'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('terra-table/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var TableWithMultipleOnClicks = function (_React$Component) {
  _inherits(TableWithMultipleOnClicks, _React$Component);

  function TableWithMultipleOnClicks() {
    _classCallCheck(this, TableWithMultipleOnClicks);

    var _this = _possibleConstructorReturn(this, (TableWithMultipleOnClicks.__proto__ || Object.getPrototypeOf(TableWithMultipleOnClicks)).call(this));

    _this.headerClicked = _this.headerClicked.bind(_this);
    _this.nameColumnClicked = _this.nameColumnClicked.bind(_this);
    _this.headerText = 'header clicked';
    _this.headerCellText = 'header cell clicked';
    return _this;
  }

  _createClass(TableWithMultipleOnClicks, [{
    key: 'headerClicked',
    value: function headerClicked() {
      // eslint-disable-next-line no-alert
      alert(this.headerText);
    }
  }, {
    key: 'nameColumnClicked',
    value: function nameColumnClicked() {
      // eslint-disable-next-line no-alert
      alert(this.headerCellText);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Table2.default,
        { isStriped: false },
        _react2.default.createElement(
          _Table2.default.Header,
          { onClick: this.headerClicked },
          _react2.default.createElement(_Table2.default.HeaderCell, { content: 'Name', key: 'NAME', minWidth: 'small', onClick: this.nameColumnClicked }),
          _react2.default.createElement(_Table2.default.HeaderCell, { content: 'Address', key: 'ADDRESS', minWidth: 'medium' }),
          _react2.default.createElement(_Table2.default.HeaderCell, { content: 'Phone Number', key: 'PHONE_NUMBER', minWidth: 'large' })
        ),
        _react2.default.createElement(
          _Table2.default.Rows,
          null,
          _react2.default.createElement(
            _Table2.default.Row,
            { key: 'PERSON_0' },
            _react2.default.createElement(_Table2.default.Cell, { content: 'John Smith', key: 'NAME' }),
            _react2.default.createElement(_Table2.default.Cell, { content: '123 Adams Drive', key: 'ADDRESS' }),
            _react2.default.createElement(_Table2.default.Cell, { content: '111-222-3333', key: 'PHONE_NUMBER' })
          ),
          _react2.default.createElement(
            _Table2.default.Row,
            { key: 'PERSON_1' },
            _react2.default.createElement(_Table2.default.Cell, { content: 'Jane Smith', key: 'NAME' }),
            _react2.default.createElement(_Table2.default.Cell, { content: '321 Drive Street', key: 'ADDRESS' }),
            _react2.default.createElement(_Table2.default.Cell, { content: '111-222-3333', key: 'PHONE_NUMBER' })
          ),
          _react2.default.createElement(
            _Table2.default.Row,
            { key: 'PERSON_2' },
            _react2.default.createElement(_Table2.default.Cell, { content: 'Dave Smith', key: 'NAME' }),
            _react2.default.createElement(_Table2.default.Cell, { content: '213 Raymond Road', key: 'ADDRESS' }),
            _react2.default.createElement(_Table2.default.Cell, { content: '111-222-3333', key: 'PHONE_NUMBER' })
          )
        )
      );
    }
  }]);

  return TableWithMultipleOnClicks;
}(_react2.default.Component);

exports.default = TableWithMultipleOnClicks;