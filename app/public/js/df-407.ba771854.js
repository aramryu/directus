(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-407"],{4170:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var r=n(a("701a")),u=n(a("6068"));function n(e){return e&&e.__esModule?e:{default:e}}function c(e,t,a){(0,u.default)(2,arguments);var n=(0,r.default)(e,a),c=(0,r.default)(t,a);return n.getTime()===c.getTime()}e.exports=t.default},"8d01":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var r=u(a("4170"));function u(e){return e&&e.__esModule?e:{default:e}}var n=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function c(e){var t=n[e];switch(e){case 0:case 3:case 5:case 6:return"'у минулу "+t+" о' p";case 1:case 2:case 4:return"'у минулий "+t+" о' p"}}function s(e){var t=n[e];return"'у "+t+" о' p"}function o(e){var t=n[e];switch(e){case 0:case 3:case 5:case 6:return"'у наступну "+t+" о' p";case 1:case 2:case 4:return"'у наступний "+t+" о' p"}}var f={lastWeek:function(e,t,a){var u=e.getUTCDay();return(0,r.default)(e,t,a)?s(u):c(u)},yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:function(e,t,a){var u=e.getUTCDay();return(0,r.default)(e,t,a)?s(u):o(u)},other:"P"};function d(e,t,a,r){var u=f[e];return"function"===typeof u?u(t,a,r):u}e.exports=t.default}}]);