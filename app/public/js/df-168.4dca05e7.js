(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-168"],{ef67:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=t(n("af03"));function t(e){return e&&e.__esModule?e:{default:e}}var i={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","despois de cristo"]},o={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},r={narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["xan","feb","mar","abr","mai","xun","xul","ago","set","out","nov","dec"],wide:["xaneiro","febreiro","marzo","abril","maio","xuño","xullo","agosto","setembro","outubro","novembro","decembro"]},m={narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","me","xo","ve","sa"],abbreviated:["dom","lun","mar","mer","xov","ven","sab"],wide:["domingo","luns","martes","mércores","xoves","venres","sábado"]},u={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"mañá",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediodía",morning:"mañá",afternoon:"tarde",evening:"tardiña",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediodía",morning:"mañá",afternoon:"tarde",evening:"tardiña",night:"noite"}},s={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da mañá",afternoon:"da tarde",evening:"da tardiña",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediodía",morning:"da mañá",afternoon:"da tarde",evening:"da tardiña",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediodía",morning:"da mañá",afternoon:"da tarde",evening:"da tardiña",night:"da noite"}};function l(e){var a=Number(e);return a+"º"}var f={ordinalNumber:l,era:(0,d.default)({values:i,defaultWidth:"wide"}),quarter:(0,d.default)({values:o,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,d.default)({values:r,defaultWidth:"wide"}),day:(0,d.default)({values:m,defaultWidth:"wide"}),dayPeriod:(0,d.default)({values:u,defaultWidth:"wide",formattingValues:s,defaultFormattingWidth:"wide"})},v=f;a.default=v,e.exports=a.default}}]);