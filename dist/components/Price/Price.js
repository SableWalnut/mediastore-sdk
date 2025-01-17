"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _roundNumber = _interopRequireDefault(require("../../util/roundNumber"));

var _PriceStyled = require("./PriceStyled");

var addSpaceAfterNumber = function addSpaceAfterNumber(str) {
  if (!/\d/.test(str.charAt(0))) {
    return str;
  }

  return "".concat(str.charAt(0), " ").concat(str.substring(1));
};

var Price = function Price(_ref) {
  var currency = _ref.currency,
      price = _ref.price,
      period = _ref.period;
  return /*#__PURE__*/_react.default.createElement(_PriceStyled.WrapperStyled, null, /*#__PURE__*/_react.default.createElement(_PriceStyled.InnerWrapper, null, /*#__PURE__*/_react.default.createElement(_PriceStyled.CurrencyStyled, null, currency), /*#__PURE__*/_react.default.createElement(_PriceStyled.PriceStyled, null, (0, _roundNumber.default)(price))), period && /*#__PURE__*/_react.default.createElement(_PriceStyled.PeriodStyled, null, "/\xA0", addSpaceAfterNumber(period)));
};

Price.propTypes = {
  currency: _propTypes.default.string,
  price: _propTypes.default.number,
  period: _propTypes.default.string
};
Price.defaultProps = {
  currency: '',
  price: '',
  period: ''
};
var _default = Price;
exports.default = _default;