(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-57","df-52","df-53","df-54","df-55","df-56"],{"2f70":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=d(t("1f21"));function d(e){return e&&e.__esModule?e:{default:e}}var n={full:"EEEE, d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"},r={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},o={full:"{{date}} 'a les' {{time}}",long:"{{date}} 'a les' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},s={date:(0,i.default)({formats:n,defaultWidth:"full"}),time:(0,i.default)({formats:r,defaultWidth:"full"}),dateTime:(0,i.default)({formats:o,defaultWidth:"full"})},m=s;a.default=m,e.exports=a.default},3308:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=n;var i={lastWeek:"'el' eeee 'passat a la' LT",yesterday:"'ahir a la' p",today:"'avui a la' p",tomorrow:"'demà a la' p",nextWeek:"eeee 'a la' p",other:"P"},d={lastWeek:"'el' eeee 'passat a les' p",yesterday:"'ahir a les' p",today:"'avui a les' p",tomorrow:"'demà a les' p",nextWeek:"eeee 'a les' p",other:"P"};function n(e,a,t,n){return 1!==a.getUTCHours()?d[e]:i[e]}e.exports=a.default},5706:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=s(t("95f8")),d=s(t("2f70")),n=s(t("3308")),r=s(t("bf0a")),o=s(t("b471"));function s(e){return e&&e.__esModule?e:{default:e}}var m={code:"ca",formatDistance:i.default,formatLong:d.default,formatRelative:n.default,localize:r.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},u=m;a.default=u,e.exports=a.default},"95f8":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=d;var i={lessThanXSeconds:{one:"menys d'un segon",eleven:"menys d'onze segons",other:"menys de {{count}} segons"},xSeconds:{one:"1 segon",other:"{{count}} segons"},halfAMinute:"mig minut",lessThanXMinutes:{one:"menys d'un minut",eleven:"menys d'onze minuts",other:"menys de {{count}} minuts"},xMinutes:{one:"1 minut",other:"{{count}} minuts"},aboutXHours:{one:"aproximadament una hora",other:"aproximadament {{count}} hores"},xHours:{one:"1 hora",other:"{{count}} hores"},xDays:{one:"1 dia",other:"{{count}} dies"},aboutXWeeks:{one:"aproximadament una setmana",other:"aproximadament {{count}} setmanes"},xWeeks:{one:"1 setmana",other:"{{count}} setmanes"},aboutXMonths:{one:"aproximadament un mes",other:"aproximadament {{count}} mesos"},xMonths:{one:"1 mes",other:"{{count}} mesos"},aboutXYears:{one:"aproximadament un any",other:"aproximadament {{count}} anys"},xYears:{one:"1 any",other:"{{count}} anys"},overXYears:{one:"més d'un any",eleven:"més d'onze anys",other:"més de {{count}} anys"},almostXYears:{one:"gairebé un any",other:"gairebé {{count}} anys"}};function d(e,a,t){var d;return t=t||{},d="string"===typeof i[e]?i[e]:1===a?i[e].one:11===a&&i[e].eleven?i[e].eleven:i[e].other.replace("{{count}}",a),t.addSuffix?t.comparison>0?"en "+d:"fa "+d:d}e.exports=a.default},b471:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t("b028")),d=n(t("9686"));function n(e){return e&&e.__esModule?e:{default:e}}var r=/^(\d+)(è|r|n|r|t)?/i,o=/\d+/i,s={narrow:/^(aC|dC)/i,abbreviated:/^(a. de C.|d. de C.)/i,wide:/^(abans de Crist|despr[eé]s de Crist)/i},m={narrow:[/^aC/i,/^dC/i],abbreviated:[/^(a. de C.)/i,/^(d. de C.)/i],wide:[/^(abans de Crist)/i,/^(despr[eé]s de Crist)/i]},u={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](è|r|n|r|t)? trimestre/i},l={any:[/1/i,/2/i,/3/i,/4/i]},f={narrow:/^(GN|FB|MÇ|AB|MG|JN|JL|AG|ST|OC|NV|DS)/i,abbreviated:/^(gen.|febr.|març|abr.|maig|juny|jul.|ag.|set.|oct.|nov.|des.)/i,wide:/^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i},v={narrow:[/^GN/i,/^FB/i,/^MÇ/i,/^AB/i,/^MG/i,/^JN/i,/^JL/i,/^AG/i,/^ST/i,/^OC/i,/^NV/i,/^DS/i],abbreviated:[/^gen./i,/^febr./i,/^març/i,/^abr./i,/^maig/i,/^juny/i,/^jul./i,/^ag./i,/^set./i,/^oct./i,/^nov./i,/^des./i],wide:[/^gener/i,/^febrer/i,/^març/i,/^abril/i,/^maig/i,/^juny/i,/^juliol/i,/^agost/i,/^setembre/i,/^octubre/i,/^novembre/i,/^desembre/i]},b={narrow:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,short:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,abbreviated:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,wide:/^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i},c={narrow:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],abbreviated:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],wide:[/^diumenge/i,/^dilluns/i,/^dimarts/i,/^dimecres/i,/^dijous/i,/^divendres/i,/^disssabte/i]},g={narrow:/^(a|p|mn|md|(del|de la) (matí|tarda|vespre|nit))/i,abbreviated:/^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i,wide:/^(ante meridiem|post meridiem|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i},h={any:{am:/^a/i,pm:/^p/i,midnight:/^mitjanit/i,noon:/^migdia/i,morning:/matí/i,afternoon:/tarda/i,evening:/vespre/i,night:/nit/i}},p={ordinalNumber:(0,d.default)({matchPattern:r,parsePattern:o,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:b,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:g,defaultMatchWidth:"any",parsePatterns:h,defaultParseWidth:"any"})},y=p;a.default=y,e.exports=a.default},bf0a:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=d(t("af03"));function d(e){return e&&e.__esModule?e:{default:e}}var n={narrow:["aC","dC"],abbreviated:["a. de C.","d. de C."],wide:["abans de Crist","després de Crist"]},r={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1r trimestre","2n trimestre","3r trimestre","4t trimestre"]},o={narrow:["GN","FB","MÇ","AB","MG","JN","JL","AG","ST","OC","NV","DS"],abbreviated:["gen.","febr.","març","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des."],wide:["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"]},s={narrow:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],short:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],abbreviated:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],wide:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"]},m={narrow:{am:"am",pm:"pm",midnight:"mitjanit",noon:"migdia",morning:"matí",afternoon:"tarda",evening:"vespre",night:"nit"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"mitjanit",noon:"migdia",morning:"matí",afternoon:"tarda",evening:"vespre",night:"nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"mitjanit",noon:"migdia",morning:"matí",afternoon:"tarda",evening:"vespre",night:"nit"}},u={narrow:{am:"am",pm:"pm",midnight:"de la mitjanit",noon:"del migdia",morning:"del matí",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},abbreviated:{am:"AM",pm:"PM",midnight:"de la mitjanit",noon:"del migdia",morning:"del matí",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"de la mitjanit",noon:"del migdia",morning:"del matí",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"}};function l(e,a){var t=Number(e),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"r";case 2:return t+"n";case 3:return t+"r";case 4:return t+"t"}return t+"è"}var f={ordinalNumber:l,era:(0,i.default)({values:n,defaultWidth:"wide"}),quarter:(0,i.default)({values:r,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:o,defaultWidth:"wide"}),day:(0,i.default)({values:s,defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:m,defaultWidth:"wide",formattingValues:u,defaultFormattingWidth:"wide"})},v=f;a.default=v,e.exports=a.default}}]);