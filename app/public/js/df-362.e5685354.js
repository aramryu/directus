(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-362","df-357","df-358","df-359","df-360","df-361"],{"83eb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var o={lastWeek:function(t){var e=t.getUTCDay();switch(e){case 0:return"'прошле недеље у' p";case 3:return"'прошле среде у' p";case 6:return"'прошле суботе у' p";default:return"'прошли' EEEE 'у' p"}},yesterday:"'јуче у' p",today:"'данас у' p",tomorrow:"'сутра у' p",nextWeek:function(t){var e=t.getUTCDay();switch(e){case 0:return"'следеће недеље у' p";case 3:return"'следећу среду у' p";case 6:return"'следећу суботу у' p";default:return"'следећи' EEEE 'у' p"}},other:"P"};function a(t,e,n,a){var i=o[t];return"function"===typeof i?i(e):i}t.exports=e.default},8813:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("af03"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t){var e=Number(t);return String(e).concat(".")}var r={narrow:["пр.н.е.","АД"],abbreviated:["пр. Хр.","по. Хр."],wide:["Пре Христа","После Христа"]},d={narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец"],wide:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"]},u={narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец"],wide:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"]},s={narrow:["1.","2.","3.","4."],abbreviated:["1. кв.","2. кв.","3. кв.","4. кв."],wide:["1. квартал","2. квартал","3. квартал","4. квартал"]},l={narrow:["Н","П","У","С","Ч","П","С"],short:["нед","пон","уто","сре","чет","пет","суб"],abbreviated:["нед","пон","уто","сре","чет","пет","суб"],wide:["недеља","понедељак","уторак","среда","четвртак","петак","субота"]},f={narrow:{am:"АМ",pm:"ПМ",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},abbreviated:{am:"АМ",pm:"ПМ",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},wide:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"после подне",evening:"увече",night:"ноћу"}},h={narrow:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},abbreviated:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},wide:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"после подне",evening:"увече",night:"ноћу"}},c={ordinalNumber:i,era:(0,o.default)({values:r,defaultWidth:"wide"}),quarter:(0,o.default)({values:s,defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:(0,o.default)({values:d,defaultWidth:"wide",formattingValues:u,defaultFormattingWidth:"wide"}),day:(0,o.default)({values:l,defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:h,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"})},p=c;e.default=p,t.exports=e.default},acbf:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("1f21"));function a(t){return t&&t.__esModule?t:{default:t}}var i={full:"EEEE, d. MMMM yyyy.",long:"d. MMMM yyyy.",medium:"d. MMM yy.",short:"dd. MM. yy."},r={full:"HH:mm:ss (zzzz)",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},d={full:"{{date}} 'у' {{time}}",long:"{{date}} 'у' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},u={date:(0,o.default)({formats:i,defaultWidth:"full"}),time:(0,o.default)({formats:r,defaultWidth:"full"}),dateTime:(0,o.default)({formats:d,defaultWidth:"full"})},s=u;e.default=s,t.exports=e.default},e9c2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("b028")),a=i(n("9686"));function i(t){return t&&t.__esModule?t:{default:t}}var r=/^(\d+)\./i,d=/\d+/i,u={narrow:/^(пр\.н\.е\.|АД)/i,abbreviated:/^(пр\.\s?Хр\.|по\.\s?Хр\.)/i,wide:/^(Пре Христа|пре нове ере|После Христа|нова ера)/i},s={any:[/^пр/i,/^(по|нова)/i]},l={narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?кв\.?/i,wide:/^[1234]\. квартал/i},f={any:[/1/i,/2/i,/3/i,/4/i]},h={narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(јан|феб|мар|апр|мај|јун|јул|авг|сеп|окт|нов|дец)/i,wide:/^((јануар|јануара)|(фебруар|фебруара)|(март|марта)|(април|априла)|(мја|маја)|(јун|јуна)|(јул|јула)|(август|августа)|(септембар|септембра)|(октобар|октобра)|(новембар|новембра)|(децембар|децембра))/i},c={narrow:[/(10|11|12|[123456789])/i],any:[/^ја/i,/^ф/i,/^мар/i,/^ап/i,/^мај/i,/^јун/i,/^јул/i,/^авг/i,/^с/i,/^о/i,/^н/i,/^д/i]},p={narrow:/^[пусчн]/i,short:/^(нед|пон|уто|сре|чет|пет|суб)/i,abbreviated:/^(нед|пон|уто|сре|чет|пет|суб)/i,wide:/^(недеља|понедељак|уторак|среда|четвртак|петак|субота)/i},w={narrow:[/^п/i,/^у/i,/^с/i,/^ч/i,/^н/i],any:[/^нед/i,/^пон/i,/^уто/i,/^сре/i,/^чет/i,/^пет/i,/^суб/i]},m={any:/^(ам|пм|поноћ|(по)?подне|увече|ноћу|после подне|ујутру)/i},P={any:{am:/^a/i,pm:/^p/i,midnight:/^поно/i,noon:/^под/i,morning:/ујутру/i,afternoon:/(после\s|по)+подне/i,evening:/(увече)/i,night:/(ноћу)/i}},g={ordinalNumber:(0,a.default)({matchPattern:r,parsePattern:d,valueCallback:function(t){return parseInt(t,10)}}),era:(0,o.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:(0,o.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,o.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,o.default)({matchPatterns:p,defaultMatchWidth:"wide",parsePatterns:w,defaultParseWidth:"any"}),dayPeriod:(0,o.default)({matchPatterns:m,defaultMatchWidth:"any",parsePatterns:P,defaultParseWidth:"any"})},v=g;e.default=v,t.exports=e.default},edef:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var o={lessThanXSeconds:{one:{standalone:"мање од 1 секунде",withPrepositionAgo:"мање од 1 секунде",withPrepositionIn:"мање од 1 секунду"},dual:"мање од {{count}} секунде",other:"мање од {{count}} секунди"},xSeconds:{one:{standalone:"1 секунда",withPrepositionAgo:"1 секунде",withPrepositionIn:"1 секунду"},dual:"{{count}} секунде",other:"{{count}} секунди"},halfAMinute:"пола минуте",lessThanXMinutes:{one:{standalone:"мање од 1 минуте",withPrepositionAgo:"мање од 1 минуте",withPrepositionIn:"мање од 1 минуту"},dual:"мање од {{count}} минуте",other:"мање од {{count}} минута"},xMinutes:{one:{standalone:"1 минута",withPrepositionAgo:"1 минуте",withPrepositionIn:"1 минуту"},dual:"{{count}} минуте",other:"{{count}} минута"},aboutXHours:{one:{standalone:"око 1 сат",withPrepositionAgo:"око 1 сат",withPrepositionIn:"око 1 сат"},dual:"око {{count}} сата",other:"око {{count}} сати"},xHours:{one:{standalone:"1 сат",withPrepositionAgo:"1 сат",withPrepositionIn:"1 сат"},dual:"{{count}} сата",other:"{{count}} сати"},xDays:{one:{standalone:"1 дан",withPrepositionAgo:"1 дан",withPrepositionIn:"1 дан"},dual:"{{count}} дана",other:"{{count}} дана"},aboutXWeeks:{one:{standalone:"око 1 недељу",withPrepositionAgo:"око 1 недељу",withPrepositionIn:"око 1 недељу"},dual:"око {{count}} недеље",other:"око {{count}} недеље"},xWeeks:{one:{standalone:"1 недељу",withPrepositionAgo:"1 недељу",withPrepositionIn:"1 недељу"},dual:"{{count}} недеље",other:"{{count}} недеље"},aboutXMonths:{one:{standalone:"око 1 месец",withPrepositionAgo:"око 1 месец",withPrepositionIn:"око 1 месец"},dual:"око {{count}} месеца",other:"око {{count}} месеци"},xMonths:{one:{standalone:"1 месец",withPrepositionAgo:"1 месец",withPrepositionIn:"1 месец"},dual:"{{count}} месеца",other:"{{count}} месеци"},aboutXYears:{one:{standalone:"око 1 годину",withPrepositionAgo:"око 1 годину",withPrepositionIn:"око 1 годину"},dual:"око {{count}} године",other:"око {{count}} година"},xYears:{one:{standalone:"1 година",withPrepositionAgo:"1 године",withPrepositionIn:"1 годину"},dual:"{{count}} године",other:"{{count}} година"},overXYears:{one:{standalone:"преко 1 годину",withPrepositionAgo:"преко 1 годину",withPrepositionIn:"преко 1 годину"},dual:"преко {{count}} године",other:"преко {{count}} година"},almostXYears:{one:{standalone:"готово 1 годину",withPrepositionAgo:"готово 1 годину",withPrepositionIn:"готово 1 годину"},dual:"готово {{count}} године",other:"готово {{count}} година"}};function a(t,e,n){var a;return n=n||{},a="string"===typeof o[t]?o[t]:1===e?n.addSuffix?n.comparison>0?o[t].one.withPrepositionIn:o[t].one.withPrepositionAgo:o[t].one.standalone:e%10>1&&e%10<5&&"1"!==String(e).substr(-2,1)?o[t].dual.replace("{{count}}",e):o[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"за "+a:"пре "+a:a}t.exports=e.default},ee65:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n("edef")),a=u(n("acbf")),i=u(n("83eb")),r=u(n("8813")),d=u(n("e9c2"));function u(t){return t&&t.__esModule?t:{default:t}}var s={code:"sr",formatDistance:o.default,formatLong:a.default,formatRelative:i.default,localize:r.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:1}},l=s;e.default=l,t.exports=e.default}}]);