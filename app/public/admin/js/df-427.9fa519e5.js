(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-427"],{"78a9":function(a,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n(t("9686")),r=n(t("b028"));function n(a){return a&&a.__esModule?a:{default:a}}var d=/^(第\s*)?\d+(日|时|分|秒)?/i,u=/\d+/i,s={narrow:/^(前)/i,abbreviated:/^(前)/i,wide:/^(公元前|公元)/i},l={any:[/^(前)/i,/^(公元)/i]},f={narrow:/^[1234]/i,abbreviated:/^第[一二三四]刻/i,wide:/^第[一二三四]刻钟/i},o={any:[/(1|一)/i,/(2|二)/i,/(3|三)/i,/(4|四)/i]},h={narrow:/^(一|二|三|四|五|六|七|八|九|十[二一])/i,abbreviated:/^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,wide:/^(一|二|三|四|五|六|七|八|九|十[二一])月/i},c={narrow:[/^一/i,/^二/i,/^三/i,/^四/i,/^五/i,/^六/i,/^七/i,/^八/i,/^九/i,/^十(?!(一|二))/i,/^十一/i,/^十二/i],any:[/^一|1/i,/^二|2/i,/^三|3/i,/^四|4/i,/^五|5/i,/^六|6/i,/^七|7/i,/^八|8/i,/^九|9/i,/^十(?!(一|二))|10/i,/^十一|11/i,/^十二|12/i]},w={narrow:/^[一二三四五六日]/i,short:/^[一二三四五六日]/i,abbreviated:/^周[一二三四五六日]/i,wide:/^星期[一二三四五六日]/i},P={any:[/日/i,/一/i,/二/i,/三/i,/四/i,/五/i,/六/i]},b={any:/^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i},p={any:{am:/^上午?/i,pm:/^下午?/i,midnight:/^午夜/i,noon:/^[中正]午/i,morning:/^早上/i,afternoon:/^下午/i,evening:/^晚上?/i,night:/^凌晨/i}},y={ordinalNumber:(0,e.default)({matchPattern:d,parsePattern:u,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,r.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:w,defaultMatchWidth:"wide",parsePatterns:P,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:b,defaultMatchWidth:"any",parsePatterns:p,defaultParseWidth:"any"})},m=y;i.default=m,a.exports=i.default}}]);