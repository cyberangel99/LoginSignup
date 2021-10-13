self["webpackHotUpdate_N_E"]("pages/Signup",{

/***/ "./components/ValidateSignup.js":
/*!**************************************!*\
  !*** ./components/ValidateSignup.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\cyber\\Documents\\GitHub\\Readaway\\components\\ValidateSignup.js",
    _this = undefined;


var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




var ValidateSignup = function ValidateSignup() {
  var schema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email().required(),
    password: yup__WEBPACK_IMPORTED_MODULE_1__.string().min(6).max(12).required(),
    confirmPassword: yup__WEBPACK_IMPORTED_MODULE_1__.string().oneOf([yup__WEBPACK_IMPORTED_MODULE_1__.ref('password'), null], 'Passwords must match').required()
  });
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    validationSchema: schema,
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, function (_ref) {
    var handleSubmit = _ref.handleSubmit,
        handleChange = _ref.handleChange,
        values = _ref.values,
        touched = _ref.touched,
        errors = _ref.errors;
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form, {
      className: "login_form",
      noValidate: true,
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 15
      }
    }, __jsx("h2", {
      className: "login",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, "Signup"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
      className: "email",
      controlId: "email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 19
      }
    }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Control, {
      type: "email",
      name: "email",
      placeholder: "Email",
      onChange: handleChange,
      value: values.email,
      isValid: touched.email && !errors.email,
      isInvalid: touched.email && errors.email,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 19
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 19
      }
    }, errors.email))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
      className: "password",
      controlId: "password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 19
      }
    }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Control, {
      type: "password",
      name: "password",
      placeholder: "Password",
      onChange: handleChange,
      value: values.password,
      isValid: touched.password && !errors.password,
      isInvalid: touched.password && errors.password,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 19
      }
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, errors.password), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
      className: "password",
      controlId: "confirmPassword",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 19
      }
    }, "Confirm Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Control, {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Password",
      onChange: handleChange,
      value: values.confirmPassword,
      isValid: touched.confirmPassword && !errors.confirmPassword,
      isInvalid: touched.confirmPassword && errors.confirmPassword,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 19
      }
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }, errors.confirmPassword), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "primary",
      type: "submit",
      className: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, "Submit")))));
  });
};

_c = ValidateSignup;
/* harmony default export */ __webpack_exports__["default"] = (ValidateSignup);

var _c;

$RefreshReg$(_c, "ValidateSignup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WYWxpZGF0ZVNpZ251cC5qcyJdLCJuYW1lcyI6WyJWYWxpZGF0ZVNpZ251cCIsInNjaGVtYSIsInl1cCIsInNoYXBlIiwiZW1haWwiLCJyZXF1aXJlZCIsInBhc3N3b3JkIiwibWluIiwibWF4IiwiY29uZmlybVBhc3N3b3JkIiwib25lT2YiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZXMiLCJ0b3VjaGVkIiwiZXJyb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLE1BQU1DLE1BQU0sR0FBR0MsdUNBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUNoQ0MsU0FBSyxFQUFFRix1Q0FBQSxHQUFhRSxLQUFiLEdBQXFCQyxRQUFyQixFQUR5QjtBQUVoQ0MsWUFBUSxFQUFFSix1Q0FBQSxHQUFhSyxHQUFiLENBQWlCLENBQWpCLEVBQW9CQyxHQUFwQixDQUF3QixFQUF4QixFQUE0QkgsUUFBNUIsRUFGc0I7QUFHaENJLG1CQUFlLEVBQUVQLHVDQUFBLEdBRWRRLEtBRmMsQ0FFUixDQUFDUixvQ0FBQSxDQUFRLFVBQVIsQ0FBRCxFQUFzQixJQUF0QixDQUZRLEVBRXFCLHNCQUZyQixFQUdkRyxRQUhjO0FBSGUsR0FBbkIsQ0FBZjtBQVNBLFNBQ0UsTUFBQywwQ0FBRDtBQUNFLG9CQUFnQixFQUFFSixNQURwQjtBQUVFLGlCQUFhLEVBQUU7QUFDYkcsV0FBSyxFQUFFLEVBRE07QUFFYkUsY0FBUSxFQUFFLEVBRkc7QUFHYkcscUJBQWUsRUFBRTtBQUhKLEtBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRztBQUFBLFFBQUdFLFlBQUgsUUFBR0EsWUFBSDtBQUFBLFFBQWlCQyxZQUFqQixRQUFpQkEsWUFBakI7QUFBQSxRQUErQkMsTUFBL0Is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aUJBRlA7QUFHRSxpQkFBVyxFQUFDLGtCQUhkO0FBSUUsY0FBUSxFQUFFTSxZQUpaO0FBS0UsV0FBSyxFQUFFQyxNQUFNLENBQUNKLGVBTGhCO0FBTUUsYUFBTyxFQUFFSyxPQUFPLENBQUNMLGVBQVIsSUFBMkIsQ0FBQ00sTUFBTSxDQUFDTixlQU45QztBQU9FLGVBQVMsRUFDUEssT0FBTyxDQUFDTCxlQUFSLElBQTJCTSxNQUFNLENBQUNOLGVBUnRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQWpCRixFQStCRSxNQUFDLGtFQUFEO0FBQXVCLFVBQUksRUFBQyxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dNLE1BQU0sQ0FBQ04sZUFEVixDQS9CRixFQWtDRSxNQUFDLG1EQUFEO0FBQVEsYUFBTyxFQUFDLFNBQWhCO0FBQTBCLFVBQUksRUFBQyxRQUEvQjtBQUF3QyxlQUFTLEVBQUMsUUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQ0YsQ0FuQkYsQ0FERixDQURGLENBREQ7QUFBQSxHQVJILENBREY7QUEyRUQsQ0FyRkQ7O0tBQU1ULGM7QUFzRk4sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvU2lnbnVwLjEzZjJlNTAwNDI1NWMwZTllZmY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHsgRm9ybSwgUm93LCBDb2wsIENvbnRhaW5lciwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmNvbnN0IFZhbGlkYXRlU2lnbnVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICBlbWFpbDogeXVwLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSxcclxuICAgIHBhc3N3b3JkOiB5dXAuc3RyaW5nKCkubWluKDYpLm1heCgxMikucmVxdWlyZWQoKSxcclxuICAgIGNvbmZpcm1QYXNzd29yZDogeXVwXHJcbiAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAub25lT2YoW3l1cC5yZWYoJ3Bhc3N3b3JkJyksIG51bGxdLCAnUGFzc3dvcmRzIG11c3QgbWF0Y2gnKVxyXG4gICAgICAucmVxdWlyZWQoKVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1pa1xyXG4gICAgICB2YWxpZGF0aW9uU2NoZW1hPXtzY2hlbWF9XHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIGNvbmZpcm1QYXNzd29yZDogJydcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgeyh7IGhhbmRsZVN1Ym1pdCwgaGFuZGxlQ2hhbmdlLCB2YWx1ZXMsIHRvdWNoZWQsIGVycm9ycyB9KSA9PiAoXHJcbiAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwibG9naW5fZm9ybVwiIG5vVmFsaWRhdGUgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJsb2dpblwiPlNpZ251cDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJlbWFpbFwiIGNvbnRyb2xJZD1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkPXt0b3VjaGVkLmVtYWlsICYmICFlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXt0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cInBhc3N3b3JkXCIgY29udHJvbElkPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9e3RvdWNoZWQucGFzc3dvcmQgJiYgIWVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwicGFzc3dvcmRcIiBjb250cm9sSWQ9XCJjb25maXJtUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+Q29uZmlybSBQYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9e3RvdWNoZWQuY29uZmlybVBhc3N3b3JkICYmICFlcnJvcnMuY29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVkLmNvbmZpcm1QYXNzd29yZCAmJiBlcnJvcnMuY29uZmlybVBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLmNvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICl9XHJcbiAgICA8L0Zvcm1paz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0ZVNpZ251cDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==