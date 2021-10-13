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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\cyber\\Documents\\GitHub\\Readaway\\components\\ValidateSignup.js",
    _this = undefined;


var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





var ValidateSignup = function ValidateSignup() {
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
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(auth, email, password).then(function (response) {
      setFinished(true);
      resetForm();
      router.push('/dashboard');
      localStorage.setItem('token', response.user.refreshToken);
      console.log(response);
    })["catch"](function (error) {
      console.log(error.message);
      setError(true);
      setErrorMessage(error.message); // ..
    });
  };

  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
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
      lineNumber: 39,
      columnNumber: 5
    }
  }, function (_ref2) {
    var handleSubmit = _ref2.handleSubmit,
        handleChange = _ref2.handleChange,
        values = _ref2.values,
        touched = _ref2.touched,
        errors = _ref2.errors;
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form, {
      className: "login_form",
      noValidate: true,
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }, __jsx("h2", {
      className: "login",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, "Signup"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
      className: "email",
      controlId: "email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 19
      }
    }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
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
        lineNumber: 56,
        columnNumber: 19
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 19
      }
    }, errors.email))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
      className: "password",
      controlId: "password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 19
      }
    }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
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
        lineNumber: 73,
        columnNumber: 19
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 19
      }
    }, errors.password)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
      className: "password",
      controlId: "confirmPassword",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 19
      }
    }, "Confirm Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
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
        lineNumber: 89,
        columnNumber: 19
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 19
      }
    }, errors.confirmPassword)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
      variant: "primary",
      type: "submit",
      className: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WYWxpZGF0ZVNpZ251cC5qcyJdLCJuYW1lcyI6WyJWYWxpZGF0ZVNpZ251cCIsInNjaGVtYSIsInl1cCIsInNoYXBlIiwiZW1haWwiLCJyZXF1aXJlZCIsInBhc3N3b3JkIiwibWluIiwibWF4IiwiY29uZmlybVBhc3N3b3JkIiwib25lT2YiLCJzdWJtaXRTaWdudXAiLCJ2YWx1ZXMiLCJyZXNldEZvcm0iLCJzZXRFcnJvciIsInNldEVycm9yTWVzc2FnZSIsInNldEZpbmlzaGVkIiwiYXV0aCIsImdldEF1dGgiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJyb3V0ZXIiLCJwdXNoIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInVzZXIiLCJyZWZyZXNoVG9rZW4iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixNQUFNQyxNQUFNLEdBQUdDLHVDQUFBLEdBQWFDLEtBQWIsQ0FBbUI7QUFDaENDLFNBQUssRUFBRUYsdUNBQUEsR0FBYUUsS0FBYixHQUFxQkMsUUFBckIsRUFEeUI7QUFFaENDLFlBQVEsRUFBRUosdUNBQUEsR0FBYUssR0FBYixDQUFpQixDQUFqQixFQUFvQkMsR0FBcEIsQ0FBd0IsRUFBeEIsRUFBNEJILFFBQTVCLEVBRnNCO0FBR2hDSSxtQkFBZSxFQUFFUCx1Q0FBQSxHQUVkUSxLQUZjLENBRVIsQ0FBQ1Isb0NBQUEsQ0FBUSxVQUFSLENBQUQsRUFBc0IsSUFBdEIsQ0FGUSxFQUVxQixzQkFGckIsRUFHZEcsUUFIYztBQUhlLEdBQW5CLENBQWYsQ0FEMkIsQ0FVM0I7O0FBQ0EsTUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxRQUEyQjtBQUFBLFFBQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFBQSxRQUN0Q1QsS0FEc0MsR0FDbEJRLE1BRGtCLENBQ3RDUixLQURzQztBQUFBLFFBQy9CRSxRQUQrQixHQUNsQk0sTUFEa0IsQ0FDL0JOLFFBRCtCO0FBRTlDUSxZQUFRLENBQUMsS0FBRCxDQUFSLENBRjhDLENBRTdCOztBQUNqQkMsbUJBQWUsQ0FBQyxFQUFELENBQWY7QUFDQUMsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBLFFBQU1DLElBQUksR0FBR0Msc0RBQU8sRUFBcEI7QUFDQUMsaUZBQThCLENBQUNGLElBQUQsRUFBT2IsS0FBUCxFQUFjRSxRQUFkLENBQTlCLENBQ0djLElBREgsQ0FDUSxVQUFDQyxRQUFELEVBQWM7QUFDbEJMLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0FILGVBQVM7QUFDVFMsWUFBTSxDQUFDQyxJQUFQLENBQVksWUFBWjtBQUNBQyxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCSixRQUFRLENBQUNLLElBQVQsQ0FBY0MsWUFBNUM7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlSLFFBQVo7QUFDRCxLQVBILFdBUVMsVUFBQ1MsS0FBRCxFQUFXO0FBQ2hCRixhQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBSyxDQUFDQyxPQUFsQjtBQUNBakIsY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNBQyxxQkFBZSxDQUFDZSxLQUFLLENBQUNDLE9BQVAsQ0FBZixDQUhnQixDQUloQjtBQUNELEtBYkg7QUFjRCxHQXBCRDs7QUFxQkEsU0FDRSxNQUFDLDBDQUFEO0FBQ0Usb0JBQWdCLEVBQUU5QixNQURwQjtBQUVFLFlBQVEsRUFBRVUsWUFGWjtBQUdFLGlCQUFhLEVBQUU7QUFDYlAsV0FBSyxFQUFFLEVBRE07QUFFYkUsY0FBUSxFQUFFLEVBRkc7QUFHYkcscUJBQWUsRUFBRTtBQUhKLEtBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRztBQUFBLFFBQUd1QixZQUFILFNBQUdBLFlBQUg7QUFBQSxRQUFpQkMsWUFBakIsU0FBaUJBLFlBQWpCO0FBQUEsUUFBK0JyQixNQUEvQixTQUErQkEsTUFBL0I7QUFBQSxRQUF1Q3NCLE9BQXZDLFNBQXVDQSxPQUF2QztBQUFBLFFBQWdEQyxNQUFoRCxTQUFnREEsTUFBaEQ7QUFBQSxXQUNDLE1BQUMsaURBQUQ7QUFBTSxlQUFTLEVBQUMsWUFBaEI7QUFBNkIsZ0JBQVUsTUFBdkM7QUFBd0MsY0FBUSxFQUFFSCxZQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRSxNQUFDLHVEQUFEO0FBQVksZUFBUyxFQUFDLE9BQXRCO0FBQThCLGVBQVMsRUFBQyxPQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRSxNQUFDLHlEQUFEO0FBQ0UsVUFBSSxFQUFDLE9BRFA7QUFFRSxVQUFJLEVBQUMsT0FGUDtBQUdFLGlCQUFXLEVBQUMsT0FIZDtBQUlFLGNBQVEsRUFBRUMsWUFKWjtBQUtFLFdBQUssRUFBRXJCLE1BQU0sQ0FBQ1IsS0FMaEI7QUFNRSxhQUFPLEVBQUU4QixPQUFPLENBQUM5QixLQUFSLElBQWlCLENBQUMrQixNQUFNLENBQUMvQixLQU5wQztBQU9FLGVBQVMsRUFBRThCLE9BQU8sQ0FBQzlCLEtBQVIsSUFBaUIrQixNQUFNLENBQUMvQixLQVByQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFXRSxNQUFDLGtFQUFEO0FBQXVCLFVBQUksRUFBQyxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0crQixNQUFNLENBQUMvQixLQURWLENBWEYsQ0FGRixDQURGLEVBbUJFLE1BQUMsZ0RBQUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx1REFBRDtBQUFZLGVBQVMsRUFBQyxVQUF0QjtBQUFpQyxlQUFTLEVBQUMsVUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFLE1BQUMseURBQUQ7QUFDRSxVQUFJLEVBQUMsVUFEUDtBQUVFLFVBQUksRUFBQyxVQUZQO0FBR0UsaUJBQVcsRUFBQyxVQUhkO0FBSUUsY0FBUSxFQUFFNkIsWUFKWjtBQUtFLFdBQUssRUFBRXJCLE1BQU0sQ0FBQ04sUUFMaEI7QUFNRSxhQUFPLEVBQUU0QixPQUFPLENBQUM1QixRQUFSLElBQW9CLENBQUM2QixNQUFNLENBQUM3QixRQU52QztBQU9FLGVBQVMsRUFBRTRCLE9BQU8sQ0FBQzVCLFFBQVIsSUFBb0I2QixNQUFNLENBQUM3QixRQVB4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFXRSxNQUFDLGtFQUFEO0FBQXVCLFVBQUksRUFBQyxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0c2QixNQUFNLENBQUM3QixRQURWLENBWEYsQ0FERixFQWlCRSxNQUFDLHVEQUFEO0FBQVksZUFBUyxFQUFDLFVBQXRCO0FBQWlDLGVBQVMsRUFBQyxpQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixFQUVFLE1BQUMseURBQUQ7QUFDRSxVQUFJLEVBQUMsVUFEUDtBQUVFLFVBQUksRUFBQyxpQkFGUDtBQUdFLGlCQUFXLEVBQUMsa0JBSGQ7QUFJRSxjQUFRLEVBQUUyQixZQUpaO0FBS0UsV0FBSyxFQUFFckIsTUFBTSxDQUFDSCxlQUxoQjtBQU1FLGFBQU8sRUFBRXlCLE9BQU8sQ0FBQ3pCLGVBQVIsSUFBMkIsQ0FBQzBCLE1BQU0sQ0FBQzFCLGVBTjlDO0FBT0UsZUFBUyxFQUNQeUIsT0FBTyxDQUFDekIsZUFBUixJQUEyQjBCLE1BQU0sQ0FBQzFCLGVBUnRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQWFFLE1BQUMsa0VBQUQ7QUFBdUIsVUFBSSxFQUFDLFNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRzBCLE1BQU0sQ0FBQzFCLGVBRFYsQ0FiRixDQWpCRixFQW1DRSxNQUFDLG1EQUFEO0FBQVEsYUFBTyxFQUFDLFNBQWhCO0FBQTBCLFVBQUksRUFBQyxRQUEvQjtBQUF3QyxlQUFTLEVBQUMsUUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQ0YsQ0FuQkYsQ0FERixDQURGLENBREQ7QUFBQSxHQVRILENBREY7QUE2RUQsQ0E3R0Q7O0tBQU1ULGM7QUE4R04sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvU2lnbnVwLmQyZmZkOGY5MjQxZDE0YzAyODU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHsgRm9ybSwgUm93LCBDb2wsIENvbnRhaW5lciwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgZ2V0QXV0aCwgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcblxyXG5jb25zdCBWYWxpZGF0ZVNpZ251cCA9ICgpID0+IHtcclxuICBjb25zdCBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgZW1haWw6IHl1cC5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXHJcbiAgICBwYXNzd29yZDogeXVwLnN0cmluZygpLm1pbig2KS5tYXgoMTIpLnJlcXVpcmVkKCksXHJcbiAgICBjb25maXJtUGFzc3dvcmQ6IHl1cFxyXG4gICAgICAuc3RyaW5nKClcclxuICAgICAgLm9uZU9mKFt5dXAucmVmKCdwYXNzd29yZCcpLCBudWxsXSwgJ1Bhc3N3b3JkcyBtdXN0IG1hdGNoJylcclxuICAgICAgLnJlcXVpcmVkKClcclxuICB9KTtcclxuXHJcbiAgLy9zdWJtaXQgaGFuZGxlclxyXG4gIGNvbnN0IHN1Ym1pdFNpZ251cCA9ICh2YWx1ZXMsIHsgcmVzZXRGb3JtIH0pID0+IHtcclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB2YWx1ZXM7XHJcbiAgICBzZXRFcnJvcihmYWxzZSk7IC8vcmVzZXQgZXJyb3JcclxuICAgIHNldEVycm9yTWVzc2FnZSgnJyk7XHJcbiAgICBzZXRGaW5pc2hlZChmYWxzZSk7XHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gICAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0RmluaXNoZWQodHJ1ZSk7XHJcbiAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXNwb25zZS51c2VyLnJlZnJlc2hUb2tlbik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIC8vIC4uXHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtaWtcclxuICAgICAgdmFsaWRhdGlvblNjaGVtYT17c2NoZW1hfVxyXG4gICAgICBvblN1Ym1pdD17c3VibWl0U2lnbnVwfVxyXG4gICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6ICcnXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHsoeyBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgdmFsdWVzLCB0b3VjaGVkLCBlcnJvcnMgfSkgPT4gKFxyXG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImxvZ2luX2Zvcm1cIiBub1ZhbGlkYXRlIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibG9naW5cIj5TaWdudXA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwiZW1haWxcIiBjb250cm9sSWQ9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZD17dG91Y2hlZC5lbWFpbCAmJiAhZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJwYXNzd29yZFwiIGNvbnRyb2xJZD1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkPXt0b3VjaGVkLnBhc3N3b3JkICYmICFlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXt0b3VjaGVkLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cInBhc3N3b3JkXCIgY29udHJvbElkPVwiY29uZmlybVBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkNvbmZpcm0gUGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkPXt0b3VjaGVkLmNvbmZpcm1QYXNzd29yZCAmJiAhZXJyb3JzLmNvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG91Y2hlZC5jb25maXJtUGFzc3dvcmQgJiYgZXJyb3JzLmNvbmZpcm1QYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuY29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybWlrPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRlU2lnbnVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9