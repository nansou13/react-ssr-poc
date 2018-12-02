module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/demo.js":
/*!***********************!*\
  !*** ./pages/demo.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_containers_Demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/containers/Demo */ "./src/containers/Demo/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_containers_Demo__WEBPACK_IMPORTED_MODULE_1__["default"], null);
});

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: requests, setToken, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requests", function() { return requests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 // axios.defaults.withCredentials = true;

var responseBody = function responseBody(res) {
  return res;
};

var responseError = function responseError(error) {
  var errorMessage = 'Error: Network Error';

  if (error.response) {
    if (error.response.status === 401 || error.response.status === 403) {
      //   window.location.href = goToAuthorize();
      console.log(error);
    }

    errorMessage = error.response.data && error.response.data.error_message ? manageErrorMessage(error.response.data.error_message) : errorMessage;
  }

  return errorMessage;
};

var manageErrorMessage = function manageErrorMessage(error) {
  var errorMessage = _typeof(error) === 'object' ? Object.values(error)[0] : error;
  return errorMessage;
};

var axiosPromise = function axiosPromise(options) {
  return new Promise(function (res, rej) {
    var option = options;
    var token = getToken('access_token');

    if (token) {
      option = _objectSpread({}, option, {
        headers: {
          Authorization: "Bearer ".concat(token)
        }
      });
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default()(option).then(function (response) {
      res(responseBody(response));
    }).catch(function (error) {
      rej(responseError(error));
    });
  });
};

var requests = {
  get: function get(url) {
    return axiosPromise({
      url: url
    });
  },
  put: function put(url, body) {
    return axiosPromise({
      url: url,
      method: 'put',
      data: body
    });
  },
  del: function del(url, body) {
    return axiosPromise({
      url: url,
      method: 'del',
      data: body
    });
  },
  post: function post(url, body) {
    return axiosPromise({
      url: url,
      method: 'post',
      data: body
    });
  }
};

var getToken = function getToken(tokenName) {
  return localStorage.getItem(tokenName);
};

var setToken = function setToken(token) {
  localStorage.setItem('authToken', token);
};
var api = 'https://api-mocks.wakeonweb-pprod.com/hellocare';
var Patients = {
  get: function get() {
    return requests.get("".concat(api, "/practitioners"));
  }
};
var Auth = {
  me: function me() {
    return requests.get("".concat(api, "/patients/me"));
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  Auth: Auth,
  Patients: Patients
});

/***/ }),

/***/ "./src/components/Header/Cart.js":
/*!***************************************!*\
  !*** ./src/components/Header/Cart.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Header/styles.js");



var Cart = function Cart() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["SCHeaderLink"], {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/assets/svg/user.svg"
  }), "Mon Compte"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["SCHeaderLink"], {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["SCCartNotification"], null, "01"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/assets/svg/cart.svg"
  }), "Panier"));
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./src/components/Header/Main.js":
/*!***************************************!*\
  !*** ./src/components/Header/Main.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout */ "./src/components/Layout.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/Header/styles.js");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cart */ "./src/components/Header/Cart.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Search */ "./src/components/Header/Search.js");






var HeaderMain = function HeaderMain() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["SCHeaderMain"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["SCWrap"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/assets/svg/logo.svg",
    alt: "Liiiiife logo"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Search__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cart__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderMain);

/***/ }),

/***/ "./src/components/Header/Search.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Search.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 0px 20px 6px 0;\n  border-bottom: 1px solid #cccccc;\n  position: relative;\n  max-width: 345px;\n  width: 100%;\n\n  &:focus-within {\n    border-color: RGBA(124, 172, 41, 0.3);\n  }\n\n  img {\n    position: absolute;\n    right: 0;\n    width: 20px;\n    cursor: pointer;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 24px;\n  padding: 0px;\n  background: transparent;\n  border: none;\n  font-size: 14px;\n  letter-spacing: 0.13px;\n  width: 100%;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::placeholder {\n    color: #cfcfcf;\n    font-style: italic;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default()("input")(_templateObject());
var SearchControl = styled_components__WEBPACK_IMPORTED_MODULE_1___default()("div")(_templateObject2());

var Search = function Search() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchControl, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchInput, {
    placeholder: "Saisissez votre recherche\u2026"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/assets/svg/search.svg",
    alt: "loupe de recherche"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/components/Header/Top.js":
/*!**************************************!*\
  !*** ./src/components/Header/Top.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout */ "./src/components/Layout.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/Header/styles.js");




var HeaderTop = function HeaderTop() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["SCHeaderTop"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["SCWrap"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Liiiiife.com, tout pour le maintien \xE0 domicile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["SCHeaderLink"], {
    href: "mailto:service.client@liiiiife.com"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/assets/svg/mail.svg"
  }), "service.client@liiiiife.com"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["SCHeaderLink"], {
    href: "tel:+33176350129"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/assets/svg/phone.svg"
  }), "+(33) 1 76 35 01 29"))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderTop);

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Top__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Top */ "./src/components/Header/Top.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main */ "./src/components/Header/Main.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Menu */ "./src/components/Menu/index.js");





var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Top__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Main__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/styles.js":
/*!*****************************************!*\
  !*** ./src/components/Header/styles.js ***!
  \*****************************************/
/*! exports provided: SCHeaderTop, SCHeaderLink, SCHeaderMain, SCCartNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHeaderTop", function() { return SCHeaderTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHeaderLink", function() { return SCHeaderLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHeaderMain", function() { return SCHeaderMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCCartNotification", function() { return SCCartNotification; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background: #168138;\n  width: 21px;\n  height: 21px;\n  border-radius: 50%;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: bold;\n  font-size: 10px;\n  position: absolute;\n  top: -23px;\n  left: -2px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 18px 0;\n  color: #29325c;\n\n  & > div {\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-between;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  text-decoration: none;\n  position: relative;\n\n  & + a {\n    margin-left: 21px;\n  }\n\n  svg {\n    margin-right: 0.5em;\n    width: auto;\n    height: 1em;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #f5f5f5;\n  font-size: 12px;\n  color: #888888;\n  line-height: 30px;\n\n  & > div {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var SCHeaderTop = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div")(_templateObject());
var SCHeaderLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("a")(_templateObject2());
var SCHeaderMain = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div")(_templateObject3());
var SCCartNotification = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("span")(_templateObject4());

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: SCWrap, SCMain, Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCWrap", function() { return SCWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCMain", function() { return SCMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 28px auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 0 1em;\n  max-width: 1150px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-around;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var SCWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default()("div")(_templateObject());
var SCMain = styled_components__WEBPACK_IMPORTED_MODULE_1___default()("div")(_templateObject2());
var Main = function Main(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SCMain, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SCWrap, null, props.children));
};

/***/ }),

/***/ "./src/components/Menu/MenuBoutique.js":
/*!*********************************************!*\
  !*** ./src/components/Menu/MenuBoutique.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout */ "./src/components/Layout.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/Menu/styles.js");




var MenuNetwork = function MenuNetwork() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["SCMenuBoutique"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["SCWrap"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["SCBoutiqueLink"], {
    href: "#"
  }, "Vie quotidienne"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["SCBoutiqueLink"], {
    href: "#",
    active: true
  }, "Incontinence"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["SCBoutiqueLink"], {
    href: "#"
  }, "Orthop\xE9die"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["SCBoutiqueLink"], {
    href: "#"
  }, "Salle de bain et WC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["SCBoutiqueLink"], {
    href: "#"
  }, "Diagnostics et soins"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["SCBoutiqueLink"], {
    href: "#"
  }, "Aide \xE0 la mobilit\xE9 et pr\xE9vention de chute")));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuNetwork);

/***/ }),

/***/ "./src/components/Menu/MenuNetwork.js":
/*!********************************************!*\
  !*** ./src/components/Menu/MenuNetwork.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout */ "./src/components/Layout.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/Menu/styles.js");




var MenuNetwork = function MenuNetwork() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["SCMenuNetwork"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["SCWrap"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["SCNetworkLink"], {
    href: "#",
    color: "#5CDB94"
  }, "Media"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["SCNetworkLink"], {
    href: "#",
    color: "#2F2FA1",
    active: true
  }, "Boutique"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["SCNetworkLink"], {
    href: "#",
    color: "#40A4D8"
  }, "Service")));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuNetwork);

/***/ }),

/***/ "./src/components/Menu/index.js":
/*!**************************************!*\
  !*** ./src/components/Menu/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuNetwork__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuNetwork */ "./src/components/Menu/MenuNetwork.js");
/* harmony import */ var _MenuBoutique__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBoutique */ "./src/components/Menu/MenuBoutique.js");




var Menu = function Menu() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuNetwork__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuBoutique__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/components/Menu/styles.js":
/*!***************************************!*\
  !*** ./src/components/Menu/styles.js ***!
  \***************************************/
/*! exports provided: SCMenuNetwork, SCNetworkLink, SCMenuBoutique, SCBoutiqueLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCMenuNetwork", function() { return SCMenuNetwork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCNetworkLink", function() { return SCNetworkLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCMenuBoutique", function() { return SCMenuBoutique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCBoutiqueLink", function() { return SCBoutiqueLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      font-weight: bold;\n      box-shadow: inset 0 -6px 0 #696bff;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    font-size: 15px;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  line-height: 1;\n  display: inline-flex;\n  height: 100%;\n  flex: auto;\n  height: 66px;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1em;\n  text-align: center;\n  transition: box-shadow 0.2s linear;\n\n  ", "\n\n  & + a {\n    margin-left: 1.66em;\n  }\n\n  &:hover {\n    box-shadow: inset 0 -6px 0 #696bff;\n  }\n\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  background: #242582;\n  color: #fff;\n  margin: 4px 0 0;\n\n  & > div {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    padding-left: 40px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      font-weight: bold;\n\n      &:before {\n        display: inline-block;\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  text-decoration: none;\n  cursor: pointer;\n  line-height: 24px;\n  display: inline-block;\n  position: relative;\n  padding: 0 1.2em;\n  z-index: 3;\n\n  & + a {\n    margin-left: 1em;\n  }\n\n  &:before {\n    display: none;\n    content: \"\";\n    z-index: -1;\n    position: absolute;\n    left: 0;\n    width: 100%;\n    border-radius: 10px;\n    transform: translateY(-50%);\n    top: 50%;\n    height: 49px;\n    background: #fff;\n  }\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  letter-spacing: 0.16px;\n  text-transform: uppercase;\n\n  & > div {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    padding-left: 40px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var SCMenuNetwork = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div")(_templateObject());
var SCNetworkLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("a")(_templateObject2(), function (props) {
  return props.color ? props.color : "#242582";
}, function (props) {
  return props.active && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3());
});
var SCMenuBoutique = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div")(_templateObject4());
var SCBoutiqueLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("a")(_templateObject5(), _helpers__WEBPACK_IMPORTED_MODULE_1__["media"].xl(_templateObject6()), function (props) {
  return props.active && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject7());
});

/***/ }),

/***/ "./src/containers/Demo/index.js":
/*!**************************************!*\
  !*** ./src/containers/Demo/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ "./src/components/Header/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _global_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global.action */ "./src/global.action.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






 // import Breadcrumb from "../../components/Breadcrumb";
// import Carousel from "../../components/Carousel";
// import TrustSection from "../../components/TrustSection";
// import MenuSidebar from "../../components/Menu/MenuSidebar";
// import ProductsList from "../../components/ProductsList";
// import BrandSection from "../../components/BrandSection";
// import Footer from "../../components/Footer";
// import { Main } from "../../components/Layout";

var Demo = function Demo() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), "COUCOU");
};

Demo.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var store, _ref3, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store;
            _context.next = 3;
            return _api__WEBPACK_IMPORTED_MODULE_6__["default"].Demo.get();

          case 3:
            _ref3 = _context.sent;
            data = _ref3.data;
            console.log(data, '-------------'); //   await store.dispatch(resolveAppointmentNearest( data ))
            // const data = await res.json()
            // console.log(`Show data fetched. Count: ${data.length}`)

            return _context.abrupt("return", {
              shows: data
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {// dispatchRefreshAppointment: () => dispatch(refreshNearestAppointment()),
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    specialities: state.common.specialities
  };
}; // export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Demo);


/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ }),

/***/ "./src/global.action.js":
/*!******************************!*\
  !*** ./src/global.action.js ***!
  \******************************/
/*! exports provided: APP_LOAD, GET_NEAREST_APPOINTMENT, RESOLVE_APPOINTMENT_NEAREST, refreshNearestAppointment, resolveAppointmentNearest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LOAD", function() { return APP_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NEAREST_APPOINTMENT", function() { return GET_NEAREST_APPOINTMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_APPOINTMENT_NEAREST", function() { return RESOLVE_APPOINTMENT_NEAREST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshNearestAppointment", function() { return refreshNearestAppointment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveAppointmentNearest", function() { return resolveAppointmentNearest; });
var APP_LOAD = 'app/APP_LOAD';
var GET_NEAREST_APPOINTMENT = 'app/GET_NEAREST_APPOINTMENT';
var RESOLVE_APPOINTMENT_NEAREST = 'app/RESOLVE_APPOINTMENT_NEAREST';
function refreshNearestAppointment() {
  return {
    type: GET_NEAREST_APPOINTMENT
  };
}
function resolveAppointmentNearest(appointment) {
  return {
    type: RESOLVE_APPOINTMENT_NEAREST,
    payload: appointment
  };
}

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: ", "em) {\n      ", "\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var sizes = {
  xl: 1100,
  lg: 992,
  md: 768,
  sm: 576
}; // Iterate through the sizes and create a media template

var media = Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject(), sizes[label] / 16, styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
  };

  return acc;
}, {});

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/demo.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/demo.js */"./pages/demo.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=demo.js.map