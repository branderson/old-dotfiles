/*! Copyright 2009-2015 Evernote Corporation. All rights reserved. */
function PageInfo(){"use strict";function a(){for(var a=document.getElementsByTagName("img"),b=null,c=0,d=0;d<a.length;d++){var e=window.getComputedStyle(a[d]),f=parseInt(e.width),g=parseInt(e.height),h=f*g;h>c&&(b=a[d],c=h)}return b}function b(a){for(var b=[];a;)b.unshift(a),a=a.parentNode;return b}function c(a,b){for(var c=null,d=0;d<a.length&&a[d]===b[d];d++)c=a[d];return c}function d(a){if(!a.length)return null;if(1==a.length)return a[0];for(var d=b(a[0]),e=null,f=1;f<a.length;f++){var g=b(a[f]);e=c(d,g),d=b(e)}return e}function e(b,c){var e=document.location.host;if(M[e]){var f=document.querySelector(M[e].container);if(f){var g=f.querySelectorAll(M[e].include);if(g&&g.length>0){var i=g[g.length-1].nextElementSibling;S=document.createElement("div");for(var j=0;j<g.length;j++)S.appendChild(g[j]);i.parentNode.insertBefore(S,i)}}}if(!S&&L[e])for(var j=0;j<L[e].length;j++){var k=document.querySelector(L[e][j]);if(k){S=k;break}}else-1!=N.indexOf(e)&&(S=a());if(S||_&&(S=document.querySelector(O[_].content),S&&""!=S.textContent.trim()||(S=document.createElement("div"),document.body.insertBefore(S,document.body.firstChild))),!S&&/\.(jpe?g|gif|png)$/.test(document.location.href)){var k=document.getElementsByTagName("img")[0];k&&k.parentNode===document.body&&(S=k)}if(!S&&"frameset"==document.body.nodeName.toLowerCase()){W=!0;var l=h();l&&l.contentDocument&&l.contentDocument.documentElement&&(X=l,S=l.contentDocument.documentElement)}S||b&&b._elements&&b._elements.length&&(S=b._elements[0],b._elements.length>1&&(S=d(b._elements)),S.nodeType===Node.TEXT_NODE&&(S=S.parentNode)),S||(S=document.body),Z=!0,c()}function f(){!S||S.parentNode&&S.getBoundingClientRect&&0!=S.getBoundingClientRect().width||(S=null,T=[],U=[],Z=!1),Z?document.body.innerHTML.length>1048576?(log.warn("Page over 1mb, skipping article detection."),e(null,H)):H():"function"==typeof initClearlyComponent__detect&&"function"==typeof initClearlyComponent__next?(J={callbacks:{finished:function(a){a&&a._html&&U.push(a._html),K.start(),e(a,H)}},window:window,jQuery:window.jQuery},J=initClearlyComponent__detect(J),J?(K={callbacks:{newPageFound:function(a){U.push(a._html),T.push(a._elements[0]),I&&I(a._html,a._url,U.length)}},settings:{onCreateNextPagesContainerUseThisId:"evernoteClearlyNextContainer"},detectComponentInstance:J},K=initClearlyComponent__next(K),K?(K.createNextPagesContainer(),J.start()):(log.warn("failed to initiate clearly next component"),e(null,H))):(log.warn("failed to initiate clearly detect component"),e(null,H))):(log.warn("Couldn't find clearly!"),e(null,H))}function g(a){H=a,f()}function h(){for(var a=document.getElementsByTagName("frame"),b=null,c=0,d=0;d<a.length;d++)if(a[d].width&&a[d].height){var e=a[d].width*a[d].height;e>c&&(b=a[d],c=e)}return b}function i(a,b){return I=b,g(function(){a(S),I&&I(null,null,U.length)}),S?S:void 0}function j(a,b){I=b,g(function(){a(U)})}function k(){return T}function l(){var a=m();if($=[],a)for(var b=0;b<a.rangeCount;b++){var c=a.getRangeAt(b);$[b]=c}}function m(){var a=window.getSelection();if(a&&a.rangeCount&&!a.isCollapsed)return a;for(var b=[],c=document.getElementsByTagName("iframe"),d=0;d<c.length;d++)b.push(c[d]);for(var e=document.getElementsByTagName("frame"),d=0;d<e.length;d++)b.push(e[d]);for(var f=document.location.href.replace(/^(https?:\/\/.*?)\/.*/i,"$1").toLowerCase(),d=0;d<b.length;d++)if(!b[d].src||b[d].src.toLowerCase().substr(0,f.length)===f)try{var g=b[d].contentDocument;if(g){var h=g.getSelection();if(h&&h.rangeCount&&!h.isCollapsed)return V=!0,X=b[d],h}else log.warn("iframe contained no Document object.")}catch(i){}return null}function n(){var a=window.getSelection();a.removeAllRanges();for(var b=0;b<$.length;b++)a.addRange($[b])}function o(a,b,c,d,e,f){if(a.nodeType==Node.TEXT_NODE){if(d||!_){var g,h=r(a,e);return g=f?GlobalUtils.removePunctuation(h.trim()).replace(/\s+/g," "):h.trim().replace(/\s+/g," ")," "===g||""===g?b:b+" "+g}return b}var i=["script","noscript","style"];if(a.nodeType==Node.ELEMENT_NODE&&-1==i.indexOf(a.nodeName.toLowerCase())){if(/^evernote.+Tools$/.test(a.id))return b;for(var j=0;j<a.childNodes.length;j++){if(_){if(q(a.childNodes[j]))continue;b=p(a)||d?e?o(a.childNodes[j],b,c,!0,e,f):o(a.childNodes[j],b,c,!0,a,f):o(a.childNodes[j],b,c,!1,null,f)}else b=o(a.childNodes[j],b,c,!1,null,f);if(b.length>c)return b}}return b}function p(a){var b=O[_].allowedElements;return a.webkitMatchesSelector&&a.webkitMatchesSelector(b)?!0:!1}function q(a){var b=O[_].bannedSubelements;return b&&a.webkitMatchesSelector&&a.webkitMatchesSelector(b)?!0:!1}function r(a,b){var c=a.textContent;if(_){var d;if("Baidu"==_?(d=b.parentNode.parentNode.querySelector(".g"),d&&(d=d.textContent)):"Yandex"==_||"YandexRU"==_?(d=b.parentNode.querySelector(".b-serp-item__title-link, .serp-item__title-link"),d&&(d=d.href)):d=b.href,d){var e={wikipedia:/(.*)[-|\u2013|\u2014]/,youtube:/(.*)[-|\u2013|\u2014]/,facebook:/(.*)\|/,wiktionary:/(.*)-\sWiktionary/,stumbleupon:/(.*)\|\sStumbleUpon\.com/};for(var f in e)if(new RegExp(f).test(d)){var g=e[f],h=g.exec(c);if(h)return b.setAttribute("sawdivider",!0),h[1];if(b.getAttribute("sawdivider"))return""}}if(/(\d+\slikes)|(\d+\stalking\sabout\sthis)/.test(c))return c.replace(/(\d+\slikes)|(\d+\stalking\sabout\sthis)/g," ");if(/Definition from Wiktionary, the free dictionary. Jump to: navigation, search/.test(c))return c.replace(/Definition from Wiktionary, the free dictionary. Jump to: navigation, search/g," ")}return c}function s(){var a=document.title,b=document.querySelector("meta[property='og:title'][content]");if(b&&(a=b.getAttribute("content")),_)if(O[_].titleTrim)a=O[_].titleTrim(a);else{var c=a.split(" - ");a=a.replace(" - "+c[c.length-1],"")}return a.trim()}function t(){return F()||G()||document.location.href}function u(){if(_){var a=document.querySelector(O[_].searchBox);if(a||(a=document.querySelector(O[_].searchBoxAlt)),a){var b=a.value.trim();if(b.length>0)return b}}return null}function v(a,b){var c="",d=5e3,e=m();if(!a){if(e){var f=e.getRangeAt(0).cloneContents(),g=document.createElement("div");g.appendChild(f),c=o(g,"",d,!1,null,!0)}else c=S?o(S,"",d,!1,null,!0):o(document.body,"",d,!1,null,!0);return c=s()+" "+c}i(function(a){b(o(a,"",510,!1,null,!1))})}function w(){return X}function x(a,b,c,d){var e=m(),f={containsImages:P,documentWidth:Q,documentHeight:R,url:t(),selection:null!==e||$.length>0,selectionIsInFrame:V,documentLength:document.body.textContent.length,article:null!=S,recommendationText:v(!1),query:u(),searchEngine:_,favIconUrl:Y,documentIsFrameset:W,pdf:A(),gmailThread:C(),gmail:B()};d(f)}function y(a){Browser.sendToExtension({name:"simSearch_receivePageInfo",info:a})}function z(a,b){"undefined"!=typeof SAFARI&&SAFARI&&!a.sendToTab&&$.length>0&&null==m()&&n(),g(function(c){x(c,a,b,y)})}function A(){if(document.querySelector("embed[type='application/pdf']"))return document.querySelector("embed[type='application/pdf']").src;if(/^https?:\/\/docs\.google\.com\/viewer\?url=.+/.test(document.location.href)){for(var a=0;a<document.scripts.length;a++)if(/gviewApp\.setFileData/.test(document.scripts[a].innerText)){if(/mimeType.+application\/pdf/.test(document.scripts[a].innerText)){var b=/^https?:\/\/docs\.google\.com\/viewer\?url=(.+?)(?:$|&)/.exec(document.location.href);return decodeURIComponent(b[1])}break}}else if(G())return G();return null}function B(){return/^https:\/\/mail\.google\.com\/mail\//.test(document.location.href)?!0:!1}function C(){if(B()){var a=document.querySelectorAll("span > div > span > [src='images/cleardot.gif']");if(a.length>0)return!0}return!1}function D(a){Y=a.favIconUrl}function E(a){i(function(b){var c;c=b?b.querySelectorAll("img"):document.querySelectorAll("img");for(var d,e=0,f=0,g=0;g<c.length;g++){var h=c.item(g).width,i=c.item(g).height;h*i>f*e&&(e=i,f=h,d=c.item(g).src)}a({src:d,width:f,height:e})})}function F(){if(!B()){var a=document.querySelector("link[rel='canonical']");if(a)return a.href}return null}function G(){var a=/^chrome-extension:\/\/(?:encfpfilknmenlmjemepncnlbbjlabkc|oemmndcbldboiebfnladdacbdfmadadm)\/(.+)/.exec(document.location.href);return a?a[1]:null}var H,I,J,K,L={"penny-arcade.com":["div.contentArea > div.comic > img"],"aspicyperspective.com":["div.entry-content"],"thewirecutter.com":["div#content"],"katespade.com":["div#pdpMain"],"threadless.com":["section.product_section"],"yelp.com":["div#bizBox"],"flickr.com":["div#photo"],"instagr.am":["div.stage > div.stage-inner"],"stackoverflow.com":["div#mainbar"],"makeprojects.com":["div#guideMain"],"cookpad.com":["div#main #recipe"],"imgur.com":["div.image"],"smittenkitchen.com":["div.entry"],"allrecipes.com":["div#content-wrapper"],"qwantz.com":["img.comic"],"questionablecontent.net":["img#strip"],"cad-comic.com":["div#content"],"twitter.com":[".permalink","div.content-main"],"blog.evernote.com":[".post"]},M={"blog.evernote.com":{container:"#page-wrap > section > article",include:"h2, .p-meta, .post-meta, .thumbnail, .art-content"},"kirei.biglobe.ne.jp":{container:"div#main",include:".recipeTitle, .recipeMain, #howTo"},"nomnompaleo.com":{container:"section article.text",include:"header, section"},"foodnetwork.com":{container:"#fn-w",include:".rcp-head, .tabnav, #recipe-lead, .w-inner, .body-text"}},N=["xkcd.com"],O={Baidu:{regex:/^https?:\/\/([^.\/]+\.)?baidu\.(com|cn)/i,content:"#container",searchBox:"input[name=wd]",allowedElements:"h3.t a[data-click], .f font[size='-1']",bannedSubelements:"span.g, .m, .c",titleTrim:function(a){var b=/(.+)_\u767E\u5EA6\u641C\u7D22/;return b.test(a)?b.exec(a)[1]:a}},Bing:{regex:/^https?:\/\/([^.\/]+\.)?bing\.com\/search/i,content:"#results_container, #b_results",searchBox:"input[name=q]",allowedElements:"div.sb_tlst a, div.sa_mc p, .b_algo h2 a, .b_algo .b_caption p"},Daum:{regex:/^https?:\/\/search\.daum\.net\/search/i,content:"#mArticle .inner_article",searchBox:"input[name=q]",allowedElements:".coll_cont ul .wrap_tit a, .coll_cont ul .f_eb.desc",titleTrim:function(a){var b=/(.+)\s\u2013/;return b.test(a)?b.exec(a)[1]:a}},Google:{regex:GlobalUtils.buildGoogleRegEx(),content:"#rso",searchBox:"input[name=q][type=hidden]",searchBoxAlt:"input[name=q]",allowedElements:"a.l, span.st",bannedSubelements:"span.f"},Naver:{regex:/^https?:\/\/search\.naver\.com\/search\.naver/i,content:"#content",searchBox:"input[name=query]",allowedElements:".type01 dt a, .type01 dd:not(.txt_inline):not(.txt_block):not(.review):not([style*='display:none'])",titleTrim:function(a){var b=/(.+)\s\u003A/;return b.test(a)?b.exec(a)[1]:a}},Yahoo:{regex:/^https?:\/\/([^.\/]+\.)*yahoo\.com\/s(earch|\?)/i,content:"#main",searchBox:"input[name=p]",allowedElements:".yschttl.spt[id], .abstr"},YahooCN:{regex:/^https?:\/\/([^.\/]+\.)*yahoo\.cn\/s(earch|\?)/i,content:".content",searchBox:"input[name=q]",allowedElements:"h3.title a, .desc",titleTrim:function(a){var b=/(.+)_\u7F51\u9875\u641C\u7D22/;return b.test(a)?b.exec(a)[1]:a}},YahooJP:{regex:/^https?:\/\/([^.\/]+\.)*yahoo\.co\.jp\/s(earch|\?)/i,content:"#WS2m ul",searchBox:"input[name=p]",allowedElements:"#WS2m .hd h3 a, #WS2m .bd p",bannedSubelements:"#WS2m .bd p.dlink",titleTrim:function(a){var b=/\u300C(.+)\u300D/;return b.test(a)?b.exec(a)[1]:a}},Yandex:{regex:/^https?:\/\/([^.\/]+\.)?yandex\.(com|ru)\/yandsearch/,content:".serp-list",searchBox:"input[name=text]",allowedElements:".serp-item__title-link, .serp-item__text",bannedSubelements:".serp-item__date",titleTrim:function(a){var b=/(.+)\s+\u2014/;return b.test(a)?b.exec(a)[1]:a}}},P=Boolean(document.getElementsByTagName("img").length>0),Q=document.width,R=document.height,S=(document.body.textContent.length,null),T=[],U=[],V=!1,W=!1,X=null,Y=null,Z=!1,$=[],_=null;for(var aa in O)if(O[aa].regex.test(document.location.href)){_=aa;break}Browser.addMessageHandlers({getInfo:z,setFavIconUrl:D}),"undefined"!=typeof SAFARI&&SAFARI&&(window.addEventListener("mouseup",l),Browser.addKeyboardHandlers({"65 + 91":l})),this.getBiggestImage=E,this.getDefaultArticle=i,this.getCanonicalUrl=F,this.getCleanArticle=j,this.getAdditionalPages=k,this.getSelection=m,this.getSelectionFrame=w,this.getPdfUrl=A,this.getRecommendationText=v,this.getSearchQuery=u,this.getTitle=s,this.getUrl=t,this.isGmail=B,this.isGmailThread=C,this.getRealUrlFromOperaPdfViewerUrl=G,this.__defineGetter__("documentIsFrameset",function(){return W}),this.__defineGetter__("favIconUrl",function(){return Y}),Object.preventExtensions(this)}Object.preventExtensions(PageInfo);