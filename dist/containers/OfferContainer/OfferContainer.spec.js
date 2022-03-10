"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _api = require("../../api");

var _Offer = _interopRequireDefault(require("../../components/Offer"));

var _Loader = _interopRequireDefault(require("../../components/Loader"));

var _ErrorPage = _interopRequireDefault(require("../../components/ErrorPage"));

var _Input = require("../../components/Input");

var _appConfigHelper = require("../../util/appConfigHelper");

var _OfferContainer = _interopRequireWildcard(require("./OfferContainer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable react/jsx-props-no-spreading */
jest.mock("../labeling", function () {
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
    search: '?offer=123123'
  }
};
var jwtMock = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcklkIjoiNjkwNjI0MjU1IiwicHVibGlzaGVySWQiOjEyMDM1NTU1OX0.EvaMwJ1ZtGR4TNujmROVxiXhiHxzTOp0vgCJPoScXW2bBSroAGsm8kLe-ivnqQ9xoiHJWtDRYZGLKSGASFVuo0bqJT2ZzVEohvCPRwMke0R87p_eaTztWvAUjhbUP0Dk9xo8_AeDvEIDmGln_NXJvTTn6EqU_Xk2Zq3W29_WtbEOjfPplCp49gerR_VpnWA36yTUhfF2sWA1ir0F2HymsDvoQ_6dc8t7nENdslJY08kW-_mSQgj4SbOf4uXgiKAlPU8x3LWzUbO9uFF-eAND7hrJGM-FIWcJreW92DRXmuUMBfe_ws9KXzv-F5gKVcuz7qOpyykkJtZSBvFQJtKMaw';
jest.mock("../../api", function () {
  return {
    updateOrder: jest.fn().mockImplementation(function () {
      return new Promise(function (resolve) {
        resolve({
          errors: [],
          responseData: {
            order: {
              id: 123123,
              priceBreakdown: {
                offerPrice: 2
              },
              discount: {
                applied: false
              }
            }
          }
        });
      });
    }),
    getOfferDetails: jest.fn().mockImplementation(function () {
      return new Promise(function (resolve) {
        resolve({
          errors: [],
          responseData: {
            trialAvailable: true
          }
        });
      });
    }),
    createOrder: jest.fn().mockImplementation(function () {
      return new Promise(function (resolve) {
        resolve({
          errors: [],
          responseData: {
            order: {
              id: 123123,
              priceBreakdown: {
                offerPrice: 2
              },
              discount: {
                applied: false
              }
            }
          },
          trialAvailable: true
        });
      });
    }),
    getPaymentMethods: jest.fn().mockImplementation(function () {
      return new Promise(function (resolve) {
        resolve({
          errors: [],
          responseData: {}
        });
      });
    })
  };
});
var orderId = 123123;
var MockCoupon = {
  message: 'Your coupon has been applied',
  messageType: _Input.MESSAGE_TYPE_SUCCESS
};
describe('<OfferContainer/>', function () {
  beforeEach(function () {
    jest.spyOn(Storage.prototype, 'setItem');
  });
  afterEach(function () {
    jest.clearAllMocks();
  });
  (0, _appConfigHelper.setData)('CLEENG_AUTH_TOKEN', jwtMock);
  describe('@renders', function () {
    it('should show Loader when no offer details', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_OfferContainer.default, {
        urlProps: mockUrlProps,
        onPaymentComplete: jest.fn()
      }));
      expect(wrapper.exists(_Loader.default)).toBe(true);
    });
    it('should render error page when offer is blocked for country', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_OfferContainer.PureOfferContainer, {
        urlProps: mockUrlProps,
        onPaymentComplete: jest.fn()
      }));
      wrapper.setState({
        error: 'Offer is blocked for country'
      });
      expect(wrapper.exists(_ErrorPage.default)).toBe(true);
      expect(wrapper.find(_ErrorPage.default).props().type).toBe('cannotPurchase');
    });
    it('should render error page when offer does not exist', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_OfferContainer.PureOfferContainer, {
        urlProps: mockUrlProps,
        onPaymentComplete: jest.fn()
      }));
      wrapper.setState({
        error: "doesn't exist."
      });
      expect(wrapper.exists(_ErrorPage.default)).toBe(true);
      expect(wrapper.find(_ErrorPage.default).props().type).toBe('offerNotExist');
    });
    it('should render error page when customer already have access', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_OfferContainer.PureOfferContainer, {
        urlProps: mockUrlProps,
        onPaymentComplete: jest.fn()
      }));
      wrapper.setState({
        error: 'Access already granted'
      });
      expect(wrapper.exists(_ErrorPage.default)).toBe(true);
      expect(wrapper.find(_ErrorPage.default).props().type).toBe('alreadyHaveAccess');
    });
    it('should redirect to login page if error occurred', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_OfferContainer.PureOfferContainer, {
        urlProps: mockUrlProps,
        onPaymentComplete: jest.fn()
      }));
      wrapper.setState({
        error: 'error'
      });
      expect(wrapper.exists(_ErrorPage.default)).toBe(false);
      expect(wrapper.exists(_Offer.default)).toBe(false);
    });
  });
  describe('@actions', function () {
    it('should apply valid coupon on submit', function (done) {
      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_OfferContainer.PureOfferContainer, {
        urlProps: mockUrlProps,
        onPaymentComplete: jest.fn()
      }));
      wrapper.setState({
        orderDetails: {
          id: orderId
        }
      });
      wrapper.instance().onCouponSubmit(MockCoupon);
      expect(wrapper.state().couponProps.couponLoading).toBe(true);
      setImmediate(function () {
        expect(wrapper.state().orderDetails).not.toBe(null);
        expect(wrapper.state().couponProps.couponLoading).toBe(false);
        expect(wrapper.state().couponProps.showMessage).toBe(true);
        expect(wrapper.state().couponProps.message).toBe('Your coupon has been applied!');
        expect(wrapper.state().couponProps.messageType).toBe(_Input.MESSAGE_TYPE_SUCCESS);
        done();
      });
    });
    it('should not apply empty coupon on submit', function () {
      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_OfferContainer.PureOfferContainer, {
        urlProps: mockUrlProps,
        onPaymentComplete: jest.fn()
      }));
      wrapper.setState({
        orderDetails: {
          id: orderId
        }
      });
      wrapper.instance().onCouponSubmit('');
      expect(wrapper.state().couponProps).toBe(null);
    });
    it('should not apply invalid coupon on submit', function (done) {
      _api.updateOrder.mockImplementationOnce(function () {
        return new Promise(function (resolve) {
          resolve({
            status: 422,
            errors: ['not valid coupon']
          });
        });
      });

      _api.getOfferDetails.mockImplementationOnce(function () {
        return new Promise(function (resolve) {
          resolve({
            errors: []
          });
        });
      });

      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_OfferContainer.PureOfferContainer, {
        urlProps: mockUrlProps,
        onPaymentComplete: jest.fn()
      }));
      wrapper.setState({
        orderDetails: {
          id: orderId
        },
        offerId: '123'
      });
      wrapper.instance().onCouponSubmit(MockCoupon);
      expect(wrapper.state().couponProps.couponLoading).toBe(true);
      setImmediate(function () {
        expect(wrapper.state().couponProps.couponLoading).toBe(false);
        expect(wrapper.state().couponProps.showMessage).toBe(true);
        expect(wrapper.state().couponProps.message).toBe('This is not a valid coupon code for this offer. Please check the code on your coupon and try again.');
        expect(wrapper.state().couponProps.messageType).toBe(_Input.MESSAGE_TYPE_FAIL);
        done();
      });
    });
    it('should show error while empty offerId', function (done) {
      (0, _appConfigHelper.setData)('CLEENG_OFFER_ID', '');
      var localProps = {
        location: {
          search: ''
        }
      };
      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_OfferContainer.PureOfferContainer, {
        urlProps: localProps,
        onPaymentComplete: jest.fn()
      }));
      setImmediate(function () {
        expect(wrapper.state().error).toBe('Offer not set');
        done();
      });
    });
    it('should show error while offer fetching will fail', function (done) {
      _api.getOfferDetails.mockImplementationOnce(function () {
        return new Promise(function (resolve) {
          resolve({
            errors: ['some error']
          });
        });
      });

      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_OfferContainer.PureOfferContainer, {
        urlProps: mockUrlProps,
        onPaymentComplete: jest.fn()
      }));
      setImmediate(function () {
        expect(wrapper.state().error).toBe('some error');
        done();
      });
    });
  });
});