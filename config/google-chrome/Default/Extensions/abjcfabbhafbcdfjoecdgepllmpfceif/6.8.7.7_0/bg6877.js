// Extension for Chrome Browser - Magic Actions for YouTube™ - CHROMEACTIONS.COM - Copyright 2015 Vlad and Serge Strukoff - All Rights Reserved
chrome.runtime.onStartup.addListener(function(){});
(function(){function l(c){var e={ver:m,nv:3,uid:"",mwvc:!0,color:"yellow",mwvct:0,mwvci:2,gap:10,hq:!0,hqi:"large",pause:!1,plist:!1,buf:!1,buf1:!1,loop:!1,hide:!1,ha:!1,anns:!0,cin:!0,cina:!1,cini:2,cinf:!1,cinc:1,cins:"",pt:!1,pti:0,ww:!1,wide:!1,h0:!1,h1:!1,h2:!1,h3:!1,h4:!1,h5:!1,h6:!1,h7:!1,a0:!0,a1:!1,a2:!1,a3:!1,a4:!0,a5:!1,ui:0,c0:!1,c1:!1,c2:!1,c3:!1,c4:!1,f0:!0};a=c;if(void 0===a||null===a||"object"!==typeof a||void 0===a.ver)a={nv:3,uid:s()};for(var b in e)void 0===a[b]&&(a[b]=e[b]);for(b in a)void 0===
e[b]&&(delete a[b],chrome.storage.local.remove(b));for(b in a)typeof a[b]!==typeof e[b]&&(a[b]=e[b]);t();document.cookie&&-1<document.cookie.indexOf("s=1")?(k=parseInt(localStorage.st),u()):(document.cookie="s=1; expires=0; path=/",localStorage.st=k,u(),3==a.nv?v(1):a.ver!==m?(c=k,e=c+18144E5,a.nv=Math.floor(Math.random()*(e-c+1))+c,a.ver=m,h(),setTimeout(n,2977)):0<a.nv&&a.nv<k&&v())}function u(){chrome.runtime.onMessage.addListener(z);a.a0&&a.a3&&A();setTimeout(n,2333)}function v(c){c?(a.nv=0,h(),
p({ea:"install"}),chrome.tabs.create({url:"http://www.chromeactions.com"}),chrome.tabs.create({url:"http://www.hotcleaner.com/clickclean/install-magic.html"})):(a.nv=1,h(),p({ea:"update"}),w());setTimeout(n,2300)}function t(c){function e(b){return(Array(8).join("0")+b.toString(16)).slice(-8)}c=chrome.runtime.getURL("");var b=0,d=0,g="red LightPink orange lime GreenYellow yellow gold DodgerBlue aqua magenta DeepPink white".split(" ").indexOf(a.color),f="highres hd2880 hd2160 hd1440 hd1080 hd720 large medium small tiny".split(" ").indexOf(a.hqi),
b=b|a.cin<<30,b=b|a.cina<<29,b=b|a.cini<<26,b=b|a.cinf<<25,b=b|(63<a.cinc?63:a.cinc)<<19,b=b|a.h0<<18,b=b|a.h1<<17,b=b|a.h2<<16,b=b|a.h3<<15,b=b|a.h4<<14,b=b|a.h5<<13,b=b|a.h6<<12,b=b|a.h7<<11,b=b|a.a0<<10,b=b|a.a1<<9,b=b|a.a2<<8,b=b|a.a3<<7,b=b|a.a4<<6,b=b|a.ui<<5,b=b|a.c0<<4,b=b|a.c1<<3,b=b|a.c2<<2,b=b|a.c4<<1,b=b|a.f0,d=d|a.a5<<30,d=d|a.wide<<29,d=d|a.ww<<28,d=d|a.mwvc<<27,d=d|(0>g?4:g)<<23|a.mwvct<<22,d=d|a.mwvci<<20,d=d|a.gap<<15,d=d|a.hq<<14,d=d|(0>f?5:f)<<10,d=d|a.pause<<9,d=d|a.plist<<8,d=
d|a.buf<<7,d=d|a.buf1<<6,d=d|a.loop<<5,d=d|a.hide<<4,d=d|a.ha<<3,d=d|a.anns<<2,d=d|a.pt<<1,d=d|a.pti;c="0"+e(b)+e(d)+c+(62<a.cinc?a.cins:"");q='var e=document.createEvent("CustomEvent");e.initCustomEvent("mafy",!1,!1,"'+c+'");window.dispatchEvent(e);if(window.sessionStorage)window.sessionStorage.mafy="'+c+'"'}function h(){a.a0&&a.a4||(a.ui=0);try{chrome.storage.local.set(a)}catch(c){x(c,1)}try{localStorage.setItem("opt",JSON.stringify(a))}catch(e){x(e,1)}t(1);chrome.tabs.query({windowType:"normal",
url:"*://*.youtube.com/*",status:"complete"},function(b){for(var c=0,a=b.length;c<a;c++)chrome.tabs.executeScript(b[c].id,{code:q.replace('"0','"1')})})}function z(c,e,b){32==c&&(chrome.tabs.executeScript(e.tab.id,{code:q,runAt:"document_start"}),chrome.pageAction.show(e.tab.id));try{c=JSON.parse(c)}catch(d){return}0==c.id?b({opt:a,url:e.tab.url}):1==c.id?p(c.ga):2==c.id?chrome.tabs.create({url:c.url}):3==c.id?(a=c.opt,h()):4==c.id?(a[c.name]=c.value,h()):5==c.id?b({value:a[c.name]}):6==c.id?B(c.v):
7==c.id?w():9==c.id?b(y):11==c.id&&chrome.windows.update(e.tab.windowId,{state:c.v?"fullscreen":"maximized"});return!0}function B(c){chrome.windows.getLastFocused({populate:!1},function(a){y={w:c[0],h:c[1],pic:c[2],vid:c[3],lic:c[4],t:c[5]};chrome.tabs.query({url:"http://www.chromeactions.com/capture-snapshot-video-frames.html"},function(b){b&&b.length?chrome.tabs.update(b[0].id,{active:!0},function(){chrome.tabs.executeScript(b[0].id,{file:"cap6877.js"})}):chrome.tabs.create({active:!0,url:"http://www.chromeactions.com/capture-snapshot-video-frames.html"})})})}
function w(){function c(){chrome.tabs.get(a,function(d){"complete"==d.status?0!=d.title.indexOf("Magic")&&chrome.tabs.update(a,{url:b}):setTimeout(c,1E3)})}var a,b="opt.html?s=687"+(new Date).getDate(),d=navigator.onLine?"http://www.chromeactions.com/magic-options.html":b;chrome.tabs.query({url:d},function(b){b&&b.length?chrome.tabs.update(b[0].id,{active:!0},function(b){chrome.windows.update(b.windowId,{focused:!0})}):chrome.tabs.create({url:d,active:!0},function(b){a=b.id;setTimeout(c,3E3)})})}
function x(c,a){console.log("Magic: "+["Could't read preferences.","Could't write preferences."][a]+" "+c.name+": "+c.message)}function C(c,a){if(7840==c.menuItemId){var b="http://www.youtube.com/results?search_query="+encodeURIComponent(c.selectionText);0==a.url.indexOf("http://www.youtube.com/")?chrome.tabs.update({url:b}):chrome.tabs.create({url:b,selected:!0})}}function A(){chrome.contextMenus.create({id:"7840",title:"Search YouTube for %s",contexts:["selection"]},function(){chrome.contextMenus.onClicked.addListener(C)})}
function n(){r("GET","manifest.json",null,"responseText",function(a){if(a){try{a=JSON.parse(a)}catch(e){return}r("GET",a.update_url+"?x=id%3Dabjcfabbhafbcdfjoecdgepllmpfceif%26v%3D"+a.version+"%26uc",null,"responseXML",function(b){})}})}function p(c){var e=c.ec?c.ec:"app",b=c.ea?c.ea:"unk";c=c.el?c.el:"mafy 6.8.7.7";a.uid||(a.uid=s());r("POST","http://www.google-analytics.com/collect","v=1&tid=UA-326771-7&cid="+a.uid+"&t=event&ec="+e+"&ea="+b+"&el="+c,"response",function(){})}function r(a,e,b,d,g){var f=
new XMLHttpRequest;f.onload=function(a){200==this.status?g(this[d]):g()};f.onerror=g;f.onabort=g;f.open(a,e,!0);f.send(b)}function s(){var a=Math.random,e=(4294967296*a()>>>0).toString(16),b=((4294967296*a()&4294922239|16384)>>>0).toString(16),d=((4294967296*a()&3221225471|2147483648)>>>0).toString(16),a=(4294967296*a()>>>0).toString(16);8>e.length&&(e=("0000000"+e).slice(-8));8>b.length&&(b=("0000000"+b).slice(-8));8>d.length&&(d=("0000000"+d).slice(-8));8>a.length&&(a=("0000000"+a).slice(-8));return[e,
b.slice(0,4),b.slice(4),d.slice(0,4),d.slice(4)+a].join("-")}var m="6.8.7.7",k=Date.now(),y,a,q;chrome.storage.local.get(null,function(a){if(chrome.runtime.lastError)if(a=localStorage.getItem("opt"),void 0===a)l();else{try{a=JSON.parse(a)}catch(e){a=void 0}l(a)}else l(a)})})();