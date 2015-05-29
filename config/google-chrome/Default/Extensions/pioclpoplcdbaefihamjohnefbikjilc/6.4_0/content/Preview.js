/*! Copyright 2009-2015 Evernote Corporation. All rights reserved. */
function ContentPreview(){"use strict";function a(){var a=document.createElement("div");return a.id="evernotePreviewContainer",a.className="evernotePreviewContainer evernotePreviewUrlContainer",a}function b(){ja.parentNode||document.documentElement.appendChild(ja);var a=window.getComputedStyle(ja,""),b=parseInt(a.getPropertyValue("width")),c=parseInt(a.getPropertyValue("height"));b&&c&&(ja.style.marginLeft=0-b/2+"px",ja.style.marginTop=0-c/2+"px")}function c(){ja.parentNode&&ja.parentNode.removeChild(ja)}function d(a,b,c,d,e){var f,g,h={"http://localhost/favicon.ico":!0},i=GlobalUtils.createTitleAndLinkPortionOfUrlClipContent(a,b),j=i.content,k=i.textPortion,l=i.link,m=i.url,n=document.createElement("div"),o=document.createElement("img"),p=document.createElement("img"),q=document.createElement("div");if(""!=d.trim()&&(q.textContent=d.length<500?d:d.slice(0,500)+"...",q.style.fontFamily="Helvetica, Arial, sans-serif",q.style.fontSize="12px",q.style.color="#0C0C0C",q.style.display="block",q.style.whiteSpace="normal",q.style.marginTop="15px",q.style.maxHeight="154px",q.style.overflow="hidden",k.appendChild(q)),pageInfo.getBiggestImage(function(a){f=!0,a.src&&(n.style.position="relative",n.style.display="inline-block",n.style.width="150px",n.style.height="150px",n.style.margin="15px 30px 0px 0px",n.style.overflow="hidden",a.height>150||a.width>150?(o.setAttribute("thumbnail",a.src),da=o,Browser.sendToExtension({name:"cropImage",height:a.height,url:a.src,width:a.width}),o.style.maxWidth="none",o.style.maxHeight="none"):o.src=a.src,o.width=Math.min(150,a.width),o.height=Math.min(150,a.height),n.appendChild(o),k.parentNode?j.insertBefore(n,k):j.appendChild(n)),g&&e(j)}),c&&!h[c.toLowerCase()])p.onload=function(){g=!0,p.style.display="inline-block",p.style.border="none",p.style.width="16px",p.style.height="16px",p.style.padding="0px",p.style.margin="0px 8px -2px 0px",p.width="16",p.height="16",l.insertBefore(p,m),f&&e(j)},p.onerror=function(){g=!0,f&&e(j)},p.src=c;else if(g=!0,f)return j}function e(a){da&&(da.src=a.datauri,da.removeAttribute("thumbnail"))}function f(){function a(a){ja.innerHTML="",ja.appendChild(a),b()}Z=!1;var c=pageInfo.getUrl(),e=pageInfo.favIconUrl;g(),$.gray(),pageInfo.getRecommendationText(!0,function(f){var g=d(pageInfo.getTitle(),c,e,f,a);g&&(ja.innerHTML="",ja.appendChild(g),b())})}function g(){$.reset(),$.hide(),_.reset(),_.removeVeil(),c(),J(),q(),k()}function h(){ga=null,ha=null,ia=null}function i(){ca&&ca.highlight__deleteAllHighlights()}function j(a){a?(ba.iframe.contentWindow.clearlyHighlight||(ba.iframe.contentWindow.clearlyHighlight={settings:{imgPath:Browser.extension.getURL("clearly/images/")},window:ba.iframe.contentWindow,jQuery:window.jQuery},ba.iframe.contentWindow.clearlyHighlight=initClearlyComponent__highlight(ba.iframe.contentWindow.clearlyHighlight),ba.iframe.contentWindow.clearlyHighlight.insertCSS(),ba.iframe.contentWindow.clearlyHighlight.addMouseHandlers()),ba.iframe.contentWindow.clearlyHighlight.enable()):(ca||(ca={settings:{imgPath:Browser.extension.getURL("clearly/images/")},window:window,jQuery:window.jQuery},ca=initClearlyComponent__highlight(ca),ca.insertCSS(),ca.addMouseHandlers()),ca.enable())}function k(){ca&&ca.disable(),ba&&ba.iframe.contentWindow.clearlyHighlight&&ba.iframe.contentWindow.clearlyHighlight.disable()}function l(){if(ea){var a;if(void 0!==typeof pageInfo&&(a=pageInfo.getSelectionFrame()),a){var b={width:a.width,height:a.height,top:a.offsetTop,bottom:a.height+a.offsetTop,left:a.offsetLeft,right:a.width+a.offsetLeft};$.revealStaticRect($.expandRect(b,-9),a,!0),$.show()}else $.outlineElement(ea,!0,!0);j()}else log.warn("Couldn't find a preview element. We should switch to 'full page' mode.")}function m(){Z=!0,window.focus(),g(),ea||void 0===typeof pageInfo?ea?(l(),fa>1&&$.setPageCount(fa-1)):log.warn("Couldn't find a 'pageInfo' object."):pageInfo.getDefaultArticle(function(a){ea=a,l()},function(a,b,c){fa=c,c>1&&$.setPageCount(c-1)})}function n(){Z=!1,window.focus(),g(),ba?o():p()}function o(){document.body.classList.add("clearlyBeforeVisible"),document.documentElement.classList.add("clearlyBeforeVisible"),ba.iframe.classList.add("evernoteClipperVisible"),j(!0)}function p(){ba={callbacks:{frameCreated:function(){ba.applyUnencodedOptions(ba.defaultThemes.newsprint),ba.loadGoogleFontsRequiredByAppliedOptions(),ba.iframe.addEventListener("webkitTransitionEnd",function(a){"width"===a.propertyName&&(this.classList.contains("evernoteClipperVisible")?(document.body.classList.add("clearlyVisible"),document.documentElement.classList.add("clearlyVisible"),ba.iframe.contentDocument.body.classList.add("clearlyWaiting"),0==ba.pagesCount?pageInfo.getCleanArticle(function(a){if(a&&a.length>0)for(var b=0;b<a.length;b++)ba.addNewPage(a[b],window.location.href),0===b&&ba.iframe.contentDocument.body.classList.add("clearlyReady");else pageInfo.getDefaultArticle(function(a){a&&ba.addNewPage(a.outerHTML,window.location.href),ba.iframe.contentDocument.body.classList.add("clearlyReady")})},function(a,b){ba.addNewPage(a,b)}):ba.iframe.contentDocument.body.classList.add("clearlyReady")):(document.body.classList.remove("clearlyVisible","clearlyBeforeVisible"),document.documentElement.classList.remove("clearlyVisible","clearlyBeforeVisible")))});var a=ba.iframe.contentDocument.createElement("link");a.rel="stylesheet",a.href=Browser.extension.getURL("clearly/css/additional.css"),ba.iframe.contentDocument.body.appendChild(a),ba.iframe.contentWindow.loading=ba.iframe.contentDocument.createElement("div"),ba.iframe.contentWindow.loading.id="loading",ba.iframe.contentDocument.body.appendChild(ba.iframe.contentWindow.loading),o()}},settings:{cssPath:Browser.extension.getURL("clearly/css/"),pageLabel:function(a){return Browser.i18n.getMessage("page",[a])},onCreateFrameUseThisId:"evernoteClearlyArticle",onCreateFrameDoNotInsertCSS:!0},window:window,jQuery:window.jQuery},ba=initClearlyComponent__reformat(ba),ba.createFrame()}function q(){ba&&ba.iframe&&(ba.iframe.contentDocument.body.classList.remove("clearlyWaiting","clearlyReady"),ba.iframe.classList.remove("evernoteClipperVisible"))}function r(){return ba}function s(a,b){if(!a)return log.warn("Can't determine if 'null' is interesting (it's probably not)."),!1;if(a===window.document)return!1;if(""==a.textContent.trim()&&0===a.getElementsByTagName("img").length)return!1;var c=a.getBoundingClientRect();if(!c.width||!c.height)return!1;var d=getComputedStyle(a);return"hidden"===d.visibility||"none"===d.display?!1:a.parentNode&&b.parentNode&&(a.parentNode==b||b.parentNode==a)&&t(a,b)?!1:!0}function t(a,b){var c=a.getBoundingClientRect(),d=b.getBoundingClientRect();return c.bottom==d.bottom&&c.height==d.height&&c.left==d.left&&c.right==d.right&&c.top==d.top&&c.width==d.width?!1:a.textContent===b.textContent&&a.getElementsByTagName("img").length===b.getElementsByTagName("img").length?!1:void 0}function u(a){for(var b=0;b<a.children.length;b++){if(t(a.children[b],a))return u(a.children[b]);if(s(a.children[b],a))return a.children[b]}return a}function v(){return ea}function w(a){function b(){var a=ja.querySelector("[thumbnail]");a&&a.parentNode.parentNode.removeChild(a.parentNode);for(var b="",c=ja.innerHTML.split(/(?=<img.[^>]+>)/),d=0;d<c.length;d++)b+=/^<img/.test(c[d])?c[d].replace(/>/,"></img>"):c[d];return b}return ja.innerHTML?b():void pageInfo.getRecommendationText(!0,function(c){var e=d(pageInfo.getTitle(),pageInfo.getUrl(),pageInfo.favIconUrl,c,function(c){c&&(ja.innerHTML="",ja.appendChild(c),a(b()))});e&&(ja.innerHTML="",ja.appendChild(e),a(b()))})}function x(){for(var a=ea.parentNode;a;){if(s(a,ea)){a.enNudgeDescendToNode=ea,ea=a;break}a=a.parentNode}}function y(){if(ea.enNudgeDescendToNode){var a=ea.enNudgeDescendToNode;delete ea.enNudgeDescendToNode,ea=a}else ea=u(ea)}function z(){if(Z){var a=ea;x(),a!==ea&&$.outlineElement(ea,!1,!0,!0)}}function A(){if(Z){var a=ea;y(),a!==ea&&$.outlineElement(ea,!1,!0,!0)}}function B(){if(Z)for(var a=ea.previousElementSibling;a;){if(s(a,ea)){ea=a,$.outlineElement(ea,!1,!0,!0);break}a=a.previousElementSibling}}function C(){if(Z)for(var a=ea.nextElementSibling;a;){if(s(a,ea)){ea=a,$.outlineElement(ea,!1,!0,!0);break}a=a.nextElementSibling}}function D(){Z=!1;var a=4,b=document.body.scrollWidth,c=document.body.scrollHeight,d={bottom:c-a,top:a,left:a,right:b-a,width:b-2*a,height:c-2*a};g(),$.revealStaticRect(d,document.body),$.show(),j()}function E(){Z=!1,g()}function F(){var a=document.createElement("div");return a.id="evernoteEmailPreview",a}function G(){g(),$.reset(),$.gray(),ka.innerHTML="";var a=document.createElement("div");a.id="evernoteEmailLoading",ka.appendChild(a),K();var b=document.createElement("div"),c=document.createElement("div");c.className="evernoteEmailHeader evernoteEmailBig",b.appendChild(c);var d=document.createElement("div");d.id="evernoteEmailParticipants",d.className="evernoteEmailHeader evernoteEmailSmall",b.appendChild(d);var e=document.createElement("div");e.className="evernoteEmailDivider evernoteEmailLight evernoteEmailLong",b.appendChild(e);var f=document.createElement("div");f.id="evernoteEmailSelectAllMessages",f.className="evernoteEmailHeader evernoteEmailMedium evernoteEmailSelectedMessage";var h=document.createElement("div");h.className="evernoteEmailCheckbox",h.addEventListener("click",function(){var a=document.querySelectorAll(".evernoteEmail");if(/evernoteEmailSelectedMessage/.test(this.parentNode.className))for(var b=0;b<a.length;b++)I(a.item(b));else for(var b=0;b<a.length;b++)H(a.item(b))}),f.appendChild(h);var i=document.createElement("span");i.innerText=Browser.i18n.getMessage("selectAllMessages"),f.appendChild(i),b.appendChild(f),aa.getThread(function(f,g){if(f){c.innerText=f.subject,d.innerText=Browser.i18n.getMessage("participants")+": "+Object.keys(f.participants).join(", ");for(var i=0;i<f.messages.length;i++){0!=i&&(e=document.createElement("div"),e.className="evernoteEmailDivider evernoteEmailDark evernoteEmailShort",b.appendChild(e));var j=document.createElement("div");j.className="evernoteEmail evernoteEmailSelectedMessage",h=document.createElement("div"),h.className="evernoteEmailCheckbox",h.addEventListener("click",function(){/evernoteEmailSelectedMessage/.test(this.parentNode.className)?I(this.parentNode):H(this.parentNode)}),j.appendChild(h);var k=document.createElement("div"),l=document.createElement("span");l.className="evernoteEmailHeader evernoteEmailMedium",l.innerText=f.messages[i].author.name,k.appendChild(l);var m=document.createElement("span");m.className="evernoteEmailDimmed evernoteEmailSmall evernoteEmailRight",m.innerText=f.messages[i].date,k.appendChild(m),j.appendChild(k);var n=document.createElement("div");if(n.className="evernoteEmailBody",n.innerHTML=f.messages[i].body,j.appendChild(n),f.messages[i].attachments.length>0){var o=document.createElement("div");o.className="evernoteEmailAttachments";for(var p=0;p<f.messages[i].attachments.length;p++){var q=document.createElement("div"),r=document.createElement("span");r.className="evernoteEmailSmall";var s=document.createElement("span");s.className="evernoteEmailDimmed evernoteEmailSmall evernoteEmailSize",r.textContent=f.messages[i].attachments[p].name,s.textContent="("+f.messages[i].attachments[p].size+")",q.setAttribute("evernote_attachment_url",f.messages[i].attachments[p].url),q.setAttribute("evernote_attachment_name",r.textContent),q.appendChild(r),q.appendChild(s),o.appendChild(q)}j.appendChild(o)}b.appendChild(j)}a.parentNode&&a.parentNode.removeChild(a),ka.appendChild(b)}else alert(g)})}function H(a){a.className+=" evernoteEmailSelectedMessage";var b=a.children[1].firstElementChild;b.className=b.className.replace(/\s*evernoteEmailDimmed/g,""),document.querySelectorAll(".evernoteEmail").length===document.querySelectorAll(".evernoteEmail.evernoteEmailSelectedMessage").length&&(document.querySelector("#evernoteEmailSelectAllMessages").className+=" evernoteEmailSelectedMessage")}function I(a){a.className=a.className.replace(/\s*evernoteEmailSelectedMessage/g,"");var b=a.children[1].firstElementChild;b.className+=" evernoteEmailDimmed";var c=document.querySelector("#evernoteEmailSelectAllMessages");c.className=c.className.replace(/\s*evernoteEmailSelectedMessage/g,"")}function J(){ka.parentNode&&ka.parentNode.removeChild(ka)}function K(){ka.parentNode||document.documentElement.appendChild(ka)}function L(){if(ka){for(var a=ka.firstElementChild,b=a.querySelectorAll(".evernoteEmailCheckbox, #evernoteEmailSelectAllMessages, .evernoteEmail:not(.evernoteEmailSelectedMessage)"),c=0;c<b.length;c++)if(b.item(c).parentNode){if(b.item(c).webkitMatchesSelector(".evernoteEmail")){var d=b.item(c).previousElementSibling;d&&/evernoteEmailDivider/.test(d.className)&&/evernoteEmailShort/.test(d.className)||(d=b.item(c).nextElementSibling),d&&d.parentNode&&/evernoteEmailDivider/.test(d.className)&&/evernoteEmailShort/.test(d.className)&&d.parentNode.removeChild(d)}if("evernoteEmailSelectAllMessages"==b.item(c).id){var e=document.createElement("a");e.id="evernoteEmailLinkBack",e.className="evernoteEmailHeader evernoteEmailMedium",e.target="_blank",e.href=document.location.href;var f=document.createElement("div");f.id="evernoteEmailLinkBackArrow",e.appendChild(f);var g=document.createElement("span");g.innerText=Browser.i18n.getMessage("openConvoInGmail"),e.appendChild(g),b.item(c).parentNode.insertBefore(e,b.item(c))}b.item(c).parentNode.removeChild(b.item(c))}var h=a.querySelector(".evernoteEmailDivider.evernoteEmailLong");return h&&(h.className=h.className.replace(/\s*evernoteEmailLong/g," evernoteEmailShort")),a}return null}function M(){for(var a="",b=["#evernoteEmailPreview .evernoteEmailHeader, #evernoteEmailPreview .evernoteEmailDimmed, #evernoteEmailPreview .evernoteEmailAttachments","#evernoteEmailPreview .evernoteEmailHeader","#evernoteEmailPreview .evernoteEmailBig","#evernoteEmailPreview .evernoteEmailMedium","#evernoteEmailPreview .evernoteEmailSmall","#evernoteEmailPreview .evernoteEmailRight","#evernoteEmailPreview .evernoteEmailDimmed","#evernoteEmailPreview .evernoteEmailDivider","#evernoteEmailPreview .evernoteEmailLight","#evernoteEmailPreview .evernoteEmailDark","#evernoteEmailPreview .evernoteEmailLong","#evernoteEmailPreview .evernoteEmailShort","#evernoteEmailParticipants","#evernoteEmailLinkBack","#evernoteEmailLinkBackArrow","#evernoteEmailPreview .evernoteEmail","#evernoteEmailPreview .evernoteEmailBody","#evernoteEmailPreview .evernoteEmailAttachments","#evernoteEmailPreview .evernoteEmailAttachments .evernoteEmailSize"],c=["font-family: Helvetica, Arial, sans-serif !important;","color: #333333 !important; font-weight: bold !important;","font-size: 15px !important;","font-size: 14px !important;","font-size: 12px !important;","float: right !important;","color: #888888 !important;","height: 1px !important;","background-color: #E9E9E9 !important;","background-color: #B3B3B3 !important;","left: -48px !important; position: relative !important; width: -webkit-calc(100% + 96px) !important;","width: 100% !important;","margin: 16px 0 29px 0 !important;","display: block; margin: 22px 0 8px 0 !important; position: relative !important; text-decoration: none !important;","background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAAr0lEQVQoU2NkwAKMjY35gcLTzp49G41NHlmMEV2BgYGBNRMT0xJGRkYFoAEY8ujqkRWwGBoa1gI1VwMVMYMUEm2Arq6uEisr62KgrVbINhBlgJGRUQxQ41SgRj5C/sUmzwh0dhzQ2ZPJNgBkKtQLS4EusSDWC8CY+g9SixKIQME6oFgVMYGIzQCw5UAJm////4OiUR5fIOI0AGoIP9CQGefOnYvEFbB4DSAmNmAGAABi7TE0OfL+0wAAAABJRU5ErkJggg==) !important;background-repeat: no-repeat !important; background-size: 16px 11px !important;display: inline-block; height: 11px !important; margin-right: 12px; width: 16px !important;","margin: 24px 0 !important; position: relative !important;","color: #222; font-family: Arial, sans-serif; font-size: 13px; margin-top: 24px !important;","padding: 20px 0 0 40px !important;","margin-left: 10px !important;"],d=0;d<b.length;d++)a+=b[d]+"{"+c[d]+"}";var e=document.createElement("style");e.innerText=a,document.head||(document.head=document.createElement("head")),document.head.appendChild(e)}function N(a,b){var c={top:Math.min(a.top,b.top),bottom:Math.max(a.bottom,b.bottom),left:Math.min(a.left,b.left),right:Math.max(a.right,b.right)};return c.width=c.right-c.left,c.height=c.bottom-c.top,c}function O(a,b){return a||b?a&&b?a.top!=b.top?!1:a.bottom!=b.bottom?!1:a.left!=b.left?!1:a.right!=b.right?!1:a.width!=b.width?!1:a.height!=b.height?!1:!0:!1:!0}function P(a){if(0!==a.endOffset||a.endContainer.nodeType!==Node.ELEMENT_NODE){var b=a.getBoundingClientRect(),c={top:b.top,bottom:b.bottom,left:b.left,right:b.right,width:b.width,height:b.height};return c}var d=null;try{d=a.endContainer.getBoundingClientRect()}catch(e){log.warn("Couldn't get a bounding client rect for our end element, maybe it's a text node.")}for(var f=!1,g=[],h=a.getClientRects(),i=0;i<h.length;i++)O(d,h[i])&&!f?f=!0:g.push(h[i]);if(0==g.length)return a.getBoundingClientRect();if(1==g.length)return g[0];for(var b=g[0],i=1;i<g.length;i++)b=N(b,g[i]);return b}function Q(a){return"rtl"==document.dir?!1:a.bottom<0&&a.top<0?!1:a.left<0&&a.right<0?!1:!0}function R(a,b){var c=b,d=a.getBoundingClientRect();if(d={bottom:d.bottom+window.scrollY,height:d.height,left:d.left+window.scrollX,right:d.right+window.scrollX,top:d.top+window.scrollY,width:d.width},!Q(d))return c;var e=getComputedStyle(a);if("none"==e.display)return c;if("hidden"==e.overflowX||"hidden"==e.overflowY)return c;if(d.width*d.height>1&&(c=N(d,b)),a.children)for(var f=0;f<a.children.length;f++)c=R(a.children[f],c);return c}function S(a){if(!a)return{top:0,bottom:0,left:0,right:0,width:0,height:0};var b=a.getBoundingClientRect();return R(a,{bottom:b.bottom+window.scrollY,height:b.height,left:b.left+window.scrollX,right:b.right+window.scrollX,top:b.top+window.scrollY,width:b.width})}function T(){var a;if(void 0!==typeof pageInfo&&!ga){a=pageInfo.getSelection(),ga=[],ha=[];for(var b=0;b<a.rangeCount;b++)ga.push(a.getRangeAt(b).cloneRange()),ha.push([ga[b].startOffset,ga[b].endOffset]);ia=pageInfo.getSelectionFrame()}if(!a){a=window.getSelection(),a.removeAllRanges();for(var c=0;c<ga.length;c++){var d=document.createRange();if((ga[c].startContainer.length||ga[c].startContainer.childNodes.length)<ha[c][0])for(var e=0,b=0;b<ga[c].startContainer.childNodes.length;b++){var f=ga[c].startContainer.childNodes[b],g=0;if(g=f.getAttribute&&f.getAttribute("clearly_highlight_id")?(f.innerText||f.textContent).length:f.length||f.childNodes.length,e+=g,e>=ha[c][0]){d.setStart(f,ha[c][0]-(e-g));break}}else d.setStart(ga[c].startContainer,ha[c][0]);if((ga[c].endContainer.length||ga[c].endContainer.childNodes.length)<ha[c][1])for(var e=0,b=0;b<ga[c].endContainer.childNodes.length;b++){var f=ga[c].endContainer.childNodes[b],g=0;if(g=f.getAttribute&&f.getAttribute("clearly_highlight_id")?(f.innerText||f.textContent).length:f.length||f.childNodes.length,e+=g,e>=ha[c][1]){d.setEnd(f,ha[c][1]-(e-g));break}}else d.setEnd(ga[c].endContainer,ha[c][1]);a.addRange(d)}}return a}function U(){Z=!1;var a=T();$.reset();var b=null;ia&&(b=ia.getBoundingClientRect());var c,d,e;if(a)for(g(),$.reset(),e=0;e<a.rangeCount;e++)c=a.getRangeAt(e),d=P(c),d.top+=document.body.scrollTop,d.bottom+=document.body.scrollTop,d.left+=document.body.scrollLeft,d.right+=document.body.scrollLeft,b&&(d.left+=b.left,d.right+=b.left,d.top+=b.top,d.bottom+=b.top),$.revealStaticRect(d,ia,!1),$.show();$.show()}function V(a,b){var c=parseFloat($.getElement().style.borderTopWidth),d=parseFloat($.getElement().style.borderRightWidth),e=parseFloat($.getElement().style.borderBottomWidth),f=parseFloat($.getElement().style.borderLeftWidth),g=parseFloat($.getElement().style.width),h=parseFloat($.getElement().style.height);return g-d>a&&a>f&&b>c&&h-e>b?!1:!0}function W(a){g(),$.reset(),$.gray(a)}function X(){W("transparent"),_.reset(),_.showVeil(),_.setColor("rgba(0, 0, 0, 0.27)"),_.enableCrosshair()}function Y(){document.body.style.overflowY="",document.body.style.overflowX="",g()}var Z=!1,$=new ContentVeil,_=new Veil,aa=new GmailClipper,ba=null,ca=null;SAFARI&&pageInfo.isGmail()&&M();var da,ea=null,fa=0,ga=null,ha=null,ia=null,ja=a(),ka=F();Browser.addMessageHandlers({clearPreview:g,previewArticle:m,previewClearly:n,previewEmail:G,previewFullPage:D,previewPdf:E,previewSelection:U,previewSkitch:X,previewUrl:f,receiveCroppedImage:e,receiveScreenshot:Y}),this.clear=g,this.clearHighlights=i,this.getArticleElement=v,this.getUrlElement=w,this.getClearlyReformat=r,this.looksInteresting=s,this.computeDescendantBoundingBox=S,this.getEmailElement=L,this.ensureSelectionIsShown=T,this.expandPreview=z,this.contractPreview=A,this.moveToElementAbove=B,this.moveToElementBelow=C,this.isPointOnVeil=V,this.reset=h,this.gray=W,Object.preventExtensions(this)}