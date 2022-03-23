"use strict";
(self["webpackChunksleact_ts_front"] = self["webpackChunksleact_ts_front"] || []).push([["pages_DirectMessage_index_tsx"],{

/***/ "./pages/DirectMessage/index.tsx":
/*!***************************************!*\
  !*** ./pages/DirectMessage/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./pages/DirectMessage/styles.tsx");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gravatar */ "./node_modules/gravatar/index.js");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gravatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.mjs");
/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr/infinite */ "./node_modules/swr/infinite/dist/index.mjs");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/fetcher */ "./utils/fetcher.ts");
/* harmony import */ var _components_ChatBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/ChatBox */ "./components/ChatBox/index.tsx");
/* harmony import */ var _components_ChatList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/ChatList */ "./components/ChatList/index.tsx");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_makeSections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @utils/makeSections */ "./utils/makeSections.ts");
/* harmony import */ var _hooks_useSocket__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @hooks/useSocket */ "./hooks/useSocket.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../config */ "./config.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var DirectMessage = function DirectMessage() {
  _s2();

  var _chatData$, _chatData, _ref;

  var _useParams = (0,react_router__WEBPACK_IMPORTED_MODULE_15__.useParams)(),
      workspace = _useParams.workspace,
      id = _useParams.id;

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])("".concat(_config__WEBPACK_IMPORTED_MODULE_14__.backUrl, "/api/workspaces/").concat(workspace, "/members/").concat(id), _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__["default"]),
      userData = _useSWR.data;

  var _useSWR2 = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])("".concat(_config__WEBPACK_IMPORTED_MODULE_14__.backUrl, "/api/users"), _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__["default"]),
      myData = _useSWR2.data;

  var _useSWRInfinite = (0,swr_infinite__WEBPACK_IMPORTED_MODULE_4__["default"])(function (index) {
    return "".concat(_config__WEBPACK_IMPORTED_MODULE_14__.backUrl, "/api/workspaces/").concat(workspace, "/dms/").concat(id, "/chats?perPage=20&page=").concat(index + 1);
  }, _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__["default"]),
      chatData = _useSWRInfinite.data,
      mutateChat = _useSWRInfinite.mutate,
      setSize = _useSWRInfinite.setSize;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      onDrageOver = _useState2[0],
      setOnDragOver = _useState2[1];

  var _useInput = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])(''),
      _useInput2 = _slicedToArray(_useInput, 3),
      chat = _useInput2[0],
      onChangeChat = _useInput2[1],
      setChat = _useInput2[2];

  var scrollbarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); //이제 데이터가 이차원 배열로 들어옴 [[3page] ,[2page], [1page]] 나중에 들어온게 앞으로 저장됨 그래서 [0].length===0 인지 확인하는거임

  var isEmpty = (chatData === null || chatData === void 0 ? void 0 : (_chatData$ = chatData[0]) === null || _chatData$ === void 0 ? void 0 : _chatData$.length) === 0; //데이터가 더이상 없는가?

  var isReachingEnd = isEmpty || chatData && ((_chatData = chatData[chatData.length - 1]) === null || _chatData === void 0 ? void 0 : _chatData.length) < 20; //마지막 페이지인가?

  var onSubmitForm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();

    if (chat !== null && chat !== void 0 && chat.trim()) {
      axios__WEBPACK_IMPORTED_MODULE_9___default().post("".concat(_config__WEBPACK_IMPORTED_MODULE_14__.backUrl, "/api/workspaces/").concat(workspace, "/dms/").concat(id, "/chats"), {
        content: chat
      }).then(function () {
        mutateChat();
        setChat('');
        localStorage.setItem("".concat(workspace, "-").concat(id), new Date().getTime().toString());
        setTimeout(function () {
          var _scrollbarRef$current;

          (_scrollbarRef$current = scrollbarRef.current) === null || _scrollbarRef$current === void 0 ? void 0 : _scrollbarRef$current.scrollToBottom();
        }, 100);
      }).catch(console.error);
    }
  }, [chat]);
  console.log(chatData);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    localStorage.setItem("".concat(workspace, "-").concat(id), new Date().getTime().toString());
  }, [workspace, id]);

  var _useSocket = (0,_hooks_useSocket__WEBPACK_IMPORTED_MODULE_11__["default"])(workspace),
      _useSocket2 = _slicedToArray(_useSocket, 1),
      socket = _useSocket2[0]; //mutate(새로운값, false)
  //false하면 서버에 검사안함 true로 하면 기존 revalidate와 same
  //socket으로 데이터 가져왓으므로 mutate를 false로해서 두번 검사가 이루어지지 않기로 한다


  var onMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data) {
    mutateChat(function (chatData) {
      chatData === null || chatData === void 0 ? void 0 : chatData[0].push(data);
      localStorage.setItem("".concat(workspace, "-").concat(id), new Date().getTime().toString());
      return chatData; //원래 값이 들어가야하는데 함수 들어갔으니 return 해주어야겟지?
    }, false).then(function () {
      react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success('새 메시지가 도착했습니다.', {
        onClick: function onClick() {
          var _scrollbarRef$current2;

          (_scrollbarRef$current2 = scrollbarRef.current) === null || _scrollbarRef$current2 === void 0 ? void 0 : _scrollbarRef$current2.scrollToBottom();
        },
        closeOnClick: true
      });
    });
  }, [id, myData, mutateChat]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // on에선 이벤트 이름, callback 함수
    socket === null || socket === void 0 ? void 0 : socket.on('dm', onMessage);
    return function () {
      socket === null || socket === void 0 ? void 0 : socket.off('dm', onMessage);
    };
  }, [socket, onMessage]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if ((chatData === null || chatData === void 0 ? void 0 : chatData.length) === 1) {
      var _scrollbarRef$current3;

      (_scrollbarRef$current3 = scrollbarRef.current) === null || _scrollbarRef$current3 === void 0 ? void 0 : _scrollbarRef$current3.scrollToBottom();
    }
  }, [chatData]); // 지금데이터가 [ [제일최근꺼~최근꺼] [오래된거~제일오래된거] ] 이런 순으로 되어있다.
  // 제일최근꺼가 밑에보이려면 배열을 reverse시켜서 위에서는 최근꺼 ~ 아래서 제일 최근꺼 순으로 보여주어야한다
  //reverse()하면 기존의 chat이 변경되기 때문에 기존의 chatData불변성 지키기

  var chatSections = (0,_utils_makeSections__WEBPACK_IMPORTED_MODULE_10__["default"])(chatData ? (_ref = []).concat.apply(_ref, _toConsumableArray(chatData)).reverse() : []);
  var onDrop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    var formData = new FormData(); //browser마다 items나 files에 담김

    if (e.dataTransfer.items) {
      // dataTransfer.items에 담긴경우
      for (var i = 0; i < e.dataTransfer.items.length; i++) {
        if (e.dataTransfer.items[i].kind === 'file') {
          var file = e.dataTransfer.items[i].getAsFile();
          formData.append('image', file);
        }
      }
    } else {
      // dataTransfer.files에 담긴경우
      for (var _i2 = 0; _i2 < e.dataTransfer.files.length; _i2++) {
        formData.append('image', e.dataTransfer.files[_i2]);
      }
    }

    axios__WEBPACK_IMPORTED_MODULE_9___default().post("".concat(_config__WEBPACK_IMPORTED_MODULE_14__.backUrl, "/api/workspaces/").concat(workspace, "/dms/").concat(id, "/images"), formData).then(function () {
      setOnDragOver(false);
      localStorage.setItem("".concat(workspace, "-").concat(id), new Date().getTime().toString());
    });
  }, [workspace, id]);
  var onDragOver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    console.log('드래그중');
    e.preventDefault();
    setOnDragOver(true);
  }, []);

  if (!userData || !myData) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {
    onDragOver: onDragOver,
    onDrop: onDrop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: gravatar__WEBPACK_IMPORTED_MODULE_2___default().url(userData.email, {
      s: '24px',
      d: 'retro'
    }),
    alt: userData.nickname
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, userData.nickname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChatList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    chatData: chatSections,
    scrollbarRef: scrollbarRef,
    isReachingEnd: isReachingEnd,
    isEmpty: isEmpty,
    setSize: setSize
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_12__.ToastContainer, {
    position: "bottom-center",
    limit: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChatBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    chat: chat,
    onChangeChat: onChangeChat,
    onSubmitForm: onSubmitForm
  }), onDrageOver && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.DragOver, null, "\uC5C5\uB85C\uB4DC!"));
};

_s2(DirectMessage, "WPMHQtr7Vjxe6WxKIxZkU8cJRqo=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_15__.useParams, swr__WEBPACK_IMPORTED_MODULE_3__["default"], swr__WEBPACK_IMPORTED_MODULE_3__["default"], swr_infinite__WEBPACK_IMPORTED_MODULE_4__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"], _hooks_useSocket__WEBPACK_IMPORTED_MODULE_11__["default"]];
});

_c = DirectMessage;
/* harmony default export */ __webpack_exports__["default"] = (DirectMessage);

var _c;

__webpack_require__.$Refresh$.register(_c, "DirectMessage");

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

/***/ "./pages/DirectMessage/styles.tsx":
/*!****************************************!*\
  !*** ./pages/DirectMessage/styles.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Header": function() { return /* binding */ Header; },
/* harmony export */   "DragOver": function() { return /* binding */ DragOver; }
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var Container = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "egh2dki2",
  label: "Container"
})( false ? 0 : {
  name: "1a0r0eh",
  styles: "display:flex;flex-wrap:wrap;height:calc(100vh - 38px);flex-flow:column;position:relative",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW51bWludS9EZXNrdG9wL1Byb2plY3Qvc2xlYWN0L2Zyb250L3BhZ2VzL0RpcmVjdE1lc3NhZ2Uvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFbUMiLCJmaWxlIjoiL1VzZXJzL21pbnVtaW51L0Rlc2t0b3AvUHJvamVjdC9zbGVhY3QvZnJvbnQvcGFnZXMvRGlyZWN0TWVzc2FnZS9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOHB4KTtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfbG93LCAyOSwgMjgsIDI5KSwgMC4xMyk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgdmFyKC0tc2FmLTApO1xuICBwYWRkaW5nOiAyMHB4IDE2cHggMjBweCAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJiBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRHJhZ092ZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjRweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Header = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("header",  false ? 0 : {
  target: "egh2dki1",
  label: "Header"
})( false ? 0 : {
  name: "1c17pcy",
  styles: "height:64px;display:flex;width:100%;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 1px 0 var(--saf-0);padding:20px 16px 20px 20px;font-weight:bold;align-items:center;& img{margin-right:5px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW51bWludS9EZXNrdG9wL1Byb2plY3Qvc2xlYWN0L2Zyb250L3BhZ2VzL0RpcmVjdE1lc3NhZ2Uvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVbUMiLCJmaWxlIjoiL1VzZXJzL21pbnVtaW51L0Rlc2t0b3AvUHJvamVjdC9zbGVhY3QvZnJvbnQvcGFnZXMvRGlyZWN0TWVzc2FnZS9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOHB4KTtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfbG93LCAyOSwgMjgsIDI5KSwgMC4xMyk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgdmFyKC0tc2FmLTApO1xuICBwYWRkaW5nOiAyMHB4IDE2cHggMjBweCAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJiBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRHJhZ092ZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjRweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var DragOver = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "egh2dki0",
  label: "DragOver"
})( false ? 0 : {
  name: "czjct4",
  styles: "position:absolute;top:64px;left:0;width:100%;height:calc(100% - 64px);background:white;opacity:0.7;display:flex;align-items:center;justify-content:center;font-size:40px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW51bWludS9EZXNrdG9wL1Byb2plY3Qvc2xlYWN0L2Zyb250L3BhZ2VzL0RpcmVjdE1lc3NhZ2Uvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmtDIiwiZmlsZSI6Ii9Vc2Vycy9taW51bWludS9EZXNrdG9wL1Byb2plY3Qvc2xlYWN0L2Zyb250L3BhZ2VzL0RpcmVjdE1lc3NhZ2Uvc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzhweCk7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgLS1zYWYtMDogcmdiYSh2YXIoLS1za19mb3JlZ3JvdW5kX2xvdywgMjksIDI4LCAyOSksIDAuMTMpO1xuICBib3gtc2hhZG93OiAwIDFweCAwIHZhcigtLXNhZi0wKTtcbiAgcGFkZGluZzogMjBweCAxNnB4IDIwcHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERyYWdPdmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY0cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuYDtcbiJdfQ== */",
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQSxFQUFmO0FBUUEsSUFBTUUsTUFBTSxHQUFHLHFGQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFaO0FBY0EsSUFBTUQsUUFBUSxHQUFHLGtGQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vcGFnZXMvRGlyZWN0TWVzc2FnZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vcGFnZXMvRGlyZWN0TWVzc2FnZS9zdHlsZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IENvbnRhaW5lciwgRHJhZ092ZXIsIEhlYWRlciB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBncmF2YXRhciBmcm9tICdncmF2YXRhcic7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgdXNlU1dSSW5maW5pdGUgZnJvbSAnc3dyL2luZmluaXRlJztcbmltcG9ydCBmZXRjaGVyIGZyb20gJ0B1dGlscy9mZXRjaGVyJztcbmltcG9ydCBDaGF0Qm94IGZyb20gJ0Bjb21wb25lbnRzL0NoYXRCb3gnO1xuaW1wb3J0IENoYXRMaXN0IGZyb20gJ0Bjb21wb25lbnRzL0NoYXRMaXN0JztcbmltcG9ydCB1c2VJbnB1dCBmcm9tICdAaG9va3MvdXNlSW5wdXQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IElETSB9IGZyb20gJ0B0eXBpbmdzL2RiJztcbmltcG9ydCBtYWtlU2VjdGlvbiBmcm9tICdAdXRpbHMvbWFrZVNlY3Rpb25zJztcbmltcG9ydCB1c2VTb2NrZXQgZnJvbSAnQGhvb2tzL3VzZVNvY2tldCc7XG5pbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSAncmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMtMic7XG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuaW1wb3J0IHsgYmFja1VybCB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmNvbnN0IERpcmVjdE1lc3NhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgd29ya3NwYWNlLCBpZCB9ID0gdXNlUGFyYW1zPHsgd29ya3NwYWNlOiBzdHJpbmc7IGlkOiBzdHJpbmcgfT4oKTtcbiAgY29uc3QgeyBkYXRhOiB1c2VyRGF0YSB9ID0gdXNlU1dSKGAke2JhY2tVcmx9L2FwaS93b3Jrc3BhY2VzLyR7d29ya3NwYWNlfS9tZW1iZXJzLyR7aWR9YCwgZmV0Y2hlcik7XG4gIGNvbnN0IHsgZGF0YTogbXlEYXRhIH0gPSB1c2VTV1IoYCR7YmFja1VybH0vYXBpL3VzZXJzYCwgZmV0Y2hlcik7XG4gIGNvbnN0IHtcbiAgICBkYXRhOiBjaGF0RGF0YSxcbiAgICBtdXRhdGU6IG11dGF0ZUNoYXQsXG4gICAgc2V0U2l6ZSxcbiAgfSA9IHVzZVNXUkluZmluaXRlPElETVtdPihcbiAgICAoaW5kZXgpID0+IGAke2JhY2tVcmx9L2FwaS93b3Jrc3BhY2VzLyR7d29ya3NwYWNlfS9kbXMvJHtpZH0vY2hhdHM/cGVyUGFnZT0yMCZwYWdlPSR7aW5kZXggKyAxfWAsXG4gICAgZmV0Y2hlcixcbiAgKTtcblxuICBjb25zdCBbb25EcmFnZU92ZXIsIHNldE9uRHJhZ092ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2hhdCwgb25DaGFuZ2VDaGF0LCBzZXRDaGF0XSA9IHVzZUlucHV0KCcnKTtcbiAgY29uc3Qgc2Nyb2xsYmFyUmVmID0gdXNlUmVmPFNjcm9sbGJhcnM+KG51bGwpO1xuXG4gIC8v7J207KCcIOuNsOydtO2EsOqwgCDsnbTssKjsm5Ag67Cw7Je066GcIOuTpOyWtOyYtCBbWzNwYWdlXSAsWzJwYWdlXSwgWzFwYWdlXV0g64KY7KSR7JeQIOuTpOyWtOyYqOqyjCDslZ7snLzroZwg7KCA7J6l65CoIOq3uOuemOyEnCBbMF0ubGVuZ3RoPT09MCDsnbjsp4Ag7ZmV7J247ZWY64qU6rGw7J6EXG4gIGNvbnN0IGlzRW1wdHkgPSBjaGF0RGF0YT8uWzBdPy5sZW5ndGggPT09IDA7IC8v642w7J207YSw6rCAIOuNlOydtOyDgSDsl4bripTqsIA/XG4gIGNvbnN0IGlzUmVhY2hpbmdFbmQgPSBpc0VtcHR5IHx8IChjaGF0RGF0YSAmJiBjaGF0RGF0YVtjaGF0RGF0YS5sZW5ndGggLSAxXT8ubGVuZ3RoIDwgMjApOyAvL+uniOyngOuniSDtjpjsnbTsp4DsnbjqsIA/XG5cbiAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKGNoYXQ/LnRyaW0oKSkge1xuICAgICAgICBheGlvc1xuICAgICAgICAgIC5wb3N0KGAke2JhY2tVcmx9L2FwaS93b3Jrc3BhY2VzLyR7d29ya3NwYWNlfS9kbXMvJHtpZH0vY2hhdHNgLCB7XG4gICAgICAgICAgICBjb250ZW50OiBjaGF0LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbXV0YXRlQ2hhdCgpO1xuICAgICAgICAgICAgc2V0Q2hhdCgnJyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt3b3Jrc3BhY2V9LSR7aWR9YCwgbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgc2Nyb2xsYmFyUmVmLmN1cnJlbnQ/LnNjcm9sbFRvQm90dG9tKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2NoYXRdLFxuICApO1xuXG4gIGNvbnNvbGUubG9nKGNoYXREYXRhKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3dvcmtzcGFjZX0tJHtpZH1gLCBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpKTtcbiAgfSwgW3dvcmtzcGFjZSwgaWRdKTtcbiAgY29uc3QgW3NvY2tldF0gPSB1c2VTb2NrZXQod29ya3NwYWNlKTtcblxuICAvL211dGF0ZSjsg4jroZzsmrTqsJIsIGZhbHNlKVxuICAvL2ZhbHNl7ZWY66m0IOyEnOuyhOyXkCDqsoDsgqzslYjtlaggdHJ1ZeuhnCDtlZjrqbQg6riw7KG0IHJldmFsaWRhdGXsmYAgc2FtZVxuICAvL3NvY2tldOycvOuhnCDrjbDsnbTthLAg6rCA7KC47JmT7Jy866+A66GcIG11dGF0ZeulvCBmYWxzZeuhnO2VtOyEnCDrkZDrsogg6rKA7IKs6rCAIOydtOujqOyWtOyngOyngCDslYrquLDroZwg7ZWc64ukXG4gIGNvbnN0IG9uTWVzc2FnZSA9IHVzZUNhbGxiYWNrKFxuICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgIG11dGF0ZUNoYXQoKGNoYXREYXRhKSA9PiB7XG4gICAgICAgIGNoYXREYXRhPy5bMF0ucHVzaChkYXRhKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7d29ya3NwYWNlfS0ke2lkfWAsIG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gY2hhdERhdGE7IC8v7JuQ656YIOqwkuydtCDrk6TslrTqsIDslbztlZjripTrjbAg7ZWo7IiYIOuTpOyWtOqwlOycvOuLiCByZXR1cm4g7ZW07KO87Ja07JW86rKf7KeAP1xuICAgICAgfSwgZmFsc2UpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0b2FzdC5zdWNjZXNzKCfsg4gg66mU7Iuc7KeA6rCAIOuPhOywqe2WiOyKteuLiOuLpC4nLCB7XG4gICAgICAgICAgb25DbGljaygpIHtcbiAgICAgICAgICAgIHNjcm9sbGJhclJlZi5jdXJyZW50Py5zY3JvbGxUb0JvdHRvbSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW2lkLCBteURhdGEsIG11dGF0ZUNoYXRdLFxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gb27sl5DshKAg7J2067Kk7Yq4IOydtOumhCwgY2FsbGJhY2sg7ZWo7IiYXG4gICAgc29ja2V0Py5vbignZG0nLCBvbk1lc3NhZ2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzb2NrZXQ/Lm9mZignZG0nLCBvbk1lc3NhZ2UpO1xuICAgIH07XG4gIH0sIFtzb2NrZXQsIG9uTWVzc2FnZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNoYXREYXRhPy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHNjcm9sbGJhclJlZi5jdXJyZW50Py5zY3JvbGxUb0JvdHRvbSgpO1xuICAgIH1cbiAgfSwgW2NoYXREYXRhXSk7XG5cbiAgLy8g7KeA6riI642w7J207YSw6rCAIFsgW+ygnOydvOy1nOq3vOq6vH7stZzqt7zqurxdIFvsmKTrnpjrkJzqsbB+7KCc7J287Jik656Y65Cc6rGwXSBdIOydtOufsCDsiJzsnLzroZwg65CY7Ja07J6I64ukLlxuICAvLyDsoJzsnbzstZzqt7zqurzqsIAg67CR7JeQ67O07J2066Ck66m0IOuwsOyXtOydhCByZXZlcnNl7Iuc7Lyc7IScIOychOyXkOyEnOuKlCDstZzqt7zqurwgfiDslYTrnpjshJwg7KCc7J28IOy1nOq3vOq6vCDsiJzsnLzroZwg67O07Jes7KO87Ja07JW87ZWc64ukXG4gIC8vcmV2ZXJzZSgp7ZWY66m0IOq4sOyhtOydmCBjaGF07J20IOuzgOqyveuQmOq4sCDrlYzrrLjsl5Ag6riw7KG07J2YIGNoYXREYXRh67aI67OA7ISxIOyngO2CpOq4sFxuXG4gIGNvbnN0IGNoYXRTZWN0aW9ucyA9IG1ha2VTZWN0aW9uKGNoYXREYXRhID8gKFtdIGFzIElETVtdKS5jb25jYXQoLi4uY2hhdERhdGEpLnJldmVyc2UoKSA6IFtdKTtcblxuICBjb25zdCBvbkRyb3AgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy9icm93c2Vy66eI64ukIGl0ZW1z64KYIGZpbGVz7JeQIOuLtOq5gFxuICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyLml0ZW1zKSB7XG4gICAgICAgIC8vIGRhdGFUcmFuc2Zlci5pdGVtc+yXkCDri7TquLTqsr3smrBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlLmRhdGFUcmFuc2Zlci5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlci5pdGVtc1tpXS5raW5kID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5pdGVtc1tpXS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRhdGFUcmFuc2Zlci5maWxlc+yXkCDri7TquLTqsr3smrBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlLmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBlLmRhdGFUcmFuc2Zlci5maWxlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF4aW9zLnBvc3QoYCR7YmFja1VybH0vYXBpL3dvcmtzcGFjZXMvJHt3b3Jrc3BhY2V9L2Rtcy8ke2lkfS9pbWFnZXNgLCBmb3JtRGF0YSkudGhlbigoKSA9PiB7XG4gICAgICAgIHNldE9uRHJhZ092ZXIoZmFsc2UpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt3b3Jrc3BhY2V9LSR7aWR9YCwgbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIFt3b3Jrc3BhY2UsIGlkXSxcbiAgKTtcblxuICBjb25zdCBvbkRyYWdPdmVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygn65Oc656Y6re47KSRJyk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldE9uRHJhZ092ZXIodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBpZiAoIXVzZXJEYXRhIHx8ICFteURhdGEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgb25EcmFnT3Zlcj17b25EcmFnT3Zlcn0gb25Ecm9wPXtvbkRyb3B9PlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPGltZyBzcmM9e2dyYXZhdGFyLnVybCh1c2VyRGF0YS5lbWFpbCwgeyBzOiAnMjRweCcsIGQ6ICdyZXRybycgfSl9IGFsdD17dXNlckRhdGEubmlja25hbWV9IC8+XG4gICAgICAgIDxzcGFuPnt1c2VyRGF0YS5uaWNrbmFtZX08L3NwYW4+XG4gICAgICA8L0hlYWRlcj5cbiAgICAgIDxDaGF0TGlzdFxuICAgICAgICBjaGF0RGF0YT17Y2hhdFNlY3Rpb25zfVxuICAgICAgICBzY3JvbGxiYXJSZWY9e3Njcm9sbGJhclJlZn1cbiAgICAgICAgaXNSZWFjaGluZ0VuZD17aXNSZWFjaGluZ0VuZH1cbiAgICAgICAgaXNFbXB0eT17aXNFbXB0eX1cbiAgICAgICAgc2V0U2l6ZT17c2V0U2l6ZX1cbiAgICAgIC8+XG4gICAgICA8VG9hc3RDb250YWluZXIgcG9zaXRpb249XCJib3R0b20tY2VudGVyXCIgbGltaXQ9ezF9IC8+XG4gICAgICA8Q2hhdEJveCBjaGF0PXtjaGF0fSBvbkNoYW5nZUNoYXQ9e29uQ2hhbmdlQ2hhdH0gb25TdWJtaXRGb3JtPXtvblN1Ym1pdEZvcm19IC8+XG4gICAgICB7b25EcmFnZU92ZXIgJiYgPERyYWdPdmVyPuyXheuhnOuTnCE8L0RyYWdPdmVyPn1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdE1lc3NhZ2U7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDM4cHgpO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGhlaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tc2FmLTA6IHJnYmEodmFyKC0tc2tfZm9yZWdyb3VuZF9sb3csIDI5LCAyOCwgMjkpLCAwLjEzKTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCB2YXIoLS1zYWYtMCk7XG4gIHBhZGRpbmc6IDIwcHggMTZweCAyMHB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEcmFnT3ZlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbmA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwiQ29udGFpbmVyIiwiRHJhZ092ZXIiLCJIZWFkZXIiLCJncmF2YXRhciIsInVzZVNXUiIsInVzZVNXUkluZmluaXRlIiwiZmV0Y2hlciIsIkNoYXRCb3giLCJDaGF0TGlzdCIsInVzZUlucHV0IiwiYXhpb3MiLCJtYWtlU2VjdGlvbiIsInVzZVNvY2tldCIsInRvYXN0IiwiVG9hc3RDb250YWluZXIiLCJiYWNrVXJsIiwiRGlyZWN0TWVzc2FnZSIsIndvcmtzcGFjZSIsImlkIiwidXNlckRhdGEiLCJkYXRhIiwibXlEYXRhIiwiaW5kZXgiLCJjaGF0RGF0YSIsIm11dGF0ZUNoYXQiLCJtdXRhdGUiLCJzZXRTaXplIiwib25EcmFnZU92ZXIiLCJzZXRPbkRyYWdPdmVyIiwiY2hhdCIsIm9uQ2hhbmdlQ2hhdCIsInNldENoYXQiLCJzY3JvbGxiYXJSZWYiLCJpc0VtcHR5IiwibGVuZ3RoIiwiaXNSZWFjaGluZ0VuZCIsIm9uU3VibWl0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJwb3N0IiwiY29udGVudCIsInRoZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsInNldFRpbWVvdXQiLCJjdXJyZW50Iiwic2Nyb2xsVG9Cb3R0b20iLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsInNvY2tldCIsIm9uTWVzc2FnZSIsInB1c2giLCJzdWNjZXNzIiwib25DbGljayIsImNsb3NlT25DbGljayIsIm9uIiwib2ZmIiwiY2hhdFNlY3Rpb25zIiwiY29uY2F0IiwicmV2ZXJzZSIsIm9uRHJvcCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJkYXRhVHJhbnNmZXIiLCJpdGVtcyIsImkiLCJraW5kIiwiZmlsZSIsImdldEFzRmlsZSIsImFwcGVuZCIsImZpbGVzIiwib25EcmFnT3ZlciIsInVybCIsImVtYWlsIiwicyIsImQiLCJuaWNrbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=