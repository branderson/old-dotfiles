/*! Copyright 2009-2015 Evernote Corporation. All rights reserved. */
function Veil(){"use strict";function a(a){if(a.srcElement!==document.documentElement&&k&&k.style&&(k.style.top=a.clientY+"px",k.style.left=a.clientX+"px",m)){var b,c,d,e;b=Math.min(a.clientX,m.x),c=Math.min(a.clientY,m.y),d=Math.max(a.clientX,m.x),e=Math.max(a.clientY,m.y),n.style.borderTopWidth=c+"px",n.style.borderRightWidth=window.innerWidth-d+"px",n.style.borderBottomWidth=window.innerHeight-e+"px",n.style.borderLeftWidth=b+"px"}}function b(a){a.srcElement!==document.documentElement&&1===a.which&&(document.body.style.overflowY="hidden",document.body.style.overflowX="hidden",m={x:a.clientX,y:a.clientY},l&&l.parentNode&&l.parentNode.removeChild(l),Browser.sendToExtension({name:"bounce",message:{name:"goToSkitchWaitingMode"}}),n.style.borderTopWidth=m.y+"px",n.style.borderRightWidth=window.innerWidth-m.x+"px",n.style.borderBottomWidth=window.innerHeight-m.y+"px",n.style.borderLeftWidth=m.x+"px")}function c(a){if(a.srcElement!==document.documentElement&&1===a.which){var b={x:Math.min(a.clientX,m.x),y:Math.min(a.clientY,m.y)},c={x:Math.max(a.clientX,m.x),y:Math.max(a.clientY,m.y)};a.clientX===c.x?(c.x--,b.x++):(b.x++,c.x--),a.clientY===c.y?(c.y--,b.y++):(b.y++,c.y--),c.x-b.x+1<16&&c.y-b.y+1<16?setTimeout(function(){new Audio(Browser.extension.getURL("skitch/sounds/snap.wav")).play(),Browser.sendToExtension({name:"captureScreenshot"})},500):(new Audio(Browser.extension.getURL("skitch/sounds/snap.wav")).play(),Browser.sendToExtension({name:"captureScreenshot",start:b,end:c,screenshotHeight:window.innerHeight})),h(),g()}}function d(){e(),k||(k=document.createElement("div"),k.id="evernoteClipperCrosshair"),l||(l=document.createElement("iframe"),l.id="evernoteClipperCrosshairToast",l.src=Browser.extension.getURL("content/tooltips/screenshot_toast.html")),document.documentElement.appendChild(k),document.documentElement.appendChild(l),setTimeout(function(){l&&l.parentNode&&Browser.sendToExtension({name:"getPersistentValue",key:"sawScreenshotToast"})},3e3),window.addEventListener("mousemove",a),window.addEventListener("mousedown",b),window.addEventListener("mouseup",c)}function e(){k&&k.parentNode&&k.parentNode.removeChild(k),l&&l.parentNode&&l.parentNode.removeChild(l),window.removeEventListener("mousemove",a),window.removeEventListener("mousedown",b),window.removeEventListener("mouseup",c),m=null}function f(a){function b(a){"opacity"===a.propertyName&&l&&l.parentNode&&(l.removeEventListener("webkitTransitionEnd",b),l.classList.remove("evernoteClipperHidden"),l.parentNode.removeChild(l))}"sawScreenshotToast"===a.key&&(a.value&&a.value[a.currentUserId]?l&&l.parentNode&&(l.addEventListener("webkitTransitionEnd",b),l.classList.add("evernoteClipperHidden")):(a.value||(a.value={}),a.value[a.currentUserId]=!0,Browser.sendToExtension({name:"setPersistentValue",key:"sawScreenshotToast",value:a.value})))}function g(){n&&n.parentNode&&n.parentNode.removeChild(n)}function h(){e(),n.style.borderTopWidth="0",n.style.borderRightWidth="0",n.style.borderBottomWidth=window.innerHeight+"px",n.style.borderLeftWidth="0"}function i(a){n.style.borderColor=a}function j(){document.documentElement.appendChild(n)}var k,l,m=null,n=document.createElement("div");n.style.width="100%",n.style.height="100%",n.style.boxSizing="border-box",n.style.top="0",n.style.left="0",n.style.position="fixed",n.style.borderStyle="solid",n.style.borderWidth="0",n.style.zIndex="2147483646",Browser.addMessageHandlers({receivePersistentValue:f}),this.enableCrosshair=d,this.disableCrosshair=e,this.removeVeil=g,this.reset=h,this.setColor=i,this.showVeil=j,Object.preventExtensions(this)}Object.preventExtensions(ContentVeil);