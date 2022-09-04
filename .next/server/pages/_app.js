(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ThemeConfig.js":
/*!***********************************!*\
  !*** ./components/ThemeConfig.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lightTheme": () => (/* binding */ lightTheme),
/* harmony export */   "darkTheme": () => (/* binding */ darkTheme),
/* harmony export */   "GlobalStyles": () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const lightTheme = {
  body: '#FAFAFA',
  text: 'black'
};
const darkTheme = {
  body: 'black',
  text: '#FAFAFA',
  imageInvert: true
};
const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
    body {
        background: ${({
  theme
}) => theme.body};
        color: ${({
  theme
}) => theme.text};
        transition: all 0.50s linear;
    }
    img {
        transition: .25s linear;
        -webkit-filter: ${({
  theme
}) => theme.imageInvert ? 'invert(1)' : 'none'};
        filter: ${({
  theme
}) => theme.imageInvert ? 'invert(1)' : 'none'};
    }
    #discord:hover {
        -webkit-filter: ${({
  theme
}) => theme.imageInvert ? 'none' : 'invert(1)'};
        filter: ${({
  theme
}) => theme.imageInvert ? 'none' : 'invert(1)'};
    }
    #twitter:hover {
        -webkit-filter: ${({
  theme
}) => theme.imageInvert ? 'none' : 'invert(1)'};
        filter: ${({
  theme
}) => theme.imageInvert ? 'none' : 'invert(1)'};
    }
    #github:hover {
        -webkit-filter: ${({
  theme
}) => theme.imageInvert ? 'none' : 'invert(1)'};
        filter: ${({
  theme
}) => theme.imageInvert ? 'none' : 'invert(1)'};
    }
    #button {
        border: 1px solid ${({
  theme
}) => theme.text};
    }
    #button:hover {
        background: ${({
  theme
}) => theme.text};
        color: ${({
  theme
}) => theme.body};
    }
`;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.scss */ "./styles/globals.scss");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ThemeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ThemeConfig */ "./components/ThemeConfig.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\vatsal pandey\\Desktop\\vatsalpandey-next\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  const {
    0: theme,
    1: setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_components_ThemeConfig__WEBPACK_IMPORTED_MODULE_3__.lightTheme);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setTheme(localStorage.getItem('theme') === 'dark' ? _components_ThemeConfig__WEBPACK_IMPORTED_MODULE_3__.darkTheme : _components_ThemeConfig__WEBPACK_IMPORTED_MODULE_3__.lightTheme);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
    theme: theme,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ThemeConfig__WEBPACK_IMPORTED_MODULE_3__.GlobalStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsU0FBRCxvQkFBZU0sU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7QUFFRCxpRUFBZUYsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFbEJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3VuYWxiYWdhcmlhLy4vY29tcG9uZW50cy9UaGVtZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly9rdW5hbGJhZ2FyaWEvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2t1bmFsYmFnYXJpYS8uL3N0eWxlcy9nbG9iYWxzLnNjc3MiLCJ3ZWJwYWNrOi8va3VuYWxiYWdhcmlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9rdW5hbGJhZ2FyaWEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9rdW5hbGJhZ2FyaWEvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcblxuZXhwb3J0IGNvbnN0IGxpZ2h0VGhlbWUgPSB7XG4gICAgYm9keTogJyNGQUZBRkEnLFxuICAgIHRleHQ6ICdibGFjaycsXG59XG5cbmV4cG9ydCBjb25zdCBkYXJrVGhlbWUgPSB7XG4gICAgYm9keTogJ2JsYWNrJyxcbiAgICB0ZXh0OiAnI0ZBRkFGQScsXG4gICAgaW1hZ2VJbnZlcnQ6IHRydWVcbn1cblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAgIGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvZHl9O1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNTBzIGxpbmVhcjtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgdHJhbnNpdGlvbjogLjI1cyBsaW5lYXI7XG4gICAgICAgIC13ZWJraXQtZmlsdGVyOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmltYWdlSW52ZXJ0ID8gJ2ludmVydCgxKScgOiAnbm9uZSd9O1xuICAgICAgICBmaWx0ZXI6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuaW1hZ2VJbnZlcnQgPyAnaW52ZXJ0KDEpJyA6ICdub25lJ307XG4gICAgfVxuICAgICNkaXNjb3JkOmhvdmVyIHtcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuaW1hZ2VJbnZlcnQgPyAnbm9uZScgOiAnaW52ZXJ0KDEpJ307XG4gICAgICAgIGZpbHRlcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5pbWFnZUludmVydCA/ICdub25lJyA6ICdpbnZlcnQoMSknfTtcbiAgICB9XG4gICAgI3R3aXR0ZXI6aG92ZXIge1xuICAgICAgICAtd2Via2l0LWZpbHRlcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5pbWFnZUludmVydCA/ICdub25lJyA6ICdpbnZlcnQoMSknfTtcbiAgICAgICAgZmlsdGVyOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmltYWdlSW52ZXJ0ID8gJ25vbmUnIDogJ2ludmVydCgxKSd9O1xuICAgIH1cbiAgICAjZ2l0aHViOmhvdmVyIHtcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuaW1hZ2VJbnZlcnQgPyAnbm9uZScgOiAnaW52ZXJ0KDEpJ307XG4gICAgICAgIGZpbHRlcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5pbWFnZUludmVydCA/ICdub25lJyA6ICdpbnZlcnQoMSknfTtcbiAgICB9XG4gICAgI2J1dHRvbiB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAgfVxuICAgICNidXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib2R5fTtcbiAgICB9XG5gIiwiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5zY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgbGlnaHRUaGVtZSwgZGFya1RoZW1lLCBHbG9iYWxTdHlsZXMgfSBmcm9tICcuLi9jb21wb25lbnRzL1RoZW1lQ29uZmlnJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShsaWdodFRoZW1lKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldFRoZW1lKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID09PSAnZGFyaycgPyBkYXJrVGhlbWUgOiBsaWdodFRoZW1lKTtcbiAgfSwgW10pXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxHbG9iYWxTdHlsZXMgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiIsIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJsaWdodFRoZW1lIiwiYm9keSIsInRleHQiLCJkYXJrVGhlbWUiLCJpbWFnZUludmVydCIsIkdsb2JhbFN0eWxlcyIsInRoZW1lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUaGVtZVByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXRUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9