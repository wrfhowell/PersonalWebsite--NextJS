"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar LinkItem = function(param) {\n    var href = param.href, path = param.path, children = param.children;\n    _s();\n    var active = path === href;\n    var inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)('gray200', 'whiteAlpha.900');\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        __source: {\n            fileName: \"/Users/WillH/Projects/PersonalWebsite/components/navbar.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            p: 2,\n            bg: active ? 'glassTeal' : undefined,\n            color: active ? '#202023' : inactiveColor,\n            __source: {\n                fileName: \"/Users/WillH/Projects/PersonalWebsite/components/navbar.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: children\n        })\n    }));\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nvar NavBar = function(props) {\n    var path = props.path;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, _objectSpread({\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)('#ffffff40', '#20202380'),\n        style: {\n            backdropFilter: 'blur(10px'\n        },\n        zIndex: 1\n    }, props, {\n        __source: {\n            fileName: \"/Users/WillH/Projects/PersonalWebsite/components/navbar.js\",\n            lineNumber: 35,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            __source: {\n                fileName: \"/Users/WillH/Projects/PersonalWebsite/components/navbar.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    __source: {\n                        fileName: \"/Users/WillH/Projects/PersonalWebsite/components/navbar.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: 'tighter',\n                        __source: {\n                            fileName: \"/Users/WillH/Projects/PersonalWebsite/components/navbar.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            __source: {\n                                fileName: \"/Users/WillH/Projects/PersonalWebsite/components/navbar.js\",\n                                lineNumber: 40,\n                                columnNumber: 25\n                            },\n                            __self: _this\n                        })\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    direction: {\n                        base: 'column',\n                        md: 'row'\n                    },\n                    display: {\n                        base: 'none'\n                    },\n                    __source: {\n                        fileName: \"/Users/WillH/Projects/PersonalWebsite/components/navbar.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                })\n            ]\n        })\n    })));\n};\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDTztBQWNQO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxHQUFLLENBQUNlLFFBQVEsR0FBRyxRQUFRQyxRQUFvQixDQUFDO1FBQTNCQyxJQUFJLFNBQUpBLElBQUksRUFBRUQsSUFBSSxTQUFKQSxJQUFJLEVBQUVFLFFBQVEsU0FBUkEsUUFBUTs7SUFDbkMsR0FBSyxDQUFDQyxNQUFNLEdBQUdILElBQUksS0FBS0MsSUFBSTtJQUM1QixHQUFLLENBQUNHLGFBQWEsR0FBR1AsbUVBQWlCLENBQUMsQ0FBUyxVQUFFLENBQWdCO0lBQ25FLE1BQU0sc0VBQ0RaLGtEQUFRO1FBQUNnQixJQUFJLEVBQUVBLElBQUk7Ozs7Ozs7dUZBQ2ZiLGtEQUFJO1lBQUNpQixDQUFDLEVBQUUsQ0FBQztZQUFFQyxFQUFFLEVBQUVILE1BQU0sR0FBRyxDQUFXLGFBQUdJLFNBQVM7WUFBRUMsS0FBSyxFQUFFTCxNQUFNLEdBQUcsQ0FBUyxXQUFHQyxhQUFhOzs7Ozs7O3NCQUN0RkYsUUFBUTs7O0FBSXpCLENBQUM7R0FWS0gsUUFBUTs7UUFFWUYsK0RBQWlCOzs7S0FGckNFLFFBQVE7QUFZZCxHQUFLLENBQUNVLE1BQU0sR0FBR0MsUUFBUSxDQUFSQSxLQUFLLEVBQUksQ0FBQztJQUNyQixHQUFLLENBQUdWLElBQUksR0FBS1UsS0FBSyxDQUFkVixJQUFJO0lBRVosTUFBTSxzRUFDRGIsaURBQUc7UUFBQ3dCLFFBQVEsRUFBQyxDQUFPO1FBQUNDLEVBQUUsRUFBQyxDQUFLO1FBQUNDLENBQUMsRUFBQyxDQUFNO1FBQUNQLEVBQUUsRUFBRVQsbUVBQWlCLENBQUMsQ0FBVyxZQUFFLENBQVc7UUFBR2lCLEtBQUssRUFBRSxDQUFDQztZQUFBQSxjQUFjLEVBQUUsQ0FBVztRQUFBLENBQUM7UUFDN0hDLE1BQU0sRUFBRSxDQUFDO09BQU1OLEtBQUs7Ozs7Ozs7d0ZBQ2Z4Qix1REFBUztZQUFDK0IsT0FBTyxFQUFDLENBQU07WUFBQ1osQ0FBQyxFQUFFLENBQUM7WUFBRWEsSUFBSSxFQUFDLENBQWM7WUFBQ0MsSUFBSSxFQUFDLENBQU07WUFBQ0MsS0FBSyxFQUFDLENBQVE7WUFBQ0MsT0FBTyxFQUFDLENBQWU7Ozs7Ozs7O3FGQUNqRzlCLGtEQUFJO29CQUFDNkIsS0FBSyxFQUFDLENBQVE7b0JBQUNFLEVBQUUsRUFBRSxDQUFDOzs7Ozs7O21HQUNyQmhDLHFEQUFPO3dCQUFDc0IsRUFBRSxFQUFDLENBQUk7d0JBQUNXLElBQUksRUFBQyxDQUFJO3dCQUFDQyxhQUFhLEVBQUUsQ0FBUzs7Ozs7Ozt1R0FDOUN4Qyw2Q0FBSTs7Ozs7Ozs7OztxRkFJWkssbURBQUs7b0JBQUNvQyxTQUFTLEVBQUUsQ0FBQ0M7d0JBQUFBLElBQUksRUFBRSxDQUFRO3dCQUFFQyxFQUFFLEVBQUUsQ0FBSztvQkFBQSxDQUFDO29CQUM3Q1YsT0FBTyxFQUFFLENBQUNTO3dCQUFBQSxJQUFJLEVBQUUsQ0FBTTtvQkFBQSxDQUFDOzs7Ozs7Ozs7OztBQU12QyxDQUFDO01BcEJLakIsTUFBTTtBQXNCWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci5qcz81YjVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dvIGZyb20gJy4vbG9nbydcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge1xuICAgIENvbnRhaW5lciwgXG4gICAgQm94LFxuICAgIExpbmssXG4gICAgU3RhY2ssXG4gICAgSGVhZGluZyxcbiAgICBGbGV4LFxuICAgIE1lbnUsXG4gICAgTWVudUl0ZW0sXG4gICAgTWVudUxpc3QsXG4gICAgTWVudUJ1dHRvbixcbiAgICBJY29uQnV0dG9uLFxuICAgIHVzZUNvbG9yTW9kZVZhbHVlXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBIdW1idXJnZXJJY29ufSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuXG5jb25zdCBMaW5rSXRlbSA9ICh7aHJlZiwgcGF0aCwgY2hpbGRyZW59KSA9PiB7XG4gICAgY29uc3QgYWN0aXZlID0gcGF0aCA9PT0gaHJlZlxuICAgIGNvbnN0IGluYWN0aXZlQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheTIwMCcsICd3aGl0ZUFscGhhLjkwMCcpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgPExpbmsgcD17Mn0gYmc9e2FjdGl2ZSA/ICdnbGFzc1RlYWwnIDogdW5kZWZpbmVkfSBjb2xvcj17YWN0aXZlID8gJyMyMDIwMjMnIDogaW5hY3RpdmVDb2xvcn0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgIClcbn1cblxuY29uc3QgTmF2QmFyID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHsgcGF0aCB9ID0gcHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggcG9zaXRpb249XCJmaXhlZFwiIGFzPVwibmF2XCIgdz1cIjEwMCVcIiBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJyNmZmZmZmY0MCcsICcjMjAyMDIzODAnKX0gc3R5bGU9e3tiYWNrZHJvcEZpbHRlcjogJ2JsdXIoMTBweCd9fVxuICAgICAgICB6SW5kZXg9ezF9IHsuLi5wcm9wc30+XG4gICAgICAgICAgICA8Q29udGFpbmVyIGRpc3BsYXk9XCJmbGV4XCIgcD17Mn0gbWF4Vz1cImNvbnRhaW5lci5tZFwiIHdyYXA9XCJ3cmFwXCIgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIgbXI9ezV9PlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cImxnXCIgbGV0dGVyU3BhY2luZz17J3RpZ2h0ZXInfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXt7YmFzZTogJ2NvbHVtbicsIG1kOiAncm93J319XG4gICAgICAgICAgICAgICAgZGlzcGxheT17e2Jhc2U6ICdub25lJ319XG4gICAgICAgICAgICAgICAgPjwvU3RhY2s+XG5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhciJdLCJuYW1lcyI6WyJMb2dvIiwiTmV4dExpbmsiLCJDb250YWluZXIiLCJCb3giLCJMaW5rIiwiU3RhY2siLCJIZWFkaW5nIiwiRmxleCIsIk1lbnUiLCJNZW51SXRlbSIsIk1lbnVMaXN0IiwiTWVudUJ1dHRvbiIsIkljb25CdXR0b24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkh1bWJ1cmdlckljb24iLCJMaW5rSXRlbSIsInBhdGgiLCJocmVmIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpbmFjdGl2ZUNvbG9yIiwicCIsImJnIiwidW5kZWZpbmVkIiwiY29sb3IiLCJOYXZCYXIiLCJwcm9wcyIsInBvc2l0aW9uIiwiYXMiLCJ3Iiwic3R5bGUiLCJiYWNrZHJvcEZpbHRlciIsInpJbmRleCIsImRpc3BsYXkiLCJtYXhXIiwid3JhcCIsImFsaWduIiwianVzdGlmeSIsIm1yIiwic2l6ZSIsImxldHRlclNwYWNpbmciLCJkaXJlY3Rpb24iLCJiYXNlIiwibWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

});