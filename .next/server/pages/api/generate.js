"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n  // apiKey: process.env.OPENAI_API_KEY,\n  apiKey: \"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\"\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const completion = await openai.createCompletion(\"text-davinci-001\", {\n    prompt: generatePrompt(req.body.animal),\n    temperature: 0.1,\n    max_tokens: 150\n  });\n  res.status(200).json({\n    result: completion.data.choices[0].text\n  }); //res.status(200).json({ result: \"TESTING\" });  \n}\n\nfunction generatePrompt(animal) {\n  const capitalizedAnimal = animal[0].toUpperCase() + animal.slice(1).toLowerCase();\n  return `Suggest three stock tickers that would do well if the event happens\n\n  Event: oil prices rise\n  Stocks: XLE, XOM, BP\n  Event: bitcoin moons\n  Stocks: COIN, SQ, NVDA\n  Event: genetic modification is successful\n  Stocks: CRSPR, EDIT, BEAM\n  Event: fast food companies are having high success with attracting new markets\n  Stocks: MCD, DPZ, YUM\n  Event: we reach Mars\n  Stocks: SPCE, RKLB, BA\n  Event: war breaks out\n  Stocks: ATK, BA, GD\n  Event: gas prices rise\n  Stocks: TSLA, CVX, DVN\n  Event: covid is cured\n  Stocks: RCL, CCL, NCLH\n  Event: consumers are trying to be healthier\n  Stocks: PTON, SFM, BYND\n  Event: trump wins reelection\n  Stocks: BAC, JPM, NYT\n  Event: consumer spending increases\n  Stocks: NKE, EBAY, AMZN\n  Event: real estate market crashes,\n  Stocks: COST, WMT, REYN\n  Event: inflation increases\n  Stocks: GLD, SLV, VTIP\n  Event: russia loses war\n  Stocks: GOOGL, AAPL, SNP\n  Event: ${capitalizedAnimal}\n  Stocks:`;\n} // `Which stocks to buy if ${capitalizedAnimal}?`\n\n/* `Suggest three good stock tickers to buy today.\n\nIndustry: Energy\nStock Tickers: MPC, CLR, HFC\nIndustry: Materials\nStock Tickers: X, CLF, STLD\nIndustry: Healthcare\nStock Tickers: SAGE, BIO, WBA\nIndustry: Financials\nStock Tickers: UWMC, RKT, VOYA\nIndustry: ${capitalizedAnimal}\nNames:`;  *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNRSxhQUFhLEdBQUcsSUFBSUYsaURBQUosQ0FBa0I7QUFDdEM7QUFDQUcsRUFBQUEsTUFBTSxFQUFFO0FBRjhCLENBQWxCLENBQXRCO0FBSUEsTUFBTUMsTUFBTSxHQUFHLElBQUlILDZDQUFKLENBQWNDLGFBQWQsQ0FBZjtBQUVBLDZCQUFlLDBDQUFnQkcsR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQ3ZDLFFBQU1DLFVBQVUsR0FBRyxNQUFNSCxNQUFNLENBQUNJLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QztBQUNuRUMsSUFBQUEsTUFBTSxFQUFFQyxjQUFjLENBQUNMLEdBQUcsQ0FBQ00sSUFBSixDQUFTQyxNQUFWLENBRDZDO0FBRW5FQyxJQUFBQSxXQUFXLEVBQUUsR0FGc0Q7QUFHbkVDLElBQUFBLFVBQVUsRUFBRTtBQUh1RCxHQUE1QyxDQUF6QjtBQU1BUixFQUFBQSxHQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxJQUFBQSxNQUFNLEVBQUVWLFVBQVUsQ0FBQ1csSUFBWCxDQUFnQkMsT0FBaEIsQ0FBd0IsQ0FBeEIsRUFBMkJDO0FBQXJDLEdBQXJCLEVBUHVDLENBUXZDO0FBQ0Q7O0FBRUQsU0FBU1YsY0FBVCxDQUF3QkUsTUFBeEIsRUFBZ0M7QUFDOUIsUUFBTVMsaUJBQWlCLEdBQ3JCVCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVVLFdBQVYsS0FBMEJWLE1BQU0sQ0FBQ1csS0FBUCxDQUFhLENBQWIsRUFBZ0JDLFdBQWhCLEVBRDVCO0FBRUEsU0FBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXSCxpQkFBa0I7QUFDN0IsVUEvQkU7QUFnQ0QsRUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlLy4vcGFnZXMvYXBpL2dlbmVyYXRlLmpzPzEzZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICAvLyBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxuICBhcGlLZXk6IFwic2stY0RQT2xSS3VjamhJWUZXTWtLUHdUM0JsYmtGSnAzMjg4dkRxb1VrZDZlaWVlVHN6XCJcbn0pO1xuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbihcInRleHQtZGF2aW5jaS0wMDFcIiwge1xuICAgIHByb21wdDogZ2VuZXJhdGVQcm9tcHQocmVxLmJvZHkuYW5pbWFsKSxcbiAgICB0ZW1wZXJhdHVyZTogMC4xLFxuICAgIG1heF90b2tlbnM6IDE1MCxcbiAgfSk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQ6IGNvbXBsZXRpb24uZGF0YS5jaG9pY2VzWzBdLnRleHQgfSk7XG4gIC8vcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQ6IFwiVEVTVElOR1wiIH0pOyAgXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvbXB0KGFuaW1hbCkge1xuICBjb25zdCBjYXBpdGFsaXplZEFuaW1hbCA9XG4gICAgYW5pbWFsWzBdLnRvVXBwZXJDYXNlKCkgKyBhbmltYWwuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIGBTdWdnZXN0IHRocmVlIHN0b2NrIHRpY2tlcnMgdGhhdCB3b3VsZCBkbyB3ZWxsIGlmIHRoZSBldmVudCBoYXBwZW5zXG5cbiAgRXZlbnQ6IG9pbCBwcmljZXMgcmlzZVxuICBTdG9ja3M6IFhMRSwgWE9NLCBCUFxuICBFdmVudDogYml0Y29pbiBtb29uc1xuICBTdG9ja3M6IENPSU4sIFNRLCBOVkRBXG4gIEV2ZW50OiBnZW5ldGljIG1vZGlmaWNhdGlvbiBpcyBzdWNjZXNzZnVsXG4gIFN0b2NrczogQ1JTUFIsIEVESVQsIEJFQU1cbiAgRXZlbnQ6IGZhc3QgZm9vZCBjb21wYW5pZXMgYXJlIGhhdmluZyBoaWdoIHN1Y2Nlc3Mgd2l0aCBhdHRyYWN0aW5nIG5ldyBtYXJrZXRzXG4gIFN0b2NrczogTUNELCBEUFosIFlVTVxuICBFdmVudDogd2UgcmVhY2ggTWFyc1xuICBTdG9ja3M6IFNQQ0UsIFJLTEIsIEJBXG4gIEV2ZW50OiB3YXIgYnJlYWtzIG91dFxuICBTdG9ja3M6IEFUSywgQkEsIEdEXG4gIEV2ZW50OiBnYXMgcHJpY2VzIHJpc2VcbiAgU3RvY2tzOiBUU0xBLCBDVlgsIERWTlxuICBFdmVudDogY292aWQgaXMgY3VyZWRcbiAgU3RvY2tzOiBSQ0wsIENDTCwgTkNMSFxuICBFdmVudDogY29uc3VtZXJzIGFyZSB0cnlpbmcgdG8gYmUgaGVhbHRoaWVyXG4gIFN0b2NrczogUFRPTiwgU0ZNLCBCWU5EXG4gIEV2ZW50OiB0cnVtcCB3aW5zIHJlZWxlY3Rpb25cbiAgU3RvY2tzOiBCQUMsIEpQTSwgTllUXG4gIEV2ZW50OiBjb25zdW1lciBzcGVuZGluZyBpbmNyZWFzZXNcbiAgU3RvY2tzOiBOS0UsIEVCQVksIEFNWk5cbiAgRXZlbnQ6IHJlYWwgZXN0YXRlIG1hcmtldCBjcmFzaGVzLFxuICBTdG9ja3M6IENPU1QsIFdNVCwgUkVZTlxuICBFdmVudDogaW5mbGF0aW9uIGluY3JlYXNlc1xuICBTdG9ja3M6IEdMRCwgU0xWLCBWVElQXG4gIEV2ZW50OiBydXNzaWEgbG9zZXMgd2FyXG4gIFN0b2NrczogR09PR0wsIEFBUEwsIFNOUFxuICBFdmVudDogJHtjYXBpdGFsaXplZEFuaW1hbH1cbiAgU3RvY2tzOmA7XG59XG5cbi8vIGBXaGljaCBzdG9ja3MgdG8gYnV5IGlmICR7Y2FwaXRhbGl6ZWRBbmltYWx9P2BcblxuLyogYFN1Z2dlc3QgdGhyZWUgZ29vZCBzdG9jayB0aWNrZXJzIHRvIGJ1eSB0b2RheS5cblxuSW5kdXN0cnk6IEVuZXJneVxuU3RvY2sgVGlja2VyczogTVBDLCBDTFIsIEhGQ1xuSW5kdXN0cnk6IE1hdGVyaWFsc1xuU3RvY2sgVGlja2VyczogWCwgQ0xGLCBTVExEXG5JbmR1c3RyeTogSGVhbHRoY2FyZVxuU3RvY2sgVGlja2VyczogU0FHRSwgQklPLCBXQkFcbkluZHVzdHJ5OiBGaW5hbmNpYWxzXG5TdG9jayBUaWNrZXJzOiBVV01DLCBSS1QsIFZPWUFcbkluZHVzdHJ5OiAke2NhcGl0YWxpemVkQW5pbWFsfVxuTmFtZXM6YDsgICovXG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJvcGVuYWkiLCJyZXEiLCJyZXMiLCJjb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsInByb21wdCIsImdlbmVyYXRlUHJvbXB0IiwiYm9keSIsImFuaW1hbCIsInRlbXBlcmF0dXJlIiwibWF4X3Rva2VucyIsInN0YXR1cyIsImpzb24iLCJyZXN1bHQiLCJkYXRhIiwiY2hvaWNlcyIsInRleHQiLCJjYXBpdGFsaXplZEFuaW1hbCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/generate.js\n");

/***/ }),

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();