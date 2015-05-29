// Extension for Chrome Browser - Magic Actions for YouTube™ - CHROMEACTIONS.COM - Copyright 2015 Vlad and Serge Strukoff - All Rights Reserved
var cspClass=document.documentElement.getAttribute("data-6870");cspClass&&csp2();window.addEventListener("load",init,!1);
function init(){if("/magic-options.html"==location.pathname){var h=document.querySelector(".prefs"),k;h&&(k=document.createElement("iframe"),cspClass&&(k.className=cspClass),k.setAttribute("scrolling","no"),k.setAttribute("frameborder","0"),k.setAttribute("src",chrome.runtime.getURL("opt.html")),h.appendChild(k));if(h=document.querySelector(".appVer"))h.textContent="v6.8.7.5"}}
function csp2(){function h(c){for(var a=0,d=c.addedNodes.length;a<d;++a){var b=c.addedNodes[a],e=b.localName,f=!0;1==b.nodeType&&("style"==e?b.classList.contains(cspClass)&&(f=!1):"a"==e||"link"==e?b.href&&g(b.href)&&(f=!1):"img"==e||"video"==e||"audio"==e?b.src&&g(b.src)&&(f=!1):f="iframe"==e?b.src&&g(b.src)?!1:m(b):"object"==e||"embed"==e?!0:!1,f&&(b.rem?(b.style.setProperty("display","none","important"),b.className=cspClass):(b.rem=!0,b.parentElement.removeChild(b))))}a=0;for(d=c.removedNodes.length;a<
d;++a)b=c.removedNodes[a],e=b.localName,f=!1,1==b.nodeType&&("a"==e||"link"==e?b.href&&g(b.href)&&(f=!0):"img"==e||"iframe"==e||"video"==e||"audio"==e?b.src&&g(b.src)&&(f=!0):"iframe"==e?f=b.src&&g(b.src)?!0:!m(b):"form"==e?b.action&&g(b.action)&&(f=!0):b.classList.contains(cspClass)&&(f=!0),f&&(c.nextSibling?c.target.insertBefore(b,c.nextSibling):c.target.appendChild(b)))}function k(c){var a=c.target,d=c.attributeName;c=c.oldValue;var b=a.getAttribute(d);if(a.my)a.my=!1;else if("href"==d||"src"==
d||"style"==d||"class"==d||"name"==d||"id"==d||"action"==d||"type"==d||"method"==d||"title"==d||"width"==d||"height"==d||"cols"==d||"rows"==d||0==d.indexOf("on")){var e="data-"+cspClass;if(a.hasAttribute(e)){var f=+new Date-(parseInt(a.getAttribute(e))+p+l);a.removeAttribute(e);if(-1E3<f&&1E3>f)return}if("href"==d||"src"==d||"action"==d)b?c?g(b)||a.setAttribute(d,c):g(b)||a.removeAttribute(d):c&&g(c)&&a.setAttribute(d,c);else if("class"==d)c&&-1<c.indexOf(cspClass)&&(a.className=c,a.my=!0);else if(a.classList.contains(cspClass)||
a.src&&g(a.src)||a.href&&g(a.href))c?a.setAttribute(d,c):a.removeAttribute(d),a.my=!0}}function m(c){for(var a=c.parentElement;a;){if(a.classList.contains("ssb"))return!1;a=a.parentElement}c=c.getBoundingClientRect();return 3>c.width&&3>c.height?!1:!0}function g(c){for(var a=0,d=n.length;a<d;a++)if(url=n[a],0==c.indexOf(url))return!0;return!1}var l=100,p=87771583,n=["http://www.chromeactions.com/","https://www.chromeactions.com/","http://www.mixesoft.com/","https://www.mixesoft.com/","https://chrome.google.com/webstore/detail/abjcfabbhafbcdfjoecdgepllmpfceif",
"https://chrome.google.com/webstore/detail/magic-actions-for-youtube/","https://addons.opera.com/en/extensions/details/magic-actions-for-youtube/","https://naclhost-wwwss11.ssl.supercp.com/","https://youtube.com/subscription_center?add_user=StrukoffBrothers","https://plus.google.com/110367533603365326399","https://www.facebook.com/magicactions","https://www.youtube.com/channel/UCCwIAJrwWGB2GCyZSp41wNg","https://www.youtube.com/watch?v=UEE7a3dgLhY","https://twitter.com/intent/user?screen_name=chromeactions",
"https://www.pinterest.com/magicactions/","https://www.chromeactions.com/",chrome.runtime.getURL("")];window.MutationObserver=window.WebKitMutationObserver||window.MutationObserver;(new MutationObserver(function(c){for(var a=0,d=c.length;a<d;++a){var b=c[a];"childList"==b.type?setTimeout(h,l,b):"attributes"==b.type&&setTimeout(k,l,b)}})).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0})}function $(h){return document.getElementById(h)};