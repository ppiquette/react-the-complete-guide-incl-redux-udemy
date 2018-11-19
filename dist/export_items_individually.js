"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myConstant = exports.myFunction = void 0;

var myFunction = function myFunction(value) {
  console.log("I'm single function exported");
  return value;
};

exports.myFunction = myFunction;
var myConstant = 10;
exports.myConstant = myConstant;
//# sourceMappingURL=export_items_individually.js.map