"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PureSubscriptionSwitchesList = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _labeling = _interopRequireDefault(require("../../containers/labeling"));

var _CurrentPlanStyled = require("../CurrentPlan/CurrentPlanStyled");

var _SubscriptionManagementStyled = require("../SubscriptionManagement/SubscriptionManagementStyled");

var _SubscriptionCard = _interopRequireDefault(require("../SubscriptionCard"));

var _MyAccountError = _interopRequireDefault(require("../MyAccountError"));

var _CurrentPlan = require("../CurrentPlan/CurrentPlan");

var _innerPopupReducer = require("../../redux/innerPopupReducer");

var _helper = _interopRequireDefault(require("./helper"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var selectPlanIcon = function selectPlanIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(-613.786 -616.883)"
  }, /*#__PURE__*/_react.default.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M636 630h41a3 3 0 0 1 3 3v38a3 3 0 0 1-3 3h-41a3 3 0 0 1-3-3v-38a3 3 0 0 1 3-3Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M636 632c-.551 0-1 .449-1 1v38c0 .551.449 1 1 1h41c.551 0 1-.449 1-1v-38c0-.551-.449-1-1-1h-41m0-2h41a3 3 0 0 1 3 3v38a3 3 0 0 1-3 3h-41a3 3 0 0 1-3-3v-38a3 3 0 0 1 3-3Z",
    fill: "#bcc3cd"
  })), /*#__PURE__*/_react.default.createElement("path", {
    d: "m682.711 618.297 8.492 8.492a2 2 0 0 1 0 2.828l-4.243 4.243-11.32-11.32 4.243-4.243a2 2 0 0 1 2.828 0Z",
    fill: "#bcc3cd"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "m643.724 666.06 3.776-15.09 11.314 11.313Z",
    fill: "#bcc3cd"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#f8fafd",
    d: "m672.741 621.667 15.093 15.093-25.47 25.47-15.092-15.094z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#bcc3cd",
    d: "m674.627 623.553 11.32 11.32-25.47 25.47-11.32-11.32z"
  }), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M695.648 642.626h-1.572a.762.762 0 0 1-.762-.762.762.762 0 0 1 .762-.762h1.572a.762.762 0 0 1 .762.762.762.762 0 0 1-.762.762Z",
    fill: "#bcc3cd"
  })), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M701.956 642.626h-1.572a.762.762 0 0 1-.762-.762.762.762 0 0 1 .762-.762h1.572a.762.762 0 0 1 .762.762.762.762 0 0 1-.762.762Z",
    fill: "#bcc3cd"
  })), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M698.016 640.258a.761.761 0 0 1-.762-.762v-1.572a.761.761 0 0 1 .762-.762.762.762 0 0 1 .762.762v1.572a.762.762 0 0 1-.762.762Z",
    fill: "#bcc3cd"
  })), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M698.016 646.567a.761.761 0 0 1-.762-.762v-1.572a.761.761 0 0 1 .762-.762.762.762 0 0 1 .762.762v1.572a.762.762 0 0 1-.762.762Z",
    fill: "#bcc3cd"
  })), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "m615.437 668.612-1.111-1.112a.762.762 0 0 1 0-1.078.762.762 0 0 1 1.077 0l1.112 1.112a.762.762 0 0 1 0 1.078.762.762 0 0 1-1.078 0Z",
    fill: "#bcc3cd"
  })), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "m619.898 673.072-1.111-1.112a.762.762 0 0 1 0-1.078.762.762 0 0 1 1.077 0l1.112 1.112a.762.762 0 0 1 0 1.078.762.762 0 0 1-1.078 0Z",
    fill: "#bcc3cd"
  })), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M618.785 668.612a.762.762 0 0 1 0-1.077l1.111-1.112a.762.762 0 0 1 1.078 0 .762.762 0 0 1 0 1.078l-1.111 1.111a.762.762 0 0 1-1.078 0Z",
    fill: "#bcc3cd"
  })), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M614.324 673.072a.762.762 0 0 1 0-1.077l1.111-1.112a.762.762 0 0 1 1.078 0 .762.762 0 0 1 0 1.078l-1.111 1.111a.762.762 0 0 1-1.078 0Z",
    fill: "#bcc3cd"
  })), /*#__PURE__*/_react.default.createElement("path", {
    d: "M626.471 619a3 3 0 1 1-3 3 3 3 0 0 1 3-3Z",
    fill: "#bcc3cd"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "3",
    transform: "translate(688.471 681)",
    fill: "#bcc3cd"
  })));
};

selectPlanIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "88.932",
  height: "70.117"
};

var SubscriptionSwitchesList = function SubscriptionSwitchesList(_ref) {
  var switchSettings = _ref.switchSettings,
      showInnerPopup = _ref.showInnerPopup,
      isOfferSelected = _ref.isOfferSelected,
      isLoading = _ref.isLoading,
      errors = _ref.errors,
      t = _ref.t;

  if (isLoading) {
    return /*#__PURE__*/_react.default.createElement(_CurrentPlan.SkeletonCard, null);
  }

  if (errors.length) {
    return /*#__PURE__*/_react.default.createElement(_MyAccountError.default, {
      generalError: true
    });
  }

  if (!isOfferSelected) {
    return /*#__PURE__*/_react.default.createElement(_MyAccountError.default, {
      icon: selectPlanIcon,
      title: t('Start by selecting the plan that would like to switch from'),
      margin: "0 auto"
    });
  }

  var areAvailable = !!(switchSettings.available && switchSettings.available.length);
  var areUnAvailable = !!(switchSettings.unavailable && switchSettings.unavailable.length);
  var allSwitchesBlocked = switchSettings.unavailableReason;

  if (allSwitchesBlocked) {
    var error = _helper.default[allSwitchesBlocked.code] ? _helper.default[allSwitchesBlocked.code] : _helper.default.DEFAULT;
    return /*#__PURE__*/_react.default.createElement(_MyAccountError.default, {
      icon: error.icon,
      title: error.title,
      subtitle: error.subtitle,
      margin: "0 auto",
      fullWidth: true
    });
  }

  if (!areAvailable && !areUnAvailable) {
    return /*#__PURE__*/_react.default.createElement(_MyAccountError.default, {
      icon: selectPlanIcon,
      title: t("Looks like there aren't any options for switching from your current plan right now"),
      margin: "0 auto"
    });
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, areAvailable && switchSettings.available.map(function (subItem) {
    return /*#__PURE__*/_react.default.createElement(_CurrentPlanStyled.SubscriptionStyled, {
      key: subItem.toOfferId
    }, /*#__PURE__*/_react.default.createElement(_SubscriptionCard.default, {
      period: subItem.period,
      title: subItem.title,
      currency: subItem.nextPaymentPriceCurrencySymbol,
      price: Math.round(subItem.nextPaymentPrice * 100) / 100
    }), /*#__PURE__*/_react.default.createElement(_SubscriptionManagementStyled.WrapperStyled, null, /*#__PURE__*/_react.default.createElement(_SubscriptionManagementStyled.SimpleButtonStyled, {
      onClickFn: function onClickFn() {
        showInnerPopup({
          type: _innerPopupReducer.POPUP_TYPES.switchPlan,
          data: {
            offerData: _objectSpread({}, subItem)
          }
        });
      }
    }, t('Choose'))));
  }), areUnAvailable && switchSettings.unavailable.map(function (subItem) {
    return /*#__PURE__*/_react.default.createElement(_CurrentPlanStyled.SubscriptionStyled, {
      key: subItem.toOfferId
    }, /*#__PURE__*/_react.default.createElement(_SubscriptionCard.default, {
      period: subItem.period,
      title: subItem.title,
      currency: subItem.nextPaymentPriceCurrencySymbol,
      price: Math.round(subItem.nextPaymentPrice * 100) / 100,
      showInfoBox: subItem.reason.code
    }), /*#__PURE__*/_react.default.createElement(_SubscriptionManagementStyled.WrapperStyled, null, /*#__PURE__*/_react.default.createElement(_SubscriptionManagementStyled.SimpleButtonStyled, {
      disabled: true
    }, t('Choose'))));
  }));
};

exports.PureSubscriptionSwitchesList = SubscriptionSwitchesList;
SubscriptionSwitchesList.propTypes = {
  switchSettings: _propTypes.default.objectOf(_propTypes.default.any),
  isOfferSelected: _propTypes.default.bool.isRequired,
  errors: _propTypes.default.arrayOf(_propTypes.default.string),
  showInnerPopup: _propTypes.default.func,
  isLoading: _propTypes.default.bool,
  t: _propTypes.default.func
};
SubscriptionSwitchesList.defaultProps = {
  switchSettings: {},
  showInnerPopup: function showInnerPopup() {},
  errors: [],
  isLoading: false,
  t: function t(k) {
    return k;
  }
};

var _default = (0, _reactI18next.withTranslation)()((0, _labeling.default)()(SubscriptionSwitchesList));

exports.default = _default;