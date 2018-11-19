"use strict";

function _typeof7(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof7 = function _typeof7(obj) { return typeof obj; }; } else { _typeof7 = function _typeof7(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof7(obj); }

function _typeof6(obj) {
  if (typeof Symbol === "function" && _typeof7(Symbol.iterator) === "symbol") {
    _typeof6 = function _typeof6(obj) {
      return _typeof7(obj);
    };
  } else {
    _typeof6 = function _typeof6(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof7(obj);
    };
  }

  return _typeof6(obj);
}

function _typeof5(obj) {
  if (typeof Symbol === "function" && _typeof6(Symbol.iterator) === "symbol") {
    _typeof5 = function _typeof5(obj) {
      return _typeof6(obj);
    };
  } else {
    _typeof5 = function _typeof5(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof6(obj);
    };
  }

  return _typeof5(obj);
}

function _typeof4(obj) {
  if (typeof Symbol === "function" && _typeof5(Symbol.iterator) === "symbol") {
    _typeof4 = function _typeof4(obj) {
      return _typeof5(obj);
    };
  } else {
    _typeof4 = function _typeof4(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof5(obj);
    };
  }

  return _typeof4(obj);
}

function _typeof3(obj) {
  if (typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol") {
    _typeof3 = function _typeof3(obj) {
      return _typeof4(obj);
    };
  } else {
    _typeof3 = function _typeof3(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof4(obj);
    };
  }

  return _typeof3(obj);
}

function _typeof2(obj) {
  if (typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol") {
    _typeof2 = function _typeof2(obj) {
      return _typeof3(obj);
    };
  } else {
    _typeof2 = function _typeof2(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof3(obj);
    };
  }

  return _typeof2(obj);
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
} // This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js


var g = (typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : void 0; // Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.

var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0; // Save the old regeneratorRuntime in case it needs to be restored later.

var oldRuntime = hadRuntime && g.regeneratorRuntime; // Force reevalutation of runtime.js.

g.regeneratorRuntime = undefined;
module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}
//# sourceMappingURL=runtime-module.js.map