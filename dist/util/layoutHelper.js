"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHosted = exports.isHeaderOff = void 0;

var _appConfigHelper = require("./appConfigHelper");

var isConfigSetted = function isConfigSetted(urlParam, configName) {
  switch (new URLSearchParams(window.location.search).get(urlParam)) {
    case 'true':
      (0, _appConfigHelper.setData)(configName, 'true');
      return true;

    case 'false':
      (0, _appConfigHelper.setData)(configName, 'false');
      return false;

    default:
      return (0, _appConfigHelper.getData)(configName) === 'true';
  }
};

var isHosted = function isHosted() {
  return isConfigSetted('hosted', 'CLEENG_HOSTED');
};

exports.isHosted = isHosted;

var isHeaderOff = function isHeaderOff() {
  return isConfigSetted('headerOff', 'CLEENG_HEADER_OFF');
};

exports.isHeaderOff = isHeaderOff;