/*! Copyright 2009-2015 Evernote Corporation. All rights reserved. */
function init(){"use strict";function a(){var a=!1,b=document.querySelector("embed");if(b&&/application\/pdf/i.test(b.type))a=!0;else if(/^https?:\/\/docs\.google\.com\/viewer\?url=.+/.test(document.location.href))for(var c=0;c<document.scripts.length;c++)if(/gviewApp\.setFileData/.test(document.scripts[c].innerText)){/mimeType.+application\/pdf/.test(document.scripts[c].innerText)&&(a=!0);break}Browser.sendToExtension({name:"togglePDFContextMenuOption",show:a})}function b(){j||(j=!0,SAFARI||a(),pageInfo=new PageInfo,contentPreview=new ContentPreview,clipper=new Clipper,clipResultCoordinator=new ClipResultCoordinator,feedbackFormCoordinator=new FeedbackFormCoordinator,coordinator=new Coordinator,checkSimSearch())}function c(){document.head||(Browser.sendToExtension({name:"insertCSS",filename:"content/clip_result/iframe.css"}),Browser.sendToExtension({name:"insertCSS",filename:"css/contentpreview.css"}))}function d(a){a.data&&Browser.i18n._setL10nData(a.data),h=!0,e()}function e(){h&&g&&i&&b()}var f,g=!1,h=!1,i="undefined"==typeof document.hidden?!0:!document.hidden,j=!1;if(SAFARI){if(window&&window!=window.parent)return;Browser.sendToExtension({name:"main_getL10n"})}else h=!0,e();Browser.addMessageHandlers({l10nData:d});var k=function(){g||(g=!0,clearInterval(f),c(),e())};"interactive"==document.readyState||"complete"==document.readyState?k():(window.addEventListener("DOMContentLoaded",k),document.addEventListener("readystatechange",function(){("interactive"==document.readyState||"complete"==document.readyState)&&k()}),f=setInterval(function(){("interactive"==document.readyState||"complete"==document.readyState)&&k()},100),window.addEventListener("focus",function(){a()})),document.addEventListener("visibilitychange",function(){i=!document.hidden||i,e()})}var contentPreview,pageInfo,clipper,clipResultCoordinator,feedbackFormCoordinator,coordinator;Browser.runIfInTopFrame(init);