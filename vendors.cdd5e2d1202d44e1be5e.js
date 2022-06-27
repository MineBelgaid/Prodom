"use strict";(self.webpackChunkprodom_documentation=self.webpackChunkprodom_documentation||[]).push([[216],{352:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);r&&i[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}},445:t=>{function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}t.exports=function(t){var e,r,i=(r=4,function(t){if(Array.isArray(t))return t}(e=t)||function(t,n){var e=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=e){var r,i,o=[],s=!0,u=!1;try{for(e=e.call(t);!(s=(r=e.next()).done)&&(o.push(r.value),!n||o.length!==n);s=!0);}catch(t){u=!0,i=t}finally{try{s||null==e.return||e.return()}finally{if(u)throw i}}return o}}(e,r)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[1],s=i[3];if(!s)return o;if("function"==typeof btoa){var u=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),h="/*# ".concat(c," */"),a=s.sources.map((function(t){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(t," */")}));return[o].concat(a).concat([h]).join("\n")}return[o].join("\n")}},725:(t,n,e)=>{e.d(n,{O3:()=>r,cM:()=>s,sY:()=>i});var r=function(t){return t},i=function t(n,e,r,i){var s=i;if(void 0!==r&&void 0===s&&(s=Date.now()),"function"==typeof n)return t(n(e),e,r,s);if(void 0!==n.component||void 0!==n.asyncComponent){if(u(e.oldArgs,n.args))return e.dom;var c=e.oldArgs||[];if(e.oldArgs=[].concat(n.args),void 0!==n.component)return t(null==n.component?void 0:n.component.apply(n,n.args.concat(c)),e,r,s);if(void 0!==n.asyncComponent)return n.asyncComponent.apply(n,n.args.concat(c)).then((function(n){return t(n,e,r,s)})).then(n.resolve),void 0===e.dom?void 0!==n.placeHolder?t(n.placeHolder,e,r,s):t({tag:"input",type:"hidden"},e,r,s):e.dom}if(!0!==n.freeze){var h=n.tag,a=n.children,l=n.virtual,f=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(n,["tag","children","virtual"]);if(null!=e){e.oldProps=e.oldProps||{},e.children=e.children||[];var d=(null==a?void 0:a.filter((function(t){return t})))||[],w=[],p=[];d.forEach((function(t,n){Array.isArray(t)?(w.push(t[1]),void 0===e.children[t[1]]&&(e.children[t[1]]={}),p.push({child:t[0],context:e.children[t[1]]})):(w.push(n),void 0===e.children[n]&&(e.children[n]={}),p.push({child:t,context:e.children[n]}))}));var v,m=0,y=[],A=s,g=!1;!function n(){for(;m<p.length&&(void 0===A||Date.now()-A<r);){var i=p[m];y[m]=t(i.child,i.context,r,s),g&&void 0!==e.dom&&e.dom.append(y[m]),m++}m<p.length&&(g=!0,A=Date.now(),setTimeout(n))}(),e.oldKeys=e.oldKeys||w,Object.prototype.hasOwnProperty.call(n,"init")?v=""+n.init:(n.init=function(){return document.createElement(h)},v=""+h);var b=n.init;if(void 0===e.dom||e.init!==v){if(e.init=v,e.dom){var N=b();e.dom.replaceWith(N),e.dom=N,e.oldProps={}}else e.dom=b();var Y;y.length>0&&(Y=e.dom).append.apply(Y,y.filter((function(t){return void 0!==t})))}else{var E=d.map((function(t,n){return Array.isArray(t)?t[1]:n}));if(!u(E,e.oldKeys)){e.oldKeys=e.oldKeys.filter((function(t){var n,r;return!((E.indexOf(t)>=0?E.indexOf(t):E.indexOf(parseInt(t)))<0&&(null==(n=e.children[t])||null==(r=n.dom)||null==r.remove||r.remove(),e.children[t]=void 0,1))})),E.forEach((function(t,n){var r,i;(e.oldKeys.indexOf(t)>=0?e.oldKeys.indexOf(t):e.oldKeys.indexOf(parseInt(t)))<0&&(null!=(r=e.children[t])&&r.virtual||o(null==e?void 0:e.dom,null==(i=e.children[t])?void 0:i.dom,n),e.oldKeys.splice(n,0,t))}));var C=0,K=E.reduce((function(t,n,r){var i=e.oldKeys.indexOf(n)>=0?e.oldKeys.indexOf(n):e.oldKeys.indexOf(parseInt(n)),o=r-i||0;return o>0&&C++,0!==o&&t.push({diff:o,current:n,newIndex:r,oldIndex:i}),t}),[]),L=K.length-C;C>L?K.sort((function(t,n){return t.newIndex-n.newIndex})):K.sort((function(t,n){return n.newIndex-t.newIndex})),K.forEach((function(t){var n,r;e.oldKeys[t.newIndex]!==t.current&&(e.oldKeys.splice(e.oldKeys.indexOf(t.current),1),null!=(n=e.children[t.current])&&n.virtual||o(null==e?void 0:e.dom,null==(r=e.children[t.current])?void 0:r.dom,t.newIndex),e.oldKeys.splice(t.newIndex,0,t.current))}))}}if(Object.keys(e.oldProps).forEach((function(t){if(Object.prototype.hasOwnProperty.call(f,t)){var n=e.oldProps[t];"object"==typeof n&&null!==n&&Object.keys(n).forEach((function(n){Object.prototype.hasOwnProperty.call(f[t],n)&&!1!==f[t][n]||("setAttribute"===t?e.dom.setAttribute(n,""):e.dom[t][n]="",delete e.oldProps[t][n])}))}else e.dom[t]="",delete e.oldProps[t]})),Object.keys(f).forEach((function(t){var n=f[t];Array.isArray(n)&&(n=n.filter(Boolean).join(" ")),"object"==typeof n&&null!==n?(void 0===e.oldProps[t]&&(e.oldProps[t]={}),Object.keys(n).forEach((function(r){e.oldProps[t][r]!==n[r]&&(e.oldProps[t][r]=n[r],"setAttribute"===t?e.dom.setAttribute(r,n[r]):e.dom[t][r]=n[r])}))):e.oldProps[t]!==n&&(e.dom[t]=n,e.oldProps[t]=n)})),!l)return e.dom;e.virtual=!0}else console.error("A context has not been provided")}},o=function(t,n,e){void 0!==n&&(e+1>=(null==t?void 0:t.children.length)?null==t||t.appendChild(n):null==t||t.insertBefore(n,null==t?void 0:t.children[e]))};function s(t,n,e,r){return function(){for(var o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];return function(o){return{args:s,component:function(){for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];var h=void 0!==o.store?o.store:void 0!==e?e:{};void 0===o.store&&(o.store=h),o.ticket=o.ticket||0;var a={},l=void 0!==o.actions?o.actions:n(h,a);void 0===o.actions&&(o.actions=l,void 0!==l.init&&l.init());var f={};return Object.keys(l).forEach((function(n){a[n]=function(){return Promise.resolve(l[n].apply(l,arguments))},f[n]=function(){return Promise.resolve(l[n].apply(l,arguments)).then((function(){return new Promise((function(n,e){o.ticket=o.ticket+1;var s=o.ticket;setTimeout((function(){s===o.ticket?n(i(t.apply(void 0,[o.store,f].concat(u||[])),o,r)):e("Rendering was abondoned in favor of another")}))}))}))}})),t.apply(void 0,[o.store,f].concat(u||[]))}}}}}function u(t,n){if(void 0===t)return!1;if(void 0===n)return!1;if(t===n)return!0;if(null==t||null==n)return!1;if(t.length!==n.length)return!1;for(var e=0;e<t.length;++e)if(t[e]!==n[e])return!1;return!0}},701:(t,n,e)=>{var r,i=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),o=[];function s(t){for(var n=-1,e=0;e<o.length;e++)if(o[e].identifier===t){n=e;break}return n}function u(t,n){for(var e={},r=[],i=0;i<t.length;i++){var u=t[i],c=n.base?u[0]+n.base:u[0],h=e[c]||0,a="".concat(c," ").concat(h);e[c]=h+1;var l=s(a),f={css:u[1],media:u[2],sourceMap:u[3]};-1!==l?(o[l].references++,o[l].updater(f)):o.push({identifier:a,updater:p(f,n),references:1}),r.push(a)}return r}function c(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var s=i(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var h,a=(h=[],function(t,n){return h[t]=n,h.filter(Boolean).join("\n")});function l(t,n,e,r){var i=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=a(n,i);else{var o=document.createTextNode(i),s=t.childNodes;s[n]&&t.removeChild(s[n]),s.length?t.insertBefore(o,s[n]):t.appendChild(o)}}function f(t,n,e){var r=e.css,i=e.media,o=e.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,w=0;function p(t,n){var e,r,i;if(n.singleton){var o=w++;e=d||(d=c(n)),r=l.bind(null,e,o,!1),i=l.bind(null,e,o,!0)}else e=c(n),r=f.bind(null,e,n),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else i()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var e=u(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var i=s(e[r]);o[i].references--}for(var c=u(t,n),h=0;h<e.length;h++){var a=s(e[h]);0===o[a].references&&(o[a].updater(),o.splice(a,1))}e=c}}}},911:(t,n,e)=>{e.d(n,{Z:()=>st});const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function i(t,n,e,r){let i,o,s;const u=n||[0],c=(e=e||0)>>>3,h=-1===r?3:0;for(i=0;i<t.length;i+=1)s=i+c,o=s>>>2,u.length<=o&&u.push(0),u[o]|=t[i]<<8*(h+r*(s%4));return{value:u,binLen:8*t.length+e}}function o(t,n,e){switch(n){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(t){case"HEX":return function(t,n,r){return function(t,n,e,r){let i,o,s,u;if(0!=t.length%2)throw new Error("String of HEX type must be in byte increments");const c=n||[0],h=(e=e||0)>>>3,a=-1===r?3:0;for(i=0;i<t.length;i+=2){if(o=parseInt(t.substr(i,2),16),isNaN(o))throw new Error("String of HEX type contains invalid characters");for(u=(i>>>1)+h,s=u>>>2;c.length<=s;)c.push(0);c[s]|=o<<8*(a+r*(u%4))}return{value:c,binLen:4*t.length+e}}(t,n,r,e)};case"TEXT":return function(t,r,i){return function(t,n,e,r,i){let o,s,u,c,h,a,l,f,d=0;const w=e||[0],p=(r=r||0)>>>3;if("UTF8"===n)for(l=-1===i?3:0,u=0;u<t.length;u+=1)for(o=t.charCodeAt(u),s=[],128>o?s.push(o):2048>o?(s.push(192|o>>>6),s.push(128|63&o)):55296>o||57344<=o?s.push(224|o>>>12,128|o>>>6&63,128|63&o):(u+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(u)),s.push(240|o>>>18,128|o>>>12&63,128|o>>>6&63,128|63&o)),c=0;c<s.length;c+=1){for(a=d+p,h=a>>>2;w.length<=h;)w.push(0);w[h]|=s[c]<<8*(l+i*(a%4)),d+=1}else for(l=-1===i?2:0,f="UTF16LE"===n&&1!==i||"UTF16LE"!==n&&1===i,u=0;u<t.length;u+=1){for(o=t.charCodeAt(u),!0===f&&(c=255&o,o=c<<8|o>>>8),a=d+p,h=a>>>2;w.length<=h;)w.push(0);w[h]|=o<<8*(l+i*(a%4)),d+=2}return{value:w,binLen:8*d+r}}(t,n,r,i,e)};case"B64":return function(t,n,i){return function(t,n,e,i){let o,s,u,c,h,a,l,f=0;const d=n||[0],w=(e=e||0)>>>3,p=-1===i?3:0,v=t.indexOf("=");if(-1===t.search(/^[a-zA-Z0-9=+/]+$/))throw new Error("Invalid character in base-64 string");if(t=t.replace(/=/g,""),-1!==v&&v<t.length)throw new Error("Invalid '=' found in base-64 string");for(s=0;s<t.length;s+=4){for(h=t.substr(s,4),c=0,u=0;u<h.length;u+=1)o=r.indexOf(h.charAt(u)),c|=o<<18-6*u;for(u=0;u<h.length-1;u+=1){for(l=f+w,a=l>>>2;d.length<=a;)d.push(0);d[a]|=(c>>>16-8*u&255)<<8*(p+i*(l%4)),f+=1}}return{value:d,binLen:8*f+e}}(t,n,i,e)};case"BYTES":return function(t,n,r){return function(t,n,e,r){let i,o,s,u;const c=n||[0],h=(e=e||0)>>>3,a=-1===r?3:0;for(o=0;o<t.length;o+=1)i=t.charCodeAt(o),u=o+h,s=u>>>2,c.length<=s&&c.push(0),c[s]|=i<<8*(a+r*(u%4));return{value:c,binLen:8*t.length+e}}(t,n,r,e)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch(t){throw new Error("ARRAYBUFFER not supported by this environment")}return function(t,n,r){return function(t,n,e,r){return i(new Uint8Array(t),n,e,r)}(t,n,r,e)};case"UINT8ARRAY":try{new Uint8Array(0)}catch(t){throw new Error("UINT8ARRAY not supported by this environment")}return function(t,n,r){return i(t,n,r,e)};default:throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function s(t,n,e,i){switch(t){case"HEX":return function(t){return function(t,n,e,r){let i,o,s="";const u=n/8,c=-1===e?3:0;for(i=0;i<u;i+=1)o=t[i>>>2]>>>8*(c+e*(i%4)),s+="0123456789abcdef".charAt(o>>>4&15)+"0123456789abcdef".charAt(15&o);return r.outputUpper?s.toUpperCase():s}(t,n,e,i)};case"B64":return function(t){return function(t,n,e,i){let o,s,u,c,h,a="";const l=n/8,f=-1===e?3:0;for(o=0;o<l;o+=3)for(c=o+1<l?t[o+1>>>2]:0,h=o+2<l?t[o+2>>>2]:0,u=(t[o>>>2]>>>8*(f+e*(o%4))&255)<<16|(c>>>8*(f+e*((o+1)%4))&255)<<8|h>>>8*(f+e*((o+2)%4))&255,s=0;s<4;s+=1)a+=8*o+6*s<=n?r.charAt(u>>>6*(3-s)&63):i.b64Pad;return a}(t,n,e,i)};case"BYTES":return function(t){return function(t,n,e){let r,i,o="";const s=n/8,u=-1===e?3:0;for(r=0;r<s;r+=1)i=t[r>>>2]>>>8*(u+e*(r%4))&255,o+=String.fromCharCode(i);return o}(t,n,e)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch(t){throw new Error("ARRAYBUFFER not supported by this environment")}return function(t){return function(t,n,e){let r;const i=n/8,o=new ArrayBuffer(i),s=new Uint8Array(o),u=-1===e?3:0;for(r=0;r<i;r+=1)s[r]=t[r>>>2]>>>8*(u+e*(r%4))&255;return o}(t,n,e)};case"UINT8ARRAY":try{new Uint8Array(0)}catch(t){throw new Error("UINT8ARRAY not supported by this environment")}return function(t){return function(t,n,e){let r;const i=n/8,o=-1===e?3:0,s=new Uint8Array(i);for(r=0;r<i;r+=1)s[r]=t[r>>>2]>>>8*(o+e*(r%4))&255;return s}(t,n,e)};default:throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}const u=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],c=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],a="Chosen SHA variant is not supported";function l(t,n){let e,r;const i=t.binLen>>>3,o=n.binLen>>>3,s=i<<3,u=4-i<<3;if(i%4!=0){for(e=0;e<o;e+=4)r=i+e>>>2,t.value[r]|=n.value[e>>>2]<<s,t.value.push(0),t.value[r+1]|=n.value[e>>>2]>>>u;return(t.value.length<<2)-4>=o+i&&t.value.pop(),{value:t.value,binLen:t.binLen+n.binLen}}return{value:t.value.concat(n.value),binLen:t.binLen+n.binLen}}function f(t){const n={outputUpper:!1,b64Pad:"=",outputLen:-1},e=t||{},r="Output length must be a multiple of 8";if(n.outputUpper=e.outputUpper||!1,e.b64Pad&&(n.b64Pad=e.b64Pad),e.outputLen){if(e.outputLen%8!=0)throw new Error(r);n.outputLen=e.outputLen}else if(e.shakeLen){if(e.shakeLen%8!=0)throw new Error(r);n.outputLen=e.shakeLen}if("boolean"!=typeof n.outputUpper)throw new Error("Invalid outputUpper formatting option");if("string"!=typeof n.b64Pad)throw new Error("Invalid b64Pad formatting option");return n}function d(t,n,e,r){const i=t+" must include a value and format";if(!n){if(!r)throw new Error(i);return r}if(void 0===n.value||!n.format)throw new Error(i);return o(n.format,n.encoding||"UTF8",e)(n.value)}class w{constructor(t,n,e){const r=e||{};if(this.t=n,this.i=r.encoding||"UTF8",this.numRounds=r.numRounds||1,isNaN(this.numRounds)||this.numRounds!==parseInt(this.numRounds,10)||1>this.numRounds)throw new Error("numRounds must a integer >= 1");this.s=t,this.o=[],this.h=0,this.u=!1,this.l=0,this.A=!1,this.H=[],this.S=[]}update(t){let n,e=0;const r=this.p>>>5,i=this.m(t,this.o,this.h),o=i.binLen,s=i.value,u=o>>>5;for(n=0;n<u;n+=r)e+this.p<=o&&(this.C=this.R(s.slice(n,n+r),this.C),e+=this.p);this.l+=e,this.o=s.slice(e>>>5),this.h=o%this.p,this.u=!0}getHash(t,n){let e,r,i=this.U;const o=f(n);if(this.v){if(-1===o.outputLen)throw new Error("Output length must be specified in options");i=o.outputLen}const u=s(t,i,this.K,o);if(this.A&&this.T)return u(this.T(o));for(r=this.F(this.o.slice(),this.h,this.l,this.g(this.C),i),e=1;e<this.numRounds;e+=1)this.v&&i%32!=0&&(r[r.length-1]&=16777215>>>24-i%32),r=this.F(r,i,0,this.B(this.s),i);return u(r)}setHMACKey(t,n,e){if(!this.L)throw new Error("Variant does not support HMAC");if(this.u)throw new Error("Cannot set MAC key after calling update");const r=o(n,(e||{}).encoding||"UTF8",this.K);this.M(r(t))}M(t){const n=this.p>>>3,e=n/4-1;let r;if(1!==this.numRounds)throw new Error("Cannot set numRounds with MAC");if(this.A)throw new Error("MAC key already set");for(n<t.binLen/8&&(t.value=this.F(t.value,t.binLen,0,this.B(this.s),this.U));t.value.length<=e;)t.value.push(0);for(r=0;r<=e;r+=1)this.H[r]=909522486^t.value[r],this.S[r]=1549556828^t.value[r];this.C=this.R(this.H,this.C),this.l=this.p,this.A=!0}getHMAC(t,n){const e=f(n);return s(t,this.U,this.K,e)(this.k())}k(){let t;if(!this.A)throw new Error("Cannot call getHMAC without first setting MAC key");const n=this.F(this.o.slice(),this.h,this.l,this.g(this.C),this.U);return t=this.R(this.S,this.B(this.s)),t=this.F(n,this.U,this.p,t,this.U),t}}function p(t,n){return t<<n|t>>>32-n}function v(t,n){return t>>>n|t<<32-n}function m(t,n){return t>>>n}function y(t,n,e){return t^n^e}function A(t,n,e){return t&n^~t&e}function g(t,n,e){return t&n^t&e^n&e}function b(t){return v(t,2)^v(t,13)^v(t,22)}function N(t,n){const e=(65535&t)+(65535&n);return(65535&(t>>>16)+(n>>>16)+(e>>>16))<<16|65535&e}function Y(t,n,e,r){const i=(65535&t)+(65535&n)+(65535&e)+(65535&r);return(65535&(t>>>16)+(n>>>16)+(e>>>16)+(r>>>16)+(i>>>16))<<16|65535&i}function E(t,n,e,r,i){const o=(65535&t)+(65535&n)+(65535&e)+(65535&r)+(65535&i);return(65535&(t>>>16)+(n>>>16)+(e>>>16)+(r>>>16)+(i>>>16)+(o>>>16))<<16|65535&o}function C(t){return v(t,7)^v(t,18)^m(t,3)}function K(t){return v(t,6)^v(t,11)^v(t,25)}function L(t){return[1732584193,4023233417,2562383102,271733878,3285377520]}function U(t,n){let e,r,i,o,s,u,c;const h=[];for(e=n[0],r=n[1],i=n[2],o=n[3],s=n[4],c=0;c<80;c+=1)h[c]=c<16?t[c]:p(h[c-3]^h[c-8]^h[c-14]^h[c-16],1),u=c<20?E(p(e,5),A(r,i,o),s,1518500249,h[c]):c<40?E(p(e,5),y(r,i,o),s,1859775393,h[c]):c<60?E(p(e,5),g(r,i,o),s,2400959708,h[c]):E(p(e,5),y(r,i,o),s,3395469782,h[c]),s=o,o=i,i=p(r,30),r=e,e=u;return n[0]=N(e,n[0]),n[1]=N(r,n[1]),n[2]=N(i,n[2]),n[3]=N(o,n[3]),n[4]=N(s,n[4]),n}function H(t,n,e,r){let i;const o=15+(n+65>>>9<<4),s=n+e;for(;t.length<=o;)t.push(0);for(t[n>>>5]|=128<<24-n%32,t[o]=4294967295&s,t[o-1]=s/4294967296|0,i=0;i<t.length;i+=16)r=U(t.slice(i,i+16),r);return r}class S extends w{constructor(t,n,e){if("SHA-1"!==t)throw new Error(a);super(t,n,e);const r=e||{};this.L=!0,this.T=this.k,this.K=-1,this.m=o(this.t,this.i,this.K),this.R=U,this.g=function(t){return t.slice()},this.B=L,this.F=H,this.C=[1732584193,4023233417,2562383102,271733878,3285377520],this.p=512,this.U=160,this.v=!1,r.hmacKey&&this.M(d("hmacKey",r.hmacKey,this.K))}}function R(t){let n;return n="SHA-224"==t?c.slice():h.slice(),n}function T(t,n){let e,r,i,o,s,c,h,a,l,f,d;const w=[];for(e=n[0],r=n[1],i=n[2],o=n[3],s=n[4],c=n[5],h=n[6],a=n[7],d=0;d<64;d+=1)w[d]=d<16?t[d]:Y(v(p=w[d-2],17)^v(p,19)^m(p,10),w[d-7],C(w[d-15]),w[d-16]),l=E(a,K(s),A(s,c,h),u[d],w[d]),f=N(b(e),g(e,r,i)),a=h,h=c,c=s,s=N(o,l),o=i,i=r,r=e,e=N(l,f);var p;return n[0]=N(e,n[0]),n[1]=N(r,n[1]),n[2]=N(i,n[2]),n[3]=N(o,n[3]),n[4]=N(s,n[4]),n[5]=N(c,n[5]),n[6]=N(h,n[6]),n[7]=N(a,n[7]),n}class k extends w{constructor(t,n,e){if("SHA-224"!==t&&"SHA-256"!==t)throw new Error(a);super(t,n,e);const r=e||{};this.T=this.k,this.L=!0,this.K=-1,this.m=o(this.t,this.i,this.K),this.R=T,this.g=function(t){return t.slice()},this.B=R,this.F=function(n,e,r,i){return function(t,n,e,r,i){let o,s;const u=15+(n+65>>>9<<4),c=n+e;for(;t.length<=u;)t.push(0);for(t[n>>>5]|=128<<24-n%32,t[u]=4294967295&c,t[u-1]=c/4294967296|0,o=0;o<t.length;o+=16)r=T(t.slice(o,o+16),r);return s="SHA-224"===i?[r[0],r[1],r[2],r[3],r[4],r[5],r[6]]:r,s}(n,e,r,i,t)},this.C=R(t),this.p=512,this.U="SHA-224"===t?224:256,this.v=!1,r.hmacKey&&this.M(d("hmacKey",r.hmacKey,this.K))}}class O{constructor(t,n){this.Y=t,this.N=n}}function x(t,n){let e;return n>32?(e=64-n,new O(t.N<<n|t.Y>>>e,t.Y<<n|t.N>>>e)):0!==n?(e=32-n,new O(t.Y<<n|t.N>>>e,t.N<<n|t.Y>>>e)):t}function F(t,n){let e;return n<32?(e=32-n,new O(t.Y>>>n|t.N<<e,t.N>>>n|t.Y<<e)):(e=64-n,new O(t.N>>>n|t.Y<<e,t.Y>>>n|t.N<<e))}function I(t,n){return new O(t.Y>>>n,t.N>>>n|t.Y<<32-n)}function M(t,n,e){return new O(t.Y&n.Y^t.Y&e.Y^n.Y&e.Y,t.N&n.N^t.N&e.N^n.N&e.N)}function B(t){const n=F(t,28),e=F(t,34),r=F(t,39);return new O(n.Y^e.Y^r.Y,n.N^e.N^r.N)}function P(t,n){let e,r;e=(65535&t.N)+(65535&n.N),r=(t.N>>>16)+(n.N>>>16)+(e>>>16);const i=(65535&r)<<16|65535&e;return e=(65535&t.Y)+(65535&n.Y)+(r>>>16),r=(t.Y>>>16)+(n.Y>>>16)+(e>>>16),new O((65535&r)<<16|65535&e,i)}function j(t,n,e,r){let i,o;i=(65535&t.N)+(65535&n.N)+(65535&e.N)+(65535&r.N),o=(t.N>>>16)+(n.N>>>16)+(e.N>>>16)+(r.N>>>16)+(i>>>16);const s=(65535&o)<<16|65535&i;return i=(65535&t.Y)+(65535&n.Y)+(65535&e.Y)+(65535&r.Y)+(o>>>16),o=(t.Y>>>16)+(n.Y>>>16)+(e.Y>>>16)+(r.Y>>>16)+(i>>>16),new O((65535&o)<<16|65535&i,s)}function X(t,n,e,r,i){let o,s;o=(65535&t.N)+(65535&n.N)+(65535&e.N)+(65535&r.N)+(65535&i.N),s=(t.N>>>16)+(n.N>>>16)+(e.N>>>16)+(r.N>>>16)+(i.N>>>16)+(o>>>16);const u=(65535&s)<<16|65535&o;return o=(65535&t.Y)+(65535&n.Y)+(65535&e.Y)+(65535&r.Y)+(65535&i.Y)+(s>>>16),s=(t.Y>>>16)+(n.Y>>>16)+(e.Y>>>16)+(r.Y>>>16)+(i.Y>>>16)+(o>>>16),new O((65535&s)<<16|65535&o,u)}function z(t,n){return new O(t.Y^n.Y,t.N^n.N)}function _(t){const n=F(t,19),e=F(t,61),r=I(t,6);return new O(n.Y^e.Y^r.Y,n.N^e.N^r.N)}function D(t){const n=F(t,1),e=F(t,8),r=I(t,7);return new O(n.Y^e.Y^r.Y,n.N^e.N^r.N)}function J(t){const n=F(t,14),e=F(t,18),r=F(t,41);return new O(n.Y^e.Y^r.Y,n.N^e.N^r.N)}const Z=[new O(u[0],3609767458),new O(u[1],602891725),new O(u[2],3964484399),new O(u[3],2173295548),new O(u[4],4081628472),new O(u[5],3053834265),new O(u[6],2937671579),new O(u[7],3664609560),new O(u[8],2734883394),new O(u[9],1164996542),new O(u[10],1323610764),new O(u[11],3590304994),new O(u[12],4068182383),new O(u[13],991336113),new O(u[14],633803317),new O(u[15],3479774868),new O(u[16],2666613458),new O(u[17],944711139),new O(u[18],2341262773),new O(u[19],2007800933),new O(u[20],1495990901),new O(u[21],1856431235),new O(u[22],3175218132),new O(u[23],2198950837),new O(u[24],3999719339),new O(u[25],766784016),new O(u[26],2566594879),new O(u[27],3203337956),new O(u[28],1034457026),new O(u[29],2466948901),new O(u[30],3758326383),new O(u[31],168717936),new O(u[32],1188179964),new O(u[33],1546045734),new O(u[34],1522805485),new O(u[35],2643833823),new O(u[36],2343527390),new O(u[37],1014477480),new O(u[38],1206759142),new O(u[39],344077627),new O(u[40],1290863460),new O(u[41],3158454273),new O(u[42],3505952657),new O(u[43],106217008),new O(u[44],3606008344),new O(u[45],1432725776),new O(u[46],1467031594),new O(u[47],851169720),new O(u[48],3100823752),new O(u[49],1363258195),new O(u[50],3750685593),new O(u[51],3785050280),new O(u[52],3318307427),new O(u[53],3812723403),new O(u[54],2003034995),new O(u[55],3602036899),new O(u[56],1575990012),new O(u[57],1125592928),new O(u[58],2716904306),new O(u[59],442776044),new O(u[60],593698344),new O(u[61],3733110249),new O(u[62],2999351573),new O(u[63],3815920427),new O(3391569614,3928383900),new O(3515267271,566280711),new O(3940187606,3454069534),new O(4118630271,4000239992),new O(116418474,1914138554),new O(174292421,2731055270),new O(289380356,3203993006),new O(460393269,320620315),new O(685471733,587496836),new O(852142971,1086792851),new O(1017036298,365543100),new O(1126000580,2618297676),new O(1288033470,3409855158),new O(1501505948,4234509866),new O(1607167915,987167468),new O(1816402316,1246189591)];function q(t){return"SHA-384"===t?[new O(3418070365,c[0]),new O(1654270250,c[1]),new O(2438529370,c[2]),new O(355462360,c[3]),new O(1731405415,c[4]),new O(41048885895,c[5]),new O(3675008525,c[6]),new O(1203062813,c[7])]:[new O(h[0],4089235720),new O(h[1],2227873595),new O(h[2],4271175723),new O(h[3],1595750129),new O(h[4],2917565137),new O(h[5],725511199),new O(h[6],4215389547),new O(h[7],327033209)]}function V(t,n){let e,r,i,o,s,u,c,h,a,l,f,d;const w=[];for(e=n[0],r=n[1],i=n[2],o=n[3],s=n[4],u=n[5],c=n[6],h=n[7],f=0;f<80;f+=1)f<16?(d=2*f,w[f]=new O(t[d],t[d+1])):w[f]=j(_(w[f-2]),w[f-7],D(w[f-15]),w[f-16]),a=X(h,J(s),(v=u,m=c,new O((p=s).Y&v.Y^~p.Y&m.Y,p.N&v.N^~p.N&m.N)),Z[f],w[f]),l=P(B(e),M(e,r,i)),h=c,c=u,u=s,s=P(o,a),o=i,i=r,r=e,e=P(a,l);var p,v,m;return n[0]=P(e,n[0]),n[1]=P(r,n[1]),n[2]=P(i,n[2]),n[3]=P(o,n[3]),n[4]=P(s,n[4]),n[5]=P(u,n[5]),n[6]=P(c,n[6]),n[7]=P(h,n[7]),n}class W extends w{constructor(t,n,e){if("SHA-384"!==t&&"SHA-512"!==t)throw new Error(a);super(t,n,e);const r=e||{};this.T=this.k,this.L=!0,this.K=-1,this.m=o(this.t,this.i,this.K),this.R=V,this.g=function(t){return t.slice()},this.B=q,this.F=function(n,e,r,i){return function(t,n,e,r,i){let o,s;const u=31+(n+129>>>10<<5),c=n+e;for(;t.length<=u;)t.push(0);for(t[n>>>5]|=128<<24-n%32,t[u]=4294967295&c,t[u-1]=c/4294967296|0,o=0;o<t.length;o+=32)r=V(t.slice(o,o+32),r);return s="SHA-384"===i?[r[0].Y,r[0].N,r[1].Y,r[1].N,r[2].Y,r[2].N,r[3].Y,r[3].N,r[4].Y,r[4].N,r[5].Y,r[5].N]:[r[0].Y,r[0].N,r[1].Y,r[1].N,r[2].Y,r[2].N,r[3].Y,r[3].N,r[4].Y,r[4].N,r[5].Y,r[5].N,r[6].Y,r[6].N,r[7].Y,r[7].N],s}(n,e,r,i,t)},this.C=q(t),this.p=1024,this.U="SHA-384"===t?384:512,this.v=!1,r.hmacKey&&this.M(d("hmacKey",r.hmacKey,this.K))}}const $=[new O(0,1),new O(0,32898),new O(2147483648,32906),new O(2147483648,2147516416),new O(0,32907),new O(0,2147483649),new O(2147483648,2147516545),new O(2147483648,32777),new O(0,138),new O(0,136),new O(0,2147516425),new O(0,2147483658),new O(0,2147516555),new O(2147483648,139),new O(2147483648,32905),new O(2147483648,32771),new O(2147483648,32770),new O(2147483648,128),new O(0,32778),new O(2147483648,2147483658),new O(2147483648,2147516545),new O(2147483648,32896),new O(0,2147483649),new O(2147483648,2147516424)],G=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];function Q(t){let n;const e=[];for(n=0;n<5;n+=1)e[n]=[new O(0,0),new O(0,0),new O(0,0),new O(0,0),new O(0,0)];return e}function tt(t){let n;const e=[];for(n=0;n<5;n+=1)e[n]=t[n].slice();return e}function nt(t,n){let e,r,i,o;const s=[],u=[];if(null!==t)for(r=0;r<t.length;r+=2)n[(r>>>1)%5][(r>>>1)/5|0]=z(n[(r>>>1)%5][(r>>>1)/5|0],new O(t[r+1],t[r]));for(e=0;e<24;e+=1){for(o=Q(),r=0;r<5;r+=1)s[r]=(c=n[r][0],h=n[r][1],a=n[r][2],l=n[r][3],f=n[r][4],new O(c.Y^h.Y^a.Y^l.Y^f.Y,c.N^h.N^a.N^l.N^f.N));for(r=0;r<5;r+=1)u[r]=z(s[(r+4)%5],x(s[(r+1)%5],1));for(r=0;r<5;r+=1)for(i=0;i<5;i+=1)n[r][i]=z(n[r][i],u[r]);for(r=0;r<5;r+=1)for(i=0;i<5;i+=1)o[i][(2*r+3*i)%5]=x(n[r][i],G[r][i]);for(r=0;r<5;r+=1)for(i=0;i<5;i+=1)n[r][i]=z(o[r][i],new O(~o[(r+1)%5][i].Y&o[(r+2)%5][i].Y,~o[(r+1)%5][i].N&o[(r+2)%5][i].N));n[0][0]=z(n[0][0],$[e])}var c,h,a,l,f;return n}function et(t){let n,e,r=0;const i=[0,0],o=[4294967295&t,t/4294967296&2097151];for(n=6;n>=0;n--)e=o[n>>2]>>>8*n&255,0===e&&0===r||(i[r+1>>2]|=e<<8*(r+1),r+=1);return r=0!==r?r:1,i[0]|=r,{value:r+1>4?i:[i[0]],binLen:8+8*r}}function rt(t){return l(et(t.binLen),t)}function it(t,n){let e,r=et(n);r=l(r,t);const i=n>>>2,o=(i-r.value.length%i)%i;for(e=0;e<o;e++)r.value.push(0);return r.value}class ot extends w{constructor(t,n,e){let r=6,i=0;super(t,n,e);const s=e||{};if(1!==this.numRounds){if(s.kmacKey||s.hmacKey)throw new Error("Cannot set numRounds with MAC");if("CSHAKE128"===this.s||"CSHAKE256"===this.s)throw new Error("Cannot set numRounds for CSHAKE variants")}switch(this.K=1,this.m=o(this.t,this.i,this.K),this.R=nt,this.g=tt,this.B=Q,this.C=Q(),this.v=!1,t){case"SHA3-224":this.p=i=1152,this.U=224,this.L=!0,this.T=this.k;break;case"SHA3-256":this.p=i=1088,this.U=256,this.L=!0,this.T=this.k;break;case"SHA3-384":this.p=i=832,this.U=384,this.L=!0,this.T=this.k;break;case"SHA3-512":this.p=i=576,this.U=512,this.L=!0,this.T=this.k;break;case"SHAKE128":r=31,this.p=i=1344,this.U=-1,this.v=!0,this.L=!1,this.T=null;break;case"SHAKE256":r=31,this.p=i=1088,this.U=-1,this.v=!0,this.L=!1,this.T=null;break;case"KMAC128":r=4,this.p=i=1344,this.I(e),this.U=-1,this.v=!0,this.L=!1,this.T=this.X;break;case"KMAC256":r=4,this.p=i=1088,this.I(e),this.U=-1,this.v=!0,this.L=!1,this.T=this.X;break;case"CSHAKE128":this.p=i=1344,r=this._(e),this.U=-1,this.v=!0,this.L=!1,this.T=null;break;case"CSHAKE256":this.p=i=1088,r=this._(e),this.U=-1,this.v=!0,this.L=!1,this.T=null;break;default:throw new Error(a)}this.F=function(t,n,e,o,s){return function(t,n,e,r,i,o,s){let u,c,h=0;const a=[],l=i>>>5,f=n>>>5;for(u=0;u<f&&n>=i;u+=l)r=nt(t.slice(u,u+l),r),n-=i;for(t=t.slice(u),n%=i;t.length<l;)t.push(0);for(u=n>>>3,t[u>>2]^=o<<u%4*8,t[l-1]^=2147483648,r=nt(t,r);32*a.length<s&&(c=r[h%5][h/5|0],a.push(c.N),!(32*a.length>=s));)a.push(c.Y),h+=1,0==64*h%i&&(nt(null,r),h=0);return a}(t,n,0,o,i,r,s)},s.hmacKey&&this.M(d("hmacKey",s.hmacKey,this.K))}_(t,n){const e=function(t){const n=t||{};return{funcName:d("funcName",n.funcName,1,{value:[],binLen:0}),customization:d("Customization",n.customization,1,{value:[],binLen:0})}}(t||{});n&&(e.funcName=n);const r=l(rt(e.funcName),rt(e.customization));if(0!==e.customization.binLen||0!==e.funcName.binLen){const t=it(r,this.p>>>3);for(let n=0;n<t.length;n+=this.p>>>5)this.C=this.R(t.slice(n,n+(this.p>>>5)),this.C),this.l+=this.p;return 4}return 31}I(t){const n=function(t){const n=t||{};return{kmacKey:d("kmacKey",n.kmacKey,1),funcName:{value:[1128353099],binLen:32},customization:d("Customization",n.customization,1,{value:[],binLen:0})}}(t||{});this._(t,n.funcName);const e=it(rt(n.kmacKey),this.p>>>3);for(let t=0;t<e.length;t+=this.p>>>5)this.C=this.R(e.slice(t,t+(this.p>>>5)),this.C),this.l+=this.p;this.A=!0}X(t){const n=l({value:this.o.slice(),binLen:this.h},function(t){let n,e,r=0;const i=[0,0],o=[4294967295&t,t/4294967296&2097151];for(n=6;n>=0;n--)e=o[n>>2]>>>8*n&255,0===e&&0===r||(i[r>>2]|=e<<8*r,r+=1);return r=0!==r?r:1,i[r>>2]|=r<<8*r,{value:r+1>4?i:[i[0]],binLen:8+8*r}}(t.outputLen));return this.F(n.value,n.binLen,this.l,this.g(this.C),t.outputLen)}}const st=class{constructor(t,n,e){if("SHA-1"==t)this.O=new S(t,n,e);else if("SHA-224"==t||"SHA-256"==t)this.O=new k(t,n,e);else if("SHA-384"==t||"SHA-512"==t)this.O=new W(t,n,e);else{if("SHA3-224"!=t&&"SHA3-256"!=t&&"SHA3-384"!=t&&"SHA3-512"!=t&&"SHAKE128"!=t&&"SHAKE256"!=t&&"CSHAKE128"!=t&&"CSHAKE256"!=t&&"KMAC128"!=t&&"KMAC256"!=t)throw new Error(a);this.O=new ot(t,n,e)}}update(t){this.O.update(t)}getHash(t,n){return this.O.getHash(t,n)}setHMACKey(t,n,e){this.O.setHMACKey(t,n,e)}getHMAC(t,n){return this.O.getHMAC(t,n)}}}}]);
//# sourceMappingURL=vendors.cdd5e2d1202d44e1be5e.js.map