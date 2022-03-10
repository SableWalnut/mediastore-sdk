"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _FooterStyled = require("./FooterStyled");

var _cleengLogoSm = _interopRequireDefault(require("./img/cleeng-logo-sm.png"));

var _securityIB = _interopRequireDefault(require("./img/securityIB.svg"));

var Footer = function Footer(_ref) {
  var className = _ref.className,
      isInPopup = _ref.isInPopup,
      isCheckout = _ref.isCheckout,
      isTransparent = _ref.isTransparent;
  return /*#__PURE__*/_react.default.createElement(_FooterStyled.FooterStyled, {
    isInPopup: isInPopup,
    isTransparent: isTransparent,
    className: className
  }, /*#__PURE__*/_react.default.createElement(_FooterStyled.ProductByStyled, null, "Powered by", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://cleeng.com/who-are-cleeng",
    rel: "noopener noreferrer",
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _cleengLogoSm.default,
    alt: "Cleeng"
  }))), isCheckout && /*#__PURE__*/_react.default.createElement(_FooterStyled.SecurityStyled, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _securityIB.default,
    alt: ""
  }), "Secured checkout"));
};

Footer.propTypes = {
  isInPopup: _propTypes.PropTypes.bool,
  isCheckout: _propTypes.PropTypes.bool,
  isTransparent: _propTypes.PropTypes.bool,
  className: _propTypes.PropTypes.string
};
Footer.defaultProps = {
  isInPopup: false,
  isCheckout: true,
  isTransparent: false,
  className: ''
};
var _default = Footer;
exports.default = _default;