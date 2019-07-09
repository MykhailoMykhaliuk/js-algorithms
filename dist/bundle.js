/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/algorithms/index.js":
/*!*********************************!*\
  !*** ./src/algorithms/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _sort = __webpack_require__(/*! ./sort */ \"./src/algorithms/sort/index.js\");\n\nObject.keys(_sort).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _sort[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/algorithms/index.js?");

/***/ }),

/***/ "./src/algorithms/sort/bubble.js":
/*!***************************************!*\
  !*** ./src/algorithms/sort/bubble.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.bubbleSort = bubbleSort;\n\nfunction bubbleSort(array) {\n  for (var i = 0; i < array.length; i++) {\n    for (var j = 0; j < array.length; j++) {\n      if (array[j] > array[j + 1]) {\n        var _ref = [array[j + 1], array[j]];\n        array[j] = _ref[0];\n        array[j + 1] = _ref[1];\n      }\n    }\n  }\n\n  return array;\n}\n\n;\n\n//# sourceURL=webpack:///./src/algorithms/sort/bubble.js?");

/***/ }),

/***/ "./src/algorithms/sort/index.js":
/*!**************************************!*\
  !*** ./src/algorithms/sort/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _bubble = __webpack_require__(/*! ./bubble */ \"./src/algorithms/sort/bubble.js\");\n\nObject.keys(_bubble).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _bubble[key];\n    }\n  });\n});\n\nvar _selection = __webpack_require__(/*! ./selection */ \"./src/algorithms/sort/selection.js\");\n\nObject.keys(_selection).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _selection[key];\n    }\n  });\n});\n\nvar _merge = __webpack_require__(/*! ./merge */ \"./src/algorithms/sort/merge.js\");\n\nObject.keys(_merge).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _merge[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/algorithms/sort/index.js?");

/***/ }),

/***/ "./src/algorithms/sort/merge.js":
/*!**************************************!*\
  !*** ./src/algorithms/sort/merge.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.mergeSort = mergeSort;\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction mergeSort(array) {\n  if (array.length < 2) {\n    return array;\n  }\n\n  var middlePointer = Math.floor(array.length / 2);\n  var leftPart = array.slice(0, middlePointer);\n  var rightPart = array.slice(middlePointer);\n  return merge(mergeSort(leftPart), mergeSort(rightPart));\n}\n\nfunction merge(leftPart, rightPart) {\n  var result = [];\n  var leftPointer = 0;\n  var rightPointer = 0;\n\n  while (leftPointer < leftPart.length && rightPointer < rightPart.length) {\n    if (leftPart[leftPointer] < rightPart[rightPointer]) {\n      result.push(leftPart[leftPointer]);\n      leftPointer++;\n    } else {\n      result.push(rightPart[rightPointer]);\n      rightPointer++;\n    }\n  }\n\n  return [].concat(result, _toConsumableArray(leftPart.slice(leftPointer)), _toConsumableArray(rightPart.slice(rightPointer)));\n}\n\n//# sourceURL=webpack:///./src/algorithms/sort/merge.js?");

/***/ }),

/***/ "./src/algorithms/sort/selection.js":
/*!******************************************!*\
  !*** ./src/algorithms/sort/selection.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.selectionSort = selectionSort;\n\nfunction selectionSort(array) {\n  var length = array.length;\n\n  for (var i = 0; i < length; i++) {\n    var indexOfMinElement = i;\n\n    for (var j = i + 1; j < length; j++) {\n      if (array[indexOfMinElement] > array[j]) {\n        indexOfMinElement = j;\n      }\n    }\n\n    var _ref = [array[indexOfMinElement], array[i]];\n    array[i] = _ref[0];\n    array[indexOfMinElement] = _ref[1];\n  }\n\n  return array;\n}\n\n//# sourceURL=webpack:///./src/algorithms/sort/selection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _algorithms = __webpack_require__(/*! ./algorithms */ \"./src/algorithms/index.js\");\n\nObject.keys(_algorithms).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _algorithms[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });