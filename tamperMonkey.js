// ==UserScript==
// @name         MOOCAutoChecker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  一键自动互评一项作业
// @author       halozhy
// @match        *://www.icourse163.org/learn/*
// @match        *://www.icourse163.org/spoc/learn/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let fuckItBtn = null;
    let suckIt = `<div style="position: fixed;top: 50%;z-index: 999;right: 10%;padding: 1em;background: rgba(233,233,233,.6);border: 1px solid #aaa;">
<textarea placeholder="评价内容" id="fuckMe" style="padding: 10px;height: 60px;width: 200px;margin: 10px;">Good Job Bro.</textarea>
<p style="text-align: center;">
<input type="text" disabled id="times" placeholder="份数，1 ~ 20" style="width: 100px;padding: .4em;margin: 0 1em;background: #fff;border: 1px solid #999;float: left;" value="1">
<input type="submit" value="Fuck It Now" id="${fuckItBtn}" style="border: 1px solid #aaa;padding: 5px;color: #999;cursor: pointer;">
</p>
</div>`;
    document.body.insertAdjacentHTML("afterbegin", suckIt);
    document.getElementById(fuckItBtn).onclick = function () {
        let judge = document.getElementById('fuckMe').value || 'Good Job';
        document.querySelectorAll('.s').forEach(e => {
            e.children[e.children.length - 1].children[0].checked = true
        });
        document.querySelectorAll('.j-textarea').forEach(e => {
            if (e.name !== "search") {
                e.value = judge
            }
        });
        if (document.querySelector('.j-submitbtn') === null) {
            //alert("这个页面似乎不是互评页面哦");
        }
        else {
            window.scrollTo(0, document.querySelector('.j-submitbtn').offsetTop)
        }

    }

})();