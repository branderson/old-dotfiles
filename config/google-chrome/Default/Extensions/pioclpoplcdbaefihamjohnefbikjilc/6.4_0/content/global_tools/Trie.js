/*! Copyright 2009-2015 Evernote Corporation. All rights reserved. */
function Trie(){"use strict";function a(a,b){if(a){a=a.toLowerCase();for(var c=d,e=0;e<a.length;e++)c[a[e]]||(c[a[e]]={}),c=c[a[e]];c.name=a,c.value||(c.value=[]),c.value.push(b)}}function b(a,c){if(c&&f>=c)return!1;a.name&&a.value&&(e.push([a.name,a.value]),f+=a.value.length);for(var d in a)if("name"!==d&&"value"!==d&&!b(a[d],c))return!1;return!0}function c(a,c){if(e=[],f=0,!a)return e;a=a.toLowerCase();for(var g=d,h=0;h<a.length;h++){if(!g[a[h]])return e;g=g[a[h]]}return b(g,c),e}var d={},e=[],f=0;this.insert=a,this.getMatching=c,Object.preventExtensions(this)}Object.preventExtensions(Trie);