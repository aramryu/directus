(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-81","df-76","df-77","df-78","df-79","df-80"],{"0c2d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var a={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"};function i(e,t,n,i){return a[e]}e.exports=t.default},2113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("9686")),i=o(n("b028"));function o(e){return e&&e.__esModule?e:{default:e}}var r=/^(\d+)(\.)?/i,u=/\d+/i,d={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},s={any:[/^v/i,/^n/i]},h={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},l={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mär|apr|mai|jun|jul|aug|sep|okt|nov|dez)/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},c={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},f={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},g={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},M={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},w={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},v={ordinalNumber:(0,a.default)({matchPattern:r,parsePattern:u,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:g,defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:M,defaultMatchWidth:"wide",parsePatterns:w,defaultParseWidth:"any"})},b=v;t.default=b,e.exports=t.default},"627b":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("1f21"));function i(e){return e&&e.__esModule?e:{default:e}}var o={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM. y",short:"dd.MM.y"},r={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},u={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},d={date:(0,a.default)({formats:o,defaultWidth:"full"}),time:(0,a.default)({formats:r,defaultWidth:"full"}),dateTime:(0,a.default)({formats:u,defaultWidth:"full"})},s=d;t.default=s,e.exports=t.default},"6e0c":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n("8656")),i=d(n("627b")),o=d(n("0c2d")),r=d(n("f5ad")),u=d(n("2113"));function d(e){return e&&e.__esModule?e:{default:e}}var s={code:"de",formatDistance:a.default,formatLong:i.default,formatRelative:o.default,localize:r.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},h=s;t.default=h,e.exports=t.default},8656:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var a={lessThanXSeconds:{standalone:{one:"weniger als eine Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als einer Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"eine Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"einer Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als eine Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als einer Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"eine Minute",other:"{{count}} Minuten"},withPreposition:{one:"einer Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa eine Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa einer Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"eine Stunde",other:"{{count}} Stunden"},withPreposition:{one:"einer Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"ein Tag",other:"{{count}} Tage"},withPreposition:{one:"einem Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa ein Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa einem Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"ein Woche",other:"{{count}} Wochen"},withPreposition:{one:"einem Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa ein Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa einem Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"ein Monat",other:"{{count}} Monate"},withPreposition:{one:"einem Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa ein Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa einem Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"ein Jahr",other:"{{count}} Jahre"},withPreposition:{one:"einem Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als ein Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als einem Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast ein Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast einem Jahr",other:"fast {{count}} Jahren"}}};function i(e,t,n){n=n||{};var i,o=n.addSuffix?a[e].withPreposition:a[e].standalone;return i="string"===typeof o?o:1===t?o.one:o.other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+i:"vor "+i:i}e.exports=t.default},f5ad:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("af03"));function i(e){return e&&e.__esModule?e:{default:e}}var o={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},r={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},u={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},d={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},s={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},h={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}};function l(e,t){var n=Number(e);return n+"."}var m={ordinalNumber:l,era:(0,a.default)({values:o,defaultWidth:"wide"}),quarter:(0,a.default)({values:r,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:u,defaultWidth:"wide"}),day:(0,a.default)({values:d,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:s,defaultWidth:"wide",formattingValues:h,defaultFormattingWidth:"wide"})},c=m;t.default=c,e.exports=t.default}}]);