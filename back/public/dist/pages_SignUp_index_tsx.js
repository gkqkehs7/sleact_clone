"use strict";
(self["webpackChunksleact_ts_front"] = self["webpackChunksleact_ts_front"] || []).push([["pages_SignUp_index_tsx"],{

/***/ "./pages/SignUp/index.tsx":
/*!********************************!*\
  !*** ./pages/SignUp/index.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.ts");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/fetcher */ "./utils/fetcher.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.mjs");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./pages/SignUp/styles.tsx");
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










function SignUp() {
  _s2();

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_4__["default"])("".concat(_config__WEBPACK_IMPORTED_MODULE_6__.backUrl, "/api/users"), _utils_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"]),
      userData = _useSWR.data;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      signUpError = _useState2[0],
      setSignUpError = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      signUpSuccess = _useState4[0],
      setSignUpSuccess = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      mismatchError = _useState6[0],
      setMismatchError = _useState6[1];

  var _useInput = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"])(''),
      _useInput2 = _slicedToArray(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"])(''),
      _useInput4 = _slicedToArray(_useInput3, 2),
      nickname = _useInput4[0],
      onChangeNickname = _useInput4[1];

  var _useInput5 = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"])(''),
      _useInput6 = _slicedToArray(_useInput5, 3),
      password = _useInput6[0],
      setPassword = _useInput6[2];

  var _useInput7 = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"])(''),
      _useInput8 = _slicedToArray(_useInput7, 3),
      passwordCheck = _useInput8[0],
      setPasswordCheck = _useInput8[2];

  var onChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (e) {
    setPassword(e.target.value);
    setMismatchError(passwordCheck !== e.target.value);
  }, [passwordCheck, setPassword]);
  var onChangePasswordCheck = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (e) {
    setPasswordCheck(e.target.value);
    setMismatchError(password !== e.target.value);
  }, [password, setPasswordCheck]);
  var onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (e) {
    e.preventDefault();

    if (!nickname || !nickname.trim()) {
      return;
    }

    if (!mismatchError) {
      setSignUpError(false);
      setSignUpSuccess(false);
      axios__WEBPACK_IMPORTED_MODULE_2___default().post("".concat(_config__WEBPACK_IMPORTED_MODULE_6__.backUrl, "/api/users"), {
        email: email,
        nickname: nickname,
        password: password
      }).then(function (response) {
        console.log(response);
        setSignUpSuccess(true);
      }).catch(function (error) {
        var _error$response, _error$response2, _error$response2$data;

        console.log((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data);
        setSignUpError(((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.code) === 403);
      });
    }
  }, [email, nickname, password, mismatchError]);

  if (userData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router__WEBPACK_IMPORTED_MODULE_7__.Redirect, {
      to: "/workspace/sleact/channel/\uC77C\uBC18"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    id: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__.Header, null, "Sleact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__.Form, {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__.Label, {
    id: "email-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "\uC774\uBA54\uC77C \uC8FC\uC18C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__.Input, {
    type: "email",
    id: "email",
    name: "email",
    value: email,
    onChange: onChangeEmail
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__.Label, {
    id: "nickname-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "\uB2C9\uB124\uC784"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__.Input, {
    type: "text",
    id: "nickname",
    name: "nickname",
    value: nickname,
    onChange: onChangeNickname
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__.Label, {
    id: "password-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "\uBE44\uBC00\uBC88\uD638"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__.Input, {
    type: "password",
    id: "password",
    name: "password",
    value: password,
    onChange: onChangePassword
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__.Label, {
    id: "password-check-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__.Input, {
    type: "password",
    id: "password-check",
    name: "password-check",
    value: passwordCheck,
    onChange: onChangePasswordCheck
  })), mismatchError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__.Error, null, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), !nickname && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__.Error, null, "\uB2C9\uB124\uC784\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."), signUpError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__.Error, null, "\uC774\uBBF8 \uAC00\uC785\uB41C \uC774\uBA54\uC77C\uC785\uB2C8\uB2E4."), signUpSuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__.Success, null, "\uD68C\uC6D0\uAC00\uC785\uB418\uC5C8\uC2B5\uB2C8\uB2E4! \uB85C\uADF8\uC778\uD574\uC8FC\uC138\uC694.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__.Button, {
    type: "submit"
  }, "\uD68C\uC6D0\uAC00\uC785")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__.Link, null, "\uC774\uBBF8 \uD68C\uC6D0\uC774\uC2E0\uAC00\uC694?\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    href: "/login"
  }, "\uB85C\uADF8\uC778 \uD558\uB7EC\uAC00\uAE30")));
}

_s2(SignUp, "7B9Gvp8SG0BWI+s/GxmQy2365Fs=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_4__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c = SignUp;
/* harmony default export */ __webpack_exports__["default"] = (SignUp);

var _c;

__webpack_require__.$Refresh$.register(_c, "SignUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFzRSxZQUFRLEVBQUVJO0FBQWhGLElBREYsQ0FGRixDQWJGLGVBbUJFLGlEQUFDLDBDQUFEO0FBQU8sTUFBRSxFQUFDO0FBQVYsa0JBQ0UsdUdBREYsZUFFRSwyRUFDRSxpREFBQywwQ0FBRDtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsTUFBRSxFQUFDLGdCQUZMO0FBR0UsUUFBSSxFQUFDLGdCQUhQO0FBSUUsU0FBSyxFQUFFRixhQUpUO0FBS0UsWUFBUSxFQUFFTTtBQUxaLElBREYsQ0FGRixFQVdHZCxhQUFhLGlCQUFJLGlEQUFDLDBDQUFELDRGQVhwQixFQVlHLENBQUNJLFFBQUQsaUJBQWEsaURBQUMsMENBQUQseUVBWmhCLEVBYUdSLFdBQVcsaUJBQUksaURBQUMsMENBQUQsZ0ZBYmxCLEVBY0dFLGFBQWEsaUJBQUksaURBQUMsNENBQUQsOEdBZHBCLENBbkJGLGVBbUNFLGlEQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDO0FBQWIsZ0NBbkNGLENBRkYsZUF1Q0UsaURBQUMseUNBQUQsK0VBRUU7QUFBRyxRQUFJLEVBQUM7QUFBUixtREFGRixDQXZDRixDQURGO0FBOENEOztJQXBHUUw7VUFDb0JWLDZDQUlJUCx5REFDTUEseURBQ0hBLHlEQUNVQTs7O0tBUnJDaUI7QUFzR1QsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9wYWdlcy9TaWduVXAvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VJbnB1dCBmcm9tICdAaG9va3MvdXNlSW5wdXQnO1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnQHV0aWxzL2ZldGNoZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgeyBGb3JtLCBMYWJlbCwgSW5wdXQsIEJ1dHRvbiwgSGVhZGVyLCBFcnJvciwgU3VjY2VzcywgTGluayB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IGJhY2tVcmwgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5mdW5jdGlvbiBTaWduVXAoKSB7XG4gIGNvbnN0IHsgZGF0YTogdXNlckRhdGEgfSA9IHVzZVNXUihgJHtiYWNrVXJsfS9hcGkvdXNlcnNgLCBmZXRjaGVyKTtcbiAgY29uc3QgW3NpZ25VcEVycm9yLCBzZXRTaWduVXBFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaWduVXBTdWNjZXNzLCBzZXRTaWduVXBTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21pc21hdGNoRXJyb3IsIHNldE1pc21hdGNoRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoJycpO1xuICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlTmlja25hbWVdID0gdXNlSW5wdXQoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsICwgc2V0UGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xuICBjb25zdCBbcGFzc3dvcmRDaGVjaywgLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZUlucHV0KCcnKTtcblxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHNldE1pc21hdGNoRXJyb3IocGFzc3dvcmRDaGVjayAhPT0gZS50YXJnZXQudmFsdWUpO1xuICAgIH0sXG4gICAgW3Bhc3N3b3JkQ2hlY2ssIHNldFBhc3N3b3JkXSxcbiAgKTtcblxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgc2V0UGFzc3dvcmRDaGVjayhlLnRhcmdldC52YWx1ZSk7XG4gICAgICBzZXRNaXNtYXRjaEVycm9yKHBhc3N3b3JkICE9PSBlLnRhcmdldC52YWx1ZSk7XG4gICAgfSxcbiAgICBbcGFzc3dvcmQsIHNldFBhc3N3b3JkQ2hlY2tdLFxuICApO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICghbmlja25hbWUgfHwgIW5pY2tuYW1lLnRyaW0oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIW1pc21hdGNoRXJyb3IpIHtcbiAgICAgICAgc2V0U2lnblVwRXJyb3IoZmFsc2UpO1xuICAgICAgICBzZXRTaWduVXBTdWNjZXNzKGZhbHNlKTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAucG9zdChgJHtiYWNrVXJsfS9hcGkvdXNlcnNgLCB7IGVtYWlsLCBuaWNrbmFtZSwgcGFzc3dvcmQgfSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHNldFNpZ25VcFN1Y2Nlc3ModHJ1ZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZT8uZGF0YSk7XG4gICAgICAgICAgICBzZXRTaWduVXBFcnJvcihlcnJvci5yZXNwb25zZT8uZGF0YT8uY29kZSA9PT0gNDAzKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtlbWFpbCwgbmlja25hbWUsIHBhc3N3b3JkLCBtaXNtYXRjaEVycm9yXSxcbiAgKTtcblxuICBpZiAodXNlckRhdGEpIHtcbiAgICByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL3dvcmtzcGFjZS9zbGVhY3QvY2hhbm5lbC/snbzrsJhcIiAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgPEhlYWRlcj5TbGVhY3Q8L0hlYWRlcj5cbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgIDxMYWJlbCBpZD1cImVtYWlsLWxhYmVsXCI+XG4gICAgICAgICAgPHNwYW4+7J2066mU7J28IOyjvOyGjDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICA8TGFiZWwgaWQ9XCJuaWNrbmFtZS1sYWJlbFwiPlxuICAgICAgICAgIDxzcGFuPuuLieuEpOyehDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuaWNrbmFtZVwiIG5hbWU9XCJuaWNrbmFtZVwiIHZhbHVlPXtuaWNrbmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIDxMYWJlbCBpZD1cInBhc3N3b3JkLWxhYmVsXCI+XG4gICAgICAgICAgPHNwYW4+67mE67CA67KI7Zi4PC9zcGFuPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIDxMYWJlbCBpZD1cInBhc3N3b3JkLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgPHNwYW4+67mE67CA67KI7Zi4IO2ZleyduDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmQtY2hlY2tcIlxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmQtY2hlY2tcIlxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRDaGVja31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmRDaGVja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge21pc21hdGNoRXJyb3IgJiYgPEVycm9yPuu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLjwvRXJyb3I+fVxuICAgICAgICAgIHshbmlja25hbWUgJiYgPEVycm9yPuuLieuEpOyehOydhCDsnoXroKXtlbTso7zshLjsmpQuPC9FcnJvcj59XG4gICAgICAgICAge3NpZ25VcEVycm9yICYmIDxFcnJvcj7snbTrr7gg6rCA7J6F65CcIOydtOuplOydvOyeheuLiOuLpC48L0Vycm9yPn1cbiAgICAgICAgICB7c2lnblVwU3VjY2VzcyAmJiA8U3VjY2Vzcz7tmozsm5DqsIDsnoXrkJjsl4jsirXri4jri6QhIOuhnOq3uOyduO2VtOyjvOyEuOyalC48L1N1Y2Nlc3M+fVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7tmozsm5DqsIDsnoU8L0J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICAgIDxMaW5rPlxuICAgICAgICDsnbTrr7gg7ZqM7JuQ7J207Iug6rCA7JqUPyZuYnNwO1xuICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCI+66Gc6re47J24IO2VmOufrOqwgOq4sDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xuIl0sIm5hbWVzIjpbInVzZUlucHV0IiwiZmV0Y2hlciIsImF4aW9zIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiUmVkaXJlY3QiLCJ1c2VTV1IiLCJGb3JtIiwiTGFiZWwiLCJJbnB1dCIsIkJ1dHRvbiIsIkhlYWRlciIsIkVycm9yIiwiU3VjY2VzcyIsIkxpbmsiLCJiYWNrVXJsIiwiU2lnblVwIiwidXNlckRhdGEiLCJkYXRhIiwic2lnblVwRXJyb3IiLCJzZXRTaWduVXBFcnJvciIsInNpZ25VcFN1Y2Nlc3MiLCJzZXRTaWduVXBTdWNjZXNzIiwibWlzbWF0Y2hFcnJvciIsInNldE1pc21hdGNoRXJyb3IiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJuaWNrbmFtZSIsIm9uQ2hhbmdlTmlja25hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicGFzc3dvcmRDaGVjayIsInNldFBhc3N3b3JkQ2hlY2siLCJvbkNoYW5nZVBhc3N3b3JkIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJjb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==