!function(e){function t(t){for(var n,r,s=t[0],o=t[1],a=0,l=[];a<s.length;a++)r=s[a],i[r]&&l.push(i[r][0]),i[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(d&&d(t);l.length;)l.shift()()}var n={},i={0:0};var r={};var s={2:function(){return{"./ball_wasm":{__wbg_sqrt_6ac1ec864938feb9:function(e){return n[1].exports.__wbg_sqrt_6ac1ec864938feb9(e)},__wbg_random_918d3291fe65513c:function(){return n[1].exports.__wbg_random_918d3291fe65513c()},__widl_f_begin_path_CanvasRenderingContext2D:function(e){return n[1].exports.__widl_f_begin_path_CanvasRenderingContext2D(e)},__widl_f_fill_CanvasRenderingContext2D:function(e){return n[1].exports.__widl_f_fill_CanvasRenderingContext2D(e)},__widl_f_set_fill_style_CanvasRenderingContext2D:function(e,t){return n[1].exports.__widl_f_set_fill_style_CanvasRenderingContext2D(e,t)},__widl_f_arc_CanvasRenderingContext2D:function(e,t,i,r,s,o,a){return n[1].exports.__widl_f_arc_CanvasRenderingContext2D(e,t,i,r,s,o,a)},__widl_f_close_path_CanvasRenderingContext2D:function(e){return n[1].exports.__widl_f_close_path_CanvasRenderingContext2D(e)},__wbindgen_number_get:function(e,t){return n[1].exports.__wbindgen_number_get(e,t)},__wbindgen_string_get:function(e,t){return n[1].exports.__wbindgen_string_get(e,t)},__wbindgen_boolean_get:function(e){return n[1].exports.__wbindgen_boolean_get(e)},__wbindgen_is_null:function(e){return n[1].exports.__wbindgen_is_null(e)},__wbindgen_is_undefined:function(e){return n[1].exports.__wbindgen_is_undefined(e)},__wbindgen_is_symbol:function(e){return n[1].exports.__wbindgen_is_symbol(e)},__wbindgen_throw:function(e,t){return n[1].exports.__wbindgen_throw(e,t)}}}}};function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,r){n=i[e]=[t,r]});t.push(n[2]=a);var l,c=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=function(e){return o.p+""+e+".bundle.js"}(e),l=function(t){d.onerror=d.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+s+")");o.type=r,o.request=s,n[1](o)}i[e]=void 0}};var u=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,c.appendChild(d)}return({1:[2]}[e]||[]).forEach(function(e){var n=r[e];if(n)t.push(n);else{var i,a=s[e](),l=fetch(o.p+""+{2:"5a93ce8919e709429075"}[e]+".module.wasm");if(a instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)i=Promise.all([WebAssembly.compileStreaming(l),a]).then(function(e){return WebAssembly.instantiate(e[0],e[1])});else if("function"==typeof WebAssembly.instantiateStreaming)i=WebAssembly.instantiateStreaming(l,a);else{i=l.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,a)})}t.push(r[e]=i.then(function(t){return o.w[e]=(t.instance||t).exports}))}}),Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e},o.w={};var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var d=l;o(o.s=0)}([function(e,t,n){"use strict";n.r(t);const i=300;function r(){const e=[],t={width:window.innerWidth,height:window.innerHeight,mode:"wasm-compute-js-render-canvas",track:function(n){if("function"!=typeof n)throw new Error("Must be a function that will be called on window resize to update width / height");n(t),e.push(n)}},n=function(e,t){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>e.apply(this,i),t)}}(()=>{t.width=window.innerWidth,t.height=window.innerHeight,e.forEach(e=>{e(t)})},i);return window.addEventListener("resize",n,!1),{cleanup:()=>{window.removeEventListener("resize",n)},stage:t}}function s(e){const t=document.getElementById("root"),n=document.createElement("p"),i=document.createElement("button");i.innerText="SHUFFLE";const r=document.createElement("p");r.append(i);const s=function(){const e=document.createElement("div");return e.className="wasm-compute-wasm-render-html wasm-compute-js-render-html js-compute-js-render-html",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.zIndex=-1,e}(),o=function(){const e=document.createElement("canvas");return e.className="wasm-compute-wasm-render-canvas wasm-compute-js-render-canvas js-compute-js-render-canvas",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.zIndex=-1,e}();e.track(({width:e,height:t})=>{o.width=e,o.height=t}),e.track(({width:e,height:t})=>{s.style.width=`${e}px`,s.style.height=`${t}px`});const a=function(e=[],t){const n=e.map(e=>{const n=document.createElement("input");n.name="render-mode",n.type="radio",n.value=e.value,n.id=e.value,n.checked=t.mode===e.value,n.onchange=(e=>{[...document.getElementsByClassName(t.mode)].forEach(e=>e.style.display="none"),t.mode=e.target.value,[...document.getElementsByClassName(t.mode)].forEach(e=>e.style.display="block")});const i=document.createElement("label");i.innerText=e.label,i.htmlFor=e.value;const r=document.createElement("li");return r.appendChild(n),r.appendChild(i),r}),i=document.createElement("ul");n.forEach(e=>i.appendChild(e)),i.style.listStyle="none",i.style.paddingLeft="20px";const r=document.createElement("p");r.innerText="Choose an implementation between JavaScript and Rust/WASM:";const s=document.createElement("div");return s.appendChild(r),s.appendChild(i),s}([{value:"wasm-compute-wasm-render-canvas",label:"compute by WASM - render by WASM into canvas (iteration still in JS)"},{value:"wasm-compute-wasm-render-html",label:"compute by WASM - render by WASM into html (iteration still in JS)"},{value:"wasm-compute-js-render-canvas",label:"compute by WASM - render by JS into canvas"},{value:"wasm-compute-js-render-html",label:"compute by WASM - render by JS into html"},{value:"js-compute-js-render-canvas",label:"compute by JS - render by JS into canvas"},{value:"js-compute-js-render-html",label:"compute by JS - render by JS into html"}],e);return t.appendChild(a),t.appendChild(n),t.appendChild(r),t.appendChild(o),t.appendChild(s),{rootNode:t,infosNode:n,shuffleButton:i,canvasRenderNode:o,canvasCtx:o.getContext("2d"),htmlRenderNode:s}}class o{constructor(e,t){this.x=e,this.y=t}get_length(){return Math.sqrt(this.x*this.x+this.y*this.y)}dot(e){return this.x*e.x+this.y*e.y}normalize(){return new o(this.x/this.get_length(),this.y/this.get_length())}scale(e){return new o(this.x*e,this.y*e)}}var a=o;var l=class{constructor(e,t,n,i,r,s,o,a,l){this.x=e,this.y=t,this.velocity_x=n,this.velocity_y=i,this.radius=r,this.mass=s,this.gravity=o,this.elasticity=a,this.friction=l}step(){this.x=this.x+this.gravity*this.velocity_x,this.y=this.y+this.gravity*this.velocity_y,this.velocity_x=this.friction*this.velocity_x,this.velocity_y=this.friction*this.velocity_y}manageStageBorderCollision(e,t){this.x-this.radius<0&&(this.velocity_x=-this.velocity_x*this.elasticity,this.x=this.radius),this.x+this.radius>e&&(this.velocity_x=-this.velocity_x*this.elasticity,this.x=e-this.radius),this.y-this.radius<0&&(this.velocity_y=-this.velocity_y*this.elasticity,this.y=this.radius),this.y+this.radius>t&&(this.velocity_y=-this.velocity_y*this.elasticity,this.y=t-this.radius)}checkBallCollision(e){const t=this.x-e.x,n=this.y-e.y,i=this.radius+e.radius;return t*t+n*n<=i*i}resolveBallCollision(e){const t=this.get_vector_2d(e),n=t.get_length(),i=t.scale((this.radius+e.radius-n)/n),r=1/this.mass,s=1/e.mass,o=new a(this.velocity_x-e.velocity_x,this.velocity_y-e.velocity_y),l=i.normalize(),c=o.dot(l);if(c>0)return;const d=-1.85*c/(r+s),u=l.scale(d),h=u.scale(r),m=u.scale(s);this.velocity_x=(this.velocity_x+h.x)*this.elasticity,this.velocity_y=(this.velocity_y+h.y)*this.elasticity,e.velocity_x=(e.velocity_x-m.x)*this.elasticity,e.velocity_y=(e.velocity_y-m.y)*this.elasticity}setRandomPositionAndSpeedInBounds(e,t){this.x=this.random()*e,this.y=this.random()*t,this.velocity_x=10*this.random(),this.velocity_y=10*this.random()}get_vector_2d(e){return new a(this.x-e.x,this.y-e.y)}random(){return Math.random()}};const c=1.3,d=1,u=.98,h=1;n.e(1).then(n.bind(null,1)).then(e=>{function t({x:t=0,y:n=0,velocityX:i=0,velocityY:r=0,radius:s=15,mass:o=c,gravity:a=d,elasticity:m=u,friction:_=h,wasm:p=!0}={}){return new(p?e.Ball:l)(t,n,i,r,s,o,a,m,_)}function n(e){e.forEach(e=>e.step()),e.forEach(e=>e.manageStageBorderCollision(m.width,m.height));for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++)!0===e[t].checkBallCollision(e[n])&&e[t].resolveBallCollision(e[n])}function i(e,t,n="#900000"){t.fillStyle=n,t.beginPath(),t.arc(e.x,e.y,e.radius,0,2*Math.PI,!0),t.closePath(),t.fill()}function o(e,t="#900000"){return`<div class="ball" style="position:absolute;top:${e.y-e.radius}px;left:${e.x-e.radius}px;background:${t};width:${2*e.radius}px;height:${2*e.radius}px;border-radius:${e.radius}px"></div>`}const a={"wasm-compute-wasm-render-canvas":function(){p.clearRect(0,0,m.width,m.height),g.wasm.forEach(t=>e.drawWasmBallToCtx(t,p,"purple"))},"wasm-compute-wasm-render-html":function(){y.innerHTML=g.wasm.map(t=>e.drawWasmBallToHtml(t,"green")).join("")},"wasm-compute-js-render-canvas":function(){p.clearRect(0,0,m.width,m.height),g.wasm.forEach(e=>i(e,p,"blue"))},"wasm-compute-js-render-html":function(){y.innerHTML=g.wasm.map(e=>o(e,"darkblue")).join("")},"js-compute-js-render-canvas":function(){p.clearRect(0,0,m.width,m.height),g.js.forEach(e=>i(e,p,"red"))},"js-compute-js-render-html":function(){y.innerHTML=g.js.map(e=>o(e,"darkred")).join("")}};const{stage:m}=r(),{infosNode:_,canvasCtx:p,htmlRenderNode:y,shuffleButton:f}=s(m);let v=0,w=0;const g={wasm:Array.from(Array(10),e=>t()),js:Array.from(Array(10),e=>t({wasm:!1}))},b=()=>{g.wasm.forEach(e=>{e.setRandomPositionAndSpeedInBounds(m.width,m.height)}),g.js.forEach(e=>{e.setRandomPositionAndSpeedInBounds(m.width,m.height)})};f.onclick=b,b(),function e(t){requestAnimationFrame(e),v=t-w,n(g.wasm),n(g.js),_.innerText=`Delta: ${v.toFixed(4)}ms - FrameRate: ${Math.round(1e3/v)} FPS`,a[m.mode](),w=t}()}).catch(e=>{const t=document.createElement("p");t.innerText="An error occured:";const n=document.createElement("pre");n.innerText=e.message;const i=document.getElementById("root");i.appendChild(t),i.appendChild(n)})}]);
//# sourceMappingURL=bundle.js.map