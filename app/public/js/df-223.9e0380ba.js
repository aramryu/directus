(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-223"],{b65bb:function(a,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=n(e("9686")),r=n(e("b028"));function n(a){return a&&a.__esModule?a:{default:a}}var d=/^(\d+)(º)?/i,o=/\d+/i,s={narrow:/^(aC|dC)/i,abbreviated:/^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,wide:/^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i},m={any:[/^a/i,/^(d|e)/i]},l={narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](º)? trimestre/i},u={any:[/1/i,/2/i,/3/i,/4/i]},g={narrow:/^[gfmalsond]/i,abbreviated:/^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,wide:/^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i},f={narrow:[/^g/i,/^f/i,/^m/i,/^a/i,/^m/i,/^g/i,/^l/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ge/i,/^f/i,/^mar/i,/^ap/i,/^mag/i,/^gi/i,/^l/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},b={narrow:/^[dlmgvs]/i,short:/^(do|lu|ma|me|gi|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|gio|ven|sab)/i,wide:/^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i},h={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^g/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^me/i,/^g/i,/^v/i,/^s/i]},c={narrow:/^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,any:/^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i},p={any:{am:/^a/i,pm:/^p/i,midnight:/^mezza/i,noon:/^mezzo/i,morning:/mattina/i,afternoon:/pomeriggio/i,evening:/sera/i,night:/notte/i}},v={ordinalNumber:(0,t.default)({matchPattern:d,parsePattern:o,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,r.default)({matchPatterns:g,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:b,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:c,defaultMatchWidth:"any",parsePatterns:p,defaultParseWidth:"any"})},w=v;i.default=w,a.exports=i.default}}]);