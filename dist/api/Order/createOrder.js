"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appConfigHelper = require("../../util/appConfigHelper");

var _fetchHelper = _interopRequireDefault(require("../../util/fetchHelper"));

var _environmentHelper = _interopRequireDefault(require("../../util/environmentHelper"));

var createOrder = function createOrder(offerId) {
  var paymentMethodId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var API_URL = (0, _environmentHelper.default)();
  var customerIP = (0, _appConfigHelper.getData)('CLEENG_CUSTOMER_IP') || '';
  var customerId = (0, _appConfigHelper.getData)('CLEENG_CUSTOMER_ID') || '';
  var url = "".concat(API_URL, "/orders");
  return (0, _fetchHelper.default)(url, {
    method: 'POST',
    body: JSON.stringify({
      offerId: offerId,
      customerId: customerId,
      customerIP: customerIP,
      paymentMethodId: paymentMethodId
    })
  }).then(function (res) {
    return res.json();
  });
};

var _default = createOrder;
exports.default = _default;