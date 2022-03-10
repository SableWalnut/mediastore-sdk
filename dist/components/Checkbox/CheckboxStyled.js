"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorFieldStyled = exports.ConsentDefinitionStyled = exports.CheckboxStyled = exports.CheckMarkStyled = exports.CheckFrameStyled = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _variables = require("../../styles/variables");

var _tickIB = _interopRequireDefault(require("../../assets/images/input/tickIB.svg"));

var _enable_checkIB = _interopRequireDefault(require("../../assets/images/input/enable_checkIB.svg"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CheckboxStyled = _styledComponents.default.div.attrs(function (props) {
  return {
    className: "msd__consents ".concat(props.disabled ? 'msd__consents--disabled' : '')
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  margin-top: 10px;\n\n  align-items: center;\n  font-size: 13px;\n  color: ", ";\n\n  &:focus {\n    outline: none;\n  }\n  ", "\n"])), _variables.FontColor, function (props) {
  return props.disabled && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n      opacity: 0.7;\n    "])));
});

exports.CheckboxStyled = CheckboxStyled;

var ConsentDefinitionStyled = _styledComponents.default.div.attrs(function (props) {
  return {
    className: "msd__consents__text ".concat(props.checked ? 'msd__consents__text--checked' : '')
  };
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  padding-left: 10px;\n  margin-top: 0;\n\n  font-weight: 400;\n  text-align: left;\n  a {\n    color: ", ";\n\n    text-decoration: underline;\n    &:focus {\n      outline: 2px solid ", ";\n    }\n  }\n  opacity: 0.8;\n  ", "\n"])), _variables.FontColor, _variables.FocusColor, function (props) {
  return props.checked && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n      opacity: 1;\n    "])));
});

exports.ConsentDefinitionStyled = ConsentDefinitionStyled;

var CheckFrameStyled = _styledComponents.default.div.attrs(function (props) {
  return {
    className: "msd__consents__frame ".concat(props.error ? 'msd__consents__frame--error' : '', " ").concat(props.checked ? 'msd__consents__frame--checked' : '', "\n  ").concat(props.isRadioButton ? 'msd__consents__frame--radio' : '', " ").concat(props.isMyAccount ? 'msd__consents__frame--account' : '')
  };
})(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  box-sizing: border-box;\n\n  border: 1px solid ", ";\n  border-radius: 2px;\n  width: 20px;\n  min-width: 20px;\n  height: 20px;\n\n  &:focus {\n    outline: 2px solid ", ";\n  }\n  ", "\n  ", "\n  ", "\n\n  ", "\n"])), _variables.LineColor, _variables.FocusColor, function (props) {
  return props.error && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n      border-color: ", ";\n    "])), _variables.ErrorColor);
}, function (props) {
  return props.isRadioButton && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2.default)(["\n      border-radius: 50%;\n    "])));
}, function (props) {
  return props.isRadioButton && props.checked && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2.default)(["\n      border: 1px solid ", ";\n    "])), _variables.ConfirmColor);
}, function (props) {
  return props.isMyAccount && props.checked && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2.default)(["\n      border-color: ", ";\n    "])), _variables.ConfirmColor);
});

exports.CheckFrameStyled = CheckFrameStyled;

var CheckMarkStyled = _styledComponents.default.div.attrs(function (props) {
  return {
    className: "msd__consents__check-mark ".concat(props.isRadioButton ? 'msd__consents__check-mark--radio' : '', " ").concat(props.isMyAccount ? 'msd__consents__check-mark--account' : '')
  };
})(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2.default)(["\n  position: absolute;\n\n  width: 13px;\n  height: 10px;\n  top: 4px;\n  left: 3px;\n\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  ", "\n  ", "\n"])), _tickIB.default, function (props) {
  return props.isRadioButton && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2.default)(["\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n\n      width: 12px;\n      height: 12px;\n\n      background: ", ";\n      border-radius: 50%;\n    "])), _variables.ConfirmColor);
}, function (props) {
  return props.isMyAccount && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2.default)(["\n      width: 20px;\n      height: 20px;\n      top: -1px;\n      left: -1px;\n      background-image: url(", ");\n      background-position: center;\n      background-size: cover;\n    "])), _enable_checkIB.default);
});

exports.CheckMarkStyled = CheckMarkStyled;

var ErrorFieldStyled = _styledComponents.default.div(_templateObject13 || (_templateObject13 = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n\n  width: 100%;\n  margin-top: 10px;\n\n  color: ", ";\n\n  font-size: 12px;\n  font-weight: 300;\n  text-align: center;\n"])), _variables.ErrorColor);

exports.ErrorFieldStyled = ErrorFieldStyled;