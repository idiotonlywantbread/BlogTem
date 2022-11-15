// ==UserScript==
// @name         91porn 解锁VIP限制
// @namespace    https://github.com/91p2022/91
// @version      0.1
// @description  解锁VIP限制
// @author       @chunv_bot
// @supportURL   https://github.com/91p2022/91
// @match        *.91porn.com/*
// @match        *://*/view_video.php*
// @match        *://*/index.php*
// @match        *://*/search_result.php*
// @match        *://*e1016.91p01.com*
// @home-url     https://github.com/91p2022/91
// @icon         https://www.google.com/s2/favicons?sz=64&domain=91porn.com
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @license      AGPL-3.0
// ==/UserScript==


(function() {
    'use strict';

     try
    {
    var PageElement = document.createElement("input");
    var SearchForm = document.getElementById("search_form")
    PageElement.setAttribute("type","hidden");
    PageElement.setAttribute("name","page");
    PageElement.setAttribute("value","2");
    SearchForm.appendChild(PageElement);
    console.log("o");
    if(location.href.includes("search"))
    {
        var HostSearchElement= document.evaluate('//*[@id="videobox"]/p[2]', document, null, XPathResult.ANY_TYPE, null).iterateNext();
        for(var i=0;i<HostSearchElement.childElementCount;i++)
        {
            HostSearchElement.children[i].href+="&page=2";
        }
    }
    }
    catch(err)
    {

    }
})();
