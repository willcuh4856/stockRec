"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_willcuh4856_Downloads_AIStock_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_willcuh4856_Downloads_AIStock_main_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_willcuh4856_Downloads_AIStock_main_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_willcuh4856_Downloads_AIStock_main_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_IFTTB_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/IFTTB-1.png */ \"./public/IFTTB-1.png\");\n/* harmony import */ var _stockTicker_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stockTicker.js */ \"./pages/stockTicker.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/willcuh4856/Downloads/AIStock-main/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      animalInput = _useState[0],\n      setAnimalInput = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      result = _useState2[0],\n      setResult = _useState2[1];\n\n  function onSubmit(_x) {\n    return _onSubmit.apply(this, arguments);\n  }\n\n  function _onSubmit() {\n    _onSubmit = (0,_Users_willcuh4856_Downloads_AIStock_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_willcuh4856_Downloads_AIStock_main_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {\n      var response, data, eachStock;\n      return _Users_willcuh4856_Downloads_AIStock_main_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.next = 3;\n              return fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                  animal: animalInput\n                })\n              });\n\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n\n            case 6:\n              data = _context.sent;\n              setResult(\"Stocks according to your search\\n \" + data.result);\n              setAnimalInput(\"\");\n              console.log(data.result);\n              eachStock = data.result.split(\", \"); // eachStock[0]\n              // eachStock[1]\n              // {eachStock[2]}\n              // console.log(eachStock);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _onSubmit.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().div),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"title\", {\n        children: \"OpenAI Quickstart\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css\",\n        integrity: \"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\",\n        crossorigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.googleapis.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\",\n        crossorigin: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@700&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.googleapis.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\",\n        crossorigin: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@700&family=Ubuntu:wght@500&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/dog.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"style\", {\n        children: \"@import url('https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,300&family=Raleway:wght@600&display=swap');\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"main\", {\n      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"top\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"nav\", {\n          className: \"navbar navbar-expand-lg navbar-dark\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"a\", {\n            \"class\": \"navbar-brand\",\n            href: \"/\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n              className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().logo),\n              \"class\": \"logo\",\n              width: \"200px\",\n              height: \"200px\",\n              src: _public_IFTTB_1_png__WEBPACK_IMPORTED_MODULE_5__.default,\n              title: \"\",\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 15\n            }, this), \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: \"col-lg-6\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().bigHeading),\n            children: \"Get stock recommendation based off the news now\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: \"col-lg-6\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"if\",\n            \"class\": \"answers\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n              className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().if),\n              children: \"If\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"form\", {\n              onSubmit: onSubmit,\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"animal\" //placeholder=\"Enter an Industry\"\n                ,\n                placeholder: \"enter an event\",\n                value: animalInput,\n                onChange: function onChange(e) {\n                  return setAnimalInput(e.target.value);\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 94,\n                columnNumber: 17\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n                type: \"submit\",\n                value: \"Generate stocks\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 102,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 93,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().center),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().result),\n            children: [result !== undefined && result.split(\", \")[0] + \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"hr\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n              className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().but),\n              id: \"stock1\",\n              type: \"button\",\n              \"class\": \"btn btn-success\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 114,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n              className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().but),\n              id: \"stock1\",\n              type: \"button\",\n              \"class\": \"btn btn-success\",\n              children: result !== undefined && result.split(\", \")[1]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n              className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().but),\n              id: \"stock2\",\n              type: \"button\",\n              \"class\": \"btn btn-success\",\n              children: result !== undefined && result.split(\", \")[2]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"sISihg7p+TyL8M5EJYpL6MMo2Zc=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEVBQUMsUUFBaEQ7QUFBeUQsdUJBQU0saUJBQS9EO0FBQUEsd0JBQWtGTyxNQUFNLEtBQUsyQixTQUFYLElBQXdCM0IsTUFBTSxDQUFDa0IsS0FBUCxDQUFhLElBQWIsRUFBbUIsQ0FBbkI7QUFBMUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkY7QUEyRkQ7O0dBMUh1QnJCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExvZ28gZnJvbSBcIi9wdWJsaWMvSUZUVEItMS5wbmdcIlxuXG5pbXBvcnQgVGFic3Nob3cgZnJvbSAnLi9zdG9ja1RpY2tlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2FuaW1hbElucHV0LCBzZXRBbmltYWxJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2VuZXJhdGVcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhbmltYWw6IGFuaW1hbElucHV0IH0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHNldFJlc3VsdChcIlN0b2NrcyBhY2NvcmRpbmcgdG8geW91ciBzZWFyY2hcXG4gXCIgKyBkYXRhLnJlc3VsdCk7XG4gICAgc2V0QW5pbWFsSW5wdXQoXCJcIik7XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhLnJlc3VsdClcblxuICAgIGxldCBlYWNoU3RvY2sgPSBkYXRhLnJlc3VsdC5zcGxpdChcIiwgXCIpO1xuXG4gICAgLy8gZWFjaFN0b2NrWzBdXG4gICAgLy8gZWFjaFN0b2NrWzFdXG4gICAgLy8ge2VhY2hTdG9ja1syXX1cbiAgICAvLyBjb25zb2xlLmxvZyhlYWNoU3RvY2spO1xuXG4gIH1cblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZ9PlxuXG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9wZW5BSSBRdWlja3N0YXJ0PC90aXRsZT5cblxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA0LjMuMS9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LWdnT3lSMGlYQ2JNUXYzWGlwbWEzNE1EK2RILzFmUTc4NC9qNmNZL2lKVFFVT2hjV3I3eDlKdm9SeFQyTVp3MVRcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW4gLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXIrU2Fuczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc29yaWdpbiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlcitTYW5zOndnaHRANzAwJmZhbWlseT1VYnVudHU6d2dodEA1MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9kb2cucG5nXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpdGVyYXRhOm9wc3osd2dodEA3Li43MiwzMDAmZmFtaWx5PVJhbGV3YXk6d2dodEA2MDAmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFya1wiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gY2xhc3M9XCJsb2dvXCIgd2lkdGg9XCIyMDBweFwiIGhlaWdodD1cIjIwMHB4XCIgc3JjPXtMb2dvfSB0aXRsZT1cIlwiIGFsdD1cIlwiIC8+IDwvYT5cblxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5iaWdIZWFkaW5nfT5cbiAgICAgICAgICAgICAgR2V0IHN0b2NrIHJlY29tbWVuZGF0aW9uIGJhc2VkIG9mZiB0aGUgbmV3cyBub3dcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpZlwiIGNsYXNzPVwiYW5zd2Vyc1wiPlxuXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5pZn0+SWY8L2gxPlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImFuaW1hbFwiXG4gICAgICAgICAgICAgICAgICAvL3BsYWNlaG9sZGVyPVwiRW50ZXIgYW4gSW5kdXN0cnlcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciBhbiBldmVudFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YW5pbWFsSW5wdXR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFuaW1hbElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHZW5lcmF0ZSBzdG9ja3NcIiAvPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdH0+e3Jlc3VsdCAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdC5zcGxpdChcIiwgXCIpWzBdICsgXCIgXCJ9XG5cbiAgICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgICA8L2hyPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dH0gaWQ9XCJzdG9jazFcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR9IGlkPVwic3RvY2sxXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+e3Jlc3VsdCAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdC5zcGxpdChcIiwgXCIpWzFdfTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dH0gaWQ9XCJzdG9jazJcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj57cmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgcmVzdWx0LnNwbGl0KFwiLCBcIilbMl19PC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG5cblxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cblxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJJbWFnZSIsIkxvZ28iLCJUYWJzc2hvdyIsIkhvbWUiLCJhbmltYWxJbnB1dCIsInNldEFuaW1hbElucHV0IiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbmltYWwiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVhY2hTdG9jayIsInNwbGl0IiwiZGl2IiwibWFpbiIsImxvZ28iLCJiaWdIZWFkaW5nIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2VudGVyIiwidW5kZWZpbmVkIiwiYnV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});