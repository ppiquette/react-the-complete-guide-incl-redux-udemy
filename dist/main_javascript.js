"use strict";

var _defaultexport = _interopRequireDefault(require("./defaultexport.js"));

var _export_items_individually = require("./export_items_individually");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Regular javascript function
function regularFunction() {
  console.log("regular javascript function");
}

regularFunction(); //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// NextGen Javascript functionality
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let and const
//

console.log("*** let and const ***"); // Standard Javascript variable

var regular_javascript_variable = 67; // New syntax but like var

var same_as_var = 67; // as it names suggested, constant

var could_not_be_changed = 67; //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Arrow Functions
//

console.log("\n*** Arrow Functions ***");

var printMyName = function printMyName(name) {
  console.log(name);
};

printMyName('Max'); // With a return value

var squared = function squared(number) {
  return Math.pow(number, 2);
};

console.log(squared(could_not_be_changed)); // concise version
// if one parameter -> no () required
// just return something -> no return keyword required

var squared_short = function squared_short(number) {
  return Math.pow(number, 2);
};

console.log(squared_short(same_as_var)); //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Export and Import (between files)
//
// Need to compile the code with Babel first. You can run the compiler in command line, or make transpiling
// a part of your build process (using Gulp, Grunt, WebPack, etc.).
// In WebStorm: https://blog.jetbrains.com/webstorm/2015/05/ecmascript-6-in-webstorm-transpiling/

console.log("\n*** Export and Import (between files) ***");
(0, _defaultexport.default)();
(0, _export_items_individually.myFunction)(_export_items_individually.myConstant); //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Classes
//
// very similar to javascript function instantiation
// (for more details https://medium.com/dailyjs/instantiation-patterns-in-javascript-8fdcf69e8f9b)

console.log("\n*** Classes ***");

var Human = // required
function Human() {
  _classCallCheck(this, Human);

  this.sex = "M";
};

var Person =
/*#__PURE__*/
function (_Human) {
  _inherits(Person, _Human);

  function Person() {
    var _this;

    _classCallCheck(this, Person);

    // need to call constructor of parent like in Python
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Person).call(this));
    _this.name = "BillyBob";
    return _this;
  }

  _createClass(Person, [{
    key: "printStuff",
    value: function printStuff() {
      console.log("Name is", this.name);
      console.log("Sex is", this.sex);
    }
  }]);

  return Person;
}(Human); // Instantiation of a class


var somebody = new Person();
somebody.printStuff(); //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Modern Syntax for Properties and Functions in Classes
//

console.log("\n*** Modern Syntax for Properties and Functions in Classes ***"); // Modern syntax introduced in ES7 for defining:
//  - variable outside of a constructor() function with no "this"
//  - class functions using arrow functions

var PersonNew = function PersonNew() {
  var _this2 = this;

  _classCallCheck(this, PersonNew);

  _defineProperty(this, "name", 'Jerry');

  _defineProperty(this, "printStuff", function () {
    console.log("Name is", _this2.name);
  });
};

var somebody_else = new PersonNew();
somebody_else.printStuff(); //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Spread and Rest operators
//

console.log("\n*** Spread and Rest operators ***"); // spread is something like the split function in python but more general, not just for list (I think)

var old_array = ["test", "patate"];
var new_array = old_array.concat(["bleh", "fruits"]);
console.log("spread and concatenate: ", new_array); // the rest variant of the same ... is really like the * operator in python functions

var any_number_of_parameters_function = function any_number_of_parameters_function() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.sort();
};

console.log("rested: ", any_number_of_parameters_function(4, 2, 6, 7, 9)); // the ... operator can also expend a Javascript "object". An object seems to be a simple container or properties
// (kind of a C struct)

var old_obj = {
  name: "Patrick",
  age: 44
};

var new_obj = _objectSpread({}, old_obj, {
  size: 'L'
});

console.log("pread and concatenate object:", new_obj); //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Destructuring
//

console.log("\n*** Destructuring ***"); // very similar to Python unpacking
// it uses the array symbol [] but a and b are not in an array

var a = "Jesus",
    b = "Saint-Esprit";
console.log("a: ", a, "b: ", b); // same thing for properties in object. Here, only name is pulled.

var _name$age = {
  name: "Eric",
  age: "22"
},
    name = _name$age.name;
console.log(name); // it seems that the syntax for
//   array is []
//   objects is {}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// References and primitive type
// (not modern javascript, just very useful)
//

console.log("\n*** References and primitive type ***"); // PRIMITIVE: a primitive type is like an int, a bool

var num = 1; // is a primitive type

var num2 = num; //creates a copy of the content of num

num2 = 2;
console.log(num2); // REFERENCE: objects and array are references

var object1 = {
  name: "Pat",
  sex: "M"
};
var object2 = object1;
object2.name = "Sophie";
console.log(object1); // both object1 an object2 get changed because they point to the same space in memory
// if we spread an object while creating another one, we are now making a copy of it

var object3 = _objectSpread({}, object1);

object3.name = "Albert";
console.log(object1); // it stays with the Sophie name, object3 occupies another space in memory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Array functions
//

console.log("\n*** Array functions ***");
var array = [1, 2, 3]; // array function are executed on each element or the array
// each element is put in the "num" variable below and can be manipulated in the execution part of the array function
// (between the {})
// in that case the map return a new array (it is not a reference as above)

var t = array.map(function (num) {
  return num * 2;
});
console.log(t);
//# sourceMappingURL=main_javascript.js.map