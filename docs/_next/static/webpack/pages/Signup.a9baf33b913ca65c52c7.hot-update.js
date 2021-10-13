self["webpackHotUpdate_N_E"]("pages/Signup",{

/***/ "./components/ValidateSignup.js":
/*!**************************************!*\
  !*** ./components/ValidateSignup.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_cyber_Documents_GitHub_Readaway_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\cyber\\Documents\\GitHub\\Readaway\\components\\ValidateSignup.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);





var ValidateSignup = function ValidateSignup() {
  _s();

  var router = useRouter();

  var _useState = useState(false),
      _useState2 = (0,C_Users_cyber_Documents_GitHub_Readaway_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = (0,C_Users_cyber_Documents_GitHub_Readaway_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = (0,C_Users_cyber_Documents_GitHub_Readaway_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState5, 2),
      finished = _useState6[0],
      setFinished = _useState6[1];

  var schema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_2__.string().email().required(),
    password: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(6).max(12).required(),
    confirmPassword: yup__WEBPACK_IMPORTED_MODULE_2__.string().oneOf([yup__WEBPACK_IMPORTED_MODULE_2__.ref('password'), null], 'Passwords must match').required()
  }); //submit handler

  var submitSignup = function submitSignup(values, _ref) {
    var resetForm = _ref.resetForm;
    var email = values.email,
        password = values.password;
    setError(false); //reset error

    setErrorMessage('');
    setFinished(false);
    var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.createUserWithEmailAndPassword)(auth, email, password).then(function (response) {
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
      lineNumber: 43,
      columnNumber: 5
    }
  }, error && __jsx(Alert, {
    variant: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, errorMessage), finished && __jsx(Alert, {
    variant: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 20
    }
  }, "Successfully login in!"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
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
      lineNumber: 48,
      columnNumber: 7
    }
  }, function (_ref2) {
    var handleSubmit = _ref2.handleSubmit,
        handleChange = _ref2.handleChange,
        values = _ref2.values,
        touched = _ref2.touched,
        errors = _ref2.errors;
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form, {
      className: "login_form",
      noValidate: true,
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }, __jsx("h2", {
      className: "login",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 19
      }
    }, "Signup"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "email",
      controlId: "email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control, {
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
        lineNumber: 65,
        columnNumber: 21
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }
    }, errors.email))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "password",
      controlId: "password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }
    }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control, {
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
        lineNumber: 82,
        columnNumber: 21
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }
    }, errors.password)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "password",
      controlId: "confirmPassword",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 21
      }
    }, "Confirm Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control, {
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
        lineNumber: 98,
        columnNumber: 21
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 21
      }
    }, errors.confirmPassword)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
      variant: "primary",
      type: "submit",
      className: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 19
      }
    }, "Submit")))));
  }));
};

_s(ValidateSignup, "lXo9uJJ9iGVF4Xvb1VTywPMkN08=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WYWxpZGF0ZVNpZ251cC5qcyJdLCJuYW1lcyI6WyJWYWxpZGF0ZVNpZ251cCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImZpbmlzaGVkIiwic2V0RmluaXNoZWQiLCJzY2hlbWEiLCJ5dXAiLCJzaGFwZSIsImVtYWlsIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsIm1pbiIsIm1heCIsImNvbmZpcm1QYXNzd29yZCIsIm9uZU9mIiwic3VibWl0U2lnbnVwIiwidmFsdWVzIiwicmVzZXRGb3JtIiwiYXV0aCIsImdldEF1dGgiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJwdXNoIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInVzZXIiLCJyZWZyZXNoVG9rZW4iLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsInRvdWNoZWQiLCJlcnJvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQzNCLE1BQU1DLE1BQU0sR0FBR0MsU0FBUyxFQUF4Qjs7QUFEMkIsa0JBRURDLFFBQVEsQ0FBQyxLQUFELENBRlA7QUFBQTtBQUFBLE1BRXBCQyxLQUZvQjtBQUFBLE1BRWJDLFFBRmE7O0FBQUEsbUJBR2FGLFFBQVEsQ0FBQyxFQUFELENBSHJCO0FBQUE7QUFBQSxNQUdwQkcsWUFIb0I7QUFBQSxNQUdOQyxlQUhNOztBQUFBLG1CQUlLSixRQUFRLENBQUMsS0FBRCxDQUpiO0FBQUE7QUFBQSxNQUlwQkssUUFKb0I7QUFBQSxNQUlWQyxXQUpVOztBQU0zQixNQUFNQyxNQUFNLEdBQUdDLHVDQUFBLEdBQWFDLEtBQWIsQ0FBbUI7QUFDaENDLFNBQUssRUFBRUYsdUNBQUEsR0FBYUUsS0FBYixHQUFxQkMsUUFBckIsRUFEeUI7QUFFaENDLFlBQVEsRUFBRUosdUNBQUEsR0FBYUssR0FBYixDQUFpQixDQUFqQixFQUFvQkMsR0FBcEIsQ0FBd0IsRUFBeEIsRUFBNEJILFFBQTVCLEVBRnNCO0FBR2hDSSxtQkFBZSxFQUFFUCx1Q0FBQSxHQUVkUSxLQUZjLENBRVIsQ0FBQ1Isb0NBQUEsQ0FBUSxVQUFSLENBQUQsRUFBc0IsSUFBdEIsQ0FGUSxFQUVxQixzQkFGckIsRUFHZEcsUUFIYztBQUhlLEdBQW5CLENBQWYsQ0FOMkIsQ0FlM0I7O0FBQ0EsTUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxRQUEyQjtBQUFBLFFBQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFBQSxRQUN0Q1QsS0FEc0MsR0FDbEJRLE1BRGtCLENBQ3RDUixLQURzQztBQUFBLFFBQy9CRSxRQUQrQixHQUNsQk0sTUFEa0IsQ0FDL0JOLFFBRCtCO0FBRTlDVixZQUFRLENBQUMsS0FBRCxDQUFSLENBRjhDLENBRTdCOztBQUNqQkUsbUJBQWUsQ0FBQyxFQUFELENBQWY7QUFDQUUsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBLFFBQU1jLElBQUksR0FBR0Msc0RBQU8sRUFBcEI7QUFDQUMsaUZBQThCLENBQUNGLElBQUQsRUFBT1YsS0FBUCxFQUFjRSxRQUFkLENBQTlCLENBQ0dXLElBREgsQ0FDUSxVQUFDQyxRQUFELEVBQWM7QUFDbEJsQixpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBYSxlQUFTO0FBQ1RyQixZQUFNLENBQUMyQixJQUFQLENBQVksWUFBWjtBQUNBQyxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCSCxRQUFRLENBQUNJLElBQVQsQ0FBY0MsWUFBNUM7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlQLFFBQVo7QUFDRCxLQVBILFdBUVMsVUFBQ3ZCLEtBQUQsRUFBVztBQUNoQjZCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZOUIsS0FBSyxDQUFDK0IsT0FBbEI7QUFDQTlCLGNBQVEsQ0FBQyxJQUFELENBQVI7QUFDQUUscUJBQWUsQ0FBQ0gsS0FBSyxDQUFDK0IsT0FBUCxDQUFmO0FBQ0QsS0FaSDtBQWFELEdBbkJEOztBQW9CQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRy9CLEtBQUssSUFBSSxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlCRSxZQUF6QixDQUZaLEVBSUdFLFFBQVEsSUFBSSxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUpmLEVBS0UsTUFBQywwQ0FBRDtBQUNFLG9CQUFnQixFQUFFRSxNQURwQjtBQUVFLFlBQVEsRUFBRVUsWUFGWjtBQUdFLGlCQUFhLEVBQUU7QUFDYlAsV0FBSyxFQUFFLEVBRE07QUFFYkUsY0FBUSxFQUFFLEVBRkc7QUFHYkcscUJBQWUsRUFBRTtBQUhKLEtBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRztBQUFBLFFBQUdrQixZQUFILFNBQUdBLFlBQUg7QUFBQSxRQUFpQkMsWUFBakIsU0FBaUJBLFlBQWpCO0FBQUEsUUFBK0JoQixNQUEvQixTQUErQkEsTUFBL0I7QUFBQSxRQUF1Q2lCLE9BQXZDLFNBQXVDQSxPQUF2QztBQUFBLFFBQWdEQyxNQUFoRCxTQUFnREEsTUFBaEQ7QUFBQSxXQUNDLE1BQUMsaURBQUQ7QUFBTSxlQUFTLEVBQUMsWUFBaEI7QUFBNkIsZ0JBQVUsTUFBdkM7QUFBd0MsY0FBUSxFQUFFSCxZQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRSxNQUFDLHVEQUFEO0FBQVksZUFBUyxFQUFDLE9BQXRCO0FBQThCLGVBQVMsRUFBQyxPQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRSxNQUFDLHlEQUFEO0FBQ0UsVUFBSSxFQUFDLE9BRFA7QUFFRSxVQUFJLEVBQUMsT0FGUDtBQUdFLGlCQUFXLEVBQUMsT0FIZDtBQUlFLGNBQVEsRUFBRUMsWUFKWjtBQUtFLFdBQUssRUFBRWhCLE1BQU0sQ0FBQ1IsS0FMaEI7QUFNRSxhQUFPLEVBQUV5QixPQUFPLENBQUN6QixLQUFSLElBQWlCLENBQUMwQixNQUFNLENBQUMxQixLQU5wQztBQU9FLGVBQVMsRUFBRXlCLE9BQU8sQ0FBQ3pCLEtBQVIsSUFBaUIwQixNQUFNLENBQUMxQixLQVByQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFXRSxNQUFDLGtFQUFEO0FBQXVCLFVBQUksRUFBQyxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0cwQixNQUFNLENBQUMxQixLQURWLENBWEYsQ0FGRixDQURGLEVBbUJFLE1BQUMsZ0RBQUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx1REFBRDtBQUFZLGVBQVMsRUFBQyxVQUF0QjtBQUFpQyxlQUFTLEVBQUMsVUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFLE1BQUMseURBQUQ7QUFDRSxVQUFJLEVBQUMsVUFEUDtBQUVFLFVBQUksRUFBQyxVQUZQO0FBR0UsaUJBQVcsRUFBQyxVQUhkO0FBSUUsY0FBUSxFQUFFd0IsWUFKWjtBQUtFLFdBQUssRUFBRWhCLE1BQU0sQ0FBQ04sUUFMaEI7QUFNRSxhQUFPLEVBQUV1QixPQUFPLENBQUN2QixRQUFSLElBQW9CLENBQUN3QixNQUFNLENBQUN4QixRQU52QztBQU9FLGVBQVMsRUFBRXVCLE9BQU8sQ0FBQ3ZCLFFBQVIsSUFBb0J3QixNQUFNLENBQUN4QixRQVB4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFXRSxNQUFDLGtFQUFEO0FBQXVCLFVBQUksRUFBQyxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0d3QixNQUFNLENBQUN4QixRQURWLENBWEYsQ0FERixFQWlCRSxNQUFDLHVEQUFEO0FBQVksZUFBUyxFQUFDLFVBQXRCO0FBQWlDLGVBQVMsRUFBQyxpQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixFQUVFLE1BQUMseURBQUQ7QUFDRSxVQUFJLEVBQUMsVUFEUDtBQUVFLFVBQUksRUFBQyxpQkFGUDtBQUdFLGlCQUFXLEVBQUMsa0JBSGQ7QUFJRSxjQUFRLEVBQUVzQixZQUpaO0FBS0UsV0FBSyxFQUFFaEIsTUFBTSxDQUFDSCxlQUxoQjtBQU1FLGFBQU8sRUFDTG9CLE9BQU8sQ0FBQ3BCLGVBQVIsSUFBMkIsQ0FBQ3FCLE1BQU0sQ0FBQ3JCLGVBUHZDO0FBU0UsZUFBUyxFQUNQb0IsT0FBTyxDQUFDcEIsZUFBUixJQUEyQnFCLE1BQU0sQ0FBQ3JCLGVBVnRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQWVFLE1BQUMsa0VBQUQ7QUFBdUIsVUFBSSxFQUFDLFNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR3FCLE1BQU0sQ0FBQ3JCLGVBRFYsQ0FmRixDQWpCRixFQXFDRSxNQUFDLG1EQUFEO0FBQVEsYUFBTyxFQUFDLFNBQWhCO0FBQTBCLFVBQUksRUFBQyxRQUEvQjtBQUF3QyxlQUFTLEVBQUMsUUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQ0YsQ0FuQkYsQ0FERixDQURGLENBREQ7QUFBQSxHQVRILENBTEYsQ0FERjtBQXFGRCxDQXpIRDs7R0FBTWxCLGM7O0tBQUFBLGM7QUEwSE4sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvU2lnbnVwLmE5YmFmMzNiOTEzY2E2NWM1MmM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHsgRm9ybSwgUm93LCBDb2wsIENvbnRhaW5lciwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgZ2V0QXV0aCwgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcblxyXG5jb25zdCBWYWxpZGF0ZVNpZ251cCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaW5pc2hlZCwgc2V0RmluaXNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgZW1haWw6IHl1cC5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXHJcbiAgICBwYXNzd29yZDogeXVwLnN0cmluZygpLm1pbig2KS5tYXgoMTIpLnJlcXVpcmVkKCksXHJcbiAgICBjb25maXJtUGFzc3dvcmQ6IHl1cFxyXG4gICAgICAuc3RyaW5nKClcclxuICAgICAgLm9uZU9mKFt5dXAucmVmKCdwYXNzd29yZCcpLCBudWxsXSwgJ1Bhc3N3b3JkcyBtdXN0IG1hdGNoJylcclxuICAgICAgLnJlcXVpcmVkKClcclxuICB9KTtcclxuXHJcbiAgLy9zdWJtaXQgaGFuZGxlclxyXG4gIGNvbnN0IHN1Ym1pdFNpZ251cCA9ICh2YWx1ZXMsIHsgcmVzZXRGb3JtIH0pID0+IHtcclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB2YWx1ZXM7XHJcbiAgICBzZXRFcnJvcihmYWxzZSk7IC8vcmVzZXQgZXJyb3JcclxuICAgIHNldEVycm9yTWVzc2FnZSgnJyk7XHJcbiAgICBzZXRGaW5pc2hlZChmYWxzZSk7XHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gICAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0RmluaXNoZWQodHJ1ZSk7XHJcbiAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXNwb25zZS51c2VyLnJlZnJlc2hUb2tlbik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgey8qIFNob3cgZXJyb3JzICovfVxyXG4gICAgICB7ZXJyb3IgJiYgPEFsZXJ0IHZhcmlhbnQ9XCJkYW5nZXJcIj57ZXJyb3JNZXNzYWdlfTwvQWxlcnQ+fVxyXG4gICAgICB7LyogU2hvdyBzdWNjZXNzKi99XHJcbiAgICAgIHtmaW5pc2hlZCAmJiA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5TdWNjZXNzZnVsbHkgbG9naW4gaW4hPC9BbGVydD59XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtzY2hlbWF9XHJcbiAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdFNpZ251cH1cclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICBjb25maXJtUGFzc3dvcmQ6ICcnXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHsoeyBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgdmFsdWVzLCB0b3VjaGVkLCBlcnJvcnMgfSkgPT4gKFxyXG4gICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwibG9naW5fZm9ybVwiIG5vVmFsaWRhdGUgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxvZ2luXCI+U2lnbnVwPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwiZW1haWxcIiBjb250cm9sSWQ9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9e3RvdWNoZWQuZW1haWwgJiYgIWVycm9ycy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwicGFzc3dvcmRcIiBjb250cm9sSWQ9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9e3RvdWNoZWQucGFzc3dvcmQgJiYgIWVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJwYXNzd29yZFwiIGNvbnRyb2xJZD1cImNvbmZpcm1QYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkNvbmZpcm0gUGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVkLmNvbmZpcm1QYXNzd29yZCAmJiAhZXJyb3JzLmNvbmZpcm1QYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hlZC5jb25maXJtUGFzc3dvcmQgJiYgZXJyb3JzLmNvbmZpcm1QYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5jb25maXJtUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRlU2lnbnVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9