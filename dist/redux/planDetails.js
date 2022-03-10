"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateList = exports.setSwitchSettings = exports.setOfferToSwitch = exports.setCurrentPlan = exports.default = exports.UPDATE_LIST = exports.SET_SWITCH_SETTINGS = exports.SET_OFFER_TO_SWITCH = exports.SET_CURRENT_PLAN = void 0;

var _toolkit = require("@reduxjs/toolkit");

/* eslint-disable no-param-reassign */
var SET_CURRENT_PLAN = 'SET_CURRENT_PLAN';
exports.SET_CURRENT_PLAN = SET_CURRENT_PLAN;
var setCurrentPlan = (0, _toolkit.createAction)(SET_CURRENT_PLAN);
exports.setCurrentPlan = setCurrentPlan;
var UPDATE_LIST = 'UPDATE_LIST';
exports.UPDATE_LIST = UPDATE_LIST;
var updateList = (0, _toolkit.createAction)(UPDATE_LIST);
exports.updateList = updateList;
var SET_OFFER_TO_SWITCH = 'SET_OFFER_TO_SWITCH';
exports.SET_OFFER_TO_SWITCH = SET_OFFER_TO_SWITCH;
var setOfferToSwitch = (0, _toolkit.createAction)(SET_OFFER_TO_SWITCH);
exports.setOfferToSwitch = setOfferToSwitch;
var SET_SWITCH_SETTINGS = 'SET_SWITCH_SETTINGS';
exports.SET_SWITCH_SETTINGS = SET_SWITCH_SETTINGS;
var setSwitchSettings = (0, _toolkit.createAction)(SET_SWITCH_SETTINGS);
exports.setSwitchSettings = setSwitchSettings;
var initialState = {
  currentPlan: [],
  updateList: false,
  offerToSwitch: {},
  switchSettings: {}
};
var paymentDetailsReducer = (0, _toolkit.createReducer)(initialState, {
  SET_CURRENT_PLAN: function SET_CURRENT_PLAN(state, action) {
    state.currentPlan = action.payload;
  },
  UPDATE_LIST: function UPDATE_LIST(state) {
    state.updateList = !state.updateList;
  },
  SET_OFFER_TO_SWITCH: function SET_OFFER_TO_SWITCH(state, action) {
    state.offerToSwitch = action.payload;
  },
  SET_SWITCH_SETTINGS: function SET_SWITCH_SETTINGS(state, action) {
    state.switchSettings[action.payload.offerId] = action.payload.settings;
  }
});
var _default = paymentDetailsReducer;
exports.default = _default;