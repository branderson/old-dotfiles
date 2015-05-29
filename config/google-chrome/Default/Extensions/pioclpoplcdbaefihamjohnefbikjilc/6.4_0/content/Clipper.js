/*! Copyright 2009-2015 Evernote Corporation. All rights reserved. */
function Clipper(){function a(a,b,c){function d(e){k+=e,h<g.length?j(g[h++],null,a,d,null,c):b(k)}function e(b){f=b,i(f),j(f,null,a,d,null,c)}var f,g=pageInfo.getAdditionalPages(),h=0,k="";try{if(f=contentPreview.getArticleElement())return i(f),void j(f,null,a,d,null,c)}catch(l){log.warn("Couldn't get preview from contentPreview. Trying pageInfo.")}try{return void pageInfo.getDefaultArticle(e)}catch(l){log.warn("Couldn't get article from pageInfo. Trying default.")}f=document.body,i(f),j(f,null,a,d,null,c)}function b(a,b,c){i(document.body),j(document.body,null,a,b,null,c)}function c(a){a('<embed src="'+GlobalUtils.escapeXML(pageInfo.getPdfUrl())+'" type="application/pdf"></embed>')}function d(a,b){var c=contentPreview.getEmailElement();i(c),j(c,null,!0,a,null,b)}function e(a,b,c,d){if(b&&document.querySelector("embed[type='application/pdf']"))return void c(b);var e,f;try{if(e=contentPreview.ensureSelectionIsShown(),e&&(f=e.getRangeAt(0))){if(f.commonAncestorContainer.nodeType==Node.TEXT_NODE){var g=f.commonAncestorContainer.textContent.substring(f.startOffset,f.endOffset);c(k(g))}else i(f.commonAncestorContainer),j(f.commonAncestorContainer,f,a,c,null,d);return}}catch(h){c("")}}function f(a,b){var c=document.querySelector("img[src='"+a+"'], img[src$='"+a.replace(document.body.baseURI,"")+"']"),d=p.convertImgSrcToBase64IfPossible(c,a,!0);d===a&&(d=GlobalUtils.escapeXML(d)),b('<img src="'+d+'"></img>')}function g(a){var b=contentPreview.getUrlElement(function(b){a(b)});b&&a(b)}function h(a,b){for(var c=contentPreview.getClearlyReformat(),d=c.$iframePages[0].getElementsByTagName("span"),e=0;e<d.length;e++)d.item(e).parentNode.removeChild(d.item(e));i(c.$iframePages[0]),j(c.$iframePages[0],null,!1,a,c.iframe.contentWindow,b)}function i(a){for(var b=a.querySelectorAll("a.clearly_highlight_delete_element"),c=0;c<b.length;c++)b.item(c).parentNode.removeChild(b.item(c));for(var d=a.querySelectorAll("em.clearly_highlight_element"),c=0;c<d.length;c++)d.item(c).outerHTML="<highlight>"+d.item(c).innerHTML+"</highlight>"}function j(a,b,c,d,e,f){function g(a,b){b?f(b):o(a)}function h(a){p.serialize(l,m,n,g,a)}if(l=a,m=b,n=c,o=d,e)p.serialize(l,m,n,g,null,e);else try{serializeFrames(h)}catch(i){f(i)}}function k(a){return a=a.replace(/&/g,"&amp;"),a=a.replace(/</g,"&lt;"),a=a.replace(/>/g,"&gt;")}var l,m,n,o,p=new HtmlSerializer;this.clipArticle=a,this.clipEmail=d,this.clipImage=f,this.clipFullPage=b,this.clipPdf=c,this.clipSelection=e,this.clipUrl=g,this.clipClearly=h,Object.preventExtensions(this)}Object.preventExtensions(Clipper);