"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_LoginPage_js"],{

/***/ "./resources/js/components/Forms/Login/index.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Forms/Login/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function LoginForm() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      "class": "min-h-screen flex items-center justify-center bg-gray-100",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        "class": "w-full max-w-md",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
          "class": "bg-white rounded-lg shadow-md p-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            "class": "flex justify-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
              "class": "text-3xl font-bold mb-8",
              children: "Room Management"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            "class": "space-y-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                "for": "email",
                "class": "block font-medium text-gray-700",
                children: "Email"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                id: "email",
                name: "email",
                type: "email",
                "class": "mt-1 block w-full rounded-md border-gray-300 shadow-md focus:outline-none focus:border-transparent focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                "for": "password",
                "class": "block font-medium text-gray-700",
                children: "Password"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                id: "password",
                name: "password",
                type: "password",
                "class": "mt-1 block w-full rounded-md border-gray-300 shadow-md focus:outline-none focus:border-transparent focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              "class": "flex items-center justify-between",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                "class": "flex items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                  id: "remember_me",
                  name: "remember_me",
                  type: "checkbox",
                  "class": "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                  "for": "remember_me",
                  "class": "ml-2 block text-sm text-gray-900",
                  children: "Remember me"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                "class": "text-sm",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                  href: "#",
                  "class": "font-medium text-indigo-600 hover:text-indigo-500",
                  children: "Forgot your password?"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                type: "submit",
                "class": "w-full px-4 py-2 rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110",
                children: "Sign in"
              })
            })]
          })]
        })
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

/***/ }),

/***/ "./resources/js/components/LoginPage.js":
/*!**********************************************!*\
  !*** ./resources/js/components/LoginPage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Authenticate_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/Authenticate/actions */ "./resources/js/redux/Authenticate/actions.js");
/* harmony import */ var _Forms_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Forms/Login */ "./resources/js/components/Forms/Login/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










function LoginPage() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.authenticateReducer;
  }),
      loader = _useSelector.loader;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();

  var onFinish = function onFinish(values) {
    dispatch({
      type: _redux_Authenticate_actions__WEBPACK_IMPORTED_MODULE_1__["default"].LOGIN,
      payload: {
        'email': values.email,
        'password': values.password,
        'remember': values.remember
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Forms_Login__WEBPACK_IMPORTED_MODULE_2__["default"], {})
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);

/***/ })

}]);