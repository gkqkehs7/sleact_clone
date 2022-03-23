"use strict";
(self["webpackChunksleact_ts_front"] = self["webpackChunksleact_ts_front"] || []).push([["pages_LogIn_index_tsx"],{

/***/ "./pages/LogIn/index.tsx":
/*!*******************************!*\
  !*** ./pages/LogIn/index.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.ts");
/* harmony import */ var _pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/SignUp/styles */ "./pages/SignUp/styles.tsx");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/fetcher */ "./utils/fetcher.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.mjs");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./config.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









console.log(_config__WEBPACK_IMPORTED_MODULE_6__.backUrl);

var LogIn = function LogIn() {
  _s2();

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_5__["default"])("".concat(_config__WEBPACK_IMPORTED_MODULE_6__.backUrl, "/api/users"), _utils_fetcher__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dedupingInterval: 1000000 //dedupingInterval내에는 cache에서 불러온다

  }),
      userData = _useSWR.data,
      error = _useSWR.error,
      mutate = _useSWR.mutate;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      logInError = _useState2[0],
      setLogInError = _useState2[1];

  var _useInput = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"])(''),
      _useInput2 = _slicedToArray(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"])(''),
      _useInput4 = _slicedToArray(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      errorMsg = _useState4[0],
      onErrorMsg = _useState4[1];

  var onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (e) {
    e.preventDefault();
    setLogInError(false);
    axios__WEBPACK_IMPORTED_MODULE_3___default().post("".concat(_config__WEBPACK_IMPORTED_MODULE_6__.backUrl, "/api/users/login"), {
      email: email,
      password: password
    }, {
      withCredentials: true
    }).then(function (response) {
      console.log(response);
      mutate();
    }).catch(function (error) {
      onErrorMsg(error.response.data);
      setLogInError(true);
    });
  }, [email, password, mutate]);

  if (!error && userData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Redirect, {
      to: "/workspace/sleact/channel/\uC77C\uBC18"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    id: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Header, null, "Sleact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Label, {
    id: "email-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", null, "\uC774\uBA54\uC77C \uC8FC\uC18C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
    type: "email",
    id: "email",
    name: "email",
    value: email,
    onChange: onChangeEmail
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Label, {
    id: "password-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", null, "\uBE44\uBC00\uBC88\uD638"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
    type: "password",
    id: "password",
    name: "password",
    value: password,
    onChange: onChangePassword
  })), logInError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Error, null, errorMsg)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Button, {
    type: "submit"
  }, "\uB85C\uADF8\uC778")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Link, null, "\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
    href: "/signup"
  }, "\uD68C\uC6D0\uAC00\uC785 \uD558\uB7EC\uAC00\uAE30")));
};

_s2(LogIn, "Eq0zN1jZbkSr6uh++63aB2YOJbs=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c = LogIn;
/* harmony default export */ __webpack_exports__["default"] = (LogIn);

var _c;

__webpack_require__.$Refresh$.register(_c, "LogIn");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQyx1REFBRCxRQUFRTSxRQUFSLENBTGpCLENBUEYsZUFjRSxpREFBQyx3REFBRDtBQUFRLFFBQUksRUFBQztBQUFiLDBCQWRGLENBRkYsZUFrQkUsaURBQUMsc0RBQUQsNEZBRUU7QUFBRyxRQUFJLEVBQUM7QUFBUix5REFGRixDQWxCRixDQURGO0FBeUJELENBakVEOztJQUFNWjtVQUtBSiw2Q0FJMkJkLHlEQUNNQTs7O0tBVmpDa0I7QUFtRU4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9wYWdlcy9Mb2dJbi9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZUlucHV0IGZyb20gJ0Bob29rcy91c2VJbnB1dCc7XG5pbXBvcnQgeyBCdXR0b24sIEVycm9yLCBGb3JtLCBIZWFkZXIsIElucHV0LCBMYWJlbCwgTGluayB9IGZyb20gJ0BwYWdlcy9TaWduVXAvc3R5bGVzJztcbmltcG9ydCBmZXRjaGVyIGZyb20gJ0B1dGlscy9mZXRjaGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcblxuaW1wb3J0IHsgYmFja1VybCB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmNvbnNvbGUubG9nKGJhY2tVcmwpO1xuY29uc3QgTG9nSW4gPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBkYXRhOiB1c2VyRGF0YSxcbiAgICBlcnJvcixcbiAgICBtdXRhdGUsXG4gIH0gPSB1c2VTV1IoYCR7YmFja1VybH0vYXBpL3VzZXJzYCwgZmV0Y2hlciwge1xuICAgIGRlZHVwaW5nSW50ZXJ2YWw6IDEwMDAwMDAsIC8vZGVkdXBpbmdJbnRlcnZhbOuCtOyXkOuKlCBjYWNoZeyXkOyEnCDrtojrn6zsmKjri6RcbiAgfSk7XG4gIGNvbnN0IFtsb2dJbkVycm9yLCBzZXRMb2dJbkVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KCcnKTtcbiAgY29uc3QgW2Vycm9yTXNnLCBvbkVycm9yTXNnXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0TG9nSW5FcnJvcihmYWxzZSk7XG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcbiAgICAgICAgICBgJHtiYWNrVXJsfS9hcGkvdXNlcnMvbG9naW5gLFxuICAgICAgICAgIHsgZW1haWwsIHBhc3N3b3JkIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgIG11dGF0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgb25FcnJvck1zZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICBzZXRMb2dJbkVycm9yKHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFtlbWFpbCwgcGFzc3dvcmQsIG11dGF0ZV0sXG4gICk7XG5cbiAgaWYgKCFlcnJvciAmJiB1c2VyRGF0YSkge1xuICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvd29ya3NwYWNlL3NsZWFjdC9jaGFubmVsL+ydvOuwmFwiIC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZGVyPlNsZWFjdDwvSGVhZGVyPlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgPExhYmVsIGlkPVwiZW1haWwtbGFiZWxcIj5cbiAgICAgICAgICA8c3Bhbj7snbTrqZTsnbwg7KO87IaMPC9zcGFuPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIDxMYWJlbCBpZD1cInBhc3N3b3JkLWxhYmVsXCI+XG4gICAgICAgICAgPHNwYW4+67mE67CA67KI7Zi4PC9zcGFuPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2xvZ0luRXJyb3IgJiYgPEVycm9yPntlcnJvck1zZ308L0Vycm9yPn1cbiAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+66Gc6re47J24PC9CdXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgICA8TGluaz5cbiAgICAgICAg7JWE7KeBIO2ajOybkOydtCDslYTri4jsi6DqsIDsmpQ/Jm5ic3A7XG4gICAgICAgIDxhIGhyZWY9XCIvc2lnbnVwXCI+7ZqM7JuQ6rCA7J6FIO2VmOufrOqwgOq4sDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ0luO1xuIl0sIm5hbWVzIjpbInVzZUlucHV0IiwiQnV0dG9uIiwiRXJyb3IiLCJGb3JtIiwiSGVhZGVyIiwiSW5wdXQiLCJMYWJlbCIsIkxpbmsiLCJmZXRjaGVyIiwiYXhpb3MiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJSZWRpcmVjdCIsInVzZVNXUiIsImJhY2tVcmwiLCJjb25zb2xlIiwibG9nIiwiTG9nSW4iLCJkZWR1cGluZ0ludGVydmFsIiwidXNlckRhdGEiLCJkYXRhIiwiZXJyb3IiLCJtdXRhdGUiLCJsb2dJbkVycm9yIiwic2V0TG9nSW5FcnJvciIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsImVycm9yTXNnIiwib25FcnJvck1zZyIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==