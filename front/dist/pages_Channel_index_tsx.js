"use strict";
(self["webpackChunksleact_ts_front"] = self["webpackChunksleact_ts_front"] || []).push([["pages_Channel_index_tsx"],{

/***/ "./pages/Channel/index.tsx":
/*!*********************************!*\
  !*** ./pages/Channel/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./pages/Channel/styles.tsx");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.mjs");
/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr/infinite */ "./node_modules/swr/infinite/dist/index.mjs");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/fetcher */ "./utils/fetcher.ts");
/* harmony import */ var _components_ChatBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/ChatBox */ "./components/ChatBox/index.tsx");
/* harmony import */ var _components_ChatList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/ChatList */ "./components/ChatList/index.tsx");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_makeSections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @utils/makeSections */ "./utils/makeSections.ts");
/* harmony import */ var _hooks_useSocket__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @hooks/useSocket */ "./hooks/useSocket.ts");
/* harmony import */ var _components_InviteChannelModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/InviteChannelModal */ "./components/InviteChannelModal/index.tsx");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
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



















var Channel = function Channel() {
  _s2();

  var _chatData$, _chatData, _ref;

  var _useParams = (0,react_router__WEBPACK_IMPORTED_MODULE_15__.useParams)(),
      workspace = _useParams.workspace,
      channel = _useParams.channel;

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])("".concat(_config__WEBPACK_IMPORTED_MODULE_14__.backUrl, "/api/users"), _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__["default"]),
      myData = _useSWR.data;

  var _useSWR2 = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])("".concat(_config__WEBPACK_IMPORTED_MODULE_14__.backUrl, "/api/workspaces/").concat(workspace, "/channels"), _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__["default"]),
      channelData = _useSWR2.data;

  var _useSWRInfinite = (0,swr_infinite__WEBPACK_IMPORTED_MODULE_3__["default"])(function (index) {
    return "".concat(_config__WEBPACK_IMPORTED_MODULE_14__.backUrl, "/api/workspaces/").concat(workspace, "/channels/").concat(channel, "/chats?perPage=20&page=").concat(index + 1);
  }, _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__["default"]),
      chatData = _useSWRInfinite.data,
      mutateChat = _useSWRInfinite.mutate,
      setSize = _useSWRInfinite.setSize;

  var _useSWR3 = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(myData ? "".concat(_config__WEBPACK_IMPORTED_MODULE_14__.backUrl, "/api/workspaces/").concat(workspace, "/channels/").concat(channel, "/members") : null, _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__["default"]),
      channelMembersData = _useSWR3.data;

  var _useSocket = (0,_hooks_useSocket__WEBPACK_IMPORTED_MODULE_10__["default"])(workspace),
      _useSocket2 = _slicedToArray(_useSocket, 1),
      socket = _useSocket2[0];

  var _useInput = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput2 = _slicedToArray(_useInput, 3),
      chat = _useInput2[0],
      onChangeChat = _useInput2[1],
      setChat = _useInput2[2];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showInviteChannelModal = _useState2[0],
      setShowInviteChannelModal = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      onDrageOver = _useState4[0],
      setOnDragOver = _useState4[1];

  var scrollbarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var isEmpty = (chatData === null || chatData === void 0 ? void 0 : (_chatData$ = chatData[0]) === null || _chatData$ === void 0 ? void 0 : _chatData$.length) === 0; //데이터가 더이상 없는가?

  var isReachingEnd = isEmpty || chatData && ((_chatData = chatData[chatData.length - 1]) === null || _chatData === void 0 ? void 0 : _chatData.length) < 20; //마지막 페이지인가?

  var onSubmitForm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();

    if (chat !== null && chat !== void 0 && chat.trim() && chatData && channelData && myData) {
      var savedChat = chat;
      mutateChat(function (prevChatData) {
        var _chatData$0$;

        prevChatData === null || prevChatData === void 0 ? void 0 : prevChatData[0].unshift({
          id: (((_chatData$0$ = chatData[0][0]) === null || _chatData$0$ === void 0 ? void 0 : _chatData$0$.id) || 0) + 1,
          content: savedChat,
          UserId: myData.id,
          User: myData,
          createdAt: new Date(),
          ChannelId: channelData.id,
          Channel: channelData
        });
        return prevChatData;
      }, false).then(function () {
        localStorage.setItem("".concat(workspace, "-").concat(channel), new Date().getTime().toString());
        setChat('');

        if (scrollbarRef.current) {
          var _scrollbarRef$current;

          console.log('scrollToBottom!', (_scrollbarRef$current = scrollbarRef.current) === null || _scrollbarRef$current === void 0 ? void 0 : _scrollbarRef$current.getValues());
          scrollbarRef.current.scrollToBottom();
        }
      });
      axios__WEBPACK_IMPORTED_MODULE_8___default().post("".concat(_config__WEBPACK_IMPORTED_MODULE_14__.backUrl, "/api/workspaces/").concat(workspace, "/channels/").concat(channel, "/chats"), {
        content: savedChat
      }).catch(console.error);
    }
  }, [chat, workspace, channel, channelData, myData, chatData, mutateChat, setChat]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    localStorage.setItem("".concat(workspace, "-").concat(channel), new Date().getTime().toString());
  }, [workspace, channel]);
  var onMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data) {
    if (data.Channel.name === channel && (data.content.startsWith('uploads\\') || data.content.startsWith('uploads/') || data.UserId !== (myData === null || myData === void 0 ? void 0 : myData.id))) {
      mutateChat(function (chatData) {
        chatData === null || chatData === void 0 ? void 0 : chatData[0].unshift(data);
        return chatData;
      }, false).then(function () {
        if (scrollbarRef.current) {
          if (scrollbarRef.current.getScrollHeight() < scrollbarRef.current.getClientHeight() + scrollbarRef.current.getScrollTop() + 150) {
            var _scrollbarRef$current2;

            console.log('scrollToBottom!', (_scrollbarRef$current2 = scrollbarRef.current) === null || _scrollbarRef$current2 === void 0 ? void 0 : _scrollbarRef$current2.getValues());
            setTimeout(function () {
              var _scrollbarRef$current3;

              (_scrollbarRef$current3 = scrollbarRef.current) === null || _scrollbarRef$current3 === void 0 ? void 0 : _scrollbarRef$current3.scrollToBottom();
            }, 100);
          } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success('새 메시지가 도착했습니다.', {
              onClick: function onClick() {
                var _scrollbarRef$current4;

                (_scrollbarRef$current4 = scrollbarRef.current) === null || _scrollbarRef$current4 === void 0 ? void 0 : _scrollbarRef$current4.scrollToBottom();
              },
              closeOnClick: true
            });
          }
        }
      });
    }
  }, [channel, myData, mutateChat]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // on에선 이벤트 이름, callback 함수
    socket === null || socket === void 0 ? void 0 : socket.on('chat', onMessage);
    return function () {
      socket === null || socket === void 0 ? void 0 : socket.off('chat', onMessage);
    };
  }, [socket, onMessage]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if ((chatData === null || chatData === void 0 ? void 0 : chatData.length) === 1) {
      var _scrollbarRef$current5;

      (_scrollbarRef$current5 = scrollbarRef.current) === null || _scrollbarRef$current5 === void 0 ? void 0 : _scrollbarRef$current5.scrollToBottom();
    }
  }, [chatData]);
  var chatSections = (0,_utils_makeSections__WEBPACK_IMPORTED_MODULE_9__["default"])(chatData ? (_ref = []).concat.apply(_ref, _toConsumableArray(chatData)).reverse() : []);
  var onClickInviteChannel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setShowInviteChannelModal(true);
  }, []);
  var onCloseModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setShowInviteChannelModal(false);
  }, []);
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

    axios__WEBPACK_IMPORTED_MODULE_8___default().post("".concat(_config__WEBPACK_IMPORTED_MODULE_14__.backUrl, "/api/workspaces/").concat(workspace, "/channels/").concat(channel, "/images"), formData).then(function () {
      setOnDragOver(false);
      localStorage.setItem("".concat(workspace, "-").concat(channel), new Date().getTime().toString());
    });
  }, [workspace, channel]);
  var onDragOver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    console.log('드래그중');
    e.preventDefault();
    setOnDragOver(true);
  }, []);

  if (!channelData || !myData) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {
    onDragOver: onDragOver,
    onDrop: onDrop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "#", channel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, channelMembersData && channelMembersData[0].Members.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_16__.BsFillPersonPlusFill, {
    onClick: onClickInviteChannel,
    style: {
      marginLeft: '5px'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChatList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    chatData: chatSections,
    scrollbarRef: scrollbarRef,
    isReachingEnd: isReachingEnd,
    isEmpty: isEmpty,
    setSize: setSize
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChatBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    chat: chat,
    onChangeChat: onChangeChat,
    onSubmitForm: onSubmitForm
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_InviteChannelModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
    show: showInviteChannelModal,
    onCloseModal: onCloseModal,
    setShowInviteChannelModal: setShowInviteChannelModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_12__.ToastContainer, {
    position: "bottom-center",
    limit: 1
  }), onDrageOver && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.DragOver, null, "\uC5C5\uB85C\uB4DC!"));
};

_s2(Channel, "yB8fD48H6xbXl1TCAcZ7E9M93Q0=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_15__.useParams, swr__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_2__["default"], swr_infinite__WEBPACK_IMPORTED_MODULE_3__["default"], swr__WEBPACK_IMPORTED_MODULE_2__["default"], _hooks_useSocket__WEBPACK_IMPORTED_MODULE_10__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = Channel;
/* harmony default export */ __webpack_exports__["default"] = (Channel);

var _c;

__webpack_require__.$Refresh$.register(_c, "Channel");

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

/***/ "./pages/Channel/styles.tsx":
/*!**********************************!*\
  !*** ./pages/Channel/styles.tsx ***!
  \**********************************/
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
  target: "exhfy1p2",
  label: "Container"
})( false ? 0 : {
  name: "1a0r0eh",
  styles: "display:flex;flex-wrap:wrap;height:calc(100vh - 38px);flex-flow:column;position:relative",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW51bWludS9EZXNrdG9wL1Byb2plY3Qvc2xlYWN0L2Zyb250L3BhZ2VzL0NoYW5uZWwvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFbUMiLCJmaWxlIjoiL1VzZXJzL21pbnVtaW51L0Rlc2t0b3AvUHJvamVjdC9zbGVhY3QvZnJvbnQvcGFnZXMvQ2hhbm5lbC9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOHB4KTtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfbG93LCAyOSwgMjgsIDI5KSwgMC4xMyk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgdmFyKC0tc2FmLTApO1xuICBwYWRkaW5nOiAyMHB4IDE2cHggMjBweCAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJiBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRHJhZ092ZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjRweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Header = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("header",  false ? 0 : {
  target: "exhfy1p1",
  label: "Header"
})( false ? 0 : {
  name: "1c17pcy",
  styles: "height:64px;display:flex;width:100%;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 1px 0 var(--saf-0);padding:20px 16px 20px 20px;font-weight:bold;align-items:center;& img{margin-right:5px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW51bWludS9EZXNrdG9wL1Byb2plY3Qvc2xlYWN0L2Zyb250L3BhZ2VzL0NoYW5uZWwvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVbUMiLCJmaWxlIjoiL1VzZXJzL21pbnVtaW51L0Rlc2t0b3AvUHJvamVjdC9zbGVhY3QvZnJvbnQvcGFnZXMvQ2hhbm5lbC9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOHB4KTtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfbG93LCAyOSwgMjgsIDI5KSwgMC4xMyk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgdmFyKC0tc2FmLTApO1xuICBwYWRkaW5nOiAyMHB4IDE2cHggMjBweCAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJiBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRHJhZ092ZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjRweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var DragOver = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "exhfy1p0",
  label: "DragOver"
})( false ? 0 : {
  name: "czjct4",
  styles: "position:absolute;top:64px;left:0;width:100%;height:calc(100% - 64px);background:white;opacity:0.7;display:flex;align-items:center;justify-content:center;font-size:40px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW51bWludS9EZXNrdG9wL1Byb2plY3Qvc2xlYWN0L2Zyb250L3BhZ2VzL0NoYW5uZWwvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmtDIiwiZmlsZSI6Ii9Vc2Vycy9taW51bWludS9EZXNrdG9wL1Byb2plY3Qvc2xlYWN0L2Zyb250L3BhZ2VzL0NoYW5uZWwvc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzhweCk7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgLS1zYWYtMDogcmdiYSh2YXIoLS1za19mb3JlZ3JvdW5kX2xvdywgMjksIDI4LCAyOSksIDAuMTMpO1xuICBib3gtc2hhZG93OiAwIDFweCAwIHZhcigtLXNhZi0wKTtcbiAgcGFkZGluZzogMjBweCAxNnB4IDIwcHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERyYWdPdmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY0cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuYDtcbiJdfQ== */",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxNQUFNLEdBQUcscUZBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQVo7QUFjQSxJQUFNRCxRQUFRLEdBQUcsa0ZBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9wYWdlcy9DaGFubmVsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9wYWdlcy9DaGFubmVsL3N0eWxlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBEcmFnT3ZlciwgSGVhZGVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IHVzZVNXUkluZmluaXRlIGZyb20gJ3N3ci9pbmZpbml0ZSc7XG5pbXBvcnQgZmV0Y2hlciBmcm9tICdAdXRpbHMvZmV0Y2hlcic7XG5pbXBvcnQgQ2hhdEJveCBmcm9tICdAY29tcG9uZW50cy9DaGF0Qm94JztcbmltcG9ydCBDaGF0TGlzdCBmcm9tICdAY29tcG9uZW50cy9DaGF0TGlzdCc7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnQGhvb2tzL3VzZUlucHV0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBJQ2hhbm5lbCwgSUNoYXQsIElETSwgSVVzZXIgfSBmcm9tICdAdHlwaW5ncy9kYic7XG5pbXBvcnQgbWFrZVNlY3Rpb24gZnJvbSAnQHV0aWxzL21ha2VTZWN0aW9ucyc7XG5pbXBvcnQgdXNlU29ja2V0IGZyb20gJ0Bob29rcy91c2VTb2NrZXQnO1xuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gJ3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzLTInO1xuaW1wb3J0IEludml0ZUNoYW5uZWxNb2RhbCBmcm9tICdAY29tcG9uZW50cy9JbnZpdGVDaGFubmVsTW9kYWwnO1xuaW1wb3J0IHsgQnNGaWxsUGVyc29uUGx1c0ZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuXG5pbXBvcnQgeyBiYWNrVXJsIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmNvbnN0IENoYW5uZWwgPSAoKSA9PiB7XG4gIGNvbnN0IHsgd29ya3NwYWNlLCBjaGFubmVsIH0gPSB1c2VQYXJhbXM8eyB3b3Jrc3BhY2U6IHN0cmluZzsgY2hhbm5lbDogc3RyaW5nIH0+KCk7XG5cbiAgY29uc3QgeyBkYXRhOiBteURhdGEgfSA9IHVzZVNXUihgJHtiYWNrVXJsfS9hcGkvdXNlcnNgLCBmZXRjaGVyKTtcbiAgY29uc3QgeyBkYXRhOiBjaGFubmVsRGF0YSB9ID0gdXNlU1dSPGFueT4oYCR7YmFja1VybH0vYXBpL3dvcmtzcGFjZXMvJHt3b3Jrc3BhY2V9L2NoYW5uZWxzYCwgZmV0Y2hlcik7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IGNoYXREYXRhLFxuICAgIG11dGF0ZTogbXV0YXRlQ2hhdCxcbiAgICBzZXRTaXplLFxuICB9ID0gdXNlU1dSSW5maW5pdGU8YW55PihcbiAgICAoaW5kZXgpID0+IGAke2JhY2tVcmx9L2FwaS93b3Jrc3BhY2VzLyR7d29ya3NwYWNlfS9jaGFubmVscy8ke2NoYW5uZWx9L2NoYXRzP3BlclBhZ2U9MjAmcGFnZT0ke2luZGV4ICsgMX1gLFxuICAgIGZldGNoZXIsXG4gICk7XG5cbiAgY29uc3QgeyBkYXRhOiBjaGFubmVsTWVtYmVyc0RhdGEgfSA9IHVzZVNXUjxhbnk+KFxuICAgIG15RGF0YSA/IGAke2JhY2tVcmx9L2FwaS93b3Jrc3BhY2VzLyR7d29ya3NwYWNlfS9jaGFubmVscy8ke2NoYW5uZWx9L21lbWJlcnNgIDogbnVsbCxcbiAgICBmZXRjaGVyLFxuICApO1xuICBjb25zdCBbc29ja2V0XSA9IHVzZVNvY2tldCh3b3Jrc3BhY2UpO1xuICBjb25zdCBbY2hhdCwgb25DaGFuZ2VDaGF0LCBzZXRDaGF0XSA9IHVzZUlucHV0KCcnKTtcbiAgY29uc3QgW3Nob3dJbnZpdGVDaGFubmVsTW9kYWwsIHNldFNob3dJbnZpdGVDaGFubmVsTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb25EcmFnZU92ZXIsIHNldE9uRHJhZ092ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzY3JvbGxiYXJSZWYgPSB1c2VSZWY8U2Nyb2xsYmFycz4obnVsbCk7XG5cbiAgY29uc3QgaXNFbXB0eSA9IGNoYXREYXRhPy5bMF0/Lmxlbmd0aCA9PT0gMDsgLy/rjbDsnbTthLDqsIAg642U7J207IOBIOyXhuuKlOqwgD9cbiAgY29uc3QgaXNSZWFjaGluZ0VuZCA9IGlzRW1wdHkgfHwgKGNoYXREYXRhICYmIGNoYXREYXRhW2NoYXREYXRhLmxlbmd0aCAtIDFdPy5sZW5ndGggPCAyMCk7IC8v66eI7KeA66eJIO2OmOydtOyngOyduOqwgD9cblxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGNoYXQ/LnRyaW0oKSAmJiBjaGF0RGF0YSAmJiBjaGFubmVsRGF0YSAmJiBteURhdGEpIHtcbiAgICAgICAgY29uc3Qgc2F2ZWRDaGF0ID0gY2hhdDtcbiAgICAgICAgbXV0YXRlQ2hhdCgocHJldkNoYXREYXRhKSA9PiB7XG4gICAgICAgICAgcHJldkNoYXREYXRhPy5bMF0udW5zaGlmdCh7XG4gICAgICAgICAgICBpZDogKGNoYXREYXRhWzBdWzBdPy5pZCB8fCAwKSArIDEsXG4gICAgICAgICAgICBjb250ZW50OiBzYXZlZENoYXQsXG4gICAgICAgICAgICBVc2VySWQ6IG15RGF0YS5pZCxcbiAgICAgICAgICAgIFVzZXI6IG15RGF0YSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIENoYW5uZWxJZDogY2hhbm5lbERhdGEuaWQsXG4gICAgICAgICAgICBDaGFubmVsOiBjaGFubmVsRGF0YSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gcHJldkNoYXREYXRhO1xuICAgICAgICB9LCBmYWxzZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7d29ya3NwYWNlfS0ke2NoYW5uZWx9YCwgbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgc2V0Q2hhdCgnJyk7XG4gICAgICAgICAgaWYgKHNjcm9sbGJhclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2Nyb2xsVG9Cb3R0b20hJywgc2Nyb2xsYmFyUmVmLmN1cnJlbnQ/LmdldFZhbHVlcygpKTtcbiAgICAgICAgICAgIHNjcm9sbGJhclJlZi5jdXJyZW50LnNjcm9sbFRvQm90dG9tKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAucG9zdChgJHtiYWNrVXJsfS9hcGkvd29ya3NwYWNlcy8ke3dvcmtzcGFjZX0vY2hhbm5lbHMvJHtjaGFubmVsfS9jaGF0c2AsIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHNhdmVkQ2hhdCxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGF0LCB3b3Jrc3BhY2UsIGNoYW5uZWwsIGNoYW5uZWxEYXRhLCBteURhdGEsIGNoYXREYXRhLCBtdXRhdGVDaGF0LCBzZXRDaGF0XSxcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3dvcmtzcGFjZX0tJHtjaGFubmVsfWAsIG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCkpO1xuICB9LCBbd29ya3NwYWNlLCBjaGFubmVsXSk7XG5cbiAgY29uc3Qgb25NZXNzYWdlID0gdXNlQ2FsbGJhY2soXG4gICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBkYXRhLkNoYW5uZWwubmFtZSA9PT0gY2hhbm5lbCAmJlxuICAgICAgICAoZGF0YS5jb250ZW50LnN0YXJ0c1dpdGgoJ3VwbG9hZHNcXFxcJykgfHwgZGF0YS5jb250ZW50LnN0YXJ0c1dpdGgoJ3VwbG9hZHMvJykgfHwgZGF0YS5Vc2VySWQgIT09IG15RGF0YT8uaWQpXG4gICAgICApIHtcbiAgICAgICAgbXV0YXRlQ2hhdCgoY2hhdERhdGEpID0+IHtcbiAgICAgICAgICBjaGF0RGF0YT8uWzBdLnVuc2hpZnQoZGF0YSk7XG4gICAgICAgICAgcmV0dXJuIGNoYXREYXRhO1xuICAgICAgICB9LCBmYWxzZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgaWYgKHNjcm9sbGJhclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHNjcm9sbGJhclJlZi5jdXJyZW50LmdldFNjcm9sbEhlaWdodCgpIDxcbiAgICAgICAgICAgICAgc2Nyb2xsYmFyUmVmLmN1cnJlbnQuZ2V0Q2xpZW50SGVpZ2h0KCkgKyBzY3JvbGxiYXJSZWYuY3VycmVudC5nZXRTY3JvbGxUb3AoKSArIDE1MFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzY3JvbGxUb0JvdHRvbSEnLCBzY3JvbGxiYXJSZWYuY3VycmVudD8uZ2V0VmFsdWVzKCkpO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzY3JvbGxiYXJSZWYuY3VycmVudD8uc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ+yDiCDrqZTsi5zsp4DqsIAg64+E7LCp7ZaI7Iq164uI64ukLicsIHtcbiAgICAgICAgICAgICAgICBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgc2Nyb2xsYmFyUmVmLmN1cnJlbnQ/LnNjcm9sbFRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hhbm5lbCwgbXlEYXRhLCBtdXRhdGVDaGF0XSxcbiAgKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBvbuyXkOyEoCDsnbTrsqTtirgg7J2066aELCBjYWxsYmFjayDtlajsiJhcbiAgICBzb2NrZXQ/Lm9uKCdjaGF0Jywgb25NZXNzYWdlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc29ja2V0Py5vZmYoJ2NoYXQnLCBvbk1lc3NhZ2UpO1xuICAgIH07XG4gIH0sIFtzb2NrZXQsIG9uTWVzc2FnZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNoYXREYXRhPy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHNjcm9sbGJhclJlZi5jdXJyZW50Py5zY3JvbGxUb0JvdHRvbSgpO1xuICAgIH1cbiAgfSwgW2NoYXREYXRhXSk7XG5cbiAgY29uc3QgY2hhdFNlY3Rpb25zID0gbWFrZVNlY3Rpb24oY2hhdERhdGEgPyAoW10gYXMgSURNW10pLmNvbmNhdCguLi5jaGF0RGF0YSkucmV2ZXJzZSgpIDogW10pO1xuXG4gIGNvbnN0IG9uQ2xpY2tJbnZpdGVDaGFubmVsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dJbnZpdGVDaGFubmVsTW9kYWwodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkNsb3NlTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2hvd0ludml0ZUNoYW5uZWxNb2RhbChmYWxzZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkRyb3AgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy9icm93c2Vy66eI64ukIGl0ZW1z64KYIGZpbGVz7JeQIOuLtOq5gFxuICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyLml0ZW1zKSB7XG4gICAgICAgIC8vIGRhdGFUcmFuc2Zlci5pdGVtc+yXkCDri7TquLTqsr3smrBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlLmRhdGFUcmFuc2Zlci5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlci5pdGVtc1tpXS5raW5kID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5pdGVtc1tpXS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRhdGFUcmFuc2Zlci5maWxlc+yXkCDri7TquLTqsr3smrBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlLmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBlLmRhdGFUcmFuc2Zlci5maWxlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF4aW9zLnBvc3QoYCR7YmFja1VybH0vYXBpL3dvcmtzcGFjZXMvJHt3b3Jrc3BhY2V9L2NoYW5uZWxzLyR7Y2hhbm5lbH0vaW1hZ2VzYCwgZm9ybURhdGEpLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRPbkRyYWdPdmVyKGZhbHNlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7d29ya3NwYWNlfS0ke2NoYW5uZWx9YCwgbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIFt3b3Jrc3BhY2UsIGNoYW5uZWxdLFxuICApO1xuXG4gIGNvbnN0IG9uRHJhZ092ZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCfrk5zrnpjqt7jspJEnKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0T25EcmFnT3Zlcih0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGlmICghY2hhbm5lbERhdGEgfHwgIW15RGF0YSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG9uRHJhZ092ZXI9e29uRHJhZ092ZXJ9IG9uRHJvcD17b25Ecm9wfT5cbiAgICAgIDxIZWFkZXI+XG4gICAgICAgIDxzcGFuPiN7Y2hhbm5lbH08L3NwYW4+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4OiAxLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgPHNwYW4+e2NoYW5uZWxNZW1iZXJzRGF0YSAmJiBjaGFubmVsTWVtYmVyc0RhdGFbMF0uTWVtYmVycy5sZW5ndGh9PC9zcGFuPlxuICAgICAgICAgIDxCc0ZpbGxQZXJzb25QbHVzRmlsbCBvbkNsaWNrPXtvbkNsaWNrSW52aXRlQ2hhbm5lbH0gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzVweCcgfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0hlYWRlcj5cbiAgICAgIDxDaGF0TGlzdFxuICAgICAgICBjaGF0RGF0YT17Y2hhdFNlY3Rpb25zfVxuICAgICAgICBzY3JvbGxiYXJSZWY9e3Njcm9sbGJhclJlZn1cbiAgICAgICAgaXNSZWFjaGluZ0VuZD17aXNSZWFjaGluZ0VuZH1cbiAgICAgICAgaXNFbXB0eT17aXNFbXB0eX1cbiAgICAgICAgc2V0U2l6ZT17c2V0U2l6ZX1cbiAgICAgIC8+XG4gICAgICA8Q2hhdEJveCBjaGF0PXtjaGF0fSBvbkNoYW5nZUNoYXQ9e29uQ2hhbmdlQ2hhdH0gb25TdWJtaXRGb3JtPXtvblN1Ym1pdEZvcm19IC8+XG4gICAgICA8SW52aXRlQ2hhbm5lbE1vZGFsXG4gICAgICAgIHNob3c9e3Nob3dJbnZpdGVDaGFubmVsTW9kYWx9XG4gICAgICAgIG9uQ2xvc2VNb2RhbD17b25DbG9zZU1vZGFsfVxuICAgICAgICBzZXRTaG93SW52aXRlQ2hhbm5lbE1vZGFsPXtzZXRTaG93SW52aXRlQ2hhbm5lbE1vZGFsfVxuICAgICAgLz5cbiAgICAgIDxUb2FzdENvbnRhaW5lciBwb3NpdGlvbj1cImJvdHRvbS1jZW50ZXJcIiBsaW1pdD17MX0gLz5cbiAgICAgIHtvbkRyYWdlT3ZlciAmJiA8RHJhZ092ZXI+7JeF66Gc65OcITwvRHJhZ092ZXI+fVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbm5lbDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzhweCk7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgLS1zYWYtMDogcmdiYSh2YXIoLS1za19mb3JlZ3JvdW5kX2xvdywgMjksIDI4LCAyOSksIDAuMTMpO1xuICBib3gtc2hhZG93OiAwIDFweCAwIHZhcigtLXNhZi0wKTtcbiAgcGFkZGluZzogMjBweCAxNnB4IDIwcHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERyYWdPdmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY0cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuYDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJDb250YWluZXIiLCJEcmFnT3ZlciIsIkhlYWRlciIsInVzZVNXUiIsInVzZVNXUkluZmluaXRlIiwiZmV0Y2hlciIsIkNoYXRCb3giLCJDaGF0TGlzdCIsInVzZUlucHV0IiwiYXhpb3MiLCJtYWtlU2VjdGlvbiIsInVzZVNvY2tldCIsIkludml0ZUNoYW5uZWxNb2RhbCIsIkJzRmlsbFBlcnNvblBsdXNGaWxsIiwidG9hc3QiLCJUb2FzdENvbnRhaW5lciIsImJhY2tVcmwiLCJDaGFubmVsIiwid29ya3NwYWNlIiwiY2hhbm5lbCIsIm15RGF0YSIsImRhdGEiLCJjaGFubmVsRGF0YSIsImluZGV4IiwiY2hhdERhdGEiLCJtdXRhdGVDaGF0IiwibXV0YXRlIiwic2V0U2l6ZSIsImNoYW5uZWxNZW1iZXJzRGF0YSIsInNvY2tldCIsImNoYXQiLCJvbkNoYW5nZUNoYXQiLCJzZXRDaGF0Iiwic2hvd0ludml0ZUNoYW5uZWxNb2RhbCIsInNldFNob3dJbnZpdGVDaGFubmVsTW9kYWwiLCJvbkRyYWdlT3ZlciIsInNldE9uRHJhZ092ZXIiLCJzY3JvbGxiYXJSZWYiLCJpc0VtcHR5IiwibGVuZ3RoIiwiaXNSZWFjaGluZ0VuZCIsIm9uU3VibWl0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJzYXZlZENoYXQiLCJwcmV2Q2hhdERhdGEiLCJ1bnNoaWZ0IiwiaWQiLCJjb250ZW50IiwiVXNlcklkIiwiVXNlciIsImNyZWF0ZWRBdCIsIkRhdGUiLCJDaGFubmVsSWQiLCJ0aGVuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldFRpbWUiLCJ0b1N0cmluZyIsImN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwiZ2V0VmFsdWVzIiwic2Nyb2xsVG9Cb3R0b20iLCJwb3N0IiwiY2F0Y2giLCJlcnJvciIsIm9uTWVzc2FnZSIsIm5hbWUiLCJzdGFydHNXaXRoIiwiZ2V0U2Nyb2xsSGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0IiwiZ2V0U2Nyb2xsVG9wIiwic2V0VGltZW91dCIsInN1Y2Nlc3MiLCJvbkNsaWNrIiwiY2xvc2VPbkNsaWNrIiwib24iLCJvZmYiLCJjaGF0U2VjdGlvbnMiLCJjb25jYXQiLCJyZXZlcnNlIiwib25DbGlja0ludml0ZUNoYW5uZWwiLCJvbkNsb3NlTW9kYWwiLCJvbkRyb3AiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZGF0YVRyYW5zZmVyIiwiaXRlbXMiLCJpIiwia2luZCIsImZpbGUiLCJnZXRBc0ZpbGUiLCJhcHBlbmQiLCJmaWxlcyIsIm9uRHJhZ092ZXIiLCJkaXNwbGF5IiwiZmxleCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIk1lbWJlcnMiLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==