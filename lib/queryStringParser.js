"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var toBoolean = require('./toBoolean');

function queryStringParser(qs) {
  return qs && window.decodeURIComponent(qs).replace('?', '').split('&').reduce(function (acc, item) {
    var _item$split = item.split('='),
        _item$split2 = _slicedToArray(_item$split, 2),
        key = _item$split2[0],
        _item$split2$ = _item$split2[1],
        value = _item$split2$ === void 0 ? true : _item$split2$;

    var result = toBoolean(value) && value;

    if (acc[key]) {
      acc[key] = acc[key].toString().split(',').concat(result);
    } else {
      acc[key] = result;
    }

    return acc;
  }, {}) || {};
}

module.exports = queryStringParser;