function l(b,a,d,c){b.i.na(b.P,a,d,c,void 0)}function p(b,a,d,c){b.i.v?l(b,a,d,c):b.i.pb()._OnMessageFromDOM({type:"event",component:b.P,handler:a,dispatchOpts:c||null,data:d,responseId:null})}function q(b,a,d){b.i.h(b.P,a,d)}function r(b,a){for(const [d,c]of a)q(b,d,c)}window.$=class{constructor(b,a){this.i=b;this.P=a}Da(){}};window.gb=class{constructor(b){this.Pa=b;this.Cb=5;this.K=-1;this.ea=-Infinity;this.Hb=()=>{this.K=-1;this.ea=Date.now();this.R=!0;this.Pa();this.R=!1};this.Qa=this.R=!1}};
"use strict";function ba(b,a){q(b,"get-element",d=>{const c=b.u.get(d.elementId);return a(c,d)})}
window.Wb=class extends self.${constructor(b,a){super(b,a);this.u=new Map;this.ra=!0;r(this,[["create",()=>{throw Error("required override");}],["destroy",d=>{d=d.elementId;const c=this.u.get(d);this.ra&&c.parentElement.removeChild(c);this.u.delete(d)}],["set-visible",d=>{this.ra&&(this.u.get(d.elementId).style.display=d.isVisible?"":"none")}],["update-position",d=>{if(this.ra){var c=this.u.get(d.elementId);c.style.left=d.left+"px";c.style.top=d.top+"px";c.style.width=d.width+"px";c.style.height=
d.height+"px";d=d.fontSize;null!==d&&(c.style.fontSize=d+"em")}}],["update-state",d=>{this.u.get(d.elementId);throw Error("required override");}],["focus",d=>{const c=this.u.get(d.elementId);d.focus?c.focus():c.blur()}],["set-css-style",d=>{const c=this.u.get(d.elementId),e=d.prop;d=d.val;e.startsWith("--")?c.style.setProperty(e,d):c.style[e]=d}],["set-attribute",d=>{this.u.get(d.elementId).setAttribute(d.name,d.val)}],["remove-attribute",d=>{this.u.get(d.elementId).removeAttribute(d.name)}]]);ba(this,
d=>d)}};"use strict";const t=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),u=/android/i.test(navigator.userAgent);let v=0;function w(b){const a=document.createElement("script");a.async=!1;a.type="module";return b.Mb?new Promise(d=>{const c="c3_resolve_"+v;++v;self[c]=d;a.textContent=b.Qb+`\n\nself["${c}"]();`;document.head.appendChild(a)}):new Promise((d,c)=>{a.onload=d;a.onerror=c;a.src=b;document.head.appendChild(a)})}let x=!1,y=!1;
function ca(){if(!x){try{new Worker("blob://",{get type(){y=!0}})}catch(b){}x=!0}return y}let z=new Audio;const da={"audio/webm; codecs=opus":!!z.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!z.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!z.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!z.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!z.canPlayType("audio/mp4"),"audio/mpeg":!!z.canPlayType("audio/mpeg")};z=null;
async function ea(b){b=await A(b);return(new TextDecoder("utf-8")).decode(b)}function A(b){return new Promise((a,d)=>{const c=new FileReader;c.onload=e=>a(e.target.result);c.onerror=e=>d(e);c.readAsArrayBuffer(b)})}const B=[];let C=0;window.RealFile=window.File;const D=[],E=new Map,F=new Map;let fa=0;const G=[];self.runOnStartup=function(b){if("function"!==typeof b)throw Error("runOnStartup called without a function");G.push(b)};const I=new Set(["cordova","playable-ad","instant-games"]);let J=!1;
window.aa=class b{constructor(a){this.v=a.Sb;this.U=null;this.m="";this.I=a.Pb;this.Z={};this.xa=this.L=null;this.da=[];this.j=this.X=null;this.Ua=!1;this.S=null;this.H=-1;this.Gb=()=>this.wb();this.Xa=[];this.g=a.Ya;this.va="file"===location.protocol.substr(0,4);!this.v||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&ca()||(this.v=!1);if("playable-ad"===this.g||"instant-games"===this.g)this.v=!1;if("cordova"===this.g&&this.v)if(u){const d=/Chrome\/(\d+)/i.exec(navigator.userAgent);
d&&90<=parseInt(d[1],10)||(this.v=!1)}else this.v=!1;this.fa=this.B=null;"html5"!==this.g||window.isSecureContext||console.warn("[Construct] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.h("runtime","cordova-fetch-local-file",d=>this.sb(d));this.h("runtime","create-job-worker",()=>this.tb());"cordova"===this.g?document.addEventListener("deviceready",()=>this.Ia(a)):this.Ia(a)}cb(){return t&&
"cordova"===this.g}ma(){const a=navigator.userAgent;return t&&I.has(this.g)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}ab(){return u}Fa(){return u&&I.has(this.g)}async Ia(a){"macos-wkwebview"===this.g&&this.Ab();if("playable-ad"===this.g){this.B=self.c3_base64files;this.fa={};await this.lb();for(let c=0,e=a.M.length;c<e;++c){var d=a.M[c];this.fa.hasOwnProperty(d)?a.M[c]={Mb:!0,Qb:this.fa[d]}:this.B.hasOwnProperty(d)&&(a.M[c]=URL.createObjectURL(this.B[d]))}}a.Ob?this.m=a.Ob:(d=location.origin,
this.m=("null"===d?"file:///":d)+location.pathname,d=this.m.lastIndexOf("/"),-1!==d&&(this.m=this.m.substr(0,d+1)));a.Ub&&(this.Z=a.Ub);d=new MessageChannel;this.U=d.port1;this.U.onmessage=c=>this._OnMessageFromRuntime(c.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(c=>this.vb(c));this.S=new self.eb(this);await ha(this.S);"object"===typeof window.StatusBar&&window.StatusBar.hide();if("object"===typeof window.AndroidFullScreen)try{await new Promise((c,e)=>{window.AndroidFullScreen.immersiveMode(c,
e)})}catch(c){console.error("Failed to enter Android immersive mode: ",c)}this.v?await this.rb(a,d.port2):await this.qb(a,d.port2)}pa(a){a=this.Z.hasOwnProperty(a)?this.Z[a]:a.endsWith("/workermain.js")&&this.Z.hasOwnProperty("workermain.js")?this.Z["workermain.js"]:"playable-ad"===this.g&&this.B.hasOwnProperty(a)?this.B[a]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async la(a,d,c){if(a.startsWith("blob:"))return new Worker(a,c);if("cordova"===this.g&&this.va)return a=await this.ka(c.Lb?
a:this.I+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),c);a=new URL(a,d);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),c)}return new Worker(a,c)}A(){return Math.max(window.innerWidth,1)}s(){return Math.max(window.innerHeight,1)}Ha(a){var d=this.m,c=location.href,e=this.A(),f=this.s(),g=window.devicePixelRatio,h=b.N(),k=a.$b,m=window.cr_previewImageBlobs||
this.B,n=window.cr_previewProjectFileBlobs,ra=window.cr_previewProjectFiles,sa=window.Yb||"";a=a.Ya;var ta=(new URLSearchParams(self.location.search)).has("debug"),H=this.S;return{runtimeBaseUrl:d,previewUrl:c,windowInnerWidth:e,windowInnerHeight:f,devicePixelRatio:g,isFullscreen:h,projectData:k,previewImageBlobs:m,previewProjectFileBlobs:n,previewProjectFileSWUrls:ra,swClientId:sa,exportType:a,isDebug:ta,ife:!!self.Zb,jobScheduler:{inputPort:H.ua,outputPort:H.za,maxNumWorkers:H.Eb},supportedAudioFormats:da,
opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.I+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.I+"opus.wasm.wasm",isFileProtocol:this.va,isiOSCordova:this.cb(),isiOSWebView:this.ma(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async rb(a,d){const c=this.pa(a.Tb);"preview"===this.g?(this.L=new Worker("previewworker.js",{type:"module",name:"Runtime"}),await new Promise((h,k)=>{const m=n=>{this.L.removeEventListener("message",m);n.data&&"ok"===n.data.type?h():
k()};this.L.addEventListener("message",m);this.L.postMessage({type:"construct-worker-init","import":(new URL(c,this.m)).toString()})})):this.L=await this.la(c,this.m,{type:"module",name:"Runtime",Lb:!0});this.j=document.createElement("canvas");this.j.style.display="none";const e=this.j.transferControlToOffscreen();document.body.appendChild(this.j);window.c3canvas=this.j;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();let f=a.Ca||[],g=a.M;f=await Promise.all(f.map(h=>this.F(h)));g=
await Promise.all(g.map(h=>this.F(h)));if("cordova"===this.g)for(let h=0,k=a.ia.length;h<k;++h){const m=a.ia[h],n=m[0];if(n===a.Ba||"scriptsInEvents.js"===n||n.endsWith("/scriptsInEvents.js"))m[1]=await this.F(n)}this.L.postMessage(Object.assign(this.Ha(a),{type:"init-runtime",isInWorker:!0,messagePort:d,canvas:e,workerDependencyScripts:f,engineScripts:g,projectScripts:a.ia,mainProjectScript:a.Ba,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[d,e,...ia(this.S)]);this.da=D.map(h=>new h(this));
this.Ga();ja(this.X);self.c3_callFunction=(h,k)=>{var m=this.X;return m.i.fb(m.P,{name:h,params:k})};"preview"===this.g&&(self.goToLastErrorScript=()=>this.na("runtime","go-to-last-error-script"))}async qb(a,d){this.j=document.createElement("canvas");this.j.style.display="none";document.body.appendChild(this.j);window.c3canvas=this.j;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();this.da=D.map(g=>new g(this));this.Ga();var c=a.M.map(g=>"string"===typeof g?(new URL(g,this.m)).toString():
g);Array.isArray(a.Ca)&&c.unshift(...a.Ca);c=await Promise.all(c.map(g=>this.F(g)));await Promise.all(c.map(g=>w(g)));c=self.C3_ProjectScriptsStatus;const e=a.Ba,f=a.ia;for(let [g,h]of f)if(h||(h=g),g===e)try{h=await this.F(h),await w(h),"preview"!==this.g||c[g]||this.Ka(g,"main script did not run to completion")}catch(k){this.Ka(g,k)}else if("scriptsInEvents.js"===g||g.endsWith("/scriptsInEvents.js"))h=await this.F(h),await w(h);"preview"===this.g&&"object"!==typeof self.Vb.Xb?(this.ca(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),
alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Ha(a),{isInWorker:!1,messagePort:d,canvas:this.j,runOnStartupFunctions:G}),ja(this.X),this.Ja(),this.xa=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.xa,a))}Ka(a,d){this.ca();console.error(`[Preview] Failed to load project main script (${a}): `,d);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Ja(){this.ca()}ca(){const a=
window.Jb;a&&(a.parentElement.removeChild(a),window.Jb=null)}async tb(){const a=await ka(this.S);return{outputPort:a,transferables:[a]}}pb(){if(this.v)throw Error("not available in worker mode");return this.xa}na(a,d,c,e,f){this.U.postMessage({type:"event",component:a,handler:d,dispatchOpts:e||null,data:c,responseId:null},f)}fb(a,d){const c=fa++,e=new Promise((f,g)=>{F.set(c,{resolve:f,reject:g})});this.U.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:d,
responseId:c},void 0);return e}_OnMessageFromRuntime(a){const d=a.type;if("event"===d)return this.ub(a);if("result"===d)this.xb(a);else if("runtime-ready"===d)this.yb();else if("alert-error"===d)this.ca(),alert(a.message);else if("creating-runtime"===d)this.Ja();else throw Error(`unknown message '${d}'`);}ub(a){const d=a.component,c=a.handler,e=a.data,f=a.responseId;if(a=E.get(d))if(a=a.get(c)){var g=null;try{g=a(e)}catch(h){console.error(`Exception in '${d}' handler '${c}':`,h);null!==f&&this.ba(f,
!1,""+h);return}if(null===f)return g;g&&g.then?g.then(h=>this.ba(f,!0,h)).catch(h=>{console.error(`Rejection from '${d}' handler '${c}':`,h);this.ba(f,!1,""+h)}):this.ba(f,!0,g)}else console.warn(`[DOM] No handler '${c}' for component '${d}'`);else console.warn(`[DOM] No event handlers for component '${d}'`)}ba(a,d,c){let e;c&&c.transferables&&(e=c.transferables);this.U.postMessage({type:"result",responseId:a,isOk:d,result:c},e)}xb(a){const d=a.responseId,c=a.isOk;a=a.result;const e=F.get(d);c?e.resolve(a):
e.reject(a);F.delete(d)}h(a,d,c){let e=E.get(a);e||(e=new Map,E.set(a,e));if(e.has(d))throw Error(`[DOM] Component '${a}' already has handler '${d}'`);e.set(d,c)}static ja(a){if(D.includes(a))throw Error("DOM handler already added");D.push(a)}Ga(){for(const a of this.da)if("runtime"===a.P){this.X=a;return}throw Error("cannot find runtime DOM handler");}vb(a){this.na("debugger","message",a)}yb(){for(const a of this.da)a.Da()}static N(){return!!(document.fullscreenElement||document.webkitFullscreenElement||
document.mozFullScreenElement||J)}static Ma(a){J=!!a}La(){-1===this.H&&this.Xa.length&&(this.H=requestAnimationFrame(this.Gb))}jb(){-1!==this.H&&(cancelAnimationFrame(this.H),this.H=-1)}wb(){this.H=-1;for(const a of this.Xa)a();this.La()}qa(){this.X.qa()}hb(){this.Ua=!0}$a(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}bb(a){return!this.$a(a)}async F(a){return"cordova"===this.g&&(a.startsWith("file:")||this.va&&this.bb(a))?(a.startsWith(this.m)&&(a=a.substr(this.m.length)),
a=await this.ka(a),URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async sb(a){const d=a.filename;switch(a.as){case "text":return await this.Za(d);case "buffer":return await this.ka(d);default:throw Error("unsupported type");}}Ea(a){const d=window.cordova.file.applicationDirectory+"www/"+a;return new Promise((c,e)=>{window.resolveLocalFileSystemURL(d,f=>{f.file(c,e)},e)})}async Za(a){a=await this.Ea(a);return await ea(a)}oa(){if(B.length&&!(8<=C)){C++;var a=B.shift();this.mb(a.filename,
a.Rb,a.Kb)}}ka(a){return new Promise((d,c)=>{B.push({filename:a,Rb:e=>{C--;this.oa();d(e)},Kb:e=>{C--;this.oa();c(e)}});this.oa()})}async mb(a,d,c){try{const e=await this.Ea(a),f=await A(e);d(f)}catch(e){c(e)}}Ab(){var a={type:"ready"};if("windows-webview2"===this.g)window.chrome.webview.postMessage(JSON.stringify(a));else if("macos-wkwebview"===this.g)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async lb(){const a=[];for(const [d,
c]of Object.entries(this.B))a.push(this.kb(d,c));await Promise.all(a)}async kb(a,d){if("object"===typeof d)this.B[a]=new Blob([d.str],{type:d.type}),this.fa[a]=d.str;else{let c=await this.ob(d);c||(c=this.nb(d));this.B[a]=c}}async ob(a){try{return await (await fetch(a)).blob()}catch(d){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",d),
null}}nb(a){a=this.zb(a);return this.ib(a.data,a.Nb)}zb(a){var d=a.indexOf(",");if(0>d)throw new URIError("expected comma in data: uri");var c=a.substring(d+1);d=a.substring(5,d).split(";");a=d[0]||"";const e=d[2];c="base64"===d[1]||"base64"===e?atob(c):decodeURIComponent(c);return{Nb:a,data:c}}ib(a,d){var c=a.length;let e=c>>2,f=new Uint8Array(c),g=new Uint32Array(f.buffer,0,e),h,k;for(k=h=0;h<e;++h)g[h]=a.charCodeAt(k++)|a.charCodeAt(k++)<<8|a.charCodeAt(k++)<<16|a.charCodeAt(k++)<<24;for(c&=3;c--;)f[k]=
a.charCodeAt(k),++k;return new Blob([f],{type:d})}};"use strict";const K=self.aa;function la(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const ma=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),L={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},na={dispatchUserScriptEvent:!0},M={dispatchRuntimeEvent:!0};
function oa(b){return new Promise((a,d)=>{const c=document.createElement("link");c.onload=()=>a(c);c.onerror=e=>d(e);c.rel="stylesheet";c.href=b;document.head.appendChild(c)})}function pa(b){return new Promise((a,d)=>{const c=new Image;c.onload=()=>a(c);c.onerror=e=>d(e);c.src=b})}async function N(b){b=URL.createObjectURL(b);try{return await pa(b)}finally{URL.revokeObjectURL(b)}}
function qa(b){return new Promise((a,d)=>{let c=new FileReader;c.onload=e=>a(e.target.result);c.onerror=e=>d(e);c.readAsText(b)})}
async function ua(b,a,d){if(!/firefox/i.test(navigator.userAgent))return await N(b);var c=await qa(b);c=(new DOMParser).parseFromString(c,"image/svg+xml");const e=c.documentElement;if(e.hasAttribute("width")&&e.hasAttribute("height")){const f=e.getAttribute("width"),g=e.getAttribute("height");if(!f.includes("%")&&!g.includes("%"))return await N(b)}e.setAttribute("width",a+"px");e.setAttribute("height",d+"px");c=(new XMLSerializer).serializeToString(c);b=new Blob([c],{type:"image/svg+xml"});return await N(b)}
function O(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const va=new Set(["input","textarea","datalist","select"]),wa=new Set(["canvas","body","html"]);function P(b){wa.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function xa(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}
self.C3_GetSvgImageSize=async function(b){b=await N(b);if(0<b.width&&0<b.height)return[b.width,b.height];b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const a=b.getBoundingClientRect();document.body.removeChild(b);return[a.width,a.height]};self.C3_RasterSvgImageBlob=async function(b,a,d,c,e){b=await ua(b,a,d);const f=document.createElement("canvas");f.width=c;f.height=e;f.getContext("2d").drawImage(b,0,0,a,d);return f};
let Q=!1;document.addEventListener("pause",()=>Q=!0);document.addEventListener("resume",()=>Q=!1);function ja(b){b.Sa=!0;b.wa=b.i.A();b.T=b.i.s()}async function ya(b){var a=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);a=a?await createImageBitmap(b,a):await createImageBitmap(b);return{imageBitmap:a,transferables:[a]}}async function za(b){return await self.C3_GetSvgImageSize(b.blob)}
function Aa(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}function Ba(b){self.setTimeout(()=>{b.Ra=!0},1E3);"cordova"===b.i.g?(document.addEventListener("pause",()=>R(b,!0)),document.addEventListener("resume",()=>R(b,!1))):document.addEventListener("visibilitychange",()=>R(b,document.hidden));return{isSuspended:!(!document.hidden&&!Q)}}
function Ca(b){b.Oa||(b.Oa=!0,window.addEventListener("deviceorientation",a=>{b.l||l(b,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},L)}),window.addEventListener("deviceorientationabsolute",a=>{b.l||l(b,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},L)}))}
function Da(b){b.Na||(b.Na=!0,window.addEventListener("devicemotion",a=>{if(!b.l){var d=null,c=a.acceleration;c&&(d={x:c.x||0,y:c.y||0,z:c.z||0});c=null;var e=a.accelerationIncludingGravity;e&&(c={x:e.x||0,y:e.y||0,z:e.z||0});e=null;var f=a.rotationRate;f&&(e={alpha:f.alpha||0,beta:f.beta||0,gamma:f.gamma||0});l(b,"devicemotion",{acceleration:d,accelerationIncludingGravity:c,rotationRate:e,interval:a.interval,timeStamp:a.timeStamp},L)}}))}async function Ea(b){await oa(b.url)}
function Fa(b,a){b.Ta=a.message;-1===b.ta&&(b.ta=setTimeout(()=>{b.ta=-1;const d=document.getElementById("exportToVideoMessage");d&&(d.textContent=b.Ta)},250))}function S(b){if(!b.l){var a=K.N();a&&"any"!==b.Aa&&Ga(b);l(b,"fullscreenchange",{isFullscreen:a,innerWidth:b.A(),innerHeight:b.s()})}}function T(b,a){console.warn("[Construct] Fullscreen request failed: ",a);l(b,"fullscreenerror",{isFullscreen:K.N(),innerWidth:b.A(),innerHeight:b.s()})}
function R(b,a){a?b.i.jb():b.i.La();l(b,"visibilitychange",{hidden:a})}function Ha(b,a,d){"Backspace"===d.key&&P(d);if(!b.l){var c=ma.get(d.code)||d.code;p(b,a,{code:c,key:d.key,which:d.which,repeat:d.repeat,altKey:d.altKey,ctrlKey:d.ctrlKey,metaKey:d.metaKey,shiftKey:d.shiftKey,timeStamp:d.timeStamp},L)}}
function U(b,a,d,c){b.l||la(d)||p(b,a,{button:d.button,buttons:d.buttons,clientX:d.clientX,clientY:d.clientY+b.o,pageX:d.pageX,pageY:d.pageY+b.o,movementX:d.movementX||0,movementY:d.movementY||0,timeStamp:d.timeStamp},c)}function V(b){window!==window.top&&window.focus();Ia(b.target)&&document.activeElement&&!Ia(document.activeElement)&&document.activeElement.blur()}
function W(b,a,d){if(!b.l){if(b.W&&"pointermove"!==a){var c=b.W;c.R||(-1!==c.K&&(self.clearTimeout(c.K),c.K=-1),c.ea=Date.now())}c=0;"mouse"===d.pointerType&&(c=b.V);p(b,a,{pointerId:d.pointerId,pointerType:d.pointerType,button:d.button,buttons:d.buttons,lastButtons:c,clientX:d.clientX,clientY:d.clientY+b.o,pageX:d.pageX,pageY:d.pageY+b.o,movementX:(d.movementX||0)+b.ga,movementY:(d.movementY||0)+b.ha,width:d.width||0,height:d.height||0,pressure:d.pressure||0,tangentialPressure:d.tangentialPressure||
0,tiltX:d.tiltX||0,tiltY:d.tiltY||0,twist:d.twist||0,timeStamp:d.timeStamp},L);b.ga=0;b.ha=0;"mouse"===d.pointerType&&(c="mousemove","pointerdown"===a?c="mousedown":"pointerup"===a&&(c="mouseup"),U(b,c,d,na),b.V=d.buttons)}}
function X(b,a,d){if(!b.l&&!la(d)){var c=b.V;"pointerdown"===a&&0!==c?a="pointermove":"pointerup"===a&&0!==d.buttons&&(a="pointermove");p(b,a,{pointerId:1,pointerType:"mouse",button:d.button,buttons:d.buttons,lastButtons:c,clientX:d.clientX,clientY:d.clientY+b.o,pageX:d.pageX,pageY:d.pageY+b.o,movementX:d.movementX||0,movementY:d.movementY||0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:d.timeStamp},L);b.V=d.buttons;U(b,d.type,d,na)}}
function Y(b,a,d){if(!b.l)for(let c=0,e=d.changedTouches.length;c<e;++c){const f=d.changedTouches[c];p(b,a,{pointerId:f.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:f.clientX,clientY:f.clientY+b.o,pageX:f.pageX,pageY:f.pageY+b.o,movementX:d.movementX||0,movementY:d.movementY||0,width:2*(f.radiusX||f.webkitRadiusX||0),height:2*(f.radiusY||f.webkitRadiusY||0),pressure:f.force||f.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:f.rotationAngle||0,timeStamp:d.timeStamp},
L)}}function Z(b,a,d){document.body.style.transform="";b.o=0;if(0<d){var c=document.activeElement;c&&(c=c.getBoundingClientRect(),a=(c.top+c.bottom)/2-(a-d)/2,a>d&&(a=d),0>a&&(a=0),0<a&&(document.body.style.transform=`translateY(${-a}px)`,b.o=a))}}function Ja(b,a,d,c){const e=b.A(),f=b.s();b.J=-1;e!=a||f!=d?l(b,"window-resize",{innerWidth:e,innerHeight:f,devicePixelRatio:window.devicePixelRatio,isFullscreen:K.N()}):10>c&&Ka(b,e,f,c+1)}
function Ka(b,a,d,c){-1!==b.J&&clearTimeout(b.J);b.J=setTimeout(()=>Ja(b,a,d,c),48)}
function Ga(b){b=b.Aa;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(a=>console.warn("[Construct] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(b):screen.webkitLockOrientation?a=screen.webkitLockOrientation(b):screen.mozLockOrientation?a=screen.mozLockOrientation(b):screen.msLockOrientation&&(a=screen.msLockOrientation(b));a||console.warn("[Construct] Failed to lock orientation")}catch(a){console.warn("[Construct] Failed to lock orientation: ",a)}}
function Ia(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}
K.ja(class extends self.${constructor(b){super(b,"runtime");this.Va=!0;this.Sa=!1;this.J=-1;this.Aa="any";this.Na=this.Oa=!1;this.D=null;this.l=!1;this.Ta="";this.ta=-1;this.G=this.W=null;this.ha=this.ga=0;this.Ra=!1;this.wa=b.A();this.T=b.s();this.o=this.Y=0;b.h("canvas","update-size",c=>{var e=this.i;e.Ua||(e=e.j,e.style.width=c.styleWidth+"px",e.style.height=c.styleHeight+"px",e.style.marginLeft=c.marginLeft+"px",e.style.marginTop=c.marginTop+"px",document.documentElement.style.setProperty("--construct-scale",
c.displayScale),this.Va&&(e.style.display="",this.Va=!1))});b.h("runtime","invoke-download",c=>{const e=c.url;c=c.filename;const f=document.createElement("a"),g=document.body;f.textContent=c;f.href=e;f.download=c;g.appendChild(f);f.click();g.removeChild(f)});b.h("runtime","raster-svg-image",c=>ya(c));b.h("runtime","get-svg-image-size",c=>za(c));b.h("runtime","set-target-orientation",c=>{this.Aa=c.targetOrientation});b.h("runtime","register-sw",()=>{window.C3_RegisterSW&&window.C3_RegisterSW()});b.h("runtime",
"post-to-debugger",c=>Aa(c));b.h("runtime","go-to-script",c=>Aa(c));b.h("runtime","before-start-ticking",()=>Ba(this));b.h("runtime","debug-highlight",c=>{if(c.show){this.D||(this.D=document.createElement("div"),this.D.id="inspectOutline",document.body.appendChild(this.D));var e=this.D;e.style.display="";e.style.left=c.left-1+"px";e.style.top=c.top-1+"px";e.style.width=c.width+2+"px";e.style.height=c.height+2+"px";e.textContent=c.name}else this.D&&(this.D.style.display="none")});b.h("runtime","enable-device-orientation",
()=>Ca(this));b.h("runtime","enable-device-motion",()=>Da(this));b.h("runtime","add-stylesheet",c=>Ea(c));b.h("runtime","script-create-worker",c=>{const e=c.port2;(new Worker(c.url,c.opts)).postMessage({type:"construct-worker-init",port2:e},[e])});b.h("runtime","alert",c=>{alert(c.message)});b.h("runtime","hide-cordova-splash",()=>{navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()});b.h("runtime","set-exporting-to-video",c=>{this.l=!0;const e=document.createElement("h1");
e.id="exportToVideoMessage";e.textContent=c.message;document.body.prepend(e);document.body.classList.add("exportingToVideo");this.i.j.style.display="";this.i.hb()});b.h("runtime","export-to-video-progress",c=>Fa(this,c));b.h("runtime","exported-to-video",c=>{window.Ib({type:"exported-video",blob:c.blob,time:c.time})});b.h("runtime","exported-to-image-sequence",c=>{window.Ib({type:"exported-image-sequence",blobArr:c.blobArr,time:c.time,gif:c.gif})});const a=new Set(["input","textarea","datalist"]);
window.addEventListener("contextmenu",c=>{const e=c.target;a.has(e.tagName.toLowerCase())||O(e)||c.preventDefault()});const d=b.j;window.addEventListener("selectstart",P);window.addEventListener("gesturehold",P);d.addEventListener("selectstart",P);d.addEventListener("gesturehold",P);window.addEventListener("touchstart",P,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",P,{passive:!1}),d.addEventListener("pointerdown",P)):d.addEventListener("touchstart",P);this.V=
0;window.addEventListener("mousedown",c=>{1===c.button&&c.preventDefault()});window.addEventListener("mousewheel",xa,{passive:!1});window.addEventListener("wheel",xa,{passive:!1});window.addEventListener("resize",()=>{a:{if(!this.l&&this.Sa){var c=this.A();var e=this.s();if(this.i.Fa()){if(this.Ra){if(this.wa===c&&e<this.T){this.Y=this.T-e;Z(this,this.T,this.Y);c=void 0;break a}0<this.Y&&(this.Y=0,Z(this,e,this.Y))}this.wa=c;this.T=e}l(this,"window-resize",{innerWidth:c,innerHeight:e,devicePixelRatio:window.devicePixelRatio,
isFullscreen:K.N()});this.i.ma()&&(-1!==this.J&&clearTimeout(this.J),Ja(this,c,e,0))}c=void 0}return c});window.addEventListener("fullscreenchange",()=>S(this));window.addEventListener("webkitfullscreenchange",()=>S(this));window.addEventListener("mozfullscreenchange",()=>S(this));window.addEventListener("fullscreenerror",c=>T(this,c));window.addEventListener("webkitfullscreenerror",c=>T(this,c));window.addEventListener("mozfullscreenerror",c=>T(this,c));if(b.ma())if(window.visualViewport){let c=
Infinity;window.visualViewport.addEventListener("resize",()=>{const e=window.visualViewport.height;e>c&&(document.scrollingElement.scrollTop=0);c=e})}else window.addEventListener("focusout",()=>{{const f=document.activeElement;if(f){var c=f.tagName.toLowerCase();var e=new Set("email number password search tel text url".split(" "));c="textarea"===c?!0:"input"===c?e.has(f.type.toLowerCase()||"text"):O(f)}else c=!1}c||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=c=>{"entered-fullscreen"===
c?(K.Ma(!0),S(this)):"exited-fullscreen"===c?(K.Ma(!1),S(this)):console.warn("Unknown wrapper message: ",c)};this.ya=new Set;this.Fb=new WeakSet;this.Db=!1}Da(){window.addEventListener("focus",()=>{l(this,"window-focus",null,M)});window.addEventListener("blur",()=>{try{var a=window.parent&&window.parent.document.hasFocus()}catch(d){a=!1}l(this,"window-blur",{parentHasFocus:a},M);this.V=0});window.addEventListener("focusin",a=>{a=a.target;(va.has(a.tagName.toLowerCase())||O(a))&&l(this,"keyboard-blur",
null,M)});window.addEventListener("keydown",a=>Ha(this,"keydown",a));window.addEventListener("keyup",a=>Ha(this,"keyup",a));window.addEventListener("dblclick",a=>U(this,"dblclick",a,L));window.addEventListener("wheel",a=>{this.l||l(this,"wheel",{clientX:a.clientX,clientY:a.clientY+this.o,pageX:a.pageX,pageY:a.pageY+this.o,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},L)});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",a=>{V(a);
W(this,"pointerdown",a)}),this.i.v&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.W=new self.gb(()=>{W(this,"pointermove",this.G);this.G=null}),this.W.Qa=!0,window.addEventListener("pointerrawupdate",a=>{this.G&&(this.ga+=this.G.movementX||0,this.ha+=this.G.movementY||0);this.G=a;a=this.W;if(-1===a.K){var d=Date.now(),c=d-a.ea,e=a.Cb;c>=e&&a.Qa?(a.ea=d,a.R=!0,a.Pa(),a.R=!1):a.K=self.setTimeout(a.Hb,Math.max(e-c,4))}})):window.addEventListener("pointermove",a=>W(this,"pointermove",
a)),window.addEventListener("pointerup",a=>W(this,"pointerup",a)),window.addEventListener("pointercancel",a=>W(this,"pointercancel",a))):(window.addEventListener("mousedown",a=>{V(a);X(this,"pointerdown",a)}),window.addEventListener("mousemove",a=>X(this,"pointermove",a)),window.addEventListener("mouseup",a=>X(this,"pointerup",a)),window.addEventListener("touchstart",a=>{V(a);Y(this,"pointerdown",a)}),window.addEventListener("touchmove",a=>Y(this,"pointermove",a)),window.addEventListener("touchend",
a=>Y(this,"pointerup",a)),window.addEventListener("touchcancel",a=>Y(this,"pointercancel",a)));const b=()=>this.qa();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0);this.i.ab()&&!this.i.Fa()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{Z(this,this.s(),
navigator.virtualKeyboard.boundingRect.height)}))}A(){return this.i.A()}s(){return this.i.s()}qa(){var b=[...this.ya];this.ya.clear();if(!this.Db)for(const a of b)(b=a.play())&&b.catch(()=>{this.Fb.has(a)||this.ya.add(a)})}});"use strict";
async function ha(b){if(b.Bb)throw Error("already initialised");b.Bb=!0;var a=b.C.pa(("playable-ad"===b.C.g?b.C.I:"")+"dispatchworker.js");b.sa=await b.C.la(a,b.O,{name:"DispatchWorker"});a=new MessageChannel;b.ua=a.port1;b.sa.postMessage({type:"_init","in-port":a.port2},[a.port2]);b.za=await ka(b)}function ia(b){return[b.ua,b.za]}
async function ka(b){const a=b.Wa.length;var d=b.C.pa(("playable-ad"===b.C.g?b.C.I:"")+"jobworker.js");d=await b.C.la(d,b.O,{name:"JobWorker"+a});const c=new MessageChannel,e=new MessageChannel;b.sa.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]);d.postMessage({type:"init",number:a,"dispatch-port":c.port2,"output-port":e.port2},[c.port2,e.port2]);b.Wa.push(d);return e.port1}
self.eb=class{constructor(b){this.C=b;this.O=b.m;this.O="preview"===b.g?this.O+"workers/":this.O+b.I;this.Eb=Math.min(navigator.hardwareConcurrency||2,16);this.sa=null;this.Wa=[];this.za=this.ua=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.aa({Sb:!0,Tb:"workermain.js",M:["scripts/c3runtime.js"],ia:[],Ba:"",Pb:"scripts/",Ca:[],Ya:"html5"}));"use strict";
self.aa.ja(class extends self.${constructor(b){super(b,"mouse");r(this,[["cursor",a=>{document.documentElement.style.cursor=a}],["request-pointer-lock",()=>{this.i.j.requestPointerLock()}],["release-pointer-lock",()=>{document.exitPointerLock()}]]);document.addEventListener("pointerlockchange",()=>{l(this,"pointer-lock-change",{"has-pointer-lock":!!document.pointerLockElement})});document.addEventListener("pointerlockerror",()=>{l(this,"pointer-lock-error",{"has-pointer-lock":!!document.pointerLockElement})})}});
"use strict";async function La(b,a){a=a.type;let d=!0;0===a?d=await Ma():1===a&&(d=await Na());l(b,"permission-result",{type:a,result:d})}async function Ma(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(b){return console.warn("[Touch] Failed to request orientation permission: ",b),!1}}
async function Na(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(b){return console.warn("[Touch] Failed to request motion permission: ",b),!1}}self.aa.ja(class extends self.${constructor(b){super(b,"touch");q(this,"request-permission",a=>La(this,a))}});
