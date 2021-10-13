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
      password: '',
      confirmPassword: ''
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
        lineNumber: 60,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }, __jsx("h2", {
      className: "login",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 19
      }
    }, "Login"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "email",
      controlId: "email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
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
        lineNumber: 67,
        columnNumber: 21
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }
    }, errors.email))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "password",
      controlId: "password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
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
        lineNumber: 84,
        columnNumber: 21
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }
    }, errors.password)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
      variant: "primary",
      type: "submit",
      className: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 19
      }
    }, "Submit"), ' ', __jsx("a", {
      href: "/Signup",
      "class": "link-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WYWxpZGF0ZUxvZ2luLmpzIl0sIm5hbWVzIjpbIlZhbGlkYXRlTG9naW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJmaW5pc2hlZCIsInNldEZpbmlzaGVkIiwic2NoZW1hIiwieXVwIiwic2hhcGUiLCJlbWFpbCIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJtaW4iLCJtYXgiLCJmb3JtU3VibWl0IiwidmFsdWVzIiwicmVzZXRGb3JtIiwiZmlyZWJhc2UiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsInB1c2giLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidXNlciIsInJlZnJlc2hUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiY29uZmlybVBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFDMUIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFEMEIsa0JBRUFDLCtDQUFRLENBQUMsS0FBRCxDQUZSO0FBQUEsTUFFbkJDLEtBRm1CO0FBQUEsTUFFWkMsUUFGWTs7QUFBQSxtQkFHY0YsK0NBQVEsQ0FBQyxFQUFELENBSHRCO0FBQUEsTUFHbkJHLFlBSG1CO0FBQUEsTUFHTEMsZUFISzs7QUFBQSxtQkFJTUosK0NBQVEsQ0FBQyxLQUFELENBSmQ7QUFBQSxNQUluQkssUUFKbUI7QUFBQSxNQUlUQyxXQUpTLGtCQU0xQjs7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyx1Q0FB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TSxDQUFDSixRQUpoQjtBQUtFLGFBQU8sRUFBRXFCLE9BQU8sQ0FBQ3JCLFFBQVIsSUFBb0IsQ0FBQ3NCLE1BQU0sQ0FBQ3RCLFFBTHZDO0FBTUUsZUFBUyxFQUFFcUIsT0FBTyxDQUFDckIsUUFBUixJQUFvQnNCLE1BQU0sQ0FBQ3RCLFFBTnhDO0FBT0UsY0FBUSxFQUFFb0IsWUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFXRSxNQUFDLGtFQUFEO0FBQXVCLFVBQUksRUFBQyxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dFLE1BQU0sQ0FBQ3RCLFFBRFYsQ0FYRixDQURGLEVBZ0JFLE1BQUMsbURBQUQ7QUFBUSxhQUFPLEVBQUMsU0FBaEI7QUFBMEIsVUFBSSxFQUFDLFFBQS9CO0FBQXdDLGVBQVMsRUFBQyxRQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCRixFQWtCWSxHQWxCWixFQW1CRTtBQUFHLFVBQUksRUFBQyxTQUFSO0FBQWtCLGVBQU0sY0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FuQkYsQ0FuQkYsQ0FERixDQURGLENBREQ7QUFBQSxHQVRILENBTEYsQ0FERjtBQW1FRCxDQXZHRDs7R0FBTWYsYTtVQUNXRSxrRDs7O0tBRFhGLGE7QUF3R04sK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDI5ZDA3MDFmNDM5ZDFhZjJlMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIFJvdywgQ29sLCBDb250YWluZXIsIEJ1dHRvbiwgQWxlcnQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uL3V0aWxzL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFZhbGlkYXRlTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZmluaXNoZWQsIHNldEZpbmlzaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy9TY2hlbWFcclxuICBjb25zdCBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgZW1haWw6IHl1cC5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXHJcbiAgICBwYXNzd29yZDogeXVwLnN0cmluZygpLm1pbig2KS5tYXgoMTIpLnJlcXVpcmVkKClcclxuICB9KTtcclxuXHJcbiAgLy8gU3VibWl0IGhhbmRsZXJcclxuICBjb25zdCBmb3JtU3VibWl0ID0gKHZhbHVlcywgeyByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHZhbHVlcztcclxuICAgIHNldEVycm9yKGZhbHNlKTsgLy9yZXNldCBlcnJvclxyXG4gICAgc2V0RXJyb3JNZXNzYWdlKCcnKTtcclxuICAgIHNldEZpbmlzaGVkKGZhbHNlKTtcclxuICAgIC8vIEFQSSBjYWxsIHRvIGZpcmViYXNlXHJcbiAgICBmaXJlYmFzZVxyXG4gICAgICAuYXV0aCgpXHJcbiAgICAgIC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldEZpbmlzaGVkKHRydWUpO1xyXG4gICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzcG9uc2UudXNlci5yZWZyZXNoVG9rZW4pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICB7LyogU2hvdyBlcnJvcnMgKi99XHJcbiAgICAgIHtlcnJvciAmJiA8QWxlcnQgdmFyaWFudD1cImRhbmdlclwiPntlcnJvck1lc3NhZ2V9PC9BbGVydD59XHJcbiAgICAgIHsvKiBTaG93IHN1Y2Nlc3MqL31cclxuICAgICAge2ZpbmlzaGVkICYmIDxBbGVydCB2YXJpYW50PVwic3VjY2Vzc1wiPlN1Y2Nlc3NmdWxseSBsb2dpbiBpbiE8L0FsZXJ0Pn1cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICBvblN1Ym1pdD17Zm9ybVN1Ym1pdH1cclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICBjb25maXJtUGFzc3dvcmQ6ICcnXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHsoeyBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgdmFsdWVzLCB0b3VjaGVkLCBlcnJvcnMgfSkgPT4gKFxyXG4gICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwibG9naW5fZm9ybVwiIG5vVmFsaWRhdGUgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxvZ2luXCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJlbWFpbFwiIGNvbnRyb2xJZD1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RW1haWw8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkPXt0b3VjaGVkLmVtYWlsICYmICFlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQuZW1haWwgJiYgZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJwYXNzd29yZFwiIGNvbnRyb2xJZD1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkPXt0b3VjaGVkLnBhc3N3b3JkICYmICFlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+eycgJ31cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9TaWdudXBcIiBjbGFzcz1cImxpbmstcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD8gU2lnbiB1cCBoZXJlIVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGVMb2dpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==