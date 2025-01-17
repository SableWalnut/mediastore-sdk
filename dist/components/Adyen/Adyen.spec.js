"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Adyen = _interopRequireDefault(require("./Adyen"));

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
var mockOnSubmit = jest.fn();
var mockOnChange = jest.fn();
var MockAdyenCheckout = /*#__PURE__*/(0, _createClass2.default)(function MockAdyenCheckout(configuration) {
  (0, _classCallCheck2.default)(this, MockAdyenCheckout);

  this.create = function (paymentMethod) {
    expect(paymentMethod).toBe('card');
    return {
      mount: function mount(componentContainerId) {
        return expect(componentContainerId).toBe('#component-container');
      }
    };
  };

  expect(configuration).toStrictEqual({
    environment: 'test',
    onSubmit: mockOnSubmit,
    onChange: mockOnChange,
    clientKey: 'test_I4OFGUUCEVB5TI222AS3N2Y2LY6PJM3K',
    showPayButton: false,
    hasHolderName: true,
    holderNameRequired: true
  });
});
describe('Adyen', function () {
  it('calls Adyen API', function () {
    window.AdyenCheckout = MockAdyenCheckout;
    window.ENVIRONMENT_CONFIGURATION = {
      ADYEN_CLIENT_KEY: 'foo'
    };
    (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Adyen.default, {
      onSubmit: mockOnSubmit,
      onChange: mockOnChange
    })); // assertions are inside the mock class functions
  });
});