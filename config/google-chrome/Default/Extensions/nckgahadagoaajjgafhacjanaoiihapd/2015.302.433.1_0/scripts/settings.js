"use strict";this.default_settings=this.default_settings||{};(function(_){var window=this;
try{
_.aa=_.aa||{};_.k=this;_.ba="closure_uid_"+(1E9*Math.random()>>>0);_.m=Date.now||function(){return+new Date};
}catch(e){_._DumpException(e)}
try{
var ca,da,ea;_.n=function(a){return void 0!==a};ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};da=function(a,b,c){return a.call.apply(a.bind,arguments)};
ea=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};_.p=function(a,b){function c(){}c.prototype=b.prototype;a.t=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.wd=function(a,c,f){for(var g=Array(arguments.length-2),l=2;l<arguments.length;l++)g[l-2]=arguments[l];return b.prototype[c].apply(a,g)}};
_.ga=function(a,b){var c=a.split("."),d=_.k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&_.n(b)?d[e]=b:d[e]?d=d[e]:d=d[e]={}};_.ha=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};_.q=function(a,b,c){_.q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ca;return _.q.apply(null,arguments)};
_.ia=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};_.ja=function(a){return"function"==ea(a)};_.ka=function(a){return"number"==typeof a};_.t=function(a){return"string"==typeof a};_.la=function(a){var b=ea(a);return"array"==b||"object"==b&&"number"==typeof a.length};_.ma=function(a){return"array"==ea(a)};_.oa=function(){};_.qa=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,_.qa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}; _.p(_.qa,Error);_.qa.prototype.name="CustomError";
var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ta=function(a,b){for(var c=0,d=ra(String(a)).split("."),e=ra(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var l=d[g]||"",r=e[g]||"",C=RegExp("(\\d*)(\\D*)","g"),N=RegExp("(\\d*)(\\D*)","g");do{var fa=C.exec(l)||["","",""],Q=N.exec(r)||["","",""];if(0==fa[0].length&&0==Q[0].length)break;c=sa(0==fa[1].length?0:(0,window.parseInt)(fa[1],10),0==Q[1].length?0:(0,window.parseInt)(Q[1], 10))||sa(0==fa[2].length,0==Q[2].length)||sa(fa[2],Q[2])}while(0==c)}return c},sa=function(a,b){return a<b?-1:a>b?1:0};
_.u=Array.prototype;_.ua=_.u.indexOf?function(a,b,c){return _.u.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(_.t(a))return _.t(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
_.va=_.u.lastIndexOf?function(a,b,c){return _.u.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;0>c&&(c=Math.max(0,a.length+c));if(_.t(a))return _.t(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};_.v=_.u.forEach?function(a,b,c){_.u.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=_.t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
_.wa=_.u.filter?function(a,b,c){return _.u.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=_.t(a)?a.split(""):a,l=0;l<d;l++)if(l in g){var r=g[l];b.call(c,r,l,a)&&(e[f++]=r)}return e};_.xa=_.u.map?function(a,b,c){return _.u.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=_.t(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};
_.ya=_.u.reduce?function(a,b,c,d){d&&(b=(0,_.q)(b,d));return _.u.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;(0,_.v)(a,function(c,g){e=b.call(d,e,c,g,a)});return e};_.za=_.u.some?function(a,b,c){return _.u.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=_.t(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};_.Aa=function(a,b){var c=(0,_.ua)(a,b),d;(d=0<=c)&&_.u.splice.call(a,c,1);return d};
_.Ba=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;var Da,Fa;_.Ca=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};Da=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};_.Ea=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};Fa=function(a){var b=arguments.length;if(1==b&&_.ma(arguments[0]))return Fa.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};
var Ha;_.w=function(){};_.x=function(a,b,c,d){a.a=null;b||(b=c?[c]:[]);a.p=c?String(c):void 0;a.c=0===c?-1:0;a.F=b;a:{if(a.F.length&&(b=a.F.length-1,(c=a.F[b])&&"object"==typeof c&&!_.ma(c))){a.j=b-a.c;a.b=c;break a}a.j=Number.MAX_VALUE}if(d)for(b=0;b<d.length;b++)c=d[b],c<a.j?(c+=a.c,a.F[c]=a.F[c]||_.Ga):a.b[c]=a.b[c]||_.Ga};_.Ga=[];_.y=function(a,b){if(b<a.j){var c=b+a.c,d=a.F[c];return d===_.Ga?a.F[c]=[]:d}d=a.b[b];return d===_.Ga?a.b[b]=[]:d};_.w.prototype.toString=function(){return this.F.toString()}; _.z=function(a,b){Ha[a]=b;b.messageId=a};Ha={};
Fa("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));_.Ia="StopIteration"in _.k?_.k.StopIteration:Error("f");_.Ja=function(){};_.Ja.prototype.next=function(){throw _.Ia;};_.Ja.prototype.ha=function(){return this};a:{var La=_.k.navigator;if(La){var Ma=La.userAgent;if(Ma){_.Ka=Ma;break a}}_.Ka=""}var A=function(a){return-1!=_.Ka.indexOf(a)};var Na=function(){return A("Opera")||A("OPR")},Oa=function(){return A("Edge")||A("Trident")||A("MSIE")},Pa=function(){return(A("Chrome")||A("CriOS"))&&!Na()&&!Oa()};var Qa=function(){return A("Edge")};var Ra=function(){return A("iPhone")&&!A("iPod")&&!A("iPad")};_.B=function(a,b){this.b={};this.a=[];this.j=this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("h");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof _.B?(c=a.M(),d=a.B()):(c=_.Ea(a),d=Da(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}};_.B.prototype.V=function(){return this.c};_.B.prototype.B=function(){Sa(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};_.B.prototype.M=function(){Sa(this);return this.a.concat()};
_.Ua=function(a,b){return Ta(a.b,b)};_.B.prototype.P=function(){return 0==this.c};_.B.prototype.clear=function(){this.b={};this.j=this.c=this.a.length=0};_.B.prototype.remove=function(a){return Ta(this.b,a)?(delete this.b[a],this.c--,this.j++,this.a.length>2*this.c&&Sa(this),!0):!1};
var Sa=function(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Ta(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Ta(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}};_.h=_.B.prototype;_.h.get=function(a,b){return Ta(this.b,a)?this.b[a]:b};_.h.set=function(a,b){Ta(this.b,a)||(this.c++,this.a.push(a),this.j++);this.b[a]=b};_.h.forEach=function(a,b){for(var c=this.M(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
_.h.clone=function(){return new _.B(this)};_.h.ha=function(a){Sa(this);var b=0,c=this.a,d=this.b,e=this.j,f=this,g=new _.Ja;g.next=function(){for(;;){if(e!=f.j)throw Error("i");if(b>=c.length)throw _.Ia;var g=c[b++];return a?g:d[g]}};return g};var Ta=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
_.Va=function(a){if("function"==typeof a.B)return a.B();if(_.t(a))return a.split("");if(_.la(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Da(a)};
_.Wa=function(a,b,c){if("function"==typeof a.forEach)a.forEach(b,c);else if(_.la(a)||_.t(a))(0,_.v)(a,b,c);else{var d;if("function"==typeof a.M)d=a.M();else if("function"!=typeof a.B)if(_.la(a)||_.t(a)){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=_.Ea(a);else d=void 0;for(var e=_.Va(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}};
var Xa,Za,$a,bb,cb,db,fb,hb,ib,jb;Xa=Na();_.D=Oa();_.Ya=A("Gecko")&&!(-1!=_.Ka.toLowerCase().indexOf("webkit")&&!Qa())&&!(A("Trident")||A("MSIE"))&&!Qa();Za=-1!=_.Ka.toLowerCase().indexOf("webkit")&&!Qa();$a=_.k.navigator||null;_.ab=$a&&$a.platform||"";bb=function(){var a=_.Ka;if(_.Ya)return/rv\:([^\);]+)(\)|;)/.exec(a);if(_.D&&Qa())return/Edge\/([\d\.]+)/.exec(a);if(_.D)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Za)return/WebKit\/(\S+)/.exec(a)};
cb=function(){var a=_.k.document;return a?a.documentMode:void 0};db=function(){if(Xa&&_.k.opera){var a=_.k.opera.version;return _.ja(a)?a():a}var a="",b=bb();b&&(a=b?b[1]:"");return _.D&&!Qa()&&(b=cb(),b>(0,window.parseFloat)(a))?String(b):a}();fb={};_.gb=function(a){return fb[a]||(fb[a]=0<=ta(db,a))};hb=_.k.document;ib=cb();jb=!hb||!_.D||!ib&&Qa()?void 0:ib||("CSS1Compat"==hb.compatMode?(0,window.parseInt)(db,10):5);
_.E=function(){this.C=this.C;this.j=this.j};_.E.prototype.C=!1;_.E.prototype.xb=function(){return this.C};_.E.prototype.D=function(){this.C||(this.C=!0,this.n())};_.G=function(a,b){_.kb(a,_.ha(_.F,b))};_.kb=function(a,b){a.C?b.call(void 0):(a.j||(a.j=[]),a.j.push(_.n(void 0)?(0,_.q)(b,void 0):b))};_.E.prototype.n=function(){if(this.j)for(;this.j.length;)this.j.shift()()};_.F=function(a){a&&"function"==typeof a.D&&a.D()};
_.lb=!_.D||_.D&&(Qa()||9<=jb);!_.Ya&&!_.D||_.D&&_.D&&(Qa()||9<=jb)||_.Ya&&_.gb("1.9.1");_.D&&_.gb("9");var mb=function(a){mb[" "](a);return a};mb[" "]=_.oa;_.nb=function(a,b){try{return mb(a[b]),!0}catch(c){}return!1};var ob,pb;ob=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;_.rb=function(a){if(pb){pb=!1;var b=_.k.location;if(b){var c=b.href;if(c&&(c=_.qb(c))&&c!=b.hostname)throw pb=!0,Error();}}return a.match(ob)};pb=Za;_.qb=function(a){return(a=_.rb(a)[3]||null)?(0,window.decodeURI)(a):a};
var sb=!_.D||_.D&&(Qa()||9<=jb),tb=_.D&&!_.gb("9");!Za||_.gb("528");_.Ya&&_.gb("1.9b")||_.D&&_.gb("8")||Xa&&_.gb("9.5")||Za&&_.gb("528");_.Ya&&!_.gb("8")||_.D&&_.gb("9");_.H=function(a,b){this.type=a;this.a=this.target=b;this.mc=!0};_.H.prototype.b=function(){this.mc=!1};var ub=function(a,b){_.H.call(this,a?a.type:"");this.a=this.target=null;this.clientY=this.clientX=0;this.c=this.state=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;c&&_.Ya&&_.nb(c,"nodeName");this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.state=a.state;this.c=a;a.defaultPrevented&&this.b()}};_.p(ub,_.H); ub.prototype.b=function(){ub.t.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,tb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};
var vb,xb;vb="closure_listenable_"+(1E6*Math.random()|0);_.wb=function(a){return!(!a||!a[vb])};xb=0;var yb=function(a,b,c,d,e){this.qa=a;this.proxy=null;this.src=b;this.type=c;this.Ta=!!d;this.$a=e;this.key=++xb;this.removed=this.Sa=!1},zb=function(a){a.removed=!0;a.qa=null;a.proxy=null;a.src=null;a.$a=null};var Ab=function(a){this.src=a;this.a={};this.b=0};Ab.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=Bb(a,b,d,e);-1<g?(b=a[g],c||(b.Sa=!1)):(b=new yb(b,this.src,f,!!d,e),b.Sa=c,a.push(b));return b};Ab.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.a))return!1;var e=this.a[a];b=Bb(e,b,c,d);return-1<b?(zb(e[b]),_.u.splice.call(e,b,1),0==e.length&&(delete this.a[a],this.b--),!0):!1};
var Cb=function(a,b){var c=b.type;if(!(c in a.a))return!1;var d=_.Aa(a.a[c],b);d&&(zb(b),0==a.a[c].length&&(delete a.a[c],a.b--));return d};Ab.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.a)if(!a||c==a){for(var d=this.a[c],e=0;e<d.length;e++)++b,zb(d[e]);delete this.a[c];this.b--}return b}; var Db=function(a,b,c,d,e){a=a.a[b.toString()];b=-1;a&&(b=Bb(a,c,d,e));return-1<b?a[b]:null},Bb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.removed&&f.qa==b&&f.Ta==!!c&&f.$a==d)return e}return-1};
var Eb,Fb,Gb,Lb,Nb,Sb,Rb,Ob,Kb,Tb;Eb="closure_lm_"+(1E6*Math.random()|0);Fb={};Gb=0;_.Hb=function(a,b,c,d,e){if(_.ma(b)){for(var f=0;f<b.length;f++)_.Hb(a,b[f],c,d,e);return null}c=_.Ib(c);return _.wb(a)?a.listen(b,c,d,e):_.Jb(a,b,c,!1,d,e)};_.Jb=function(a,b,c,d,e,f){if(!b)throw Error("l");var g=!!e,l=Kb(a);l||(a[Eb]=l=new Ab(a));c=l.add(b,c,d,e,f);if(c.proxy)return c;d=Lb();c.proxy=d;d.src=a;d.qa=c;a.addEventListener?a.addEventListener(b.toString(),d,g):a.attachEvent(Nb(b.toString()),d);Gb++;return c};
Lb=function(){var a=Ob,b=sb?function(c){return a.call(b.src,b.qa,c)}:function(c){c=a.call(b.src,b.qa,c);if(!c)return c};return b};_.Pb=function(a,b,c,d,e){if(_.ma(b))for(var f=0;f<b.length;f++)_.Pb(a,b[f],c,d,e);else c=_.Ib(c),_.wb(a)?a.Eb(b,c,d,e):a&&(a=Kb(a))&&(b=Db(a,b,c,!!d,e))&&_.Qb(b)};
_.Qb=function(a){if(_.ka(a)||!a||a.removed)return!1;var b=a.src;if(_.wb(b))return Cb(b.U,a);var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.Ta):b.detachEvent&&b.detachEvent(Nb(c),d);Gb--;(c=Kb(b))?(Cb(c,a),0==c.b&&(c.src=null,b[Eb]=null)):zb(a);return!0};Nb=function(a){return a in Fb?Fb[a]:Fb[a]="on"+a};Sb=function(a,b,c,d){var e=!0;if(a=Kb(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.Ta==c&&!f.removed&&(f=Rb(f,d),e=e&&!1!==f)}return e};
Rb=function(a,b){var c=a.qa,d=a.$a||a.src;a.Sa&&_.Qb(a);return c.call(d,b)};
Ob=function(a,b){if(a.removed)return!0;if(!sb){var c;if(!(c=b))a:{c=["window","event"];for(var d=_.k,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new ub(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.a;f;f=f.parentNode)e.push(f);for(var f=a.type,l=e.length-1;0<=l;l--){c.a=e[l];var r=Sb(e[l],f,!0,c),d=d&&r}for(l=0;l<e.length;l++)c.a=e[l],r=Sb(e[l],
f,!1,c),d=d&&r}return d}return Rb(a,new ub(b,this))};Kb=function(a){a=a[Eb];return a instanceof Ab?a:null};Tb="__closure_events_fn_"+(1E9*Math.random()>>>0);_.Ib=function(a){if(_.ja(a))return a;a[Tb]||(a[Tb]=function(b){return a.handleEvent(b)});return a[Tb]};
_.Ub=function(a){_.x(this,a,"h_cc",null)};_.p(_.Ub,_.w);_.z("h_cc",_.Ub);_.Ub.prototype.Z=function(){return _.y(this,19)};_.I=function(a){_.E.call(this);this.I=a;this.g={}};_.p(_.I,_.E);var Vb=[];_.I.prototype.listen=function(a,b,c,d){return _.Wb(this,a,b,c,d)};_.Wb=function(a,b,c,d,e,f){_.ma(c)||(c&&(Vb[0]=c.toString()),c=Vb);for(var g=0;g<c.length;g++){var l=_.Hb(b,c[g],d||a.handleEvent,e||!1,f||a.I||a);if(!l)break;a.g[l.key]=l}return a};
_.I.prototype.Eb=function(a,b,c,d,e){if(_.ma(b))for(var f=0;f<b.length;f++)this.Eb(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.I||this,c=_.Ib(c),d=!!d,b=_.wb(a)?Db(a.U,String(b),c,d,e):a?(a=Kb(a))?Db(a,b,c,d,e):null:null,b&&(_.Qb(b),delete this.g[b.key]);return this};_.I.prototype.removeAll=function(){_.Ca(this.g,_.Qb);this.g={}};_.I.prototype.n=function(){_.I.t.n.call(this);this.removeAll()};_.I.prototype.handleEvent=function(){throw Error("m");};
var Xb=function(a,b,c){this.j=c;this.c=a;this.e=b;this.b=0;this.a=null};Xb.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.c();return a};var Yb=function(a,b){a.e(b);a.b<a.j&&(a.b++,b.next=a.a,a.a=b)};var Zb,$b,ac;Zb=function(a){_.k.setTimeout(function(){throw a;},0)};_.bc=function(a,b){var c=a;b&&(c=(0,_.q)(a,b));!_.ja(_.k.setImmediate)||_.k.Window&&_.k.Window.prototype&&_.k.Window.prototype.setImmediate==_.k.setImmediate?($b||($b=ac()),$b(c)):_.k.setImmediate(c)};
ac=function(){var a=_.k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!A("Presto")&&(a=function(){var a=window.document.createElement("iframe");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=(0,_.q)(function(a){if(("*"==d||
a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!Oa()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(_.n(c.next)){c=c.next;var a=c.Qb;c.Qb=null;a()}};return function(a){d.next={Qb:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("script")?function(a){var b=window.document.createElement("script"); b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};window.document.documentElement.appendChild(b)}:function(a){_.k.setTimeout(a,0)}};
var cc=function(){this.b=this.a=null},ec=new Xb(function(){return new dc},function(a){a.reset()},100);cc.prototype.add=function(a,b){var c=ec.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};cc.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};var dc=function(){this.next=this.b=this.a=null};dc.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};dc.prototype.reset=function(){this.next=this.b=this.a=null};
var jc=function(a,b){fc||gc();hc||(fc(),hc=!0);ic.add(a,b)},fc,gc=function(){if(_.k.Promise&&_.k.Promise.resolve){var a=_.k.Promise.resolve();fc=function(){a.then(kc)}}else fc=function(){_.bc(kc)}},hc=!1,ic=new cc,kc=function(){for(var a=null;a=ic.remove();){try{a.a.call(a.b)}catch(b){Zb(b)}Yb(ec,a)}hc=!1};
_.J=function(){_.E.call(this);this.U=new Ab(this);this.L=this;this.u=null};_.p(_.J,_.E);_.J.prototype[vb]=!0;_.h=_.J.prototype;_.h.addEventListener=function(a,b,c,d){_.Hb(this,a,b,c,d)};_.h.removeEventListener=function(a,b,c,d){_.Pb(this,a,b,c,d)};_.h.n=function(){_.J.t.n.call(this);this.U&&this.U.removeAll(void 0);this.u=null};_.h.listen=function(a,b,c,d){return this.U.add(String(a),b,!1,c,d)};_.h.Eb=function(a,b,c,d){return this.U.remove(String(a),b,c,d)}; _.h.da=function(a,b,c){a=this.U.a[String(a)];if(!a)return!0;a=a.concat();for(var d=!0,e=0;e<a.length;++e){var f=a[e];if(f&&!f.removed&&f.Ta==b){var g=f.qa,l=f.$a||f.src;f.Sa&&Cb(this.U,f);d=!1!==g.call(l,c)&&d}}return d&&0!=c.mc};
var lc=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},mc=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var pc=function(a,b){this.a=0;this.g=void 0;this.j=this.b=this.c=null;this.e=this.f=!1;if(a==nc)oc(this,2,b);else try{var c=this;a.call(b,function(a){oc(c,2,a)},function(a){oc(c,3,a)})}catch(d){oc(this,3,d)}},qc=function(){this.next=this.b=this.j=this.c=this.a=null},rc,sc,nc;qc.prototype.reset=function(){this.b=this.j=this.c=this.a=null};rc=new Xb(function(){return new qc},function(a){a.reset()},100);sc=function(){var a=rc.get();a.c=null;a.j=null;a.b=null;return a};nc=function(){};
_.uc=function(){var a,b=new pc(function(b){a=b});return new tc(b,a)};pc.prototype.then=function(a,b,c){return vc(this,_.ja(a)?a:null,_.ja(b)?b:null,c)};lc(pc);
var yc=function(a){0==a.a&&jc(function(){var a=new wc(void 0);xc(this,a)},a)},xc=function(a,b){if(0==a.a)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g;g=g.next){var l=g.a;if(l&&(d++,l==a&&(e=g),e&&1<d))break;e||(f=g)}e&&(0==c.a&&1==d?xc(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):zc(c),Ac(c,e,3,b)))}a.c=null}else oc(a,3,b)},Cc=function(a,b){a.b||2!=a.a&&3!=a.a||Bc(a);a.j?a.j.next=b:a.b=b;a.j=b},vc=function(a,b,c,d){var e=sc();e.a=new pc(function(a,g){e.c=b?function(c){try{var e=
b.call(d,c);a(e)}catch(C){g(C)}}:a;e.j=c?function(b){try{var e=c.call(d,b);!_.n(e)&&b instanceof wc?g(b):a(e)}catch(C){g(C)}}:g});e.a.c=a;Cc(a,e);return e.a};pc.prototype.h=function(a){this.a=0;oc(this,2,a)};pc.prototype.k=function(a){this.a=0;oc(this,3,a)};
var oc=function(a,b,c){if(0==a.a){if(a==c)b=3,c=new TypeError("Promise cannot resolve to itself");else{if(mc(c)){a.a=1;c.then(a.h,a.k,a);return}if(_.ia(c))try{var d=c.then;if(_.ja(d)){Dc(a,c,d);return}}catch(e){b=3,c=e}}a.g=c;a.a=b;a.c=null;Bc(a);3!=b||c instanceof wc||Ec(a,c)}},Dc=function(a,b,c){a.a=1;var d=!1,e=function(b){d||(d=!0,a.h(b))},f=function(b){d||(d=!0,a.k(b))};try{c.call(b,e,f)}catch(g){f(g)}},Bc=function(a){a.f||(a.f=!0,jc(a.l,a))},zc=function(a){var b=null;a.b&&(b=a.b,a.b=b.next,
b.next=null);a.b||(a.j=null);return b};pc.prototype.l=function(){for(var a=null;a=zc(this);)Ac(this,a,this.a,this.g);this.f=!1};var Ac=function(a,b,c,d){b.a&&(b.a.c=null);if(2==c)b.c.call(b.b,d);else{if(b.a)for(;a&&a.e;a=a.c)a.e=!1;b.j.call(b.b,d)}Yb(rc,b)},Ec=function(a,b){a.e=!0;jc(function(){a.e&&Fc.call(null,b)})},Fc=Zb,wc=function(a){_.qa.call(this,a)};_.p(wc,_.qa);wc.prototype.name="cancel";var tc=function(a,b){this.b=a;this.a=b};
var Hc,Ic,Jc,Kc,Lc;_.Gc=A("Firefox");Hc=Ra()||A("iPod");Ic=A("iPad");Jc=A("Android")&&!(Pa()||A("Firefox")||Na()||A("Silk"));Kc=Pa();Lc=A("Safari")&&!(Pa()||A("Coast")||Na()||Oa()||A("Silk")||A("Android"))&&!(Ra()||A("iPad")||A("iPod"));_.Mc=function(a,b){for(var c=[],d=0;d<arguments.length;d++)c.push(arguments[d]||"");return c.join("_;_")};_.Nc=function(){return 0<=window.navigator.userAgent.indexOf("CrOS")};_.Oc=function(a,b){this.j=a||"e";this.c=null!=a&&"p"==a?"e":"p";this.b=this.e=null;this.h=b||"u";this.a=this.g=null;this.f=[]};_.Oc.prototype.message=function(){var a={};a.i=this.a;a.m=this.f;a.r=this.h;a.o=this.g;a.s=this.b;a.st=this.c;a.d=this.e;a.dt=this.j;return a};_.ga("ace.base.Message.prototype.message",_.Oc.prototype.message);
_.Pc=function(a,b){for(var c in b)switch(c){case "r":a.h=b[c];break;case "i":a.a=b[c];break;case "m":a.f=b[c];break;case "o":a.g=b[c];break;case "s":a.b=b[c];break;case "d":a.e=b[c];break;case "st":a.c=b[c];break;case "dt":a.j=b[c]}return a};_.Qc=function(a,b,c){null!=b&&(a.b=b,null!=c&&(a.c=c))};_.Rc=function(a,b){null!=b&&(a.a=b)};_.Sc=function(a,b){"object"==typeof b?a.f=b:a.f=[b]};_.Oc.prototype.source=function(){return this.b};_.Oc.prototype.target=function(){return this.e}; _.Oc.prototype.content=function(){return this.f};
_.Tc=function(a,b,c,d,e){_.E.call(this);this.b=a;this.Pa=b;this.a=typeof b;this.zb=c?c:!1;this.ba=!0;this.vb=d?d:!1;this.pb=e?e:!1};_.p(_.Tc,_.E);_.h=_.Tc.prototype;_.h.n=function(){_.Tc.t.n.call(this);this.b="";this.Pa=null;this.a=""};_.h.id=function(){return this.b};_.h.type=function(){return this.a};_.h.G=function(){return this.Pa};_.h.setEnabled=function(a){this.ba=a};
var Uc=function(a){return(a=a.exec(_.Ka))?a[1]:""},Vc=function(){if(_.Gc)return Uc(/Firefox\/([0-9.]+)/);if(_.D||Xa)return db;if(Kc)return Uc(/Chrome\/([0-9.]+)/);if(Lc&&!(Ra()||A("iPad")||A("iPod")))return Uc(/Version\/([0-9.]+)/);if(Hc||Ic){var a;if(a=/Version\/(\S+).*Mobile\/(\S+)/.exec(_.Ka))return a[1]+"."+a[2]}else if(Jc)return(a=Uc(/Android\s+([0-9.]+)/))?a:Uc(/Version\/([0-9.]+)/);return""}();
_.Xc=function(a){_.E.call(this);this.a=new _.B;this.b=["https://talkgadget.google.com/talkgadget/notifier-js","","https://test.talkgadget.google.com/talkgadget/notifier-js?jsmode=debug_unobfuscated"];a&&_.Wc(this,a)};_.p(_.Xc,_.E);_.Yc=0<=ta(Vc,"23.0.1262.0")&&!_.Nc();_.Xc.prototype.n=function(){_.Xc.t.n.call(this);for(var a=this.a.M(),b=0;b<a.length;++b)_.F(this.a.get(a[b]));delete this.a};_.Xc.prototype.getItem=function(a){return _.Ua(this.a,a)?this.a.get(a):null};
_.Xc.prototype.setItem=function(a){this.a.set(a.id(),a)};_.Wc=function(a,b){for(var c in b){var d=b[c],e=null;_.Ua(a.a,c)?(e=a.a.get(c),e.Pa=d.value,d.changed&&(e.pb=d.changed)):(e=new _.Tc(c,d.value,d.multiple,d.inverse,d.changed),e.setEnabled(!d.disabled));a.a.set(c,e)}};
_.ad=function(){this.c=new _.B;this.a=null;this.b=!1;this.a=new Zc;this.b=!0;_.$c(this)};_.ad.ua=function(){return _.ad.a?_.ad.a:_.ad.a=new _.ad};_.$c=function(a,b){var c=b||_.oa;a.b?c():window.chrome.storage.local.get((0,_.q)(function(a){if(!this.b){for(var b in a)this.c.set(b,a[b]);this.b=!0}c()},a))};_.ad.prototype.get=function(a){return this.a.get(a)};_.ad.prototype.set=function(a,b){var c=_.uc();this.a.set(a,b);c.a(void 0);return c.b};_.ad.prototype.remove=function(a){this.a.remove(a)};
_.ad.prototype.clear=function(){this.a.clear()};var Zc=function(){this.a=window.localStorage};Zc.prototype.clear=function(){this.a.clear()};Zc.prototype.get=function(a){a=this.a.getItem(a);if(a){var b=JSON.parse(a);a=b.data;if("jspb"==b.type){b=Ha[a[0]];if(!b)throw Error("e`"+a[0]);a=new b(a)}}else a=null;return a};Zc.prototype.set=function(a,b){var c=null;b instanceof _.w&&(b=b.F,c="jspb");var d={};d.data=b;d.timestamp=(0,_.m)();c&&(d.type=c);c=JSON.stringify(d);try{this.a.setItem(a,c)}catch(e){}}; Zc.prototype.remove=function(a){try{this.a.removeItem(a)}catch(b){}};
_.bd=function(a,b){this.b=a;this.a=b;this.constructor.Ob||(this.constructor.Ob={});this.constructor.Ob[this.toString()]=this};_.bd.prototype.toString=function(){this.c||(this.c=this.b.a+":"+this.a);return this.c};_.K=function(a,b){_.bd.call(this,a,b)};_.p(_.K,_.bd);_.cd=function(a){this.a=a};_.dd=new _.cd("lib");_.L=function(a){this.a=a};_.L.prototype.toString=function(){return this.a};_.ed=new _.L("fJuxOc");_.fd=new _.L("ZtVrH");_.gd=new _.L("zZa4xc");_.hd=new _.L("pVbxBc");_.id=new _.L("byfTOb");_.jd=new _.L("LEikZe");_.kd=new _.L("rJmJrc");/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
_.ld=function(a,b){this.j=[];this.u=b||null;this.b=this.a=!1;this.c=void 0;this.l=this.p=this.f=!1;this.e=0;this.h=null;this.q=0};_.ld.prototype.k=function(a,b){this.f=!1;_.md(this,a,b)};_.md=function(a,b,c){a.a=!0;a.c=c;a.b=!b;nd(a)};_.pd=function(a){if(a.a){if(!a.l)throw new od;a.l=!1}};_.ld.prototype.g=function(a){_.pd(this);_.md(this,!0,a)};_.qd=function(a,b,c,d){a.j.push([b,c,d]);a.a&&nd(a)};
_.ld.prototype.then=function(a,b,c){var d,e,f=new pc(function(a,b){d=a;e=b});_.qd(this,d,function(a){"undefined"!=typeof _.rd&&a instanceof _.rd?yc(f):e(a)});return f.then(a,b,c)};lc(_.ld);
var sd=function(a){return(0,_.za)(a.j,function(a){return _.ja(a[1])})},nd=function(a){if(a.e&&a.a&&sd(a)){var b=a.e,c=td[b];c&&(_.k.clearTimeout(c.Wa),delete td[b]);a.e=0}a.h&&(a.h.q--,delete a.h);for(var b=a.c,d=c=!1;a.j.length&&!a.f;){var e=a.j.shift(),f=e[0],g=e[1],e=e[2];if(f=a.b?g:f)try{var l=f.call(e||a.u,b);_.n(l)&&(a.b=a.b&&(l==b||l instanceof Error),a.c=b=l);mc(b)&&(d=!0,a.f=!0)}catch(r){b=r,a.b=!0,sd(a)||(c=!0)}}a.c=b;d&&(l=(0,_.q)(a.k,a,!0),d=(0,_.q)(a.k,a,!1),b instanceof _.ld?(_.qd(b,
l,d),b.p=!0):b.then(l,d));c&&(b=new ud(b),td[b.Wa]=b,a.e=b.Wa)},od=function(){_.qa.call(this)};_.p(od,_.qa);od.prototype.message="Deferred has already fired";od.prototype.name="AlreadyCalledError";var ud=function(a){this.Wa=_.k.setTimeout((0,_.q)(this.b,this),0);this.a=a};ud.prototype.b=function(){delete td[this.Wa];throw this.a;};var td={};

}catch(e){_._DumpException(e)}
try{
var wd;_.vd=function(a){a&&a.parentNode&&a.parentNode.removeChild(a)};wd=function(a,b){for(var c=_.t(a)?a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)};_.yd=function(a){_.E.call(this);this.c={};this.h={};this.k={};this.e={};this.l={};this.q={};this.p=a?a.ta():new _.J;this.w=!a;this.f=null;a?(this.f=a,this.k=a.k,this.e=a.e,this.h=a.h,this.l=a.l):(0,_.m)();a=xd(this);this!=a&&(a.g?a.g.push(this):a.g=[this])};_.p(_.yd,_.E);var xd=function(a){for(;a.f;)a=a.f;return a};_.yd.prototype.get=function(a){var b=this.b(a);if(null==b)throw new zd(a);return b};
_.yd.prototype.b=function(a){for(var b=this;b;b=b.f){if(b.C)throw Error("q");if(b.c[a])return b.c[a][0];if(b.q[a])break}if(b=this.k[a]){b=b(this);if(null==b)throw Error("r`"+a);this.a(a,b);return b}return null};_.yd.prototype.a=function(a,b,c){if(this.C)c||_.F(b);else{this.c[a]=[b,!c];b=Ad(this,this,a);for(c=0;c<b.length;c++)b[c].g(null);delete this.h[a]}};_.yd.prototype.u=function(){var a=_.Bd;if(!this.c[a])throw Error("s`"+a);var b=this.c[a];delete this.c[a];b[1]&&_.F(b[0])};
var Ad=function(a,b,c){var d=[],e=a.e[c];e&&(wd(e,function(a){var c;a:{for(c=a.Pb;c;){if(c==b){c=!0;break a}c=c.f}c=!1}c&&(d.push(a.xd),_.Aa(e,a))}),0==e.length&&delete a.e[c]);return d},Cd=function(a,b){a.e&&_.Wa(a.e,function(a,d,e){wd(a,function(d){d.Pb==b&&_.Aa(a,d)});0==a.length&&delete e[d]})};
_.yd.prototype.n=function(){if(xd(this)==this){var a=this.g;if(a)for(;a.length;)a[0].D()}else for(var a=xd(this).g,b=0;b<a.length;b++)if(a[b]==this){a.splice(b,1);break}for(var c in this.c)a=this.c[c],a[1]&&"undefined"!=typeof a[0].D&&a[0].D();this.c=null;this.w&&this.p.D();Cd(this,this);this.e=null;_.F(this.v);this.q=this.v=null;_.yd.t.n.call(this)};_.yd.prototype.ta=function(){return this.p};var zd=function(a){_.qa.call(this);this.id=a;this.message='Service for "'+a+'" is not registered'}; _.p(zd,_.qa);var Dd=new _.cd("fva");new _.K(Dd,1);

}catch(e){_._DumpException(e)}
try{
_.af=function(){return window.chrome.runtime.getURL("feedbackdialog.html")};
}catch(e){_._DumpException(e)}
try{
_.k.ace_i18n={chrome_ext_short_name:{message:"Hangouts"},chrome_ext_description:{message:"Hangouts brings conversations to life with photos, emoji, and even group video calls for free."},quasar_chat_toast_info:{message:"Click to go to page..."},quasar_answer_button_text:{message:"Answer"},quasar_decline_button_text:{message:"Decline"},quasar_help:{message:"Help"},quasar_legend_startup_shutdown:{message:"Application"},chrome_ext_run_at_browser_start:{message:"Sign in to Hangouts when Chrome starts"},
chrome_ext_run_after_browser_close:{message:"Allow background mode"},chrome_ext_new_windows_topmost:{message:"Keep Hangouts on top of other windows"},quasar_label_tray_icon:{message:"Show system tray icon"},quasar_legend_notifications:{message:"Notifications"},quasar_label_all_notification:{message:"Disable notifications"},quasar_label_chat_notification:{message:"Disable chat notifications"},quasar_label_toast_timeout_chat:{message:"Allow chat notifications to timeout automatically"},quasar_label_toast_duration_chat:{message:"Timeout length (in seconds):"},
quasar_button_save:{message:"Ok"},quasar_button_apply:{message:"Apply"},quasar_button_cancel:{message:"Cancel"},chrome_ext_menutext_feedback:{message:"Send feedback"},quasar_feedback_server_uri:{message:"https://www.google.com/tools/feedback"},chrome_ext_feedback_subtitle:{message:"Send feedback"},chrome_ext_feedback_comments:{message:"Comments"},quasar_feedback_system_legend:{message:"System Information"},quasar_feedback_platform_label:{message:"Platform:"},quasar_feedback_user_agent_label:{message:"User Agent:"},
quasar_feedback_privacy_legend:{message:"Privacy Statement"},quasar_feedback_privacy_text:{message:"The description, product information, additional information and your email address will be sent to Google. See the Google Feedback Terms of Service. By submitting this content you are granting to Google the right to use it to improve our products and services. See our Privacy Policy."},quasar_feedback_submit_button:{message:"Send Feedback"},quasar_feedback_cancel_button:{message:"Cancel"},quasar_video_title:{message:"Video call from $1...",
placeholders:{1:{content:"$1"}}},quasar_voice_title:{message:"Voice call from $1...",placeholders:{1:{content:"$1"}}},quasar_group_chat_title:{message:"From group chat..."},quasar_chat_title:{message:"$1 says...",placeholders:{1:{content:"$1"}}},quasar_hangout_title:{message:"$1 is hanging out",placeholders:{1:{content:"$1"}}},chrome_ext_oneonone_plus_hangout_details:{message:"is video calling you via Hangouts"},chrome_ext_group_plus_hangout_details:{message:"has invited you to a group Hangout video call"},
quasar_video_details:{message:"is calling you with video chat"},quasar_voice_details:{message:"is calling you"},quasar_tip_connected:{message:"Status: Connected"},chrome_ext_tip_connected_missed_messages:{message:"Status: Connected\nMissed messages"},quasar_tip_connecting:{message:"Status: Connecting"},quasar_tip_reconnecting:{message:"Status: Reconnecting"},quasar_tip_disconnected:{message:"Status: Disconnected"},quasar_tip_not_login:{message:"Status: Not logged in"},quasar_tip_not_load:{message:"Status: Loading error"},
chrome_ext_menutext_unsigned_user:{message:"Not signed in"},quasar_menutext_unknown_user:{message:"Unknown"},quasar_menutext_feedback:{message:"Feedback"},quasar_menutext_settings:{message:"Options"},quasar_menutext_quit:{message:"Exit"},quasar_menutext_signout:{message:"Sign out"},chrome_ext_cannot_connect:{message:"Unable to connect to Google. Please check your internet connection."},quasar_try_now:{message:"Try now"},quasar_sign_in_to_start_talking:{message:"Sign in to start talking with friends"},
quasar_sign_in:{message:"Sign in"},chrome_app_description:{message:"Always stay connected with the new desktop app for Hangouts on ChromeOS and Windows."},chrome_app_connection_error_title:{message:"Connection Error"},chrome_app_connection_error_detail:{message:"Make sure you are connected to the Internet and try again"},chrome_app_connection_error_button:{message:"Try again"},chrome_app_welcome_message:{message:"Enjoy private and group conversations with text, photos, gifs, voice, video and more."},
chrome_app_chrome_signin_message:{message:"Sign in to Chrome to get started."},chrome_app_learn_more_message:{message:"Learn more"},chrome_app_signin_button:{message:"Sign in"},chrome_app_outdated_title:{message:"Update your Hangouts Chrome app"},chrome_app_outdated_detail:{message:"This app is out of date. There's a newer version available."},chrome_app_exit_title:{message:"Are you sure you want to quit Hangouts?"},chrome_app_exit_title_2:{message:"Do you want to quit Hangouts?"},chrome_app_exit_detail:{message:"You will not receive new messages or calls on this device"},
chrome_app_exit_detail_2:{message:"You can also choose to minimize it and continue to receive messages and calls."},chrome_app_exit_no:{message:"No"},chrome_app_exit_quit:{message:"Quit"},chrome_app_exit_minimize:{message:"Minimize"},chrome_app_osx_warning_message:{message:"Hangouts Chrome app is not fully supported on Mac OSX."},chrome_app_osx_warning_ack:{message:"OK, GOT IT"}};

}catch(e){_._DumpException(e)}
try{
_.Xh=function(a){for(var b=a.a.M(),c={},d=0;d<b.length;d++){var e=b[d],f=a.a.get(e);c[e]={value:f.G(),type:f.type(),multiple:f.zb,disabled:!f.ba,inverse:f.vb,changed:f.pb}}return c};_.Yh=function(a,b){return _.t(b)?a.getElementById(b):b};_.S=function(a){return _.Yh(window.document,a)};_.Zh=new _.L("a");_.$h=new _.L("b");_.ai=new _.L("c");_.bi=new _.L("d");_.ci=new _.L("e");_.di=new _.L("f");_.ei=new _.L("g");_.fi=new _.L("h");_.Bd=new _.L("i");_.gi=new _.L("j");
_.T=function(a){var b;b=b||[];b.length||(b[0]="");var c=window.chrome.i18n.getMessage(a,b);if(c)return c;(c=(c=_.k.ace_i18n[a.toLowerCase()])?c.message:_.k.ace_i18n["MSG_"+a])&&(c=c.replace("$1",b[0]).replace("$2",b[1]).replace("$3",b[2]));return c};
}catch(e){_._DumpException(e)}
try{
var On=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},Pn=function(a){_.E.call(this);this.e=_.Mc("setting",""+(0,_.m)());this.c=null;this.b=new _.I;_.G(this,this.b);this.a=new _.B;this.f=a.get(_.fi);this.b.listen(window,"unload",this.D)};_.p(Pn,_.E);_.ga("ace.ui.SettingsDialog",Pn);_.ga("ace.ui.SettingsDialog",Pn);
Pn.prototype.h=function(){window.document.title=_.T("CHROME_EXT_SHORT_NAME");this.c=window.chrome.runtime.connect({name:this.e});var a=this;this.c.onMessage.addListener(function(b){switch(_.Pc(new _.Oc,b).a){case "focus":Qn(a);a.sendMessage("extensionLibrary",["selectTab",a.e,!0,!0]);window.focus();break;case "close":a.g()}});this.a.set("StartOnBrowserLaunch",["BrowserStartup",1]);this.a.set("StopOnBrowserClose",["Shutdown",1]);this.a.set("TopMost",["TopMost",1]);this.a.set("TrayIcon",["TrayIcon",
1]);_.vd(_.S("fieldsetDestPage"));Sn("legendApp",_.T("QUASAR_LEGEND_STARTUP_SHUTDOWN"));Sn("legendNotice",_.T("QUASAR_LEGEND_NOTIFICATIONS"));Tn(this,"StartOnBrowserLaunch",_.T("CHROME_EXT_RUN_AT_BROWSER_START"));Tn(this,"StopOnBrowserClose",_.T("CHROME_EXT_RUN_AFTER_BROWSER_CLOSE"));Tn(this,"TrayIcon",_.T("QUASAR_LABEL_TRAY_ICON"));_.Yc?Tn(this,"TopMost",_.T("CHROME_EXT_NEW_WINDOWS_TOPMOST")):Un(this,"TopMost");_.Nc()&&Un(this,"TrayIcon");Qn(this);var b=_.S("feedbackLink");b.innerText=_.T("CHROME_EXT_MENUTEXT_FEEDBACK");
b.href=_.af();b=_.S("helpLink");b.innerText=_.T("QUASAR_HELP");b.href=On("https://support.google.com/hangouts?p=help&hl=%s",window.chrome.i18n.getMessage("@@ui_locale"));this.l=_.S("buttonSave");this.l.innerText=_.T("QUASAR_BUTTON_SAVE");this.b.listen(this.l,"click",(0,_.q)(this.p,this),!1);this.k=_.S("buttonCancel");this.k.innerText=_.T("QUASAR_BUTTON_CANCEL");this.b.listen(this.k,"click",(0,_.q)(this.g,this),!1)};Pn.prototype.init=Pn.prototype.h;
var Vn=function(a,b,c){var d=[];b=b+a.a.get(c)[0];a=a.a.get(c)[1];if(1<a)for(c=0;c<a;c++)d.push(_.S(b+c));else d.push(_.S(b));return d},Qn=function(a){for(var b=new _.Xc(a.f.get("settings")),c=a.a.M(),d=0;d<c.length;d++){var e=b.getItem(c[d]);if(e){var f=Vn(a,"field",c[d]);if(e.zb){var g=e.G();0<=g&&f[g]&&(f[g].checked=!0)}else f[0]&&("boolean"==e.a?e.vb?f[0].checked=!e.G():f[0].checked=e.G():f[0].value=e.G());if(!e.ba)for(e=Vn(a,"label",c[d]),g=0;g<e.length;g++)e[g]&&(e[g].disabled=!0),f[g]&&(f[g].disabled=
!0)}}},Sn=function(a,b){var c=_.S(a);c&&(c.innerText=b)},Tn=function(a,b,c){var d=a.a.get(b)[0];a=a.a.get(b)[1];if(1<a)for(b=0;b<a;b++){var e=_.S("label"+d+b);e&&c&&(e.innerText=c[b])}else(e=_.S("label"+d))&&c&&(e.innerText=c)},Un=function(a,b){var c=a.a.get(b)[0],d=_.S("field"+c);(d=(c=(c=_.S("label"+c)||d)&&c.parentNode)&&c.parentNode)&&d.removeChild(c)};
Pn.prototype.p=function(){for(var a=new _.Xc(this.f.get("settings")),b=this.a.M(),c=0;c<b.length;c++){var d=a.getItem(b[c]);if(d){var e=Vn(this,"field",b[c]),f=d.G();if(d.zb){for(var g=-1,l=0;l<e.length;l++)if(e[l]&&e[l].checked){g=l;break}-1==g&&(g=0);d.Pa=g}else e[0]&&(d.Pa="boolean"==d.a?d.vb?!e[0].checked:e[0].checked:e[0].value);f!=d.G()&&(d.pb=!0,a.setItem(d))}}this.f.set("settings",_.Xh(a));this.g()};
Pn.prototype.g=function(){this.sendMessage("settingsManager",["updateSettingsFromStorage"]);window.close()};Pn.prototype.sendMessage=function(a,b,c){c=c?c:""+(0,_.m)();var d=new _.Oc;_.Qc(d,this.e,"p");null!=a&&(d.g=a);_.Rc(d,c);_.Sc(d,b);this.c&&this.c.postMessage(d.message())};
window.addEventListener("load",function(){_.$c(_.ad.ua(),function(){var a=new _.yd;a.a(_.fi,_.ad.ua());(new Pn(a)).h()})},!1);
}catch(e){_._DumpException(e)}
}).call(this,this.default_settings);
// Google Inc.