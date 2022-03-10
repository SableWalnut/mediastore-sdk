"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PureOfferContainer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Offer = _interopRequireDefault(require("../../components/Offer"));

var _Input = require("../../components/Input");

var _ErrorPage = _interopRequireDefault(require("../../components/ErrorPage"));

var _Header = _interopRequireDefault(require("../../components/Header"));

var _Footer = _interopRequireDefault(require("../../components/Footer"));

var _Loader = _interopRequireDefault(require("../../components/Loader"));

var _api = require("../../api");

var _offerIdHelper = _interopRequireDefault(require("../../util/offerIdHelper"));

var _appConfigHelper = require("../../util/appConfigHelper");

var _StyledOfferContainer = require("./StyledOfferContainer");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// import labeling from '../labeling';
var OfferContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(OfferContainer, _Component);

  var _super = _createSuper(OfferContainer);

  function OfferContainer(props) {
    var _this;

    (0, _classCallCheck2.default)(this, OfferContainer);
    _this = _super.call(this, props);

    _this.updatePriceBreakdown = function (updatedOrder) {
      _this.setState({
        orderDetails: updatedOrder
      });
    };

    _this.setOfferId = function (value) {
      return _this.setState({
        offerId: value
      });
    };

    _this.onCouponSubmit = function (couponCode) {
      if (couponCode === '') {
        return;
      }

      _this.setState({
        couponProps: {
          couponLoading: true
        }
      });

      var id = _this.state.orderDetails.id;
      (0, _api.updateOrder)(id, {
        couponCode: couponCode
      }).then(function (result) {
        if (result.errors.length) {
          _this.setState({
            couponProps: {
              couponLoading: false,
              showMessage: true,
              message: 'This is not a valid coupon code for this offer. Please check the code on your coupon and try again.',
              messageType: _Input.MESSAGE_TYPE_FAIL
            }
          });
        } else {
          _this.setState({
            orderDetails: result.responseData.order,
            couponProps: {
              couponLoading: false,
              showMessage: true,
              message: 'Your coupon has been applied!',
              messageType: _Input.MESSAGE_TYPE_SUCCESS
            }
          });
        }
      });
    };

    _this.state = {
      offerDetails: null,
      couponProps: null,
      error: '',
      offerId: null,
      isFreeOffer: false,
      isFreeOrderReady: false,
      orderDetails: {
        priceBreakdown: {
          offerPrice: 0,
          discountedPrice: 0,
          discountAmount: 0
        },
        discount: {
          applied: false
        }
      },
      isOrderCreated: false
    };
    return _this;
  }

  (0, _createClass2.default)(OfferContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          urlProps = _this$props.urlProps,
          offerId = _this$props.offerId;

      if (urlProps.location) {
        (0, _offerIdHelper.default)(urlProps.location, this.setOfferId);
      } else if (offerId) {
        this.setOfferId(offerId);
      } else {
        this.setOfferId((0, _appConfigHelper.getData)('CLEENG_OFFER_ID'));
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var offerId = this.state.offerId;

      if (offerId !== prevState.offerId) {
        if (offerId) {
          (0, _api.getOfferDetails)(offerId).then(function (offerDetailsResponse) {
            if (offerDetailsResponse.errors.length) {
              _this2.setState({
                error: offerDetailsResponse.errors[0]
              });
            } else {
              _this2.setState({
                offerId: offerDetailsResponse.offerId,
                offerDetails: offerDetailsResponse.responseData
              });

              if (offerDetailsResponse && offerDetailsResponse.responseData && offerDetailsResponse.responseData.offerId) (0, _api.createOrder)(offerDetailsResponse.responseData.offerId).then(function (orderDetailsResponse) {
                var errors = orderDetailsResponse.errors;

                if (errors.length) {
                  _this2.setState({
                    error: errors[0]
                  });

                  return;
                }

                var order = orderDetailsResponse.responseData.order;
                var isFreeOffer = order.totalPrice === 0 && !order.discount.applied;

                _this2.setState({
                  orderDetails: order,
                  isOrderCreated: true,
                  isFreeOffer: isFreeOffer
                });

                (0, _appConfigHelper.setData)('CLEENG_ORDER_ID', order.id);

                if (isFreeOffer) {
                  (0, _api.getPaymentMethods)().then(function (paymentMethodResponse) {
                    var paymentMethods = paymentMethodResponse.responseData.paymentMethods;
                    var properPaymentMethodId = paymentMethods.find(function (method) {
                      return (0, _appConfigHelper.getData)('CLEENG_OFFER_TYPE') === 'S' ? method.methodName === 'manual' : method.methodName !== 'manual';
                    });
                    (0, _api.updateOrder)(order.id, {
                      paymentMethodId: properPaymentMethodId ? properPaymentMethodId.id : 0
                    }).then(function () {
                      _this2.setState({
                        isFreeOrderReady: true
                      });
                    });
                  });
                }
              });
            }
          });
        } else if (offerId === '') {
          // eslint-disable-next-line react/no-did-update-set-state
          this.setState({
            error: 'Offer not set'
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          error = _this$state.error,
          offerDetails = _this$state.offerDetails,
          couponProps = _this$state.couponProps,
          orderDetails = _this$state.orderDetails,
          isOrderCreated = _this$state.isOrderCreated,
          isFreeOffer = _this$state.isFreeOffer,
          isFreeOrderReady = _this$state.isFreeOrderReady;
      var _this$props2 = this.props,
          onSuccess = _this$props2.onSuccess,
          t = _this$props2.t;

      if (error) {
        if (error.includes('Offer is blocked for country')) {
          return /*#__PURE__*/_react.default.createElement(_ErrorPage.default, {
            type: "cannotPurchase"
          });
        }

        if (error.includes("doesn't exist.") || error.includes('does not exist.') || error.includes('Invalid param offerId') || error.includes('Offer not set')) {
          return /*#__PURE__*/_react.default.createElement(_ErrorPage.default, {
            type: "offerNotExist"
          });
        }

        if (error.includes('Access already granted')) {
          return /*#__PURE__*/_react.default.createElement(_ErrorPage.default, {
            type: "alreadyHaveAccess"
          });
        }

        if (error.includes('Request failed with status code 500')) {
          return /*#__PURE__*/_react.default.createElement(_ErrorPage.default, {
            type: "generalError"
          });
        }
      }

      return offerDetails && isOrderCreated && (isFreeOffer ? isFreeOrderReady : true) ? /*#__PURE__*/_react.default.createElement(_Offer.default, {
        offerDetails: offerDetails,
        orderDetails: orderDetails,
        couponProps: _objectSpread(_objectSpread({}, couponProps), {}, {
          onSubmit: this.onCouponSubmit
        }),
        onPaymentComplete: onSuccess,
        updatePriceBreakdown: this.updatePriceBreakdown,
        t: t
      }) : /*#__PURE__*/_react.default.createElement(_StyledOfferContainer.StyledLoaderContainer, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement(_StyledOfferContainer.StyledLoaderContent, null, /*#__PURE__*/_react.default.createElement(_Loader.default, null)), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
    }
  }]);
  return OfferContainer;
}(_react.Component);

exports.PureOfferContainer = OfferContainer;
OfferContainer.propTypes = {
  offerId: _propTypes.default.string,
  onSuccess: _propTypes.default.func,
  urlProps: _propTypes.default.shape({
    location: _propTypes.default.shape({
      search: _propTypes.default.string
    })
  }),
  t: _propTypes.default.func
};
OfferContainer.defaultProps = {
  offerId: '',
  onSuccess: function onSuccess() {},
  urlProps: {},
  t: function t(k) {
    return k;
  }
};
// export default withTranslation()(labeling()(OfferContainer));
var _default = OfferContainer;
exports.default = _default;