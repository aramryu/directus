(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-19"],{"25f0":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t(a("af03"));function t(e){return e&&e.__esModule?e:{default:e}}var d={narrow:["ق","ب"],abbreviated:["ق.م.","ب.م."],wide:["قبل الميلاد","بعد الميلاد"]},r={narrow:["1","2","3","4"],abbreviated:["ر1","ر2","ر3","ر4"],wide:["الربع الأول","الربع الثاني","الربع الثالث","الربع الرابع"]},o={narrow:["ي","ف","م","أ","م","ي","ي","غ","ش","أ","ن","د"],abbreviated:["ينا","فبر","مارس","أبريل","ماي","يونـ","يولـ","غشت","شتنـ","أكتـ","نونـ","دجنـ"],wide:["يناير","فبراير","مارس","أبريل","ماي","يونيو","يوليوز","غشت","شتنبر","أكتوبر","نونبر","دجنبر"]},u={narrow:["ح","ن","ث","ر","خ","ج","س"],short:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],abbreviated:["أحد","اثنـ","ثلا","أربـ","خميـ","جمعة","سبت"],wide:["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"]},f={narrow:{am:"ص",pm:"م",midnight:"ن",noon:"ظ",morning:"صباحاً",afternoon:"بعد الظهر",evening:"مساءاً",night:"ليلاً"},abbreviated:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",morning:"صباحاً",afternoon:"بعد الظهر",evening:"مساءاً",night:"ليلاً"},wide:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",morning:"صباحاً",afternoon:"بعد الظهر",evening:"مساءاً",night:"ليلاً"}},m={narrow:{am:"ص",pm:"م",midnight:"ن",noon:"ظ",morning:"في الصباح",afternoon:"بعد الظـهر",evening:"في المساء",night:"في الليل"},abbreviated:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",morning:"في الصباح",evening:"في المساء",night:"في الليل"},wide:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",afternoon:"بعد الظـهر",evening:"في المساء",night:"في الليل"}};function g(e){return String(e)}var l={ordinalNumber:g,era:(0,i.default)({values:d,defaultWidth:"wide"}),quarter:(0,i.default)({values:r,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:o,defaultWidth:"wide"}),day:(0,i.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:f,defaultWidth:"wide",formattingValues:m,defaultFormattingWidth:"wide"})},w=l;n.default=w,e.exports=n.default}}]);