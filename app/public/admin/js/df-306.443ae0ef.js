(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-306"],{"7a7f":function(a,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(d("af03"));function t(a){return a&&a.__esModule?a:{default:a}}var r={narrow:["v.C.","n.C."],abbreviated:["v.Chr.","n.Chr."],wide:["voor Christus","na Christus"]},i={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1e kwartaal","2e kwartaal","3e kwartaal","4e kwartaal"]},o={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mrt.","apr.","mei","jun.","jul.","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},s={narrow:["Z","M","D","W","D","V","Z"],short:["zo","ma","di","wo","do","vr","za"],abbreviated:["zon","maa","din","woe","don","vri","zat"],wide:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},u={narrow:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middag",morning:"'s ochtends",afternoon:"'s namiddags",evening:"'s avonds",night:"'s nachts"},abbreviated:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middag",morning:"'s ochtends",afternoon:"'s namiddags",evening:"'s avonds",night:"'s nachts"},wide:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middag",morning:"'s ochtends",afternoon:"'s namiddags",evening:"'s avonds",night:"'s nachts"}};function m(a){var e=Number(a);return e+"e"}var l={ordinalNumber:m,era:(0,n.default)({values:r,defaultWidth:"wide"}),quarter:(0,n.default)({values:i,defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:(0,n.default)({values:o,defaultWidth:"wide"}),day:(0,n.default)({values:s,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:u,defaultWidth:"wide"})},h=l;e.default=h,a.exports=e.default}}]);