"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentStyled = exports.PaymentErrorStyled = exports.PayPalWrapperStyled = exports.PayPalTextStyled = exports.MethodsWrapperStyled = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var colors = _interopRequireWildcard(require("../../styles/variables"));

var _BreakPoints = require("../../styles/BreakPoints");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PaymentStyled = _styledComponents.default.div.attrs(function () {
  return {
    className: 'msd__payment'
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  padding: 20px 35px 70px 35px;\n  width: 100%;\n  background-color: ", ";\n  border-top: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n"])), colors.BackgroundColor, colors.LineColor, colors.LineColor);

exports.PaymentStyled = PaymentStyled;

var PaymentErrorStyled = _styledComponents.default.div.attrs(function () {
  return {
    className: 'msd__payment--error'
  };
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  text-align: center;\n  font-size: 15px;\n  color: ", ";\n"])), colors.ErrorColor);

exports.PaymentErrorStyled = PaymentErrorStyled;

var MethodsWrapperStyled = _styledComponents.default.div.attrs(function () {
  return {
    className: 'msd__payment__methods'
  };
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  margin-bottom: 10px;\n  font-size: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  button {\n    flex-basis: 200px;\n    margin: 10px;\n\n    :not(:disabled):hover,\n    :active,\n    :focus {\n      background-color: ", ";\n    }\n  }\n  ", "\n"])), colors.MediumGrey, _BreakPoints.media.smallest(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n    button{\n      flex-basis: 100%;\n    }\n  "]))));

exports.MethodsWrapperStyled = MethodsWrapperStyled;

var PayPalWrapperStyled = _styledComponents.default.div.attrs(function () {
  return {
    className: 'msd__payment__paypal'
  };
})(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n  height: 180px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));

exports.PayPalWrapperStyled = PayPalWrapperStyled;

var PayPalTextStyled = _styledComponents.default.p.attrs(function () {
  return {
    className: 'msd__payment__paypal-text'
  };
})(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n  max-width: 50%;\n  margin-bottom: 20px;\n  text-align: center;\n  line-height: 1.4em;\n  font-size: 13px;\n  ", "\n"])), _BreakPoints.media.small(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2.default)(["\n    width: 90%;\n    max-width: 400px;\n  "]))));

exports.PayPalTextStyled = PayPalTextStyled;