(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-353"],{c01f:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=t;var r={lastWeek:function(e){var o=e.getUTCDay();switch(o){case 0:return"'prejšnjo nedeljo ob' p";case 3:return"'prejšnjo sredo ob' p";case 6:return"'prejšnjo soboto ob' p";default:return"'prejšnji' EEEE 'ob' p"}},yesterday:"'včeraj ob' p",today:"'danes ob' p",tomorrow:"'jutri ob' p",nextWeek:function(e){var o=e.getUTCDay();switch(o){case 0:return"'naslednjo nedeljo ob' p";case 3:return"'naslednjo sredo ob' p";case 6:return"'naslednjo soboto ob' p";default:return"'naslednji' EEEE 'ob' p"}},other:"P"};function t(e,o,n,t){var a=r[e];return"function"===typeof a?a(o):a}e.exports=o.default}}]);