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

eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([235-9b-hj-npr-yA-Z]|1\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(2(){\'use strict\';2 n(C,D){5 7=8.E(\'a\');7.download=D;7.F.display=\'none\';5 G=H Blob([C]);7.I=URL.createObjectURL(G);8.p.appendChild(7);7.click();8.p.removeChild(7)}5 e=8.E("button");e.innerHTML="<J F=\'r: K;s: K;background: #1a59b7;color:#ffffff;overflow: hidden;z-index: 9999;position: fixed;padding:5px;text-align:center;width: 75px;height: 22px;f-L-M-g: h;f-L-s-g: h;f-r-M-g: h;f-r-s-g: h;\'>导出</J>";8.p.append(e);e.onclick=2(){5 t=/(?<=j=).*(?=&)/i.exec(window.location.I);u(!t){3}5 j=t[0];5 9;N({O:"P",Q:{"R":"S/T"},U:"V://W.X.Y/k-Z/k/getInfoByExamIdAnswerCheck",6:`{"10":"${j}","lookType":"1","11":"1"}`,12:2(l){5 b=c.v(l.13);5 m=H Map(b.6.w.d(2(q){3[q.x,q.y.14>1?c.v(q.y):q.y]}));u(m.size==0){3}u(b.6.w[0].A.14>0){9=b.6.w.d(2(q){3{\'题目\':q.15,\'选项\':q.A.d(2(o){3 o.16+\': \'+o.17}).18(),\'答案\':m.19(q.x)}});n(c.1a(9,1b,4),b.6.1c+\'_答案.1d\');3};N({O:"P",Q:{"R":"S/T"},U:"V://W.X.Y/k-Z/k/getInfoByExamId",6:`{"11":"1","10":"${j}"}`,12:2(l){5 B=c.v(l.13);9=B.6.questionHisList.d(2(q){3{\'题目\':q.15,\'选项\':q.A.d(2(o){3 o.16+\': \'+o.17}).18(),\'答案\':m.19(q.x)}});n(c.1a(9,1b,4),B.6.1c+\'_答案.1d\');3}})}});3}})();',[],76,'||function|return||var|data|eleLink|document|questions||answer_json|JSON|map|bnt|border|radius|4px||id|exam|response|answers|funcDownload||body||top|right|match|if|parse|questionHisCheckList|questionRefId|answer||hisOptionList|question_json|content|filename|createElement|style|blob|new|href|div|50px|bottom|left|GM_xmlhttpRequest|method|POST|headers|Accept|application|json|url|https|hikexam|hikvision|com|business|examRefId|submit|onload|responseText|length|questionStem|optionNo|optionDetails|sort|get|stringify|null|title|txt'.split('|'),0,{}))
