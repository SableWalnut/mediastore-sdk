"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layoutHelper = require("../../util/layoutHelper");

var _appConfigHelper = require("../../util/appConfigHelper");

var _HeaderStyled = require("./HeaderStyled");

var _logo = _interopRequireDefault(require("./img/logo.png"));

var Header = function Header(_ref) {
  var withoutLogo = _ref.withoutLogo,
      children = _ref.children;

  var _ref2 = (0, _appConfigHelper.getTheme)() || {},
      logoUrl = _ref2.logoUrl;

  var logo = logoUrl || _logo.default;
  return /*#__PURE__*/_react.default.createElement(_HeaderStyled.HeaderStyled, {
    switchOff: (0, _layoutHelper.isHeaderOff)()
  }, !withoutLogo && /*#__PURE__*/_react.default.createElement(_HeaderStyled.LogoStyled, {
    logoSrc: logo
  }), children);
};

Header.propTypes = {
  withoutLogo: _propTypes.default.bool,
  children: _propTypes.default.node
};
Header.defaultProps = {
  withoutLogo: false,
  children: null
};
var _default = Header;
exports.default = _default;