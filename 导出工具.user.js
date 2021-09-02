// ==UserScript==
// @name         导出工具
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  仅限于技术交流与学习，不得用于考试作弊
// @author       xuqiao5
// @match        https://hikexam.hikvision.com/*
// @icon         https://hikexam.hikvision.com/static/logo.png
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function funcDownload (content, filename) {
        // 创建隐藏的可下载链接
        var eleLink = document.createElement('a');
        eleLink.download = filename;
        eleLink.style.display = 'none';
        // 字符内容转变成blob地址
        var blob = new Blob([content]);
        eleLink.href = URL.createObjectURL(blob);
        // 触发点击
        document.body.appendChild(eleLink);
        eleLink.click();
        // 然后移除
        document.body.removeChild(eleLink);
    }

    var bnt = document.createElement("button"); //创建一个input对象（提示框按钮）
    bnt.innerHTML="<div style='top: 50px;right: 50px;background: #1a59b7;color:#ffffff;overflow: hidden;z-index: 9999;position: fixed;padding:5px;text-align:center;width: 75px;height: 22px;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;border-top-left-radius: 4px;border-top-right-radius: 4px;'>导出</div>";
    document.body.append(bnt);

    //绑定按键点击功能
    bnt.onclick = function (){
        //根据url获取考试id
        var match = /(?<=id=).*(?=&)/i.exec(window.location.href);
        if (!match) {
            return;
        }
        var id = match[0];
        var questions;
        //请求答案接口，通常会包含所有题目和选项，如果是第一次做题之前，题目的选项是没有的，需要另外请求
        GM_xmlhttpRequest({
            method : "POST",
            headers: {"Accept": "application/json"},
            url : "https://hikexam.hikvision.com/exam-business/exam/getInfoByExamIdAnswerCheck",
            data : `{"examRefId": "${id}", "lookType": "1", "submit": "1"}`,
            onload: function(response){
                var answer_json = JSON.parse(response.responseText);
                var answers = new Map(answer_json.data.questionHisCheckList.map(function(q){return [q.questionRefId,q.answer.length > 1 ? JSON.parse(q.answer) : q.answer]}));
                if (answers.size == 0){
                    return;
                }
                if (answer_json.data.questionHisCheckList[0].hisOptionList.length > 0){
                    questions = answer_json.data.questionHisCheckList.map(function(q){return {'题目':q.questionStem,'选项':q.hisOptionList.map(function(o){return o.optionNo+': '+o.optionDetails}).sort(),'答案': answers.get(q.questionRefId)}});
                    funcDownload(JSON.stringify(questions,null,4), answer_json.data.title+'_答案.txt');
                    return;
                };
                //没提交过，答案接口里面的题目没有选项，所以需要单独请求一下题目接口
                GM_xmlhttpRequest({
                    method : "POST",
                    headers: {"Accept": "application/json"},
                    url : "https://hikexam.hikvision.com/exam-business/exam/getInfoByExamId",
                    data : `{"submit": "1", "examRefId": "${id}"}`,
                    onload: function(response){
                        var question_json = JSON.parse(response.responseText);
                        questions = question_json.data.questionHisList.map(function(q){return {'题目':q.questionStem,'选项':q.hisOptionList.map(function(o){return o.optionNo+': '+o.optionDetails}).sort(),'答案': answers.get(q.questionRefId)}});
                        funcDownload(JSON.stringify(questions,null,4), question_json.data.title+'_答案.txt');
                        return;
                    }
                });
            }
        });
        return;
    };

})();