(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-408"],{f86c:function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=i(a("af03"));function i(n){return n&&n.__esModule?n:{default:n}}var d={narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},r={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},o={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},u={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},m={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},f={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},g={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}};function l(n,e){var a,t=e||{},i=String(t.unit);return a="date"===i?3===n||23===n?"-є":"-е":"minute"===i||"second"===i||"hour"===i?"-а":"-й",n+a}var w={ordinalNumber:l,era:(0,t.default)({values:d,defaultWidth:"wide"}),quarter:(0,t.default)({values:r,defaultWidth:"wide",argumentCallback:function(n){return Number(n)-1}}),month:(0,t.default)({values:o,defaultWidth:"wide",formattingValues:u,defaultFormattingWidth:"wide"}),day:(0,t.default)({values:m,defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:f,defaultWidth:"any",formattingValues:g,defaultFormattingWidth:"wide"})},v=w;e.default=v,n.exports=e.default}}]);