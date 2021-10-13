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
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\cyber\\Documents\\GitHub\\Readaway\\components\\ValidateSignup.js",
    _this = undefined;


var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



var ValidateSignup = function ValidateSignup() {
  var schema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email().required(),
    password: yup__WEBPACK_IMPORTED_MODULE_1__.string().min(6).max(12).required(),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  });
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    validationSchema: schema,
    onSubmit: formSubmit,
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, function (_ref) {
    var handleSubmit = _ref.handleSubmit,
        handleChange = _ref.handleChange,
        values = _ref.values,
        touched = _ref.touched,
        errors = _ref.errors;
    return __jsx(Form, {
      className: "login_form",
      noValidate: true,
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }, __jsx(Container, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, __jsx(Row, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, __jsx(Col, {
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
    }, "Login"), __jsx(Form.Group, {
      className: "email",
      controlId: "email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, __jsx(Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 19
      }
    }, "Email"), __jsx(Form.Control, {
      type: "email",
      name: "email",
      placeholder: "Email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 19
      }
    }))), __jsx(Col, {
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }
    }, __jsx(Form.Group, {
      className: "password",
      controlId: "password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, __jsx(Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 19
      }
    }, "Password"), __jsx(Form.Control, {
      type: "password",
      name: "password",
      placeholder: "Password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }), __jsx(Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 19
      }
    }, errors.password)), __jsx(Button, {
      variant: "primary",
      type: "submit",
      className: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, "Submit"), ' ', __jsx("a", {
      href: "/Signup",
      "class": "link-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, "Don't have an account? Sign up here!")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WYWxpZGF0ZVNpZ251cC5qcyJdLCJuYW1lcyI6WyJWYWxpZGF0ZVNpZ251cCIsInNjaGVtYSIsInl1cCIsInNoYXBlIiwiZW1haWwiLCJyZXF1aXJlZCIsInBhc3N3b3JkIiwibWluIiwibWF4IiwicGFzc3dvcmRDb25maXJtYXRpb24iLCJZdXAiLCJzdHJpbmciLCJvbmVPZiIsInJlZiIsImZvcm1TdWJtaXQiLCJjb25maXJtUGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZXMiLCJ0b3VjaGVkIiwiZXJyb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLE1BQU1DLE1BQU0sR0FBR0MsdUNBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUNoQ0MsU0FBSyxFQUFFRix1Q0FBQSxHQUFhRSxLQUFiLEdBQXFCQyxRQUFyQixFQUR5QjtBQUVoQ0MsWUFBUSxFQUFFSix1Q0FBQSxHQUFhSyxHQUFiLENBQWlCLENBQWpCLEVBQW9CQyxHQUFwQixDQUF3QixFQUF4QixFQUE0QkgsUUFBNUIsRUFGc0I7QUFHaENJLHdCQUFvQixFQUFFQyxHQUFHLENBQUNDLE1BQUosR0FBYUMsS0FBYixDQUNwQixDQUFDRixHQUFHLENBQUNHLEdBQUosQ0FBUSxVQUFSLENBQUQsRUFBc0IsSUFBdEIsQ0FEb0IsRUFFcEIsc0JBRm9CO0FBSFUsR0FBbkIsQ0FBZjtBQVNBLFNBQ0UsTUFBQywwQ0FBRDtBQUNFLG9CQUFnQixFQUFFWixNQURwQjtBQUVFLFlBQVEsRUFBRWEsVUFGWjtBQUdFLGlCQUFhLEVBQUU7QUFDYlYsV0FBSyxFQUFFLEVBRE07QUFFYkUsY0FBUSxFQUFFLEVBRkc7QUFHYlMscUJBQWUsRUFBRTtBQUhKLEtBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRztBQUFBLFFBQUdDLFlBQUgsUUFBR0EsWUFBSDtBQUFBLFFBQWlCQyxZQUFqQixRQUFpQkEsWUFBakI7QUFBQSxRQUErQkMsTUFBL0IsUUFBK0JBLE1BQS9CO0FBQUEsUUFBdUNDLE9BQXZDLFFBQXVDQSxPQUF2QztBQUFBLFFBQWdEQyxNQUFoRCxRQUFnREEsTUFBaEQ7QUFBQSxXQUNDLE1BQUMsSUFBRDtBQUFNLGVBQVMsRUFBQyxZQUFoQjtBQUE2QixnQkFBVSxNQUF2QztBQUF3QyxjQUFRLEVBQUVKLFlBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxHQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUUsTUFBQyxJQUFELENBQU0sS0FBTjtBQUFZLGVBQVMsRUFBQyxPQUF0QjtBQUE4QixlQUFTLEVBQUMsT0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsSUFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUUsTUFBQyxJQUFELENBQU0sT0FBTjtBQUFjLFVBQUksRUFBQyxPQUFuQjtBQUEyQixVQUFJLEVBQUMsT0FBaEM7QUFBd0MsaUJBQVcsRUFBQyxPQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FGRixDQURGLEVBUUUsTUFBQyxHQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsSUFBRCxDQUFNLEtBQU47QUFBWSxlQUFTLEVBQUMsVUFBdEI7QUFBaUMsZUFBUyxFQUFDLFVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLElBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRSxNQUFDLElBQUQsQ0FBTSxPQUFOO0FBQ0UsVUFBSSxFQUFDLFVBRFA7QUFFRSxVQUFJLEVBQUMsVUFGUDtBQUdFLGlCQUFXLEVBQUMsVUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFPRSxNQUFDLElBQUQsQ0FBTSxPQUFOLENBQWMsUUFBZDtBQUF1QixVQUFJLEVBQUMsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSSxNQUFNLENBQUNkLFFBRFYsQ0FQRixDQURGLEVBWUUsTUFBQyxNQUFEO0FBQVEsYUFBTyxFQUFDLFNBQWhCO0FBQTBCLFVBQUksRUFBQyxRQUEvQjtBQUF3QyxlQUFTLEVBQUMsUUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRixFQWNZLEdBZFosRUFlRTtBQUFHLFVBQUksRUFBQyxTQUFSO0FBQWtCLGVBQU0sY0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FmRixDQVJGLENBREYsQ0FERixDQUREO0FBQUEsR0FUSCxDQURGO0FBOENELENBeEREOztLQUFNTixjO0FBeUROLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1NpZ251cC44MDc3ODU1MmYyYWI0MDJkYzFjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcblxyXG5jb25zdCBWYWxpZGF0ZVNpZ251cCA9ICgpID0+IHtcclxuICBjb25zdCBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgZW1haWw6IHl1cC5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXHJcbiAgICBwYXNzd29yZDogeXVwLnN0cmluZygpLm1pbig2KS5tYXgoMTIpLnJlcXVpcmVkKCksXHJcbiAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogWXVwLnN0cmluZygpLm9uZU9mKFxyXG4gICAgICBbWXVwLnJlZigncGFzc3dvcmQnKSwgbnVsbF0sXHJcbiAgICAgICdQYXNzd29yZHMgbXVzdCBtYXRjaCdcclxuICAgIClcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtaWtcclxuICAgICAgdmFsaWRhdGlvblNjaGVtYT17c2NoZW1hfVxyXG4gICAgICBvblN1Ym1pdD17Zm9ybVN1Ym1pdH1cclxuICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiAnJ1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7KHsgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIHZhbHVlcywgdG91Y2hlZCwgZXJyb3JzIH0pID0+IChcclxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJsb2dpbl9mb3JtXCIgbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPENvbCBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxvZ2luXCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwiZW1haWxcIiBjb250cm9sSWQ9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJwYXNzd29yZFwiIGNvbnRyb2xJZD1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPnsnICd9XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1NpZ251cFwiIGNsYXNzPVwibGluay1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD8gU2lnbiB1cCBoZXJlIVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybWlrPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRlU2lnbnVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9