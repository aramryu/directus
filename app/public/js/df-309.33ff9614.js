(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-309"],{"8a57":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r={lessThanXSeconds:{singular:"mindre enn eitt sekund",plural:"mindre enn {{count}} sekund"},xSeconds:{singular:"eitt sekund",plural:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{singular:"mindre enn eitt minutt",plural:"mindre enn {{count}} minutt"},xMinutes:{singular:"eitt minutt",plural:"{{count}} minutt"},aboutXHours:{singular:"omtrent ein time",plural:"omtrent {{count}} timar"},xHours:{singular:"ein time",plural:"{{count}} timar"},xDays:{singular:"ein dag",plural:"{{count}} dagar"},aboutXWeeks:{singular:"omtrent ei veke",plural:"omtrent {{count}} veker"},xWeeks:{singular:"ei veke",plural:"{{count}} veker"},aboutXMonths:{singular:"omtrent ein månad",plural:"omtrent {{count}} månader"},xMonths:{singular:"ein månad",plural:"{{count}} månader"},aboutXYears:{singular:"omtrent eitt år",plural:"omtrent {{count}} år"},xYears:{singular:"eitt år",plural:"{{count}} år"},overXYears:{singular:"over eitt år",plural:"over {{count}} år"},almostXYears:{singular:"nesten eitt år",plural:"nesten {{count}} år"}},u=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"];function a(n,e,t){t=t||{onlyNumeric:!1};var a,l=r[n];return a="string"===typeof l?l:0===e||e>1?t.onlyNumeric?l.plural.replace("{{count}}",e):l.plural.replace("{{count}}",e<13?u[e]:e):l.singular,t.addSuffix?t.comparison>0?"om "+a:a+" sidan":a}n.exports=e.default}}]);