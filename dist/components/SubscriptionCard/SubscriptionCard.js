"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PureSubscriptionCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _labeling = _interopRequireDefault(require("../../containers/labeling"));

var _SubscriptionIcon = _interopRequireDefault(require("../SubscriptionIcon"));

var _Price = _interopRequireDefault(require("../Price"));

var _appConfigHelper = require("../../util/appConfigHelper");

var _SkeletonWrapper = _interopRequireDefault(require("../SkeletonWrapper"));

var _SubscriptionCardStyled = require("./SubscriptionCardStyled");

var BlockedIcon = function BlockedIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("style", null, ".c", "{", "fill:#f8fafd", "}")), /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(-421 -539)"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "18",
    height: "18",
    rx: "3",
    transform: "translate(421 539)",
    style: {
      fill: "#d3dbe6"
    }
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.717-13.6a.777.777 0 0 1-.781.773H1.708a.77.77 0 0 1-.781-.787l-.45-4.665a.763.763 0 0 1 .78-.762h6.13a.759.759 0 0 1 .781.736Zm-5.306-7.818a1.87 1.87 0 0 1 1.912-1.77 1.87 1.87 0 0 1 1.912 1.77v1.894H2.411Zm4.977 1.894h-.675v-1.894a2.353 2.353 0 0 0-2.39-2.248 2.353 2.353 0 0 0-2.39 2.248v1.894h-.676A1.255 1.255 0 0 0 0-18.26l.45 4.66a1.251 1.251 0 0 0 1.258 1.242h5.228a1.25 1.25 0 0 0 1.258-1.228l.452-4.706a1.234 1.234 0 0 0-1.258-1.237",
    transform: "translate(425.72 565.666)",
    style: {
      stroke: "#f7fafc",
      strokeWidth: ".2px",
      fill: "#f8fafd"
    }
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "c",
    d: "M430.578 551.557h-1.073l-.293-2.361a.809.809 0 0 1 .824-.791.8.8 0 0 1 .829.736Zm-.538-3.949a1.611 1.611 0 0 0-1.618 1.636l.336 2.754a.4.4 0 0 0 .4.351h1.773a.4.4 0 0 0 .4-.351l.336-2.81a1.6 1.6 0 0 0-1.623-1.58"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "c",
    d: "M427.968 546.649h-1.729l.469 6.2h2.776l-.759-6.387Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "c",
    d: "m428.63 546.389.165 2.01s-1.008.409.207 0 4.867-1.553 4.867-1.553l-1.157-.359-.764.089"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "c",
    d: "M433.655 546.752s.657 1.307-.168 4.877c-.4 1.368-.232 1.232-.232 1.232l-4.508-.145s.215-.722 2.028-.99a5.216 5.216 0 0 0 .465-2.46c0-.62-.175-.464-.542-.707s-1.7-.193-.923-.693a19.894 19.894 0 0 1 3.88-1.114Z"
  })));
};

BlockedIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18"
};

var EditBlockedIcon = function EditBlockedIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("style", null, ".a", "{", "fill:#d3dbe6", "}", ".b", "{", "fill:#f8fafd", "}")), /*#__PURE__*/_react.default.createElement("rect", {
    className: "a",
    width: "18",
    height: "18",
    rx: "3"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "b",
    d: "M12.779 3.324a1.8 1.8 0 0 1 1.441 2.883l-.721.721-1.091-1.093-1.429-1.43.721-.721a1.794 1.794 0 0 1 1.081-.36ZM3.77 11.612l-.721 3.243 3.243-.721 6.667-6.667-2.522-2.521Zm7.338-4.194-5.045 5.045-.621-.621 5.045-5.046.621.621Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "b",
    d: "m10.139 6.289 1.322 1.322-5.287 5.286-1.321-1.322z"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    className: "a",
    width: "7.476",
    height: "1.2",
    rx: ".6",
    transform: "rotate(45 -5.327 10.866)"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    className: "b",
    width: "14.448",
    height: "1.4",
    rx: ".7",
    transform: "rotate(45 -1.864 6.983)"
  }), /*#__PURE__*/_react.default.createElement("g", {
    style: {
      fill: "none"
    }
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "m1 0 1 1.707H0Z",
    style: {
      stroke: "none"
    },
    transform: "rotate(-135 5.326 6.496)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "m1 0 1 1.707H0L1 0Z",
    style: {
      fill: "#d3dbe6",
      stroke: "none"
    },
    transform: "rotate(-135 5.326 6.496)"
  })), /*#__PURE__*/_react.default.createElement("path", {
    className: "b",
    d: "m3.977 13.316.797.797a2.387 2.387 0 0 1-.964.309.7.7 0 0 1-.547-.392Z"
  }));
};

EditBlockedIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18"
};

var SubscriptionCard = function SubscriptionCard(_ref) {
  var period = _ref.period,
      title = _ref.title,
      description = _ref.description,
      currency = _ref.currency,
      price = _ref.price,
      isTrialAvailable = _ref.isTrialAvailable,
      showInfoBox = _ref.showInfoBox,
      isSubscriptionOffer = _ref.isSubscriptionOffer,
      isDataLoaded = _ref.isDataLoaded,
      paymentMethod = _ref.paymentMethod,
      t = _ref.t;
  var isSubscription = (0, _appConfigHelper.getData)('CLEENG_OFFER_TYPE') === 'S' || isSubscriptionOffer;
  var mapCode = {
    TO_OFFER_COUNTRY_NOT_ALLOWED: {
      text: t("This plan is <strong>not currently available</strong> in your country or region"),
      icon: BlockedIcon
    },
    ALREADY_HAS_ACCESS: {
      text: t('It looks like you already have access to this offer'),
      icon: BlockedIcon
    },
    TO_FREE_OFFER_NOT_ALLOWED: {
      text: t('Switching from a paid to a free offer is not possible'),
      icon: BlockedIcon
    },
    SUBSCRIPTION_WITH_COUPON_NOT_ALLOWED: {
      text: t("You can't upgrade your subscription if coupon was applied."),
      icon: BlockedIcon
    },
    INAPP_SUBSCRIPTION: {
      text: t("".concat(paymentMethod ? "Subscription purchased via ".concat(paymentMethod, ". ") : "", "Use an external service to edit the plan.")),
      icon: EditBlockedIcon
    }
  };
  var IconComponent = showInfoBox && mapCode[showInfoBox].icon ? mapCode[showInfoBox].icon : _react.default.Fragment;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SubscriptionCardStyled.WrapperStyled, null, /*#__PURE__*/_react.default.createElement(_SkeletonWrapper.default, {
    showChildren: isDataLoaded,
    width: 50,
    height: 50
  }, /*#__PURE__*/_react.default.createElement(_SubscriptionIcon.default, {
    period: period
  })), /*#__PURE__*/_react.default.createElement(_SubscriptionCardStyled.InnerWrapper, null, /*#__PURE__*/_react.default.createElement(_SkeletonWrapper.default, {
    showChildren: isDataLoaded,
    width: 200,
    margin: "0 0 10px 10px"
  }, /*#__PURE__*/_react.default.createElement(_SubscriptionCardStyled.TitleStyled, null, title)), /*#__PURE__*/_react.default.createElement(_SkeletonWrapper.default, {
    showChildren: isDataLoaded,
    width: 300,
    margin: "0 0 10px 10px"
  }, /*#__PURE__*/_react.default.createElement(_SubscriptionCardStyled.DescriptionStyled, {
    dangerouslySetInnerHTML: {
      __html: description
    }
  }))), /*#__PURE__*/_react.default.createElement(_SubscriptionCardStyled.PriceWrapperStyled, null, /*#__PURE__*/_react.default.createElement(_SkeletonWrapper.default, {
    showChildren: isDataLoaded,
    width: 80,
    height: 30
  }, isTrialAvailable && /*#__PURE__*/_react.default.createElement(_SubscriptionCardStyled.TrialBadgeStyled, null, t('trial period')), /*#__PURE__*/_react.default.createElement(_Price.default, {
    currency: currency,
    price: price,
    period: isSubscription ? period : null
  })))), showInfoBox ? /*#__PURE__*/_react.default.createElement(_SubscriptionCardStyled.SubBoxStyled, null, /*#__PURE__*/_react.default.createElement(IconComponent, null), /*#__PURE__*/_react.default.createElement(_SubscriptionCardStyled.BoxTextStyled, {
    dangerouslySetInnerHTML: {
      __html: mapCode[showInfoBox].text
    }
  })) : '');
};

exports.PureSubscriptionCard = SubscriptionCard;
SubscriptionCard.propTypes = {
  period: _propTypes.default.string,
  title: _propTypes.default.string,
  description: _propTypes.default.string,
  currency: _propTypes.default.string,
  price: _propTypes.default.number,
  isTrialAvailable: _propTypes.default.bool,
  showInfoBox: _propTypes.default.string,
  isSubscriptionOffer: _propTypes.default.bool,
  isDataLoaded: _propTypes.default.bool,
  paymentMethod: _propTypes.default.string,
  t: _propTypes.default.func
};
SubscriptionCard.defaultProps = {
  period: '',
  title: '',
  description: '',
  currency: '',
  price: null,
  isTrialAvailable: false,
  showInfoBox: null,
  isSubscriptionOffer: false,
  isDataLoaded: true,
  paymentMethod: '',
  t: function t(k) {
    return k;
  }
};

var _default = (0, _reactI18next.withTranslation)()((0, _labeling.default)()(SubscriptionCard));

exports.default = _default;