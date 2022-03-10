"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SubscriptionManagement = _interopRequireDefault(require("../SubscriptionManagement"));

var _CurrentPlan = require("./CurrentPlan");

var _CurrentPlanStyled = require("./CurrentPlanStyled");

require("jest-styled-components");

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
    },
    useTranslation: function useTranslation() {
      return {
        t: function t(key) {
          return key;
        }
      };
    }
  };
});
var planDetailsMock = [{
  offerId: 'S937144802_UA',
  status: 'active',
  expiresAt: 1582706082,
  nextPaymentPrice: 14.4,
  nextPaymentCurrency: 'EUR',
  paymentGateway: 'adyen',
  paymentMethod: 'mc',
  offerTitle: 'Monthly subscription with 7 days trial',
  period: 'month'
}, {
  offerId: 'S249781156_UA',
  status: 'cancelled',
  expiresAt: 1597917717,
  nextPaymentPrice: 45.04,
  nextPaymentCurrency: 'EUR',
  paymentGateway: 'apple',
  paymentMethod: 'mc',
  offerTitle: '6-Month without trial',
  period: '6months'
}];
var showInnerPopupMock = jest.fn();
var setOfferToSwitchMock = jest.fn();
var updateList = jest.fn();
describe('<PlanDetails/>', function () {
  afterEach(function () {
    return jest.clearAllMocks();
  });
  describe('@renders', function () {
    it('should render initial state without subscriptions', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_CurrentPlan.PureCurrentPlan, {
        showInnerPopup: showInnerPopupMock,
        setOfferToSwitch: setOfferToSwitchMock,
        updateList: updateList
      }));
      expect(wrapper.prop('subscriptions')).toStrictEqual([]);
    });
    it('should render initial state with subscriptions parameter', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_CurrentPlan.PureCurrentPlan, {
        subscriptions: planDetailsMock,
        showInnerPopup: showInnerPopupMock,
        setOfferToSwitch: setOfferToSwitchMock,
        updateList: updateList
      }));
      expect(wrapper.prop('subscriptions')).toStrictEqual(planDetailsMock);
      expect(wrapper.find(_CurrentPlanStyled.SubscriptionStyled)).toHaveLength(2);
      expect(wrapper.find(_SubscriptionManagement.default)).toHaveLength(1);
    });
  });
  describe('@actions', function () {
    it('should save data about offer to switch on click SubscriptionCard', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_CurrentPlan.PureCurrentPlan, {
        subscriptions: planDetailsMock,
        showInnerPopup: showInnerPopupMock,
        setOfferToSwitch: setOfferToSwitchMock,
        updateList: updateList
      }));
      wrapper.find(_CurrentPlanStyled.SubscriptionStyled).first().simulate('click');
      expect(setOfferToSwitchMock).toHaveBeenCalledTimes(1);
      expect(setOfferToSwitchMock).toHaveBeenCalledWith(planDetailsMock[0]);
    });
  });
});