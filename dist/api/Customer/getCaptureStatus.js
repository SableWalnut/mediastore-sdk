"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _appConfigHelper = require("../../util/appConfigHelper");

var _fetchHelper = _interopRequireDefault(require("../../util/fetchHelper"));

var _environmentHelper = _interopRequireDefault(require("../../util/environmentHelper"));

var getCaptureStatus = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var API_URL, customerId, url;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            API_URL = (0, _environmentHelper.default)();
            customerId = (0, _appConfigHelper.getData)('CLEENG_CUSTOMER_ID') || '';
            url = "".concat(API_URL, "/customers/").concat(customerId, "/capture/status");
            return _context.abrupt("return", (0, _fetchHelper.default)(url, {
              method: 'GET'
            }).then(function (res) {
              return res.json();
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getCaptureStatus() {
    return _ref.apply(this, arguments);
  };
}();

var _default = getCaptureStatus;
exports.default = _default;