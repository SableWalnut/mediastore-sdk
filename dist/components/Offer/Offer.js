"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PureOffer = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CouponInput = require("../CouponInput/CouponInput");

var _Input = require("../Input");

var _Payment = _interopRequireDefault(require("../Payment"));

var _Header = _interopRequireDefault(require("../Header"));

var _SectionHeader = _interopRequireDefault(require("../SectionHeader"));

var _Footer = _interopRequireDefault(require("../Footer"));

var _SubscriptionCard = _interopRequireDefault(require("../SubscriptionCard"));

var _CheckoutPriceBox = _interopRequireDefault(require("../CheckoutPriceBox"));

var _FreeOffer = _interopRequireDefault(require("../FreeOffer"));

var _appConfigHelper = require("../../util/appConfigHelper");

var _planHelper = require("../../util/planHelper");

var _OfferStyled = require("./OfferStyled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Offer = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Offer, _Component);

  var _super = _createSuper(Offer);

  function Offer(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Offer);
    _this = _super.call(this, props);

    _this.generateDescription = function (offerType) {
      switch (offerType) {
        case 'S':
          {
            var _this$props = _this.props,
                _this$props$offerDeta = _this$props.offerDetails,
                freePeriods = _this$props$offerDeta.freePeriods,
                freeDays = _this$props$offerDeta.freeDays,
                trialAvailable = _this$props$offerDeta.trialAvailable,
                period = _this$props$offerDeta.period,
                customerCurrencySymbol = _this$props$offerDeta.customerCurrencySymbol,
                offerPrice = _this$props.orderDetails.priceBreakdown.offerPrice;
            var trialPeriodText = freeDays ? "".concat(freeDays, " days") : "".concat(freePeriods > 1 ? "".concat(freePeriods, " ").concat(period, "s") : period);

            if (trialAvailable) {
              return "You will be charged ".concat(offerPrice).concat(customerCurrencySymbol, " after ").concat(trialPeriodText, ". \n              </br>Next payments will occur for every ").concat(_planHelper.periodMapper[period].chargedForEveryText, ".");
            }

            return "You will be charged ".concat(offerPrice).concat(customerCurrencySymbol, " for every ").concat(_planHelper.periodMapper[period].chargedForEveryText, ".");
          }

        case 'P':
          {
            var _this$props$offerDeta2 = _this.props.offerDetails,
                _period = _this$props$offerDeta2.period,
                expiresAt = _this$props$offerDeta2.expiresAt;

            if (!_period) {
              return "Access until ".concat((0, _planHelper.dateFormat)(expiresAt, true));
            }

            return _planHelper.periodMapper[_period] ? "".concat(_planHelper.periodMapper[_period].accessText, " season pass") : '';
          }

        case 'E':
          {
            var startTime = _this.props.offerDetails.startTime;
            return "Pay-per-view event ".concat(startTime ? (0, _planHelper.dateFormat)(startTime, true) : '');
          }

        case 'R':
          {
            var _period2 = _this.props.offerDetails.period;
            return _planHelper.periodMapper[_period2] ? "".concat(_planHelper.periodMapper[_period2].accessText, " access") : '';
          }

        case 'A':
          return 'Unlimited access';

        default:
          return '';
      }
    };

    _this.state = {
      coupon: ''
    };
    return _this;
  }

  (0, _createClass2.default)(Offer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          _this$props2$offerDet = _this$props2.offerDetails,
          offerTitle = _this$props2$offerDet.offerTitle,
          customerCurrencySymbol = _this$props2$offerDet.customerCurrencySymbol,
          trialAvailable = _this$props2$offerDet.trialAvailable,
          period = _this$props2$offerDet.period,
          expiresAt = _this$props2$offerDet.expiresAt,
          startTime = _this$props2$offerDet.startTime,
          _this$props2$orderDet = _this$props2.orderDetails,
          _this$props2$orderDet2 = _this$props2$orderDet.priceBreakdown,
          offerPrice = _this$props2$orderDet2.offerPrice,
          discountAmount = _this$props2$orderDet2.discountAmount,
          taxValue = _this$props2$orderDet2.taxValue,
          customerServiceFee = _this$props2$orderDet2.customerServiceFee,
          paymentMethodFee = _this$props2$orderDet2.paymentMethodFee,
          applied = _this$props2$orderDet.discount.applied,
          totalPrice = _this$props2$orderDet.totalPrice,
          requiredPaymentDetails = _this$props2$orderDet.requiredPaymentDetails,
          _this$props2$couponPr = _this$props2.couponProps,
          showMessage = _this$props2$couponPr.showMessage,
          message = _this$props2$couponPr.message,
          messageType = _this$props2$couponPr.messageType,
          onSubmit = _this$props2$couponPr.onSubmit,
          couponLoading = _this$props2$couponPr.couponLoading,
          onPaymentComplete = _this$props2.onPaymentComplete,
          updatePriceBreakdown = _this$props2.updatePriceBreakdown,
          t = _this$props2.t;
      var isCouponApplied = applied;
      var coupon = this.state.coupon;
      var finalPrice = totalPrice;
      var offerType = (0, _appConfigHelper.getData)('CLEENG_OFFER_TYPE');
      var isFree = totalPrice === 0 && !trialAvailable && !isCouponApplied;
      return /*#__PURE__*/_react.default.createElement(_OfferStyled.StyledOfferWrapper, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("main", null, isFree ? /*#__PURE__*/_react.default.createElement(_FreeOffer.default, {
        icon: period || offerType,
        title: offerTitle,
        period: period,
        expiresAt: expiresAt,
        startTime: startTime,
        onPaymentComplete: onPaymentComplete
      }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_OfferStyled.StyledOfferBody, null, /*#__PURE__*/_react.default.createElement(_SectionHeader.default, {
        center: true
      }, t('Complete your purchase')), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_OfferStyled.StyledOfferDetailsAndCoupon, null, /*#__PURE__*/_react.default.createElement(_OfferStyled.SubscriptionCardWrapperStyled, null, /*#__PURE__*/_react.default.createElement(_SubscriptionCard.default, {
        period: period,
        icon: period || offerType,
        title: offerTitle,
        description: this.generateDescription(offerType),
        currency: customerCurrencySymbol,
        price: offerPrice,
        isTrialAvailable: trialAvailable
      })), /*#__PURE__*/_react.default.createElement(_OfferStyled.StyledOfferCouponWrapper, null, /*#__PURE__*/_react.default.createElement(_CouponInput.PureCouponInput, {
        showMessage: showMessage,
        message: message,
        messageType: messageType,
        onSubmit: onSubmit,
        value: coupon,
        onChange: function onChange(e) {
          return _this2.setState({
            coupon: e
          });
        },
        couponLoading: couponLoading,
        t: t
      })))), /*#__PURE__*/_react.default.createElement(_CheckoutPriceBox.default, {
        finalPrice: finalPrice,
        isCouponApplied: isCouponApplied,
        discountAmount: discountAmount,
        taxValue: taxValue,
        customerServiceFee: customerServiceFee,
        paymentMethodFee: paymentMethodFee,
        customerCurrencySymbol: customerCurrencySymbol,
        offerPrice: offerPrice
      })), /*#__PURE__*/_react.default.createElement(_Payment.default, {
        onPaymentComplete: onPaymentComplete,
        isPaymentDetailsRequired: requiredPaymentDetails,
        updatePriceBreakdown: updatePriceBreakdown,
        t: t
      }))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
    }
  }]);
  return Offer;
}(_react.Component);

exports.PureOffer = Offer;
Offer.propTypes = {
  offerDetails: _propTypes.default.shape({
    offerTitle: _propTypes.default.string,
    description: _propTypes.default.string,
    imageUrl: _propTypes.default.string,
    customerCurrencySymbol: _propTypes.default.string,
    trialAvailable: _propTypes.default.bool,
    freePeriods: _propTypes.default.number,
    freeDays: _propTypes.default.number,
    period: _propTypes.default.string,
    expiresAt: _propTypes.default.string,
    priceExclTax: _propTypes.default.number,
    priceExclTaxBeforeDiscount: _propTypes.default.number,
    errors: _propTypes.default.arrayOf(_propTypes.default.string),
    startTime: _propTypes.default.number
  }).isRequired,
  orderDetails: _propTypes.default.shape({
    priceBreakdown: _propTypes.default.shape({
      offerPrice: _propTypes.default.number,
      discountedPrice: _propTypes.default.number,
      discountAmount: _propTypes.default.number,
      taxValue: _propTypes.default.number,
      customerServiceFee: _propTypes.default.number,
      paymentMethodFee: _propTypes.default.number
    }),
    discount: _propTypes.default.shape({
      applied: _propTypes.default.bool
    }),
    totalPrice: _propTypes.default.number,
    requiredPaymentDetails: _propTypes.default.bool
  }),
  couponProps: _propTypes.default.shape({
    showMessage: _propTypes.default.bool,
    message: _propTypes.default.node,
    messageType: _propTypes.default.oneOf([_Input.MESSAGE_TYPE_FAIL, _Input.MESSAGE_TYPE_SUCCESS]),
    onSubmit: _propTypes.default.func.isRequired,
    couponLoading: _propTypes.default.bool
  }),
  onPaymentComplete: _propTypes.default.func.isRequired,
  updatePriceBreakdown: _propTypes.default.func.isRequired,
  t: _propTypes.default.func
};
Offer.defaultProps = {
  orderDetails: {
    priceBreakdown: {
      offerPrice: 0,
      discountedPrice: 0,
      discountAmount: 0,
      taxValue: 0,
      customerServiceFee: 0,
      paymentMethodFee: 0
    },
    discount: {
      applied: false
    },
    totalPrice: 0,
    requiredPaymentDetails: true
  },
  couponProps: null,
  t: function t(k) {
    return k;
  }
};
// export default withTranslation()(labeling()(Offer));
var _default = Offer;
exports.default = _default;