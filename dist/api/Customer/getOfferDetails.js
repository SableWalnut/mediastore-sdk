"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appConfigHelper = require("../../util/appConfigHelper");

var _fetchHelper = require("../../util/fetchHelper");

var _environmentHelper = _interopRequireDefault(require("../../util/environmentHelper"));

var getOfferDetails = function getOfferDetails(offerId) {
  var API_URL = (0, _environmentHelper.default)();
  var customerEmail = (0, _appConfigHelper.getData)('CLEENG_CUSTOMER_EMAIL') || '';
  var customerIP = (0, _appConfigHelper.getData)('CLEENG_CUSTOMER_IP') || '';
  var url = "".concat(API_URL, "/offers/").concat(offerId, "/customers/").concat(customerEmail, "?customerIP=").concat(customerIP);
  return (0, _fetchHelper.fetchWithHeaders)(url, {}).then(function (res) {
    return res.json();
  });
};

var _default = getOfferDetails;
exports.default = _default;