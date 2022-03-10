"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTheme = exports.setPublisher = exports.setPaypalUrls = exports.setOffer = exports.setMyAccountUrl = exports.setEnvironment = exports.setData = exports.setAdyenConfig = exports.sendMessage = exports.removeData = exports.isHosted = exports.getTheme = exports.getData = exports.getAdyenConfig = exports.default = void 0;

var _store = _interopRequireDefault(require("../redux/store"));

var _appConfig = require("../redux/appConfig");

/* istanbul ignore file */
var isLocalStorageAvailable = function isLocalStorageAvailable() {
  try {
    localStorage.setItem('CLEENG_LS', 'yes');

    if (localStorage.getItem('CLEENG_LS') === 'yes') {
      localStorage.removeItem('CLEENG_LS');
      return true;
    }

    return false;
  } catch (e) {
    return false;
  }
};

var getData = function getData(name) {
  return isLocalStorageAvailable() ? localStorage.getItem(name) : _store.default.getState().appConfig[name];
};

exports.getData = getData;

var setData = function setData(name, value) {
  return isLocalStorageAvailable() ? localStorage.setItem(name, value) : _store.default.dispatch((0, _appConfig.setData)({
    name: name,
    value: value
  }));
};

exports.setData = setData;

var removeData = function removeData(name) {
  return isLocalStorageAvailable() ? localStorage.removeItem(name) : _store.default.dispatch((0, _appConfig.removeData)({
    name: name
  }));
};

exports.removeData = removeData;

var sendMessage = function sendMessage(msg) {
  if (window.opener) {
    window.opener.postMessage(msg, '*');
  } else if (window.top) {
    window.top.postMessage(msg, '*');
  }
};

exports.sendMessage = sendMessage;

var isHosted = function isHosted() {
  return getData('CLEENG_HOSTED') && getData('CLEENG_HOSTED') === 'true';
};

exports.isHosted = isHosted;

var setPublisher = function setPublisher(publisherId) {
  if (publisherId) {
    setData('CLEENG_PUBLISHER_ID', publisherId);
    return true;
  }

  return false;
};

exports.setPublisher = setPublisher;

var setOffer = function setOffer(offerId) {
  if (offerId) {
    setData('CLEENG_OFFER_ID', offerId);
    return true;
  }

  return false;
};

exports.setOffer = setOffer;

var setEnvironment = function setEnvironment(env) {
  if (env) {
    setData('CLEENG_ENVIRONMENT', env);
    return true;
  }

  return false;
};

exports.setEnvironment = setEnvironment;

var setPaypalUrls = function setPaypalUrls(urls) {
  if (urls) {
    var successUrl = urls.successUrl,
        cancelUrl = urls.cancelUrl,
        errorUrl = urls.errorUrl;
    setData('CLEENG_PP_SUCCESS', successUrl);
    setData('CLEENG_PP_CANCEL', cancelUrl);
    setData('CLEENG_PP_ERROR', errorUrl);
    return true;
  }

  return false;
};

exports.setPaypalUrls = setPaypalUrls;

var setMyAccountUrl = function setMyAccountUrl(url) {
  if (url) {
    setData('CLEENG_MY_ACCOUNT_URL', url);
    return true;
  }

  return false;
};

exports.setMyAccountUrl = setMyAccountUrl;

var setTheme = function setTheme(theme) {
  var themeString = JSON.stringify(theme);

  if (theme) {
    setData('CLEENG_THEME', themeString);
    return true;
  }

  return false;
};

exports.setTheme = setTheme;

var getTheme = function getTheme() {
  var theme = getData('CLEENG_THEME');

  if (theme) {
    var themeJSON = JSON.parse(theme);
    return themeJSON;
  }

  return false;
};

exports.getTheme = getTheme;

var setAdyenConfig = function setAdyenConfig(config) {
  var configString = JSON.stringify(config);

  if (configString) {
    setData('CLEENG_ADYEN', configString);
    return true;
  }

  return false;
};

exports.setAdyenConfig = setAdyenConfig;

var getAdyenConfig = function getAdyenConfig() {
  var config = getData('CLEENG_ADYEN');

  if (config) {
    var configJSON = JSON.parse(config);
    return configJSON;
  }

  return false;
};

exports.getAdyenConfig = getAdyenConfig;
var _default = {
  setPublisher: setPublisher,
  setOffer: setOffer,
  setEnvironment: setEnvironment,
  setTheme: setTheme,
  setPaypalUrls: setPaypalUrls,
  setMyAccountUrl: setMyAccountUrl,
  setAdyenConfig: setAdyenConfig,
  getAdyenConfig: getAdyenConfig
};
exports.default = _default;