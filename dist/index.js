/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js?!./scss/main.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/lib/loader.js??ref--5-2!./scss/main.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0-modified | 20110126\r\n   License: none (public domain)\r\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n  outline: 0; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box; }\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical; }\n\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%; }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\n[hidden] {\n  display: none; }\n\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-size: 100%;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\na:focus {\n  outline: thin dotted; }\n\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\na:active,\na:hover {\n  outline: 0; }\n\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\nimg {\n  border: 0;\n  /* 1 */\n  -ms-interpolation-mode: bicubic;\n  /* 2 */ }\n\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\nfigure {\n  margin: 0; }\n\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\nform {\n  margin: 0; }\n\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  white-space: normal;\n  /* 2 */\n  *margin-left: -7px;\n  /* 3 */ }\n\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  vertical-align: baseline;\n  /* 3 */\n  *vertical-align: middle;\n  /* 3 */ }\n\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\nbutton,\ninput {\n  line-height: normal; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n  *overflow: visible;\n  /* 4 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n  *height: 13px;\n  /* 3 */\n  *width: 13px;\n  /* 3 */ }\n\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */ }\n\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #222; }\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none; }\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none; }\n\nimg {\n  vertical-align: middle; }\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\ntextarea {\n  resize: vertical; }\n\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0; }\n\na {\n  text-decoration: none;\n  color: #000; }\n\n.loader {\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  top: 0;\n  color: #fff;\n  background-color: #000;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: bold;\n  overflow: hidden;\n  z-index: 1;\n  animation: loaderSlideUp 1s 5s ease-in-out both; }\n\n@keyframes loaderSlideUp {\n  100% {\n    top: -100vh; } }\n  .loader__header {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n    .loader__header-text {\n      display: inline;\n      font-size: 1.2em;\n      opacity: 0;\n      animation: showHeader 3.3s 0.5s ease-in-out both; }\n\n@keyframes showHeader {\n  30% {\n    opacity: 1; }\n  99% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n      @media (min-width: 768px) {\n        .loader__header-text {\n          font-size: 1.6em; } }\n      @media (min-width: 1024px) {\n        .loader__header-text {\n          font-size: 1.6em; } }\n    .loader__header::after {\n      content: \"\";\n      position: absolute;\n      height: 60px;\n      top: -40%;\n      left: 0;\n      right: 100%;\n      background-color: #fff;\n      animation: showAfter 1.5s 2.2s ease-out both,\r leaveAfter 2s 4s ease-in both; }\n\n@keyframes showAfter {\n  50% {\n    left: 0;\n    right: 0; }\n  100% {\n    left: 100%;\n    right: 0; } }\n\n@keyframes leaveAfter {\n  100% {\n    left: 300%; } }\n      @media (min-width: 768px) {\n        .loader__header::after {\n          top: -80%;\n          height: 80px; } }\n      @media (min-width: 1024px) {\n        .loader__header::after {\n          top: -120%;\n          height: 100px; } }\n\n.header {\n  position: relative;\n  background-color: red;\n  min-height: 90vh; }\n\n.header__nav {\n  position: absolute;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 1; }\n  @media (min-width: 1024px) {\n    .header__nav {\n      background-color: #ff5252;\n      opacity: 0.8; } }\n\n.header__nav-logo {\n  position: relative;\n  left: -10%;\n  height: 10vh;\n  width: 30vw;\n  max-width: 500px;\n  background-color: rgba(255, 0, 119, 0.5);\n  opacity: 0;\n  animation: showNavEl 1.2s 1.2s ease-out both; }\n\n.header__nav__list {\n  width: 60vw;\n  max-width: 1000px;\n  padding-right: 5vh;\n  display: flex;\n  justify-content: space-around;\n  font-weight: bold; }\n  .header__nav__list-el .link {\n    position: relative;\n    left: 10%;\n    padding-bottom: 10px;\n    color: aliceblue;\n    opacity: 0;\n    animation: showNavEl 0.8s 1.2s ease-out both; }\n    .header__nav__list-el .link::after {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      right: 100%;\n      bottom: 5px;\n      height: 3px;\n      background-color: aliceblue;\n      transition: 0.4s; }\n  @media (max-width: 1024px) {\n    .header__nav__list {\n      display: none; } }\n  @media (min-width: 1440px) {\n    .header__nav__list {\n      font-size: 1.6em; } }\n\n.link:hover::after {\n  right: -5%; }\n\n@keyframes showNavEl {\n  100% {\n    left: 0;\n    opacity: 1; } }\n\n.header__slider-photo1 {\n  height: 90vh;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url(/public/img/foto1.jpg); }\n\n.header__slider-photo2 {\n  height: 90vh;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url(/public/img/foto2.jpg); }\n\n.header__slider-photo3 {\n  height: 90vh;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url(/public/img/foto3.jpg); }\n\n.header__slider-photo4 {\n  height: 90vh;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url(/public/img/foto4.jpg); }\n\n.header__description {\n  position: absolute;\n  top: 50%;\n  left: 10%;\n  right: 20%;\n  transform: translateY(-50%); }\n  .header__description-header {\n    padding-bottom: 3vh;\n    font-size: 1.8em;\n    font-weight: bold;\n    line-height: 130%;\n    color: #111; }\n    @media (min-width: 1024px) {\n      .header__description-header {\n        font-size: 2.6em;\n        line-height: 110%; } }\n    @media (min-width: 1440px) {\n      .header__description-header {\n        font-size: 4em; } }\n  .header__description-desc {\n    font-size: 1.5em; }\n    @media (min-width: 1024px) {\n      .header__description-desc {\n        font-size: 1.8em; } }\n    @media (min-width: 1440px) {\n      .header__description-desc {\n        font-size: 2.8em; } }\n\n.header-moreProjects {\n  position: absolute !important;\n  right: 0vw;\n  bottom: 5vh;\n  opacity: 0;\n  animation: showSliderButton 1.2s 1.2s ease-out both; }\n\n@keyframes showSliderButton {\n  100% {\n    right: 5vw;\n    opacity: 1; } }\n\n.header__mobileMenuButtonContainer {\n  position: fixed;\n  top: 7vw;\n  right: 7vw;\n  height: 27px;\n  width: 35px;\n  cursor: pointer;\n  z-index: 100;\n  transition: opacity 0.25s ease; }\n  .header__mobileMenuButtonContainer:hover {\n    opacity: 0.7; }\n  .header__mobileMenuButtonContainer.active .top {\n    transform: translateY(11px) translateX(0) rotate(45deg);\n    background: #fff; }\n  .header__mobileMenuButtonContainer.active .middle {\n    opacity: 0;\n    background: #fff; }\n  .header__mobileMenuButtonContainer.active .bottom {\n    transform: translateY(-11px) translateX(0) rotate(-45deg);\n    background: #fff; }\n  .header__mobileMenuButtonContainer span {\n    background: #ff5252;\n    border: none;\n    height: 5px;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: all 0.35s ease;\n    cursor: pointer; }\n    .header__mobileMenuButtonContainer span:nth-of-type(2) {\n      top: 11px; }\n    .header__mobileMenuButtonContainer span:nth-of-type(3) {\n      top: 22px; }\n\n.header__mobileContainer__menu {\n  position: fixed;\n  background: #ff5252;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 0%;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.35s, visibility 0.35s, height 0.35s;\n  overflow: hidden;\n  z-index: 3; }\n  .header__mobileContainer__menu.open {\n    opacity: 0.9;\n    visibility: visible;\n    height: 70%; }\n    .header__mobileContainer__menu.open li {\n      animation: fadeInRight 0.5s ease forwards;\n      animation-delay: 0.35s; }\n      .header__mobileContainer__menu.open li:nth-of-type(2) {\n        animation-delay: 0.4s; }\n      .header__mobileContainer__menu.open li:nth-of-type(3) {\n        animation-delay: 0.45s; }\n      .header__mobileContainer__menu.open li:nth-of-type(4) {\n        animation-delay: 0.5s; }\n      .header__mobileContainer__menu.open li:nth-of-type(5) {\n        animation-delay: 0.55s; }\n  .header__mobileContainer__menu-nav {\n    position: relative;\n    height: 70%;\n    top: 50%;\n    transform: translateY(-50%);\n    font-size: 2.5em;\n    font-family: \"Montserrat\", sans-serif;\n    font-weight: 400;\n    text-align: center; }\n  .header__mobileContainer__menu ul {\n    list-style: none;\n    padding: 0;\n    margin: 0 auto;\n    display: inline-block;\n    position: relative;\n    height: 100%; }\n    .header__mobileContainer__menu ul li {\n      display: block;\n      height: 25%;\n      height: calc(100% / 4);\n      min-height: 50px;\n      position: relative;\n      opacity: 0; }\n      .header__mobileContainer__menu ul li a {\n        position: relative;\n        color: #fff;\n        text-decoration: none;\n        overflow: hidden; }\n        .header__mobileContainer__menu ul li a:hover:after, .header__mobileContainer__menu ul li a:focus:after, .header__mobileContainer__menu ul li a:active:after {\n          width: 100%; }\n        .header__mobileContainer__menu ul li a:after {\n          content: \"\";\n          position: absolute;\n          bottom: 0;\n          left: 50%;\n          width: 0%;\n          transform: translateX(-50%);\n          height: 3px;\n          background: #fff;\n          transition: 0.35s; }\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    left: 20%; }\n  100% {\n    opacity: 1;\n    left: 0; } }\n\n@media (min-width: 1024px) {\n  .header__mobileContainer {\n    display: none; } }\n\n.about {\n  min-height: 200vh; }\n\n.Device-content {\n  position: absolute; }\n\nhtml,\nbody {\n  overflow: hidden; }\n\n.wrap {\n  position: relative;\n  font-family: \"Montserrat\", sans-serif; }\n", "",{"version":3,"sources":["C:/Users/jatan/Desktop/Repo/construction-business-landingpage/scss/partials/_reset.scss","main.scss","C:/Users/jatan/Desktop/Repo/construction-business-landingpage/scss/partials/components/_loader.scss","C:/Users/jatan/Desktop/Repo/construction-business-landingpage/scss/partials/_variables.scss","C:/Users/jatan/Desktop/Repo/construction-business-landingpage/scss/partials/components/_header.scss","C:/Users/jatan/Desktop/Repo/construction-business-landingpage/scss/partials/_mixins.scss","C:/Users/jatan/Desktop/Repo/construction-business-landingpage/scss/partials/components/_mobileMenu.scss","C:/Users/jatan/Desktop/Repo/construction-business-landingpage/scss/main.scss"],"names":[],"mappings":"AAAA;;;CCGC;ADED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB,EAAA;;AAG1B,yDAAA;AACA;EACE,UAAU,EAAA;;AAGZ,gDAAA;AACA;;;;;;;;;;;EAWE,cAAc,EAAA;;AAGhB;EACE,cAAc,EAAA;;AAGhB;;EAEE,gBAAgB,EAAA;;AAGlB;;EAEE,YAAY,EAAA;;AAGd;;;;EAIE,WAAW;EACX,aAAa,EAAA;;AAGf;EACE,yBAAyB;EACzB,iBAAiB,EAAA;;AAGnB;;;;EAIE,wBAAwB;EACxB,qBAAqB,EAAA;;AAGvB;EACE,wBAAwB;EACxB,qBAAqB;EACrB,+BAA+B;EAC/B,4BAA4B;EAC5B,uBAAuB,EAAA;;AAGzB;EACE,cAAc;EACd,mBAAmB;EACnB,gBAAgB,EAAA;;AAGlB;;ECVE;ADcF;;;EAGE,qBAAqB;GACrB,eAAgB;GAChB,OAAQ;EACR,eAAe,EAAA;;AAGjB;;;ECXE;ADgBF;EACE,aAAa;EACb,SAAS,EAAA;;AAGX;;;ECbE;AACF;EDkBE,aAAa,EAAA;;AAGf;;;;;ECbE;ADoBF;EACE,eAAe;EAAE,MAAA;EACjB,8BAA8B;EAAE,MAAA;EAChC,0BAA0B;EAAE,MAAA,EAAO;;AAGrC;;ECfE;ADmBF;EACE,oBAAoB,EAAA;;AAGtB;;ECjBE;ADqBF;;EAEE,UAAU,EAAA;;AAGZ;;;EClBE;ADuBF;EACE,SAAS;EAAE,MAAA;EACX,+BAA+B;EAAE,MAAA,EAAO;;AAG1C;;ECnBE;ADuBF;EACE,SAAS,EAAA;;AAGX;;ECrBE;ADyBF;EACE,SAAS,EAAA;;AAGX;;ECvBE;AD2BF;EACE,yBAAyB;EACzB,aAAa;EACb,8BAA8B,EAAA;;AAGhC;;;;ECvBE;AD6BF;EACE,SAAS;EAAE,MAAA;EACX,UAAU;EACV,mBAAmB;EAAE,MAAA;GACrB,iBAAkB;EAAE,MAAA,EAAO;;AAG7B;;;;;ECrBE;AD4BF;;;;EAIE,eAAe;EAAE,MAAA;EACjB,SAAS;EAAE,MAAA;EACX,wBAAwB;EAAE,MAAA;GAC1B,sBAAuB;EAAE,MAAA,EAAO;;AAGlC;;;ECrBE;AD0BF;;EAEE,mBAAmB,EAAA;;AAGrB;;;;;ECrBE;AD4BF;;EAEE,oBAAoB,EAAA;;AAGtB;;;;;;;;ECpBE;AD8BF;;;;EAIE,0BAA0B;EAAE,MAAA;EAC5B,eAAe;EAAE,MAAA;GACjB,iBAAkB;EAAE,MAAA,EAAO;;AAG7B;;ECzBE;AD6BF;;EAEE,eAAe,EAAA;;AAGjB;;;;;ECxBE;AD+BF;;EAEE,sBAAsB;EAAE,MAAA;EACxB,UAAU;EAAE,MAAA;GACZ,YAAa;EAAE,MAAA;GACf,WAAY;EAAE,MAAA,EAAO;;AAGvB;;;;ECvBE;AD6BF;EACE,6BAA6B;EAAE,MAAA;EAC/B,4BAA4B;EAC5B,+BAA+B;EAAE,MAAA;EACjC,uBAAuB,EAAA;;AAGzB;;;ECxBE;AD6BF;;EAEE,wBAAwB,EAAA;;AAG1B;;EC3BE;AD+BF;;EAEE,SAAS;EACT,UAAU,EAAA;;AAGZ;;;EC5BE;ADiCF;EACE,cAAc;EAAE,MAAA;EAChB,mBAAmB;EAAE,MAAA,EAAO;;AAG9B;;EC7BE;ADiCF;EACE,yBAAyB;EACzB,iBAAiB,EAAA;;AAGnB;;;;;EAKE,WAAW,EAAA;;AAGb;EACE,mBAAmB;EACnB,iBAAiB,EAAA;;AAGnB;EACE,mBAAmB;EACnB,iBAAiB,EAAA;;AAGnB;EACE,sBAAsB,EAAA;;AAGxB;EACE,SAAS;EACT,SAAS;EACT,UAAU,EAAA;;AAGZ;EACE,gBAAgB,EAAA;;AAGlB;EACE,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,gBAAgB,EAAA;;AAGlB;EACE,qBAAqB;EACrB,WAAW,EAAA;;AE/bb;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,WCLiB;EDMjB,sBCPsB;EDQtB,qCCN0C;EDO1C,iBAAiB;EACjB,gBAAgB;EAChB,UAAU;EACV,+CAA+C,EAAA;;AAC/C;EACE;IACE,WAAW,EAAA,EAAA;EAGf;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC,EAAA;IAEhC;MACE,eAAe;MACf,gBAAgB;MAChB,UAAU;MACV,gDAAgD,EAAA;;AAChD;EACE;IACE,UAAU,EAAA;EAEZ;IACE,UAAU,EAAA;EAEZ;IACE,UAAU,EAAA,EAAA;MAGd;QAhBF;UAiBI,gBAAgB,EAAA,EAKnB;MAHC;QAnBF;UAoBI,gBAAgB,EAAA,EAEnB;IA5BF;MA8BG,WAAW;MACX,kBAAkB;MAClB,YAAY;MACZ,SAAS;MACT,OAAO;MACP,WAAW;MACX,sBAAsB;MACtB,4EDoZwB,EAAE;;AAEhC;EACE;IClZQ,OAAO;IAGT,QAAI,EAAA;EDkZV;IChZQ,UAAQ;IDkZd,QAAQ,EAAE,EAAE;;AAEhB;EACE;IACE,UC7YU,EAAA,EAAA;MD8YR;QACE;UC7YA,SAAQ;UAEV,YAAQ,EAAS,EAAE;MD8YnB;QACE;UC7YA,UAAQ;UD+YN,aAAa,EAAE,EAAE;;AAE3B;EG9dE,kBDEkB;ECDlB,qBACD;EH+dC,gBAAgB,EAAE;;AAEpB;EG7dE,kBAAO;EACP,OAAO;EACP,QAAO;EACP,aAAA;EACA,8BAAmB;EACnB,mBAKD;EAJC,UAAQ,EAAA;EH+dR;IACE;MG9dA,yBAEH;MH8dK,YAAY,EAAE,EAAE;;AAEtB;EG5dE,kBAAU;EACV,UAAQ;EACR,YAAW;EACX,WAAW;EACX,gBAAgB;EAChB,wCAAU;EACV,UAAS;EH8dT,4CAA4C,EAAE;;AAEhD;EG3dE,WAAW;EACX,iBAAe;EACf,kBAAa;EACb,aAAA;EACA,6BA4BD;EA3BE,iBAAA,EAAA;EH6dD;IG1dI,kBAAS;IACT,SAAA;IACA,oBDrCY;ICsCZ,gBAAU;IACV,UAAS;IAPZ,4CAQY,EAAA;IH4dX;MG1dI,WAAU;MACV,kBAAO;MACP,OAAO;MACP,WAAW;MACX,WAAW;MACX,WAAA;MACA,2BACD;MAGL,gBAAmB,EAAA;EHydnB;IACE;MGtdF,aAAiB,EAAE,EAAA;EHwdnB;IACE;MACE,gBAAgB,EAAE,EAAE;;AAE1B;EACE,UAAU,EAAE;;AAEd;EACE;IGpdE,OAAO;IHsdP,UAAU,EAAE,EAAE;;AAElB;EIhiBE,YAAA;EACA,4BAA2B;EAC3B,2BAAsB;EDsFpB,sBAAkB;EH6cpB,4CAA4C,EAAE;;AAEhD;EIviBE,YAAA;EACA,4BAA2B;EAC3B,2BAAsB;ED0FpB,sBAAkB;EHgdpB,4CAA4C,EAAE;;AAEhD;EI9iBE,YAAA;EACA,4BAA2B;EAC3B,2BAAsB;ED8FpB,sBAAkB;EHmdpB,4CAA4C,EAAE;;AAEhD;EIrjBE,YAAA;EACA,4BAA2B;EAC3B,2BAAsB;EDkGpB,sBAAkB;EHsdpB,4CAA4C,EAAE;;AAEhD;EGldE,kBAAQ;EACR,QAAM;EACN,SAAO;EACP,UAAS;EACT,2BAAQ,EAAC;EHodT;IGldE,mBAAgB;IAChB,gBAAa;IACb,iBAAiB;IACjB,iBAQD;IAPC,WAAQ,EAAA;IHodR;MACE;QGndA,gBAAa;QAEf,iBAAmB,EAAA,EAAM;IHodzB;MACE;QGhdJ,cAAA,EAAA,EAAA;EHkdA;IGhdE,gBAAQ,EAAS;IHkdjB;MACE;QGhdF,gBAAmB,EAAA,EAAA;IHkdnB;MACE;QACE,gBAAgB,EAAE,EAAE;;AAE5B;EG9cE,6BAAU;EACV,UAAQ;EACR,WAAU;EACV,UAAS;EHgdT,mDAAmD,EAAE;;AAEvD;EACE;IG/cI,UAAU;IHidZ,UAAU,EAAE,EAAE;;AAElB;EKpmBE,eAAQ;EACR,QAAO;EACP,UHSc;EGRd,YHSiB;EGRjB,WAAQ;EACR,eAAY;EACZ,YAAY;EARd,8BAAA,EAAA;EL+mBE;IK/mBF,YAAA,EAAA;ELinBE;IKhmBI,uDACD;IAlBL,gBAAA,EAAA;ELonBE;IK/lBI,UAAU;IArBhB,gBAAA,EAAA;ELunBE;IK7lBI,yDACD;IA3BL,gBAAA,EAAA;EL0nBE;IK1lBE,mBAAY;IACZ,YAAW;IACX,WAAW;IACX,WAAU;IACV,kBAAM;IACN,MAAM;IACN,OAAA;IACA,0BASD;IAhDH,eAAA,EAAA;ILooBI;MKpoBJ,SAAA,EAAA;ILsoBI;MACE,SAAS,EAAE;;AAEjB;EKplBE,eH5CW;EG6CX,mBAAM;EACN,MAAM;EACN,OAAO;EACP,WAAU;EACV,UAAU;EACV,UAAU;EACV,kBAAY;EACZ,yDAAgB;EAChB,gBA6ED;EAxFD,UAAA,EAAA;ELkmBE;IKnlBE,YAAY;IACZ,mBAmBD;IAnCH,WAAA,EAAA;ILsmBI;MKllBE,yCAcD;MAlCL,sBAAA,EAAA;MLymBM;QKzmBN,qBAAA,EAAA;ML2mBM;QK3mBN,sBAAA,EAAA;ML6mBM;QK7mBN,qBAAA,EAAA;ML+mBM;QK3kBJ,sBAAA,EAAA;EL6kBA;IK3kBE,kBAAW;IACX,WAAQ;IACR,QAAA;IACA,2BAAgB;IAChB,gBH5FgB;IG6FhB,qCAAgB;IAChB,gBAAY;IA5ChB,kBAAA,EAAA;EL0nBE;IK1kBE,gBAAU;IACV,UAAQ;IACR,cAAS;IACT,qBAAkB;IAClB,kBAmCD;IAvFH,YAAA,EAAA;ILioBI;MKzkBE,cAAW;MACX,WAAQ;MACR,sBAAgB;MAChB,gBAAU;MACV,kBA0BD;MAtFL,UAAA,EAAA;MLwoBM;QKxkBE,kBHxGS;QGyGT,WAAA;QACA,qBAmBD;QArFP,gBAAA,EAAA;QL6oBQ;UK7oBR,WAAA,EAAA;QL+oBQ;UKnkBE,WAAU;UACV,kBAAS;UACT,SAAS;UACT,SAAS;UACT,SAAS;UACT,2BAAW;UACX,WAAU;UACV,gBAAY;ULqkBZ,iBAAiB,EAAE;;AAE7B;EACE;IK9jBE,UAAS;IAEX,SAAI,EAAA;EL+jBJ;IK7jBE,UAAO;IL+jBP,OAAO,EAAE,EAAE;;AAEf;EACE;IACE,aAAa,EAAE,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB,EAAE;;AMrtBtB;;ENytBE,gBAAgB,EAAE;;AAEpB;EMrtBE,kBAAa;ENutBb,qCAAqC,EAAE","file":"main.scss","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0-modified | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n\r\n/* make sure to set some focus styles for accessibility */\r\n:focus {\r\n  outline: 0;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\n\r\nbody {\r\n  line-height: 1;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\n\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n  content: \"\";\r\n  content: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration,\r\ninput[type=\"search\"]::-webkit-search-results-button,\r\ninput[type=\"search\"]::-webkit-search-results-decoration {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n}\r\n\r\ninput[type=\"search\"] {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  -webkit-box-sizing: content-box;\r\n  -moz-box-sizing: content-box;\r\n  box-sizing: content-box;\r\n}\r\n\r\ntextarea {\r\n  overflow: auto;\r\n  vertical-align: top;\r\n  resize: vertical;\r\n}\r\n\r\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nvideo {\r\n  display: inline-block;\r\n  *display: inline;\r\n  *zoom: 1;\r\n  max-width: 100%;\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n  font-size: 100%; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n  -ms-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\r\n\r\na:focus {\r\n  outline: thin dotted;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n  outline: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\r\n\r\nimg {\r\n  border: 0; /* 1 */\r\n  -ms-interpolation-mode: bicubic; /* 2 */\r\n}\r\n\r\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\r\n\r\nfigure {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\r\n\r\nform {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\r\n\r\nlegend {\r\n  border: 0; /* 1 */\r\n  padding: 0;\r\n  white-space: normal; /* 2 */\r\n  *margin-left: -7px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n  font-size: 100%; /* 1 */\r\n  margin: 0; /* 2 */\r\n  vertical-align: baseline; /* 3 */\r\n  *vertical-align: middle; /* 3 */\r\n}\r\n\r\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\nbutton,\r\ninput {\r\n  line-height: normal;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n  -webkit-appearance: button; /* 2 */\r\n  cursor: pointer; /* 3 */\r\n  *overflow: visible; /* 4 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\r\n\r\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n  *height: 13px; /* 3 */\r\n  *width: 13px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  -moz-box-sizing: content-box;\r\n  -webkit-box-sizing: content-box; /* 2 */\r\n  box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  border: 0;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto; /* 1 */\r\n  vertical-align: top; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n  color: #222;\r\n}\r\n\r\n::-moz-selection {\r\n  background: #b3d4fc;\r\n  text-shadow: none;\r\n}\r\n\r\n::selection {\r\n  background: #b3d4fc;\r\n  text-shadow: none;\r\n}\r\n\r\nimg {\r\n  vertical-align: middle;\r\n}\r\n\r\nfieldset {\r\n  border: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\ntextarea {\r\n  resize: vertical;\r\n}\r\n\r\n.chromeframe {\r\n  margin: 0.2em 0;\r\n  background: #ccc;\r\n  color: #000;\r\n  padding: 0.2em 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n","/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0-modified | 20110126\r\n   License: none (public domain)\r\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n  outline: 0; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box; }\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical; }\n\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%; }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\n[hidden] {\n  display: none; }\n\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-size: 100%;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\na:focus {\n  outline: thin dotted; }\n\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\na:active,\na:hover {\n  outline: 0; }\n\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\nimg {\n  border: 0;\n  /* 1 */\n  -ms-interpolation-mode: bicubic;\n  /* 2 */ }\n\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\nfigure {\n  margin: 0; }\n\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\nform {\n  margin: 0; }\n\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  white-space: normal;\n  /* 2 */\n  *margin-left: -7px;\n  /* 3 */ }\n\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  vertical-align: baseline;\n  /* 3 */\n  *vertical-align: middle;\n  /* 3 */ }\n\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\nbutton,\ninput {\n  line-height: normal; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n  *overflow: visible;\n  /* 4 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n  *height: 13px;\n  /* 3 */\n  *width: 13px;\n  /* 3 */ }\n\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */ }\n\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #222; }\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none; }\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none; }\n\nimg {\n  vertical-align: middle; }\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\ntextarea {\n  resize: vertical; }\n\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0; }\n\na {\n  text-decoration: none;\n  color: #000; }\n\n.loader {\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  top: 0;\n  color: #fff;\n  background-color: #000;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: bold;\n  overflow: hidden;\n  z-index: 1;\n  animation: loaderSlideUp 1s 5s ease-in-out both; }\n\n@keyframes loaderSlideUp {\n  100% {\n    top: -100vh; } }\n  .loader__header {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n    .loader__header-text {\n      display: inline;\n      font-size: 1.2em;\n      opacity: 0;\n      animation: showHeader 3.3s 0.5s ease-in-out both; }\n\n@keyframes showHeader {\n  30% {\n    opacity: 1; }\n  99% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n      @media (min-width: 768px) {\n        .loader__header-text {\n          font-size: 1.6em; } }\n      @media (min-width: 1024px) {\n        .loader__header-text {\n          font-size: 1.6em; } }\n    .loader__header::after {\n      content: \"\";\n      position: absolute;\n      height: 60px;\n      top: -40%;\n      left: 0;\n      right: 100%;\n      background-color: #fff;\n      animation: showAfter 1.5s 2.2s ease-out both,\r leaveAfter 2s 4s ease-in both; }\n\n@keyframes showAfter {\n  50% {\n    left: 0;\n    right: 0; }\n  100% {\n    left: 100%;\n    right: 0; } }\n\n@keyframes leaveAfter {\n  100% {\n    left: 300%; } }\n      @media (min-width: 768px) {\n        .loader__header::after {\n          top: -80%;\n          height: 80px; } }\n      @media (min-width: 1024px) {\n        .loader__header::after {\n          top: -120%;\n          height: 100px; } }\n\n.header {\n  position: relative;\n  background-color: red;\n  min-height: 90vh; }\n\n.header__nav {\n  position: absolute;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 1; }\n  @media (min-width: 1024px) {\n    .header__nav {\n      background-color: #ff5252;\n      opacity: 0.8; } }\n\n.header__nav-logo {\n  position: relative;\n  left: -10%;\n  height: 10vh;\n  width: 30vw;\n  max-width: 500px;\n  background-color: rgba(255, 0, 119, 0.5);\n  opacity: 0;\n  animation: showNavEl 1.2s 1.2s ease-out both; }\n\n.header__nav__list {\n  width: 60vw;\n  max-width: 1000px;\n  padding-right: 5vh;\n  display: flex;\n  justify-content: space-around;\n  font-weight: bold; }\n  .header__nav__list-el .link {\n    position: relative;\n    left: 10%;\n    padding-bottom: 10px;\n    color: aliceblue;\n    opacity: 0;\n    animation: showNavEl 0.8s 1.2s ease-out both; }\n    .header__nav__list-el .link::after {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      right: 100%;\n      bottom: 5px;\n      height: 3px;\n      background-color: aliceblue;\n      transition: 0.4s; }\n  @media (max-width: 1024px) {\n    .header__nav__list {\n      display: none; } }\n  @media (min-width: 1440px) {\n    .header__nav__list {\n      font-size: 1.6em; } }\n\n.link:hover::after {\n  right: -5%; }\n\n@keyframes showNavEl {\n  100% {\n    left: 0;\n    opacity: 1; } }\n\n.header__slider-photo1 {\n  height: 90vh;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url(/public/img/foto1.jpg); }\n\n.header__slider-photo2 {\n  height: 90vh;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url(/public/img/foto2.jpg); }\n\n.header__slider-photo3 {\n  height: 90vh;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url(/public/img/foto3.jpg); }\n\n.header__slider-photo4 {\n  height: 90vh;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url(/public/img/foto4.jpg); }\n\n.header__description {\n  position: absolute;\n  top: 50%;\n  left: 10%;\n  right: 20%;\n  transform: translateY(-50%); }\n  .header__description-header {\n    padding-bottom: 3vh;\n    font-size: 1.8em;\n    font-weight: bold;\n    line-height: 130%;\n    color: #111; }\n    @media (min-width: 1024px) {\n      .header__description-header {\n        font-size: 2.6em;\n        line-height: 110%; } }\n    @media (min-width: 1440px) {\n      .header__description-header {\n        font-size: 4em; } }\n  .header__description-desc {\n    font-size: 1.5em; }\n    @media (min-width: 1024px) {\n      .header__description-desc {\n        font-size: 1.8em; } }\n    @media (min-width: 1440px) {\n      .header__description-desc {\n        font-size: 2.8em; } }\n\n.header-moreProjects {\n  position: absolute !important;\n  right: 0vw;\n  bottom: 5vh;\n  opacity: 0;\n  animation: showSliderButton 1.2s 1.2s ease-out both; }\n\n@keyframes showSliderButton {\n  100% {\n    right: 5vw;\n    opacity: 1; } }\n\n.header__mobileMenuButtonContainer {\n  position: fixed;\n  top: 7vw;\n  right: 7vw;\n  height: 27px;\n  width: 35px;\n  cursor: pointer;\n  z-index: 100;\n  transition: opacity 0.25s ease; }\n  .header__mobileMenuButtonContainer:hover {\n    opacity: 0.7; }\n  .header__mobileMenuButtonContainer.active .top {\n    transform: translateY(11px) translateX(0) rotate(45deg);\n    background: #fff; }\n  .header__mobileMenuButtonContainer.active .middle {\n    opacity: 0;\n    background: #fff; }\n  .header__mobileMenuButtonContainer.active .bottom {\n    transform: translateY(-11px) translateX(0) rotate(-45deg);\n    background: #fff; }\n  .header__mobileMenuButtonContainer span {\n    background: #ff5252;\n    border: none;\n    height: 5px;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: all 0.35s ease;\n    cursor: pointer; }\n    .header__mobileMenuButtonContainer span:nth-of-type(2) {\n      top: 11px; }\n    .header__mobileMenuButtonContainer span:nth-of-type(3) {\n      top: 22px; }\n\n.header__mobileContainer__menu {\n  position: fixed;\n  background: #ff5252;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 0%;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.35s, visibility 0.35s, height 0.35s;\n  overflow: hidden;\n  z-index: 3; }\n  .header__mobileContainer__menu.open {\n    opacity: 0.9;\n    visibility: visible;\n    height: 70%; }\n    .header__mobileContainer__menu.open li {\n      animation: fadeInRight 0.5s ease forwards;\n      animation-delay: 0.35s; }\n      .header__mobileContainer__menu.open li:nth-of-type(2) {\n        animation-delay: 0.4s; }\n      .header__mobileContainer__menu.open li:nth-of-type(3) {\n        animation-delay: 0.45s; }\n      .header__mobileContainer__menu.open li:nth-of-type(4) {\n        animation-delay: 0.5s; }\n      .header__mobileContainer__menu.open li:nth-of-type(5) {\n        animation-delay: 0.55s; }\n  .header__mobileContainer__menu-nav {\n    position: relative;\n    height: 70%;\n    top: 50%;\n    transform: translateY(-50%);\n    font-size: 2.5em;\n    font-family: \"Montserrat\", sans-serif;\n    font-weight: 400;\n    text-align: center; }\n  .header__mobileContainer__menu ul {\n    list-style: none;\n    padding: 0;\n    margin: 0 auto;\n    display: inline-block;\n    position: relative;\n    height: 100%; }\n    .header__mobileContainer__menu ul li {\n      display: block;\n      height: 25%;\n      height: calc(100% / 4);\n      min-height: 50px;\n      position: relative;\n      opacity: 0; }\n      .header__mobileContainer__menu ul li a {\n        position: relative;\n        color: #fff;\n        text-decoration: none;\n        overflow: hidden; }\n        .header__mobileContainer__menu ul li a:hover:after, .header__mobileContainer__menu ul li a:focus:after, .header__mobileContainer__menu ul li a:active:after {\n          width: 100%; }\n        .header__mobileContainer__menu ul li a:after {\n          content: \"\";\n          position: absolute;\n          bottom: 0;\n          left: 50%;\n          width: 0%;\n          transform: translateX(-50%);\n          height: 3px;\n          background: #fff;\n          transition: 0.35s; }\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    left: 20%; }\n  100% {\n    opacity: 1;\n    left: 0; } }\n\n@media (min-width: 1024px) {\n  .header__mobileContainer {\n    display: none; } }\n\n.about {\n  min-height: 200vh; }\n\n.Device-content {\n  position: absolute; }\n\nhtml,\nbody {\n  overflow: hidden; }\n\n.wrap {\n  position: relative;\n  font-family: \"Montserrat\", sans-serif; }\n","@import \"../_variables.scss\";\r\n\r\n.loader {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  position: absolute;\r\n  top: 0;\r\n  color: $loader-color;\r\n  background-color: $loader-background;\r\n  font-family: $loader-fontFamily;\r\n  font-weight: bold;\r\n  overflow: hidden;\r\n  z-index: 1;\r\n  animation: loaderSlideUp 1s 5s ease-in-out both;\r\n  @keyframes loaderSlideUp {\r\n    100% {\r\n      top: -100vh;\r\n    }\r\n  }\r\n  &__header {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\r\n    &-text {\r\n      display: inline;\r\n      font-size: 1.2em;\r\n      opacity: 0;\r\n      animation: showHeader 3.3s 0.5s ease-in-out both;\r\n      @keyframes showHeader {\r\n        30% {\r\n          opacity: 1;\r\n        }\r\n        99% {\r\n          opacity: 1;\r\n        }\r\n        100% {\r\n          opacity: 0;\r\n        }\r\n      }\r\n      @media (min-width: 768px) {\r\n        font-size: 1.6em;\r\n      }\r\n      @media (min-width: 1024px) {\r\n        font-size: 1.6em;\r\n      }\r\n    }\r\n    &::after {\r\n      content: \"\";\r\n      position: absolute;\r\n      height: 60px;\r\n      top: -40%;\r\n      left: 0;\r\n      right: 100%;\r\n      background-color: #fff;\r\n      animation: showAfter 1.5s 2.2s ease-out both,\r\n        leaveAfter 2s 4s ease-in both;\r\n      @keyframes showAfter {\r\n        50% {\r\n          left: 0;\r\n          right: 0;\r\n        }\r\n\r\n        100% {\r\n          left: 100%;\r\n          right: 0;\r\n        }\r\n      }\r\n\r\n      @keyframes leaveAfter {\r\n        100% {\r\n          left: 300%;\r\n        }\r\n      }\r\n      @media (min-width: 768px) {\r\n        top: -80%;\r\n        height: 80px;\r\n      }\r\n      @media (min-width: 1024px) {\r\n        top: -120%;\r\n        height: 100px;\r\n      }\r\n    }\r\n  }\r\n}\r\n","// Loader\r\n$loader-background: #000;\r\n$loader-color: #fff;\r\n$loader-fontFamily: \"Montserrat\", sans-serif;\r\n\r\n// Header\r\n$header-background: red;\r\n$header-height: 90vh;\r\n$nav-el: aliceblue;\r\n\r\n//MobileMenu\r\n$color-main: #ff5252;\r\n$color-active: #fff;\r\n$color-link: #fff;\r\n\r\n$button-height: 27px;\r\n$button-width: 35px;\r\n","@import \"../variables\";\r\n\r\n.header {\r\n  position: relative;\r\n  background-color: $header-background;\r\n  min-height: $header-height;\r\n}\r\n\r\n.header__nav {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  z-index: 1;\r\n  @media (min-width: 1024px) {\r\n    background-color: #ff5252;\r\n    opacity: 0.8;\r\n  }\r\n}\r\n\r\n.header__nav-logo {\r\n  position: relative;\r\n  left: -10%;\r\n  height: 10vh;\r\n  width: 30vw;\r\n  max-width: 500px;\r\n  background-color: rgba(255, 0, 119, 0.5);\r\n  opacity: 0;\r\n  animation: showNavEl 1.2s 1.2s ease-out both;\r\n}\r\n\r\n.header__nav__list {\r\n  width: 60vw;\r\n  max-width: 1000px;\r\n  padding-right: 5vh;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  font-weight: bold;\r\n  &-el {\r\n    .link {\r\n      position: relative;\r\n      left: 10%;\r\n      padding-bottom: 10px;\r\n      color: $nav-el;\r\n      opacity: 0;\r\n      animation: showNavEl 0.8s 1.2s ease-out both;\r\n      &::after {\r\n        content: \"\";\r\n        position: absolute;\r\n        left: 0;\r\n        right: 100%;\r\n        bottom: 5px;\r\n        height: 3px;\r\n        background-color: $nav-el;\r\n        transition: 0.4s;\r\n      }\r\n    }\r\n  }\r\n  @media (max-width: 1024px) {\r\n    display: none;\r\n  }\r\n\r\n  @media (min-width: 1440px) {\r\n    font-size: 1.6em;\r\n  }\r\n}\r\n\r\n.link:hover::after {\r\n  right: -5%;\r\n}\r\n\r\n@keyframes showNavEl {\r\n  100% {\r\n    left: 0;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n// $photos: (1, \"foto1.jpg\"), (2, \"foto2.jpg\"), (3, \"foto3.jpg\"), (4, \"foto4.jpg\");\r\n\r\n// @each $number, $photo in $photos {\r\n//   .header__slider-photo#{$number} {\r\n//     height: 80vh;\r\n//     background-image: url(\"/public/img#/{$photo}\");\r\n//   }\r\n// }\r\n\r\n.header__slider {\r\n  &-photo1 {\r\n    @include sliderBackgroundImage();\r\n    background-image: url(/public/img/foto1.jpg);\r\n  }\r\n  &-photo2 {\r\n    @include sliderBackgroundImage();\r\n    background-image: url(/public/img/foto2.jpg);\r\n  }\r\n  &-photo3 {\r\n    @include sliderBackgroundImage();\r\n    background-image: url(/public/img/foto3.jpg);\r\n  }\r\n  &-photo4 {\r\n    @include sliderBackgroundImage();\r\n    background-image: url(/public/img/foto4.jpg);\r\n  }\r\n}\r\n\r\n.header__description {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 10%;\r\n  right: 20%;\r\n  transform: translateY(-50%);\r\n  &-header {\r\n    padding-bottom: 3vh;\r\n    font-size: 1.8em;\r\n    font-weight: bold;\r\n    line-height: 130%;\r\n    color: #111;\r\n    @media (min-width: 1024px) {\r\n      font-size: 2.6em;\r\n      line-height: 110%;\r\n    }\r\n    @media (min-width: 1440px) {\r\n      font-size: 4em;\r\n    }\r\n  }\r\n\r\n  &-desc {\r\n    font-size: 1.5em;\r\n    @media (min-width: 1024px) {\r\n      font-size: 1.8em;\r\n    }\r\n    @media (min-width: 1440px) {\r\n      font-size: 2.8em;\r\n    }\r\n  }\r\n}\r\n\r\n.header-moreProjects {\r\n  position: absolute !important;\r\n  right: 0vw;\r\n  bottom: 5vh;\r\n  opacity: 0;\r\n  animation: showSliderButton 1.2s 1.2s ease-out both;\r\n  @keyframes showSliderButton {\r\n    100% {\r\n      right: 5vw;\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n","@import \"./variables\";\r\n\r\n@mixin sliderBackgroundImage() {\r\n  height: $header-height;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n","@import \"../variables\";\r\n\r\n.header__mobileMenuButtonContainer {\r\n  position: fixed;\r\n  top: 7vw;\r\n  right: 7vw;\r\n  height: $button-height;\r\n  width: $button-width;\r\n  cursor: pointer;\r\n  z-index: 100;\r\n  transition: opacity 0.25s ease;\r\n\r\n  &:hover {\r\n    opacity: 0.7;\r\n  }\r\n\r\n  &.active {\r\n    .top {\r\n      transform: translateY(11px) translateX(0) rotate(45deg);\r\n      background: $color-active;\r\n    }\r\n    .middle {\r\n      opacity: 0;\r\n      background: $color-active;\r\n    }\r\n\r\n    .bottom {\r\n      transform: translateY(-11px) translateX(0) rotate(-45deg);\r\n      background: $color-active;\r\n    }\r\n  }\r\n\r\n  span {\r\n    background: $color-main;\r\n    border: none;\r\n    height: 5px;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transition: all 0.35s ease;\r\n    cursor: pointer;\r\n\r\n    &:nth-of-type(2) {\r\n      top: 11px;\r\n    }\r\n\r\n    &:nth-of-type(3) {\r\n      top: 22px;\r\n    }\r\n  }\r\n}\r\n\r\n.header__mobileContainer__menu {\r\n  position: fixed;\r\n  background: $color-main;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 0%;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transition: opacity 0.35s, visibility 0.35s, height 0.35s;\r\n  overflow: hidden;\r\n  z-index: 3;\r\n\r\n  &.open {\r\n    opacity: 0.9;\r\n    visibility: visible;\r\n    height: 70%;\r\n\r\n    li {\r\n      animation: fadeInRight 0.5s ease forwards;\r\n      animation-delay: 0.35s;\r\n\r\n      &:nth-of-type(2) {\r\n        animation-delay: 0.4s;\r\n      }\r\n      &:nth-of-type(3) {\r\n        animation-delay: 0.45s;\r\n      }\r\n      &:nth-of-type(4) {\r\n        animation-delay: 0.5s;\r\n      }\r\n      &:nth-of-type(5) {\r\n        animation-delay: 0.55s;\r\n      }\r\n    }\r\n  }\r\n  &-nav {\r\n    position: relative;\r\n    height: 70%;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    font-size: 2.5em;\r\n    font-family: $loader-fontFamily;\r\n    font-weight: 400;\r\n    text-align: center;\r\n  }\r\n  ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0 auto;\r\n    display: inline-block;\r\n    position: relative;\r\n    height: 100%;\r\n\r\n    li {\r\n      display: block;\r\n      height: 25%;\r\n      height: calc(100% / 4);\r\n      min-height: 50px;\r\n      position: relative;\r\n      opacity: 0;\r\n\r\n      a {\r\n        position: relative;\r\n        color: $color-link;\r\n        text-decoration: none;\r\n        overflow: hidden;\r\n\r\n        &:hover:after,\r\n        &:focus:after,\r\n        &:active:after {\r\n          width: 100%;\r\n        }\r\n\r\n        &:after {\r\n          content: \"\";\r\n          position: absolute;\r\n          bottom: 0;\r\n          left: 50%;\r\n          width: 0%;\r\n          transform: translateX(-50%);\r\n          height: 3px;\r\n          background: $color-link;\r\n          transition: 0.35s;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes fadeInRight {\r\n  0% {\r\n    opacity: 0;\r\n    left: 20%;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    left: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .header__mobileContainer {\r\n    display: none;\r\n  }\r\n}\r\n","@import \"partials/_reset.scss\";\r\n@import \"partials/_variables.scss\";\r\n@import \"partials/_mixins.scss\";\r\n@import \"partials/components/_loader.scss\";\r\n@import \"partials/components/_header.scss\";\r\n@import \"partials/components/mobileMenu\";\r\n@import \"partials/components/about\";\r\n@import \"partials/components/proba\";\r\n\r\nhtml,\r\nbody {\r\n  overflow: hidden;\r\n}\r\n\r\n.wrap {\r\n  position: relative;\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./public/img/foto1.jpg":
/*!******************************!*\
  !*** ./public/img/foto1.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "917083b310463cc850f994153d990840.jpg";

/***/ }),

/***/ "./public/img/foto2.jpg":
/*!******************************!*\
  !*** ./public/img/foto2.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "848df160d6d2e9467baf91b333fef5bc.jpg";

/***/ }),

/***/ "./public/img/foto3.jpg":
/*!******************************!*\
  !*** ./public/img/foto3.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "81e86b799c577072a41640ae757dac87.jpg";

/***/ }),

/***/ "./public/img/foto4.jpg":
/*!******************************!*\
  !*** ./public/img/foto4.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d51cc9fcd0ce8aeadba918a6b782eabc.jpg";

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/sass-loader/lib/loader.js??ref--5-2!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js?!./scss/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"sourceMap":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_img_foto1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/img/foto1.jpg */ "./public/img/foto1.jpg");
/* harmony import */ var _public_img_foto1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_img_foto1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_img_foto2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/img/foto2.jpg */ "./public/img/foto2.jpg");
/* harmony import */ var _public_img_foto2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_foto2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_foto3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/img/foto3.jpg */ "./public/img/foto3.jpg");
/* harmony import */ var _public_img_foto3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_foto3_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_foto4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/img/foto4.jpg */ "./public/img/foto4.jpg");
/* harmony import */ var _public_img_foto4_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_foto4_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider */ "./src/slider.js");
/* harmony import */ var _mobileMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobileMenu */ "./src/mobileMenu.js");
/* harmony import */ var _mobileMenu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mobileMenu__WEBPACK_IMPORTED_MODULE_6__);







console.log(_public_img_foto1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a);
var slider = document.querySelector(".header__slider"); // slider.firstElementChild.style.backgroundImage = `url(dist/img/${photo1})`;

console.log(slider.children);

for (var i = 0; i < slider.children; i++) {
  slider.children[i].style.backgroundImage = "url(".concat(photo[i], ")");
}

console.log(slider.children);

/***/ }),

/***/ "./src/mobileMenu.js":
/*!***************************!*\
  !*** ./src/mobileMenu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

$("#toggle").click(function () {
  $(this).toggleClass("active");
  $("#overlay").toggleClass("open");
});

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ($(document).ready(function () {
  $(".header__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 1000,
    cssEase: "linear"
  });
}));

/***/ })

/******/ });
//# sourceMappingURL=index.js.map