"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Register = require("./Register");

/* eslint-disable react/jsx-props-no-spreading */
jest.mock("../../containers/labeling", function () {
  return function () {
    return function (Component) {
      return function (props) {
        return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
          t: function t(k) {
            return k;
          }
        }, props));
      };
    };
  };
});
jest.mock('react-i18next', function () {
  return {
    withTranslation: function withTranslation() {
      return function (Component) {
        return function (props) {
          return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
            t: function t(k) {
              return k;
            }
          }, props));
        };
      };
    }
  };
});
var mockUrlProps = {
  location: {
    search: '?123123'
  }
};
describe('Register Page', function () {
  describe('@renders', function () {
    it('should update state when offer not exist', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Register.PureRegister, {
        urlProps: mockUrlProps
      }));
      wrapper.instance().setOfferError(true);
      expect(wrapper.state().isOfferError).toBe(true);
    });
  });
});