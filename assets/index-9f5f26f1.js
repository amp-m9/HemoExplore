(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const em=(r,e)=>r===e,pu={equals:em};let kf=Xf;const Vi=1,aa=2,zf={owned:null,cleanups:null,context:null,owner:null};var on=null;let Ga=null,mt=null,Ot=null,ui=null,Ta=0;function tm(r,e){const t=mt,n=on,i=r.length===0,s=i?zf:{owned:null,cleanups:null,context:null,owner:e===void 0?n:e},o=i?r:()=>r(()=>mo(()=>ba(s)));on=s,mt=null;try{return go(o,!0)}finally{mt=t,on=n}}function Hf(r,e){e=e?Object.assign({},pu,e):pu;const t={value:r,observers:null,observerSlots:null,comparator:e.equals||void 0},n=i=>(typeof i=="function"&&(i=i(t.value)),Vf(t,i));return[im.bind(t),n]}function vr(r,e,t){const n=Wf(r,e,!1,Vi);Ea(n)}function Gf(r,e,t){kf=om;const n=Wf(r,e,!1,Vi);(!t||!t.render)&&(n.user=!0),ui?ui.push(n):Ea(n)}function mo(r){if(mt===null)return r();const e=mt;mt=null;try{return r()}finally{mt=e}}function nm(r){Gf(()=>mo(r))}function im(){if(this.sources&&this.state)if(this.state===Vi)Ea(this);else{const r=Ot;Ot=null,go(()=>ca(this),!1),Ot=r}if(mt){const r=this.observers?this.observers.length:0;mt.sources?(mt.sources.push(this),mt.sourceSlots.push(r)):(mt.sources=[this],mt.sourceSlots=[r]),this.observers?(this.observers.push(mt),this.observerSlots.push(mt.sources.length-1)):(this.observers=[mt],this.observerSlots=[mt.sources.length-1])}return this.value}function Vf(r,e,t){let n=r.value;return(!r.comparator||!r.comparator(n,e))&&(r.value=e,r.observers&&r.observers.length&&go(()=>{for(let i=0;i<r.observers.length;i+=1){const s=r.observers[i],o=Ga&&Ga.running;o&&Ga.disposed.has(s),(o?!s.tState:!s.state)&&(s.pure?Ot.push(s):ui.push(s),s.observers&&jf(s)),o||(s.state=Vi)}if(Ot.length>1e6)throw Ot=[],new Error},!1)),e}function Ea(r){if(!r.fn)return;ba(r);const e=on,t=mt,n=Ta;mt=on=r,rm(r,r.value,n),mt=t,on=e}function rm(r,e,t){let n;try{n=r.fn(e)}catch(i){return r.pure&&(r.state=Vi,r.owned&&r.owned.forEach(ba),r.owned=null),r.updatedAt=t+1,qf(i)}(!r.updatedAt||r.updatedAt<=t)&&(r.updatedAt!=null&&"observers"in r?Vf(r,n):r.value=n,r.updatedAt=t)}function Wf(r,e,t,n=Vi,i){const s={fn:r,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:on,context:null,pure:t};return on===null||on!==zf&&(on.owned?on.owned.push(s):on.owned=[s]),s}function la(r){if(r.state===0)return;if(r.state===aa)return ca(r);if(r.suspense&&mo(r.suspense.inFallback))return r.suspense.effects.push(r);const e=[r];for(;(r=r.owner)&&(!r.updatedAt||r.updatedAt<Ta);)r.state&&e.push(r);for(let t=e.length-1;t>=0;t--)if(r=e[t],r.state===Vi)Ea(r);else if(r.state===aa){const n=Ot;Ot=null,go(()=>ca(r,e[0]),!1),Ot=n}}function go(r,e){if(Ot)return r();let t=!1;e||(Ot=[]),ui?t=!0:ui=[],Ta++;try{const n=r();return sm(t),n}catch(n){t||(ui=null),Ot=null,qf(n)}}function sm(r){if(Ot&&(Xf(Ot),Ot=null),r)return;const e=ui;ui=null,e.length&&go(()=>kf(e),!1)}function Xf(r){for(let e=0;e<r.length;e++)la(r[e])}function om(r){let e,t=0;for(e=0;e<r.length;e++){const n=r[e];n.user?r[t++]=n:la(n)}for(e=0;e<t;e++)la(r[e])}function ca(r,e){r.state=0;for(let t=0;t<r.sources.length;t+=1){const n=r.sources[t];if(n.sources){const i=n.state;i===Vi?n!==e&&(!n.updatedAt||n.updatedAt<Ta)&&la(n):i===aa&&ca(n,e)}}}function jf(r){for(let e=0;e<r.observers.length;e+=1){const t=r.observers[e];t.state||(t.state=aa,t.pure?Ot.push(t):ui.push(t),t.observers&&jf(t))}}function ba(r){let e;if(r.sources)for(;r.sources.length;){const t=r.sources.pop(),n=r.sourceSlots.pop(),i=t.observers;if(i&&i.length){const s=i.pop(),o=t.observerSlots.pop();n<i.length&&(s.sourceSlots[o]=n,i[n]=s,t.observerSlots[n]=o)}}if(r.owned){for(e=r.owned.length-1;e>=0;e--)ba(r.owned[e]);r.owned=null}if(r.cleanups){for(e=r.cleanups.length-1;e>=0;e--)r.cleanups[e]();r.cleanups=null}r.state=0,r.context=null}function am(r){return r instanceof Error?r:new Error(typeof r=="string"?r:"Unknown error",{cause:r})}function qf(r,e=on){throw am(r)}function rr(r,e){return mo(()=>r(e||{}))}function lm(r,e,t){let n=t.length,i=e.length,s=n,o=0,a=0,l=e[i-1].nextSibling,c=null;for(;o<i||a<s;){if(e[o]===t[a]){o++,a++;continue}for(;e[i-1]===t[s-1];)i--,s--;if(i===o){const u=s<n?a?t[a-1].nextSibling:t[s-a]:l;for(;a<s;)r.insertBefore(t[a++],u)}else if(s===a)for(;o<i;)(!c||!c.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[s-1]&&t[a]===e[i-1]){const u=e[--i].nextSibling;r.insertBefore(t[a++],e[o++].nextSibling),r.insertBefore(t[--s],u),e[i]=t[s]}else{if(!c){c=new Map;let h=a;for(;h<s;)c.set(t[h],h++)}const u=c.get(e[o]);if(u!=null)if(a<u&&u<s){let h=o,f=1,d;for(;++h<i&&h<s&&!((d=c.get(e[h]))==null||d!==u+f);)f++;if(f>u-a){const _=e[o];for(;a<u;)r.insertBefore(t[a++],_)}else r.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const mu="_$DX_DELEGATE";function cm(r,e,t,n={}){let i;return tm(s=>{i=s,e===document?r():oi(e,r(),e.firstChild?null:void 0,t)},n.owner),()=>{i(),e.textContent=""}}function wa(r,e,t){let n;const i=()=>{const o=document.createElement("template");return o.innerHTML=r,t?o.content.firstChild.firstChild:o.content.firstChild},s=e?()=>mo(()=>document.importNode(n||(n=i()),!0)):()=>(n||(n=i())).cloneNode(!0);return s.cloneNode=s,s}function Ac(r,e=window.document){const t=e[mu]||(e[mu]=new Set);for(let n=0,i=r.length;n<i;n++){const s=r[n];t.has(s)||(t.add(s),e.addEventListener(s,hm))}}function Yf(r,e,t){t==null?r.removeAttribute(e):r.setAttribute(e,t)}function bt(r,e){e==null?r.removeAttribute("class"):r.className=e}function Hl(r,e,t,n){if(n)Array.isArray(t)?(r[`$$${e}`]=t[0],r[`$$${e}Data`]=t[1]):r[`$$${e}`]=t;else if(Array.isArray(t)){const i=t[0];r.addEventListener(e,t[0]=s=>i.call(r,t[1],s))}else r.addEventListener(e,t)}function um(r,e,t){if(!e)return t?Yf(r,"style"):e;const n=r.style;if(typeof e=="string")return n.cssText=e;typeof t=="string"&&(n.cssText=t=void 0),t||(t={}),e||(e={});let i,s;for(s in t)e[s]==null&&n.removeProperty(s),delete t[s];for(s in e)i=e[s],i!==t[s]&&(n.setProperty(s,i),t[s]=i);return t}function oi(r,e,t,n){if(t!==void 0&&!n&&(n=[]),typeof e!="function")return ua(r,e,n,t);vr(i=>ua(r,e(),i,t),n)}function hm(r){const e=`$$${r.type}`;let t=r.composedPath&&r.composedPath()[0]||r.target;for(r.target!==t&&Object.defineProperty(r,"target",{configurable:!0,value:t}),Object.defineProperty(r,"currentTarget",{configurable:!0,get(){return t||document}});t;){const n=t[e];if(n&&!t.disabled){const i=t[`${e}Data`];if(i!==void 0?n.call(t,i,r):n.call(t,r),r.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function ua(r,e,t,n,i){for(;typeof t=="function";)t=t();if(e===t)return t;const s=typeof e,o=n!==void 0;if(r=o&&t[0]&&t[0].parentNode||r,s==="string"||s==="number")if(s==="number"&&(e=e.toString()),o){let a=t[0];a&&a.nodeType===3?a.data=e:a=document.createTextNode(e),t=wr(r,t,n,a)}else t!==""&&typeof t=="string"?t=r.firstChild.data=e:t=r.textContent=e;else if(e==null||s==="boolean")t=wr(r,t,n);else{if(s==="function")return vr(()=>{let a=e();for(;typeof a=="function";)a=a();t=ua(r,a,t,n)}),()=>t;if(Array.isArray(e)){const a=[],l=t&&Array.isArray(t);if(Gl(a,e,t,i))return vr(()=>t=ua(r,a,t,n,!0)),()=>t;if(a.length===0){if(t=wr(r,t,n),o)return t}else l?t.length===0?gu(r,a,n):lm(r,t,a):(t&&wr(r),gu(r,a));t=a}else if(e.nodeType){if(Array.isArray(t)){if(o)return t=wr(r,t,n,e);wr(r,t,null,e)}else t==null||t===""||!r.firstChild?r.appendChild(e):r.replaceChild(e,r.firstChild);t=e}else console.warn("Unrecognized value. Skipped inserting",e)}return t}function Gl(r,e,t,n){let i=!1;for(let s=0,o=e.length;s<o;s++){let a=e[s],l=t&&t[s],c;if(!(a==null||a===!0||a===!1))if((c=typeof a)=="object"&&a.nodeType)r.push(a);else if(Array.isArray(a))i=Gl(r,a,l)||i;else if(c==="function")if(n){for(;typeof a=="function";)a=a();i=Gl(r,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||i}else r.push(a),i=!0;else{const u=String(a);l&&l.nodeType===3&&l.data===u?r.push(l):r.push(document.createTextNode(u))}}return i}function gu(r,e,t=null){for(let n=0,i=e.length;n<i;n++)r.insertBefore(e[n],t)}function wr(r,e,t,n){if(t===void 0)return r.textContent="";const i=n||document.createTextNode("");if(e.length){let s=!1;for(let o=e.length-1;o>=0;o--){const a=e[o];if(i!==a){const l=a.parentNode===r;!s&&!o?l?r.replaceChild(i,a):r.insertBefore(i,t):l&&a.remove()}else s=!0}}else r.insertBefore(i,t);return[i]}const fm="_background_sjdob_25",dm="_inspectorUI_sjdob_32",pm="_backButton_sjdob_43",mm="_homeContainer_sjdob_56",gm="_homeBody_sjdob_69",_m="_homeTitle_sjdob_74",vm="_inspectorPaneWrapper_sjdob_136",xm="_inspectorPane_sjdob_136",ym="_objectGrid_sjdob_172",Am="_objectCard_sjdob_176",Mm="_imageWrapper_sjdob_183",Sm="_objectCardTitle_sjdob_188",Tm="_objectDataPane_sjdob_206",Em="_objectPaneStickyTop_sjdob_218",bm="_objectDataPanebackButton_sjdob_224",wm="_objectDataTitle_sjdob_228",Rm="_objectDataText_sjdob_232",rt={background:fm,inspectorUI:dm,backButton:pm,homeContainer:mm,homeBody:gm,homeTitle:_m,"flex-wrapper":"_flex-wrapper_sjdob_131",inspectorPaneWrapper:vm,inspectorPane:xm,objectGrid:ym,objectCard:Am,imageWrapper:Mm,objectCardTitle:Sm,objectDataPane:Tm,objectPaneStickyTop:Em,objectDataPanebackButton:bm,objectDataTitle:wm,objectDataText:Rm};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mc="154",Rr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cm=0,_u=1,Pm=2,Kf=1,Lm=2,ti=3,Hn=0,Ft=1,Kt=2,Ui=0,ts=1,vu=2,xu=3,yu=4,Dm=5,$r=100,Im=101,Um=102,Au=103,Mu=104,Nm=200,Om=201,Fm=202,Bm=203,$f=204,Zf=205,km=206,zm=207,Hm=208,Gm=209,Vm=210,Wm=0,Xm=1,jm=2,Vl=3,qm=4,Ym=5,Km=6,$m=7,Qf=0,Zm=1,Qm=2,hi=0,Jm=1,eg=2,tg=3,ng=4,ig=5,Jf=300,ls=301,cs=302,Wl=303,Xl=304,Ra=306,us=1e3,_n=1001,ha=1002,tt=1003,jl=1004,Jo=1005,Yt=1006,ed=1007,xr=1008,Ni=1009,rg=1010,sg=1011,Sc=1012,td=1013,Ri=1014,ai=1015,eo=1016,nd=1017,id=1018,ar=1020,og=1021,vn=1023,ag=1024,lg=1025,lr=1026,hs=1027,cg=1028,rd=1029,ug=1030,sd=1031,od=1033,Va=33776,Wa=33777,Xa=33778,ja=33779,Su=35840,Tu=35841,Eu=35842,bu=35843,hg=36196,wu=37492,Ru=37496,Cu=37808,Pu=37809,Lu=37810,Du=37811,Iu=37812,Uu=37813,Nu=37814,Ou=37815,Fu=37816,Bu=37817,ku=37818,zu=37819,Hu=37820,Gu=37821,qa=36492,fg=36283,Vu=36284,Wu=36285,Xu=36286,to=2300,fs=2301,Ya=2302,ju=2400,qu=2401,Yu=2402,dg=2500,pg=0,ad=1,ql=2,ld=3e3,cr=3001,mg=3200,gg=3201,Tc=0,_g=1,ur="",be="srgb",Gn="srgb-linear",cd="display-p3",Ka=7680,vg=519,xg=512,yg=513,Ag=514,Mg=515,Sg=516,Tg=517,Eg=518,bg=519,Yl=35044,Ku="300 es",Kl=1035,li=2e3,fa=2001;class Er{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $u=1234567;const Gs=Math.PI/180,ds=180/Math.PI;function Pn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[r&255]+Lt[r>>8&255]+Lt[r>>16&255]+Lt[r>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function Ec(r,e){return(r%e+e)%e}function wg(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Rg(r,e,t){return r!==e?(t-r)/(e-r):0}function Vs(r,e,t){return(1-t)*r+t*e}function Cg(r,e,t,n){return Vs(r,e,1-Math.exp(-t*n))}function Pg(r,e=1){return e-Math.abs(Ec(r,e*2)-e)}function Lg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Dg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ig(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ug(r,e){return r+Math.random()*(e-r)}function Ng(r){return r*(.5-Math.random())}function Og(r){r!==void 0&&($u=r);let e=$u+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fg(r){return r*Gs}function Bg(r){return r*ds}function $l(r){return(r&r-1)===0&&r!==0}function ud(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function da(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function kg(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ci(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ke(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const zg={DEG2RAD:Gs,RAD2DEG:ds,generateUUID:Pn,clamp:vt,euclideanModulo:Ec,mapLinear:wg,inverseLerp:Rg,lerp:Vs,damp:Cg,pingpong:Pg,smoothstep:Lg,smootherstep:Dg,randInt:Ig,randFloat:Ug,randFloatSpread:Ng,seededRandom:Og,degToRad:Fg,radToDeg:Bg,isPowerOfTwo:$l,ceilPowerOfTwo:ud,floorPowerOfTwo:da,setQuaternionFromProperEuler:kg,normalize:Ke,denormalize:ci};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,i,s,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],A=i[1],v=i[4],x=i[7],M=i[2],E=i[5],T=i[8];return s[0]=o*g+a*A+l*M,s[3]=o*m+a*v+l*E,s[6]=o*p+a*x+l*T,s[1]=c*g+u*A+h*M,s[4]=c*m+u*v+h*E,s[7]=c*p+u*x+h*T,s[2]=f*g+d*A+_*M,s[5]=f*m+d*v+_*E,s[8]=f*p+d*x+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($a.makeScale(e,t)),this}rotate(e){return this.premultiply($a.makeRotation(-e)),this}translate(e,t){return this.premultiply($a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new Oe;function hd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function no(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const Zu={};function Ws(r){r in Zu||(Zu[r]=!0,console.warn(r))}function ns(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Za(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Hg=new Oe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Gg=new Oe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Vg(r){return r.convertSRGBToLinear().applyMatrix3(Gg)}function Wg(r){return r.applyMatrix3(Hg).convertLinearToSRGB()}const Xg={[Gn]:r=>r,[be]:r=>r.convertSRGBToLinear(),[cd]:Vg},jg={[Gn]:r=>r,[be]:r=>r.convertLinearToSRGB(),[cd]:Wg},En={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Gn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Xg[e],i=jg[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Pr;class fd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pr===void 0&&(Pr=no("canvas")),Pr.width=e.width,Pr.height=e.height;const n=Pr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=no("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ns(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ns(t[n]/255)*255):t[n]=ns(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qg=0;class dd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Pn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Qa(i[o].image)):s.push(Qa(i[o]))}else s=Qa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Qa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yg=0;class Pt extends Er{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=_n,i=_n,s=Yt,o=xr,a=vn,l=Ni,c=Pt.DEFAULT_ANISOTROPY,u=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Pn(),this.name="",this.source=new dd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===cr?be:ur),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case us:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case us:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===be?cr:ld}set encoding(e){Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===cr?be:ur}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Jf;Pt.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,i=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(d+1)/2,M=(p+1)/2,E=(u+f)/4,T=(h+g)/4,L=(_+m)/4;return v>x&&v>M?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=E/n,s=T/n):x>M?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=L/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=T/s,i=L/s),this.set(n,i,s,t),this}let A=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(h-g)/A,this.z=(f-u)/A,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yr extends Er{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===cr?be:ur),this.texture=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Yt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pd extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kg extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=1-a;const p=l*f+c*d+u*_+h*g,A=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const M=Math.sqrt(v),E=Math.atan2(M,p*A);m=Math.sin(m*E)/M,a=Math.sin(a*E)/M}const x=a*A;if(l=l*m+f*x,c=c*m+d*x,u=u*m+_*x,h=h*m+g*x,m===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,h=l*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ja.copy(this).projectOnVector(e),this.sub(Ja)}reflect(e){return this.sub(Ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new C,Qu=new Vn;class _i{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox),Lr.applyMatrix4(e.matrixWorld),this.union(Lr);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Kn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Kn)}else i.boundingBox===null&&i.computeBoundingBox(),Lr.copy(i.boundingBox),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),To.subVectors(this.max,ws),Dr.subVectors(e.a,ws),Ir.subVectors(e.b,ws),Ur.subVectors(e.c,ws),xi.subVectors(Ir,Dr),yi.subVectors(Ur,Ir),Yi.subVectors(Dr,Ur);let t=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Yi.z,Yi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Yi.z,0,-Yi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Yi.y,Yi.x,0];return!el(t,Dr,Ir,Ur,To)||(t=[1,0,0,0,1,0,0,0,1],!el(t,Dr,Ir,Ur,To))?!1:(Eo.crossVectors(xi,yi),t=[Eo.x,Eo.y,Eo.z],el(t,Dr,Ir,Ur,To))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new C,new C,new C,new C,new C,new C,new C,new C],Kn=new C,Lr=new _i,Dr=new C,Ir=new C,Ur=new C,xi=new C,yi=new C,Yi=new C,ws=new C,To=new C,Eo=new C,Ki=new C;function el(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ki.fromArray(r,s);const a=i.x*Math.abs(Ki.x)+i.y*Math.abs(Ki.y)+i.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=n.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $g=new _i,Rs=new C,tl=new C;class Xn{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$g.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const t=Rs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Rs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(tl)),this.expandByPoint(Rs.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new C,nl=new C,bo=new C,Ai=new C,il=new C,wo=new C,rl=new C;class _o{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){nl.copy(e).add(t).multiplyScalar(.5),bo.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(nl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(bo),a=Ai.dot(this.direction),l=-Ai.dot(bo),c=Ai.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(nl).addScaledVector(bo,f),d}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),i=$n.dot($n)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,i,s){il.subVectors(t,e),wo.subVectors(n,e),rl.crossVectors(il,wo);let o=this.direction.dot(rl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(wo.crossVectors(Ai,wo));if(l<0)return null;const c=a*this.direction.dot(il.cross(Ai));if(c<0||l+c>o)return null;const u=-a*Ai.dot(rl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Nr.setFromMatrixColumn(e,0).length(),s=1/Nr.setFromMatrixColumn(e,1).length(),o=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zg,e,Qg)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Mi.crossVectors(n,nn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Mi.crossVectors(n,nn)),Mi.normalize(),Ro.crossVectors(nn,Mi),i[0]=Mi.x,i[4]=Ro.x,i[8]=nn.x,i[1]=Mi.y,i[5]=Ro.y,i[9]=nn.y,i[2]=Mi.z,i[6]=Ro.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],A=n[3],v=n[7],x=n[11],M=n[15],E=i[0],T=i[4],L=i[8],y=i[12],b=i[1],G=i[5],K=i[9],I=i[13],N=i[2],O=i[6],$=i[10],z=i[14],X=i[3],J=i[7],Z=i[11],k=i[15];return s[0]=o*E+a*b+l*N+c*X,s[4]=o*T+a*G+l*O+c*J,s[8]=o*L+a*K+l*$+c*Z,s[12]=o*y+a*I+l*z+c*k,s[1]=u*E+h*b+f*N+d*X,s[5]=u*T+h*G+f*O+d*J,s[9]=u*L+h*K+f*$+d*Z,s[13]=u*y+h*I+f*z+d*k,s[2]=_*E+g*b+m*N+p*X,s[6]=_*T+g*G+m*O+p*J,s[10]=_*L+g*K+m*$+p*Z,s[14]=_*y+g*I+m*z+p*k,s[3]=A*E+v*b+x*N+M*X,s[7]=A*T+v*G+x*O+M*J,s[11]=A*L+v*K+x*$+M*Z,s[15]=A*y+v*I+x*z+M*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],A=h*m*c-g*f*c+g*l*d-a*m*d-h*l*p+a*f*p,v=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,x=u*g*c-_*h*c+_*a*d-o*g*d-u*a*p+o*h*p,M=_*h*l-u*g*l-_*a*f+o*g*f+u*a*m-o*h*m,E=t*A+n*v+i*x+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=A*T,e[1]=(g*f*s-h*m*s-g*i*d+n*m*d+h*i*p-n*f*p)*T,e[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*T,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*T,e[4]=v*T,e[5]=(u*m*s-_*f*s+_*i*d-t*m*d-u*i*p+t*f*p)*T,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*p-t*l*p)*T,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*T,e[8]=x*T,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*p-t*h*p)*T,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*p+t*a*p)*T,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*T,e[12]=M*T,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*m+t*h*m)*T,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*T,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,m=o*h,p=a*h,A=l*c,v=l*u,x=l*h,M=n.x,E=n.y,T=n.z;return i[0]=(1-(g+p))*M,i[1]=(d+x)*M,i[2]=(_-v)*M,i[3]=0,i[4]=(d-x)*E,i[5]=(1-(f+p))*E,i[6]=(m+A)*E,i[7]=0,i[8]=(_+v)*T,i[9]=(m-A)*T,i[10]=(1-(f+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Nr.set(i[0],i[1],i[2]).length();const o=Nr.set(i[4],i[5],i[6]).length(),a=Nr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],bn.copy(this);const c=1/s,u=1/o,h=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,t.setFromRotationMatrix(bn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=li){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(a===li)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===fa)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=li){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let _,g;if(a===li)_=(o+s)*h,g=-2*h;else if(a===fa)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Nr=new C,bn=new De,Zg=new C(0,0,0),Qg=new C(1,1,1),Mi=new C,Ro=new C,nn=new C,Ju=new De,eh=new Vn;class Ca{constructor(e=0,t=0,n=0,i=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ju,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eh.setFromEuler(this),this.setFromQuaternion(eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class bc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jg=0;const th=new C,Or=new Vn,Zn=new De,Co=new C,Cs=new C,e_=new C,t_=new Vn,nh=new C(1,0,0),ih=new C(0,1,0),rh=new C(0,0,1),n_={type:"added"},sh={type:"removed"};class Qe extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const e=new C,t=new Ca,n=new Vn,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new Oe}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(nh,e)}rotateY(e){return this.rotateOnAxis(ih,e)}rotateZ(e){return this.rotateOnAxis(rh,e)}translateOnAxis(e,t){return th.copy(e).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nh,e)}translateY(e){return this.translateOnAxis(ih,e)}translateZ(e){return this.translateOnAxis(rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Co.copy(e):Co.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Cs,Co,this.up):Zn.lookAt(Co,Cs,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),Or.setFromRotationMatrix(Zn),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(n_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(sh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,e_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Qe.DEFAULT_UP=new C(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new C,Qn=new C,sl=new C,Jn=new C,Fr=new C,Br=new C,oh=new C,ol=new C,al=new C,ll=new C;let Po=!1;class Cn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wn.subVectors(e,t),i.cross(wn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){wn.subVectors(i,t),Qn.subVectors(n,t),sl.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(Qn),l=wn.dot(sl),c=Qn.dot(Qn),u=Qn.dot(sl),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Jn),Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,t,n,i,s,o,a,l){return Po===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Po=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Jn),l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l}static isFrontFacing(e,t,n,i){return wn.subVectors(n,t),Qn.subVectors(e,t),wn.cross(Qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),wn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Po===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Po=!0),Cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Fr.subVectors(i,n),Br.subVectors(s,n),ol.subVectors(e,n);const l=Fr.dot(ol),c=Br.dot(ol);if(l<=0&&c<=0)return t.copy(n);al.subVectors(e,i);const u=Fr.dot(al),h=Br.dot(al);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Fr,o);ll.subVectors(e,s);const d=Fr.dot(ll),_=Br.dot(ll);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Br,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return oh.subVectors(s,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(oh,a);const p=1/(m+g+f);return o=g*p,a=f*p,t.copy(n).addScaledVector(Fr,o).addScaledVector(Br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let i_=0;class Ln extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=ts,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$f,this.blendDst=Zf,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ka,this.stencilZFail=Ka,this.stencilZPass=Ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function cl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=be){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,En.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=En.workingColorSpace){return this.r=e,this.g=t,this.b=n,En.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=En.workingColorSpace){if(e=Ec(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=cl(o,s,e+1/3),this.g=cl(o,s,e),this.b=cl(o,s,e-1/3)}return En.toWorkingColorSpace(this,i),this}setStyle(e,t=be){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=be){const n=md[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=Za(e.r),this.g=Za(e.g),this.b=Za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=be){return En.fromWorkingColorSpace(Dt.copy(this),e),Math.round(vt(Dt.r*255,0,255))*65536+Math.round(vt(Dt.g*255,0,255))*256+Math.round(vt(Dt.b*255,0,255))}getHexString(e=be){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=En.workingColorSpace){En.fromWorkingColorSpace(Dt.copy(this),t);const n=Dt.r,i=Dt.g,s=Dt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=En.workingColorSpace){return En.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=be){En.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,i=Dt.b;return e!==be?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Rn),Rn.h+=e,Rn.s+=t,Rn.l+=n,this.setHSL(Rn.h,Rn.s,Rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(Lo);const n=Vs(Rn.h,Lo.h,t),i=Vs(Rn.s,Lo.s,t),s=Vs(Rn.l,Lo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Te;Te.NAMES=md;class Ci extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new C,Do=new he;class jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yl,this.updateRange={offset:0,count:-1},this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Do.fromBufferAttribute(this,t),Do.applyMatrix3(e),this.setXY(t,Do.x,Do.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class gd extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _d extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qt extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let r_=0;const dn=new De,ul=new Qe,kr=new C,rn=new _i,Ps=new _i,Et=new C;class fn extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hd(e)?_d:gd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Oe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return ul.lookAt(e),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(rn.min,Ps.min),rn.expandByPoint(Et),Et.addVectors(rn.max,Ps.max),rn.expandByPoint(Et)):(rn.expandByPoint(Ps.min),rn.expandByPoint(Ps.max))}rn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Et.fromBufferAttribute(a,c),l&&(kr.fromBufferAttribute(e,c),Et.add(kr)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new C,u[b]=new C;const h=new C,f=new C,d=new C,_=new he,g=new he,m=new he,p=new C,A=new C;function v(b,G,K){h.fromArray(i,b*3),f.fromArray(i,G*3),d.fromArray(i,K*3),_.fromArray(o,b*2),g.fromArray(o,G*2),m.fromArray(o,K*2),f.sub(h),d.sub(h),g.sub(_),m.sub(_);const I=1/(g.x*m.y-m.x*g.y);isFinite(I)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(I),A.copy(d).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(I),c[b].add(p),c[G].add(p),c[K].add(p),u[b].add(A),u[G].add(A),u[K].add(A))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let b=0,G=x.length;b<G;++b){const K=x[b],I=K.start,N=K.count;for(let O=I,$=I+N;O<$;O+=3)v(n[O+0],n[O+1],n[O+2])}const M=new C,E=new C,T=new C,L=new C;function y(b){T.fromArray(s,b*3),L.copy(T);const G=c[b];M.copy(G),M.sub(T.multiplyScalar(T.dot(G))).normalize(),E.crossVectors(L,G);const I=E.dot(u[b])<0?-1:1;l[b*4]=M.x,l[b*4+1]=M.y,l[b*4+2]=M.z,l[b*4+3]=I}for(let b=0,G=x.length;b<G;++b){const K=x[b],I=K.start,N=K.count;for(let O=I,$=I+N;O<$;O+=3)y(n[O+0]),y(n[O+1]),y(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new C,s=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new jt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ah=new De,$i=new _o,Io=new Xn,lh=new C,zr=new C,Hr=new C,Gr=new C,hl=new C,Uo=new C,No=new he,Oo=new he,Fo=new he,ch=new C,uh=new C,hh=new C,Bo=new C,ko=new C;class Xt extends Qe{constructor(e=new fn,t=new Ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Uo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(hl.fromBufferAttribute(h,e),o?Uo.addScaledVector(hl,u):Uo.addScaledVector(hl.sub(t),u))}t.add(Uo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(s),$i.copy(e.ray).recast(e.near),!(Io.containsPoint($i.origin)===!1&&($i.intersectSphere(Io,lh)===null||$i.origin.distanceToSquared(lh)>(e.far-e.near)**2))&&(ah.copy(s).invert(),$i.copy(e.ray).applyMatrix4(ah),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],A=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=A,M=v;x<M;x+=3){const E=a.getX(x),T=a.getX(x+1),L=a.getX(x+2);i=zo(this,p,e,n,c,u,h,E,T,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const A=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);i=zo(this,o,e,n,c,u,h,A,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],A=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=A,M=v;x<M;x+=3){const E=x,T=x+1,L=x+2;i=zo(this,p,e,n,c,u,h,E,T,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const A=m,v=m+1,x=m+2;i=zo(this,o,e,n,c,u,h,A,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function s_(r,e,t,n,i,s,o,a){let l;if(e.side===Ft?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Hn,a),l===null)return null;ko.copy(a),ko.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ko);return c<t.near||c>t.far?null:{distance:c,point:ko.clone(),object:r}}function zo(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,zr),r.getVertexPosition(l,Hr),r.getVertexPosition(c,Gr);const u=s_(r,e,t,n,zr,Hr,Gr,Bo);if(u){i&&(No.fromBufferAttribute(i,a),Oo.fromBufferAttribute(i,l),Fo.fromBufferAttribute(i,c),u.uv=Cn.getInterpolation(Bo,zr,Hr,Gr,No,Oo,Fo,new he)),s&&(No.fromBufferAttribute(s,a),Oo.fromBufferAttribute(s,l),Fo.fromBufferAttribute(s,c),u.uv1=Cn.getInterpolation(Bo,zr,Hr,Gr,No,Oo,Fo,new he),u.uv2=u.uv1),o&&(ch.fromBufferAttribute(o,a),uh.fromBufferAttribute(o,l),hh.fromBufferAttribute(o,c),u.normal=Cn.getInterpolation(Bo,zr,Hr,Gr,ch,uh,hh,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new C,materialIndex:0};Cn.getNormal(zr,Hr,Gr,h.normal),u.face=h}return u}class vo extends fn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2));function _(g,m,p,A,v,x,M,E,T,L,y){const b=x/T,G=M/L,K=x/2,I=M/2,N=E/2,O=T+1,$=L+1;let z=0,X=0;const J=new C;for(let Z=0;Z<$;Z++){const k=Z*G-I;for(let V=0;V<O;V++){const ae=V*b-K;J[g]=ae*A,J[m]=k*v,J[p]=N,c.push(J.x,J.y,J.z),J[g]=0,J[m]=0,J[p]=E>0?1:-1,u.push(J.x,J.y,J.z),h.push(V/T),h.push(1-Z/L),z+=1}}for(let Z=0;Z<L;Z++)for(let k=0;k<T;k++){const V=f+k+O*Z,ae=f+k+O*(Z+1),ie=f+(k+1)+O*(Z+1),se=f+(k+1)+O*Z;l.push(V,ae,se),l.push(ae,ie,se),X+=6}a.addGroup(d,X,y),d+=X,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Vt(r){const e={};for(let t=0;t<r.length;t++){const n=ps(r[t]);for(const i in n)e[i]=n[i]}return e}function o_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function vd(r){return r.getRenderTarget()===null?r.outputColorSpace:Gn}const a_={clone:ps,merge:Vt};var l_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l_,this.fragmentShader=c_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=o_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xd extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends xd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vr=-90,Wr=1;class u_ extends Qe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Wt(Vr,Wr,e,t);i.layers=this.layers,this.add(i);const s=new Wt(Vr,Wr,e,t);s.layers=this.layers,this.add(s);const o=new Wt(Vr,Wr,e,t);o.layers=this.layers,this.add(o);const a=new Wt(Vr,Wr,e,t);a.layers=this.layers,this.add(a);const l=new Wt(Vr,Wr,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Vr,Wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=hi,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class yd extends Pt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ls,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class h_ extends yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===cr?be:ur),this.texture=new yd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new vo(5,5,5),s=new Ar({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:Ui});s.uniforms.tEquirect.value=t;const o=new Xt(i,s),a=t.minFilter;return t.minFilter===xr&&(t.minFilter=Yt),new u_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const fl=new C,f_=new C,d_=new Oe;class bi{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=fl.subVectors(n,t).cross(f_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||d_.getNormalMatrix(e),i=this.coplanarPoint(fl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new Xn,Ho=new C;class wc{constructor(e=new bi,t=new bi,n=new bi,i=new bi,s=new bi,o=new bi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=li){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],A=i[13],v=i[14],x=i[15];if(n[0].setComponents(l-s,f-c,m-d,x-p).normalize(),n[1].setComponents(l+s,f+c,m+d,x+p).normalize(),n[2].setComponents(l+o,f+u,m+_,x+A).normalize(),n[3].setComponents(l-o,f-u,m-_,x-A).normalize(),n[4].setComponents(l-a,f-h,m-g,x-v).normalize(),t===li)n[5].setComponents(l+a,f+h,m+g,x+v).normalize();else if(t===fa)n[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ho.x=i.normal.x>0?e.max.x:e.min.x,Ho.y=i.normal.y>0?e.max.y:e.min.y,Ho.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ad(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function p_(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;r.bindBuffer(h,c),d.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Rc extends fn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const A=p*f-o;for(let v=0;v<c;v++){const x=v*h-s;_.push(x,-A,0),g.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const v=A+c*p,x=A+c*(p+1),M=A+1+c*(p+1),E=A+1+c*p;d.push(v,x,E),d.push(x,M,E)}this.setIndex(d),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(g,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.width,e.height,e.widthSegments,e.heightSegments)}}var m_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,__=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,M_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,b_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,w_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,O_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,F_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,B_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V_="gl_FragColor = linearToOutputTexel( gl_FragColor );",W_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,j_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,o0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,a0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,f0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,g0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,x0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,y0=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,A0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,R0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,C0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,P0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,L0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,O0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,F0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,G0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Z0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ov=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,av=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Av=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bv=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Iv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:m_,alphahash_pars_fragment:g_,alphamap_fragment:__,alphamap_pars_fragment:v_,alphatest_fragment:x_,alphatest_pars_fragment:y_,aomap_fragment:A_,aomap_pars_fragment:M_,begin_vertex:S_,beginnormal_vertex:T_,bsdfs:E_,iridescence_fragment:b_,bumpmap_pars_fragment:w_,clipping_planes_fragment:R_,clipping_planes_pars_fragment:C_,clipping_planes_pars_vertex:P_,clipping_planes_vertex:L_,color_fragment:D_,color_pars_fragment:I_,color_pars_vertex:U_,color_vertex:N_,common:O_,cube_uv_reflection_fragment:F_,defaultnormal_vertex:B_,displacementmap_pars_vertex:k_,displacementmap_vertex:z_,emissivemap_fragment:H_,emissivemap_pars_fragment:G_,colorspace_fragment:V_,colorspace_pars_fragment:W_,envmap_fragment:X_,envmap_common_pars_fragment:j_,envmap_pars_fragment:q_,envmap_pars_vertex:Y_,envmap_physical_pars_fragment:o0,envmap_vertex:K_,fog_vertex:$_,fog_pars_vertex:Z_,fog_fragment:Q_,fog_pars_fragment:J_,gradientmap_pars_fragment:e0,lightmap_fragment:t0,lightmap_pars_fragment:n0,lights_lambert_fragment:i0,lights_lambert_pars_fragment:r0,lights_pars_begin:s0,lights_toon_fragment:a0,lights_toon_pars_fragment:l0,lights_phong_fragment:c0,lights_phong_pars_fragment:u0,lights_physical_fragment:h0,lights_physical_pars_fragment:f0,lights_fragment_begin:d0,lights_fragment_maps:p0,lights_fragment_end:m0,logdepthbuf_fragment:g0,logdepthbuf_pars_fragment:_0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:x0,map_fragment:y0,map_pars_fragment:A0,map_particle_fragment:M0,map_particle_pars_fragment:S0,metalnessmap_fragment:T0,metalnessmap_pars_fragment:E0,morphcolor_vertex:b0,morphnormal_vertex:w0,morphtarget_pars_vertex:R0,morphtarget_vertex:C0,normal_fragment_begin:P0,normal_fragment_maps:L0,normal_pars_fragment:D0,normal_pars_vertex:I0,normal_vertex:U0,normalmap_pars_fragment:N0,clearcoat_normal_fragment_begin:O0,clearcoat_normal_fragment_maps:F0,clearcoat_pars_fragment:B0,iridescence_pars_fragment:k0,opaque_fragment:z0,packing:H0,premultiplied_alpha_fragment:G0,project_vertex:V0,dithering_fragment:W0,dithering_pars_fragment:X0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:q0,shadowmap_pars_fragment:Y0,shadowmap_pars_vertex:K0,shadowmap_vertex:$0,shadowmask_pars_fragment:Z0,skinbase_vertex:Q0,skinning_pars_vertex:J0,skinning_vertex:ev,skinnormal_vertex:tv,specularmap_fragment:nv,specularmap_pars_fragment:iv,tonemapping_fragment:rv,tonemapping_pars_fragment:sv,transmission_fragment:ov,transmission_pars_fragment:av,uv_pars_fragment:lv,uv_pars_vertex:cv,uv_vertex:uv,worldpos_vertex:hv,background_vert:fv,background_frag:dv,backgroundCube_vert:pv,backgroundCube_frag:mv,cube_vert:gv,cube_frag:_v,depth_vert:vv,depth_frag:xv,distanceRGBA_vert:yv,distanceRGBA_frag:Av,equirect_vert:Mv,equirect_frag:Sv,linedashed_vert:Tv,linedashed_frag:Ev,meshbasic_vert:bv,meshbasic_frag:wv,meshlambert_vert:Rv,meshlambert_frag:Cv,meshmatcap_vert:Pv,meshmatcap_frag:Lv,meshnormal_vert:Dv,meshnormal_frag:Iv,meshphong_vert:Uv,meshphong_frag:Nv,meshphysical_vert:Ov,meshphysical_frag:Fv,meshtoon_vert:Bv,meshtoon_frag:kv,points_vert:zv,points_frag:Hv,shadow_vert:Gv,shadow_frag:Vv,sprite_vert:Wv,sprite_frag:Xv},oe={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},On={basic:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Vt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Vt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Vt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Vt([oe.points,oe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Vt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Vt([oe.common,oe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Vt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Vt([oe.sprite,oe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Vt([oe.common,oe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Vt([oe.lights,oe.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};On.physical={uniforms:Vt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Go={r:0,b:0,g:0};function jv(r,e,t,n,i,s,o){const a=new Te(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(m,p){let A=!1,v=p.isScene===!0?p.background:null;switch(v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),A=!0),r.xr.getEnvironmentBlendMode()){case"opaque":A=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),A=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),A=!0;break}(r.autoClear||A)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ra)?(u===void 0&&(u=new Xt(new vo(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:ps(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=v.colorSpace!==be,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Xt(new Rc(2,2),new Ar({name:"BackgroundMaterial",uniforms:ps(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=v.colorSpace!==be,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Go,vd(r)),n.buffers.color.setClear(Go.r,Go.g,Go.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function qv(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(N,O,$,z,X){let J=!1;if(o){const Z=g(z,$,O);c!==Z&&(c=Z,d(c.object)),J=p(N,z,$,X),J&&A(N,z,$,X)}else{const Z=O.wireframe===!0;(c.geometry!==z.id||c.program!==$.id||c.wireframe!==Z)&&(c.geometry=z.id,c.program=$.id,c.wireframe=Z,J=!0)}X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,L(N,O,$,z),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(N){return n.isWebGL2?r.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return n.isWebGL2?r.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function g(N,O,$){const z=$.wireframe===!0;let X=a[N.id];X===void 0&&(X={},a[N.id]=X);let J=X[O.id];J===void 0&&(J={},X[O.id]=J);let Z=J[z];return Z===void 0&&(Z=m(f()),J[z]=Z),Z}function m(N){const O=[],$=[],z=[];for(let X=0;X<i;X++)O[X]=0,$[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:$,attributeDivisors:z,object:N,attributes:{},index:null}}function p(N,O,$,z){const X=c.attributes,J=O.attributes;let Z=0;const k=$.getAttributes();for(const V in k)if(k[V].location>=0){const ie=X[V];let se=J[V];if(se===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(se=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(se=N.instanceColor)),ie===void 0||ie.attribute!==se||se&&ie.data!==se.data)return!0;Z++}return c.attributesNum!==Z||c.index!==z}function A(N,O,$,z){const X={},J=O.attributes;let Z=0;const k=$.getAttributes();for(const V in k)if(k[V].location>=0){let ie=J[V];ie===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor));const se={};se.attribute=ie,ie&&ie.data&&(se.data=ie.data),X[V]=se,Z++}c.attributes=X,c.attributesNum=Z,c.index=z}function v(){const N=c.newAttributes;for(let O=0,$=N.length;O<$;O++)N[O]=0}function x(N){M(N,0)}function M(N,O){const $=c.newAttributes,z=c.enabledAttributes,X=c.attributeDivisors;$[N]=1,z[N]===0&&(r.enableVertexAttribArray(N),z[N]=1),X[N]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,O),X[N]=O)}function E(){const N=c.newAttributes,O=c.enabledAttributes;for(let $=0,z=O.length;$<z;$++)O[$]!==N[$]&&(r.disableVertexAttribArray($),O[$]=0)}function T(N,O,$,z,X,J,Z){Z===!0?r.vertexAttribIPointer(N,O,$,X,J):r.vertexAttribPointer(N,O,$,z,X,J)}function L(N,O,$,z){if(n.isWebGL2===!1&&(N.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const X=z.attributes,J=$.getAttributes(),Z=O.defaultAttributeValues;for(const k in J){const V=J[k];if(V.location>=0){let ae=X[k];if(ae===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(ae=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(ae=N.instanceColor)),ae!==void 0){const ie=ae.normalized,se=ae.itemSize,ve=t.get(ae);if(ve===void 0)continue;const Ce=ve.buffer,Ae=ve.type,We=ve.bytesPerElement,Rt=n.isWebGL2===!0&&(Ae===r.INT||Ae===r.UNSIGNED_INT||ae.gpuType===td);if(ae.isInterleavedBufferAttribute){const Ne=ae.data,F=Ne.stride,At=ae.offset;if(Ne.isInstancedInterleavedBuffer){for(let xe=0;xe<V.locationSize;xe++)M(V.location+xe,Ne.meshPerAttribute);N.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let xe=0;xe<V.locationSize;xe++)x(V.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let xe=0;xe<V.locationSize;xe++)T(V.location+xe,se/V.locationSize,Ae,ie,F*We,(At+se/V.locationSize*xe)*We,Rt)}else{if(ae.isInstancedBufferAttribute){for(let Ne=0;Ne<V.locationSize;Ne++)M(V.location+Ne,ae.meshPerAttribute);N.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ne=0;Ne<V.locationSize;Ne++)x(V.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Ne=0;Ne<V.locationSize;Ne++)T(V.location+Ne,se/V.locationSize,Ae,ie,se*We,se/V.locationSize*Ne*We,Rt)}}else if(Z!==void 0){const ie=Z[k];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(V.location,ie);break;case 3:r.vertexAttrib3fv(V.location,ie);break;case 4:r.vertexAttrib4fv(V.location,ie);break;default:r.vertexAttrib1fv(V.location,ie)}}}}E()}function y(){K();for(const N in a){const O=a[N];for(const $ in O){const z=O[$];for(const X in z)_(z[X].object),delete z[X];delete O[$]}delete a[N]}}function b(N){if(a[N.id]===void 0)return;const O=a[N.id];for(const $ in O){const z=O[$];for(const X in z)_(z[X].object),delete z[X];delete O[$]}delete a[N.id]}function G(N){for(const O in a){const $=a[O];if($[N.id]===void 0)continue;const z=$[N.id];for(const X in z)_(z[X].object),delete z[X];delete $[N.id]}}function K(){I(),u=!0,c!==l&&(c=l,d(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:I,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:x,disableUnusedAttributes:E}}function Yv(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=r,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Kv(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,x=o||e.has("OES_texture_float"),M=v&&x,E=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:A,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:E}}function $v(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new bi,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const A=s?0:n,v=A*4;let x=p.clippingState||null;l.value=x,x=u(_,f,v,d);for(let M=0;M!==v;++M)x[M]=t[M];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=d;v!==g;++v,x+=4)o.copy(h[v]).applyMatrix4(A,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Zv(r){let e=new WeakMap;function t(o,a){return a===Wl?o.mapping=ls:a===Xl&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Wl||a===Xl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new h_(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Cc extends xd{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zr=4,fh=[.125,.215,.35,.446,.526,.582],sr=20,dl=new Cc,dh=new Te;let pl=null;const tr=(1+Math.sqrt(5))/2,Xr=1/tr,ph=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,tr,Xr),new C(0,tr,-Xr),new C(Xr,0,tr),new C(-Xr,0,tr),new C(tr,Xr,0),new C(-tr,Xr,0)];class mh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){pl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pl),e.scissorTest=!1,Vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:eo,format:vn,colorSpace:Gn,depthBuffer:!1},i=gh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qv(s)),this._blurMaterial=Jv(s,e,t)}return i}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,n,i){const a=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(dh),u.toneMapping=hi,u.autoClear=!1;const d=new Ci({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),_=new Xt(new vo,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(dh),g=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):A===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Vo(i,A*v,p>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ls||e.mapping===cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Vo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,dl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ph[(i-1)%ph.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*sr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):sr;m>sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${sr}`);const p=[];let A=0;for(let T=0;T<sr;++T){const L=T/g,y=Math.exp(-L*L/2);p.push(y),T===0?A+=y:T<m&&(A+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const x=this._sizeLods[i],M=3*x*(i>v-Zr?i-v+Zr:0),E=4*(this._cubeSize-x);Vo(t,M,E,3*x,2*x),l.setRenderTarget(t),l.render(h,dl)}}function Qv(r){const e=[],t=[],n=[];let i=r;const s=r-Zr+1+fh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Zr?l=fh[o-r+Zr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,A=new Float32Array(g*_*d),v=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let E=0;E<d;E++){const T=E%3*2/3-1,L=E>2?0:-1,y=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];A.set(y,g*_*E),v.set(f,m*_*E);const b=[E,E,E,E,E,E];x.set(b,p*_*E)}const M=new fn;M.setAttribute("position",new jt(A,g)),M.setAttribute("uv",new jt(v,m)),M.setAttribute("faceIndex",new jt(x,p)),e.push(M),i>Zr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gh(r,e,t){const n=new yr(r,e,t);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Jv(r,e,t){const n=new Float32Array(sr),i=new C(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function _h(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function vh(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ex(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wl||l===Xl,u=l===ls||l===cs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new mh(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new mh(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function tx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nx(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const A=d.array;g=d.version;for(let v=0,x=A.length;v<x;v+=3){const M=A[v+0],E=A[v+1],T=A[v+2];f.push(M,E,E,T,T,M)}}else{const A=_.array;g=_.version;for(let v=0,x=A.length/3-1;v<x;v+=3){const M=v+0,E=v+1,T=v+2;f.push(M,E,E,T,T,M)}}const m=new(hd(f)?_d:gd)(f,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ix(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){r.drawElements(s,d,a,f*l),t.update(d,s,1)}function h(f,d,_){if(_===0)return;let g,m;if(i)g=r,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,d,a,f*l,_),t.update(d,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function rx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function sx(r,e){return r[0]-e[0]}function ox(r,e){return Math.abs(e[1])-Math.abs(r[1])}function ax(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ze,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let O=function(){I.dispose(),s.delete(u),u.removeEventListener("dispose",O)};var d=O;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let y=0;v===!0&&(y=1),x===!0&&(y=2),M===!0&&(y=3);let b=u.attributes.position.count*y,G=1;b>e.maxTextureSize&&(G=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const K=new Float32Array(b*G*4*g),I=new pd(K,b,G,g);I.type=ai,I.needsUpdate=!0;const N=y*4;for(let $=0;$<g;$++){const z=E[$],X=T[$],J=L[$],Z=b*G*4*$;for(let k=0;k<z.count;k++){const V=k*N;v===!0&&(o.fromBufferAttribute(z,k),K[Z+V+0]=o.x,K[Z+V+1]=o.y,K[Z+V+2]=o.z,K[Z+V+3]=0),x===!0&&(o.fromBufferAttribute(X,k),K[Z+V+4]=o.x,K[Z+V+5]=o.y,K[Z+V+6]=o.z,K[Z+V+7]=0),M===!0&&(o.fromBufferAttribute(J,k),K[Z+V+8]=o.x,K[Z+V+9]=o.y,K[Z+V+10]=o.z,K[Z+V+11]=J.itemSize===4?o.w:1)}}m={count:g,texture:I,size:new he(b,G)},s.set(u,m),u.addEventListener("dispose",O)}let p=0;for(let v=0;v<f.length;v++)p+=f[v];const A=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",A),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let x=0;x<_;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<_;x++){const M=g[x];M[0]=x,M[1]=f[x]}g.sort(ox);for(let x=0;x<8;x++)x<_&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(sx);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let A=0;for(let x=0;x<8;x++){const M=a[x],E=M[0],T=M[1];E!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+x)!==m[E]&&u.setAttribute("morphTarget"+x,m[E]),p&&u.getAttribute("morphNormal"+x)!==p[E]&&u.setAttribute("morphNormal"+x,p[E]),i[x]=T,A+=T):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const v=u.morphTargetsRelative?1:1-A;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function lx(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Md=new Pt,Sd=new pd,Td=new Kg,Ed=new yd,xh=[],yh=[],Ah=new Float32Array(16),Mh=new Float32Array(9),Sh=new Float32Array(4);function Ms(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=xh[i];if(s===void 0&&(s=new Float32Array(i),xh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function xt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function yt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Pa(r,e){let t=yh[e];t===void 0&&(t=new Int32Array(e),yh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function cx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ux(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2fv(this.addr,e),yt(t,e)}}function hx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;r.uniform3fv(this.addr,e),yt(t,e)}}function fx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4fv(this.addr,e),yt(t,e)}}function dx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Sh.set(n),r.uniformMatrix2fv(this.addr,!1,Sh),yt(t,n)}}function px(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Mh.set(n),r.uniformMatrix3fv(this.addr,!1,Mh),yt(t,n)}}function mx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Ah.set(n),r.uniformMatrix4fv(this.addr,!1,Ah),yt(t,n)}}function gx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function _x(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2iv(this.addr,e),yt(t,e)}}function vx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3iv(this.addr,e),yt(t,e)}}function xx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4iv(this.addr,e),yt(t,e)}}function yx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ax(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2uiv(this.addr,e),yt(t,e)}}function Mx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3uiv(this.addr,e),yt(t,e)}}function Sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4uiv(this.addr,e),yt(t,e)}}function Tx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Md,i)}function Ex(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Td,i)}function bx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ed,i)}function wx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sd,i)}function Rx(r){switch(r){case 5126:return cx;case 35664:return ux;case 35665:return hx;case 35666:return fx;case 35674:return dx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return _x;case 35668:case 35672:return vx;case 35669:case 35673:return xx;case 5125:return yx;case 36294:return Ax;case 36295:return Mx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return wx}}function Cx(r,e){r.uniform1fv(this.addr,e)}function Px(r,e){const t=Ms(e,this.size,2);r.uniform2fv(this.addr,t)}function Lx(r,e){const t=Ms(e,this.size,3);r.uniform3fv(this.addr,t)}function Dx(r,e){const t=Ms(e,this.size,4);r.uniform4fv(this.addr,t)}function Ix(r,e){const t=Ms(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ux(r,e){const t=Ms(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Nx(r,e){const t=Ms(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ox(r,e){r.uniform1iv(this.addr,e)}function Fx(r,e){r.uniform2iv(this.addr,e)}function Bx(r,e){r.uniform3iv(this.addr,e)}function kx(r,e){r.uniform4iv(this.addr,e)}function zx(r,e){r.uniform1uiv(this.addr,e)}function Hx(r,e){r.uniform2uiv(this.addr,e)}function Gx(r,e){r.uniform3uiv(this.addr,e)}function Vx(r,e){r.uniform4uiv(this.addr,e)}function Wx(r,e,t){const n=this.cache,i=e.length,s=Pa(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Md,s[o])}function Xx(r,e,t){const n=this.cache,i=e.length,s=Pa(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Td,s[o])}function jx(r,e,t){const n=this.cache,i=e.length,s=Pa(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ed,s[o])}function qx(r,e,t){const n=this.cache,i=e.length,s=Pa(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Sd,s[o])}function Yx(r){switch(r){case 5126:return Cx;case 35664:return Px;case 35665:return Lx;case 35666:return Dx;case 35674:return Ix;case 35675:return Ux;case 35676:return Nx;case 5124:case 35670:return Ox;case 35667:case 35671:return Fx;case 35668:case 35672:return Bx;case 35669:case 35673:return kx;case 5125:return zx;case 36294:return Hx;case 36295:return Gx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return jx;case 36289:case 36303:case 36311:case 36292:return qx}}class Kx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Rx(t.type)}}class $x{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Yx(t.type)}}class Zx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ml=/(\w+)(\])?(\[|\.)?/g;function Th(r,e){r.seq.push(e),r.map[e.id]=e}function Qx(r,e,t){const n=r.name,i=n.length;for(ml.lastIndex=0;;){const s=ml.exec(n),o=ml.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Th(t,c===void 0?new Kx(a,r,e):new $x(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Zx(a),Th(t,h)),t=h}}}class ea{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Qx(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Eh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Jx=0;function ey(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ty(r){switch(r){case Gn:return["Linear","( value )"];case be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function bh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+ey(r.getShaderSource(e),o)}else return i}function ny(r,e){const t=ty(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function iy(r,e){let t;switch(e){case Jm:t="Linear";break;case eg:t="Reinhard";break;case tg:t="OptimizedCineon";break;case ng:t="ACESFilmic";break;case ig:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ry(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bs).join(`
`)}function sy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oy(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Bs(r){return r!==""}function wh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(r){return r.replace(ay,cy)}const ly=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cy(r,e){let t=Ue[e];if(t===void 0){const n=ly.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zl(t)}const uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(r){return r.replace(uy,hy)}function hy(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ph(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fy(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Kf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Lm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function dy(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case Ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function py(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function my(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qf:e="ENVMAP_BLENDING_MULTIPLY";break;case Zm:e="ENVMAP_BLENDING_MIX";break;case Qm:e="ENVMAP_BLENDING_ADD";break}return e}function gy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _y(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=fy(t),c=dy(t),u=py(t),h=my(t),f=gy(t),d=t.isWebGL2?"":ry(t),_=sy(s),g=i.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Bs).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Bs).join(`
`),p.length>0&&(p+=`
`)):(m=[Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),p=[d,Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?Ue.tonemapping_pars_fragment:"",t.toneMapping!==hi?iy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,ny("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bs).join(`
`)),o=Zl(o),o=wh(o,t),o=Rh(o,t),a=Zl(a),a=wh(a,t),a=Rh(a,t),o=Ch(o),a=Ch(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=A+m+o,x=A+p+a,M=Eh(i,i.VERTEX_SHADER,v),E=Eh(i,i.FRAGMENT_SHADER,x);if(i.attachShader(g,M),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){const y=i.getProgramInfoLog(g).trim(),b=i.getShaderInfoLog(M).trim(),G=i.getShaderInfoLog(E).trim();let K=!0,I=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,M,E);else{const N=bh(i,M,"vertex"),O=bh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+N+`
`+O)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(b===""||G==="")&&(I=!1);I&&(this.diagnostics={runnable:K,programLog:y,vertexShader:{log:b,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(M),i.deleteShader(E);let T;this.getUniforms=function(){return T===void 0&&(T=new ea(i,g)),T};let L;return this.getAttributes=function(){return L===void 0&&(L=oy(i,g)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=E,this}let vy=0;class xy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yy(e),t.set(e,n)),n}}class yy{constructor(e){this.id=vy++,this.code=e,this.usedTimes=0}}function Ay(r,e,t,n,i,s,o){const a=new bc,l=new xy,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function m(y,b,G,K,I){const N=K.fog,O=I.geometry,$=y.isMeshStandardMaterial?K.environment:null,z=(y.isMeshStandardMaterial?t:e).get(y.envMap||$),X=z&&z.mapping===Ra?z.image.height:null,J=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const Z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,k=Z!==void 0?Z.length:0;let V=0;O.morphAttributes.position!==void 0&&(V=1),O.morphAttributes.normal!==void 0&&(V=2),O.morphAttributes.color!==void 0&&(V=3);let ae,ie,se,ve;if(J){const In=On[J];ae=In.vertexShader,ie=In.fragmentShader}else ae=y.vertexShader,ie=y.fragmentShader,l.update(y),se=l.getVertexShaderID(y),ve=l.getFragmentShaderID(y);const Ce=r.getRenderTarget(),Ae=I.isInstancedMesh===!0,We=!!y.map,Rt=!!y.matcap,Ne=!!z,F=!!y.aoMap,At=!!y.lightMap,xe=!!y.bumpMap,we=!!y.normalMap,Me=!!y.displacementMap,et=!!y.emissiveMap,Fe=!!y.metalnessMap,Le=!!y.roughnessMap,je=y.anisotropy>0,_t=y.clearcoat>0,Mt=y.iridescence>0,R=y.sheen>0,S=y.transmission>0,j=je&&!!y.anisotropyMap,ne=_t&&!!y.clearcoatMap,te=_t&&!!y.clearcoatNormalMap,P=_t&&!!y.clearcoatRoughnessMap,Q=Mt&&!!y.iridescenceMap,ee=Mt&&!!y.iridescenceThicknessMap,H=R&&!!y.sheenColorMap,pe=R&&!!y.sheenRoughnessMap,_e=!!y.specularMap,ge=!!y.specularColorMap,me=!!y.specularIntensityMap,fe=S&&!!y.transmissionMap,Se=S&&!!y.thicknessMap,ze=!!y.gradientMap,D=!!y.alphaMap,le=y.alphaTest>0,W=!!y.alphaHash,re=!!y.extensions,ce=!!O.attributes.uv1,Xe=!!O.attributes.uv2,nt=!!O.attributes.uv3;return{isWebGL2:u,shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:ae,fragmentShader:ie,defines:y.defines,customVertexShaderID:se,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:Ae,instancingColor:Ae&&I.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ce===null?r.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Gn,map:We,matcap:Rt,envMap:Ne,envMapMode:Ne&&z.mapping,envMapCubeUVHeight:X,aoMap:F,lightMap:At,bumpMap:xe,normalMap:we,displacementMap:f&&Me,emissiveMap:et,normalMapObjectSpace:we&&y.normalMapType===_g,normalMapTangentSpace:we&&y.normalMapType===Tc,metalnessMap:Fe,roughnessMap:Le,anisotropy:je,anisotropyMap:j,clearcoat:_t,clearcoatMap:ne,clearcoatNormalMap:te,clearcoatRoughnessMap:P,iridescence:Mt,iridescenceMap:Q,iridescenceThicknessMap:ee,sheen:R,sheenColorMap:H,sheenRoughnessMap:pe,specularMap:_e,specularColorMap:ge,specularIntensityMap:me,transmission:S,transmissionMap:fe,thicknessMap:Se,gradientMap:ze,opaque:y.transparent===!1&&y.blending===ts,alphaMap:D,alphaTest:le,alphaHash:W,combine:y.combine,mapUv:We&&g(y.map.channel),aoMapUv:F&&g(y.aoMap.channel),lightMapUv:At&&g(y.lightMap.channel),bumpMapUv:xe&&g(y.bumpMap.channel),normalMapUv:we&&g(y.normalMap.channel),displacementMapUv:Me&&g(y.displacementMap.channel),emissiveMapUv:et&&g(y.emissiveMap.channel),metalnessMapUv:Fe&&g(y.metalnessMap.channel),roughnessMapUv:Le&&g(y.roughnessMap.channel),anisotropyMapUv:j&&g(y.anisotropyMap.channel),clearcoatMapUv:ne&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:P&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:H&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(y.sheenRoughnessMap.channel),specularMapUv:_e&&g(y.specularMap.channel),specularColorMapUv:ge&&g(y.specularColorMap.channel),specularIntensityMapUv:me&&g(y.specularIntensityMap.channel),transmissionMapUv:fe&&g(y.transmissionMap.channel),thicknessMapUv:Se&&g(y.thicknessMap.channel),alphaMapUv:D&&g(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(we||je),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:ce,vertexUv2s:Xe,vertexUv3s:nt,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(We||D),fog:!!N,useFog:y.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:V,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:hi,useLegacyLights:r.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kt,flipSided:y.side===Ft,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:re&&y.extensions.derivatives===!0,extensionFragDepth:re&&y.extensions.fragDepth===!0,extensionDrawBuffers:re&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const G in y.defines)b.push(G),b.push(y.defines[G]);return y.isRawShaderMaterial===!1&&(A(b,y),v(b,y),b.push(r.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function A(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),y.push(a.mask)}function x(y){const b=_[y.type];let G;if(b){const K=On[b];G=a_.clone(K.uniforms)}else G=y.uniforms;return G}function M(y,b){let G;for(let K=0,I=c.length;K<I;K++){const N=c[K];if(N.cacheKey===b){G=N,++G.usedTimes;break}}return G===void 0&&(G=new _y(r,b,y,s),c.push(G)),G}function E(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function T(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:L}}function My(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Sy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Lh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Dh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Sy),n.length>1&&n.sort(f||Lh),i.length>1&&i.sort(f||Lh)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Ty(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Dh,r.set(n,[o])):i>=s.length?(o=new Dh,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ey(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Te};break;case"SpotLight":t={position:new C,direction:new C,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function by(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let wy=0;function Ry(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Cy(r,e){const t=new Ey,n=by(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new C);const s=new C,o=new De,a=new De;function l(u,h){let f=0,d=0,_=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let g=0,m=0,p=0,A=0,v=0,x=0,M=0,E=0,T=0,L=0;u.sort(Ry);const y=h===!0?Math.PI:1;for(let G=0,K=u.length;G<K;G++){const I=u[G],N=I.color,O=I.intensity,$=I.distance,z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=N.r*O*y,d+=N.g*O*y,_+=N.b*O*y;else if(I.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(I.sh.coefficients[X],O);else if(I.isDirectionalLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*y),I.castShadow){const J=I.shadow,Z=n.get(I);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,i.directionalShadow[g]=Z,i.directionalShadowMap[g]=z,i.directionalShadowMatrix[g]=I.shadow.matrix,x++}i.directional[g]=X,g++}else if(I.isSpotLight){const X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(N).multiplyScalar(O*y),X.distance=$,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,i.spot[p]=X;const J=I.shadow;if(I.map&&(i.spotLightMap[T]=I.map,T++,J.updateMatrices(I),I.castShadow&&L++),i.spotLightMatrix[p]=J.matrix,I.castShadow){const Z=n.get(I);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,i.spotShadow[p]=Z,i.spotShadowMap[p]=z,E++}p++}else if(I.isRectAreaLight){const X=t.get(I);X.color.copy(N).multiplyScalar(O),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),i.rectArea[A]=X,A++}else if(I.isPointLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*y),X.distance=I.distance,X.decay=I.decay,I.castShadow){const J=I.shadow,Z=n.get(I);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=z,i.pointShadowMatrix[m]=I.shadow.matrix,M++}i.point[m]=X,m++}else if(I.isHemisphereLight){const X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(O*y),X.groundColor.copy(I.groundColor).multiplyScalar(O*y),i.hemi[v]=X,v++}}A>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=_;const b=i.hash;(b.directionalLength!==g||b.pointLength!==m||b.spotLength!==p||b.rectAreaLength!==A||b.hemiLength!==v||b.numDirectionalShadows!==x||b.numPointShadows!==M||b.numSpotShadows!==E||b.numSpotMaps!==T)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=A,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+T-L,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=L,b.directionalLength=g,b.pointLength=m,b.spotLength=p,b.rectAreaLength=A,b.hemiLength=v,b.numDirectionalShadows=x,b.numPointShadows=M,b.numSpotShadows=E,b.numSpotMaps=T,i.version=wy++)}function c(u,h){let f=0,d=0,_=0,g=0,m=0;const p=h.matrixWorldInverse;for(let A=0,v=u.length;A<v;A++){const x=u[A];if(x.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(x.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(x.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Ih(r,e){const t=new Cy(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Py(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Ih(r,e),t.set(s,[l])):o>=a.length?(l=new Ih(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Ly extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dy extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ny(r,e,t){let n=new wc;const i=new he,s=new he,o=new Ze,a=new Ly({depthPacking:gg}),l=new Dy,c={},u=t.maxTextureSize,h={[Hn]:Ft,[Ft]:Hn,[Kt]:Kt},f=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Iy,fragmentShader:Uy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new fn;_.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Xt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kf;let p=this.type;this.render=function(M,E,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const L=r.getRenderTarget(),y=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),G=r.state;G.setBlending(Ui),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const K=p!==ti&&this.type===ti,I=p===ti&&this.type!==ti;for(let N=0,O=M.length;N<O;N++){const $=M[N],z=$.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const X=z.getFrameExtents();if(i.multiply(X),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/X.x),i.x=s.x*X.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/X.y),i.y=s.y*X.y,z.mapSize.y=s.y)),z.map===null||K===!0||I===!0){const Z=this.type!==ti?{minFilter:tt,magFilter:tt}:{};z.map!==null&&z.map.dispose(),z.map=new yr(i.x,i.y,Z),z.map.texture.name=$.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const J=z.getViewportCount();for(let Z=0;Z<J;Z++){const k=z.getViewport(Z);o.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),G.viewport(o),z.updateMatrices($,Z),n=z.getFrustum(),x(E,T,z.camera,$,this.type)}z.isPointLightShadow!==!0&&this.type===ti&&A(z,T),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(L,y,b)};function A(M,E){const T=e.update(g);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new yr(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(E,null,T,f,g,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(E,null,T,d,g,null)}function v(M,E,T,L){let y=null;const b=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(b!==void 0)y=b;else if(y=T.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const G=y.uuid,K=E.uuid;let I=c[G];I===void 0&&(I={},c[G]=I);let N=I[K];N===void 0&&(N=y.clone(),I[K]=N),y=N}if(y.visible=E.visible,y.wireframe=E.wireframe,L===ti?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:h[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=r.properties.get(y);G.light=T}return y}function x(M,E,T,L,y){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===ti)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const K=e.update(M),I=M.material;if(Array.isArray(I)){const N=K.groups;for(let O=0,$=N.length;O<$;O++){const z=N[O],X=I[z.materialIndex];if(X&&X.visible){const J=v(M,X,L,y);r.renderBufferDirect(T,null,K,J,M,z)}}}else if(I.visible){const N=v(M,I,L,y);r.renderBufferDirect(T,null,K,N,M,null)}}const G=M.children;for(let K=0,I=G.length;K<I;K++)x(G[K],E,T,L,y)}}function Oy(r,e,t){const n=t.isWebGL2;function i(){let D=!1;const le=new Ze;let W=null;const re=new Ze(0,0,0,0);return{setMask:function(ce){W!==ce&&!D&&(r.colorMask(ce,ce,ce,ce),W=ce)},setLocked:function(ce){D=ce},setClear:function(ce,Xe,nt,St,In){In===!0&&(ce*=St,Xe*=St,nt*=St),le.set(ce,Xe,nt,St),re.equals(le)===!1&&(r.clearColor(ce,Xe,nt,St),re.copy(le))},reset:function(){D=!1,W=null,re.set(-1,0,0,0)}}}function s(){let D=!1,le=null,W=null,re=null;return{setTest:function(ce){ce?Ce(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(ce){le!==ce&&!D&&(r.depthMask(ce),le=ce)},setFunc:function(ce){if(W!==ce){switch(ce){case Wm:r.depthFunc(r.NEVER);break;case Xm:r.depthFunc(r.ALWAYS);break;case jm:r.depthFunc(r.LESS);break;case Vl:r.depthFunc(r.LEQUAL);break;case qm:r.depthFunc(r.EQUAL);break;case Ym:r.depthFunc(r.GEQUAL);break;case Km:r.depthFunc(r.GREATER);break;case $m:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}W=ce}},setLocked:function(ce){D=ce},setClear:function(ce){re!==ce&&(r.clearDepth(ce),re=ce)},reset:function(){D=!1,le=null,W=null,re=null}}}function o(){let D=!1,le=null,W=null,re=null,ce=null,Xe=null,nt=null,St=null,In=null;return{setTest:function(ot){D||(ot?Ce(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(ot){le!==ot&&!D&&(r.stencilMask(ot),le=ot)},setFunc:function(ot,Un,zt){(W!==ot||re!==Un||ce!==zt)&&(r.stencilFunc(ot,Un,zt),W=ot,re=Un,ce=zt)},setOp:function(ot,Un,zt){(Xe!==ot||nt!==Un||St!==zt)&&(r.stencilOp(ot,Un,zt),Xe=ot,nt=Un,St=zt)},setLocked:function(ot){D=ot},setClear:function(ot){In!==ot&&(r.clearStencil(ot),In=ot)},reset:function(){D=!1,le=null,W=null,re=null,ce=null,Xe=null,nt=null,St=null,In=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},_=new WeakMap,g=[],m=null,p=!1,A=null,v=null,x=null,M=null,E=null,T=null,L=null,y=!1,b=null,G=null,K=null,I=null,N=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,z=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=z>=1):X.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=z>=2);let J=null,Z={};const k=r.getParameter(r.SCISSOR_BOX),V=r.getParameter(r.VIEWPORT),ae=new Ze().fromArray(k),ie=new Ze().fromArray(V);function se(D,le,W,re){const ce=new Uint8Array(4),Xe=r.createTexture();r.bindTexture(D,Xe),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let nt=0;nt<W;nt++)n&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(le,0,r.RGBA,1,1,re,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(le+nt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return Xe}const ve={};ve[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),ve[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ve[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ve[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(r.DEPTH_TEST),l.setFunc(Vl),Me(!1),et(_u),Ce(r.CULL_FACE),xe(Ui);function Ce(D){f[D]!==!0&&(r.enable(D),f[D]=!0)}function Ae(D){f[D]!==!1&&(r.disable(D),f[D]=!1)}function We(D,le){return d[D]!==le?(r.bindFramebuffer(D,le),d[D]=le,n&&(D===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=le),D===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=le)),!0):!1}function Rt(D,le){let W=g,re=!1;if(D)if(W=_.get(le),W===void 0&&(W=[],_.set(le,W)),D.isWebGLMultipleRenderTargets){const ce=D.texture;if(W.length!==ce.length||W[0]!==r.COLOR_ATTACHMENT0){for(let Xe=0,nt=ce.length;Xe<nt;Xe++)W[Xe]=r.COLOR_ATTACHMENT0+Xe;W.length=ce.length,re=!0}}else W[0]!==r.COLOR_ATTACHMENT0&&(W[0]=r.COLOR_ATTACHMENT0,re=!0);else W[0]!==r.BACK&&(W[0]=r.BACK,re=!0);re&&(t.isWebGL2?r.drawBuffers(W):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))}function Ne(D){return m!==D?(r.useProgram(D),m=D,!0):!1}const F={[$r]:r.FUNC_ADD,[Im]:r.FUNC_SUBTRACT,[Um]:r.FUNC_REVERSE_SUBTRACT};if(n)F[Au]=r.MIN,F[Mu]=r.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(F[Au]=D.MIN_EXT,F[Mu]=D.MAX_EXT)}const At={[Nm]:r.ZERO,[Om]:r.ONE,[Fm]:r.SRC_COLOR,[$f]:r.SRC_ALPHA,[Vm]:r.SRC_ALPHA_SATURATE,[Hm]:r.DST_COLOR,[km]:r.DST_ALPHA,[Bm]:r.ONE_MINUS_SRC_COLOR,[Zf]:r.ONE_MINUS_SRC_ALPHA,[Gm]:r.ONE_MINUS_DST_COLOR,[zm]:r.ONE_MINUS_DST_ALPHA};function xe(D,le,W,re,ce,Xe,nt,St){if(D===Ui){p===!0&&(Ae(r.BLEND),p=!1);return}if(p===!1&&(Ce(r.BLEND),p=!0),D!==Dm){if(D!==A||St!==y){if((v!==$r||E!==$r)&&(r.blendEquation(r.FUNC_ADD),v=$r,E=$r),St)switch(D){case ts:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vu:r.blendFunc(r.ONE,r.ONE);break;case xu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ts:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vu:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case xu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,M=null,T=null,L=null,A=D,y=St}return}ce=ce||le,Xe=Xe||W,nt=nt||re,(le!==v||ce!==E)&&(r.blendEquationSeparate(F[le],F[ce]),v=le,E=ce),(W!==x||re!==M||Xe!==T||nt!==L)&&(r.blendFuncSeparate(At[W],At[re],At[Xe],At[nt]),x=W,M=re,T=Xe,L=nt),A=D,y=!1}function we(D,le){D.side===Kt?Ae(r.CULL_FACE):Ce(r.CULL_FACE);let W=D.side===Ft;le&&(W=!W),Me(W),D.blending===ts&&D.transparent===!1?xe(Ui):xe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const re=D.stencilWrite;c.setTest(re),re&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Le(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ce(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Me(D){b!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),b=D)}function et(D){D!==Cm?(Ce(r.CULL_FACE),D!==G&&(D===_u?r.cullFace(r.BACK):D===Pm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),G=D}function Fe(D){D!==K&&($&&r.lineWidth(D),K=D)}function Le(D,le,W){D?(Ce(r.POLYGON_OFFSET_FILL),(I!==le||N!==W)&&(r.polygonOffset(le,W),I=le,N=W)):Ae(r.POLYGON_OFFSET_FILL)}function je(D){D?Ce(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function _t(D){D===void 0&&(D=r.TEXTURE0+O-1),J!==D&&(r.activeTexture(D),J=D)}function Mt(D,le,W){W===void 0&&(J===null?W=r.TEXTURE0+O-1:W=J);let re=Z[W];re===void 0&&(re={type:void 0,texture:void 0},Z[W]=re),(re.type!==D||re.texture!==le)&&(J!==W&&(r.activeTexture(W),J=W),r.bindTexture(D,le||ve[D]),re.type=D,re.texture=le)}function R(){const D=Z[J];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(D){ae.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),ae.copy(D))}function me(D){ie.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),ie.copy(D))}function fe(D,le){let W=h.get(le);W===void 0&&(W=new WeakMap,h.set(le,W));let re=W.get(D);re===void 0&&(re=r.getUniformBlockIndex(le,D.name),W.set(D,re))}function Se(D,le){const re=h.get(le).get(D);u.get(le)!==re&&(r.uniformBlockBinding(le,re,D.__bindingPointIndex),u.set(le,re))}function ze(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},J=null,Z={},d={},_=new WeakMap,g=[],m=null,p=!1,A=null,v=null,x=null,M=null,E=null,T=null,L=null,y=!1,b=null,G=null,K=null,I=null,N=null,ae.set(0,0,r.canvas.width,r.canvas.height),ie.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ce,disable:Ae,bindFramebuffer:We,drawBuffers:Rt,useProgram:Ne,setBlending:xe,setMaterial:we,setFlipSided:Me,setCullFace:et,setLineWidth:Fe,setPolygonOffset:Le,setScissorTest:je,activeTexture:_t,bindTexture:Mt,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:j,texImage2D:pe,texImage3D:_e,updateUBOMapping:fe,uniformBlockBinding:Se,texStorage2D:ee,texStorage3D:H,texSubImage2D:ne,texSubImage3D:te,compressedTexSubImage2D:P,compressedTexSubImage3D:Q,scissor:ge,viewport:me,reset:ze}}function Fy(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(R,S){return p?new OffscreenCanvas(R,S):no("canvas")}function v(R,S,j,ne){let te=1;if((R.width>ne||R.height>ne)&&(te=ne/Math.max(R.width,R.height)),te<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const P=S?da:Math.floor,Q=P(te*R.width),ee=P(te*R.height);g===void 0&&(g=A(Q,ee));const H=j?A(Q,ee):g;return H.width=Q,H.height=ee,H.getContext("2d").drawImage(R,0,0,Q,ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Q+"x"+ee+")."),H}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function x(R){return $l(R.width)&&$l(R.height)}function M(R){return a?!1:R.wrapS!==_n||R.wrapT!==_n||R.minFilter!==tt&&R.minFilter!==Yt}function E(R,S){return R.generateMipmaps&&S&&R.minFilter!==tt&&R.minFilter!==Yt}function T(R){r.generateMipmap(R)}function L(R,S,j,ne,te=!1){if(a===!1)return S;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let P=S;return S===r.RED&&(j===r.FLOAT&&(P=r.R32F),j===r.HALF_FLOAT&&(P=r.R16F),j===r.UNSIGNED_BYTE&&(P=r.R8)),S===r.RG&&(j===r.FLOAT&&(P=r.RG32F),j===r.HALF_FLOAT&&(P=r.RG16F),j===r.UNSIGNED_BYTE&&(P=r.RG8)),S===r.RGBA&&(j===r.FLOAT&&(P=r.RGBA32F),j===r.HALF_FLOAT&&(P=r.RGBA16F),j===r.UNSIGNED_BYTE&&(P=ne===be&&te===!1?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(P=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(P=r.RGB5_A1)),(P===r.R16F||P===r.R32F||P===r.RG16F||P===r.RG32F||P===r.RGBA16F||P===r.RGBA32F)&&e.get("EXT_color_buffer_float"),P}function y(R,S,j){return E(R,j)===!0||R.isFramebufferTexture&&R.minFilter!==tt&&R.minFilter!==Yt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function b(R){return R===tt||R===jl||R===Jo?r.NEAREST:r.LINEAR}function G(R){const S=R.target;S.removeEventListener("dispose",G),I(S),S.isVideoTexture&&_.delete(S)}function K(R){const S=R.target;S.removeEventListener("dispose",K),O(S)}function I(R){const S=n.get(R);if(S.__webglInit===void 0)return;const j=R.source,ne=m.get(j);if(ne){const te=ne[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&N(R),Object.keys(ne).length===0&&m.delete(j)}n.remove(R)}function N(R){const S=n.get(R);r.deleteTexture(S.__webglTexture);const j=R.source,ne=m.get(j);delete ne[S.__cacheKey],o.memory.textures--}function O(R){const S=R.texture,j=n.get(R),ne=n.get(S);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)r.deleteFramebuffer(j.__webglFramebuffer[te]),j.__webglDepthbuffer&&r.deleteRenderbuffer(j.__webglDepthbuffer[te]);else{if(r.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&r.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&r.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let te=0;te<j.__webglColorRenderbuffer.length;te++)j.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(j.__webglColorRenderbuffer[te]);j.__webglDepthRenderbuffer&&r.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let te=0,P=S.length;te<P;te++){const Q=n.get(S[te]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(S[te])}n.remove(S),n.remove(R)}let $=0;function z(){$=0}function X(){const R=$;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),$+=1,R}function J(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Z(R,S){const j=n.get(R);if(R.isVideoTexture&&_t(R),R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(j,R,S);return}}t.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+S)}function k(R,S){const j=n.get(R);if(R.version>0&&j.__version!==R.version){We(j,R,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+S)}function V(R,S){const j=n.get(R);if(R.version>0&&j.__version!==R.version){We(j,R,S);return}t.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+S)}function ae(R,S){const j=n.get(R);if(R.version>0&&j.__version!==R.version){Rt(j,R,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+S)}const ie={[us]:r.REPEAT,[_n]:r.CLAMP_TO_EDGE,[ha]:r.MIRRORED_REPEAT},se={[tt]:r.NEAREST,[jl]:r.NEAREST_MIPMAP_NEAREST,[Jo]:r.NEAREST_MIPMAP_LINEAR,[Yt]:r.LINEAR,[ed]:r.LINEAR_MIPMAP_NEAREST,[xr]:r.LINEAR_MIPMAP_LINEAR},ve={[xg]:r.NEVER,[bg]:r.ALWAYS,[yg]:r.LESS,[Mg]:r.LEQUAL,[Ag]:r.EQUAL,[Eg]:r.GEQUAL,[Sg]:r.GREATER,[Tg]:r.NOTEQUAL};function Ce(R,S,j){if(j?(r.texParameteri(R,r.TEXTURE_WRAP_S,ie[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ie[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ie[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,se[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,se[S.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==_n||S.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,b(S.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,b(S.minFilter)),S.minFilter!==tt&&S.minFilter!==Yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===tt||S.minFilter!==Jo&&S.minFilter!==xr||S.type===ai&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===eo&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(R,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Ae(R,S){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",G));const ne=S.source;let te=m.get(ne);te===void 0&&(te={},m.set(ne,te));const P=J(S);if(P!==R.__cacheKey){te[P]===void 0&&(te[P]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,j=!0),te[P].usedTimes++;const Q=te[R.__cacheKey];Q!==void 0&&(te[R.__cacheKey].usedTimes--,Q.usedTimes===0&&N(S)),R.__cacheKey=P,R.__webglTexture=te[P].texture}return j}function We(R,S,j){let ne=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=r.TEXTURE_3D);const te=Ae(R,S),P=S.source;t.bindTexture(ne,R.__webglTexture,r.TEXTURE0+j);const Q=n.get(P);if(P.version!==Q.__version||te===!0){t.activeTexture(r.TEXTURE0+j),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const ee=M(S)&&x(S.image)===!1;let H=v(S.image,ee,!1,u);H=Mt(S,H);const pe=x(H)||a,_e=s.convert(S.format,S.colorSpace);let ge=s.convert(S.type),me=L(S.internalFormat,_e,ge,S.colorSpace);Ce(ne,S,pe);let fe;const Se=S.mipmaps,ze=a&&S.isVideoTexture!==!0,D=Q.__version===void 0||te===!0,le=y(S,H,pe);if(S.isDepthTexture)me=r.DEPTH_COMPONENT,a?S.type===ai?me=r.DEPTH_COMPONENT32F:S.type===Ri?me=r.DEPTH_COMPONENT24:S.type===ar?me=r.DEPTH24_STENCIL8:me=r.DEPTH_COMPONENT16:S.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===lr&&me===r.DEPTH_COMPONENT&&S.type!==Sc&&S.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ri,ge=s.convert(S.type)),S.format===hs&&me===r.DEPTH_COMPONENT&&(me=r.DEPTH_STENCIL,S.type!==ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ar,ge=s.convert(S.type))),D&&(ze?t.texStorage2D(r.TEXTURE_2D,1,me,H.width,H.height):t.texImage2D(r.TEXTURE_2D,0,me,H.width,H.height,0,_e,ge,null));else if(S.isDataTexture)if(Se.length>0&&pe){ze&&D&&t.texStorage2D(r.TEXTURE_2D,le,me,Se[0].width,Se[0].height);for(let W=0,re=Se.length;W<re;W++)fe=Se[W],ze?t.texSubImage2D(r.TEXTURE_2D,W,0,0,fe.width,fe.height,_e,ge,fe.data):t.texImage2D(r.TEXTURE_2D,W,me,fe.width,fe.height,0,_e,ge,fe.data);S.generateMipmaps=!1}else ze?(D&&t.texStorage2D(r.TEXTURE_2D,le,me,H.width,H.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,H.width,H.height,_e,ge,H.data)):t.texImage2D(r.TEXTURE_2D,0,me,H.width,H.height,0,_e,ge,H.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&D&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,me,Se[0].width,Se[0].height,H.depth);for(let W=0,re=Se.length;W<re;W++)fe=Se[W],S.format!==vn?_e!==null?ze?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,fe.width,fe.height,H.depth,_e,fe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,me,fe.width,fe.height,H.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,fe.width,fe.height,H.depth,_e,ge,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,W,me,fe.width,fe.height,H.depth,0,_e,ge,fe.data)}else{ze&&D&&t.texStorage2D(r.TEXTURE_2D,le,me,Se[0].width,Se[0].height);for(let W=0,re=Se.length;W<re;W++)fe=Se[W],S.format!==vn?_e!==null?ze?t.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,fe.width,fe.height,_e,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,W,me,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(r.TEXTURE_2D,W,0,0,fe.width,fe.height,_e,ge,fe.data):t.texImage2D(r.TEXTURE_2D,W,me,fe.width,fe.height,0,_e,ge,fe.data)}else if(S.isDataArrayTexture)ze?(D&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,me,H.width,H.height,H.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,_e,ge,H.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,me,H.width,H.height,H.depth,0,_e,ge,H.data);else if(S.isData3DTexture)ze?(D&&t.texStorage3D(r.TEXTURE_3D,le,me,H.width,H.height,H.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,_e,ge,H.data)):t.texImage3D(r.TEXTURE_3D,0,me,H.width,H.height,H.depth,0,_e,ge,H.data);else if(S.isFramebufferTexture){if(D)if(ze)t.texStorage2D(r.TEXTURE_2D,le,me,H.width,H.height);else{let W=H.width,re=H.height;for(let ce=0;ce<le;ce++)t.texImage2D(r.TEXTURE_2D,ce,me,W,re,0,_e,ge,null),W>>=1,re>>=1}}else if(Se.length>0&&pe){ze&&D&&t.texStorage2D(r.TEXTURE_2D,le,me,Se[0].width,Se[0].height);for(let W=0,re=Se.length;W<re;W++)fe=Se[W],ze?t.texSubImage2D(r.TEXTURE_2D,W,0,0,_e,ge,fe):t.texImage2D(r.TEXTURE_2D,W,me,_e,ge,fe);S.generateMipmaps=!1}else ze?(D&&t.texStorage2D(r.TEXTURE_2D,le,me,H.width,H.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,_e,ge,H)):t.texImage2D(r.TEXTURE_2D,0,me,_e,ge,H);E(S,pe)&&T(ne),Q.__version=P.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Rt(R,S,j){if(S.image.length!==6)return;const ne=Ae(R,S),te=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+j);const P=n.get(te);if(te.version!==P.__version||ne===!0){t.activeTexture(r.TEXTURE0+j),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const Q=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,H=[];for(let W=0;W<6;W++)!Q&&!ee?H[W]=v(S.image[W],!1,!0,c):H[W]=ee?S.image[W].image:S.image[W],H[W]=Mt(S,H[W]);const pe=H[0],_e=x(pe)||a,ge=s.convert(S.format,S.colorSpace),me=s.convert(S.type),fe=L(S.internalFormat,ge,me,S.colorSpace),Se=a&&S.isVideoTexture!==!0,ze=P.__version===void 0||ne===!0;let D=y(S,pe,_e);Ce(r.TEXTURE_CUBE_MAP,S,_e);let le;if(Q){Se&&ze&&t.texStorage2D(r.TEXTURE_CUBE_MAP,D,fe,pe.width,pe.height);for(let W=0;W<6;W++){le=H[W].mipmaps;for(let re=0;re<le.length;re++){const ce=le[re];S.format!==vn?ge!==null?Se?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,re,0,0,ce.width,ce.height,ge,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,re,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,re,0,0,ce.width,ce.height,ge,me,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,re,fe,ce.width,ce.height,0,ge,me,ce.data)}}}else{le=S.mipmaps,Se&&ze&&(le.length>0&&D++,t.texStorage2D(r.TEXTURE_CUBE_MAP,D,fe,H[0].width,H[0].height));for(let W=0;W<6;W++)if(ee){Se?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,H[W].width,H[W].height,ge,me,H[W].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,fe,H[W].width,H[W].height,0,ge,me,H[W].data);for(let re=0;re<le.length;re++){const Xe=le[re].image[W].image;Se?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,re+1,0,0,Xe.width,Xe.height,ge,me,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,re+1,fe,Xe.width,Xe.height,0,ge,me,Xe.data)}}else{Se?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ge,me,H[W]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,fe,ge,me,H[W]);for(let re=0;re<le.length;re++){const ce=le[re];Se?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,re+1,0,0,ge,me,ce.image[W]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,re+1,fe,ge,me,ce.image[W])}}}E(S,_e)&&T(r.TEXTURE_CUBE_MAP),P.__version=te.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ne(R,S,j,ne,te){const P=s.convert(j.format,j.colorSpace),Q=s.convert(j.type),ee=L(j.internalFormat,P,Q,j.colorSpace);n.get(S).__hasExternalTextures||(te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,0,ee,S.width,S.height,S.depth,0,P,Q,null):t.texImage2D(te,0,ee,S.width,S.height,0,P,Q,null)),t.bindFramebuffer(r.FRAMEBUFFER,R),je(S)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,te,n.get(j).__webglTexture,0,Le(S)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,te,n.get(j).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function F(R,S,j){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let ne=r.DEPTH_COMPONENT16;if(j||je(S)){const te=S.depthTexture;te&&te.isDepthTexture&&(te.type===ai?ne=r.DEPTH_COMPONENT32F:te.type===Ri&&(ne=r.DEPTH_COMPONENT24));const P=Le(S);je(S)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P,ne,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,P,ne,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,ne,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){const ne=Le(S);j&&je(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,S.width,S.height):je(S)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const ne=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0;te<ne.length;te++){const P=ne[te],Q=s.convert(P.format,P.colorSpace),ee=s.convert(P.type),H=L(P.internalFormat,Q,ee,P.colorSpace),pe=Le(S);j&&je(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,H,S.width,S.height):je(S)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pe,H,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,H,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function At(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const ne=n.get(S.depthTexture).__webglTexture,te=Le(S);if(S.depthTexture.format===lr)je(S)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(S.depthTexture.format===hs)je(S)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function xe(R){const S=n.get(R),j=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");At(S.__webglFramebuffer,R)}else if(j){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]=r.createRenderbuffer(),F(S.__webglDepthbuffer[ne],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),F(S.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(R,S,j){const ne=n.get(R);S!==void 0&&Ne(ne.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),j!==void 0&&xe(R)}function Me(R){const S=R.texture,j=n.get(R),ne=n.get(S);R.addEventListener("dispose",K),R.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=S.version,o.memory.textures++);const te=R.isWebGLCubeRenderTarget===!0,P=R.isWebGLMultipleRenderTargets===!0,Q=x(R)||a;if(te){j.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)j.__webglFramebuffer[ee]=r.createFramebuffer()}else{if(j.__webglFramebuffer=r.createFramebuffer(),P)if(i.drawBuffers){const ee=R.texture;for(let H=0,pe=ee.length;H<pe;H++){const _e=n.get(ee[H]);_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&je(R)===!1){const ee=P?S:[S];j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let H=0;H<ee.length;H++){const pe=ee[H];j.__webglColorRenderbuffer[H]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[H]);const _e=s.convert(pe.format,pe.colorSpace),ge=s.convert(pe.type),me=L(pe.internalFormat,_e,ge,pe.colorSpace,R.isXRRenderTarget===!0),fe=Le(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,me,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+H,r.RENDERBUFFER,j.__webglColorRenderbuffer[H])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),F(j.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),Ce(r.TEXTURE_CUBE_MAP,S,Q);for(let ee=0;ee<6;ee++)Ne(j.__webglFramebuffer[ee],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee);E(S,Q)&&T(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(P){const ee=R.texture;for(let H=0,pe=ee.length;H<pe;H++){const _e=ee[H],ge=n.get(_e);t.bindTexture(r.TEXTURE_2D,ge.__webglTexture),Ce(r.TEXTURE_2D,_e,Q),Ne(j.__webglFramebuffer,R,_e,r.COLOR_ATTACHMENT0+H,r.TEXTURE_2D),E(_e,Q)&&T(r.TEXTURE_2D)}t.unbindTexture()}else{let ee=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ee=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ee,ne.__webglTexture),Ce(ee,S,Q),Ne(j.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,ee),E(S,Q)&&T(ee),t.unbindTexture()}R.depthBuffer&&xe(R)}function et(R){const S=x(R)||a,j=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ne=0,te=j.length;ne<te;ne++){const P=j[ne];if(E(P,S)){const Q=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ee=n.get(P).__webglTexture;t.bindTexture(Q,ee),T(Q),t.unbindTexture()}}}function Fe(R){if(a&&R.samples>0&&je(R)===!1){const S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],j=R.width,ne=R.height;let te=r.COLOR_BUFFER_BIT;const P=[],Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=n.get(R),H=R.isWebGLMultipleRenderTargets===!0;if(H)for(let pe=0;pe<S.length;pe++)t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){P.push(r.COLOR_ATTACHMENT0+pe),R.depthBuffer&&P.push(Q);const _e=ee.__ignoreDepthValues!==void 0?ee.__ignoreDepthValues:!1;if(_e===!1&&(R.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),H&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ee.__webglColorRenderbuffer[pe]),_e===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Q]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Q])),H){const ge=n.get(S[pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ge,0)}r.blitFramebuffer(0,0,j,ne,0,0,j,ne,te,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,P)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),H)for(let pe=0;pe<S.length;pe++){t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,ee.__webglColorRenderbuffer[pe]);const _e=n.get(S[pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,_e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}}function Le(R){return Math.min(h,R.samples)}function je(R){const S=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _t(R){const S=o.render.frame;_.get(R)!==S&&(_.set(R,S),R.update())}function Mt(R,S){const j=R.colorSpace,ne=R.format,te=R.type;return R.isCompressedTexture===!0||R.format===Kl||j!==Gn&&j!==ur&&(j===be?a===!1?e.has("EXT_sRGB")===!0&&ne===vn?(R.format=Kl,R.minFilter=Yt,R.generateMipmaps=!1):S=fd.sRGBToLinear(S):(ne!==vn||te!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),S}this.allocateTextureUnit=X,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=ae,this.rebindTextures=we,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=je}function By(r,e,t){const n=t.isWebGL2;function i(s,o=ur){let a;if(s===Ni)return r.UNSIGNED_BYTE;if(s===nd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===id)return r.UNSIGNED_SHORT_5_5_5_1;if(s===rg)return r.BYTE;if(s===sg)return r.SHORT;if(s===Sc)return r.UNSIGNED_SHORT;if(s===td)return r.INT;if(s===Ri)return r.UNSIGNED_INT;if(s===ai)return r.FLOAT;if(s===eo)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===og)return r.ALPHA;if(s===vn)return r.RGBA;if(s===ag)return r.LUMINANCE;if(s===lg)return r.LUMINANCE_ALPHA;if(s===lr)return r.DEPTH_COMPONENT;if(s===hs)return r.DEPTH_STENCIL;if(s===Kl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===cg)return r.RED;if(s===rd)return r.RED_INTEGER;if(s===ug)return r.RG;if(s===sd)return r.RG_INTEGER;if(s===od)return r.RGBA_INTEGER;if(s===Va||s===Wa||s===Xa||s===ja)if(o===be)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Va)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Va)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ja)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Su||s===Tu||s===Eu||s===bu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Su)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Eu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===wu||s===Ru)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===wu)return o===be?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ru)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Cu||s===Pu||s===Lu||s===Du||s===Iu||s===Uu||s===Nu||s===Ou||s===Fu||s===Bu||s===ku||s===zu||s===Hu||s===Gu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Cu)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pu)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lu)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Du)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Iu)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Uu)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nu)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ou)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Fu)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Bu)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ku)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zu)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hu)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gu)return o===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===qa)return o===be?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===fg||s===Vu||s===Wu||s===Xu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===qa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Vu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ar?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class ky extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bn extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zy={type:"move"};class gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Hy extends Pt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:lr,u!==lr&&u!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===lr&&(n=Ri),n===void 0&&u===hs&&(n=ar),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tt,this.minFilter=l!==void 0?l:tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gy extends Er{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=t.getContextAttributes();let m=null,p=null;const A=[],v=[],x=new Wt;x.layers.enable(1),x.viewport=new Ze;const M=new Wt;M.layers.enable(2),M.viewport=new Ze;const E=[x,M],T=new ky;T.layers.enable(1),T.layers.enable(2);let L=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let V=A[k];return V===void 0&&(V=new gl,A[k]=V),V.getTargetRaySpace()},this.getControllerGrip=function(k){let V=A[k];return V===void 0&&(V=new gl,A[k]=V),V.getGripSpace()},this.getHand=function(k){let V=A[k];return V===void 0&&(V=new gl,A[k]=V),V.getHandSpace()};function b(k){const V=v.indexOf(k.inputSource);if(V===-1)return;const ae=A[V];ae!==void 0&&(ae.update(k.inputSource,k.frame,c||o),ae.dispatchEvent({type:k.type,data:k.inputSource}))}function G(){i.removeEventListener("select",b),i.removeEventListener("selectstart",b),i.removeEventListener("selectend",b),i.removeEventListener("squeeze",b),i.removeEventListener("squeezestart",b),i.removeEventListener("squeezeend",b),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",K);for(let k=0;k<A.length;k++){const V=v[k];V!==null&&(v[k]=null,A[k].disconnect(V))}L=null,y=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,p=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",b),i.addEventListener("selectstart",b),i.addEventListener("selectend",b),i.addEventListener("squeeze",b),i.addEventListener("squeezestart",b),i.addEventListener("squeezeend",b),i.addEventListener("end",G),i.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:d}),p=new yr(d.framebufferWidth,d.framebufferHeight,{format:vn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let V=null,ae=null,ie=null;g.depth&&(ie=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=g.stencil?hs:lr,ae=g.stencil?ar:Ri);const se={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(se),i.updateRenderState({layers:[f]}),p=new yr(f.textureWidth,f.textureHeight,{format:vn,type:Ni,depthTexture:new Hy(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ve=e.properties.get(p);ve.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function K(k){for(let V=0;V<k.removed.length;V++){const ae=k.removed[V],ie=v.indexOf(ae);ie>=0&&(v[ie]=null,A[ie].disconnect(ae))}for(let V=0;V<k.added.length;V++){const ae=k.added[V];let ie=v.indexOf(ae);if(ie===-1){for(let ve=0;ve<A.length;ve++)if(ve>=v.length){v.push(ae),ie=ve;break}else if(v[ve]===null){v[ve]=ae,ie=ve;break}if(ie===-1)break}const se=A[ie];se&&se.connect(ae)}}const I=new C,N=new C;function O(k,V,ae){I.setFromMatrixPosition(V.matrixWorld),N.setFromMatrixPosition(ae.matrixWorld);const ie=I.distanceTo(N),se=V.projectionMatrix.elements,ve=ae.projectionMatrix.elements,Ce=se[14]/(se[10]-1),Ae=se[14]/(se[10]+1),We=(se[9]+1)/se[5],Rt=(se[9]-1)/se[5],Ne=(se[8]-1)/se[0],F=(ve[8]+1)/ve[0],At=Ce*Ne,xe=Ce*F,we=ie/(-Ne+F),Me=we*-Ne;V.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Me),k.translateZ(we),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const et=Ce+we,Fe=Ae+we,Le=At-Me,je=xe+(ie-Me),_t=We*Ae/Fe*et,Mt=Rt*Ae/Fe*et;k.projectionMatrix.makePerspective(Le,je,_t,Mt,et,Fe),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function $(k,V){V===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(V.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;T.near=M.near=x.near=k.near,T.far=M.far=x.far=k.far,(L!==T.near||y!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),L=T.near,y=T.far);const V=k.parent,ae=T.cameras;$(T,V);for(let ie=0;ie<ae.length;ie++)$(ae[ie],V);ae.length===2?O(T,x,M):T.projectionMatrix.copy(x.projectionMatrix),z(k,T,V)};function z(k,V,ae){ae===null?k.matrix.copy(V.matrixWorld):(k.matrix.copy(ae.matrixWorld),k.matrix.invert(),k.matrix.multiply(V.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0);const ie=k.children;for(let se=0,ve=ie.length;se<ve;se++)ie[se].updateMatrixWorld(!0);k.projectionMatrix.copy(V.projectionMatrix),k.projectionMatrixInverse.copy(V.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ds*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)};let X=null;function J(k,V){if(u=V.getViewerPose(c||o),_=V,u!==null){const ae=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ie=!1;ae.length!==T.cameras.length&&(T.cameras.length=0,ie=!0);for(let se=0;se<ae.length;se++){const ve=ae[se];let Ce=null;if(d!==null)Ce=d.getViewport(ve);else{const We=h.getViewSubImage(f,ve);Ce=We.viewport,se===0&&(e.setRenderTargetTextures(p,We.colorTexture,f.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(p))}let Ae=E[se];Ae===void 0&&(Ae=new Wt,Ae.layers.enable(se),Ae.viewport=new Ze,E[se]=Ae),Ae.matrix.fromArray(ve.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(ve.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),se===0&&(T.matrix.copy(Ae.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ie===!0&&T.cameras.push(Ae)}}for(let ae=0;ae<A.length;ae++){const ie=v[ae],se=A[ae];ie!==null&&se!==void 0&&se.update(ie,V,c||o)}X&&X(k,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),_=null}const Z=new Ad;Z.setAnimationLoop(J),this.setAnimationLoop=function(k){X=k},this.dispose=function(){}}}function Vy(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vd(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,A,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ft&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ft&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p).envMap;if(A&&(m.envMap.value=A,m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=r.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ft&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wy(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,v){const x=v.program;n.uniformBlockBinding(A,x)}function c(A,v){let x=i[A.id];x===void 0&&(_(A),x=u(A),i[A.id]=x,A.addEventListener("dispose",m));const M=v.program;n.updateUBOMapping(A,M);const E=e.render.frame;s[A.id]!==E&&(f(A),s[A.id]=E)}function u(A){const v=h();A.__bindingPointIndex=v;const x=r.createBuffer(),M=A.__size,E=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,M,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,x),x}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const v=i[A.id],x=A.uniforms,M=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let E=0,T=x.length;E<T;E++){const L=x[E];if(d(L,E,M)===!0){const y=L.__offset,b=Array.isArray(L.value)?L.value:[L.value];let G=0;for(let K=0;K<b.length;K++){const I=b[K],N=g(I);typeof I=="number"?(L.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,y+G,L.__data)):I.isMatrix3?(L.__data[0]=I.elements[0],L.__data[1]=I.elements[1],L.__data[2]=I.elements[2],L.__data[3]=I.elements[0],L.__data[4]=I.elements[3],L.__data[5]=I.elements[4],L.__data[6]=I.elements[5],L.__data[7]=I.elements[0],L.__data[8]=I.elements[6],L.__data[9]=I.elements[7],L.__data[10]=I.elements[8],L.__data[11]=I.elements[0]):(I.toArray(L.__data,G),G+=N.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,y,L.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(A,v,x){const M=A.value;if(x[v]===void 0){if(typeof M=="number")x[v]=M;else{const E=Array.isArray(M)?M:[M],T=[];for(let L=0;L<E.length;L++)T.push(E[L].clone());x[v]=T}return!0}else if(typeof M=="number"){if(x[v]!==M)return x[v]=M,!0}else{const E=Array.isArray(x[v])?x[v]:[x[v]],T=Array.isArray(M)?M:[M];for(let L=0;L<E.length;L++){const y=E[L];if(y.equals(T[L])===!1)return y.copy(T[L]),!0}}return!1}function _(A){const v=A.uniforms;let x=0;const M=16;let E=0;for(let T=0,L=v.length;T<L;T++){const y=v[T],b={boundary:0,storage:0},G=Array.isArray(y.value)?y.value:[y.value];for(let K=0,I=G.length;K<I;K++){const N=G[K],O=g(N);b.boundary+=O.boundary,b.storage+=O.storage}if(y.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=x,T>0){E=x%M;const K=M-E;E!==0&&K-b.boundary<0&&(x+=M-E,y.__offset=x)}x+=b.storage}return E=x%M,E>0&&(x+=M-E),A.__size=x,A.__cache={},this}function g(A){const v={boundary:0,storage:0};return typeof A=="number"?(v.boundary=4,v.storage=4):A.isVector2?(v.boundary=8,v.storage=8):A.isVector3||A.isColor?(v.boundary=16,v.storage=12):A.isVector4?(v.boundary=16,v.storage=16):A.isMatrix3?(v.boundary=48,v.storage=48):A.isMatrix4?(v.boundary=64,v.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),v}function m(A){const v=A.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const A in i)r.deleteBuffer(i[A]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}function Xy(){const r=no("canvas");return r.style.display="block",r}class bd{constructor(e={}){const{canvas:t=Xy(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=be,this.useLegacyLights=!0,this.toneMapping=hi,this.toneMappingExposure=1;const v=this;let x=!1,M=0,E=0,T=null,L=-1,y=null;const b=new Ze,G=new Ze;let K=null;const I=new Te(0);let N=0,O=t.width,$=t.height,z=1,X=null,J=null;const Z=new Ze(0,0,O,$),k=new Ze(0,0,O,$);let V=!1;const ae=new wc;let ie=!1,se=!1,ve=null;const Ce=new De,Ae=new he,We=new C,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return T===null?z:1}let F=n;function At(w,B){for(let q=0;q<w.length;q++){const U=w[q],Y=t.getContext(U,B);if(Y!==null)return Y}return null}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mc}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",re,!1),F===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),F=At(B,w),F===null)throw At(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let xe,we,Me,et,Fe,Le,je,_t,Mt,R,S,j,ne,te,P,Q,ee,H,pe,_e,ge,me,fe,Se;function ze(){xe=new tx(F),we=new Kv(F,xe,e),xe.init(we),me=new By(F,xe,we),Me=new Oy(F,xe,we),et=new rx(F),Fe=new My,Le=new Fy(F,xe,Me,Fe,we,me,et),je=new Zv(v),_t=new ex(v),Mt=new p_(F,we),fe=new qv(F,xe,Mt,we),R=new nx(F,Mt,et,fe),S=new lx(F,R,Mt,et),pe=new ax(F,we,Le),Q=new $v(Fe),j=new Ay(v,je,_t,xe,we,fe,Q),ne=new Vy(v,Fe),te=new Ty,P=new Py(xe,we),H=new jv(v,je,_t,Me,S,f,l),ee=new Ny(v,S,we),Se=new Wy(F,et,we,Me),_e=new Yv(F,xe,et,we),ge=new ix(F,xe,et,we),et.programs=j.programs,v.capabilities=we,v.extensions=xe,v.properties=Fe,v.renderLists=te,v.shadowMap=ee,v.state=Me,v.info=et}ze();const D=new Gy(v,F);this.xr=D,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=xe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=xe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(O,$,!1))},this.getSize=function(w){return w.set(O,$)},this.setSize=function(w,B,q=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,$=B,t.width=Math.floor(w*z),t.height=Math.floor(B*z),q===!0&&(t.style.width=w+"px",t.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(O*z,$*z).floor()},this.setDrawingBufferSize=function(w,B,q){O=w,$=B,z=q,t.width=Math.floor(w*q),t.height=Math.floor(B*q),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,B,q,U){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,B,q,U),Me.viewport(b.copy(Z).multiplyScalar(z).floor())},this.getScissor=function(w){return w.copy(k)},this.setScissor=function(w,B,q,U){w.isVector4?k.set(w.x,w.y,w.z,w.w):k.set(w,B,q,U),Me.scissor(G.copy(k).multiplyScalar(z).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(w){Me.setScissorTest(V=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){J=w},this.getClearColor=function(w){return w.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(w=!0,B=!0,q=!0){let U=0;if(w){let Y=!1;if(T!==null){const de=T.texture.format;Y=de===od||de===sd||de===rd}if(Y){const de=T.texture.type,ye=de===Ni||de===Ri||de===Sc||de===ar||de===nd||de===id,Ee=H.getClearColor(),Re=H.getClearAlpha(),Be=Ee.r,Pe=Ee.g,Ie=Ee.b;ye?(d[0]=Be,d[1]=Pe,d[2]=Ie,d[3]=Re,F.clearBufferuiv(F.COLOR,0,d)):(_[0]=Be,_[1]=Pe,_[2]=Ie,_[3]=Re,F.clearBufferiv(F.COLOR,0,_))}else U|=F.COLOR_BUFFER_BIT}B&&(U|=F.DEPTH_BUFFER_BIT),q&&(U|=F.STENCIL_BUFFER_BIT),F.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",re,!1),te.dispose(),P.dispose(),Fe.dispose(),je.dispose(),_t.dispose(),S.dispose(),fe.dispose(),Se.dispose(),j.dispose(),D.dispose(),D.removeEventListener("sessionstart",ot),D.removeEventListener("sessionend",Un),ve&&(ve.dispose(),ve=null),zt.stop()};function le(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=et.autoReset,B=ee.enabled,q=ee.autoUpdate,U=ee.needsUpdate,Y=ee.type;ze(),et.autoReset=w,ee.enabled=B,ee.autoUpdate=q,ee.needsUpdate=U,ee.type=Y}function re(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ce(w){const B=w.target;B.removeEventListener("dispose",ce),Xe(B)}function Xe(w){nt(w),Fe.remove(w)}function nt(w){const B=Fe.get(w).programs;B!==void 0&&(B.forEach(function(q){j.releaseProgram(q)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,q,U,Y,de){B===null&&(B=Rt);const ye=Y.isMesh&&Y.matrixWorld.determinant()<0,Ee=$p(w,B,q,U,Y);Me.setMaterial(U,ye);let Re=q.index,Be=1;U.wireframe===!0&&(Re=R.getWireframeAttribute(q),Be=2);const Pe=q.drawRange,Ie=q.attributes.position;let at=Pe.start*Be,ht=(Pe.start+Pe.count)*Be;de!==null&&(at=Math.max(at,de.start*Be),ht=Math.min(ht,(de.start+de.count)*Be)),Re!==null?(at=Math.max(at,0),ht=Math.min(ht,Re.count)):Ie!=null&&(at=Math.max(at,0),ht=Math.min(ht,Ie.count));const Tn=ht-at;if(Tn<0||Tn===1/0)return;fe.setup(Y,U,Ee,q,Re);let qn,dt=_e;if(Re!==null&&(qn=Mt.get(Re),dt=ge,dt.setIndex(qn)),Y.isMesh)U.wireframe===!0?(Me.setLineWidth(U.wireframeLinewidth*Ne()),dt.setMode(F.LINES)):dt.setMode(F.TRIANGLES);else if(Y.isLine){let Ve=U.linewidth;Ve===void 0&&(Ve=1),Me.setLineWidth(Ve*Ne()),Y.isLineSegments?dt.setMode(F.LINES):Y.isLineLoop?dt.setMode(F.LINE_LOOP):dt.setMode(F.LINE_STRIP)}else Y.isPoints?dt.setMode(F.POINTS):Y.isSprite&&dt.setMode(F.TRIANGLES);if(Y.isInstancedMesh)dt.renderInstances(at,Tn,Y.count);else if(q.isInstancedBufferGeometry){const Ve=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ba=Math.min(q.instanceCount,Ve);dt.renderInstances(at,Tn,Ba)}else dt.render(at,Tn)},this.compile=function(w,B){function q(U,Y,de){U.transparent===!0&&U.side===Kt&&U.forceSinglePass===!1?(U.side=Ft,U.needsUpdate=!0,So(U,Y,de),U.side=Hn,U.needsUpdate=!0,So(U,Y,de),U.side=Kt):So(U,Y,de)}m=P.get(w),m.init(),A.push(m),w.traverseVisible(function(U){U.isLight&&U.layers.test(B.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights(v.useLegacyLights),w.traverse(function(U){const Y=U.material;if(Y)if(Array.isArray(Y))for(let de=0;de<Y.length;de++){const ye=Y[de];q(ye,w,U)}else q(Y,w,U)}),A.pop(),m=null};let St=null;function In(w){St&&St(w)}function ot(){zt.stop()}function Un(){zt.start()}const zt=new Ad;zt.setAnimationLoop(In),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(w){St=w,D.setAnimationLoop(w),w===null?zt.stop():zt.start()},D.addEventListener("sessionstart",ot),D.addEventListener("sessionend",Un),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(B),B=D.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,B,T),m=P.get(w,A.length),m.init(),A.push(m),Ce.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ae.setFromProjectionMatrix(Ce),se=this.localClippingEnabled,ie=Q.init(this.clippingPlanes,se),g=te.get(w,p.length),g.init(),p.push(g),lu(w,B,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(X,J),this.info.render.frame++,ie===!0&&Q.beginShadows();const q=m.state.shadowsArray;if(ee.render(q,w,B),ie===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(g,w),m.setupLights(v.useLegacyLights),B.isArrayCamera){const U=B.cameras;for(let Y=0,de=U.length;Y<de;Y++){const ye=U[Y];cu(g,w,ye,ye.viewport)}}else cu(g,w,B);T!==null&&(Le.updateMultisampleRenderTarget(T),Le.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(v,w,B),fe.resetDefaultState(),L=-1,y=null,A.pop(),A.length>0?m=A[A.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function lu(w,B,q,U){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ae.intersectsSprite(w)){U&&We.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ce);const ye=S.update(w),Ee=w.material;Ee.visible&&g.push(w,ye,Ee,q,We.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ae.intersectsObject(w))){const ye=S.update(w),Ee=w.material;if(U&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),We.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),We.copy(ye.boundingSphere.center)),We.applyMatrix4(w.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ee)){const Re=ye.groups;for(let Be=0,Pe=Re.length;Be<Pe;Be++){const Ie=Re[Be],at=Ee[Ie.materialIndex];at&&at.visible&&g.push(w,ye,at,q,We.z,Ie)}}else Ee.visible&&g.push(w,ye,Ee,q,We.z,null)}}const de=w.children;for(let ye=0,Ee=de.length;ye<Ee;ye++)lu(de[ye],B,q,U)}function cu(w,B,q,U){const Y=w.opaque,de=w.transmissive,ye=w.transparent;m.setupLightsView(q),ie===!0&&Q.setGlobalState(v.clippingPlanes,q),de.length>0&&Kp(Y,de,B,q),U&&Me.viewport(b.copy(U)),Y.length>0&&Mo(Y,B,q),de.length>0&&Mo(de,B,q),ye.length>0&&Mo(ye,B,q),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Kp(w,B,q,U){const Y=we.isWebGL2;ve===null&&(ve=new yr(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?eo:Ni,minFilter:xr,samples:Y?4:0})),v.getDrawingBufferSize(Ae),Y?ve.setSize(Ae.x,Ae.y):ve.setSize(da(Ae.x),da(Ae.y));const de=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(I),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const ye=v.toneMapping;v.toneMapping=hi,Mo(w,q,U),Le.updateMultisampleRenderTarget(ve),Le.updateRenderTargetMipmap(ve);let Ee=!1;for(let Re=0,Be=B.length;Re<Be;Re++){const Pe=B[Re],Ie=Pe.object,at=Pe.geometry,ht=Pe.material,Tn=Pe.group;if(ht.side===Kt&&Ie.layers.test(U.layers)){const qn=ht.side;ht.side=Ft,ht.needsUpdate=!0,uu(Ie,q,U,at,ht,Tn),ht.side=qn,ht.needsUpdate=!0,Ee=!0}}Ee===!0&&(Le.updateMultisampleRenderTarget(ve),Le.updateRenderTargetMipmap(ve)),v.setRenderTarget(de),v.setClearColor(I,N),v.toneMapping=ye}function Mo(w,B,q){const U=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,de=w.length;Y<de;Y++){const ye=w[Y],Ee=ye.object,Re=ye.geometry,Be=U===null?ye.material:U,Pe=ye.group;Ee.layers.test(q.layers)&&uu(Ee,B,q,Re,Be,Pe)}}function uu(w,B,q,U,Y,de){w.onBeforeRender(v,B,q,U,Y,de),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(v,B,q,U,w,de),Y.transparent===!0&&Y.side===Kt&&Y.forceSinglePass===!1?(Y.side=Ft,Y.needsUpdate=!0,v.renderBufferDirect(q,B,U,Y,w,de),Y.side=Hn,Y.needsUpdate=!0,v.renderBufferDirect(q,B,U,Y,w,de),Y.side=Kt):v.renderBufferDirect(q,B,U,Y,w,de),w.onAfterRender(v,B,q,U,Y,de)}function So(w,B,q){B.isScene!==!0&&(B=Rt);const U=Fe.get(w),Y=m.state.lights,de=m.state.shadowsArray,ye=Y.state.version,Ee=j.getParameters(w,Y.state,de,B,q),Re=j.getProgramCacheKey(Ee);let Be=U.programs;U.environment=w.isMeshStandardMaterial?B.environment:null,U.fog=B.fog,U.envMap=(w.isMeshStandardMaterial?_t:je).get(w.envMap||U.environment),Be===void 0&&(w.addEventListener("dispose",ce),Be=new Map,U.programs=Be);let Pe=Be.get(Re);if(Pe!==void 0){if(U.currentProgram===Pe&&U.lightsStateVersion===ye)return hu(w,Ee),Pe}else Ee.uniforms=j.getUniforms(w),w.onBuild(q,Ee,v),w.onBeforeCompile(Ee,v),Pe=j.acquireProgram(Ee,Re),Be.set(Re,Pe),U.uniforms=Ee.uniforms;const Ie=U.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=Q.uniform),hu(w,Ee),U.needsLights=Qp(w),U.lightsStateVersion=ye,U.needsLights&&(Ie.ambientLightColor.value=Y.state.ambient,Ie.lightProbe.value=Y.state.probe,Ie.directionalLights.value=Y.state.directional,Ie.directionalLightShadows.value=Y.state.directionalShadow,Ie.spotLights.value=Y.state.spot,Ie.spotLightShadows.value=Y.state.spotShadow,Ie.rectAreaLights.value=Y.state.rectArea,Ie.ltc_1.value=Y.state.rectAreaLTC1,Ie.ltc_2.value=Y.state.rectAreaLTC2,Ie.pointLights.value=Y.state.point,Ie.pointLightShadows.value=Y.state.pointShadow,Ie.hemisphereLights.value=Y.state.hemi,Ie.directionalShadowMap.value=Y.state.directionalShadowMap,Ie.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ie.spotShadowMap.value=Y.state.spotShadowMap,Ie.spotLightMatrix.value=Y.state.spotLightMatrix,Ie.spotLightMap.value=Y.state.spotLightMap,Ie.pointShadowMap.value=Y.state.pointShadowMap,Ie.pointShadowMatrix.value=Y.state.pointShadowMatrix);const at=Pe.getUniforms(),ht=ea.seqWithValue(at.seq,Ie);return U.currentProgram=Pe,U.uniformsList=ht,Pe}function hu(w,B){const q=Fe.get(w);q.outputColorSpace=B.outputColorSpace,q.instancing=B.instancing,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function $p(w,B,q,U,Y){B.isScene!==!0&&(B=Rt),Le.resetTextureUnits();const de=B.fog,ye=U.isMeshStandardMaterial?B.environment:null,Ee=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Gn,Re=(U.isMeshStandardMaterial?_t:je).get(U.envMap||ye),Be=U.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Pe=!!q.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ie=!!q.morphAttributes.position,at=!!q.morphAttributes.normal,ht=!!q.morphAttributes.color,Tn=U.toneMapped?v.toneMapping:hi,qn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,dt=qn!==void 0?qn.length:0,Ve=Fe.get(U),Ba=m.state.lights;if(ie===!0&&(se===!0||w!==y)){const tn=w===y&&U.id===L;Q.setState(U,w,tn)}let Tt=!1;U.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ba.state.version||Ve.outputColorSpace!==Ee||Y.isInstancedMesh&&Ve.instancing===!1||!Y.isInstancedMesh&&Ve.instancing===!0||Y.isSkinnedMesh&&Ve.skinning===!1||!Y.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Re||U.fog===!0&&Ve.fog!==de||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Q.numPlanes||Ve.numIntersection!==Q.numIntersection)||Ve.vertexAlphas!==Be||Ve.vertexTangents!==Pe||Ve.morphTargets!==Ie||Ve.morphNormals!==at||Ve.morphColors!==ht||Ve.toneMapping!==Tn||we.isWebGL2===!0&&Ve.morphTargetsCount!==dt)&&(Tt=!0):(Tt=!0,Ve.__version=U.version);let ji=Ve.currentProgram;Tt===!0&&(ji=So(U,B,Y));let fu=!1,bs=!1,ka=!1;const Ht=ji.getUniforms(),qi=Ve.uniforms;if(Me.useProgram(ji.program)&&(fu=!0,bs=!0,ka=!0),U.id!==L&&(L=U.id,bs=!0),fu||y!==w){if(Ht.setValue(F,"projectionMatrix",w.projectionMatrix),we.logarithmicDepthBuffer&&Ht.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),y!==w&&(y=w,bs=!0,ka=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const tn=Ht.map.cameraPosition;tn!==void 0&&tn.setValue(F,We.setFromMatrixPosition(w.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ht.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Y.isSkinnedMesh)&&Ht.setValue(F,"viewMatrix",w.matrixWorldInverse)}if(Y.isSkinnedMesh){Ht.setOptional(F,Y,"bindMatrix"),Ht.setOptional(F,Y,"bindMatrixInverse");const tn=Y.skeleton;tn&&(we.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Ht.setValue(F,"boneTexture",tn.boneTexture,Le),Ht.setValue(F,"boneTextureSize",tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const za=q.morphAttributes;if((za.position!==void 0||za.normal!==void 0||za.color!==void 0&&we.isWebGL2===!0)&&pe.update(Y,q,ji),(bs||Ve.receiveShadow!==Y.receiveShadow)&&(Ve.receiveShadow=Y.receiveShadow,Ht.setValue(F,"receiveShadow",Y.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(qi.envMap.value=Re,qi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),bs&&(Ht.setValue(F,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&Zp(qi,ka),de&&U.fog===!0&&ne.refreshFogUniforms(qi,de),ne.refreshMaterialUniforms(qi,U,z,$,ve),ea.upload(F,Ve.uniformsList,qi,Le)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ea.upload(F,Ve.uniformsList,qi,Le),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ht.setValue(F,"center",Y.center),Ht.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Ht.setValue(F,"normalMatrix",Y.normalMatrix),Ht.setValue(F,"modelMatrix",Y.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const tn=U.uniformsGroups;for(let Ha=0,Jp=tn.length;Ha<Jp;Ha++)if(we.isWebGL2){const du=tn[Ha];Se.update(du,ji),Se.bind(du,ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ji}function Zp(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Qp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,B,q){Fe.get(w.texture).__webglTexture=B,Fe.get(w.depthTexture).__webglTexture=q;const U=Fe.get(w);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=q===void 0,U.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,B){const q=Fe.get(w);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,q=0){T=w,M=B,E=q;let U=!0,Y=null,de=!1,ye=!1;if(w){const Re=Fe.get(w);Re.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(F.FRAMEBUFFER,null),U=!1):Re.__webglFramebuffer===void 0?Le.setupRenderTarget(w):Re.__hasExternalTextures&&Le.rebindTextures(w,Fe.get(w.texture).__webglTexture,Fe.get(w.depthTexture).__webglTexture);const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ye=!0);const Pe=Fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Y=Pe[B],de=!0):we.isWebGL2&&w.samples>0&&Le.useMultisampledRTT(w)===!1?Y=Fe.get(w).__webglMultisampledFramebuffer:Y=Pe,b.copy(w.viewport),G.copy(w.scissor),K=w.scissorTest}else b.copy(Z).multiplyScalar(z).floor(),G.copy(k).multiplyScalar(z).floor(),K=V;if(Me.bindFramebuffer(F.FRAMEBUFFER,Y)&&we.drawBuffers&&U&&Me.drawBuffers(w,Y),Me.viewport(b),Me.scissor(G),Me.setScissorTest(K),de){const Re=Fe.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,Re.__webglTexture,q)}else if(ye){const Re=Fe.get(w.texture),Be=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.__webglTexture,q||0,Be)}L=-1},this.readRenderTargetPixels=function(w,B,q,U,Y,de,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){Me.bindFramebuffer(F.FRAMEBUFFER,Ee);try{const Re=w.texture,Be=Re.format,Pe=Re.type;if(Be!==vn&&me.convert(Be)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Pe===eo&&(xe.has("EXT_color_buffer_half_float")||we.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Pe!==Ni&&me.convert(Pe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===ai&&(we.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-U&&q>=0&&q<=w.height-Y&&F.readPixels(B,q,U,Y,me.convert(Be),me.convert(Pe),de)}finally{const Re=T!==null?Fe.get(T).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(w,B,q=0){const U=Math.pow(2,-q),Y=Math.floor(B.image.width*U),de=Math.floor(B.image.height*U);Le.setTexture2D(B,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,w.x,w.y,Y,de),Me.unbindTexture()},this.copyTextureToTexture=function(w,B,q,U=0){const Y=B.image.width,de=B.image.height,ye=me.convert(q.format),Ee=me.convert(q.type);Le.setTexture2D(q,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment),B.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,w.x,w.y,Y,de,ye,Ee,B.image.data):B.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,w.x,w.y,B.mipmaps[0].width,B.mipmaps[0].height,ye,B.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,U,w.x,w.y,ye,Ee,B.image),U===0&&q.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(w,B,q,U,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=w.max.x-w.min.x+1,ye=w.max.y-w.min.y+1,Ee=w.max.z-w.min.z+1,Re=me.convert(U.format),Be=me.convert(U.type);let Pe;if(U.isData3DTexture)Le.setTexture3D(U,0),Pe=F.TEXTURE_3D;else if(U.isDataArrayTexture)Le.setTexture2DArray(U,0),Pe=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const Ie=F.getParameter(F.UNPACK_ROW_LENGTH),at=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ht=F.getParameter(F.UNPACK_SKIP_PIXELS),Tn=F.getParameter(F.UNPACK_SKIP_ROWS),qn=F.getParameter(F.UNPACK_SKIP_IMAGES),dt=q.isCompressedTexture?q.mipmaps[0]:q.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,dt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,dt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,w.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,w.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,w.min.z),q.isDataTexture||q.isData3DTexture?F.texSubImage3D(Pe,Y,B.x,B.y,B.z,de,ye,Ee,Re,Be,dt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Pe,Y,B.x,B.y,B.z,de,ye,Ee,Re,dt.data)):F.texSubImage3D(Pe,Y,B.x,B.y,B.z,de,ye,Ee,Re,Be,dt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ie),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,at),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ht),F.pixelStorei(F.UNPACK_SKIP_ROWS,Tn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qn),Y===0&&U.generateMipmaps&&F.generateMipmap(Pe),Me.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Le.setTextureCube(w,0):w.isData3DTexture?Le.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Le.setTexture2DArray(w,0):Le.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){M=0,E=0,T=null,Me.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===be?cr:ld}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===cr?be:Gn}}class jy extends bd{}jy.prototype.isWebGL1Renderer=!0;class xo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new xo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class qy extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Yy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new C;class Lc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Uh=new C,Nh=new Ze,Oh=new Ze,Ky=new C,Fh=new De,jr=new C,_l=new Xn,Bh=new De,vl=new _o;class $y extends Xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _i),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)jr.fromBufferAttribute(t,n),this.applyBoneTransform(n,jr),this.boundingBox.expandByPoint(jr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)jr.fromBufferAttribute(t,n),this.applyBoneTransform(n,jr),this.boundingSphere.expandByPoint(jr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_l.copy(this.boundingSphere),_l.applyMatrix4(i),e.ray.intersectsSphere(_l)!==!1&&(Bh.copy(i).invert(),vl.copy(e.ray).applyMatrix4(Bh),!(this.boundingBox!==null&&vl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Nh.fromBufferAttribute(i.attributes.skinIndex,e),Oh.fromBufferAttribute(i.attributes.skinWeight,e),Uh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Oh.getComponent(s);if(o!==0){const a=Nh.getComponent(s);Fh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ky.copy(Uh).applyMatrix4(Fh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class wd extends Qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zy extends Pt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=tt,u=tt,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kh=new De,Qy=new De;class Dc{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Qy;kh.multiplyMatrices(a,t[s]),kh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Dc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=ud(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Zy(t,e,e,vn,ai);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new wd),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class zh extends jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qr=new De,Hh=new De,Wo=[],Gh=new _i,Jy=new De,Ls=new Xt,Ds=new Xn;class Ic extends Xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Jy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qr),Gh.copy(e.boundingBox).applyMatrix4(qr),this.boundingBox.union(Gh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qr),Ds.copy(e.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(Ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),e.ray.intersectsSphere(Ds)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,qr),Hh.multiplyMatrices(n,qr),Ls.matrixWorld=Hh,Ls.raycast(e,Wo);for(let o=0,a=Wo.length;o<a;o++){const l=Wo[o];l.instanceId=s,l.object=this,t.push(l)}Wo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Uc extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vh=new C,Wh=new C,Xh=new De,xl=new _o,Xo=new Xn;class La extends Qe{constructor(e=new fn,t=new Uc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Vh.fromBufferAttribute(t,i-1),Wh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Vh.distanceTo(Wh);e.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(i),Xo.radius+=s,e.ray.intersectsSphere(Xo)===!1)return;Xh.copy(i).invert(),xl.copy(e.ray).applyMatrix4(Xh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,u=new C,h=new C,f=new C,d=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,o.start),A=Math.min(_.count,o.start+o.count);for(let v=p,x=A-1;v<x;v+=d){const M=_.getX(v),E=_.getX(v+1);if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,E),xl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),A=Math.min(m.count,o.start+o.count);for(let v=p,x=A-1;v<x;v+=d){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),xl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const jh=new C,qh=new C;class eA extends La{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)jh.fromBufferAttribute(t,i),qh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+jh.distanceTo(qh);e.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tA extends La{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Rd extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yh=new De,Ql=new _o,jo=new Xn,qo=new C;class nA extends Qe{constructor(e=new fn,t=new Rd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(i),jo.radius+=s,e.ray.intersectsSphere(jo)===!1)return;Yh.copy(i).invert(),Ql.copy(e.ray).applyMatrix4(Yh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const m=c.getX(_);qo.fromBufferAttribute(h,m),Kh(qo,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)qo.fromBufferAttribute(h,_),Kh(qo,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kh(r,e,t,n,i,s,o){const a=Ql.distanceSqToPoint(r);if(a<t){const l=new C;Ql.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class vi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new he:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,i=[],s=[],o=[],a=new C,l=new De;for(let d=0;d<=e;d++){const _=d/e;i[d]=this.getTangentAt(_,new C)}s[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(vt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(vt(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],d*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Cd extends vi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new he,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class iA extends Cd{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Nc(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Yo=new C,yl=new Nc,Al=new Nc,Ml=new Nc;class Pd extends vi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Yo.subVectors(i[0],i[1]).add(i[0]),c=Yo);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Yo.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Yo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),yl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,g,m),Al.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,g,m),Ml.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(yl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Al.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ml.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(yl.calc(l),Al.calc(l),Ml.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $h(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function rA(r,e){const t=1-r;return t*t*e}function sA(r,e){return 2*(1-r)*r*e}function oA(r,e){return r*r*e}function Xs(r,e,t,n){return rA(r,e)+sA(r,t)+oA(r,n)}function aA(r,e){const t=1-r;return t*t*t*e}function lA(r,e){const t=1-r;return 3*t*t*r*e}function cA(r,e){return 3*(1-r)*r*r*e}function uA(r,e){return r*r*r*e}function js(r,e,t,n,i){return aA(r,e)+lA(r,t)+cA(r,n)+uA(r,i)}class hA extends vi{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(js(e,i.x,s.x,o.x,a.x),js(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fA extends vi{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(js(e,i.x,s.x,o.x,a.x),js(e,i.y,s.y,o.y,a.y),js(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dA extends vi{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pA extends vi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mA extends vi{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Xs(e,i.x,s.x,o.x),Xs(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ld extends vi{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Xs(e,i.x,s.x,o.x),Xs(e,i.y,s.y,o.y),Xs(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gA extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set($h(a,l.x,c.x,u.x,h.x),$h(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new he().fromArray(i))}return this}}var _A=Object.freeze({__proto__:null,ArcCurve:iA,CatmullRomCurve3:Pd,CubicBezierCurve:hA,CubicBezierCurve3:fA,EllipseCurve:Cd,LineCurve:dA,LineCurve3:pA,QuadraticBezierCurve:mA,QuadraticBezierCurve3:Ld,SplineCurve:gA});class Oc extends fn{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],u=[],h=new C,f=new C,d=new C,_=new C,g=new C,m=new C,p=new C;for(let v=0;v<=n;++v){const x=v/n*s*Math.PI*2;A(x,s,o,e,d),A(x+.01,s,o,e,_),m.subVectors(_,d),p.addVectors(_,d),g.crossVectors(m,p),p.crossVectors(g,m),g.normalize(),p.normalize();for(let M=0;M<=i;++M){const E=M/i*Math.PI*2,T=-t*Math.cos(E),L=t*Math.sin(E);h.x=d.x+(T*p.x+L*g.x),h.y=d.y+(T*p.y+L*g.y),h.z=d.z+(T*p.z+L*g.z),l.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),c.push(f.x,f.y,f.z),u.push(v/n),u.push(M/i)}}for(let v=1;v<=n;v++)for(let x=1;x<=i;x++){const M=(i+1)*(v-1)+(x-1),E=(i+1)*v+(x-1),T=(i+1)*v+x,L=(i+1)*(v-1)+x;a.push(M,E,L),a.push(E,T,L)}this.setIndex(a),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(u,2));function A(v,x,M,E,T){const L=Math.cos(v),y=Math.sin(v),b=M/x*v,G=Math.cos(b);T.x=E*(2+G)*.5*L,T.y=E*(2+G)*y*.5,T.z=E*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class pa extends fn{constructor(e=new Ld(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,l=new C,c=new he;let u=new C;const h=[],f=[],d=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(d,2));function g(){for(let v=0;v<t;v++)m(v);m(s===!1?t:0),A(),p()}function m(v){u=e.getPointAt(v/t,u);const x=o.normals[v],M=o.binormals[v];for(let E=0;E<=i;E++){const T=E/i*Math.PI*2,L=Math.sin(T),y=-Math.cos(T);l.x=y*x.x+L*M.x,l.y=y*x.y+L*M.y,l.z=y*x.z+L*M.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let x=1;x<=i;x++){const M=(i+1)*(v-1)+(x-1),E=(i+1)*v+(x-1),T=(i+1)*v+x,L=(i+1)*(v-1)+x;_.push(M,E,L),_.push(E,T,L)}}function A(){for(let v=0;v<=t;v++)for(let x=0;x<=i;x++)c.x=v/t,c.y=x/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new pa(new _A[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Da extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wi extends Da{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Jl extends Ln{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Te(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class vA extends Uc{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Si(r,e,t){return Dd(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Ko(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Dd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function xA(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Zh(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Id(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class yo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yA extends yo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ju,endingEnd:ju}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case qu:s=e,a=2*t-n;break;case Yu:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qu:o=e,l=2*n-t;break;case Yu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,A=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,v=(-1-d)*m+(1.5+d)*g+.5*_,x=d*m-d*g;for(let M=0;M!==a;++M)s[M]=p*o[u+M]+A*o[c+M]+v*o[l+M]+x*o[h+M];return s}}class AA extends yo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class MA extends yo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class jn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ko(t,this.TimeBufferType),this.values=Ko(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ko(e.times,Array),values:Ko(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new MA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new AA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case to:t=this.InterpolantFactoryMethodDiscrete;break;case fs:t=this.InterpolantFactoryMethodLinear;break;case Ya:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return fs;case this.InterpolantFactoryMethodSmooth:return Ya}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Si(n,s,o),this.values=Si(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Dd(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Si(this.times),t=Si(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ya,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Si(e,0,o),this.values=Si(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Si(this.times,0),t=Si(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=fs;class Ss extends jn{}Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=to;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Ud extends jn{}Ud.prototype.ValueTypeName="color";class ms extends jn{}ms.prototype.ValueTypeName="number";class SA extends yo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Vn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Mr extends jn{InterpolantFactoryMethodLinear(e){return new SA(this.times,this.values,this.getValueSize(),e)}}Mr.prototype.ValueTypeName="quaternion";Mr.prototype.DefaultInterpolation=fs;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ts extends jn{}Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=to;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class io extends jn{}io.prototype.ValueTypeName="vector";class TA{constructor(e,t=-1,n,i=dg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(bA(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(jn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=xA(l);l=Zh(l,1,u),c=Zh(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ms(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const m=[],p=[];Id(d,m,p,_),m.length!==0&&g.push(new h(f,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let A=0;A!==f[_].morphTargets.length;++A){const v=f[_];m.push(v.time),p.push(v.morphTarget===g?1:0)}i.push(new ms(".morphTargetInfluence["+g+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(io,d+".position",f,"pos",i),n(Mr,d+".quaternion",f,"rot",i),n(io,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function EA(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ms;case"vector":case"vector2":case"vector3":case"vector4":return io;case"color":return Ud;case"quaternion":return Mr;case"bool":case"boolean":return Ss;case"string":return Ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function bA(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=EA(r.type);if(r.times===void 0){const t=[],n=[];Id(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const gs={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class wA{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const RA=new wA;class Es{constructor(e){this.manager=e!==void 0?e:RA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Es.DEFAULT_MATERIAL_NAME="__DEFAULT";const ei={};class CA extends Error{constructor(e,t){super(e),this.response=t}}class Nd extends Es{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=gs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:n,onError:i});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ei[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){A();function A(){h.read().then(({done:v,value:x})=>{if(v)p.close();else{g+=x.byteLength;const M=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let E=0,T=u.length;E<T;E++){const L=u[E];L.onProgress&&L.onProgress(M)}p.enqueue(x),A()}})}}});return new Response(m)}else throw new CA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{gs.add(e,c);const u=ei[e];delete ei[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ei[e];if(u===void 0)throw this.manager.itemError(e),c;delete ei[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class PA extends Es{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=gs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=no("img");function l(){u(),gs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Od extends Es{constructor(e){super(e)}load(e,t,n,i){const s=new Pt,o=new PA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ia extends Qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Sl=new De,Qh=new C,Jh=new C;class Fc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wc,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qh),Jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jh),t.updateMatrixWorld(),Sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class LA extends Fc{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ds*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Fd extends Ia{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new LA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ef=new De,Is=new C,Tl=new C;class DA extends Fc{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Is.setFromMatrixPosition(e.matrixWorld),n.position.copy(Is),Tl.copy(n.position),Tl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Tl),n.updateMatrixWorld(),i.makeTranslation(-Is.x,-Is.y,-Is.z),ef.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ef)}}class Bd extends Ia{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new DA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class IA extends Fc{constructor(){super(new Cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kd extends Ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new IA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class UA extends Ia{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ec{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class NA extends Es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=gs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){gs.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const Bc="\\[\\]\\.:\\/",OA=new RegExp("["+Bc+"]","g"),kc="[^"+Bc+"]",FA="[^"+Bc.replace("\\.","")+"]",BA=/((?:WC+[\/:])*)/.source.replace("WC",kc),kA=/(WCOD+)?/.source.replace("WCOD",FA),zA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kc),HA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kc),GA=new RegExp("^"+BA+kA+zA+HA+"$"),VA=["material","materials","bones","map"];class WA{constructor(e,t,n){const i=n||qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class qe{constructor(e,t,n){this.path=t,this.parsedPath=n||qe.parseTrackName(t),this.node=qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new qe.Composite(e,t,n):new qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(OA,"")}static parseTrackName(e){const t=GA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);VA.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qe.Composite=WA;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class XA{constructor(e,t,n=0,i=1/0){this.ray=new _o(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return tc(e,this,n,t),n.sort(tf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)tc(e[i],this,n,t);return n.sort(tf),n}}function tf(r,e){return r.distance-e.distance}function tc(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)tc(i[s],e,t,!0)}}class nf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);var jA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qA(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var zd={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(jA,function(){var t=function(){var n=0,i=document.createElement("div");function s(d){return i.appendChild(d.dom),d}function o(d){for(var _=0;_<i.children.length;_++)i.children[_].style.display=_===d?"block":"none";n=d}i.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",i.addEventListener("click",function(d){d.preventDefault(),o(++n%i.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,u=s(new t.Panel("FPS","#0ff","#002")),h=s(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=s(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:i,addPanel:s,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){c++;var d=(performance||Date).now();if(h.update(d-a,200),l+1e3<=d&&(u.update(1e3*c/(d-l),100),l=d,c=0,f)){var _=performance.memory;f.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:i,setMode:o}};return t.Panel=function(n,i,s){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,h=48*c,f=3*c,d=2*c,_=3*c,g=15*c,m=74*c,p=30*c,A=document.createElement("canvas");A.width=u,A.height=h,A.style.cssText="width:80px;height:48px";var v=A.getContext("2d");return v.font="bold "+9*c+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=s,v.fillRect(0,0,u,h),v.fillStyle=i,v.fillText(n,f,d),v.fillRect(_,g,m,p),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(_,g,m,p),{dom:A,update:function(x,M){o=Math.min(o,x),a=Math.max(a,x),v.fillStyle=s,v.globalAlpha=1,v.fillRect(0,0,u,g),v.fillStyle=i,v.fillText(l(x)+" "+n+" ("+l(o)+"-"+l(a)+")",f,d),v.drawImage(A,_+c,g,m-c,p,_,g,m-c,p),v.fillRect(_+m-c,g,c,p),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(_+m-c,g,c,l((1-x/M)*p))}}},t})})(zd);var YA=zd.exports;const KA=qA(YA);class $A extends Qe{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new he(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Yr=new C,rf=new De,sf=new De,of=new C,af=new C;class ZA{constructor(e={}){const t=this;let n,i,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:i}},this.render=function(d,_){d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),rf.copy(_.matrixWorldInverse),sf.multiplyMatrices(_.projectionMatrix,rf),c(d,d,_),f(d)},this.setSize=function(d,_){n=d,i=_,s=n/2,o=i/2,l.style.width=d+"px",l.style.height=_+"px"};function c(d,_,g){if(d.isCSS2DObject){Yr.setFromMatrixPosition(d.matrixWorld),Yr.applyMatrix4(sf);const m=d.visible===!0&&Yr.z>=-1&&Yr.z<=1&&d.layers.test(g.layers)===!0;if(d.element.style.display=m===!0?"":"none",m===!0){d.onBeforeRender(t,_,g);const A=d.element;A.style.transform="translate("+-100*d.center.x+"%,"+-100*d.center.y+"%)translate("+(Yr.x*s+s)+"px,"+(-Yr.y*o+o)+"px)",A.parentNode!==l&&l.appendChild(A),d.onAfterRender(t,_,g)}const p={distanceToCameraSquared:u(g,d)};a.objects.set(d,p)}for(let m=0,p=d.children.length;m<p;m++)c(d.children[m],_,g)}function u(d,_){return of.setFromMatrixPosition(d.matrixWorld),af.setFromMatrixPosition(_.matrixWorld),of.distanceToSquared(af)}function h(d){const _=[];return d.traverse(function(g){g.isCSS2DObject&&_.push(g)}),_}function f(d){const _=h(d).sort(function(m,p){if(m.renderOrder!==p.renderOrder)return p.renderOrder-m.renderOrder;const A=a.objects.get(m).distanceToCameraSquared,v=a.objects.get(p).distanceToCameraSquared;return A-v}),g=_.length;for(let m=0,p=_.length;m<p;m++)_[m].element.style.zIndex=g-m}}}const QA=.5*(Math.sqrt(3)-1),Us=(3-Math.sqrt(3))/6,lf=r=>Math.floor(r)|0,cf=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function JA(r=Math.random){const e=eM(r),t=new Float64Array(e).map(i=>cf[i%12*2]),n=new Float64Array(e).map(i=>cf[i%12*2+1]);return function(s,o){let a=0,l=0,c=0;const u=(s+o)*QA,h=lf(s+u),f=lf(o+u),d=(h+f)*Us,_=h-d,g=f-d,m=s-_,p=o-g;let A,v;m>p?(A=1,v=0):(A=0,v=1);const x=m-A+Us,M=p-v+Us,E=m-1+2*Us,T=p-1+2*Us,L=h&255,y=f&255;let b=.5-m*m-p*p;if(b>=0){const I=L+e[y],N=t[I],O=n[I];b*=b,a=b*b*(N*m+O*p)}let G=.5-x*x-M*M;if(G>=0){const I=L+A+e[y+v],N=t[I],O=n[I];G*=G,l=G*G*(N*x+O*M)}let K=.5-E*E-T*T;if(K>=0){const I=L+1+e[y+1],N=t[I],O=n[I];K*=K,c=K*K*(N*E+O*T)}return 70*(a+l+c)}}function eM(r){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(r()*(256-n)),s=t[n];t[n]=t[i],t[i]=s}for(let n=256;n<512;n++)t[n]=t[n-256];return t}function uf(r,e){if(e===pg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===ql||e===ad){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===ql)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class tM extends Es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new oM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new vM(t)})}load(e,t,n,i){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=ec.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Nd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Hd){try{o[He.KHR_BINARY_GLTF]=new xM(e)}catch(h){i&&i(h);return}s=JSON.parse(o[He.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new DM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case He.KHR_MATERIALS_UNLIT:o[h]=new rM;break;case He.KHR_DRACO_MESH_COMPRESSION:o[h]=new yM(s,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:o[h]=new AM;break;case He.KHR_MESH_QUANTIZATION:o[h]=new MM;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function nM(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class iM{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Te(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new kd(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Bd(u),c.distance=h;break;case"spot":c=new Fd(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,wi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class rM{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return Ci}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,be))}return Promise.all(i)}}class sM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class oM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(a,a)}return Promise.all(s)}}class aM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class lM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,be)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class cM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class uM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te(a[0],a[1],a[2]),Promise.all(s)}}class hM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class fM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,be)),Promise.all(s)}}class dM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class pM{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class mM{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class gM{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _M{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class vM{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==mn.TRIANGLES&&c.mode!==mn.TRIANGLE_STRIP&&c.mode!==mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const _ of h){const g=new De,m=new C,p=new Vn,A=new C(1,1,1),v=new Ic(_.geometry,_.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&A.fromBufferAttribute(l.SCALE,x),v.setMatrixAt(x,g.compose(m,p,A));for(const x in l)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);Qe.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Hd="glTF",Ns=12,hf={JSON:1313821514,BIN:5130562};class xM{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ns),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ns,s=new DataView(e,Ns);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===hf.JSON){const c=new Uint8Array(e,Ns+o,a);this.content=n.decode(c)}else if(l===hf.BIN){const c=Ns+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class yM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=nc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=nc[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=is[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const _=f.attributes[d],g=l[d];g!==void 0&&(_.normalized=g)}h(f)},a,c)})})}}class AM{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class MM{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class Gd extends yo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,m=-2*d+3*f,p=d-f,A=1-m,v=p-f+h;for(let x=0;x!==a;x++){const M=o[g+x+a],E=o[g+x+l]*u,T=o[_+x+a],L=o[_+x]*u;s[x]=A*M+v*E+m*T+p*L}return s}}const SM=new Vn;class TM extends Gd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return SM.fromArray(s).normalize().toArray(s),s}}const mn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ff={9728:tt,9729:Yt,9984:jl,9985:ed,9986:Jo,9987:xr},df={33071:_n,33648:ha,10497:us},El={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ti={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},EM={CUBICSPLINE:void 0,LINEAR:fs,STEP:to},bl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Da({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hn})),r.DefaultMaterial}function Qi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function wi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wM(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function RM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function CM(r){let e;const t=r.extensions&&r.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wl(t.attributes):e=r.indices+":"+wl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+wl(r.targets[n]);return e}function wl(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function ic(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function PM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const LM=new De;class DM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new nM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Od(this.options.manager):this.textureLoader=new NA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Qi(s,a,i),wi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(ec.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=El[i.type],a=is[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new jt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=El[i.type],c=is[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(d&&d!==h){const p=Math.floor(f/d),A="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(A);v||(g=new c(a,p*d,i.count*d/u),v=new Yy(g,d/u),t.cache.add(A,v)),m=new Lc(v,l,f%d/u,_)}else a===null?g=new c(i.count*l):g=new c(a,f,i.count*l),m=new jt(g,l,_);if(i.sparse!==void 0){const p=El.SCALAR,A=is[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,M=new A(o[1],v,i.sparse.count*p),E=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new jt(m.array.slice(),m.itemSize,m.normalized));for(let T=0,L=M.length;T<L;T++){const y=M[T];if(m.setX(y,E[T*l]),l>=2&&m.setY(y,E[T*l+1]),l>=3&&m.setZ(y,E[T*l+2]),l>=4&&m.setW(y,E[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=ff[f.magFilter]||Yt,u.minFilter=ff[f.minFilter]||xr,u.wrapS=df[f.wrapS]||us,u.wrapT=df[f.wrapT]||us,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Pt(g);m.needsUpdate=!0,f(m)}),t.load(ec.resolveURL(h,s.path),_,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||PM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[He.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Rd,Ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Uc,Ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Da}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[He.KHR_MATERIALS_UNLIT]){const h=i[He.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,be)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Kt);const u=s.alphaMode||bl.OPAQUE;if(u===bl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===bl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ci&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new he(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&o!==Ci&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ci&&(a.emissive=new Te().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==Ci&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,be)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),wi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Qi(i,h,s),h})}createUniqueName(e){const t=qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return pf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=CM(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[He.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=pf(new fn,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?bM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],m=o[d];let p;const A=c[d];if(m.mode===mn.TRIANGLES||m.mode===mn.TRIANGLE_STRIP||m.mode===mn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new $y(g,A):new Xt(g,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===mn.TRIANGLE_STRIP?p.geometry=uf(p.geometry,ad):m.mode===mn.TRIANGLE_FAN&&(p.geometry=uf(p.geometry,ql));else if(m.mode===mn.LINES)p=new eA(g,A);else if(m.mode===mn.LINE_STRIP)p=new La(g,A);else if(m.mode===mn.LINE_LOOP)p=new tA(g,A);else if(m.mode===mn.POINTS)p=new nA(g,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&RM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),wi(p,s),m.extensions&&Qi(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Qi(i,h[0],s),h[0];const f=new Bn;s.extensions&&Qi(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(zg.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Cc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),wi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new De;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Dc(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],_=i.samplers[d.sampler],g=d.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,A=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",A)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],g=h[3],m=h[4],p=[];for(let A=0,v=f.length;A<v;A++){const x=f[A],M=d[A],E=_[A],T=g[A],L=m[A];if(x===void 0)continue;x.updateMatrix&&(x.updateMatrix(),x.matrixAutoUpdate=!0);const y=n._createAnimationTracks(x,M,E,T,L);if(y)for(let b=0;b<y.length;b++)p.push(y[b])}return new TA(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,LM)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new wd:c.length>1?u=new Bn:c.length===1?u=c[0]:u=new Qe,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),wi(u,s),s.extensions&&Qi(n,u,s),s.matrix!==void 0){const h=new De;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Bn;n.name&&(s.name=i.createUniqueName(n.name)),wi(s,n),n.extensions&&Qi(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Ln||f instanceof Pt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ti[s.path]===Ti.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ti[s.path]){case Ti.weights:c=ms;break;case Ti.rotation:c=Mr;break;case Ti.position:case Ti.scale:default:switch(n.itemSize){case 1:c=ms;break;case 2:case 3:c=io;break}break}const u=i.interpolation!==void 0?EM[i.interpolation]:fs,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const _=new c(l[f]+"."+Ti[s.path],t.array,h,u);u==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ic(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Mr?TM:Gd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function IM(r,e,t){const n=e.attributes,i=new _i;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const u=ic(is[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new C,l=new C;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=ic(is[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Xn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function pf(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=nc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return wi(r,e),IM(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?wM(r,e.targets,t):r})}function ni(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Vd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var cn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_s={duration:.5,overwrite:!1,delay:0},zc,Bt,lt,yn=1e8,$e=1/yn,rc=Math.PI*2,UM=rc/4,NM=0,Wd=Math.sqrt,OM=Math.cos,FM=Math.sin,wt=function(e){return typeof e=="string"},ut=function(e){return typeof e=="function"},pi=function(e){return typeof e=="number"},Hc=function(e){return typeof e>"u"},Wn=function(e){return typeof e=="object"},Zt=function(e){return e!==!1},Gc=function(){return typeof window<"u"},$o=function(e){return ut(e)||wt(e)},Xd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,sc=/(?:-?\.?\d|\.)+/gi,jd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qd=/[+-]=-?[.\d]+/,Yd=/[^,'"\[\]\s]+/gi,BM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,it,gn,oc,Vc,hn={},ma={},Kd,$d=function(e){return(ma=Sr(e,hn))&&en},Wc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ga=function(e,t){return!t&&console.warn(e)},Zd=function(e,t){return e&&(hn[e]=t)&&ma&&(ma[e]=t)||hn},ro=function(){return 0},kM={suppressEvents:!0,isStart:!0,kill:!1},ta={suppressEvents:!0,kill:!1},zM={suppressEvents:!0},Xc={},Oi=[],ac={},Qd,sn={},Cl={},mf=30,na=[],jc="",qc=function(e){var t=e[0],n,i;if(Wn(t)||ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=na.length;i--&&!na[i].targetTest(t););n=na[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Mp(e[i],n)))||e.splice(i,1);return e},hr=function(e){return e._gsap||qc(An(e))[0]._gsap},Jd=function(e,t,n){return(n=e[t])&&ut(n)?e[t]():Hc(n)&&e.getAttribute&&e.getAttribute(t)||n},Qt=function(e,t){return(e=e.split(",")).forEach(t)||e},ft=function(e){return Math.round(e*1e5)/1e5||0},Ct=function(e){return Math.round(e*1e7)/1e7||0},rs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},HM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},_a=function(){var e=Oi.length,t=Oi.slice(0),n,i;for(ac={},Oi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ep=function(e,t,n,i){Oi.length&&!Bt&&_a(),e.render(t,n,i||Bt&&t<0&&(e._initted||e._startAt)),Oi.length&&!Bt&&_a()},tp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Yd).length<2?t:wt(e)?e.trim():e},np=function(e){return e},Sn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},GM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Sr=function(e,t){for(var n in t)e[n]=t[n];return e},gf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Wn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},va=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},qs=function(e){var t=e.parent||it,n=e.keyframes?GM(kt(e.keyframes)):Sn;if(Zt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},VM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ip=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ua=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},zi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},fr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},WM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},lc=function(e,t,n,i){return e._startAt&&(Bt?e._startAt.revert(ta):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},XM=function r(e){return!e||e._ts&&r(e.parent)},_f=function(e){return e._repeat?vs(e._tTime,e=e.duration()+e._rDelay)*e:0},vs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},xa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Na=function(e){return e._end=Ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||$e)||0))},Oa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Na(e),n._dirty||fr(n,e)),e},rp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=xa(e.rawTime(),t),(!t._dur||Ao(0,t.totalDuration(),n)-t._tTime>$e)&&t.render(n,!0)),fr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-$e}},Fn=function(e,t,n,i){return t.parent&&zi(t),t._start=Ct((pi(n)?n:n||e!==it?pn(e,n,t):e._time)+t._delay),t._end=Ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ip(e,t,"_first","_last",e._sort?"_start":0),cc(t)||(e._recent=t),i||rp(e,t),e._ts<0&&Oa(e,e._tTime),e},sp=function(e,t){return(hn.ScrollTrigger||Wc("scrollTrigger",t))&&hn.ScrollTrigger.create(t,e)},op=function(e,t,n,i,s){if(Kc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Bt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Qd!==an.frame)return Oi.push(e),e._lazy=[s,i],1},jM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},cc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},qM=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&jM(e)&&!(!e._initted&&cc(e))||(e._ts<0||e._dp._ts<0)&&!cc(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ao(0,e._tDur,t),u=vs(l,a),e._yoyo&&u&1&&(o=1-o),u!==vs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Bt||i||e._zTime===$e||!t&&e._zTime){if(!e._initted&&op(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?$e:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&lc(e,t,n,!0),e._onUpdate&&!n&&Mn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Mn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&zi(e,1),!n&&!Bt&&(Mn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},YM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},xs=function(e,t,n,i){var s=e._repeat,o=Ct(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ct(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Oa(e,e._tTime=e._tDur*a),e.parent&&Na(e),n||fr(e.parent,e),e},vf=function(e){return e instanceof $t?fr(e):xs(e,e._dur)},KM={_start:0,endTime:ro,totalDuration:ro},pn=function r(e,t,n){var i=e.labels,s=e._recent||KM,o=e.duration()>=yn?s.endTime(!1):e._dur,a,l,c;return wt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(kt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ys=function(e,t,n){var i=pi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Zt(l.vars.inherit)&&l.parent;o.immediateRender=Zt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new gt(t[0],o,t[s+1])},Xi=function(e,t){return e||e===0?t(e):t},Ao=function(e,t,n){return n<e?e:n>t?t:n},Ut=function(e,t){return!wt(e)||!(t=BM.exec(e))?"":t[1]},$M=function(e,t,n){return Xi(n,function(i){return Ao(e,t,i)})},uc=[].slice,ap=function(e,t){return e&&Wn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Wn(e[0]))&&!e.nodeType&&e!==gn},ZM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return wt(i)&&!t||ap(i,1)?(s=n).push.apply(s,An(i)):n.push(i)})||n},An=function(e,t,n){return lt&&!t&&lt.selector?lt.selector(e):wt(e)&&!n&&(oc||!ys())?uc.call((t||Vc).querySelectorAll(e),0):kt(e)?ZM(e,n):ap(e)?uc.call(e,0):e?[e]:[]},hc=function(e){return e=An(e)[0]||ga("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return An(t,n.querySelectorAll?n:n===e?ga("Invalid scope")||Vc.createElement("div"):e)}},lp=function(e){return e.sort(function(){return .5-Math.random()})},cp=function(e){if(ut(e))return e;var t=Wn(e)?e:{each:e},n=dr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return wt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,m=o[g],p,A,v,x,M,E,T,L,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,yn])[1],!y){for(T=-yn;T<(T=_[y++].getBoundingClientRect().left)&&y<g;);y--}for(m=o[g]=[],p=l?Math.min(y,g)*u-.5:i%y,A=y===yn?0:l?g*h/y-.5:i/y|0,T=0,L=yn,E=0;E<g;E++)v=E%y-p,x=A-(E/y|0),m[E]=M=c?Math.abs(c==="y"?x:v):Wd(v*v+x*x),M>T&&(T=M),M<L&&(L=M);i==="random"&&lp(m),m.max=T-L,m.min=L,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Ut(t.amount||t.each)||0,n=n&&g<0?xp(n):n}return g=(m[f]-m.min)/m.max||0,Ct(m.b+(n?n(g):g)*m.v)+m.u}},fc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ct(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(pi(n)?0:Ut(n))}},up=function(e,t){var n=kt(e),i,s;return!n&&Wn(e)&&(i=n=e.radius||yn,e.values?(e=An(e.values),(s=!pi(e[0]))&&(i*=i)):e=fc(e.increment)),Xi(t,n?ut(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=yn,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||pi(o)?u:u+Ut(o)}:fc(e))},hp=function(e,t,n,i){return Xi(kt(e)?!t:n===!0?!!(n=0):!i,function(){return kt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},QM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},JM=function(e,t){return function(n){return e(parseFloat(n))+(t||Ut(n))}},eS=function(e,t,n){return dp(e,t,0,1,n)},fp=function(e,t,n){return Xi(n,function(i){return e[~~t(i)]})},tS=function r(e,t,n){var i=t-e;return kt(e)?fp(e,r(0,e.length),t):Xi(n,function(s){return(i+(s-e)%i)%i+e})},nS=function r(e,t,n){var i=t-e,s=i*2;return kt(e)?fp(e,r(0,e.length-1),t):Xi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},so=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Yd:sc),n+=e.substr(t,i-t)+hp(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},dp=function(e,t,n,i,s){var o=t-e,a=i-n;return Xi(s,function(l){return n+((l-e)/o*a||0)})},iS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=wt(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(kt(e)&&!kt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=Sr(kt(e)?[]:{},e));if(!u){for(l in t)Yc.call(a,e,l,"get",t[l]);s=function(_){return Qc(_,a)||(o?e.p:e)}}}return Xi(n,s)},xf=function(e,t,n){var i=e.labels,s=yn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Mn=function(e,t,n){var i=e.vars,s=i[t],o=lt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Oi.length&&_a(),a&&(lt=a),u=l?s.apply(c,l):s.call(c),lt=o,u},ks=function(e){return zi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Bt),e.progress()<1&&Mn(e,"onInterrupt"),e},Jr,pp=[],mp=function(e){if(Gc()&&e){e=!e.name&&e.default||e;var t=e.name,n=ut(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ro,render:Qc,add:Yc,kill:xS,modifier:vS,rawVars:0},o={targetTest:0,get:0,getSetter:Zc,aliases:{},register:0};if(ys(),e!==i){if(sn[t])return;Sn(i,Sn(va(e,s),o)),Sr(i.prototype,Sr(s,va(e,o))),sn[i.prop=t]=i,e.targetTest&&(na.push(i),Xc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Zd(t,i),e.register&&e.register(en,i,Jt)}else e&&pp.push(e)},Ye=255,zs={aqua:[0,Ye,Ye],lime:[0,Ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ye],navy:[0,0,128],white:[Ye,Ye,Ye],olive:[128,128,0],yellow:[Ye,Ye,0],orange:[Ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ye,0,0],pink:[Ye,192,203],cyan:[0,Ye,Ye],transparent:[Ye,Ye,Ye,0]},Pl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ye+.5|0},gp=function(e,t,n){var i=e?pi(e)?[e>>16,e>>8&Ye,e&Ye]:0:zs.black,s,o,a,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),zs[e])i=zs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ye,i&Ye,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ye,e&Ye]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(sc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Pl(l+1/3,s,o),i[1]=Pl(l,s,o),i[2]=Pl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(jd),n&&i.length<4&&(i[3]=1),i}else i=e.match(sc)||zs.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Ye,o=i[1]/Ye,a=i[2]/Ye,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},_p=function(e){var t=[],n=[],i=-1;return e.split(Fi).forEach(function(s){var o=s.match(Qr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},yf=function(e,t,n){var i="",s=(e+i).match(Fi),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=gp(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=_p(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Fi,"1").split(Qr),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Fi),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Fi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in zs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),rS=/hsl[a]?\(/,vp=function(e){var t=e.join(" "),n;if(Fi.lastIndex=0,Fi.test(t))return n=rS.test(t),e[1]=yf(e[1],n),e[0]=yf(e[0],n,_p(e[1])),!0},oo,an=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(m){var p=r()-i,A=m===!0,v,x,M,E;if(p>e&&(n+=p-t),i+=p,M=i-n,v=M-o,(v>0||A)&&(E=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=v+(v>=s?4:s-v),x=1),A||(l=c(g)),x)for(d=0;d<a.length;d++)a[d](M,f,E,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Kd&&(!oc&&Gc()&&(gn=oc=window,Vc=gn.document||{},hn.gsap=en,(gn.gsapVersions||(gn.gsapVersions=[])).push(en.version),$d(ma||gn.GreenSockGlobals||!gn.gsap&&gn||{}),u=gn.requestAnimationFrame,pp.forEach(mp)),l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},oo=1,_(2))},sleep:function(){(u?gn.cancelAnimationFrame:clearTimeout)(l),oo=0,c=ro},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,A){var v=p?function(x,M,E,T){m(x,M,E,T),h.remove(v)}:m;return h.remove(m),a[A?"unshift":"push"](v),ys(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),ys=function(){return!oo&&an.wake()},Ge={},sS=/^[\d.\-M][\d.\-,\s]/,oS=/["']/g,aS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(oS,"").trim():+c,i=l.substr(a+1).trim();return t},lS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},cS=function(e){var t=(e+"").split("("),n=Ge[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[aS(t[1])]:lS(e).split(",").map(tp)):Ge._CE&&sS.test(e)?Ge._CE("",e):n},xp=function(e){return function(t){return 1-e(1-t)}},yp=function r(e,t){for(var n=e._first,i;n;)n instanceof $t?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},dr=function(e,t){return e&&(ut(e)?e:Ge[e]||cS(e))||t},br=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Qt(e,function(a){Ge[a]=hn[a]=s,Ge[o=a.toLowerCase()]=n;for(var l in s)Ge[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ge[a+"."+l]=s[l]}),s},Ap=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ll=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/rc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*FM((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ap(a);return s=rc/s,l.config=function(c,u){return r(e,c,u)},l},Dl=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Ap(n);return i.config=function(s){return r(e,s)},i};Qt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;br(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ge.Linear.easeNone=Ge.none=Ge.Linear.easeIn;br("Elastic",Ll("in"),Ll("out"),Ll());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};br("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);br("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});br("Circ",function(r){return-(Wd(1-r*r)-1)});br("Sine",function(r){return r===1?1:-OM(r*UM)+1});br("Back",Dl("in"),Dl("out"),Dl());Ge.SteppedEase=Ge.steps=hn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-$e;return function(a){return((i*Ao(0,o,a)|0)+s)*n}}};_s.ease=Ge["quad.out"];Qt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return jc+=r+","+r+"Params,"});var Mp=function(e,t){this.id=NM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Jd,this.set=t?t.getSetter:Zc},ao=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,xs(this,+t.duration,1,1),this.data=t.data,lt&&(this._ctx=lt,lt.data.push(this)),oo||an.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,xs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ys(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Oa(this,n),!s._dp||s.parent||rp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Fn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===$e||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ep(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+_f(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+_f(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?vs(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-$e?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?xa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-$e?0:this._rts,this.totalTime(Ao(-Math.abs(this._delay),this._tDur,i),!0),Na(this),WM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ys(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$e&&(this._tTime-=$e)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Fn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Zt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=zM);var i=Bt;return Bt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Bt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(pn(this,n),Zt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Zt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-$e:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-$e,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-$e)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=ut(n)?n:np,a=function(){var c=i.then;i.then=null,ut(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ks(this)},r}();Sn(ao.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$e,_prom:0,_ps:!1,_rts:1});var $t=function(r){Vd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Zt(n.sortChildren),it&&Fn(n.parent||it,ni(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&sp(ni(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Ys(0,arguments,this),this},t.from=function(i,s,o){return Ys(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Ys(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,qs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new gt(i,s,pn(this,o),1),this},t.call=function(i,s,o){return Fn(this,gt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new gt(i,o,pn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,qs(o).immediateRender=Zt(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,qs(a).immediateRender=Zt(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ct(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,A,v,x,M,E,T;if(this!==it&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,x=this._start,v=this._ts,p=!v,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=Ct(u%m),u===l?(g=this._repeat,f=c):(g=~~(u/m),g&&g===u/m&&(f=c,g--),f>c&&(f=c)),M=vs(this._tTime,m),!a&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),E&&g&1&&(f=c-f,T=1),g!==M&&!this._lock){var L=E&&M&1,y=L===(E&&g&1);if(g<M&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Ct(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Mn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;yp(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=YM(this,Ct(a),Ct(f)),A&&(u-=f-(f=A._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!g&&(Mn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&A!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){A=0,_&&(u+=this._zTime=-$e);break}}d=_}else{d=this._last;for(var b=i<0?i:f;d;){if(_=d._prev,(d._act||b<=d._end)&&d._ts&&A!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,o||Bt&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){A=0,_&&(u+=this._zTime=b?-$e:$e);break}}d=_}}if(A&&!s&&(this.pause(),A.render(f>=a?0:-$e)._zTime=f>=a?1:-1,this._ts))return this._start=x,Na(this),this.render(i,s,o);this._onUpdate&&!s&&Mn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&zi(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Mn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(pi(s)||(s=pn(this,s,i)),!(i instanceof ao)){if(kt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(wt(i))return this.addLabel(i,s);if(ut(i))i=gt.delayedCall(0,i);else return this}return this!==i?Fn(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-yn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof gt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return wt(i)?this.removeLabel(i):ut(i)?this.killTweensOf(i):(Ua(this,i),i===this._recent&&(this._recent=this._last),fr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ct(an.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=pn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=gt.delayedCall(0,s||ro,o);return a.data="isPause",this._hasPause=1,Fn(this,a,pn(this,i))},t.removePause=function(i){var s=this._first;for(i=pn(this,i);s;)s._start===i&&s.data==="isPause"&&zi(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Pi!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=An(i),l=this._first,c=pi(s),u;l;)l instanceof gt?HM(l._targets,a)&&(c?(!Pi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=pn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=gt.to(o,Sn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||$e,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&xs(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Sn({startAt:{time:pn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),xf(this,pn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),xf(this,pn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+$e)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return fr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),fr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=yn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Fn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;xs(o,o===it&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(it._ts&&(ep(it,xa(i,it)),Qd=an.frame),an.frame>=mf){mf+=cn.autoSleep||120;var s=it._first;if((!s||!s._ts)&&cn.autoSleep&&an._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||an.sleep()}}},e}(ao);Sn($t.prototype,{_lock:0,_hasPause:0,_forcing:0});var uS=function(e,t,n,i,s,o,a){var l=new Jt(this._pt,e,t,0,1,Rp,null,s),c=0,u=0,h,f,d,_,g,m,p,A;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=so(i)),o&&(A=[n,i],o(A,e,t),n=A[0],i=A[1]),f=n.match(Rl)||[];h=Rl.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?rs(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Rl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(qd.test(i)||p)&&(l.e=0),this._pt=l,l},Yc=function(e,t,n,i,s,o,a,l,c,u){ut(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:ut(h)?c?e[t.indexOf("set")||!ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=ut(h)?c?mS:bp:$c,_;if(wt(i)&&(~i.indexOf("random(")&&(i=so(i)),i.charAt(1)==="="&&(_=rs(f,i)+(Ut(f)||0),(_||_===0)&&(i=_))),!u||f!==i||dc)return!isNaN(f*i)&&i!==""?(_=new Jt(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?_S:wp,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&Wc(t,i),uS.call(this,e,t,f,i,d,l||cn.stringFilter,c))},hS=function(e,t,n,i,s){if(ut(e)&&(e=Ks(e,s,t,n,i)),!Wn(e)||e.style&&e.nodeType||kt(e)||Xd(e))return wt(e)?Ks(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Ks(e[a],s,t,n,i);return o},Sp=function(e,t,n,i,s,o){var a,l,c,u;if(sn[e]&&(a=new sn[e]).init(s,a.rawVars?t[e]:hS(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Jt(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Jr))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Pi,dc,Kc=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,_=i.keyframes,g=i.autoRevert,m=e._dur,p=e._startAt,A=e._targets,v=e.parent,x=v&&v.data==="nested"?v.vars.targets:A,M=e._overwrite==="auto"&&!zc,E=e.timeline,T,L,y,b,G,K,I,N,O,$,z,X,J;if(E&&(!_||!s)&&(s="none"),e._ease=dr(s,_s.ease),e._yEase=d?xp(dr(d===!0?s:d,_s.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!E&&!!i.runBackwards,!E||_&&!i.stagger){if(N=A[0]?hr(A[0]).harness:0,X=N&&i[N.prop],T=va(i,Xc),p&&(p._zTime<0&&p.progress(1),t<0&&f&&a&&!g?p.render(-1,!0):p.revert(f&&m?ta:kM),p._lazy=0),o){if(zi(e._startAt=gt.set(A,Sn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&Zt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt||!a&&!g)&&e._startAt.revert(ta),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!p){if(t&&(a=!1),y=Sn({overwrite:!1,data:"isFromStart",lazy:a&&!p&&Zt(l),immediateRender:a,stagger:0,parent:v},T),X&&(y[N.prop]=X),zi(e._startAt=gt.set(A,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt?e._startAt.revert(ta):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,$e,$e);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Zt(l)||l&&!m,L=0;L<A.length;L++){if(G=A[L],I=G._gsap||qc(A)[L]._gsap,e._ptLookup[L]=$={},ac[I.id]&&Oi.length&&_a(),z=x===A?L:x.indexOf(G),N&&(O=new N).init(G,X||T,e,z,x)!==!1&&(e._pt=b=new Jt(e._pt,G,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(Z){$[Z]=b}),O.priority&&(K=1)),!N||X)for(y in T)sn[y]&&(O=Sp(y,T,e,z,G,x))?O.priority&&(K=1):$[y]=b=Yc.call(e,G,y,"get",T[y],z,x,0,i.stringFilter);e._op&&e._op[L]&&e.kill(G,e._op[L]),M&&e._pt&&(Pi=e,it.killTweensOf(G,$,e.globalTime(t)),J=!e.parent,Pi=0),e._pt&&l&&(ac[I.id]=1)}K&&Cp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!J,_&&t<=0&&E.render(yn,!0,!0)},fS=function(e,t,n,i,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return dc=1,e.vars[t]="+=0",Kc(e,a),dc=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=ft(n)+Ut(u.e)),u.b&&(u.b=c.s+Ut(u.b))},dS=function(e,t){var n=e[0]?hr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Sr({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},pS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(kt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ks=function(e,t,n,i,s){return ut(e)?e.call(t,n,i,s):wt(e)&&~e.indexOf("random(")?so(e):e},Tp=jc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ep={};Qt(Tp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ep[r]=1});var gt=function(r){Vd(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:qs(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,A=i.parent||it,v=(kt(n)||Xd(n)?pi(n[0]):"length"in i)?[n]:An(n),x,M,E,T,L,y,b,G;if(a._targets=v.length?qc(v):ga("GSAP target "+n+" not found. https://greensock.com",!cn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||$o(c)||$o(u)){if(i=a.vars,x=a.timeline=new $t({data:"nested",defaults:g||{},targets:A&&A.data==="nested"?A.vars.targets:v}),x.kill(),x.parent=x._dp=ni(a),x._start=0,f||$o(c)||$o(u)){if(T=v.length,b=f&&cp(f),Wn(f))for(L in f)~Tp.indexOf(L)&&(G||(G={}),G[L]=f[L]);for(M=0;M<T;M++)E=va(i,Ep),E.stagger=0,p&&(E.yoyoEase=p),G&&Sr(E,G),y=v[M],E.duration=+Ks(c,ni(a),M,y,v),E.delay=(+Ks(u,ni(a),M,y,v)||0)-a._delay,!f&&T===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),x.to(y,E,b?b(M,y,v):0),x._ease=Ge.none;x.duration()?c=u=0:a.timeline=0}else if(_){qs(Sn(x.vars.defaults,{ease:"none"})),x._ease=dr(_.ease||i.ease||"none");var K=0,I,N,O;if(kt(_))_.forEach(function($){return x.to(v,$,">")}),x.duration();else{E={};for(L in _)L==="ease"||L==="easeEach"||pS(L,_[L],E,_.easeEach);for(L in E)for(I=E[L].sort(function($,z){return $.t-z.t}),K=0,M=0;M<I.length;M++)N=I[M],O={ease:N.e,duration:(N.t-(M?I[M-1].t:0))/100*c},O[L]=N.v,x.to(v,O,K),K+=O.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!zc&&(Pi=ni(a),it.killTweensOf(v),Pi=0),Fn(A,ni(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===Ct(A._time)&&Zt(h)&&XM(ni(a))&&A.data!=="nested")&&(a._tTime=-$e,a.render(Math.max(0,-u)||0)),m&&sp(ni(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-$e&&!u?l:i<$e?0:i,f,d,_,g,m,p,A,v,x;if(!c)qM(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(f=Ct(h%g),h===l?(_=this._repeat,f=c):(_=~~(h/g),_&&_===h/g&&(f=c,_--),f>c&&(f=c)),p=this._yoyo&&_&1,p&&(x=this._yEase,f=c-f),m=vs(this._tTime,g),f===a&&!o&&this._initted)return this._tTime=h,this;_!==m&&(v&&this._yEase&&yp(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=o=1,this.render(Ct(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(op(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=A=(x||this._ease)(f/c),this._from&&(this.ratio=A=1-A),f&&!a&&!s&&!_&&(Mn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(A,d.d),d=d._next;v&&v.render(i<0?i:!f&&p?-$e:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&lc(this,i,s,o),Mn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Mn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&lc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&zi(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Mn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a){oo||an.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Kc(this,l),c=this._ease(l/this._dur),fS(this,i,s,o,a,c,l)?this.resetTo(i,s,o,a):(Oa(this,0),this.parent||ip(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ks(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Pi&&Pi.vars.overwrite!==!0)._first||ks(this),this.parent&&o!==this.timeline.totalDuration()&&xs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?An(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!s||s==="all")&&VM(a,l))return s==="all"&&(this._pt=0),ks(this);for(h=this._op=this._op||[],s!=="all"&&(wt(s)&&(g={},Qt(s,function(A){return g[A]=1}),s=g),s=dS(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,_=f,d={}):(d=h[p]=h[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Ua(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&ks(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ys(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Ys(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return it.killTweensOf(i,s,o)},e}(ao);Sn(gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qt("staggerTo,staggerFrom,staggerFromTo",function(r){gt[r]=function(){var e=new $t,t=uc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var $c=function(e,t,n){return e[t]=n},bp=function(e,t,n){return e[t](n)},mS=function(e,t,n,i){return e[t](i.fp,n)},gS=function(e,t,n){return e.setAttribute(t,n)},Zc=function(e,t){return ut(e[t])?bp:Hc(e[t])&&e.setAttribute?gS:$c},wp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},_S=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Rp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Qc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},vS=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},xS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ua(this,t,"_pt"):t.dep||(n=1),t=i;return!n},yS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Cp=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Jt=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||wp,this.d=l||this,this.set=c||$c,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=yS,this.m=n,this.mt=s,this.tween=i},r}();Qt(jc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Xc[r]=1});hn.TweenMax=hn.TweenLite=gt;hn.TimelineLite=hn.TimelineMax=$t;it=new $t({sortChildren:!1,defaults:_s,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});cn.stringFilter=vp;var pr=[],ia={},AS=[],Af=0,MS=0,Il=function(e){return(ia[e]||AS).map(function(t){return t()})},pc=function(){var e=Date.now(),t=[];e-Af>2&&(Il("matchMediaInit"),pr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=gn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Il("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Af=e,Il("matchMedia"))},Pp=function(){function r(t,n){this.selector=n&&hc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=MS++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){ut(n)&&(s=i,i=n,n=ut);var o=this,a=function(){var c=lt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=hc(s)),lt=o,h=i.apply(o,arguments),ut(h)&&o._r.push(h),lt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===ut?a(o):n?o[n]=a:a},e.ignore=function(n){var i=lt;lt=null,n(this),lt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof gt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof gt)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var a=pr.length;a--;)pr[a].id===this.id&&pr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),SS=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){Wn(n)||(n={matches:n});var o=new Pp(0,s||this.scope),a=o.conditions={},l,c,u;lt&&!o.selector&&(o.selector=lt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=gn.matchMedia(n[c]),l&&(pr.indexOf(o)<0&&pr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(pc):l.addEventListener("change",pc)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ya={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return mp(i)})},timeline:function(e){return new $t(e)},getTweensOf:function(e,t){return it.getTweensOf(e,t)},getProperty:function(e,t,n,i){wt(e)&&(e=An(e)[0]);var s=hr(e||{}).get,o=n?np:tp;return n==="native"&&(n=""),e&&(t?o((sn[t]&&sn[t].get||s)(e,t,n,i)):function(a,l,c){return o((sn[a]&&sn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=An(e),e.length>1){var i=e.map(function(u){return en.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=sn[t],a=hr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Jr._pt=0,h.init(e,n?u+n:u,Jr,0,[e]),h.render(1,h),Jr._pt&&Qc(1,Jr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=en.to(e,Sr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return it.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=dr(e.ease,_s.ease)),gf(_s,e||{})},config:function(e){return gf(cn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!sn[a]&&!hn[a]&&ga(t+" effect requires "+a+" plugin.")}),Cl[t]=function(a,l,c){return n(An(a),Sn(l||{},s),c)},o&&($t.prototype[t]=function(a,l,c){return this.add(Cl[t](a,Wn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ge[e]=dr(t)},parseEase:function(e,t){return arguments.length?dr(e,t):Ge},getById:function(e){return it.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new $t(e),i,s;for(n.smoothChildTiming=Zt(e.smoothChildTiming),it.remove(n),n._dp=0,n._time=n._tTime=it._time,i=it._first;i;)s=i._next,(t||!(!i._dur&&i instanceof gt&&i.vars.onComplete===i._targets[0]))&&Fn(n,i,i._start-i._delay),i=s;return Fn(it,n,0),n},context:function(e,t){return e?new Pp(e,t):lt},matchMedia:function(e){return new SS(e)},matchMediaRefresh:function(){return pr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||pc()},addEventListener:function(e,t){var n=ia[e]||(ia[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ia[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:tS,wrapYoyo:nS,distribute:cp,random:hp,snap:up,normalize:eS,getUnit:Ut,clamp:$M,splitColor:gp,toArray:An,selector:hc,mapRange:dp,pipe:QM,unitize:JM,interpolate:iS,shuffle:lp},install:$d,effects:Cl,ticker:an,updateRoot:$t.updateRoot,plugins:sn,globalTimeline:it,core:{PropTween:Jt,globals:Zd,Tween:gt,Timeline:$t,Animation:ao,getCache:hr,_removeLinkedListItem:Ua,reverting:function(){return Bt},context:function(e){return e&&lt&&(lt.data.push(e),e._ctx=lt),lt},suppressOverwrites:function(e){return zc=e}}};Qt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ya[r]=gt[r]});an.add($t.updateRoot);Jr=ya.to({},{duration:0});var TS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ES=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=TS(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Ul=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(wt(s)&&(l={},Qt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ES(a,s)}}}},en=ya.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Bt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ul("roundProps",fc),Ul("modifiers"),Ul("snap",up))||ya;gt.version=$t.version=en.version="3.12.2";Kd=1;Gc()&&ys();Ge.Power0;Ge.Power1;Ge.Power2;Ge.Power3;Ge.Power4;Ge.Linear;Ge.Quad;Ge.Cubic;Ge.Quart;Ge.Quint;Ge.Strong;Ge.Elastic;Ge.Back;Ge.SteppedEase;Ge.Bounce;Ge.Sine;Ge.Expo;Ge.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Mf,Li,ss,Jc,or,Sf,eu,bS=function(){return typeof window<"u"},mi={},nr=180/Math.PI,os=Math.PI/180,Kr=Math.atan2,Tf=1e8,tu=/([A-Z])/g,wS=/(left|right|width|margin|padding|x)/i,RS=/[\s,\(]\S/,kn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},mc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},CS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},PS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},LS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Lp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Dp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},DS=function(e,t,n){return e.style[t]=n},IS=function(e,t,n){return e.style.setProperty(t,n)},US=function(e,t,n){return e._gsap[t]=n},NS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},OS=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},FS=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},st="transform",Dn=st+"Origin",BS=function r(e,t){var n=this,i=this.target,s=i.style;if(e in mi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=kn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=si(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:si(i,e);else return kn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(st)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Dn,t,"")),e=st}(s||t)&&this.props.push(e,t,s[e])},Ip=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},kS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(tu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=eu(),(!s||!s.isStart)&&!n[st]&&(Ip(n),i.uncache=1)}},Up=function(e,t){var n={target:e,props:[],revert:kS,save:BS};return e._gsap||en.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Np,gc=function(e,t){var n=Li.createElementNS?Li.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Li.createElement(e);return n.style?n:Li.createElement(e)},zn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(tu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,As(t)||t,1)||""},Ef="O,Moz,ms,Ms,Webkit".split(","),As=function(e,t,n){var i=t||or,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ef[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Ef[o]:"")+e},_c=function(){bS()&&window.document&&(Mf=window,Li=Mf.document,ss=Li.documentElement,or=gc("div")||{style:{}},gc("div"),st=As(st),Dn=st+"Origin",or.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Np=!!As("perspective"),eu=en.core.reverting,Jc=1)},Nl=function r(e){var t=gc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(ss.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ss.removeChild(t),this.style.cssText=s,o},bf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Op=function(e){var t;try{t=e.getBBox()}catch{t=Nl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Nl||(t=Nl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+bf(e,["x","cx","x1"])||0,y:+bf(e,["y","cy","y1"])||0,width:0,height:0}:t},Fp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Op(e))},lo=function(e,t){if(t){var n=e.style;t in mi&&t!==Dn&&(t=st),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(tu,"-$1").toLowerCase())):n.removeAttribute(t)}},Di=function(e,t,n,i,s,o){var a=new Jt(e._pt,t,n,0,1,o?Dp:Lp);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},wf={deg:1,rad:1,turn:1},zS={grid:1,flex:1},Hi=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=or.style,l=wS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,m,p;return i===o||!s||wf[i]||wf[o]?s:(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&Fp(e),(d||o==="%")&&(mi[t]||~t.indexOf("adius"))?(_=p?e.getBBox()[l?"width":"height"]:e[u],ft(d?s/_*h:s/100*_)):(a[l?"width":"height"]=h+(f?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Li||!g.appendChild)&&(g=Li.body),m=g._gsap,m&&d&&m.width&&l&&m.time===an.time&&!m.uncache?ft(s/m.width*h):((d||o==="%")&&!zS[zn(g,"display")]&&(a.position=zn(e,"position")),g===e&&(a.position="static"),g.appendChild(or),_=or[u],g.removeChild(or),a.position="absolute",l&&d&&(m=hr(g),m.time=an.time,m.width=g[u]),ft(f?_*s/h:_&&s?h/_*s:0))))},si=function(e,t,n,i){var s;return Jc||_c(),t in kn&&t!=="transform"&&(t=kn[t],~t.indexOf(",")&&(t=t.split(",")[0])),mi[t]&&t!=="transform"?(s=uo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ma(zn(e,Dn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Aa[t]&&Aa[t](e,t,n)||zn(e,t)||Jd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Hi(e,t,s,n)+n:s},HS=function(e,t,n,i){if(!n||n==="none"){var s=As(t,e,1),o=s&&zn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=zn(e,"borderTopColor"))}var a=new Jt(this._pt,e.style,t,0,1,Rp),l=0,c=0,u,h,f,d,_,g,m,p,A,v,x,M;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=zn(e,t)||i,e.style[t]=n),u=[n,i],vp(u),n=u[0],i=u[1],f=n.match(Qr)||[],M=i.match(Qr)||[],M.length){for(;h=Qr.exec(i);)m=h[0],A=i.substring(l,h.index),_?_=(_+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),m.charAt(1)==="="&&(m=rs(d,m)+x),p=parseFloat(m),v=m.substr((p+"").length),l=Qr.lastIndex-v.length,v||(v=v||cn.units[t]||x,l===i.length&&(i+=v,a.e+=v)),x!==v&&(d=Hi(e,t,g,v)||0),a._pt={_next:a._pt,p:A||c===1?A:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Dp:Lp;return qd.test(i)&&(a.e=0),this._pt=a,a},Rf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},GS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Rf[n]||n,t[1]=Rf[i]||i,t.join(" ")},VS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],mi[a]&&(l=1,a=a==="transformOrigin"?Dn:st),lo(n,a);l&&(lo(n,st),o&&(o.svg&&n.removeAttribute("transform"),uo(n,1),o.uncache=1,Ip(i)))}},Aa={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Jt(e._pt,t,n,0,0,VS);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},co=[1,0,0,1,0,0],Bp={},kp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Cf=function(e){var t=zn(e,st);return kp(t)?co:t.substr(7).match(jd).map(ft)},nu=function(e,t){var n=e._gsap||hr(e),i=e.style,s=Cf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?co:s):(s===co&&!e.offsetParent&&e!==ss&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,ss.appendChild(e)),s=Cf(e),l?i.display=l:lo(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ss.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},vc=function(e,t,n,i,s,o){var a=e._gsap,l=s||nu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],A=l[5],v=t.split(" "),x=parseFloat(v[0])||0,M=parseFloat(v[1])||0,E,T,L,y;n?l!==co&&(T=d*m-_*g)&&(L=x*(m/T)+M*(-g/T)+(g*A-m*p)/T,y=x*(-_/T)+M*(d/T)-(d*A-_*p)/T,x=L,M=y):(E=Op(e),x=E.x+(~v[0].indexOf("%")?x/100*E.width:x),M=E.y+(~(v[1]||v[0]).indexOf("%")?M/100*E.height:M)),i||i!==!1&&a.smooth?(p=x-c,A=M-u,a.xOffset=h+(p*d+A*g)-p,a.yOffset=f+(p*_+A*m)-A):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Dn]="0px 0px",o&&(Di(o,a,"xOrigin",c,x),Di(o,a,"yOrigin",u,M),Di(o,a,"xOffset",h,a.xOffset),Di(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+M)},uo=function(e,t){var n=e._gsap||new Mp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=zn(e,Dn)||"0",u,h,f,d,_,g,m,p,A,v,x,M,E,T,L,y,b,G,K,I,N,O,$,z,X,J,Z,k,V,ae,ie,se;return u=h=f=g=m=p=A=v=x=0,d=_=1,n.svg=!!(e.getCTM&&Fp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[st]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[st]!=="none"?l[st]:"")),i.scale=i.rotate=i.translate="none"),T=nu(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),vc(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,T)),M=n.xOrigin||0,E=n.yOrigin||0,T!==co&&(G=T[0],K=T[1],I=T[2],N=T[3],u=O=T[4],h=$=T[5],T.length===6?(d=Math.sqrt(G*G+K*K),_=Math.sqrt(N*N+I*I),g=G||K?Kr(K,G)*nr:0,A=I||N?Kr(I,N)*nr+g:0,A&&(_*=Math.abs(Math.cos(A*os))),n.svg&&(u-=M-(M*G+E*I),h-=E-(M*K+E*N))):(se=T[6],ae=T[7],Z=T[8],k=T[9],V=T[10],ie=T[11],u=T[12],h=T[13],f=T[14],L=Kr(se,V),m=L*nr,L&&(y=Math.cos(-L),b=Math.sin(-L),z=O*y+Z*b,X=$*y+k*b,J=se*y+V*b,Z=O*-b+Z*y,k=$*-b+k*y,V=se*-b+V*y,ie=ae*-b+ie*y,O=z,$=X,se=J),L=Kr(-I,V),p=L*nr,L&&(y=Math.cos(-L),b=Math.sin(-L),z=G*y-Z*b,X=K*y-k*b,J=I*y-V*b,ie=N*b+ie*y,G=z,K=X,I=J),L=Kr(K,G),g=L*nr,L&&(y=Math.cos(L),b=Math.sin(L),z=G*y+K*b,X=O*y+$*b,K=K*y-G*b,$=$*y-O*b,G=z,O=X),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=ft(Math.sqrt(G*G+K*K+I*I)),_=ft(Math.sqrt($*$+se*se)),L=Kr(O,$),A=Math.abs(L)>2e-4?L*nr:0,x=ie?1/(ie<0?-ie:ie):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!kp(zn(e,st)),z&&e.setAttribute("transform",z))),Math.abs(A)>90&&Math.abs(A)<270&&(s?(d*=-1,A+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,A+=A<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=ft(d),n.scaleY=ft(_),n.rotation=ft(g)+a,n.rotationX=ft(m)+a,n.rotationY=ft(p)+a,n.skewX=A+a,n.skewY=v+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Dn]=Ma(c)),n.xOffset=n.yOffset=0,n.force3D=cn.force3D,n.renderTransform=n.svg?XS:Np?zp:WS,n.uncache=0,n},Ma=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ol=function(e,t,n){var i=Ut(t);return ft(parseFloat(t)+parseFloat(Hi(e,"x",n+"px",i)))+i},WS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,zp(e,t)},Ji="0deg",Os="0px",er=") ",zp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,A=n.target,v=n.zOrigin,x="",M=p==="auto"&&e&&e!==1||p===!0;if(v&&(h!==Ji||u!==Ji)){var E=parseFloat(u)*os,T=Math.sin(E),L=Math.cos(E),y;E=parseFloat(h)*os,y=Math.cos(E),o=Ol(A,o,T*y*-v),a=Ol(A,a,-Math.sin(E)*-v),l=Ol(A,l,L*y*-v+v)}m!==Os&&(x+="perspective("+m+er),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(M||o!==Os||a!==Os||l!==Os)&&(x+=l!==Os||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+er),c!==Ji&&(x+="rotate("+c+er),u!==Ji&&(x+="rotateY("+u+er),h!==Ji&&(x+="rotateX("+h+er),(f!==Ji||d!==Ji)&&(x+="skew("+f+", "+d+er),(_!==1||g!==1)&&(x+="scale("+_+", "+g+er),A.style[st]=x||"translate(0, 0)"},XS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,A=n.forceCSS,v=parseFloat(o),x=parseFloat(a),M,E,T,L,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=os,c*=os,M=Math.cos(l)*h,E=Math.sin(l)*h,T=Math.sin(l-c)*-f,L=Math.cos(l-c)*f,c&&(u*=os,y=Math.tan(c-u),y=Math.sqrt(1+y*y),T*=y,L*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),M*=y,E*=y)),M=ft(M),E=ft(E),T=ft(T),L=ft(L)):(M=h,L=f,E=T=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=Hi(d,"x",o,"px"),x=Hi(d,"y",a,"px")),(_||g||m||p)&&(v=ft(v+_-(_*M+g*T)+m),x=ft(x+g-(_*E+g*L)+p)),(i||s)&&(y=d.getBBox(),v=ft(v+i/100*y.width),x=ft(x+s/100*y.height)),y="matrix("+M+","+E+","+T+","+L+","+v+","+x+")",d.setAttribute("transform",y),A&&(d.style[st]=y)},jS=function(e,t,n,i,s){var o=360,a=wt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?nr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Tf)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Tf)%o-~~(c/o)*o)),e._pt=f=new Jt(e._pt,t,n,i,c,CS),f.e=u,f.u="deg",e._props.push(n),f},Pf=function(e,t){for(var n in t)e[n]=t[n];return e},qS=function(e,t,n){var i=Pf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[st]=t,a=uo(n,1),lo(n,st),n.setAttribute("transform",c)):(c=getComputedStyle(n)[st],o[st]=t,a=uo(n,1),o[st]=c);for(l in mi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Ut(c),_=Ut(u),h=d!==_?Hi(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Jt(e._pt,a,l,h,f-h,mc),e._pt.u=_||0,e._props.push(l));Pf(a,i)};Qt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Aa[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return si(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var Hp={name:"css",register:_c,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,m,p,A,v,x,M,E,T,L;Jc||_c(),this.styles=this.styles||Up(e),L=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(sn[g]&&Sp(g,t,n,i,e,s)))){if(d=typeof u,_=Aa[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=so(u)),_)_(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Fi.lastIndex=0,Fi.test(c)||(m=Ut(c),p=Ut(u)),p?m!==p&&(c=Hi(e,g,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),L.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],wt(c)&&~c.indexOf("random(")&&(c=so(c)),Ut(c+"")||(c+=cn.units[g]||Ut(si(e,g))||""),(c+"").charAt(1)==="="&&(c=si(e,g))):c=si(e,g),f=parseFloat(c),A=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),A&&(u=u.substr(2)),h=parseFloat(u),g in kn&&(g==="autoAlpha"&&(f===1&&si(e,"visibility")==="hidden"&&h&&(f=0),L.push("visibility",0,a.visibility),Di(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=kn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in mi,v){if(this.styles.save(g),x||(M=e._gsap,M.renderTransform&&!t.parseTransform||uo(e,t.parseTransform),E=t.smoothOrigin!==!1&&M.smooth,x=this._pt=new Jt(this._pt,a,st,0,1,M.renderTransform,M,0,-1),x.dep=1),g==="scale")this._pt=new Jt(this._pt,M,"scaleY",M.scaleY,(A?rs(M.scaleY,A+h):h)-M.scaleY||0,mc),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(Dn,0,a[Dn]),u=GS(u),M.svg?vc(e,u,0,E,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&Di(this,M,"zOrigin",M.zOrigin,p),Di(this,a,g,Ma(c),Ma(u)));continue}else if(g==="svgOrigin"){vc(e,u,1,E,0,this);continue}else if(g in Bp){jS(this,M,g,f,A?rs(f,A+u):u);continue}else if(g==="smoothOrigin"){Di(this,M,"smooth",M.smooth,u);continue}else if(g==="force3D"){M[g]=u;continue}else if(g==="transform"){qS(this,u,e);continue}}else g in a||(g=As(g)||g);if(v||(h||h===0)&&(f||f===0)&&!RS.test(u)&&g in a)m=(c+"").substr((f+"").length),h||(h=0),p=Ut(u)||(g in cn.units?cn.units[g]:m),m!==p&&(f=Hi(e,g,c,p)),this._pt=new Jt(this._pt,v?M:a,g,f,(A?rs(f,A+h):h)-f,!v&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?LS:mc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=PS);else if(g in a)HS.call(this,e,g,c,A?A+u:u);else if(g in e)this.add(e,g,c||e[g],A?A+u:u,i,s);else if(g!=="parseTransform"){Wc(g,u);continue}v||(g in a?L.push(g,0,a[g]):L.push(g,1,c||e[g])),o.push(g)}}T&&Cp(this)},render:function(e,t){if(t.tween._time||!eu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:si,aliases:kn,getSetter:function(e,t,n){var i=kn[t];return i&&i.indexOf(",")<0&&(t=i),t in mi&&t!==Dn&&(e._gsap.x||si(e,"x"))?n&&Sf===n?t==="scale"?NS:US:(Sf=n||{})&&(t==="scale"?OS:FS):e.style&&!Hc(e.style[t])?DS:~t.indexOf("-")?IS:Zc(e,t)},core:{_removeProperty:lo,_getMatrix:nu}};en.utils.checkPrefix=As;en.core.getStyleSaver=Up;(function(r,e,t,n){var i=Qt(r+","+e+","+t,function(s){mi[s]=1});Qt(e,function(s){cn.units[s]="deg",Bp[s]=1}),kn[i[13]]=r+","+e,Qt(n,function(s){var o=s.split(":");kn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){cn.units[r]="px"});en.registerPlugin(Hp);var fi=en.registerPlugin(Hp)||en;fi.core.Tween;function Fa(r,e,t){return Math.max(e,Math.min(t,r))}const Lf={type:"change"},Fl={type:"start"},Df={type:"end"};class YS extends Er{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rr.ROTATE,MIDDLE:Rr.DOLLY,RIGHT:Rr.PAN},this.touches={ONE:Cr.ROTATE,TWO:Cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",je),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",je),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Lf),n.update(),s=i.NONE},this.update=function(){const P=new C,Q=new Vn().setFromUnitVectors(e.up,new C(0,1,0)),ee=Q.clone().invert(),H=new C,pe=new Vn,_e=new C,ge=2*Math.PI;return function(){const fe=n.object.position;P.copy(fe).sub(n.target),P.applyQuaternion(Q),a.setFromVector3(P),n.autoRotate&&s===i.NONE&&y(T()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Se=n.minAzimuthAngle,ze=n.maxAzimuthAngle;return isFinite(Se)&&isFinite(ze)&&(Se<-Math.PI?Se+=ge:Se>Math.PI&&(Se-=ge),ze<-Math.PI?ze+=ge:ze>Math.PI&&(ze-=ge),Se<=ze?a.theta=Math.max(Se,Math.min(ze,a.theta)):a.theta=a.theta>(Se+ze)/2?Math.max(Se,a.theta):Math.min(ze,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),P.setFromSpherical(a),P.applyQuaternion(ee),fe.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||H.distanceToSquared(n.object.position)>o||8*(1-pe.dot(n.object.quaternion))>o||_e.distanceToSquared(n.target)>0?(n.dispatchEvent(Lf),H.copy(n.object.position),pe.copy(n.object.quaternion),_e.copy(n.target),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",R),n.domElement.removeEventListener("pointerdown",xe),n.domElement.removeEventListener("pointercancel",Me),n.domElement.removeEventListener("wheel",Le),n.domElement.removeEventListener("pointermove",we),n.domElement.removeEventListener("pointerup",Me),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",je),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new nf,l=new nf;let c=1;const u=new C;let h=!1;const f=new he,d=new he,_=new he,g=new he,m=new he,p=new he,A=new he,v=new he,x=new he,M=[],E={};function T(){return 2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function y(P){l.theta-=P}function b(P){l.phi-=P}const G=function(){const P=new C;return function(ee,H){P.setFromMatrixColumn(H,0),P.multiplyScalar(-ee),u.add(P)}}(),K=function(){const P=new C;return function(ee,H){n.screenSpacePanning===!0?P.setFromMatrixColumn(H,1):(P.setFromMatrixColumn(H,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(ee),u.add(P)}}(),I=function(){const P=new C;return function(ee,H){const pe=n.domElement;if(n.object.isPerspectiveCamera){const _e=n.object.position;P.copy(_e).sub(n.target);let ge=P.length();ge*=Math.tan(n.object.fov/2*Math.PI/180),G(2*ee*ge/pe.clientHeight,n.object.matrix),K(2*H*ge/pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(G(ee*(n.object.right-n.object.left)/n.object.zoom/pe.clientWidth,n.object.matrix),K(H*(n.object.top-n.object.bottom)/n.object.zoom/pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(P){f.set(P.clientX,P.clientY)}function z(P){A.set(P.clientX,P.clientY)}function X(P){g.set(P.clientX,P.clientY)}function J(P){d.set(P.clientX,P.clientY),_.subVectors(d,f).multiplyScalar(n.rotateSpeed);const Q=n.domElement;y(2*Math.PI*_.x/Q.clientHeight),b(2*Math.PI*_.y/Q.clientHeight),f.copy(d),n.update()}function Z(P){v.set(P.clientX,P.clientY),x.subVectors(v,A),x.y>0?N(L()):x.y<0&&O(L()),A.copy(v),n.update()}function k(P){m.set(P.clientX,P.clientY),p.subVectors(m,g).multiplyScalar(n.panSpeed),I(p.x,p.y),g.copy(m),n.update()}function V(P){P.deltaY<0?O(L()):P.deltaY>0&&N(L()),n.update()}function ae(P){let Q=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),Q=!0;break}Q&&(P.preventDefault(),n.update())}function ie(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const P=.5*(M[0].pageX+M[1].pageX),Q=.5*(M[0].pageY+M[1].pageY);f.set(P,Q)}}function se(){if(M.length===1)g.set(M[0].pageX,M[0].pageY);else{const P=.5*(M[0].pageX+M[1].pageX),Q=.5*(M[0].pageY+M[1].pageY);g.set(P,Q)}}function ve(){const P=M[0].pageX-M[1].pageX,Q=M[0].pageY-M[1].pageY,ee=Math.sqrt(P*P+Q*Q);A.set(0,ee)}function Ce(){n.enableZoom&&ve(),n.enablePan&&se()}function Ae(){n.enableZoom&&ve(),n.enableRotate&&ie()}function We(P){if(M.length==1)d.set(P.pageX,P.pageY);else{const ee=te(P),H=.5*(P.pageX+ee.x),pe=.5*(P.pageY+ee.y);d.set(H,pe)}_.subVectors(d,f).multiplyScalar(n.rotateSpeed);const Q=n.domElement;y(2*Math.PI*_.x/Q.clientHeight),b(2*Math.PI*_.y/Q.clientHeight),f.copy(d)}function Rt(P){if(M.length===1)m.set(P.pageX,P.pageY);else{const Q=te(P),ee=.5*(P.pageX+Q.x),H=.5*(P.pageY+Q.y);m.set(ee,H)}p.subVectors(m,g).multiplyScalar(n.panSpeed),I(p.x,p.y),g.copy(m)}function Ne(P){const Q=te(P),ee=P.pageX-Q.x,H=P.pageY-Q.y,pe=Math.sqrt(ee*ee+H*H);v.set(0,pe),x.set(0,Math.pow(v.y/A.y,n.zoomSpeed)),N(x.y),A.copy(v)}function F(P){n.enableZoom&&Ne(P),n.enablePan&&Rt(P)}function At(P){n.enableZoom&&Ne(P),n.enableRotate&&We(P)}function xe(P){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",we),n.domElement.addEventListener("pointerup",Me)),S(P),P.pointerType==="touch"?_t(P):et(P))}function we(P){n.enabled!==!1&&(P.pointerType==="touch"?Mt(P):Fe(P))}function Me(P){j(P),M.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",we),n.domElement.removeEventListener("pointerup",Me)),n.dispatchEvent(Df),s=i.NONE}function et(P){let Q;switch(P.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case Rr.DOLLY:if(n.enableZoom===!1)return;z(P),s=i.DOLLY;break;case Rr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;X(P),s=i.PAN}else{if(n.enableRotate===!1)return;$(P),s=i.ROTATE}break;case Rr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;$(P),s=i.ROTATE}else{if(n.enablePan===!1)return;X(P),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Fl)}function Fe(P){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;J(P);break;case i.DOLLY:if(n.enableZoom===!1)return;Z(P);break;case i.PAN:if(n.enablePan===!1)return;k(P);break}}function Le(P){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(P.preventDefault(),n.dispatchEvent(Fl),V(P),n.dispatchEvent(Df))}function je(P){n.enabled===!1||n.enablePan===!1||ae(P)}function _t(P){switch(ne(P),M.length){case 1:switch(n.touches.ONE){case Cr.ROTATE:if(n.enableRotate===!1)return;ie(),s=i.TOUCH_ROTATE;break;case Cr.PAN:if(n.enablePan===!1)return;se(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Cr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(),s=i.TOUCH_DOLLY_PAN;break;case Cr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Fl)}function Mt(P){switch(ne(P),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;We(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Rt(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;F(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;At(P),n.update();break;default:s=i.NONE}}function R(P){n.enabled!==!1&&P.preventDefault()}function S(P){M.push(P)}function j(P){delete E[P.pointerId];for(let Q=0;Q<M.length;Q++)if(M[Q].pointerId==P.pointerId){M.splice(Q,1);return}}function ne(P){let Q=E[P.pointerId];Q===void 0&&(Q=new he,E[P.pointerId]=Q),Q.set(P.pageX,P.pageY)}function te(P){const Q=P.pointerId===M[0].pointerId?M[1]:M[0];return E[Q.pointerId]}n.domElement.addEventListener("contextmenu",R),n.domElement.addEventListener("pointerdown",xe),n.domElement.addEventListener("pointercancel",Me),n.domElement.addEventListener("wheel",Le,{passive:!1}),this.update()}}class KS{interactiveObjects;disabledObjects;mousePosition;rayCaster;camera;intersected;awake;constructor(e,t,n=!0){this.interactiveObjects=new Array,this.disabledObjects=new Array,this.mousePosition=new he,this.rayCaster=new XA,this.camera=e,this.awake=n,window.addEventListener("mousemove",i=>{if(!this.awake)return;const s=t.getBoundingClientRect();this.mousePosition.x=(i.clientX-s.left)/s.width*2-1,this.mousePosition.y=(i.clientY-s.top)/s.height*2-1,this.update()}),t.addEventListener("click",i=>{this.getSelected().sio?.unHighlightFunction(),this.getSelected().sio?.callbackFunction()})}onMouseMove(e){this.mousePosition.x=e.clientX/window.innerWidth*2-1,this.mousePosition.y=e.clientY/window.innerHeight*2-1}update(){this.rayCaster.setFromCamera(this.mousePosition,this.camera);const e=this.interactiveObjects.map(i=>i.object);this.intersected=this.rayCaster.intersectObjects(e);let t=-1,n;if(this.intersected.length>0){document.body.style.cursor="pointer";const i=this.getSelected();if([t,n]=[i.i,i.sio],console.log("HIGHLIGHTING"),console.log(n),console.log(this.interactiveObjects),n==null||n.highlighted||n.highlightFunction==null)return;console.log("runningHighlight"),n.highlightFunction()}else document.body.style.cursor="auto";for(let i=0;i<this.interactiveObjects.length;i++){if(i==t||!this.interactiveObjects[i].highlighted)return;this.interactiveObjects[i].unHighlightFunction()}this.intersected.length>0||(document.body.style.cursor="auto")}getSelected(){let e=-1;const t=this.intersected!=null&&this.intersected.length>0,n=this.interactiveObjects.find((i,s)=>(e=s,i.object.isGroup?i.object.children.find(l=>l.id==this.intersected[0].object.id)!=null:t&&i.object.id==this.intersected[0].object.id));return{i:e,sio:n}}wake=()=>this.awake=!0;sleep=()=>this.awake=!1;addInteractiveObject(e){this.interactiveObjects.push(e)}disableObject(e){const t=this.moveObjectById(e,!1);t!=null&&t.highlighted&&t.unHighlightFunction!=null&&t.unHighlightFunction()}enableObject(e){const t=this.moveObjectById(e,!0);t!=null&&t.highlighted&&t.highlightFunction!=null&&t.highlightFunction()}moveObjectById(e,t){let n=0;const i=t?this.disabledObjects:this.interactiveObjects,s=t?this.interactiveObjects:this.disabledObjects,o=i.find((a,l)=>(n=l,a.object.id==e.id));if(o!=null)return i.splice(n,1),s.push(o),o}}let ir,mr,ke,Je,Nt,Hs,gi=4.5,un,$s,ln,gr,Bi;const $S=new URL("/assets/redBloodCellPatched-889271a4.glb",self.location),ZS=new URL("/assets/threeTone-11dace94.jpg",self.location),QS=new URL("/assets/fiveTone-ab7b5715.jpg",self.location),JS=new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAkACQAAD/4gKwSUNDX1BST0ZJTEUAAQEAAAKgbGNtcwRAAABtbnRyUkdCIFhZWiAH5wAHAAwACgAUADNhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1kZXNjAAABIAAAAEBjcHJ0AAABYAAAADZ3dHB0AAABmAAAABRjaGFkAAABrAAAACxyWFlaAAAB2AAAABRiWFlaAAAB7AAAABRnWFlaAAACAAAAABRyVFJDAAACFAAAACBnVFJDAAACFAAAACBiVFJDAAACFAAAACBjaHJtAAACNAAAACRkbW5kAAACWAAAACRkbWRkAAACfAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACQAAAAcAEcASQBNAFAAIABiAHUAaQBsAHQALQBpAG4AIABzAFIARwBCbWx1YwAAAAAAAAABAAAADGVuVVMAAAAaAAAAHABQAHUAYgBsAGkAYwAgAEQAbwBtAGEAaQBuAABYWVogAAAAAAAA9tYAAQAAAADTLXNmMzIAAAAAAAEMQgAABd7///MlAAAHkwAA/ZD///uh///9ogAAA9wAAMBuWFlaIAAAAAAAAG+gAAA49QAAA5BYWVogAAAAAAAAJJ8AAA+EAAC2xFhZWiAAAAAAAABilwAAt4cAABjZcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltjaHJtAAAAAAADAAAAAKPXAABUfAAATM0AAJmaAAAmZwAAD1xtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAEcASQBNAFBtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEL/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAABAAcDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAABv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAFsn//EABUQAQEAAAAAAAAAAAAAAAAAAAg0/9oACAEBAAEFAiZN/8QAFREBAQAAAAAAAAAAAAAAAAAAAFH/2gAIAQMBAT8Bj//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABcQAAMBAAAAAAAAAAAAAAAAAAADdMT/2gAIAQEABj8CVJnP/8QAFRABAQAAAAAAAAAAAAAAAAAAAKH/2gAIAQEAAT8hpn//2gAMAwEAAgADAAAAED//xAAYEQACAwAAAAAAAAAAAAAAAAAAATFxwf/aAAgBAwEBPxBzbGf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EH//xAAWEAADAAAAAAAAAAAAAAAAAAAAUfD/2gAIAQEAAT8Quof/2Q==",self.location);let Gp,ii,Zs;const Ei=new Qe,es=new Qe,Bl=Ei.clone(),ho=new C(0,1,0),xn={ease:"expo.inOut"},iu=600;let ue,Qs,ra,Js,If;const eT=new C(10,-7,-100),tT=new C(0,0,22),nT=new C(-10,-10,0);let ki,ct,ru=new C;const It={progress:1e-5,timePassed:0,pauseAnimation:!1,step:1e-4,speed:1};let Fs=1;var Uf=!1;let di;const Vp=.0906351097205758,as={camRotation:Vp,camTranslateZ:0,camTranslateY:1};let Tr;const fo=new Te(13779265),Wp=new Te(1310768),Xp=new Te(2824516);let ri,sa;const Nn={x:1,y:1},po=120,kl=new Qe;function iT(){if(pT(),!Nt)return;uT(),oT(),xT(),Tr=new KS(ke,Nt.domElement,!1),sT(300);const e=un.getPoint(0);ke.position.set(0,0,-4),ke.lookAt(0,0,0),e.z+=.01,ke.updateMatrix(),rT();const t=new Jl({color:16711744,gradientMap:Zs,emissive:3342352}),n=new Ci({color:16777215,side:Ft,transparent:!0,opacity:.1});new tM().load($S.href,function(o){o.scene.traverse(a=>{if(a.isMesh){const l=a.geometry.clone();l.rotateX(Math.PI/2),lT(t,l),aT(t,n,l);const c=Sa(t,l,1.5,po),u=c.cell.clone();u.scale.set(1.499,1.499,1.499),u.material=n.clone(),u.material.side=Kt,u.material.needsUpdate=!0,c.group.add(u),ir={cellTooBig:{mesh:c.cell,group:c.group,haemoglobin:c.haemoglobin,highlight:u}},Sa(t,l,1,po/3),c.cell.material.side=Kt,c.cell.material.needsUpdate=!0,ou(),dT(),hT(ii,Zs),Uf=!0;return}})}),fT(),Je.fog=new xo(fo,5,170),di=()=>xc();const s=o=>{Hs.update(),o-It.timePassed,It.timePassed=o,Nt.render(Je,ke),ri.render(Je,ke),!(!Uf||It.pauseAnimation)&&(di(),It.progress+=It.step*It.speed,It.progress%=1)};Nt.setAnimationLoop(s),Nt.setClearColor(13779265)}const xc=()=>{au(),ou(),mT()},jp=()=>{au(),ou(),cT()};function rT(){const r=new Od;Zs=r.load(ZS.href),Zs.minFilter=tt,Zs.magFilter=tt,ii=r.load(QS.href),ii.minFilter=tt,ii.magFilter=tt,ii.name="fiveTone",Gp=r.load(JS.href),ii.minFilter=tt,ii.magFilter=tt,ii.name="sevenTone"}function sT(r){const e=JA();let t=new Array(r+1);for(let s=0;s<r+1;s++){const o=new C(e(s*.001,s/13*.1)*150,e(s*.001,.1)*-150,s*5);t[s]=o}un=new Pd(t);const n=new vA({color:16746751,transparent:!0,opacity:0,linewidth:4,gapSize:.5,dashSize:4}),i=new fn().setFromPoints(t);ki=new La(i,n),ki.computeLineDistances(),Je.add(ki)}function oT(){ct=new YS(ke,Nt.domElement),ct.enabled=!1,ct.maxDistance=12,ct.maxPolarAngle=Math.PI*1.8,ct.minPolarAngle=Math.PI*.2,ct.addEventListener("change",()=>{ru=ue.group.worldToLocal(ke.position.clone())})}function aT(r,e,t){const n=Sa(r,t,1,po);ue.mesh=n.cell,ue.highlight=Sa(e,t,1.2,0).cell,ue.highlight.name="highlight",ue.mesh.name="cell",ue.group=new Bn,ue.group.add(ue.highlight,ue.mesh),ue.haemoglobin=Yp(po,1),Je.add(ue.group)}function Sa(r,e,t,n){const i=new Bn,s=new Xt(e,r.clone());s.scale.set(t,t,t);const o=n>0?Yp(n,t):null;return i.add(s),o!=null&&i.add(o),{cell:s,haemoglobin:o,group:i}}function lT(r,e){ln=new Ic(e,r,iu),ln.frustumCulled=!1,ln.material.needsUpdate=!0,Je.add(ln)}function cT(){ct.target=ue.group.position,ke.position.copy(ue.group.localToWorld(ru)),ct.update()}function uT(){$s=new Array(iu);for(let r=0;r<$s.length;r++){const e={offset:new C(Ff(),Ff()),progress:Ii(0,1),velocity:Ii(98e-6,1e-4)};e.offset.length()>gi-.5&&e.offset.normalize().multiplyScalar(Ii(2,gi-.4)),$s[r]=e}ue={group:new Bn,offset:new C(0,0,0),progress:.001,velocity:Ii(98e-6,1e-4)}}function hT(r,e){const t={color:"#f6046d",opacity:.4,gradientMap:r,transparent:!0,side:Kt},n={color:"#9e0045",gradientMap:e,side:Ft,opacity:1},i=new pa(un,void 0,gi+.5,17),s=new Jl(n);gr=new Xt(i,s),Je.add(gr);const o=new pa(un,void 0,gi,17),a=new Jl(t);Bi=new Xt(o,a),Bi.receiveShadow=!0,Je.add(Bi)}function fT(){ra=new Bd(16777215,.2,250,.4),ra.castShadow=!0,Je.add(ra),Qs=new Fd("#ff0000",.7,243,.7,1,2),Qs.visible=!0,Je.add(Qs),Js=new kd(16777215,.1),Js.visible=!0,Je.add(Js),If=new UA("#282828",.8),Je.add(If)}function dT(){const r={object:ue.group,highlighted:!1,highlightFunction(){ue.highlight.material.opacity=.5;let e=ke.worldToLocal(ue.mesh.position.clone());e.add(new C(.8,.8,0)),e=ke.localToWorld(e),sa.position.copy(e),ue.group.add(sa),this.highlighted=!0},unHighlightFunction(){this.highlighted=!1,ue.highlight.material.opacity=.1,ue.group.remove(sa)},callbackFunction:()=>{yT(),Tr.disableObject(ue.group)}};Tr.addInteractiveObject(r)}function pT(){const r=document.querySelector("canvas.webgl");if(r==null)throw new Error("Yikes, where's the canvas?");Nt=new bd({antialias:!0,canvas:r}),Nt.shadowMap.enabled=!0,Nt.setSize(window.innerWidth,window.innerHeight),Hs=new KA,Hs.dom.style.position="absolute",Hs.dom.style.right="0",Hs.dom.style.top="0",ri=new ZA,ri.setSize(window.innerWidth,window.innerHeight),ri.domElement.style.position="absolute",ri.domElement.style.top="0px",ri.domElement.style.right="0px",ri.domElement.style.pointerEvents="none",document.body.appendChild(ri.domElement),Je=new qy;const e=.1,t=160;ke=new Wt(45,window.innerWidth/window.innerHeight,e,t),window.addEventListener("resize",su,!1)}function su(){ke.aspect=window.innerWidth*Nn.x/(window.innerHeight*Nn.y),ke.updateProjectionMatrix(),Nt.setSize(window.innerWidth*Nn.x,window.innerHeight*Nn.y),ri.setSize(window.innerWidth*Nn.x,window.innerHeight*Nn.y);const r=document.getElementById("inspectorUIDiv");r.style.width=`${window.innerWidth*Nn.x}px`,r.style.height=`${window.innerHeight*Nn.y}px`}let Nf=0;const Of=new C(1,1,0).normalize();function ou(){let r;for(let n=0;n<iu;n++){r=$s[n];const i=un.getPoint(r.progress);r.progress+=r.velocity*Fs*It.speed,r.progress%=1,$s[n]=r,Ei.position.copy(i),Ei.lookAt(un.getPoint(r.progress+1e-5)),Ei.position.copy(Ei.localToWorld(r.offset.clone()));const s=n%2==0?-n:n;Ei.rotation.x+=Math.PI/200+Nf*s,Ei.updateMatrix(),ln.setMatrixAt(n,Ei.matrix.clone())}let e=un.getPoint(ue.progress);ue.progress+=ue.velocity*Fs*It.speed,ue.progress%=1,ue.group.position.set(e.x,e.y,e.z);const t=(Math.PI/200+Math.PI*It.step)*It.speed;ue.mesh.rotateOnAxis(Of,t),ue.highlight.rotateOnAxis(Of,t),ln.instanceMatrix.needsUpdate=!0,ln.castShadow=!0,Nf+=1e-4*It.speed,Fs-=.04*It.speed,Fs<1.009&&(Fs=3.5)}const Ii=(r,e)=>Math.random()*(e-r)+r,Ff=()=>Ii(-gi,gi);function mT(){gT(),ke.position.copy(ke.localToWorld(new C(0,as.camTranslateY,0))),ke.lookAt(ue.group.position),ke.rotateY(Math.PI*as.camRotation),ke.lookAt(ke.localToWorld(new C(0,0,-10)))}function gT(){let r=Fa(ue.progress-.007,0,1);const e=un.getPoint(r);ke.position.copy(e);const t=ue.group.position.clone();ke.lookAt(...t.toArray())}function _T(){let r=Fa(ue.progress-.007,0,1);const e=un.getPoint(r);es.position.copy(e);const t=un.getPoint(ue.progress);es.lookAt(...t.toArray()),es.updateMatrix(),es.updateMatrixWorld(!0)}function au(){_T();let r=Fa(ue.progress-.007,0,1);const e=un.getPoint(r),t=es.localToWorld(eT.clone());Qs.position.copy(t),Qs.lookAt(e),ra.position.copy(es.localToWorld(new C(0,0,+tT.z)));const n=ke.localToWorld(nT.clone());Js.position.copy(n),Js.lookAt(e)}function vT(){const r=document.getElementById("homeContainer"),e=document.querySelector(`button.${rt.backButton}`),t=fi.timeline();t.add("start",0),t.to(as,{camRotation:0,camTranslateZ:.003,camTranslateY:.9,delay:0,duration:2,...xn,onComplete:()=>{Tr.wake(),ru=ue.group.worldToLocal(ke.position.clone()),ct.target=ue.group.position,ct.enabled=!0,ct.update(),di=jp}},"start").to(r,{delay:0,opacity:0,duration:2,onUpdate:()=>{},onComplete:()=>{r.style.display="none",e.style.display="block",e.onclick=function(){qp()}}},"start").to(ki.material,{opacity:.4,duration:2,delay:0,...xn},"start"),t.play("start").then(()=>{t.kill()})}function qp(){const r=document.getElementById("homeContainer");r.style.display="flex";const e=document.querySelector(`button.${rt.backButton}`);e.style.display="none",Tr.sleep(),ct.enabled=!1,di=()=>{};const t=fi.timeline();t.to(as,{camRotation:Vp,camTranslateZ:0,camTranslateY:1,duration:1,delay:.001,...xn},0).to(r,{opacity:1,duration:1,delay:0,onStart:()=>{r.style.display="flex",e.style.display="none"}},0);let n=0;const i=(s,o,a)=>{n+=o/1e3,n=Fa(n,0,1);const l=un.getPoint(ue.progress-.007),c=new C;ke.getWorldPosition(c);const u=l.clone().sub(c),h=u.length();u.normalize();const f=c.add(u.multiplyScalar(h*n));ke.position.copy(f),ke.position.copy(ke.localToWorld(new C(0,as.camTranslateY*n,0))),ke.lookAt(ue.group.position),ke.rotateY(Math.PI*as.camRotation),ke.lookAt(ke.localToWorld(new C(0,0,-10))),n>.99&&(fi.ticker.remove(i),di=xc)};Tr.sleep(),fi.ticker.add(i),t.play().then(()=>{di=xc,It.speed=1})}function Zo(r){Je.getObjectById(r.id)||Je.add(r)}function xT(){const r=document.createElement("div");r.textContent="Inspect",r.style.color="white",sa=new $A(r)}const Gi=new bi(new C(0,0,1),30),_r=Gi.clone();_r.normal.applyAxisAngle(ho,Math.PI);_r.constant=0;const oa=_r.clone();function yT(){ue.mesh.material.clippingPlanes=[Gi],ue.mesh.material.gradientMap=ii,ue.mesh.material.needsUpdate=!0;const r=document.querySelector(`button.${rt.backButton}`);ln.material.transparent=!0,Bi.material.opacity=.4;const e=fi.timeline(),t=2,n=3;e.add("slowDown",0),e.add("zoomOut",2),e.add("expandSide",5),e.to(It,{speed:1e-6,duration:t,...xn},"slowDown").to(ue.mesh.rotation,{x:0,y:0,z:0,duration:n,...xn},"zoomOut").to(ue.highlight.rotation,{x:0,y:0,z:0,...xn,duration:n},"zoomOut").to(ue.highlight.scale,{x:.999,y:.999,z:.999},"zoomOut").to(ue.group.position,{x:0,y:0,z:0,onUpdate:function(){ct.target=ue.group.position,ct.update()},...xn,duration:n},"zoomOut").to(ln.material,{opacity:0,duration:n/2},"zoomOut").to(gr.material,{opacity:0,duration:n/2},"zoomOut").to(Bi.material,{opacity:0,duration:n/2},"zoomOut").to(ki.material,{opacity:0,duration:n/2},"zoomOut").to(Nn,{x:.7,duration:1,...xn,onUpdate:()=>{MT(e.progress()),su(),Nt.render(Je,ke)},onComplete:()=>ST()},"expandSide").to(ct,{maxDistance:gi*.8,duration:n/2,onUpdate:()=>{e.progress(),ct.update()},onComplete:()=>{ue.mesh.material.side=Kt,Nt.render(Je,ke),Gi.normal.copy(zl().normalize()),_r.normal.copy(zl().normalize().clone().applyAxisAngle(ho,Math.PI/2)),oa.normal.copy(zl().normalize().clone().applyAxisAngle(ho,-Math.PI/2)),ET(),Je.remove(ln,Bi,gr,ki)}},"zoomOut"),e.play().then(()=>{r.onclick=function(){TT()}})}function AT(r){const e=fo.clone().lerp(Wp,r),t=fo.clone().lerp(Xp,r);Je.fog=new xo(e,5,30+(1-r)*160),Je.background=e,document.body.style.background="#"+t.getHexString(),Nn.x=.65+.33*(1-r)}function MT(r){const e=fo.clone().lerp(Wp,r),t=fo.clone().lerp(Xp,r);Je.fog=new xo(e,5,30+(1-r)*160),Je.background=e,document.body.style.background="#"+t.getHexString()}function ST(){const r=document.querySelector(`div.${rt.inspectorPaneWrapper}`);r.style.width="30vw",r.style.display="block",r.style.opacity="1"}function TT(){const r=fi.timeline(),e=document.querySelector(`button.${rt.backButton}`),t=1,n=1;r.add("removeClipping",0),r.add("backToStream",t),r.add("speedUp",t+n);const i=new C(Math.PI*Ii(0,2),Math.PI*Ii(0,2),Math.PI*Ii(0,2)),s=un.getPoint(ue.progress);r.to(ct,{maxDistance:gi*4,minDistance:gi*3,duration:n,onUpdate:()=>{const o=r.progress();ct.update(),AT(1-o),su(),Nt.render(Je,ke)},onComplete:()=>{ct.minDistance=.4,Tr.enableObject(ue.group)},onStart:function(){Nt.localClippingEnabled=!1,ue.group.remove(ue.haemoglobin),ue.mesh.material.side=Hn,ue.mesh.material.gradientMap=Gp,Zo(ln),Zo(Bi),Zo(gr),Zo(ki)}},"backToStream").to(ue.mesh.rotation,{x:i.x,y:i.y,z:i.z,duration:n,...xn},"backToStream").to(ue.highlight.rotation,{x:i.x,y:i.y,z:i.z,duration:n,...xn},"backToStream").to(It,{speed:1,duration:n,...xn,onComplete:function(){di=jp}},"backToStream").to(ue.group.position,{x:s.x,y:s.y,z:s.z,onUpdate:function(){ct.target=ue.group.position,ct.update()},...xn,duration:n},"backToStream").to(ln.material,{opacity:1,duration:n/4},"backToStream").to(gr.material,{opacity:1,duration:n/4,onComplete:function(){gr.material.transparent=!1,ln.material.transparent=!1}},"backToStream").to(Bi.material,{opacity:.4,duration:n/4},"backToStream").to(ki.material,{opacity:1,duration:n/4},"backToStream"),r.play().then(()=>{e.onclick=function(){qp()}}),console.log("playing :)")}function zl(){return Bl.position.copy(ke.position),Bl.rotateOnWorldAxis(ho,Math.PI/2),ue.group.position.clone().sub(Bl.position).setY(0)}function ET(){au();const r=fi.timeline();ue.group.add(ue.haemoglobin),r.to(Gi,{constant:0,duration:1.2,ease:"ease.inOut",onStart:()=>{Nt.localClippingEnabled=!0}},0),r.to(ke.position,{y:1,onUpdate:()=>{ct.update()},duration:1.2,ease:"ease.inOut"},0),r.play().then(()=>r.kill()),mr=ue,di=()=>yc(ue)}function Yp(r,e){const t=new Oc(1,.1);t.scale(.03,.03,.03);const n=.46*e,i=new Da({color:16777215}),s=new Ic(t,i,po);s.position.set(0,0,0),new C;const o=0,a=(1+Math.sqrt(5))/2,l=Math.round(o*Math.sqrt(r));for(let c=0;c<r;c++){const u=bT(c,r,l)*n,h=2*Math.PI*c/Math.pow(a,2);kl.position.set(u*Math.cos(h),0,u*Math.sin(h)),kl.updateMatrix(),s.setMatrixAt(c,kl.matrix.clone())}return s}function bT(r,e,t){return r>e-t?1:Math.sqrt(r-.5)/Math.sqrt(e-(t+1)/2)}function yc(r){r.group.rotateOnWorldAxis(ho,Math.PI/400),r.group.updateMatrix()}function wT(){if(mr.group.id==ir.cellTooBig.group.id)return;Je.remove(mr.group),ir.cellTooBig.mesh.material.clippingPlanes=[Gi],ir.cellTooBig.group.position.set(0,0,0),mr=ir.cellTooBig;const r=fi.timeline();r.fromTo(Gi,{constant:30},{constant:0,duration:1.2,ease:"ease.inOut",onStart:()=>{Nt.localClippingEnabled=!0}},.25),r.play().then(()=>r.kill()),Je.add(ir.cellTooBig.group),di=()=>{yc(ue),yc(ir.cellTooBig)}}function RT(){ue.mesh.material.clippingPlanes=[_r,Gi],ue.haemoglobin.material.clippingPlanes=[_r],ue.highlight.material.clippingPlanes=[_r],mr.mesh.material.clippingPlanes=[oa,Gi],mr.haemoglobin.material.clippingPlanes=[oa],mr.highlight.material.clippingPlanes=[oa],Je.add(ue.group)}const CT="/assets/RedBloodCell-938a1afe.png",PT=wa("<div><div><img></div><div>"),Qo=r=>(()=>{const e=PT(),t=e.firstChild,n=t.firstChild,i=t.nextSibling;return Hl(e,"click",r.onClick,!0),Yf(n,"src",CT),oi(i,()=>r.title),vr(s=>{const o=rt.objectCard,a=rt.imageWrapper,l=rt.objectCardTitle;return o!==s._v$&&bt(e,s._v$=o),a!==s._v$2&&bt(t,s._v$2=a),l!==s._v$3&&bt(i,s._v$3=l),s},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})();Ac(["click"]);const LT=wa("<div><div><button> &lt; Back </button><h2></h2></div><div>");function Bf(r){return r=r.replace(/\n{2}/g,"&nbsp;</p><p>"),r=r.replace(/\n/g,"&nbsp;<br />"),r="<p>"+r+"</p>",r}const DT=r=>{const[e,t]=Hf(r.active);return Gf(()=>{t(r.active)}),(()=>{const n=LT(),i=n.firstChild,s=i.firstChild,o=s.nextSibling,a=i.nextSibling;return s.$$click=()=>t(!1),oi(o,()=>r.title),vr(l=>{const c=rt.objectDataPane,u=e()?{left:"0"}:{left:"100%",height:"0","min-height":"0",overflow:"hidden"},h=rt.objectPaneStickyTop,f=rt.objectDataPanebackButton,d=rt.objectDataTitle,_=rt.objectDataText,g=Bf(r.data)+Bf(r.data);return c!==l._v$&&bt(n,l._v$=c),l._v$2=um(n,u,l._v$2),h!==l._v$3&&bt(i,l._v$3=h),f!==l._v$4&&bt(s,l._v$4=f),d!==l._v$5&&bt(o,l._v$5=d),_!==l._v$6&&bt(a,l._v$6=_),g!==l._v$7&&(a.innerHTML=l._v$7=g),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),n})()};Ac(["click"]);const IT={"Red Blood Cell (Healthy)":{title:"Red Blood Cell (Healthy)",data:`Red blood cells (RBCs) are essential components of the human circulatory system, responsible for transporting oxygen from the lungs to tissues and organs, and carrying carbon dioxide back to the lungs for exhalation. These specialised cells lack a nucleus and other organelles, allowing for a larger space to accommodate haemoglobin, the key molecule that enables oxygen transport. Haemoglobin is a protein composed of four globin chains, each containing a heme group which binds to oxygen. This unique structure allows a single red blood cell to carry about one billion molecules of oxygen.

The process of RBC formation, known as erythropoiesis, occurs primarily in the bone marrow under the influence of the hormone erythropoietin. As RBCs mature, they lose their nucleus and other organelles to maximise their oxygen-carrying capacity. The lifespan of a red blood cell is about 120 days, after which they are removed from circulation by the spleen and liver.

Haemoglobin plays a crucial role in maintaining the body's oxygen balance. When red blood cells reach tissues with low oxygen levels, haemoglobin releases its bound oxygen, enabling cells to carry out vital functions. At the same time, haemoglobin binds to carbon dioxide produced by cells and carries it back to the lungs for elimination during exhalation. This reversible binding of oxygen and carbon dioxide is central to the respiratory process.

Various factors can impact red blood cell production and function. Anaemia, for example, occurs when there is a deficiency in either the number of RBCs or the amount of haemoglobin within them, leading to reduced oxygen-carrying capacity. Haemoglobinopathies, genetic disorders affecting the structure of haemoglobin, can also impact RBC function and lead to conditions such as sickle cell disease and thalassemia.

In summary, red blood cells are integral to the body's oxygen transport and carbon dioxide removal processes. Their unique structure, dominated by haemoglobin, allows them to efficiently deliver oxygen to tissues and organs while aiding in the removal of carbon dioxide. Understanding the role of red blood cells and haemoglobin is vital for maintaining overall health and preventing disorders related to oxygen imbalance.`},"Red Blood Cell (Anaemic)":{title:"Red Blood Cell (Anaemic)",data:""},Haemoglobin:{title:"Haemoglobin",data:`Haemoglobin, a crucial protein in the bloodstream, is responsible for the transportation of oxygen from the lungs to tissues throughout the body. This iron-containing molecule has a complex structure that allows it to efficiently bind and release oxygen. Composed of four protein subunits, known as globin chains, haemoglobin encloses a heme group within each subunit. This heme group contains an iron ion that is able to bind to oxygen. This unique configuration enables a single haemoglobin molecule to bind up to four oxygen molecules.

The oxygen binding and releasing capability of haemoglobin is crucial for the process of respiration. When oxygen-rich blood reaches the lungs, haemoglobin's iron ions attract and bind to the available oxygen molecules, forming a reversible bond. As the blood circulates to oxygen-depleted tissues, such as muscle cells, haemoglobin's affinity for oxygen decreases due to factors like pH and temperature changes. Consequently, oxygen is released from haemoglobin and diffuses into the surrounding tissues, where it's utilized in cellular respiration to produce energy.

Additionally, haemoglobin aids in the transport of carbon dioxide, a waste product of metabolism, from tissues back to the lungs. Carbon dioxide is carried in the blood as bicarbonate ions or directly bound to haemoglobin. As blood flows through the lungs, carbon dioxide is released, and the reverse reaction occurs, converting bicarbonate ions back into carbon dioxide for exhalation.

The regulation of haemoglobin synthesis is crucial for maintaining a proper balance between oxygen-carrying capacity and oxygen release. Erythropoietin, a hormone produced by the kidneys, stimulates the production of red blood cells, and hence, haemoglobin, in response to low oxygen levels in the body.

Genetic mutations in haemoglobin can lead to various disorders, the most well-known being sickle cell anaemia and thalassaemia. In sickle cell anaemia, a single amino acid change in the haemoglobin protein causes red blood cells to become misshapen, leading to blockages in blood vessels and reduced oxygen delivery. Thalassaemia results from abnormal haemoglobin production, leading to decreased oxygen-carrying capacity and anaemia.

In summary, haemoglobin is a remarkable protein that plays a central role in the transport of oxygen and carbon dioxide in the bloodstream. Its intricate structure and reversible binding properties enable efficient oxygen delivery and release, supporting cellular respiration and overall physiological functioning.`}},UT=wa('<div><div><button id="inspectorBackButton"> &lt; Back </button><div>'),NT=r=>{const[e,t]=Hf({title:"",data:"",active:!1}),n=a=>{t({...IT[a],active:!0})},i=()=>{n("Red Blood Cell (Healthy)")},s=()=>{n("Red Blood Cell (Anaemic)"),wT()},o=()=>{n("Haemoglobin")};return(()=>{const a=UT(),l=a.firstChild,c=l.firstChild,u=c.nextSibling;return oi(u,rr(Qo,{title:"Red Blood Cell (Healthy)",onClick:i,image:""}),null),oi(u,rr(Qo,{title:"Red Blood Cell (Anaemic)",onClick:s,image:""}),null),oi(u,rr(Qo,{title:"Haemoglobin",onClick:o,image:""}),null),oi(u,rr(Qo,{title:"Sickle Cell",onClick:()=>n("Sickle Cell"),image:""}),null),oi(a,rr(DT,{get data(){return e().data},get title(){return e().title},get active(){return e().active}}),null),vr(h=>{const f=rt.inspectorPaneWrapper,d=rt.inspectorPane,_=rt.backButton,g=rt.objectGrid;return f!==h._v$&&bt(a,h._v$=f),d!==h._v$2&&bt(l,h._v$2=d),_!==h._v$3&&bt(c,h._v$3=_),g!==h._v$4&&bt(u,h._v$4=g),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),a})()},OT=wa('<div><div id="inspectorUIDiv"><button> COMPARE</button></div><canvas id="animationContainer"></canvas><div id="homeContainer"><div><div><h1>HEMOEXPLORE</h1><h2>JOURNEY INTO THE BLOODSTREAM</h2><div class="flex-wrapper"><nav><ul><li><a>Start</a></li><li><a href="/Learn">Learn</a></li><li><a href="/Quizzes">Quizzes & Challenges</a></li><li><a href="/About">About</a></li></ul></nav></div></div></div></div><button id="backButton">back'),FT=()=>(nm(iT),(()=>{const r=OT(),e=r.firstChild,t=e.firstChild,n=e.nextSibling,i=n.nextSibling,s=i.firstChild,o=s.firstChild,a=o.firstChild,l=a.nextSibling,c=l.nextSibling,u=c.firstChild,h=u.firstChild,f=h.firstChild,d=i.nextSibling;return Hl(t,"click",RT,!0),t.style.setProperty("pointer-events","auto"),Hl(f,"click",vT,!0),oi(r,rr(NT,{}),d),vr(_=>{const g=rt.inspectorUI,m=`webgl ${rt.background}`,p=`${rt.homeContainer}`,A=rt.homeBody,v=rt.homeTitle,x=rt.backButton;return g!==_._v$&&bt(e,_._v$=g),m!==_._v$2&&bt(n,_._v$2=m),p!==_._v$3&&bt(i,_._v$3=p),A!==_._v$4&&bt(s,_._v$4=A),v!==_._v$5&&bt(o,_._v$5=v),x!==_._v$6&&bt(d,_._v$6=x),_},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),r})());Ac(["click"]);const BT=document.getElementById("root");cm(()=>rr(FT,{}),BT);
