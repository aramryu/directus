(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-246"],{8476:function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=t(a("af03"));function t(n){return n&&n.__esModule?n:{default:n}}var d={narrow:["ಕ್ರಿ.ಪೂ","ಕ್ರಿ.ಶ"],abbreviated:["ಕ್ರಿ.ಪೂ","ಕ್ರಿ.ಶ"],wide:["ಕ್ರಿಸ್ತ ಪೂರ್ವ","ಕ್ರಿಸ್ತ ಶಕ"]},r={narrow:["1","2","3","4"],abbreviated:["ತ್ರೈ 1","ತ್ರೈ 2","ತ್ರೈ 3","ತ್ರೈ 4"],wide:["1ನೇ ತ್ರೈಮಾಸಿಕ","2ನೇ ತ್ರೈಮಾಸಿಕ","3ನೇ ತ್ರೈಮಾಸಿಕ","4ನೇ ತ್ರೈಮಾಸಿಕ"]},o={narrow:["ಜ","ಫೆ","ಮಾ","ಏ","ಮೇ","ಜೂ","ಜು","ಆ","ಸೆ","ಅ","ನ","ಡಿ"],abbreviated:["ಜನ","ಫೆಬ್ರ","ಮಾರ್ಚ್","ಏಪ್ರಿ","ಮೇ","ಜೂನ್","ಜುಲೈ","ಆಗ","ಸೆಪ್ಟೆಂ","ಅಕ್ಟೋ","ನವೆಂ","ಡಿಸೆಂ"],wide:["ಜನವರಿ","ಫೆಬ್ರವರಿ","ಮಾರ್ಚ್","ಏಪ್ರಿಲ್","ಮೇ","ಜೂನ್","ಜುಲೈ","ಆಗಸ್ಟ್","ಸೆಪ್ಟೆಂಬರ್","ಅಕ್ಟೋಬರ್","ನವೆಂಬರ್","ಡಿಸೆಂಬರ್"]},u={narrow:["ಭಾ","ಸೋ","ಮಂ","ಬು","ಗು","ಶು","ಶ"],short:["ಭಾನು","ಸೋಮ","ಮಂಗಳ","ಬುಧ","ಗುರು","ಶುಕ್ರ","ಶನಿ"],abbreviated:["ಭಾನು","ಸೋಮ","ಮಂಗಳ","ಬುಧ","ಗುರು","ಶುಕ್ರ","ಶನಿ"],wide:["ಭಾನುವಾರ","ಸೋಮವಾರ","ಮಂಗಳವಾರ","ಬುಧವಾರ","ಗುರುವಾರ","ಶುಕ್ರವಾರ","ಶನಿವಾರ"]},m={narrow:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯರಾತ್ರಿ",noon:"ಮಧ್ಯಾಹ್ನ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾಹ್ನ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"},abbreviated:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"},wide:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"}},f={narrow:{am:"ಪೂ",pm:"ಅ",midnight:"ಮಧ್ಯರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"},abbreviated:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯ ರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"},wide:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯ ರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"}};function g(n,e){var a=Number(n);return a+"ನೇ"}var l={ordinalNumber:g,era:(0,i.default)({values:d,defaultWidth:"wide"}),quarter:(0,i.default)({values:r,defaultWidth:"wide",argumentCallback:function(n){return Number(n)-1}}),month:(0,i.default)({values:o,defaultWidth:"wide"}),day:(0,i.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:m,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"})},w=l;e.default=w,n.exports=e.default}}]);