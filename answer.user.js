// ==UserScript==
// @name         答案导出工具
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  仅限于技术交流与学习，不得用于考试作弊
// @author       xuqiao5
// @match        https://hikexam.hikvision.com/*
// @icon         https://hikexam.hikvision.com/static/logo.png
// @grant        GM_xmlhttpRequest
// ==/UserScript==

eval(function (p, a, c, k, e, d) { e = function (c) { return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) d[e(c)] = k[c] || e(c); k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1; }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p; }('(2(){\'1k 1z\';2 y(S,Y){5 7=8.N(\'a\');7.1A=Y;7.G.1s=\'1B\';5 L=R 1C([S]);7.O=1u.1y(L);8.A.1v(7);7.1w();8.A.1r(7)}5 j=8.N("1t");j.1x="<M G=\'x: D;w: D;1q: #1o;1j:#1n;1m: 1p;z-1l: 1i;1D: 1T;1U:1S;1Q-1R:1V;1Y: 1Z;1X: 1W;l-E-P-n: f;l-E-w-n: f;l-x-P-n: f;l-x-w-n: f;\'>1P</M>";8.A.1H(j);j.1I=2(){5 p=/(?<=h=).*(?=&)/i.1G(1E.1F.O);r(!p){3}5 h=p[0];5 c;K({I:"J",H:{"F":"18/1b"},1d:"19://m.1c.1h/m/k-1e/k/1J",6:`{"1g":"${h}","1N":"1","1a":"1"}`,1f:2(g){5 b=9.t(g.X);5 e=R 1O(b.6.s.d(2(q){3[q.B,q.u.Q>1?9.t(q.u):q.u]}));r(e.1M==0){3}r(b.6.s[0].C.Q>0){c=b.6.s.d(2(q){3{\'Z\':q.W,\'T\':q.C.d(2(o){3 o.U+\': \'+o.V}).10(),\'15\':e.16(q.B)}});y(9.17(c,14,4),b.6.11+\'12.13\');3};K({I:"J",H:{"F":"18/1b"},1d:"19://m.1c.1h/m/k-1e/k/1K",6:`{"1a":"1","1g":"${h}"}`,1f:2(g){5 v=9.t(g.X);c=v.6.1L.d(2(q){3{\'Z\':q.W,\'T\':q.C.d(2(o){3 o.U+\': \'+o.V}).10(),\'15\':e.16(q.B)}});y(9.17(c,14,4),v.6.11+\'12.13\');3}})}});3}})();', 62, 124, '||function|return||var|data|eleLink|document|JSON||answer_json|questions|map|answers|4px|response|id||bnt|exam|border|hikexam|radius||match||if|questionHisCheckList|parse|answer|question_json|right|top|funcDownload||body|questionRefId|hisOptionList|50px|bottom|Accept|style|headers|method|POST|GM_xmlhttpRequest|blob|div|createElement|href|left|length|new|content|选项|optionNo|optionDetails|questionStem|responseText|filename|题目|sort|title|_答案|txt|null|答案|get|stringify|application|https|submit|json|hikvision|url|business|onload|examRefId|com|9999|color|use|index|overflow|ffffff|1a59b7|hidden|background|removeChild|display|button|URL|appendChild|click|innerHTML|createObjectURL|strict|download|none|Blob|position|window|location|exec|append|onclick|getInfoByExamIdAnswerCheck|getInfoByExamId|questionHisList|size|lookType|Map|导出|text|align|5px|fixed|padding|center|22px|height|width|75px'.split('|'), 0, {}))
