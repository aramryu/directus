(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-141"],{"8fd4":function(a,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n(t("9686")),l=n(t("b028"));function n(a){return a&&a.__esModule?a:{default:a}}var u=/^(\d+)(\.)/i,r=/\d+/i,s={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},d={any:[/^e/i,/^j/i]},k={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},o={any:[/1/i,/2/i,/3/i,/4/i]},h={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},m={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},p={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},f={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},y={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},v={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},c={ordinalNumber:(0,e.default)({matchPattern:u,parsePattern:r,valueCallback:function(a){return parseInt(a,10)}}),era:(0,l.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:d,defaultParseWidth:"any"}),quarter:(0,l.default)({matchPatterns:k,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,l.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),day:(0,l.default)({matchPatterns:p,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any"}),dayPeriod:(0,l.default)({matchPatterns:y,defaultMatchWidth:"any",parsePatterns:v,defaultParseWidth:"any"})},w=c;i.default=w,a.exports=i.default}}]);