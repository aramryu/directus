(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-225"],{9095:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var n={lessThanXSeconds:{one:"1秒未満",other:"{{count}}秒未満",oneWithSuffix:"約1秒",otherWithSuffix:"約{{count}}秒"},xSeconds:{one:"1秒",other:"{{count}}秒"},halfAMinute:"30秒",lessThanXMinutes:{one:"1分未満",other:"{{count}}分未満",oneWithSuffix:"約1分",otherWithSuffix:"約{{count}}分"},xMinutes:{one:"1分",other:"{{count}}分"},aboutXHours:{one:"約1時間",other:"約{{count}}時間"},xHours:{one:"1時間",other:"{{count}}時間"},xDays:{one:"1日",other:"{{count}}日"},aboutXWeeks:{one:"約1週間",other:"約{{count}}週間"},xWeeks:{one:"1週間",other:"{{count}}週間"},aboutXMonths:{one:"約1か月",other:"約{{count}}か月"},xMonths:{one:"1か月",other:"{{count}}か月"},aboutXYears:{one:"約1年",other:"約{{count}}年"},xYears:{one:"1年",other:"{{count}}年"},overXYears:{one:"1年以上",other:"{{count}}年以上"},almostXYears:{one:"1年近く",other:"{{count}}年近く"}};function u(o,e,t){var u;return t=t||{},u="string"===typeof n[o]?n[o]:1===e?t.addSuffix&&n[o].oneWithSuffix?n[o].oneWithSuffix:n[o].one:t.addSuffix&&n[o].otherWithSuffix?n[o].otherWithSuffix.replace("{{count}}",e):n[o].other.replace("{{count}}",e),t.addSuffix?t.comparison>0?u+"後":u+"前":u}o.exports=e.default}}]);