(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-404","df-399","df-400","df-401","df-402","df-403"],{"41fa":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n={lessThanXSeconds:{one:"بىر سىكۇنت ئىچىدە",other:"سىكۇنت ئىچىدە {{count}}"},xSeconds:{one:"بىر سىكۇنت",other:"سىكۇنت {{count}}"},halfAMinute:"يىرىم مىنۇت",lessThanXMinutes:{one:"بىر مىنۇت ئىچىدە",other:"مىنۇت ئىچىدە {{count}}"},xMinutes:{one:"بىر مىنۇت",other:"مىنۇت {{count}}"},aboutXHours:{one:"تەخمىنەن بىر سائەت",other:"سائەت {{count}} تەخمىنەن"},xHours:{one:"بىر سائەت",other:"سائەت {{count}}"},xDays:{one:"بىر كۈن",other:"كۈن {{count}}"},aboutXWeeks:{one:"تەخمىنەن بىرھەپتە",other:"ھەپتە {{count}} تەخمىنەن"},xWeeks:{one:"بىرھەپتە",other:"ھەپتە {{count}}"},aboutXMonths:{one:"تەخمىنەن بىر ئاي",other:"ئاي {{count}} تەخمىنەن"},xMonths:{one:"بىر ئاي",other:"ئاي {{count}}"},aboutXYears:{one:"تەخمىنەن بىر يىل",other:"يىل {{count}} تەخمىنەن"},xYears:{one:"بىر يىل",other:"يىل {{count}}"},overXYears:{one:"بىر يىلدىن ئارتۇق",other:"يىلدىن ئارتۇق {{count}}"},almostXYears:{one:"ئاساسەن بىر يىل",other:"يىل {{count}} ئاساسەن"}};function i(e,t,a){var i;return a=a||{},i="string"===typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?i:i+" بولدى":i}e.exports=t.default},"4ec6c":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n={lastWeek:"'ئ‍ۆتكەن' eeee 'دە' p",yesterday:"'تۈنۈگۈن دە' p",today:"'بۈگۈن دە' p",tomorrow:"'ئەتە دە' p",nextWeek:"eeee 'دە' p",other:"P"};function i(e,t,a,i){return n[e]}e.exports=t.default},"5ca0":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("9686")),i=o(a("b028"));function o(e){return e&&e.__esModule?e:{default:e}}var r=/^(\d+)(th|st|nd|rd)?/i,d=/\d+/i,u={narrow:/^(ب|ك)/i,wide:/^(مىيلادىدىن بۇرۇن|مىيلادىدىن كىيىن)/i},f={any:[/^بۇرۇن/i,/^كىيىن/i]},l={narrow:/^[1234]/i,abbreviated:/^چ[1234]/i,wide:/^چارەك [1234]/i},s={any:[/1/i,/2/i,/3/i,/4/i]},h={narrow:/^[يفمئامئ‍ئاسۆند]/i,abbreviated:/^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i,wide:/^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i},c={narrow:[/^ي/i,/^ف/i,/^م/i,/^ا/i,/^م/i,/^ى‍/i,/^ى‍/i,/^ا‍/i,/^س/i,/^ۆ/i,/^ن/i,/^د/i],any:[/^يان/i,/^فېۋ/i,/^مار/i,/^ئاپ/i,/^ماي/i,/^ئىيۇن/i,/^ئىيول/i,/^ئاۋ/i,/^سىن/i,/^ئۆك/i,/^نوي/i,/^دىك/i]},m={narrow:/^[دسچپجشي]/i,short:/^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,abbreviated:/^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,wide:/^(يەكشەنبە|دۈشەنبە|سەيشەنبە|چارشەنبە|پەيشەنبە|جۈمە|شەنبە)/i},v={narrow:[/^ي/i,/^د/i,/^س/i,/^چ/i,/^پ/i,/^ج/i,/^ش/i],any:[/^ي/i,/^د/i,/^س/i,/^چ/i,/^پ/i,/^ج/i,/^ش/i]},w={narrow:/^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i,any:/^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i},p={any:{am:/^ئە/i,pm:/^چ/i,midnight:/^ك/i,noon:/^چ/i,morning:/ئەتىگەن/i,afternoon:/چۈشتىن كىيىن/i,evening:/ئاخشىم/i,night:/كىچە/i}},g={ordinalNumber:(0,n.default)({matchPattern:r,parsePattern:d,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:w,defaultMatchWidth:"any",parsePatterns:p,defaultParseWidth:"any"})},b=g;t.default=b,e.exports=t.default},"64a5":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("1f21"));function i(e){return e&&e.__esModule?e:{default:e}}var o={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},r={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},d={full:"{{date}} 'دە' {{time}}",long:"{{date}} 'دە' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},u={date:(0,n.default)({formats:o,defaultWidth:"full"}),time:(0,n.default)({formats:r,defaultWidth:"full"}),dateTime:(0,n.default)({formats:d,defaultWidth:"full"})},f=u;t.default=f,e.exports=t.default},"9a9f":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("af03"));function i(e){return e&&e.__esModule?e:{default:e}}var o={narrow:["ب","ك"],abbreviated:["ب","ك"],wide:["مىيلادىدىن بۇرۇن","مىيلادىدىن كىيىن"]},r={narrow:["1","2","3","4"],abbreviated:["1","2","3","4"],wide:["بىرىنجى چارەك","ئىككىنجى چارەك","ئۈچىنجى چارەك","تۆتىنجى چارەك"]},d={narrow:["ي","ف","م","ا","م","ى","ى","ا","س","ۆ","ن","د"],abbreviated:["يانۋار","فېۋىرال","مارت","ئاپرىل","ماي","ئىيۇن","ئىيول","ئاۋغۇست","سىنتەبىر","ئۆكتەبىر","نويابىر","دىكابىر"],wide:["يانۋار","فېۋىرال","مارت","ئاپرىل","ماي","ئىيۇن","ئىيول","ئاۋغۇست","سىنتەبىر","ئۆكتەبىر","نويابىر","دىكابىر"]},u={narrow:["ي","د","س","چ","پ","ج","ش"],short:["ي","د","س","چ","پ","ج","ش"],abbreviated:["يەكشەنبە","دۈشەنبە","سەيشەنبە","چارشەنبە","پەيشەنبە","جۈمە","شەنبە"],wide:["يەكشەنبە","دۈشەنبە","سەيشەنبە","چارشەنبە","پەيشەنبە","جۈمە","شەنبە"]},f={narrow:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەن",afternoon:"چۈشتىن كىيىن",evening:"ئاخشىم",night:"كىچە"},abbreviated:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەن",afternoon:"چۈشتىن كىيىن",evening:"ئاخشىم",night:"كىچە"},wide:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەن",afternoon:"چۈشتىن كىيىن",evening:"ئاخشىم",night:"كىچە"}},l={narrow:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەندە",afternoon:"چۈشتىن كىيىن",evening:"ئاخشامدا",night:"كىچىدە"},abbreviated:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەندە",afternoon:"چۈشتىن كىيىن",evening:"ئاخشامدا",night:"كىچىدە"},wide:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەندە",afternoon:"چۈشتىن كىيىن",evening:"ئاخشامدا",night:"كىچىدە"}};function s(e,t){return String(e)}var h={ordinalNumber:s,era:(0,n.default)({values:o,defaultWidth:"wide"}),quarter:(0,n.default)({values:r,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:d,defaultWidth:"wide"}),day:(0,n.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:f,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"})},c=h;t.default=c,e.exports=t.default},c93d:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a("41fa")),i=u(a("64a5")),o=u(a("4ec6c")),r=u(a("9a9f")),d=u(a("5ca0"));function u(e){return e&&e.__esModule?e:{default:e}}var f={code:"ug",formatDistance:n.default,formatLong:i.default,formatRelative:o.default,localize:r.default,match:d.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},l=f;t.default=l,e.exports=t.default}}]);