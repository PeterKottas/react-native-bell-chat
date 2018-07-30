(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-native"));
	else if(typeof define === 'function' && define.amd)
		define(["react-native"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react-native")) : factory(root["react-native"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../lib/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(12);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultBubbleStyles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_native__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_native__);



const defaultBubbleStyles = {
    userBubble: {},
    recipientBubble: {},
    chatBubble: {},
    text: {},
    createdOn: {},
    recipientCreatedOn: {},
    loadingSpinnerColor: 'rgba(255, 255, 255, 0.55)',
    isSendIconColor: '#cddc39',
    systemChatBubbleContainerStyle: {}
};

class ChatBubble extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            mouseOverLastSeenContainer: false
        };
    }
    render() {
        if (!this.props.message) {
            return null;
        }
        const { yourAuthorId } = this.props;
        let { bubbleStyles } = this.props;
        bubbleStyles = bubbleStyles || defaultBubbleStyles;
        const { userBubble, chatBubble, text, recipientBubble } = bubbleStyles;
        const youAreAuthor = this.props.message.authorId === yourAuthorId;
        // message.id 0 is reserved for blue
        const chatBubbleStyles = [
            __WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].chatBubble,
            (youAreAuthor ? {} : __WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].recipientChatBubble),
            (youAreAuthor ? __WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].chatBubbleOrientationNormal : __WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].recipientChatBubbleOrientationNormal),
            (this.props.isFirstInGroup && (youAreAuthor ? __WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].firstChatBubbleInGroup : __WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].recipientFirstChatBubbleInGroup)),
            (this.props.isLastInGroup && (youAreAuthor ? __WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].lastChatBubbleInGroup : __WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].recipientLastChatBubbleInGroup)),
            (this.props.isCenterInGroup && (youAreAuthor ? __WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].centerChatBubbleInGroup : __WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].recipientCenterChatBubbleInGroup)),
            chatBubble,
            (youAreAuthor ? userBubble : recipientBubble),
        ];
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_native__["View"], { style: [
                __WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].chatBubbleWrapper,
            ] },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_native__["View"], { style: [...chatBubbleStyles] },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_native__["Text"], { style: [__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].p, text, (youAreAuthor ? bubbleStyles.userText : bubbleStyles.recipientText)] }, this.props.message.message),
                this.props.message.createdOn && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_native__["Text"], { style: [
                        __WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].createdOn,
                        (youAreAuthor ? bubbleStyles.createdOn : bubbleStyles.recipientCreatedOn)
                    ] }, this.props.message.createdOn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }))),
                this.props.message.isSend !== undefined && youAreAuthor && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_native__["Text"], { style: [
                        __WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].isSend,
                    ] }, this.props.message.isSend ?
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { width: "10px", height: "10px", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 10", preserveAspectRatio: "xMidYMid", style: { background: 'none' } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", Object.assign({ fill: bubbleStyles.isSendIconColor ? bubbleStyles.isSendIconColor : defaultBubbleStyles.isSendIconColor }, {}, { d: "M9,1.7L8.6,1.4C8.5,1.3,8.3,1.3,8.2,1.4L3.9,7C3.8,7.1,3.6,7.1,3.5,7c0,0,0,0,0,0L1.7,5.3c-0.1-0.1-0.3-0.1-0.4,0L1,5.6 C0.9,5.7,0.9,5.9,1,6l2.6,2.6c0.1,0.1,0.3,0.1,0.4,0L9,2.1C9.1,2,9.1,1.8,9,1.7z" })))
                    :
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { width: "10px", height: "10px", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", className: "lds-eclipse", style: { background: 'none' } },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { stroke: "none", d: "M10 50A40 40 0 0 0 90 50A40 45 0 0 1 10 50", fill: bubbleStyles.loadingSpinnerColor ? bubbleStyles.loadingSpinnerColor : defaultBubbleStyles.loadingSpinnerColor, transform: "rotate(78 50 52.5)" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("animateTransform", { attributeName: "transform", type: "rotate", calcMode: "linear", values: "0 50 52.5;360 50 52.5", keyTimes: "0;1", dur: "1s", begin: "0s", repeatCount: "indefinite" })))))),
            this.props.showRecipientLastSeenMessage && this.props.lastSeenByAuthors &&
                this.props.lastSeenByAuthors.length > 0 && this.props.customLastSeenAvatar &&
                (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_native__["View"], { style: __WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].lastSeenByContainer }, this.props.lastSeenByAuthors.map((a, i) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](this.props.customLastSeenAvatar, { key: i, author: a, containerStyle: Object.assign({}, (i > 0 && !this.state.mouseOverLastSeenContainer ? { marginTop: -12 } : { marginTop: -4 }), { zIndex: 100 + i }) })))))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ChatBubble;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_native__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_native__);


const styles = {
    container: {
        position: 'absolute',
        left: -50,
        top: 0,
        width: 40,
        height: 40,
        backgroundColor: 'rgb(153, 153, 153)',
        borderRadius: 20,
        borderTopRightRadius: 5,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'rgb(255,255,255)',
        lineHeight: 40,
        fontWeight: '400',
        textAlign: 'center',
    }
};
const Avatar = props => props.author && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_native__["View"], { style: [
        styles.container,
        props.avatarStyles && props.avatarStyles.containerStyle
    ] },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_native__["Text"], { style: [
            styles.text,
            props.avatarStyles && props.avatarStyles.textStyle
        ] }, props.author.avatarName ?
        props.author.avatarName
        :
            props.author.name.split(' ').map(part => part[0]).join('').toUpperCase().substr(0, 3))));
/* harmony default export */ __webpack_exports__["a"] = (Avatar);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ChatBubble__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_native__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_native__);



const styles = {
    container: {
        textAlign: 'center',
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.55)'
    },
};
const SystemChatBubble = (props) => {
    let { bubbleStyles } = props;
    bubbleStyles = bubbleStyles || __WEBPACK_IMPORTED_MODULE_1__ChatBubble__["b" /* defaultBubbleStyles */];
    const time = props.message.createdOn && props.message.createdOn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    return props.message && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_native__["View"], { style: [
            styles.container,
            bubbleStyles.systemChatBubbleContainerStyle
        ] },
        time && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_native__["Text"]
        /*title={props.message.createdOn.toLocaleString()}*/
        , null,
            time,
            ":",
            ' ')),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_native__["Text"], null, props.message.message)));
};
/* harmony default export */ __webpack_exports__["a"] = (SystemChatBubble);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_native__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_native__);


const styles = {
    container: {
        position: 'absolute',
        bottom: 2,
        left: 0,
        right: 0,
        color: 'rgb(204, 204, 204)',
        textAlign: 'center',
    }
};
const IsTyping = (props) => {
    return props.typingAuthors && props.typingAuthors.length > 0 && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_native__["Text"], { style: styles.container }, props.typingAuthors.map(a => a.name).join(', ').replace(/,(?!.*,)/gmi, ' and') + (props.typingAuthors.length === 1 ? ' is ' : ' are ') + 'typing'));
};
/* harmony default export */ __webpack_exports__["a"] = (IsTyping);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_native__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_native__);


const styles = {
    chatHistory: {
        padding: '0 10px',
    }
};
class ChatScrollArea extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.clientHeight = 0;
        this.scrollHeight = 0;
        this.scrollTop = 0;
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_native__["ScrollView"], { onLayout: event => {
                this.clientHeight = event.nativeEvent.layout.height;
            }, contentContainerStyle: { padding: 10 }, ref: scrollContainer => {
                this.scrollContainer = scrollContainer;
                this.props.apiRef && this.props.apiRef({
                    scrollToBottom: (animated = true) => scrollContainer &&
                        scrollContainer.scrollToEnd({
                            animated
                        }),
                    scrollTo: (top, animated = true) => scrollContainer && scrollContainer.scrollTo({
                        y: top,
                        animated
                    }),
                    scrolledToBottom: () => this.clientHeight + this.scrollTop >= this.scrollHeight,
                    scrolledToLoadThreshold: () => this.scrollContainer && this.scrollTop <= this.props.loadOldMessagesThreshold,
                    scrollTop: () => this.scrollContainer && this.scrollTop,
                    scrollHeight: () => this.scrollContainer && this.scrollHeight,
                    clientHeight: () => this.scrollContainer && this.clientHeight,
                });
            }, style: [
                styles.chatHistory,
                (this.props.maxHeight !== undefined ? { maxHeight: this.props.maxHeight } : {}),
                (this.props.minHeight !== undefined ? { minHeight: this.props.minHeight } : {}),
                this.props.containerStyles
            ], onScroll: e => {
                if (this.scrollContainer && e.nativeEvent.contentOffset.y <= this.props.loadOldMessagesThreshold) {
                    this.props.onLoadOldMessages();
                }
                this.scrollTop = e.nativeEvent.contentOffset.y;
            }, scrollEventThrottle: 16 },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_native__["View"], { onLayout: event => {
                    this.scrollHeight = event.nativeEvent.layout.height + 20;
                } }, this.props.children)));
    }
}
/* unused harmony export ChatScrollArea */

/* harmony default export */ __webpack_exports__["a"] = (ChatScrollArea);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_native__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_native__);


const styles = {
    container: {
        width: 20,
        height: 20,
        backgroundColor: 'rgb(153, 153, 153)',
        borderRadius: 10,
        textAlign: 'center',
        transition: '0.3s all ease-in-out',
    },
    text: {
        color: 'white',
        fontSize: 10,
        lineHeight: 20,
        fontWeight: '400',
    }
};
const LastSeenAvatar = props => props.author && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_native__["View"], { style: [
        styles.container,
        props.containerStyle
    ] },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_native__["Text"], { style: [styles.text, props.textStyle] }, props.author.lastSeenAvatarName ?
        props.author.lastSeenAvatarName
        :
            props.author.name[0].toUpperCase())));
/* harmony default export */ __webpack_exports__["a"] = (LastSeenAvatar);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ChatBubble__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SystemChatBubble__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Avatar__ = __webpack_require__(3);





class BubbleGroup extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
    }
    renderGroup(messages, author) {
        const { bubblesCentered, bubbleStyles, showRecipientAvatar, customChatBubble, customSystemChatBubble, showRecipientLastSeenMessage, customLastSeenAvatar } = this.props;
        const ChatBubble = customChatBubble || __WEBPACK_IMPORTED_MODULE_1__ChatBubble__["a" /* default */];
        const SystemChatBubble = customSystemChatBubble || __WEBPACK_IMPORTED_MODULE_2__SystemChatBubble__["a" /* default */];
        const messageNodes = messages.map((message, i) => {
            const props = {
                yourAuthorId: this.props.yourAuthorId,
                author,
                message,
                bubblesCentered,
                bubbleStyles,
                isFirstInGroup: i === 0,
                isLastInGroup: i === messages.length - 1 && messages.length > 1,
                isCenterInGroup: i < messages.length - 1 && messages.length > 1,
                lastSeenByAuthors: this.props.authors && this.props.authors.filter(a => a.lastSeenMessageId !== undefined && a.lastSeenMessageId === message.id),
                showRecipientLastSeenMessage,
                customLastSeenAvatar
            };
            return message.authorId !== undefined ?
                (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ChatBubble, Object.assign({ key: i }, props)))
                :
                    (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](SystemChatBubble, Object.assign({ key: i }, props)));
        });
        const youAreAuthor = author && this.props.yourAuthorId === author.id;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: __WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].chatBubbleWrapper },
            !youAreAuthor && showRecipientAvatar && author && this.props.customAvatar &&
                this.props.customAvatar({ author: this.props.author }),
            messageNodes));
    }
    render() {
        const { messages, author } = this.props;
        return this.renderGroup(messages, author);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BubbleGroup;

BubbleGroup.defaultProps = {
    messages: [],
    author: undefined,
    customAvatar: __WEBPACK_IMPORTED_MODULE_4__Avatar__["a" /* default */],
    showRecipientLastSeenMessage: false
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_native__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_native__);


const styles = {
    container: {
        textAlign: 'center',
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.55)'
    },
};
const DateRow = (props) => {
    return props.date && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_native__["Text"], { style: [
            styles.container,
            props.containerStyles
        ] }, props.date.toLocaleDateString()));
};
/* harmony default export */ __webpack_exports__["a"] = (DateRow);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_native__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_native__);


const styles = {
    containerStyles: {
        display: 'flex',
        marginBottom: 10
    },
};
const LoadingMessages = (props) => {
    const { containerStyles } = props;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_native__["View"], { style: [styles.containerStyles, containerStyles] },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { width: "40px", height: "40px", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", style: {
                background: 'none',
                margin: 'auto',
                fill: props.spinnerColor, opacity: props.isVisible ? 1 : 0,
                transition: '0.3s all ease-in-out'
            } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Loading messages"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { stroke: "none", d: "M10 50A40 40 0 0 0 90 50A40 46 0 0 1 10 50", transform: "rotate(42 50 53)" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("animateTransform", { attributeName: "transform", type: "rotate", calcMode: "linear", values: "0 50 53;360 50 53", keyTimes: "0;1", dur: "1s", begin: "0s", repeatCount: "indefinite" })))));
};
LoadingMessages.defaultProps = {
    spinnerColor: 'rgb(0, 132, 255)'
};
/* harmony default export */ __webpack_exports__["a"] = (LoadingMessages);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ChatBubble___ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Avatar___ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IsTyping___ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ChatScrollArea___ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LastSeenAvatar___ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BubbleGroup__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ChatFeed___ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ChatInput___ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SystemChatBubble___ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__DateRow___ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__LoadingMessages___ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ChatFeed", function() { return __WEBPACK_IMPORTED_MODULE_6__ChatFeed___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ChatInput", function() { return __WEBPACK_IMPORTED_MODULE_7__ChatInput___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingMessages", function() { return __WEBPACK_IMPORTED_MODULE_10__LoadingMessages___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DateRow", function() { return __WEBPACK_IMPORTED_MODULE_9__DateRow___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBubble", function() { return __WEBPACK_IMPORTED_MODULE_0__ChatBubble___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SystemChatBubble", function() { return __WEBPACK_IMPORTED_MODULE_8__SystemChatBubble___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleGroup", function() { return __WEBPACK_IMPORTED_MODULE_5__BubbleGroup__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return __WEBPACK_IMPORTED_MODULE_1__Avatar___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LastSeenAvatar", function() { return __WEBPACK_IMPORTED_MODULE_4__LastSeenAvatar___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IsTyping", function() { return __WEBPACK_IMPORTED_MODULE_2__IsTyping___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ChatScrollArea", function() { return __WEBPACK_IMPORTED_MODULE_3__ChatScrollArea___["a"]; });














/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.3.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var m=__webpack_require__(13),n=__webpack_require__(14),p=__webpack_require__(15),q=__webpack_require__(16),r="function"===typeof Symbol&&Symbol["for"],t=r?Symbol["for"]("react.element"):60103,u=r?Symbol["for"]("react.portal"):60106,v=r?Symbol["for"]("react.fragment"):60107,w=r?Symbol["for"]("react.strict_mode"):60108,x=r?Symbol["for"]("react.provider"):60109,y=r?Symbol["for"]("react.context"):60110,z=r?Symbol["for"]("react.async_mode"):60111,A=r?Symbol["for"]("react.forward_ref"):
60112,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b=arguments.length-1,e="http://reactjs.org/docs/error-decoder.html?invariant\x3d"+a,c=0;c<b;c++)e+="\x26args[]\x3d"+encodeURIComponent(arguments[c+1]);n(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};
function E(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||D}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?C("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||D}var H=G.prototype=new F;
H.constructor=G;m(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J=Object.prototype.hasOwnProperty,K={key:!0,ref:!0,__self:!0,__source:!0};
function L(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)J.call(b,c)&&!K.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var k=Array(f),l=0;l<f;l++)k[l]=arguments[l+2];d.children=k}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:t,type:a,key:g,ref:h,props:d,_owner:I.current}}
function M(a){return"object"===typeof a&&null!==a&&a.$$typeof===t}function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var N=/\/+/g,O=[];function P(a,b,e,c){if(O.length){var d=O.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function Q(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>O.length&&O.push(a)}
function R(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case t:case u:g=!0}}if(g)return e(c,a,""===b?"."+S(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+S(d,h);g+=R(d,f,e,c)}else if(null===a||"undefined"===typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),
h=0;!(d=a.next()).done;)d=d.value,f=b+S(d,h++),g+=R(d,f,e,c);else"object"===d&&(e=""+a,C("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function S(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function T(a,b){a.func.call(a.context,b,a.count++)}
function U(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,e,q.thatReturnsArgument):null!=a&&(M(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(N,"$\x26/")+"/")+e,a={$$typeof:t,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a))}function V(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(N,"$\x26/")+"/");b=P(b,g,c,d);null==a||R(a,"",U,b);Q(b)}
var W={Children:{map:function(a,b,e){if(null==a)return a;var c=[];V(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=P(null,null,b,e);null==a||R(a,"",T,b);Q(b)},count:function(a){return null==a?0:R(a,"",q.thatReturnsNull,null)},toArray:function(a){var b=[];V(a,b,null,q.thatReturnsArgument);return b},only:function(a){M(a)?void 0:C("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:y,
_calculateChangedBits:b,_defaultValue:a,_currentValue:a,_changedBits:0,Provider:null,Consumer:null};a.Provider={$$typeof:x,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:A,render:a}},Fragment:v,StrictMode:w,unstable_AsyncMode:z,createElement:L,cloneElement:function(a,b,e){null===a||void 0===a?C("267",a):void 0;var c=void 0,d=m({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=I.current);void 0!==b.key&&(g=""+b.key);var k=void 0;a.type&&a.type.defaultProps&&
(k=a.type.defaultProps);for(c in b)J.call(b,c)&&!K.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==k?k[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){k=Array(c);for(var l=0;l<c;l++)k[l]=arguments[l+2];d.children=k}return{$$typeof:t,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=L.bind(null,a);b.type=a;return b},isValidElement:M,version:"16.3.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:I,assign:m}},X=Object.freeze({default:W}),
Y=X&&W||X;module.exports=Y["default"]?Y["default"]:Y;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const styles = {
    chatBubbleWrapper: {
        position: 'relative',
        marginBottom: 2,
        display: 'flex'
    },
    chatBubble: {
        position: 'relative',
        backgroundColor: '#0084FF',
        borderRadius: 7,
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: '80%',
        paddingTop: 8,
        paddingBottom: 10,
        paddingLeft: 14,
        paddingRight: 14,
    },
    chatBubbleOrientationNormal: {
        marginRight: 0,
    },
    recipientChatBubble: {
        backgroundColor: '#ccc',
    },
    recipientChatBubbleOrientationNormal: {
        marginLeft: 0,
    },
    p: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '300',
        margin: 0,
        marginRight: 30
    },
    firstChatBubbleInGroup: {
        borderTopRightRadius: 0
    },
    recipientFirstChatBubbleInGroup: {
        borderTopLeftRadius: 0
    },
    lastChatBubbleInGroup: {
        borderTopRightRadius: 0
    },
    recipientLastChatBubbleInGroup: {
        borderTopLeftRadius: 0
    },
    centerChatBubbleInGroup: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    recipientCenterChatBubbleInGroup: {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0
    },
    createdOn: {
        position: 'absolute',
        right: 14,
        bottom: 2,
        fontSize: 9,
        color: 'rgba(255, 255, 255, 0.55)'
    },
    isSend: {
        position: 'absolute',
        right: 2,
        bottom: 2,
        fontSize: 9,
    },
    lastSeenByContainer: {
        position: 'absolute',
        right: -30,
        top: 0,
        width: 20,
        height: '100%',
    }
};
/* harmony default export */ __webpack_exports__["a"] = (styles);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    chatBubbleWrapper: {
        marginTop: 10,
        marginBottom: 10,
        position: 'relative',
    },
    bubbleGroupHeader: {
        margin: 0,
        fontSize: 14,
        fontWeight: 400,
        color: '#999',
    },
});


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BubbleGroup__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ChatBubble__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Avatar__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__IsTyping__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ChatScrollArea__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__LastSeenAvatar__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_utils__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__DateRow__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__LoadingMessages__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__SystemChatBubble__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_native__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_native__);
// Copyright 2017 Brandon Mowat
// Written, developed, and designed by Brandon Mowat for the purpose of helping
// other developers make chat interfaces.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};













const DefaultChatBubbleFunc = props => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__ChatBubble__["a" /* default */], Object.assign({}, props));
const DefaultScrollAreaFunc = props => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__ChatScrollArea__["a" /* default */], Object.assign({}, props));
// React component to render a complete chat feed
class ChatFeed extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.onLoadOldMessages = this.onLoadOldMessages.bind(this);
        this.state = {
            isLoadingMessages: false
        };
    }
    onMessageSend() {
        this.scrollApi && this.scrollApi.scrollToBottom();
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (this.shallowDiffers(this.props, nextProps) ||
            this.shallowDiffers(this.state, nextState));
    }
    componentDidMount() {
        this.scrollApi && this.scrollApi.scrollToBottom(false);
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        const wasScrolledToBottom = this.scrollApi && this.scrollApi.scrolledToBottom();
        const scrollHeight = this.scrollApi && this.scrollApi.scrollHeight();
        const clientHeight = this.scrollApi && this.scrollApi.clientHeight();
        return {
            wasScrolledToBottom,
            scrollHeight,
            clientHeight
        };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.messages.length !== prevProps.messages.length && snapshot && snapshot.wasScrolledToBottom) {
            this.scrollApi.scrollToBottom(false);
        }
        else if (this.props.messages.length !== prevProps.messages.length && snapshot && prevState.isLoadingMessages) {
            const scrollHeight = this.scrollApi && this.scrollApi.scrollHeight();
            this.scrollApi.scrollTo(scrollHeight - snapshot.scrollHeight, false);
        }
    }
    shallowDiffers(a, b) {
        for (let i in a) {
            if (!(i in b)) {
                return true;
            }
        }
        for (let i in b) {
            if (a[i] !== b[i]) {
                return true;
            }
        }
        return false;
    }
    /**
     * Determines what type of message/messages to render.
     */
    renderMessages(messages) {
        const { bubbleStyles, customChatBubble, showRecipientAvatar } = this.props;
        // First group by days
        const groups = Object(__WEBPACK_IMPORTED_MODULE_8__utils_utils__["a" /* groupBy */])(messages, item => item.createdOn && item.createdOn.toDateString());
        let messageNodes = [];
        let jsxKey = 0;
        Object.keys(groups).forEach(key => {
            let group = [];
            const messagesGroup = groups[key];
            if (messagesGroup[0] && messagesGroup[0].createdOn && this.props.showDateRow) {
                messageNodes.push(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](this.props.customDateRow, { key: key, date: messagesGroup[0].createdOn }));
            }
            messageNodes = messageNodes.concat(messagesGroup.map((message, index) => {
                group.push(message);
                // Find diff in message type or no more messages
                if (!messagesGroup[index + 1] || messagesGroup[index + 1].authorId !== message.authorId) {
                    const messageGroup = group;
                    const author = this.props.authors && this.props.authors.filter(a => a.id === message.authorId)[0];
                    group = [];
                    jsxKey++;
                    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__BubbleGroup__["a" /* default */], { key: jsxKey, yourAuthorId: this.props.yourAuthorId, messages: messageGroup, author: author, authors: this.props.authors, showRecipientAvatar: showRecipientAvatar, customChatBubble: customChatBubble, bubbleStyles: bubbleStyles, showRecipientLastSeenMessage: this.props.showRecipientLastSeenMessage, customAvatar: this.props.customAvatar, customLastSeenAvatar: this.props.customLastSeenAvatar, customSystemChatBubble: this.props.customSystemChatBubble }));
                }
                return null;
            }));
        });
        return messageNodes;
    }
    renderIsTyping() {
        const typingAuthors = this.props.authors && this.props.authors.filter(a => a.isTyping && a.id !== this.props.yourAuthorId);
        if (!typingAuthors || typingAuthors.length === 0) {
            return null;
        }
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__IsTyping__["a" /* default */], { typingAuthors: typingAuthors });
    }
    /**
     * render : renders our chat feed
     */
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_react_native__["View"], { style: [
                __WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].chatPanel
            ] },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](this.props.customScrollArea, { minHeight: this.props.minHeight, maxHeight: this.props.maxHeight, apiRef: e => this.scrollApi = e, loadOldMessagesThreshold: this.props.loadOldMessagesThreshold, onLoadOldMessages: this.onLoadOldMessages },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_react_native__["View"], { style: [
                        __WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].chatMessages,
                        (this.props.showRecipientAvatar && __WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].showRecipientAvatarChatMessagesStyle),
                        (this.props.showRecipientAvatar && this.props.showRecipientAvatarChatMessagesStyle),
                        (this.props.showIsTyping && __WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].showIsTypingChatMessagesStyle),
                        (this.props.showIsTyping && this.props.showIsTypingChatMessagesStyle),
                        (this.props.showRecipientLastSeenMessage && __WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].showRecipientLastSeenMessageChatMessagesStyle),
                        (this.props.showRecipientLastSeenMessage && this.props.showRecipientLastSeenMessageChatMessagesStyle),
                    ] },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](this.props.customLoadingMessages, { isVisible: this.props.showLoadingMessages || this.state.isLoadingMessages }),
                    this.renderMessages(this.props.messages),
                    this.props.showIsTyping && this.renderIsTyping()))));
    }
    onLoadOldMessages() {
        if (!this.state.isLoadingMessages && this.props.hasOldMessages) {
            return new Promise(resolve => {
                this.setState({
                    isLoadingMessages: true,
                }, () => resolve());
            }).then(() => __awaiter(this, void 0, void 0, function* () {
                if (this.props.onLoadOldMessages) {
                    yield this.props.onLoadOldMessages();
                }
            })).then(() => __awaiter(this, void 0, void 0, function* () {
                yield new Promise(resolve => {
                    this.setState({
                        isLoadingMessages: false,
                    }, () => {
                        if (this.scrollApi.scrolledToLoadThreshold()) {
                            this.scrollApi.scrollTo(this.props.loadOldMessagesThreshold + 1, false);
                        }
                        resolve();
                    });
                });
            }));
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ChatFeed;

ChatFeed.defaultProps = {
    messages: [],
    authors: [],
    customChatBubble: DefaultChatBubbleFunc,
    customAvatar: __WEBPACK_IMPORTED_MODULE_4__Avatar__["a" /* default */],
    customScrollArea: DefaultScrollAreaFunc,
    customLastSeenAvatar: __WEBPACK_IMPORTED_MODULE_7__LastSeenAvatar__["a" /* default */],
    customDateRow: __WEBPACK_IMPORTED_MODULE_9__DateRow__["a" /* default */],
    customLoadingMessages: __WEBPACK_IMPORTED_MODULE_10__LoadingMessages__["a" /* default */],
    yourAuthorId: 0,
    loadOldMessagesThreshold: 50,
    customSystemChatBubble: __WEBPACK_IMPORTED_MODULE_11__SystemChatBubble__["a" /* default */]
};


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    chatPanel: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflow: 'hidden',
        position: 'relative'
    },
    showRecipientAvatarChatMessagesStyle: {
        paddingLeft: 50
    },
    showIsTypingChatMessagesStyle: {
        paddingBottom: 24,
        position: 'relative'
    },
    showRecipientLastSeenMessageChatMessagesStyle: {
        paddingRight: 30,
    },
    chatBubbleWrapper: {
        marginTop: 10,
        marginBottom: 10,
        overflow: 'visible',
    },
    img: {
        borderRadius: 100,
        bottom: 0,
        left: 0,
        position: 'absolute',
        width: 36,
        zIndex: 100,
    },
    chatMessages: {
        paddingBottom: 10,
        paddingTop: 10,
    }
});


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return groupBy; });
const groupBy = (array, groupingKeyFn) => {
    if (typeof groupingKeyFn !== 'function') {
        throw new Error("groupBy take a function as only parameter");
    }
    return array.reduce((result, item) => {
        let key = groupingKeyFn(item);
        if (!result[key])
            result[key] = [];
        result[key].push(item);
        return result;
    }, {});
};



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_native__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_native__);


const styles = {
    chatInput: {
        flex: 1,
    },
    inputStyle: {
        border: 'none',
        borderTopWidth: '1',
        borderTopStyle: 'solid',
        borderTopColor: '#ddd',
        fontSize: '16',
        outline: 'none',
        padding: '30',
        width: '100%',
    },
};
const ChatInput = (props) => {
    const { inputStyles, inputPlaceholder } = props;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_native__["View"], { style: styles.chatInput },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_native__["TextInput"], { style: [inputStyles || styles.inputStyle], placeholder: inputPlaceholder })));
};
/* harmony default export */ __webpack_exports__["a"] = (ChatInput);


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map