self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ValidateLogin.js":
/*!*************************************!*\
  !*** ./components/ValidateLogin.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\cyber\\Documents\\GitHub\\Readaway\\components\\ValidateLogin.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







var ValidateLogin = function ValidateLogin() {
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
      setFinished = _useState3[1]; //Schema


  var schema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email().required(),
    password: yup__WEBPACK_IMPORTED_MODULE_1__.string().min(6).max(12).required()
  }); // Submit handler

  var formSubmit = function formSubmit(values, _ref) {
    var resetForm = _ref.resetForm;
    var email = values.email,
        password = values.password;
    setError(false); //reset error

    setErrorMessage('');
    setFinished(false); // API call to firebase

    _utils_firebase__WEBPACK_IMPORTED_MODULE_3__.default.auth().signInWithEmailAndPassword(email, password).then(function (response) {
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
      lineNumber: 45,
      columnNumber: 5
    }
  }, error && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Alert, {
    variant: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, errorMessage), finished && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Alert, {
    variant: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 20
    }
  }, "Successfully login in!"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    validationSchema: schema,
    onSubmit: formSubmit,
    initialValues: {
      email: '',
      password: ''
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
        lineNumber: 59,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, __jsx("h2", {
      className: "login",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 19
      }
    }, "Login"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "email",
      controlId: "email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control, {
      type: "email",
      name: "email",
      placeholder: "Email",
      value: values.email,
      isValid: touched.email && !errors.email,
      isInvalid: touched.email && errors.email,
      onChange: handleChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }
    }, errors.email))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "password",
      controlId: "password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }
    }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control, {
      type: "password",
      name: "password",
      placeholder: "Password",
      value: values.password,
      isValid: touched.password && !errors.password,
      isInvalid: touched.password && errors.password,
      onChange: handleChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 21
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }, errors.password)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
      variant: "primary",
      type: "submit",
      className: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 19
      }
    }, "Submit"), ' ', __jsx("a", {
      href: "#",
      "class": "link-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 19
      }
    }, "Don't have an account? Sign up here!")))));
  }));
};

_s(ValidateLogin, "lXo9uJJ9iGVF4Xvb1VTywPMkN08=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = ValidateLogin;
/* harmony default export */ __webpack_exports__["default"] = (ValidateLogin);

var _c;

$RefreshReg$(_c, "ValidateLogin");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WYWxpZGF0ZUxvZ2luLmpzIl0sIm5hbWVzIjpbIlZhbGlkYXRlTG9naW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJmaW5pc2hlZCIsInNldEZpbmlzaGVkIiwic2NoZW1hIiwieXVwIiwic2hhcGUiLCJlbWFpbCIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJtaW4iLCJtYXgiLCJmb3JtU3VibWl0IiwidmFsdWVzIiwicmVzZXRGb3JtIiwiZmlyZWJhc2UiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsInB1c2giLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidXNlciIsInJlZnJlc2hUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFDMUIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFEMEIsa0JBRUFDLCtDQUFRLENBQUMsS0FBRCxDQUZSO0FBQUEsTUFFbkJDLEtBRm1CO0FBQUEsTUFFWkMsUUFGWTs7QUFBQSxtQkFHY0YsK0NBQVEsQ0FBQyxFQUFELENBSHRCO0FBQUEsTUFHbkJHLFlBSG1CO0FBQUEsTUFHTEMsZUFISzs7QUFBQSxtQkFJTUosK0NBQVEsQ0FBQyxLQUFELENBSmQ7QUFBQSxNQUluQkssUUFKbUI7QUFBQSxNQUlUQyxXQUpTLGtCQU0xQjs7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyx1Q0FBQSxHQUFhQyxLQUFiLENBQW1C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QixRQUFSLElBQW9CLENBQUNxQixNQUFNLENBQUNyQixRQUx2QztBQU1FLGVBQVMsRUFBRW9CLE9BQU8sQ0FBQ3BCLFFBQVIsSUFBb0JxQixNQUFNLENBQUNyQixRQU54QztBQU9FLGNBQVEsRUFBRW1CLFlBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBV0UsTUFBQyxrRUFBRDtBQUF1QixVQUFJLEVBQUMsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRSxNQUFNLENBQUNyQixRQURWLENBWEYsQ0FERixFQWdCRSxNQUFDLG1EQUFEO0FBQVEsYUFBTyxFQUFDLFNBQWhCO0FBQTBCLFVBQUksRUFBQyxRQUEvQjtBQUF3QyxlQUFTLEVBQUMsUUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkYsRUFrQlksR0FsQlosRUFtQkU7QUFBRyxVQUFJLEVBQUMsR0FBUjtBQUFZLGVBQU0sY0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FuQkYsQ0FuQkYsQ0FERixDQURGLENBREQ7QUFBQSxHQVJILENBTEYsQ0FERjtBQWtFRCxDQXRHRDs7R0FBTWYsYTtVQUNXRSxrRDs7O0tBRFhGLGE7QUF1R04sK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjk2NWEzNjFhZTRlZDdiNmQwMTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIFJvdywgQ29sLCBDb250YWluZXIsIEJ1dHRvbiwgQWxlcnQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uL3V0aWxzL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFZhbGlkYXRlTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZmluaXNoZWQsIHNldEZpbmlzaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy9TY2hlbWFcclxuICBjb25zdCBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgZW1haWw6IHl1cC5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXHJcbiAgICBwYXNzd29yZDogeXVwLnN0cmluZygpLm1pbig2KS5tYXgoMTIpLnJlcXVpcmVkKClcclxuICB9KTtcclxuXHJcbiAgLy8gU3VibWl0IGhhbmRsZXJcclxuICBjb25zdCBmb3JtU3VibWl0ID0gKHZhbHVlcywgeyByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHZhbHVlcztcclxuICAgIHNldEVycm9yKGZhbHNlKTsgLy9yZXNldCBlcnJvclxyXG4gICAgc2V0RXJyb3JNZXNzYWdlKCcnKTtcclxuICAgIHNldEZpbmlzaGVkKGZhbHNlKTtcclxuICAgIC8vIEFQSSBjYWxsIHRvIGZpcmViYXNlXHJcbiAgICBmaXJlYmFzZVxyXG4gICAgICAuYXV0aCgpXHJcbiAgICAgIC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldEZpbmlzaGVkKHRydWUpO1xyXG4gICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzcG9uc2UudXNlci5yZWZyZXNoVG9rZW4pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICB7LyogU2hvdyBlcnJvcnMgKi99XHJcbiAgICAgIHtlcnJvciAmJiA8QWxlcnQgdmFyaWFudD1cImRhbmdlclwiPntlcnJvck1lc3NhZ2V9PC9BbGVydD59XHJcbiAgICAgIHsvKiBTaG93IHN1Y2Nlc3MqL31cclxuICAgICAge2ZpbmlzaGVkICYmIDxBbGVydCB2YXJpYW50PVwic3VjY2Vzc1wiPlN1Y2Nlc3NmdWxseSBsb2dpbiBpbiE8L0FsZXJ0Pn1cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICBvblN1Ym1pdD17Zm9ybVN1Ym1pdH1cclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJydcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7IGhhbmRsZVN1Ym1pdCwgaGFuZGxlQ2hhbmdlLCB2YWx1ZXMsIHRvdWNoZWQsIGVycm9ycyB9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJsb2dpbl9mb3JtXCIgbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibG9naW5cIj5Mb2dpbjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cImVtYWlsXCIgY29udHJvbElkPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9e3RvdWNoZWQuZW1haWwgJiYgIWVycm9ycy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cInBhc3N3b3JkXCIgY29udHJvbElkPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9e3RvdWNoZWQucGFzc3dvcmQgJiYgIWVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibGluay1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyBTaWduIHVwIGhlcmUhXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0ZUxvZ2luO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9