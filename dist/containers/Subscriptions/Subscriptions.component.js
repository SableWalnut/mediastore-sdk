"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PureSubscriptions = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactI18next = require("react-i18next");

var _labeling = _interopRequireDefault(require("../labeling"));

var _propTypes = require("prop-types");

var _api = require("../../api");

var _SectionHeader = _interopRequireDefault(require("../../components/SectionHeader"));

var _CurrentPlan = _interopRequireDefault(require("../../components/CurrentPlan"));

var _UpdateSubscription = _interopRequireDefault(require("../../components/UpdateSubscription/UpdateSubscription"));

var _SubscriptionsStyled = require("./SubscriptionsStyled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Subscriptions = function Subscriptions(_ref) {
  var planDetails = _ref.planDetails,
      updateList = _ref.updateList,
      innerPopup = _ref.innerPopup,
      hideInnerPopup = _ref.hideInnerPopup,
      setCurrentPlan = _ref.setCurrentPlan,
      setSwitchSettings = _ref.setSwitchSettings,
      setOfferToSwitch = _ref.setOfferToSwitch,
      showInnerPopup = _ref.showInnerPopup,
      t = _ref.t;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isLoadingCurrentPlan = _useState2[0],
      setIsLoadingCurrentPlan = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isErrorCurrentPlan = _useState4[0],
      setIsErrorCurrentPlan = _useState4[1];

  var didMount = (0, _react.useRef)(false);

  var fetchSubscriptions = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsLoadingCurrentPlan(true);
              (0, _api.getCustomerSubscriptions)().then(function (response) {
                if (response.errors.length) {
                  setIsErrorCurrentPlan(response.errors);
                } else {
                  var customerSubscriptions = response.responseData.items;
                  setCurrentPlan(customerSubscriptions);
                }

                setIsLoadingCurrentPlan(false);
              }).catch(function () {
                setIsErrorCurrentPlan(t('Something went wrong..'));
                setIsLoadingCurrentPlan(false);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchSubscriptions() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (innerPopup.isOpen) {
      hideInnerPopup();
      updateList();
    }

    if (planDetails.currentPlan.length === 0) {
      fetchSubscriptions();
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (didMount.current) {
      fetchSubscriptions();
    } else {
      didMount.current = true;
    }
  }, [planDetails.updateList]);

  var renderPopup = function renderPopup(type) {
    switch (type) {
      case 'updateSubscription':
        return /*#__PURE__*/_react.default.createElement(_UpdateSubscription.default, {
          hideInnerPopup: hideInnerPopup,
          offerDetails: innerPopup.data.offerData,
          updateList: updateList,
          action: innerPopup.data.action
        });

      default:
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_SubscriptionsStyled.WrapStyled, null, innerPopup.isOpen ? renderPopup(innerPopup.type) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SectionHeader.default, null, t('Current plan')), /*#__PURE__*/_react.default.createElement(_CurrentPlan.default, {
    subscriptions: planDetails.currentPlan,
    errors: isErrorCurrentPlan,
    isLoading: isLoadingCurrentPlan,
    showInnerPopup: showInnerPopup,
    setOfferToSwitch: setOfferToSwitch,
    offerToSwitch: planDetails.offerToSwitch,
    updateList: updateList
  })));
};

exports.PureSubscriptions = Subscriptions;
Subscriptions.propTypes = {
  setCurrentPlan: _propTypes.PropTypes.func.isRequired,
  planDetails: _propTypes.PropTypes.objectOf(_propTypes.PropTypes.any),
  innerPopup: _propTypes.PropTypes.objectOf(_propTypes.PropTypes.any),
  showInnerPopup: _propTypes.PropTypes.func.isRequired,
  hideInnerPopup: _propTypes.PropTypes.func.isRequired,
  setOfferToSwitch: _propTypes.PropTypes.func.isRequired,
  setSwitchSettings: _propTypes.PropTypes.func.isRequired,
  updateList: _propTypes.PropTypes.func.isRequired,
  t: _propTypes.PropTypes.func
};
Subscriptions.defaultProps = {
  planDetails: {
    currentPlan: []
  },
  innerPopup: {},
  t: function t(k) {
    return k;
  }
};

var _default = (0, _reactI18next.withTranslation)()((0, _labeling.default)()(Subscriptions));

exports.default = _default;