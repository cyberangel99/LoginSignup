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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\cyber\\Documents\\GitHub\\Readaway\\components\\ValidateSignup.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








var ValidateSignup = function ValidateSignup() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      errorMessage = _useState2[0],
      setErrorMessage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      finished = _useState3[0],
      setFinished = _useState3[1];

  var schema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email().required(),
    password: yup__WEBPACK_IMPORTED_MODULE_1__.string().min(6).max(12).required(),
    confirmPassword: yup__WEBPACK_IMPORTED_MODULE_1__.string().oneOf([yup__WEBPACK_IMPORTED_MODULE_1__.ref('password'), null], 'Passwords must match').required()
  }); //submit handler

  var submitSignup = function submitSignup(values, _ref) {
    var resetForm = _ref.resetForm;
    var email = values.email,
        password = values.password;
    setError(false); //reset error

    setErrorMessage('');
    setFinished(false);
    var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();
    _utils_firebase__WEBPACK_IMPORTED_MODULE_5__.default.auth().createUserWithEmailAndPassword(auth, email, password).then(function (response) {
      setFinished(true);
      resetForm();
      router.push('/dashboard');
      localStorage.setItem('token', response.user.refreshToken);
      console.log(response);
    })["catch"](function (error) {
      console.log(error.message);
      setError(true);
      setErrorMessage(error.message);
    });
  };

  return __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, error && __jsx(Alert, {
    variant: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, errorMessage), finished && __jsx(Alert, {
    variant: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 20
    }
  }, "Successfully login in!"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    validationSchema: schema,
    onSubmit: submitSignup,
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, function (_ref2) {
    var handleSubmit = _ref2.handleSubmit,
        handleChange = _ref2.handleChange,
        values = _ref2.values,
        touched = _ref2.touched,
        errors = _ref2.errors;
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form, {
      className: "login_form",
      noValidate: true,
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }, __jsx("h2", {
      className: "login",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 19
      }
    }, "Signup"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {
      className: "email",
      controlId: "email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {
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
        lineNumber: 70,
        columnNumber: 21
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }
    }, errors.email))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {
      className: "password",
      controlId: "password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }
    }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {
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
        lineNumber: 87,
        columnNumber: 21
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }
    }, errors.password)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {
      className: "password",
      controlId: "confirmPassword",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    }, "Confirm Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {
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
        lineNumber: 103,
        columnNumber: 21
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    }, errors.confirmPassword)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {
      variant: "primary",
      type: "submit",
      className: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 19
      }
    }, "Submit")))));
  }));
};

_s(ValidateSignup, "lXo9uJJ9iGVF4Xvb1VTywPMkN08=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WYWxpZGF0ZVNpZ251cC5qcyJdLCJuYW1lcyI6WyJWYWxpZGF0ZVNpZ251cCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImZpbmlzaGVkIiwic2V0RmluaXNoZWQiLCJzY2hlbWEiLCJ5dXAiLCJzaGFwZSIsImVtYWlsIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsIm1pbiIsIm1heCIsImNvbmZpcm1QYXNzd29yZCIsIm9uZU9mIiwic3VibWl0U2lnbnVwIiwidmFsdWVzIiwicmVzZXRGb3JtIiwiYXV0aCIsImdldEF1dGgiLCJmaXJlYmFzZSIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsInB1c2giLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidXNlciIsInJlZnJlc2hUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFDM0IsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFEMkIsa0JBRURDLCtDQUFRLENBQUMsS0FBRCxDQUZQO0FBQUEsTUFFcEJDLEtBRm9CO0FBQUEsTUFFYkMsUUFGYTs7QUFBQSxtQkFHYUYsK0NBQVEsQ0FBQyxFQUFELENBSHJCO0FBQUEsTUFHcEJHLFlBSG9CO0FBQUEsTUFHTkMsZUFITTs7QUFBQSxtQkFJS0osK0NBQVEsQ0FBQyxLQUFELENBSmI7QUFBQSxNQUlwQkssUUFKb0I7QUFBQSxNQUlWQyxX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dEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBZUUsTUFBQyxrRUFBRDtBQUF1QixVQUFJLEVBQUMsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHc0IsTUFBTSxDQUFDdEIsZUFEVixDQWZGLENBakJGLEVBcUNFLE1BQUMsbURBQUQ7QUFBUSxhQUFPLEVBQUMsU0FBaEI7QUFBMEIsVUFBSSxFQUFDLFFBQS9CO0FBQXdDLGVBQVMsRUFBQyxRQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJDRixDQW5CRixDQURGLENBREYsQ0FERDtBQUFBLEdBVEgsQ0FMRixDQURGO0FBcUZELENBM0hEOztHQUFNbEIsYztVQUNXRSxrRDs7O0tBRFhGLGM7QUE0SE4sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvU2lnbnVwLmRkYTI4ZDJiMDJlZGJlY2ZkMzBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHsgRm9ybSwgUm93LCBDb2wsIENvbnRhaW5lciwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgZ2V0QXV0aCwgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICcuLi91dGlscy9maXJlYmFzZSc7XHJcblxyXG5jb25zdCBWYWxpZGF0ZVNpZ251cCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaW5pc2hlZCwgc2V0RmluaXNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgZW1haWw6IHl1cC5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXHJcbiAgICBwYXNzd29yZDogeXVwLnN0cmluZygpLm1pbig2KS5tYXgoMTIpLnJlcXVpcmVkKCksXHJcbiAgICBjb25maXJtUGFzc3dvcmQ6IHl1cFxyXG4gICAgICAuc3RyaW5nKClcclxuICAgICAgLm9uZU9mKFt5dXAucmVmKCdwYXNzd29yZCcpLCBudWxsXSwgJ1Bhc3N3b3JkcyBtdXN0IG1hdGNoJylcclxuICAgICAgLnJlcXVpcmVkKClcclxuICB9KTtcclxuXHJcbiAgLy9zdWJtaXQgaGFuZGxlclxyXG4gIGNvbnN0IHN1Ym1pdFNpZ251cCA9ICh2YWx1ZXMsIHsgcmVzZXRGb3JtIH0pID0+IHtcclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB2YWx1ZXM7XHJcbiAgICBzZXRFcnJvcihmYWxzZSk7IC8vcmVzZXQgZXJyb3JcclxuICAgIHNldEVycm9yTWVzc2FnZSgnJyk7XHJcbiAgICBzZXRGaW5pc2hlZChmYWxzZSk7XHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gICAgZmlyZWJhc2VcclxuICAgICAgLmF1dGgoKVxyXG4gICAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0RmluaXNoZWQodHJ1ZSk7XHJcbiAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXNwb25zZS51c2VyLnJlZnJlc2hUb2tlbik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgey8qIFNob3cgZXJyb3JzICovfVxyXG4gICAgICB7ZXJyb3IgJiYgPEFsZXJ0IHZhcmlhbnQ9XCJkYW5nZXJcIj57ZXJyb3JNZXNzYWdlfTwvQWxlcnQ+fVxyXG4gICAgICB7LyogU2hvdyBzdWNjZXNzKi99XHJcbiAgICAgIHtmaW5pc2hlZCAmJiA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5TdWNjZXNzZnVsbHkgbG9naW4gaW4hPC9BbGVydD59XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtzY2hlbWF9XHJcbiAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdFNpZ251cH1cclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICBjb25maXJtUGFzc3dvcmQ6ICcnXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHsoeyBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgdmFsdWVzLCB0b3VjaGVkLCBlcnJvcnMgfSkgPT4gKFxyXG4gICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwibG9naW5fZm9ybVwiIG5vVmFsaWRhdGUgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxvZ2luXCI+U2lnbnVwPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwiZW1haWxcIiBjb250cm9sSWQ9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9e3RvdWNoZWQuZW1haWwgJiYgIWVycm9ycy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwicGFzc3dvcmRcIiBjb250cm9sSWQ9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9e3RvdWNoZWQucGFzc3dvcmQgJiYgIWVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJwYXNzd29yZFwiIGNvbnRyb2xJZD1cImNvbmZpcm1QYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkNvbmZpcm0gUGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVkLmNvbmZpcm1QYXNzd29yZCAmJiAhZXJyb3JzLmNvbmZpcm1QYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hlZC5jb25maXJtUGFzc3dvcmQgJiYgZXJyb3JzLmNvbmZpcm1QYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5jb25maXJtUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRlU2lnbnVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9