"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var colors = _interopRequireWildcard(require("../../styles/variables"));

var _BreakPoints = require("../../styles/BreakPoints");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ButtonStyled = _styledComponents.default.button.attrs(function (props) {
  return {
    className: "msd__button msd__button--".concat(props.theme)
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 100%;\n  min-width: min-content;\n\n  border-radius: 30px;\n  outline: 0;\n  border: none;\n\n  text-align: center;\n  text-decoration: none;\n  letter-spacing: 0.025em;\n  font-size: 13px;\n  padding: 12px 25px;\n  font-weight: 600;\n  line-height: initial;\n\n  transition: opacity 0.1s ease-in-out;\n  cursor: pointer;\n\n  &:active {\n    outline: none;\n  }\n\n  &:disabled {\n    &:hover {\n      cursor: not-allowed;\n    }\n  }\n\n  ", "\n\n  ", "\n  \n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  return props.size === 'big' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n      padding: 20px;\n      font-size: 16px;\n      font-weight: 400;\n    "])));
}, function (props) {
  return props.size === 'normal' && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n      padding: 12px 25px;\n      font-size: 13px;\n      font-weight: 600;\n    "])));
}, function (props) {
  return props.theme === 'confirm' && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n        color: ", ";\n        background-color: ", ";\n        opacity: 0.9;\n        &:hover,\n        &:focus {\n          cursor: pointer;\n          opacity: 1;\n        }\n      "])), colors.White, colors.ConfirmColor) || props.theme === 'primary' && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n        color: ", ";\n        background-color: ", ";\n        opacity: 0.9;\n        &:hover,\n        &:focus {\n          cursor: pointer;\n          opacity: 1;\n        }\n      "])), colors.White, colors.PrimaryColor) || props.theme === 'paypal' && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n        color: ", ";\n        background-color: ", ";\n        opacity: 0.9;\n        &:hover,\n        &:focus {\n          cursor: pointer;\n          opacity: 1;\n        }\n      "])), colors.White, colors.PayPal) || props.theme === 'danger' && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2.default)(["\n        color: ", ";\n        background-color: ", ";\n        opacity: 0.9;\n        &:hover,\n        &:focus {\n          cursor: pointer;\n          opacity: 1;\n        }\n      "])), colors.White, colors.ErrorColor) || props.theme === 'payment' && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2.default)(["\n        height: 48px;\n        width: 30%;\n        min-width: max-content;\n\n        padding: 15px;\n        border-radius: 6px;\n\n        color: ", ";\n        background-color: ", ";\n\n        font-size: 14px;\n\n        ", "\n\n        &:hover,\n        &:focus {\n          cursor: pointer;\n          opacity: 0.9;\n        }\n      "])), colors.White, colors.PaymentButtonBgn, _BreakPoints.media.small(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2.default)(["\n          width: 100%;\n        "])))) || props.theme === 'secondary' && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2.default)(["\n        background-color: ", ";\n        border: 1px solid ", ";\n        color: ", ";\n        &:hover,\n        &:focus,\n        &:active {\n          cursor: pointer;\n          background-color: ", ";\n          border: 1px solid ", ";\n        }\n      "])), colors.SecondaryColor, colors.BackgroundColor, colors.FontColor, colors.LineColor, colors.LineColor) || props.theme === 'simple' && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2.default)(["\n        background-color: transparent;\n        border: 1px solid ", ";\n        color: ", ";\n        &:not(:disabled):hover,\n        &:focus {\n          cursor: pointer;\n          background-color: ", ";\n        }\n        &:active {\n          border: 1px solid ", ";\n        }\n      "])), colors.LineColor, colors.FontColor, colors.BackgroundColor, colors.LineColor) || props.theme === 'navLink' && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2.default)(["\n        position: absolute;\n        top: 50%;\n        left: 35px;\n\n        height: auto;\n        width: auto;\n        border-radius: none;\n        padding: 0;\n\n        transform: translateY(-45%);\n        background-color: transparent;\n        color: ", ";\n        font-size: 16px;\n        letter-spacing: 0.025em;\n        font-weight: 500;\n\n        &::before {\n          content: '<';\n          margin-right: 10px;\n        }\n        &:hover,\n        &:focus {\n          font-weight: 700;\n          text-decoration: none;\n        }\n        ", "\n      "])), colors.FontColor, _BreakPoints.media.small(_templateObject13 || (_templateObject13 = (0, _taggedTemplateLiteral2.default)(["\n          top: 15px;\n          left: 10px;\n        "])))) || props.theme === 'link' && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = (0, _taggedTemplateLiteral2.default)(["\n        display: inline-block;\n\n        width: auto;\n        height: auto;\n        padding: 0px;\n\n        border-radius: none;\n        background-color: transparent;\n        color: ", ";\n\n        text-decoration: underline;\n        letter-spacing: 0.025em;\n        font-weight: 300;\n        font-size: 12px;\n\n        &:hover,\n        &:focus {\n          background-color: transparent;\n          font-weight: bold;\n        }\n      "])), colors.FontColor);
}, function (props) {
  return props.fontWeight && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = (0, _taggedTemplateLiteral2.default)(["\n      font-weight: ", ";\n    "])), props.fontWeight);
}, function (props) {
  return props.fontSize && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = (0, _taggedTemplateLiteral2.default)(["\n      font-size: ", ";\n    "])), props.fontSize);
}, function (props) {
  return props.margin && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = (0, _taggedTemplateLiteral2.default)(["\n      margin: ", ";\n    "])), props.margin);
}, function (props) {
  return props.width && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = (0, _taggedTemplateLiteral2.default)(["\n      width: ", ";\n    "])), props.width);
}, function (props) {
  return props.disabled && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = (0, _taggedTemplateLiteral2.default)(["\n      filter: opacity(0.7);\n    "])));
}, function (props) {
  return props.padding && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = (0, _taggedTemplateLiteral2.default)(["\n      padding: ", ";\n    "])), props.padding);
}, function (props) {
  return props.icon && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = (0, _taggedTemplateLiteral2.default)(["\n      &::before {\n        position: absolute;\n        display: inline-block;\n\n        width: 20px;\n        height: 20px;\n        left: 15px;\n        top: 50%;\n        transform: translateY(-50%);\n        content: url(", ");\n      }\n    "])), props.icon);
});

var _default = ButtonStyled;
exports.default = _default;