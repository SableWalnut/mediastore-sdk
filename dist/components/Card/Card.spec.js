"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Card = _interopRequireDefault(require("./Card"));

var _CardStyled = require("./CardStyled");

describe('<Card/>', function () {
  describe('@renders', function () {
    it('should render initial state', function () {
      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Card.default, null));
      expect(wrapper.find(_CardStyled.WrapStyled)).toHaveLength(1);
    });
  });
});