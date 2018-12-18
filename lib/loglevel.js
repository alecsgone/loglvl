"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var queryStringParser = require('./queryStringParser');

var qs = queryStringParser(document.location.search);

var loglevel = _objectSpread({}, console);

loglevel.log = function log() {
  if (qs.loglevel && qs.loglevel !== 'error' && qs.loglevel !== 'warn' && qs.loglevel !== 'info') {
    console.log.apply(console, arguments);
  }
};

loglevel.error = function error() {
  if (qs.loglevel === 'error' || qs.loglevel === 'verbose') {
    console.error.apply(console, arguments);
  }
};

loglevel.warn = function warn() {
  if (qs.loglevel === 'warn' || qs.loglevel === 'verbose') {
    console.warn.apply(console, arguments);
  }
};

module.exports = loglevel;