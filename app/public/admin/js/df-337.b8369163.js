(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-337"],{f8e6:function(i,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=r(e("9686")),n=r(e("b028"));function r(i){return i&&i.__esModule?i:{default:i}}var d=/^(\d+)?/i,s=/\d+/i,u={narrow:/^(Î|D)/i,abbreviated:/^(Î\.?\s?d\.?\s?C\.?|Î\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,wide:/^(Înainte de Cristos|Înaintea erei noastre|După Cristos|Era noastră)/i},m={any:[/^ÎC/i,/^DC/i],wide:[/^(Înainte de Cristos|Înaintea erei noastre)/i,/^(După Cristos|Era noastră)/i]},o={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^trimestrul [1234]/i},l={any:[/1/i,/2/i,/3/i,/4/i]},f={narrow:/^[ifmaasond]/i,abbreviated:/^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,wide:/^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i},p={narrow:[/^i/i,/^f/i,/^m/i,/^a/i,/^m/i,/^i/i,/^i/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ia/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^iun/i,/^iul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},c={narrow:/^[dlmjvs]/i,short:/^(d|l|ma|mi|j|v|s)/i,abbreviated:/^(dum|lun|mar|mie|jo|vi|sâ)/i,wide:/^(duminica|luni|marţi|miercuri|joi|vineri|sâmbătă)/i},h={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^mi/i,/^j/i,/^v/i,/^s/i]},b={narrow:/^(a|p|mn|a|(dimineaţa|după-amiaza|seara|noaptea))/i,any:/^([ap]\.?\s?m\.?|miezul nopții|amiaza|(dimineaţa|după-amiaza|seara|noaptea))/i},w={any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/amiaza/i,morning:/dimineaţa/i,afternoon:/după-amiaza/i,evening:/seara/i,night:/noaptea/i}},P={ordinalNumber:(0,t.default)({matchPattern:d,parsePattern:s,valueCallback:function(i){return parseInt(i,10)}}),era:(0,n.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:(0,n.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:p,defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:b,defaultMatchWidth:"any",parsePatterns:w,defaultParseWidth:"any"})},v=P;a.default=v,i.exports=a.default}}]);