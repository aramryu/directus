(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bb22374","chunk-2d0c939a"],{"57df":function(e,t,n){(function(e){e(n("0e59"))})((function(e){"use strict";e.defineMode("haskell",(function(e,t){function n(e,t,n){return t(n),n(e,t)}var r=/[a-z_]/,a=/[A-Z]/,i=/\d/,o=/[0-9A-Fa-f]/,l=/[0-7]/,u=/[a-z_A-Z0-9'\xa1-\uffff]/,s=/[-!#$%&*+.\/<=>?@\\^|~:]/,f=/[(),;[\]`{}]/,c=/[ \t\v\f]/;function d(e,t){if(e.eatWhile(c))return null;var d=e.next();if(f.test(d)){if("{"==d&&e.eat("-")){var p="comment";return e.eat("#")&&(p="meta"),n(e,t,m(p,1))}return null}if("'"==d)return e.eat("\\"),e.next(),e.eat("'")?"string":"string error";if('"'==d)return n(e,t,h);if(a.test(d))return e.eatWhile(u),e.eat(".")?"qualifier":"variable-2";if(r.test(d))return e.eatWhile(u),"variable";if(i.test(d)){if("0"==d){if(e.eat(/[xX]/))return e.eatWhile(o),"integer";if(e.eat(/[oO]/))return e.eatWhile(l),"number"}e.eatWhile(i);p="number";return e.match(/^\.\d+/)&&(p="number"),e.eat(/[eE]/)&&(p="number",e.eat(/[-+]/),e.eatWhile(i)),p}if("."==d&&e.eat("."))return"keyword";if(s.test(d)){if("-"==d&&e.eat(/-/)&&(e.eatWhile(/-/),!e.eat(s)))return e.skipToEnd(),"comment";p="variable";return":"==d&&(p="variable-2"),e.eatWhile(s),p}return"error"}function m(e,t){return 0==t?d:function(n,r){var a=t;while(!n.eol()){var i=n.next();if("{"==i&&n.eat("-"))++a;else if("-"==i&&n.eat("}")&&(--a,0==a))return r(d),e}return r(m(e,a)),e}}function h(e,t){while(!e.eol()){var n=e.next();if('"'==n)return t(d),"string";if("\\"==n){if(e.eol()||e.eat(c))return t(p),"string";e.eat("&")||e.next()}}return t(d),"string error"}function p(e,t){return e.eat("\\")?n(e,t,h):(e.next(),t(d),"error")}var g=function(){var e={};function n(t){return function(){for(var n=0;n<arguments.length;n++)e[arguments[n]]=t}}n("keyword")("case","class","data","default","deriving","do","else","foreign","if","import","in","infix","infixl","infixr","instance","let","module","newtype","of","then","type","where","_"),n("keyword")("..",":","::","=","\\","<-","->","@","~","=>"),n("builtin")("!!","$!","$","&&","+","++","-",".","/","/=","<","<*","<=","<$>","<*>","=<<","==",">",">=",">>",">>=","^","^^","||","*","*>","**"),n("builtin")("Applicative","Bool","Bounded","Char","Double","EQ","Either","Enum","Eq","False","FilePath","Float","Floating","Fractional","Functor","GT","IO","IOError","Int","Integer","Integral","Just","LT","Left","Maybe","Monad","Nothing","Num","Ord","Ordering","Rational","Read","ReadS","Real","RealFloat","RealFrac","Right","Show","ShowS","String","True"),n("builtin")("abs","acos","acosh","all","and","any","appendFile","asTypeOf","asin","asinh","atan","atan2","atanh","break","catch","ceiling","compare","concat","concatMap","const","cos","cosh","curry","cycle","decodeFloat","div","divMod","drop","dropWhile","either","elem","encodeFloat","enumFrom","enumFromThen","enumFromThenTo","enumFromTo","error","even","exp","exponent","fail","filter","flip","floatDigits","floatRadix","floatRange","floor","fmap","foldl","foldl1","foldr","foldr1","fromEnum","fromInteger","fromIntegral","fromRational","fst","gcd","getChar","getContents","getLine","head","id","init","interact","ioError","isDenormalized","isIEEE","isInfinite","isNaN","isNegativeZero","iterate","last","lcm","length","lex","lines","log","logBase","lookup","map","mapM","mapM_","max","maxBound","maximum","maybe","min","minBound","minimum","mod","negate","not","notElem","null","odd","or","otherwise","pi","pred","print","product","properFraction","pure","putChar","putStr","putStrLn","quot","quotRem","read","readFile","readIO","readList","readLn","readParen","reads","readsPrec","realToFrac","recip","rem","repeat","replicate","return","reverse","round","scaleFloat","scanl","scanl1","scanr","scanr1","seq","sequence","sequence_","show","showChar","showList","showParen","showString","shows","showsPrec","significand","signum","sin","sinh","snd","span","splitAt","sqrt","subtract","succ","sum","tail","take","takeWhile","tan","tanh","toEnum","toInteger","toRational","truncate","uncurry","undefined","unlines","until","unwords","unzip","unzip3","userError","words","writeFile","zip","zip3","zipWith","zipWith3");var r=t.overrideKeywords;if(r)for(var a in r)r.hasOwnProperty(a)&&(e[a]=r[a]);return e}();return{startState:function(){return{f:d}},copyState:function(e){return{f:e.f}},token:function(e,t){var n=t.f(e,(function(e){t.f=e})),r=e.current();return g.hasOwnProperty(r)?g[r]:n},blockCommentStart:"{-",blockCommentEnd:"-}",lineComment:"--"}})),e.defineMIME("text/x-haskell","haskell")}))},a945:function(e,t,n){(function(e){e(n("0e59"),n("57df"))})((function(e){"use strict";e.defineMode("haskell-literate",(function(t,n){var r=e.getMode(t,n&&n.base||"haskell");return{startState:function(){return{inCode:!1,baseState:e.startState(r)}},token:function(e,t){return e.sol()&&(t.inCode=e.eat(">"))?"meta":t.inCode?r.token(e,t.baseState):(e.skipToEnd(),"comment")},innerMode:function(e){return e.inCode?{state:e.baseState,mode:r}:null}}}),"haskell"),e.defineMIME("text/x-literate-haskell","haskell-literate")}))}}]);