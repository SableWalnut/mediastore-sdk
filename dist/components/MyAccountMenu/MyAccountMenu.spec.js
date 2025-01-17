"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _MyAccountMenuStyled = require("./MyAccountMenuStyled");

var _MyAccountMenu = require("./MyAccountMenu");

describe('<MyAccountMenu/>', function () {
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_MyAccountMenu.PureMyAccountMenu, null));
  describe('@renders', function () {
    it('should render initial state', function () {
      expect(wrapper.find(_MyAccountMenuStyled.ItemsStyled)).toHaveLength(1);
    });
  });
});