(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-261"],{"5b84":function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=d;var s={lessThanXSeconds:{one:a,other:_},xSeconds:{one:a,other:_},halfAMinute:"pusė minutės",lessThanXMinutes:{one:i,other:_},xMinutes:{one:i,other:_},aboutXHours:{one:i,other:_},xHours:{one:i,other:_},xDays:{one:i,other:_},aboutWeeks:{one:i,other:_},xWeeks:{one:i,other:_},aboutXMonths:{one:i,other:_},xMonths:{one:i,other:_},aboutXYears:{one:i,other:_},xYears:{one:i,other:_},overXYears:{one:i,other:_},almostXYears:{one:i,other:_}},t={xseconds_other:"sekundė_sekundžių_sekundes",xminutes_one:"minutė_minutės_minutę",xminutes_other:"minutės_minučių_minutes",xhours_one:"valanda_valandos_valandą",xhours_other:"valandos_valandų_valandas",xdays_one:"diena_dienos_dieną",xdays_other:"dienos_dienų_dienas",xweeks_one:"savaitė_savaitės_savaitę",xweeks_other:"savaitės_savaičių_savaites",xmonths_one:"mėnuo_mėnesio_mėnesį",xmonths_other:"mėnesiai_mėnesių_mėnesius",xyears_one:"metai_metų_metus",xyears_other:"metai_metų_metus",about:"apie",over:"daugiau nei",almost:"beveik",lessthan:"mažiau nei"};function a(e,o,n,s){return o?s?"kelių sekundžių":"kelias sekundes":"kelios sekundės"}function i(e,o,n,s){return o?s?u(n)[1]:u(n)[2]:u(n)[0]}function r(e){return e%10===0||e>10&&e<20}function u(e){return t[e].split("_")}function _(e,o,n,s){var t=e+" ";return 1===e?t+i(e,o,n[0],s):o?s?t+u(n)[1]:t+(r(e)?u(n)[1]:u(n)[2]):t+(r(e)?u(n)[1]:u(n)[0])}function d(e,o,n){n=n||{};var a,i=e.match(/about|over|almost|lessthan/i),r=e.replace(i,"");return a="string"===typeof s[e]?s[e]:1===o?s[e].one(o,n.addSuffix,r.toLowerCase()+"_one"):s[e].other(o,n.addSuffix,r.toLowerCase()+"_other"),i&&(a=t[i[0].toLowerCase()]+" "+a),n.addSuffix?n.comparison>0?"po "+a:"prieš "+a:a}e.exports=o.default}}]);