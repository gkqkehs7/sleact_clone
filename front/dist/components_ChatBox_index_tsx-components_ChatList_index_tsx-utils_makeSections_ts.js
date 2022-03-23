"use strict";
(self["webpackChunksleact_ts_front"] = self["webpackChunksleact_ts_front"] || []).push([["components_ChatBox_index_tsx-components_ChatList_index_tsx-utils_makeSections_ts"],{

/***/ "./components/Chat/index.tsx":
/*!***********************************!*\
  !*** ./components/Chat/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Chat/styles.tsx");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gravatar */ "./node_modules/gravatar/index.js");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gravatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regexify_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regexify-string */ "./node_modules/regexify-string/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();








var Chat = function Chat(_ref) {
  _s();

  var data = _ref.data;
  var user = 'Sender' in data ? data.Sender : data.User;

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
      workspace = _useParams.workspace;

  var result = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return data.content.startsWith('https://sleact-clone.s3.ap-northeast-2.amazonaws.com/original/') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: "".concat(data.content),
      style: {
        maxHeight: 200
      }
    }) : (0,regexify_string__WEBPACK_IMPORTED_MODULE_4__["default"])({
      input: data.content,
      pattern: /@\[(.+?)]\((\d+?)\)|\n/g,
      decorator: function decorator(match, index) {
        var arr = match.match(/@\[(.+?)]\((\d+?)\)/);

        if (arr) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
            key: match + index,
            to: "/workspace/".concat(workspace, "/dm/").concat(arr[2])
          }, "@", arr[1]);
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", {
          key: index
        });
      }
    });
  }, [workspace, data.content]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.ChatWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "chat-img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: gravatar__WEBPACK_IMPORTED_MODULE_2___default().url(user.email, {
      s: '36px',
      d: 'retro'
    }),
    alt: user.nickname
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "chat-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "chat-user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, user.nickname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_3___default()(data.createdAt).format(':h:mm A'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, result)));
};

_s(Chat, "OKGkO2+xzl1QGtH+BqMIvyp4jpM=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams];
});

_c = Chat;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Chat));

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "Chat");
__webpack_require__.$Refresh$.register(_c2, "%default%");

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

/***/ }),

/***/ "./components/Chat/styles.tsx":
/*!************************************!*\
  !*** ./components/Chat/styles.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatWrapper": function() { return /* binding */ ChatWrapper; }
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var ChatWrapper = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "ec89ap00",
  label: "ChatWrapper"
})( false ? 0 : {
  name: "2yhi1c",
  styles: "display:flex;padding:8px 20px;&:hover{background:#eee;}& .chat-img{display:flex;width:36px;margin-right:8px;& img{width:36px;height:36px;}}& .chat-text{display:flex;flex-wrap:wrap;flex:1;& p{flex:0 0 100%;margin:0;}}& .chat-user{display:flex;flex:0 0 100%;align-items:center;&>b{margin-right:5px;}&>span{font-size:12px;}}& a{text-decoration:none;color:deepskyblue;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW51bWludS9EZXNrdG9wL1Byb2plY3Qvc2xlYWN0L2Zyb250L2NvbXBvbmVudHMvQ2hhdC9zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVxQyIsImZpbGUiOiIvVXNlcnMvbWludW1pbnUvRGVza3RvcC9Qcm9qZWN0L3NsZWFjdC9mcm9udC9jb21wb25lbnRzL0NoYXQvc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGNvbnN0IENoYXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gIH1cbiAgJiAuY2hhdC1pbWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgJiBpbWcge1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgfVxuICB9XG4gICYgLmNoYXQtdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleDogMTtcbiAgICAmIHAge1xuICAgICAgZmxleDogMCAwIDEwMCU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG4gICYgLmNoYXQtdXNlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICYgPiBiIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cbiAgICAmID4gc3BhbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG4gICYgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBkZWVwc2t5Ymx1ZTtcbiAgfVxuYDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

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

/***/ }),

/***/ "./components/ChatBox/index.tsx":
/*!**************************************!*\
  !*** ./components/ChatBox/index.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/ChatBox/styles.tsx");
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.esm.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.mjs");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/fetcher */ "./utils/fetcher.ts");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_mentions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-mentions */ "./node_modules/react-mentions/dist/react-mentions.esm.js");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gravatar */ "./node_modules/gravatar/index.js");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gravatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config */ "./config.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();











var ChatBox = function ChatBox(_ref) {
  _s();

  var chat = _ref.chat,
      onSubmitForm = _ref.onSubmitForm,
      onChangeChat = _ref.onChangeChat,
      placeholder = _ref.placeholder;

  // 공통적으로 쓰이는 component들은 같이 사용해줘야 하기 때문에 onSubmitForm같은거는 props로 전달
  var _useParams = (0,react_router__WEBPACK_IMPORTED_MODULE_8__.useParams)(),
      workspace = _useParams.workspace;

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])("".concat(_config__WEBPACK_IMPORTED_MODULE_7__.backUrl, "/api/users"), _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__["default"]),
      userData = _useSWR.data,
      error = _useSWR.error,
      mutate = _useSWR.mutate;

  var _useSWR2 = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(userData ? "".concat(_config__WEBPACK_IMPORTED_MODULE_7__.backUrl, "/api/workspaces/").concat(workspace, "/members") : null, _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__["default"]),
      memberData = _useSWR2.data;

  var textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (textareaRef.current) {
      (0,autosize__WEBPACK_IMPORTED_MODULE_2__["default"])(textareaRef.current);
    }
  }, []);
  var onKeydownChat = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (!e.shiftKey) {
        e.preventDefault();
        onSubmitForm(e);
      }
    }
  }, [onSubmitForm]);
  var renderSuggestion = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (suggestion, search, highlightedDisplay, index, focus) {
    if (!memberData) return;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.EachMention, {
      focus: focus
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: gravatar__WEBPACK_IMPORTED_MODULE_6___default().url(memberData[index].email, {
        s: '20px',
        d: 'retro'
      }),
      alt: memberData[index].nickname
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, highlightedDisplay));
  }, [memberData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.ChatArea, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: onSubmitForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.MentionsTextarea, {
    value: chat,
    onChange: onChangeChat,
    onKeyDown: onKeydownChat,
    id: "edit-chat",
    placeholder: placeholder,
    inputRef: textareaRef,
    allowSuggestionsAboveCursor: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_mentions__WEBPACK_IMPORTED_MODULE_5__.Mention, {
    appendSpaceOnAdd: true,
    trigger: "@",
    data: (memberData === null || memberData === void 0 ? void 0 : memberData.map(function (v) {
      return {
        id: v.id,
        display: v.nickname
      };
    })) || [],
    renderSuggestion: renderSuggestion
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Toolbox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.SendButton, null, "\uBCF4\uB0B4\uAE30"))));
};

_s(ChatBox, "2VjGKikbeRlnehl6feGhlBTqJ9E=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_8__.useParams, swr__WEBPACK_IMPORTED_MODULE_3__["default"], swr__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = ChatBox;
/* harmony default export */ __webpack_exports__["default"] = (ChatBox);

var _c;

__webpack_require__.$Refresh$.register(_c, "ChatBox");

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

/***/ }),

/***/ "./components/ChatBox/styles.tsx":
/*!***************************************!*\
  !*** ./components/ChatBox/styles.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatArea": function() { return /* binding */ ChatArea; },
/* harmony export */   "Form": function() { return /* binding */ Form; },
/* harmony export */   "MentionsTextarea": function() { return /* binding */ MentionsTextarea; },
/* harmony export */   "Toolbox": function() { return /* binding */ Toolbox; },
/* harmony export */   "SendButton": function() { return /* binding */ SendButton; },
/* harmony export */   "EachMention": function() { return /* binding */ EachMention; }
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var react_mentions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-mentions */ "./node_modules/react-mentions/dist/react-mentions.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


var ChatArea = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e298qi15",
  label: "ChatArea"
})( false ? 0 : {
  name: "ra6cyy",
  styles: "display:flex;width:100%;padding:20px;padding-top:0",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW51bWludS9EZXNrdG9wL1Byb2plY3Qvc2xlYWN0L2Zyb250L2NvbXBvbmVudHMvQ2hhdEJveC9zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdrQyIsImZpbGUiOiIvVXNlcnMvbWludW1pbnUvRGVza3RvcC9Qcm9qZWN0L3NsZWFjdC9mcm9udC9jb21wb25lbnRzL0NoYXRCb3gvc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IE1lbnRpb25zSW5wdXQgfSBmcm9tICdyZWFjdC1tZW50aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBDaGF0QXJlYSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGNvbG9yOiByZ2IoMjksIDI4LCAyOSk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI5LCAyOCwgMjkpO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnRpb25zVGV4dGFyZWEgPSBzdHlsZWQoTWVudGlvbnNJbnB1dClgXG4gIGZvbnQtZmFtaWx5OiBTbGFjay1MYXRvLCBhcHBsZUxvZ28sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogOHB4IDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gICYgc3Ryb25nIHtcbiAgICBiYWNrZ3JvdW5kOiBza3libHVlO1xuICB9XG4gICYgdGV4dGFyZWEge1xuICAgIGhlaWdodDogNDRweDtcbiAgICBwYWRkaW5nOiA5cHggMTBweCAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgJiB1bCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogOXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRvb2xib3ggPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHJnYigyNDgsIDI0OCwgMjQ4KTtcbiAgaGVpZ2h0OiA0MXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VuZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRWFjaE1lbnRpb24gPSBzdHlsZWQuYnV0dG9uPHsgZm9jdXM6IGJvb2xlYW4gfT5gXG4gIHBhZGRpbmc6IDRweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogcmdiKDI4LCAyOSwgMjgpO1xuICB3aWR0aDogMTAwJTtcbiAgJiBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gICR7KHsgZm9jdXMgfSkgPT5cbiAgICBmb2N1cyAmJlxuICAgIGBcbiAgICBiYWNrZ3JvdW5kOiAjMTI2NGEzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgYH07XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Form = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("form",  false ? 0 : {
  target: "e298qi14",
  label: "Form"
})( false ? 0 : {
  name: "33ihw2",
  styles: "color:rgb(29, 28, 29);font-size:15px;width:100%;border-radius:4px;border:1px solid rgb(29, 28, 29)",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW51bWludS9EZXNrdG9wL1Byb2plY3Qvc2xlYWN0L2Zyb250L2NvbXBvbmVudHMvQ2hhdEJveC9zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVUrQiIsImZpbGUiOiIvVXNlcnMvbWludW1pbnUvRGVza3RvcC9Qcm9qZWN0L3NsZWFjdC9mcm9udC9jb21wb25lbnRzL0NoYXRCb3gvc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IE1lbnRpb25zSW5wdXQgfSBmcm9tICdyZWFjdC1tZW50aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBDaGF0QXJlYSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGNvbG9yOiByZ2IoMjksIDI4LCAyOSk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI5LCAyOCwgMjkpO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnRpb25zVGV4dGFyZWEgPSBzdHlsZWQoTWVudGlvbnNJbnB1dClgXG4gIGZvbnQtZmFtaWx5OiBTbGFjay1MYXRvLCBhcHBsZUxvZ28sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogOHB4IDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gICYgc3Ryb25nIHtcbiAgICBiYWNrZ3JvdW5kOiBza3libHVlO1xuICB9XG4gICYgdGV4dGFyZWEge1xuICAgIGhlaWdodDogNDRweDtcbiAgICBwYWRkaW5nOiA5cHggMTBweCAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgJiB1bCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogOXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRvb2xib3ggPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHJnYigyNDgsIDI0OCwgMjQ4KTtcbiAgaGVpZ2h0OiA0MXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VuZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRWFjaE1lbnRpb24gPSBzdHlsZWQuYnV0dG9uPHsgZm9jdXM6IGJvb2xlYW4gfT5gXG4gIHBhZGRpbmc6IDRweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogcmdiKDI4LCAyOSwgMjgpO1xuICB3aWR0aDogMTAwJTtcbiAgJiBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gICR7KHsgZm9jdXMgfSkgPT5cbiAgICBmb2N1cyAmJlxuICAgIGBcbiAgICBiYWNrZ3JvdW5kOiAjMTI2NGEzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgYH07XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var MentionsTextarea = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(react_mentions__WEBPACK_IMPORTED_MODULE_1__.MentionsInput,  false ? 0 : {
  target: "e298qi13",
  label: "MentionsTextarea"
})( false ? 0 : {
  name: "bka2jr",
  styles: "font-family:Slack-Lato,appleLogo,sans-serif;font-size:15px;padding:8px 9px;width:100%;& strong{background:skyblue;}& textarea{height:44px;padding:9px 10px!important;outline:none!important;border-radius:4px!important;resize:none!important;line-height:22px;border:none;}& ul{border:1px solid lightgray;max-height:200px;overflow-y:auto;padding:9px 10px;background:white;border-radius:4px;width:150px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW51bWludS9EZXNrdG9wL1Byb2plY3Qvc2xlYWN0L2Zyb250L2NvbXBvbmVudHMvQ2hhdEJveC9zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCcUQiLCJmaWxlIjoiL1VzZXJzL21pbnVtaW51L0Rlc2t0b3AvUHJvamVjdC9zbGVhY3QvZnJvbnQvY29tcG9uZW50cy9DaGF0Qm94L3N0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBNZW50aW9uc0lucHV0IH0gZnJvbSAncmVhY3QtbWVudGlvbnMnO1xuXG5leHBvcnQgY29uc3QgQ2hhdEFyZWEgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBjb2xvcjogcmdiKDI5LCAyOCwgMjkpO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyOSwgMjgsIDI5KTtcbmA7XG5cbmV4cG9ydCBjb25zdCBNZW50aW9uc1RleHRhcmVhID0gc3R5bGVkKE1lbnRpb25zSW5wdXQpYFxuICBmb250LWZhbWlseTogU2xhY2stTGF0bywgYXBwbGVMb2dvLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDhweCA5cHg7XG4gIHdpZHRoOiAxMDAlO1xuICAmIHN0cm9uZyB7XG4gICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcbiAgfVxuICAmIHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgcGFkZGluZzogOXB4IDEwcHggIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gICYgdWwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDlweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUb29sYm94ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XG4gIGhlaWdodDogNDFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlbmRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEVhY2hNZW50aW9uID0gc3R5bGVkLmJ1dHRvbjx7IGZvY3VzOiBib29sZWFuIH0+YFxuICBwYWRkaW5nOiA0cHggMjBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHJnYigyOCwgMjksIDI4KTtcbiAgd2lkdGg6IDEwMCU7XG4gICYgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAkeyh7IGZvY3VzIH0pID0+XG4gICAgZm9jdXMgJiZcbiAgICBgXG4gICAgYmFja2dyb3VuZDogIzEyNjRhMztcbiAgICBjb2xvcjogd2hpdGU7XG4gIGB9O1xuYDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Toolbox = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e298qi12",
  label: "Toolbox"
})( false ? 0 : {
  name: "13ie2qx",
  styles: "position:relative;background:rgb(248, 248, 248);height:41px;display:flex;border-top:1px solid rgb(221, 221, 221);align-items:center;border-bottom-left-radius:4px;border-bottom-right-radius:4px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW51bWludS9EZXNrdG9wL1Byb2plY3Qvc2xlYWN0L2Zyb250L2NvbXBvbmVudHMvQ2hhdEJveC9zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDaUMiLCJmaWxlIjoiL1VzZXJzL21pbnVtaW51L0Rlc2t0b3AvUHJvamVjdC9zbGVhY3QvZnJvbnQvY29tcG9uZW50cy9DaGF0Qm94L3N0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBNZW50aW9uc0lucHV0IH0gZnJvbSAncmVhY3QtbWVudGlvbnMnO1xuXG5leHBvcnQgY29uc3QgQ2hhdEFyZWEgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBjb2xvcjogcmdiKDI5LCAyOCwgMjkpO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyOSwgMjgsIDI5KTtcbmA7XG5cbmV4cG9ydCBjb25zdCBNZW50aW9uc1RleHRhcmVhID0gc3R5bGVkKE1lbnRpb25zSW5wdXQpYFxuICBmb250LWZhbWlseTogU2xhY2stTGF0bywgYXBwbGVMb2dvLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDhweCA5cHg7XG4gIHdpZHRoOiAxMDAlO1xuICAmIHN0cm9uZyB7XG4gICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcbiAgfVxuICAmIHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgcGFkZGluZzogOXB4IDEwcHggIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gICYgdWwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDlweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUb29sYm94ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XG4gIGhlaWdodDogNDFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlbmRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEVhY2hNZW50aW9uID0gc3R5bGVkLmJ1dHRvbjx7IGZvY3VzOiBib29sZWFuIH0+YFxuICBwYWRkaW5nOiA0cHggMjBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHJnYigyOCwgMjksIDI4KTtcbiAgd2lkdGg6IDEwMCU7XG4gICYgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAkeyh7IGZvY3VzIH0pID0+XG4gICAgZm9jdXMgJiZcbiAgICBgXG4gICAgYmFja2dyb3VuZDogIzEyNjRhMztcbiAgICBjb2xvcjogd2hpdGU7XG4gIGB9O1xuYDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var SendButton = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("button",  false ? 0 : {
  target: "e298qi11",
  label: "SendButton"
})( false ? 0 : {
  name: "xrrdm2",
  styles: "position:absolute;right:5px;top:5px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW51bWludS9EZXNrdG9wL1Byb2plY3Qvc2xlYWN0L2Zyb250L2NvbXBvbmVudHMvQ2hhdEJveC9zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEdUMiLCJmaWxlIjoiL1VzZXJzL21pbnVtaW51L0Rlc2t0b3AvUHJvamVjdC9zbGVhY3QvZnJvbnQvY29tcG9uZW50cy9DaGF0Qm94L3N0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBNZW50aW9uc0lucHV0IH0gZnJvbSAncmVhY3QtbWVudGlvbnMnO1xuXG5leHBvcnQgY29uc3QgQ2hhdEFyZWEgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBjb2xvcjogcmdiKDI5LCAyOCwgMjkpO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyOSwgMjgsIDI5KTtcbmA7XG5cbmV4cG9ydCBjb25zdCBNZW50aW9uc1RleHRhcmVhID0gc3R5bGVkKE1lbnRpb25zSW5wdXQpYFxuICBmb250LWZhbWlseTogU2xhY2stTGF0bywgYXBwbGVMb2dvLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDhweCA5cHg7XG4gIHdpZHRoOiAxMDAlO1xuICAmIHN0cm9uZyB7XG4gICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcbiAgfVxuICAmIHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgcGFkZGluZzogOXB4IDEwcHggIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gICYgdWwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDlweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUb29sYm94ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XG4gIGhlaWdodDogNDFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlbmRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEVhY2hNZW50aW9uID0gc3R5bGVkLmJ1dHRvbjx7IGZvY3VzOiBib29sZWFuIH0+YFxuICBwYWRkaW5nOiA0cHggMjBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHJnYigyOCwgMjksIDI4KTtcbiAgd2lkdGg6IDEwMCU7XG4gICYgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAkeyh7IGZvY3VzIH0pID0+XG4gICAgZm9jdXMgJiZcbiAgICBgXG4gICAgYmFja2dyb3VuZDogIzEyNjRhMztcbiAgICBjb2xvcjogd2hpdGU7XG4gIGB9O1xuYDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var EachMention = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("button",  false ? 0 : {
  target: "e298qi10",
  label: "EachMention"
})("padding:4px 20px;background:transparent;border:none;display:flex;align-items:center;color:rgb(28, 29, 28);width:100%;& img{margin-right:5px;}", function (_ref) {
  var focus = _ref.focus;
  return focus && "\n    background: #1264a3;\n    color: white;\n  ";
}, ";" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW51bWludS9EZXNrdG9wL1Byb2plY3Qvc2xlYWN0L2Zyb250L2NvbXBvbmVudHMvQ2hhdEJveC9zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStENEQiLCJmaWxlIjoiL1VzZXJzL21pbnVtaW51L0Rlc2t0b3AvUHJvamVjdC9zbGVhY3QvZnJvbnQvY29tcG9uZW50cy9DaGF0Qm94L3N0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBNZW50aW9uc0lucHV0IH0gZnJvbSAncmVhY3QtbWVudGlvbnMnO1xuXG5leHBvcnQgY29uc3QgQ2hhdEFyZWEgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBjb2xvcjogcmdiKDI5LCAyOCwgMjkpO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyOSwgMjgsIDI5KTtcbmA7XG5cbmV4cG9ydCBjb25zdCBNZW50aW9uc1RleHRhcmVhID0gc3R5bGVkKE1lbnRpb25zSW5wdXQpYFxuICBmb250LWZhbWlseTogU2xhY2stTGF0bywgYXBwbGVMb2dvLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDhweCA5cHg7XG4gIHdpZHRoOiAxMDAlO1xuICAmIHN0cm9uZyB7XG4gICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcbiAgfVxuICAmIHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgcGFkZGluZzogOXB4IDEwcHggIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gICYgdWwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDlweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUb29sYm94ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XG4gIGhlaWdodDogNDFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlbmRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEVhY2hNZW50aW9uID0gc3R5bGVkLmJ1dHRvbjx7IGZvY3VzOiBib29sZWFuIH0+YFxuICBwYWRkaW5nOiA0cHggMjBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHJnYigyOCwgMjksIDI4KTtcbiAgd2lkdGg6IDEwMCU7XG4gICYgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAkeyh7IGZvY3VzIH0pID0+XG4gICAgZm9jdXMgJiZcbiAgICBgXG4gICAgYmFja2dyb3VuZDogIzEyNjRhMztcbiAgICBjb2xvcjogd2hpdGU7XG4gIGB9O1xuYDtcbiJdfQ== */"));

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

/***/ }),

/***/ "./components/ChatList/index.tsx":
/*!***************************************!*\
  !*** ./components/ChatList/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ "./components/ChatList/styles.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Chat */ "./components/Chat/index.tsx");
/* harmony import */ var react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scrollbars-2 */ "./node_modules/react-custom-scrollbars-2/lib/index.js");
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






var ChatList = function ChatList(_ref) {
  _s2();

  var scrollbarRef = _ref.scrollbarRef,
      isReachingEnd = _ref.isReachingEnd,
      isEmpty = _ref.isEmpty,
      chatData = _ref.chatData,
      setSize = _ref.setSize;
  var onScroll = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (values) {
    // 맨 위에 도달 하였고,           마지막 페이지가 아니고  데이터가 끝이 아닐때
    if (values.scrollTop === 0 && !isReachingEnd && !isEmpty) {
      setSize(function (size) {
        return size + 1;
      }).then(function () {
        var _scrollbarRef$current, _scrollbarRef$current2;

        (_scrollbarRef$current = scrollbarRef.current) === null || _scrollbarRef$current === void 0 ? void 0 : _scrollbarRef$current.scrollTop(((_scrollbarRef$current2 = scrollbarRef.current) === null || _scrollbarRef$current2 === void 0 ? void 0 : _scrollbarRef$current2.getScrollHeight()) - values.scrollHeight);
      });
    }
  }, [scrollbarRef]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_0__.ChatZone, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_3__.Scrollbars, {
    autoHide: true,
    ref: scrollbarRef,
    onScrollFrame: onScroll
  }, Object.entries(chatData).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        date = _ref3[0],
        chats = _ref3[1];

    //객체의 반복문은 Objects.entries로 한다
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_0__.Section, {
      className: "section-".concat(date),
      key: date
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_0__.StickyHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", null, date)), chats.map(function (chat) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Chat__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: chat.id,
        data: chat
      });
    }));
  })));
};

_s2(ChatList, "EfBdFFGza9k3eGlVsnvddhAgPCg=");

_c = ChatList;
/* harmony default export */ __webpack_exports__["default"] = (ChatList);

var _c;

__webpack_require__.$Refresh$.register(_c, "ChatList");

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

/***/ }),

/***/ "./components/ChatList/styles.tsx":
/*!****************************************!*\
  !*** ./components/ChatList/styles.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatZone": function() { return /* binding */ ChatZone; },
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "StickyHeader": function() { return /* binding */ StickyHeader; }
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var ChatZone = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1jqbxcr2",
  label: "ChatZone"
})( false ? 0 : {
  name: "1op36e9",
  styles: "width:100%;display:flex;flex:1",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW51bWludS9EZXNrdG9wL1Byb2plY3Qvc2xlYWN0L2Zyb250L2NvbXBvbmVudHMvQ2hhdExpc3Qvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFa0MiLCJmaWxlIjoiL1VzZXJzL21pbnVtaW51L0Rlc2t0b3AvUHJvamVjdC9zbGVhY3QvZnJvbnQvY29tcG9uZW50cy9DaGF0TGlzdC9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgQ2hhdFpvbmUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0aWNreUhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxNHB4O1xuICAmIGJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgei1pbmRleDogMjtcbiAgICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfbG93LCAyOSwgMjgsIDI5KSwgMC4xMyk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLXNhZi0wKSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xM3B4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Section = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("section",  false ? 0 : {
  target: "e1jqbxcr1",
  label: "Section"
})( false ? 0 : {
  name: "10zp55f",
  styles: "margin-top:20px;border-top:1px solid #eee",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW51bWludS9EZXNrdG9wL1Byb2plY3Qvc2xlYWN0L2Zyb250L2NvbXBvbmVudHMvQ2hhdExpc3Qvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRcUMiLCJmaWxlIjoiL1VzZXJzL21pbnVtaW51L0Rlc2t0b3AvUHJvamVjdC9zbGVhY3QvZnJvbnQvY29tcG9uZW50cy9DaGF0TGlzdC9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgQ2hhdFpvbmUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0aWNreUhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxNHB4O1xuICAmIGJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgei1pbmRleDogMjtcbiAgICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfbG93LCAyOSwgMjgsIDI5KSwgMC4xMyk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLXNhZi0wKSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xM3B4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var StickyHeader = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1jqbxcr0",
  label: "StickyHeader"
})( false ? 0 : {
  name: "16cu5ak",
  styles: "display:flex;justify-content:center;flex:1;width:100%;position:sticky;top:14px;& button{font-weight:bold;font-size:13px;height:28px;line-height:27px;padding:0 16px;z-index:2;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 0 0 1px var(--saf-0),0 1px 3px 0 rgba(0, 0, 0, 0.08);border-radius:24px;position:relative;top:-13px;background:white;border:none;outline:none;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW51bWludS9EZXNrdG9wL1Byb2plY3Qvc2xlYWN0L2Zyb250L2NvbXBvbmVudHMvQ2hhdExpc3Qvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhc0MiLCJmaWxlIjoiL1VzZXJzL21pbnVtaW51L0Rlc2t0b3AvUHJvamVjdC9zbGVhY3QvZnJvbnQvY29tcG9uZW50cy9DaGF0TGlzdC9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgQ2hhdFpvbmUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0aWNreUhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxNHB4O1xuICAmIGJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgei1pbmRleDogMjtcbiAgICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfbG93LCAyOSwgMjgsIDI5KSwgMC4xMyk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLXNhZi0wKSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xM3B4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

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

/***/ }),

/***/ "./utils/makeSections.ts":
/*!*******************************!*\
  !*** ./utils/makeSections.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ makeSection; }
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


function makeSection(chatList) {
  var sections = {};
  chatList.forEach(function (chat) {
    var monthDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(chat.createdAt).format('YYYY-MM-DD');

    if (Array.isArray(sections[monthDate])) {
      sections[monthDate].push(chat);
    } else {
      sections[monthDate] = [chat];
    }
  });
  return sections;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50c19DaGF0Qm94X2luZGV4X3RzeC1jb21wb25lbnRzX0NoYXRMaXN0X2luZGV4X3RzeC11dGlsc19tYWtlU2VjdGlvbnNfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNUyxJQUFnQixHQUFHLFNBQW5CQSxJQUFtQixPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3JDLE1BQU1DLElBQVcsR0FBRyxZQUFZRCxJQUFaLEdBQW1CQSxJQUFJLENBQUNFLE1BQXhCLEdBQWlDRixJQUFJLENBQUNHLElBQTFEOztBQUNBLG1CQUFzQkwsMkRBQVMsRUFBL0I7QUFBQSxNQUFRTSxTQUFSLGNBQVFBLFNBQVI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHZCw4Q0FBTyxDQUNwQjtBQUFBLFdBQ0VTLElBQUksQ0FBQ00sT0FBTCxDQUFhQyxVQUFiLENBQXdCLGdFQUF4QixpQkFDRTtBQUFLLFNBQUcsWUFBS1AsSUFBSSxDQUFDTSxPQUFWLENBQVI7QUFBNkIsV0FBSyxFQUFFO0FBQUVFLGlCQUFTLEVBQUU7QUFBYjtBQUFwQyxNQURGLEdBR0VaLDJEQUFjLENBQUM7QUFDYmEsV0FBSyxFQUFFVCxJQUFJLENBQUNNLE9BREM7QUFFYkksYUFBTyxFQUFFLHlCQUZJO0FBR2JDLGVBSGEscUJBR0hDLEtBSEcsRUFHSUMsS0FISixFQUdXO0FBQ3RCLFlBQU1DLEdBQW9CLEdBQUdGLEtBQUssQ0FBQ0EsS0FBTixDQUFZLHFCQUFaLENBQTdCOztBQUNBLFlBQUlFLEdBQUosRUFBUztBQUNQLDhCQUNFLGlEQUFDLGtEQUFEO0FBQU0sZUFBRyxFQUFFRixLQUFLLEdBQUdDLEtBQW5CO0FBQTBCLGNBQUUsdUJBQWdCVCxTQUFoQixpQkFBZ0NVLEdBQUcsQ0FBQyxDQUFELENBQW5DO0FBQTVCLGtCQUNJQSxHQUFHLENBQUMsQ0FBRCxDQURQLENBREY7QUFL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QUFDRixHQVBEO0FBUUEsU0FBT2dELFFBQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvQ2hhdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9DaGF0L3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9DaGF0Qm94L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL0NoYXRCb3gvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL0NoYXRMaXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL0NoYXRMaXN0L3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vdXRpbHMvbWFrZVNlY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElETSwgSUNoYXQsIElVc2VyIH0gZnJvbSAnQHR5cGluZ3MvZGInO1xuaW1wb3J0IFJlYWN0LCB7IFZGQywgdXNlTWVtbywgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoYXRXcmFwcGVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IGdyYXZhdGFyIGZyb20gJ2dyYXZhdGFyJztcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgcmVnZXhpZnlTdHJpbmcgZnJvbSAncmVnZXhpZnktc3RyaW5nJztcbmltcG9ydCB7IExpbmssIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgYmFja1VybCB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGRhdGE6IElETSB8IElDaGF0O1xufVxuY29uc3QgQ2hhdDogVkZDPFByb3BzPiA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCB1c2VyOiBJVXNlciA9ICdTZW5kZXInIGluIGRhdGEgPyBkYXRhLlNlbmRlciA6IGRhdGEuVXNlcjtcbiAgY29uc3QgeyB3b3Jrc3BhY2UgfSA9IHVzZVBhcmFtczx7IHdvcmtzcGFjZTogc3RyaW5nIH0+KCk7XG5cbiAgY29uc3QgcmVzdWx0ID0gdXNlTWVtbzwoc3RyaW5nIHwgSlNYLkVsZW1lbnQpW10gfCBKU1guRWxlbWVudD4oXG4gICAgKCkgPT5cbiAgICAgIGRhdGEuY29udGVudC5zdGFydHNXaXRoKCdodHRwczovL3NsZWFjdC1jbG9uZS5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tL29yaWdpbmFsLycpID8gKFxuICAgICAgICA8aW1nIHNyYz17YCR7ZGF0YS5jb250ZW50fWB9IHN0eWxlPXt7IG1heEhlaWdodDogMjAwIH19IC8+XG4gICAgICApIDogKFxuICAgICAgICByZWdleGlmeVN0cmluZyh7XG4gICAgICAgICAgaW5wdXQ6IGRhdGEuY29udGVudCxcbiAgICAgICAgICBwYXR0ZXJuOiAvQFxcWyguKz8pXVxcKChcXGQrPylcXCl8XFxuL2csXG4gICAgICAgICAgZGVjb3JhdG9yKG1hdGNoLCBpbmRleCkge1xuICAgICAgICAgICAgY29uc3QgYXJyOiBzdHJpbmdbXSB8IG51bGwgPSBtYXRjaC5tYXRjaCgvQFxcWyguKz8pXVxcKChcXGQrPylcXCkvKSE7XG4gICAgICAgICAgICBpZiAoYXJyKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXttYXRjaCArIGluZGV4fSB0bz17YC93b3Jrc3BhY2UvJHt3b3Jrc3BhY2V9L2RtLyR7YXJyWzJdfWB9PlxuICAgICAgICAgICAgICAgICAgQHthcnJbMV19XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDxiciBrZXk9e2luZGV4fSAvPjtcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICBbd29ya3NwYWNlLCBkYXRhLmNvbnRlbnRdLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPENoYXRXcmFwcGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWltZ1wiPlxuICAgICAgICA8aW1nIHNyYz17Z3JhdmF0YXIudXJsKHVzZXIuZW1haWwsIHsgczogJzM2cHgnLCBkOiAncmV0cm8nIH0pfSBhbHQ9e3VzZXIubmlja25hbWV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC10ZXh0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC11c2VyXCI+XG4gICAgICAgICAgPGI+e3VzZXIubmlja25hbWV9PC9iPlxuICAgICAgICAgIDxzcGFuPntkYXlqcyhkYXRhLmNyZWF0ZWRBdCkuZm9ybWF0KCc6aDptbSBBJyl9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+e3Jlc3VsdH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NoYXRXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhDaGF0KTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGNvbnN0IENoYXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gIH1cbiAgJiAuY2hhdC1pbWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgJiBpbWcge1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgfVxuICB9XG4gICYgLmNoYXQtdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleDogMTtcbiAgICAmIHAge1xuICAgICAgZmxleDogMCAwIDEwMCU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG4gICYgLmNoYXQtdXNlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICYgPiBiIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cbiAgICAmID4gc3BhbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG4gICYgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBkZWVwc2t5Ymx1ZTtcbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIFZGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoYXRBcmVhLCBFYWNoTWVudGlvbiwgRm9ybSwgTWVudGlvbnNUZXh0YXJlYSwgU2VuZEJ1dHRvbiwgVG9vbGJveCB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBhdXRvc2l6ZSBmcm9tICdhdXRvc2l6ZSc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgeyBJVXNlciB9IGZyb20gJ0B0eXBpbmdzL2RiJztcbmltcG9ydCBmZXRjaGVyIGZyb20gJ0B1dGlscy9mZXRjaGVyJztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBNZW50aW9uLCBTdWdnZXN0aW9uRGF0YUl0ZW0gfSBmcm9tICdyZWFjdC1tZW50aW9ucyc7XG5pbXBvcnQgZ3JhdmF0YXIgZnJvbSAnZ3JhdmF0YXInO1xuaW1wb3J0IHsgYmFja1VybCB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoYXQ6IHN0cmluZztcbiAgb25TdWJtaXRGb3JtOiAoZTogYW55KSA9PiB2b2lkO1xuICBvbkNoYW5nZUNoYXQ6IChlOiBhbnkpID0+IHZvaWQ7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xufVxuY29uc3QgQ2hhdEJveDogVkZDPFByb3BzPiA9ICh7IGNoYXQsIG9uU3VibWl0Rm9ybSwgb25DaGFuZ2VDaGF0LCBwbGFjZWhvbGRlciB9KSA9PiB7XG4gIC8vIOqzte2GteyggeycvOuhnCDsk7DsnbTripQgY29tcG9uZW5065Ok7J2AIOqwmeydtCDsgqzsmqntlbTspJjslbwg7ZWY6riwIOuVjOusuOyXkCBvblN1Ym1pdEZvcm3qsJnsnYDqsbDripQgcHJvcHProZwg7KCE64usXG4gIGNvbnN0IHsgd29ya3NwYWNlIH0gPSB1c2VQYXJhbXM8eyB3b3Jrc3BhY2U6IHN0cmluZyB9PigpO1xuICBjb25zdCB7IGRhdGE6IHVzZXJEYXRhLCBlcnJvciwgbXV0YXRlIH0gPSB1c2VTV1I8SVVzZXIgfCBmYWxzZT4oYCR7YmFja1VybH0vYXBpL3VzZXJzYCwgZmV0Y2hlcik7XG4gIGNvbnN0IHsgZGF0YTogbWVtYmVyRGF0YSB9ID0gdXNlU1dSPElVc2VyW10+KFxuICAgIHVzZXJEYXRhID8gYCR7YmFja1VybH0vYXBpL3dvcmtzcGFjZXMvJHt3b3Jrc3BhY2V9L21lbWJlcnNgIDogbnVsbCxcbiAgICBmZXRjaGVyLFxuICApO1xuXG4gIGNvbnN0IHRleHRhcmVhUmVmID0gdXNlUmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0ZXh0YXJlYVJlZi5jdXJyZW50KSB7XG4gICAgICBhdXRvc2l6ZSh0ZXh0YXJlYVJlZi5jdXJyZW50KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbktleWRvd25DaGF0ID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghZS5zaGlmdEtleSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBvblN1Ym1pdEZvcm0oZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtvblN1Ym1pdEZvcm1dLFxuICApO1xuXG4gIGNvbnN0IHJlbmRlclN1Z2dlc3Rpb24gPSB1c2VDYWxsYmFjayhcbiAgICAoXG4gICAgICBzdWdnZXN0aW9uOiBTdWdnZXN0aW9uRGF0YUl0ZW0sXG4gICAgICBzZWFyY2g6IHN0cmluZyxcbiAgICAgIGhpZ2hsaWdodGVkRGlzcGxheTogUmVhY3QuUmVhY3ROb2RlLFxuICAgICAgaW5kZXg6IG51bWJlcixcbiAgICAgIGZvY3VzOiBib29sZWFuLFxuICAgICk6IFJlYWN0LlJlYWN0Tm9kZSA9PiB7XG4gICAgICBpZiAoIW1lbWJlckRhdGEpIHJldHVybjtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxFYWNoTWVudGlvbiBmb2N1cz17Zm9jdXN9PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17Z3JhdmF0YXIudXJsKG1lbWJlckRhdGFbaW5kZXhdLmVtYWlsLCB7IHM6ICcyMHB4JywgZDogJ3JldHJvJyB9KX1cbiAgICAgICAgICAgIGFsdD17bWVtYmVyRGF0YVtpbmRleF0ubmlja25hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3Bhbj57aGlnaGxpZ2h0ZWREaXNwbGF5fTwvc3Bhbj5cbiAgICAgICAgPC9FYWNoTWVudGlvbj5cbiAgICAgICk7XG4gICAgfSxcbiAgICBbbWVtYmVyRGF0YV0sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhdEFyZWE+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXRGb3JtfT5cbiAgICAgICAgPE1lbnRpb25zVGV4dGFyZWFcbiAgICAgICAgICB2YWx1ZT17Y2hhdH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDaGF0fVxuICAgICAgICAgIG9uS2V5RG93bj17b25LZXlkb3duQ2hhdH1cbiAgICAgICAgICBpZD1cImVkaXQtY2hhdFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIGlucHV0UmVmPXt0ZXh0YXJlYVJlZn1cbiAgICAgICAgICBhbGxvd1N1Z2dlc3Rpb25zQWJvdmVDdXJzb3JcbiAgICAgICAgPlxuICAgICAgICAgIDxNZW50aW9uXG4gICAgICAgICAgICBhcHBlbmRTcGFjZU9uQWRkXG4gICAgICAgICAgICB0cmlnZ2VyPVwiQFwiXG4gICAgICAgICAgICBkYXRhPXttZW1iZXJEYXRhPy5tYXAoKHYpID0+ICh7IGlkOiB2LmlkLCBkaXNwbGF5OiB2Lm5pY2tuYW1lIH0pKSB8fCBbXX1cbiAgICAgICAgICAgIHJlbmRlclN1Z2dlc3Rpb249e3JlbmRlclN1Z2dlc3Rpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9NZW50aW9uc1RleHRhcmVhPlxuICAgICAgICA8VG9vbGJveD5cbiAgICAgICAgICA8U2VuZEJ1dHRvbj7rs7TrgrTquLA8L1NlbmRCdXR0b24+XG4gICAgICAgIDwvVG9vbGJveD5cbiAgICAgIDwvRm9ybT5cbiAgICA8L0NoYXRBcmVhPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdEJveDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IE1lbnRpb25zSW5wdXQgfSBmcm9tICdyZWFjdC1tZW50aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBDaGF0QXJlYSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGNvbG9yOiByZ2IoMjksIDI4LCAyOSk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI5LCAyOCwgMjkpO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnRpb25zVGV4dGFyZWEgPSBzdHlsZWQoTWVudGlvbnNJbnB1dClgXG4gIGZvbnQtZmFtaWx5OiBTbGFjay1MYXRvLCBhcHBsZUxvZ28sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogOHB4IDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gICYgc3Ryb25nIHtcbiAgICBiYWNrZ3JvdW5kOiBza3libHVlO1xuICB9XG4gICYgdGV4dGFyZWEge1xuICAgIGhlaWdodDogNDRweDtcbiAgICBwYWRkaW5nOiA5cHggMTBweCAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgJiB1bCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogOXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRvb2xib3ggPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHJnYigyNDgsIDI0OCwgMjQ4KTtcbiAgaGVpZ2h0OiA0MXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VuZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRWFjaE1lbnRpb24gPSBzdHlsZWQuYnV0dG9uPHsgZm9jdXM6IGJvb2xlYW4gfT5gXG4gIHBhZGRpbmc6IDRweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogcmdiKDI4LCAyOSwgMjgpO1xuICB3aWR0aDogMTAwJTtcbiAgJiBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gICR7KHsgZm9jdXMgfSkgPT5cbiAgICBmb2N1cyAmJlxuICAgIGBcbiAgICBiYWNrZ3JvdW5kOiAjMTI2NGEzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgYH07XG5gO1xuIiwiaW1wb3J0IHsgQ2hhdFpvbmUsIFNlY3Rpb24sIFN0aWNreUhlYWRlciB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBSZWFjdCwgeyBSZWZPYmplY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYsIFZGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElETSwgSUNoYXQgfSBmcm9tICdAdHlwaW5ncy9kYic7XG5pbXBvcnQgQ2hhdCBmcm9tICdAY29tcG9uZW50cy9DaGF0JztcbmltcG9ydCB7IFNjcm9sbGJhcnMgfSBmcm9tICdyZWFjdC1jdXN0b20tc2Nyb2xsYmFycy0yJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hhdERhdGE6IHsgW2tleTogc3RyaW5nXTogKElETSB8IElDaGF0KVtdIH07XG4gIHNjcm9sbGJhclJlZjogUmVmT2JqZWN0PFNjcm9sbGJhcnM+O1xuICBpc1JlYWNoaW5nRW5kPzogYm9vbGVhbjtcbiAgaXNFbXB0eTogYm9vbGVhbjtcbiAgc2V0U2l6ZTogKGY6IChzaXplOiBudW1iZXIpID0+IG51bWJlcikgPT4gUHJvbWlzZTwoSURNIHwgSUNoYXQpW11bXSB8IHVuZGVmaW5lZD47XG59XG5jb25zdCBDaGF0TGlzdDogVkZDPFByb3BzPiA9ICh7IHNjcm9sbGJhclJlZiwgaXNSZWFjaGluZ0VuZCwgaXNFbXB0eSwgY2hhdERhdGEsIHNldFNpemUgfSkgPT4ge1xuICBjb25zdCBvblNjcm9sbCA9IHVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZXMpID0+IHtcbiAgICAgIC8vIOunqCDsnITsl5Ag64+E64usIO2VmOyYgOqzoCwgICAgICAgICAgIOuniOyngOuniSDtjpjsnbTsp4DqsIAg7JWE64uI6rOgICDrjbDsnbTthLDqsIAg64Gd7J20IOyVhOuLkOuVjFxuICAgICAgaWYgKHZhbHVlcy5zY3JvbGxUb3AgPT09IDAgJiYgIWlzUmVhY2hpbmdFbmQgJiYgIWlzRW1wdHkpIHtcbiAgICAgICAgc2V0U2l6ZSgoc2l6ZSkgPT4gc2l6ZSArIDEpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHNjcm9sbGJhclJlZi5jdXJyZW50Py5zY3JvbGxUb3Aoc2Nyb2xsYmFyUmVmLmN1cnJlbnQ/LmdldFNjcm9sbEhlaWdodCgpIC0gdmFsdWVzLnNjcm9sbEhlaWdodCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3Njcm9sbGJhclJlZl0sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhdFpvbmU+XG4gICAgICA8U2Nyb2xsYmFycyBhdXRvSGlkZSByZWY9e3Njcm9sbGJhclJlZn0gb25TY3JvbGxGcmFtZT17b25TY3JvbGx9PlxuICAgICAgICB7T2JqZWN0LmVudHJpZXMoY2hhdERhdGEpLm1hcCgoW2RhdGUsIGNoYXRzXSkgPT4ge1xuICAgICAgICAgIC8v6rCd7LK07J2YIOuwmOuzteusuOydgCBPYmplY3RzLmVudHJpZXProZwg7ZWc64ukXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17YHNlY3Rpb24tJHtkYXRlfWB9IGtleT17ZGF0ZX0+XG4gICAgICAgICAgICAgIDxTdGlja3lIZWFkZXI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj57ZGF0ZX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9TdGlja3lIZWFkZXI+XG4gICAgICAgICAgICAgIHtjaGF0cy5tYXAoKGNoYXQpID0+IChcbiAgICAgICAgICAgICAgICA8Q2hhdCBrZXk9e2NoYXQuaWR9IGRhdGE9e2NoYXR9IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9TY3JvbGxiYXJzPlxuICAgIDwvQ2hhdFpvbmU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0TGlzdDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGNvbnN0IENoYXRab25lID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdGlja3lIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMTRweDtcbiAgJiBidXR0b24ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgLS1zYWYtMDogcmdiYSh2YXIoLS1za19mb3JlZ3JvdW5kX2xvdywgMjksIDI4LCAyOSksIDAuMTMpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1zYWYtMCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTNweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuYDtcbiIsImltcG9ydCB7IElDaGF0LCBJRE0gfSBmcm9tICdAdHlwaW5ncy9kYic7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlU2VjdGlvbjxUIGV4dGVuZHMgSURNIHwgSUNoYXQ+KGNoYXRMaXN0OiBUW10pIHtcbiAgY29uc3Qgc2VjdGlvbnM6IHsgW2tleTogc3RyaW5nXTogVFtdIH0gPSB7fTtcbiAgY2hhdExpc3QuZm9yRWFjaCgoY2hhdCkgPT4ge1xuICAgIGNvbnN0IG1vbnRoRGF0ZSA9IGRheWpzKGNoYXQuY3JlYXRlZEF0KS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzZWN0aW9uc1ttb250aERhdGVdKSkge1xuICAgICAgc2VjdGlvbnNbbW9udGhEYXRlXS5wdXNoKGNoYXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWN0aW9uc1ttb250aERhdGVdID0gW2NoYXRdO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzZWN0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZU1lbW8iLCJtZW1vIiwiQ2hhdFdyYXBwZXIiLCJncmF2YXRhciIsImRheWpzIiwicmVnZXhpZnlTdHJpbmciLCJMaW5rIiwidXNlUGFyYW1zIiwiQ2hhdCIsImRhdGEiLCJ1c2VyIiwiU2VuZGVyIiwiVXNlciIsIndvcmtzcGFjZSIsInJlc3VsdCIsImNvbnRlbnQiLCJzdGFydHNXaXRoIiwibWF4SGVpZ2h0IiwiaW5wdXQiLCJwYXR0ZXJuIiwiZGVjb3JhdG9yIiwibWF0Y2giLCJpbmRleCIsImFyciIsInVybCIsImVtYWlsIiwicyIsImQiLCJuaWNrbmFtZSIsImNyZWF0ZWRBdCIsImZvcm1hdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQ2hhdEFyZWEiLCJFYWNoTWVudGlvbiIsIkZvcm0iLCJNZW50aW9uc1RleHRhcmVhIiwiU2VuZEJ1dHRvbiIsIlRvb2xib3giLCJhdXRvc2l6ZSIsInVzZVNXUiIsImZldGNoZXIiLCJNZW50aW9uIiwiYmFja1VybCIsIkNoYXRCb3giLCJjaGF0Iiwib25TdWJtaXRGb3JtIiwib25DaGFuZ2VDaGF0IiwicGxhY2Vob2xkZXIiLCJ1c2VyRGF0YSIsImVycm9yIiwibXV0YXRlIiwibWVtYmVyRGF0YSIsInRleHRhcmVhUmVmIiwiY3VycmVudCIsIm9uS2V5ZG93bkNoYXQiLCJlIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJzaGlmdEtleSIsInJlbmRlclN1Z2dlc3Rpb24iLCJzdWdnZXN0aW9uIiwic2VhcmNoIiwiaGlnaGxpZ2h0ZWREaXNwbGF5IiwiZm9jdXMiLCJtYXAiLCJ2IiwiaWQiLCJkaXNwbGF5IiwiTWVudGlvbnNJbnB1dCIsIkNoYXRab25lIiwiU2VjdGlvbiIsIlN0aWNreUhlYWRlciIsIlNjcm9sbGJhcnMiLCJDaGF0TGlzdCIsInNjcm9sbGJhclJlZiIsImlzUmVhY2hpbmdFbmQiLCJpc0VtcHR5IiwiY2hhdERhdGEiLCJzZXRTaXplIiwib25TY3JvbGwiLCJ2YWx1ZXMiLCJzY3JvbGxUb3AiLCJzaXplIiwidGhlbiIsImdldFNjcm9sbEhlaWdodCIsInNjcm9sbEhlaWdodCIsIk9iamVjdCIsImVudHJpZXMiLCJkYXRlIiwiY2hhdHMiLCJtYWtlU2VjdGlvbiIsImNoYXRMaXN0Iiwic2VjdGlvbnMiLCJmb3JFYWNoIiwibW9udGhEYXRlIiwiQXJyYXkiLCJpc0FycmF5IiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=