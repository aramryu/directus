(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-275"],{4170:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var r=n(a("701a")),u=n(a("6068"));function n(e){return e&&e.__esModule?e:{default:e}}function c(e,t,a){(0,u.default)(2,arguments);var n=(0,r.default)(e,a),c=(0,r.default)(t,a);return n.getTime()===c.getTime()}e.exports=t.default},dfe2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var r=u(a("4170"));function u(e){return e&&e.__esModule?e:{default:e}}var n=["недела","понеделник","вторник","среда","четврток","петок","сабота"];function c(e){var t=n[e];switch(e){case 0:case 3:case 6:return"'минатата "+t+" во' p";case 1:case 2:case 4:case 5:return"'минатиот "+t+" во' p"}}function s(e){var t=n[e];switch(e){case 0:case 3:case 6:return"'ова "+t+" вo' p";case 1:case 2:case 4:case 5:return"'овој "+t+" вo' p"}}function o(e){var t=n[e];switch(e){case 0:case 3:case 6:return"'следната "+t+" вo' p";case 1:case 2:case 4:case 5:return"'следниот "+t+" вo' p"}}var f={lastWeek:function(e,t,a){var u=e.getUTCDay();return(0,r.default)(e,t,a)?s(u):c(u)},yesterday:"'вчера во' p",today:"'денес во' p",tomorrow:"'утре во' p",nextWeek:function(e,t,a){var u=e.getUTCDay();return(0,r.default)(e,t,a)?s(u):o(u)},other:"P"};function d(e,t,a,r){var u=f[e];return"function"===typeof u?u(t,a,r):u}e.exports=t.default}}]);