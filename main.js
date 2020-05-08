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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst humans_parent = document.getElementById('humans')\r\nconst BLOOD_TYPES = {\r\n  'O−': ['O−', 'O+', 'A−', 'A+', 'B−', 'B+', 'AB−', 'AB+'],\r\n  'O+': ['O+', 'A+', 'B+', 'AB+'],\r\n  'A−': ['A−', 'A+', 'AB−', 'AB+'],\r\n  'A+': ['A+', 'AB+'],\r\n  'B−': ['B−', 'B+', 'AB−', 'AB+'],\r\n  'B+': ['B+', 'AB+'],\r\n  'AB−': ['AB−', 'AB+'],\r\n  'AB+': ['AB+'],\r\n}\r\n\r\nconst reset_button = document.getElementById('reset')\r\nconst selector = document.getElementById('blood_selector')\r\nconst blood_vias = document.querySelectorAll('#humans .human .blood_via')\r\nconst blood_bag = document.querySelector('#blood_content > div.main_bag > div')\r\nconst center_via = document.querySelector('.center_via > .blood_via')\r\nconst blood_types = document.querySelectorAll('.blood_type')\r\nlet lastCalled\r\naddListeners()\r\n\r\nfunction callIfChildren(e) {\r\n  if (lastCalled) change()\r\n  if (e.target !== this) setRecipents(e)\r\n}\r\n\r\nfunction addListeners() {\r\n  selector.addEventListener('click', callIfChildren)\r\n  reset.addEventListener('click', reset)\r\n}\r\n\r\nfunction reset() {\r\n  change()\r\n  blood_bag.style.height = '100px'\r\n  center_via.style.height = '0px'\r\n}\r\n\r\nfunction change() {\r\n  lastCalled.target.classList.remove('highlight')\r\n\r\n  for (let i = 0; i < blood_vias.length; i++) {\r\n    blood_vias[i].style.width = '0px'\r\n    blood_types[i].classList.remove('highlightText')\r\n  }\r\n}\r\n\r\nfunction timeout(ms) {\r\n  return new Promise((resolve) => setTimeout(resolve, ms))\r\n}\r\n\r\nasync function setRecipents(e) {\r\n  e.target.classList.add('highlight')\r\n  lastCalled = e\r\n\r\n  const donor = e.target.innerText\r\n  for (let item of BLOOD_TYPES[donor]) {\r\n    const recipent_index = Object.keys(BLOOD_TYPES).indexOf(item)\r\n    const height = 50 + 50 * Math.floor(recipent_index / 2)\r\n    const blood_height = 125 - 25 * Math.floor(recipent_index / 2)\r\n    blood_bag.style.height = `${blood_height}px`\r\n    center_via.style.height = `${height}px`\r\n\r\n    await timeout(100)\r\n    blood_vias[recipent_index].style.width = '100%'\r\n    blood_types[recipent_index].classList.add('highlightText')\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });