"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/page",{

/***/ "(app-pages-browser)/./components/adminForm.tsx":
/*!**********************************!*\
  !*** ./components/adminForm.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction AdminForm() {\n    _s();\n    const [isFormOpen, setIsFormOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [newProduct, setNewProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleCreateButtonClick = ()=>{\n        setIsFormOpen(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"rounded-md bg-indigo-600 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700 mb-10\",\n                onClick: handleCreateButtonClick,\n                children: \"Create\"\n            }, void 0, false, {\n                fileName: \"/Users/sebastiano/Desktop/REACT/NEXT/next-13-ecommerce-main/components/adminForm.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            isFormOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5\"\n            }, void 0, false, {\n                fileName: \"/Users/sebastiano/Desktop/REACT/NEXT/next-13-ecommerce-main/components/adminForm.tsx\",\n                lineNumber: 27,\n                columnNumber: 17\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebastiano/Desktop/REACT/NEXT/next-13-ecommerce-main/components/adminForm.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(AdminForm, \"zmhLOJQW2jbypeinmyeGcUIj6Js=\");\n_c = AdminForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminForm);\nvar _c;\n$RefreshReg$(_c, \"AdminForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYWRtaW5Gb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFdUM7QUFFdkMsU0FBU0U7O0lBQ0wsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdILCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ0ksWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQyxDQUU3QztJQUVBLE1BQU1NLDBCQUEwQjtRQUM1QkgsY0FBYztJQUNsQjtJQUlBLHFCQUNJLDhEQUFDSTs7MEJBQ0csOERBQUNDO2dCQUNHQyxXQUFVO2dCQUNWQyxTQUFTSjswQkFDWjs7Ozs7O1lBSUFKLDJCQUNHLDhEQUFDSztnQkFBSUUsV0FBVTs7Ozs7dUJBR2Y7Ozs7Ozs7QUFHaEI7R0E1QlNSO0tBQUFBO0FBOEJULCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYWRtaW5Gb3JtLnRzeD9iMDFjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBBZG1pbkZvcm0oKSB7XG4gICAgY29uc3QgW2lzRm9ybU9wZW4sIHNldElzRm9ybU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtuZXdQcm9kdWN0LCBzZXROZXdQcm9kdWN0XSA9IHVzZVN0YXRlKHtcbiAgICAgICAgXG4gICAgfSlcblxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZUJ1dHRvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0Zvcm1PcGVuKHRydWUpO1xuICAgIH07XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JvdW5kZWQtbWQgYmctaW5kaWdvLTYwMCBweC01IHB5LTMgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyBob3ZlcjpiZy1pbmRpZ28tNzAwIG1iLTEwJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZUJ1dHRvbkNsaWNrfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIHtpc0Zvcm1PcGVuID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNVwiPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZG1pbkZvcm0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFkbWluRm9ybSIsImlzRm9ybU9wZW4iLCJzZXRJc0Zvcm1PcGVuIiwibmV3UHJvZHVjdCIsInNldE5ld1Byb2R1Y3QiLCJoYW5kbGVDcmVhdGVCdXR0b25DbGljayIsImRpdiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/adminForm.tsx\n"));

/***/ })

});