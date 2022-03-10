"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PurePaymentInfo = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _reactI18next = require("react-i18next");

var _labeling = _interopRequireDefault(require("../labeling"));

var _PaymentMethod = _interopRequireDefault(require("../../components/PaymentMethod"));

var _SectionHeader = _interopRequireDefault(require("../../components/SectionHeader"));

var _Transactions = _interopRequireDefault(require("../../components/Transactions"));

var _api = require("../../api");

var _propTypes = require("prop-types");

var _UpdatePaymentDetailsPopup = _interopRequireDefault(require("../../components/UpdatePaymentDetailsPopup"));

var _PaymentInfoStyled = require("./PaymentInfoStyled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DEFAULT_TRANSACTIONS_NUMBER = 3;

var PaymentInfo = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(PaymentInfo, _Component);

  var _super = _createSuper(PaymentInfo);

  function PaymentInfo(props) {
    var _this;

    (0, _classCallCheck2.default)(this, PaymentInfo);
    _this = _super.call(this, props);

    _this.toggleTransactionsList = function () {
      var _this$props = _this.props,
          setTransactionsList = _this$props.setTransactionsList,
          setTransactionsToShow = _this$props.setTransactionsToShow,
          setTransactionsListAsFetched = _this$props.setTransactionsListAsFetched,
          paymentInfo = _this$props.paymentInfo,
          t = _this$props.t;
      var isTransactionListExpanded = _this.state.isTransactionListExpanded;

      if (isTransactionListExpanded) {
        _this.setState({
          isTransactionListExpanded: false
        });

        setTransactionsToShow(DEFAULT_TRANSACTIONS_NUMBER);
      } else if (paymentInfo.isTransactionListFetched) {
        // if transactions was fetched - show all of them without calling API
        _this.setState({
          isTransactionListExpanded: true
        });

        setTransactionsToShow();
      } else {
        // fetch all transactions when the list expands for the first time
        _this.setState({
          isTransactionsItemsLoading: true
        });

        (0, _api.listCustomerTransactions)().then(function (response) {
          if (response.errors.length !== 0) {
            _this.setState({
              transactionsError: response.errors
            });
          } else {
            _this.setState({
              isTransactionListExpanded: true
            });

            setTransactionsListAsFetched();
            setTransactionsList(response.responseData.items); // state to hold whole transactions

            setTransactionsToShow(); // state to hold the array with showed transactions
          }

          _this.setState({
            isTransactionsItemsLoading: false
          });
        }).catch(function () {
          _this.setState({
            transactionsError: [t('Something went wrong..')],
            isTransactionsItemsLoading: false
          });
        });
      }
    };

    _this.fetchPaymentDetials = function () {
      var _this$props2 = _this.props,
          setPaymentDetails = _this$props2.setPaymentDetails,
          t = _this$props2.t;
      (0, _api.getPaymentDetails)().then(function (response) {
        if (response.errors.length) {
          _this.setState({
            paymentDetailsError: response.errors,
            paymentDetailsLoading: false
          });
        } else {
          setPaymentDetails(response.responseData.paymentDetails);

          _this.setState({
            paymentDetailsLoading: false
          });
        }
      }).catch(function () {
        _this.setState({
          paymentDetailsError: [t('Something went wrong..')],
          paymentDetailsLoading: false
        });
      });
    };

    _this.fetchTransactionsList = function () {
      var _this$props3 = _this.props,
          setTransactionsList = _this$props3.setTransactionsList,
          setTransactionsToShow = _this$props3.setTransactionsToShow,
          setTransactionsListAsFetched = _this$props3.setTransactionsListAsFetched,
          hideShowMoreButton = _this$props3.hideShowMoreButton,
          t = _this$props3.t;
      (0, _api.listCustomerTransactions)(DEFAULT_TRANSACTIONS_NUMBER + 1, 0) // fetching +1 transaction to check if have to show 'show more' button
      .then(function (response) {
        if (response.errors.length) {
          _this.setState({
            transactionsError: response.errors,
            isTransactionsSectionLoading: false
          });
        } else {
          setTransactionsList(response.responseData.items);

          if (response.responseData.items.length > DEFAULT_TRANSACTIONS_NUMBER // if there are more transactions to fetch - show only default number
          ) {
            setTransactionsToShow(DEFAULT_TRANSACTIONS_NUMBER);
          } else {
            // if there is nothing more to fetch
            setTransactionsToShow();
            setTransactionsListAsFetched();
            hideShowMoreButton();
          }

          _this.setState({
            isTransactionsSectionLoading: false
          });
        }
      }).catch(function () {
        _this.setState({
          transactionsError: [t('Something went wrong..')],
          isTransactionsSectionLoading: false
        });
      });
    };

    _this.updatePaymentDetailsSection = function () {
      _this.setState({
        paymentDetailsLoading: true
      });

      _this.fetchPaymentDetials();
    };

    _this.state = {
      paymentDetailsError: [],
      transactionsError: [],
      isTransactionListExpanded: false,
      isTransactionsSectionLoading: false,
      isTransactionsItemsLoading: false,
      paymentDetailsLoading: false
    };
    return _this;
  }

  (0, _createClass2.default)(PaymentInfo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props,
          paymentInfo = _this$props4.paymentInfo,
          setTransactionsToShow = _this$props4.setTransactionsToShow;

      if (paymentInfo.paymentDetails && paymentInfo.paymentDetails.length === 0) {
        this.setState({
          paymentDetailsLoading: true
        });
        this.fetchPaymentDetials();
      }

      if (paymentInfo.transactionsList.length === 0) {
        this.setState({
          isTransactionsSectionLoading: true
        });
        this.fetchTransactionsList();
      } else if (paymentInfo.transactionsList.length !== 0) {
        setTransactionsToShow(DEFAULT_TRANSACTIONS_NUMBER); // if transactions are in state - show default number of them
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var hideInnerPopup = this.props.hideInnerPopup;

      this.setState = function () {};

      hideInnerPopup();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          paymentInfo = _this$props5.paymentInfo,
          showInnerPopup = _this$props5.showInnerPopup,
          innerPopup = _this$props5.innerPopup,
          hideInnerPopup = _this$props5.hideInnerPopup,
          setPublisherPaymentMethods = _this$props5.setPublisherPaymentMethods,
          t = _this$props5.t;
      var _this$state = this.state,
          paymentDetailsError = _this$state.paymentDetailsError,
          transactionsError = _this$state.transactionsError,
          isTransactionsItemsLoading = _this$state.isTransactionsItemsLoading,
          isTransactionsSectionLoading = _this$state.isTransactionsSectionLoading,
          paymentDetailsLoading = _this$state.paymentDetailsLoading,
          isTransactionListExpanded = _this$state.isTransactionListExpanded;
      return /*#__PURE__*/_react.default.createElement(_PaymentInfoStyled.WrapStyled, null, innerPopup.isOpen && innerPopup.type === 'paymentDetails' ? /*#__PURE__*/_react.default.createElement(_UpdatePaymentDetailsPopup.default, {
        hideInnerPopup: hideInnerPopup,
        setPublisherPaymentMethods: setPublisherPaymentMethods,
        updatePaymentDetailsSection: this.updatePaymentDetailsSection,
        selectedPaymentMethod: innerPopup.data
      }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SectionHeader.default, null, t('Current payment method')), /*#__PURE__*/_react.default.createElement(_PaymentMethod.default, {
        paymentDetailsLoading: paymentDetailsLoading,
        activeOrBoundPaymentDetails: paymentInfo.activeOrBoundPaymentDetails,
        showInnerPopup: showInnerPopup,
        error: paymentDetailsError
      }), /*#__PURE__*/_react.default.createElement(_SectionHeader.default, {
        marginTop: "25px"
      }, t('Payment history')), /*#__PURE__*/_react.default.createElement(_Transactions.default, {
        transactions: paymentInfo.transactionsToShow,
        toggleTransactionsList: this.toggleTransactionsList,
        isTransactionsItemsLoading: isTransactionsItemsLoading,
        isTransactionsSectionLoading: isTransactionsSectionLoading,
        isShowMoreButtonHidden: paymentInfo.isShowMoreButtonHidden,
        isExpanded: isTransactionListExpanded,
        error: transactionsError
      })));
    }
  }]);
  return PaymentInfo;
}(_react.Component);

exports.PurePaymentInfo = PaymentInfo;
PaymentInfo.propTypes = {
  setPaymentDetails: _propTypes.PropTypes.func.isRequired,
  setTransactionsList: _propTypes.PropTypes.func.isRequired,
  setTransactionsToShow: _propTypes.PropTypes.func.isRequired,
  setTransactionsListAsFetched: _propTypes.PropTypes.func.isRequired,
  hideShowMoreButton: _propTypes.PropTypes.func.isRequired,
  paymentInfo: _propTypes.PropTypes.objectOf(_propTypes.PropTypes.any),
  showInnerPopup: _propTypes.PropTypes.func.isRequired,
  hideInnerPopup: _propTypes.PropTypes.func.isRequired,
  innerPopup: _propTypes.PropTypes.objectOf(_propTypes.PropTypes.any).isRequired,
  setPublisherPaymentMethods: _propTypes.PropTypes.func.isRequired,
  t: _propTypes.PropTypes.func
};
PaymentInfo.defaultProps = {
  paymentInfo: {
    paymentMethod: [],
    transactionsList: []
  },
  t: function t(k) {
    return k;
  }
};

var _default = (0, _reactI18next.withTranslation)()((0, _labeling.default)()(PaymentInfo));

exports.default = _default;