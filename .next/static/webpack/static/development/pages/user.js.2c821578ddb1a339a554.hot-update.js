webpackHotUpdate("static/development/pages/user.js",{

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ikhowaja/Desktop/launchpad/pages/user.js";

function Blog(props) {
  var sidebar = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, props.posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: post.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, post.title);
  }));
  var content = props.posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: post.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, post.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, post.content));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, sidebar, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), content);
}
var posts = [{
  id: 1,
  title: 'Hello World',
  content: 'Welcome to learning React!'
}, {
  id: 2,
  title: 'Installation',
  content: 'You can install React from npm.'
}];

/***/ })

})
//# sourceMappingURL=user.js.2c821578ddb1a339a554.hot-update.js.map