var Ar=Object.defineProperty,Ir=Object.defineProperties;var Or=Object.getOwnPropertyDescriptors;var Ht=Object.getOwnPropertySymbols;var Mr=Object.prototype.hasOwnProperty,Nr=Object.prototype.propertyIsEnumerable;var Dt=(e,t,n)=>t in e?Ar(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ne=(e,t)=>{for(var n in t||(t={}))Mr.call(t,n)&&Dt(e,n,t[n]);if(Ht)for(var n of Ht(t))Nr.call(t,n)&&Dt(e,n,t[n]);return e},Fe=(e,t)=>Ir(e,Or(t));var Be=(e,t,n)=>new Promise((r,o)=>{var a=u=>{try{l(n.next(u))}catch(d){o(d)}},s=u=>{try{l(n.throw(u))}catch(d){o(d)}},l=u=>u.done?r(u.value):Promise.resolve(u.value).then(a,s);l((n=n.apply(e,t)).next())});const p$1=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}};p$1();var index$4="",__uno="";function makeMap(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const specialBooleanAttrs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",isSpecialBooleanAttr=makeMap(specialBooleanAttrs);function includeBooleanAttr(e){return!!e||e===""}function normalizeStyle(e){if(isArray$3(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=isString$1(r)?parseStringStyle(r):normalizeStyle(r);if(o)for(const a in o)t[a]=o[a]}return t}else{if(isString$1(e))return e;if(isObject$2(e))return e}}const listDelimiterRE=/;(?![^(]*\))/g,propertyDelimiterRE=/:(.+)/;function parseStringStyle(e){const t={};return e.split(listDelimiterRE).forEach(n=>{if(n){const r=n.split(propertyDelimiterRE);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function normalizeClass(e){let t="";if(isString$1(e))t=e;else if(isArray$3(e))for(let n=0;n<e.length;n++){const r=normalizeClass(e[n]);r&&(t+=r+" ")}else if(isObject$2(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const HTML_TAGS="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",SVG_TAGS="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",isHTMLTag=makeMap(HTML_TAGS),isSVGTag=makeMap(SVG_TAGS),toDisplayString=e=>isString$1(e)?e:e==null?"":isArray$3(e)||isObject$2(e)&&(e.toString===objectToString$1||!isFunction$2(e.toString))?JSON.stringify(e,replacer,2):String(e),replacer=(e,t)=>t&&t.__v_isRef?replacer(e,t.value):isMap(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o])=>(n[`${r} =>`]=o,n),{})}:isSet(t)?{[`Set(${t.size})`]:[...t.values()]}:isObject$2(t)&&!isArray$3(t)&&!isPlainObject$3(t)?String(t):t,EMPTY_OBJ=Object.freeze({}),EMPTY_ARR=Object.freeze([]),NOOP=()=>{},NO=()=>!1,onRE=/^on[^a-z]/,isOn=e=>onRE.test(e),isModelListener=e=>e.startsWith("onUpdate:"),extend$1=Object.assign,remove=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},hasOwnProperty$c=Object.prototype.hasOwnProperty,hasOwn=(e,t)=>hasOwnProperty$c.call(e,t),isArray$3=Array.isArray,isMap=e=>toTypeString(e)==="[object Map]",isSet=e=>toTypeString(e)==="[object Set]",isFunction$2=e=>typeof e=="function",isString$1=e=>typeof e=="string",isSymbol$1=e=>typeof e=="symbol",isObject$2=e=>e!==null&&typeof e=="object",isPromise=e=>isObject$2(e)&&isFunction$2(e.then)&&isFunction$2(e.catch),objectToString$1=Object.prototype.toString,toTypeString=e=>objectToString$1.call(e),toRawType=e=>toTypeString(e).slice(8,-1),isPlainObject$3=e=>toTypeString(e)==="[object Object]",isIntegerKey=e=>isString$1(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,isReservedProp=makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),isBuiltInDirective=makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),cacheStringFunction=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},camelizeRE=/-(\w)/g,camelize=cacheStringFunction(e=>e.replace(camelizeRE,(t,n)=>n?n.toUpperCase():"")),hyphenateRE=/\B([A-Z])/g,hyphenate=cacheStringFunction(e=>e.replace(hyphenateRE,"-$1").toLowerCase()),capitalize=cacheStringFunction(e=>e.charAt(0).toUpperCase()+e.slice(1)),toHandlerKey=cacheStringFunction(e=>e?`on${capitalize(e)}`:""),hasChanged=(e,t)=>!Object.is(e,t),invokeArrayFns=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},def=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},toNumber$1=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let _globalThis;const getGlobalThis=()=>_globalThis||(_globalThis=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function warn$5(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let activeEffectScope;class EffectScope{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&activeEffectScope&&(this.parent=activeEffectScope,this.index=(activeEffectScope.scopes||(activeEffectScope.scopes=[])).push(this)-1)}run(t){if(this.active)try{return activeEffectScope=this,t()}finally{activeEffectScope=this.parent}else warn$5("cannot run an inactive effect scope.")}on(){activeEffectScope=this}off(){activeEffectScope=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.active=!1}}}function effectScope(e){return new EffectScope(e)}function recordEffectScope(e,t=activeEffectScope){t&&t.active&&t.effects.push(e)}const createDep=e=>{const t=new Set(e);return t.w=0,t.n=0,t},wasTracked=e=>(e.w&trackOpBit)>0,newTracked=e=>(e.n&trackOpBit)>0,initDepMarkers=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=trackOpBit},finalizeDepMarkers=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];wasTracked(o)&&!newTracked(o)?o.delete(e):t[n++]=o,o.w&=~trackOpBit,o.n&=~trackOpBit}t.length=n}},targetMap=new WeakMap;let effectTrackDepth=0,trackOpBit=1;const maxMarkerBits=30;let activeEffect;const ITERATE_KEY=Symbol("iterate"),MAP_KEY_ITERATE_KEY=Symbol("Map key iterate");class ReactiveEffect{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,recordEffectScope(this,r)}run(){if(!this.active)return this.fn();let t=activeEffect,n=shouldTrack;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=activeEffect,activeEffect=this,shouldTrack=!0,trackOpBit=1<<++effectTrackDepth,effectTrackDepth<=maxMarkerBits?initDepMarkers(this):cleanupEffect(this),this.fn()}finally{effectTrackDepth<=maxMarkerBits&&finalizeDepMarkers(this),trackOpBit=1<<--effectTrackDepth,activeEffect=this.parent,shouldTrack=n,this.parent=void 0}}stop(){this.active&&(cleanupEffect(this),this.onStop&&this.onStop(),this.active=!1)}}function cleanupEffect(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let shouldTrack=!0;const trackStack=[];function pauseTracking(){trackStack.push(shouldTrack),shouldTrack=!1}function resetTracking(){const e=trackStack.pop();shouldTrack=e===void 0?!0:e}function track(e,t,n){if(shouldTrack&&activeEffect){let r=targetMap.get(e);r||targetMap.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=createDep()),trackEffects(o,{effect:activeEffect,target:e,type:t,key:n})}}function trackEffects(e,t){let n=!1;effectTrackDepth<=maxMarkerBits?newTracked(e)||(e.n|=trackOpBit,n=!wasTracked(e)):n=!e.has(activeEffect),n&&(e.add(activeEffect),activeEffect.deps.push(e),activeEffect.onTrack&&activeEffect.onTrack(Object.assign({effect:activeEffect},t)))}function trigger$1(e,t,n,r,o,a){const s=targetMap.get(e);if(!s)return;let l=[];if(t==="clear")l=[...s.values()];else if(n==="length"&&isArray$3(e))s.forEach((d,f)=>{(f==="length"||f>=r)&&l.push(d)});else switch(n!==void 0&&l.push(s.get(n)),t){case"add":isArray$3(e)?isIntegerKey(n)&&l.push(s.get("length")):(l.push(s.get(ITERATE_KEY)),isMap(e)&&l.push(s.get(MAP_KEY_ITERATE_KEY)));break;case"delete":isArray$3(e)||(l.push(s.get(ITERATE_KEY)),isMap(e)&&l.push(s.get(MAP_KEY_ITERATE_KEY)));break;case"set":isMap(e)&&l.push(s.get(ITERATE_KEY));break}const u={target:e,type:t,key:n,newValue:r,oldValue:o,oldTarget:a};if(l.length===1)l[0]&&triggerEffects(l[0],u);else{const d=[];for(const f of l)f&&d.push(...f);triggerEffects(createDep(d),u)}}function triggerEffects(e,t){for(const n of isArray$3(e)?e:[...e])(n!==activeEffect||n.allowRecurse)&&(n.onTrigger&&n.onTrigger(extend$1({effect:n},t)),n.scheduler?n.scheduler():n.run())}const isNonTrackableKeys=makeMap("__proto__,__v_isRef,__isVue"),builtInSymbols=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(isSymbol$1)),get$1=createGetter(),shallowGet=createGetter(!1,!0),readonlyGet=createGetter(!0),shallowReadonlyGet=createGetter(!0,!0),arrayInstrumentations=createArrayInstrumentations();function createArrayInstrumentations(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=toRaw(this);for(let a=0,s=this.length;a<s;a++)track(r,"get",a+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(toRaw)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){pauseTracking();const r=toRaw(this)[t].apply(this,n);return resetTracking(),r}}),e}function createGetter(e=!1,t=!1){return function(r,o,a){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&a===(e?t?shallowReadonlyMap:readonlyMap:t?shallowReactiveMap:reactiveMap).get(r))return r;const s=isArray$3(r);if(!e&&s&&hasOwn(arrayInstrumentations,o))return Reflect.get(arrayInstrumentations,o,a);const l=Reflect.get(r,o,a);return(isSymbol$1(o)?builtInSymbols.has(o):isNonTrackableKeys(o))||(e||track(r,"get",o),t)?l:isRef(l)?!s||!isIntegerKey(o)?l.value:l:isObject$2(l)?e?readonly(l):reactive(l):l}}const set$1=createSetter(),shallowSet=createSetter(!0);function createSetter(e=!1){return function(n,r,o,a){let s=n[r];if(isReadonly(s)&&isRef(s)&&!isRef(o))return!1;if(!e&&!isReadonly(o)&&(isShallow$1(o)||(o=toRaw(o),s=toRaw(s)),!isArray$3(n)&&isRef(s)&&!isRef(o)))return s.value=o,!0;const l=isArray$3(n)&&isIntegerKey(r)?Number(r)<n.length:hasOwn(n,r),u=Reflect.set(n,r,o,a);return n===toRaw(a)&&(l?hasChanged(o,s)&&trigger$1(n,"set",r,o,s):trigger$1(n,"add",r,o)),u}}function deleteProperty(e,t){const n=hasOwn(e,t),r=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&trigger$1(e,"delete",t,void 0,r),o}function has(e,t){const n=Reflect.has(e,t);return(!isSymbol$1(t)||!builtInSymbols.has(t))&&track(e,"has",t),n}function ownKeys(e){return track(e,"iterate",isArray$3(e)?"length":ITERATE_KEY),Reflect.ownKeys(e)}const mutableHandlers={get:get$1,set:set$1,deleteProperty,has,ownKeys},readonlyHandlers={get:readonlyGet,set(e,t){return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},shallowReactiveHandlers=extend$1({},mutableHandlers,{get:shallowGet,set:shallowSet}),shallowReadonlyHandlers=extend$1({},readonlyHandlers,{get:shallowReadonlyGet}),toShallow=e=>e,getProto=e=>Reflect.getPrototypeOf(e);function get$1$1(e,t,n=!1,r=!1){e=e.__v_raw;const o=toRaw(e),a=toRaw(t);t!==a&&!n&&track(o,"get",t),!n&&track(o,"get",a);const{has:s}=getProto(o),l=r?toShallow:n?toReadonly:toReactive;if(s.call(o,t))return l(e.get(t));if(s.call(o,a))return l(e.get(a));e!==o&&e.get(t)}function has$1(e,t=!1){const n=this.__v_raw,r=toRaw(n),o=toRaw(e);return e!==o&&!t&&track(r,"has",e),!t&&track(r,"has",o),e===o?n.has(e):n.has(e)||n.has(o)}function size(e,t=!1){return e=e.__v_raw,!t&&track(toRaw(e),"iterate",ITERATE_KEY),Reflect.get(e,"size",e)}function add(e){e=toRaw(e);const t=toRaw(this);return getProto(t).has.call(t,e)||(t.add(e),trigger$1(t,"add",e,e)),this}function set$1$1(e,t){t=toRaw(t);const n=toRaw(this),{has:r,get:o}=getProto(n);let a=r.call(n,e);a?checkIdentityKeys(n,r,e):(e=toRaw(e),a=r.call(n,e));const s=o.call(n,e);return n.set(e,t),a?hasChanged(t,s)&&trigger$1(n,"set",e,t,s):trigger$1(n,"add",e,t),this}function deleteEntry(e){const t=toRaw(this),{has:n,get:r}=getProto(t);let o=n.call(t,e);o?checkIdentityKeys(t,n,e):(e=toRaw(e),o=n.call(t,e));const a=r?r.call(t,e):void 0,s=t.delete(e);return o&&trigger$1(t,"delete",e,void 0,a),s}function clear(){const e=toRaw(this),t=e.size!==0,n=isMap(e)?new Map(e):new Set(e),r=e.clear();return t&&trigger$1(e,"clear",void 0,void 0,n),r}function createForEach(e,t){return function(r,o){const a=this,s=a.__v_raw,l=toRaw(s),u=t?toShallow:e?toReadonly:toReactive;return!e&&track(l,"iterate",ITERATE_KEY),s.forEach((d,f)=>r.call(o,u(d),u(f),a))}}function createIterableMethod(e,t,n){return function(...r){const o=this.__v_raw,a=toRaw(o),s=isMap(a),l=e==="entries"||e===Symbol.iterator&&s,u=e==="keys"&&s,d=o[e](...r),f=n?toShallow:t?toReadonly:toReactive;return!t&&track(a,"iterate",u?MAP_KEY_ITERATE_KEY:ITERATE_KEY),{next(){const{value:m,done:g}=d.next();return g?{value:m,done:g}:{value:l?[f(m[0]),f(m[1])]:f(m),done:g}},[Symbol.iterator](){return this}}}}function createReadonlyMethod(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${capitalize(e)} operation ${n}failed: target is readonly.`,toRaw(this))}return e==="delete"?!1:this}}function createInstrumentations(){const e={get(a){return get$1$1(this,a)},get size(){return size(this)},has:has$1,add,set:set$1$1,delete:deleteEntry,clear,forEach:createForEach(!1,!1)},t={get(a){return get$1$1(this,a,!1,!0)},get size(){return size(this)},has:has$1,add,set:set$1$1,delete:deleteEntry,clear,forEach:createForEach(!1,!0)},n={get(a){return get$1$1(this,a,!0)},get size(){return size(this,!0)},has(a){return has$1.call(this,a,!0)},add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear"),forEach:createForEach(!0,!1)},r={get(a){return get$1$1(this,a,!0,!0)},get size(){return size(this,!0)},has(a){return has$1.call(this,a,!0)},add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear"),forEach:createForEach(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=createIterableMethod(a,!1,!1),n[a]=createIterableMethod(a,!0,!1),t[a]=createIterableMethod(a,!1,!0),r[a]=createIterableMethod(a,!0,!0)}),[e,n,t,r]}const[mutableInstrumentations,readonlyInstrumentations,shallowInstrumentations,shallowReadonlyInstrumentations]=createInstrumentations();function createInstrumentationGetter(e,t){const n=t?e?shallowReadonlyInstrumentations:shallowInstrumentations:e?readonlyInstrumentations:mutableInstrumentations;return(r,o,a)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(hasOwn(n,o)&&o in r?n:r,o,a)}const mutableCollectionHandlers={get:createInstrumentationGetter(!1,!1)},shallowCollectionHandlers={get:createInstrumentationGetter(!1,!0)},readonlyCollectionHandlers={get:createInstrumentationGetter(!0,!1)},shallowReadonlyCollectionHandlers={get:createInstrumentationGetter(!0,!0)};function checkIdentityKeys(e,t,n){const r=toRaw(n);if(r!==n&&t.call(e,r)){const o=toRawType(e);console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const reactiveMap=new WeakMap,shallowReactiveMap=new WeakMap,readonlyMap=new WeakMap,shallowReadonlyMap=new WeakMap;function targetTypeMap(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function getTargetType(e){return e.__v_skip||!Object.isExtensible(e)?0:targetTypeMap(toRawType(e))}function reactive(e){return isReadonly(e)?e:createReactiveObject(e,!1,mutableHandlers,mutableCollectionHandlers,reactiveMap)}function shallowReactive(e){return createReactiveObject(e,!1,shallowReactiveHandlers,shallowCollectionHandlers,shallowReactiveMap)}function readonly(e){return createReactiveObject(e,!0,readonlyHandlers,readonlyCollectionHandlers,readonlyMap)}function shallowReadonly(e){return createReactiveObject(e,!0,shallowReadonlyHandlers,shallowReadonlyCollectionHandlers,shallowReadonlyMap)}function createReactiveObject(e,t,n,r,o){if(!isObject$2(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=o.get(e);if(a)return a;const s=getTargetType(e);if(s===0)return e;const l=new Proxy(e,s===2?r:n);return o.set(e,l),l}function isReactive(e){return isReadonly(e)?isReactive(e.__v_raw):!!(e&&e.__v_isReactive)}function isReadonly(e){return!!(e&&e.__v_isReadonly)}function isShallow$1(e){return!!(e&&e.__v_isShallow)}function isProxy(e){return isReactive(e)||isReadonly(e)}function toRaw(e){const t=e&&e.__v_raw;return t?toRaw(t):e}function markRaw(e){return def(e,"__v_skip",!0),e}const toReactive=e=>isObject$2(e)?reactive(e):e,toReadonly=e=>isObject$2(e)?readonly(e):e;function trackRefValue(e){shouldTrack&&activeEffect&&(e=toRaw(e),trackEffects(e.dep||(e.dep=createDep()),{target:e,type:"get",key:"value"}))}function triggerRefValue(e,t){e=toRaw(e),e.dep&&triggerEffects(e.dep,{target:e,type:"set",key:"value",newValue:t})}function isRef(e){return!!(e&&e.__v_isRef===!0)}function ref(e){return createRef(e,!1)}function shallowRef(e){return createRef(e,!0)}function createRef(e,t){return isRef(e)?e:new RefImpl(e,t)}class RefImpl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:toRaw(t),this._value=n?t:toReactive(t)}get value(){return trackRefValue(this),this._value}set value(t){t=this.__v_isShallow?t:toRaw(t),hasChanged(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:toReactive(t),triggerRefValue(this,t))}}function unref(e){return isRef(e)?e.value:e}const shallowUnwrapHandlers={get:(e,t,n)=>unref(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return isRef(o)&&!isRef(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function proxyRefs(e){return isReactive(e)?e:new Proxy(e,shallowUnwrapHandlers)}function toRefs(e){isProxy(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=isArray$3(e)?new Array(e.length):{};for(const n in e)t[n]=toRef(e,n);return t}class ObjectRefImpl{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function toRef(e,t,n){const r=e[t];return isRef(r)?r:new ObjectRefImpl(e,t,n)}class ComputedRefImpl{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ReactiveEffect(t,()=>{this._dirty||(this._dirty=!0,triggerRefValue(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=toRaw(this);return trackRefValue(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function computed$1(e,t,n=!1){let r,o;const a=isFunction$2(e);a?(r=e,o=()=>{console.warn("Write operation failed: computed value is readonly")}):(r=e.get,o=e.set);const s=new ComputedRefImpl(r,o,a||!o,n);return t&&!n&&(s.effect.onTrack=t.onTrack,s.effect.onTrigger=t.onTrigger),s}Promise.resolve();const stack$1=[];function pushWarningContext(e){stack$1.push(e)}function popWarningContext(){stack$1.pop()}function warn$4(e,...t){pauseTracking();const n=stack$1.length?stack$1[stack$1.length-1].component:null,r=n&&n.appContext.config.warnHandler,o=getComponentTrace();if(r)callWithErrorHandling(r,n,11,[e+t.join(""),n&&n.proxy,o.map(({vnode:a})=>`at <${formatComponentName(n,a.type)}>`).join(`
`),o]);else{const a=[`[Vue warn]: ${e}`,...t];o.length&&a.push(`
`,...formatTrace(o)),console.warn(...a)}resetTracking()}function getComponentTrace(){let e=stack$1[stack$1.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function formatTrace(e){const t=[];return e.forEach((n,r)=>{t.push(...r===0?[]:[`
`],...formatTraceEntry(n))}),t}function formatTraceEntry({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=e.component?e.component.parent==null:!1,o=` at <${formatComponentName(e.component,e.type,r)}`,a=">"+n;return e.props?[o,...formatProps(e.props),a]:[o+a]}function formatProps(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(r=>{t.push(...formatProp(r,e[r]))}),n.length>3&&t.push(" ..."),t}function formatProp(e,t,n){return isString$1(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:isRef(t)?(t=formatProp(e,toRaw(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):isFunction$2(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=toRaw(t),n?t:[`${e}=`,t])}const ErrorTypeStrings={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function callWithErrorHandling(e,t,n,r){let o;try{o=r?e(...r):e()}catch(a){handleError(a,t,n)}return o}function callWithAsyncErrorHandling(e,t,n,r){if(isFunction$2(e)){const a=callWithErrorHandling(e,t,n,r);return a&&isPromise(a)&&a.catch(s=>{handleError(s,t,n)}),a}const o=[];for(let a=0;a<e.length;a++)o.push(callWithAsyncErrorHandling(e[a],t,n,r));return o}function handleError(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let a=t.parent;const s=t.proxy,l=ErrorTypeStrings[n];for(;a;){const d=a.ec;if(d){for(let f=0;f<d.length;f++)if(d[f](e,s,l)===!1)return}a=a.parent}const u=t.appContext.config.errorHandler;if(u){callWithErrorHandling(u,null,10,[e,s,l]);return}}logError(e,n,o,r)}function logError(e,t,n,r=!0){{const o=ErrorTypeStrings[t];if(n&&pushWarningContext(n),warn$4(`Unhandled error${o?` during execution of ${o}`:""}`),n&&popWarningContext(),r)throw e;console.error(e)}}let isFlushing=!1,isFlushPending=!1;const queue=[];let flushIndex=0;const pendingPreFlushCbs=[];let activePreFlushCbs=null,preFlushIndex=0;const pendingPostFlushCbs=[];let activePostFlushCbs=null,postFlushIndex=0;const resolvedPromise=Promise.resolve();let currentFlushPromise=null,currentPreFlushParentJob=null;const RECURSION_LIMIT=100;function nextTick(e){const t=currentFlushPromise||resolvedPromise;return e?t.then(this?e.bind(this):e):t}function findInsertionIndex(e){let t=flushIndex+1,n=queue.length;for(;t<n;){const r=t+n>>>1;getId(queue[r])<e?t=r+1:n=r}return t}function queueJob(e){(!queue.length||!queue.includes(e,isFlushing&&e.allowRecurse?flushIndex+1:flushIndex))&&e!==currentPreFlushParentJob&&(e.id==null?queue.push(e):queue.splice(findInsertionIndex(e.id),0,e),queueFlush())}function queueFlush(){!isFlushing&&!isFlushPending&&(isFlushPending=!0,currentFlushPromise=resolvedPromise.then(flushJobs))}function invalidateJob(e){const t=queue.indexOf(e);t>flushIndex&&queue.splice(t,1)}function queueCb(e,t,n,r){isArray$3(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),queueFlush()}function queuePreFlushCb(e){queueCb(e,activePreFlushCbs,pendingPreFlushCbs,preFlushIndex)}function queuePostFlushCb(e){queueCb(e,activePostFlushCbs,pendingPostFlushCbs,postFlushIndex)}function flushPreFlushCbs(e,t=null){if(pendingPreFlushCbs.length){for(currentPreFlushParentJob=t,activePreFlushCbs=[...new Set(pendingPreFlushCbs)],pendingPreFlushCbs.length=0,e=e||new Map,preFlushIndex=0;preFlushIndex<activePreFlushCbs.length;preFlushIndex++)checkRecursiveUpdates(e,activePreFlushCbs[preFlushIndex])||activePreFlushCbs[preFlushIndex]();activePreFlushCbs=null,preFlushIndex=0,currentPreFlushParentJob=null,flushPreFlushCbs(e,t)}}function flushPostFlushCbs(e){if(pendingPostFlushCbs.length){const t=[...new Set(pendingPostFlushCbs)];if(pendingPostFlushCbs.length=0,activePostFlushCbs){activePostFlushCbs.push(...t);return}for(activePostFlushCbs=t,e=e||new Map,activePostFlushCbs.sort((n,r)=>getId(n)-getId(r)),postFlushIndex=0;postFlushIndex<activePostFlushCbs.length;postFlushIndex++)checkRecursiveUpdates(e,activePostFlushCbs[postFlushIndex])||activePostFlushCbs[postFlushIndex]();activePostFlushCbs=null,postFlushIndex=0}}const getId=e=>e.id==null?1/0:e.id;function flushJobs(e){isFlushPending=!1,isFlushing=!0,e=e||new Map,flushPreFlushCbs(e),queue.sort((n,r)=>getId(n)-getId(r));const t=n=>checkRecursiveUpdates(e,n);try{for(flushIndex=0;flushIndex<queue.length;flushIndex++){const n=queue[flushIndex];if(n&&n.active!==!1){if(t(n))continue;callWithErrorHandling(n,null,14)}}}finally{flushIndex=0,queue.length=0,flushPostFlushCbs(e),isFlushing=!1,currentFlushPromise=null,(queue.length||pendingPreFlushCbs.length||pendingPostFlushCbs.length)&&flushJobs(e)}}function checkRecursiveUpdates(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>RECURSION_LIMIT){const r=t.ownerInstance,o=r&&getComponentName(r.type);return warn$4(`Maximum recursive updates exceeded${o?` in component <${o}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let isHmrUpdating=!1;const hmrDirtyComponents=new Set;getGlobalThis().__VUE_HMR_RUNTIME__={createRecord:tryWrap(createRecord),rerender:tryWrap(rerender),reload:tryWrap(reload)};const map$1=new Map;function registerHMR(e){const t=e.type.__hmrId;let n=map$1.get(t);n||(createRecord(t,e.type),n=map$1.get(t)),n.instances.add(e)}function unregisterHMR(e){map$1.get(e.type.__hmrId).instances.delete(e)}function createRecord(e,t){return map$1.has(e)?!1:(map$1.set(e,{initialDef:normalizeClassComponent(t),instances:new Set}),!0)}function normalizeClassComponent(e){return isClassComponent(e)?e.__vccOpts:e}function rerender(e,t){const n=map$1.get(e);!n||(n.initialDef.render=t,[...n.instances].forEach(r=>{t&&(r.render=t,normalizeClassComponent(r.type).render=t),r.renderCache=[],isHmrUpdating=!0,r.update(),isHmrUpdating=!1}))}function reload(e,t){const n=map$1.get(e);if(!n)return;t=normalizeClassComponent(t),updateComponentDef(n.initialDef,t);const r=[...n.instances];for(const o of r){const a=normalizeClassComponent(o.type);hmrDirtyComponents.has(a)||(a!==n.initialDef&&updateComponentDef(a,t),hmrDirtyComponents.add(a)),o.appContext.optionsCache.delete(o.type),o.ceReload?(hmrDirtyComponents.add(a),o.ceReload(t.styles),hmrDirtyComponents.delete(a)):o.parent?(queueJob(o.parent.update),o.parent.type.__asyncLoader&&o.parent.ceReload&&o.parent.ceReload(t.styles)):o.appContext.reload?o.appContext.reload():typeof window!="undefined"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}queuePostFlushCb(()=>{for(const o of r)hmrDirtyComponents.delete(normalizeClassComponent(o.type))})}function updateComponentDef(e,t){extend$1(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function tryWrap(e){return(t,n)=>{try{return e(t,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let devtools,buffer=[],devtoolsNotInstalled=!1;function emit(e,...t){devtools?devtools.emit(e,...t):devtoolsNotInstalled||buffer.push({event:e,args:t})}function setDevtoolsHook(e,t){var n,r;devtools=e,devtools?(devtools.enabled=!0,buffer.forEach(({event:o,args:a})=>devtools.emit(o,...a)),buffer=[]):typeof window!="undefined"&&window.HTMLElement&&!(!((r=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||r===void 0)&&r.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(a=>{setDevtoolsHook(a,t)}),setTimeout(()=>{devtools||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,devtoolsNotInstalled=!0,buffer=[])},3e3)):(devtoolsNotInstalled=!0,buffer=[])}function devtoolsInitApp(e,t){emit("app:init",e,t,{Fragment,Text,Comment,Static})}function devtoolsUnmountApp(e){emit("app:unmount",e)}const devtoolsComponentAdded=createDevtoolsComponentHook("component:added"),devtoolsComponentUpdated=createDevtoolsComponentHook("component:updated"),devtoolsComponentRemoved=createDevtoolsComponentHook("component:removed");function createDevtoolsComponentHook(e){return t=>{emit(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const devtoolsPerfStart=createDevtoolsPerformanceHook("perf:start"),devtoolsPerfEnd=createDevtoolsPerformanceHook("perf:end");function createDevtoolsPerformanceHook(e){return(t,n,r)=>{emit(e,t.appContext.app,t.uid,t,n,r)}}function devtoolsComponentEmit(e,t,n){emit("component:emit",e.appContext.app,e,t,n)}function emit$1(e,t,...n){const r=e.vnode.props||EMPTY_OBJ;{const{emitsOptions:f,propsOptions:[m]}=e;if(f)if(!(t in f))(!m||!(toHandlerKey(t)in m))&&warn$4(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${toHandlerKey(t)}" prop.`);else{const g=f[t];isFunction$2(g)&&(g(...n)||warn$4(`Invalid event arguments: event validation failed for event "${t}".`))}}let o=n;const a=t.startsWith("update:"),s=a&&t.slice(7);if(s&&s in r){const f=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:g}=r[f]||EMPTY_OBJ;g?o=n.map(y=>y.trim()):m&&(o=n.map(toNumber$1))}devtoolsComponentEmit(e,t,o);{const f=t.toLowerCase();f!==t&&r[toHandlerKey(f)]&&warn$4(`Event "${f}" is emitted in component ${formatComponentName(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(t)}" instead of "${t}".`)}let l,u=r[l=toHandlerKey(t)]||r[l=toHandlerKey(camelize(t))];!u&&a&&(u=r[l=toHandlerKey(hyphenate(t))]),u&&callWithAsyncErrorHandling(u,e,6,o);const d=r[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,callWithAsyncErrorHandling(d,e,6,o)}}function normalizeEmitsOptions(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const a=e.emits;let s={},l=!1;if(!isFunction$2(e)){const u=d=>{const f=normalizeEmitsOptions(d,t,!0);f&&(l=!0,extend$1(s,f))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!a&&!l?(r.set(e,null),null):(isArray$3(a)?a.forEach(u=>s[u]=null):extend$1(s,a),r.set(e,s),s)}function isEmitListener(e,t){return!e||!isOn(t)?!1:(t=t.slice(2).replace(/Once$/,""),hasOwn(e,t[0].toLowerCase()+t.slice(1))||hasOwn(e,hyphenate(t))||hasOwn(e,t))}let currentRenderingInstance=null,currentScopeId=null;function setCurrentRenderingInstance(e){const t=currentRenderingInstance;return currentRenderingInstance=e,currentScopeId=e&&e.type.__scopeId||null,t}function pushScopeId(e){currentScopeId=e}function popScopeId(){currentScopeId=null}function withCtx(e,t=currentRenderingInstance,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&setBlockTracking(-1);const a=setCurrentRenderingInstance(t),s=e(...o);return setCurrentRenderingInstance(a),r._d&&setBlockTracking(1),devtoolsComponentUpdated(t),s};return r._n=!0,r._c=!0,r._d=!0,r}let accessedAttrs=!1;function markAttrsAccessed(){accessedAttrs=!0}function renderComponentRoot(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:a,propsOptions:[s],slots:l,attrs:u,emit:d,render:f,renderCache:m,data:g,setupState:y,ctx:b,inheritAttrs:x}=e;let C,$;const E=setCurrentRenderingInstance(e);accessedAttrs=!1;try{if(n.shapeFlag&4){const k=o||r;C=normalizeVNode(f.call(k,k,m,a,y,g,b)),$=u}else{const k=t;u===a&&markAttrsAccessed(),C=normalizeVNode(k.length>1?k(a,{get attrs(){return markAttrsAccessed(),u},slots:l,emit:d}):k(a,null)),$=t.props?u:getFunctionalFallthrough(u)}}catch(k){blockStack.length=0,handleError(k,e,1),C=createVNode(Comment)}let N=C,S;if(C.patchFlag>0&&C.patchFlag&2048&&([N,S]=getChildRoot(C)),$&&x!==!1){const k=Object.keys($),{shapeFlag:A}=N;if(k.length){if(A&7)s&&k.some(isModelListener)&&($=filterModelListeners($,s)),N=cloneVNode(N,$);else if(!accessedAttrs&&N.type!==Comment){const _=Object.keys(u),P=[],I=[];for(let O=0,j=_.length;O<j;O++){const B=_[O];isOn(B)?isModelListener(B)||P.push(B[2].toLowerCase()+B.slice(3)):I.push(B)}I.length&&warn$4(`Extraneous non-props attributes (${I.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),P.length&&warn$4(`Extraneous non-emits event listeners (${P.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(isElementRoot(N)||warn$4("Runtime directive used on component with non-element root node. The directives will not function as intended."),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(isElementRoot(N)||warn$4("Component inside <Transition> renders non-element root node that cannot be animated."),N.transition=n.transition),S?S(N):C=N,setCurrentRenderingInstance(E),C}const getChildRoot=e=>{const t=e.children,n=e.dynamicChildren,r=filterSingleRoot(t);if(!r)return[e,void 0];const o=t.indexOf(r),a=n?n.indexOf(r):-1,s=l=>{t[o]=l,n&&(a>-1?n[a]=l:l.patchFlag>0&&(e.dynamicChildren=[...n,l]))};return[normalizeVNode(r),s]};function filterSingleRoot(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(isVNode(r)){if(r.type!==Comment||r.children==="v-if"){if(t)return;t=r}}else return}return t}const getFunctionalFallthrough=e=>{let t;for(const n in e)(n==="class"||n==="style"||isOn(n))&&((t||(t={}))[n]=e[n]);return t},filterModelListeners=(e,t)=>{const n={};for(const r in e)(!isModelListener(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n},isElementRoot=e=>e.shapeFlag&7||e.type===Comment;function shouldUpdateComponent(e,t,n){const{props:r,children:o,component:a}=e,{props:s,children:l,patchFlag:u}=t,d=a.emitsOptions;if((o||l)&&isHmrUpdating||t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?hasPropsChanged(r,s,d):!!s;if(u&8){const f=t.dynamicProps;for(let m=0;m<f.length;m++){const g=f[m];if(s[g]!==r[g]&&!isEmitListener(d,g))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:r===s?!1:r?s?hasPropsChanged(r,s,d):!0:!!s;return!1}function hasPropsChanged(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const a=r[o];if(t[a]!==e[a]&&!isEmitListener(n,a))return!0}return!1}function updateHOCHostEl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const isSuspense=e=>e.__isSuspense;function queueEffectWithSuspense(e,t){t&&t.pendingBranch?isArray$3(e)?t.effects.push(...e):t.effects.push(e):queuePostFlushCb(e)}function provide(e,t){if(!currentInstance)warn$4("provide() can only be used inside setup().");else{let n=currentInstance.provides;const r=currentInstance.parent&&currentInstance.parent.provides;r===n&&(n=currentInstance.provides=Object.create(r)),n[e]=t}}function inject(e,t,n=!1){const r=currentInstance||currentRenderingInstance;if(r){const o=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&isFunction$2(t)?t.call(r.proxy):t;warn$4(`injection "${String(e)}" not found.`)}else warn$4("inject() can only be used inside setup() or functional components.")}function watchEffect(e,t){return doWatch(e,null,t)}const INITIAL_WATCHER_VALUE={};function watch(e,t,n){return isFunction$2(t)||warn$4("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),doWatch(e,t,n)}function doWatch(e,t,{immediate:n,deep:r,flush:o,onTrack:a,onTrigger:s}=EMPTY_OBJ){t||(n!==void 0&&warn$4('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&warn$4('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const l=E=>{warn$4("Invalid watch source: ",E,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=currentInstance;let d,f=!1,m=!1;if(isRef(e)?(d=()=>e.value,f=isShallow$1(e)):isReactive(e)?(d=()=>e,r=!0):isArray$3(e)?(m=!0,f=e.some(isReactive),d=()=>e.map(E=>{if(isRef(E))return E.value;if(isReactive(E))return traverse(E);if(isFunction$2(E))return callWithErrorHandling(E,u,2);l(E)})):isFunction$2(e)?t?d=()=>callWithErrorHandling(e,u,2):d=()=>{if(!(u&&u.isUnmounted))return g&&g(),callWithAsyncErrorHandling(e,u,3,[y])}:(d=NOOP,l(e)),t&&r){const E=d;d=()=>traverse(E())}let g,y=E=>{g=$.onStop=()=>{callWithErrorHandling(E,u,4)}};if(isInSSRComponentSetup)return y=NOOP,t?n&&callWithAsyncErrorHandling(t,u,3,[d(),m?[]:void 0,y]):d(),NOOP;let b=m?[]:INITIAL_WATCHER_VALUE;const x=()=>{if(!!$.active)if(t){const E=$.run();(r||f||(m?E.some((N,S)=>hasChanged(N,b[S])):hasChanged(E,b)))&&(g&&g(),callWithAsyncErrorHandling(t,u,3,[E,b===INITIAL_WATCHER_VALUE?void 0:b,y]),b=E)}else $.run()};x.allowRecurse=!!t;let C;o==="sync"?C=x:o==="post"?C=()=>queuePostRenderEffect(x,u&&u.suspense):C=()=>{!u||u.isMounted?queuePreFlushCb(x):x()};const $=new ReactiveEffect(d,C);return $.onTrack=a,$.onTrigger=s,t?n?x():b=$.run():o==="post"?queuePostRenderEffect($.run.bind($),u&&u.suspense):$.run(),()=>{$.stop(),u&&u.scope&&remove(u.scope.effects,$)}}function instanceWatch(e,t,n){const r=this.proxy,o=isString$1(e)?e.includes(".")?createPathGetter(r,e):()=>r[e]:e.bind(r,r);let a;isFunction$2(t)?a=t:(a=t.handler,n=t);const s=currentInstance;setCurrentInstance(this);const l=doWatch(o,a.bind(r),n);return s?setCurrentInstance(s):unsetCurrentInstance(),l}function createPathGetter(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function traverse(e,t){if(!isObject$2(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),isRef(e))traverse(e.value,t);else if(isArray$3(e))for(let n=0;n<e.length;n++)traverse(e[n],t);else if(isSet(e)||isMap(e))e.forEach(n=>{traverse(n,t)});else if(isPlainObject$3(e))for(const n in e)traverse(e[n],t);return e}function useTransitionState(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return onMounted(()=>{e.isMounted=!0}),onBeforeUnmount(()=>{e.isUnmounting=!0}),e}const TransitionHookValidator=[Function,Array],BaseTransitionImpl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:TransitionHookValidator,onEnter:TransitionHookValidator,onAfterEnter:TransitionHookValidator,onEnterCancelled:TransitionHookValidator,onBeforeLeave:TransitionHookValidator,onLeave:TransitionHookValidator,onAfterLeave:TransitionHookValidator,onLeaveCancelled:TransitionHookValidator,onBeforeAppear:TransitionHookValidator,onAppear:TransitionHookValidator,onAfterAppear:TransitionHookValidator,onAppearCancelled:TransitionHookValidator},setup(e,{slots:t}){const n=getCurrentInstance(),r=useTransitionState();let o;return()=>{const a=t.default&&getTransitionRawChildren(t.default(),!0);if(!a||!a.length)return;a.length>1&&warn$4("<transition> can only be used on a single element or component. Use <transition-group> for lists.");const s=toRaw(e),{mode:l}=s;l&&l!=="in-out"&&l!=="out-in"&&l!=="default"&&warn$4(`invalid <transition> mode: ${l}`);const u=a[0];if(r.isLeaving)return emptyPlaceholder(u);const d=getKeepAliveChild(u);if(!d)return emptyPlaceholder(u);const f=resolveTransitionHooks(d,s,r,n);setTransitionHooks(d,f);const m=n.subTree,g=m&&getKeepAliveChild(m);let y=!1;const{getTransitionKey:b}=d.type;if(b){const x=b();o===void 0?o=x:x!==o&&(o=x,y=!0)}if(g&&g.type!==Comment&&(!isSameVNodeType(d,g)||y)){const x=resolveTransitionHooks(g,s,r,n);if(setTransitionHooks(g,x),l==="out-in")return r.isLeaving=!0,x.afterLeave=()=>{r.isLeaving=!1,n.update()},emptyPlaceholder(u);l==="in-out"&&d.type!==Comment&&(x.delayLeave=(C,$,E)=>{const N=getLeavingNodesForType(r,g);N[String(g.key)]=g,C._leaveCb=()=>{$(),C._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=E})}return u}}},BaseTransition=BaseTransitionImpl;function getLeavingNodesForType(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function resolveTransitionHooks(e,t,n,r){const{appear:o,mode:a,persisted:s=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:m,onLeave:g,onAfterLeave:y,onLeaveCancelled:b,onBeforeAppear:x,onAppear:C,onAfterAppear:$,onAppearCancelled:E}=t,N=String(e.key),S=getLeavingNodesForType(n,e),k=(_,P)=>{_&&callWithAsyncErrorHandling(_,r,9,P)},A={mode:a,persisted:s,beforeEnter(_){let P=l;if(!n.isMounted)if(o)P=x||l;else return;_._leaveCb&&_._leaveCb(!0);const I=S[N];I&&isSameVNodeType(e,I)&&I.el._leaveCb&&I.el._leaveCb(),k(P,[_])},enter(_){let P=u,I=d,O=f;if(!n.isMounted)if(o)P=C||u,I=$||d,O=E||f;else return;let j=!1;const B=_._enterCb=V=>{j||(j=!0,V?k(O,[_]):k(I,[_]),A.delayedLeave&&A.delayedLeave(),_._enterCb=void 0)};P?(P(_,B),P.length<=1&&B()):B()},leave(_,P){const I=String(e.key);if(_._enterCb&&_._enterCb(!0),n.isUnmounting)return P();k(m,[_]);let O=!1;const j=_._leaveCb=B=>{O||(O=!0,P(),B?k(b,[_]):k(y,[_]),_._leaveCb=void 0,S[I]===e&&delete S[I])};S[I]=e,g?(g(_,j),g.length<=1&&j()):j()},clone(_){return resolveTransitionHooks(_,t,n,r)}};return A}function emptyPlaceholder(e){if(isKeepAlive(e))return e=cloneVNode(e),e.children=null,e}function getKeepAliveChild(e){return isKeepAlive(e)?e.children?e.children[0]:void 0:e}function setTransitionHooks(e,t){e.shapeFlag&6&&e.component?setTransitionHooks(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function getTransitionRawChildren(e,t=!1){let n=[],r=0;for(let o=0;o<e.length;o++){const a=e[o];a.type===Fragment?(a.patchFlag&128&&r++,n=n.concat(getTransitionRawChildren(a.children,t))):(t||a.type!==Comment)&&n.push(a)}if(r>1)for(let o=0;o<n.length;o++)n[o].patchFlag=-2;return n}function defineComponent(e){return isFunction$2(e)?{setup:e,name:e.name}:e}const isAsyncWrapper=e=>!!e.type.__asyncLoader,isKeepAlive=e=>e.type.__isKeepAlive,KeepAliveImpl={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=getCurrentInstance(),r=n.ctx;if(!r.renderer)return t.default;const o=new Map,a=new Set;let s=null;n.__v_cache=o;const l=n.suspense,{renderer:{p:u,m:d,um:f,o:{createElement:m}}}=r,g=m("div");r.activate=(E,N,S,k,A)=>{const _=E.component;d(E,N,S,0,l),u(_.vnode,E,N,S,_,l,k,E.slotScopeIds,A),queuePostRenderEffect(()=>{_.isDeactivated=!1,_.a&&invokeArrayFns(_.a);const P=E.props&&E.props.onVnodeMounted;P&&invokeVNodeHook(P,_.parent,E)},l),devtoolsComponentAdded(_)},r.deactivate=E=>{const N=E.component;d(E,g,null,1,l),queuePostRenderEffect(()=>{N.da&&invokeArrayFns(N.da);const S=E.props&&E.props.onVnodeUnmounted;S&&invokeVNodeHook(S,N.parent,E),N.isDeactivated=!0},l),devtoolsComponentAdded(N)};function y(E){resetShapeFlag(E),f(E,n,l,!0)}function b(E){o.forEach((N,S)=>{const k=getComponentName(N.type);k&&(!E||!E(k))&&x(S)})}function x(E){const N=o.get(E);!s||N.type!==s.type?y(N):s&&resetShapeFlag(s),o.delete(E),a.delete(E)}watch(()=>[e.include,e.exclude],([E,N])=>{E&&b(S=>matches(E,S)),N&&b(S=>!matches(N,S))},{flush:"post",deep:!0});let C=null;const $=()=>{C!=null&&o.set(C,getInnerChild(n.subTree))};return onMounted($),onUpdated($),onBeforeUnmount(()=>{o.forEach(E=>{const{subTree:N,suspense:S}=n,k=getInnerChild(N);if(E.type===k.type){resetShapeFlag(k);const A=k.component.da;A&&queuePostRenderEffect(A,S);return}y(E)})}),()=>{if(C=null,!t.default)return null;const E=t.default(),N=E[0];if(E.length>1)return warn$4("KeepAlive should contain exactly one component child."),s=null,E;if(!isVNode(N)||!(N.shapeFlag&4)&&!(N.shapeFlag&128))return s=null,N;let S=getInnerChild(N);const k=S.type,A=getComponentName(isAsyncWrapper(S)?S.type.__asyncResolved||{}:k),{include:_,exclude:P,max:I}=e;if(_&&(!A||!matches(_,A))||P&&A&&matches(P,A))return s=S,N;const O=S.key==null?k:S.key,j=o.get(O);return S.el&&(S=cloneVNode(S),N.shapeFlag&128&&(N.ssContent=S)),C=O,j?(S.el=j.el,S.component=j.component,S.transition&&setTransitionHooks(S,S.transition),S.shapeFlag|=512,a.delete(O),a.add(O)):(a.add(O),I&&a.size>parseInt(I,10)&&x(a.values().next().value)),S.shapeFlag|=256,s=S,N}}},KeepAlive=KeepAliveImpl;function matches(e,t){return isArray$3(e)?e.some(n=>matches(n,t)):isString$1(e)?e.split(",").includes(t):e.test?e.test(t):!1}function onActivated(e,t){registerKeepAliveHook(e,"a",t)}function onDeactivated(e,t){registerKeepAliveHook(e,"da",t)}function registerKeepAliveHook(e,t,n=currentInstance){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(injectHook(t,r,n),n){let o=n.parent;for(;o&&o.parent;)isKeepAlive(o.parent.vnode)&&injectToKeepAliveRoot(r,t,n,o),o=o.parent}}function injectToKeepAliveRoot(e,t,n,r){const o=injectHook(t,e,r,!0);onUnmounted(()=>{remove(r[t],o)},n)}function resetShapeFlag(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function getInnerChild(e){return e.shapeFlag&128?e.ssContent:e}function injectHook(e,t,n=currentInstance,r=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;pauseTracking(),setCurrentInstance(n);const l=callWithAsyncErrorHandling(t,n,e,s);return unsetCurrentInstance(),resetTracking(),l});return r?o.unshift(a):o.push(a),a}else{const o=toHandlerKey(ErrorTypeStrings[e].replace(/ hook$/,""));warn$4(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const createHook=e=>(t,n=currentInstance)=>(!isInSSRComponentSetup||e==="sp")&&injectHook(e,t,n),onBeforeMount=createHook("bm"),onMounted=createHook("m"),onBeforeUpdate=createHook("bu"),onUpdated=createHook("u"),onBeforeUnmount=createHook("bum"),onUnmounted=createHook("um"),onServerPrefetch=createHook("sp"),onRenderTriggered=createHook("rtg"),onRenderTracked=createHook("rtc");function onErrorCaptured(e,t=currentInstance){injectHook("ec",e,t)}function createDuplicateChecker(){const e=Object.create(null);return(t,n)=>{e[n]?warn$4(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let shouldCacheAccess=!0;function applyOptions(e){const t=resolveMergedOptions(e),n=e.proxy,r=e.ctx;shouldCacheAccess=!1,t.beforeCreate&&callHook$1(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:s,watch:l,provide:u,inject:d,created:f,beforeMount:m,mounted:g,beforeUpdate:y,updated:b,activated:x,deactivated:C,beforeDestroy:$,beforeUnmount:E,destroyed:N,unmounted:S,render:k,renderTracked:A,renderTriggered:_,errorCaptured:P,serverPrefetch:I,expose:O,inheritAttrs:j,components:B,directives:V,filters:L}=t,G=createDuplicateChecker();{const[J]=e.propsOptions;if(J)for(const ie in J)G("Props",ie)}if(d&&resolveInjections(d,r,G,e.appContext.config.unwrapInjectedRef),s)for(const J in s){const ie=s[J];isFunction$2(ie)?(Object.defineProperty(r,J,{value:ie.bind(n),configurable:!0,enumerable:!0,writable:!0}),G("Methods",J)):warn$4(`Method "${J}" has type "${typeof ie}" in the component definition. Did you reference the function correctly?`)}if(o){isFunction$2(o)||warn$4("The data option must be a function. Plain object usage is no longer supported.");const J=o.call(n,n);if(isPromise(J)&&warn$4("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!isObject$2(J))warn$4("data() should return an object.");else{e.data=reactive(J);for(const ie in J)G("Data",ie),ie[0]!=="$"&&ie[0]!=="_"&&Object.defineProperty(r,ie,{configurable:!0,enumerable:!0,get:()=>J[ie],set:NOOP})}}if(shouldCacheAccess=!0,a)for(const J in a){const ie=a[J],ye=isFunction$2(ie)?ie.bind(n,n):isFunction$2(ie.get)?ie.get.bind(n,n):NOOP;ye===NOOP&&warn$4(`Computed property "${J}" has no getter.`);const be=!isFunction$2(ie)&&isFunction$2(ie.set)?ie.set.bind(n):()=>{warn$4(`Write operation failed: computed property "${J}" is readonly.`)},Te=computed({get:ye,set:be});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Te.value,set:Ae=>Te.value=Ae}),G("Computed",J)}if(l)for(const J in l)createWatcher(l[J],r,n,J);if(u){const J=isFunction$2(u)?u.call(n):u;Reflect.ownKeys(J).forEach(ie=>{provide(ie,J[ie])})}f&&callHook$1(f,e,"c");function z(J,ie){isArray$3(ie)?ie.forEach(ye=>J(ye.bind(n))):ie&&J(ie.bind(n))}if(z(onBeforeMount,m),z(onMounted,g),z(onBeforeUpdate,y),z(onUpdated,b),z(onActivated,x),z(onDeactivated,C),z(onErrorCaptured,P),z(onRenderTracked,A),z(onRenderTriggered,_),z(onBeforeUnmount,E),z(onUnmounted,S),z(onServerPrefetch,I),isArray$3(O))if(O.length){const J=e.exposed||(e.exposed={});O.forEach(ie=>{Object.defineProperty(J,ie,{get:()=>n[ie],set:ye=>n[ie]=ye})})}else e.exposed||(e.exposed={});k&&e.render===NOOP&&(e.render=k),j!=null&&(e.inheritAttrs=j),B&&(e.components=B),V&&(e.directives=V)}function resolveInjections(e,t,n=NOOP,r=!1){isArray$3(e)&&(e=normalizeInject(e));for(const o in e){const a=e[o];let s;isObject$2(a)?"default"in a?s=inject(a.from||o,a.default,!0):s=inject(a.from||o):s=inject(a),isRef(s)?r?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:l=>s.value=l}):(warn$4(`injected property "${o}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[o]=s):t[o]=s,n("Inject",o)}}function callHook$1(e,t,n){callWithAsyncErrorHandling(isArray$3(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function createWatcher(e,t,n,r){const o=r.includes(".")?createPathGetter(n,r):()=>n[r];if(isString$1(e)){const a=t[e];isFunction$2(a)?watch(o,a):warn$4(`Invalid watch handler specified by key "${e}"`,a)}else if(isFunction$2(e))watch(o,e.bind(n));else if(isObject$2(e))if(isArray$3(e))e.forEach(a=>createWatcher(a,t,n,r));else{const a=isFunction$2(e.handler)?e.handler.bind(n):t[e.handler];isFunction$2(a)?watch(o,a,e):warn$4(`Invalid watch handler specified by key "${e.handler}"`,a)}else warn$4(`Invalid watch option: "${r}"`,e)}function resolveMergedOptions(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:a,config:{optionMergeStrategies:s}}=e.appContext,l=a.get(t);let u;return l?u=l:!o.length&&!n&&!r?u=t:(u={},o.length&&o.forEach(d=>mergeOptions$1(u,d,s,!0)),mergeOptions$1(u,t,s)),a.set(t,u),u}function mergeOptions$1(e,t,n,r=!1){const{mixins:o,extends:a}=t;a&&mergeOptions$1(e,a,n,!0),o&&o.forEach(s=>mergeOptions$1(e,s,n,!0));for(const s in t)if(r&&s==="expose")warn$4('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const l=internalOptionMergeStrats[s]||n&&n[s];e[s]=l?l(e[s],t[s]):t[s]}return e}const internalOptionMergeStrats={data:mergeDataFn,props:mergeObjectOptions,emits:mergeObjectOptions,methods:mergeObjectOptions,computed:mergeObjectOptions,beforeCreate:mergeAsArray,created:mergeAsArray,beforeMount:mergeAsArray,mounted:mergeAsArray,beforeUpdate:mergeAsArray,updated:mergeAsArray,beforeDestroy:mergeAsArray,beforeUnmount:mergeAsArray,destroyed:mergeAsArray,unmounted:mergeAsArray,activated:mergeAsArray,deactivated:mergeAsArray,errorCaptured:mergeAsArray,serverPrefetch:mergeAsArray,components:mergeObjectOptions,directives:mergeObjectOptions,watch:mergeWatchOptions,provide:mergeDataFn,inject:mergeInject};function mergeDataFn(e,t){return t?e?function(){return extend$1(isFunction$2(e)?e.call(this,this):e,isFunction$2(t)?t.call(this,this):t)}:t:e}function mergeInject(e,t){return mergeObjectOptions(normalizeInject(e),normalizeInject(t))}function normalizeInject(e){if(isArray$3(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function mergeAsArray(e,t){return e?[...new Set([].concat(e,t))]:t}function mergeObjectOptions(e,t){return e?extend$1(extend$1(Object.create(null),e),t):t}function mergeWatchOptions(e,t){if(!e)return t;if(!t)return e;const n=extend$1(Object.create(null),e);for(const r in t)n[r]=mergeAsArray(e[r],t[r]);return n}function initProps(e,t,n,r=!1){const o={},a={};def(a,InternalObjectKey,1),e.propsDefaults=Object.create(null),setFullProps(e,t,o,a);for(const s in e.propsOptions[0])s in o||(o[s]=void 0);validateProps(t||{},o,e),n?e.props=r?o:shallowReactive(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function updateProps(e,t,n,r){const{props:o,attrs:a,vnode:{patchFlag:s}}=e,l=toRaw(o),[u]=e.propsOptions;let d=!1;if(!(e.type.__hmrId||e.parent&&e.parent.type.__hmrId)&&(r||s>0)&&!(s&16)){if(s&8){const f=e.vnode.dynamicProps;for(let m=0;m<f.length;m++){let g=f[m];const y=t[g];if(u)if(hasOwn(a,g))y!==a[g]&&(a[g]=y,d=!0);else{const b=camelize(g);o[b]=resolvePropValue(u,l,b,y,e,!1)}else y!==a[g]&&(a[g]=y,d=!0)}}}else{setFullProps(e,t,o,a)&&(d=!0);let f;for(const m in l)(!t||!hasOwn(t,m)&&((f=hyphenate(m))===m||!hasOwn(t,f)))&&(u?n&&(n[m]!==void 0||n[f]!==void 0)&&(o[m]=resolvePropValue(u,l,m,void 0,e,!0)):delete o[m]);if(a!==l)for(const m in a)(!t||!hasOwn(t,m)&&!0)&&(delete a[m],d=!0)}d&&trigger$1(e,"set","$attrs"),validateProps(t||{},o,e)}function setFullProps(e,t,n,r){const[o,a]=e.propsOptions;let s=!1,l;if(t)for(let u in t){if(isReservedProp(u))continue;const d=t[u];let f;o&&hasOwn(o,f=camelize(u))?!a||!a.includes(f)?n[f]=d:(l||(l={}))[f]=d:isEmitListener(e.emitsOptions,u)||(!(u in r)||d!==r[u])&&(r[u]=d,s=!0)}if(a){const u=toRaw(n),d=l||EMPTY_OBJ;for(let f=0;f<a.length;f++){const m=a[f];n[m]=resolvePropValue(o,u,m,d[m],e,!hasOwn(d,m))}}return s}function resolvePropValue(e,t,n,r,o,a){const s=e[n];if(s!=null){const l=hasOwn(s,"default");if(l&&r===void 0){const u=s.default;if(s.type!==Function&&isFunction$2(u)){const{propsDefaults:d}=o;n in d?r=d[n]:(setCurrentInstance(o),r=d[n]=u.call(null,t),unsetCurrentInstance())}else r=u}s[0]&&(a&&!l?r=!1:s[1]&&(r===""||r===hyphenate(n))&&(r=!0))}return r}function normalizePropsOptions(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const a=e.props,s={},l=[];let u=!1;if(!isFunction$2(e)){const f=m=>{u=!0;const[g,y]=normalizePropsOptions(m,t,!0);extend$1(s,g),y&&l.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!a&&!u)return r.set(e,EMPTY_ARR),EMPTY_ARR;if(isArray$3(a))for(let f=0;f<a.length;f++){isString$1(a[f])||warn$4("props must be strings when using array syntax.",a[f]);const m=camelize(a[f]);validatePropName(m)&&(s[m]=EMPTY_OBJ)}else if(a){isObject$2(a)||warn$4("invalid props options",a);for(const f in a){const m=camelize(f);if(validatePropName(m)){const g=a[f],y=s[m]=isArray$3(g)||isFunction$2(g)?{type:g}:g;if(y){const b=getTypeIndex(Boolean,y.type),x=getTypeIndex(String,y.type);y[0]=b>-1,y[1]=x<0||b<x,(b>-1||hasOwn(y,"default"))&&l.push(m)}}}}const d=[s,l];return r.set(e,d),d}function validatePropName(e){return e[0]!=="$"?!0:(warn$4(`Invalid prop name: "${e}" is a reserved property.`),!1)}function getType(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function isSameType(e,t){return getType(e)===getType(t)}function getTypeIndex(e,t){return isArray$3(t)?t.findIndex(n=>isSameType(n,e)):isFunction$2(t)&&isSameType(t,e)?0:-1}function validateProps(e,t,n){const r=toRaw(t),o=n.propsOptions[0];for(const a in o){let s=o[a];s!=null&&validateProp(a,r[a],s,!hasOwn(e,a)&&!hasOwn(e,hyphenate(a)))}}function validateProp(e,t,n,r){const{type:o,required:a,validator:s}=n;if(a&&r){warn$4('Missing required prop: "'+e+'"');return}if(!(t==null&&!n.required)){if(o!=null&&o!==!0){let l=!1;const u=isArray$3(o)?o:[o],d=[];for(let f=0;f<u.length&&!l;f++){const{valid:m,expectedType:g}=assertType(t,u[f]);d.push(g||""),l=m}if(!l){warn$4(getInvalidTypeMessage(e,t,d));return}}s&&!s(t)&&warn$4('Invalid prop: custom validator check failed for prop "'+e+'".')}}const isSimpleType=makeMap("String,Number,Boolean,Function,Symbol,BigInt");function assertType(e,t){let n;const r=getType(t);if(isSimpleType(r)){const o=typeof e;n=o===r.toLowerCase(),!n&&o==="object"&&(n=e instanceof t)}else r==="Object"?n=isObject$2(e):r==="Array"?n=isArray$3(e):r==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:r}}function getInvalidTypeMessage(e,t,n){let r=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(capitalize).join(" | ")}`;const o=n[0],a=toRawType(t),s=styleValue(t,o),l=styleValue(t,a);return n.length===1&&isExplicable(o)&&!isBoolean(o,a)&&(r+=` with value ${s}`),r+=`, got ${a} `,isExplicable(a)&&(r+=`with value ${l}.`),r}function styleValue(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function isExplicable(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function isBoolean(...e){return e.some(t=>t.toLowerCase()==="boolean")}const isInternalKey=e=>e[0]==="_"||e==="$stable",normalizeSlotValue=e=>isArray$3(e)?e.map(normalizeVNode):[normalizeVNode(e)],normalizeSlot$1=(e,t,n)=>{const r=withCtx((...o)=>(currentInstance&&warn$4(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),normalizeSlotValue(t(...o))),n);return r._c=!1,r},normalizeObjectSlots=(e,t,n)=>{const r=e._ctx;for(const o in e){if(isInternalKey(o))continue;const a=e[o];if(isFunction$2(a))t[o]=normalizeSlot$1(o,a,r);else if(a!=null){warn$4(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);const s=normalizeSlotValue(a);t[o]=()=>s}}},normalizeVNodeSlots=(e,t)=>{isKeepAlive(e.vnode)||warn$4("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=normalizeSlotValue(t);e.slots.default=()=>n},initSlots=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=toRaw(t),def(t,"_",n)):normalizeObjectSlots(t,e.slots={})}else e.slots={},t&&normalizeVNodeSlots(e,t);def(e.slots,InternalObjectKey,1)},updateSlots=(e,t,n)=>{const{vnode:r,slots:o}=e;let a=!0,s=EMPTY_OBJ;if(r.shapeFlag&32){const l=t._;l?isHmrUpdating?extend$1(o,t):n&&l===1?a=!1:(extend$1(o,t),!n&&l===1&&delete o._):(a=!t.$stable,normalizeObjectSlots(t,o)),s=t}else t&&(normalizeVNodeSlots(e,t),s={default:1});if(a)for(const l in o)!isInternalKey(l)&&!(l in s)&&delete o[l]};function validateDirectiveName(e){isBuiltInDirective(e)&&warn$4("Do not use built-in directive ids as custom directive id: "+e)}function withDirectives(e,t){const n=currentRenderingInstance;if(n===null)return warn$4("withDirectives can only be used inside render functions."),e;const r=n.proxy,o=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[s,l,u,d=EMPTY_OBJ]=t[a];isFunction$2(s)&&(s={mounted:s,updated:s}),s.deep&&traverse(l),o.push({dir:s,instance:r,value:l,oldValue:void 0,arg:u,modifiers:d})}return e}function invokeDirectiveHook(e,t,n,r){const o=e.dirs,a=t&&t.dirs;for(let s=0;s<o.length;s++){const l=o[s];a&&(l.oldValue=a[s].value);let u=l.dir[r];u&&(pauseTracking(),callWithAsyncErrorHandling(u,n,8,[e.el,l,e,t]),resetTracking())}}function createAppContext(){return{app:null,config:{isNativeTag:NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uid=0;function createAppAPI(e,t){return function(r,o=null){o!=null&&!isObject$2(o)&&(warn$4("root props passed to app.mount() must be an object."),o=null);const a=createAppContext(),s=new Set;let l=!1;const u=a.app={_uid:uid++,_component:r,_props:o,_container:null,_context:a,_instance:null,version:version$1,get config(){return a.config},set config(d){warn$4("app.config cannot be replaced. Modify individual options instead.")},use(d,...f){return s.has(d)?warn$4("Plugin has already been applied to target app."):d&&isFunction$2(d.install)?(s.add(d),d.install(u,...f)):isFunction$2(d)?(s.add(d),d(u,...f)):warn$4('A plugin must either be a function or an object with an "install" function.'),u},mixin(d){return a.mixins.includes(d)?warn$4("Mixin has already been applied to target app"+(d.name?`: ${d.name}`:"")):a.mixins.push(d),u},component(d,f){return validateComponentName(d,a.config),f?(a.components[d]&&warn$4(`Component "${d}" has already been registered in target app.`),a.components[d]=f,u):a.components[d]},directive(d,f){return validateDirectiveName(d),f?(a.directives[d]&&warn$4(`Directive "${d}" has already been registered in target app.`),a.directives[d]=f,u):a.directives[d]},mount(d,f,m){if(l)warn$4("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{const g=createVNode(r,o);return g.appContext=a,a.reload=()=>{e(cloneVNode(g),d,m)},f&&t?t(g,d):e(g,d,m),l=!0,u._container=d,d.__vue_app__=u,u._instance=g.component,devtoolsInitApp(u,version$1),getExposeProxy(g.component)||g.component.proxy}},unmount(){l?(e(null,u._container),u._instance=null,devtoolsUnmountApp(u),delete u._container.__vue_app__):warn$4("Cannot unmount an app that is not mounted.")},provide(d,f){return d in a.provides&&warn$4(`App already provides property with key "${String(d)}". It will be overwritten with the new value.`),a.provides[d]=f,u}};return u}}function setRef(e,t,n,r,o=!1){if(isArray$3(e)){e.forEach((g,y)=>setRef(g,t&&(isArray$3(t)?t[y]:t),n,r,o));return}if(isAsyncWrapper(r)&&!o)return;const a=r.shapeFlag&4?getExposeProxy(r.component)||r.component.proxy:r.el,s=o?null:a,{i:l,r:u}=e;if(!l){warn$4("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const d=t&&t.r,f=l.refs===EMPTY_OBJ?l.refs={}:l.refs,m=l.setupState;if(d!=null&&d!==u&&(isString$1(d)?(f[d]=null,hasOwn(m,d)&&(m[d]=null)):isRef(d)&&(d.value=null)),isFunction$2(u))callWithErrorHandling(u,l,12,[s,f]);else{const g=isString$1(u),y=isRef(u);if(g||y){const b=()=>{if(e.f){const x=g?f[u]:u.value;o?isArray$3(x)&&remove(x,a):isArray$3(x)?x.includes(a)||x.push(a):g?f[u]=[a]:(u.value=[a],e.k&&(f[e.k]=u.value))}else g?(f[u]=s,hasOwn(m,u)&&(m[u]=s)):isRef(u)?(u.value=s,e.k&&(f[e.k]=s)):warn$4("Invalid template ref type:",u,`(${typeof u})`)};s?(b.id=-1,queuePostRenderEffect(b,n)):b()}else warn$4("Invalid template ref type:",u,`(${typeof u})`)}}let supported$1,perf$1;function startMeasure(e,t){e.appContext.config.performance&&isSupported()&&perf$1.mark(`vue-${t}-${e.uid}`),devtoolsPerfStart(e,t,supported$1?perf$1.now():Date.now())}function endMeasure(e,t){if(e.appContext.config.performance&&isSupported()){const n=`vue-${t}-${e.uid}`,r=n+":end";perf$1.mark(r),perf$1.measure(`<${formatComponentName(e,e.type)}> ${t}`,n,r),perf$1.clearMarks(n),perf$1.clearMarks(r)}devtoolsPerfEnd(e,t,supported$1?perf$1.now():Date.now())}function isSupported(){return supported$1!==void 0||(typeof window!="undefined"&&window.performance?(supported$1=!0,perf$1=window.performance):supported$1=!1),supported$1}function initFeatureFlags(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const queuePostRenderEffect=queueEffectWithSuspense;function createRenderer(e){return baseCreateRenderer(e)}function baseCreateRenderer(e,t){initFeatureFlags();const n=getGlobalThis();n.__VUE__=!0,setDevtoolsHook(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:o,patchProp:a,createElement:s,createText:l,createComment:u,setText:d,setElementText:f,parentNode:m,nextSibling:g,setScopeId:y=NOOP,cloneNode:b,insertStaticContent:x}=e,C=(R,M,F,q=null,K=null,Z=null,Q=!1,U=null,ee=isHmrUpdating?!1:!!M.dynamicChildren)=>{if(R===M)return;R&&!isSameVNodeType(R,M)&&(q=se(R),Me(R,K,Z,!0),R=null),M.patchFlag===-2&&(ee=!1,M.dynamicChildren=null);const{type:X,ref:ue,shapeFlag:le}=M;switch(X){case Text:$(R,M,F,q);break;case Comment:E(R,M,F,q);break;case Static:R==null?N(M,F,q,Q):S(R,M,F,Q);break;case Fragment:L(R,M,F,q,K,Z,Q,U,ee);break;default:le&1?_(R,M,F,q,K,Z,Q,U,ee):le&6?G(R,M,F,q,K,Z,Q,U,ee):le&64||le&128?X.process(R,M,F,q,K,Z,Q,U,ee,me):warn$4("Invalid VNode type:",X,`(${typeof X})`)}ue!=null&&K&&setRef(ue,R&&R.ref,Z,M||R,!M)},$=(R,M,F,q)=>{if(R==null)r(M.el=l(M.children),F,q);else{const K=M.el=R.el;M.children!==R.children&&d(K,M.children)}},E=(R,M,F,q)=>{R==null?r(M.el=u(M.children||""),F,q):M.el=R.el},N=(R,M,F,q)=>{[R.el,R.anchor]=x(R.children,M,F,q,R.el,R.anchor)},S=(R,M,F,q)=>{if(M.children!==R.children){const K=g(R.anchor);A(R),[M.el,M.anchor]=x(M.children,F,K,q)}else M.el=R.el,M.anchor=R.anchor},k=({el:R,anchor:M},F,q)=>{let K;for(;R&&R!==M;)K=g(R),r(R,F,q),R=K;r(M,F,q)},A=({el:R,anchor:M})=>{let F;for(;R&&R!==M;)F=g(R),o(R),R=F;o(M)},_=(R,M,F,q,K,Z,Q,U,ee)=>{Q=Q||M.type==="svg",R==null?P(M,F,q,K,Z,Q,U,ee):j(R,M,K,Z,Q,U,ee)},P=(R,M,F,q,K,Z,Q,U)=>{let ee,X;const{type:ue,props:le,shapeFlag:de,transition:ge,patchFlag:xe,dirs:we}=R;{if(ee=R.el=s(R.type,Z,le&&le.is,le),de&8?f(ee,R.children):de&16&&O(R.children,ee,null,q,K,Z&&ue!=="foreignObject",Q,U),we&&invokeDirectiveHook(R,null,q,"created"),le){for(const W in le)W!=="value"&&!isReservedProp(W)&&a(ee,W,null,le[W],Z,R.children,q,K,ne);"value"in le&&a(ee,"value",null,le.value),(X=le.onVnodeBeforeMount)&&invokeVNodeHook(X,q,R)}I(ee,R,R.scopeId,Q,q)}Object.defineProperty(ee,"__vnode",{value:R,enumerable:!1}),Object.defineProperty(ee,"__vueParentComponent",{value:q,enumerable:!1}),we&&invokeDirectiveHook(R,null,q,"beforeMount");const Ee=(!K||K&&!K.pendingBranch)&&ge&&!ge.persisted;Ee&&ge.beforeEnter(ee),r(ee,M,F),((X=le&&le.onVnodeMounted)||Ee||we)&&queuePostRenderEffect(()=>{X&&invokeVNodeHook(X,q,R),Ee&&ge.enter(ee),we&&invokeDirectiveHook(R,null,q,"mounted")},K)},I=(R,M,F,q,K)=>{if(F&&y(R,F),q)for(let Z=0;Z<q.length;Z++)y(R,q[Z]);if(K){let Z=K.subTree;if(Z.patchFlag>0&&Z.patchFlag&2048&&(Z=filterSingleRoot(Z.children)||Z),M===Z){const Q=K.vnode;I(R,Q,Q.scopeId,Q.slotScopeIds,K.parent)}}},O=(R,M,F,q,K,Z,Q,U,ee=0)=>{for(let X=ee;X<R.length;X++){const ue=R[X]=U?cloneIfMounted(R[X]):normalizeVNode(R[X]);C(null,ue,M,F,q,K,Z,Q,U)}},j=(R,M,F,q,K,Z,Q)=>{const U=M.el=R.el;let{patchFlag:ee,dynamicChildren:X,dirs:ue}=M;ee|=R.patchFlag&16;const le=R.props||EMPTY_OBJ,de=M.props||EMPTY_OBJ;let ge;F&&toggleRecurse(F,!1),(ge=de.onVnodeBeforeUpdate)&&invokeVNodeHook(ge,F,M,R),ue&&invokeDirectiveHook(M,R,F,"beforeUpdate"),F&&toggleRecurse(F,!0),isHmrUpdating&&(ee=0,Q=!1,X=null);const xe=K&&M.type!=="foreignObject";if(X?(B(R.dynamicChildren,X,U,F,q,xe,Z),F&&F.type.__hmrId&&traverseStaticChildren(R,M)):Q||be(R,M,U,null,F,q,xe,Z,!1),ee>0){if(ee&16)V(U,M,le,de,F,q,K);else if(ee&2&&le.class!==de.class&&a(U,"class",null,de.class,K),ee&4&&a(U,"style",le.style,de.style,K),ee&8){const we=M.dynamicProps;for(let Ee=0;Ee<we.length;Ee++){const W=we[Ee],ae=le[W],he=de[W];(he!==ae||W==="value")&&a(U,W,ae,he,K,R.children,F,q,ne)}}ee&1&&R.children!==M.children&&f(U,M.children)}else!Q&&X==null&&V(U,M,le,de,F,q,K);((ge=de.onVnodeUpdated)||ue)&&queuePostRenderEffect(()=>{ge&&invokeVNodeHook(ge,F,M,R),ue&&invokeDirectiveHook(M,R,F,"updated")},q)},B=(R,M,F,q,K,Z,Q)=>{for(let U=0;U<M.length;U++){const ee=R[U],X=M[U],ue=ee.el&&(ee.type===Fragment||!isSameVNodeType(ee,X)||ee.shapeFlag&70)?m(ee.el):F;C(ee,X,ue,null,q,K,Z,Q,!0)}},V=(R,M,F,q,K,Z,Q)=>{if(F!==q){for(const U in q){if(isReservedProp(U))continue;const ee=q[U],X=F[U];ee!==X&&U!=="value"&&a(R,U,X,ee,Q,M.children,K,Z,ne)}if(F!==EMPTY_OBJ)for(const U in F)!isReservedProp(U)&&!(U in q)&&a(R,U,F[U],null,Q,M.children,K,Z,ne);"value"in q&&a(R,"value",F.value,q.value)}},L=(R,M,F,q,K,Z,Q,U,ee)=>{const X=M.el=R?R.el:l(""),ue=M.anchor=R?R.anchor:l("");let{patchFlag:le,dynamicChildren:de,slotScopeIds:ge}=M;isHmrUpdating&&(le=0,ee=!1,de=null),ge&&(U=U?U.concat(ge):ge),R==null?(r(X,F,q),r(ue,F,q),O(M.children,F,ue,K,Z,Q,U,ee)):le>0&&le&64&&de&&R.dynamicChildren?(B(R.dynamicChildren,de,F,K,Z,Q,U),K&&K.type.__hmrId?traverseStaticChildren(R,M):(M.key!=null||K&&M===K.subTree)&&traverseStaticChildren(R,M,!0)):be(R,M,F,ue,K,Z,Q,U,ee)},G=(R,M,F,q,K,Z,Q,U,ee)=>{M.slotScopeIds=U,R==null?M.shapeFlag&512?K.ctx.activate(M,F,q,Q,ee):z(M,F,q,K,Z,Q,ee):J(R,M,ee)},z=(R,M,F,q,K,Z,Q)=>{const U=R.component=createComponentInstance(R,q,K);if(U.type.__hmrId&&registerHMR(U),pushWarningContext(R),startMeasure(U,"mount"),isKeepAlive(R)&&(U.ctx.renderer=me),startMeasure(U,"init"),setupComponent(U),endMeasure(U,"init"),U.asyncDep){if(K&&K.registerDep(U,ie),!R.el){const ee=U.subTree=createVNode(Comment);E(null,ee,M,F)}return}ie(U,R,M,F,K,Z,Q),popWarningContext(),endMeasure(U,"mount")},J=(R,M,F)=>{const q=M.component=R.component;if(shouldUpdateComponent(R,M,F))if(q.asyncDep&&!q.asyncResolved){pushWarningContext(M),ye(q,M,F),popWarningContext();return}else q.next=M,invalidateJob(q.update),q.update();else M.component=R.component,M.el=R.el,q.vnode=M},ie=(R,M,F,q,K,Z,Q)=>{const U=()=>{if(R.isMounted){let{next:ue,bu:le,u:de,parent:ge,vnode:xe}=R,we=ue,Ee;pushWarningContext(ue||R.vnode),toggleRecurse(R,!1),ue?(ue.el=xe.el,ye(R,ue,Q)):ue=xe,le&&invokeArrayFns(le),(Ee=ue.props&&ue.props.onVnodeBeforeUpdate)&&invokeVNodeHook(Ee,ge,ue,xe),toggleRecurse(R,!0),startMeasure(R,"render");const W=renderComponentRoot(R);endMeasure(R,"render");const ae=R.subTree;R.subTree=W,startMeasure(R,"patch"),C(ae,W,m(ae.el),se(ae),R,K,Z),endMeasure(R,"patch"),ue.el=W.el,we===null&&updateHOCHostEl(R,W.el),de&&queuePostRenderEffect(de,K),(Ee=ue.props&&ue.props.onVnodeUpdated)&&queuePostRenderEffect(()=>invokeVNodeHook(Ee,ge,ue,xe),K),devtoolsComponentUpdated(R),popWarningContext()}else{let ue;const{el:le,props:de}=M,{bm:ge,m:xe,parent:we}=R,Ee=isAsyncWrapper(M);if(toggleRecurse(R,!1),ge&&invokeArrayFns(ge),!Ee&&(ue=de&&de.onVnodeBeforeMount)&&invokeVNodeHook(ue,we,M),toggleRecurse(R,!0),le&&Se){const W=()=>{startMeasure(R,"render"),R.subTree=renderComponentRoot(R),endMeasure(R,"render"),startMeasure(R,"hydrate"),Se(le,R.subTree,R,K,null),endMeasure(R,"hydrate")};Ee?M.type.__asyncLoader().then(()=>!R.isUnmounted&&W()):W()}else{startMeasure(R,"render");const W=R.subTree=renderComponentRoot(R);endMeasure(R,"render"),startMeasure(R,"patch"),C(null,W,F,q,R,K,Z),endMeasure(R,"patch"),M.el=W.el}if(xe&&queuePostRenderEffect(xe,K),!Ee&&(ue=de&&de.onVnodeMounted)){const W=M;queuePostRenderEffect(()=>invokeVNodeHook(ue,we,W),K)}M.shapeFlag&256&&R.a&&queuePostRenderEffect(R.a,K),R.isMounted=!0,devtoolsComponentAdded(R),M=F=q=null}},ee=R.effect=new ReactiveEffect(U,()=>queueJob(R.update),R.scope),X=R.update=ee.run.bind(ee);X.id=R.uid,toggleRecurse(R,!0),ee.onTrack=R.rtc?ue=>invokeArrayFns(R.rtc,ue):void 0,ee.onTrigger=R.rtg?ue=>invokeArrayFns(R.rtg,ue):void 0,X.ownerInstance=R,X()},ye=(R,M,F)=>{M.component=R;const q=R.vnode.props;R.vnode=M,R.next=null,updateProps(R,M.props,q,F),updateSlots(R,M.children,F),pauseTracking(),flushPreFlushCbs(void 0,R.update),resetTracking()},be=(R,M,F,q,K,Z,Q,U,ee=!1)=>{const X=R&&R.children,ue=R?R.shapeFlag:0,le=M.children,{patchFlag:de,shapeFlag:ge}=M;if(de>0){if(de&128){Ae(X,le,F,q,K,Z,Q,U,ee);return}else if(de&256){Te(X,le,F,q,K,Z,Q,U,ee);return}}ge&8?(ue&16&&ne(X,K,Z),le!==X&&f(F,le)):ue&16?ge&16?Ae(X,le,F,q,K,Z,Q,U,ee):ne(X,K,Z,!0):(ue&8&&f(F,""),ge&16&&O(le,F,q,K,Z,Q,U,ee))},Te=(R,M,F,q,K,Z,Q,U,ee)=>{R=R||EMPTY_ARR,M=M||EMPTY_ARR;const X=R.length,ue=M.length,le=Math.min(X,ue);let de;for(de=0;de<le;de++){const ge=M[de]=ee?cloneIfMounted(M[de]):normalizeVNode(M[de]);C(R[de],ge,F,null,K,Z,Q,U,ee)}X>ue?ne(R,K,Z,!0,!1,le):O(M,F,q,K,Z,Q,U,ee,le)},Ae=(R,M,F,q,K,Z,Q,U,ee)=>{let X=0;const ue=M.length;let le=R.length-1,de=ue-1;for(;X<=le&&X<=de;){const ge=R[X],xe=M[X]=ee?cloneIfMounted(M[X]):normalizeVNode(M[X]);if(isSameVNodeType(ge,xe))C(ge,xe,F,null,K,Z,Q,U,ee);else break;X++}for(;X<=le&&X<=de;){const ge=R[le],xe=M[de]=ee?cloneIfMounted(M[de]):normalizeVNode(M[de]);if(isSameVNodeType(ge,xe))C(ge,xe,F,null,K,Z,Q,U,ee);else break;le--,de--}if(X>le){if(X<=de){const ge=de+1,xe=ge<ue?M[ge].el:q;for(;X<=de;)C(null,M[X]=ee?cloneIfMounted(M[X]):normalizeVNode(M[X]),F,xe,K,Z,Q,U,ee),X++}}else if(X>de)for(;X<=le;)Me(R[X],K,Z,!0),X++;else{const ge=X,xe=X,we=new Map;for(X=xe;X<=de;X++){const ke=M[X]=ee?cloneIfMounted(M[X]):normalizeVNode(M[X]);ke.key!=null&&(we.has(ke.key)&&warn$4("Duplicate keys found during update:",JSON.stringify(ke.key),"Make sure keys are unique."),we.set(ke.key,X))}let Ee,W=0;const ae=de-xe+1;let he=!1,Pe=0;const Re=new Array(ae);for(X=0;X<ae;X++)Re[X]=0;for(X=ge;X<=le;X++){const ke=R[X];if(W>=ae){Me(ke,K,Z,!0);continue}let $e;if(ke.key!=null)$e=we.get(ke.key);else for(Ee=xe;Ee<=de;Ee++)if(Re[Ee-xe]===0&&isSameVNodeType(ke,M[Ee])){$e=Ee;break}$e===void 0?Me(ke,K,Z,!0):(Re[$e-xe]=X+1,$e>=Pe?Pe=$e:he=!0,C(ke,M[$e],F,null,K,Z,Q,U,ee),W++)}const Ie=he?getSequence(Re):EMPTY_ARR;for(Ee=Ie.length-1,X=ae-1;X>=0;X--){const ke=xe+X,$e=M[ke],je=ke+1<ue?M[ke+1].el:q;Re[X]===0?C(null,$e,F,je,K,Z,Q,U,ee):he&&(Ee<0||X!==Ie[Ee]?Oe($e,F,je,2):Ee--)}}},Oe=(R,M,F,q,K=null)=>{const{el:Z,type:Q,transition:U,children:ee,shapeFlag:X}=R;if(X&6){Oe(R.component.subTree,M,F,q);return}if(X&128){R.suspense.move(M,F,q);return}if(X&64){Q.move(R,M,F,me);return}if(Q===Fragment){r(Z,M,F);for(let le=0;le<ee.length;le++)Oe(ee[le],M,F,q);r(R.anchor,M,F);return}if(Q===Static){k(R,M,F);return}if(q!==2&&X&1&&U)if(q===0)U.beforeEnter(Z),r(Z,M,F),queuePostRenderEffect(()=>U.enter(Z),K);else{const{leave:le,delayLeave:de,afterLeave:ge}=U,xe=()=>r(Z,M,F),we=()=>{le(Z,()=>{xe(),ge&&ge()})};de?de(Z,xe,we):we()}else r(Z,M,F)},Me=(R,M,F,q=!1,K=!1)=>{const{type:Z,props:Q,ref:U,children:ee,dynamicChildren:X,shapeFlag:ue,patchFlag:le,dirs:de}=R;if(U!=null&&setRef(U,null,F,R,!0),ue&256){M.ctx.deactivate(R);return}const ge=ue&1&&de,xe=!isAsyncWrapper(R);let we;if(xe&&(we=Q&&Q.onVnodeBeforeUnmount)&&invokeVNodeHook(we,M,R),ue&6)Y(R.component,F,q);else{if(ue&128){R.suspense.unmount(F,q);return}ge&&invokeDirectiveHook(R,null,M,"beforeUnmount"),ue&64?R.type.remove(R,M,F,K,me,q):X&&(Z!==Fragment||le>0&&le&64)?ne(X,M,F,!1,!0):(Z===Fragment&&le&384||!K&&ue&16)&&ne(ee,M,F),q&&H(R)}(xe&&(we=Q&&Q.onVnodeUnmounted)||ge)&&queuePostRenderEffect(()=>{we&&invokeVNodeHook(we,M,R),ge&&invokeDirectiveHook(R,null,M,"unmounted")},F)},H=R=>{const{type:M,el:F,anchor:q,transition:K}=R;if(M===Fragment){te(F,q);return}if(M===Static){A(R);return}const Z=()=>{o(F),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(R.shapeFlag&1&&K&&!K.persisted){const{leave:Q,delayLeave:U}=K,ee=()=>Q(F,Z);U?U(R.el,Z,ee):ee()}else Z()},te=(R,M)=>{let F;for(;R!==M;)F=g(R),o(R),R=F;o(M)},Y=(R,M,F)=>{R.type.__hmrId&&unregisterHMR(R);const{bum:q,scope:K,update:Z,subTree:Q,um:U}=R;q&&invokeArrayFns(q),K.stop(),Z&&(Z.active=!1,Me(Q,R,M,F)),U&&queuePostRenderEffect(U,M),queuePostRenderEffect(()=>{R.isUnmounted=!0},M),M&&M.pendingBranch&&!M.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===M.pendingId&&(M.deps--,M.deps===0&&M.resolve()),devtoolsComponentRemoved(R)},ne=(R,M,F,q=!1,K=!1,Z=0)=>{for(let Q=Z;Q<R.length;Q++)Me(R[Q],M,F,q,K)},se=R=>R.shapeFlag&6?se(R.component.subTree):R.shapeFlag&128?R.suspense.next():g(R.anchor||R.el),_e=(R,M,F)=>{R==null?M._vnode&&Me(M._vnode,null,null,!0):C(M._vnode||null,R,M,null,null,null,F),flushPostFlushCbs(),M._vnode=R},me={p:C,um:Me,m:Oe,r:H,mt:z,mc:O,pc:be,pbc:B,n:se,o:e};let ve,Se;return t&&([ve,Se]=t(me)),{render:_e,hydrate:ve,createApp:createAppAPI(_e,ve)}}function toggleRecurse({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function traverseStaticChildren(e,t,n=!1){const r=e.children,o=t.children;if(isArray$3(r)&&isArray$3(o))for(let a=0;a<r.length;a++){const s=r[a];let l=o[a];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[a]=cloneIfMounted(o[a]),l.el=s.el),n||traverseStaticChildren(s,l)),l.type===Comment&&!l.el&&(l.el=s.el)}}function getSequence(e){const t=e.slice(),n=[0];let r,o,a,s,l;const u=e.length;for(r=0;r<u;r++){const d=e[r];if(d!==0){if(o=n[n.length-1],e[o]<d){t[r]=o,n.push(r);continue}for(a=0,s=n.length-1;a<s;)l=a+s>>1,e[n[l]]<d?a=l+1:s=l;d<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,s=n[a-1];a-- >0;)n[a]=s,s=t[s];return n}const isTeleport=e=>e.__isTeleport,isTeleportDisabled=e=>e&&(e.disabled||e.disabled===""),isTargetSVG=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,resolveTarget=(e,t)=>{const n=e&&e.to;if(isString$1(n))if(t){const r=t(n);return r||warn$4(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),r}else return warn$4("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!isTeleportDisabled(e)&&warn$4(`Invalid Teleport target: ${n}`),n},TeleportImpl={__isTeleport:!0,process(e,t,n,r,o,a,s,l,u,d){const{mc:f,pc:m,pbc:g,o:{insert:y,querySelector:b,createText:x,createComment:C}}=d,$=isTeleportDisabled(t.props);let{shapeFlag:E,children:N,dynamicChildren:S}=t;if(isHmrUpdating&&(u=!1,S=null),e==null){const k=t.el=C("teleport start"),A=t.anchor=C("teleport end");y(k,n,r),y(A,n,r);const _=t.target=resolveTarget(t.props,b),P=t.targetAnchor=x("");_?(y(P,_),s=s||isTargetSVG(_)):$||warn$4("Invalid Teleport target on mount:",_,`(${typeof _})`);const I=(O,j)=>{E&16&&f(N,O,j,o,a,s,l,u)};$?I(n,A):_&&I(_,P)}else{t.el=e.el;const k=t.anchor=e.anchor,A=t.target=e.target,_=t.targetAnchor=e.targetAnchor,P=isTeleportDisabled(e.props),I=P?n:A,O=P?k:_;if(s=s||isTargetSVG(A),S?(g(e.dynamicChildren,S,I,o,a,s,l),traverseStaticChildren(e,t,!0)):u||m(e,t,I,O,o,a,s,l,!1),$)P||moveTeleport(t,n,k,d,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const j=t.target=resolveTarget(t.props,b);j?moveTeleport(t,j,null,d,0):warn$4("Invalid Teleport target on update:",A,`(${typeof A})`)}else P&&moveTeleport(t,A,_,d,1)}},remove(e,t,n,r,{um:o,o:{remove:a}},s){const{shapeFlag:l,children:u,anchor:d,targetAnchor:f,target:m,props:g}=e;if(m&&a(f),(s||!isTeleportDisabled(g))&&(a(d),l&16))for(let y=0;y<u.length;y++){const b=u[y];o(b,t,n,!0,!!b.dynamicChildren)}},move:moveTeleport,hydrate:hydrateTeleport};function moveTeleport(e,t,n,{o:{insert:r},m:o},a=2){a===0&&r(e.targetAnchor,t,n);const{el:s,anchor:l,shapeFlag:u,children:d,props:f}=e,m=a===2;if(m&&r(s,t,n),(!m||isTeleportDisabled(f))&&u&16)for(let g=0;g<d.length;g++)o(d[g],t,n,2);m&&r(l,t,n)}function hydrateTeleport(e,t,n,r,o,a,{o:{nextSibling:s,parentNode:l,querySelector:u}},d){const f=t.target=resolveTarget(t.props,u);if(f){const m=f._lpa||f.firstChild;t.shapeFlag&16&&(isTeleportDisabled(t.props)?(t.anchor=d(s(e),t,l(e),n,r,o,a),t.targetAnchor=m):(t.anchor=s(e),t.targetAnchor=d(m,t,f,n,r,o,a)),f._lpa=t.targetAnchor&&s(t.targetAnchor))}return t.anchor&&s(t.anchor)}const Teleport=TeleportImpl,COMPONENTS="components";function resolveComponent(e,t){return resolveAsset(COMPONENTS,e,!0,t)||e}const NULL_DYNAMIC_COMPONENT=Symbol();function resolveDynamicComponent(e){return isString$1(e)?resolveAsset(COMPONENTS,e,!1)||e:e||NULL_DYNAMIC_COMPONENT}function resolveAsset(e,t,n=!0,r=!1){const o=currentRenderingInstance||currentInstance;if(o){const a=o.type;if(e===COMPONENTS){const l=getComponentName(a);if(l&&(l===t||l===camelize(t)||l===capitalize(camelize(t))))return a}const s=resolve(o[e]||a[e],t)||resolve(o.appContext[e],t);if(!s&&r)return a;if(n&&!s){const l=e===COMPONENTS?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";warn$4(`Failed to resolve ${e.slice(0,-1)}: ${t}${l}`)}return s}else warn$4(`resolve${capitalize(e.slice(0,-1))} can only be used in render() or setup().`)}function resolve(e,t){return e&&(e[t]||e[camelize(t)]||e[capitalize(camelize(t))])}const Fragment=Symbol("Fragment"),Text=Symbol("Text"),Comment=Symbol("Comment"),Static=Symbol("Static"),blockStack=[];let currentBlock=null;function openBlock(e=!1){blockStack.push(currentBlock=e?null:[])}function closeBlock(){blockStack.pop(),currentBlock=blockStack[blockStack.length-1]||null}let isBlockTreeEnabled=1;function setBlockTracking(e){isBlockTreeEnabled+=e}function setupBlock(e){return e.dynamicChildren=isBlockTreeEnabled>0?currentBlock||EMPTY_ARR:null,closeBlock(),isBlockTreeEnabled>0&&currentBlock&&currentBlock.push(e),e}function createElementBlock(e,t,n,r,o,a){return setupBlock(createBaseVNode(e,t,n,r,o,a,!0))}function createBlock(e,t,n,r,o){return setupBlock(createVNode(e,t,n,r,o,!0))}function isVNode(e){return e?e.__v_isVNode===!0:!1}function isSameVNodeType(e,t){return t.shapeFlag&6&&hmrDirtyComponents.has(t.type)?!1:e.type===t.type&&e.key===t.key}const createVNodeWithArgsTransform=(...e)=>_createVNode(...e),InternalObjectKey="__vInternal",normalizeKey=({key:e})=>e!=null?e:null,normalizeRef=({ref:e,ref_key:t,ref_for:n})=>e!=null?isString$1(e)||isRef(e)||isFunction$2(e)?{i:currentRenderingInstance,r:e,k:t,f:!!n}:e:null;function createBaseVNode(e,t=null,n=null,r=0,o=null,a=e===Fragment?0:1,s=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&normalizeKey(t),ref:t&&normalizeRef(t),scopeId:currentScopeId,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return l?(normalizeChildren(u,n),a&128&&e.normalize(u)):n&&(u.shapeFlag|=isString$1(n)?8:16),u.key!==u.key&&warn$4("VNode created with invalid key (NaN). VNode type:",u.type),isBlockTreeEnabled>0&&!s&&currentBlock&&(u.patchFlag>0||a&6)&&u.patchFlag!==32&&currentBlock.push(u),u}const createVNode=createVNodeWithArgsTransform;function _createVNode(e,t=null,n=null,r=0,o=null,a=!1){if((!e||e===NULL_DYNAMIC_COMPONENT)&&(e||warn$4(`Invalid vnode type when creating vnode: ${e}.`),e=Comment),isVNode(e)){const l=cloneVNode(e,t,!0);return n&&normalizeChildren(l,n),l}if(isClassComponent(e)&&(e=e.__vccOpts),t){t=guardReactiveProps(t);let{class:l,style:u}=t;l&&!isString$1(l)&&(t.class=normalizeClass(l)),isObject$2(u)&&(isProxy(u)&&!isArray$3(u)&&(u=extend$1({},u)),t.style=normalizeStyle(u))}const s=isString$1(e)?1:isSuspense(e)?128:isTeleport(e)?64:isObject$2(e)?4:isFunction$2(e)?2:0;return s&4&&isProxy(e)&&(e=toRaw(e),warn$4("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),createBaseVNode(e,t,n,r,o,s,a,!0)}function guardReactiveProps(e){return e?isProxy(e)||InternalObjectKey in e?extend$1({},e):e:null}function cloneVNode(e,t,n=!1){const{props:r,ref:o,patchFlag:a,children:s}=e,l=t?mergeProps(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&normalizeKey(l),ref:t&&t.ref?n&&o?isArray$3(o)?o.concat(normalizeRef(t)):[o,normalizeRef(t)]:normalizeRef(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a===-1&&isArray$3(s)?s.map(deepCloneVNode):s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Fragment?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&cloneVNode(e.ssContent),ssFallback:e.ssFallback&&cloneVNode(e.ssFallback),el:e.el,anchor:e.anchor}}function deepCloneVNode(e){const t=cloneVNode(e);return isArray$3(e.children)&&(t.children=e.children.map(deepCloneVNode)),t}function createTextVNode(e=" ",t=0){return createVNode(Text,null,e,t)}function createCommentVNode(e="",t=!1){return t?(openBlock(),createBlock(Comment,null,e)):createVNode(Comment,null,e)}function normalizeVNode(e){return e==null||typeof e=="boolean"?createVNode(Comment):isArray$3(e)?createVNode(Fragment,null,e.slice()):typeof e=="object"?cloneIfMounted(e):createVNode(Text,null,String(e))}function cloneIfMounted(e){return e.el===null||e.memo?e:cloneVNode(e)}function normalizeChildren(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(isArray$3(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),normalizeChildren(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(InternalObjectKey in t)?t._ctx=currentRenderingInstance:o===3&&currentRenderingInstance&&(currentRenderingInstance.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else isFunction$2(t)?(t={default:t,_ctx:currentRenderingInstance},n=32):(t=String(t),r&64?(n=16,t=[createTextVNode(t)]):n=8);e.children=t,e.shapeFlag|=n}function mergeProps(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=normalizeClass([t.class,r.class]));else if(o==="style")t.style=normalizeStyle([t.style,r.style]);else if(isOn(o)){const a=t[o],s=r[o];s&&a!==s&&!(isArray$3(a)&&a.includes(s))&&(t[o]=a?[].concat(a,s):s)}else o!==""&&(t[o]=r[o])}return t}function invokeVNodeHook(e,t,n,r=null){callWithAsyncErrorHandling(e,t,7,[n,r])}function renderList(e,t,n,r){let o;const a=n&&n[r];if(isArray$3(e)||isString$1(e)){o=new Array(e.length);for(let s=0,l=e.length;s<l;s++)o[s]=t(e[s],s,void 0,a&&a[s])}else if(typeof e=="number"){if(!Number.isInteger(e))return warn$4(`The v-for range expect an integer value but got ${e}.`),[];o=new Array(e);for(let s=0;s<e;s++)o[s]=t(s+1,s,void 0,a&&a[s])}else if(isObject$2(e))if(e[Symbol.iterator])o=Array.from(e,(s,l)=>t(s,l,void 0,a&&a[l]));else{const s=Object.keys(e);o=new Array(s.length);for(let l=0,u=s.length;l<u;l++){const d=s[l];o[l]=t(e[d],d,l,a&&a[l])}}else o=[];return n&&(n[r]=o),o}function renderSlot(e,t,n={},r,o){if(currentRenderingInstance.isCE)return createVNode("slot",t==="default"?null:{name:t},r&&r());let a=e[t];a&&a.length>1&&(warn$4("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),a=()=>[]),a&&a._c&&(a._d=!1),openBlock();const s=a&&ensureValidVNode$1(a(n)),l=createBlock(Fragment,{key:n.key||`_${t}`},s||(r?r():[]),s&&e._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),a&&a._c&&(a._d=!0),l}function ensureValidVNode$1(e){return e.some(t=>isVNode(t)?!(t.type===Comment||t.type===Fragment&&!ensureValidVNode$1(t.children)):!0)?e:null}const getPublicInstance=e=>e?isStatefulComponent(e)?getExposeProxy(e)||e.proxy:getPublicInstance(e.parent):null,publicPropertiesMap=extend$1(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>shallowReadonly(e.props),$attrs:e=>shallowReadonly(e.attrs),$slots:e=>shallowReadonly(e.slots),$refs:e=>shallowReadonly(e.refs),$parent:e=>getPublicInstance(e.parent),$root:e=>getPublicInstance(e.root),$emit:e=>e.emit,$options:e=>resolveMergedOptions(e),$forceUpdate:e=>()=>queueJob(e.update),$nextTick:e=>nextTick.bind(e.proxy),$watch:e=>instanceWatch.bind(e)}),PublicInstanceProxyHandlers={get({_:e},t){const{ctx:n,setupState:r,data:o,props:a,accessCache:s,type:l,appContext:u}=e;if(t==="__isVue")return!0;if(r!==EMPTY_OBJ&&r.__isScriptSetup&&hasOwn(r,t))return r[t];let d;if(t[0]!=="$"){const y=s[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(r!==EMPTY_OBJ&&hasOwn(r,t))return s[t]=1,r[t];if(o!==EMPTY_OBJ&&hasOwn(o,t))return s[t]=2,o[t];if((d=e.propsOptions[0])&&hasOwn(d,t))return s[t]=3,a[t];if(n!==EMPTY_OBJ&&hasOwn(n,t))return s[t]=4,n[t];shouldCacheAccess&&(s[t]=0)}}const f=publicPropertiesMap[t];let m,g;if(f)return t==="$attrs"&&(track(e,"get",t),markAttrsAccessed()),f(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(n!==EMPTY_OBJ&&hasOwn(n,t))return s[t]=4,n[t];if(g=u.config.globalProperties,hasOwn(g,t))return g[t];currentRenderingInstance&&(!isString$1(t)||t.indexOf("__v")!==0)&&(o!==EMPTY_OBJ&&(t[0]==="$"||t[0]==="_")&&hasOwn(o,t)?warn$4(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===currentRenderingInstance&&warn$4(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:r,setupState:o,ctx:a}=e;return o!==EMPTY_OBJ&&hasOwn(o,t)?(o[t]=n,!0):r!==EMPTY_OBJ&&hasOwn(r,t)?(r[t]=n,!0):hasOwn(e.props,t)?(warn$4(`Attempting to mutate prop "${t}". Props are readonly.`,e),!1):t[0]==="$"&&t.slice(1)in e?(warn$4(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`,e),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(a,t,{enumerable:!0,configurable:!0,value:n}):a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:a}},s){let l;return!!n[s]||e!==EMPTY_OBJ&&hasOwn(e,s)||t!==EMPTY_OBJ&&hasOwn(t,s)||(l=a[0])&&hasOwn(l,s)||hasOwn(r,s)||hasOwn(publicPropertiesMap,s)||hasOwn(o.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?this.set(e,t,n.get(),null):n.value!=null&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};PublicInstanceProxyHandlers.ownKeys=e=>(warn$4("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function createDevRenderContext(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(publicPropertiesMap).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>publicPropertiesMap[n](e),set:NOOP})}),t}function exposePropsOnRenderContext(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(r=>{Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>e.props[r],set:NOOP})})}function exposeSetupStateOnRenderContext(e){const{ctx:t,setupState:n}=e;Object.keys(toRaw(n)).forEach(r=>{if(!n.__isScriptSetup){if(r[0]==="$"||r[0]==="_"){warn$4(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>n[r],set:NOOP})}})}const emptyAppContext=createAppContext();let uid$1=0;function createComponentInstance(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||emptyAppContext,a={uid:uid$1++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new EffectScope(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:normalizePropsOptions(r,o),emitsOptions:normalizeEmitsOptions(r,o),emit:null,emitted:null,propsDefaults:EMPTY_OBJ,inheritAttrs:r.inheritAttrs,ctx:EMPTY_OBJ,data:EMPTY_OBJ,props:EMPTY_OBJ,attrs:EMPTY_OBJ,slots:EMPTY_OBJ,refs:EMPTY_OBJ,setupState:EMPTY_OBJ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx=createDevRenderContext(a),a.root=t?t.root:a,a.emit=emit$1.bind(null,a),e.ce&&e.ce(a),a}let currentInstance=null;const getCurrentInstance=()=>currentInstance||currentRenderingInstance,setCurrentInstance=e=>{currentInstance=e,e.scope.on()},unsetCurrentInstance=()=>{currentInstance&&currentInstance.scope.off(),currentInstance=null},isBuiltInTag=makeMap("slot,component");function validateComponentName(e,t){const n=t.isNativeTag||NO;(isBuiltInTag(e)||n(e))&&warn$4("Do not use built-in or reserved HTML elements as component id: "+e)}function isStatefulComponent(e){return e.vnode.shapeFlag&4}let isInSSRComponentSetup=!1;function setupComponent(e,t=!1){isInSSRComponentSetup=t;const{props:n,children:r}=e.vnode,o=isStatefulComponent(e);initProps(e,n,o,t),initSlots(e,r);const a=o?setupStatefulComponent(e,t):void 0;return isInSSRComponentSetup=!1,a}function setupStatefulComponent(e,t){const n=e.type;{if(n.name&&validateComponentName(n.name,e.appContext.config),n.components){const o=Object.keys(n.components);for(let a=0;a<o.length;a++)validateComponentName(o[a],e.appContext.config)}if(n.directives){const o=Object.keys(n.directives);for(let a=0;a<o.length;a++)validateDirectiveName(o[a])}n.compilerOptions&&isRuntimeOnly()&&warn$4('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=markRaw(new Proxy(e.ctx,PublicInstanceProxyHandlers)),exposePropsOnRenderContext(e);const{setup:r}=n;if(r){const o=e.setupContext=r.length>1?createSetupContext(e):null;setCurrentInstance(e),pauseTracking();const a=callWithErrorHandling(r,e,0,[shallowReadonly(e.props),o]);if(resetTracking(),unsetCurrentInstance(),isPromise(a)){if(a.then(unsetCurrentInstance,unsetCurrentInstance),t)return a.then(s=>{handleSetupResult(e,s,t)}).catch(s=>{handleError(s,e,0)});e.asyncDep=a}else handleSetupResult(e,a,t)}else finishComponentSetup(e,t)}function handleSetupResult(e,t,n){isFunction$2(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:isObject$2(t)?(isVNode(t)&&warn$4("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=proxyRefs(t),exposeSetupStateOnRenderContext(e)):t!==void 0&&warn$4(`setup() should return an object. Received: ${t===null?"null":typeof t}`),finishComponentSetup(e,n)}let compile;const isRuntimeOnly=()=>!compile;function finishComponentSetup(e,t,n){const r=e.type;if(!e.render){if(!t&&compile&&!r.render){const o=r.template;if(o){startMeasure(e,"compile");const{isCustomElement:a,compilerOptions:s}=e.appContext.config,{delimiters:l,compilerOptions:u}=r,d=extend$1(extend$1({isCustomElement:a,delimiters:l},s),u);r.render=compile(o,d),endMeasure(e,"compile")}}e.render=r.render||NOOP}setCurrentInstance(e),pauseTracking(),applyOptions(e),resetTracking(),unsetCurrentInstance(),!r.render&&e.render===NOOP&&!t&&(r.template?warn$4('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):warn$4("Component is missing template or render function."))}function createAttrsProxy(e){return new Proxy(e.attrs,{get(t,n){return markAttrsAccessed(),track(e,"get","$attrs"),t[n]},set(){return warn$4("setupContext.attrs is readonly."),!1},deleteProperty(){return warn$4("setupContext.attrs is readonly."),!1}})}function createSetupContext(e){const t=r=>{e.exposed&&warn$4("expose() should be called only once per setup()."),e.exposed=r||{}};let n;return Object.freeze({get attrs(){return n||(n=createAttrsProxy(e))},get slots(){return shallowReadonly(e.slots)},get emit(){return(r,...o)=>e.emit(r,...o)},expose:t})}function getExposeProxy(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(proxyRefs(markRaw(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in publicPropertiesMap)return publicPropertiesMap[n](e)}}))}const classifyRE=/(?:^|[-_])(\w)/g,classify=e=>e.replace(classifyRE,t=>t.toUpperCase()).replace(/[-_]/g,"");function getComponentName(e){return isFunction$2(e)&&e.displayName||e.name}function formatComponentName(e,t,n=!1){let r=getComponentName(t);if(!r&&t.__file){const o=t.__file.match(/([^/\\]+)\.\w+$/);o&&(r=o[1])}if(!r&&e&&e.parent){const o=a=>{for(const s in a)if(a[s]===t)return s};r=o(e.components||e.parent.type.components)||o(e.appContext.components)}return r?classify(r):n?"App":"Anonymous"}function isClassComponent(e){return isFunction$2(e)&&"__vccOpts"in e}const computed=(e,t)=>computed$1(e,t,isInSSRComponentSetup);function h(e,t,n){const r=arguments.length;return r===2?isObject$2(t)&&!isArray$3(t)?isVNode(t)?createVNode(e,null,[t]):createVNode(e,t):createVNode(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&isVNode(n)&&(n=[n]),createVNode(e,t,n))}function isShallow(e){return!!(e&&e.__v_isShallow)}function initCustomFormatter(){if(typeof window=="undefined")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},o={header(m){return isObject$2(m)?m.__isVue?["div",e,"VueInstance"]:isRef(m)?["div",{},["span",e,f(m)],"<",l(m.value),">"]:isReactive(m)?["div",{},["span",e,isShallow(m)?"ShallowReactive":"Reactive"],"<",l(m),`>${isReadonly(m)?" (readonly)":""}`]:isReadonly(m)?["div",{},["span",e,isShallow(m)?"ShallowReadonly":"Readonly"],"<",l(m),">"]:null:null},hasBody(m){return m&&m.__isVue},body(m){if(m&&m.__isVue)return["div",{},...a(m.$)]}};function a(m){const g=[];m.type.props&&m.props&&g.push(s("props",toRaw(m.props))),m.setupState!==EMPTY_OBJ&&g.push(s("setup",m.setupState)),m.data!==EMPTY_OBJ&&g.push(s("data",toRaw(m.data)));const y=u(m,"computed");y&&g.push(s("computed",y));const b=u(m,"inject");return b&&g.push(s("injected",b)),g.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:m}]]),g}function s(m,g){return g=extend$1({},g),Object.keys(g).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},m],["div",{style:"padding-left:1.25em"},...Object.keys(g).map(y=>["div",{},["span",r,y+": "],l(g[y],!1)])]]:["span",{}]}function l(m,g=!0){return typeof m=="number"?["span",t,m]:typeof m=="string"?["span",n,JSON.stringify(m)]:typeof m=="boolean"?["span",r,m]:isObject$2(m)?["object",{object:g?toRaw(m):m}]:["span",n,String(m)]}function u(m,g){const y=m.type;if(isFunction$2(y))return;const b={};for(const x in m.ctx)d(y,x,g)&&(b[x]=m.ctx[x]);return b}function d(m,g,y){const b=m[y];if(isArray$3(b)&&b.includes(g)||isObject$2(b)&&g in b||m.extends&&d(m.extends,g,y)||m.mixins&&m.mixins.some(x=>d(x,g,y)))return!0}function f(m){return isShallow(m)?"ShallowRef":m.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(o):window.devtoolsFormatters=[o]}const version$1="3.2.31",svgNS="http://www.w3.org/2000/svg",doc=typeof document!="undefined"?document:null,templateContainer=doc&&doc.createElement("template"),nodeOps={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?doc.createElementNS(svgNS,e):doc.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>doc.createTextNode(e),createComment:e=>doc.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>doc.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,o,a){const s=n?n.previousSibling:t.lastChild;if(o&&(o===a||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===a||!(o=o.nextSibling)););else{templateContainer.innerHTML=r?`<svg>${e}</svg>`:e;const l=templateContainer.content;if(r){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function patchClass(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function patchStyle(e,t,n){const r=e.style,o=isString$1(n);if(n&&!o){for(const a in n)setStyle(r,a,n[a]);if(t&&!isString$1(t))for(const a in t)n[a]==null&&setStyle(r,a,"")}else{const a=r.display;o?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const importantRE=/\s*!important$/;function setStyle(e,t,n){if(isArray$3(n))n.forEach(r=>setStyle(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=autoPrefix(e,t);importantRE.test(n)?e.setProperty(hyphenate(r),n.replace(importantRE,""),"important"):e[r]=n}}const prefixes=["Webkit","Moz","ms"],prefixCache={};function autoPrefix(e,t){const n=prefixCache[t];if(n)return n;let r=camelize(t);if(r!=="filter"&&r in e)return prefixCache[t]=r;r=capitalize(r);for(let o=0;o<prefixes.length;o++){const a=prefixes[o]+r;if(a in e)return prefixCache[t]=a}return t}const xlinkNS="http://www.w3.org/1999/xlink";function patchAttr(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(xlinkNS,t.slice(6,t.length)):e.setAttributeNS(xlinkNS,t,n);else{const a=isSpecialBooleanAttr(t);n==null||a&&!includeBooleanAttr(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function patchDOMProp(e,t,n,r,o,a,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,o,a),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const l=typeof e[t];if(l==="boolean"){e[t]=includeBooleanAttr(n);return}else if(n==null&&l==="string"){e[t]="",e.removeAttribute(t);return}else if(l==="number"){try{e[t]=0}catch(u){}e.removeAttribute(t);return}}try{e[t]=n}catch(l){warn$4(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`,l)}}let _getNow=Date.now,skipTimestampCheck=!1;if(typeof window!="undefined"){_getNow()>document.createEvent("Event").timeStamp&&(_getNow=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);skipTimestampCheck=!!(e&&Number(e[1])<=53)}let cachedNow=0;const p=Promise.resolve(),reset=()=>{cachedNow=0},getNow=()=>cachedNow||(p.then(reset),cachedNow=_getNow());function addEventListener(e,t,n,r){e.addEventListener(t,n,r)}function removeEventListener(e,t,n,r){e.removeEventListener(t,n,r)}function patchEvent(e,t,n,r,o=null){const a=e._vei||(e._vei={}),s=a[t];if(r&&s)s.value=r;else{const[l,u]=parseName(t);if(r){const d=a[t]=createInvoker(r,o);addEventListener(e,l,d,u)}else s&&(removeEventListener(e,l,s,u),a[t]=void 0)}}const optionsModifierRE=/(?:Once|Passive|Capture)$/;function parseName(e){let t;if(optionsModifierRE.test(e)){t={};let n;for(;n=e.match(optionsModifierRE);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[hyphenate(e.slice(2)),t]}function createInvoker(e,t){const n=r=>{const o=r.timeStamp||_getNow();(skipTimestampCheck||o>=n.attached-1)&&callWithAsyncErrorHandling(patchStopImmediatePropagation(r,n.value),t,5,[r])};return n.value=e,n.attached=getNow(),n}function patchStopImmediatePropagation(e,t){if(isArray$3(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const nativeOnRE=/^on[a-z]/,patchProp=(e,t,n,r,o=!1,a,s,l,u)=>{t==="class"?patchClass(e,r,o):t==="style"?patchStyle(e,n,r):isOn(t)?isModelListener(t)||patchEvent(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):shouldSetAsProp(e,t,r,o))?patchDOMProp(e,t,r,a,s,l,u):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),patchAttr(e,t,r,o))};function shouldSetAsProp(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&nativeOnRE.test(t)&&isFunction$2(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||nativeOnRE.test(t)&&isString$1(n)?!1:t in e}const TRANSITION="transition",ANIMATION="animation",Transition=(e,{slots:t})=>h(BaseTransition,resolveTransitionProps(e),t);Transition.displayName="Transition";const DOMTransitionPropsValidators={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},TransitionPropsValidators=Transition.props=extend$1({},BaseTransition.props,DOMTransitionPropsValidators),callHook=(e,t=[])=>{isArray$3(e)?e.forEach(n=>n(...t)):e&&e(...t)},hasExplicitCallback=e=>e?isArray$3(e)?e.some(t=>t.length>1):e.length>1:!1;function resolveTransitionProps(e){const t={};for(const B in e)B in DOMTransitionPropsValidators||(t[B]=e[B]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:a=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:u=a,appearActiveClass:d=s,appearToClass:f=l,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=e,b=normalizeDuration(o),x=b&&b[0],C=b&&b[1],{onBeforeEnter:$,onEnter:E,onEnterCancelled:N,onLeave:S,onLeaveCancelled:k,onBeforeAppear:A=$,onAppear:_=E,onAppearCancelled:P=N}=t,I=(B,V,L)=>{removeTransitionClass(B,V?f:l),removeTransitionClass(B,V?d:s),L&&L()},O=(B,V)=>{removeTransitionClass(B,y),removeTransitionClass(B,g),V&&V()},j=B=>(V,L)=>{const G=B?_:E,z=()=>I(V,B,L);callHook(G,[V,z]),nextFrame(()=>{removeTransitionClass(V,B?u:a),addTransitionClass(V,B?f:l),hasExplicitCallback(G)||whenTransitionEnds(V,r,x,z)})};return extend$1(t,{onBeforeEnter(B){callHook($,[B]),addTransitionClass(B,a),addTransitionClass(B,s)},onBeforeAppear(B){callHook(A,[B]),addTransitionClass(B,u),addTransitionClass(B,d)},onEnter:j(!1),onAppear:j(!0),onLeave(B,V){const L=()=>O(B,V);addTransitionClass(B,m),forceReflow(),addTransitionClass(B,g),nextFrame(()=>{removeTransitionClass(B,m),addTransitionClass(B,y),hasExplicitCallback(S)||whenTransitionEnds(B,r,C,L)}),callHook(S,[B,L])},onEnterCancelled(B){I(B,!1),callHook(N,[B])},onAppearCancelled(B){I(B,!0),callHook(P,[B])},onLeaveCancelled(B){O(B),callHook(k,[B])}})}function normalizeDuration(e){if(e==null)return null;if(isObject$2(e))return[NumberOf(e.enter),NumberOf(e.leave)];{const t=NumberOf(e);return[t,t]}}function NumberOf(e){const t=toNumber$1(e);return validateDuration(t),t}function validateDuration(e){typeof e!="number"?warn$4(`<transition> explicit duration is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&warn$4("<transition> explicit duration is NaN - the duration expression might be incorrect.")}function addTransitionClass(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function removeTransitionClass(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function nextFrame(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let endId=0;function whenTransitionEnds(e,t,n,r){const o=e._endId=++endId,a=()=>{o===e._endId&&r()};if(n)return setTimeout(a,n);const{type:s,timeout:l,propCount:u}=getTransitionInfo(e,t);if(!s)return r();const d=s+"end";let f=0;const m=()=>{e.removeEventListener(d,g),a()},g=y=>{y.target===e&&++f>=u&&m()};setTimeout(()=>{f<u&&m()},l+1),e.addEventListener(d,g)}function getTransitionInfo(e,t){const n=window.getComputedStyle(e),r=b=>(n[b]||"").split(", "),o=r(TRANSITION+"Delay"),a=r(TRANSITION+"Duration"),s=getTimeout(o,a),l=r(ANIMATION+"Delay"),u=r(ANIMATION+"Duration"),d=getTimeout(l,u);let f=null,m=0,g=0;t===TRANSITION?s>0&&(f=TRANSITION,m=s,g=a.length):t===ANIMATION?d>0&&(f=ANIMATION,m=d,g=u.length):(m=Math.max(s,d),f=m>0?s>d?TRANSITION:ANIMATION:null,g=f?f===TRANSITION?a.length:u.length:0);const y=f===TRANSITION&&/\b(transform|all)(,|$)/.test(n[TRANSITION+"Property"]);return{type:f,timeout:m,propCount:g,hasTransform:y}}function getTimeout(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>toMs(n)+toMs(e[r])))}function toMs(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function forceReflow(){return document.body.offsetHeight}const positionMap=new WeakMap,newPositionMap=new WeakMap,TransitionGroupImpl={name:"TransitionGroup",props:extend$1({},TransitionPropsValidators,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=getCurrentInstance(),r=useTransitionState();let o,a;return onUpdated(()=>{if(!o.length)return;const s=e.moveClass||`${e.name||"v"}-move`;if(!hasCSSTransform(o[0].el,n.vnode.el,s))return;o.forEach(callPendingCbs),o.forEach(recordPosition);const l=o.filter(applyTranslation);forceReflow(),l.forEach(u=>{const d=u.el,f=d.style;addTransitionClass(d,s),f.transform=f.webkitTransform=f.transitionDuration="";const m=d._moveCb=g=>{g&&g.target!==d||(!g||/transform$/.test(g.propertyName))&&(d.removeEventListener("transitionend",m),d._moveCb=null,removeTransitionClass(d,s))};d.addEventListener("transitionend",m)})}),()=>{const s=toRaw(e),l=resolveTransitionProps(s);let u=s.tag||Fragment;o=a,a=t.default?getTransitionRawChildren(t.default()):[];for(let d=0;d<a.length;d++){const f=a[d];f.key!=null?setTransitionHooks(f,resolveTransitionHooks(f,l,r,n)):warn$4("<TransitionGroup> children must be keyed.")}if(o)for(let d=0;d<o.length;d++){const f=o[d];setTransitionHooks(f,resolveTransitionHooks(f,l,r,n)),positionMap.set(f,f.el.getBoundingClientRect())}return createVNode(u,null,a)}}},TransitionGroup=TransitionGroupImpl;function callPendingCbs(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function recordPosition(e){newPositionMap.set(e,e.el.getBoundingClientRect())}function applyTranslation(e){const t=positionMap.get(e),n=newPositionMap.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const a=e.el.style;return a.transform=a.webkitTransform=`translate(${r}px,${o}px)`,a.transitionDuration="0s",e}}function hasCSSTransform(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(s=>{s.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(s=>s&&r.classList.add(s)),r.style.display="none";const o=t.nodeType===1?t:t.parentNode;o.appendChild(r);const{hasTransform:a}=getTransitionInfo(r);return o.removeChild(r),a}const getModelAssigner=e=>{const t=e.props["onUpdate:modelValue"];return isArray$3(t)?n=>invokeArrayFns(t,n):t};function onCompositionStart(e){e.target.composing=!0}function onCompositionEnd(e){const t=e.target;t.composing&&(t.composing=!1,trigger(t,"input"))}function trigger(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const vModelText={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e._assign=getModelAssigner(o);const a=r||o.props&&o.props.type==="number";addEventListener(e,t?"change":"input",s=>{if(s.target.composing)return;let l=e.value;n?l=l.trim():a&&(l=toNumber$1(l)),e._assign(l)}),n&&addEventListener(e,"change",()=>{e.value=e.value.trim()}),t||(addEventListener(e,"compositionstart",onCompositionStart),addEventListener(e,"compositionend",onCompositionEnd),addEventListener(e,"change",onCompositionEnd))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:o}},a){if(e._assign=getModelAssigner(a),e.composing||document.activeElement===e&&(n||r&&e.value.trim()===t||(o||e.type==="number")&&toNumber$1(e.value)===t))return;const s=t==null?"":t;e.value!==s&&(e.value=s)}},systemModifiers=["ctrl","shift","alt","meta"],modifierGuards={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>systemModifiers.some(n=>e[`${n}Key`]&&!t.includes(n))},withModifiers=(e,t)=>(n,...r)=>{for(let o=0;o<t.length;o++){const a=modifierGuards[t[o]];if(a&&a(n,t))return}return e(n,...r)},keyNames={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},withKeys=(e,t)=>n=>{if(!("key"in n))return;const r=hyphenate(n.key);if(t.some(o=>o===r||keyNames[o]===r))return e(n)},vShow={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):setDisplay(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),setDisplay(e,!0),r.enter(e)):r.leave(e,()=>{setDisplay(e,!1)}):setDisplay(e,t))},beforeUnmount(e,{value:t}){setDisplay(e,t)}};function setDisplay(e,t){e.style.display=t?e._vod:"none"}const rendererOptions=extend$1({patchProp},nodeOps);let renderer;function ensureRenderer(){return renderer||(renderer=createRenderer(rendererOptions))}const createApp=(...e)=>{const t=ensureRenderer().createApp(...e);injectNativeTagCheck(t),injectCompilerOptionsCheck(t);const{mount:n}=t;return t.mount=r=>{const o=normalizeContainer(r);if(!o)return;const a=t._component;!isFunction$2(a)&&!a.render&&!a.template&&(a.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t};function injectNativeTagCheck(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>isHTMLTag(t)||isSVGTag(t),writable:!1})}function injectCompilerOptionsCheck(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){warn$4("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return warn$4(r),n},set(){warn$4(r)}})}}function normalizeContainer(e){if(isString$1(e)){const t=document.querySelector(e);return t||warn$4(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&warn$4('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function initDev(){initCustomFormatter()}initDev();function getDevtoolsGlobalHook(){return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__}function getTarget(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const isProxyAvailable=typeof Proxy=="function",HOOK_SETUP="devtools-plugin:setup",HOOK_PLUGIN_SETTINGS_SET="plugin:settings:set";let supported,perf;function isPerformanceSupported(){var e;return supported!==void 0||(typeof window!="undefined"&&window.performance?(supported=!0,perf=window.performance):typeof global!="undefined"&&((e=global.perf_hooks)===null||e===void 0?void 0:e.performance)?(supported=!0,perf=global.perf_hooks.performance):supported=!1),supported}function now(){return isPerformanceSupported()?perf.now():Date.now()}class ApiProxy{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const r={};if(t.settings)for(const s in t.settings){const l=t.settings[s];r[s]=l.defaultValue}const o=`__vue-devtools-plugin-settings__${t.id}`;let a=Object.assign({},r);try{const s=localStorage.getItem(o),l=JSON.parse(s);Object.assign(a,l)}catch(s){}this.fallbacks={getSettings(){return a},setSettings(s){try{localStorage.setItem(o,JSON.stringify(s))}catch(l){}a=s},now(){return now()}},n&&n.on(HOOK_PLUGIN_SETTINGS_SET,(s,l)=>{s===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(s,l)=>this.target?this.target.on[l]:(...u)=>{this.onQueue.push({method:l,args:u})}}),this.proxiedTarget=new Proxy({},{get:(s,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...u)=>(this.targetQueue.push({method:l,args:u,resolve:()=>{}}),this.fallbacks[l](...u)):(...u)=>new Promise(d=>{this.targetQueue.push({method:l,args:u,resolve:d})})})}setRealTarget(t){return Be(this,null,function*(){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(yield this.target[n.method](...n.args))})}}function setupDevtoolsPlugin(e,t){const n=e,r=getTarget(),o=getDevtoolsGlobalHook(),a=isProxyAvailable&&n.enableEarlyProxy;if(o&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!a))o.emit(HOOK_SETUP,e,t);else{const s=a?new ApiProxy(n,o):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:s}),s&&t(s.proxiedTarget)}}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const hasSymbol=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",PolySymbol=e=>hasSymbol?Symbol("[vue-router]: "+e):"[vue-router]: "+e,matchedRouteKey=PolySymbol("router view location matched"),viewDepthKey=PolySymbol("router view depth"),routerKey=PolySymbol("router"),routeLocationKey=PolySymbol("route location"),routerViewLocationKey=PolySymbol("router view location"),isBrowser$2=typeof window!="undefined";function isESModule(e){return e.__esModule||hasSymbol&&e[Symbol.toStringTag]==="Module"}const assign$1=Object.assign;function applyToParams(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const noop$1=()=>{};function warn$3(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const TRAILING_SLASH_RE=/\/$/,removeTrailingSlash=e=>e.replace(TRAILING_SLASH_RE,"");function parseURL(e,t,n="/"){let r,o={},a="",s="";const l=t.indexOf("?"),u=t.indexOf("#",l>-1?l:0);return l>-1&&(r=t.slice(0,l),a=t.slice(l+1,u>-1?u:t.length),o=e(a)),u>-1&&(r=r||t.slice(0,u),s=t.slice(u,t.length)),r=resolveRelativePath(r!=null?r:t,n),{fullPath:r+(a&&"?")+a+s,path:r,query:o,hash:s}}function stringifyURL(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function stripBase(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function isSameRouteLocation(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&isSameRouteRecord(t.matched[r],n.matched[o])&&isSameRouteLocationParams(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function isSameRouteRecord(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function isSameRouteLocationParams(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!isSameRouteLocationParamsValue(e[n],t[n]))return!1;return!0}function isSameRouteLocationParamsValue(e,t){return Array.isArray(e)?isEquivalentArray(e,t):Array.isArray(t)?isEquivalentArray(t,e):e===t}function isEquivalentArray(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function resolveRelativePath(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return warn$3(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o=n.length-1,a,s;for(a=0;a<r.length;a++)if(s=r[a],!(o===1||s==="."))if(s==="..")o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var NavigationType;(function(e){e.pop="pop",e.push="push"})(NavigationType||(NavigationType={}));var NavigationDirection;(function(e){e.back="back",e.forward="forward",e.unknown=""})(NavigationDirection||(NavigationDirection={}));function normalizeBase(e){if(!e)if(isBrowser$2){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),removeTrailingSlash(e)}const BEFORE_HASH_RE=/^[^#]+#/;function createHref(e,t){return e.replace(BEFORE_HASH_RE,"#")+t}function getElementPosition(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const computeScrollPosition=()=>({left:window.pageXOffset,top:window.pageYOffset});function scrollToPosition(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!r||!document.getElementById(e.el.slice(1))))try{const a=document.querySelector(e.el);if(r&&a){warn$3(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch(a){warn$3(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o){warn$3(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=getElementPosition(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function getScrollKey(e,t){return(history.state?history.state.position-t:-1)+e}const scrollPositions=new Map;function saveScrollPosition(e,t){scrollPositions.set(e,t)}function getSavedScrollPosition(e){const t=scrollPositions.get(e);return scrollPositions.delete(e),t}let createBaseLocation=()=>location.protocol+"//"+location.host;function createCurrentLocation(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let l=o.includes(e.slice(a))?e.slice(a).length:1,u=o.slice(l);return u[0]!=="/"&&(u="/"+u),stripBase(u,"")}return stripBase(n,e)+r+o}function useHistoryListeners(e,t,n,r){let o=[],a=[],s=null;const l=({state:g})=>{const y=createCurrentLocation(e,location),b=n.value,x=t.value;let C=0;if(g){if(n.value=y,t.value=g,s&&s===b){s=null;return}C=x?g.position-x.position:0}else r(y);o.forEach($=>{$(n.value,b,{delta:C,type:NavigationType.pop,direction:C?C>0?NavigationDirection.forward:NavigationDirection.back:NavigationDirection.unknown})})};function u(){s=n.value}function d(g){o.push(g);const y=()=>{const b=o.indexOf(g);b>-1&&o.splice(b,1)};return a.push(y),y}function f(){const{history:g}=window;!g.state||g.replaceState(assign$1({},g.state,{scroll:computeScrollPosition()}),"")}function m(){for(const g of a)g();a=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f),{pauseListeners:u,listen:d,destroy:m}}function buildState(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?computeScrollPosition():null}}function useHistoryStateNavigation(e){const{history:t,location:n}=window,r={value:createCurrentLocation(e,n)},o={value:t.state};o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(u,d,f){const m=e.indexOf("#"),g=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+u:createBaseLocation()+e+u;try{t[f?"replaceState":"pushState"](d,"",g),o.value=d}catch(y){warn$3("Error with push/replace State",y),n[f?"replace":"assign"](g)}}function s(u,d){const f=assign$1({},t.state,buildState(o.value.back,u,o.value.forward,!0),d,{position:o.value.position});a(u,f,!0),r.value=u}function l(u,d){const f=assign$1({},o.value,t.state,{forward:u,scroll:computeScrollPosition()});t.state||warn$3(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),a(f.current,f,!0);const m=assign$1({},buildState(r.value,u,null),{position:f.position+1},d);a(u,m,!1),r.value=u}return{location:r,state:o,push:l,replace:s}}function createWebHistory(e){e=normalizeBase(e);const t=useHistoryStateNavigation(e),n=useHistoryListeners(e,t.state,t.location,t.replace);function r(a,s=!0){s||n.pauseListeners(),history.go(a)}const o=assign$1({location:"",base:e,go:r,createHref:createHref.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function createWebHashHistory(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),!e.endsWith("#/")&&!e.endsWith("#")&&warn$3(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/,"#")}".`),createWebHistory(e)}function isRouteLocation(e){return typeof e=="string"||e&&typeof e=="object"}function isRouteName(e){return typeof e=="string"||typeof e=="symbol"}const START_LOCATION_NORMALIZED={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},NavigationFailureSymbol=PolySymbol("navigation failure");var NavigationFailureType;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(NavigationFailureType||(NavigationFailureType={}));const ErrorTypeMessages={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${stringifyRoute(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function createRouterError(e,t){return assign$1(new Error(ErrorTypeMessages[e](t)),{type:e,[NavigationFailureSymbol]:!0},t)}function isNavigationFailure(e,t){return e instanceof Error&&NavigationFailureSymbol in e&&(t==null||!!(e.type&t))}const propertiesToLog=["params","query","hash"];function stringifyRoute(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of propertiesToLog)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const BASE_PARAM_PATTERN="[^/]+?",BASE_PATH_PARSER_OPTIONS={sensitive:!1,strict:!1,start:!0,end:!0},REGEX_CHARS_RE=/[.+*?^${}()[\]/\\]/g;function tokensToParser(e,t){const n=assign$1({},BASE_PATH_PARSER_OPTIONS,t),r=[];let o=n.start?"^":"";const a=[];for(const d of e){const f=d.length?[]:[90];n.strict&&!d.length&&(o+="/");for(let m=0;m<d.length;m++){const g=d[m];let y=40+(n.sensitive?.25:0);if(g.type===0)m||(o+="/"),o+=g.value.replace(REGEX_CHARS_RE,"\\$&"),y+=40;else if(g.type===1){const{value:b,repeatable:x,optional:C,regexp:$}=g;a.push({name:b,repeatable:x,optional:C});const E=$||BASE_PARAM_PATTERN;if(E!==BASE_PARAM_PATTERN){y+=10;try{new RegExp(`(${E})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${b}" (${E}): `+S.message)}}let N=x?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;m||(N=C&&d.length<2?`(?:/${N})`:"/"+N),C&&(N+="?"),o+=N,y+=20,C&&(y+=-8),x&&(y+=-20),E===".*"&&(y+=-50)}f.push(y)}r.push(f)}if(n.strict&&n.end){const d=r.length-1;r[d][r[d].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function l(d){const f=d.match(s),m={};if(!f)return null;for(let g=1;g<f.length;g++){const y=f[g]||"",b=a[g-1];m[b.name]=y&&b.repeatable?y.split("/"):y}return m}function u(d){let f="",m=!1;for(const g of e){(!m||!f.endsWith("/"))&&(f+="/"),m=!1;for(const y of g)if(y.type===0)f+=y.value;else if(y.type===1){const{value:b,repeatable:x,optional:C}=y,$=b in d?d[b]:"";if(Array.isArray($)&&!x)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const E=Array.isArray($)?$.join("/"):$;if(!E)if(C)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):m=!0);else throw new Error(`Missing required param "${b}"`);f+=E}}return f}return{re:s,score:r,keys:a,parse:l,stringify:u}}function compareScoreArray(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function comparePathParserScore(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const a=compareScoreArray(r[n],o[n]);if(a)return a;n++}return o.length-r.length}const ROOT_TOKEN={type:0,value:""},VALID_PARAM_RE=/[a-zA-Z0-9_]/;function tokenizePath(e){if(!e)return[[]];if(e==="/")return[[ROOT_TOKEN]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(y){throw new Error(`ERR (${n})/"${d}": ${y}`)}let n=0,r=n;const o=[];let a;function s(){a&&o.push(a),a=[]}let l=0,u,d="",f="";function m(){!d||(n===0?a.push({type:0,value:d}):n===1||n===2||n===3?(a.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:d,regexp:f,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),d="")}function g(){d+=u}for(;l<e.length;){if(u=e[l++],u==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:u==="/"?(d&&m(),s()):u===":"?(m(),n=1):g();break;case 4:g(),n=r;break;case 1:u==="("?n=2:VALID_PARAM_RE.test(u)?g():(m(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--);break;case 2:u===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+u:n=3:f+=u;break;case 3:m(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${d}"`),m(),s(),o}function createRouteRecordMatcher(e,t,n){const r=tokensToParser(tokenizePath(e.path),n);{const a=new Set;for(const s of r.keys)a.has(s.name)&&warn$3(`Found duplicated params with name "${s.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),a.add(s.name)}const o=assign$1(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function createRouterMatcher(e,t){const n=[],r=new Map;t=mergeOptions({strict:!1,end:!0,sensitive:!1},t);function o(f){return r.get(f)}function a(f,m,g){const y=!g,b=normalizeRouteRecord(f);b.aliasOf=g&&g.record;const x=mergeOptions(t,f),C=[b];if("alias"in f){const N=typeof f.alias=="string"?[f.alias]:f.alias;for(const S of N)C.push(assign$1({},b,{components:g?g.record.components:b.components,path:S,aliasOf:g?g.record:b}))}let $,E;for(const N of C){const{path:S}=N;if(m&&S[0]!=="/"){const k=m.record.path,A=k[k.length-1]==="/"?"":"/";N.path=m.record.path+(S&&A+S)}if(N.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if($=createRouteRecordMatcher(N,m,x),m&&S[0]==="/"&&checkMissingParamsInAbsolutePath($,m),g?(g.alias.push($),checkSameParams(g,$)):(E=E||$,E!==$&&E.alias.push($),y&&f.name&&!isAliasRecord($)&&s(f.name)),"children"in b){const k=b.children;for(let A=0;A<k.length;A++)a(k[A],$,g&&g.children[A])}g=g||$,u($)}return E?()=>{s(E)}:noop$1}function s(f){if(isRouteName(f)){const m=r.get(f);m&&(r.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(s),m.alias.forEach(s))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&r.delete(f.record.name),f.children.forEach(s),f.alias.forEach(s))}}function l(){return n}function u(f){let m=0;for(;m<n.length&&comparePathParserScore(f,n[m])>=0&&(f.record.path!==n[m].record.path||!isRecordChildOf(f,n[m]));)m++;n.splice(m,0,f),f.record.name&&!isAliasRecord(f)&&r.set(f.record.name,f)}function d(f,m){let g,y={},b,x;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw createRouterError(1,{location:f});x=g.record.name,y=assign$1(paramsFromLocation(m.params,g.keys.filter(E=>!E.optional).map(E=>E.name)),f.params),b=g.stringify(y)}else if("path"in f)b=f.path,b.startsWith("/")||warn$3(`The Matcher cannot resolve relative paths but received "${b}". Unless you directly called \`matcher.resolve("${b}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),g=n.find(E=>E.re.test(b)),g&&(y=g.parse(b),x=g.record.name);else{if(g=m.name?r.get(m.name):n.find(E=>E.re.test(m.path)),!g)throw createRouterError(1,{location:f,currentLocation:m});x=g.record.name,y=assign$1({},m.params,f.params),b=g.stringify(y)}const C=[];let $=g;for(;$;)C.unshift($.record),$=$.parent;return{name:x,path:b,params:y,matched:C,meta:mergeMetaFields(C)}}return e.forEach(f=>a(f)),{addRoute:a,resolve:d,removeRoute:s,getRoutes:l,getRecordMatcher:o}}function paramsFromLocation(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function normalizeRouteRecord(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:normalizeRecordProps(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function normalizeRecordProps(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function isAliasRecord(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function mergeMetaFields(e){return e.reduce((t,n)=>assign$1(t,n.meta),{})}function mergeOptions(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function isSameParam(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function checkSameParams(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(isSameParam.bind(null,n)))return warn$3(`Alias "${t.record.path}" and the original record: "${e.record.path}" should have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(isSameParam.bind(null,n)))return warn$3(`Alias "${t.record.path}" and the original record: "${e.record.path}" should have the exact same param named "${n.name}"`)}function checkMissingParamsInAbsolutePath(e,t){for(const n of t.keys)if(!e.keys.find(isSameParam.bind(null,n)))return warn$3(`Absolute path "${e.record.path}" should have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function isRecordChildOf(e,t){return t.children.some(n=>n===e||isRecordChildOf(e,n))}const HASH_RE=/#/g,AMPERSAND_RE=/&/g,SLASH_RE=/\//g,EQUAL_RE=/=/g,IM_RE=/\?/g,PLUS_RE=/\+/g,ENC_BRACKET_OPEN_RE=/%5B/g,ENC_BRACKET_CLOSE_RE=/%5D/g,ENC_CARET_RE=/%5E/g,ENC_BACKTICK_RE=/%60/g,ENC_CURLY_OPEN_RE=/%7B/g,ENC_PIPE_RE=/%7C/g,ENC_CURLY_CLOSE_RE=/%7D/g,ENC_SPACE_RE=/%20/g;function commonEncode(e){return encodeURI(""+e).replace(ENC_PIPE_RE,"|").replace(ENC_BRACKET_OPEN_RE,"[").replace(ENC_BRACKET_CLOSE_RE,"]")}function encodeHash(e){return commonEncode(e).replace(ENC_CURLY_OPEN_RE,"{").replace(ENC_CURLY_CLOSE_RE,"}").replace(ENC_CARET_RE,"^")}function encodeQueryValue(e){return commonEncode(e).replace(PLUS_RE,"%2B").replace(ENC_SPACE_RE,"+").replace(HASH_RE,"%23").replace(AMPERSAND_RE,"%26").replace(ENC_BACKTICK_RE,"`").replace(ENC_CURLY_OPEN_RE,"{").replace(ENC_CURLY_CLOSE_RE,"}").replace(ENC_CARET_RE,"^")}function encodeQueryKey(e){return encodeQueryValue(e).replace(EQUAL_RE,"%3D")}function encodePath(e){return commonEncode(e).replace(HASH_RE,"%23").replace(IM_RE,"%3F")}function encodeParam(e){return e==null?"":encodePath(e).replace(SLASH_RE,"%2F")}function decode(e){try{return decodeURIComponent(""+e)}catch(t){warn$3(`Error decoding "${e}". Using original value`)}return""+e}function parseQuery(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const a=r[o].replace(PLUS_RE," "),s=a.indexOf("="),l=decode(s<0?a:a.slice(0,s)),u=s<0?null:decode(a.slice(s+1));if(l in t){let d=t[l];Array.isArray(d)||(d=t[l]=[d]),d.push(u)}else t[l]=u}return t}function stringifyQuery(e){let t="";for(let n in e){const r=e[n];if(n=encodeQueryKey(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(a=>a&&encodeQueryValue(a)):[r&&encodeQueryValue(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function normalizeQuery(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}function useCallbacks(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function guardToPromiseFn(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,l)=>{const u=m=>{m===!1?l(createRouterError(4,{from:n,to:t})):m instanceof Error?l(m):isRouteLocation(m)?l(createRouterError(2,{from:t,to:m})):(a&&r.enterCallbacks[o]===a&&typeof m=="function"&&a.push(m),s())},d=e.call(r&&r.instances[o],t,n,canOnlyBeCalledOnce(u,t,n));let f=Promise.resolve(d);if(e.length<3&&(f=f.then(u)),e.length>2){const m=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof d=="object"&&"then"in d)f=f.then(g=>u._called?g:(warn$3(m),Promise.reject(new Error("Invalid navigation guard"))));else if(d!==void 0&&!u._called){warn$3(m),l(new Error("Invalid navigation guard"));return}}f.catch(m=>l(m))})}function canOnlyBeCalledOnce(e,t,n){let r=0;return function(){r++===1&&warn$3(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,r===1&&e.apply(null,arguments)}}function extractComponentsGuards(e,t,n,r){const o=[];for(const a of e)for(const s in a.components){let l=a.components[s];{if(!l||typeof l!="object"&&typeof l!="function")throw warn$3(`Component "${s}" in record with path "${a.path}" is not a valid component. Received "${String(l)}".`),new Error("Invalid route component");if("then"in l){warn$3(`Component "${s}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=l;l=()=>u}else l.__asyncLoader&&!l.__warnedDefineAsync&&(l.__warnedDefineAsync=!0,warn$3(`Component "${s}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!a.instances[s]))if(isRouteComponent(l)){const d=(l.__vccOpts||l)[t];d&&o.push(guardToPromiseFn(d,n,r,a,s))}else{let u=l();"catch"in u||(warn$3(`Component "${s}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),o.push(()=>u.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${a.path}"`));const f=isESModule(d)?d.default:d;a.components[s]=f;const g=(f.__vccOpts||f)[t];return g&&guardToPromiseFn(g,n,r,a,s)()}))}}return o}function isRouteComponent(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function useLink(e){const t=inject(routerKey),n=inject(routeLocationKey),r=computed(()=>t.resolve(unref(e.to))),o=computed(()=>{const{matched:u}=r.value,{length:d}=u,f=u[d-1],m=n.matched;if(!f||!m.length)return-1;const g=m.findIndex(isSameRouteRecord.bind(null,f));if(g>-1)return g;const y=getOriginalPath(u[d-2]);return d>1&&getOriginalPath(f)===y&&m[m.length-1].path!==y?m.findIndex(isSameRouteRecord.bind(null,u[d-2])):g}),a=computed(()=>o.value>-1&&includesParams(n.params,r.value.params)),s=computed(()=>o.value>-1&&o.value===n.matched.length-1&&isSameRouteLocationParams(n.params,r.value.params));function l(u={}){return guardEvent(u)?t[unref(e.replace)?"replace":"push"](unref(e.to)).catch(noop$1):Promise.resolve()}if(isBrowser$2){const u=getCurrentInstance();if(u){const d={route:r.value,isActive:a.value,isExactActive:s.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(d),watchEffect(()=>{d.route=r.value,d.isActive=a.value,d.isExactActive=s.value},{flush:"post"})}}return{route:r,href:computed(()=>r.value.href),isActive:a,isExactActive:s,navigate:l}}const RouterLinkImpl=defineComponent({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink,setup(e,{slots:t}){const n=reactive(useLink(e)),{options:r}=inject(routerKey),o=computed(()=>({[getLinkClass(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[getLinkClass(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:h("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},a)}}}),RouterLink=RouterLinkImpl;function guardEvent(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function includesParams(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some((a,s)=>a!==o[s]))return!1}return!0}function getOriginalPath(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const getLinkClass=(e,t,n)=>e!=null?e:t!=null?t:n,RouterViewImpl=defineComponent({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){warnDeprecatedUsage();const r=inject(routerViewLocationKey),o=computed(()=>e.route||r.value),a=inject(viewDepthKey,0),s=computed(()=>o.value.matched[a]);provide(viewDepthKey,a+1),provide(matchedRouteKey,s),provide(routerViewLocationKey,o);const l=ref();return watch(()=>[l.value,s.value,e.name],([u,d,f],[m,g,y])=>{d&&(d.instances[f]=u,g&&g!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),u&&d&&(!g||!isSameRouteRecord(d,g)||!m)&&(d.enterCallbacks[f]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=o.value,d=s.value,f=d&&d.components[e.name],m=e.name;if(!f)return normalizeSlot(n.default,{Component:f,route:u});const g=d.props[e.name],y=g?g===!0?u.params:typeof g=="function"?g(u):g:null,x=h(f,assign$1({},y,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(d.instances[m]=null)},ref:l}));if(isBrowser$2&&x.ref){const C={depth:a,name:d.name,path:d.path,meta:d.meta};(Array.isArray(x.ref)?x.ref.map(E=>E.i):[x.ref.i]).forEach(E=>{E.__vrv_devtools=C})}return normalizeSlot(n.default,{Component:x,route:u})||x}}});function normalizeSlot(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const RouterView=RouterViewImpl;function warnDeprecatedUsage(){const e=getCurrentInstance(),t=e.parent&&e.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const n=t==="KeepAlive"?"keep-alive":"transition";warn$3(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function formatRouteLocation(e,t){const n=assign$1({},e,{matched:e.matched.map(r=>omit$1(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function formatDisplay$1(e){return{_custom:{display:e}}}let routerId=0;function addDevtools(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const r=routerId++;setupDevtoolsPlugin({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},o=>{o.on.inspectComponent((f,m)=>{f.instanceData&&f.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:formatRouteLocation(t.currentRoute.value,"Current Route")})}),o.on.visitComponentTree(({treeNode:f,componentInstance:m})=>{if(m.__vrv_devtools){const g=m.__vrv_devtools;f.tags.push({label:(g.name?`${g.name.toString()}: `:"")+g.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:PINK_500})}Array.isArray(m.__vrl_devtools)&&(m.__devtoolsApi=o,m.__vrl_devtools.forEach(g=>{let y=ORANGE_400,b="";g.isExactActive?(y=LIME_500,b="This is exactly active"):g.isActive&&(y=BLUE_600,b="This link is active"),f.tags.push({label:g.route.path,textColor:0,tooltip:b,backgroundColor:y})}))}),watch(t.currentRoute,()=>{u(),o.notifyComponentUpdate(),o.sendInspectorTree(l),o.sendInspectorState(l)});const a="router:navigations:"+r;o.addTimelineLayer({id:a,label:`Router${r?" "+r:""} Navigations`,color:4237508}),t.onError((f,m)=>{o.addTimelineEvent({layerId:a,event:{title:"Error during Navigation",subtitle:m.fullPath,logType:"error",time:o.now(),data:{error:f},groupId:m.meta.__navigationId}})});let s=0;t.beforeEach((f,m)=>{const g={guard:formatDisplay$1("beforeEach"),from:formatRouteLocation(m,"Current Location during this navigation"),to:formatRouteLocation(f,"Target location")};Object.defineProperty(f.meta,"__navigationId",{value:s++}),o.addTimelineEvent({layerId:a,event:{time:o.now(),title:"Start of navigation",subtitle:f.fullPath,data:g,groupId:f.meta.__navigationId}})}),t.afterEach((f,m,g)=>{const y={guard:formatDisplay$1("afterEach")};g?(y.failure={_custom:{type:Error,readOnly:!0,display:g?g.message:"",tooltip:"Navigation Failure",value:g}},y.status=formatDisplay$1("\u274C")):y.status=formatDisplay$1("\u2705"),y.from=formatRouteLocation(m,"Current Location during this navigation"),y.to=formatRouteLocation(f,"Target location"),o.addTimelineEvent({layerId:a,event:{title:"End of navigation",subtitle:f.fullPath,time:o.now(),data:y,logType:g?"warning":"default",groupId:f.meta.__navigationId}})});const l="router-inspector:"+r;o.addInspector({id:l,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!d)return;const f=d;let m=n.getRoutes().filter(g=>!g.parent);m.forEach(resetMatchStateOnRouteRecord),f.filter&&(m=m.filter(g=>isRouteMatching(g,f.filter.toLowerCase()))),m.forEach(g=>markRouteRecordActive(g,t.currentRoute.value)),f.rootNodes=m.map(formatRouteRecordForInspector)}let d;o.on.getInspectorTree(f=>{d=f,f.app===e&&f.inspectorId===l&&u()}),o.on.getInspectorState(f=>{if(f.app===e&&f.inspectorId===l){const g=n.getRoutes().find(y=>y.record.__vd_id===f.nodeId);g&&(f.state={options:formatRouteRecordMatcherForStateInspector(g)})}}),o.sendInspectorTree(l),o.sendInspectorState(l)})}function modifierForKey(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function formatRouteRecordMatcherForStateInspector(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(r=>`${r.name}${modifierForKey(r)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(r=>r.record.path)}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const PINK_500=15485081,BLUE_600=2450411,LIME_500=8702998,CYAN_400=2282478,ORANGE_400=16486972,DARK=6710886;function formatRouteRecordForInspector(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:CYAN_400}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:ORANGE_400}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:PINK_500}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:LIME_500}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:BLUE_600}),n.redirect&&t.push({label:"redirect: "+(typeof n.redirect=="string"?n.redirect:"Object"),textColor:16777215,backgroundColor:DARK});let r=n.__vd_id;return r==null&&(r=String(routeRecordId++),n.__vd_id=r),{id:r,label:n.path,tags:t,children:e.children.map(formatRouteRecordForInspector)}}let routeRecordId=0;const EXTRACT_REGEXP_RE=/^\/(.*)\/([a-z]*)$/;function markRouteRecordActive(e,t){const n=t.matched.length&&isSameRouteRecord(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(r=>isSameRouteRecord(r,e.record))),e.children.forEach(r=>markRouteRecordActive(r,t))}function resetMatchStateOnRouteRecord(e){e.__vd_match=!1,e.children.forEach(resetMatchStateOnRouteRecord)}function isRouteMatching(e,t){const n=String(e.re).match(EXTRACT_REGEXP_RE);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(s=>isRouteMatching(s,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const o=e.record.path.toLowerCase(),a=decode(o);return!t.startsWith("/")&&(a.includes(t)||o.includes(t))||a.startsWith(t)||o.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(s=>isRouteMatching(s,t))}function omit$1(e,t){const n={};for(const r in e)t.includes(r)||(n[r]=e[r]);return n}function createRouter(e){const t=createRouterMatcher(e.routes,e),n=e.parseQuery||parseQuery,r=e.stringifyQuery||stringifyQuery,o=e.history;if(!o)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const a=useCallbacks(),s=useCallbacks(),l=useCallbacks(),u=shallowRef(START_LOCATION_NORMALIZED);let d=START_LOCATION_NORMALIZED;isBrowser$2&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=applyToParams.bind(null,H=>""+H),m=applyToParams.bind(null,encodeParam),g=applyToParams.bind(null,decode);function y(H,te){let Y,ne;return isRouteName(H)?(Y=t.getRecordMatcher(H),ne=te):ne=H,t.addRoute(ne,Y)}function b(H){const te=t.getRecordMatcher(H);te?t.removeRoute(te):warn$3(`Cannot remove non-existent route "${String(H)}"`)}function x(){return t.getRoutes().map(H=>H.record)}function C(H){return!!t.getRecordMatcher(H)}function $(H,te){if(te=assign$1({},te||u.value),typeof H=="string"){const ve=parseURL(n,H,te.path),Se=t.resolve({path:ve.path},te),R=o.createHref(ve.fullPath);return R.startsWith("//")?warn$3(`Location "${H}" resolved to "${R}". A resolved location cannot start with multiple slashes.`):Se.matched.length||warn$3(`No match found for location with path "${H}"`),assign$1(ve,Se,{params:g(Se.params),hash:decode(ve.hash),redirectedFrom:void 0,href:R})}let Y;if("path"in H)"params"in H&&!("name"in H)&&Object.keys(H.params).length&&warn$3(`Path "${H.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),Y=assign$1({},H,{path:parseURL(n,H.path,te.path).path});else{const ve=assign$1({},H.params);for(const Se in ve)ve[Se]==null&&delete ve[Se];Y=assign$1({},H,{params:m(H.params)}),te.params=m(te.params)}const ne=t.resolve(Y,te),se=H.hash||"";se&&!se.startsWith("#")&&warn$3(`A \`hash\` should always start with the character "#". Replace "${se}" with "#${se}".`),ne.params=f(g(ne.params));const _e=stringifyURL(r,assign$1({},H,{hash:encodeHash(se),path:ne.path})),me=o.createHref(_e);return me.startsWith("//")?warn$3(`Location "${H}" resolved to "${me}". A resolved location cannot start with multiple slashes.`):ne.matched.length||warn$3(`No match found for location with path "${"path"in H?H.path:H}"`),assign$1({fullPath:_e,hash:se,query:r===stringifyQuery?normalizeQuery(H.query):H.query||{}},ne,{redirectedFrom:void 0,href:me})}function E(H){return typeof H=="string"?parseURL(n,H,u.value.path):assign$1({},H)}function N(H,te){if(d!==H)return createRouterError(8,{from:te,to:H})}function S(H){return _(H)}function k(H){return S(assign$1(E(H),{replace:!0}))}function A(H){const te=H.matched[H.matched.length-1];if(te&&te.redirect){const{redirect:Y}=te;let ne=typeof Y=="function"?Y(H):Y;if(typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=E(ne):{path:ne},ne.params={}),!("path"in ne)&&!("name"in ne))throw warn$3(`Invalid redirect found:
${JSON.stringify(ne,null,2)}
 when navigating to "${H.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return assign$1({query:H.query,hash:H.hash,params:H.params},ne)}}function _(H,te){const Y=d=$(H),ne=u.value,se=H.state,_e=H.force,me=H.replace===!0,ve=A(Y);if(ve)return _(assign$1(E(ve),{state:se,force:_e,replace:me}),te||Y);const Se=Y;Se.redirectedFrom=te;let R;return!_e&&isSameRouteLocation(r,ne,Y)&&(R=createRouterError(16,{to:Se,from:ne}),be(ne,ne,!0,!1)),(R?Promise.resolve(R):I(Se,ne)).catch(M=>isNavigationFailure(M)?isNavigationFailure(M,2)?M:ye(M):J(M,Se,ne)).then(M=>{if(M){if(isNavigationFailure(M,2))return isSameRouteLocation(r,$(M.to),Se)&&te&&(te._count=te._count?te._count+1:1)>10?(warn$3(`Detected an infinite redirection in a navigation guard when going from "${ne.fullPath}" to "${Se.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):_(assign$1(E(M.to),{state:se,force:_e,replace:me}),te||Se)}else M=j(Se,ne,!0,me,se);return O(Se,ne,M),M})}function P(H,te){const Y=N(H,te);return Y?Promise.reject(Y):Promise.resolve()}function I(H,te){let Y;const[ne,se,_e]=extractChangingRecords(H,te);Y=extractComponentsGuards(ne.reverse(),"beforeRouteLeave",H,te);for(const ve of ne)ve.leaveGuards.forEach(Se=>{Y.push(guardToPromiseFn(Se,H,te))});const me=P.bind(null,H,te);return Y.push(me),runGuardQueue(Y).then(()=>{Y=[];for(const ve of a.list())Y.push(guardToPromiseFn(ve,H,te));return Y.push(me),runGuardQueue(Y)}).then(()=>{Y=extractComponentsGuards(se,"beforeRouteUpdate",H,te);for(const ve of se)ve.updateGuards.forEach(Se=>{Y.push(guardToPromiseFn(Se,H,te))});return Y.push(me),runGuardQueue(Y)}).then(()=>{Y=[];for(const ve of H.matched)if(ve.beforeEnter&&!te.matched.includes(ve))if(Array.isArray(ve.beforeEnter))for(const Se of ve.beforeEnter)Y.push(guardToPromiseFn(Se,H,te));else Y.push(guardToPromiseFn(ve.beforeEnter,H,te));return Y.push(me),runGuardQueue(Y)}).then(()=>(H.matched.forEach(ve=>ve.enterCallbacks={}),Y=extractComponentsGuards(_e,"beforeRouteEnter",H,te),Y.push(me),runGuardQueue(Y))).then(()=>{Y=[];for(const ve of s.list())Y.push(guardToPromiseFn(ve,H,te));return Y.push(me),runGuardQueue(Y)}).catch(ve=>isNavigationFailure(ve,8)?ve:Promise.reject(ve))}function O(H,te,Y){for(const ne of l.list())ne(H,te,Y)}function j(H,te,Y,ne,se){const _e=N(H,te);if(_e)return _e;const me=te===START_LOCATION_NORMALIZED,ve=isBrowser$2?history.state:{};Y&&(ne||me?o.replace(H.fullPath,assign$1({scroll:me&&ve&&ve.scroll},se)):o.push(H.fullPath,se)),u.value=H,be(H,te,Y,me),ye()}let B;function V(){B=o.listen((H,te,Y)=>{const ne=$(H),se=A(ne);if(se){_(assign$1(se,{replace:!0}),ne).catch(noop$1);return}d=ne;const _e=u.value;isBrowser$2&&saveScrollPosition(getScrollKey(_e.fullPath,Y.delta),computeScrollPosition()),I(ne,_e).catch(me=>isNavigationFailure(me,12)?me:isNavigationFailure(me,2)?(_(me.to,ne).then(ve=>{isNavigationFailure(ve,20)&&!Y.delta&&Y.type===NavigationType.pop&&o.go(-1,!1)}).catch(noop$1),Promise.reject()):(Y.delta&&o.go(-Y.delta,!1),J(me,ne,_e))).then(me=>{me=me||j(ne,_e,!1),me&&(Y.delta?o.go(-Y.delta,!1):Y.type===NavigationType.pop&&isNavigationFailure(me,20)&&o.go(-1,!1)),O(ne,_e,me)}).catch(noop$1)})}let L=useCallbacks(),G=useCallbacks(),z;function J(H,te,Y){ye(H);const ne=G.list();return ne.length?ne.forEach(se=>se(H,te,Y)):(warn$3("uncaught error during route navigation:"),console.error(H)),Promise.reject(H)}function ie(){return z&&u.value!==START_LOCATION_NORMALIZED?Promise.resolve():new Promise((H,te)=>{L.add([H,te])})}function ye(H){return z||(z=!H,V(),L.list().forEach(([te,Y])=>H?Y(H):te()),L.reset()),H}function be(H,te,Y,ne){const{scrollBehavior:se}=e;if(!isBrowser$2||!se)return Promise.resolve();const _e=!Y&&getSavedScrollPosition(getScrollKey(H.fullPath,0))||(ne||!Y)&&history.state&&history.state.scroll||null;return nextTick().then(()=>se(H,te,_e)).then(me=>me&&scrollToPosition(me)).catch(me=>J(me,H,te))}const Te=H=>o.go(H);let Ae;const Oe=new Set;return{currentRoute:u,addRoute:y,removeRoute:b,hasRoute:C,getRoutes:x,resolve:$,options:e,push:S,replace:k,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:a.add,beforeResolve:s.add,afterEach:l.add,onError:G.add,isReady:ie,install(H){const te=this;H.component("RouterLink",RouterLink),H.component("RouterView",RouterView),H.config.globalProperties.$router=te,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>unref(u)}),isBrowser$2&&!Ae&&u.value===START_LOCATION_NORMALIZED&&(Ae=!0,S(o.location).catch(se=>{warn$3("Unexpected error when starting the router:",se)}));const Y={};for(const se in START_LOCATION_NORMALIZED)Y[se]=computed(()=>u.value[se]);H.provide(routerKey,te),H.provide(routeLocationKey,reactive(Y)),H.provide(routerViewLocationKey,u);const ne=H.unmount;Oe.add(H),H.unmount=function(){Oe.delete(H),Oe.size<1&&(d=START_LOCATION_NORMALIZED,B&&B(),u.value=START_LOCATION_NORMALIZED,Ae=!1,z=!1),ne()},isBrowser$2&&addDevtools(H,te,t)}}}function runGuardQueue(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function extractChangingRecords(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let s=0;s<a;s++){const l=t.matched[s];l&&(e.matched.find(d=>isSameRouteRecord(d,l))?r.push(l):n.push(l));const u=e.matched[s];u&&(t.matched.find(d=>isSameRouteRecord(d,u))||o.push(u))}return[n,r,o]}function useRouter(){return inject(routerKey)}function useRoute(){return inject(routeLocationKey)}function createPageLoadingGuard(e){e.beforeEach(()=>{var t;(t=window.$loadingBar)==null||t.start()}),e.afterEach(()=>{setTimeout(()=>{var t;(t=window.$loadingBar)==null||t.finish()},200)}),e.onError(()=>{var t;(t=window.$loadingBar)==null||t.error()})}const baseTitle="Vue Naive Admin";function createPageTitleGuard(e){e.afterEach(t=>{var r;const n=(r=t.meta)==null?void 0:r.title;n?document.title=`${n} | ${baseTitle}`:document.title=baseTitle})}var isVue2=!1;function set(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}function del(e,t){if(Array.isArray(e)){e.splice(t,1);return}delete e[t]}/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let activePinia;const setActivePinia=e=>activePinia=e,piniaSymbol=Symbol("pinia");function isPlainObject$2(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var MutationType;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(MutationType||(MutationType={}));const IS_CLIENT=typeof window!="undefined",_global=(()=>typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null})();function bom(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}function download(e,t,n){const r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){saveAs(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function corsEnabled(e){const t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(n){}return t.status>=200&&t.status<=299}function click(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}const _navigator=typeof navigator=="object"?navigator:{userAgent:""},isMacOSWebView=(()=>/Macintosh/.test(_navigator.userAgent)&&/AppleWebKit/.test(_navigator.userAgent)&&!/Safari/.test(_navigator.userAgent))(),saveAs=IS_CLIENT?typeof HTMLAnchorElement!="undefined"&&"download"in HTMLAnchorElement.prototype&&!isMacOSWebView?downloadSaveAs:"msSaveOrOpenBlob"in _navigator?msSaveAs:fileSaverSaveAs:()=>{};function downloadSaveAs(e,t="download",n){const r=document.createElement("a");r.download=t,r.rel="noopener",typeof e=="string"?(r.href=e,r.origin!==location.origin?corsEnabled(r.href)?download(e,t,n):(r.target="_blank",click(r)):click(r)):(r.href=URL.createObjectURL(e),setTimeout(function(){URL.revokeObjectURL(r.href)},4e4),setTimeout(function(){click(r)},0))}function msSaveAs(e,t="download",n){if(typeof e=="string")if(corsEnabled(e))download(e,t,n);else{const r=document.createElement("a");r.href=e,r.target="_blank",setTimeout(function(){click(r)})}else navigator.msSaveOrOpenBlob(bom(e,n),t)}function fileSaverSaveAs(e,t,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),typeof e=="string")return download(e,t,n);const o=e.type==="application/octet-stream",a=/constructor/i.test(String(_global.HTMLElement))||"safari"in _global,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||o&&a||isMacOSWebView)&&typeof FileReader!="undefined"){const l=new FileReader;l.onloadend=function(){let u=l.result;if(typeof u!="string")throw r=null,new Error("Wrong reader.result type");u=s?u:u.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=u:location.assign(u),r=null},l.readAsDataURL(e)}else{const l=URL.createObjectURL(e);r?r.location.assign(l):location.href=l,r=null,setTimeout(function(){URL.revokeObjectURL(l)},4e4)}}function toastMessage(e,t){const n="\u{1F34D} "+e;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(n,t):t==="error"?console.error(n):t==="warn"?console.warn(n):console.log(n)}function isPinia(e){return"_a"in e&&"install"in e}function checkClipboardAccess(){if(!("clipboard"in navigator))return toastMessage("Your browser doesn't support the Clipboard API","error"),!0}function checkNotFocusedError(e){return e instanceof Error&&e.message.toLowerCase().includes("document is not focused")?(toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0):!1}function actionGlobalCopyState(e){return Be(this,null,function*(){if(!checkClipboardAccess())try{yield navigator.clipboard.writeText(JSON.stringify(e.state.value)),toastMessage("Global state copied to clipboard.")}catch(t){if(checkNotFocusedError(t))return;toastMessage("Failed to serialize the state. Check the console for more details.","error"),console.error(t)}})}function actionGlobalPasteState(e){return Be(this,null,function*(){if(!checkClipboardAccess())try{e.state.value=JSON.parse(yield navigator.clipboard.readText()),toastMessage("Global state pasted from clipboard.")}catch(t){if(checkNotFocusedError(t))return;toastMessage("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(t)}})}function actionGlobalSaveState(e){return Be(this,null,function*(){try{saveAs(new Blob([JSON.stringify(e.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(t){toastMessage("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}})}let fileInput;function getFileOpener(){fileInput||(fileInput=document.createElement("input"),fileInput.type="file",fileInput.accept=".json");function e(){return new Promise((t,n)=>{fileInput.onchange=()=>Be(this,null,function*(){const r=fileInput.files;if(!r)return t(null);const o=r.item(0);return t(o?{text:yield o.text(),file:o}:null)}),fileInput.oncancel=()=>t(null),fileInput.onerror=n,fileInput.click()})}return e}function actionGlobalOpenStateFile(e){return Be(this,null,function*(){try{const n=yield(yield getFileOpener())();if(!n)return;const{text:r,file:o}=n;e.state.value=JSON.parse(r),toastMessage(`Global state imported from "${o.name}".`)}catch(t){toastMessage("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}})}function formatDisplay(e){return{_custom:{display:e}}}const PINIA_ROOT_LABEL="\u{1F34D} Pinia (root)",PINIA_ROOT_ID="_root";function formatStoreForInspectorTree(e){return isPinia(e)?{id:PINIA_ROOT_ID,label:PINIA_ROOT_LABEL}:{id:e.$id,label:e.$id}}function formatStoreForInspectorState(e){if(isPinia(e)){const n=Array.from(e._s.keys()),r=e._s;return{state:n.map(a=>({editable:!0,key:a,value:e.state.value[a]})),getters:n.filter(a=>r.get(a)._getters).map(a=>{const s=r.get(a);return{editable:!1,key:a,value:s._getters.reduce((l,u)=>(l[u]=s[u],l),{})}})}}const t={state:Object.keys(e.$state).map(n=>({editable:!0,key:n,value:e.$state[n]}))};return e._getters&&e._getters.length&&(t.getters=e._getters.map(n=>({editable:!1,key:n,value:e[n]}))),e._customProperties.size&&(t.customProperties=Array.from(e._customProperties).map(n=>({editable:!0,key:n,value:e[n]}))),t}function formatEventData(e){return e?Array.isArray(e)?e.reduce((t,n)=>(t.keys.push(n.key),t.operations.push(n.type),t.oldValue[n.key]=n.oldValue,t.newValue[n.key]=n.newValue,t),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:formatDisplay(e.type),key:formatDisplay(e.key),oldValue:e.oldValue,newValue:e.newValue}:{}}function formatMutationType(e){switch(e){case MutationType.direct:return"mutation";case MutationType.patchFunction:return"$patch";case MutationType.patchObject:return"$patch";default:return"unknown"}}let isTimelineActive=!0;const componentStateTypes=[],MUTATIONS_LAYER_ID="pinia:mutations",INSPECTOR_ID="pinia",getStoreType=e=>"\u{1F34D} "+e;function registerPiniaDevtools(e,t){setupDevtoolsPlugin({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes,app:e},n=>{typeof n.now!="function"&&toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.addTimelineLayer({id:MUTATIONS_LAYER_ID,label:"Pinia \u{1F34D}",color:15064968}),n.addInspector({id:INSPECTOR_ID,label:"Pinia \u{1F34D}",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{actionGlobalCopyState(t)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:()=>Be(this,null,function*(){yield actionGlobalPasteState(t),n.sendInspectorTree(INSPECTOR_ID),n.sendInspectorState(INSPECTOR_ID)}),tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{actionGlobalSaveState(t)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:()=>Be(this,null,function*(){yield actionGlobalOpenStateFile(t),n.sendInspectorTree(INSPECTOR_ID),n.sendInspectorState(INSPECTOR_ID)}),tooltip:"Import the state from a JSON file"}]}),n.on.inspectComponent((r,o)=>{const a=r.componentInstance&&r.componentInstance.proxy;if(a&&a._pStores){const s=r.componentInstance.proxy._pStores;Object.values(s).forEach(l=>{r.instanceData.state.push({type:getStoreType(l.$id),key:"state",editable:!0,value:l._isOptionsAPI?{_custom:{value:l.$state,actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>l.$reset()}]}}:l.$state}),l._getters&&l._getters.length&&r.instanceData.state.push({type:getStoreType(l.$id),key:"getters",editable:!1,value:l._getters.reduce((u,d)=>{try{u[d]=l[d]}catch(f){u[d]=f}return u},{})})})}}),n.on.getInspectorTree(r=>{if(r.app===e&&r.inspectorId===INSPECTOR_ID){let o=[t];o=o.concat(Array.from(t._s.values())),r.rootNodes=(r.filter?o.filter(a=>"$id"in a?a.$id.toLowerCase().includes(r.filter.toLowerCase()):PINIA_ROOT_LABEL.toLowerCase().includes(r.filter.toLowerCase())):o).map(formatStoreForInspectorTree)}}),n.on.getInspectorState(r=>{if(r.app===e&&r.inspectorId===INSPECTOR_ID){const o=r.nodeId===PINIA_ROOT_ID?t:t._s.get(r.nodeId);if(!o)return;o&&(r.state=formatStoreForInspectorState(o))}}),n.on.editInspectorState((r,o)=>{if(r.app===e&&r.inspectorId===INSPECTOR_ID){const a=r.nodeId===PINIA_ROOT_ID?t:t._s.get(r.nodeId);if(!a)return toastMessage(`store "${r.nodeId}" not found`,"error");const{path:s}=r;isPinia(a)?s.unshift("state"):(s.length!==1||!a._customProperties.has(s[0])||s[0]in a.$state)&&s.unshift("$state"),isTimelineActive=!1,r.set(a,s,r.state.value),isTimelineActive=!0}}),n.on.editComponentState(r=>{if(r.type.startsWith("\u{1F34D}")){const o=r.type.replace(/^🍍\s*/,""),a=t._s.get(o);if(!a)return toastMessage(`store "${o}" not found`,"error");const{path:s}=r;if(s[0]!=="state")return toastMessage(`Invalid path for store "${o}":
${s}
Only state can be modified.`);s[0]="$state",isTimelineActive=!1,r.set(a,s,r.state.value),isTimelineActive=!0}})})}function addStoreToDevtools(e,t){componentStateTypes.includes(getStoreType(t.$id))||componentStateTypes.push(getStoreType(t.$id)),setupDevtoolsPlugin({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes,app:e,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},n=>{const r=typeof n.now=="function"?n.now.bind(n):Date.now;t.$onAction(({after:s,onError:l,name:u,args:d})=>{const f=runningActionId++;n.addTimelineEvent({layerId:MUTATIONS_LAYER_ID,event:{time:r(),title:"\u{1F6EB} "+u,subtitle:"start",data:{store:formatDisplay(t.$id),action:formatDisplay(u),args:d},groupId:f}}),s(m=>{activeAction=void 0,n.addTimelineEvent({layerId:MUTATIONS_LAYER_ID,event:{time:r(),title:"\u{1F6EC} "+u,subtitle:"end",data:{store:formatDisplay(t.$id),action:formatDisplay(u),args:d,result:m},groupId:f}})}),l(m=>{activeAction=void 0,n.addTimelineEvent({layerId:MUTATIONS_LAYER_ID,event:{time:r(),logType:"error",title:"\u{1F4A5} "+u,subtitle:"end",data:{store:formatDisplay(t.$id),action:formatDisplay(u),args:d,error:m},groupId:f}})})},!0),t._customProperties.forEach(s=>{watch(()=>unref(t[s]),(l,u)=>{n.notifyComponentUpdate(),n.sendInspectorState(INSPECTOR_ID),isTimelineActive&&n.addTimelineEvent({layerId:MUTATIONS_LAYER_ID,event:{time:r(),title:"Change",subtitle:s,data:{newValue:l,oldValue:u},groupId:activeAction}})},{deep:!0})}),t.$subscribe(({events:s,type:l},u)=>{if(n.notifyComponentUpdate(),n.sendInspectorState(INSPECTOR_ID),!isTimelineActive)return;const d={time:r(),title:formatMutationType(l),data:Ne({store:formatDisplay(t.$id)},formatEventData(s)),groupId:activeAction};activeAction=void 0,l===MutationType.patchFunction?d.subtitle="\u2935\uFE0F":l===MutationType.patchObject?d.subtitle="\u{1F9E9}":s&&!Array.isArray(s)&&(d.subtitle=s.type),s&&(d.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:s}}),n.addTimelineEvent({layerId:MUTATIONS_LAYER_ID,event:d})},{detached:!0,flush:"sync"});const o=t._hotUpdate;t._hotUpdate=markRaw(s=>{o(s),n.addTimelineEvent({layerId:MUTATIONS_LAYER_ID,event:{time:r(),title:"\u{1F525} "+t.$id,subtitle:"HMR update",data:{store:formatDisplay(t.$id),info:formatDisplay("HMR update")}}}),n.notifyComponentUpdate(),n.sendInspectorTree(INSPECTOR_ID),n.sendInspectorState(INSPECTOR_ID)});const{$dispose:a}=t;t.$dispose=()=>{a(),n.notifyComponentUpdate(),n.sendInspectorTree(INSPECTOR_ID),n.sendInspectorState(INSPECTOR_ID),n.getSettings().logStoreChanges&&toastMessage(`Disposed "${t.$id}" store \u{1F5D1}`)},n.notifyComponentUpdate(),n.sendInspectorTree(INSPECTOR_ID),n.sendInspectorState(INSPECTOR_ID),n.getSettings().logStoreChanges&&toastMessage(`"${t.$id}" store installed \u{1F195}`)})}let runningActionId=0,activeAction;function patchActionForGrouping(e,t){const n=t.reduce((r,o)=>(r[o]=toRaw(e)[o],r),{});for(const r in n)e[r]=function(){const o=runningActionId,a=new Proxy(e,{get(...s){return activeAction=o,Reflect.get(...s)},set(...s){return activeAction=o,Reflect.set(...s)}});return n[r].apply(a,arguments)}}function devtoolsPlugin({app:e,store:t,options:n}){if(!t.$id.startsWith("__hot:")){if(n.state&&(t._isOptionsAPI=!0),typeof n.state=="function"){patchActionForGrouping(t,Object.keys(n.actions));const r=t._hotUpdate;toRaw(t)._hotUpdate=function(o){r.apply(this,arguments),patchActionForGrouping(t,Object.keys(o._hmrPayload.actions))}}addStoreToDevtools(e,t)}}function createPinia(){const e=effectScope(!0),t=e.run(()=>ref({}));let n=[],r=[];const o=markRaw({install(a){setActivePinia(o),o._a=a,a.provide(piniaSymbol,o),a.config.globalProperties.$pinia=o,IS_CLIENT&&registerPiniaDevtools(a,o),r.forEach(s=>n.push(s)),r=[]},use(a){return!this._a&&!isVue2?r.push(a):n.push(a),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return IS_CLIENT&&o.use(devtoolsPlugin),o}function patchObject(e,t){for(const n in t){const r=t[n];if(!(n in e))continue;const o=e[n];isPlainObject$2(o)&&isPlainObject$2(r)&&!isRef(r)&&!isReactive(r)?e[n]=patchObject(o,r):e[n]=r}return e}const noop=()=>{};function addSubscription(e,t,n,r=noop){e.push(t);const o=()=>{const a=e.indexOf(t);a>-1&&(e.splice(a,1),r())};return!n&&getCurrentInstance()&&onUnmounted(o),o}function triggerSubscriptions(e,...t){e.slice().forEach(n=>{n(...t)})}function mergeReactiveObjects(e,t){for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],o=e[n];isPlainObject$2(o)&&isPlainObject$2(r)&&e.hasOwnProperty(n)&&!isRef(r)&&!isReactive(r)?e[n]=mergeReactiveObjects(o,r):e[n]=r}return e}const skipHydrateSymbol=Symbol("pinia:skipHydration");function shouldHydrate(e){return!isPlainObject$2(e)||!e.hasOwnProperty(skipHydrateSymbol)}const{assign}=Object;function isComputed(e){return!!(isRef(e)&&e.effect)}function createOptionsStore(e,t,n,r){const{state:o,actions:a,getters:s}=t,l=n.state.value[e];let u;function d(){!l&&!r&&(n.state.value[e]=o?o():{});const f=toRefs(r?ref(o?o():{}).value:n.state.value[e]);return assign(f,a,Object.keys(s||{}).reduce((m,g)=>(m[g]=markRaw(computed(()=>{setActivePinia(n);const y=n._s.get(e);return s[g].call(y,y)})),m),{}))}return u=createSetupStore(e,d,t,n,r),u.$reset=function(){const m=o?o():{};this.$patch(g=>{assign(g,m)})},u}function createSetupStore(e,t,n={},r,o){let a;const s=n.state,l=assign({actions:{}},n);if(!r._e.active)throw new Error("Pinia destroyed");const u={deep:!0};u.onTrigger=P=>{d?y=P:d==!1&&!A._hotUpdating&&(Array.isArray(y)?y.push(P):console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."))};let d,f,m=markRaw([]),g=markRaw([]),y;const b=r.state.value[e];!s&&!b&&!o&&(r.state.value[e]={});const x=ref({});function C(P){let I;d=f=!1,y=[],typeof P=="function"?(P(r.state.value[e]),I={type:MutationType.patchFunction,storeId:e,events:y}):(mergeReactiveObjects(r.state.value[e],P),I={type:MutationType.patchObject,payload:P,storeId:e,events:y}),nextTick().then(()=>{d=!0}),f=!0,triggerSubscriptions(m,I,r.state.value[e])}const $=()=>{throw new Error(`\u{1F34D}: Store "${e}" is build using the setup syntax and does not implement $reset().`)};function E(){a.stop(),m=[],g=[],r._s.delete(e)}function N(P,I){return function(){setActivePinia(r);const O=Array.from(arguments),j=[],B=[];function V(z){j.push(z)}function L(z){B.push(z)}triggerSubscriptions(g,{args:O,name:P,store:A,after:V,onError:L});let G;try{G=I.apply(this&&this.$id===e?this:A,O)}catch(z){throw triggerSubscriptions(B,z),z}return G instanceof Promise?G.then(z=>(triggerSubscriptions(j,z),z)).catch(z=>(triggerSubscriptions(B,z),Promise.reject(z))):(triggerSubscriptions(j,G),G)}}const S=markRaw({actions:{},getters:{},state:[],hotState:x}),k={_p:r,$id:e,$onAction:addSubscription.bind(null,g),$patch:C,$reset:$,$subscribe(P,I={}){const O=addSubscription(m,P,I.detached,()=>j()),j=a.run(()=>watch(()=>r.state.value[e],B=>{(I.flush==="sync"?f:d)&&P({storeId:e,type:MutationType.direct,events:y},B)},assign({},u,I)));return O},$dispose:E},A=reactive(assign(IS_CLIENT?{_customProperties:markRaw(new Set),_hmrPayload:S}:{},k));r._s.set(e,A);const _=r._e.run(()=>(a=effectScope(),a.run(()=>t())));for(const P in _){const I=_[P];if(isRef(I)&&!isComputed(I)||isReactive(I))o?set(x.value,P,toRef(_,P)):s||(b&&shouldHydrate(I)&&(isRef(I)?I.value=b[P]:mergeReactiveObjects(I,b[P])),r.state.value[e][P]=I),S.state.push(P);else if(typeof I=="function"){const O=o?I:N(P,I);_[P]=O,S.actions[P]=I,l.actions[P]=I}else isComputed(I)&&(S.getters[P]=s?n.getters[P]:I,IS_CLIENT&&(_._getters||(_._getters=markRaw([]))).push(P))}assign(A,_),assign(toRaw(A),_),Object.defineProperty(A,"$state",{get:()=>o?x.value:r.state.value[e],set:P=>{if(o)throw new Error("cannot set hotState");C(I=>{assign(I,P)})}});{A._hotUpdate=markRaw(I=>{A._hotUpdating=!0,I._hmrPayload.state.forEach(O=>{if(O in A.$state){const j=I.$state[O],B=A.$state[O];typeof j=="object"&&isPlainObject$2(j)&&isPlainObject$2(B)?patchObject(j,B):I.$state[O]=B}set(A,O,toRef(I.$state,O))}),Object.keys(A.$state).forEach(O=>{O in I.$state||del(A,O)}),d=!1,f=!1,r.state.value[e]=toRef(I._hmrPayload,"hotState"),f=!0,nextTick().then(()=>{d=!0});for(const O in I._hmrPayload.actions){const j=I[O];set(A,O,N(O,j))}for(const O in I._hmrPayload.getters){const j=I._hmrPayload.getters[O],B=s?computed(()=>(setActivePinia(r),j.call(A,A))):j;set(A,O,B)}Object.keys(A._hmrPayload.getters).forEach(O=>{O in I._hmrPayload.getters||del(A,O)}),Object.keys(A._hmrPayload.actions).forEach(O=>{O in I._hmrPayload.actions||del(A,O)}),A._hmrPayload=I._hmrPayload,A._getters=I._getters,A._hotUpdating=!1});const P={writable:!0,configurable:!0,enumerable:!1};IS_CLIENT&&["_p","_hmrPayload","_getters","_customProperties"].forEach(I=>{Object.defineProperty(A,I,Ne({value:A[I]},P))})}return r._p.forEach(P=>{if(IS_CLIENT){const I=a.run(()=>P({store:A,app:r._a,pinia:r,options:l}));Object.keys(I||{}).forEach(O=>A._customProperties.add(O)),assign(A,I)}else assign(A,a.run(()=>P({store:A,app:r._a,pinia:r,options:l})))}),A.$state&&typeof A.$state=="object"&&typeof A.$state.constructor=="function"&&!A.$state.constructor.toString().includes("[native code]")&&console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${A.$id}".`),b&&s&&n.hydrate&&n.hydrate(A.$state,b),d=!0,f=!0,A}function defineStore(e,t,n){let r,o;const a=typeof t=="function";typeof e=="string"?(r=e,o=a?n:t):(o=e,r=e.id);function s(l,u){const d=getCurrentInstance();if(l=l||d&&inject(piniaSymbol),l&&setActivePinia(l),!activePinia)throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);l=activePinia,l._s.has(r)||(a?createSetupStore(r,t,o,l):createOptionsStore(r,o,l),s._pinia=l);const f=l._s.get(r);if(u){const m="__hot:"+r,g=a?createSetupStore(m,t,o,l,!0):createOptionsStore(m,assign({},o),l,!0);u._hotUpdate(g),delete l.state.value[m],l._s.delete(m)}if(IS_CLIENT&&d&&d.proxy&&!u){const m=d.proxy,g="_pStores"in m?m._pStores:m._pStores={};g[r]=f}return f}return s.$id=r,s}var commonjsGlobal=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},axios$2={exports:{}},bind$2=function(t,n){return function(){for(var o=new Array(arguments.length),a=0;a<o.length;a++)o[a]=arguments[a];return t.apply(n,o)}},bind$1=bind$2,toString$1=Object.prototype.toString;function isArray$2(e){return toString$1.call(e)==="[object Array]"}function isUndefined(e){return typeof e=="undefined"}function isBuffer$2(e){return e!==null&&!isUndefined(e)&&e.constructor!==null&&!isUndefined(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function isArrayBuffer(e){return toString$1.call(e)==="[object ArrayBuffer]"}function isFormData(e){return typeof FormData!="undefined"&&e instanceof FormData}function isArrayBufferView(e){var t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function isString(e){return typeof e=="string"}function isNumber(e){return typeof e=="number"}function isObject$1(e){return e!==null&&typeof e=="object"}function isPlainObject$1(e){if(toString$1.call(e)!=="[object Object]")return!1;var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function isDate(e){return toString$1.call(e)==="[object Date]"}function isFile(e){return toString$1.call(e)==="[object File]"}function isBlob(e){return toString$1.call(e)==="[object Blob]"}function isFunction$1(e){return toString$1.call(e)==="[object Function]"}function isStream(e){return isObject$1(e)&&isFunction$1(e.pipe)}function isURLSearchParams(e){return typeof URLSearchParams!="undefined"&&e instanceof URLSearchParams}function trim(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function isStandardBrowserEnv(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function forEach(e,t){if(!(e===null||typeof e=="undefined"))if(typeof e!="object"&&(e=[e]),isArray$2(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function merge$3(){var e={};function t(o,a){isPlainObject$1(e[a])&&isPlainObject$1(o)?e[a]=merge$3(e[a],o):isPlainObject$1(o)?e[a]=merge$3({},o):isArray$2(o)?e[a]=o.slice():e[a]=o}for(var n=0,r=arguments.length;n<r;n++)forEach(arguments[n],t);return e}function extend(e,t,n){return forEach(t,function(o,a){n&&typeof o=="function"?e[a]=bind$1(o,n):e[a]=o}),e}function stripBOM(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}var utils$d={isArray:isArray$2,isArrayBuffer,isBuffer:isBuffer$2,isFormData,isArrayBufferView,isString,isNumber,isObject:isObject$1,isPlainObject:isPlainObject$1,isUndefined,isDate,isFile,isBlob,isFunction:isFunction$1,isStream,isURLSearchParams,isStandardBrowserEnv,forEach,merge:merge$3,extend,trim,stripBOM},utils$c=utils$d;function encode(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var buildURL$2=function(t,n,r){if(!n)return t;var o;if(r)o=r(n);else if(utils$c.isURLSearchParams(n))o=n.toString();else{var a=[];utils$c.forEach(n,function(u,d){u===null||typeof u=="undefined"||(utils$c.isArray(u)?d=d+"[]":u=[u],utils$c.forEach(u,function(m){utils$c.isDate(m)?m=m.toISOString():utils$c.isObject(m)&&(m=JSON.stringify(m)),a.push(encode(d)+"="+encode(m))}))}),o=a.join("&")}if(o){var s=t.indexOf("#");s!==-1&&(t=t.slice(0,s)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t},utils$b=utils$d;function InterceptorManager$1(){this.handlers=[]}InterceptorManager$1.prototype.use=function(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};InterceptorManager$1.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};InterceptorManager$1.prototype.forEach=function(t){utils$b.forEach(this.handlers,function(r){r!==null&&t(r)})};var InterceptorManager_1=InterceptorManager$1,utils$a=utils$d,normalizeHeaderName$1=function(t,n){utils$a.forEach(t,function(o,a){a!==n&&a.toUpperCase()===n.toUpperCase()&&(t[n]=o,delete t[a])})},enhanceError$2=function(t,n,r,o,a){return t.config=n,r&&(t.code=r),t.request=o,t.response=a,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t},enhanceError$1=enhanceError$2,createError$2=function(t,n,r,o,a){var s=new Error(t);return enhanceError$1(s,n,r,o,a)},createError$1=createError$2,settle$1=function(t,n,r){var o=r.config.validateStatus;!r.status||!o||o(r.status)?t(r):n(createError$1("Request failed with status code "+r.status,r.config,null,r.request,r))},utils$9=utils$d,cookies$1=utils$9.isStandardBrowserEnv()?function(){return{write:function(n,r,o,a,s,l){var u=[];u.push(n+"="+encodeURIComponent(r)),utils$9.isNumber(o)&&u.push("expires="+new Date(o).toGMTString()),utils$9.isString(a)&&u.push("path="+a),utils$9.isString(s)&&u.push("domain="+s),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){var r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),isAbsoluteURL$1=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)},combineURLs$1=function(t,n){return n?t.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):t},isAbsoluteURL=isAbsoluteURL$1,combineURLs=combineURLs$1,buildFullPath$1=function(t,n){return t&&!isAbsoluteURL(n)?combineURLs(t,n):n},utils$8=utils$d,ignoreDuplicateOf=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],parseHeaders$1=function(t){var n={},r,o,a;return t&&utils$8.forEach(t.split(`
`),function(l){if(a=l.indexOf(":"),r=utils$8.trim(l.substr(0,a)).toLowerCase(),o=utils$8.trim(l.substr(a+1)),r){if(n[r]&&ignoreDuplicateOf.indexOf(r)>=0)return;r==="set-cookie"?n[r]=(n[r]?n[r]:[]).concat([o]):n[r]=n[r]?n[r]+", "+o:o}}),n},utils$7=utils$d,isURLSameOrigin$1=utils$7.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),r;function o(a){var s=a;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){var l=utils$7.isString(s)?o(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),utils$6=utils$d,settle=settle$1,cookies=cookies$1,buildURL$1=buildURL$2,buildFullPath=buildFullPath$1,parseHeaders=parseHeaders$1,isURLSameOrigin=isURLSameOrigin$1,createError=createError$2,xhr=function(t){return new Promise(function(r,o){var a=t.data,s=t.headers,l=t.responseType;utils$6.isFormData(a)&&delete s["Content-Type"];var u=new XMLHttpRequest;if(t.auth){var d=t.auth.username||"",f=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.Authorization="Basic "+btoa(d+":"+f)}var m=buildFullPath(t.baseURL,t.url);u.open(t.method.toUpperCase(),buildURL$1(m,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function g(){if(!!u){var b="getAllResponseHeaders"in u?parseHeaders(u.getAllResponseHeaders()):null,x=!l||l==="text"||l==="json"?u.responseText:u.response,C={data:x,status:u.status,statusText:u.statusText,headers:b,config:t,request:u};settle(r,o,C),u=null}}if("onloadend"in u?u.onloadend=g:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(g)},u.onabort=function(){!u||(o(createError("Request aborted",t,"ECONNABORTED",u)),u=null)},u.onerror=function(){o(createError("Network Error",t,null,u)),u=null},u.ontimeout=function(){var x="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(x=t.timeoutErrorMessage),o(createError(x,t,t.transitional&&t.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",u)),u=null},utils$6.isStandardBrowserEnv()){var y=(t.withCredentials||isURLSameOrigin(m))&&t.xsrfCookieName?cookies.read(t.xsrfCookieName):void 0;y&&(s[t.xsrfHeaderName]=y)}"setRequestHeader"in u&&utils$6.forEach(s,function(x,C){typeof a=="undefined"&&C.toLowerCase()==="content-type"?delete s[C]:u.setRequestHeader(C,x)}),utils$6.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),l&&l!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",t.onDownloadProgress),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(x){!u||(u.abort(),o(x),u=null)}),a||(a=null),u.send(a)})},utils$5=utils$d,normalizeHeaderName=normalizeHeaderName$1,enhanceError=enhanceError$2,DEFAULT_CONTENT_TYPE={"Content-Type":"application/x-www-form-urlencoded"};function setContentTypeIfUnset(e,t){!utils$5.isUndefined(e)&&utils$5.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function getDefaultAdapter(){var e;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(e=xhr),e}function stringifySafely(e,t,n){if(utils$5.isString(e))try{return(t||JSON.parse)(e),utils$5.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}var defaults$3={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:getDefaultAdapter(),transformRequest:[function(t,n){return normalizeHeaderName(n,"Accept"),normalizeHeaderName(n,"Content-Type"),utils$5.isFormData(t)||utils$5.isArrayBuffer(t)||utils$5.isBuffer(t)||utils$5.isStream(t)||utils$5.isFile(t)||utils$5.isBlob(t)?t:utils$5.isArrayBufferView(t)?t.buffer:utils$5.isURLSearchParams(t)?(setContentTypeIfUnset(n,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):utils$5.isObject(t)||n&&n["Content-Type"]==="application/json"?(setContentTypeIfUnset(n,"application/json"),stringifySafely(t)):t}],transformResponse:[function(t){var n=this.transitional,r=n&&n.silentJSONParsing,o=n&&n.forcedJSONParsing,a=!r&&this.responseType==="json";if(a||o&&utils$5.isString(t)&&t.length)try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?enhanceError(s,this,"E_JSON_PARSE"):s}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300}};defaults$3.headers={common:{Accept:"application/json, text/plain, */*"}};utils$5.forEach(["delete","get","head"],function(t){defaults$3.headers[t]={}});utils$5.forEach(["post","put","patch"],function(t){defaults$3.headers[t]=utils$5.merge(DEFAULT_CONTENT_TYPE)});var defaults_1=defaults$3,utils$4=utils$d,defaults$2=defaults_1,transformData$1=function(t,n,r){var o=this||defaults$2;return utils$4.forEach(r,function(s){t=s.call(o,t,n)}),t},isCancel$1=function(t){return!!(t&&t.__CANCEL__)},utils$3=utils$d,transformData=transformData$1,isCancel=isCancel$1,defaults$1=defaults_1;function throwIfCancellationRequested(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var dispatchRequest$1=function(t){throwIfCancellationRequested(t),t.headers=t.headers||{},t.data=transformData.call(t,t.data,t.headers,t.transformRequest),t.headers=utils$3.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),utils$3.forEach(["delete","get","head","post","put","patch","common"],function(o){delete t.headers[o]});var n=t.adapter||defaults$1.adapter;return n(t).then(function(o){return throwIfCancellationRequested(t),o.data=transformData.call(t,o.data,o.headers,t.transformResponse),o},function(o){return isCancel(o)||(throwIfCancellationRequested(t),o&&o.response&&(o.response.data=transformData.call(t,o.response.data,o.response.headers,t.transformResponse))),Promise.reject(o)})},utils$2=utils$d,mergeConfig$2=function(t,n){n=n||{};var r={},o=["url","method","data"],a=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],l=["validateStatus"];function u(g,y){return utils$2.isPlainObject(g)&&utils$2.isPlainObject(y)?utils$2.merge(g,y):utils$2.isPlainObject(y)?utils$2.merge({},y):utils$2.isArray(y)?y.slice():y}function d(g){utils$2.isUndefined(n[g])?utils$2.isUndefined(t[g])||(r[g]=u(void 0,t[g])):r[g]=u(t[g],n[g])}utils$2.forEach(o,function(y){utils$2.isUndefined(n[y])||(r[y]=u(void 0,n[y]))}),utils$2.forEach(a,d),utils$2.forEach(s,function(y){utils$2.isUndefined(n[y])?utils$2.isUndefined(t[y])||(r[y]=u(void 0,t[y])):r[y]=u(void 0,n[y])}),utils$2.forEach(l,function(y){y in n?r[y]=u(t[y],n[y]):y in t&&(r[y]=u(void 0,t[y]))});var f=o.concat(a).concat(s).concat(l),m=Object.keys(t).concat(Object.keys(n)).filter(function(y){return f.indexOf(y)===-1});return utils$2.forEach(m,d),r};const name="axios",version="0.21.4",description="Promise based HTTP client for the browser and node.js",main="index.js",scripts={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository={type:"git",url:"https://github.com/axios/axios.git"},keywords=["xhr","http","ajax","promise","node"],author="Matt Zabriskie",license="MIT",bugs={url:"https://github.com/axios/axios/issues"},homepage="https://axios-http.com",devDependencies={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr="dist/axios.min.js",unpkg="dist/axios.min.js",typings="./index.d.ts",dependencies={"follow-redirects":"^1.14.0"},bundlesize=[{path:"./dist/axios.min.js",threshold:"5kB"}];var require$$0={name,version,description,main,scripts,repository,keywords,author,license,bugs,homepage,devDependencies,browser,jsdelivr,unpkg,typings,dependencies,bundlesize},pkg=require$$0,validators$1={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){validators$1[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});var deprecatedWarnings={},currentVerArr=pkg.version.split(".");function isOlderVersion(e,t){for(var n=t?t.split("."):currentVerArr,r=e.split("."),o=0;o<3;o++){if(n[o]>r[o])return!0;if(n[o]<r[o])return!1}return!1}validators$1.transitional=function(t,n,r){var o=n&&isOlderVersion(n);function a(s,l){return"[Axios v"+pkg.version+"] Transitional option '"+s+"'"+l+(r?". "+r:"")}return function(s,l,u){if(t===!1)throw new Error(a(l," has been removed in "+n));return o&&!deprecatedWarnings[l]&&(deprecatedWarnings[l]=!0,console.warn(a(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,l,u):!0}};function assertOptions(e,t,n){if(typeof e!="object")throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var a=r[o],s=t[a];if(s){var l=e[a],u=l===void 0||s(l,a,e);if(u!==!0)throw new TypeError("option "+a+" must be "+u);continue}if(n!==!0)throw Error("Unknown option "+a)}}var validator$1={isOlderVersion,assertOptions,validators:validators$1},utils$1=utils$d,buildURL=buildURL$2,InterceptorManager=InterceptorManager_1,dispatchRequest=dispatchRequest$1,mergeConfig$1=mergeConfig$2,validator=validator$1,validators=validator.validators;function Axios$1(e){this.defaults=e,this.interceptors={request:new InterceptorManager,response:new InterceptorManager}}Axios$1.prototype.request=function(t){typeof t=="string"?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=mergeConfig$1(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;n!==void 0&&validator.assertOptions(n,{silentJSONParsing:validators.transitional(validators.boolean,"1.0.0"),forcedJSONParsing:validators.transitional(validators.boolean,"1.0.0"),clarifyTimeoutError:validators.transitional(validators.boolean,"1.0.0")},!1);var r=[],o=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(t)===!1||(o=o&&g.synchronous,r.unshift(g.fulfilled,g.rejected))});var a=[];this.interceptors.response.forEach(function(g){a.push(g.fulfilled,g.rejected)});var s;if(!o){var l=[dispatchRequest,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(a),s=Promise.resolve(t);l.length;)s=s.then(l.shift(),l.shift());return s}for(var u=t;r.length;){var d=r.shift(),f=r.shift();try{u=d(u)}catch(m){f(m);break}}try{s=dispatchRequest(u)}catch(m){return Promise.reject(m)}for(;a.length;)s=s.then(a.shift(),a.shift());return s};Axios$1.prototype.getUri=function(t){return t=mergeConfig$1(this.defaults,t),buildURL(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")};utils$1.forEach(["delete","get","head","options"],function(t){Axios$1.prototype[t]=function(n,r){return this.request(mergeConfig$1(r||{},{method:t,url:n,data:(r||{}).data}))}});utils$1.forEach(["post","put","patch"],function(t){Axios$1.prototype[t]=function(n,r,o){return this.request(mergeConfig$1(o||{},{method:t,url:n,data:r}))}});var Axios_1=Axios$1;function Cancel$1(e){this.message=e}Cancel$1.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};Cancel$1.prototype.__CANCEL__=!0;var Cancel_1=Cancel$1,Cancel=Cancel_1;function CancelToken(e){if(typeof e!="function")throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(o){t=o});var n=this;e(function(o){n.reason||(n.reason=new Cancel(o),t(n.reason))})}CancelToken.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};CancelToken.source=function(){var t,n=new CancelToken(function(o){t=o});return{token:n,cancel:t}};var CancelToken_1=CancelToken,spread=function(t){return function(r){return t.apply(null,r)}},isAxiosError=function(t){return typeof t=="object"&&t.isAxiosError===!0},utils=utils$d,bind=bind$2,Axios=Axios_1,mergeConfig=mergeConfig$2,defaults=defaults_1;function createInstance(e){var t=new Axios(e),n=bind(Axios.prototype.request,t);return utils.extend(n,Axios.prototype,t),utils.extend(n,t),n}var axios$1=createInstance(defaults);axios$1.Axios=Axios;axios$1.create=function(t){return createInstance(mergeConfig(axios$1.defaults,t))};axios$1.Cancel=Cancel_1;axios$1.CancelToken=CancelToken_1;axios$1.isCancel=isCancel$1;axios$1.all=function(t){return Promise.all(t)};axios$1.spread=spread;axios$1.isAxiosError=isAxiosError;axios$2.exports=axios$1;axios$2.exports.default=axios$1;var axios=axios$2.exports;function isUndef(e){return typeof e=="undefined"}function isNull(e){return e===null}function isNullOrUndef(e){return isNull(e)||isUndef(e)}function isExternal(e){return/^(https?:|mailto:|tel:)/.test(e)}class WebStorage{constructor(t){this.storage=t.storage,this.prefixKey=t.prefixKey}getKey(t){return`${this.prefixKey}${t}`.toUpperCase()}set(t,n,r){const o=JSON.stringify({value:n,time:Date.now(),expire:isNullOrUndef(r)?null:new Date().getTime()+r*1e3});this.storage.setItem(this.getKey(t),o)}get(t){const{value:n}=this.getItem(t,{});return n}getItem(t,n=null){const r=this.storage.getItem(this.getKey(t));if(!r)return n;try{const o=JSON.parse(r),{value:a,time:s,expire:l}=o;return isNullOrUndef(l)||l>new Date().getTime()?{value:a,time:s}:(this.remove(t),n)}catch(o){return this.remove(t),n}}remove(t){this.storage.removeItem(this.getKey(t))}clear(){this.storage.clear()}}function createWebStorage({prefixKey:e="",storage:t=sessionStorage}){return new WebStorage({prefixKey:e,storage:t})}const createLocalStorage=function(e={}){return createWebStorage({prefixKey:e.prefixKey||"",storage:localStorage})},createSessionStorage=function(e={}){return createWebStorage({prefixKey:e.prefixKey||"",storage:sessionStorage})},login=e=>defAxios({url:"/auth/login",method:"post",data:e}),refreshToken=()=>defAxios({url:"/auth/refreshToken",method:"post"}),TOKEN_CODE="access_token",DURATION=6*60*60,lsToken=createLocalStorage();function getToken(){return lsToken.get(TOKEN_CODE)}function setToken(e){lsToken.set(TOKEN_CODE,e,DURATION)}function removeToken(){lsToken.remove(TOKEN_CODE)}function refreshAccessToken(){return Be(this,null,function*(){const e=lsToken.getItem(TOKEN_CODE);if(!e)return;const{time:t}=e;if(new Date().getTime()-t>1e3*60*30)try{const n=yield refreshToken();n.code===0&&setToken(n.data.token)}catch(n){console.error(n)}})}const WITHOUT_TOKEN_API=[{url:"/auth/login",method:"POST"}];function isWithoutToken({url:e,method:t=""}){return WITHOUT_TOKEN_API.some(n=>n.url===e&&n.method===t.toUpperCase())}function setupInterceptor(e){e.interceptors.request.use(t=>Be(this,null,function*(){if(t.method==="get"&&(t.params=Fe(Ne({},t.params),{t:new Date().getTime()})),isWithoutToken(t))return t;const n=getToken();if(n)return t.headers.Authorization="Bearer "+n,t;const{currentRoute:r}=router;return router.replace({path:"/login",query:Fe(Ne({},r.query),{redirect:r.path})}),Promise.reject({code:"-1",message:"\u672A\u767B\u5F55"})}),t=>Promise.reject(t)),e.interceptors.response.use(t=>t==null?void 0:t.data,t=>{var o;let{code:n,message:r}=(o=t.response)==null?void 0:o.data;return Promise.reject({code:n,message:r})})}function createAxios(e={}){var r;const t=((r=window.__APP__GLOB__CONF__)==null?void 0:r.VITE_APP_GLOB_BASE_API)||"/api",n=axios.create({timeout:e.timeout||12e4,baseURL:e.baseURL||t});return setupInterceptor(n),n}const defAxios=createAxios();var Vt;createAxios({baseURL:((Vt=window.__APP__GLOB__CONF__)==null?void 0:Vt.VITE_APP_GLOB_BASE_API_TEST)||"/api-test"});function getUser(e){return defAxios(e?{url:`/user/${e}`,method:"get"}:{url:"/user",method:"get"})}const useUserStore=defineStore("user",{state(){return{userInfo:{}}},getters:{userId(){var e;return(e=this.userInfo)==null?void 0:e.id},name(){var e;return(e=this.userInfo)==null?void 0:e.name},avatar(){var e;return(e=this.userInfo)==null?void 0:e.avatar},role(){var e;return((e=this.userInfo)==null?void 0:e.role)||[]}},actions:{getUserInfo(){return Be(this,null,function*(){try{const e=yield getUser();if(e.code===0){const{id:t,name:n,avatar:r,role:o}=e.data;return this.userInfo={id:t,name:n,avatar:r,role:o},Promise.resolve(e.data)}else return Promise.reject(e.message)}catch(e){return console.error(e),Promise.reject(e.message)}})},logout(){removeToken(),this.userInfo={}},setUserInfo(e={}){this.userInfo=Ne(Ne({},this.userInfo),e)}}}),scriptRel="modulepreload",seen={},base$1="/vue-naive-admin/",__vitePreload=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${base$1}${r}`,r in seen)return;seen[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":scriptRel,o||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),o)return new Promise((l,u)=>{s.addEventListener("load",l),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};let onceCbs=[];const paramsMap=new WeakMap;function flushOnceCallbacks(){onceCbs.forEach(e=>e(...paramsMap.get(e))),onceCbs=[]}function beforeNextFrameOnce(e,...t){paramsMap.set(e,t),!onceCbs.includes(e)&&onceCbs.push(e)===1&&requestAnimationFrame(flushOnceCallbacks)}function happensIn(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}function depx(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function pxfy(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function getMargin(e,t){const n=e.trim().split(/\s+/g),r={top:n[0]};switch(n.length){case 1:r.right=n[0],r.bottom=n[0],r.left=n[0];break;case 2:r.right=n[1],r.left=n[1],r.bottom=n[0];break;case 3:r.right=n[1],r.bottom=n[2],r.left=n[1];break;case 4:r.right=n[1],r.bottom=n[2],r.left=n[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return t===void 0?r:r[t]}function getGap(e,t){const[n,r]=e.split(" ");return t?t==="row"?n:r:{row:n,col:r||n}}var colors={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"};const prefix$1="^\\s*",suffix="\\s*$",float="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",hex="([0-9A-Fa-f])",dhex="([0-9A-Fa-f]{2})",rgbRegex=new RegExp(`${prefix$1}rgb\\s*\\(${float},${float},${float}\\)${suffix}`),rgbaRegex=new RegExp(`${prefix$1}rgba\\s*\\(${float},${float},${float},${float}\\)${suffix}`),sHexRegex=new RegExp(`${prefix$1}#${hex}${hex}${hex}${suffix}`),hexRegex=new RegExp(`${prefix$1}#${dhex}${dhex}${dhex}${suffix}`),sHexaRegex=new RegExp(`${prefix$1}#${hex}${hex}${hex}${hex}${suffix}`),hexaRegex=new RegExp(`${prefix$1}#${dhex}${dhex}${dhex}${dhex}${suffix}`);function parseHex(e){return parseInt(e,16)}function rgba(e){try{let t;if(t=hexRegex.exec(e))return[parseHex(t[1]),parseHex(t[2]),parseHex(t[3]),1];if(t=rgbRegex.exec(e))return[roundChannel(t[1]),roundChannel(t[5]),roundChannel(t[9]),1];if(t=rgbaRegex.exec(e))return[roundChannel(t[1]),roundChannel(t[5]),roundChannel(t[9]),roundAlpha(t[13])];if(t=sHexRegex.exec(e))return[parseHex(t[1]+t[1]),parseHex(t[2]+t[2]),parseHex(t[3]+t[3]),1];if(t=hexaRegex.exec(e))return[parseHex(t[1]),parseHex(t[2]),parseHex(t[3]),roundAlpha(parseHex(t[4])/255)];if(t=sHexaRegex.exec(e))return[parseHex(t[1]+t[1]),parseHex(t[2]+t[2]),parseHex(t[3]+t[3]),roundAlpha(parseHex(t[4]+t[4])/255)];if(e in colors)return rgba(colors[e]);throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(t){throw t}}function normalizeAlpha(e){return e>1?1:e<0?0:e}function stringifyRgba(e,t,n,r){return`rgba(${roundChannel(e)}, ${roundChannel(t)}, ${roundChannel(n)}, ${normalizeAlpha(r)})`}function compositeChannel(e,t,n,r,o){return roundChannel((e*t*(1-r)+n*r)/o)}function composite(e,t){Array.isArray(e)||(e=rgba(e)),Array.isArray(t)||(t=rgba(t));const n=e[3],r=t[3],o=roundAlpha(n+r-n*r);return stringifyRgba(compositeChannel(e[0],n,t[0],r,o),compositeChannel(e[1],n,t[1],r,o),compositeChannel(e[2],n,t[2],r,o),o)}function changeColor(e,t){const[n,r,o,a=1]=Array.isArray(e)?e:rgba(e);return t.alpha?stringifyRgba(n,r,o,t.alpha):stringifyRgba(n,r,o,a)}function scaleColor(e,t){const[n,r,o,a=1]=Array.isArray(e)?e:rgba(e),{lightness:s=1,alpha:l=1}=t;return toRgbaString([n*s,r*s,o*s,a*l])}function roundAlpha(e){const t=Math.round(Number(e)*100)/100;return t>1?1:t<0?0:t}function roundChannel(e){const t=Math.round(Number(e));return t>255?255:t<0?0:t}function toRgbaString(e){const[t,n,r]=e;return 3 in e?`rgba(${roundChannel(t)}, ${roundChannel(n)}, ${roundChannel(r)}, ${roundAlpha(e[3])})`:`rgba(${roundChannel(t)}, ${roundChannel(n)}, ${roundChannel(r)}, 1)`}globalThis&&globalThis.__awaiter;function createId(e=8){return Math.random().toString(16).slice(2,2+e)}function repeat(e,t){const n=[];for(let r=0;r<e;++r)n.push(t);return n}function getSlot$1(e,t="default",n=[]){const o=e.$slots[t];return o===void 0?n:o()}function keep(e,t=[],n){const r={};return t.forEach(o=>{r[o]=e[o]}),Object.assign(r,n)}function omit(e,t=[],n){const r={};return Object.getOwnPropertyNames(e).forEach(a=>{t.includes(a)||(r[a]=e[a])}),Object.assign(r,n)}function flatten$2(e,t=!0,n=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&n.push(createTextVNode(String(r)));return}if(Array.isArray(r)){flatten$2(r,t,n);return}if(r.type===Fragment){if(r.children===null)return;Array.isArray(r.children)&&flatten$2(r.children,t,n)}else r.type!==Comment&&n.push(r)}}),n}function call(e,...t){if(Array.isArray(e))e.forEach(n=>call(n,...t));else return e(...t)}function keysOf(e){return Object.keys(e)}const render$a=(e,...t)=>typeof e=="function"?e(...t):typeof e=="string"?createTextVNode(e):typeof e=="number"?createTextVNode(String(e)):null,warnedMessages=new Set;function warnOnce(e,t){const n=`[naive/${e}]: ${t}`;warnedMessages.has(n)||(warnedMessages.add(n),console.error(n))}function warn$2(e,t){console.error(`[naive/${e}]: ${t}`)}function throwError(e,t){throw new Error(`[naive/${e}]: ${t}`)}const hasWindow=typeof window!="undefined";function getFirstSlotVNode(e,t="default",n=void 0){const r=e[t];if(!r)return warn$2("getFirstSlotVNode",`slot[${t}] is empty`),null;const o=flatten$2(r(n));return o.length===1?o[0]:(warn$2("getFirstSlotVNode",`slot[${t}] should have exactly one child`),null)}function createRefSetter(e){return t=>{t?e.value=t.$el:e.value=null}}function createInjectionKey(e){return e}function ensureValidVNode(e){return e.some(t=>isVNode(t)?!(t.type===Comment||t.type===Fragment&&!ensureValidVNode(t.children)):!0)?e:null}function resolveSlot(e,t){return e&&ensureValidVNode(e())||t()}function resolveSlotWithProps(e,t,n){return e&&ensureValidVNode(e(t))||n(t)}function resolveWrappedSlot(e,t){const n=e&&ensureValidVNode(e());return t(n||null)}function isSlotEmpty(e){return!(e&&ensureValidVNode(e()))}const pureNumberRegex=/^(\d|\.)+$/,numberRegex=/(\d|\.)+/;function formatLength(e,{c:t=1,offset:n=0,attachPx:r=!0}={}){if(typeof e=="number"){const o=(e+n)*t;return o===0?"0":`${o}px`}else if(typeof e=="string")if(pureNumberRegex.test(e)){const o=(Number(e)+n)*t;return r?o===0?"0":`${o}px`:`${o}`}else{const o=numberRegex.exec(e);return o?e.replace(numberRegex,String((Number(o[0])+n)*t)):e}return e}function color2Class(e){return e.replace(/#|\(|\)|,|\s/g,"_")}function ampCount(e){let t=0;for(let n=0;n<e.length;++n)e[n]==="&"&&++t;return t}const separatorRegex=/\s*,(?![^(]*\))\s*/g,extraSpaceRegex=/\s+/g;function resolveSelectorWithAmp(e,t){const n=[];return t.split(separatorRegex).forEach(r=>{let o=ampCount(r);if(o){if(o===1){e.forEach(s=>{n.push(r.replace("&",s))});return}}else{e.forEach(s=>{n.push((s&&s+" ")+r)});return}let a=[r];for(;o--;){const s=[];a.forEach(l=>{e.forEach(u=>{s.push(l.replace("&",u))})}),a=s}a.forEach(s=>n.push(s))}),n}function resolveSelector(e,t){const n=[];return t.split(separatorRegex).forEach(r=>{e.forEach(o=>{n.push((o&&o+" ")+r)})}),n}function parseSelectorPath(e){let t=[""];return e.forEach(n=>{n=n&&n.trim(),n&&(n.includes("&")?t=resolveSelectorWithAmp(t,n):t=resolveSelector(t,n))}),t.join(", ").replace(extraSpaceRegex," ")}function removeElement(e){if(!e)return;const t=e.parentElement;t&&t.removeChild(e)}function queryElement(e){return document.querySelector(`style[cssr-id="${e}"]`)}function createElement(e){const t=document.createElement("style");return t.setAttribute("cssr-id",e),t}function isMediaOrSupports(e){return e?/^\s*@(s|m)/.test(e):!1}const kebabRegex=/[A-Z]/g;function kebabCase(e){return e.replace(kebabRegex,t=>"-"+t.toLowerCase())}function unwrapProperty(e,t="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(n=>t+`  ${kebabCase(n[0])}: ${n[1]};`).join(`
`)+`
`+t+"}":`: ${e};`}function unwrapProperties(e,t,n){return typeof e=="function"?e({context:t.context,props:n}):e}function createStyle(e,t,n,r){if(!t)return"";const o=unwrapProperties(t,n,r);if(!o)return"";if(typeof o=="string")return`${e} {
${o}
}`;const a=Object.keys(o);if(a.length===0)return n.config.keepEmptyBlock?e+` {
}`:"";const s=e?[e+" {"]:[];return a.forEach(l=>{const u=o[l];if(l==="raw"){s.push(`
`+u+`
`);return}l=kebabCase(l),u!=null&&s.push(`  ${l}${unwrapProperty(u)}`)}),e&&s.push("}"),s.join(`
`)}function loopCNodeListWithCallback(e,t,n){!e||e.forEach(r=>{if(Array.isArray(r))loopCNodeListWithCallback(r,t,n);else if(typeof r=="function"){const o=r(t);Array.isArray(o)?loopCNodeListWithCallback(o,t,n):o&&n(o)}else r&&n(r)})}function traverseCNode(e,t,n,r,o,a){const s=e.$;let l="";if(!s||typeof s=="string")isMediaOrSupports(s)?l=s:t.push(s);else if(typeof s=="function"){const f=s({context:r.context,props:o});isMediaOrSupports(f)?l=f:t.push(f)}else if(s.before&&s.before(r.context),!s.$||typeof s.$=="string")isMediaOrSupports(s.$)?l=s.$:t.push(s.$);else if(s.$){const f=s.$({context:r.context,props:o});isMediaOrSupports(f)?l=f:t.push(f)}const u=parseSelectorPath(t),d=createStyle(u,e.props,r,o);l?(n.push(`${l} {`),a&&d&&a.insertRule(`${l} {
${d}
}
`)):(a&&d&&a.insertRule(d),!a&&d.length&&n.push(d)),e.children&&loopCNodeListWithCallback(e.children,{context:r.context,props:o},f=>{if(typeof f=="string"){const m=createStyle(u,{raw:f},r,o);a?a.insertRule(m):n.push(m)}else traverseCNode(f,t,n,r,o,a)}),t.pop(),l&&n.push("}"),s&&s.after&&s.after(r.context)}function render$9(e,t,n,r=!1){const o=[];return traverseCNode(e,[],o,t,n,r?e.instance.__styleSheet:void 0),r?"":o.join(`

`)}function murmur2(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}typeof window!="undefined"&&(window.__cssrContext={});function unmount(e,t,n){const{els:r}=t;if(n===void 0)r.forEach(removeElement),t.els=[];else{const o=queryElement(n);o&&r.includes(o)&&(removeElement(o),t.els=r.filter(a=>a!==o))}}function addElementToList(e,t){e.push(t)}function mount(e,t,n,r,o,a,s,l,u){if(a&&!u){if(n===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const g=window.__cssrContext;g[n]||(g[n]=!0,render$9(t,e,r,a));return}let d;if(n===void 0&&(d=t.render(r),n=murmur2(d)),u){u.adapter(n,d!=null?d:t.render(r));return}const f=queryElement(n);if(f!==null&&!s)return f;const m=f!=null?f:createElement(n);if(d===void 0&&(d=t.render(r)),m.textContent=d,f!==null)return f;if(l){const g=document.head.querySelector(`meta[name="${l}"]`);if(g)return document.head.insertBefore(m,g),addElementToList(t.els,m),m}return o?document.head.insertBefore(m,document.head.querySelector("style, link")):document.head.appendChild(m),addElementToList(t.els,m),m}function wrappedRender(e){return render$9(this,this.instance,e)}function wrappedMount(e={}){const{id:t,ssr:n,props:r,head:o=!1,silent:a=!1,force:s=!1,anchorMetaName:l}=e;return mount(this.instance,this,t,r,o,a,s,l,n)}function wrappedUnmount(e={}){const{id:t}=e;unmount(this.instance,this,t)}const createCNode=function(e,t,n,r){return{instance:e,$:t,props:n,children:r,els:[],render:wrappedRender,mount:wrappedMount,unmount:wrappedUnmount}},c$2=function(e,t,n,r){return Array.isArray(t)?createCNode(e,{$:null},null,t):Array.isArray(n)?createCNode(e,t,null,n):Array.isArray(r)?createCNode(e,t,n,r):createCNode(e,t,n,null)};function CssRender(e={}){let t=null;const n={c:(...r)=>c$2(n,...r),use:(r,...o)=>r.install(n,...o),find:queryElement,context:{},config:e,get __styleSheet(){if(!t){const r=document.createElement("style");return document.head.appendChild(r),t=document.styleSheets[document.styleSheets.length-1],t}return t}};return n}function exists(e,t){if(e===void 0)return!1;if(t){const{context:{ids:n}}=t;return n.has(e)}return queryElement(e)!==null}function plugin$1(e){let t=".",n="__",r="--",o;if(e){let b=e.blockPrefix;b&&(t=b),b=e.elementPrefix,b&&(n=b),b=e.modifierPrefix,b&&(r=b)}const a={install(b){o=b.c;const x=b.context;x.bem={},x.bem.b=null,x.bem.els=null}};function s(b){let x,C;return{before($){x=$.bem.b,C=$.bem.els,$.bem.els=null},after($){$.bem.b=x,$.bem.els=C},$({context:$,props:E}){return b=typeof b=="string"?b:b({context:$,props:E}),$.bem.b=b,`${(E==null?void 0:E.bPrefix)||t}${$.bem.b}`}}}function l(b){let x;return{before(C){x=C.bem.els},after(C){C.bem.els=x},$({context:C,props:$}){return b=typeof b=="string"?b:b({context:C,props:$}),C.bem.els=b.split(",").map(E=>E.trim()),C.bem.els.map(E=>`${($==null?void 0:$.bPrefix)||t}${C.bem.b}${n}${E}`).join(", ")}}}function u(b){return{$({context:x,props:C}){b=typeof b=="string"?b:b({context:x,props:C});const $=b.split(",").map(S=>S.trim());function E(S){return $.map(k=>`&${(C==null?void 0:C.bPrefix)||t}${x.bem.b}${S!==void 0?`${n}${S}`:""}${r}${k}`).join(", ")}const N=x.bem.els;if(N!==null){if(N.length>=2)throw Error(`[css-render/plugin-bem]: m(${b}) is invalid, using modifier inside multiple elements is not allowed`);return E(N[0])}else return E()}}}function d(b){return{$({context:x,props:C}){b=typeof b=="string"?b:b({context:x,props:C});const $=x.bem.els;if($!==null&&$.length>=2)throw Error(`[css-render/plugin-bem]: notM(${b}) is invalid, using modifier inside multiple elements is not allowed`);return`&:not(${(C==null?void 0:C.bPrefix)||t}${x.bem.b}${$!==null&&$.length>0?`${n}${$[0]}`:""}${r}${b})`}}}return Object.assign(a,{cB:(...b)=>o(s(b[0]),b[1],b[2]),cE:(...b)=>o(l(b[0]),b[1],b[2]),cM:(...b)=>o(u(b[0]),b[1],b[2]),cNotM:(...b)=>o(d(b[0]),b[1],b[2])}),a}function createKey(e,t){return e+(t==="default"?"":t.replace(/^[a-z]/,n=>n.toUpperCase()))}createKey("abc","def");const namespace="n",prefix=`.${namespace}-`,elementPrefix="__",modifierPrefix="--",cssr=CssRender(),plugin=plugin$1({blockPrefix:prefix,elementPrefix,modifierPrefix});cssr.use(plugin);const{c:c$1,find}=cssr,{cB,cE,cM,cNotM}=plugin;function insideModal(e){return c$1(({props:{bPrefix:t}})=>`${t||prefix}modal, ${t||prefix}drawer`,[e])}function insidePopover(e){return c$1(({props:{bPrefix:t}})=>`${t||prefix}popover:not(${t||prefix}tooltip)`,[e])}function asModal(e){return c$1(({props:{bPrefix:t}})=>`&${t||prefix}modal`,e)}const cCB=(...e)=>c$1(">",[cB(...e)]);function useFalseUntilTruthy(e){const t=ref(!!e.value);if(t.value)return readonly(t);const n=watch(e,r=>{r&&(t.value=!0,n())});return readonly(t)}function useMemo(e){const t=computed(e),n=ref(t.value);return watch(t,r=>{n.value=r}),typeof e=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(r){e.set(r)}}}function hasInstance(){return getCurrentInstance()!==null}const isBrowser$1=typeof window!="undefined";let fontsReady,isFontReady;const init=()=>{var e,t;fontsReady=isBrowser$1?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,isFontReady=!1,fontsReady!==void 0?fontsReady.then(()=>{isFontReady=!0}):isFontReady=!0};init();function onFontsReady(e){if(isFontReady)return;let t=!1;onMounted(()=>{isFontReady||fontsReady==null||fontsReady.then(()=>{t||e()})}),onBeforeUnmount(()=>{t=!0})}const traps={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function createTrapHandler(e,t,n){if(e==="mousemoveoutside"){const r=o=>{t.contains(o.target)||n(o)};return{mousemove:r,touchstart:r}}else if(e==="clickoutside"){let r=!1;const o=s=>{r=!t.contains(s.target)},a=s=>{!r||t.contains(s.target)||n(s)};return{mousedown:o,mouseup:a,touchstart:o,touchend:a}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function ensureTrapHandlers(e,t,n){const r=traps[e];let o=r.get(t);o===void 0&&r.set(t,o=new WeakMap);let a=o.get(n);return a===void 0&&o.set(n,a=createTrapHandler(e,t,n)),a}function trapOn(e,t,n,r){if(e==="mousemoveoutside"||e==="clickoutside"){const o=ensureTrapHandlers(e,t,n);return Object.keys(o).forEach(a=>{on(a,document,o[a],r)}),!0}return!1}function trapOff(e,t,n,r){if(e==="mousemoveoutside"||e==="clickoutside"){const o=ensureTrapHandlers(e,t,n);return Object.keys(o).forEach(a=>{off(a,document,o[a],r)}),!0}return!1}function createDelegate(){if(typeof window=="undefined")return{on:()=>{},off:()=>{}};const e=new WeakMap,t=new WeakMap;function n(){e.set(this,!0)}function r(){e.set(this,!0),t.set(this,!0)}function o(_,P,I){const O=_[P];return _[P]=function(){return I.apply(_,arguments),O.apply(_,arguments)},_}function a(_,P){_[P]=Event.prototype[P]}const s=new WeakMap,l=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function u(){var _;return(_=s.get(this))!==null&&_!==void 0?_:null}function d(_,P){l!==void 0&&Object.defineProperty(_,"currentTarget",{configurable:!0,enumerable:!0,get:P!=null?P:l.get})}const f={bubble:{},capture:{}},m={};function g(){const _=function(P){const{type:I,eventPhase:O,target:j,bubbles:B}=P;if(O===2)return;const V=O===1?"capture":"bubble";let L=j;const G=[];for(;L===null&&(L=window),G.push(L),L!==window;)L=L.parentNode||null;const z=f.capture[I],J=f.bubble[I];if(o(P,"stopPropagation",n),o(P,"stopImmediatePropagation",r),d(P,u),V==="capture"){if(z===void 0)return;for(let ie=G.length-1;ie>=0&&!e.has(P);--ie){const ye=G[ie],be=z.get(ye);if(be!==void 0){s.set(P,ye);for(const Te of be){if(t.has(P))break;Te(P)}}if(ie===0&&!B&&J!==void 0){const Te=J.get(ye);if(Te!==void 0)for(const Ae of Te){if(t.has(P))break;Ae(P)}}}}else if(V==="bubble"){if(J===void 0)return;for(let ie=0;ie<G.length&&!e.has(P);++ie){const ye=G[ie],be=J.get(ye);if(be!==void 0){s.set(P,ye);for(const Te of be){if(t.has(P))break;Te(P)}}}}a(P,"stopPropagation"),a(P,"stopImmediatePropagation"),d(P)};return _.displayName="evtdUnifiedHandler",_}function y(){const _=function(P){const{type:I,eventPhase:O}=P;if(O!==2)return;const j=m[I];j!==void 0&&j.forEach(B=>B(P))};return _.displayName="evtdUnifiedWindowEventHandler",_}const b=g(),x=y();function C(_,P){const I=f[_];return I[P]===void 0&&(I[P]=new Map,window.addEventListener(P,b,_==="capture")),I[P]}function $(_){return m[_]===void 0&&(m[_]=new Set,window.addEventListener(_,x)),m[_]}function E(_,P){let I=_.get(P);return I===void 0&&_.set(P,I=new Set),I}function N(_,P,I,O){const j=f[P][I];if(j!==void 0){const B=j.get(_);if(B!==void 0&&B.has(O))return!0}return!1}function S(_,P){const I=m[_];return!!(I!==void 0&&I.has(P))}function k(_,P,I,O){let j;if(typeof O=="object"&&O.once===!0?j=z=>{A(_,P,j,O),I(z)}:j=I,trapOn(_,P,j,O))return;const V=O===!0||typeof O=="object"&&O.capture===!0?"capture":"bubble",L=C(V,_),G=E(L,P);if(G.has(j)||G.add(j),P===window){const z=$(_);z.has(j)||z.add(j)}}function A(_,P,I,O){if(trapOff(_,P,I,O))return;const B=O===!0||typeof O=="object"&&O.capture===!0,V=B?"capture":"bubble",L=C(V,_),G=E(L,P);if(P===window&&!N(P,B?"bubble":"capture",_,I)&&S(_,I)){const J=m[_];J.delete(I),J.size===0&&(window.removeEventListener(_,x),m[_]=void 0)}G.has(I)&&G.delete(I),G.size===0&&L.delete(P),L.size===0&&(window.removeEventListener(_,b,V==="capture"),f[V][_]=void 0)}return{on:k,off:A}}const{on,off}=createDelegate(),mousePositionRef=ref(null);function clickHandler(e){if(e.clientX>0||e.clientY>0)mousePositionRef.value={x:e.clientX,y:e.clientY};else{const{target:t}=e;if(t instanceof Element){const{left:n,top:r,width:o,height:a}=t.getBoundingClientRect();n>0||r>0?mousePositionRef.value={x:n+o/2,y:r+a/2}:mousePositionRef.value={x:0,y:0}}else mousePositionRef.value=null}}let usedCount$1=0,managable$1=!0;function useClickPosition(){if(!isBrowser$1)return readonly(ref(null));usedCount$1===0&&on("click",document,clickHandler,!0);const e=()=>{usedCount$1+=1};return managable$1&&(managable$1=hasInstance())?(onBeforeMount(e),onBeforeUnmount(()=>{usedCount$1-=1,usedCount$1===0&&off("click",document,clickHandler,!0)})):e(),readonly(mousePositionRef)}const clickedTimeRef=ref(void 0);let usedCount=0;function handleClick(){clickedTimeRef.value=Date.now()}let managable=!0;function useClicked(e){if(!isBrowser$1)return readonly(ref(!1));const t=ref(!1);let n=null;function r(){n!==null&&window.clearTimeout(n)}function o(){r(),t.value=!0,n=window.setTimeout(()=>{t.value=!1},e)}usedCount===0&&on("click",window,handleClick,!0);const a=()=>{usedCount+=1,on("click",window,o,!0)};return managable&&(managable=hasInstance())?(onBeforeMount(a),onBeforeUnmount(()=>{usedCount-=1,usedCount===0&&off("click",window,handleClick,!0),off("click",window,o,!0),r()})):a(),readonly(t)}function useMergedState(e,t){return watch(e,n=>{n!==void 0&&(t.value=n)}),computed(()=>e.value===void 0?t.value:e.value)}function isMounted(){const e=ref(!1);return onMounted(()=>{e.value=!0}),readonly(e)}function useCompitable(e,t){return computed(()=>{for(const n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}const isIos=(typeof window=="undefined"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function useIsIos(){return isIos}function useKeyboard(e={},t){const n=reactive({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:o}=e,a=u=>{switch(u.key){case"Control":n.ctrl=!0;break;case"Meta":n.command=!0,n.win=!0;break;case"Shift":n.shift=!0;break;case"Tab":n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(d=>{if(d!==u.key)return;const f=r[d];if(typeof f=="function")f(u);else{const{stop:m=!1,prevent:g=!1}=f;m&&u.stopPropagation(),g&&u.preventDefault(),f.handler(u)}})},s=u=>{switch(u.key){case"Control":n.ctrl=!1;break;case"Meta":n.command=!1,n.win=!1;break;case"Shift":n.shift=!1;break;case"Tab":n.tab=!1;break}o!==void 0&&Object.keys(o).forEach(d=>{if(d!==u.key)return;const f=o[d];if(typeof f=="function")f(u);else{const{stop:m=!1,prevent:g=!1}=f;m&&u.stopPropagation(),g&&u.preventDefault(),f.handler(u)}})},l=()=>{(t===void 0||t.value)&&(on("keydown",document,a),on("keyup",document,s)),t!==void 0&&watch(t,u=>{u?(on("keydown",document,a),on("keyup",document,s)):(off("keydown",document,a),off("keyup",document,s))})};return hasInstance()?(onBeforeMount(l),onBeforeUnmount(()=>{(t===void 0||t.value)&&(off("keydown",document,a),off("keyup",document,s))})):l(),readonly(n)}const modalBodyInjectionKey="n-modal-body",modalInjectionKey="n-modal",drawerBodyInjectionKey="n-drawer-body",popoverBodyInjectionKey="n-popover-body",internalSelectionMenuInjectionKey="n-internal-select-menu",internalSelectionMenuBodyInjectionKey="n-internal-select-menu-body",teleportDisabled="__disabled__";function useAdjustedTo(e){const t=inject(modalBodyInjectionKey,null),n=inject(drawerBodyInjectionKey,null),r=inject(popoverBodyInjectionKey,null),o=inject(internalSelectionMenuBodyInjectionKey,null);return useMemo(()=>{var a;const{to:s}=e;return s!==void 0?s===!1?teleportDisabled:s===!0?"body":s:t!=null&&t.value?(a=t.value.$el)!==null&&a!==void 0?a:t.value:n!=null&&n.value?n.value:r!=null&&r.value?r.value:o!=null&&o.value?o.value:s!=null?s:"body"})}useAdjustedTo.tdkey=teleportDisabled;useAdjustedTo.propTo={type:[String,Object,Boolean],default:void 0};let houdiniRegistered=!1;function useHoudini(){if(typeof window!="undefined"&&!!window.CSS&&!houdiniRegistered&&(houdiniRegistered=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch(e){}}function useDeferredTrue(e,t,n){if(!t)return e;const r=ref(e.value);let o=null;return watch(e,a=>{o!==null&&window.clearTimeout(o),a===!0?n&&!n.value?r.value=!0:o=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}const formItemInjectionKey="n-form-item";function useFormItem(e,{defaultSize:t="medium",mergedSize:n,mergedDisabled:r}={}){const o=inject(formItemInjectionKey,null);provide(formItemInjectionKey,null);const a=computed(n?()=>n(o):()=>{const{size:u}=e;if(u)return u;if(o){const{mergedSize:d}=o;if(d.value!==void 0)return d.value}return t}),s=computed(r?()=>r(o):()=>{const{disabled:u}=e;return u!==void 0?u:o?o.disabled.value:!1}),l=computed(()=>{const{status:u}=e;return u||(o==null?void 0:o.mergedValidationStatus.value)});return onBeforeUnmount(()=>{o&&o.restoreValidation()}),{mergedSizeRef:a,mergedDisabledRef:s,mergedStatusRef:l,nTriggerFormBlur(){o&&o.handleContentBlur()},nTriggerFormChange(){o&&o.handleContentChange()},nTriggerFormFocus(){o&&o.handleContentFocus()},nTriggerFormInput(){o&&o.handleContentInput()}}}var freeGlobal=typeof global=="object"&&global&&global.Object===Object&&global,freeGlobal$1=freeGlobal,freeSelf=typeof self=="object"&&self&&self.Object===Object&&self,root=freeGlobal$1||freeSelf||Function("return this")(),root$1=root,Symbol$1=root$1.Symbol,Symbol$2=Symbol$1,objectProto$e=Object.prototype,hasOwnProperty$b=objectProto$e.hasOwnProperty,nativeObjectToString$1=objectProto$e.toString,symToStringTag$1=Symbol$2?Symbol$2.toStringTag:void 0;function getRawTag(e){var t=hasOwnProperty$b.call(e,symToStringTag$1),n=e[symToStringTag$1];try{e[symToStringTag$1]=void 0;var r=!0}catch(a){}var o=nativeObjectToString$1.call(e);return r&&(t?e[symToStringTag$1]=n:delete e[symToStringTag$1]),o}var objectProto$d=Object.prototype,nativeObjectToString=objectProto$d.toString;function objectToString(e){return nativeObjectToString.call(e)}var nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=Symbol$2?Symbol$2.toStringTag:void 0;function baseGetTag(e){return e==null?e===void 0?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(e)?getRawTag(e):objectToString(e)}function isObjectLike(e){return e!=null&&typeof e=="object"}var symbolTag$1="[object Symbol]";function isSymbol(e){return typeof e=="symbol"||isObjectLike(e)&&baseGetTag(e)==symbolTag$1}function arrayMap(e,t){for(var n=-1,r=e==null?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}var isArray=Array.isArray,isArray$1=isArray,INFINITY$2=1/0,symbolProto$1=Symbol$2?Symbol$2.prototype:void 0,symbolToString=symbolProto$1?symbolProto$1.toString:void 0;function baseToString(e){if(typeof e=="string")return e;if(isArray$1(e))return arrayMap(e,baseToString)+"";if(isSymbol(e))return symbolToString?symbolToString.call(e):"";var t=e+"";return t=="0"&&1/e==-INFINITY$2?"-0":t}var reWhitespace=/\s/;function trimmedEndIndex(e){for(var t=e.length;t--&&reWhitespace.test(e.charAt(t)););return t}var reTrimStart=/^\s+/;function baseTrim(e){return e&&e.slice(0,trimmedEndIndex(e)+1).replace(reTrimStart,"")}function isObject(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var NAN=0/0,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;function toNumber(e){if(typeof e=="number")return e;if(isSymbol(e))return NAN;if(isObject(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=isObject(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=baseTrim(e);var n=reIsBinary.test(e);return n||reIsOctal.test(e)?freeParseInt(e.slice(2),n?2:8):reIsBadHex.test(e)?NAN:+e}var INFINITY$1=1/0,MAX_INTEGER=17976931348623157e292;function toFinite(e){if(!e)return e===0?e:0;if(e=toNumber(e),e===INFINITY$1||e===-INFINITY$1){var t=e<0?-1:1;return t*MAX_INTEGER}return e===e?e:0}function toInteger(e){var t=toFinite(e),n=t%1;return t===t?n?t-n:t:0}function identity(e){return e}var asyncTag="[object AsyncFunction]",funcTag$1="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]";function isFunction(e){if(!isObject(e))return!1;var t=baseGetTag(e);return t==funcTag$1||t==genTag||t==asyncTag||t==proxyTag}var coreJsData=root$1["__core-js_shared__"],coreJsData$1=coreJsData,maskSrcKey=function(){var e=/[^.]+$/.exec(coreJsData$1&&coreJsData$1.keys&&coreJsData$1.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}var funcProto$2=Function.prototype,funcToString$2=funcProto$2.toString;function toSource(e){if(e!=null){try{return funcToString$2.call(e)}catch(t){}try{return e+""}catch(t){}}return""}var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto$1=Function.prototype,objectProto$c=Object.prototype,funcToString$1=funcProto$1.toString,hasOwnProperty$a=objectProto$c.hasOwnProperty,reIsNative=RegExp("^"+funcToString$1.call(hasOwnProperty$a).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function baseIsNative(e){if(!isObject(e)||isMasked(e))return!1;var t=isFunction(e)?reIsNative:reIsHostCtor;return t.test(toSource(e))}function getValue(e,t){return e==null?void 0:e[t]}function getNative(e,t){var n=getValue(e,t);return baseIsNative(n)?n:void 0}var WeakMap$1=getNative(root$1,"WeakMap"),WeakMap$2=WeakMap$1,objectCreate=Object.create,baseCreate=function(){function e(){}return function(t){if(!isObject(t))return{};if(objectCreate)return objectCreate(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),baseCreate$1=baseCreate;function apply(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function copyArray(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}var HOT_COUNT=800,HOT_SPAN=16,nativeNow=Date.now;function shortOut(e){var t=0,n=0;return function(){var r=nativeNow(),o=HOT_SPAN-(r-n);if(n=r,o>0){if(++t>=HOT_COUNT)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function constant(e){return function(){return e}}var defineProperty=function(){try{var e=getNative(Object,"defineProperty");return e({},"",{}),e}catch(t){}}(),defineProperty$1=defineProperty,baseSetToString=defineProperty$1?function(e,t){return defineProperty$1(e,"toString",{configurable:!0,enumerable:!1,value:constant(t),writable:!0})}:identity,baseSetToString$1=baseSetToString,setToString=shortOut(baseSetToString$1),setToString$1=setToString,MAX_SAFE_INTEGER$1=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/;function isIndex(e,t){var n=typeof e;return t=t==null?MAX_SAFE_INTEGER$1:t,!!t&&(n=="number"||n!="symbol"&&reIsUint.test(e))&&e>-1&&e%1==0&&e<t}function baseAssignValue(e,t,n){t=="__proto__"&&defineProperty$1?defineProperty$1(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function eq(e,t){return e===t||e!==e&&t!==t}var objectProto$b=Object.prototype,hasOwnProperty$9=objectProto$b.hasOwnProperty;function assignValue(e,t,n){var r=e[t];(!(hasOwnProperty$9.call(e,t)&&eq(r,n))||n===void 0&&!(t in e))&&baseAssignValue(e,t,n)}function copyObject(e,t,n,r){var o=!n;n||(n={});for(var a=-1,s=t.length;++a<s;){var l=t[a],u=r?r(n[l],e[l],l,n,e):void 0;u===void 0&&(u=e[l]),o?baseAssignValue(n,l,u):assignValue(n,l,u)}return n}var nativeMax=Math.max;function overRest(e,t,n){return t=nativeMax(t===void 0?e.length-1:t,0),function(){for(var r=arguments,o=-1,a=nativeMax(r.length-t,0),s=Array(a);++o<a;)s[o]=r[t+o];o=-1;for(var l=Array(t+1);++o<t;)l[o]=r[o];return l[t]=n(s),apply(e,this,l)}}function baseRest(e,t){return setToString$1(overRest(e,t,identity),e+"")}var MAX_SAFE_INTEGER=9007199254740991;function isLength(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER}function isArrayLike(e){return e!=null&&isLength(e.length)&&!isFunction(e)}function isIterateeCall(e,t,n){if(!isObject(n))return!1;var r=typeof t;return(r=="number"?isArrayLike(n)&&isIndex(t,n.length):r=="string"&&t in n)?eq(n[t],e):!1}function createAssigner(e){return baseRest(function(t,n){var r=-1,o=n.length,a=o>1?n[o-1]:void 0,s=o>2?n[2]:void 0;for(a=e.length>3&&typeof a=="function"?(o--,a):void 0,s&&isIterateeCall(n[0],n[1],s)&&(a=o<3?void 0:a,o=1),t=Object(t);++r<o;){var l=n[r];l&&e(t,l,r,a)}return t})}var objectProto$a=Object.prototype;function isPrototype(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||objectProto$a;return e===n}function baseTimes(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var argsTag$2="[object Arguments]";function baseIsArguments(e){return isObjectLike(e)&&baseGetTag(e)==argsTag$2}var objectProto$9=Object.prototype,hasOwnProperty$8=objectProto$9.hasOwnProperty,propertyIsEnumerable$1=objectProto$9.propertyIsEnumerable,isArguments=baseIsArguments(function(){return arguments}())?baseIsArguments:function(e){return isObjectLike(e)&&hasOwnProperty$8.call(e,"callee")&&!propertyIsEnumerable$1.call(e,"callee")},isArguments$1=isArguments;function stubFalse(){return!1}var freeExports$2=typeof exports=="object"&&exports&&!exports.nodeType&&exports,freeModule$2=freeExports$2&&typeof module=="object"&&module&&!module.nodeType&&module,moduleExports$2=freeModule$2&&freeModule$2.exports===freeExports$2,Buffer$1=moduleExports$2?root$1.Buffer:void 0,nativeIsBuffer=Buffer$1?Buffer$1.isBuffer:void 0,isBuffer=nativeIsBuffer||stubFalse,isBuffer$1=isBuffer,argsTag$1="[object Arguments]",arrayTag$1="[object Array]",boolTag$1="[object Boolean]",dateTag$1="[object Date]",errorTag$1="[object Error]",funcTag="[object Function]",mapTag$2="[object Map]",numberTag$1="[object Number]",objectTag$3="[object Object]",regexpTag$1="[object RegExp]",setTag$2="[object Set]",stringTag$1="[object String]",weakMapTag$1="[object WeakMap]",arrayBufferTag$1="[object ArrayBuffer]",dataViewTag$2="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0;typedArrayTags[argsTag$1]=typedArrayTags[arrayTag$1]=typedArrayTags[arrayBufferTag$1]=typedArrayTags[boolTag$1]=typedArrayTags[dataViewTag$2]=typedArrayTags[dateTag$1]=typedArrayTags[errorTag$1]=typedArrayTags[funcTag]=typedArrayTags[mapTag$2]=typedArrayTags[numberTag$1]=typedArrayTags[objectTag$3]=typedArrayTags[regexpTag$1]=typedArrayTags[setTag$2]=typedArrayTags[stringTag$1]=typedArrayTags[weakMapTag$1]=!1;function baseIsTypedArray(e){return isObjectLike(e)&&isLength(e.length)&&!!typedArrayTags[baseGetTag(e)]}function baseUnary(e){return function(t){return e(t)}}var freeExports$1=typeof exports=="object"&&exports&&!exports.nodeType&&exports,freeModule$1=freeExports$1&&typeof module=="object"&&module&&!module.nodeType&&module,moduleExports$1=freeModule$1&&freeModule$1.exports===freeExports$1,freeProcess=moduleExports$1&&freeGlobal$1.process,nodeUtil=function(){try{var e=freeModule$1&&freeModule$1.require&&freeModule$1.require("util").types;return e||freeProcess&&freeProcess.binding&&freeProcess.binding("util")}catch(t){}}(),nodeUtil$1=nodeUtil,nodeIsTypedArray=nodeUtil$1&&nodeUtil$1.isTypedArray,isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray,isTypedArray$1=isTypedArray,objectProto$8=Object.prototype,hasOwnProperty$7=objectProto$8.hasOwnProperty;function arrayLikeKeys(e,t){var n=isArray$1(e),r=!n&&isArguments$1(e),o=!n&&!r&&isBuffer$1(e),a=!n&&!r&&!o&&isTypedArray$1(e),s=n||r||o||a,l=s?baseTimes(e.length,String):[],u=l.length;for(var d in e)(t||hasOwnProperty$7.call(e,d))&&!(s&&(d=="length"||o&&(d=="offset"||d=="parent")||a&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||isIndex(d,u)))&&l.push(d);return l}function overArg(e,t){return function(n){return e(t(n))}}var nativeKeys=overArg(Object.keys,Object),nativeKeys$1=nativeKeys,objectProto$7=Object.prototype,hasOwnProperty$6=objectProto$7.hasOwnProperty;function baseKeys(e){if(!isPrototype(e))return nativeKeys$1(e);var t=[];for(var n in Object(e))hasOwnProperty$6.call(e,n)&&n!="constructor"&&t.push(n);return t}function keys(e){return isArrayLike(e)?arrayLikeKeys(e):baseKeys(e)}function nativeKeysIn(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var objectProto$6=Object.prototype,hasOwnProperty$5=objectProto$6.hasOwnProperty;function baseKeysIn(e){if(!isObject(e))return nativeKeysIn(e);var t=isPrototype(e),n=[];for(var r in e)r=="constructor"&&(t||!hasOwnProperty$5.call(e,r))||n.push(r);return n}function keysIn(e){return isArrayLike(e)?arrayLikeKeys(e,!0):baseKeysIn(e)}var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;function isKey(e,t){if(isArray$1(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||isSymbol(e)?!0:reIsPlainProp.test(e)||!reIsDeepProp.test(e)||t!=null&&e in Object(t)}var nativeCreate=getNative(Object,"create"),nativeCreate$1=nativeCreate;function hashClear(){this.__data__=nativeCreate$1?nativeCreate$1(null):{},this.size=0}function hashDelete(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var HASH_UNDEFINED$2="__lodash_hash_undefined__",objectProto$5=Object.prototype,hasOwnProperty$4=objectProto$5.hasOwnProperty;function hashGet(e){var t=this.__data__;if(nativeCreate$1){var n=t[e];return n===HASH_UNDEFINED$2?void 0:n}return hasOwnProperty$4.call(t,e)?t[e]:void 0}var objectProto$4=Object.prototype,hasOwnProperty$3=objectProto$4.hasOwnProperty;function hashHas(e){var t=this.__data__;return nativeCreate$1?t[e]!==void 0:hasOwnProperty$3.call(t,e)}var HASH_UNDEFINED$1="__lodash_hash_undefined__";function hashSet(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=nativeCreate$1&&t===void 0?HASH_UNDEFINED$1:t,this}function Hash(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Hash.prototype.clear=hashClear;Hash.prototype.delete=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;function listCacheClear(){this.__data__=[],this.size=0}function assocIndexOf(e,t){for(var n=e.length;n--;)if(eq(e[n][0],t))return n;return-1}var arrayProto=Array.prototype,splice=arrayProto.splice;function listCacheDelete(e){var t=this.__data__,n=assocIndexOf(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():splice.call(t,n,1),--this.size,!0}function listCacheGet(e){var t=this.__data__,n=assocIndexOf(t,e);return n<0?void 0:t[n][1]}function listCacheHas(e){return assocIndexOf(this.__data__,e)>-1}function listCacheSet(e,t){var n=this.__data__,r=assocIndexOf(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function ListCache(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ListCache.prototype.clear=listCacheClear;ListCache.prototype.delete=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;var Map$1=getNative(root$1,"Map"),Map$2=Map$1;function mapCacheClear(){this.size=0,this.__data__={hash:new Hash,map:new(Map$2||ListCache),string:new Hash}}function isKeyable(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function getMapData(e,t){var n=e.__data__;return isKeyable(t)?n[typeof t=="string"?"string":"hash"]:n.map}function mapCacheDelete(e){var t=getMapData(this,e).delete(e);return this.size-=t?1:0,t}function mapCacheGet(e){return getMapData(this,e).get(e)}function mapCacheHas(e){return getMapData(this,e).has(e)}function mapCacheSet(e,t){var n=getMapData(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function MapCache(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}MapCache.prototype.clear=mapCacheClear;MapCache.prototype.delete=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;var FUNC_ERROR_TEXT="Expected a function";function memoize(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(FUNC_ERROR_TEXT);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var s=e.apply(this,r);return n.cache=a.set(o,s)||a,s};return n.cache=new(memoize.Cache||MapCache),n}memoize.Cache=MapCache;var MAX_MEMOIZE_SIZE=500;function memoizeCapped(e){var t=memoize(e,function(r){return n.size===MAX_MEMOIZE_SIZE&&n.clear(),r}),n=t.cache;return t}var rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reEscapeChar=/\\(\\)?/g,stringToPath=memoizeCapped(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(rePropName,function(n,r,o,a){t.push(o?a.replace(reEscapeChar,"$1"):r||n)}),t}),stringToPath$1=stringToPath;function toString(e){return e==null?"":baseToString(e)}function castPath(e,t){return isArray$1(e)?e:isKey(e,t)?[e]:stringToPath$1(toString(e))}var INFINITY=1/0;function toKey(e){if(typeof e=="string"||isSymbol(e))return e;var t=e+"";return t=="0"&&1/e==-INFINITY?"-0":t}function baseGet(e,t){t=castPath(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[toKey(t[n++])];return n&&n==r?e:void 0}function get(e,t,n){var r=e==null?void 0:baseGet(e,t);return r===void 0?n:r}function arrayPush(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}var getPrototype=overArg(Object.getPrototypeOf,Object),getPrototype$1=getPrototype,objectTag$2="[object Object]",funcProto=Function.prototype,objectProto$3=Object.prototype,funcToString=funcProto.toString,hasOwnProperty$2=objectProto$3.hasOwnProperty,objectCtorString=funcToString.call(Object);function isPlainObject(e){if(!isObjectLike(e)||baseGetTag(e)!=objectTag$2)return!1;var t=getPrototype$1(e);if(t===null)return!0;var n=hasOwnProperty$2.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&funcToString.call(n)==objectCtorString}function baseSlice(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++r<o;)a[r]=e[r+t];return a}function castSlice(e,t,n){var r=e.length;return n=n===void 0?r:n,!t&&n>=r?e:baseSlice(e,t,n)}var rsAstralRange$1="\\ud800-\\udfff",rsComboMarksRange$1="\\u0300-\\u036f",reComboHalfMarksRange$1="\\ufe20-\\ufe2f",rsComboSymbolsRange$1="\\u20d0-\\u20ff",rsComboRange$1=rsComboMarksRange$1+reComboHalfMarksRange$1+rsComboSymbolsRange$1,rsVarRange$1="\\ufe0e\\ufe0f",rsZWJ$1="\\u200d",reHasUnicode=RegExp("["+rsZWJ$1+rsAstralRange$1+rsComboRange$1+rsVarRange$1+"]");function hasUnicode(e){return reHasUnicode.test(e)}function asciiToArray(e){return e.split("")}var rsAstralRange="\\ud800-\\udfff",rsComboMarksRange="\\u0300-\\u036f",reComboHalfMarksRange="\\ufe20-\\ufe2f",rsComboSymbolsRange="\\u20d0-\\u20ff",rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsVarRange="\\ufe0e\\ufe0f",rsAstral="["+rsAstralRange+"]",rsCombo="["+rsComboRange+"]",rsFitz="\\ud83c[\\udffb-\\udfff]",rsModifier="(?:"+rsCombo+"|"+rsFitz+")",rsNonAstral="[^"+rsAstralRange+"]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsZWJ="\\u200d",reOptMod=rsModifier+"?",rsOptVar="["+rsVarRange+"]?",rsOptJoin="(?:"+rsZWJ+"(?:"+[rsNonAstral,rsRegional,rsSurrPair].join("|")+")"+rsOptVar+reOptMod+")*",rsSeq=rsOptVar+reOptMod+rsOptJoin,rsSymbol="(?:"+[rsNonAstral+rsCombo+"?",rsCombo,rsRegional,rsSurrPair,rsAstral].join("|")+")",reUnicode=RegExp(rsFitz+"(?="+rsFitz+")|"+rsSymbol+rsSeq,"g");function unicodeToArray(e){return e.match(reUnicode)||[]}function stringToArray(e){return hasUnicode(e)?unicodeToArray(e):asciiToArray(e)}function createCaseFirst(e){return function(t){t=toString(t);var n=hasUnicode(t)?stringToArray(t):void 0,r=n?n[0]:t.charAt(0),o=n?castSlice(n,1).join(""):t.slice(1);return r[e]()+o}}var upperFirst=createCaseFirst("toUpperCase"),upperFirst$1=upperFirst,nativeIsFinite=root$1.isFinite,nativeMin=Math.min;function createRound(e){var t=Math[e];return function(n,r){if(n=toNumber(n),r=r==null?0:nativeMin(toInteger(r),292),r&&nativeIsFinite(n)){var o=(toString(n)+"e").split("e"),a=t(o[0]+"e"+(+o[1]+r));return o=(toString(a)+"e").split("e"),+(o[0]+"e"+(+o[1]-r))}return t(n)}}function stackClear(){this.__data__=new ListCache,this.size=0}function stackDelete(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function stackGet(e){return this.__data__.get(e)}function stackHas(e){return this.__data__.has(e)}var LARGE_ARRAY_SIZE=200;function stackSet(e,t){var n=this.__data__;if(n instanceof ListCache){var r=n.__data__;if(!Map$2||r.length<LARGE_ARRAY_SIZE-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new MapCache(r)}return n.set(e,t),this.size=n.size,this}function Stack(e){var t=this.__data__=new ListCache(e);this.size=t.size}Stack.prototype.clear=stackClear;Stack.prototype.delete=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;var freeExports=typeof exports=="object"&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&typeof module=="object"&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,Buffer=moduleExports?root$1.Buffer:void 0,allocUnsafe=Buffer?Buffer.allocUnsafe:void 0;function cloneBuffer(e,t){if(t)return e.slice();var n=e.length,r=allocUnsafe?allocUnsafe(n):new e.constructor(n);return e.copy(r),r}function arrayFilter(e,t){for(var n=-1,r=e==null?0:e.length,o=0,a=[];++n<r;){var s=e[n];t(s,n,e)&&(a[o++]=s)}return a}function stubArray(){return[]}var objectProto$2=Object.prototype,propertyIsEnumerable=objectProto$2.propertyIsEnumerable,nativeGetSymbols=Object.getOwnPropertySymbols,getSymbols=nativeGetSymbols?function(e){return e==null?[]:(e=Object(e),arrayFilter(nativeGetSymbols(e),function(t){return propertyIsEnumerable.call(e,t)}))}:stubArray,getSymbols$1=getSymbols;function baseGetAllKeys(e,t,n){var r=t(e);return isArray$1(e)?r:arrayPush(r,n(e))}function getAllKeys(e){return baseGetAllKeys(e,keys,getSymbols$1)}var DataView=getNative(root$1,"DataView"),DataView$1=DataView,Promise$1=getNative(root$1,"Promise"),Promise$2=Promise$1,Set$1=getNative(root$1,"Set"),Set$2=Set$1,mapTag$1="[object Map]",objectTag$1="[object Object]",promiseTag="[object Promise]",setTag$1="[object Set]",weakMapTag="[object WeakMap]",dataViewTag$1="[object DataView]",dataViewCtorString=toSource(DataView$1),mapCtorString=toSource(Map$2),promiseCtorString=toSource(Promise$2),setCtorString=toSource(Set$2),weakMapCtorString=toSource(WeakMap$2),getTag=baseGetTag;(DataView$1&&getTag(new DataView$1(new ArrayBuffer(1)))!=dataViewTag$1||Map$2&&getTag(new Map$2)!=mapTag$1||Promise$2&&getTag(Promise$2.resolve())!=promiseTag||Set$2&&getTag(new Set$2)!=setTag$1||WeakMap$2&&getTag(new WeakMap$2)!=weakMapTag)&&(getTag=function(e){var t=baseGetTag(e),n=t==objectTag$1?e.constructor:void 0,r=n?toSource(n):"";if(r)switch(r){case dataViewCtorString:return dataViewTag$1;case mapCtorString:return mapTag$1;case promiseCtorString:return promiseTag;case setCtorString:return setTag$1;case weakMapCtorString:return weakMapTag}return t});var getTag$1=getTag,Uint8Array=root$1.Uint8Array,Uint8Array$1=Uint8Array;function cloneArrayBuffer(e){var t=new e.constructor(e.byteLength);return new Uint8Array$1(t).set(new Uint8Array$1(e)),t}function cloneTypedArray(e,t){var n=t?cloneArrayBuffer(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function initCloneObject(e){return typeof e.constructor=="function"&&!isPrototype(e)?baseCreate$1(getPrototype$1(e)):{}}var HASH_UNDEFINED="__lodash_hash_undefined__";function setCacheAdd(e){return this.__data__.set(e,HASH_UNDEFINED),this}function setCacheHas(e){return this.__data__.has(e)}function SetCache(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new MapCache;++t<n;)this.add(e[t])}SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;function arraySome(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function cacheHas(e,t){return e.has(t)}var COMPARE_PARTIAL_FLAG$5=1,COMPARE_UNORDERED_FLAG$3=2;function equalArrays(e,t,n,r,o,a){var s=n&COMPARE_PARTIAL_FLAG$5,l=e.length,u=t.length;if(l!=u&&!(s&&u>l))return!1;var d=a.get(e),f=a.get(t);if(d&&f)return d==t&&f==e;var m=-1,g=!0,y=n&COMPARE_UNORDERED_FLAG$3?new SetCache:void 0;for(a.set(e,t),a.set(t,e);++m<l;){var b=e[m],x=t[m];if(r)var C=s?r(x,b,m,t,e,a):r(b,x,m,e,t,a);if(C!==void 0){if(C)continue;g=!1;break}if(y){if(!arraySome(t,function($,E){if(!cacheHas(y,E)&&(b===$||o(b,$,n,r,a)))return y.push(E)})){g=!1;break}}else if(!(b===x||o(b,x,n,r,a))){g=!1;break}}return a.delete(e),a.delete(t),g}function mapToArray(e){var t=-1,n=Array(e.size);return e.forEach(function(r,o){n[++t]=[o,r]}),n}function setToArray(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var COMPARE_PARTIAL_FLAG$4=1,COMPARE_UNORDERED_FLAG$2=2,boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",mapTag="[object Map]",numberTag="[object Number]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",symbolProto=Symbol$2?Symbol$2.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;function equalByTag(e,t,n,r,o,a,s){switch(n){case dataViewTag:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case arrayBufferTag:return!(e.byteLength!=t.byteLength||!a(new Uint8Array$1(e),new Uint8Array$1(t)));case boolTag:case dateTag:case numberTag:return eq(+e,+t);case errorTag:return e.name==t.name&&e.message==t.message;case regexpTag:case stringTag:return e==t+"";case mapTag:var l=mapToArray;case setTag:var u=r&COMPARE_PARTIAL_FLAG$4;if(l||(l=setToArray),e.size!=t.size&&!u)return!1;var d=s.get(e);if(d)return d==t;r|=COMPARE_UNORDERED_FLAG$2,s.set(e,t);var f=equalArrays(l(e),l(t),r,o,a,s);return s.delete(e),f;case symbolTag:if(symbolValueOf)return symbolValueOf.call(e)==symbolValueOf.call(t)}return!1}var COMPARE_PARTIAL_FLAG$3=1,objectProto$1=Object.prototype,hasOwnProperty$1=objectProto$1.hasOwnProperty;function equalObjects(e,t,n,r,o,a){var s=n&COMPARE_PARTIAL_FLAG$3,l=getAllKeys(e),u=l.length,d=getAllKeys(t),f=d.length;if(u!=f&&!s)return!1;for(var m=u;m--;){var g=l[m];if(!(s?g in t:hasOwnProperty$1.call(t,g)))return!1}var y=a.get(e),b=a.get(t);if(y&&b)return y==t&&b==e;var x=!0;a.set(e,t),a.set(t,e);for(var C=s;++m<u;){g=l[m];var $=e[g],E=t[g];if(r)var N=s?r(E,$,g,t,e,a):r($,E,g,e,t,a);if(!(N===void 0?$===E||o($,E,n,r,a):N)){x=!1;break}C||(C=g=="constructor")}if(x&&!C){var S=e.constructor,k=t.constructor;S!=k&&"constructor"in e&&"constructor"in t&&!(typeof S=="function"&&S instanceof S&&typeof k=="function"&&k instanceof k)&&(x=!1)}return a.delete(e),a.delete(t),x}var COMPARE_PARTIAL_FLAG$2=1,argsTag="[object Arguments]",arrayTag="[object Array]",objectTag="[object Object]",objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;function baseIsEqualDeep(e,t,n,r,o,a){var s=isArray$1(e),l=isArray$1(t),u=s?arrayTag:getTag$1(e),d=l?arrayTag:getTag$1(t);u=u==argsTag?objectTag:u,d=d==argsTag?objectTag:d;var f=u==objectTag,m=d==objectTag,g=u==d;if(g&&isBuffer$1(e)){if(!isBuffer$1(t))return!1;s=!0,f=!1}if(g&&!f)return a||(a=new Stack),s||isTypedArray$1(e)?equalArrays(e,t,n,r,o,a):equalByTag(e,t,u,n,r,o,a);if(!(n&COMPARE_PARTIAL_FLAG$2)){var y=f&&hasOwnProperty.call(e,"__wrapped__"),b=m&&hasOwnProperty.call(t,"__wrapped__");if(y||b){var x=y?e.value():e,C=b?t.value():t;return a||(a=new Stack),o(x,C,n,r,a)}}return g?(a||(a=new Stack),equalObjects(e,t,n,r,o,a)):!1}function baseIsEqual(e,t,n,r,o){return e===t?!0:e==null||t==null||!isObjectLike(e)&&!isObjectLike(t)?e!==e&&t!==t:baseIsEqualDeep(e,t,n,r,baseIsEqual,o)}var COMPARE_PARTIAL_FLAG$1=1,COMPARE_UNORDERED_FLAG$1=2;function baseIsMatch(e,t,n,r){var o=n.length,a=o,s=!r;if(e==null)return!a;for(e=Object(e);o--;){var l=n[o];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<a;){l=n[o];var u=l[0],d=e[u],f=l[1];if(s&&l[2]){if(d===void 0&&!(u in e))return!1}else{var m=new Stack;if(r)var g=r(d,f,u,e,t,m);if(!(g===void 0?baseIsEqual(f,d,COMPARE_PARTIAL_FLAG$1|COMPARE_UNORDERED_FLAG$1,r,m):g))return!1}}return!0}function isStrictComparable(e){return e===e&&!isObject(e)}function getMatchData(e){for(var t=keys(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,isStrictComparable(o)]}return t}function matchesStrictComparable(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function baseMatches(e){var t=getMatchData(e);return t.length==1&&t[0][2]?matchesStrictComparable(t[0][0],t[0][1]):function(n){return n===e||baseIsMatch(n,e,t)}}function baseHasIn(e,t){return e!=null&&t in Object(e)}function hasPath(e,t,n){t=castPath(t,e);for(var r=-1,o=t.length,a=!1;++r<o;){var s=toKey(t[r]);if(!(a=e!=null&&n(e,s)))break;e=e[s]}return a||++r!=o?a:(o=e==null?0:e.length,!!o&&isLength(o)&&isIndex(s,o)&&(isArray$1(e)||isArguments$1(e)))}function hasIn(e,t){return e!=null&&hasPath(e,t,baseHasIn)}var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;function baseMatchesProperty(e,t){return isKey(e)&&isStrictComparable(t)?matchesStrictComparable(toKey(e),t):function(n){var r=get(n,e);return r===void 0&&r===t?hasIn(n,e):baseIsEqual(t,r,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG)}}function baseProperty(e){return function(t){return t==null?void 0:t[e]}}function basePropertyDeep(e){return function(t){return baseGet(t,e)}}function property(e){return isKey(e)?baseProperty(toKey(e)):basePropertyDeep(e)}function baseIteratee(e){return typeof e=="function"?e:e==null?identity:typeof e=="object"?isArray$1(e)?baseMatchesProperty(e[0],e[1]):baseMatches(e):property(e)}function createBaseFor(e){return function(t,n,r){for(var o=-1,a=Object(t),s=r(t),l=s.length;l--;){var u=s[e?l:++o];if(n(a[u],u,a)===!1)break}return t}}var baseFor=createBaseFor(),baseFor$1=baseFor;function baseForOwn(e,t){return e&&baseFor$1(e,t,keys)}function createBaseEach(e,t){return function(n,r){if(n==null)return n;if(!isArrayLike(n))return e(n,r);for(var o=n.length,a=t?o:-1,s=Object(n);(t?a--:++a<o)&&r(s[a],a,s)!==!1;);return n}}var baseEach=createBaseEach(baseForOwn),baseEach$1=baseEach;function assignMergeValue(e,t,n){(n!==void 0&&!eq(e[t],n)||n===void 0&&!(t in e))&&baseAssignValue(e,t,n)}function isArrayLikeObject(e){return isObjectLike(e)&&isArrayLike(e)}function safeGet(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function toPlainObject(e){return copyObject(e,keysIn(e))}function baseMergeDeep(e,t,n,r,o,a,s){var l=safeGet(e,n),u=safeGet(t,n),d=s.get(u);if(d){assignMergeValue(e,n,d);return}var f=a?a(l,u,n+"",e,t,s):void 0,m=f===void 0;if(m){var g=isArray$1(u),y=!g&&isBuffer$1(u),b=!g&&!y&&isTypedArray$1(u);f=u,g||y||b?isArray$1(l)?f=l:isArrayLikeObject(l)?f=copyArray(l):y?(m=!1,f=cloneBuffer(u,!0)):b?(m=!1,f=cloneTypedArray(u,!0)):f=[]:isPlainObject(u)||isArguments$1(u)?(f=l,isArguments$1(l)?f=toPlainObject(l):(!isObject(l)||isFunction(l))&&(f=initCloneObject(u))):m=!1}m&&(s.set(u,f),o(f,u,r,a,s),s.delete(u)),assignMergeValue(e,n,f)}function baseMerge(e,t,n,r,o){e!==t&&baseFor$1(t,function(a,s){if(o||(o=new Stack),isObject(a))baseMergeDeep(e,t,s,n,baseMerge,r,o);else{var l=r?r(safeGet(e,s),a,s+"",e,t,o):void 0;l===void 0&&(l=a),assignMergeValue(e,s,l)}},keysIn)}function baseMap(e,t){var n=-1,r=isArrayLike(e)?Array(e.length):[];return baseEach$1(e,function(o,a,s){r[++n]=t(o,a,s)}),r}function map(e,t){var n=isArray$1(e)?arrayMap:baseMap;return n(e,baseIteratee(t))}var merge$1=createAssigner(function(e,t,n){baseMerge(e,t,n)}),merge$2=merge$1,round=createRound("round"),round$1=round;const ssrContextKey=Symbol("@css-render/vue3-ssr");function createStyleString(e,t){return`<style cssr-id="${e}">
${t}
</style>`}function ssrAdapter(e,t){const n=inject(ssrContextKey,null);if(n===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:r,ids:o}=n;o.has(e)||r!==null&&(o.add(e),r.push(createStyleString(e,t)))}function useSsrAdapter(){const e=inject(ssrContextKey,null);if(e!==null)return{adapter:ssrAdapter,context:e}}var commonVariables$7={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"};const{fontSize,fontFamily,lineHeight}=commonVariables$7;var globalStyle=c$1("body",`
 margin: 0;
 font-size: ${fontSize};
 font-family: ${fontFamily};
 line-height: ${lineHeight};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[c$1("input",`
 font-family: inherit;
 font-size: inherit;
 `)]);const configProviderInjectionKey="n-config-provider",cssrAnchorMetaName$1="naive-ui-style";function createTheme(e){return e}function useTheme(e,t,n,r,o,a){const s=useSsrAdapter();if(n){const d=()=>{const f=a==null?void 0:a.value;n.mount({id:f===void 0?t:f+t,head:!0,props:{bPrefix:f?`.${f}-`:void 0},anchorMetaName:cssrAnchorMetaName$1,ssr:s}),globalStyle.mount({id:"n-global",head:!0,anchorMetaName:cssrAnchorMetaName$1,ssr:s})};s?d():onBeforeMount(d)}const l=inject(configProviderInjectionKey,null);return computed(()=>{var d;const{theme:{common:f,self:m,peers:g={}}={},themeOverrides:y={},builtinThemeOverrides:b={}}=o,{common:x,peers:C}=y,{common:$=void 0,[e]:{common:E=void 0,self:N=void 0,peers:S={}}={}}=(l==null?void 0:l.mergedThemeRef.value)||{},{common:k=void 0,[e]:A={}}=(l==null?void 0:l.mergedThemeOverridesRef.value)||{},{common:_,peers:P={}}=A,I=merge$2({},f||E||$||r.common,k,_,x),O=merge$2((d=m||N||r.self)===null||d===void 0?void 0:d(I),b,A,y);return{common:I,self:O,peers:merge$2({},r.peers,S,g),peerOverrides:merge$2({},P,C)}})}useTheme.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const defaultClsPrefix="n";function useConfig(e={},t={defaultBordered:!0}){const n=inject(configProviderInjectionKey,null);return{inlineThemeDisabled:n==null?void 0:n.inlineThemeDisabled,mergedRtlRef:n==null?void 0:n.mergedRtlRef,mergedComponentPropsRef:n==null?void 0:n.mergedComponentPropsRef,mergedBreakpointsRef:n==null?void 0:n.mergedBreakpointsRef,mergedBorderedRef:computed(()=>{var r,o;const{bordered:a}=e;return a!==void 0?a:(o=(r=n==null?void 0:n.mergedBorderedRef.value)!==null&&r!==void 0?r:t.defaultBordered)!==null&&o!==void 0?o:!0}),mergedClsPrefixRef:computed(()=>(n==null?void 0:n.mergedClsPrefixRef.value)||defaultClsPrefix),namespaceRef:computed(()=>n==null?void 0:n.mergedNamespaceRef.value)}}const enUS={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},Transfer:{sourceTitle:"Source",targetTitle:"Target"},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (\u2190)",tipNext:"Next picture (\u2192)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)"}};var enUS$1=enUS;function buildFormatLongFn(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}function buildLocalizeFn(e){return function(t,n){var r=n||{},o=r.context?String(r.context):"standalone",a;if(o==="formatting"&&e.formattingValues){var s=e.defaultFormattingWidth||e.defaultWidth,l=r.width?String(r.width):s;a=e.formattingValues[l]||e.formattingValues[s]}else{var u=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;a=e.values[d]||e.values[u]}var f=e.argumentCallback?e.argumentCallback(t):t;return a[f]}}function buildMatchPatternFn(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var o=r[0],a=t.match(e.parsePattern);if(!a)return null;var s=e.valueCallback?e.valueCallback(a[0]):a[0];s=n.valueCallback?n.valueCallback(s):s;var l=t.slice(o.length);return{value:s,rest:l}}}function buildMatchFn(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(o);if(!a)return null;var s=a[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(l)?findIndex(l,function(m){return m.test(s)}):findKey(l,function(m){return m.test(s)}),d;d=e.valueCallback?e.valueCallback(u):u,d=n.valueCallback?n.valueCallback(d):d;var f=t.slice(s.length);return{value:d,rest:f}}}function findKey(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function findIndex(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}var formatDistanceLocale={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},formatDistance=function(e,t,n){var r,o=formatDistanceLocale[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatDistance$1=formatDistance,dateFormats={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},timeFormats={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},dateTimeFormats={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},formatLong={date:buildFormatLongFn({formats:dateFormats,defaultWidth:"full"}),time:buildFormatLongFn({formats:timeFormats,defaultWidth:"full"}),dateTime:buildFormatLongFn({formats:dateTimeFormats,defaultWidth:"full"})},formatLong$1=formatLong,formatRelativeLocale={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},formatRelative=function(e,t,n,r){return formatRelativeLocale[e]},formatRelative$1=formatRelative,eraValues={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},quarterValues={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},monthValues={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},dayValues={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dayPeriodValues={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},formattingDayPeriodValues={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ordinalNumber=function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},localize={ordinalNumber,era:buildLocalizeFn({values:eraValues,defaultWidth:"wide"}),quarter:buildLocalizeFn({values:quarterValues,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:buildLocalizeFn({values:monthValues,defaultWidth:"wide"}),day:buildLocalizeFn({values:dayValues,defaultWidth:"wide"}),dayPeriod:buildLocalizeFn({values:dayPeriodValues,defaultWidth:"wide",formattingValues:formattingDayPeriodValues,defaultFormattingWidth:"wide"})},localize$1=localize,matchOrdinalNumberPattern=/^(\d+)(th|st|nd|rd)?/i,parseOrdinalNumberPattern=/\d+/i,matchEraPatterns={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},parseEraPatterns={any:[/^b/i,/^(a|c)/i]},matchQuarterPatterns={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},parseQuarterPatterns={any:[/1/i,/2/i,/3/i,/4/i]},matchMonthPatterns={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},parseMonthPatterns={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},matchDayPatterns={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},parseDayPatterns={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},matchDayPeriodPatterns={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},parseDayPeriodPatterns={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},match={ordinalNumber:buildMatchPatternFn({matchPattern:matchOrdinalNumberPattern,parsePattern:parseOrdinalNumberPattern,valueCallback:function(e){return parseInt(e,10)}}),era:buildMatchFn({matchPatterns:matchEraPatterns,defaultMatchWidth:"wide",parsePatterns:parseEraPatterns,defaultParseWidth:"any"}),quarter:buildMatchFn({matchPatterns:matchQuarterPatterns,defaultMatchWidth:"wide",parsePatterns:parseQuarterPatterns,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:buildMatchFn({matchPatterns:matchMonthPatterns,defaultMatchWidth:"wide",parsePatterns:parseMonthPatterns,defaultParseWidth:"any"}),day:buildMatchFn({matchPatterns:matchDayPatterns,defaultMatchWidth:"wide",parsePatterns:parseDayPatterns,defaultParseWidth:"any"}),dayPeriod:buildMatchFn({matchPatterns:matchDayPeriodPatterns,defaultMatchWidth:"any",parsePatterns:parseDayPeriodPatterns,defaultParseWidth:"any"})},match$1=match,locale={code:"en-US",formatDistance:formatDistance$1,formatLong:formatLong$1,formatRelative:formatRelative$1,localize:localize$1,match:match$1,options:{weekStartsOn:0,firstWeekContainsDate:1}},defaultLocale=locale;const dateEnUs={name:"en-US",locale:defaultLocale};var dateEnUS=dateEnUs;function useLocale(e){const{mergedLocaleRef:t,mergedDateLocaleRef:n}=inject(configProviderInjectionKey,null)||{},r=computed(()=>{var a,s;return(s=(a=t==null?void 0:t.value)===null||a===void 0?void 0:a[e])!==null&&s!==void 0?s:enUS$1[e]});return{dateLocaleRef:computed(()=>{var a;return(a=n==null?void 0:n.value)!==null&&a!==void 0?a:dateEnUS}),localeRef:r}}function useStyle(e,t,n){if(!t){throwError("use-style","No style is specified.");return}const r=useSsrAdapter(),o=()=>{const a=n==null?void 0:n.value;t.mount({id:a===void 0?e:a+e,head:!0,anchorMetaName:cssrAnchorMetaName$1,props:{bPrefix:a?`.${a}-`:void 0},ssr:r}),globalStyle.mount({id:"n-global",head:!0,anchorMetaName:cssrAnchorMetaName$1,ssr:r})};r?o():onBeforeMount(o)}function useThemeClass(e,t,n,r){var o;n||throwError("useThemeClass","cssVarsRef is not passed");const a=(o=inject(configProviderInjectionKey,null))===null||o===void 0?void 0:o.mergedThemeHashRef,s=ref(""),l=useSsrAdapter();let u;const d=`__${e}`,f=()=>{let m=d;const g=t?t.value:void 0,y=a==null?void 0:a.value;y&&(m+="-"+y),g&&(m+="-"+g);const{themeOverrides:b,builtinThemeOverrides:x}=r;b&&(m+="-"+murmur2(JSON.stringify(b))),x&&(m+="-"+murmur2(JSON.stringify(x))),s.value=m,u=()=>{const C=n.value;let $="";for(const E in C)$+=`${E}: ${C[E]};`;c$1(`.${m}`,$).mount({id:m,ssr:l}),u=void 0}};return watchEffect(()=>{f()}),{themeClass:s,onRender:()=>{u==null||u()}}}function replaceable(e,t){return defineComponent({name:upperFirst$1(e),setup(){var n;const r=(n=inject(configProviderInjectionKey,null))===null||n===void 0?void 0:n.mergedIconsRef;return()=>{var o;const a=(o=r==null?void 0:r.value)===null||o===void 0?void 0:o[e];return a?a():t}}})}var ChevronRightIcon=defineComponent({name:"ChevronRight",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),ErrorIcon$1=replaceable("close",h("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},h("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},h("g",{fill:"currentColor","fill-rule":"nonzero"},h("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),ErrorIcon=replaceable("error",h("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},h("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},h("g",{"fill-rule":"nonzero"},h("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),InfoIcon=replaceable("info",h("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},h("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},h("g",{"fill-rule":"nonzero"},h("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),SuccessIcon=replaceable("success",h("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},h("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},h("g",{"fill-rule":"nonzero"},h("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),WarningIcon=replaceable("warning",h("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},h("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},h("g",{"fill-rule":"nonzero"},h("path",{d:"M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"}))))),ChevronDownFilledIcon=defineComponent({name:"ChevronDownFilled",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),NIconSwitchTransition=defineComponent({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const n=isMounted();return()=>h(Transition,{name:"icon-switch-transition",appear:n.value},t)}}),NFadeInExpandTransition=defineComponent({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:t}){function n(l){e.width?l.style.maxWidth=`${l.offsetWidth}px`:l.style.maxHeight=`${l.offsetHeight}px`,l.offsetWidth}function r(l){e.width?l.style.maxWidth="0":l.style.maxHeight="0",l.offsetWidth;const{onLeave:u}=e;u&&u()}function o(l){e.width?l.style.maxWidth="":l.style.maxHeight="";const{onAfterLeave:u}=e;u&&u()}function a(l){if(l.style.transition="none",e.width){const u=l.offsetWidth;l.style.maxWidth="0",l.offsetWidth,l.style.transition="",l.style.maxWidth=`${u}px`}else if(e.reverse)l.style.maxHeight=`${l.offsetHeight}px`,l.offsetHeight,l.style.transition="",l.style.maxHeight="0";else{const u=l.offsetHeight;l.style.maxHeight="0",l.offsetWidth,l.style.transition="",l.style.maxHeight=`${u}px`}l.offsetWidth}function s(l){var u;e.width?l.style.maxWidth="":e.reverse||(l.style.maxHeight=""),(u=e.onAfterEnter)===null||u===void 0||u.call(e)}return()=>{const l=e.group?TransitionGroup:Transition;return h(l,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:a,onAfterEnter:s,onBeforeLeave:n,onLeave:r,onAfterLeave:o},t)}}}),style$n=cB("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[c$1("svg",{height:"1em",width:"1em"})]),NBaseIcon=defineComponent({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){useStyle("-base-icon",style$n,toRef(e,"clsPrefix"))},render(){return h("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),style$m=cB("base-close",`
 cursor: pointer;
 color: var(--n-close-color);
`,[c$1("&:hover",{color:"var(--n-close-color-hover)"}),c$1("&:active",{color:"var(--n-close-color-pressed)"}),cM("disabled",{cursor:"not-allowed!important",color:"var(--n-close-color-disabled)"})]),NBaseClose=defineComponent({name:"BaseClose",props:{clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},onClick:Function},setup(e){return useStyle("-base-close",style$m,toRef(e,"clsPrefix")),()=>{const{clsPrefix:t,disabled:n}=e;return h(NBaseIcon,{role:"button",ariaDisabled:n,ariaLabel:"close",clsPrefix:t,class:[`${t}-base-close`,n&&`${t}-base-close--disabled`],onClick:n?void 0:e.onClick},{default:()=>h(ErrorIcon$1,null)})}}});const{cubicBezierEaseInOut:cubicBezierEaseInOut$3}=commonVariables$7;function createIconSwitchTransition({originalTransform:e="",left:t=0,top:n=0,transition:r=`all .3s ${cubicBezierEaseInOut$3} !important`}={}){return[c$1("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:t,top:n,opacity:0}),c$1("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:n,opacity:1}),c$1("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:n,transition:r})]}var style$l=c$1([c$1("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),c$1("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),c$1("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),c$1("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),cB("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[cE("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[createIconSwitchTransition()]),cE("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[cE("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),cE("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[cE("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[cE("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),cE("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[cE("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),cE("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[cE("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),cE("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[createIconSwitchTransition({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),NBaseLoading=defineComponent({name:"BaseLoading",props:{clsPrefix:{type:String,required:!0},scale:{type:Number,default:1},radius:{type:Number,default:100},strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},show:{type:Boolean,default:!0}},setup(e){useStyle("-base-loading",style$l,toRef(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:n,stroke:r,scale:o}=this,a=t/o;return h("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},h(NIconSwitchTransition,null,{default:()=>this.show?h("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},h("div",{class:`${e}-base-loading__container`},h("div",{class:`${e}-base-loading__container-layer`},h("div",{class:`${e}-base-loading__container-layer-left`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*a} ${2*a}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:a,cy:a,r:t-n/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),h("div",{class:`${e}-base-loading__container-layer-patch`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*a} ${2*a}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:a,cy:a,r:t-n/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),h("div",{class:`${e}-base-loading__container-layer-right`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*a} ${2*a}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:a,cy:a,r:t-n/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t})))))):h("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}});function toArray(e){return Array.isArray(e)?e:[e]}const TRAVERSE_COMMAND={STOP:"STOP"};function traverseWithCb(e,t){const n=t(e);e.children!==void 0&&n!==TRAVERSE_COMMAND.STOP&&e.children.forEach(r=>traverseWithCb(r,t))}function getNonLeafKeys(e,t={}){const{preserveGroup:n=!1}=t,r=[],o=n?s=>{s.isLeaf||(r.push(s.key),a(s.children))}:s=>{s.isLeaf||(s.isGroup||r.push(s.key),a(s.children))};function a(s){s.forEach(o)}return a(e),r}function isLeaf(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function defaultGetChildren(e){return e.children}function defaultGetKey(e){return e.key}function isIgnored(){return!1}function isShallowLoaded(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function isDisabled(e){return e.disabled===!0}function isExpilicitlyNotLoaded(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function isNodeInvalid(e,t){if(e.isLeaf===!0){const n=t(e);if(Array.isArray(n)&&n.length>0)return!0}return!1}function unwrapCheckedKeys(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function unwrapIndeterminateKeys(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function merge(e,t){const n=new Set(e);return t.forEach(r=>{n.has(r)||n.add(r)}),Array.from(n)}function minus(e,t){const n=new Set(e);return t.forEach(r=>{n.has(r)&&n.delete(r)}),Array.from(n)}function isGroup(e){return(e==null?void 0:e.type)==="group"}function createIndexGetter(e){const t=new Map;return e.forEach((n,r)=>{t.set(n.key,r)}),n=>{var r;return(r=t.get(n))!==null&&r!==void 0?r:null}}class SubtreeNotLoadedError extends Error{constructor(){super();this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function getExtendedCheckedKeySetAfterCheck(e,t,n){return getExtendedCheckedKeySet(t.concat(e),n)}function getAvailableAscendantNodeSet(e,t){const n=new Set;return e.forEach(r=>{const o=t.treeNodeMap.get(r);if(o!==void 0){let a=o.parent;for(;a!==null&&!(a.disabled||n.has(a.key));)n.add(a.key),a=a.parent}}),n}function getExtendedCheckedKeySetAfterUncheck(e,t,n){const r=getExtendedCheckedKeySet(t,n),o=getExtendedCheckedKeySet(e,n,!0),a=getAvailableAscendantNodeSet(e,n),s=[];return r.forEach(l=>{(o.has(l)||a.has(l))&&s.push(l)}),s.forEach(l=>r.delete(l)),r}function getCheckedKeys(e,t){const{checkedKeys:n,keysToCheck:r,keysToUncheck:o,indeterminateKeys:a,cascade:s,leafOnly:l,checkStrategy:u}=e;if(!s)return r!==void 0?{checkedKeys:merge(n,r),indeterminateKeys:Array.from(a)}:o!==void 0?{checkedKeys:minus(n,o),indeterminateKeys:Array.from(a)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(a)};const{levelTreeNodeMap:d}=t;let f;o!==void 0?f=getExtendedCheckedKeySetAfterUncheck(o,n,t):r!==void 0?f=getExtendedCheckedKeySetAfterCheck(r,n,t):f=getExtendedCheckedKeySet(n,t);const m=u==="parent",g=u==="child"||l,y=f,b=new Set,x=Math.max.apply(null,Array.from(d.keys()));for(let C=x;C>=0;C-=1){const $=C===0,E=d.get(C);for(const N of E){if(N.isLeaf)continue;const{key:S,shallowLoaded:k}=N;if(g&&k&&N.children.forEach(I=>{!I.disabled&&!I.isLeaf&&I.shallowLoaded&&y.has(I.key)&&y.delete(I.key)}),N.disabled||!k)continue;let A=!0,_=!1,P=!0;for(const I of N.children){const O=I.key;if(!I.disabled){if(P&&(P=!1),y.has(O))_=!0;else if(b.has(O)){_=!0,A=!1;break}else if(A=!1,_)break}}A&&!P?(m&&N.children.forEach(I=>{!I.disabled&&y.has(I.key)&&y.delete(I.key)}),y.add(S)):_&&b.add(S),$&&g&&y.has(S)&&y.delete(S)}}return{checkedKeys:Array.from(y),indeterminateKeys:Array.from(b)}}function getExtendedCheckedKeySet(e,t,n=!1){const{treeNodeMap:r,getChildren:o}=t,a=new Set,s=new Set(e);return e.forEach(l=>{const u=r.get(l);u!==void 0&&traverseWithCb(u,d=>{if(d.disabled)return TRAVERSE_COMMAND.STOP;const{key:f}=d;if(!a.has(f)&&(a.add(f),s.add(f),isExpilicitlyNotLoaded(d.rawNode,o))){if(n)return TRAVERSE_COMMAND.STOP;throw new SubtreeNotLoadedError}})}),s}function getPath(e,{includeGroup:t=!1,includeSelf:n=!0},r){var o;const a=r.treeNodeMap;let s=e==null?null:(o=a.get(e))!==null&&o!==void 0?o:null;const l={keyPath:[],treeNodePath:[],treeNode:s};if(s!=null&&s.ignored)return l.treeNode=null,l;for(;s;)!s.ignored&&(t||!s.isGroup)&&l.treeNodePath.push(s),s=s.parent;return l.treeNodePath.reverse(),n||l.treeNodePath.pop(),l.keyPath=l.treeNodePath.map(u=>u.key),l}function getFirstAvailableNode(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function rawGetNext(e,t){const n=e.siblings,r=n.length,{index:o}=e;return t?n[(o+1)%r]:o===n.length-1?null:n[o+1]}function move(e,t,{loop:n=!1,includeDisabled:r=!1}={}){const o=t==="prev"?rawGetPrev:rawGetNext,a={reverse:t==="prev"};let s=!1,l=null;function u(d){if(d!==null){if(d===e){if(!s)s=!0;else if(!e.disabled&&!e.isGroup){l=e;return}}else if((!d.disabled||r)&&!d.ignored&&!d.isGroup){l=d;return}if(d.isGroup){const f=getChild(d,a);f!==null?l=f:u(o(d,n))}else{const f=o(d,!1);if(f!==null)u(f);else{const m=rawGetParent(d);m!=null&&m.isGroup?u(o(m,n)):n&&u(o(d,!0))}}}}return u(e),l}function rawGetPrev(e,t){const n=e.siblings,r=n.length,{index:o}=e;return t?n[(o-1+r)%r]:o===0?null:n[o-1]}function rawGetParent(e){return e.parent}function getChild(e,t={}){const{reverse:n=!1}=t,{children:r}=e;if(r){const{length:o}=r,a=n?o-1:0,s=n?-1:o,l=n?-1:1;for(let u=a;u!==s;u+=l){const d=r[u];if(!d.disabled&&!d.ignored)if(d.isGroup){const f=getChild(d,t);if(f!==null)return f}else return d}}return null}const moveMethods={getChild(){return this.ignored?null:getChild(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return move(this,"next",e)},getPrev(e={}){return move(this,"prev",e)}};function flatten$1(e,t){const n=t?new Set(t):void 0,r=[];function o(a){a.forEach(s=>{r.push(s),!(s.isLeaf||!s.children||s.ignored)&&(s.isGroup||n===void 0||n.has(s.key))&&o(s.children)})}return o(e),r}function contains(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function createTreeNodes(e,t,n,r,o,a=null,s=0){const l=[];return e.forEach((u,d)=>{var f;isNodeInvalid(u,o)&&console.error("[treemate]: node",u,"is invalid");const m=Object.create(r);if(m.rawNode=u,m.siblings=l,m.level=s,m.index=d,m.isFirstChild=d===0,m.isLastChild=d+1===e.length,m.parent=a,!m.ignored){const g=o(u);Array.isArray(g)&&(m.children=createTreeNodes(g,t,n,r,o,m,s+1))}l.push(m),t.set(m.key,m),n.has(s)||n.set(s,[]),(f=n.get(s))===null||f===void 0||f.push(m)}),l}function createTreeMate(e,t={}){var n;const r=new Map,o=new Map,{getDisabled:a=isDisabled,getIgnored:s=isIgnored,getIsGroup:l=isGroup,getKey:u=defaultGetKey}=t,d=(n=t.getChildren)!==null&&n!==void 0?n:defaultGetChildren,f=t.ignoreEmptyChildren?S=>{const k=d(S);return Array.isArray(k)?k.length?k:null:k}:d,m=Object.assign({get key(){return u(this.rawNode)},get disabled(){return a(this.rawNode)},get isGroup(){return l(this.rawNode)},get isLeaf(){return isLeaf(this.rawNode,f)},get shallowLoaded(){return isShallowLoaded(this.rawNode,f)},get ignored(){return s(this.rawNode)},contains(S){return contains(this,S)}},moveMethods),g=createTreeNodes(e,r,o,m,f);function y(S){if(S==null)return null;const k=r.get(S);return k&&!k.isGroup&&!k.ignored?k:null}function b(S){if(S==null)return null;const k=r.get(S);return k&&!k.ignored?k:null}function x(S,k){const A=b(S);return A?A.getPrev(k):null}function C(S,k){const A=b(S);return A?A.getNext(k):null}function $(S){const k=b(S);return k?k.getParent():null}function E(S){const k=b(S);return k?k.getChild():null}const N={treeNodes:g,treeNodeMap:r,levelTreeNodeMap:o,maxLevel:Math.max(...o.keys()),getChildren:f,getFlattenedNodes(S){return flatten$1(g,S)},getNode:y,getPrev:x,getNext:C,getParent:$,getChild:E,getFirstAvailableNode(){return getFirstAvailableNode(g)},getPath(S,k={}){return getPath(S,k,N)},getCheckedKeys(S,k={}){const{cascade:A=!0,leafOnly:_=!1,checkStrategy:P="all"}=k;return getCheckedKeys({checkedKeys:unwrapCheckedKeys(S),indeterminateKeys:unwrapIndeterminateKeys(S),cascade:A,leafOnly:_,checkStrategy:P},N)},check(S,k,A={}){const{cascade:_=!0,leafOnly:P=!1,checkStrategy:I="all"}=A;return getCheckedKeys({checkedKeys:unwrapCheckedKeys(k),indeterminateKeys:unwrapIndeterminateKeys(k),keysToCheck:S==null?[]:toArray(S),cascade:_,leafOnly:P,checkStrategy:I},N)},uncheck(S,k,A={}){const{cascade:_=!0,leafOnly:P=!1,checkStrategy:I="all"}=A;return getCheckedKeys({checkedKeys:unwrapCheckedKeys(k),indeterminateKeys:unwrapIndeterminateKeys(k),keysToUncheck:S==null?[]:toArray(S),cascade:_,leafOnly:P,checkStrategy:I},N)},getNonLeafKeys(S={}){return getNonLeafKeys(g,S)}};return N}function getSlot(e,t,n="default"){const r=t[n];if(r===void 0)throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);return r()}function flatten(e,t=!0,n=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&n.push(createTextVNode(String(r)));return}if(Array.isArray(r)){flatten(r,t,n);return}if(r.type===Fragment){if(r.children===null)return;Array.isArray(r.children)&&flatten(r.children,t,n)}else r.type!==Comment&&n.push(r)}}),n}function getFirstVNode(e,t,n="default"){const r=t[n];if(r===void 0)throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);const o=flatten(r());if(o.length===1)return o[0];throw new Error(`[vueuc/${e}]: slot[${n}] should have exactly one child.`)}let viewMeasurer=null;function ensureViewBoundingRect(){if(viewMeasurer===null&&(viewMeasurer=document.getElementById("v-binder-view-measurer"),viewMeasurer===null)){viewMeasurer=document.createElement("div"),viewMeasurer.id="v-binder-view-measurer";const{style:e}=viewMeasurer;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(viewMeasurer)}return viewMeasurer.getBoundingClientRect()}function getPointRect(e,t){const n=ensureViewBoundingRect();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function getRect(e){const t=e.getBoundingClientRect(),n=ensureViewBoundingRect();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function getParentNode(e){return e.nodeType===9?null:e.parentNode}function getScrollParent(e){if(e===null)return null;const t=getParentNode(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:n,overflowX:r,overflowY:o}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+o+r))return t}return getScrollParent(t)}const Binder=defineComponent({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;provide("VBinder",(t=getCurrentInstance())===null||t===void 0?void 0:t.proxy);const n=inject("VBinder",null),r=ref(null),o=$=>{r.value=$,n&&e.syncTargetWithParent&&n.setTargetRef($)};let a=[];const s=()=>{let $=r.value;for(;$=getScrollParent($),$!==null;)a.push($);for(const E of a)on("scroll",E,m,!0)},l=()=>{for(const $ of a)off("scroll",$,m,!0);a=[]},u=new Set,d=$=>{u.size===0&&s(),u.has($)||u.add($)},f=$=>{u.has($)&&u.delete($),u.size===0&&l()},m=()=>{beforeNextFrameOnce(g)},g=()=>{u.forEach($=>$())},y=new Set,b=$=>{y.size===0&&on("resize",window,C),y.has($)||y.add($)},x=$=>{y.has($)&&y.delete($),y.size===0&&off("resize",window,C)},C=()=>{y.forEach($=>$())};return onBeforeUnmount(()=>{off("resize",window,C),l()}),{targetRef:r,setTargetRef:o,addScrollListener:d,removeScrollListener:f,addResizeListener:b,removeResizeListener:x}},render(){return getSlot("binder",this.$slots)}});var VBinder=Binder,VTarget=defineComponent({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=inject("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?withDirectives(getFirstVNode("follower",this.$slots),[[t]]):getFirstVNode("follower",this.$slots)}});const ctxKey$1="@@mmoContext",mousemoveoutside={mounted(e,{value:t}){e[ctxKey$1]={handler:void 0},typeof t=="function"&&(e[ctxKey$1].handler=t,on("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[ctxKey$1];typeof t=="function"?n.handler?n.handler!==t&&(off("mousemoveoutside",e,n.handler),n.handler=t,on("mousemoveoutside",e,t)):(e[ctxKey$1].handler=t,on("mousemoveoutside",e,t)):n.handler&&(off("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[ctxKey$1];t&&off("mousemoveoutside",e,t),e[ctxKey$1].handler=void 0}};var mousemoveoutside$1=mousemoveoutside;const ctxKey="@@coContext",clickoutside={mounted(e,{value:t}){e[ctxKey]={handler:void 0},typeof t=="function"&&(e[ctxKey].handler=t,on("clickoutside",e,t))},updated(e,{value:t}){const n=e[ctxKey];typeof t=="function"?n.handler?n.handler!==t&&(off("clickoutside",e,n.handler),n.handler=t,on("clickoutside",e,t)):(e[ctxKey].handler=t,on("clickoutside",e,t)):n.handler&&(off("clickoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[ctxKey];t&&off("clickoutside",e,t),e[ctxKey].handler=void 0}};var clickoutside$1=clickoutside;function warn$1(e,t){console.error(`[vdirs/${e}]: ${t}`)}class ZIndexManager{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(t,n){const{elementZIndex:r}=this;if(n!==void 0){t.style.zIndex=`${n}`,r.delete(t);return}const{nextZIndex:o}=this;r.has(t)&&r.get(t)+1===this.nextZIndex||(t.style.zIndex=`${o}`,r.set(t,o),this.nextZIndex=o+1,this.squashState())}unregister(t,n){const{elementZIndex:r}=this;r.has(t)?r.delete(t):n===void 0&&warn$1("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:t}=this;t||(this.nextZIndex=2e3),this.nextZIndex-t>2500&&this.rearrange()}rearrange(){const t=Array.from(this.elementZIndex.entries());t.sort((n,r)=>n[1]-r[1]),this.nextZIndex=2e3,t.forEach(n=>{const r=n[0],o=this.nextZIndex++;`${o}`!==r.style.zIndex&&(r.style.zIndex=`${o}`)})}}var zIndexManager=new ZIndexManager;const ctx="@@ziContext",zindexable={mounted(e,t){const{value:n={}}=t,{zIndex:r,enabled:o}=n;e[ctx]={enabled:!!o,initialized:!1},o&&(zIndexManager.ensureZIndex(e,r),e[ctx].initialized=!0)},updated(e,t){const{value:n={}}=t,{zIndex:r,enabled:o}=n,a=e[ctx].enabled;o&&!a&&(zIndexManager.ensureZIndex(e,r),e[ctx].initialized=!0),e[ctx].enabled=!!o},unmounted(e,t){if(!e[ctx].initialized)return;const{value:n={}}=t,{zIndex:r}=n;zIndexManager.unregister(e,r)}};var zindexable$1=zindexable;function warn(e,t){console.error(`[vueuc/${e}]: ${t}`)}const{c}=CssRender(),cssrAnchorMetaName="vueuc-style";function resolveTo(e){return typeof e=="string"?document.querySelector(e):e()}var LazyTeleport=defineComponent({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:useFalseUntilTruthy(toRef(e,"show")),mergedTo:computed(()=>{const{to:t}=e;return t!=null?t:"body"})}},render(){return this.showTeleport?this.disabled?getSlot("lazy-teleport",this.$slots):h(Teleport,{disabled:this.disabled,to:this.mergedTo},getSlot("lazy-teleport",this.$slots)):null}});const oppositionPositions={top:"bottom",bottom:"top",left:"right",right:"left"},oppositeAligns={start:"end",center:"center",end:"start"},propToCompare={top:"height",bottom:"height",left:"width",right:"width"},transformOrigins={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},overlapTransformOrigin={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},oppositeAlignCssPositionProps={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},keepOffsetDirection={top:!0,bottom:!1,left:!0,right:!1},cssPositionToOppositeAlign={top:"end",bottom:"start",left:"end",right:"start"};function getPlacementAndOffsetOfFollower(e,t,n,r,o,a){if(!o||a)return{placement:e,top:0,left:0};const[s,l]=e.split("-");let u=l!=null?l:"center",d={top:0,left:0};const f=(y,b,x)=>{let C=0,$=0;const E=n[y]-t[b]-t[y];return E>0&&r&&(x?$=keepOffsetDirection[b]?E:-E:C=keepOffsetDirection[b]?E:-E),{left:C,top:$}},m=s==="left"||s==="right";if(u!=="center"){const y=oppositeAlignCssPositionProps[e],b=oppositionPositions[y],x=propToCompare[y];if(n[x]>t[x]){if(t[y]+t[x]<n[x]){const C=(n[x]-t[x])/2;t[y]<C||t[b]<C?t[y]<t[b]?(u=oppositeAligns[l],d=f(x,b,m)):d=f(x,y,m):u="center"}}else n[x]<t[x]&&t[b]<0&&t[y]>t[b]&&(u=oppositeAligns[l])}else{const y=s==="bottom"||s==="top"?"left":"top",b=oppositionPositions[y],x=propToCompare[y],C=(n[x]-t[x])/2;(t[y]<C||t[b]<C)&&(t[y]>t[b]?(u=cssPositionToOppositeAlign[y],d=f(x,y,m)):(u=cssPositionToOppositeAlign[b],d=f(x,b,m)))}let g=s;return t[s]<n[propToCompare[s]]&&t[s]<t[oppositionPositions[s]]&&(g=oppositionPositions[s]),{placement:u!=="center"?`${g}-${u}`:g,left:d.left,top:d.top}}function getProperTransformOrigin(e,t){return t?overlapTransformOrigin[e]:transformOrigins[e]}function getOffset(e,t,n,r,o,a){if(a)switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+o)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+o)}px`,transform:"translateX(-50%)"}}}const style$k=c([c(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),c(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[c("> *",{pointerEvents:"all"})])]);var VFollower=defineComponent({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=inject("VBinder"),n=useMemo(()=>e.enabled!==void 0?e.enabled:e.show),r=ref(null),o=ref(null),a=()=>{const{syncTrigger:g}=e;g.includes("scroll")&&t.addScrollListener(u),g.includes("resize")&&t.addResizeListener(u)},s=()=>{t.removeScrollListener(u),t.removeResizeListener(u)};onMounted(()=>{n.value&&(u(),a())});const l=useSsrAdapter();style$k.mount({id:"vueuc/binder",head:!0,anchorMetaName:cssrAnchorMetaName,ssr:l}),onBeforeUnmount(()=>{s()}),onFontsReady(()=>{n.value&&u()});const u=()=>{if(!n.value)return;const g=r.value;if(g===null)return;const y=t.targetRef,{x:b,y:x,overlap:C}=e,$=b!==void 0&&x!==void 0?getPointRect(b,x):getRect(y);g.style.setProperty("--v-target-width",`${Math.round($.width)}px`),g.style.setProperty("--v-target-height",`${Math.round($.height)}px`);const{width:E,minWidth:N,placement:S,internalShift:k,flip:A}=e;g.setAttribute("v-placement",S),C?g.setAttribute("v-overlap",""):g.removeAttribute("v-overlap");const{style:_}=g;E==="target"?_.width=`${$.width}px`:E!==void 0?_.width=E:_.width="",N==="target"?_.minWidth=`${$.width}px`:N!==void 0?_.minWidth=N:_.minWidth="";const P=getRect(g),I=getRect(o.value),{left:O,top:j,placement:B}=getPlacementAndOffsetOfFollower(S,$,P,k,A,C),V=getProperTransformOrigin(B,C),{left:L,top:G,transform:z}=getOffset(B,I,$,j,O,C);g.setAttribute("v-placement",B),g.style.setProperty("--v-offset-left",`${Math.round(O)}px`),g.style.setProperty("--v-offset-top",`${Math.round(j)}px`),g.style.transform=`translateX(${L}) translateY(${G}) ${z}`,g.style.transformOrigin=V};watch(n,g=>{g?(a(),d()):s()});const d=()=>{nextTick().then(u).catch(g=>console.error(g))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(g=>{watch(toRef(e,g),u)}),["teleportDisabled"].forEach(g=>{watch(toRef(e,g),d)}),watch(toRef(e,"syncTrigger"),g=>{g.includes("resize")?t.addResizeListener(u):t.removeResizeListener(u),g.includes("scroll")?t.addScrollListener(u):t.removeScrollListener(u)});const f=isMounted(),m=useMemo(()=>{const{to:g}=e;if(g!==void 0)return g;f.value});return{VBinder:t,mergedEnabled:n,offsetContainerRef:o,followerRef:r,mergedTo:m,syncPosition:u}},render(){return h(LazyTeleport,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const n=h("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[h("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?withDirectives(n,[[zindexable$1,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}}),MapShim=function(){if(typeof Map!="undefined")return Map;function e(t,n){var r=-1;return t.some(function(o,a){return o[0]===n?(r=a,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),o=this.__entries__[r];return o&&o[1]},t.prototype.set=function(n,r){var o=e(this.__entries__,n);~o?this.__entries__[o][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,o=e(r,n);~o&&r.splice(o,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var o=0,a=this.__entries__;o<a.length;o++){var s=a[o];n.call(r,s[1],s[0])}},t}()}(),isBrowser=typeof window!="undefined"&&typeof document!="undefined"&&window.document===document,global$1=function(){return typeof global!="undefined"&&global.Math===Math?global:typeof self!="undefined"&&self.Math===Math?self:typeof window!="undefined"&&window.Math===Math?window:Function("return this")()}(),requestAnimationFrame$1=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(global$1):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),trailingTimeout=2;function throttle(e,t){var n=!1,r=!1,o=0;function a(){n&&(n=!1,e()),r&&l()}function s(){requestAnimationFrame$1(a)}function l(){var u=Date.now();if(n){if(u-o<trailingTimeout)return;r=!0}else n=!0,r=!1,setTimeout(s,t);o=u}return l}var REFRESH_DELAY=20,transitionKeys=["top","right","bottom","left","width","height","size","weight"],mutationObserverSupported=typeof MutationObserver!="undefined",ResizeObserverController=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=throttle(this.refresh.bind(this),REFRESH_DELAY)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!isBrowser||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),mutationObserverSupported?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!isBrowser||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,o=transitionKeys.some(function(a){return!!~r.indexOf(a)});o&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),defineConfigurable=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},getWindowOf=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||global$1},emptyRect=createRectInit(0,0,0,0);function toFloat(e){return parseFloat(e)||0}function getBordersSize(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,o){var a=e["border-"+o+"-width"];return r+toFloat(a)},0)}function getPaddings(e){for(var t=["top","right","bottom","left"],n={},r=0,o=t;r<o.length;r++){var a=o[r],s=e["padding-"+a];n[a]=toFloat(s)}return n}function getSVGContentRect(e){var t=e.getBBox();return createRectInit(0,0,t.width,t.height)}function getHTMLElementContentRect(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return emptyRect;var r=getWindowOf(e).getComputedStyle(e),o=getPaddings(r),a=o.left+o.right,s=o.top+o.bottom,l=toFloat(r.width),u=toFloat(r.height);if(r.boxSizing==="border-box"&&(Math.round(l+a)!==t&&(l-=getBordersSize(r,"left","right")+a),Math.round(u+s)!==n&&(u-=getBordersSize(r,"top","bottom")+s)),!isDocumentElement(e)){var d=Math.round(l+a)-t,f=Math.round(u+s)-n;Math.abs(d)!==1&&(l-=d),Math.abs(f)!==1&&(u-=f)}return createRectInit(o.left,o.top,l,u)}var isSVGGraphicsElement=function(){return typeof SVGGraphicsElement!="undefined"?function(e){return e instanceof getWindowOf(e).SVGGraphicsElement}:function(e){return e instanceof getWindowOf(e).SVGElement&&typeof e.getBBox=="function"}}();function isDocumentElement(e){return e===getWindowOf(e).document.documentElement}function getContentRect(e){return isBrowser?isSVGGraphicsElement(e)?getSVGContentRect(e):getHTMLElementContentRect(e):emptyRect}function createReadOnlyRect(e){var t=e.x,n=e.y,r=e.width,o=e.height,a=typeof DOMRectReadOnly!="undefined"?DOMRectReadOnly:Object,s=Object.create(a.prototype);return defineConfigurable(s,{x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:o+n,left:t}),s}function createRectInit(e,t,n,r){return{x:e,y:t,width:n,height:r}}var ResizeObservation=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=createRectInit(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=getContentRect(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),ResizeObserverEntry=function(){function e(t,n){var r=createReadOnlyRect(n);defineConfigurable(this,{target:t,contentRect:r})}return e}(),ResizeObserverSPI=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new MapShim,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(t instanceof getWindowOf(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new ResizeObservation(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(t instanceof getWindowOf(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;!n.has(t)||(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(!!this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new ResizeObserverEntry(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),observers=typeof WeakMap!="undefined"?new WeakMap:new MapShim,ResizeObserver=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=ResizeObserverController.getInstance(),r=new ResizeObserverSPI(t,n,this);observers.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){ResizeObserver.prototype[e]=function(){var t;return(t=observers.get(this))[e].apply(t,arguments)}});var index$3=function(){return typeof global$1.ResizeObserver!="undefined"?global$1.ResizeObserver:ResizeObserver}();class ResizeObserverDelegate{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new index$3(this.handleResize),this.elHandlersMap=new Map}handleResize(t){for(const n of t){const r=this.elHandlersMap.get(n.target);r!==void 0&&r(n)}}registerHandler(t,n){this.elHandlersMap.set(t,n),this.observer.observe(t)}unregisterHandler(t){!this.elHandlersMap.has(t)||(this.elHandlersMap.delete(t),this.observer.unobserve(t))}}var delegate=new ResizeObserverDelegate,VResizeObserver=defineComponent({name:"ResizeObserver",props:{onResize:Function},setup(e){return{registered:!1,handleResize(t){const{onResize:n}=e;n!==void 0&&n(t)}}},mounted(){const e=this.$el;if(e===void 0){warn("resize-observer","$el does not exist.");return}if(e.nextElementSibling!==e.nextSibling&&e.nodeType===3&&e.nodeValue!==""){warn("resize-observer","$el can not be observed (it may be a text node).");return}e.nextElementSibling!==null&&(delegate.registerHandler(e.nextElementSibling,this.handleResize),this.registered=!0)},beforeUnmount(){this.registered&&delegate.unregisterHandler(this.$el.nextElementSibling)},render(){return renderSlot(this.$slots,"default")}});function isHTMLElement(e){return e instanceof HTMLElement}function focusFirstDescendant(e){for(let t=0;t<e.childNodes.length;t++){const n=e.childNodes[t];if(isHTMLElement(n)&&(attemptFocus(n)||focusFirstDescendant(n)))return!0}return!1}function focusLastDescendant(e){for(let t=e.childNodes.length-1;t>=0;t--){const n=e.childNodes[t];if(isHTMLElement(n)&&(attemptFocus(n)||focusLastDescendant(n)))return!0}return!1}function attemptFocus(e){if(!isFocusable(e))return!1;try{e.focus()}catch(t){}return document.activeElement===e}function isFocusable(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden"&&e.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let stack=[];const FocusTrap=defineComponent({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const t=createId(),n=ref(null),r=ref(null);let o=!1,a=!1;const s=document.activeElement;function l(){return stack[stack.length-1]===t}function u(C){var $;C.code==="Escape"&&l()&&(($=e.onEsc)===null||$===void 0||$.call(e))}onMounted(()=>{watch(()=>e.active,C=>{C?(m(),on("keydown",document,u)):(off("keydown",document,u),o&&g())},{immediate:!0})}),onBeforeUnmount(()=>{off("keydown",document,u),o&&g()});function d(C){if(!a&&l()){const $=f();if($===null||$.contains(C.target))return;y("first")}}function f(){const C=n.value;if(C===null)return null;let $=C;for(;$=$.nextSibling,!($===null||$ instanceof Element&&$.tagName==="DIV"););return $}function m(){var C;if(!e.disabled){if(stack.push(t),e.autoFocus){const{initialFocusTo:$}=e;$===void 0?y("first"):(C=resolveTo($))===null||C===void 0||C.focus()}o=!0,document.addEventListener("focus",d,!0)}}function g(){var C;if(e.disabled||(document.removeEventListener("focus",d,!0),stack=stack.filter(E=>E!==t),l()))return;const{finalFocusTo:$}=e;$!==void 0?(C=resolveTo($))===null||C===void 0||C.focus():e.returnFocusOnDeactivated&&s instanceof HTMLElement&&(a=!0,s.focus({preventScroll:!0}),a=!1)}function y(C){if(!!l()&&e.active){const $=n.value,E=r.value;if($!==null&&E!==null){const N=f();if(N==null||N===E){a=!0,$.focus({preventScroll:!0}),a=!1;return}a=!0;const S=C==="first"?focusFirstDescendant(N):focusLastDescendant(N);a=!1,S||(a=!0,$.focus({preventScroll:!0}),a=!1)}}}function b(C){if(a)return;const $=f();$!==null&&(C.relatedTarget!==null&&$.contains(C.relatedTarget)?y("last"):y("first"))}function x(C){a||(C.relatedTarget!==null&&C.relatedTarget===n.value?y("last"):y("first"))}return{focusableStartRef:n,focusableEndRef:r,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:b,handleEndFocus:x}},render(){const{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();const{active:t,focusableStyle:n}=this;return h(Fragment,null,[h("div",{"aria-hidden":"true",tabindex:t?"0":"-1",ref:"focusableStartRef",style:n,onFocus:this.handleStartFocus}),e(),h("div",{"aria-hidden":"true",style:n,ref:"focusableEndRef",tabindex:t?"0":"-1",onFocus:this.handleEndFocus})])}}),base={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.52",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},baseBackgroundRgb=rgba(base.neutralBase),baseInvertBackgroundRgb=rgba(base.neutralInvertBase),overlayPrefix="rgba("+baseInvertBackgroundRgb.slice(0,3).join(", ")+", ";function overlay(e){return overlayPrefix+String(e)+")"}function neutral(e){const t=Array.from(baseInvertBackgroundRgb);return t[3]=Number(e),composite(baseBackgroundRgb,t)}const derived=Object.assign(Object.assign({name:"common"},commonVariables$7),{baseColor:base.neutralBase,primaryColor:base.primaryDefault,primaryColorHover:base.primaryHover,primaryColorPressed:base.primaryActive,primaryColorSuppl:base.primarySuppl,infoColor:base.infoDefault,infoColorHover:base.infoHover,infoColorPressed:base.infoActive,infoColorSuppl:base.infoSuppl,successColor:base.successDefault,successColorHover:base.successHover,successColorPressed:base.successActive,successColorSuppl:base.successSuppl,warningColor:base.warningDefault,warningColorHover:base.warningHover,warningColorPressed:base.warningActive,warningColorSuppl:base.warningSuppl,errorColor:base.errorDefault,errorColorHover:base.errorHover,errorColorPressed:base.errorActive,errorColorSuppl:base.errorSuppl,textColorBase:base.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:neutral(base.alpha4),placeholderColor:neutral(base.alpha4),placeholderColorDisabled:neutral(base.alpha5),iconColor:neutral(base.alpha4),iconColorHover:scaleColor(neutral(base.alpha4),{lightness:.75}),iconColorPressed:scaleColor(neutral(base.alpha4),{lightness:.9}),iconColorDisabled:neutral(base.alpha5),opacity1:base.alpha1,opacity2:base.alpha2,opacity3:base.alpha3,opacity4:base.alpha4,opacity5:base.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeColor:neutral(Number(base.alphaClose)),closeColorHover:neutral(Number(base.alphaClose)*1.25),closeColorPressed:neutral(Number(base.alphaClose)*.8),closeColorDisabled:neutral(base.alpha4),clearColor:neutral(base.alpha4),clearColorHover:scaleColor(neutral(base.alpha4),{lightness:.75}),clearColorPressed:scaleColor(neutral(base.alpha4),{lightness:.9}),scrollbarColor:overlay(base.alphaScrollbar),scrollbarColorHover:overlay(base.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:neutral(base.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:base.neutralPopover,tableColor:base.neutralCard,cardColor:base.neutralCard,modalColor:base.neutralModal,bodyColor:base.neutralBody,tagColor:"rgb(250, 250, 252)",avatarColor:neutral(base.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:neutral(base.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:base.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"});var commonLight=derived;const self$i=e=>{const{scrollbarColor:t,scrollbarColorHover:n}=e;return{color:t,colorHover:n}},scrollbarLight={name:"Scrollbar",common:commonLight,self:self$i};var scrollbarLight$1=scrollbarLight;const{cubicBezierEaseInOut:cubicBezierEaseInOut$2}=commonVariables$7;function fadeInTransition({name:e="fade-in",enterDuration:t="0.2s",leaveDuration:n="0.2s",enterCubicBezier:r=cubicBezierEaseInOut$2,leaveCubicBezier:o=cubicBezierEaseInOut$2}={}){return[c$1(`&.${e}-transition-enter-active`,{transition:`all ${t} ${r}!important`}),c$1(`&.${e}-transition-leave-active`,{transition:`all ${n} ${o}!important`}),c$1(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),c$1(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}var style$j=cB("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[c$1(">",[cB("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[c$1("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),c$1(">",[cB("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])]),cB("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 `,[cM("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[c$1(">",[cE("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),cM("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[c$1(">",[cE("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),cM("disabled",[c$1(">",[cE("scrollbar",{pointerEvents:"none"})])]),c$1(">",[cE("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[fadeInTransition(),c$1("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]);const scrollbarProps=Object.assign(Object.assign({},useTheme.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function}),Scrollbar=defineComponent({name:"Scrollbar",props:scrollbarProps,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=useConfig(e),r=ref(null),o=ref(null),a=ref(null),s=ref(null),l=ref(null),u=ref(null),d=ref(null),f=ref(null),m=ref(null),g=ref(null),y=ref(null),b=ref(0),x=ref(0),C=ref(!1),$=ref(!1);let E=!1,N=!1,S,k,A=0,_=0,P=0,I=0;const O=useIsIos(),j=computed(()=>{const{value:W}=f,{value:ae}=u,{value:he}=g;return W===null||ae===null||he===null?0:Math.min(W,he*W/ae+e.size*1.5)}),B=computed(()=>`${j.value}px`),V=computed(()=>{const{value:W}=m,{value:ae}=d,{value:he}=y;return W===null||ae===null||he===null?0:he*W/ae+e.size*1.5}),L=computed(()=>`${V.value}px`),G=computed(()=>{const{value:W}=f,{value:ae}=b,{value:he}=u,{value:Pe}=g;if(W===null||he===null||Pe===null)return 0;{const Re=he-W;return Re?ae/Re*(Pe-j.value):0}}),z=computed(()=>`${G.value}px`),J=computed(()=>{const{value:W}=m,{value:ae}=x,{value:he}=d,{value:Pe}=y;if(W===null||he===null||Pe===null)return 0;{const Re=he-W;return Re?ae/Re*(Pe-V.value):0}}),ie=computed(()=>`${J.value}px`),ye=computed(()=>{const{value:W}=f,{value:ae}=u;return W!==null&&ae!==null&&ae>W}),be=computed(()=>{const{value:W}=m,{value:ae}=d;return W!==null&&ae!==null&&ae>W}),Te=computed(()=>{const{container:W}=e;return W?W():o.value}),Ae=computed(()=>{const{content:W}=e;return W?W():a.value}),Oe=Z,Me=W=>{const{onResize:ae}=e;ae&&ae(W),Z()},H=(W,ae)=>{if(!e.scrollable)return;if(typeof W=="number"){Y(W,ae!=null?ae:0,0,!1,"auto");return}const{left:he,top:Pe,index:Re,elSize:Ie,position:ke,behavior:$e,el:je,debounce:ze=!0}=W;(he!==void 0||Pe!==void 0)&&Y(he!=null?he:0,Pe!=null?Pe:0,0,!1,$e),je!==void 0?Y(0,je.offsetTop,je.offsetHeight,ze,$e):Re!==void 0&&Ie!==void 0?Y(0,Re*Ie,Ie,ze,$e):ke==="bottom"?Y(0,Number.MAX_SAFE_INTEGER,0,!1,$e):ke==="top"&&Y(0,0,0,!1,$e)},te=(W,ae)=>{if(!e.scrollable)return;const{value:he}=Te;!he||(typeof W=="object"?he.scrollBy(W):he.scrollBy(W,ae||0))};function Y(W,ae,he,Pe,Re){const{value:Ie}=Te;if(!!Ie){if(Pe){const{scrollTop:ke,offsetHeight:$e}=Ie;if(ae>ke){ae+he<=ke+$e||Ie.scrollTo({left:W,top:ae+he-$e,behavior:Re});return}}Ie.scrollTo({left:W,top:ae,behavior:Re})}}function ne(){Se(),R(),Z()}function se(){_e()}function _e(){me(),ve()}function me(){k!==void 0&&window.clearTimeout(k),k=window.setTimeout(()=>{$.value=!1},e.duration)}function ve(){S!==void 0&&window.clearTimeout(S),S=window.setTimeout(()=>{C.value=!1},e.duration)}function Se(){S!==void 0&&window.clearTimeout(S),C.value=!0}function R(){k!==void 0&&window.clearTimeout(k),$.value=!0}function M(W){const{onScroll:ae}=e;ae&&ae(W),F()}function F(){const{value:W}=Te;W&&(b.value=W.scrollTop,x.value=W.scrollLeft)}function q(){const{value:W}=Ae;W&&(u.value=W.offsetHeight,d.value=W.offsetWidth);const{value:ae}=Te;ae&&(f.value=ae.offsetHeight,m.value=ae.offsetWidth);const{value:he}=l,{value:Pe}=s;he&&(y.value=he.offsetWidth),Pe&&(g.value=Pe.offsetHeight)}function K(){const{value:W}=Te;W&&(b.value=W.scrollTop,x.value=W.scrollLeft,f.value=W.offsetHeight,m.value=W.offsetWidth,u.value=W.scrollHeight,d.value=W.scrollWidth);const{value:ae}=l,{value:he}=s;ae&&(y.value=ae.offsetWidth),he&&(g.value=he.offsetHeight)}function Z(){!e.scrollable||(e.useUnifiedContainer?K():(q(),F()))}function Q(W){var ae;return!(!((ae=r.value)===null||ae===void 0)&&ae.contains(W.target))}function U(W){W.preventDefault(),W.stopPropagation(),N=!0,on("mousemove",window,ee,!0),on("mouseup",window,X,!0),_=x.value,P=W.clientX}function ee(W){if(!N)return;S!==void 0&&window.clearTimeout(S),k!==void 0&&window.clearTimeout(k);const{value:ae}=m,{value:he}=d,{value:Pe}=V;if(ae===null||he===null)return;const Ie=(W.clientX-P)*(he-ae)/(ae-Pe),ke=he-ae;let $e=_+Ie;$e=Math.min(ke,$e),$e=Math.max($e,0);const{value:je}=Te;if(je){je.scrollLeft=$e;const{internalOnUpdateScrollLeft:ze}=e;ze&&ze($e)}}function X(W){W.preventDefault(),W.stopPropagation(),off("mousemove",window,ee,!0),off("mouseup",window,X,!0),N=!1,Z(),Q(W)&&_e()}function ue(W){W.preventDefault(),W.stopPropagation(),E=!0,on("mousemove",window,le,!0),on("mouseup",window,de,!0),A=b.value,I=W.clientY}function le(W){if(!E)return;S!==void 0&&window.clearTimeout(S),k!==void 0&&window.clearTimeout(k);const{value:ae}=f,{value:he}=u,{value:Pe}=j;if(ae===null||he===null)return;const Ie=(W.clientY-I)*(he-ae)/(ae-Pe),ke=he-ae;let $e=A+Ie;$e=Math.min(ke,$e),$e=Math.max($e,0);const{value:je}=Te;je&&(je.scrollTop=$e)}function de(W){W.preventDefault(),W.stopPropagation(),off("mousemove",window,le,!0),off("mouseup",window,de,!0),E=!1,Z(),Q(W)&&_e()}watchEffect(()=>{const{value:W}=be,{value:ae}=ye,{value:he}=t,{value:Pe}=l,{value:Re}=s;Pe&&(W?Pe.classList.remove(`${he}-scrollbar-rail--disabled`):Pe.classList.add(`${he}-scrollbar-rail--disabled`)),Re&&(ae?Re.classList.remove(`${he}-scrollbar-rail--disabled`):Re.classList.add(`${he}-scrollbar-rail--disabled`))}),onMounted(()=>{e.container||Z()}),onBeforeUnmount(()=>{S!==void 0&&window.clearTimeout(S),k!==void 0&&window.clearTimeout(k),off("mousemove",window,le,!0),off("mouseup",window,de,!0)});const ge=useTheme("Scrollbar","-scrollbar",style$j,scrollbarLight$1,e,t),xe=computed(()=>{const{common:{cubicBezierEaseInOut:W,scrollbarBorderRadius:ae,scrollbarHeight:he,scrollbarWidth:Pe},self:{color:Re,colorHover:Ie}}=ge.value;return{"--n-scrollbar-bezier":W,"--n-scrollbar-color":Re,"--n-scrollbar-color-hover":Ie,"--n-scrollbar-border-radius":ae,"--n-scrollbar-width":Pe,"--n-scrollbar-height":he}}),we=n?useThemeClass("scrollbar",void 0,xe,e):void 0;return Object.assign(Object.assign({},{scrollTo:H,scrollBy:te,sync:Z,syncUnifiedContainer:K,handleMouseEnterWrapper:ne,handleMouseLeaveWrapper:se}),{mergedClsPrefix:t,containerScrollTop:b,wrapperRef:r,containerRef:o,contentRef:a,yRailRef:s,xRailRef:l,needYBar:ye,needXBar:be,yBarSizePx:B,xBarSizePx:L,yBarTopPx:z,xBarLeftPx:ie,isShowXBar:C,isShowYBar:$,isIos:O,handleScroll:M,handleContentResize:Oe,handleContainerResize:Me,handleYScrollMouseDown:ue,handleXScrollMouseDown:U,cssVars:n?void 0:xe,themeClass:we==null?void 0:we.themeClass,onRender:we==null?void 0:we.onRender})},render(){var e;const{$slots:t,mergedClsPrefix:n,triggerDisplayManually:r}=this;if(!this.scrollable)return(e=t.default)===null||e===void 0?void 0:e.call(t);const o=()=>{var a,s;return(a=this.onRender)===null||a===void 0||a.call(this),h("div",mergeProps(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${n}-scrollbar`,this.themeClass],style:this.cssVars,onMouseenter:r?void 0:this.handleMouseEnterWrapper,onMouseleave:r?void 0:this.handleMouseLeaveWrapper}),[this.container?(s=t.default)===null||s===void 0?void 0:s.call(t):h("div",{role:"none",ref:"containerRef",class:[`${n}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},h(VResizeObserver,{onResize:this.handleContentResize},{default:()=>h("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${n}-scrollbar-content`,this.contentClass]},t)})),h("div",{ref:"yRailRef",class:`${n}-scrollbar-rail ${n}-scrollbar-rail--vertical`,style:this.horizontalRailStyle,"aria-hidden":!0},h(Transition,{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?h("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),h("div",{ref:"xRailRef",class:`${n}-scrollbar-rail ${n}-scrollbar-rail--horizontal`,style:this.verticalRailStyle,"aria-hidden":!0},h(Transition,{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?h("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,left:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])};return this.container?o():h(VResizeObserver,{onResize:this.handleContainerResize},{default:o})}});var NScrollbar=Scrollbar;const{cubicBezierEaseIn:cubicBezierEaseIn$1,cubicBezierEaseOut:cubicBezierEaseOut$1}=commonVariables$7;function fadeInScaleUpTransition({transformOrigin:e="inherit",duration:t=".2s",enterScale:n=".9",originalTransform:r="",originalTransition:o=""}={}){return[c$1("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${t} ${cubicBezierEaseIn$1}, transform ${t} ${cubicBezierEaseIn$1} ${o&&","+o}`}),c$1("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${t} ${cubicBezierEaseOut$1}, transform ${t} ${cubicBezierEaseOut$1} ${o&&","+o}`}),c$1("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${r} scale(${n})`}),c$1("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${r} scale(1)`})]}var style$i=cB("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),NBaseWave=defineComponent({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){useStyle("-base-wave",style$i,toRef(e,"clsPrefix"));const t=ref(null),n=ref(!1);let r=null;return onBeforeUnmount(()=>{r!==null&&window.clearTimeout(r)}),{active:n,selfRef:t,play(){r!==null&&(window.clearTimeout(r),n.value=!1,r=null),nextTick(()=>{var o;(o=t.value)===null||o===void 0||o.offsetHeight,n.value=!0,r=window.setTimeout(()=>{n.value=!1,r=null},1e3)})}}},render(){const{clsPrefix:e}=this;return h("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),commonVariables$6={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"};const self$h=e=>{const{boxShadow2:t,popoverColor:n,textColor2:r,borderRadius:o,fontSize:a,dividerColor:s}=e;return Object.assign(Object.assign({},commonVariables$6),{fontSize:a,borderRadius:o,color:n,dividerColor:s,textColor:r,boxShadow:t})},popoverLight={name:"Popover",common:commonLight,self:self$h};var popoverLight$1=popoverLight;const oppositePlacement={top:"bottom",bottom:"top",left:"right",right:"left"},arrowSize="var(--n-arrow-height) * 1.414";var style$h=c$1([cB("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 transform-origin: inherit;
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 `,[c$1("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),c$1("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),c$1("&.popover-transition-enter-active",`
 transition:
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),c$1("&.popover-transition-leave-active",`
 transition:
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `),cNotM("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[cNotM("show-header","padding: var(--n-padding);")]),cE("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),cE("content",`
 padding: var(--n-padding);
 `),cB("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[cB("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${arrowSize});
 height: calc(${arrowSize});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)])]),placementStyle("top-start",`
 top: calc(${arrowSize} / -2 + 1px);
 left: calc(${getArrowOffset("top-start")} - var(--v-offset-left));
 `),placementStyle("top",`
 top: calc(${arrowSize} / -2 + 1px);
 transform: translateX(calc(${arrowSize} / -2)) rotate(45deg);
 left: 50%;
 `),placementStyle("top-end",`
 top: calc(${arrowSize} / -2 + 1px);
 right: calc(${getArrowOffset("top-end")} + var(--v-offset-left));
 `),placementStyle("bottom-start",`
 bottom: calc(${arrowSize} / -2 + 1px);
 left: calc(${getArrowOffset("bottom-start")} - var(--v-offset-left));
 `),placementStyle("bottom",`
 bottom: calc(${arrowSize} / -2 + 1px);
 transform: translateX(calc(${arrowSize} / -2)) rotate(45deg);
 left: 50%;
 `),placementStyle("bottom-end",`
 bottom: calc(${arrowSize} / -2 + 1px);
 right: calc(${getArrowOffset("bottom-end")} + var(--v-offset-left));
 `),placementStyle("left-start",`
 left: calc(${arrowSize} / -2 + 1px);
 top: calc(${getArrowOffset("left-start")} - var(--v-offset-top));
 `),placementStyle("left",`
 left: calc(${arrowSize} / -2 + 1px);
 transform: translateY(calc(${arrowSize} / -2)) rotate(45deg);
 top: 50%;
 `),placementStyle("left-end",`
 left: calc(${arrowSize} / -2 + 1px);
 bottom: calc(${getArrowOffset("left-end")} + var(--v-offset-top));
 `),placementStyle("right-start",`
 right: calc(${arrowSize} / -2 + 1px);
 top: calc(${getArrowOffset("right-start")} - var(--v-offset-top));
 `),placementStyle("right",`
 right: calc(${arrowSize} / -2 + 1px);
 transform: translateY(calc(${arrowSize} / -2)) rotate(45deg);
 top: 50%;
 `),placementStyle("right-end",`
 right: calc(${arrowSize} / -2 + 1px);
 bottom: calc(${getArrowOffset("right-end")} + var(--v-offset-top));
 `),...map({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),r=n?"width":"height";return e.map(o=>{const a=o.split("-")[1]==="end",l=`calc((${`var(--v-target-${r}, 0px)`} - ${arrowSize}) / 2)`,u=getArrowOffset(o);return c$1(`[v-placement="${o}"] >`,[cB("popover",[cM("center-arrow",[cB("popover-arrow",`${t}: calc(max(${l}, ${u}) ${a?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function getArrowOffset(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function placementStyle(e,t){const n=e.split("-")[0],r=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return c$1(`[v-placement="${e}"] >`,[cB("popover",[cNotM("manual-trigger",`
 margin-${oppositePlacement[n]}: var(--n-space);
 `),cM("show-arrow",`
 margin-${oppositePlacement[n]}: var(--n-space-arrow);
 `),cM("overlap",`
 margin: 0;
 `),cCB("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: calc(100% - 1px);
 ${oppositePlacement[n]}: auto;
 ${r}
 `,[cB("popover-arrow",t)])])])}const popoverBodyProps=Object.assign(Object.assign({},useTheme.props),{to:useAdjustedTo.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,internalTrapFocus:Boolean,animated:Boolean,onClickoutside:Function,minWidth:Number,maxWidth:Number}),renderArrow=({arrowStyle:e,clsPrefix:t})=>h("div",{key:"__popover-arrow__",class:`${t}-popover-arrow-wrapper`},h("div",{class:`${t}-popover-arrow`,style:e}));var NPopoverBody=defineComponent({name:"PopoverBody",inheritAttrs:!1,props:popoverBodyProps,setup(e,{slots:t,attrs:n}){const{namespaceRef:r,mergedClsPrefixRef:o,inlineThemeDisabled:a}=useConfig(e),s=useTheme("Popover","-popover",style$h,popoverLight$1,e,o),l=ref(null),u=inject("NPopover"),d=ref(null),f=ref(e.show),m=computed(()=>{const{trigger:A,onClickoutside:_}=e,P=[],{positionManuallyRef:{value:I}}=u;return I||(A==="click"&&!_&&P.push([clickoutside$1,N]),A==="hover"&&P.push([mousemoveoutside$1,E])),_&&P.push([clickoutside$1,N]),e.displayDirective==="show"&&P.push([vShow,e.show]),P}),g=computed(()=>[{width:e.width==="trigger"?"":formatLength(e.width)},e.maxWidth?{maxWidth:formatLength(e.maxWidth)}:{},e.minWidth?{minWidth:formatLength(e.minWidth)}:{},a?void 0:y.value]),y=computed(()=>{const{common:{cubicBezierEaseInOut:A,cubicBezierEaseIn:_,cubicBezierEaseOut:P},self:{space:I,spaceArrow:O,padding:j,fontSize:B,textColor:V,dividerColor:L,color:G,boxShadow:z,borderRadius:J,arrowHeight:ie,arrowOffset:ye,arrowOffsetVertical:be}}=s.value;return{"--n-box-shadow":z,"--n-bezier":A,"--n-bezier-ease-in":_,"--n-bezier-ease-out":P,"--n-font-size":B,"--n-text-color":V,"--n-color":G,"--n-divider-color":L,"--n-border-radius":J,"--n-arrow-height":ie,"--n-arrow-offset":ye,"--n-arrow-offset-vertical":be,"--n-padding":j,"--n-space":I,"--n-space-arrow":O}}),b=a?useThemeClass("popover",void 0,y,e):void 0;u.setBodyInstance({syncPosition:x}),onBeforeUnmount(()=>{u.setBodyInstance(null)}),watch(toRef(e,"show"),A=>{e.animated||(A?f.value=!0:f.value=!1)});function x(){var A;(A=l.value)===null||A===void 0||A.syncPosition()}function C(A){e.trigger==="hover"&&e.keepAliveOnHover&&u.handleMouseEnter(A)}function $(A){e.trigger==="hover"&&e.keepAliveOnHover&&u.handleMouseLeave(A)}function E(A){e.trigger==="hover"&&!S().contains(A.target)&&u.handleMouseMoveOutside(A)}function N(A){(e.trigger==="click"&&!S().contains(A.target)||e.onClickoutside)&&u.handleClickOutside(A)}function S(){return u.getTriggerElement()}provide(popoverBodyInjectionKey,d),provide(drawerBodyInjectionKey,null),provide(modalBodyInjectionKey,null);function k(){b==null||b.onRender();let A;const{internalRenderBodyRef:{value:_}}=u,{value:P}=o;if(_)A=_([`${P}-popover`,b==null?void 0:b.themeClass.value,e.overlap&&`${P}-popover--overlap`],d,g.value,C,$);else{const{value:I}=u.extraClassRef,{internalTrapFocus:O}=e,j=()=>{var B;return[resolveWrappedSlot(t.header,V=>V&&[h("div",{class:`${P}-popover__header`},V),h("div",{class:`${P}-popover__content`},t)])||((B=t.default)===null||B===void 0?void 0:B.call(t)),e.showArrow?renderArrow({arrowStyle:e.arrowStyle,clsPrefix:P}):null]};A=h("div",mergeProps({class:[`${P}-popover`,b==null?void 0:b.themeClass.value,I.map(B=>`${P}-${B}`),{[`${P}-popover--overlap`]:e.overlap,[`${P}-popover--show-arrow`]:e.showArrow,[`${P}-popover--show-header`]:!isSlotEmpty(t.header),[`${P}-popover--raw`]:e.raw,[`${P}-popover--manual-trigger`]:e.trigger==="manual",[`${P}-popover--center-arrow`]:e.arrowPointToCenter}],ref:d,style:g.value,onKeydown:u.handleKeydown,onMouseenter:C,onMouseleave:$},n),O?h(FocusTrap,{active:e.show,autoFocus:!0},{default:j}):j())}return e.displayDirective==="show"||e.show?withDirectives(A,m.value):null}return{namespace:r,isMounted:u.isMountedRef,zIndex:u.zIndexRef,followerRef:l,adjustedTo:useAdjustedTo(e),followerEnabled:f,renderContentNode:k}},render(){return h(VFollower,{zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,ref:"followerRef",overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===useAdjustedTo.tdkey},{default:()=>this.animated?h(Transition,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{this.followerEnabled=!1}},{default:this.renderContentNode}):this.renderContentNode()})}});const bodyPropKeys=Object.keys(popoverBodyProps),triggerEventMap={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function appendEvents(e,t,n){triggerEventMap[t].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const o=e.props[r],a=n[r];o?e.props[r]=(...s)=>{o(...s),a(...s)}:e.props[r]=a})}const textVNodeType=createTextVNode("").type,popoverBaseProps={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},onClickoutside:Function,internalExtraClass:{type:Array,default:()=>[]},"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],zIndex:Number,to:useAdjustedTo.propTo,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},popoverProps=Object.assign(Object.assign(Object.assign({},useTheme.props),popoverBaseProps),{internalRenderBody:Function});var NPopover=defineComponent({name:"Popover",inheritAttrs:!1,props:popoverProps,__popover__:!0,setup(e){watchEffect(()=>{e.maxWidth!==void 0&&warnOnce("popover","`max-width` is deprecated, please use `style` instead."),e.minWidth!==void 0&&warnOnce("popover","`min-width` is deprecated, please use `style` instead."),e.arrow!==void 0&&warnOnce("popover","`arrow` is deprecated, please use `showArrow` instead."),e.onHide!==void 0&&warnOnce("popover","`on-hide` is deprecated, please use `on-update:show` instead."),e.onShow!==void 0&&warnOnce("popover","`on-show` is deprecated, please use `on-update:show` instead.")});const t=isMounted(),n=ref(null),r=computed(()=>e.show),o=ref(e.defaultShow),a=useMergedState(r,o),s=useMemo(()=>e.disabled?!1:a.value),l=()=>{if(e.disabled)return!0;const{getDisabled:L}=e;return!!(L!=null&&L())},u=()=>l()?!1:a.value,d=useCompitable(e,["arrow","showArrow"]),f=computed(()=>e.overlap?!1:d.value);let m=null;const g=ref(null),y=ref(null),b=useMemo(()=>e.x!==void 0&&e.y!==void 0);function x(L){const{"onUpdate:show":G,onUpdateShow:z,onShow:J,onHide:ie}=e;o.value=L,G&&call(G,L),z&&call(z,L),L&&J&&call(J,!0),L&&ie&&call(ie,!1)}function C(){m&&m.syncPosition()}function $(){const{value:L}=g;L&&(window.clearTimeout(L),g.value=null)}function E(){const{value:L}=y;L&&(window.clearTimeout(L),y.value=null)}function N(){const L=l();if(e.trigger==="focus"&&!L){if(u())return;x(!0)}}function S(){const L=l();if(e.trigger==="focus"&&!L){if(!u())return;x(!1)}}function k(){const L=l();if(e.trigger==="hover"&&!L){if(E(),g.value!==null||u())return;const G=()=>{x(!0),g.value=null},{delay:z}=e;z===0?G():g.value=window.setTimeout(G,z)}}function A(){const L=l();if(e.trigger==="hover"&&!L){if($(),y.value!==null||!u())return;const G=()=>{x(!1),y.value=null},{duration:z}=e;z===0?G():y.value=window.setTimeout(G,z)}}function _(){A()}function P(L){var G;!u()||(e.trigger==="click"&&($(),E(),x(!1)),(G=e.onClickoutside)===null||G===void 0||G.call(e,L))}function I(){if(e.trigger==="click"&&!l()){$(),E();const L=!u();x(L)}}function O(L){!e.internalTrapFocus||L.code==="Escape"&&($(),E(),x(!1))}function j(L){o.value=L}function B(){var L;return(L=n.value)===null||L===void 0?void 0:L.targetRef}function V(L){m=L}return provide("NPopover",{getTriggerElement:B,handleKeydown:O,handleMouseEnter:k,handleMouseLeave:A,handleClickOutside:P,handleMouseMoveOutside:_,setBodyInstance:V,positionManuallyRef:b,isMountedRef:t,zIndexRef:toRef(e,"zIndex"),extraClassRef:toRef(e,"internalExtraClass"),internalRenderBodyRef:toRef(e,"internalRenderBody")}),{binderInstRef:n,positionManually:b,mergedShowConsideringDisabledProp:s,uncontrolledShow:o,mergedShowArrow:f,getMergedShow:u,setShow:j,handleClick:I,handleMouseEnter:k,handleMouseLeave:A,handleFocus:N,handleBlur:S,syncPosition:C}},render(){var e;const{positionManually:t,$slots:n}=this;let r,o=!1;if(!t&&(n.activator?r=getFirstSlotVNode(n,"activator"):r=getFirstSlotVNode(n,"trigger"),r)){r=cloneVNode(r),r=r.type===textVNodeType?h("span",[r]):r;const a={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)o=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[a,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[a];else{const{internalInheritedEventHandlers:s}=this,l=[a,...s],u={onBlur:d=>{l.forEach(f=>{f.onBlur(d)})},onFocus:d=>{l.forEach(f=>{f.onFocus(d)})},onClick:d=>{l.forEach(f=>{f.onClick(d)})},onMouseenter:d=>{l.forEach(f=>{f.onMouseenter(d)})},onMouseleave:d=>{l.forEach(f=>{f.onMouseleave(d)})}};appendEvents(r,s?"nested":t?"manual":this.trigger,u)}}return h(VBinder,{ref:"binderInstRef",syncTarget:!o,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const a=this.getMergedShow();return[this.internalTrapFocus&&a?withDirectives(h("div",{style:{position:"fixed",inset:0}}),[[zindexable$1,{enabled:a,zIndex:this.zIndex}]]):null,t?null:h(VTarget,null,{default:()=>r}),h(NPopoverBody,keep(this.$props,bodyPropKeys,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:a})),{default:()=>{var s,l;return(l=(s=this.$slots).default)===null||l===void 0?void 0:l.call(s)},header:()=>{var s,l;return(l=(s=this.$slots).header)===null||l===void 0?void 0:l.call(s)}})]}})}}),commonVariables$5={closeSizeSmall:"14px",closeSizeMedium:"14px",closeSizeLarge:"14px",padding:"0 7px",closeMargin:"0 0 0 3px",closeMarginRtl:"0 3px 0 0"};const self$g=e=>{const{textColor2:t,primaryColorHover:n,primaryColorPressed:r,primaryColor:o,infoColor:a,successColor:s,warningColor:l,errorColor:u,baseColor:d,borderColor:f,opacityDisabled:m,tagColor:g,closeColor:y,closeColorHover:b,closeColorPressed:x,borderRadiusSmall:C,fontSizeTiny:$,fontSizeSmall:E,fontSizeMedium:N,heightTiny:S,heightSmall:k,heightMedium:A}=e;return Object.assign(Object.assign({},commonVariables$5),{heightSmall:S,heightMedium:k,heightLarge:A,borderRadius:C,opacityDisabled:m,fontSizeSmall:$,fontSizeMedium:E,fontSizeLarge:N,textColorCheckable:t,textColorHoverCheckable:n,textColorPressedCheckable:r,textColorChecked:d,colorCheckable:"#0000",colorHoverCheckable:"#0000",colorPressedCheckable:"#0000",colorChecked:o,colorCheckedHover:n,colorCheckedPressed:r,border:`1px solid ${f}`,textColor:t,color:g,closeColor:y,closeColorHover:b,closeColorPressed:x,borderPrimary:`1px solid ${changeColor(o,{alpha:.3})}`,textColorPrimary:o,colorPrimary:changeColor(o,{alpha:.1}),closeColorPrimary:changeColor(o,{alpha:.75}),closeColorHoverPrimary:changeColor(o,{alpha:.6}),closeColorPressedPrimary:changeColor(o,{alpha:.9}),borderInfo:`1px solid ${changeColor(a,{alpha:.3})}`,textColorInfo:a,colorInfo:changeColor(a,{alpha:.1}),closeColorInfo:changeColor(a,{alpha:.75}),closeColorHoverInfo:changeColor(a,{alpha:.6}),closeColorPressedInfo:changeColor(a,{alpha:.9}),borderSuccess:`1px solid ${changeColor(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:changeColor(s,{alpha:.1}),closeColorSuccess:changeColor(s,{alpha:.75}),closeColorHoverSuccess:changeColor(s,{alpha:.6}),closeColorPressedSuccess:changeColor(s,{alpha:.9}),borderWarning:`1px solid ${changeColor(l,{alpha:.35})}`,textColorWarning:l,colorWarning:changeColor(l,{alpha:.12}),closeColorWarning:changeColor(l,{alpha:.75}),closeColorHoverWarning:changeColor(l,{alpha:.6}),closeColorPressedWarning:changeColor(l,{alpha:.9}),borderError:`1px solid ${changeColor(u,{alpha:.23})}`,textColorError:u,colorError:changeColor(u,{alpha:.08}),closeColorError:changeColor(u,{alpha:.65}),closeColorHoverError:changeColor(u,{alpha:.5}),closeColorPressedError:changeColor(u,{alpha:.8})})},tagLight={name:"Tag",common:commonLight,self:self$g};var tagLight$1=tagLight,commonProps={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},style$g=cB("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[cE("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),cE("avatar",`
 display: flex;
 margin-right: 6px;
 `),cE("close",`
 font-size: var(--n-close-size);
 margin: var(--n-close-margin);
 transition: color .3s var(--n-bezier);
 cursor: pointer;
 `),cM("round",`
 padding: 0 calc(var(--n-height) / 2);
 border-radius: calc(var(--n-height) / 2);
 `,[cE("avatar",`
 margin-left: calc((var(--n-height) - 8px) / -2);
 `)]),cM("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),cM("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[cNotM("disabled",[c$1("&:hover","background-color: var(--n-color-hover-checkable);",[cNotM("checked","color: var(--n-text-color-hover-checkable);")]),c$1("&:active","background-color: var(--n-color-pressed-checkable);",[cNotM("checked","color: var(--n-text-color-pressed-checkable);")])]),cM("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[cNotM("disabled",[c$1("&:hover","background-color: var(--n-color-checked-hover);"),c$1("&:active","background-color: var(--n-color-checked-pressed);")])])])]);function useRtl(e,t,n){if(!t)return;const r=useSsrAdapter(),o=computed(()=>{const{value:s}=t;if(!s)return;const l=s[e];if(!!l)return l}),a=()=>{watchEffect(()=>{const{value:s}=n,l=`${s}${e}Rtl`;if(exists(l,r))return;const{value:u}=o;!u||u.style.mount({id:l,head:!0,anchorMetaName:cssrAnchorMetaName$1,props:{bPrefix:s?`.${s}-`:void 0},ssr:r})})};return r?a():onBeforeMount(a),o}const tagProps=Object.assign(Object.assign(Object.assign({},useTheme.props),commonProps),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalStopClickPropagation:Boolean,onCheckedChange:{type:Function,validator:()=>(warn$2("tag","`on-checked-change` is deprecated, please use `on-update:checked` instead"),!0),default:void 0}}),tagInjectionKey="n-tag";var __unplugin_components_0$8=defineComponent({name:"Tag",props:tagProps,setup(e){const t=ref(null),{mergedBorderedRef:n,mergedClsPrefixRef:r,inlineThemeDisabled:o,mergedRtlRef:a}=useConfig(e),s=useTheme("Tag","-tag",style$g,tagLight$1,e,r);provide(tagInjectionKey,{roundRef:toRef(e,"round")});function l(y){if(!e.disabled&&e.checkable){const{checked:b,onCheckedChange:x,onUpdateChecked:C,"onUpdate:checked":$}=e;C&&C(!b),$&&$(!b),x&&x(!b)}}function u(y){if(e.internalStopClickPropagation&&y.stopPropagation(),!e.disabled){const{onClose:b}=e;b&&call(b,y)}}const d={setTextContent(y){const{value:b}=t;b&&(b.textContent=y)}},f=useRtl("Tag",a,r),m=computed(()=>{const{type:y,size:b,color:{color:x,textColor:C}={}}=e,{common:{cubicBezierEaseInOut:$},self:{padding:E,closeMargin:N,closeMarginRtl:S,borderRadius:k,opacityDisabled:A,textColorCheckable:_,textColorHoverCheckable:P,textColorPressedCheckable:I,textColorChecked:O,colorCheckable:j,colorHoverCheckable:B,colorPressedCheckable:V,colorChecked:L,colorCheckedHover:G,colorCheckedPressed:z,[createKey("closeSize",b)]:J,[createKey("fontSize",b)]:ie,[createKey("height",b)]:ye,[createKey("color",y)]:be,[createKey("textColor",y)]:Te,[createKey("border",y)]:Ae,[createKey("closeColor",y)]:Oe,[createKey("closeColorHover",y)]:Me,[createKey("closeColorPressed",y)]:H}}=s.value;return{"--n-avatar-size-override":`calc(${ye} - 8px)`,"--n-bezier":$,"--n-border-radius":k,"--n-border":Ae,"--n-close-color":Oe,"--n-close-color-hover":Me,"--n-close-color-pressed":H,"--n-close-color-disabled":Oe,"--n-close-margin":N,"--n-close-margin-rtl":S,"--n-close-size":J,"--n-color":x||be,"--n-color-checkable":j,"--n-color-checked":L,"--n-color-checked-hover":G,"--n-color-checked-pressed":z,"--n-color-hover-checkable":B,"--n-color-pressed-checkable":V,"--n-font-size":ie,"--n-height":ye,"--n-opacity-disabled":A,"--n-padding":E,"--n-text-color":C||Te,"--n-text-color-checkable":_,"--n-text-color-checked":O,"--n-text-color-hover-checkable":P,"--n-text-color-pressed-checkable":I}}),g=o?useThemeClass("tag",computed(()=>{let y="";const{type:b,size:x,color:{color:C,textColor:$}={}}=e;return y+=b[0],y+=x[0],C&&(y+=`a${color2Class(C)}`),$&&(y+=`b${color2Class($)}`),y}),m,e):void 0;return Object.assign(Object.assign({},d),{rtlEnabled:f,mergedClsPrefix:r,contentRef:t,mergedBordered:n,handleClick:l,handleCloseClick:u,cssVars:o?void 0:m,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender})},render(){var e,t;const{mergedClsPrefix:n,rtlEnabled:r,color:{borderColor:o}={},onRender:a,$slots:s}=this;return a==null||a(),h("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:r,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:this.round}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},resolveWrappedSlot(s.avatar,l=>l&&h("div",{class:`${n}-tag__avatar`},l)),h("span",{class:`${n}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&this.closable?h(NBaseClose,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick}):null,!this.checkable&&this.mergedBordered?h("div",{class:`${n}-tag__border`,style:{borderColor:o}}):null)}});const{cubicBezierEaseInOut:cubicBezierEaseInOut$1}=commonVariables$7;function fadeInWidthExpandTransition({duration:e=".2s",delay:t=".1s"}={}){return[c$1("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),c$1("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),c$1("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${cubicBezierEaseInOut$1},
 max-width ${e} ${cubicBezierEaseInOut$1} ${t},
 margin-left ${e} ${cubicBezierEaseInOut$1} ${t},
 margin-right ${e} ${cubicBezierEaseInOut$1} ${t};
 `),c$1("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${cubicBezierEaseInOut$1} ${t},
 max-width ${e} ${cubicBezierEaseInOut$1},
 margin-left ${e} ${cubicBezierEaseInOut$1},
 margin-right ${e} ${cubicBezierEaseInOut$1};
 `)]}const{cubicBezierEaseInOut,cubicBezierEaseOut,cubicBezierEaseIn}=commonVariables$7;function fadeInHeightExpand({overflow:e="hidden",duration:t=".3s",originalTransition:n="",leavingDelay:r="0s",foldPadding:o=!1,enterToProps:a=void 0,leaveToProps:s=void 0,reverse:l=!1}={}){const u=l?"leave":"enter",d=l?"enter":"leave";return[c$1(`&.fade-in-height-expand-transition-${d}-from,
 &.fade-in-height-expand-transition-${u}-to`,Object.assign(Object.assign({},a),{opacity:1})),c$1(`&.fade-in-height-expand-transition-${d}-to,
 &.fade-in-height-expand-transition-${u}-from`,Object.assign(Object.assign({},s),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:o?"0 !important":void 0,paddingBottom:o?"0 !important":void 0})),c$1(`&.fade-in-height-expand-transition-${d}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${cubicBezierEaseInOut} ${r},
 opacity ${t} ${cubicBezierEaseOut} ${r},
 margin-top ${t} ${cubicBezierEaseInOut} ${r},
 margin-bottom ${t} ${cubicBezierEaseInOut} ${r},
 padding-top ${t} ${cubicBezierEaseInOut} ${r},
 padding-bottom ${t} ${cubicBezierEaseInOut} ${r}
 ${n?","+n:""}
 `),c$1(`&.fade-in-height-expand-transition-${u}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${cubicBezierEaseInOut},
 opacity ${t} ${cubicBezierEaseIn},
 margin-top ${t} ${cubicBezierEaseInOut},
 margin-bottom ${t} ${cubicBezierEaseInOut},
 padding-top ${t} ${cubicBezierEaseInOut},
 padding-bottom ${t} ${cubicBezierEaseInOut}
 ${n?","+n:""}
 `)]}var commonVariables$4={fontWeightActive:"400"};const self$f=e=>{const{fontSize:t,textColor3:n,primaryColorHover:r,primaryColorPressed:o,textColor2:a}=e;return Object.assign(Object.assign({},commonVariables$4),{fontSize:t,itemTextColor:n,itemTextColorHover:r,itemTextColorPressed:o,itemTextColorActive:a,separatorColor:n})},breadcrumbLight={name:"Breadcrumb",common:commonLight,self:self$f};var breadcrumbLight$1=breadcrumbLight,style$f=cB("breadcrumb",`
 white-space: nowrap;
`,[c$1("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),c$1("a",`
 color: inherit;
 text-decoration: inherit;
 `),cB("breadcrumb-item",{fontSize:"var(--n-font-size)",transition:"color .3s var(--n-bezier)",display:"inline-block"},[cB("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),cE("link",{cursor:"pointer",transition:"color .3s var(--n-bezier)",color:"var(--n-item-text-color)"}),cE("separator",{margin:"0 8px",color:"var(--n-separator-color)",transition:"color .3s var(--n-bezier)"}),c$1("&:hover",[cB("icon",{color:"var(--n-item-text-color-hover)"}),cE("link",{color:"var(--n-item-text-color-hover)"})]),c$1("&:active",[cB("icon",{color:"var(--n-item-text-color-pressed)"}),cE("link",{color:"var(--n-item-text-color-pressed)"})]),c$1("&:last-child",[cE("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `),cB("icon",{color:"var(--n-item-text-color-active)"}),cE("separator",{display:"none"})])])]);const breadcrumbInjectionKey="n-breadcrumb",breadcrumbProps=Object.assign(Object.assign({},useTheme.props),{separator:{type:String,default:"/"}});var __unplugin_components_1$3=defineComponent({name:"Breadcrumb",props:breadcrumbProps,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=useConfig(e),r=useTheme("Breadcrumb","-breadcrumb",style$f,breadcrumbLight$1,e,t);provide(breadcrumbInjectionKey,{separatorRef:toRef(e,"separator"),mergedClsPrefixRef:t});const o=computed(()=>{const{common:{cubicBezierEaseInOut:s},self:{separatorColor:l,itemTextColor:u,itemTextColorHover:d,itemTextColorPressed:f,itemTextColorActive:m,fontSize:g,fontWeightActive:y}}=r.value;return{"--n-font-size":g,"--n-bezier":s,"--n-item-text-color":u,"--n-item-text-color-hover":d,"--n-item-text-color-pressed":f,"--n-item-text-color-active":m,"--n-separator-color":l,"--n-font-weight-active":y}}),a=n?useThemeClass("breadcrumb",void 0,o,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:o,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),h("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},h("ul",null,this.$slots))}});const defaultWindow=hasWindow?window:null,useBrowserLocation=(e=defaultWindow)=>{const t=()=>{const{hash:o,host:a,hostname:s,href:l,origin:u,pathname:d,port:f,protocol:m,search:g}=(e==null?void 0:e.location)||{};return{hash:o,host:a,hostname:s,href:l,origin:u,pathname:d,port:f,protocol:m,search:g}},n=()=>{r.value=t()},r=ref(t());return onMounted(()=>{e&&(e.addEventListener("popstate",n),e.addEventListener("hashchange",n))}),onUnmounted(()=>{e&&(e.removeEventListener("popstate",n),e.removeEventListener("hashchange",n))}),r},breadcrumbItemProps={separator:String,href:String};var __unplugin_components_0$7=defineComponent({name:"BreadcrumbItem",props:breadcrumbItemProps,setup(e,{slots:t}){const n=inject(breadcrumbInjectionKey,null);if(!n)return warn$2("breadcrumb","`n-breadcrumb-item` must be placed inside `n-breadcrumb`."),()=>null;const{separatorRef:r,mergedClsPrefixRef:o}=n,a=useBrowserLocation(),s=computed(()=>e.href?"a":"span"),l=computed(()=>a.value.href===e.href?"location":null);return()=>{var u;const{value:d}=o;return h("li",{class:`${d}-breadcrumb-item`},h(s.value,{class:`${d}-breadcrumb-item__link`,"aria-current":l.value,href:e.href},t),h("span",{class:`${d}-breadcrumb-item__separator`,"aria-hidden":"true"},t.separator?t.separator():(u=e.separator)!==null&&u!==void 0?u:r.value))}}});function createHoverColor(e){return composite(e,[255,255,255,.16])}function createPressedColor(e){return composite(e,[0,0,0,.12])}var commonVariables$3={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"};const self$e=e=>{const{heightTiny:t,heightSmall:n,heightMedium:r,heightLarge:o,borderRadius:a,fontSizeTiny:s,fontSizeSmall:l,fontSizeMedium:u,fontSizeLarge:d,opacityDisabled:f,textColor2:m,textColor3:g,primaryColorHover:y,primaryColorPressed:b,borderColor:x,primaryColor:C,baseColor:$,infoColor:E,infoColorHover:N,infoColorPressed:S,successColor:k,successColorHover:A,successColorPressed:_,warningColor:P,warningColorHover:I,warningColorPressed:O,errorColor:j,errorColorHover:B,errorColorPressed:V,fontWeight:L,buttonColor2:G,buttonColor2Hover:z,buttonColor2Pressed:J,fontWeightStrong:ie}=e;return Object.assign(Object.assign({},commonVariables$3),{heightTiny:t,heightSmall:n,heightMedium:r,heightLarge:o,borderRadiusTiny:a,borderRadiusSmall:a,borderRadiusMedium:a,borderRadiusLarge:a,fontSizeTiny:s,fontSizeSmall:l,fontSizeMedium:u,fontSizeLarge:d,opacityDisabled:f,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:G,colorSecondaryHover:z,colorSecondaryPressed:J,colorTertiary:G,colorTertiaryHover:z,colorTertiaryPressed:J,colorQuaternary:"#0000",colorQuaternaryHover:z,colorQuaternaryPressed:J,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:m,textColorTertiary:g,textColorHover:y,textColorPressed:b,textColorFocus:y,textColorDisabled:m,textColorText:m,textColorTextHover:y,textColorTextPressed:b,textColorTextFocus:y,textColorTextDisabled:m,textColorGhost:m,textColorGhostHover:y,textColorGhostPressed:b,textColorGhostFocus:y,textColorGhostDisabled:m,border:`1px solid ${x}`,borderHover:`1px solid ${y}`,borderPressed:`1px solid ${b}`,borderFocus:`1px solid ${y}`,borderDisabled:`1px solid ${x}`,rippleColor:C,colorPrimary:C,colorHoverPrimary:y,colorPressedPrimary:b,colorFocusPrimary:y,colorDisabledPrimary:C,textColorPrimary:$,textColorHoverPrimary:$,textColorPressedPrimary:$,textColorFocusPrimary:$,textColorDisabledPrimary:$,textColorTextPrimary:C,textColorTextHoverPrimary:y,textColorTextPressedPrimary:b,textColorTextFocusPrimary:y,textColorTextDisabledPrimary:m,textColorGhostPrimary:C,textColorGhostHoverPrimary:y,textColorGhostPressedPrimary:b,textColorGhostFocusPrimary:y,textColorGhostDisabledPrimary:C,borderPrimary:`1px solid ${C}`,borderHoverPrimary:`1px solid ${y}`,borderPressedPrimary:`1px solid ${b}`,borderFocusPrimary:`1px solid ${y}`,borderDisabledPrimary:`1px solid ${C}`,rippleColorPrimary:C,colorInfo:E,colorHoverInfo:N,colorPressedInfo:S,colorFocusInfo:N,colorDisabledInfo:E,textColorInfo:$,textColorHoverInfo:$,textColorPressedInfo:$,textColorFocusInfo:$,textColorDisabledInfo:$,textColorTextInfo:E,textColorTextHoverInfo:N,textColorTextPressedInfo:S,textColorTextFocusInfo:N,textColorTextDisabledInfo:m,textColorGhostInfo:E,textColorGhostHoverInfo:N,textColorGhostPressedInfo:S,textColorGhostFocusInfo:N,textColorGhostDisabledInfo:E,borderInfo:`1px solid ${E}`,borderHoverInfo:`1px solid ${N}`,borderPressedInfo:`1px solid ${S}`,borderFocusInfo:`1px solid ${N}`,borderDisabledInfo:`1px solid ${E}`,rippleColorInfo:E,colorSuccess:k,colorHoverSuccess:A,colorPressedSuccess:_,colorFocusSuccess:A,colorDisabledSuccess:k,textColorSuccess:$,textColorHoverSuccess:$,textColorPressedSuccess:$,textColorFocusSuccess:$,textColorDisabledSuccess:$,textColorTextSuccess:k,textColorTextHoverSuccess:A,textColorTextPressedSuccess:_,textColorTextFocusSuccess:A,textColorTextDisabledSuccess:m,textColorGhostSuccess:k,textColorGhostHoverSuccess:A,textColorGhostPressedSuccess:_,textColorGhostFocusSuccess:A,textColorGhostDisabledSuccess:k,borderSuccess:`1px solid ${k}`,borderHoverSuccess:`1px solid ${A}`,borderPressedSuccess:`1px solid ${_}`,borderFocusSuccess:`1px solid ${A}`,borderDisabledSuccess:`1px solid ${k}`,rippleColorSuccess:k,colorWarning:P,colorHoverWarning:I,colorPressedWarning:O,colorFocusWarning:I,colorDisabledWarning:P,textColorWarning:$,textColorHoverWarning:$,textColorPressedWarning:$,textColorFocusWarning:$,textColorDisabledWarning:$,textColorTextWarning:P,textColorTextHoverWarning:I,textColorTextPressedWarning:O,textColorTextFocusWarning:I,textColorTextDisabledWarning:m,textColorGhostWarning:P,textColorGhostHoverWarning:I,textColorGhostPressedWarning:O,textColorGhostFocusWarning:I,textColorGhostDisabledWarning:P,borderWarning:`1px solid ${P}`,borderHoverWarning:`1px solid ${I}`,borderPressedWarning:`1px solid ${O}`,borderFocusWarning:`1px solid ${I}`,borderDisabledWarning:`1px solid ${P}`,rippleColorWarning:P,colorError:j,colorHoverError:B,colorPressedError:V,colorFocusError:B,colorDisabledError:j,textColorError:$,textColorHoverError:$,textColorPressedError:$,textColorFocusError:$,textColorDisabledError:$,textColorTextError:j,textColorTextHoverError:B,textColorTextPressedError:V,textColorTextFocusError:B,textColorTextDisabledError:m,textColorGhostError:j,textColorGhostHoverError:B,textColorGhostPressedError:V,textColorGhostFocusError:B,textColorGhostDisabledError:j,borderError:`1px solid ${j}`,borderHoverError:`1px solid ${B}`,borderPressedError:`1px solid ${V}`,borderFocusError:`1px solid ${B}`,borderDisabledError:`1px solid ${j}`,rippleColorError:j,waveOpacity:"0.6",fontWeight:L,fontWeightStrong:ie})},buttonLight={name:"Button",common:commonLight,self:self$e};var buttonLight$1=buttonLight;const zero="0!important",n1="-1px!important";function createLeftBorderStyle(e){return cM(e+"-type",[c$1("& +",[cB("button",{},[cM(e+"-type",[cE("border",{borderLeftWidth:zero}),cE("state-border",{left:n1})])])])])}function createTopBorderStyle(e){return cM(e+"-type",[c$1("& +",[cB("button",[cM(e+"-type",[cE("border",{borderTopWidth:zero}),cE("state-border",{top:n1})])])])])}var style$e=cB("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[cNotM("vertical",{flexDirection:"row"},[cB("button",[c$1("&:first-child:not(:last-child)",`
 margin-right: ${zero};
 border-top-right-radius: ${zero};
 border-bottom-right-radius: ${zero};
 `),c$1("&:last-child:not(:first-child)",`
 margin-left: ${zero};
 border-top-left-radius: ${zero};
 border-bottom-left-radius: ${zero};
 `),c$1("&:not(:first-child):not(:last-child)",`
 margin-left: ${zero};
 margin-right: ${zero};
 border-radius: ${zero};
 `),createLeftBorderStyle("default"),cM("ghost",[createLeftBorderStyle("primary"),createLeftBorderStyle("info"),createLeftBorderStyle("success"),createLeftBorderStyle("warning"),createLeftBorderStyle("error")])])]),cM("vertical",{flexDirection:"column"},[cB("button",[c$1("&:first-child:not(:last-child)",`
 margin-bottom: ${zero};
 margin-left: ${zero};
 margin-right: ${zero};
 border-bottom-left-radius: ${zero};
 border-bottom-right-radius: ${zero};
 `),c$1("&:last-child:not(:first-child)",`
 margin-top: ${zero};
 margin-left: ${zero};
 margin-right: ${zero};
 border-top-left-radius: ${zero};
 border-top-right-radius: ${zero};
 `),c$1("&:not(:first-child):not(:last-child)",`
 margin: ${zero};
 border-radius: ${zero};
 `),createTopBorderStyle("default"),cM("ghost",[createTopBorderStyle("primary"),createTopBorderStyle("info"),createTopBorderStyle("success"),createTopBorderStyle("warning"),createTopBorderStyle("error")])])])]);const buttonGroupInjectionKey="n-button-group",buttonGroupProps={size:{type:String,default:void 0},vertical:Boolean};defineComponent({name:"ButtonGroup",props:buttonGroupProps,setup(e){const{mergedClsPrefixRef:t}=useConfig(e);return useStyle("-button-group",style$e,t),provide(buttonGroupInjectionKey,e),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return h("div",{class:[`${e}-button-group`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}});var style$d=c$1([cB("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[cM("color",[cE("border",{borderColor:"var(--n-border-color)"}),cM("disabled",[cE("border",{borderColor:"var(--n-border-color-disabled)"})]),cNotM("disabled",[c$1("&:focus",[cE("state-border",{borderColor:"var(--n-border-color-focus)"})]),c$1("&:hover",[cE("state-border",{borderColor:"var(--n-border-color-hover)"})]),c$1("&:active",[cE("state-border",{borderColor:"var(--n-border-color-pressed)"})]),cM("pressed",[cE("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),cM("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[cE("border",{border:"var(--n-border-disabled)"})]),cNotM("disabled",[c$1("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[cE("state-border",{border:"var(--n-border-focus)"})]),c$1("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[cE("state-border",{border:"var(--n-border-hover)"})]),c$1("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[cE("state-border",{border:"var(--n-border-pressed)"})]),cM("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[cE("state-border",{border:"var(--n-border-pressed)"})])]),cM("loading",{"pointer-events":"none"}),cB("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[cM("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),typeof window!="undefined"&&"MozBoxSizing"in document.createElement("div").style?c$1("&::moz-focus-inner",{border:0}):null,cE("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),cE("border",{border:"var(--n-border)"}),cE("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),cE("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[cB("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 `,[createIconSwitchTransition({top:"50%",originalTransform:"translateY(-50%)"})]),fadeInWidthExpandTransition()]),cE("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `,[c$1("~",[cE("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),cM("block",`
 display: flex;
 width: 100%;
 `),cM("dashed",[cE("border, state-border",{borderStyle:"dashed !important"})]),cM("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),c$1("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),c$1("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]);const buttonProps=Object.assign(Object.assign({},useTheme.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],internalAutoFocus:Boolean}),Button=defineComponent({name:"Button",props:buttonProps,setup(e){watchEffect(()=>{const{dashed:S,ghost:k,text:A,secondary:_,tertiary:P,quaternary:I}=e;(S||k||A)&&(_||P||I)&&warnOnce("button","`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaterary` props.")});const t=ref(null),n=ref(null),r=ref(!1);onMounted(()=>{const{value:S}=t;S&&!e.disabled&&e.focusable&&e.internalAutoFocus&&S.focus({preventScroll:!0})});const o=useMemo(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),a=inject(buttonGroupInjectionKey,{}),{mergedSizeRef:s}=useFormItem({},{defaultSize:"medium",mergedSize:S=>{const{size:k}=e;if(k)return k;const{size:A}=a;if(A)return A;const{mergedSize:_}=S||{};return _?_.value:"medium"}}),l=computed(()=>e.focusable&&!e.disabled),u=S=>{var k;S.preventDefault(),!e.disabled&&l.value&&((k=t.value)===null||k===void 0||k.focus({preventScroll:!0}))},d=S=>{var k;if(!e.disabled&&!e.loading){const{onClick:A}=e;A&&call(A,S),e.text||(k=n.value)===null||k===void 0||k.play()}},f=S=>{switch(S.code){case"Enter":case"NumpadEnter":if(!e.keyboard)return;r.value=!1}},m=S=>{switch(S.code){case"Enter":case"NumpadEnter":if(!e.keyboard||e.loading){S.preventDefault();return}r.value=!0}},g=()=>{r.value=!1},{inlineThemeDisabled:y,mergedClsPrefixRef:b,mergedRtlRef:x}=useConfig(e),C=useTheme("Button","-button",style$d,buttonLight$1,e,b),$=useRtl("Button",x,b),E=computed(()=>{const S=C.value,{common:{cubicBezierEaseInOut:k,cubicBezierEaseOut:A},self:_}=S,{rippleDuration:P,opacityDisabled:I,fontWeight:O,fontWeightStrong:j}=_,B=s.value,{dashed:V,type:L,ghost:G,text:z,color:J,round:ie,circle:ye,textColor:be,secondary:Te,tertiary:Ae,quaternary:Oe,strong:Me}=e,H={"font-weight":Me?j:O};let te={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const Y=L==="tertiary",ne=L==="default",se=Y?"default":L;if(z){const Q=be||J,U=Q||_[createKey("textColorText",se)];te={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":U,"--n-text-color-hover":Q?createHoverColor(Q):_[createKey("textColorTextHover",se)],"--n-text-color-pressed":Q?createPressedColor(Q):_[createKey("textColorTextPressed",se)],"--n-text-color-focus":Q?createHoverColor(Q):_[createKey("textColorTextHover",se)],"--n-text-color-disabled":Q||_[createKey("textColorTextDisabled",se)]}}else if(G||V){const Q=be||J;te={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":J||_[createKey("rippleColor",se)],"--n-text-color":Q||_[createKey("textColorGhost",se)],"--n-text-color-hover":Q?createHoverColor(Q):_[createKey("textColorGhostHover",se)],"--n-text-color-pressed":Q?createPressedColor(Q):_[createKey("textColorGhostPressed",se)],"--n-text-color-focus":Q?createHoverColor(Q):_[createKey("textColorGhostHover",se)],"--n-text-color-disabled":Q||_[createKey("textColorGhostDisabled",se)]}}else if(Te){const Q=ne?_.textColor:Y?_.textColorTertiary:_[createKey("color",se)],U=J||Q,ee=L!=="default"&&L!=="tertiary";te={"--n-color":ee?changeColor(U,{alpha:Number(_.colorOpacitySecondary)}):_.colorSecondary,"--n-color-hover":ee?changeColor(U,{alpha:Number(_.colorOpacitySecondaryHover)}):_.colorSecondaryHover,"--n-color-pressed":ee?changeColor(U,{alpha:Number(_.colorOpacitySecondaryPressed)}):_.colorSecondaryPressed,"--n-color-focus":ee?changeColor(U,{alpha:Number(_.colorOpacitySecondaryHover)}):_.colorSecondaryHover,"--n-color-disabled":_.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":U,"--n-text-color-hover":U,"--n-text-color-pressed":U,"--n-text-color-focus":U,"--n-text-color-disabled":U}}else if(Ae||Oe){const Q=ne?_.textColor:Y?_.textColorTertiary:_[createKey("color",se)],U=J||Q;Ae?(te["--n-color"]=_.colorTertiary,te["--n-color-hover"]=_.colorTertiaryHover,te["--n-color-pressed"]=_.colorTertiaryPressed,te["--n-color-focus"]=_.colorSecondaryHover,te["--n-color-disabled"]=_.colorTertiary):(te["--n-color"]=_.colorQuaternary,te["--n-color-hover"]=_.colorQuaternaryHover,te["--n-color-pressed"]=_.colorQuaternaryPressed,te["--n-color-focus"]=_.colorQuaternaryHover,te["--n-color-disabled"]=_.colorQuaternary),te["--n-ripple-color"]="#0000",te["--n-text-color"]=U,te["--n-text-color-hover"]=U,te["--n-text-color-pressed"]=U,te["--n-text-color-focus"]=U,te["--n-text-color-disabled"]=U}else te={"--n-color":J||_[createKey("color",se)],"--n-color-hover":J?createHoverColor(J):_[createKey("colorHover",se)],"--n-color-pressed":J?createPressedColor(J):_[createKey("colorPressed",se)],"--n-color-focus":J?createHoverColor(J):_[createKey("colorFocus",se)],"--n-color-disabled":J||_[createKey("colorDisabled",se)],"--n-ripple-color":J||_[createKey("rippleColor",se)],"--n-text-color":be||(J?_.textColorPrimary:Y?_.textColorTertiary:_[createKey("textColor",se)]),"--n-text-color-hover":be||(J?_.textColorHoverPrimary:_[createKey("textColorHover",se)]),"--n-text-color-pressed":be||(J?_.textColorPressedPrimary:_[createKey("textColorPressed",se)]),"--n-text-color-focus":be||(J?_.textColorFocusPrimary:_[createKey("textColorFocus",se)]),"--n-text-color-disabled":be||(J?_.textColorDisabledPrimary:_[createKey("textColorDisabled",se)])};let _e={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};z?_e={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:_e={"--n-border":_[createKey("border",se)],"--n-border-hover":_[createKey("borderHover",se)],"--n-border-pressed":_[createKey("borderPressed",se)],"--n-border-focus":_[createKey("borderFocus",se)],"--n-border-disabled":_[createKey("borderDisabled",se)]};const{[createKey("height",B)]:me,[createKey("fontSize",B)]:ve,[createKey("padding",B)]:Se,[createKey("paddingRound",B)]:R,[createKey("iconSize",B)]:M,[createKey("borderRadius",B)]:F,[createKey("iconMargin",B)]:q,waveOpacity:K}=_,Z={"--n-width":ye&&!z?me:"initial","--n-height":z?"initial":me,"--n-font-size":ve,"--n-padding":ye||z?"initial":ie?R:Se,"--n-icon-size":M,"--n-icon-margin":q,"--n-border-radius":z?"initial":ye||ie?me:F};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":k,"--n-bezier-ease-out":A,"--n-ripple-duration":P,"--n-opacity-disabled":I,"--n-wave-opacity":K},H),te),_e),Z)}),N=y?useThemeClass("button",computed(()=>{let S="";const{dashed:k,type:A,ghost:_,text:P,color:I,round:O,circle:j,textColor:B,secondary:V,tertiary:L,quaternary:G,strong:z}=e;k&&(S+="a"),_&&(S+="b"),P&&(S+="c"),O&&(S+="d"),j&&(S+="e"),V&&(S+="f"),L&&(S+="g"),G&&(S+="h"),z&&(S+="i"),I&&(S+="j"+color2Class(I)),B&&(S+="k"+color2Class(B));const{value:J}=s;return S+="l"+J[0],S+="m"+A[0],S}),E,e):void 0;return{selfElRef:t,waveElRef:n,mergedClsPrefix:b,mergedFocusable:l,mergedSize:s,showBorder:o,enterPressed:r,rtlEnabled:$,handleMousedown:u,handleKeydown:m,handleBlur:g,handleKeyup:f,handleClick:d,customColorCssVars:computed(()=>{const{color:S}=e;if(!S)return null;const k=createHoverColor(S);return{"--n-border-color":S,"--n-border-color-hover":k,"--n-border-color-pressed":createPressedColor(S),"--n-border-color-focus":k,"--n-border-color-disabled":S}}),cssVars:y?void 0:E,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender}},render(){const{mergedClsPrefix:e,tag:t,onRender:n}=this;n==null||n();const r=resolveWrappedSlot(this.$slots.default,o=>o&&h("span",{class:`${e}-button__content`},o));return h(t,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&r,h(NFadeInExpandTransition,{width:!0},{default:()=>resolveWrappedSlot(this.$slots.icon,o=>(this.loading||o)&&h("span",{class:`${e}-button__icon`,style:{margin:isSlotEmpty(this.$slots.default)?"0":""}},h(NIconSwitchTransition,null,{default:()=>this.loading?h(NBaseLoading,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):h("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},o)})))}),this.iconPlacement==="left"&&r,this.text?null:h(NBaseWave,{ref:"waveElRef",clsPrefix:e}),this.showBorder?h("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?h("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}});var __unplugin_components_0$6=Button,commonVariables$2={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeSize:"18px"};const self$d=e=>{const{primaryColor:t,borderRadius:n,lineHeight:r,fontSize:o,cardColor:a,textColor2:s,textColor1:l,dividerColor:u,fontWeightStrong:d,closeColor:f,closeColorHover:m,closeColorPressed:g,modalColor:y,boxShadow1:b,popoverColor:x,actionColor:C}=e;return Object.assign(Object.assign({},commonVariables$2),{lineHeight:r,color:a,colorModal:y,colorPopover:x,colorTarget:t,colorEmbedded:C,textColor:s,titleTextColor:l,borderColor:u,actionColor:C,titleFontWeight:d,closeColor:f,closeColorHover:m,closeColorPressed:g,fontSizeSmall:o,fontSizeMedium:o,fontSizeLarge:o,fontSizeHuge:o,boxShadow:b,borderRadius:n})},cardLight={name:"Card",common:commonLight,self:self$d};var cardLight$1=cardLight,style$c=c$1([cB("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[cM("hoverable",[c$1("&:hover","box-shadow: var(--n-box-shadow);")]),cM("content-segmented",[c$1(">",[cE("content",{paddingTop:"var(--n-padding-bottom)"})])]),cM("content-soft-segmented",[c$1(">",[cE("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),cM("footer-segmented",[c$1(">",[cE("footer",{paddingTop:"var(--n-padding-bottom)"})])]),cM("footer-soft-segmented",[c$1(">",[cE("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),c$1(">",[cB("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[cE("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),cE("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),cE("close",`
 font-size: var(--n-close-size);
 transition: color .3s var(--n-bezier);
 `)]),cE("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),cE("content","flex: 1;"),cE("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[c$1("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),cE("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),cB("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[c$1("img",`
 display: block;
 width: 100%;
 `)]),cM("bordered",`
 border: 1px solid var(--n-border-color);
 `,[c$1("&:target","border-color: var(--n-color-target);")]),cM("action-segmented",[c$1(">",[cE("action",[c$1("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),cM("content-segmented, content-soft-segmented",[c$1(">",[cE("content",{transition:"border-color 0.3s var(--n-bezier)"},[c$1("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),cM("footer-segmented, footer-soft-segmented",[c$1(">",[cE("footer",{transition:"border-color 0.3s var(--n-bezier)"},[c$1("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])])]),insideModal(cB("card",{background:"var(--n-color-modal)"})),insidePopover(cB("card",{background:"var(--n-color-popover)"})),cB("card",[asModal({background:"var(--n-color-modal)"})])]);const cardBaseProps={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},hoverable:Boolean,role:String,onClose:[Function,Array]},cardBasePropKeys=keysOf(cardBaseProps),cardProps=Object.assign(Object.assign({},useTheme.props),cardBaseProps);var __unplugin_components_2$2=defineComponent({name:"Card",props:cardProps,setup(e){const t=()=>{const{onClose:d}=e;d&&call(d)},{inlineThemeDisabled:n,mergedClsPrefixRef:r,mergedRtlRef:o}=useConfig(e),a=useTheme("Card","-card",style$c,cardLight$1,e,r),s=useRtl("Card",o,r),l=computed(()=>{const{size:d}=e,{self:{color:f,colorModal:m,colorTarget:g,textColor:y,titleTextColor:b,titleFontWeight:x,borderColor:C,actionColor:$,borderRadius:E,closeColor:N,closeColorHover:S,closeColorPressed:k,lineHeight:A,closeSize:_,boxShadow:P,colorPopover:I,colorEmbedded:O,[createKey("padding",d)]:j,[createKey("fontSize",d)]:B,[createKey("titleFontSize",d)]:V},common:{cubicBezierEaseInOut:L}}=a.value,{top:G,left:z,bottom:J}=getMargin(j);return{"--n-bezier":L,"--n-border-radius":E,"--n-color":e.embedded?O:f,"--n-color-modal":m,"--n-color-popover":I,"--n-color-target":g,"--n-text-color":y,"--n-line-height":A,"--n-action-color":$,"--n-title-text-color":b,"--n-title-font-weight":x,"--n-close-color":N,"--n-close-color-hover":S,"--n-close-color-pressed":k,"--n-border-color":C,"--n-box-shadow":P,"--n-padding-top":G,"--n-padding-bottom":J,"--n-padding-left":z,"--n-font-size":B,"--n-title-font-size":V,"--n-close-size":_}}),u=n?useThemeClass("card",computed(()=>e.size[0]),l,e):void 0;return{rtlEnabled:s,mergedClsPrefix:r,mergedTheme:a,handleCloseClick:t,cssVars:n?void 0:l,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{segmented:e,bordered:t,hoverable:n,mergedClsPrefix:r,rtlEnabled:o,onRender:a,$slots:s}=this;return a==null||a(),h("div",{class:[`${r}-card`,this.themeClass,{[`${r}-card--rtl`]:o,[`${r}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${r}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${r}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${r}-card--bordered`]:t,[`${r}-card--hoverable`]:n}],style:this.cssVars,role:this.role},resolveWrappedSlot(s.cover,l=>l&&h("div",{class:`${r}-card-cover`,role:"none"},l)),resolveWrappedSlot(s.header,l=>l||this.title||this.closable?h("div",{class:`${r}-card-header`,style:this.headerStyle},h("div",{class:`${r}-card-header__main`,role:"heading"},l||[this.title]),resolveWrappedSlot(s["header-extra"],u=>u&&h("div",{class:`${r}-card-header__extra`,style:this.headerExtraStyle},u)),this.closable?h(NBaseClose,{clsPrefix:r,class:`${r}-card-header__close`,onClick:this.handleCloseClick}):null):null),resolveWrappedSlot(s.default,l=>l&&h("div",{class:`${r}-card__content`,style:this.contentStyle,role:"none"},l)),resolveWrappedSlot(s.footer,l=>l&&[h("div",{class:`${r}-card__footer`,style:this.footerStyle,role:"none"},l)]),resolveWrappedSlot(s.action,l=>l&&h("div",{class:`${r}-card__action`,role:"none"},l)))}});const configProviderProps={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(warn$2("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}};var __unplugin_components_3=defineComponent({name:"ConfigProvider",alias:["App"],props:configProviderProps,setup(e){const t=inject(configProviderInjectionKey,null),n=computed(()=>{const{theme:y}=e;if(y===null)return;const b=t==null?void 0:t.mergedThemeRef.value;return y===void 0?b:b===void 0?y:Object.assign({},b,y)}),r=computed(()=>{const{themeOverrides:y}=e;if(y!==null){if(y===void 0)return t==null?void 0:t.mergedThemeOverridesRef.value;{const b=t==null?void 0:t.mergedThemeOverridesRef.value;return b===void 0?y:merge$2({},b,y)}}}),o=useMemo(()=>{const{namespace:y}=e;return y===void 0?t==null?void 0:t.mergedNamespaceRef.value:y}),a=useMemo(()=>{const{bordered:y}=e;return y===void 0?t==null?void 0:t.mergedBorderedRef.value:y}),s=computed(()=>{const{icons:y}=e;return y===void 0?t==null?void 0:t.mergedIconsRef.value:y}),l=computed(()=>{const{componentOptions:y}=e;return y!==void 0?y:t==null?void 0:t.mergedComponentPropsRef.value}),u=computed(()=>{const{clsPrefix:y}=e;return y!==void 0?y:t==null?void 0:t.mergedClsPrefixRef.value}),d=computed(()=>{var y;const{rtl:b}=e;if(b===void 0)return t==null?void 0:t.mergedRtlRef.value;const x={};for(const C of b)x[C.name]=markRaw(C),(y=C.peers)===null||y===void 0||y.forEach($=>{$.name in x||(x[$.name]=markRaw($))});return x}),f=computed(()=>e.breakpoints||(t==null?void 0:t.mergedBreakpointsRef.value)),m=e.inlineThemeDisabled||(t==null?void 0:t.inlineThemeDisabled),g=computed(()=>{const{value:y}=n,{value:b}=r,x=b&&Object.keys(b).length!==0,C=y==null?void 0:y.name;return C?x?`${C}-${murmur2(JSON.stringify(r.value))}`:C:x?murmur2(JSON.stringify(r.value)):""});return provide(configProviderInjectionKey,{mergedThemeHashRef:g,mergedBreakpointsRef:f,mergedRtlRef:d,mergedIconsRef:s,mergedComponentPropsRef:l,mergedBorderedRef:a,mergedNamespaceRef:o,mergedClsPrefixRef:u,mergedLocaleRef:computed(()=>{const{locale:y}=e;if(y!==null)return y===void 0?t==null?void 0:t.mergedLocaleRef.value:y}),mergedDateLocaleRef:computed(()=>{const{dateLocale:y}=e;if(y!==null)return y===void 0?t==null?void 0:t.mergedDateLocaleRef.value:y}),mergedHljsRef:computed(()=>{const{hljs:y}=e;return y===void 0?t==null?void 0:t.mergedHljsRef.value:y}),mergedThemeRef:n,mergedThemeOverridesRef:r,inlineThemeDisabled:m||!1}),{mergedClsPrefix:u,mergedBordered:a,mergedNamespace:o,mergedTheme:n,mergedThemeOverrides:r}},render(){var e,t,n,r;return this.abstract?(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n):h(this.as||this.tag,{class:`${this.mergedClsPrefix||defaultClsPrefix}-config-provider`},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}});const easeOut=e=>1-Math.pow(1-e,5);function tween(e){const{from:t,to:n,duration:r,onUpdate:o,onFinish:a}=e,s=()=>{const u=performance.now(),d=Math.min(u-l,r),f=t+(n-t)*easeOut(d/r);if(d===r){a();return}o(f),requestAnimationFrame(s)},l=performance.now();s()}const numberAnimationProps={to:{type:Number,default:0},precision:{type:Number,default:0},showSeparator:Boolean,locale:String,from:{type:Number,default:0},active:{type:Boolean,default:!0},duration:{type:Number,default:2e3}};var __unplugin_components_1$2=defineComponent({name:"NumberAnimation",props:numberAnimationProps,setup(e){const{localeRef:t}=useLocale("name"),{duration:n}=e,r=ref(e.from),o=computed(()=>{const{locale:g}=e;return g!==void 0?g:t.value});let a=!1;const s=g=>{r.value=g},l=()=>{r.value=e.to,a=!1},u=(g=e.from,y=e.to)=>{a=!0,r.value=e.from,g!==y&&tween({from:g,to:y,duration:n,onUpdate:s,onFinish:l})},d=computed(()=>{var g;const b=round$1(r.value,e.precision).toFixed(e.precision).split("."),x=new Intl.NumberFormat(o.value),C=(g=x.formatToParts(.5).find(N=>N.type==="decimal"))===null||g===void 0?void 0:g.value,$=e.showSeparator?x.format(Number(b[0])):b[0],E=b[1];return{integer:$,decimal:E,decimalSeparator:C}});function f(){a||u()}return onMounted(()=>{watchEffect(()=>{e.active&&u()})}),Object.assign({formattedValue:d},{play:f})},render(){const{formattedValue:{integer:e,decimal:t,decimalSeparator:n}}=this;return[e,t?n:null,t]}}),commonVars$2={padding:"8px 14px"};const self$c=e=>{const{borderRadius:t,boxShadow2:n,baseColor:r}=e;return Object.assign(Object.assign({},commonVars$2),{borderRadius:t,boxShadow:n,color:composite(r,"rgba(0, 0, 0, .85)"),textColor:r})},tooltipLight={name:"Tooltip",common:commonLight,peers:{Popover:popoverLight$1},self:self$c};var tooltipLight$1=tooltipLight;const tooltipProps=Object.assign(Object.assign({},popoverBaseProps),useTheme.props);var NTooltip=defineComponent({name:"Tooltip",props:tooltipProps,__popover__:!0,setup(e){const t=useTheme("Tooltip","-tooltip",void 0,tooltipLight$1,e),n=ref(null);return Object.assign(Object.assign({},{syncPosition(){n.value.syncPosition()},setShow(o){n.value.setShow(o)}}),{popoverRef:n,mergedTheme:t,popoverThemeOverrides:computed(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return h(NPopover,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),commonVariables$1={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"};const self$b=e=>{const{primaryColor:t,textColor2:n,dividerColor:r,hoverColor:o,popoverColor:a,invertedColor:s,borderRadius:l,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:f,fontSizeHuge:m,heightSmall:g,heightMedium:y,heightLarge:b,heightHuge:x,textColor3:C,opacityDisabled:$}=e;return Object.assign(Object.assign({},commonVariables$1),{optionHeightSmall:g,optionHeightMedium:y,optionHeightLarge:b,optionHeightHuge:x,borderRadius:l,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:f,fontSizeHuge:m,optionTextColor:n,optionTextColorHover:n,optionTextColorActive:t,optionTextColorChildActive:t,color:a,dividerColor:r,suffixColor:n,prefixColor:n,optionColorHover:o,optionColorActive:changeColor(t,{alpha:.1}),groupHeaderTextColor:C,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:s,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:t,optionColorActiveInverted:t,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:$})},dropdownLight={name:"Dropdown",common:commonLight,peers:{Popover:popoverLight$1},self:self$b};var dropdownLight$1=dropdownLight,NDropdownDivider=defineComponent({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return h("div",{class:`${this.clsPrefix}-dropdown-divider`})}});const self$a=e=>{const{textColorBase:t,opacity1:n,opacity2:r,opacity3:o,opacity4:a,opacity5:s}=e;return{color:t,opacity1Depth:n,opacity2Depth:r,opacity3Depth:o,opacity4Depth:a,opacity5Depth:s}},iconLight={name:"Icon",common:commonLight,self:self$a};var iconLight$1=iconLight,style$b=cB("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[cM("color-transition",{transition:"color .3s var(--n-bezier)"}),cM("depth",{color:"var(--n-color)"},[c$1("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),c$1("svg",{height:"1em",width:"1em"})]);const NIcon=defineComponent({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Object.assign(Object.assign({},useTheme.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=useConfig(e),r=useTheme("Icon","-icon",style$b,iconLight$1,e,t),o=computed(()=>{const{depth:s}=e,{common:{cubicBezierEaseInOut:l},self:u}=r.value;if(s!==void 0){const{color:d,[`opacity${s}Depth`]:f}=u;return{"--n-bezier":l,"--n-color":d,"--n-opacity":f}}return{"--n-bezier":l,"--n-color":"","--n-opacity":""}}),a=n?useThemeClass("icon",computed(()=>`${e.depth||"d"}`),o,e):void 0;return{mergedClsPrefix:t,mergedStyle:computed(()=>{const{size:s,color:l}=e;return{fontSize:formatLength(s),color:l}}),cssVars:n?void 0:o,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;const{$parent:t,depth:n,mergedClsPrefix:r,component:o,onRender:a,themeClass:s}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&warn$2("icon","don't wrap `n-icon` inside `n-icon`"),a==null||a(),h("i",mergeProps(this.$attrs,{role:"img",class:[`${r}-icon`,s,{[`${r}-icon--depth`]:n,[`${r}-icon--color-transition`]:n!==void 0}],style:[this.cssVars,this.mergedStyle]}),o?h(o):this.$slots)}}),dropdownMenuInjectionKey="n-dropdown-menu",dropdownInjectionKey="n-dropdown",dropdownOptionInjectionKey="n-dropdown-option";function isSubmenuNode(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function isGroupNode(e){return e.type==="group"}function isDividerNode$1(e){return e.type==="divider"}function isRenderNode(e){return e.type==="render"}var NDropdownOption=defineComponent({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object},setup(e){const t=inject(dropdownInjectionKey),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:o,pendingKeyPathRef:a,activeKeyPathRef:s,animatedRef:l,mergedShowRef:u,renderLabelRef:d,renderIconRef:f,labelFieldRef:m,childrenFieldRef:g}=t,y=inject(dropdownOptionInjectionKey,null),b=inject(dropdownMenuInjectionKey),x=computed(()=>e.tmNode.rawNode),C=computed(()=>{const{value:V}=g;return isSubmenuNode(e.tmNode.rawNode,V)}),$=computed(()=>{const{disabled:V}=e.tmNode;return V}),E=computed(()=>{if(!C.value)return!1;const{key:V,disabled:L}=e.tmNode;if(L)return!1;const{value:G}=n,{value:z}=r,{value:J}=o,{value:ie}=a;return G!==null?ie.includes(V):z!==null?ie.includes(V)&&ie[ie.length-1]!==V:J!==null?ie.includes(V):!1}),N=computed(()=>r.value===null&&!l.value),S=useDeferredTrue(E,300,N),k=computed(()=>!!(y!=null&&y.enteringSubmenuRef.value)),A=ref(!1);provide(dropdownOptionInjectionKey,{enteringSubmenuRef:A});function _(){A.value=!0}function P(){A.value=!1}function I(){const{parentKey:V,tmNode:L}=e;!u.value||(o.value=V,r.value=null,n.value=L.key)}function O(){const{tmNode:V}=e;!u.value||n.value!==V.key&&I()}function j(V){if(!u.value)return;const{relatedTarget:L}=V;L&&!happensIn({target:L},"dropdownOption")&&(n.value=null)}function B(){const{value:V}=C,{tmNode:L}=e;!u.value||!V&&!L.disabled&&(t.doSelect(L.key,L.rawNode),t.doUpdateShow(!1))}return{labelField:m,renderLabel:d,renderIcon:f,siblingHasIcon:b.showIconRef,siblingHasSubmenu:b.hasSubmenuRef,animated:l,mergedShowSubmenu:computed(()=>S.value&&!k.value),rawNode:x,hasSubmenu:C,pending:useMemo(()=>{const{value:V}=a,{key:L}=e.tmNode;return V.includes(L)}),childActive:useMemo(()=>{const{value:V}=s,{key:L}=e.tmNode,G=V.findIndex(z=>L===z);return G===-1?!1:G<V.length-1}),active:useMemo(()=>{const{value:V}=s,{key:L}=e.tmNode,G=V.findIndex(z=>L===z);return G===-1?!1:G===V.length-1}),mergedDisabled:$,handleClick:B,handleMouseMove:O,handleMouseEnter:I,handleMouseLeave:j,handleSubmenuBeforeEnter:_,handleSubmenuAfterEnter:P}},render(){var e;const{animated:t,rawNode:n,mergedShowSubmenu:r,clsPrefix:o,siblingHasIcon:a,siblingHasSubmenu:s,renderLabel:l,renderIcon:u,props:d}=this,f=r?h(NDropdownMenu,{clsPrefix:o,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}):null,m={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick};return h("div",{class:`${o}-dropdown-option`},h("div",mergeProps(m,d),[h("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,a&&`${o}-dropdown-option-body__prefix--show-icon`]},[u?u(n):render$a(n.icon)]),h("div",{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},l?l(n):render$a((e=n[this.labelField])!==null&&e!==void 0?e:n.title)),h("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,s&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?h(NIcon,null,{default:()=>h(ChevronRightIcon,null)}):null)]),this.hasSubmenu?h(VBinder,null,{default:()=>[h(VTarget,null,{default:()=>h("div",{class:`${o}-dropdown-offset-container`},h(VFollower,{show:this.mergedShowSubmenu,placement:this.placement,teleportDisabled:!0},{default:()=>h("div",{class:`${o}-dropdown-menu-wrapper`},t?h(Transition,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>f}):f)}))})]}):null)}}),NDropdownGroupHeader=defineComponent({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=inject(dropdownMenuInjectionKey),{renderLabelRef:n,labelFieldRef:r}=inject(dropdownInjectionKey);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n}},render(){var e;const{clsPrefix:t,hasSubmenu:n,showIcon:r,renderLabel:o}=this,{rawNode:a}=this.tmNode;return h("div",{class:`${t}-dropdown-option`},h("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},h("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,r&&`${t}-dropdown-option-body__prefix--show-icon`]},render$a(a.icon)),h("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},o?o(a):render$a((e=a.title)!==null&&e!==void 0?e:a[this.labelField])),h("div",{class:[`${t}-dropdown-option-body__suffix`,n&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})))}}),NDropdownGroup=defineComponent({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:r}=e;return h(Fragment,null,h(NDropdownGroupHeader,{clsPrefix:n,tmNode:e,key:e.key}),r==null?void 0:r.map(o=>isDividerNode$1(o.rawNode)?h(NDropdownDivider,{clsPrefix:n,key:o.key}):o.isGroup?(warn$2("dropdown","`group` node is not allowed to be put in `group` node."),null):h(NDropdownOption,{clsPrefix:n,tmNode:o,parentKey:t,key:o.key})))}}),NDropdownRenderOption=defineComponent({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return h("div",t,[e==null?void 0:e()])}}),NDropdownMenu=defineComponent({name:"DropdownMenu",props:{showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:n}=inject(dropdownInjectionKey);provide(dropdownMenuInjectionKey,{showIconRef:computed(()=>{const r=t.value;return e.tmNodes.some(o=>{var a;if(o.isGroup)return(a=o.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>r?r(l):l.icon);const{rawNode:s}=o;return r?r(s):s.icon})}),hasSubmenuRef:computed(()=>{const{value:r}=n;return e.tmNodes.some(o=>{var a;if(o.isGroup)return(a=o.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>isSubmenuNode(l,r));const{rawNode:s}=o;return isSubmenuNode(s,r)})})})},render(){const{parentKey:e,clsPrefix:t}=this;return h("div",{class:`${t}-dropdown-menu`},this.tmNodes.map(n=>{const{rawNode:r}=n;return isRenderNode(r)?h(NDropdownRenderOption,{tmNode:n,key:n.key}):isDividerNode$1(r)?h(NDropdownDivider,{clsPrefix:t,key:n.key}):isGroupNode(r)?h(NDropdownGroup,{clsPrefix:t,tmNode:n,parentKey:e,key:n.key}):h(NDropdownOption,{clsPrefix:t,tmNode:n,parentKey:e,key:n.key,props:r.props})}),this.showArrow?renderArrow({clsPrefix:t,arrowStyle:this.arrowStyle}):null)}}),style$a=cB("dropdown-menu",`
 transform-origin: inherit;
 padding: var(--n-padding);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[fadeInScaleUpTransition(),cB("dropdown-option",`
 position: relative;
 `,[c$1("a",`
 text-decoration: none;
 color: inherit;
 `,[c$1("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),cB("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[cM("pending",[cNotM("disabled",{color:"var(--n-option-text-color-hover)",backgroundColor:"var(--n-option-color-hover)"}),cE("prefix, suffix",{color:"var(--n-option-text-color-hover)"})]),cM("active",[cNotM("disabled",{color:"var(--n-option-text-color-active)",backgroundColor:"var(--n-option-color-active)"}),cE("prefix, suffix",{color:"var(--n-option-text-color-active)"})]),cM("disabled",{cursor:"not-allowed",opacity:"var(--n-option-opacity-disabled)"}),cM("child-active",{color:"var(--n-option-text-color-child-active)"},[cE("prefix, suffix",{color:"var(--n-option-text-color-child-active)"})]),cM("group",{fontSize:"calc(var(--n-font-size) - 1px)",color:"var(--n-group-header-text-color)"},[cE("prefix",{width:"calc(var(--n-option-prefix-width) / 2)"},[cM("show-icon",{width:"calc(var(--n-option-icon-prefix-width) / 2)"})])]),cE("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 `,[cM("show-icon",{width:"var(--n-option-icon-prefix-width)"}),cB("icon",{fontSize:"var(--n-option-icon-size)"})]),cE("label",{whiteSpace:"nowrap",flex:1}),cE("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 `,[cM("has-submenu",{width:"var(--n-option-icon-suffix-width)"}),cB("icon",{fontSize:"var(--n-option-icon-size)"})]),cB("dropdown-menu",{pointerEvents:"all"})]),cB("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),cB("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),cB("dropdown-menu-wrapper",`
 transform-origin: inherit;
 width: fit-content;
 `)]);const dropdownBaseProps={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},showArrow:Boolean,renderLabel:Function,renderIcon:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},popoverPropKeys=Object.keys(popoverBaseProps),dropdownProps=Object.assign(Object.assign(Object.assign({},popoverBaseProps),dropdownBaseProps),useTheme.props);var __unplugin_components_0$5=defineComponent({name:"Dropdown",inheritAttrs:!1,props:dropdownProps,setup(e){const t=ref(!1),n=useMergedState(toRef(e,"show"),t),r=computed(()=>{const{keyField:B,childrenField:V}=e;return createTreeMate(e.options,{getKey(L){return L[B]},getDisabled(L){return L.disabled===!0},getIgnored(L){return L.type==="divider"||L.type==="render"},getChildren(L){return L[V]}})}),o=computed(()=>r.value.treeNodes),a=ref(null),s=ref(null),l=ref(null),u=computed(()=>{var B,V,L;return(L=(V=(B=a.value)!==null&&B!==void 0?B:s.value)!==null&&V!==void 0?V:l.value)!==null&&L!==void 0?L:null}),d=computed(()=>r.value.getPath(u.value).keyPath),f=computed(()=>r.value.getPath(e.value).keyPath),m=useMemo(()=>e.keyboard&&n.value);useKeyboard({keydown:{ArrowUp:{prevent:!0,handler:k},ArrowRight:{prevent:!0,handler:S},ArrowDown:{prevent:!0,handler:A},ArrowLeft:{prevent:!0,handler:N},Escape:E},keyup:{Enter:_}},m);const{mergedClsPrefixRef:g,inlineThemeDisabled:y}=useConfig(e),b=useTheme("Dropdown","-dropdown",style$a,dropdownLight$1,e,g);provide(dropdownInjectionKey,{labelFieldRef:toRef(e,"labelField"),childrenFieldRef:toRef(e,"childrenField"),renderLabelRef:toRef(e,"renderLabel"),renderIconRef:toRef(e,"renderIcon"),hoverKeyRef:a,keyboardKeyRef:s,lastToggledSubmenuKeyRef:l,pendingKeyPathRef:d,activeKeyPathRef:f,animatedRef:toRef(e,"animated"),mergedShowRef:n,doSelect:x,doUpdateShow:C}),watch(n,B=>{B||$()});function x(B,V){const{onSelect:L}=e;L&&call(L,B,V)}function C(B){const{"onUpdate:show":V,onUpdateShow:L}=e;V&&call(V,B),L&&call(L,B),t.value=B}function $(){a.value=null,s.value=null,l.value=null}function E(){C(!1)}function N(){I("left")}function S(){I("right")}function k(){I("up")}function A(){I("down")}function _(){const B=P();B!=null&&B.isLeaf&&(x(B.key,B.rawNode),C(!1))}function P(){var B;const{value:V}=r,{value:L}=u;return!V||L===null?null:(B=V.getNode(L))!==null&&B!==void 0?B:null}function I(B){const{value:V}=u,{value:{getFirstAvailableNode:L}}=r;let G=null;if(V===null){const z=L();z!==null&&(G=z.key)}else{const z=P();if(z){let J;switch(B){case"down":J=z.getNext();break;case"up":J=z.getPrev();break;case"right":J=z.getChild();break;case"left":J=z.getParent();break}J&&(G=J.key)}}G!==null&&(a.value=null,s.value=G)}const O=computed(()=>{const{size:B,inverted:V}=e,{common:{cubicBezierEaseInOut:L},self:G}=b.value,{padding:z,dividerColor:J,borderRadius:ie,optionOpacityDisabled:ye,[createKey("optionIconSuffixWidth",B)]:be,[createKey("optionSuffixWidth",B)]:Te,[createKey("optionIconPrefixWidth",B)]:Ae,[createKey("optionPrefixWidth",B)]:Oe,[createKey("fontSize",B)]:Me,[createKey("optionHeight",B)]:H,[createKey("optionIconSize",B)]:te}=G,Y={"--n-bezier":L,"--n-font-size":Me,"--n-padding":z,"--n-border-radius":ie,"--n-option-height":H,"--n-option-prefix-width":Oe,"--n-option-icon-prefix-width":Ae,"--n-option-suffix-width":Te,"--n-option-icon-suffix-width":be,"--n-option-icon-size":te,"--n-divider-color":J,"--n-option-opacity-disabled":ye};return V?(Y["--n-color"]=G.colorInverted,Y["--n-option-color-hover"]=G.optionColorHoverInverted,Y["--n-option-color-active"]=G.optionColorActiveInverted,Y["--n-option-text-color"]=G.optionTextColorInverted,Y["--n-option-text-color-hover"]=G.optionTextColorHoverInverted,Y["--n-option-text-color-active"]=G.optionTextColorActiveInverted,Y["--n-option-text-color-child-active"]=G.optionTextColorChildActiveInverted,Y["--n-prefix-color"]=G.prefixColorInverted,Y["--n-suffix-color"]=G.suffixColorInverted,Y["--n-group-header-text-color"]=G.groupHeaderTextColorInverted):(Y["--n-color"]=G.color,Y["--n-option-color-hover"]=G.optionColorHover,Y["--n-option-color-active"]=G.optionColorActive,Y["--n-option-text-color"]=G.optionTextColor,Y["--n-option-text-color-hover"]=G.optionTextColorHover,Y["--n-option-text-color-active"]=G.optionTextColorActive,Y["--n-option-text-color-child-active"]=G.optionTextColorChildActive,Y["--n-prefix-color"]=G.prefixColor,Y["--n-suffix-color"]=G.suffixColor,Y["--n-group-header-text-color"]=G.groupHeaderTextColor),Y}),j=y?useThemeClass("dropdown",computed(()=>`${e.size[0]}${e.inverted?"i":""}`),O,e):void 0;return{mergedClsPrefix:g,mergedTheme:b,tmNodes:o,mergedShow:n,doUpdateShow:C,cssVars:y?void 0:O,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender}},render(){const e=(r,o,a,s,l)=>{var u;const{mergedClsPrefix:d}=this;(u=this.onRender)===null||u===void 0||u.call(this);const f={ref:createRefSetter(o),class:[r,`${d}-dropdown`,this.themeClass,this.trigger==="manual"&&`${d}-popover--manual-trigger`,this.showArrow&&`${d}-popover--show-arrow`],clsPrefix:d,tmNodes:this.tmNodes,style:[a,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,onMouseenter:s,onMouseleave:l};return h(NDropdownMenu,mergeProps(this.$attrs,f))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalRenderBody:e,onUpdateShow:this.doUpdateShow};return h(NPopover,Object.assign({},keep(this.$props,popoverPropKeys),n),{trigger:()=>{var r,o;return(o=(r=this.$slots).default)===null||o===void 0?void 0:o.call(r)}})}}),commonVars$1={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"18px",closeMargin:"22px 28px 0 0",closeMarginIconTop:"12px 18px 0 0"};const self$9=e=>{const{textColor1:t,textColor2:n,modalColor:r,closeColor:o,closeColorHover:a,closeColorPressed:s,infoColor:l,successColor:u,warningColor:d,errorColor:f,primaryColor:m,dividerColor:g,borderRadius:y,fontWeightStrong:b,lineHeight:x,fontSize:C}=e;return Object.assign(Object.assign({},commonVars$1),{fontSize:C,lineHeight:x,border:`1px solid ${g}`,titleTextColor:t,textColor:n,color:r,closeColor:o,closeColorHover:a,closeColorPressed:s,iconColor:m,iconColorInfo:l,iconColorSuccess:u,iconColorWarning:d,iconColorError:f,borderRadius:y,titleFontWeight:b})},dialogLight={name:"Dialog",common:commonLight,peers:{Button:buttonLight$1},self:self$9};var dialogLight$1=dialogLight;const dialogProps={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,onPositiveClick:Function,onNegativeClick:Function,onClose:Function},dialogPropKeys=keysOf(dialogProps);var style$9=c$1([cB("dialog",`
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[cE("icon",{color:"var(--n-icon-color)"}),cM("bordered",{border:"var(--n-border)"}),cM("icon-top",[cE("close",{margin:"var(--n-close-margin)"}),cE("icon",{margin:"var(--n-icon-margin)"}),cE("content",{textAlign:"center"}),cE("title",{justifyContent:"center"}),cE("action",{justifyContent:"center"})]),cM("icon-left",[cE("icon",{margin:"var(--n-icon-margin)"})]),cE("close",`
 font-size: var(--n-close-size);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition: .3s color var(--n-bezier);
 z-index: 1;
 `),cE("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[cM("last","margin-bottom: 0;")]),cE("action",`
 display: flex;
 justify-content: flex-end;
 `,[c$1("> *:not(:last-child)",{marginRight:"var(--n-action-space)"})]),cE("icon",{fontSize:"var(--n-icon-size)",transition:"color .3s var(--n-bezier)"}),cE("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),cB("dialog-icon-container",{display:"flex",justifyContent:"center"})]),insideModal(cB("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),cB("dialog",[asModal(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]);const infoIcon=h(InfoIcon,null),iconMap$1={default:infoIcon,info:infoIcon,success:h(SuccessIcon,null),warning:h(WarningIcon,null),error:h(ErrorIcon,null)},NDialog=defineComponent({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},useTheme.props),dialogProps),setup(e){const{mergedComponentPropsRef:t,mergedClsPrefixRef:n,inlineThemeDisabled:r}=useConfig(e),o=computed(()=>{var m,g;const{iconPlacement:y}=e;return y||((g=(m=t==null?void 0:t.value)===null||m===void 0?void 0:m.Dialog)===null||g===void 0?void 0:g.iconPlacement)||"left"});function a(m){const{onPositiveClick:g}=e;g&&g(m)}function s(m){const{onNegativeClick:g}=e;g&&g(m)}function l(){const{onClose:m}=e;m&&m()}const u=useTheme("Dialog","-dialog",style$9,dialogLight$1,e,n),d=computed(()=>{const{type:m}=e,g=o.value,{common:{cubicBezierEaseInOut:y},self:{fontSize:b,lineHeight:x,border:C,titleTextColor:$,textColor:E,color:N,closeColor:S,closeColorHover:k,closeColorPressed:A,borderRadius:_,titleFontWeight:P,titleFontSize:I,padding:O,iconSize:j,actionSpace:B,contentMargin:V,closeSize:L,[g==="top"?"iconMarginIconTop":"iconMargin"]:G,[g==="top"?"closeMarginIconTop":"closeMargin"]:z,[createKey("iconColor",m)]:J}}=u.value;return{"--n-font-size":b,"--n-icon-color":J,"--n-bezier":y,"--n-close-margin":z,"--n-icon-margin":G,"--n-icon-size":j,"--n-close-size":L,"--n-close-color":S,"--n-close-color-hover":k,"--n-close-color-pressed":A,"--n-color":N,"--n-text-color":E,"--n-border-radius":_,"--n-padding":O,"--n-line-height":x,"--n-border":C,"--n-content-margin":V,"--n-title-font-size":I,"--n-title-font-weight":P,"--n-title-text-color":$,"--n-action-space":B}}),f=r?useThemeClass("dialog",computed(()=>`${e.type[0]}${o.value[0]}`),d,e):void 0;return{mergedClsPrefix:n,mergedIconPlacement:o,mergedTheme:u,handlePositiveClick:a,handleNegativeClick:s,handleCloseClick:l,cssVars:r?void 0:d,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){var e;const{bordered:t,mergedIconPlacement:n,cssVars:r,closable:o,showIcon:a,title:s,content:l,action:u,negativeText:d,positiveText:f,positiveButtonProps:m,negativeButtonProps:g,handlePositiveClick:y,handleNegativeClick:b,mergedTheme:x,loading:C,type:$,mergedClsPrefix:E}=this;(e=this.onRender)===null||e===void 0||e.call(this);const N=a?h(NBaseIcon,{clsPrefix:E,class:`${E}-dialog__icon`},{default:()=>resolveWrappedSlot(this.$slots.icon,k=>k||(this.icon?render$a(this.icon):iconMap$1[this.type]))}):null,S=resolveWrappedSlot(this.$slots.action,k=>k||f||d||u?h("div",{class:`${E}-dialog__action`},k||(u?[render$a(u)]:[this.negativeText&&h(__unplugin_components_0$6,Object.assign({theme:x.peers.Button,themeOverrides:x.peerOverrides.Button,ghost:!0,size:"small",onClick:b},g),{default:()=>render$a(this.negativeText)}),this.positiveText&&h(__unplugin_components_0$6,Object.assign({theme:x.peers.Button,themeOverrides:x.peerOverrides.Button,size:"small",type:$==="default"?"primary":$,disabled:C,loading:C,onClick:y},m),{default:()=>render$a(this.positiveText)})])):null);return h("div",{class:[`${E}-dialog`,this.themeClass,`${E}-dialog--icon-${n}`,t&&`${E}-dialog--bordered`],style:r,role:"dialog"},o?h(NBaseClose,{clsPrefix:E,class:`${E}-dialog__close`,onClick:this.handleCloseClick}):null,a&&n==="top"?h("div",{class:`${E}-dialog-icon-container`},N):null,h("div",{class:`${E}-dialog__title`},a&&n==="left"?N:null,resolveSlot(this.$slots.header,()=>[render$a(s)])),h("div",{class:[`${E}-dialog__content`,S?"":`${E}-dialog__content--last`]},resolveSlot(this.$slots.default,()=>[render$a(l)])),S)}}),dialogProviderInjectionKey="n-dialog-provider",dialogApiInjectionKey="n-dialog-api",self$8=e=>{const{modalColor:t,textColor2:n,boxShadow3:r}=e;return{color:t,textColor:n,boxShadow:r}},modalLight={name:"Modal",common:commonLight,peers:{Scrollbar:scrollbarLight$1,Dialog:dialogLight$1,Card:cardLight$1},self:self$8};var modalLight$1=modalLight;const presetProps=Object.assign(Object.assign({},cardBaseProps),dialogProps),presetPropsKeys=keysOf(presetProps);var NModalBodyWrapper=defineComponent({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0}},presetProps),{onClickoutside:{type:Function,required:!0},onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const t=ref(null),n=ref(null),r=ref(e.show),o=ref(null),a=ref(null);watch(toRef(e,"show"),$=>{$&&(r.value=!0)});const s=inject(modalInjectionKey);function l(){if(s.transformOriginRef.value==="center")return"";const{value:$}=o,{value:E}=a;if($===null||E===null)return"";if(n.value){const N=n.value.containerScrollTop;return`${$}px ${E+N}px`}return""}function u($){if(s.transformOriginRef.value==="center")return;const E=s.getMousePosition();if(!E||!n.value)return;const N=n.value.containerScrollTop,{offsetLeft:S,offsetTop:k}=$;if(E){const A=E.y,_=E.x;o.value=-(S-_),a.value=-(k-A-N)}$.style.transformOrigin=l()}function d($){nextTick(()=>{u($)})}function f($){$.style.transformOrigin=l(),e.onBeforeLeave()}function m(){r.value=!1,o.value=null,a.value=null,e.onAfterLeave()}function g(){const{onClose:$}=e;$&&$()}function y(){e.onNegativeClick()}function b(){e.onPositiveClick()}function x($){e.onClickoutside($)}const C=ref(null);return watch(C,$=>{$&&nextTick(()=>{const E=$.el;E&&t.value!==E&&(t.value=E)})}),provide(modalBodyInjectionKey,t),provide(drawerBodyInjectionKey,null),provide(popoverBodyInjectionKey,null),{mergedTheme:s.mergedThemeRef,appear:s.appearRef,isMounted:s.isMountedRef,mergedClsPrefix:s.mergedClsPrefixRef,bodyRef:t,scrollbarRef:n,displayed:r,childNodeRef:C,handleClickOutside:x,handlePositiveClick:b,handleNegativeClick:y,handleCloseClick:g,handleAfterLeave:m,handleBeforeLeave:f,handleEnter:d}},render(){const{$slots:e,$attrs:t,handleEnter:n,handleAfterLeave:r,handleBeforeLeave:o,handleClickOutside:a,preset:s,mergedClsPrefix:l}=this;let u=null;if(!s){if(u=getFirstSlotVNode(e),!u){warn$2("modal","default slot is empty");return}u=cloneVNode(u),u.props=mergeProps({class:`${l}-modal`},t,u.props||{})}return this.displayDirective==="show"||this.displayed||this.show?withDirectives(h("div",{role:"none",class:`${l}-modal-body-wrapper`},h(NScrollbar,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${l}-modal-scroll-content`},{default:()=>h(FocusTrap,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var d;return h(Transition,{name:"fade-in-scale-up-transition",appear:(d=this.appear)!==null&&d!==void 0?d:this.isMounted,onEnter:n,onAfterEnter:this.onAfterEnter,onAfterLeave:r,onBeforeLeave:o},{default:()=>withDirectives(this.preset==="confirm"||this.preset==="dialog"?h(NDialog,Object.assign({},this.$attrs,{class:[`${l}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},keep(this.$props,dialogPropKeys),{"aria-modal":"true"}),e):this.preset==="card"?h(__unplugin_components_2$2,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${l}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},keep(this.$props,cardBasePropKeys),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=u,[[vShow,this.show],[clickoutside$1,a]])})}})})),[[vShow,this.displayDirective==="if"||this.displayed||this.show]]):null}}),style$8=c$1([cB("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),cB("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[fadeInTransition({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),cB("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[cB("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),cB("modal",`
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[fadeInScaleUpTransition({duration:".25s",enterScale:".5"})])]);const modalProps=Object.assign(Object.assign(Object.assign(Object.assign({},useTheme.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0}}),presetProps),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function});var NModal=defineComponent({name:"Modal",inheritAttrs:!1,props:modalProps,setup(e){e.onHide&&warnOnce("modal","`on-hide` is deprecated."),e.onAfterHide&&warnOnce("modal","`on-after-hide` is deprecated, please use `on-after-leave` instead."),e.onBeforeHide&&warnOnce("modal","`on-before-hide` is deprecated, please use `on-before-leave` instead."),e.overlayStyle&&warnOnce("modal","`overlay-style` is deprecated, please use `style` instead.");const t=ref(null),{mergedClsPrefixRef:n,namespaceRef:r,inlineThemeDisabled:o}=useConfig(e),a=useTheme("Modal","-modal",style$8,modalLight$1,e,n),s=useClicked(64),l=useClickPosition(),u=isMounted(),d=e.internalDialog?inject(dialogProviderInjectionKey,null):null;function f(S){const{onUpdateShow:k,"onUpdate:show":A,onHide:_}=e;k&&call(k,S),A&&call(A,S),_&&!S&&_(S)}function m(){const{onClose:S}=e;S?Promise.resolve(S()).then(k=>{k!==!1&&f(!1)}):f(!1)}function g(){const{onPositiveClick:S}=e;S?Promise.resolve(S()).then(k=>{k!==!1&&f(!1)}):f(!1)}function y(){const{onNegativeClick:S}=e;S?Promise.resolve(S()).then(k=>{k!==!1&&f(!1)}):f(!1)}function b(){const{onBeforeLeave:S,onBeforeHide:k}=e;S&&call(S),k&&k()}function x(){const{onAfterLeave:S,onAfterHide:k}=e;S&&call(S),k&&k()}function C(S){var k;const{onMaskClick:A}=e;A&&A(S),e.maskClosable&&!((k=t.value)===null||k===void 0)&&k.contains(S.target)&&f(!1)}function $(S){var k;(k=e.onEsc)===null||k===void 0||k.call(e),e.closeOnEsc&&f(!1)}provide(modalInjectionKey,{getMousePosition:()=>{if(d){const{clickedRef:S,clickPositionRef:k}=d;if(S.value&&k.value)return k.value}return s.value?l.value:null},mergedClsPrefixRef:n,mergedThemeRef:a,isMountedRef:u,appearRef:toRef(e,"internalAppear"),transformOriginRef:toRef(e,"transformOrigin")});const E=computed(()=>{const{common:{cubicBezierEaseOut:S},self:{boxShadow:k,color:A,textColor:_}}=a.value;return{"--n-bezier-ease-out":S,"--n-box-shadow":k,"--n-color":A,"--n-text-color":_}}),N=o?useThemeClass("theme-class",void 0,E,e):void 0;return{mergedClsPrefix:n,namespace:r,isMounted:u,containerRef:t,presetProps:computed(()=>keep(e,presetPropsKeys)),handleEsc:$,handleAfterLeave:x,handleClickoutside:C,handleBeforeLeave:b,doUpdateShow:f,handleNegativeClick:y,handlePositiveClick:g,handleCloseClick:m,cssVars:o?void 0:E,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender}},render(){const{mergedClsPrefix:e}=this;return h(LazyTeleport,{to:this.to,show:this.show},{default:()=>{var t,n;return(t=this.onRender)===null||t===void 0||t.call(this),withDirectives(h("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},this.unstableShowMask?h(Transition,{name:"fade-in-transition",key:"mask",appear:(n=this.internalAppear)!==null&&n!==void 0?n:this.isMounted},{default:()=>this.show?h("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`}):null}):null,h(NModalBodyWrapper,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:this.handleClickoutside}),this.$slots)),[[zindexable$1,{zIndex:this.zIndex,enabled:this.show}]])}})}});const exposedDialogEnvProps=Object.assign(Object.assign({},dialogProps),{closeOnEsc:{type:Boolean,default:!0},internalStyle:[String,Object],maskClosable:{type:Boolean,default:!0},onPositiveClick:Function,onNegativeClick:Function,onClose:Function,onMaskClick:Function}),NDialogEnvironment=defineComponent({name:"DialogEnvironment",props:Object.assign(Object.assign({},exposedDialogEnvProps),{internalKey:{type:String,required:!0},to:[String,Object],onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const t=ref(!0);function n(){e.onInternalAfterLeave(e.internalKey)}function r(d){const{onPositiveClick:f}=e;f?Promise.resolve(f(d)).then(m=>{m!==!1&&l()}):l()}function o(d){const{onNegativeClick:f}=e;f?Promise.resolve(f(d)).then(m=>{m!==!1&&l()}):l()}function a(){const{onClose:d}=e;d?Promise.resolve(d()).then(f=>{f!==!1&&l()}):l()}function s(d){const{onMaskClick:f,maskClosable:m}=e;f&&(f(d),m&&l())}function l(){t.value=!1}function u(d){t.value=d}return{show:t,hide:l,handleUpdateShow:u,handleAfterLeave:n,handleCloseClick:a,handleNegativeClick:o,handlePositiveClick:r,handleMaskClick:s}},render(){const{handlePositiveClick:e,handleUpdateShow:t,handleNegativeClick:n,handleCloseClick:r,handleAfterLeave:o,handleMaskClick:a,to:s,maskClosable:l,show:u}=this;return h(NModal,{show:u,onUpdateShow:t,onMaskClick:a,to:s,maskClosable:l,onAfterLeave:o,closeOnEsc:this.closeOnEsc,internalAppear:!0,internalDialog:!0},{default:()=>h(NDialog,Object.assign({},keep(this.$props,dialogPropKeys),{style:this.internalStyle,onClose:r,onNegativeClick:n,onPositiveClick:e}))})}}),dialogProviderProps={injectionKey:String,to:[String,Object]},NDialogProvider=defineComponent({name:"DialogProvider",props:dialogProviderProps,setup(){const e=ref([]),t={};function n(l={}){const u=createId(),d=reactive(Object.assign(Object.assign({},l),{key:u,destroy:()=>{t[`n-dialog-${u}`].hide()}}));return e.value.push(d),d}const r=["info","success","warning","error"].map(l=>u=>n(Object.assign(Object.assign({},u),{type:l})));function o(l){const{value:u}=e;u.splice(u.findIndex(d=>d.key===l),1)}function a(){Object.values(t).forEach(l=>l.hide())}const s={create:n,destroyAll:a,info:r[0],success:r[1],warning:r[2],error:r[3]};return provide(dialogApiInjectionKey,s),provide(dialogProviderInjectionKey,{clickedRef:useClicked(64),clickPositionRef:useClickPosition()}),Object.assign(Object.assign({},s),{dialogList:e,dialogInstRefs:t,handleAfterLeave:o})},render(){var e,t;return h(Fragment,null,[this.dialogList.map(n=>h(NDialogEnvironment,omit(n,["destroy","style"],{internalStyle:n.style,to:this.to,ref:r=>{r===null?delete this.dialogInstRefs[`n-dialog-${n.key}`]:this.dialogInstRefs[`n-dialog-${n.key}`]=r},internalKey:n.key,onInternalAfterLeave:this.handleAfterLeave}))),(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)])}});function useDialog(){const e=inject(dialogApiInjectionKey,null);return e===null&&throwError("use-dialog","No outer <n-dialog-provider /> founded."),e}var commonVars={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"};const self$7=()=>commonVars,spaceLight={name:"Space",self:self$7};var spaceLight$1=spaceLight;const spaceProps=Object.assign(Object.assign({},useTheme.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},itemStyle:[String,Object],wrap:{type:Boolean,default:!0}});var __unplugin_components_1$1=defineComponent({name:"Space",props:spaceProps,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=useConfig(e),r=useTheme("Space","-space",void 0,spaceLight$1,e,t);return{rtlEnabled:useRtl("Space",n,t),mergedClsPrefix:t,margin:computed(()=>{const{size:a}=e;if(Array.isArray(a))return{horizontal:a[0],vertical:a[1]};if(typeof a=="number")return{horizontal:a,vertical:a};const{self:{[createKey("gap",a)]:s}}=r.value,{row:l,col:u}=getGap(s);return{horizontal:depx(u),vertical:depx(l)}})}},render(){const{vertical:e,align:t,inline:n,justify:r,itemStyle:o,margin:a,wrap:s,mergedClsPrefix:l,rtlEnabled:u}=this,d=flatten$2(getSlot$1(this));if(!d.length)return null;const f=`${a.horizontal}px`,m=`${a.horizontal/2}px`,g=`${a.vertical}px`,y=`${a.vertical/2}px`,b=d.length-1,x=r.startsWith("space-");return h("div",{role:"none",class:[`${l}-space`,u&&`${l}-space--rtl`],style:{display:n?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(r)?"flex-"+r:r,flexWrap:!s||e?"nowrap":"wrap",marginTop:e?"":`-${y}`,marginBottom:e?"":`-${y}`,alignItems:t}},d.map((C,$)=>h("div",{role:"none",style:[o,{maxWidth:"100%"},e?{marginBottom:$!==b?g:""}:u?{marginLeft:x?r==="space-between"&&$===b?"":m:$!==b?f:"",marginRight:x?r==="space-between"&&$===0?"":m:"",paddingTop:y,paddingBottom:y}:{marginRight:x?r==="space-between"&&$===b?"":m:$!==b?f:"",marginLeft:x?r==="space-between"&&$===0?"":m:"",paddingTop:y,paddingBottom:y}]},C)))}});const self$6=e=>{const{primaryColor:t,successColor:n,warningColor:r,errorColor:o,infoColor:a,fontWeightStrong:s}=e;return{fontWeight:s,rotate:"252deg",colorStartPrimary:changeColor(t,{alpha:.6}),colorEndPrimary:t,colorStartInfo:changeColor(a,{alpha:.6}),colorEndInfo:a,colorStartWarning:changeColor(r,{alpha:.6}),colorEndWarning:r,colorStartError:changeColor(o,{alpha:.6}),colorEndError:o,colorStartSuccess:changeColor(n,{alpha:.6}),colorEndSuccess:n}},gradientTextLight={name:"GradientText",common:commonLight,self:self$6};var gradientTextLight$1=gradientTextLight,style$7=cB("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`);const gradientTextProps=Object.assign(Object.assign({},useTheme.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]});var __unplugin_components_0$4=defineComponent({name:"GradientText",props:gradientTextProps,setup(e){useHoudini();const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=useConfig(e),r=computed(()=>{const{type:d}=e;return d==="danger"?"error":d}),o=computed(()=>{let d=e.size||e.fontSize;return d&&(d=formatLength(d)),d||void 0}),a=computed(()=>{const d=e.color||e.gradient;if(typeof d=="string")return d;if(d){const f=d.deg||0,m=d.from,g=d.to;return`linear-gradient(${f}deg, ${m} 0%, ${g} 100%)`}}),s=useTheme("GradientText","-gradient-text",style$7,gradientTextLight$1,e,t),l=computed(()=>{const{value:d}=r,{common:{cubicBezierEaseInOut:f},self:{rotate:m,[createKey("colorStart",d)]:g,[createKey("colorEnd",d)]:y,fontWeight:b}}=s.value;return{"--n-bezier":f,"--n-rotate":m,"--n-color-start":g,"--n-color-end":y,"--n-font-weight":b}}),u=n?useThemeClass("gradient-text",computed(()=>r.value[0]),l,e):void 0;return{mergedClsPrefix:t,compatibleType:r,styleFontSize:o,styleBgImage:a,cssVars:n?void 0:l,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t==null||t(),h("span",{class:[`${e}-gradient-text`,`${e}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}});const self$5=e=>{const{baseColor:t,textColor2:n,bodyColor:r,cardColor:o,dividerColor:a,actionColor:s,scrollbarColor:l,scrollbarColorHover:u,invertedColor:d}=e;return{textColor:n,textColorInverted:"#FFF",color:r,colorEmbedded:s,headerColor:o,headerColorInverted:d,footerColor:s,footerColorInverted:d,headerBorderColor:a,headerBorderColorInverted:d,footerBorderColor:a,footerBorderColorInverted:d,siderBorderColor:a,siderBorderColorInverted:d,siderColor:o,siderColorInverted:d,siderToggleButtonBorder:`1px solid ${a}`,siderToggleButtonColor:t,siderToggleButtonIconColor:n,siderToggleButtonIconColorInverted:n,siderToggleBarColor:composite(r,l),siderToggleBarColorHover:composite(r,u),__invertScrollbar:"true"}},layoutLight={name:"Layout",common:commonLight,peers:{Scrollbar:scrollbarLight$1},self:self$5};var layoutLight$1=layoutLight;const self$4=e=>{const{primaryColor:t,errorColor:n}=e;return{colorError:n,colorLoading:t,height:"2px"}},loadingBarLight={name:"LoadingBar",common:commonLight,self:self$4};var loadingBarLight$1=loadingBarLight;function createPartialInvertedVars(e,t,n,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:n,itemTextColorChildActiveInverted:n,itemTextColorActiveInverted:n,itemTextColorActiveHoverInverted:n,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:n,itemTextColorChildActiveHorizontalInverted:n,itemTextColorActiveHorizontalInverted:n,itemTextColorActiveHoverHorizontalInverted:n,itemIconColorInverted:e,itemIconColorHoverInverted:n,itemIconColorActiveInverted:n,itemIconColorActiveHoverInverted:n,itemIconColorChildActiveInverted:n,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:n,itemIconColorActiveHorizontalInverted:n,itemIconColorActiveHoverHorizontalInverted:n,itemIconColorChildActiveHorizontalInverted:n,arrowColorInverted:e,arrowColorHoverInverted:n,arrowColorActiveInverted:n,arrowColorActiveHoverInverted:n,arrowColorChildActiveInverted:n,groupTextColorInverted:r}}const self$3=e=>{const{borderRadius:t,textColor3:n,primaryColor:r,textColor2:o,textColor1:a,fontSize:s,dividerColor:l,hoverColor:u,primaryColorHover:d}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:n,itemColorHover:u,itemColorActive:changeColor(r,{alpha:.1}),itemColorActiveHover:changeColor(r,{alpha:.1}),itemColorActiveCollapsed:changeColor(r,{alpha:.1}),itemTextColor:o,itemTextColorHover:o,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorHorizontal:o,itemTextColorHoverHorizontal:d,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemIconColor:a,itemIconColorHover:a,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorCollapsed:a,itemIconColorHorizontal:a,itemIconColorHoverHorizontal:d,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemHeight:"42px",arrowColor:o,arrowColorHover:o,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:s,dividerColor:l},createPartialInvertedVars("#BBB",r,"#FFF","#AAA"))},menuLight={name:"Menu",common:commonLight,peers:{Tooltip:tooltipLight$1,Dropdown:dropdownLight$1},self:self$3};var menuLight$1=menuLight,commonVariables={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 12px",closeSize:"16px",iconSize:"20px",fontSize:"14px"};const self$2=e=>{const{textColor2:t,closeColor:n,closeColorHover:r,closeColorPressed:o,infoColor:a,successColor:s,errorColor:l,warningColor:u,popoverColor:d,boxShadow2:f,primaryColor:m,lineHeight:g,borderRadius:y}=e;return Object.assign(Object.assign({},commonVariables),{textColor:t,textColorInfo:t,textColorSuccess:t,textColorError:t,textColorWarning:t,textColorLoading:t,color:d,colorInfo:d,colorSuccess:d,colorError:d,colorWarning:d,colorLoading:d,boxShadow:f,boxShadowInfo:f,boxShadowSuccess:f,boxShadowError:f,boxShadowWarning:f,boxShadowLoading:f,iconColor:t,iconColorInfo:a,iconColorSuccess:s,iconColorWarning:u,iconColorError:l,iconColorLoading:m,closeColor:n,closeColorHover:r,closeColorPressed:o,closeColorInfo:n,closeColorHoverInfo:r,closeColorPressedInfo:o,closeColorSuccess:n,closeColorHoverSuccess:r,closeColorPressedSuccess:o,closeColorError:n,closeColorHoverError:r,closeColorPressedError:o,closeColorWarning:n,closeColorHoverWarning:r,closeColorPressedWarning:o,closeColorLoading:n,closeColorHoverLoading:r,closeColorPressedLoading:o,loadingColor:m,lineHeight:g,borderRadius:y})},messageLight={name:"Message",common:commonLight,self:self$2};var messageLight$1=messageLight;const self$1=e=>{const{textColor2:t,textColor3:n,fontSize:r,fontWeight:o}=e;return{labelFontSize:r,labelFontWeight:o,valueFontWeight:o,labelTextColor:n,valuePrefixTextColor:t,valueSuffixTextColor:t,valueTextColor:t}},statisticLight={name:"Statistic",common:commonLight,self:self$1};var statisticLight$1=statisticLight,style$6=cB("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[cB("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),cM("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]);const layoutSiderInjectionKey="n-layout-sider",positionProp={type:String,default:"static"},layoutProps={embedded:Boolean,position:positionProp,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},layoutInjectionKey="n-layout";function createLayoutComponent(e){return defineComponent({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},useTheme.props),layoutProps),setup(t){const n=ref(null),r=ref(null),{mergedClsPrefixRef:o,inlineThemeDisabled:a}=useConfig(t),s=useTheme("Layout","-layout",style$6,layoutLight$1,t,o);function l(g,y){if(t.nativeScrollbar){const{value:b}=n;b&&(y===void 0?b.scrollTo(g):b.scrollTo(g,y))}else{const{value:b}=r;b&&b.scrollTo(g,y)}}provide(layoutInjectionKey,t);const u={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},d={scrollTo:l},f=computed(()=>{const{common:{cubicBezierEaseInOut:g},self:y}=s.value;return{"--n-bezier":g,"--n-color":t.embedded?y.colorEmbedded:y.color,"--n-text-color":y.textColor}}),m=a?useThemeClass("layout",void 0,f,t):void 0;return Object.assign({mergedClsPrefix:o,scrollableElRef:n,scrollbarInstRef:r,hasSiderStyle:u,mergedTheme:s,cssVars:a?void 0:f,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender},d)},render(){var t;const{mergedClsPrefix:n,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const o=r?this.hasSiderStyle:void 0,a=[this.themeClass,e&&`${n}-layout-content`,`${n}-layout`,`${n}-layout--${this.position}-positioned`];return h("div",{class:a,style:this.cssVars},this.nativeScrollbar?h("div",{ref:"scrollableElRef",class:`${n}-layout-scroll-container`,style:[this.contentStyle,o],onScroll:this.onScroll},this.$slots):h(NScrollbar,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,o]}),this.$slots))}})}var __unplugin_components_2$1=createLayoutComponent(!1),style$5=cB("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[cM("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),cM("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]);const headerProps={position:positionProp,inverted:Boolean,bordered:{type:Boolean,default:!1}};var __unplugin_components_1=defineComponent({name:"LayoutHeader",props:Object.assign(Object.assign({},useTheme.props),headerProps),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=useConfig(e),r=useTheme("Layout","-layout-header",style$5,layoutLight$1,e,t),o=computed(()=>{const{common:{cubicBezierEaseInOut:s},self:l}=r.value,u={"--n-bezier":s};return e.inverted?(u["--n-color"]=l.headerColorInverted,u["--n-text-color"]=l.textColorInverted,u["--n-border-color"]=l.headerBorderColorInverted):(u["--n-color"]=l.headerColor,u["--n-text-color"]=l.textColor,u["--n-border-color"]=l.headerBorderColor),u}),a=n?useThemeClass("layout-header",computed(()=>e.inverted?"a":"b"),o,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:o,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),style$4=cB("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[cM("bordered",[cE("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),cE("left-placement",[cM("bordered",[cE("border",`
 right: 0;
 `)])]),cM("right-placement",`
 justify-content: flex-start;
 `,[cM("bordered",[cE("border",`
 left: 0;
 `)]),cM("collapsed",[cB("layout-toggle-button",[cB("base-icon",`
 transform: rotate(180deg);
 `)]),cB("layout-toggle-bar",[c$1("&:hover",[cE("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),cE("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),cB("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[cB("base-icon",`
 transform: rotate(0);
 `)]),cB("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[c$1("&:hover",[cE("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),cE("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),cM("collapsed",[cB("layout-toggle-bar",[c$1("&:hover",[cE("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),cE("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),cB("layout-toggle-button",[cB("base-icon",`
 transform: rotate(0);
 `)])]),cB("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[cB("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),cB("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[cE("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),cE("bottom",`
 position: absolute;
 top: 34px;
 `),c$1("&:hover",[cE("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),cE("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),cE("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),c$1("&:hover",[cE("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),cE("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),cB("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),cM("show-content",[cB("layout-sider-scroll-container",{opacity:1})]),cM("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),ToggleButton=defineComponent({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},h(NBaseIcon,{clsPrefix:e},{default:()=>h(ChevronRightIcon,null)}))}}),ToggleBar=defineComponent({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return h("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},h("div",{class:`${e}-layout-toggle-bar__top`}),h("div",{class:`${e}-layout-toggle-bar__bottom`}))}});const layoutSiderProps={position:positionProp,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function};var __unplugin_components_0$3=defineComponent({name:"LayoutSider",props:Object.assign(Object.assign({},useTheme.props),layoutSiderProps),setup(e){const t=inject(layoutInjectionKey);t?t.hasSider||warn$2("layout-sider","You are putting `n-layout-sider` in a `n-layout` but haven't set `has-sider` on the `n-layout`."):warn$2("layout-sider","Layout sider is not allowed to be put outside layout.");const n=ref(null),r=ref(null),o=computed(()=>formatLength(u.value?e.collapsedWidth:e.width)),a=computed(()=>e.collapseMode!=="transform"?{}:{minWidth:formatLength(e.width)}),s=computed(()=>t?t.siderPlacement:"left"),l=ref(e.defaultCollapsed),u=useMergedState(toRef(e,"collapsed"),l);function d(E,N){if(e.nativeScrollbar){const{value:S}=n;S&&(N===void 0?S.scrollTo(E):S.scrollTo(E,N))}else{const{value:S}=r;S&&S.scrollTo(E,N)}}function f(){const{"onUpdate:collapsed":E,onUpdateCollapsed:N,onExpand:S,onCollapse:k}=e,{value:A}=u;N&&call(N,!A),E&&call(E,!A),l.value=!A,A?S&&call(S):k&&call(k)}provide(layoutSiderInjectionKey,{collapsedRef:u,collapseModeRef:toRef(e,"collapseMode")});const{mergedClsPrefixRef:m,inlineThemeDisabled:g}=useConfig(e),y=useTheme("Layout","-layout-sider",style$4,layoutLight$1,e,m);function b(E){var N,S;E.propertyName==="max-width"&&(u.value?(N=e.onAfterLeave)===null||N===void 0||N.call(e):(S=e.onAfterEnter)===null||S===void 0||S.call(e))}const x={scrollTo:d},C=computed(()=>{const{common:{cubicBezierEaseInOut:E},self:N}=y.value,{siderToggleButtonColor:S,siderToggleButtonBorder:k,siderToggleBarColor:A,siderToggleBarColorHover:_}=N,P={"--n-bezier":E,"--n-toggle-button-color":S,"--n-toggle-button-border":k,"--n-toggle-bar-color":A,"--n-toggle-bar-color-hover":_};return e.inverted?(P["--n-color"]=N.siderColorInverted,P["--n-text-color"]=N.textColorInverted,P["--n-border-color"]=N.siderBorderColorInverted,P["--n-toggle-button-icon-color"]=N.siderToggleButtonIconColorInverted,P.__invertScrollbar=N.__invertScrollbar):(P["--n-color"]=N.siderColor,P["--n-text-color"]=N.textColor,P["--n-border-color"]=N.siderBorderColor,P["--n-toggle-button-icon-color"]=N.siderToggleButtonIconColor),P}),$=g?useThemeClass("layout-sider",computed(()=>e.inverted?"a":"b"),C,e):void 0;return Object.assign({scrollableElRef:n,scrollbarInstRef:r,mergedClsPrefix:m,mergedTheme:y,styleMaxWidth:o,mergedCollapsed:u,scrollContainerStyle:a,siderPlacement:s,handleTransitionend:b,handleTriggerClick:f,inlineThemeDisabled:g,cssVars:C,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender},x)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:n,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,n&&`${t}-layout-sider--collapsed`,(!n||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:formatLength(this.width)}]},this.nativeScrollbar?h("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.onScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):h(NScrollbar,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?h(ToggleBar,{clsPrefix:t,style:n?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):h(ToggleButton,{clsPrefix:t,style:n?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?h("div",{class:`${t}-layout-sider__border`}):null)}});const loadingBarProviderInjectionKey="n-loading-bar",loadingBarApiInjectionKey="n-loading-bar-api";var style$3=cB("loading-bar-container",`
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`,[fadeInTransition({enterDuration:"0.3s",leaveDuration:"0.8s"}),cB("loading-bar",`
 width: 100%;
 transition:
 max-width 4s linear,
 background .2s linear;
 height: var(--n-height);
 `,[cM("starting",`
 background: var(--n-color-loading);
 `),cM("finishing",`
 background: var(--n-color-loading);
 transition:
 max-width .2s linear,
 background .2s linear;
 `),cM("error",`
 background: var(--n-color-error);
 transition:
 max-width .2s linear,
 background .2s linear;
 `)])]),__awaiter=globalThis&&globalThis.__awaiter||function(e,t,n,r){function o(a){return a instanceof n?a:new n(function(s){s(a)})}return new(n||(n=Promise))(function(a,s){function l(f){try{d(r.next(f))}catch(m){s(m)}}function u(f){try{d(r.throw(f))}catch(m){s(m)}}function d(f){f.done?a(f.value):o(f.value).then(l,u)}d((r=r.apply(e,t||[])).next())})};function createClassName(e,t){return`${t}-loading-bar ${t}-loading-bar--${e}`}var NLoadingBar=defineComponent({name:"LoadingBar",setup(e){const{inlineThemeDisabled:t}=useConfig(),{props:n,mergedClsPrefixRef:r}=inject(loadingBarProviderInjectionKey),o=ref(null),a=ref(!1),s=ref(!1),l=ref(!1),u=ref(!1);let d=!1;const f=ref(!1),m=computed(()=>{const{loadingBarStyle:A}=n;return A?A[f.value?"error":"loading"]:""});function g(){return __awaiter(this,void 0,void 0,function*(){a.value=!1,l.value=!1,d=!1,f.value=!1,u.value=!0,yield nextTick(),u.value=!1})}function y(A=0,_=80,P="starting"){return __awaiter(this,void 0,void 0,function*(){yield g(),l.value=!0,s.value=!0,yield nextTick();const I=o.value;!I||(I.style.maxWidth=`${A}%`,I.style.transition="none",I.offsetWidth,I.className=createClassName(P,r.value),I.style.transition="",I.style.maxWidth=`${_}%`)})}function b(){if(d||f.value||!l.value)return;d=!0;const A=o.value;!A||(A.className=createClassName("finishing",r.value),A.style.maxWidth="100%",A.offsetWidth,l.value=!1)}function x(){if(!(d||f.value))if(!l.value)y(100,100,"error").then(()=>{f.value=!0;const A=o.value;!A||(A.className=createClassName("error",r.value),A.offsetWidth,l.value=!1)});else{f.value=!0;const A=o.value;if(!A)return;A.className=createClassName("error",r.value),A.style.maxWidth="100%",A.offsetWidth,l.value=!1}}function C(){a.value=!0}function $(){a.value=!1}function E(){return __awaiter(this,void 0,void 0,function*(){yield g()})}const N=useTheme("LoadingBar","-loading-bar",style$3,loadingBarLight$1,n,r),S=computed(()=>{const{self:{height:A,colorError:_,colorLoading:P}}=N.value;return{"--n-height":A,"--n-color-loading":P,"--n-color-error":_}}),k=t?useThemeClass("loading-bar",void 0,S,n):void 0;return{mergedClsPrefix:r,loadingBarRef:o,started:s,loading:l,entering:a,transitionDisabled:u,start:y,error:x,finish:b,handleEnter:C,handleAfterEnter:$,handleAfterLeave:E,mergedLoadingBarStyle:m,cssVars:t?void 0:S,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){if(!this.started)return null;const{mergedClsPrefix:e}=this;return h(Transition,{name:"fade-in-transition",appear:!0,onEnter:this.handleEnter,onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave,css:!this.transitionDisabled},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),withDirectives(h("div",{class:[`${e}-loading-bar-container`,this.themeClass]},h("div",{ref:"loadingBarRef",class:[`${e}-loading-bar`],style:[this.cssVars,this.mergedLoadingBarStyle]})),[[vShow,this.loading||!this.loading&&this.entering]])}})}});const loadingBarProps=Object.assign(Object.assign({},useTheme.props),{to:{type:[String,Object],default:void 0},loadingBarStyle:{type:Object}});var __unplugin_components_2=defineComponent({name:"LoadingBarProvider",props:loadingBarProps,setup(e){const t=isMounted(),n=ref(null),r={start(){var a;t.value?(a=n.value)===null||a===void 0||a.start():nextTick(()=>{var s;(s=n.value)===null||s===void 0||s.start()})},error(){var a;t.value?(a=n.value)===null||a===void 0||a.error():nextTick(()=>{var s;(s=n.value)===null||s===void 0||s.error()})},finish(){var a;t.value?(a=n.value)===null||a===void 0||a.finish():nextTick(()=>{var s;(s=n.value)===null||s===void 0||s.finish()})}},{mergedClsPrefixRef:o}=useConfig(e);return provide(loadingBarApiInjectionKey,r),provide(loadingBarProviderInjectionKey,{props:e,mergedClsPrefixRef:o}),Object.assign(r,{loadingBarRef:n})},render(){var e,t,n;return h(Fragment,null,h(Teleport,{to:(e=this.to)!==null&&e!==void 0?e:"body"},h(NLoadingBar,{ref:"loadingBarRef"})),(n=(t=this.$slots).default)===null||n===void 0?void 0:n.call(t))}});function useLoadingBar(){const e=inject(loadingBarApiInjectionKey,null);return e===null&&throwError("use-loading-bar","No outer <n-loading-bar-provider /> founded."),e}const menuInjectionKey="n-menu",submenuInjectionKey="n-submenu",menuItemGroupInjectionKey="n-menu-item-group",ICON_MARGIN_RIGHT=8;function useMenuChild(e){const t=inject(menuInjectionKey),{props:n,mergedCollapsedRef:r}=t,o=inject(submenuInjectionKey,null),a=inject(menuItemGroupInjectionKey,null),s=computed(()=>n.mode==="horizontal"),l=computed(()=>s.value?n.dropdownPlacement:"tmNodes"in e?"right-start":"right"),u=computed(()=>{var g;return Math.max((g=n.collapsedIconSize)!==null&&g!==void 0?g:n.iconSize,n.iconSize)}),d=computed(()=>{var g;return!s.value&&e.root&&r.value&&(g=n.collapsedIconSize)!==null&&g!==void 0?g:n.iconSize}),f=computed(()=>{if(s.value)return;const{collapsedWidth:g,indent:y,rootIndent:b}=n,{root:x,isGroup:C}=e,$=b===void 0?y:b;if(x)return r.value?g/2-u.value/2:$;if(a)return y/2+a.paddingLeftRef.value;if(o)return(C?y/2:y)+o.paddingLeftRef.value}),m=computed(()=>{const{collapsedWidth:g,indent:y,rootIndent:b}=n,{value:x}=u,{root:C}=e;return s.value||!C||!r.value?ICON_MARGIN_RIGHT:(b===void 0?y:b)+x+ICON_MARGIN_RIGHT-(g+x)/2});return{dropdownPlacement:l,activeIconSize:d,maxIconSize:u,paddingLeft:f,iconMarginRight:m,NMenu:t,NSubmenu:o}}const useMenuChildProps={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},menuItemGroupProps=Object.assign(Object.assign({},useMenuChildProps),{tmNodes:{type:Array,required:!0}}),NMenuOptionGroup=defineComponent({name:"MenuOptionGroup",props:menuItemGroupProps,setup(e){provide(submenuInjectionKey,null);const t=useMenuChild(e);provide(menuItemGroupInjectionKey,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:n,props:r}=inject(menuInjectionKey);return function(){const{value:o}=n,a=t.paddingLeft.value;return h("div",{class:`${o}-menu-item-group`,role:"group"},h("span",{class:`${o}-menu-item-group-title`,style:a!==void 0?`padding-left: ${a}px;`:void 0},render$a(e.title),e.extra?h(Fragment,null," ",render$a(e.extra)):null),h("div",null,e.tmNodes.map(s=>itemRenderer(s,r))))}}});var NMenuOptionContent=defineComponent({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=inject(menuInjectionKey);return{menuProps:t,style:computed(()=>{const{paddingLeft:n}=e;return{paddingLeft:n&&`${n}px`}}),iconStyle:computed(()=>{const{maxIconSize:n,activeIconSize:r,iconMarginRight:o}=e;return{width:`${n}px`,height:`${n}px`,fontSize:`${r}px`,marginRight:`${o}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:n,renderLabel:r,renderExtra:o,expandIcon:a}}=this,s=n?n(t.rawNode):render$a(this.icon);return h("div",{onClick:this.onClick,role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&h("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),h("div",{class:`${e}-menu-item-content-header`,role:"none"},r?r(t.rawNode):render$a(this.title),this.extra||o?h("span",{class:`${e}-menu-item-content-header__extra`}," ",o?o(t.rawNode):render$a(this.extra)):null),this.showArrow?h(NBaseIcon,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(t.rawNode):h(ChevronDownFilledIcon,null)}):null)}});const submenuProps=Object.assign(Object.assign({},useMenuChildProps),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),NSubmenu=defineComponent({name:"Submenu",props:submenuProps,setup(e){const t=useMenuChild(e),{NMenu:n,NSubmenu:r}=t,{props:o,mergedCollapsedRef:a,mergedThemeRef:s}=n,l=computed(()=>{const{disabled:g}=e;return r!=null&&r.mergedDisabledRef.value||o.disabled?!0:g}),u=ref(!1);provide(submenuInjectionKey,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:l}),provide(menuItemGroupInjectionKey,null);function d(){const{onClick:g}=e;g&&g()}function f(){l.value||(a.value||n.toggleExpand(e.internalKey),d())}function m(g){u.value=g}return{menuProps:o,mergedTheme:s,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:u,paddingLeft:t.paddingLeft,mergedDisabled:l,mergedValue:n.mergedValueRef,childActive:useMemo(()=>n.activePathRef.value.includes(e.internalKey)),collapsed:computed(()=>o.mode==="horizontal"?!1:a.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:computed(()=>!l.value&&(o.mode==="horizontal"||a.value)),handlePopoverShowChange:m,handleClick:f}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:n,renderLabel:r}}=this,o=()=>{const{isHorizontal:s,paddingLeft:l,collapsed:u,mergedDisabled:d,maxIconSize:f,activeIconSize:m,title:g,childActive:y,icon:b,handleClick:x,dropdownShow:C,iconMarginRight:$,tmNode:E}=this;return h(NMenuOptionContent,{tmNode:E,paddingLeft:l,collapsed:u,disabled:d,iconMarginRight:$,maxIconSize:f,activeIconSize:m,title:g,showArrow:!s,childActive:y,clsPrefix:t,icon:b,hover:C,onClick:x})},a=()=>h(NFadeInExpandTransition,null,{default:()=>{const{tmNodes:s,collapsed:l}=this;return l?null:h("div",{class:`${t}-submenu-children`,role:"menu"},s.map(u=>itemRenderer(u,this.menuProps)))}});return this.root?h(__unplugin_components_0$5,Object.assign({},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,size:"large",trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:n,renderLabel:r}),{default:()=>h("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},o(),this.isHorizontal?null:a())}):h("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},o(),a())}}),menuItemProps=Object.assign(Object.assign({},useMenuChildProps),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),NMenuOption=defineComponent({name:"MenuOption",props:menuItemProps,setup(e){const t=useMenuChild(e),{NSubmenu:n,NMenu:r}=t,{props:o,mergedClsPrefixRef:a,mergedCollapsedRef:s}=r,l=n?n.mergedDisabledRef:{value:!1},u=computed(()=>l.value||e.disabled);function d(m){const{onClick:g}=e;g&&g(m)}function f(m){u.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),d(m))}return{mergedClsPrefix:a,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:o,dropdownEnabled:useMemo(()=>e.root&&s.value&&o.mode!=="horizontal"&&!u.value),selected:computed(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:u,handleClick:f}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:n,menuProps:{renderLabel:r}}=this;return h("div",{role:"menuitem",class:[`${e}-menu-item`]},h(NTooltip,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(n.rawNode):render$a(this.title),trigger:()=>h(NMenuOptionContent,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var NMenuDivider=defineComponent({name:"MenuDivider",setup(){const e=inject(menuInjectionKey),{mergedClsPrefixRef:t,isHorizontalRef:n}=e;return()=>n.value?null:h("div",{class:`${t.value}-menu-divider`})}});const groupPropKeys=keysOf(menuItemGroupProps),itemPropKeys=keysOf(menuItemProps),submenuPropKeys=keysOf(submenuProps);function isIgnoredNode(e){return e.type==="divider"||e.type==="render"}function isDividerNode(e){return e.type==="divider"}function itemRenderer(e,t){const{rawNode:n}=e;if(isIgnoredNode(n))return isDividerNode(n)?h(NMenuDivider,Object.assign({key:e.key},n.props)):void 0;const{labelField:r}=t,{key:o,level:a,isGroup:s}=e,l=Object.assign(Object.assign({},n),{title:n.title||n[r],extra:n.titleExtra||n.extra,key:o,internalKey:o,level:a,root:a===0,isGroup:s});return e.children?e.isGroup?h(NMenuOptionGroup,keep(l,groupPropKeys,{tmNodes:e.children,key:o})):h(NSubmenu,keep(l,submenuPropKeys,{key:o,rawNodes:n[t.childrenField],tmNodes:e.children,tmNode:e})):h(NMenuOption,keep(l,itemPropKeys,{key:o,tmNode:e}))}var style$2=c$1([cB("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[cM("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[cB("submenu","margin: 0;"),cB("menu-item","margin: 0;"),cB("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[c$1("&::before","display: none;"),cM("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),cB("menu-item-content",[cM("selected",[cE("icon","color: var(--n-item-icon-color-active-horizontal);"),cB("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[c$1("a","color: var(--n-item-text-color-active-horizontal);"),cE("extra","color: var(--n-item-text-color-active-horizontal);")])]),cM("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[cB("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[c$1("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),cE("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),cE("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),cNotM("disabled",[cM("selected, child-active",[hoverStyle(null,[cE("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),cB("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[c$1("a","color: var(--n-item-text-color-active-hover-horizontal);"),cE("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),hoverStyle("border-bottom: 2px solid var(--n-border-color-horizontal);",[cE("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),cB("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[c$1("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),cE("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])])]),cB("menu-item-content-header",[c$1("a","color: var(--n-item-text-color-horizontal);")])])]),cM("collapsed",[cB("menu-item",[cM("selected",[c$1("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)])]),cB("menu-item-content",[cB("menu-item-content-header","opacity: 0;"),cE("arrow","opacity: 0;"),cE("icon","color: var(--n-item-icon-color-collapsed);")])]),cB("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),cB("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[c$1("> *","z-index: 1;"),c$1("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),cM("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),cM("collapsed",[cE("arrow","transform: rotate(0);")]),cM("selected",[c$1("&::before","background-color: var(--n-item-color-active);"),cE("arrow","color: var(--n-arrow-color-active);"),cE("icon","color: var(--n-item-icon-color-active);"),cB("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[c$1("a","color: var(--n-item-text-color-active);"),cE("extra","color: var(--n-item-text-color-active);")])]),cM("child-active",[cB("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[c$1("a",`
 color: var(--n-item-text-color-child-active);
 `),cE("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),cE("arrow",`
 color: var(--n-arrow-color-child-active);
 `),cE("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),cNotM("disabled",[cM("selected, child-active",[hoverStyle(null,[cE("arrow","color: var(--n-arrow-color-active-hover);"),cE("icon","color: var(--n-item-icon-color-active-hover);"),cB("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[c$1("a","color: var(--n-item-text-color-active-hover);"),cE("extra","color: var(--n-item-text-color-active-hover);")])])]),cM("selected",[hoverStyle(null,[c$1("&::before","background-color: var(--n-item-color-active-hover);")])]),hoverStyle(null,[c$1("&::before","background-color: var(--n-item-color-hover);"),cE("arrow",`
 color: var(--n-arrow-color-hover);
 `),cE("icon",`
 color: var(--n-item-icon-color-hover);
 `),cB("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[c$1("a",`
 color: var(--n-item-text-color-hover);
 `),cE("extra",`
 color: var(--n-item-text-color-hover);
 `)])])]),cE("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),cE("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),cB("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[c$1("a",`
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[c$1("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),cE("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),cB("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[cB("menu-item-content",`
 height: var(--n-item-height);
 `),cB("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[fadeInHeightExpand({duration:".2s"})])]),cB("menu-item-group",[cB("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),cB("menu-tooltip",[c$1("a",`
 color: inherit;
 text-decoration: none;
 `)]),cB("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function hoverStyle(e,t){return[cM("hover",e,t),c$1("&:hover",e,t)]}function useCheckDeprecated(e){watchEffect(()=>{e.items&&warnOnce("menu","`items` is deprecated, please use `options` instead."),e.onOpenNamesChange&&warnOnce("menu","`on-open-names-change` is deprecated, please use `on-update:expanded-keys` instead."),e.onSelect&&warnOnce("menu","`on-select` is deprecated, please use `on-update:value` instead."),e.onExpandedNamesChange&&warnOnce("menu","`on-expanded-names-change` is deprecated, please use `on-update:expanded-keys` instead."),e.expandedNames&&warnOnce("menu","`expanded-names` is deprecated, please use `expanded-keys` instead."),e.defaultExpandedNames&&warnOnce("menu","`default-expanded-names` is deprecated, please use `default-expanded-keys` instead.")})}const menuProps=Object.assign(Object.assign({},useTheme.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownPlacement:{type:String,default:"bottom"},dropdownProps:Object,accordion:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array});var __unplugin_components_0$2=defineComponent({name:"Menu",props:menuProps,setup(e){useCheckDeprecated(e);const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=useConfig(e),r=useTheme("Menu","-menu",style$2,menuLight$1,e,t),o=inject(layoutSiderInjectionKey,null),a=computed(()=>{var P;const{collapsed:I}=e;if(I!==void 0)return I;if(o){const{collapseModeRef:O,collapsedRef:j}=o;if(O.value==="width")return(P=j.value)!==null&&P!==void 0?P:!1}return!1}),s=computed(()=>{const{keyField:P,childrenField:I}=e;return createTreeMate(e.items||e.options,{getChildren(O){return O[I]},getKey(O){var j;return(j=O[P])!==null&&j!==void 0?j:O.name}})}),l=computed(()=>new Set(s.value.treeNodes.map(P=>P.key))),{watchProps:u}=e,d=ref(null);u!=null&&u.includes("defaultValue")?watchEffect(()=>{d.value=e.defaultValue}):d.value=e.defaultValue;const f=toRef(e,"value"),m=useMergedState(f,d),g=ref([]),y=()=>{g.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(m.value,{includeSelf:!1}).keyPath};u!=null&&u.includes("defaultExpandedKeys")?watchEffect(y):y();const b=useCompitable(e,["expandedNames","expandedKeys"]),x=useMergedState(b,g),C=computed(()=>s.value.treeNodes),$=computed(()=>s.value.getPath(m.value).keyPath);provide(menuInjectionKey,{props:e,mergedCollapsedRef:a,mergedThemeRef:r,mergedValueRef:m,mergedExpandedKeysRef:x,activePathRef:$,mergedClsPrefixRef:t,isHorizontalRef:computed(()=>e.mode==="horizontal"),invertedRef:toRef(e,"inverted"),doSelect:E,toggleExpand:S});function E(P,I){const{"onUpdate:value":O,onUpdateValue:j,onSelect:B}=e;j&&call(j,P,I),O&&call(O,P,I),B&&call(B,P,I),d.value=P}function N(P){const{"onUpdate:expandedKeys":I,onUpdateExpandedKeys:O,onExpandedNamesChange:j,onOpenNamesChange:B}=e;I&&call(I,P),O&&call(O,P),j&&call(j,P),B&&call(B,P),g.value=P}function S(P){const I=Array.from(x.value),O=I.findIndex(j=>j===P);if(~O)I.splice(O,1);else{if(e.accordion&&l.value.has(P)){const j=I.findIndex(B=>l.value.has(B));j>-1&&I.splice(j,1)}I.push(P)}N(I)}const k=P=>{const I=s.value.getPath(P!=null?P:m.value,{includeSelf:!1}).keyPath;if(!I.length)return;const O=Array.from(x.value),j=new Set([...O,...I]);e.accordion&&l.value.forEach(B=>{j.has(B)&&!I.includes(B)&&j.delete(B)}),N(Array.from(j))},A=computed(()=>{const{inverted:P}=e,{common:{cubicBezierEaseInOut:I},self:O}=r.value,{borderRadius:j,borderColorHorizontal:B,fontSize:V,itemHeight:L,dividerColor:G}=O,z={"--n-divider-color":G,"--n-bezier":I,"--n-font-size":V,"--n-border-color-horizontal":B,"--n-border-radius":j,"--n-item-height":L};return P?(z["--n-group-text-color"]=O.groupTextColorInverted,z["--n-color"]=O.colorInverted,z["--n-item-text-color"]=O.itemTextColorInverted,z["--n-item-text-color-hover"]=O.itemTextColorHoverInverted,z["--n-item-text-color-active"]=O.itemTextColorActiveInverted,z["--n-item-text-color-child-active"]=O.itemTextColorChildActiveInverted,z["--n-item-text-color-active-hover"]=O.itemTextColorActiveHoverInverted,z["--n-item-icon-color"]=O.itemIconColorInverted,z["--n-item-icon-color-hover"]=O.itemIconColorHoverInverted,z["--n-item-icon-color-active"]=O.itemIconColorActiveInverted,z["--n-item-icon-color-active-hover"]=O.itemIconColorActiveHoverInverted,z["--n-item-icon-color-child-active"]=O.itemIconColorChildActiveInverted,z["--n-item-icon-color-collapsed"]=O.itemIconColorCollapsedInverted,z["--n-item-text-color-horizontal"]=O.itemTextColorHorizontalInverted,z["--n-item-text-color-hover-horizontal"]=O.itemTextColorHoverHorizontalInverted,z["--n-item-text-color-active-horizontal"]=O.itemTextColorActiveHorizontalInverted,z["--n-item-text-color-child-active-horizontal"]=O.itemTextColorChildActiveHorizontalInverted,z["--n-item-text-color-active-hover-horizontal"]=O.itemTextColorActiveHoverHorizontalInverted,z["--n-item-icon-color-horizontal"]=O.itemIconColorHorizontalInverted,z["--n-item-icon-color-hover-horizontal"]=O.itemIconColorHoverHorizontalInverted,z["--n-item-icon-color-active-horizontal"]=O.itemIconColorActiveHorizontalInverted,z["--n-item-icon-color-active-hover-horizontal"]=O.itemIconColorActiveHoverHorizontalInverted,z["--n-item-icon-color-child-active-horizontal"]=O.itemIconColorChildActiveHorizontalInverted,z["--n-arrow-color"]=O.arrowColorInverted,z["--n-arrow-color-hover"]=O.arrowColorHoverInverted,z["--n-arrow-color-active"]=O.arrowColorActiveInverted,z["--n-arrow-color-active-hover"]=O.arrowColorActiveHoverInverted,z["--n-arrow-color-child-active"]=O.arrowColorChildActiveInverted,z["--n-item-color-hover"]=O.itemColorHoverInverted,z["--n-item-color-active"]=O.itemColorActiveInverted,z["--n-item-color-active-hover"]=O.itemColorActiveHoverInverted,z["--n-item-color-active-collapsed"]=O.itemColorActiveCollapsedInverted):(z["--n-group-text-color"]=O.groupTextColor,z["--n-color"]=O.color,z["--n-item-text-color"]=O.itemTextColor,z["--n-item-text-color-hover"]=O.itemTextColorHover,z["--n-item-text-color-active"]=O.itemTextColorActive,z["--n-item-text-color-child-active"]=O.itemTextColorChildActive,z["--n-item-text-color-active-hover"]=O.itemTextColorActiveHover,z["--n-item-icon-color"]=O.itemIconColor,z["--n-item-icon-color-hover"]=O.itemIconColorHover,z["--n-item-icon-color-active"]=O.itemIconColorActive,z["--n-item-icon-color-active-hover"]=O.itemIconColorActiveHover,z["--n-item-icon-color-child-active"]=O.itemIconColorChildActive,z["--n-item-icon-color-collapsed"]=O.itemIconColorCollapsed,z["--n-item-text-color-horizontal"]=O.itemTextColorHorizontal,z["--n-item-text-color-hover-horizontal"]=O.itemTextColorHoverHorizontal,z["--n-item-text-color-active-horizontal"]=O.itemTextColorActiveHorizontal,z["--n-item-text-color-child-active-horizontal"]=O.itemTextColorChildActiveHorizontal,z["--n-item-text-color-active-hover-horizontal"]=O.itemTextColorActiveHoverHorizontal,z["--n-item-icon-color-horizontal"]=O.itemIconColorHorizontal,z["--n-item-icon-color-hover-horizontal"]=O.itemIconColorHoverHorizontal,z["--n-item-icon-color-active-horizontal"]=O.itemIconColorActiveHorizontal,z["--n-item-icon-color-active-hover-horizontal"]=O.itemIconColorActiveHoverHorizontal,z["--n-item-icon-color-child-active-horizontal"]=O.itemIconColorChildActiveHorizontal,z["--n-arrow-color"]=O.arrowColor,z["--n-arrow-color-hover"]=O.arrowColorHover,z["--n-arrow-color-active"]=O.arrowColorActive,z["--n-arrow-color-active-hover"]=O.arrowColorActiveHover,z["--n-arrow-color-child-active"]=O.arrowColorChildActive,z["--n-item-color-hover"]=O.itemColorHover,z["--n-item-color-active"]=O.itemColorActive,z["--n-item-color-active-hover"]=O.itemColorActiveHover,z["--n-item-color-active-collapsed"]=O.itemColorActiveCollapsed),z}),_=n?useThemeClass("menu",computed(()=>e.inverted?"a":"b"),A,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:b,uncontrolledExpanededKeys:g,mergedExpandedKeys:x,uncontrolledValue:d,mergedValue:m,activePath:$,tmNodes:C,mergedTheme:r,mergedCollapsed:a,cssVars:n?void 0:A,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender,showOption:k}},render(){const{mergedClsPrefix:e,mode:t,themeClass:n,onRender:r}=this;return r==null||r(),h("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,n,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(o=>itemRenderer(o,this.$props)))}});const messageProps={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function},messageApiInjectionKey="n-message-api",messageProviderInjectionKey="n-message-provider";var style$1=c$1([cB("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[fadeInHeightExpand({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),cB("message",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `,[cE("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),cE("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(e=>cM(`${e}-type`,[c$1("> *",`
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])),c$1("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[createIconSwitchTransition()])]),cE("close",`
 font-size: var(--n-close-size);
 margin: var(--n-close-margin);
 transition: color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[c$1("&:hover",`
 color: var(--n-close-color-hover);
 `),c$1("&:active",`
 color: var(--n-close-color-pressed);
 `)])]),cB("message-container",`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[cM("top",`
 top: 12px;
 left: 0;
 right: 0;
 `),cM("top-left",`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),cM("top-right",`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),cM("bottom",`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),cM("bottom-left",`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),cM("bottom-right",`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]);const iconMap={info:h(InfoIcon,null),success:h(SuccessIcon,null),warning:h(WarningIcon,null),error:h(ErrorIcon,null),default:null};var NMessage=defineComponent({name:"Message",props:Object.assign(Object.assign({},messageProps),{render:Function}),setup(e){const{inlineThemeDisabled:t}=useConfig(),{props:n,mergedClsPrefixRef:r}=inject(messageProviderInjectionKey),o=useTheme("Message","-message",style$1,messageLight$1,n,r),a=computed(()=>{const{type:l}=e,{common:{cubicBezierEaseInOut:u},self:{padding:d,margin:f,maxWidth:m,iconMargin:g,closeMargin:y,closeSize:b,iconSize:x,fontSize:C,lineHeight:$,borderRadius:E,iconColorInfo:N,iconColorSuccess:S,iconColorWarning:k,iconColorError:A,iconColorLoading:_,[createKey("textColor",l)]:P,[createKey("boxShadow",l)]:I,[createKey("color",l)]:O,[createKey("closeColor",l)]:j,[createKey("closeColorPressed",l)]:B,[createKey("closeColorHover",l)]:V}}=o.value;return{"--n-bezier":u,"--n-margin":f,"--n-padding":d,"--n-max-width":m,"--n-font-size":C,"--n-icon-margin":g,"--n-icon-size":x,"--n-close-size":b,"--n-close-margin":y,"--n-text-color":P,"--n-color":O,"--n-box-shadow":I,"--n-icon-color-info":N,"--n-icon-color-success":S,"--n-icon-color-warning":k,"--n-icon-color-error":A,"--n-icon-color-loading":_,"--n-close-color":j,"--n-close-color-pressed":B,"--n-close-color-hover":V,"--n-line-height":$,"--n-border-radius":E}}),s=t?useThemeClass("message",computed(()=>e.type[0]),a,{}):void 0;return{mergedClsPrefix:r,messageProviderProps:n,handleClose(){var l;(l=e.onClose)===null||l===void 0||l.call(e)},cssVars:t?void 0:a,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender,placement:n.placement}},render(){const{render:e,type:t,closable:n,content:r,mergedClsPrefix:o,cssVars:a,themeClass:s,onRender:l,icon:u,handleClose:d,showIcon:f}=this;l==null||l();let m;return h("div",{class:[`${o}-message-wrapper`,s],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},a]},e?e(this.$props):h("div",{class:`${o}-message ${o}-message--${t}-type`},(m=createIconVNode(u,t,o))&&f?h("div",{class:`${o}-message__icon ${o}-message__icon--${t}-type`},h(NIconSwitchTransition,null,{default:()=>m})):null,h("div",{class:`${o}-message__content`},render$a(r)),n?h(NBaseClose,{clsPrefix:o,class:`${o}-message__close`,onClick:d}):null))}});function createIconVNode(e,t,n){if(typeof e=="function")return e();{const r=t==="loading"?h(NBaseLoading,{clsPrefix:n,strokeWidth:24,scale:.85}):iconMap[t];return r?h(NBaseIcon,{clsPrefix:n,key:t},{default:()=>r}):null}}var MessageEnvironment=defineComponent({name:"MessageEnvironment",props:Object.assign(Object.assign({},messageProps),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(e){let t=null;const n=ref(!0);onMounted(()=>{r()});function r(){const{duration:f}=e;f&&(t=window.setTimeout(s,f))}function o(f){f.currentTarget===f.target&&t!==null&&(window.clearTimeout(t),t=null)}function a(f){f.currentTarget===f.target&&r()}function s(){const{onHide:f}=e;n.value=!1,t&&(window.clearTimeout(t),t=null),f&&f()}function l(){const{onClose:f}=e;f&&f(),s()}function u(){const{onAfterLeave:f,onInternalAfterLeave:m,onAfterHide:g,internalKey:y}=e;f&&f(),m&&m(y),g&&g()}function d(){s()}return{show:n,hide:s,handleClose:l,handleAfterLeave:u,handleMouseleave:a,handleMouseenter:o,deactivate:d}},render(){return h(NFadeInExpandTransition,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?h(NMessage,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}});const messageProviderProps=Object.assign(Object.assign({},useTheme.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerStyle:[String,Object]});var __unplugin_components_0$1=defineComponent({name:"MessageProvider",props:messageProviderProps,setup(e){const{mergedClsPrefixRef:t}=useConfig(e),n=ref([]),r=ref({}),o={create(u,d){return a(u,Object.assign({type:"default"},d))},info(u,d){return a(u,Object.assign(Object.assign({},d),{type:"info"}))},success(u,d){return a(u,Object.assign(Object.assign({},d),{type:"success"}))},warning(u,d){return a(u,Object.assign(Object.assign({},d),{type:"warning"}))},error(u,d){return a(u,Object.assign(Object.assign({},d),{type:"error"}))},loading(u,d){return a(u,Object.assign(Object.assign({},d),{type:"loading"}))},destroyAll:l};provide(messageProviderInjectionKey,{props:e,mergedClsPrefixRef:t}),provide(messageApiInjectionKey,o);function a(u,d){const f=createId(),m=reactive(Object.assign(Object.assign({},d),{content:u,key:f,destroy:()=>{r.value[f].hide()}})),{max:g}=e;return g&&n.value.length>=g&&n.value.shift(),n.value.push(m),m}function s(u){n.value.splice(n.value.findIndex(d=>d.key===u),1),delete r.value[u]}function l(){Object.values(r.value).forEach(u=>{u.hide()})}return Object.assign({mergedClsPrefix:t,messageRefs:r,messageList:n,handleAfterLeave:s},o)},render(){var e,t,n;return h(Fragment,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),this.messageList.length?h(Teleport,{to:(n=this.to)!==null&&n!==void 0?n:"body"},h("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`],key:"message-container",style:this.containerStyle},this.messageList.map(r=>h(MessageEnvironment,Object.assign({ref:o=>{o&&(this.messageRefs[r.key]=o)},internalKey:r.key,onInternalAfterLeave:this.handleAfterLeave},omit(r,["destroy"],void 0),{duration:r.duration===void 0?this.duration:r.duration,keepAliveOnHover:r.keepAliveOnHover===void 0?this.keepAliveOnHover:r.keepAliveOnHover,closable:r.closable===void 0?this.closable:r.closable}))))):null)}});function useMessage(){const e=inject(messageApiInjectionKey,null);return e===null&&throwError("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}var style=cB("statistic",[cE("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),cB("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[cE("prefix",`
 margin: 0 4px 0 0;
 font-size: 24px;
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[cB("icon",{verticalAlign:"-0.125em"})]),cE("content",`
 font-size: 24px;
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),cE("suffix",`
 margin: 0 0 0 4px;
 font-size: 24px;
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[cB("icon",{verticalAlign:"-0.125em"})])])]);const statisticProps=Object.assign(Object.assign({},useTheme.props),{tabularNums:Boolean,label:String,value:[String,Number]});var __unplugin_components_0=defineComponent({name:"Statistic",props:statisticProps,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=useConfig(e),r=useTheme("Statistic","-statistic",style,statisticLight$1,e,t),o=computed(()=>{const{self:{labelFontWeight:s,valueFontWeight:l,valuePrefixTextColor:u,labelTextColor:d,valueSuffixTextColor:f,valueTextColor:m,labelFontSize:g},common:{cubicBezierEaseInOut:y}}=r.value;return{"--n-bezier":y,"--n-label-font-size":g,"--n-label-font-weight":s,"--n-label-text-color":d,"--n-value-font-weight":l,"--n-value-prefix-text-color":u,"--n-value-suffix-text-color":f,"--n-value-text-color":m}}),a=n?useThemeClass("statistic",void 0,o,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:o,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;const{mergedClsPrefix:t,$slots:{default:n,label:r,prefix:o,suffix:a}}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${t}-statistic`,this.themeClass],style:this.cssVars},resolveWrappedSlot(r,s=>h("div",{class:`${t}-statistic__label`},this.label||s)),h("div",{class:`${t}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},resolveWrappedSlot(o,s=>s&&h("span",{class:`${t}-statistic-value__prefix`},s)),this.value!==void 0?h("span",{class:`${t}-statistic-value__content`},this.value):resolveWrappedSlot(n,s=>s&&h("span",{class:`${t}-statistic-value__content`},s)),resolveWrappedSlot(a,s=>s&&h("span",{class:`${t}-statistic-value__suffix`},s))))}});const _sfc_main$f={setup(e){const t=useRouter(),{currentRoute:n}=t;function r(o){o!==n.value.path&&t.push(o)}return(o,a)=>{const s=__unplugin_components_0$7,l=__unplugin_components_1$3;return openBlock(),createBlock(l,null,{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(n).matched,u=>(openBlock(),createBlock(s,{key:u.path,onClick:d=>r(u.path)},{default:withCtx(()=>[createTextVNode(toDisplayString(u.meta.title),1)]),_:2},1032,["onClick"]))),128))]),_:1})}}};var HeaderAction_vue_vue_type_style_index_0_scoped_true_lang="",_export_sfc=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n};const _hoisted_1$e={class:"avatar"},_hoisted_2$b=["src"],_sfc_main$e={setup(e){const t=useUserStore(),n=useRouter(),r=[{label:"\u5207\u6362\u89D2\u8272",key:"switchRole"},{label:"\u9000\u51FA\u767B\u5F55",key:"logout"}];function o(l){l==="logout"?a():l==="switchRole"&&s()}function a(){t.logout(),$message.success("\u5DF2\u9000\u51FA\u767B\u5F55"),n.push({path:"/login"})}function s(){const l=usePermissionStore(),u=[{id:1,name:"\u5927\u8138\u602A(admin)",avatar:"https://assets.qszone.com/images/avatar.jpg",email:"Ronnie@123.com",role:["admin"]},{id:2,name:"\u5927\u8138\u602A(editor)",avatar:"https://assets.qszone.com/images/avatar.jpg",email:"Ronnie@123.com",role:["editor"]},{id:3,name:"\u8BBF\u5BA2(guest)",avatar:"https://assets.qszone.com/images/avatar.jpg",role:[]}],d=u[+t.userId%u.length];resetRouter(),t.setUserInfo(d),l.generateRoutes(d.role).forEach(m=>{!n.hasRoute(m.name)&&n.addRoute(m)}),n.addRoute(NOT_FOUND_ROUTE),$message.success(`${d.name}`)}return(l,u)=>{const d=__unplugin_components_0$5;return openBlock(),createBlock(d,{options:r,onSelect:o},{default:withCtx(()=>[createBaseVNode("div",_hoisted_1$e,[createBaseVNode("img",{src:unref(t).avatar},null,8,_hoisted_2$b),createBaseVNode("span",null,toDisplayString(unref(t).name),1)])]),_:1})}}};var HeaderAction=_export_sfc(_sfc_main$e,[["__scopeId","data-v-61d1ebf0"]]),index_vue_vue_type_style_index_0_scoped_true_lang$2="";const _hoisted_1$d={class:"header"},_sfc_main$d={setup(e){return(t,n)=>(openBlock(),createElementBlock("header",_hoisted_1$d,[createVNode(_sfc_main$f),createVNode(HeaderAction)]))}};var AppHeader=_export_sfc(_sfc_main$d,[["__scopeId","data-v-0fa78d5d"]]);const _hoisted_1$c={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},_hoisted_2$a=createBaseVNode("path",{fill:"currentColor",d:"M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"},null,-1),_hoisted_3$a=[_hoisted_2$a];function render$8(e,t){return openBlock(),createElementBlock("svg",_hoisted_1$c,_hoisted_3$a)}var IconGitee={name:"simple-icons-gitee",render:render$8};const _hoisted_1$b={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},_hoisted_2$9=createBaseVNode("path",{fill:"currentColor",d:"M22 21H2V3h2v16h2v-9h4v9h2V6h4v13h2v-5h4v7Z"},null,-1),_hoisted_3$9=[_hoisted_2$9];function render$7(e,t){return openBlock(),createElementBlock("svg",_hoisted_1$b,_hoisted_3$9)}var IconChart={name:"mdi-chart-bar",render:render$7};const _hoisted_1$a={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},_hoisted_2$8=createBaseVNode("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"},null,-1),_hoisted_3$8=[_hoisted_2$8];function render$6(e,t){return openBlock(),createElementBlock("svg",_hoisted_1$a,_hoisted_3$8)}var IconGithub={name:"mdi-github",render:render$6};const _hoisted_1$9={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},_hoisted_2$7=createBaseVNode("path",{fill:"currentColor",d:"M2 3h3.5L12 15l6.5-12H22L12 21L2 3m4.5 0h3L12 7.58L14.5 3h3L12 13.08L6.5 3Z"},null,-1),_hoisted_3$7=[_hoisted_2$7];function render$5(e,t){return openBlock(),createElementBlock("svg",_hoisted_1$9,_hoisted_3$7)}var IconVue={name:"mdi-vuejs",render:render$5};const _hoisted_1$8={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},_hoisted_2$6=createBaseVNode("path",{fill:"currentColor",d:"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"},null,-1),_hoisted_3$6=[_hoisted_2$6];function render$4(e,t){return openBlock(),createElementBlock("svg",_hoisted_1$8,_hoisted_3$6)}var IconHome={name:"mdi-home",render:render$4};const _hoisted_1$7={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},_hoisted_2$5=createBaseVNode("path",{fill:"currentColor",d:"M10.59 13.41c.41.39.41 1.03 0 1.42c-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0a5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24a2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0a5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24a2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24a.973.973 0 0 1 0-1.42Z"},null,-1),_hoisted_3$5=[_hoisted_2$5];function render$3(e,t){return openBlock(),createElementBlock("svg",_hoisted_1$7,_hoisted_3$5)}var IconLink={name:"mdi-link-variant",render:render$3};const _hoisted_1$6={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},_hoisted_2$4=createBaseVNode("path",{fill:"currentColor",d:"M11 15h2v2h-2v-2m0-8h2v6h-2V7m1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8Z"},null,-1),_hoisted_3$4=[_hoisted_2$4];function render$2(e,t){return openBlock(),createElementBlock("svg",_hoisted_1$6,_hoisted_3$4)}var IconAlert={name:"mdi-alert-circle-outline",render:render$2};const _hoisted_1$5={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},_hoisted_2$3=createBaseVNode("path",{fill:"currentColor",d:"M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"},null,-1),_hoisted_3$3=[_hoisted_2$3];function render$1(e,t){return openBlock(),createElementBlock("svg",_hoisted_1$5,_hoisted_3$3)}var IconCircle={name:"mdi-circle-outline",render:render$1};const _hoisted_1$4={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},_hoisted_2$2=createBaseVNode("path",{fill:"currentColor",d:"M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"},null,-1),_hoisted_3$2=[_hoisted_2$2];function render(e,t){return openBlock(),createElementBlock("svg",_hoisted_1$4,_hoisted_3$2)}var IconMenu={name:"mdi-menu",render};const _sfc_main$c={},_hoisted_1$3={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 448 512"},_hoisted_2$1=createBaseVNode("path",{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-92.2 312.9c-63.4 0-85.4-28.6-97.1-64.1c-16.3-51-21.5-84.3-63-84.3c-22.4 0-45.1 16.1-45.1 61.2c0 35.2 18 57.2 43.3 57.2c28.6 0 47.6-21.3 47.6-21.3l11.7 31.9s-19.8 19.4-61.2 19.4c-51.3 0-79.9-30.1-79.9-85.8c0-57.9 28.6-92 82.5-92c73.5 0 80.8 41.4 100.8 101.9c8.8 26.8 24.2 46.2 61.2 46.2c24.9 0 38.1-5.5 38.1-19.1c0-19.9-21.8-22-49.9-28.6c-30.4-7.3-42.5-23.1-42.5-48c0-40 32.3-52.4 65.2-52.4c37.4 0 60.1 13.6 63 46.6l-36.7 4.4c-1.5-15.8-11-22.4-28.6-22.4c-16.1 0-26 7.3-26 19.8c0 11 4.8 17.6 20.9 21.3c32.7 7.1 71.8 12 71.8 57.5c.1 36.7-30.7 50.6-76.1 50.6z"},null,-1),_hoisted_3$1=[_hoisted_2$1];function _sfc_render(e,t){return openBlock(),createElementBlock("svg",_hoisted_1$3,_hoisted_3$1)}var IconLogo=_export_sfc(_sfc_main$c,[["render",_sfc_render]]),SideLogo_vue_vue_type_style_index_0_scoped_true_lang="";const _hoisted_1$2={class:"logo"},_sfc_main$b={setup(e){const t="Vue Naive Admin";return(n,r)=>{const o=NIcon,a=__unplugin_components_0$4,s=resolveComponent("router-link");return openBlock(),createElementBlock("div",_hoisted_1$2,[createVNode(o,{size:"36",color:"#316c72"},{default:withCtx(()=>[createVNode(unref(IconLogo))]),_:1}),createVNode(s,{to:"/"},{default:withCtx(()=>[createVNode(a,{type:"primary"},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(t)),1)]),_:1})]),_:1})])}}};var SideLogo=_export_sfc(_sfc_main$b,[["__scopeId","data-v-9b037abc"]]),SideMenu_vue_vue_type_style_index_0_lang="";const _sfc_main$a={setup(e){const t=useRouter(),n=usePermissionStore(),{currentRoute:r}=t,o=computed(()=>l(n.routes,""));function a(d,f){return isExternal(f)?f:"/"+[d,f].filter(m=>!!m&&m!=="/").map(m=>m.replace(/(^\/)|(\/$)/g,"")).join("/")}function s(d,f={size:12}){return()=>h(NIcon,Ne({},f),{default:()=>h(d)})}function l(d,f){let m=[];return d.forEach(g=>{var y,b,x;if(g.name&&!g.isHidden){let C={label:g.meta&&g.meta.title||g.name,key:g.name,path:a(f,g.path)};g.children&&g.children.length?(C.icon=s(((y=g.meta)==null?void 0:y.icon)||IconMenu,{size:16}),C.children=l(g.children,a(f,g.path))):C.icon=((b=g.meta)==null?void 0:b.icon)&&s((x=g.meta)==null?void 0:x.icon)||s(IconCircle,{size:8}),m.push(C)}}),m}function u(d,f){isExternal(f.path)?window.open(f.path):t.push(f.path)}return(d,f)=>{const m=__unplugin_components_0$2;return openBlock(),createBlock(m,{class:"side-menu",accordion:"",indent:12,"root-indent":12,options:unref(o),value:unref(r).meta&&unref(r).meta.activeMenu||unref(r).name,"onUpdate:value":u},null,8,["options","value"])}}},_sfc_main$9={setup(e){return(t,n)=>(openBlock(),createElementBlock(Fragment,null,[createVNode(SideLogo),createVNode(_sfc_main$a)],64))}},_sfc_main$8={setup(e){const n=useRouter().getRoutes(),r=computed(()=>n.filter(o=>{var a;return(a=o.meta)==null?void 0:a.keepAlive}).map(o=>o.name));return(o,a)=>{const s=resolveComponent("router-view");return openBlock(),createBlock(s,null,{default:withCtx(({Component:l,route:u})=>[createVNode(Transition,{name:"fade-slide",mode:"out-in",appear:""},{default:withCtx(()=>[(openBlock(),createBlock(KeepAlive,{include:unref(r)},[(openBlock(),createBlock(resolveDynamicComponent(l),{key:u.path}))],1032,["include"]))]),_:2},1024)]),_:1})}}},tagsSS=createSessionStorage({prefixKey:"tag_"}),activeTag=tagsSS.get("activeTag"),tags$1=tagsSS.get("tags"),WITHOUT_TAG_PATHS=["/404","/login","/redirect"],useTagsStore=defineStore("tag",{state(){return{tags:tags$1||[],activeTag:activeTag||""}},actions:{setActiveTag(e){this.activeTag=e,tagsSS.set("activeTag",e)},addTag(e={}){WITHOUT_TAG_PATHS.includes(e.path)||this.tags.some(t=>t.path===e.path)||(this.tags.push(e),tagsSS.set("tags",this.tags))},removeTag(e){this.tags=this.tags.filter(t=>t.path!==e),tagsSS.set("tags",this.tags)}}}),tags={visible:!0,height:50},header={height:60},naiveThemeOverrides={common:{primaryColor:"#316C72FF",primaryColorHover:"#316C72E3",primaryColorPressed:"#2B4C59FF",primaryColorSuppl:"#316C7263",successColor:"#316C72FF",successColorHover:"#316C72E3",successColorPressed:"#2B4C59FF",successColorSuppl:"#316C7263"}};var themeSettings={tags,header,naiveThemeOverrides};const useThemeStore=defineStore("theme",{state(){return themeSettings},getters:{},actions:{setTabVisible(e){this.tags.visible=e}}});var index_vue_vue_type_style_index_0_lang="";const __default__=defineComponent({name:"Tags"}),_sfc_main$7=Object.assign(__default__,{setup(e){const t=useRoute(),n=useRouter(),r=useTagsStore(),o=useThemeStore();watch(()=>t.path,()=>{var f;const{name:l,path:u}=t,d=(f=t.meta)==null?void 0:f.title;r.addTag({name:l,path:u,title:d}),r.setActiveTag(u)},{immediate:!0});const a=l=>{r.setActiveTag(l),n.push(l)},s=l=>{if(l===r.activeTag){const u=r.tags.findIndex(d=>d.path===l);u>0?n.push(r.tags[u-1].path):n.push(r.tags[u+1].path)}r.removeTag(l)};return(l,u)=>{const d=__unplugin_components_0$8,f=__unplugin_components_1$1;return openBlock(),createElementBlock("div",{class:"tags-wrapper",style:normalizeStyle({height:unref(o).tags.height+"px"})},[createVNode(f,null,{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(r).tags,m=>(openBlock(),createBlock(d,{key:m.path,type:unref(r).activeTag===m.path?"primary":"default",closable:unref(r).tags.length>1,onClick:g=>a(m.path),onClose:withModifiers(g=>s(m.path),["stop"])},{default:withCtx(()=>[createTextVNode(toDisplayString(m.title),1)]),_:2},1032,["type","closable","onClick","onClose"]))),128))]),_:1})],4)}}});var index_vue_vue_type_style_index_0_scoped_true_lang$1="";const _hoisted_1$1={class:"layout"},_sfc_main$6={setup(e){const t=useThemeStore();return(n,r)=>{const o=__unplugin_components_0$3,a=__unplugin_components_1,s=__unplugin_components_2$1;return openBlock(),createElementBlock("div",_hoisted_1$1,[createVNode(s,{"has-sider":"",position:"absolute"},{default:withCtx(()=>[createVNode(o,{bordered:"",width:200,"collapsed-width":0,"native-scrollbar":!1},{default:withCtx(()=>[createVNode(_sfc_main$9)]),_:1}),createVNode(s,null,{default:withCtx(()=>[createVNode(a,{style:normalizeStyle([{height:unref(t).header.height+"px"},{"border-left":"none"}])},{default:withCtx(()=>[createVNode(AppHeader)]),_:1},8,["style"]),createVNode(s,{position:"absolute",style:normalizeStyle([{"background-color":"#f5f6fb"},{top:unref(t).header.height+"px"}]),"native-scrollbar":!1},{default:withCtx(()=>[unref(t).tags.visible?(openBlock(),createBlock(_sfc_main$7,{key:0})):createCommentVNode("v-if",!0),createVNode(_sfc_main$8)]),_:1},8,["style"])]),_:1})]),_:1})])}}};var Layout=_export_sfc(_sfc_main$6,[["__scopeId","data-v-13877386"]]),example=[{name:"EXAMPLE",path:"/example",component:Layout,redirect:"/example/table",meta:{title:"\u7EC4\u4EF6\u793A\u4F8B",role:["admin"]},children:[{name:"EXAMPLE-TABLE",path:"table",component:()=>__vitePreload(()=>import("./index.02ff81a9.js"),[]),redirect:"/example/table/post",meta:{title:"\u8868\u683C",role:["admin"]},children:[{name:"POST-LIST",path:"post",component:()=>__vitePreload(()=>import("./index.2f884c6f.js"),["assets/index.2f884c6f.js","assets/index.7ea81346.css"]),meta:{title:"\u6587\u7AE0\u5217\u8868",role:["admin"]}},{name:"POST-CREATE",path:"post-create",component:()=>__vitePreload(()=>import("./post-create.b9e8f342.js"),["assets/post-create.b9e8f342.js","assets/post-create.7987b106.css"]),meta:{title:"\u521B\u5EFA\u6587\u7AE0",role:["admin"]}}]}]}],__glob_11_0=Object.freeze(Object.defineProperty({__proto__:null,default:example},Symbol.toStringTag,{value:"Module"})),index_vue_vue_type_style_index_0_scoped_true_lang="";const _withScopeId=e=>(pushScopeId("data-v-106c86ed"),e=e(),popScopeId(),e),_hoisted_1={flex:"","items-center":""},_hoisted_2=["src"],_hoisted_3={ml20:""},_hoisted_4={"text-16":""},_hoisted_5=_withScopeId(()=>createBaseVNode("p",{op80:"","text-12":"",mt5:""},"\u4ECA\u5929\u53C8\u662F\u5143\u6C14\u6EE1\u6EE1\u7684\u4E00\u5929",-1)),_hoisted_6={flex:"","ml-auto":""},_hoisted_7=createTextVNode(" / 10 "),_hoisted_8={p15:"",flex:""},_hoisted_9=createTextVNode("\u66F4\u591A"),_hoisted_10={class:"card-list"},_hoisted_11=_withScopeId(()=>createBaseVNode("p",{op60:""},"\u4E00\u4E2A\u57FA\u4E8E Vue3.0\u3001Vite\u3001Naive UI \u7684\u8F7B\u91CF\u7EA7\u540E\u53F0\u7BA1\u7406\u6A21\u677F",-1)),_hoisted_12=_withScopeId(()=>createBaseVNode("div",{class:"blank"},null,-1)),_hoisted_13=_withScopeId(()=>createBaseVNode("div",{class:"blank"},null,-1)),_hoisted_14=_withScopeId(()=>createBaseVNode("div",{class:"blank"},null,-1)),_hoisted_15=_withScopeId(()=>createBaseVNode("div",{class:"blank"},null,-1)),_sfc_main$5={setup(e){const t=useUserStore();return(n,r)=>{const o=__unplugin_components_0,a=__unplugin_components_1$2,s=__unplugin_components_2$2,l=__unplugin_components_0$6;return openBlock(),createElementBlock("div",null,[createVNode(s,null,{default:withCtx(()=>[createBaseVNode("div",_hoisted_1,[createBaseVNode("img",{width:"60",style:{"border-radius":"50%"},src:unref(t).avatar},null,8,_hoisted_2),createBaseVNode("div",_hoisted_3,[createBaseVNode("p",_hoisted_4,"Hello, "+toDisplayString(unref(t).name),1),_hoisted_5]),createBaseVNode("div",_hoisted_6,[createVNode(o,{label:"\u5F85\u529E",value:4},{suffix:withCtx(()=>[_hoisted_7]),_:1}),createVNode(o,{ml80:"",label:"Stars"},{default:withCtx(()=>[createVNode(a,{ref:"starsNumberRef","show-separator":"",from:0,to:999},null,512)]),_:1}),createVNode(o,{ml80:"",label:"Forks"},{default:withCtx(()=>[createVNode(a,{ref:"starsNumberRef","show-separator":"",from:0,to:299},null,512)]),_:1})])])]),_:1}),createBaseVNode("div",_hoisted_8,[createVNode(s,{title:"\u9879\u76EE",size:"small",segmented:!0},{"header-extra":withCtx(()=>[createVNode(l,{text:"",type:"primary"},{default:withCtx(()=>[_hoisted_9]),_:1})]),default:withCtx(()=>[createBaseVNode("div",_hoisted_10,[(openBlock(),createElementBlock(Fragment,null,renderList(10,u=>createVNode(s,{key:u,title:"Vue Naive Admin",size:"small"},{default:withCtx(()=>[_hoisted_11]),_:2},1024)),64)),_hoisted_12,_hoisted_13,_hoisted_14,_hoisted_15])]),_:1})])])}}};var Home=_export_sfc(_sfc_main$5,[["__scopeId","data-v-106c86ed"]]);const basicRoutes=[{name:"404",path:"/404",component:()=>__vitePreload(()=>import("./404.60e24ca1.js"),["assets/404.60e24ca1.js","assets/404.cd99a14a.css"]),isHidden:!0},{name:"REDIRECT",path:"/redirect",component:Layout,isHidden:!0,children:[{name:"REDIRECT_NAME",path:"",component:()=>__vitePreload(()=>import("./index.858f66a3.js"),[])}]},{name:"LOGIN",path:"/login",component:()=>__vitePreload(()=>import("./index.7944768a.js"),["assets/index.7944768a.js","assets/index.dc86d5a5.css"]),isHidden:!0,meta:{title:"\u767B\u5F55\u9875"}},{name:"DASHBOARD",path:"/",component:Layout,redirect:"/home",meta:{title:"Dashboard",icon:IconChart},children:[{name:"HOME",path:"home",component:Home,meta:{title:"\u9996\u9875",icon:IconHome}}]},{name:"TEST",path:"/test",component:Layout,redirect:"/test/unocss",meta:{title:"\u57FA\u7840\u529F\u80FD\u6D4B\u8BD5"},children:[{name:"UNOCSS",path:"unocss",component:()=>__vitePreload(()=>import("./TestUnocss.0c079f9e.js"),["assets/TestUnocss.0c079f9e.js","assets/TestUnocss.b2e1c046.css"]),meta:{title:"\u6D4B\u8BD5unocss"}},{name:"MESSAGE",path:"message",component:()=>__vitePreload(()=>import("./TestMessage.bd15cb1f.js"),["assets/TestMessage.bd15cb1f.js","assets/TestDialog.321f032d.css"]),meta:{title:"\u6D4B\u8BD5Message"}},{name:"DIALOG",path:"dialog",component:()=>__vitePreload(()=>import("./TestDialog.d1a8cfb1.js"),["assets/TestDialog.d1a8cfb1.js","assets/TestDialog.321f032d.css"]),meta:{title:"\u6D4B\u8BD5Dialog"}},{name:"TEST-KEEP-ALIVE",path:"keep-alive",component:()=>__vitePreload(()=>import("./TestKeepAlive.4478e6fc.js"),["assets/TestKeepAlive.4478e6fc.js","assets/TestDialog.321f032d.css"]),meta:{title:"\u6D4B\u8BD5Keep-Alive",keepAlive:!0}}]},{name:"ERROR-PAGE",path:"/error-page",component:Layout,redirect:"/error-page/404",meta:{title:"\u9519\u8BEF\u9875",icon:IconAlert},children:[{name:"ERROR-404",path:"404",component:()=>__vitePreload(()=>import("./404.60e24ca1.js"),["assets/404.60e24ca1.js","assets/404.cd99a14a.css"]),meta:{title:"404"}}]},{name:"EXTERNAL-LINK",path:"/external-link",component:Layout,meta:{title:"\u5916\u90E8\u94FE\u63A5",icon:IconLink},children:[{name:"LINK-GITHUB-SRC",path:"https://github.com/zclzone/vue-naive-admin",meta:{title:"\u6E90\u7801 - github",icon:IconGithub}},{name:"LINK-GITEE-SRC",path:"https://gitee.com/zclzone/vue-naive-admin",meta:{title:"\u6E90\u7801 - gitee",icon:IconGitee}},{name:"LINK-DOCS",path:"https://zclzone.github.io/vue-naive-admin-docs",meta:{title:"\u6587\u6863 - vuepress",icon:IconVue}}]}],NOT_FOUND_ROUTE={name:"NOT_FOUND",path:"/:pathMatch(.*)*",redirect:"/404",isHidden:!0},modules$1={"./modules/example.js":__glob_11_0},asyncRoutes=[];Object.keys(modules$1).forEach(e=>{asyncRoutes.push(...modules$1[e].default)});function hasPermission(e,t){var r;const n=(r=e.meta)!=null&&r.role?e.meta.role:[];return!t.length||!n.length?!1:t.some(o=>n.includes(o))}function filterAsyncRoutes(e=[],t){const n=[];return e.forEach(r=>{if(hasPermission(r,t)){const o=Fe(Ne({},r),{children:[]});r.children&&r.children.length?o.children=filterAsyncRoutes(r.children,t):Reflect.deleteProperty(o,"children"),n.push(o)}}),n}const usePermissionStore=defineStore("permission",{state(){return{accessRoutes:[]}},getters:{routes(){return basicRoutes.concat(this.accessRoutes)}},actions:{generateRoutes(e=[]){const t=filterAsyncRoutes(asyncRoutes,e);return this.accessRoutes=t,t}}}),WHITE_LIST=["/login","/redirect"];function createPermissionGuard(e){const t=useUserStore(),n=usePermissionStore();e.beforeEach((r,o,a)=>Be(this,null,function*(){if(getToken())if(r.path==="/login")a({path:"/"});else if(t.userId)refreshAccessToken(),a();else try{yield t.getUserInfo(),n.generateRoutes(t.role).forEach(u=>{!e.hasRoute(u.name)&&e.addRoute(u)}),e.addRoute(NOT_FOUND_ROUTE),a(Fe(Ne({},r),{replace:!0}))}catch(l){removeToken(),$message.error(l),a({path:"/login",query:Fe(Ne({},r.query),{redirect:r.path})})}else WHITE_LIST.includes(r.path)?a():a({path:"/login",query:Fe(Ne({},r.query),{redirect:r.path})})}))}function setupRouterGuard(e){createPageLoadingGuard(e),createPermissionGuard(e),createPageTitleGuard(e)}const router=createRouter({history:createWebHashHistory("/"),routes:basicRoutes,scrollBehavior:()=>({left:0,top:0})});function resetRouter(){router.getRoutes().forEach(e=>{const{name:t}=e;router.hasRoute(t)&&router.removeRoute(t)}),basicRoutes.forEach(e=>{!router.hasRoute(e.name)&&router.addRoute(e)})}function setupRouter(e){e.use(router),setupRouterGuard(router)}function setupStore(e){e.use(createPinia())}const _sfc_main$4={setup(e){const t=useMessage();let n=null;class r{removeMessage(a,s=2e3){setTimeout(()=>{a&&(a.destroy(),a=null)},s)}showMessage(a,s,l={}){if(n&&n.type==="loading")n.type=a,n.content=s,a!=="loading"&&this.removeMessage(n,l.duration);else{let u=t[a](s,l);a==="loading"&&(n=u)}}loading(a){this.showMessage("loading",a,{duration:0})}success(a,s={}){this.showMessage("success",a,s)}error(a,s={}){this.showMessage("error",a,s)}info(a,s={}){this.showMessage("info",a,s)}warning(a,s={}){this.showMessage("warning",a,s)}}return window.$message=new r,Object.defineProperty(window,"$message",{configurable:!1,writable:!1}),(o,a)=>null}},_sfc_main$3={setup(e){const t=useDialog();class n{success(o,a){return this.showDialog("success",Ne({title:o},a))}warning(o,a){return this.showDialog("warning",Ne({title:o},a))}error(o,a){return this.showDialog("error",Ne({title:o},a))}showDialog(o="success",a){return isNullOrUndef(a.title)&&(a.showIcon=!1),t[o](Ne({positiveText:"OK",closable:!1},a))}confirm(o={}){return this.showDialog(o.type||"error",Ne({positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:o.confirm,onNegativeClick:o.cancel,onMaskClick:o.cancel},o))}}return window.$dialog=new n,Object.freeze(window.$dialog),Object.defineProperty(window,"$dialog",{configurable:!1,writable:!1}),(r,o)=>null}},_sfc_main$2={setup(e){return window.$loadingBar=useLoadingBar(),Object.defineProperty(window,"$loadingBar",{configurable:!1,writable:!1}),(t,n)=>null}},_sfc_main$1={setup(e){const t=useThemeStore();return(n,r)=>{const o=__unplugin_components_0$1,a=NDialogProvider,s=__unplugin_components_2,l=__unplugin_components_3;return openBlock(),createBlock(l,{"theme-overrides":unref(t).naiveThemeOverrides},{default:withCtx(()=>[createVNode(s,null,{default:withCtx(()=>[createVNode(_sfc_main$2),createVNode(a,null,{default:withCtx(()=>[createVNode(_sfc_main$3),createVNode(o,null,{default:withCtx(()=>[createVNode(_sfc_main$4),renderSlot(n.$slots,"default")]),_:3})]),_:3})]),_:3})]),_:3},8,["theme-overrides"])}}};var App_vue_vue_type_style_index_0_lang="";const _sfc_main={setup(e){return(t,n)=>{const r=resolveComponent("router-view");return openBlock(),createBlock(_sfc_main$1,null,{default:withCtx(()=>[createVNode(r,null,{default:withCtx(({Component:o})=>[(openBlock(),createBlock(resolveDynamicComponent(o)))]),_:1})]),_:1})}}};function resolveToken(e){const t=e.split(" ");return t.length===2?t[1]:""}var __glob_1_1=Object.freeze(Object.defineProperty({__proto__:null,resolveToken},Symbol.toStringTag,{value:"Module"}));const token={admin:"admin",editor:"editor"};var index$2=[{url:"/api/auth/login",method:"post",response:({body:e})=>["admin","editor"].includes(e==null?void 0:e.name)?{code:0,data:{token:token[e.name]}}:{code:-1,message:"\u6CA1\u6709\u6B64\u7528\u6237"}},{url:"/api/auth/refreshToken",method:"post",response:({headers:e})=>({code:0,data:{token:resolveToken(e==null?void 0:e.authorization)}})}],__glob_1_2=Object.freeze(Object.defineProperty({__proto__:null,default:index$2},Symbol.toStringTag,{value:"Module"})),index$1=[{url:"/api/posts",method:"get",response:()=>({code:0,message:"ok",data:[{id:38,title:"\u5173\u4E8EVite\u914D\u7F6EpreprocessorOptions.scss.additionalData\u5168\u5C40\u5F15\u5165scss\u6587\u4EF6\u65E0\u6548\u95EE\u9898",author:"Ronnie",category:"Vite",description:"\u5728vite\u9879\u76EE\u4E2D\uFF0C\u6709\u65F6\u5019\u6211\u4EEC\u9700\u8981\u5168\u5C40\u5F15\u5165css\u53D8\u91CF\u3001scss\u53D8\u91CF...",content:`\u5728vite\u9879\u76EE\u4E2D\uFF0C\u6709\u65F6\u5019\u6211\u4EEC\u9700\u8981\u5168\u5C40\u5F15\u5165css\u53D8\u91CF\u3001scss\u53D8\u91CF\uFF0C\u6216\u8005\u5F15\u5165\u5168\u5C40scss\u6837\u5F0F\u6587\u4EF6\uFF0Cvite\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u8FD9\u79CD\u914D\u7F6E\u65B9\u5F0F

\`\`\`js
//vite.config.js
css: {
  preprocessorOptions: {
    //define global scss variable
    scss: {
      additionalData: \`@import '@/styles/variables.scss';\`,
    },
  },
}
\`\`\`

\u8FD9\u79CD\u5199\u6CD5\u6CA1\u6709\u4EFB\u4F55\u95EE\u9898\uFF0C\u5E76\u4E14\u6211\u5DF2\u7ECF\u5728\u4E00\u4E9B\u9879\u76EE\u4E2D\u5B9E\u8DF5\u8FC7\u4E86\uFF0C\u53EF\u6709\u4E00\u6B21\u6211\u521B\u5EFA\u65B0\u9879\u76EE\u7684\u65F6\u5019\u5374\u65E0\u6548\u4E86\uFF0C\u5728\u6D4F\u89C8\u5668\u4E0A\u4E5F\u6CA1\u6709\u770B\u5230\u4EFB\u4F55\u76F8\u5173\u7684\u6837\u5F0F\uFF0C\u4F46\u662F\u5728main.js\u4E2D\u5F15\u5165\u53C8\u662F\u6B63\u5E38\u7684

\u6211\u5148\u662F\u6392\u67E5\u5199\u6CD5\u548C\u8DEF\u5F84\u662F\u5426\u6709\u95EE\u9898\uFF0C\u7136\u540E\u6392\u67E5sass\u6216\u8005vite\u7684\u7248\u672C\u662F\u5426\u6709\u95EE\u9898\uFF0C\u6392\u67E5\u51E0\u4E2A\u5C0F\u65F6\u4E0B\u6765\u53D1\u73B0\u90FD\u6CA1\u6709\u95EE\u9898\uFF0C\u7EB3\u95F7\u4E0D\u5DF2\uFF0C\u552F\u4E00\u80FD\u786E\u5B9A\u7684\u662Fvite\u7684\u95EE\u9898

\u4E8E\u662F\u6211\u5C31\u60F3\uFF0C\u4E5F\u8BB8\u522B\u4EBA\u4E5F\u78B0\u5230\u8FC7\u8FD9\u79CD\u95EE\u9898\uFF0C\u5F53\u6211\u627E\u904D\u5404\u5927\u535A\u5BA2\u7F51\u7AD9\u90FD\u6CA1\u7B54\u6848\u540E\uFF08\u4E00\u5927\u5806\u59A5\u534F\u8BF4\u76F4\u63A5\u5728main.js\u5F15\u5165\u5C31\u597D\u7684\uFF09\uFF0C\u6211\u51C6\u5907\u53BBVite\u4ED3\u5E93\u63D0\u5404Issue

\u5F53\u6211\u5C1D\u8BD5\u67E5\u4E00\u4E0B\u6709\u6CA1\u6709\u7C7B\u4F3C\u7684Issue\u65F6\uFF0C\u53D1\u73B0\u7ADF\u7136\u6709\u597D\u51E0\u4E2A\u7C7B\u4F3C\u7684Issue\uFF0C\u8FD8\u662F\u5173\u95ED\u72B6\u6001\uFF0C\u96BE\u9053\u8FD9\u4E2A\u95EE\u9898\u5DF2\u7ECF\u89E3\u51B3\u4E86\uFF1F\u6211\u4E00\u4E2A\u4E00\u4E2A\u70B9\u5F00\u770B\uFF0C\u7EC8\u4E8E\u5728\u5176\u4E2D\u4E00\u4E2AIssue\u4E2D\u627E\u5230\u4E86\u7B54\u6848

[#issue5682](https://github.com/vitejs/vite/issues/5682#issuecomment-968713998)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/876fcf83012f49d6b768e2f919e33031~tplv-k3u1fbpfcp-watermark.image?)
\u539F\u6765\u8FD9\u4E0D\u662F\u4E00\u4E2Abug\uFF0C\u53EA\u6709\u5728main.js\u5F15\u5165\u4E00\u4E2A\u5176\u4ED6scss\u6587\u4EF6\u6216\u8005\u5728.vue\u6587\u4EF6\u4E2D\u4F7F\u7528<style lang="scss"><style>\uFF0C\u5E76\u4E14\u91CC\u9762\u6709\u5185\u5BB9\uFF0C\u5219 scss.additionalData \u914D\u7F6E\u7684\u5168\u5C40scss\u6587\u4EF6\u5C31\u53EF\u4EE5\u6B63\u786E\u5F15\u5165\u4E86\uFF0C\u8FD8\u5EFA\u8BAE\u6211\u4EEC\u5728 scss.additionalData \u5F15\u5165\u7684\u6587\u4EF6\u6700\u597D\u53EA\u5199scss\u53D8\u91CF\uFF0C\u522B\u5199css\u53D8\u91CF\uFF0C\u56E0\u4E3Acss\u53D8\u91CF\u662F\u8FD0\u884C\u65F6\u5C5E\u6027

\u81F3\u6B64\uFF0C\u8FD9\u4E2A\u95EE\u9898\u7B97\u662F\u5706\u6EE1\u89E3\u51B3\u4E86`,isRecommend:!0,isPublish:!0,createDate:"2022-02-18T04:07:47.000Z",updateDate:"2022-03-06T05:26:12.000Z"},{id:37,title:"Vite+Vue3+NaiveUI+Pinia\u642D\u5EFA\u4E00\u5957\u4F18\u96C5\u7684\u540E\u53F0\u7BA1\u7406\u6A21\u677F\uFF0C\u771F\u9999",author:"Ronnie",category:"Vite,Vue3",description:"\u8D81\u7740\u6625\u8282\u653E\u5047\uFF0C\u5B8C\u5584\u4E86\u4E00\u4E0B\u6625\u8282\u524D\u81EA\u5DF1\u642D\u5EFA\u7684\u540E\u53F0\u7BA1\u7406\u6A21\u677F\u7684\u6587\u6863\uFF0C\u5728\u5B8C\u5584\u6587\u6863\u7684\u540C\u65F6\u53C8\u5220\u6539\u4E86\u90E8\u5206\u4E0D\u662Fbug...",content:`\u8D81\u7740\u6625\u8282\u653E\u5047\uFF0C\u5B8C\u5584\u4E86\u4E00\u4E0B\u6625\u8282\u524D\u81EA\u5DF1\u642D\u5EFA\u7684\u540E\u53F0\u7BA1\u7406\u6A21\u677F\u7684\u6587\u6863\uFF0C\u5728\u5B8C\u5584\u6587\u6863\u7684\u540C\u65F6\u53C8\u5220\u6539\u4E86\u90E8\u5206\u4E0D\u662Fbug\u7684\u4EE3\u7801\uFF0C\u8BB2\u771F\uFF0C\u6709\u5F3A\u8FEB\u75C7\u548C\u4EE3\u7801\u6D01\u7656\u7684\u6211\u642D\u5EFA\u8FD9\u5957\u6A21\u677F\u7684\u8FDB\u5EA6\u5C5E\u5B9E\u662F\u6709\u70B9\u6162\u4E86\uFF0C\u4F46\u662F\u7EC8\u7A76\u8FD8\u662F\u5B8C\u6210\u4E86\uFF0C\u5C3D\u7BA1\u8FD9\u662F\u7B2C\u4E00\u4E2A\u7248\u672C


*\u9996\u5148\u7533\u660E\uFF0C\u8FD9\u4E2A\u6A21\u677F\u53C2\u8003\u4E86\u591A\u4E2A\u6D41\u884C\u7684Vue3\u540E\u53F0\u7BA1\u7406\u6A21\u677F\uFF0C\u4E3B\u8981\u662F[*Vben Admin*](https://github.com/anncwb/vue-vben-admin)\uFF0C\u6BEB\u65E0\u7591\u95EE\u8FD9\u662F\u4E00\u4E2A\u975E\u5E38\u4F18\u79C0\u4E14\u6D41\u884C\u7684\u540E\u53F0\u7BA1\u7406\u6A21\u677F\uFF0C\u4F46\u662F\u5BF9\u65B0\u624B\u5E76\u4E0D\u53CB\u597D\uFF0C\u5B66\u4E60\u6210\u672C\u8F83\u9AD8\uFF0C\u751A\u81F3\u5BF9\u4E00\u4E2A\u4E2D\u7EA7\u524D\u7AEF\u6765\u8BF4\u8981\u76F4\u63A5\u4E0A\u624B\u4E8C\u6B21\u5F00\u53D1\u4E5F\u662F\u6709\u4E00\u5B9A\u96BE\u5EA6\u7684*

## \u7B80\u4ECB

Vue Naive Admin\uFF0C\u4E00\u4E2A\u57FA\u4E8E Vue3.0\u3001Vite\u3001Naive UI \u7684\u540E\u53F0\u7BA1\u7406\u6A21\u677F\uFF0C\u76F8\u8F83\u4E8E\u5176\u4ED6\u6BD4\u8F83\u6D41\u884C\u7684\u540E\u53F0\u7BA1\u7406\u6A21\u677F\uFF0C\u6B64\u9879\u76EE\u76F8\u5BF9\u7B80\u6D01\u3001\u8F7B\u91CF\uFF0C\u6CA1\u6709\u96C6\u6210 TypeScript\uFF0C\u6CA1\u6709\u96C6\u6210\u56FD\u9645\u5316\uFF0C\u6CA1\u6709\u96C6\u6210\u590D\u6742\u7684\u4E3B\u9898\u914D\u7F6E\uFF0C\u5B66\u4E60\u6210\u672C\u975E\u5E38\u4F4E\uFF0C\u5BF9\u65B0\u624B\u6781\u5176\u53CB\u597D\u3002\u4E0D\u8FC7\u9EBB\u96C0\u867D\u5C0F\u4E94\u810F\u4FF1\u5168\uFF0C\u6743\u9650\u3001Mock\u3001\u83DC\u5355\u3001axios \u5C01\u88C5\u3001pinia\u3001\u9879\u76EE\u914D\u7F6E\u3001\u6837\u5F0F\u914D\u7F6E\u3001\u73AF\u5883\u914D\u7F6E\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u7ECF\u5E38\u7528\u7684\u57FA\u7840\u7EC4\u4EF6\u5C01\u88C5\u7B49\u7B49\u8FD9\u4E9B\u8BE5\u6709\u7684\u90FD\u6709\uFF0C\u7ECF\u8FC7\u53C2\u8003\u591A\u4E2A vue3 \u540E\u53F0\u7BA1\u7406\u6A21\u677F\u540E\u4EE5\u6700\u7B80\u6D01\u4F18\u96C5\u7684\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u975E\u5E38\u9002\u7528\u4E8E\u4E2D\u5C0F\u578B\u9879\u76EE\u6216\u8005\u4E2A\u4EBA\u9879\u76EE\uFF0C\u5F53\u7136\uFF0C\u4EE5\u6B64\u6A21\u677F\u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\u6539\u9020\u7528\u4E8E\u5927\u578B\u9879\u76EE\u4E5F\u672A\u5C1D\u4E0D\u53EF\u3002


## \u4E3A\u4EC0\u4E48\u8981\u5F00\u53D1\u8FD9\u4E2A\u6A21\u677F

1.  Vue3 \u548C Vite \u5DF2\u7ECF\u8D8B\u4E8E\u6210\u719F\uFF0C\u5B66\u4E60 vite \u548C vue3 \u975E\u5E38\u6709\u5FC5\u8981\uFF0C\u901A\u8FC7\u5F00\u53D1\u6A21\u677F\u8FDB\u884C\u5B66\u4E60\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u65B9\u5F0F\uFF0C\u4E8B\u5B9E\u4E5F\u8BC1\u660E\u6211\u786E\u5B9E\u4ECE\u4E2D\u83B7\u76CA\u826F\u591A
2.  \u76EE\u524D\u4E3B\u6D41\u7684 Vue3+Vite \u540E\u53F0\u7BA1\u7406\u6A21\u677F\u90FD\u76F8\u5BF9\u590D\u6742\uFF0C\u751A\u81F3\u611F\u89C9\u6709\u70B9\u82B1\u91CC\u80E1\u54E8\uFF08\u6CA1\u6709\u8D2C\u4F4E\u7684\u610F\u601D\uFF0C\u5927\u90E8\u5206\u7684\u67B6\u6784\u8BBE\u8BA1\u90FD\u5F88\u4F18\u79C0\uFF0C\u53EA\u662F\u89C9\u5F97\u96C6\u6210\u4E86\u592A\u591A\u4E0D\u5B9E\u7528\u7684\u4E1C\u897F\uFF09
3.  \u81EA\u5DF1\u642D\u7684\u6A21\u677F\u5F00\u53D1\u8D77\u6765\u624D\u6700\u987A\u624B\u3002\u672C\u4EBA\u5F88\u53CD\u611F\u62FF\u522B\u4EBA\u7684\u6A21\u677F\u76F4\u63A5\u4E0A\u624B\u5F00\u53D1\uFF0C\u5982\u679C\u975E\u8981\u62FF\u522B\u4EBA\u7684\u6A21\u677F\u5F00\u53D1\u4E5F\u4F1A\u5C3D\u91CF\u5148\u5403\u900F\u518D\u7528\uFF0C\u4E0D\u5403\u900F\u5C31\u6CA1\u6709\u4EE3\u7801\u7684\u638C\u63A7\u611F\u548C\u5B89\u5168\u611F

## \u529F\u80FD

-   `,isRecommend:!0,isPublish:!0,createDate:"2022-02-10T04:05:35.000Z",updateDate:"2022-02-10T04:05:35.000Z"},{id:36,title:"\u4F7F\u7528\u7EAFcss\u4F18\u96C5\u914D\u7F6E\u79FB\u52A8\u7AEFrem\u5E03\u5C40",author:"Ronnie",category:"\u79FB\u52A8\u7AEF,Css",description:"\u901A\u5E38\u914D\u7F6Erem\u5E03\u5C40\u4F1A\u4F7F\u7528js\u8FDB\u884C\u5904\u7406\uFF0C\u6BD4\u5982750\u7684\u8BBE\u8BA1\u7A3F\u4F1A\u8FD9\u6837...",content:`\u901A\u5E38\u914D\u7F6Erem\u5E03\u5C40\u4F1A\u4F7F\u7528js\u8FDB\u884C\u5904\u7406\uFF0C\u6BD4\u5982750\u7684\u8BBE\u8BA1\u7A3F\u4F1A\u8FD9\u6837\u914D\u7F6E\r
\r
\`\`\`javascript\r
function responseAdjust(width = 750) {\r
  var htmlDom = document.documentElement\r
  htmlDom.style.fontSize = htmlDom.clientWidth / width * 100 + "px"\r
}\r
responseAdjust()\r
window.onresize = function() {\r
  return responseAdjust()\r
}\r
\`\`\`\r
\r
\u5982\u679C\u9700\u8981\u914D\u7F6E\u54CD\u5E94\u5F0F\u65AD\u70B9\uFF0C\u5982\u5C4F\u5E55\u5BBD\u5EA6\u5927\u4E8E600px\u6216\u8005\u5C0F\u4E8E300px\u65F6\u4E0D\u5FC5\u518D\u54CD\u5E94\u5F0F\u4E86\uFF0C\u53EF\u4EE5\u8FD9\u6837\u914D\u7F6E\uFF08\u76F8\u4FE1\u6211\uFF0C\u8FD9\u6837\u7684\u573A\u666F\u8FD8\u662F\u5F88\u591A\u7684\uFF0C\u6BD4\u5982\u79FB\u52A8\u7AEF\u7684H5\u7F51\u7AD9\u9700\u8981\u5728PC\u7AEF\u4E5F\u80FD\u6B63\u5E38\u663E\u793A\uFF09\r
\r
\`\`\`javascript\r
function responseAdjust(width = 750, minWidth = 300, maxWidth = 450) {\r
  var htmlDom = document.documentElement\r
  var clientWidth = htmlDom.clientWidth\r
  if(clientWidth > maxWidth) {\r
    clientWidth = maxWidth\r
  }\r
  if(clientWidth < minWidth) {\r
    clientWidth = minWidth\r
  }\r
  htmlDom.style.fontSize = clientWidth / width * 100 + "px"\r
}\r
responseAdjust()\r
window.onresize = function() {\r
  return responseAdjust()\r
}\r
\`\`\`\r
\r
\u867D\u7136\u4EE3\u7801\u4E0D\u591A\uFF0C\u4F46\u603B\u89C9\u5F97\u4E0D\u662F\u5F88\u4F18\u96C5\uFF0C\u8FD9\u4E9B\u4E8B\u80FD\u5426\u4EA4\u7ED9css\u53BB\u5904\u7406\u5462\u3002\u5176\u5B9E\u662F\u53EF\u4EE5\u7684\uFF0C\u800C\u4E14\u8FD8\u5F88\u4F18\u96C5\r
\r
>  \u5148\u4E0A\u4E2A\u6700\u7B80\u5355\u7684\r
\r
\`\`\`css\r
html {\r
  font-size: calc(100vw / 7.5);\r
}\r
\`\`\`\r
\r
\u5173\u952E\u5728\u4E8Ecalc\u548Cvw\u5C5E\u6027\uFF0Ccalc\u4EE3\u8868\u8BA1\u7B97\uFF0Cvw\u4EE3\u8868\u7A97\u53E3\u7684\u5BBD\u5EA6\u7684\u6BD4\u4F8B\uFF0C\u5373100vw\u8868\u793A100%\u7684\u7A97\u53E3\u5BBD\u5EA6\r
\r
>  \u518D\u7ED3\u5408\u5A92\u4F53\u67E5\u8BE2\u505A\u65AD\u70B9\u5904\u7406\r
\r
\`\`\`css\r
html {\r
  font-size: calc(100vw / 7.5);\r
}\r
\r
@media screen and (min-width: 600px) {\r
  html {\r
    font-size: calc(600px / 7.5);\r
  }\r
}\r
\r
@media screen and (max-width: 300px) {\r
  html {\r
    font-size: calc(300px / 7.5);\r
  }\r
}\r
\`\`\`\r
\r
*\u662F\u4E0D\u662F\u77AC\u95F4\u89C9\u5F97\u4F18\u96C5\u4E86\u5462\uFF0C\u6548\u679C\u8DDFjs\u5904\u7406\u65B9\u5F0F\u662F\u4E00\u6837\u7684*`,isRecommend:!0,isPublish:!0,createDate:"2021-11-04T04:03:36.000Z",updateDate:"2021-11-04T04:03:36.000Z"},{id:35,title:"Vue2&Vue3\u9879\u76EE\u98CE\u683C\u6307\u5357",author:"Ronnie",category:"Vue",description:"\u603B\u7ED3\u7684Vue2\u548CVue3\u7684\u9879\u76EE\u98CE\u683C",content:`### 1. \u547D\u540D\u98CE\u683C

> \u6587\u4EF6\u5939\u5982\u679C\u662F\u7531\u591A\u4E2A\u5355\u8BCD\u7EC4\u6210\uFF0C\u5E94\u8BE5\u59CB\u7EC8\u662F\u6A2A\u7EBF\u8FDE\u63A5 (kebab-case)\u3002

\u9632\u6B62\u6709\u4E9B\u6587\u4EF6\u7CFB\u7EDF\u5BF9\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u51FA\u73B0\u95EE\u9898\u3002


> \u7EC4\u4EF6\u540D\u5E94\u8BE5\u59CB\u7EC8\u7531\u591A\u4E2A\u5355\u8BCD\u7EC4\u6210\uFF0C\u9664\u4E86\u6839\u7EC4\u4EF6 App\uFF0C\u4EE5\u53CA <transition>\u3001<component> \u4E4B\u7C7B\u7684 Vue \u5185\u7F6E\u7EC4\u4EF6\u3002

\u8FD9\u6837\u505A\u53EF\u4EE5\u907F\u514D\u4E0E\u73B0\u6709\u4EE5\u53CA\u672A\u6765\u7684 HTML \u5143\u7D20\u4EA7\u751F\u51B2\u7A81\uFF0C\u56E0\u4E3A\u6240\u6709\u7684 HTML \u5143\u7D20\u540D\u79F0\u90FD\u662F\u5355\u4E2A\u5355\u8BCD\u7684\u3002

> \u5355\u6587\u4EF6\u7EC4\u4EF6\u7684\u6587\u4EF6\u540D\u59CB\u7EC8\u662F\u6A2A\u7EBF\u8FDE\u63A5 (kebab-case)\u3002
\`\`\`
my-component.vue
\`\`\`

> \u548C\u7236\u7EC4\u4EF6\u7D27\u5BC6\u8026\u5408\u7684\u5B50\u7EC4\u4EF6\u5E94\u8BE5\u4EE5\u7236\u7EC4\u4EF6\u540D\u4F5C\u4E3A\u524D\u7F00\u547D\u540D\u3002
\`\`\`
components/
|- TodoList.vue
|- TodoListItem.vue
\u2514\u2500 TodoListItemButton.vue
\`\`\`

> \u5E94\u7528\u7279\u5B9A\u6837\u5F0F\u548C\u7EA6\u5B9A\u7684\u57FA\u7840\u7EC4\u4EF6 (\u4E5F\u5C31\u662F\u5C55\u793A\u7C7B\u7684\u3001\u65E0\u903B\u8F91\u7684\u6216\u65E0\u72B6\u6001\u7684\u7EC4\u4EF6) \u5E94\u8BE5\u5168\u90E8\u4EE5\u4E00\u4E2A\u7279\u5B9A\u7684\u524D\u7F00\u5F00\u5934\uFF0C\u6BD4\u5982 Base\u3001App \u6216 V\u3002
\`\`\`
components/
|- AppButton.vue
|- AppTable.vue
|- AppIcon.vue
\`\`\`

> \u7EC4\u4EF6\u540D\u79F0\u5E94\u8BE5\u4EE5\u9AD8\u9636\u7684 (\u901A\u5E38\u662F\u4E00\u822C\u5316\u63CF\u8FF0\u7684) \u5355\u8BCD\u5F00\u5934\uFF0C\u5E76\u4EE5\u63CF\u8FF0\u6027\u7684\u4FEE\u9970\u8BCD\u7ED3\u5C3E\u3002
\`\`\`
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
\`\`\`


### 2. \u4EE3\u7801\u98CE\u683C
> \u5728\u5355\u6587\u4EF6\u7EC4\u4EF6\u4E2D\u6CA1\u6709\u5185\u5BB9\u7684\u7EC4\u4EF6\u5E94\u8BE5\u662F\u81EA\u95ED\u5408\u7684\u3002
\`\`\`html
<my-component />
\`\`\`

> \u59CB\u7EC8\u4EE5 key \u914D\u5408 v-for\u3002

> \u6C38\u8FDC\u4E0D\u8981\u5728\u4E00\u4E2A\u5143\u7D20\u4E0A\u540C\u65F6\u4F7F\u7528 v-if \u548C v-for\u3002

> \u5728\u58F0\u660E prop \u7684\u65F6\u5019\uFF0C\u5176\u547D\u540D\u5E94\u8BE5\u59CB\u7EC8\u4F7F\u7528 camelCase\uFF0C\u800C\u5728\u6A21\u677F\u548C JSX \u4E2D\u5E94\u8BE5\u59CB\u7EC8\u4F7F\u7528 kebab-case\u3002
\`\`\`js
props: {
  greetingText: String
}

<my-component greeting-text="hi" />
\`\`\`
> prop \u7684\u5B9A\u4E49\u5E94\u8BE5\u5C3D\u91CF\u8BE6\u7EC6\uFF0C\u81F3\u5C11\u6307\u5B9A\u5176\u7C7B\u578B\u3002

> \u7EC4\u4EF6\u6A21\u677F\u5E94\u8BE5\u53EA\u5305\u542B\u7B80\u5355\u7684\u8868\u8FBE\u5F0F\uFF0C\u590D\u6742\u7684\u8868\u8FBE\u5F0F\u5219\u5E94\u8BE5\u91CD\u6784\u4E3A\u8BA1\u7B97\u5C5E\u6027\u6216\u65B9\u6CD5\u3002

> \u5E94\u8BE5\u628A\u590D\u6742\u8BA1\u7B97\u5C5E\u6027\u5C3D\u53EF\u80FD\u591A\u5730\u5206\u5272\u4E3A\u66F4\u7B80\u5355\u7684\u8BA1\u7B97\u5C5E\u6027\u3002


> \u6A21\u677F\u4E2D\u4F7F\u7528\u53CC\u5F15\u53F7\uFF0Cjs\u4E2D\u4F7F\u7528\u5355\u5F15\u53F7
\`\`\`html
<div class="wrapper"></div>
\`\`\`
\`\`\`js
let str = 'hello!'
\`\`\`


> \u5143\u7D20 (\u5305\u62EC\u7EC4\u4EF6) \u7684 attribute \u5E94\u8BE5\u6709\u7EDF\u4E00\u7684\u987A\u5E8F\u3002  
- \u5B9A\u4E49\uFF1Ais
- \u5217\u8868\u6E32\u67D3\uFF1Av-for
- \u6761\u4EF6\uFF1Av-if\u3001v-else-if\u3001v-else\u3001v-show\u3001v-cloak
- ref\u3001key
- v-model
- \u5176\u4ED6 Attribute
- v-on\uFF1A@
- \u5185\u5BB9\uFF1Av-html\u3001v-text

\`\`\`html
<my-component
  is
  v-for="item in list"
  v-if="true"
  v-show="false"
  v-cloak="false"
  ref="myCom"
  :key="item.id"
  v-model="value"
  style
  class
  @click="handleItemClick"
  v-html="vHtml"
  v-text="text"
/>
<!-- \u6CE8\u610F\uFF0C\u6709\u4E9B\u5C5E\u6027\u662F\u4E0D\u5141\u8BB8\u540C\u65F6\u51FA\u73B0\u7684\uFF0C\u6B64\u5904\u53EA\u662F\u4E3A\u4E86\u66F4\u65B9\u4FBF\u5C55\u793A -->
\`\`\`

> \u7EC4\u4EF6\u9009\u9879\u5E94\u8BE5\u6709\u7EDF\u4E00\u7684\u987A\u5E8F\u3002  
- name
- components
- provide/inject
- inheritAttrs\u3001 props\u3001 emits\u3001 expose
- setup
- data
- computed
- watch
- \u751F\u547D\u5468\u671F\u4E8B\u4EF6\uFF1AbeforeCreate\u3001created\u3001beforeMount\u3001mounted\u3001beforeUpdate\u3001updated\u3001activated\u3001deactivated\u3001beforeUnmount\u3001unmounted\u3001errorCaptured\u3001renderTracked\u3001renderTriggered
- methods
- template/render


[\u53C2\u8003\u94FE\u63A5\uFF1AVue3\u98CE\u683C\u6307\u5357](https://v3.cn.vuejs.org/style-guide)  
[\u53C2\u8003\u94FE\u63A5\uFF1AVant V3\u98CE\u683C\u6307\u5357](https://vant-contrib.gitee.io/vant/v3/#/zh-CN/style-guide)`,isRecommend:!0,isPublish:!0,createDate:"2021-10-25T08:57:47.000Z",updateDate:"2022-02-28T04:02:39.000Z"},{id:34,title:"\u5173\u4E8E\u65E0\u611F\u5237\u65B0token\uFF0C\u6211\u4E5F\u6709\u8BDD\u8BF4",author:"Ronnie",category:"JavaScript",description:"\u6700\u8FD1\u5728\u6398\u91D1\u770B\u5230\u4E00\u7BC7\u8BB2\u65E0\u611F\u5237\u65B0token\u7684\u6587\u7AE0\uFF0C\u6B63\u597D\u6700\u8FD1\u6211\u7684\u4E2A\u4EBA\u7F51\u7AD9\u5947\u601DAdmin\u4E5F\u5904\u7406\u4E86\u4E00\u4E2A\u5237\u65B0token\u7684\u95EE\u9898\uFF0C\u800C\u6211\u7684\u89E3\u51B3\u65B9\u6848\u8DDF\u8FD9\u7BC7\u6587\u7AE0\u8BB2\u5230\u7684\u6240\u6709\u65B9\u6848\u90FD\u4E0D\u4E00\u6837",content:`\u6700\u8FD1\u5728\u6398\u91D1\u770B\u5230\u4E00\u7BC7\u8BB2\u65E0\u611F\u5237\u65B0token\u7684\u6587\u7AE0\uFF0C\u6B63\u597D\u6700\u8FD1\u6211\u7684\u4E2A\u4EBA\u7F51\u7AD9\u5947\u601DAdmin\u4E5F\u5904\u7406\u4E86\u4E00\u4E2A\u5237\u65B0token\u7684\u95EE\u9898\uFF0C\u800C\u6211\u7684\u89E3\u51B3\u65B9\u6848\u8DDF\u8FD9\u7BC7\u6587\u7AE0\u8BB2\u5230\u7684\u6240\u6709\u65B9\u6848\u90FD\u4E0D\u4E00\u6837

\u6240\u4EE5\uFF0C\u6211\u4E5F\u60F3\u501F\u8FD9\u4E2A\u8BDD\u9898\u6765\u5199\uFF08shui\uFF09\u4E00\u5199\uFF08shui\uFF09\uFF0C\u4E8E\u662F\uFF0C\u5C31\u6709\u4E86\u8FD9\u7BC7\u6587\u7AE0

\u5176\u5B9Ejwt\u65E9\u5C31\u4E0D\u662F\u4E00\u4E2A\u65B0\u9C9C\u7684\u8BCD\u4E86\uFF0C\u4F60\u53EF\u80FD\u6CA1\u7528\u8FC7\uFF0C\u4F46\u591A\u5C11\u80AF\u5B9A\u4E86\u89E3\u8FC7\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5C31\u4E0D\u8D58\u8FF0jwt\u7684\u6982\u5FF5\u4E86\uFF0C\u60F3\u4E86\u89E3\u7684\u53EF\u4EE5\u81EA\u884Cgoogle\u6216\u8005\u767E\u5EA6

\u9996\u5148\uFF0C\u4E3A\u4EC0\u4E48\u9700\u8981\u5237\u65B0token\u5462

> \u6D4B\u8BD5\uFF1A\u524D\u7AEF\uFF0C\u5FEB\u5E2E\u6211\u770B\u4E00\u4E0B\u6211\u8FD9\u9875\u9762\u600E\u4E48\u7A81\u7136\u5C31\u8DF3\u5230\u767B\u5F55\u9875\u4E86\u5462\uFF0C\u6211\u8FD8\u6CA1\u6D4B\u55E8\u5462  
> \u524D\u7AEF\uFF1A\u6211\u770B\u770B...\u54E6\uFF0C\u662Ftoken\u8FC7\u671F\u4E86  
> \u6D4B\u8BD5\uFF1A\uFF1F\uFF1F\u8FD9\u4E0D\u5408\u7406\u554A\uFF0C\u660E\u660E\u6211\u524D\u4E00\u79D2\u8FD8\u5728\u64CD\u4F5C\u5462  
> \u524D\u7AEF\uFF1A\u6211\u60F3\u60F3...  
> ...  
> \u524D\u7AEF\uFF1A\u540E\u7AEF\uFF0C\u4F60\u80FD\u4E0D\u80FD\u628A\u7ED9\u6211\u7684token\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E\u7684\u957F\u4E00\u70B9  
> \u540E\u7AEF\uFF1A\u4E0D\u884C\u554A\uFF0C\u8FD9\u6837\u505A\u4E0D\u5B89\u5168\uFF0C\u4F46\u6211\u53EF\u4EE5\u7ED9\u4F60\u4E00\u4E2A\u5237\u65B0token\u7684\u63A5\u53E3\uFF0C\u8FD9\u6837\u4F60\u5C31\u53EF\u4EE5\u62FF\u5230\u4E00\u4E2A\u91CD\u65B0\u8BA1\u65F6\u7684\u65B0token  
> \u524D\u7AEF\uFF1A\u597D\u5427\uFF0C\u6211\u60F3\u60F3...  

\u7136\u540E\uFF0C\u8981\u600E\u4E48\u5237\u65B0token\u5462\uFF0C\u5E76\u4E14\u505A\u5230\u8BA9\u7528\u6237\u65E0\u611F\u77E5\u7684\u5237\u65B0\uFF0C\u5F88\u660E\u663E\u8FD9\u4E2A\u96BE\u9898\u6700\u7EC8\u8FD8\u662F\u7529\u7ED9\u4E86\u524D\u7AEF

\u6765\u770B\u4E00\u4E0B\u8FD9\u7BC7\u6587\u7AE0\u7684\u4F5C\u8005\u8BB2\u5230\u4E86\u54EA\u51E0\u79CD\u65B9\u6848

> ![\u65B9\u6CD5\u4E00](https://gitee.com/zclzone/res/raw/master/qs-zone/blob/img/20211015144103.png)

> ![\u65B9\u6CD5\u4E8C](https://gitee.com/zclzone/res/raw/master/qs-zone/blob/img/20211015145428.png)

\u4E2A\u4EBA\u89C9\u5F97\u65B9\u6CD5\u4E8C\u5176\u5B9E\u8FD8\u662F\u6BD4\u8F83\u7A33\u59A5\u7684\uFF0C\u6240\u8C13\u7684\u8D44\u6E90\u6D6A\u8D39\u548C\u6027\u80FD\u6D88\u8017\u6307\u7684\u5C31\u662F\u5B9A\u65F6\u5668\uFF0C\u4F46\u8FD9\u70B9\u6027\u80FD\u6D88\u8017\u5176\u5B9E\u5E76\u4E0D\u591A\uFF0C\u5B8C\u5168\u6CA1\u5FC5\u8981\u770B\u8FD9\u4E48\u91CD

> ![\u65B9\u6CD5\u4E09](https://gitee.com/zclzone/res/raw/master/qs-zone/blob/img/20211015150200.png)  
\u8FD9\u4E2A\u65B9\u6CD5\u662F\u8FD9\u7BC7\u6587\u7AE0\u7684\u4F5C\u8005\u81EA\u5DF1\u63D0\u4F9B\u5E76\u4F7F\u7528\u7684\u65B9\u6848\uFF0C\u5E76\u7ED9\u51FA\u4E86\u8BE6\u7EC6\u7684\u5B9E\u73B0\u4EE3\u7801\uFF0C\u611F\u5174\u8DA3\u7684\u53EF\u4EE5\u770B\u4E0B[\u539F\u6587](https://juejin.cn/post/6983582201690456071)

\u4E2A\u4EBA\u89C9\u5F97\u8FD9\u4E2A\u65B9\u6848\u662F\u4E0A\u9762\u51E0\u79CD\u65B9\u6848\u4E2D\u6700\u4E0D\u53EF\u53D6\u7684\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u65B9\u6848\u65B9\u5F0F\u4E3A\u4E86\u9632\u6B62token\u8FC7\u671F\u540E\u540C\u65F6\u53D1\u8D77\u4E24\u4E2A\u6216\u8005\u4E24\u4E2A\u4EE5\u4E0A\u7684\u8BF7\u6C42\uFF0C\u5C06\u8BF7\u6C42\u5B58\u8FDB\u4E86\u961F\u5217\u4E2D\uFF0C\u5E76\u901A\u8FC7Promise\u7684Pending\u72B6\u6001\u963B\u585E\u591A\u4E2A\u8BF7\u6C42\uFF0C\u8FD9\u4E0D\u4EC5\u589E\u52A0\u4EE3\u7801\u590D\u6742\u5EA6\uFF0C\u8FD8\u5F88\u4E0D\u4F18\u96C5\uFF0C\u6700\u91CD\u8981\u7684\u662Ftoken\u8FC7\u671F\u540E\u4F1A\u8BA9\u63A5\u53E3\u54CD\u5E94\u65F6\u95F4\u5EF6\u957F\uFF0C\u5BB9\u6613\u9020\u6210\u8BF7\u6C42\u8D85\u65F6\uFF0C\u7528\u6237\u5176\u5B9E\u662F\u5F88\u5BB9\u6613\u611F\u77E5\u5230\u7684\uFF0C\u4F53\u9A8C\u5E76\u4E0D\u597D

> \u65B9\u6CD5\u56DB\uFF08\u672C\u4EBA\u4F7F\u7528\u7684\u65B9\u6848\uFF09

\u901A\u8FC7\u51FD\u6570\u8282\u6D41\u7684\u65B9\u5F0F\u5237\u65B0token\uFF0C\u5728\u8BF7\u6C42\u62E6\u622A\u5668\u4E2D\u53BB\u5C1D\u8BD5\u8C03\u7528\u5237\u65B0token\u7684\u65B9\u6CD5\uFF0C\u5982\u679C\u548C\u4E0A\u6B21\u5237\u65B0token\u7684\u65F6\u95F4\u95F4\u9694\u4E0D\u591F\u5219\u4E0D\u5237\u65B0token\uFF0C\u8FD9\u6837\u7684\u8BDD\u53EF\u4EE5\u4FDD\u8BC1\u6BCF\u6B21F5\u5237\u65B0\u6216\u8005\u8FDB\u5165\u9875\u9762\u7684\u65F6\u5019\u5237\u65B0\u4E00\u6B21token\uFF0C\u5728\u9875\u9762\u6301\u7EED\u64CD\u4F5C\u4E5F\u80FD\u4FDD\u8BC1\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u5237\u65B0\u4E00\u6B21token\uFF0C\u79BB\u5F00\u9875\u9762\u540E\u4E5F\u4E0D\u4F1A\u7EE7\u7EED\u5237\u65B0token\uFF0C\u57FA\u672C\u4E0D\u4F1A\u6709\u592A\u5927\u7684\u5F00\u9500\uFF0C\u8BDD\u4E0D\u591A\u8BF4\uFF0C\u4E0A\u4EE3\u7801

> /utils/index.js
\`\`\`js
/**
 * \u8282\u6D41\u51FD\u6570
 * @param {Function} fn 
 * @param {Number} wait 
 * @returns {Function}
 */
export function throttle(fn, wait) {
  var context, args
  var previous = 0

  return function () {
    var now = +new Date()
    context = this
    args = arguments
    if (now - previous > wait) {
      fn.apply(context, args)
      previous = now
    }
  }
}
\`\`\`

> /utils/cookie.js
\`\`\`js
import Cookies from 'js-cookie'
import { refreshToken } from '@/api/auth'
import { throttle } from '@/utils'

const TOKEN_CODE = 'access_token'

export function setToken(token) {
  return Cookies.set(TOKEN_CODE, token, { expires: new Date(new Date().getTime() + 2 * 60 * 60 * 1000) })
}

// \u9632\u6B62\u9891\u7E41\u5237\u65B0token\uFF0C\u5BF9\u6B64\u65B9\u6CD5\u8282\u6D41\u5904\u7406\uFF0C30\u5206\u949F\u95F4\u9694
export const refreshAccessToken = throttle(async function () {
  try {
    // \u8BF7\u6C42\u5237\u65B0token\u63A5\u53E3
    const res = await refreshToken()
    if (res.code === 0) {
      setToken(res.data.token)
    }
  } catch (error) {
    console.error(error)
  }
}, 1000 * 60 * 30)
\`\`\`

> /utils/request.js
\`\`\`js
import axios from 'axios'

const service = axios.create({
  timeout: 120000,
  baseURL: '/',
})

service.interceptors.request.use(
  async config => {
    // \u6392\u9664\u767B\u5F55\u3001\u6CE8\u518C\u3001\u5237\u65B0token\u7B49\u8BF7\u6C42
    if (!config.url.startsWith('/auth')) {
      refreshAccessToken()
    }
    return config
  },
  err => Promise.reject(err)
)
\`\`\`

\u8FD9\u5C31\u662F\u6211\u5728\u6211\u7684\u4E2A\u4EBA\u7F51\u7AD9\u4E2D\u7684\u5B9E\u73B0\u65B9\u5F0F\u4E86\uFF0C\u4E2A\u4EBA\u611F\u89C9\u8FD8\u662F\u633A\u4F18\u96C5\u7B80\u5355\u7684

*\u6CE8\u610F\uFF1A\u8FD9\u79CD\u5B9E\u73B0\u65B9\u5F0F\u6709\u4E2A\u9690\u85CF\u7684\u95EE\u9898\uFF0C\u5C31\u662F\u5982\u679C\u7528\u6237\u662F\u9700\u8981\u8FDB\u884C\u957F\u65F6\u95F4\u64CD\u4F5C\u4F46\u53C8\u4E0D\u6D89\u53CA\u8BF7\u6C42\u63A5\u53E3\uFF0C\u5219\u6709\u53EF\u80FD\u4F1A\u65E0\u6CD5\u53CA\u65F6\u5237\u65B0token\u9020\u6210token\u8FC7\u671F\uFF0C\u5F53\u7136\u8981\u89C4\u907F\u8FD9\u79CD\u60C5\u51B5\u4E5F\u662F\u53EF\u4EE5\u7684\uFF0C\u6700\u7B80\u5355\u7684\u89C4\u907F\u65B9\u5F0F\u5C31\u662F\u5C06token\u8FC7\u671F\u65F6\u95F4\u9002\u5F53\u7684\u5EF6\u957F\u4E00\u70B9\uFF0C\u6BD4\u5982\u5EF6\u957F\u81F312\u5C0F\u65F6\u6216\u8005\u66F4\u4E45\uFF08\u4E0D\u5EFA\u8BAE\u8D85\u8FC724\u5C0F\u65F6\uFF09*










`,isRecommend:!0,isPublish:!0,createDate:"2021-10-14T10:02:40.000Z",updateDate:"2021-10-26T07:10:26.000Z"},{id:29,title:"\u4F7F\u7528css\u4F18\u96C5\u914D\u7F6E\u79FB\u52A8\u7AEFrem\u5E03\u5C40",author:"\u5F20\u4F20\u9F99",category:"Css",description:"\u4F7F\u7528css\u4F18\u96C5\u914D\u7F6E\u79FB\u52A8\u7AEFrem\u5E03\u5C40",content:`\u914D\u7F6Erem\u5E03\u5C40\u901A\u5E38\u4F1A\u4F7F\u7528js\u8FDB\u884C\u5904\u7406\uFF0C\u6BD4\u5982750\u7684\u8BBE\u8BA1\u7A3F\u4F1A\u8FD9\u6837\u914D\u7F6E

\`\`\`javascript
function responseAdjust(width = 750) {
  var htmlDom = document.documentElement
  htmlDom.style.fontSize = htmlDom.clientWidth / width * 100 + "px"
}
responseAdjust()
window.onresize = function() {
  return responseAdjust()
}
\`\`\`

\u5982\u679C\u9700\u8981\u914D\u7F6E\u54CD\u5E94\u5F0F\u65AD\u70B9\uFF0C\u5982\u5C4F\u5E55\u5BBD\u5EA6\u5927\u4E8E600px\u6216\u8005\u5C0F\u4E8E300px\u65F6\u4E0D\u5FC5\u518D\u54CD\u5E94\u5F0F\u4E86\uFF0C\u53EF\u4EE5\u8FD9\u6837\u914D\u7F6E\uFF08\u76F8\u4FE1\u6211\uFF0C\u8FD9\u6837\u7684\u573A\u666F\u8FD8\u662F\u5F88\u591A\u7684\uFF0C\u6BD4\u5982\u79FB\u52A8\u7AEF\u7684H5\u7F51\u7AD9\u9700\u8981\u5728PC\u7AEF\u4E5F\u80FD\u6B63\u5E38\u663E\u793A\uFF09

\`\`\`javascript
function responseAdjust(width = 750, minWidth = 300, maxWidth = 450) {
  var htmlDom = document.documentElement
  var clientWidth = htmlDom.clientWidth
  if(clientWidth > maxWidth) {
    clientWidth = maxWidth
  }
  if(clientWidth < minWidth) {
    clientWidth = minWidth
  }
  htmlDom.style.fontSize = clientWidth / width * 100 + "px"
}
responseAdjust()
window.onresize = function() {
  return responseAdjust()
}
\`\`\`

\u867D\u7136\u4EE3\u7801\u4E0D\u591A\uFF0C\u4F46\u603B\u89C9\u5F97\u4E0D\u662F\u5F88\u4F18\u96C5\uFF0C\u8FD9\u4E9B\u4E8B\u80FD\u5426\u4EA4\u7ED9css\u53BB\u5904\u7406\u5462\u3002\u5176\u5B9E\u662F\u53EF\u4EE5\u7684\uFF0C\u800C\u4E14\u8FD8\u5F88\u4F18\u96C5

>  \u5148\u4E0A\u4E2A\u6700\u7B80\u5355\u7684

\`\`\`css
html {
  font-size: calc(100vw / 7.5);
}
\`\`\`

\u5173\u952E\u5728\u4E8Ecalc\u548Cvw\u5C5E\u6027\uFF0Ccalc\u4EE3\u8868\u8BA1\u7B97\uFF0Cvw\u4EE3\u8868\u7A97\u53E3\u7684\u5BBD\u5EA6\u7684\u6BD4\u4F8B\uFF0C\u5373100vw\u8868\u793A100%\u7684\u7A97\u53E3\u5BBD\u5EA6

>  \u518D\u7ED3\u5408\u5A92\u4F53\u67E5\u8BE2\u505A\u65AD\u70B9\u5904\u7406

\`\`\`css
html {
  font-size: calc(100vw / 7.5);
}

@media screen and (min-width: 600px) {
  html {
    font-size: calc(600px / 7.5);
  }
}

@media screen and (max-width: 300px) {
  html {
    font-size: calc(300px / 7.5);
  }
}
\`\`\`

\u662F\u4E0D\u662F\u77AC\u95F4\u89C9\u5F97\u5F88\u4F18\u96C5\u4E86\u5462\uFF0C\u6548\u679C\u8DDFjs\u5904\u7406\u65B9\u5F0F\u662F\u4E00\u6837\u7684
`,isRecommend:!0,isPublish:!0,createDate:"2021-07-08T11:06:19.000Z",updateDate:"2021-09-29T02:08:01.000Z"},{id:28,title:"\u5982\u4F55\u4F18\u96C5\u7684\u7ED9\u56FE\u7247\u6DFB\u52A0\u6C34\u5370",author:"\u5F20\u4F20\u9F99",category:"JavaScript",description:"\u4F18\u96C5\u7684\u7ED9\u56FE\u7247\u6DFB\u52A0\u6C34\u5370",content:`\u6211\u4E4B\u524D\u5199\u8FC7\u4E00\u7BC7\u6587\u7AE0\u8BB0\u5F55\u4E86\u4E00\u6B21\u4E0A\u4F20\u56FE\u7247\u7684\u4F18\u5316\u53F2\uFF0C[\u8BA1\u4E00\u6B21vant\u7EC4\u4EF6\u56FE\u7247\u4E0A\u4F20\u4F18\u5316\u53F2](http://www.qszone.com/blog/list/23)  
\u8FD8\u662F\u4E0A\u6B21\u7684\u9879\u76EE\uFF0C\u73B0\u5728\u6709\u4E86\u4E00\u4E2A\u65B0\u9700\u6C42\uFF0C\u5C31\u662F\u8981\u7ED9\u4E0A\u4F20\u7684\u56FE\u7247\u6DFB\u52A0\u6C34\u5370\uFF0C\u6C34\u5370\u7684\u5185\u5BB9\u662F\u56FE\u7247\u7684\u65F6\u95F4+\u4E0A\u4F20\u4EBA+\u7CFB\u7EDFLogo+\u7CFB\u7EDF\u540D\u79F0  
\u8FD9\u4E2A\u9700\u6C42\u8FD8\u662F\u6BD4\u8F83\u96BE\u5904\u7406\u7684\uFF0C\u5728\u8FD9\u4E4B\u524D\u6DFB\u52A0\u6C34\u5370\u4E00\u76F4\u90FD\u662F\u540E\u7AEF\u5904\u7406\u7684\uFF0C\u73B0\u5728\u5E0C\u671B\u53EF\u4EE5\u5C1D\u8BD5\u4E00\u4E0B\u5728\u524D\u7AEF\u5904\u7406  
\u800C\u4E14\u73B0\u5728\u9879\u76EE\u91CC\u4F7F\u7528\u7684\u662FOSS\u76F4\u63A5\u4E0A\u4F20\u7684\u65B9\u5F0F\uFF0C\u4E3A\u4E86\u51CF\u8F7B\u670D\u52A1\u5668\u7684\u538B\u529B\uFF0C\u4E0A\u4F20\u7684\u64CD\u4F5C\u662F\u4E0D\u7ECF\u8FC7\u81EA\u5DF1\u7684\u670D\u52A1\u5668\u4E2D\u8F6C\u7684  
\u65E2\u7136\u6CA1\u529E\u6CD5\u7529\u7ED9\u540E\u7AEF\u5904\u7406\uFF0C\u90A3\u5C31\u5F00\u5E72\u5427\uFF0C\u60F3\u4E00\u60F3\u5C1D\u8BD5\u505A\u6CA1\u505A\u8FC7\u7684\u4E8B\u8FD8\u662F\u633A\u5174\u594B\u7684  

> \u5148\u6765\u7B2C\u4E00\u7248\uFF0C\u4F7F\u7528canvas\u586B\u5145\u6587\u5B57\u7684\u65B9\u5F0F
\`\`\`js
/**
 * \u6DFB\u52A0\u6C34\u5370
 * @param {file} \u4E0A\u4F20\u7684\u56FE\u7247\u6587\u4EF6
 */
async function addWaterMarker(file) {
  // \u5148\u5C06\u6587\u4EF6\u8F6C\u6210img\u6807\u7B7E
  let img = await blobToImg(file)
  return new Promise((resolve, reject) => {
    // \u521B\u5EFAcanvas\u753B\u5E03
    let canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    let ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)

    // \u8BBE\u7F6E\u586B\u5145\u5B57\u53F7\u548C\u5B57\u4F53\uFF0C\u6837\u5F0F\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u5B57\u4F53\u5927\u5C0F\u6839\u636Ecanvas\u7684\u5BBD\u5EA6\u7B49\u6BD4\u7F29\u653E\uFF0C\u9632\u6B62\u5927\u56FE\u7247\u751F\u6210\u7684\u6C34\u5370\u5F88\u5C0F\u7684\u95EE\u9898
    ctx.font = \`\${canvas.width * 0.05}px \u5B8B\u4F53\`
    ctx.fillStyle = "red"
    // \u8BBE\u7F6E\u53F3\u5BF9\u9F50
    ctx.textAlign = 'right'
    // \u5728\u6307\u5B9A\u4F4D\u7F6E\u7ED8\u5236\u6587\u5B57
    ctx.fillText('\u6211\u662F\u6C34\u53701', canvas.width - 100, canvas.height - 100)
    ctx.fillText('\u6211\u662F\u6C34\u53702', canvas.width - 100, canvas.height - 50)

    // \u5C06canvas\u8F6C\u6210blob\u6587\u4EF6\u8FD4\u56DE
    canvas.toBlob(blob => resolve(blob))
  })
}

/**
* blob\u8F6Cimg\u6807\u7B7E
*/
function blobToImg(blob) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.addEventListener('load', () => {
      let img = new Image()
      img.src = reader.result
      img.addEventListener('load', () => resolve(img))
    })
    reader.readAsDataURL(blob)
  })
}
\`\`\`

\u6C34\u5370\u786E\u5B9E\u52A0\u4E0A\u53BB\u4E86,\u5982\u679C\u6C34\u5370\u53EA\u662F\u7B80\u5355\u5E03\u5C40\u7684\u6587\u5B57\uFF0C\u8FD9\u4E5F\u53EF\u4EE5\u7528  
\u4F46\u601D\u524D\u60F3\u540E\u603B\u89C9\u5F97\u4E0D\u4F18\u96C5\uFF0C\u52A0\u4E0A\u6C34\u5370\u5185\u5BB9\u6BD4\u8F83\u590D\u6742\uFF0C\u8FD8\u6709\u56FE\u7247\uFF0C\u9760\u8FD9\u79CD\u65B9\u5F0F\u8981\u5B9E\u73B0\u8FD8\u662F\u591F\u545B\u7684  

> \u7ECF\u8FC7\u82E6\u82E6\u6298\u817E\uFF0C\u7B2C\u4E8C\u7248\u641E\u51FA\u6765\u4E86\uFF0C\u6C34\u5370\u5185\u5BB9\u901A\u8FC7html\u8F6C\u6210\u56FE\u7247\uFF0C\u7136\u540E\u628A\u6C34\u5370\u56FE\u7247\u5408\u6210\u5230\u4E0A\u4F20\u7684\u56FE\u7247\u4E2D

\`\`\`js
/**
 * \u6DFB\u52A0\u6C34\u5370
 * @param {file} \u4E0A\u4F20\u7684\u56FE\u7247\u6587\u4EF6
 * @param {el} \u6C34\u5370\u5185\u5BB9html
 */
async function addWaterMarker(file, el = '#markImg') {
  // \u5148\u5C06\u6587\u4EF6\u8F6C\u6210img\u6807\u7B7E
  let img = await blobToImg(file)
  return new Promise(async (resolve, reject) => {
    try {
      // \u521B\u5EFAcanvas\u753B\u5E03
      let canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      let ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)

      // \u521B\u5EFA\u6C34\u5370\u56FE\u7247canvas\u753B\u5E03
      let markCanvas = document.createElement('canvas')
      // \u521B\u5EFA\u6C34\u5370\u56FE\u7247canvas
      const markImg = await createMarkImg(document.querySelector(el))
      //\u8BA9\u6C34\u5370\u6839\u636E\u56FE\u7247\u5C3A\u5BF8\u7B49\u6BD4\u7F29\u653E\uFF0C\u9ED8\u8BA4\u5BBD\u5EA6\u8BBE\u62101000
      let zoom = canvas.width / 1000
      let markCtx = markCanvas.getContext('2d')
      // \u7F29\u653E\u6C34\u5370\u56FE\u7247canvas
      markCtx.scale(zoom, zoom)

      // \u5C06\u6C34\u5370\u753B\u5E03\u7684\u5BBD\u9AD8\u8BBE\u7F6E\u6210\u7F29\u653E\u540E\u7684\u6C34\u5370\u56FE\u7247canvas\u7684\u5BBD\u9AD8
      markCanvas.width = markImg.width
      markCanvas.height = markImg.height
      // \u5C06\u6C34\u5370\u56FE\u7247canvas\u586B\u5145\u5230\u6C34\u5370\u753B\u5E03\u4E2D
      markCtx.drawImage(markImg, 0, 0)

      // \u5C06\u6C34\u5370\u753B\u5E03canvas\u586B\u5145\u5230canvas\u753B\u5E03
      ctx.drawImage(markCanvas, canvas.width - markCanvas.width, canvas.height - markCanvas.height, markCanvas.width, markCanvas.height)
      canvas.toBlob(blob => resolve(blob))
    } catch (error) {
      reject(error)
    }
  })
}

/**
* blob\u8F6Cimg\u6807\u7B7E
*/
function blobToImg(blob) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.addEventListener('load', () => {
      let img = new Image()
      img.src = reader.result
      img.addEventListener('load', () => resolve(img))
    })
    reader.readAsDataURL(blob)
  })
}

/**
* \u521B\u5EFA\u6C34\u5370canvas\uFF0C\u9700\u8981\u5B89\u88C5html2canvas.js\u63D2\u4EF6
*/
function createMarkImg(el) {
  return new Promise(async (resolve, reject) => {
    try {
      const markImg = await html2canvas(el, {
        allowTaint: false,   //\u5141\u8BB8\u6C61\u67D3
        useCORS: true,
        backgroundColor: null//'transparent'  //\u80CC\u666F\u8272
      })
      resolve(markImg)
    } catch (error) {
      reject(error)
    }
  })
}
\`\`\`

\u5199\u5F97\u867D\u7136\u590D\u6742\u4E86\u70B9\uFF0C\u4F46\u662F\u5F88\u597D\u7528\uFF0C\u6C34\u5370\u5185\u5BB9\u4F7F\u7528html+css\u5148\u753B\u597D\uFF0C\u7136\u540E\u76F4\u63A5\u5408\u6210\u5230\u56FE\u7247\u7684\u6307\u5B9A\u4F4D\u7F6E\u5C31\u884C\u4E86\uFF0C\u7701\u5FC3\u5F88\u591A  
\u4F46\u4EBA\u6709\u65F6\u5019\u5C31\u662F\u7231\u6298\u817E\uFF0C\u5934\u5929\u5199\u5B8C\u7684\u4EE3\u7801\u7B2C\u4E8C\u5929\u5C31\u662F\u89C9\u5F97\u5F88\u522B\u626D\uFF0C\u8FD8\u662F\u89C9\u5F97\u4E0D\u591F\u4F18\u96C5\uFF0C\u81EA\u6211\u603B\u7ED3\u81F3\u5C11\u6709\u4EE5\u4E0B\u4E24\u4E2A\u95EE\u9898  
1. \u6C34\u5370\u90E8\u5206\u4E3A\u4E86\u5B9E\u73B0\u7F29\u653E\u4F7F\u7528\u4E86\u4E24\u5C42canvas\uFF0C\u5BF9\u6027\u80FD\u6709\u4E00\u5B9A\u7684\u8017\u635F\uFF0C\u4E0D\u59A5
2. \u4E0A\u4F20\u7684\u56FE\u7247\u52A0\u4E86\u6C34\u5370\u540E\u4F53\u79EF\u5927\u4E86\u6709\u4E24\u4E09\u500D\uFF0C\u8FD9\u8FD8\u662F\u5728\u4E0A\u4F20\u56FE\u7247\u4E4B\u524D\u5148\u8FDB\u884C\u538B\u7F29\u7684\u524D\u63D0\u4E0B\uFF0C\u8FD9\u65E0\u7591\u4F1A\u5927\u5927\u589E\u52A0\u4E0A\u4F20\u56FE\u7247\u7684\u901F\u5EA6

> \u518D\u6B21\u6298\u817E\uFF0C\u6682\u5B9A\u7684\u7EC8\u6781\u7248\u7EC8\u4E8E\u51FA\u7089\uFF0C\u4EE3\u7801\u5982\u4E0B

\`\`\`js
/**
 * \u6DFB\u52A0\u6C34\u5370
 */
export async function addWaterMarker(file, el = '#markImg') {
  // \u5C06\u6587\u4EF6blob\u8F6C\u6362\u6210\u56FE\u7247
  let img = await blobToImg(file)
  return new Promise(async (resolve, reject) => {
    try {
      // \u521B\u5EFAcanvas\u753B\u5E03
      let canvas = document.createElement('canvas')
      //\u7B49\u6BD4\u4F8B\u8C03\u6574canvas\u5BBD\u9AD8\uFF0C\u4EE5\u7F29\u5C0F\u56FE\u7247\u4F53\u79EF
      let imgRatio = img.naturalWidth / img.naturalHeight //\u56FE\u7247\u6BD4\u4F8B
      canvas.width = 750  //\u9ED8\u8BA4\u8BBE\u7F6E\u6210750
      canvas.height = canvas.width / imgRatio

      let ctx = canvas.getContext('2d')

      // \u586B\u5145\u4E0A\u4F20\u7684\u56FE\u7247
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      // \u751F\u6210\u6C34\u5370\u56FE\u7247
      const markWidth = document.querySelector(el).clientWidth
      let zoom = canvas.width * 0.3 / markWidth
      let markEle = document.querySelector(el)
      // \u5148\u7F29\u653E\u6C34\u5370html\u518D\u8F6C\u6210\u56FE\u7247
      markEle.style.transform = \`scale(\${zoom})\`
      const markImg = await htmlToCanvas(markEle)

      // \u586B\u5145\u6C34\u5370
      ctx.drawImage(markImg, canvas.width - markImg.width - 15 * zoom, canvas.height - markImg.height - 15 * zoom, markImg.width, markImg.height)

      // \u5C06canvas\u8F6C\u6362\u6210blob
      canvas.toBlob(blob => resolve(blob))
    } catch (error) {
      reject(error)
    }

  })
}

/**
* blob\u8F6Cimg\u6807\u7B7E
*/
function blobToImg(blob) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.addEventListener('load', () => {
      let img = new Image()
      img.src = reader.result
      img.addEventListener('load', () => resolve(img))
    })
    reader.readAsDataURL(blob)
  })
}

/**
* html\u8F6C\u6210canvas\uFF0C\u9700\u8981\u5B89\u88C5html2canvas.js\u63D2\u4EF6
*/
export function htmlToCanvas(el, backgroundColor = 'rgba(0,0,0,.1)') {
  return new Promise(async (resolve, reject) => {
    try {
      const markImg = await html2canvas(el, {
        allowTaint: false,   //\u5141\u8BB8\u6C61\u67D3
        useCORS: true,
        backgroundColor //'transparent'  //\u80CC\u666F\u8272
      })
      resolve(markImg)
    } catch (error) {
      reject(error)
    }
  })
}
\`\`\`

\u81F3\u6B64\uFF0C\u4E0A\u9762\u4E24\u4E2A\u95EE\u9898\u4E5F\u7B97\u662F\u5B8C\u7F8E\u89E3\u51B3\uFF0C\u5982\u679C\u56FE\u7247\u4F53\u79EF\u8FD8\u662F\u8FC7\u5927\uFF0C\u9002\u5F53\u8C03\u6574canvas\u7684\u5BBD\u5EA6\u5373\u53EF\uFF0C\u4E0B\u9762\u770B\u4E00\u4E0B\u56FE\u7247\u52A0\u4E0A\u6C34\u5370\u540E\u7684\u6548\u679C

![\u52A0\u6C34\u5370\u540E](https://gitee.com/zclzone/res/raw/master/qs-zone/blob/img/E4jwsf_Aoraki_ZH-CN7776353328_1920x1080.png)

`,isRecommend:!0,isPublish:!0,createDate:"2021-06-24T18:46:19.000Z",updateDate:"2021-09-23T07:51:22.000Z"},{id:27,title:"\u524D\u7AEF&Vue\u5F00\u53D1vscode\u914D\u7F6E\u6307\u5357",author:"\u5F20\u4F20\u9F99",category:"\u5176\u4ED6",description:"\u81EA\u6211\u603B\u7ED3\u914D\u7F6E\u6781\u5C3D\u8BE6\u7EC6\u7684\u524D\u7AEF&Vue\u5F00\u53D1vscode\u914D\u7F6E",content:`\`\`\`json
{
  "workbench.startupEditor": "none", // \u4E0D\u663E\u793Avscode\u542F\u52A8\u6B22\u8FCE\u9875
  "workbench.editor.enablePreview": false, // \u6253\u5F00\u6587\u4EF6\u4E0D\u8986\u76D6
  "workbench.colorTheme": "One Monokai", // \u4E3B\u9898
  "workbench.iconTheme": "vscode-great-icons", // \u56FE\u6807
  "security.workspace.trust.untrustedFiles": "open", //\u59CB\u7EC8\u5141\u8BB8\u4E0D\u53D7\u4FE1\u4EFB\u7684\u6587\u4EF6\u5F15\u5165\u53D7\u4FE1\u4EFB\u7684\u5DE5\u4F5C\u533A\uFF0C\u800C\u4E0D\u663E\u793A\u63D0\u793A
  "terminal.integrated.tabs.enabled": true, // \u63A7\u5236\u7EC8\u7AEF\u9009\u9879\u5361\u663E\u793A\u4E3A\u4FA7\u8FB9\u5217\u8868
  "liveServer.settings.donotShowInfoMsg": true, // \u5E95\u90E8\u663E\u793Alive serve\u64CD\u4F5C\u4FE1\u606F\uFF0C\u9700\u5B89\u88C5live serve\u624D\u751F\u6548
  "editor.tabSize": 2,
  "editor.fontFamily": "Fira Code", // \u5B57\u4F53\u3002\u9700\u5B89\u88C5Fira Code\u5B57\u4F53\u624D\u751F\u6548
  "editor.fontLigatures": true, // \u4F7F\u7528\u53D8\u4F53\u8FDE\u4F53\u5B57
  "editor.fontSize": 16,
  "editor.fontWeight": 400,
  "editor.formatOnSave": true, // \u4FDD\u5B58\u7684\u65F6\u5019\u662F\u5426\u683C\u5F0F\u5316
  "editor.formatOnType": false, // \u5728\u952E\u5165\u4E00\u884C\u540E\u662F\u5426\u683C\u5F0F\u5316
  "editor.formatOnPaste": false, // \u5728\u7C98\u8D34\u65F6\u662F\u5426\u683C\u5F0F\u5316
  "javascript.format.semicolons": "remove", // \u53BB\u9664js\u7684\u5206\u53F7
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false, // \u8BA9\u51FD\u6570(\u540D)\u548C\u540E\u9762\u7684\u62EC\u53F7\u4E4B\u95F4\u52A0\u4E2A\u7A7A\u683C
  "typescript.format.semicolons": "remove", // \u5904\u7406ts\u7684\u5206\u53F7
  "typescript.format.insertSpaceBeforeFunctionParenthesis": false, // \u8BA9\u51FD\u6570(\u540D)\u548C\u540E\u9762\u7684\u62EC\u53F7\u4E4B\u95F4\u52A0\u4E2A\u7A7A\u683C
  /*
  * \u5728\u4E0D\u53D7\u652F\u6301\u7684\u8BED\u8A00\u4E0EEmmet\u652F\u6301\u7684\u8BED\u8A00\u4E4B\u95F4\u6DFB\u52A0\u6620\u5C04\uFF0C\u8868\u793A\u6309\u6620\u5C04\u7684\u8BED\u8A00\u5904\u7406\u4E0D\u53D7\u652F\u6301\u7684\u8BED\u8A00
  */
  "emmet.includeLanguages": {
    "vue": "html",
    "vue-html": "html",
    "wxml": "html"
  },
  /*
  * vetur\u683C\u5F0F\u5316
  */
  "vetur.format.defaultFormatter.html": "prettier",
  "vetur.format.defaultFormatter.css": "prettier",
  "vetur.format.defaultFormatter.postcss": "prettier",
  "vetur.format.defaultFormatter.scss": "prettier",
  "vetur.format.defaultFormatter.less": "prettier",
  "vetur.format.defaultFormatter.stylus": "stylus-supremacy",
  "vetur.format.defaultFormatter.js": "prettier",
  "vetur.format.defaultFormatter.ts": "prettier",
  "vetur.format.defaultFormatter.sass": "sass-formatter",
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      "singleQuote": true, // \u5355\u5F15\u53F7
      "semi": false, // \u53E5\u5C3E\u4E0D\u52A0;
      "arrowParens": "avoid", // allow paren-less arrow functions \u7BAD\u5934\u51FD\u6570\u7684\u53C2\u6570\u4F7F\u7528\u5706\u62EC\u53F7
      "htmlWhitespaceSensitivity": "ignore", //\u5FFD\u7565\u81EA\u95ED\u5408\u6807\u7B7E
      "trailingComma": "none", // \u5BF9\u8C61\u6700\u540E\u4E00\u4E2A\u5C5E\u6027\u662F\u5426\u52A0 (,) \u9017\u53F7
      // "eslintIntegration": true,
      // "end_with_newline": false, //\u662F\u5426\u5141\u8BB8\u4EE5\u6362\u884C\u7B26\u7ED3\u5C3E
    }
  }
}
/*
* eslint\u7684\u914D\u7F6E\uFF0C\u5F53eslint\u683C\u5F0F\u5316\u4E0Evscode\u548Cvetur\u683C\u5F0F\u5316\u51B2\u7A81\u65F6\u542F\u7528
* \u9700\u5728\u9879\u76EE\u6839\u8DEF\u5F84\u5EFA\u7ACB.vscode/settings.json\uFF0C\u5E76\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E

{
  "editor.formatOnSave": false, // \u53D6\u6D88\u4FDD\u5B58\u7684\u65F6\u5019\u81EA\u52A8\u683C\u5F0F\u5316
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue",
    "typescript",
    "typescriptreact"
  ],
  //\u6BCF\u6B21\u4FDD\u5B58\u7684\u65F6\u5019\u6309\u7167eslint\u683C\u5F0F\u8FDB\u884C\u4FEE\u590D
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
*/

\`\`\``,isRecommend:!1,isPublish:!1,createDate:"2021-06-17T11:18:19.000Z",updateDate:"2022-03-02T09:14:49.000Z"},{id:26,title:"\u524D\u7AEF\u7F13\u5B58\u7684\u7406\u89E3",author:"\u5F20\u4F20\u9F99",category:"Http",description:"\u8C08\u8C08\u524D\u7AEF\u7F13\u5B58\u7684\u7406\u89E3",content:`> \u80CC\u666F

\u516C\u53F8\u6709\u4E2Avue-cli3\u79FB\u52A8\u7AEFweb\u9879\u76EE\u53D1\u7248\u66F4\u65B0\u540E\u53D1\u73B0\u90E8\u5206\u7528\u6237\u624B\u673A\u5728\u9489\u9489\u5185\u7F6E\u6D4F\u89C8\u5668\u6253\u5F00\u51FA\u73B0\u4E86\u7F13\u5B58\uFF0C\u5C31\u662F\u9875\u9762\u4F9D\u7136\u663E\u793A\u66F4\u65B0\u524D\u7684\u5185\u5BB9

\u4E86\u89E3vue-cli\u9879\u76EE\u7684\u90FD\u77E5\u9053\uFF0C\u9879\u76EE\u6253\u5305\u4F7F\u7528\u7684\u662Fwebpack\uFF0C\u901A\u5E38webpack\u6253\u5305\u7684\u65F6\u5019\u662F\u4F1A\u7ED9\u6587\u4EF6\u52A0\u4E0A\u4E00\u4E32hash\u503C\u7684\uFF0C\u4E3A\u7684\u5C31\u662F\u9632\u6B62\u66F4\u65B0\u7684\u65F6\u5019\u51FA\u73B0\u6D4F\u89C8\u5668\u7F13\u5B58\u95EE\u9898

\u6211\u68C0\u67E5\u4E86\u4E00\u4E0Bwebpack\u7684\u914D\u7F6E\uFF0C\u4F7F\u7528\u7684\u662Fchunkhash\uFF0C\u5B83\u4F1A\u5206\u6790\u5165\u53E3\u6587\u4EF6\u7684\u4F9D\u8D56\uFF0C\u6784\u5EFA\u5BF9\u5E94\u7684chunk\uFF0C\u5E76\u751F\u6210\u5BF9\u5E94\u7684hash\u503C\uFF0C\u5982\u679C\u5165\u53E3\u6587\u4EF6\u53CA\u5176\u4F9D\u8D56\u6CA1\u6709\u53D1\u751F\u6539\u53D8\uFF0C\u5219\u751F\u6210\u7684hash\u503C\u4E5F\u4E0D\u4F1A\u53D8\uFF0C\u6362\u8A00\u4E4B\uFF0C\u5982\u679C\u53D1\u751F\u6539\u53D8\u5219hash\u503C\u5FC5\u7136\u4F1A\u968F\u4E4B\u6539\u53D8

\u63A5\u7740\u6211\u53C8\u68C0\u67E5\u4E86buid\u751F\u6210\u7684dist\u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6\uFF0C\u5BF9\u6BD4\u5386\u53F2\u7248\u672C\u7684\u6587\u4EF6\u53D1\u73B0\u786E\u5B9E\u6709\u90E8\u5206\u6587\u4EF6\u7684\u54C8\u5E0C\u503C\u5E76\u6CA1\u6709\u53D1\u751F\u6539\u53D8\uFF0C\u800C\u6B63\u597D\u4FEE\u6539\u8FC7\u7684\u6587\u4EF6\u7684\u54C8\u5E0C\u503C\u662F\u53D8\u5316\u4E86\u7684

so\uFF0C\u6392\u9664\u9879\u76EE\u6784\u5EFA\u7684\u95EE\u9898

\u63A5\u4E0B\u6765\u6211\u731C\u6D4B\u4F1A\u4E0D\u4F1A\u662F\u5165\u53E3\u6587\u4EF6index.html\u7684\u95EE\u9898\uFF0C\u7ECF\u8FC7\u68C0\u67E5\u6211\u53D1\u73B0\u4E09\u4E2A\u8DDF\u7F13\u5B58\u6709\u5173\u7CFB\u7684meta\u6807\u7B7E

\`\`\`html
<meta http-equiv="Expires" content="0">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-control" content="no-cache">
\`\`\`
\u4E09\u4E2A\u6807\u7B7E\u90FD\u662F\u7528\u4E8E\u63A7\u5236\u6D4F\u89C8\u5668\u7684\u5F3A\u5236\u7F13\u5B58\uFF0C\u8D77\u5230\u7684\u4F5C\u7528\u90FD\u662F\u4E00\u6837\u7684-\u7981\u7528\u6D4F\u89C8\u5668\u5F3A\u5236\u7F13\u5B58

### \u5F3A\u7F13\u5B58

Expires\uFF1A\u662Fhttp 1.0\u7684\u5199\u6CD5\uFF0C\u503C\u662F\u4E00\u4E2AGMT\u683C\u5F0F\u6216\u8005\u6570\u5B57\u683C\u5F0F\u7684\u65F6\u95F4\uFF0C\u4EE3\u8868\u7F13\u5B58\u5230\u671F\u7684\u65F6\u95F4\uFF0C\u5982\u679C\u503C\u662F\u6570\u5B57\u5219\u4EE3\u8868\u7F13\u5B58\u5269\u4F59\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u79D2\uFF0C0\u548C-1\u4EE3\u8868\u7684\u662F\u672C\u5730\u7F13\u5B580\u79D2\u5C31\u8FC7\u671F\u4E86

Pragma\uFF1A\u4E5F\u662Fhttp 1.0\uFF0C\u4E14\u53EA\u6709IE\u6D4F\u89C8\u5668\u624D\u80FD\u8BC6\u522B\uFF0C\u6709\u4EE5\u4E0B\u51E0\u4E2A\u503C
- no-cache\uFF1A\u8868\u793A\u7981\u6B62\u6D4F\u89C8\u5668\u8BFB\u53D6\u672C\u5730\u7F13\u5B58
- public\uFF1A\u6D4F\u89C8\u5668\u548C\u7F13\u5B58\u670D\u52A1\u5668\u90FD\u53EF\u4EE5\u7F13\u5B58\u9875\u9762\u4FE1\u606F
- no-store\uFF1A\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u4FE1\u606F\u90FD\u4E0D\u5E94\u8BE5\u88AB\u5B58\u50A8\u5728\u5BF9\u65B9\u7684\u78C1\u76D8\u7CFB\u7EDF\u4E2D\uFF1B
- must-revalidate\uFF1A\u5BF9\u4E8E\u5BA2\u6237\u673A\u7684\u6BCF\u6B21\u8BF7\u6C42\uFF0C\u4EE3\u7406\u670D\u52A1\u5668\u5FC5\u987B\u5411\u670D\u52A1\u5668\u9A8C\u8BC1\u7F13\u5B58\u662F\u5426\u8FC7\u65F6

Cache-control\uFF1A\u8FD9\u662Fhttp 1.1\u7684\u5B9E\u73B0\uFF0C\u5B83\u533A\u522B\u4E8EExpires\u7684\u662F\u6CA1\u6709\u91C7\u7528*\u5177\u4F53\u7684\u8FC7\u671F\u65F6\u95F4\u70B9*\u8FD9\u4E2A\u65B9\u5F0F\uFF0C\u800C\u662F\u91C7\u7528\u8FC7\u671F\u65F6\u957F\u6765\u63A7\u5236\u7F13\u5B58\uFF0C\u5BF9\u5E94\u7684\u5B57\u6BB5\u662Fmax-age,\u5355\u4F4D\u4E5F\u662F\u79D2
\`\`\`html
<meta http-equiv="Cache-control" content="max-age=3600">
\`\`\`
\u5B83\u8FD8\u6709\u522B\u7684\u5C5E\u6027\uFF1A
- private\uFF1A \u8868\u793A\u53EA\u6709\u6D4F\u89C8\u5668\u80FD\u7F13\u5B58\uFF0C\u4E2D\u95F4\u7684\u4EE3\u7406\u670D\u52A1\u5668\u4E0D\u80FD\u7F13\u5B58\u3002
- no-cache\uFF1A\u7981\u7528\u7F13\u5B58\uFF08\u8FD9\u51E0\u4E2A\u6807\u7B7E\u7684\u7981\u7528\u7F13\u5B58\u90FD\u662F\u6307\u8DF3\u8FC7\u5F53\u524D\u7684\u5F3A\u7F13\u5B58\uFF0C\u76F4\u63A5\u8FDB\u5165\u534F\u5546\u7F13\u5B58\uFF09
- no-store\uFF1A\u4E0D\u8FDB\u884C\u4EFB\u4F55\u5F62\u5F0F\u7684\u7F13\u5B58\u3002
- s-maxage\uFF1A\u8DDFmax-age\u5F88\u50CF\uFF0C\u4F46\u662F\u533A\u522B\u5728\u4E8Es-maxage\u662F\u9488\u5BF9\u4EE3\u7406\u670D\u52A1\u5668\u7684\u7F13\u5B58\u65F6\u95F4\u3002
- must-revalidate: \u5F53\u7F13\u5B58\u8FC7\u671F\u7684\u65F6\u5019\uFF0C\u5FC5\u987B\u56DE\u5230\u6E90\u670D\u52A1\u5668\u9A8C\u8BC1\u3002
  
\u6CE8\uFF1A\u5F53Expires\u548CCache-Control\u540C\u65F6\u5B58\u5728\u7684\u65F6\u5019\uFF0CCache-Control\u4F1A\u4F18\u5148\u8003\u8651\u3002

\u5F53\u5F3A\u7F13\u5B58\u5931\u6548\u6216\u88AB\u7981\u7528\u65F6\u5C31\u4F1A\u8FDB\u5165\u534F\u5546\u7F13\u5B58\u4E86

### \u534F\u5546\u7F13\u5B58

\u5F3A\u7F13\u5B58\u5931\u6548\u4E4B\u540E\uFF0C\u6D4F\u89C8\u5668\u5728\u8BF7\u6C42\u5934\u4E2D\u643A\u5E26\u76F8\u5E94\u7684\u7F13\u5B58tag\u6765\u5411\u670D\u52A1\u5668\u53D1\u8BF7\u6C42\uFF0C\u7531\u670D\u52A1\u5668\u6839\u636E\u8FD9\u4E2Atag\uFF0C\u6765\u51B3\u5B9A\u662F\u5426\u4F7F\u7528\u7F13\u5B58\uFF0C\u8FD9\u5C31\u662F\u534F\u5546\u7F13\u5B58

\u7F13\u5B58tag\u5206\u4E24\u79CD\uFF1ALast-Modified \u548C ETag

#### Last-Modified

\u6700\u540E\u4FEE\u6539\u65F6\u95F4\uFF0C\u6D4F\u89C8\u5668\u7B2C\u4E00\u6B21\u5411\u670D\u52A1\u5668\u8BF7\u6C42\u67D0\u4E2A\u8D44\u6E90\u65F6\uFF0C\u670D\u52A1\u5668\u4F1A\u5728\u54CD\u5E94\u5934\u4E2D\u52A0\u4E0A\u8FD9\u4E2A\u5B57\u6BB5

\u6D4F\u89C8\u5668\u63A5\u6536\u540E\u4F1A\u5728\u4E0B\u4E00\u6B21\u8BF7\u6C42\u7684\u65F6\u5019\u643A\u5E26If-Modified-Since\u5B57\u6BB5\uFF0C\u503C\u5C31\u662F\u4E0A\u4E00\u6B21\u8BF7\u6C42\u63A5\u6536\u5230\u7684\u6587\u4EF6\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4

\u670D\u52A1\u5668\u518D\u6839\u636E\u8BF7\u6C42\u5934\u4E2D\u7684If-Modified-Since\u7684\u503C\u548C\u670D\u52A1\u5668\u8BE5\u8D44\u6E90\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u5BF9\u6BD4\uFF0C\u5982\u679C\u8BE5\u8D44\u6E90\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u66F4\u5927\u5219\u8868\u793A\u4FEE\u6539\u66F4\u65B0\u4E86\uFF0C\u8FD4\u56DE\u65B0\u7684\u8D44\u6E90\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE304\u544A\u8BC9\u6D4F\u89C8\u5668\u8D44\u6E90\u6CA1\u6709\u66F4\u65B0\uFF0C\u76F4\u63A5\u4F7F\u7528\u7F13\u5B58\u5C31\u884C\u4E86

#### ETag

ETag \u662F\u670D\u52A1\u5668\u6839\u636E\u5F53\u524D\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u7ED9\u6587\u4EF6\u751F\u6210\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u53EA\u8981\u91CC\u9762\u7684\u5185\u5BB9\u6709\u6539\u52A8\uFF0C\u8FD9\u4E2A\u503C\u5C31\u4F1A\u53D8\uFF0C\u670D\u52A1\u5668\u901A\u8FC7\u54CD\u5E94\u5934\u628A\u8FD9\u4E2A\u503C\u7ED9\u6D4F\u89C8\u5668

\u6D4F\u89C8\u5668\u63A5\u6536\u5230ETag\u7684\u503C\uFF0C\u4F1A\u5728\u4E0B\u6B21\u8BF7\u6C42\u65F6\uFF0C\u5C06\u8FD9\u4E2A\u503C\u4F5C\u4E3AIf-None-Match\u8FD9\u4E2A\u5B57\u6BB5\u7684\u5185\u5BB9\uFF0C\u5E76\u653E\u5230\u8BF7\u6C42\u5934\u4E2D\uFF0C\u7136\u540E\u53D1\u7ED9\u670D\u52A1\u5668

\u670D\u52A1\u5668\u63A5\u6536\u5230If-None-Match\u540E\uFF0C\u4F1A\u8DDF\u670D\u52A1\u5668\u4E0A\u8BE5\u8D44\u6E90\u7684ETag\u8FDB\u884C\u6BD4\u5BF9\uFF0C\u5982\u679C\u4E24\u8005\u4E0D\u4E00\u6837\uFF0C\u8BF4\u660E\u8981\u66F4\u65B0\u4E86\uFF0C\u8FD4\u56DE\u65B0\u8D44\u6E90\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE304\u544A\u8BC9\u6D4F\u89C8\u5668\u8D44\u6E90\u6CA1\u6709\u66F4\u65B0\uFF0C\u76F4\u63A5\u4F7F\u7528\u7F13\u5B58\u5C31\u884C\u4E86

\u4E24\u8005\u5BF9\u6BD4

\u5728\u7CBE\u51C6\u5EA6\u4E0A\uFF0CETag\u4F18\u4E8ELast-Modified\u3002\u4F18\u4E8E ETag \u662F\u6309\u7167\u5185\u5BB9\u7ED9\u8D44\u6E90\u4E0A\u6807\u8BC6\uFF0C\u56E0\u6B64\u80FD\u51C6\u786E\u611F\u77E5\u8D44\u6E90\u7684\u53D8\u5316\u3002\u800C Last-Modified \u5C31\u4E0D\u4E00\u6837\u4E86\uFF0C\u5B83\u5728\u4E00\u4E9B\u7279\u6B8A\u7684\u60C5\u51B5\u5E76\u4E0D\u80FD\u51C6\u786E\u611F\u77E5\u8D44\u6E90\u53D8\u5316\uFF0C\u4E3B\u8981\u6709\u4E24\u79CD\u60C5\u51B5:

1. \u7F16\u8F91\u4E86\u8D44\u6E90\u6587\u4EF6\uFF0C\u4F46\u662F\u6587\u4EF6\u5185\u5BB9\u5E76\u6CA1\u6709\u66F4\u6539\uFF0C\u8FD9\u6837\u4E5F\u4F1A\u9020\u6210\u7F13\u5B58\u5931\u6548
2. Last-Modified \u80FD\u591F\u611F\u77E5\u7684\u5355\u4F4D\u65F6\u95F4\u662F\u79D2\uFF0C\u5982\u679C\u6587\u4EF6\u5728 1 \u79D2\u5185\u6539\u53D8\u4E86\u591A\u6B21\uFF0C\u90A3\u4E48\u8FD9\u65F6\u5019\u7684 Last-Modified \u5E76\u6CA1\u6709\u4F53\u73B0\u51FA\u4FEE\u6539\u4E86
3. \u5728\u6027\u80FD\u4E0A\uFF0CLast-Modified\u4F18\u4E8EETag\uFF0C\u4E5F\u5F88\u7B80\u5355\u7406\u89E3\uFF0CLast-Modified\u4EC5\u4EC5\u53EA\u662F\u8BB0\u5F55\u4E00\u4E2A\u65F6\u95F4\u70B9\uFF0C\u800C Etag\u9700\u8981\u6839\u636E\u6587\u4EF6\u7684\u5177\u4F53\u5185\u5BB9\u751F\u6210\u54C8\u5E0C\u503C

\u53E6\u5916\uFF0C\u5982\u679C\u4E24\u79CD\u65B9\u5F0F\u90FD\u652F\u6301\u7684\u8BDD\uFF0C\u670D\u52A1\u5668\u4F1A\u4F18\u5148\u8003\u8651ETag

\u8FD9\u4E9B\u90FD\u662F\u6211\u4E86\u89E3\u5230\u7684\u4E00\u4E9B\u7F13\u5B58\u77E5\u8BC6\uFF0C\u6240\u4EE5\u7A0B\u5E8F\u5E94\u8BE5\u662F\u76F4\u63A5\u8DF3\u8FC7\u5F3A\u7F13\u5B58\uFF0C\u8D70\u534F\u5546\u7F13\u5B58\u4E86

\u4F46\u5C31\u534F\u5546\u7F13\u5B58\u6765\u8BF4\uFF0C\u670D\u52A1\u5668\u8D44\u6E90\u4E0D\u7BA1\u662FLast-Modified\u8FD8\u662FEtag\u90FD\u53D1\u751F\u4E86\u6539\u53D8\uFF0C\u5F53\u6D4F\u89C8\u5668\u8BF7\u6C42\u7684\u65F6\u5019\u5FC5\u7136\u4F1A\u8FD4\u56DE\u6700\u65B0\u7684\u8D44\u6E90\uFF0C\u800C\u4E0D\u5E94\u8BE5\u51FA\u73B0\u7F13\u5B58\u7684\u60C5\u51B5

\u90A3\u4F1A\u4E0D\u4F1A\u662FNginx\u914D\u7F6E\u7684\u95EE\u9898\u5462\uFF0C\u6211\u53C2\u8003\u4E86\u8D44\u6599\uFF0CNginx\u662F\u6709\u7981\u7528\u6D4F\u89C8\u5668\u4E00\u5207\u7F13\u5B58\u7684\u914D\u7F6E\uFF0C\u5373\u4E0D\u7BA1\u4EC0\u4E48\u60C5\u51B5\u90FD\u4E0D\u8BA9\u6D4F\u89C8\u5668\u7F13\u5B58\u8D44\u6E90\uFF0C\u6BCF\u6B21\u8BF7\u6C42\u90FD\u662F\u4ECE\u670D\u52A1\u5668\u8FD4\u56DE\u6700\u65B0\u7684\u8D44\u6E90\uFF0C\u4F46\u662F\u76F4\u89C9\u544A\u8BC9\u6211\u8FD9\u5E76\u4E0D\u80FD\u89E3\u51B3\u95EE\u9898\uFF0C\u53CD\u800C\u4F1A\u56E0\u4E3A\u6CA1\u6709\u4F7F\u7528\u5230\u7F13\u5B58\u7B56\u7565\u52A0\u91CD\u670D\u52A1\u5668\u7684\u8D1F\u62C5

\`\`\`shell
location / {
  ...
  add_header Cache-Control "no-cache, no-store";  # \u7981\u7528\u6D4F\u89C8\u5668\u4E00\u5207\u7F13\u5B58
}
\`\`\`

\u914D\u7F6E\u4FEE\u6539\u5B8C\u5C31\u751F\u6548\u4E86\uFF0C\u53EF\u4EE5\u770B\u5230\u6BCF\u6B21\u5237\u65B0\u9875\u9762\u90FD\u662F\u8BF7\u6C42\u670D\u52A1\u5668\u83B7\u53D6\u8D44\u6E90\uFF0C\u4E0D\u518D\u4ECE\u7F13\u5B58\u91CC\u53D6\u6570\u636E\u4E86

\u4F46\u662F\u6B63\u5982\u6211\u9884\u6599\u7684\u90A3\u6837\uFF0C\u8FD9\u5E76\u6CA1\u6709\u89E3\u51B3\u90A3\u90E8\u5206\u7528\u6237\u7F13\u5B58\u7684\u95EE\u9898\uFF0C\u6240\u4EE5\u8FD8\u662F\u5C06\u914D\u7F6E\u8FD8\u539F\u5427

\u7531\u6B64\u65AD\u5B9A\uFF0C\u90A3\u90E8\u5206\u6709\u7F13\u5B58\u7684\u7528\u6237\uFF0C\u6253\u5F00\u9875\u9762\u65F6\u52A0\u8F7D\u9759\u6001\u8D44\u6E90\u5E76\u6CA1\u6709\u8BF7\u6C42\u670D\u52A1\u5668\uFF0C\u5F88\u6709\u53EF\u80FD\u662F\u624B\u673A\u6216\u8005\u9489\u9489\u9884\u52A0\u8F7D\u4E86\u9875\u9762\uFF0C\u6240\u6709\u9759\u6001\u8D44\u6E90\u5E76\u6CA1\u6709\u5728\u5185\u7F6E\u6D4F\u89C8\u5668\u4E2D\u53D1\u8D77\u8BF7\u6C42\uFF0C\u6211\u66F4\u503E\u5411\u4E8E\u90E8\u5206\u624B\u673A\u7684\u9489\u9489\u4F1A\u9884\u52A0\u8F7D\u7F51\u9875

\u540E\u9762\u7ECF\u8FC7\u786E\u8BA4\uFF0C\u786E\u5B9E\u662F\u534E\u4E3A\u624B\u673A\u7684\u9489\u9489\u624D\u6709\u6B64\u60C5\u51B5\uFF0C\u5E76\u4E14\u5237\u65B0\u540E\u5C31\u53EF\u4EE5\u663E\u793A\u66F4\u65B0\u7684\u5185\u5BB9\u4E86\uFF0C\u6709\u90E8\u5206\u7528\u6237\u901A\u8FC7\u624B\u673A\u7BA1\u5BB6\u6E05\u7406\u624B\u673A\u7F13\u5B58\u4E5F\u80FD\u89E3\u51B3\u95EE\u9898

\u7B2C\u4E8C\u5929\u5F00\u59CB\u6240\u6709\u7528\u6237\u90FD\u6CA1\u6709\u7F13\u5B58\u7684\u95EE\u9898\u4E86\uFF0C\u5E94\u8BE5\u662F\u9884\u52A0\u8F7D\u7684\u7F13\u5B58\u4E5F\u6709\u8FC7\u671F\u65F6\u95F4\u5427\uFF0C\u8FC7\u671F\u540E\u4F1A\u81EA\u52A8\u6E05\u7406\uFF0C\u6E05\u7406\u540E\u5C31\u4F1A\u91CD\u65B0\u8BF7\u6C42\u670D\u52A1\u5668\u4E86

\u6700\u540E\u5410\u69FD\u4E00\u70B9\uFF1A\u73B0\u5728\u5F88\u591A\u5B89\u5353\u624B\u673A\u90FD\u4F1A\u5BF9\u4E00\u4E9B\u4E3B\u6D41App\u8FDB\u884C\u4F18\u5316\uFF0C\u4F18\u5316\u65E0\u53EF\u539A\u975E\uFF0C\u4F18\u5316\u7528\u6237\u4F53\u9A8C\u5F88\u597D\uFF0C\u4F46\u662F\u8BF7\u4E0D\u8981\u8D1F\u4F18\u5316\uFF0C\u6700\u8D77\u7801\u4E00\u70B9\u4E0D\u8981\u7834\u574F\u89C4\u8303\uFF0C\u4E0D\u7136\u627Ebug\u548C\u517C\u5BB9\u7684\u65F6\u95F4\u53EF\u80FD\u90FD\u662F\u51E0\u500D\u4E8E\u5F00\u53D1\u65F6\u95F4\u4E86\uFF0C\u8FD9\u65E0\u7591\u4F1A\u7ED9\u5F00\u53D1\u9020\u6210\u5DE8\u5927\u7684\u8D1F\u62C5\uFF0C\u5C24\u5176\u662F\u534E\u4E3A\u7CFB\u5217\u7684\u624B\u673A\uFF0C\u4E00\u4E2A\u6708\u5185\u78B0\u5230\u4E24\u6B21\u534E\u4E3A\u5B89\u5353\u673A\u7684\u517C\u5BB9\u95EE\u9898\u4E86\uFF0C\u6709\u4E9B\u517C\u5BB9\u95EE\u9898\u7ECF\u8FC7\u7279\u6B8A\u5904\u7406\u8FD8\u80FD\u89E3\u51B3\uFF0C\u50CF\u8FD9\u6B21\u7684\u7F13\u5B58\u95EE\u9898\u57FA\u672C\u5C31\u662F\u65E0\u89E3\u4E86

\u6587\u7AE0\u53C2\u8003: [\u4E09\u5143\u535A\u5BA2\xB7\u8C08\u8C08\u524D\u7AEF\u7F13\u5B58](http://47.98.159.95/my_blog/blogs/perform/001.html)
`,isRecommend:!0,isPublish:!0,createDate:"2021-06-10T18:51:19.000Z",updateDate:"2021-09-17T09:33:24.000Z"},{id:24,title:"\u4F7F\u7528jQuery\u7684load\u65B9\u6CD5\u5E2E\u5973\u670B\u53CB\u5B9E\u73B0\u5957\u5A03Html",author:"\u5F20\u4F20\u9F99",category:"JavaScript",description:"\u6700\u8FD1\u5973\u670B\u53CB\u521A\u5165\u804C\u65B0\u516C\u53F8\uFF0C\u63A5\u5230\u7684\u7B2C\u4E00\u4E2A\u4EFB\u52A1\u5C31\u662F\u5C06\u4E00\u4E2A\u7F51\u7AD9\u6240\u6709\u7684\u9875\u9762\u5408\u5E76\u6210\u4E00\u4E2A\u9875\u9762",content:`\u6700\u8FD1\u5973\u670B\u53CB\u521A\u5165\u804C\u65B0\u516C\u53F8\uFF0C\u63A5\u5230\u7684\u7B2C\u4E00\u4E2A\u4EFB\u52A1\u5C31\u662F\u5C06\u4E00\u4E2A\u7F51\u7AD9\u6240\u6709\u7684\u9875\u9762\u5408\u5E76\u6210\u4E00\u4E2A\u9875\u9762

\u5973\u670B\u53CB\uFF1A\u6211\u63A5\u5230\u4E00\u4E2AjQuery\u9879\u76EE\uFF0C\u6709\u5927\u6982\u4E03\u516B\u4E2A\u9875\u9762\uFF0C\u597D\u5728\u662F\u9759\u6001\u9875\u9762\uFF0C\u5168\u90E8\u5408\u4E00\u8D77\u6E32\u67D3\u5C55\u793A\u6CA1\u6709\u591A\u5927\u95EE\u9898

\u6211\uFF1A\u633A\u7B80\u5355\u7684\u561B

\u5973\u670B\u53CB\uFF1A\u53BB\uFF0C\u867D\u7136\u4E0D\u96BE\uFF0C\u4F46\u662F\u6BCF\u4E00\u4E2A\u9875\u9762\u7684html\u4EE3\u7801\u90FD\u633A\u591A\u7684\uFF0C\u5168\u90E8\u5408\u4E00\u8D77\u592A\u75DB\u82E6\u4E86\uFF0C\u800C\u4E14\u4E5F\u4E0D\u65B9\u4FBF\u7EF4\u62A4

\u6211\uFF1A\u90A3\u5012\u662F\uFF0C\u82E6\u529B\u6D3B\u554A

\u5973\u670B\u53CB\uFF1A\u5982\u679C\u80FD\u50CFVue\u90A3\u6837\u7EC4\u4EF6\u5316\u5F15\u5165\u5C31\u592A\u597D\u4E86

\u6211\uFF1A\u8FD9\u53EF\u96BE\u4E86\uFF0C\u800C\u4E14\u73B0\u5728\u6539\u7528Vue\u5199\u4E5F\u6765\u4E0D\u53CA\u4E86\u554A...

\u8BF4\u5B8C\u6211\u7075\u673A\u4E00\u52A8\uFF0C\u60F3\u5230jQuery\u6709\u4E2Aload\u65B9\u6CD5\u597D\u50CF\u53EF\u4EE5\u5B9E\u73B0\uFF0C\u7ACB\u9A6C\u6539\u53E3

\u6211\uFF1A\u4E0D\u8FC7\u7528jQuery\u5E94\u8BE5\u4E5F\u53EF\u4EE5\uFF0C\u4F60\u770B...

> test1.html

\`\`\`html
<div>Html</div>
\`\`\`

> index.html

\`\`\`html
<div class="include" file="test1.html"></div>

<script>
  var forEach = Array.prototype.forEach

  function loadHtml() {
    var _includeEles = $(".include")
    forEach.call(_includeEles,function(ele,index) {
      var url = $(ele).attr("file")
      if(url){
        $(ele).load(url,function(html){
          // \u5C06\u52A0\u8F7D\u7684html\u5185\u5BB9\u653E\u5165\u5F53\u524Ddom\u7684\u540E\u9762\uFF0C\u7136\u540E\u5220\u9664\u5F53\u524Ddom\uFF0C\u76F8\u5F53\u4E8E\u5C06\u52A0\u8F7D\u7684\u5185\u5BB9\u66FF\u6362\u539F\u6765\u7684\u6807\u7B7E
          $(ele).after(html).remove()
        })
      }
    })
  }
  loadHtml()
<script>
\`\`\`

\u5973\u670B\u53CB\uFF1A\u592A\u68D2\u4E86\uFF0C\u6211\u8BD5\u4E00\u4E0B...

...

\u5973\u670B\u53CB\uFF1A\u4F60\u8FD9\u65B9\u6CD5\u7528\u662F\u597D\u7528\uFF0C\u5185\u5BB9\u5DF2\u7ECF\u52A0\u8F7D\u8FDB\u6765\u4E86\uFF0C\u4F46\u4E0D\u77E5\u9053\u4E3A\u4EC0\u4E48\u6211\u7684\u8F6E\u64AD\u56FE\u4E0D\u8D77\u4F5C\u7528\u4E86

\u6211\uFF1A\u662F\u4E0D\u662F\u4F60\u8F6E\u64AD\u56FE\u521D\u59CB\u5316\u7684\u987A\u5E8F\u4E0D\u5BF9

\u5973\u670B\u53CB\uFF1A\u521D\u59CB\u5316\u4EE3\u7801\u660E\u660E\u662F\u5728\u52A0\u8F7D\u4EE3\u7801\u4E4B\u540E\u6267\u884C\u7684\u5440

\u6211\u4E00\u770B\u8FD8\u771F\u662F\uFF0C\u539F\u6765jQuery\u7684load\u65B9\u6CD5\u662F\u5F02\u6B65\u6267\u884C\u7684\uFF0C\u521D\u59CB\u5316\u8F6E\u64AD\u56FE\u7684\u65F6\u5019load\u65B9\u6CD5\u8FD8\u6CA1\u7ED3\u675F\u5462\uFF0C\u8F6E\u64AD\u56FE\u81EA\u7136\u5C31\u4E0D\u8D77\u4F5C\u7528\u4E86

\u6211\uFF1A\u7B49\u7B49\uFF0C\u6211\u7ED9\u4F60\u52A0\u4E2A\u56DE\u8C03\u51FD\u6570

\`\`\`js
function loadHtml(cb) {
  var _includeEles = $(".include")
  var len = _includeEles
  forEach.call(_includeEles,function(ele,index){
    var url = $(ele).attr("file")
    if(url){
      $(ele).load(url,function(html){
        // \u5C06\u52A0\u8F7D\u7684html\u5185\u5BB9\u653E\u5165\u5F53\u524Ddom\u7684\u540E\u9762\uFF0C\u7136\u540E\u5220\u9664\u5F53\u524Ddom\uFF0C\u76F8\u5F53\u4E8E\u5C06\u52A0\u8F7D\u7684\u5185\u5BB9\u66FF\u6362\u539F\u6765\u7684\u6807\u7B7E
        $(ele).after(html).remove()
        // \u5FAA\u73AFload\u7ED3\u675F\u540E\u518D\u6267\u884C\u56DE\u8C03\u65B9\u6CD5cb
        if(index === len - 1) {
          cb()
        }
      })
    }else if(index === len - 1){
      cb()
    }
  })
}

loadHtml(function() {
  // \u5728\u6B64\u5904\u6267\u884C\u8F6E\u64AD\u56FE\u521D\u59CB\u5316
})
\`\`\`

\u95EE\u9898\u89E3\u51B3

...

\u7B2C\u4E8C\u5929\u5973\u670B\u53CB\u4E0B\u73ED\u56DE\u6765

\u5973\u670B\u53CB\uFF1A\u5982\u679C\u6211\u60F3\u5728\u5F15\u5165\u7684html\u4E2D\u518D\u5F15\u5165\u5176\u4ED6html\uFF0C\u53EF\u4EE5\u5417

\u6211\uFF1A\u554A\uFF0C\u8FD9\u4E0D\u662F\u5957\u5A03\u5417

\u5973\u670B\u53CB\uFF1A\u5BF9\u554A\uFF0C\u5C31\u662F\u5957\u5A03\u554A\uFF0C\u600E\u4E48\uFF0C\u4E0D\u559C\u6B22\u4E86\uFF1F

\u6211\uFF1Aa piece of cake\uFF0C\u9012\u5F52\u8D70\u8D77

\u8BF4\u505A\u5C31\u505A

\`\`\`js
/**
* @cb           \u56DE\u8C03\u51FD\u6570
* @invalidCount \u65E0\u6548\u5730\u5740\u6570
*/
function loadHtml(cb, invalidCount = 0) {
  var _includeEles = $(".include")
  var len = _includeEles.length
  // \u76F4\u5230\u6CA1\u6709.include\u6807\u7B7E\u6216\u8005\u6240\u6709\u7684.include\u6807\u7B7E\u90FD\u6CA1\u6709url\u65F6\u8FDB\u884C\u56DE\u8C03
  if (len === 0 || len === invalidCount) {
    cb()
    return
  }

  var forEach = Array.prototype.forEach
  forEach.call(_includeEles, function (ele, index) {
    var url = $(ele).attr("file")
    !url && invalidCount++
    if (url) {
      $(ele).load(url, function (html) {
        // \u5C06\u52A0\u8F7D\u7684html\u5185\u5BB9\u653E\u5165\u5F53\u524Ddom\u7684\u540E\u9762\uFF0C\u7136\u540E\u5220\u9664\u5F53\u524Ddom\uFF0C\u76F8\u5F53\u4E8E\u5C06\u52A0\u8F7D\u7684\u5185\u5BB9\u66FF\u6362\u539F\u6765\u7684\u6807\u7B7E
        $(ele).after(html).remove()
        // \u904D\u5386\u7ED3\u675F\u518D\u9012\u5F52\u52A0\u8F7D\u6587\u4EF6\u5185\u5BB9
        if (index === len - 1) {
          loadHtml(cb, invalidCount)
        }
      })
    } else if (index === len - 1) {
      loadHtml(cb, invalidCount)
    }
  })
}
loadHtml(function() {
  // do something
})
\`\`\`

\u5973\u670B\u53CB\u5FAE\u5FAE\u4E00\u7B11\uFF0C\u5B8C\u7F8E
`,isRecommend:!0,isPublish:!0,createDate:"2021-05-26T15:26:06.000Z",updateDate:"2021-09-17T09:33:24.000Z"},{id:23,title:"\u8BA1\u4E00\u6B21vant\u7EC4\u4EF6\u56FE\u7247\u4E0A\u4F20\u4F18\u5316\u53F2",author:"\u5F20\u4F20\u9F99",category:"JavaScript",description:"\u56FE\u7247\u6279\u91CF\u4E0A\u4F20\u3001\u56FE\u7247\u538B\u7F29\u3001\u524D\u7AEF\u4E0A\u4F20\u81F3OSS",content:`> \u80CC\u666F

\u9879\u76EE\u4F7F\u7528\u7684\u662Fvue-cli+vant\uFF0C\u5176\u4E2D\u6709\u4E2A\u56FE\u7247\u4E0A\u4F20\u529F\u80FD\uFF0C\u4E00\u5F00\u59CB\u4F7F\u7528\u7684\u662Fvant\u7684 Uploader \u7EC4\u4EF6

\u7EC4\u4EF6\u7528\u7740\u5F88\u65B9\u4FBF\uFF0C\u65E2\u53EF\u4EE5\u4E0A\u4F20\uFF0C\u53C8\u5C01\u88C5\u597D\u4E86\u56FE\u7247\u9884\u89C8\u529F\u80FD

\u4F46\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C\u5C31\u662F\u90E8\u5206\u5B89\u5353\u673A\u9650\u5236\u4E0D\u6B7B\u5355\u5F20\u4E0A\u4F20\uFF0C\u6279\u91CF\u4E0A\u4F20\u652F\u6301\u53C8\u4E0D\u597D\uFF0C\u597D\u5728\u6279\u91CF\u4E0A\u4F20\u7279\u6B8A\u5904\u7406\u4E00\u4E0B\u4E5F\u53EF\u4EE5\u4E86

\u9996\u5148\u5728\u7EC4\u4EF6\u4E2D\u6DFB\u52A0\u5C5E\u6027 multiple="true"\uFF0C\u7136\u540E\u5904\u7406after-read\u56DE\u8C03\u51FD\u6570\uFF0C\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u5224\u65AD\u4E0A\u4F20\u7684\u6587\u4EF6\u662F\u662F\u5426\u662F\u6570\u7EC4

\`\`\`js
// \u5904\u7406after-read\u51FD\u6570
handleAfterRead(file, detail){
  // \u5224\u65ADfile\u53C2\u6570\u662F\u5426\u662F\u6570\u7EC4
  if(Array.isArray(file)){
    //\u5FAA\u73AF\u8C03\u7528\u63A5\u53E3\u4E0A\u4F20
  }else {
    //\u8C03\u7528\u63A5\u53E3\u4E0A\u4F20
  }
}
\`\`\`

\u540E\u9762\u53D1\u73B0\u9650\u5236\u4E0D\u6B7B\u6587\u4EF6\u7C7B\u578B\u3001\u6570\u91CF\u3001\u5927\u5C0F\uFF0C\u6240\u4EE5\u9700\u8981\u5728after-read\u56DE\u8C03\u51FD\u6570\u518D\u6B21\u5224\u65AD

\`\`\`js
// \u5904\u7406after-read\u51FD\u6570
handleAfterRead(file, detail){
  // \u5224\u65ADfile\u53C2\u6570\u662F\u5426\u662F\u6570\u7EC4
  if(Array.isArray(file)){
    //\u9650\u5236\u4E00\u6B21\u53EA\u80FD\u4E0A\u4F209\u5F20
    if (file.length > 9) {
      console.log('\u4E00\u6B21\u6700\u591A\u4E0A\u4F209\u5F20\uFF0C\u8BF7\u5206\u6279\u6B21\u4E0A\u4F20\uFF01')
      return
    }

    //\u5FAA\u73AF\u8C03\u7528\u63A5\u53E3\u4E0A\u4F20
  }else {
    // \u9650\u5236\u53EA\u80FD\u4E0A\u4F20\u56FE\u7247\u7C7B\u578B\u6587\u4EF6
    if(!file.file.type.includes('image')){
      console.log('\u4E0A\u4F20\u5931\u8D25\uFF0C\u53EA\u80FD\u4E0A\u4F20\u7167\u7247\uFF01')
      return
    }
    // \u9650\u5236\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC710M
    if(!file.file.size >= 1024 * 1024 * 10){
      console.log('\u6587\u4EF6\u592A\u5927\uFF0C\u4E0D\u80FD\u8D85\u8FC710M\uFF01')
      return
    }

    //\u8C03\u7528\u63A5\u53E3\u4E0A\u4F20
  }
}
\`\`\`

\u52A0\u9650\u5236\u5F88\u987A\u5229\uFF0C\u4F46\u7D27\u63A5\u7740\u53E6\u4E00\u4E2A\u95EE\u9898\u53C8\u6765\u4E86\uFF0C\u90A3\u5C31\u662F\u867D\u7136\u52A0\u4E86\u4E0A\u4F20\u5355\u5F20\u56FE\u7247\u7684\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC710M\uFF0C\u4F46\u901A\u8FC7\u62CD\u7167\u4E0A\u4F20\u7684\u56FE\u7247\u666E\u904D\u90FD\u67093~5M

\u6240\u4EE5\u4E0A\u4F20\u7684\u901F\u5EA6\u5F88\u6162\uFF0C\u800C\u4E14\u5F88\u5BB9\u6613\u5C31\u4E0A\u4F20\u8D85\u65F6\u5BFC\u81F4\u63A5\u53E3\u62A5\u9519\u4E0A\u4F20\u5931\u8D25

\u540E\u9762\u51B3\u5B9A\u8C03\u7528\u63A5\u53E3\u4E0A\u4F20\u4E4B\u524D\u5148\u5BF9\u56FE\u7247\u8FDB\u884C\u538B\u7F29\uFF0C\u538B\u7F29\u4F7F\u7528vant\u63A8\u8350\u7684compressorjs\u63D2\u4EF6

\`\`\`shell
npm i compressorjs -S
\`\`\`

\`\`\`js
// \u5904\u7406after-read\u51FD\u6570
async handleAfterRead(file, detail){
  // \u5224\u65ADfile\u53C2\u6570\u662F\u5426\u662F\u6570\u7EC4
  if(Array.isArray(file)){
    //\u9650\u5236\u5224\u65AD
    
    //\u5FAA\u73AF\u538B\u7F29\u5904\u7406\u518D\u8C03\u7528\u63A5\u53E3\u4E0A\u4F20

    //\u5FAA\u73AF\u8C03\u7528\u63A5\u53E3\u4E0A\u4F20
  }else {
    // \u9650\u5236\u5224\u65AD
    
    //\u538B\u7F29\u5904\u7406
    const img = await compressor(file.file,0.2)

    //\u8C03\u7528\u63A5\u53E3\u4E0A\u4F20
  }
}

// \u538B\u7F29\u65B9\u6CD5
// \u5148\u5F15\u5165 compressorjs
import Compressor from 'compressorjs'
/**
* @ file \u6587\u4EF6
* @ quality \u56FE\u7247\u538B\u7F29\u8D28\u91CF
*/
function compressor(file,quality) {
  return new Promise(resolve => {
    new Compressor(file, {
      quality,
      success: resolve,
      error(err) {
        console.log(err.message)
      },
    })
  })
}
\`\`\`

\u81F3\u6B64\uFF0C\u56FE\u7247\u4E0A\u4F20\u7B97\u662F\u6CA1\u6709\u592A\u5927\u95EE\u9898\u4E86\uFF0C\u5728\u524D\u7AEF\u4E0A\u9762\u4E5F\u7B97\u662F\u5DEE\u4E0D\u591A\u4F18\u5316\u5230\u6781\u81F4\u4E86\uFF0C\u5269\u4E0B\u7684\u5C31\u662F\u63A5\u53E3\u7684\u95EE\u9898\u4E86\uFF0C\u5982\u63A5\u53E3\u4E0D\u7A33\u5B9A\uFF0C\u63A5\u53E3\u5904\u7406\u7F13\u6162\u7B49\u95EE\u9898...

\u6700\u540E\u518D\u4ECB\u7ECD\u4E00\u79CD\u524D\u7AEF\u76F4\u63A5\u4E0A\u4F20\u81F3\u963F\u91CC\u4E91OSS\u7684\u65B9\u6CD5

\u9996\u5148\u5B89\u88C5OSS\u7684npm\u5305

\`\`\`shell
npm i ali-oss -S
\`\`\`

\u5C01\u88C5OSS\uFF08src/utils/oss.js\uFF09

\`\`\`js
const OSS = require('ali-oss')
const OSSConfig = {
  uploadHost: 'https://XXXXXX.oss-cn-shenzhen.aliyuncs.com',
  folder: 'test/',
  region: 'oss-cn-shenzhen',
  accessKeyId: 'XXXXXXXXXXXXXXXXX',
  accessKeySecret: 'XXXXXXXXXXXXXXXXXXXXXXXX',
  bucket: 'XXXXX',
}
function uploadOSS(file){
  return new Promise(async (resolve, reject) => {
    const fileName = \`\${OSSConfig.folder}\${file.name}\`
    const client = new OSS({
      region: OSSConfig.region,
      accessKeyId: OSSConfig.accessKeyId,
      accessKeySecret: OSSConfig.accessKeySecret,
      bucket: OSSConfig.bucket,
    })
    const res = await client.multipartUpload(fileName, file)
    if (res.name) {
      resolve({
        // \u4E0A\u4F20\u7684\u6587\u4EF6\u540D
        fileName: file.name,
        url: \`\${OSSConfig.uploadHost}/\${fileName}\`
      })
    } else {
      reject('OSS\u4E0A\u4F20\u5931\u8D25')
    }
  })
}
export { uploadOSS }
\`\`\`

\u4F7F\u7528

\`\`\`js
import { uploadOSS } from '@/utils/oss'

const { fileName, url } = await uploadOSS(file)
\`\`\``,isRecommend:!0,isPublish:!0,createDate:"2021-05-24T11:28:41.000Z",updateDate:"2021-09-17T09:33:24.000Z"},{id:21,title:"git\u5B9E\u7528\u6307\u4EE4\uFF0C\u6301\u7EED\u66F4\u65B0...",author:"\u5F20\u4F20\u9F99",category:"Git",description:"git\u5B9E\u7528\u6307\u4EE4\uFF0C\u6301\u7EED\u66F4\u65B0...",content:`## \u5206\u652F

\`\`\`bash

# \u65B0\u5EFA\u5206\u652F
git branch [branch-name]

# \u5207\u6362\u5206\u652F
git checkout [branch-name]

# \u65B0\u5EFA\u5E76\u5207\u6362\u5230\u65B0\u5EFA\u5206\u652F
git checkout -b [branch-name]

# \u67E5\u770B\u672C\u5730\u5206\u652F\uFF1A
git branch

# \u67E5\u770B\u6240\u6709\u5206\u652F\uFF08\u542B\u8FDC\u7A0B\u5206\u652F\uFF09
git branch -a

# \u67E5\u770B\u8FDC\u7A0B\u5206\u652F
git branch -r

# \u5220\u9664\u672C\u5730\u5206\u652F
git branch -D [branch-name]

# \u5220\u9664\u672C\u5730\u7684\u8FDC\u7A0B\u5206\u652F
git branch -r -D [remote-name]/[branch-name]

# \u5220\u9664\u8FDC\u7A0B\u5206\u652F
git push [remote-name] -d [branch-name]

# \u53D6\u6D88\u5408\u5E76
git merge --abort

\`\`\`
`,isRecommend:!1,isPublish:!1,createDate:"2021-05-13T12:19:31.000Z",updateDate:"2022-03-02T09:19:10.000Z"},{id:20,title:"web\u5E38\u7528\u539F\u7406\u77E5\u8BC6\u70B9",author:"\u5F20\u4F20\u9F99",category:"Web",description:"web\u5E38\u7528\u539F\u7406\u77E5\u8BC6\u70B9",content:`# 1. \u6D4F\u89C8\u5668\u7684\u6E32\u67D3\u8FC7\u7A0B
> \u6E32\u67D3\u5F15\u64CE\u9996\u5148\u901A\u8FC7\u7F51\u7EDC\u83B7\u5F97\u6240\u8BF7\u6C42\u6587\u6863\u7684\u5185\u5BB9
1. \u89E3\u6790html\u4E3ADOM\u6811\uFF0C\u89E3\u6790Css\u6784\u5EFACss\u6811\uFF0C\u5E76\u5C06\u6807\u7B7E\u8F6C\u5316\u4E3A\u5185\u5BB9\u6811\u79CD\u7684DOM\u8282\u70B9\u3002
2. \u628ADOM\u6811\u548CCss\u6811\u6574\u5408\u8D77\u6765\u751F\u6210\u6E32\u67D3\u6811\u3002
3. \u6E32\u67D3\u6811\u6784\u5EFA\u597D\u4E4B\u540E\u4F1A\u6267\u884C\u5E03\u5C40\u8FC7\u7A0B\uFF0C\u5B83\u5C06\u786E\u5B9A\u6BCF\u4E2A\u8282\u70B9\u5728\u5C4F\u5E55\u4E0A\u7684\u786E\u5207\u5750\u6807\u3002
4. \u5C06\u6E32\u67D3\u6811\u7ED8\u5236\u5230\u5C4F\u5E55\u4E0A\u3002\u904D\u5386\u6E32\u67D3\u6811\uFF0C\u4F7F\u7528UI\u540E\u7AEF\u5C42\u7ED8\u5236\u6BCF\u4E00\u4E2A\u8282\u70B9\u3002


# 2. HTTP\u62A5\u6587\u7EC4\u6210\u90E8\u5206
1. \u8BF7\u6C42\u62A5\u6587\uFF1A \u8BF7\u6C42\u884C\u3001\u8BF7\u6C42\u5934\u3001\u7A7A\u884C\u3001\u8BF7\u6C42\u4F53
2. \u54CD\u5E94\u62A5\u6587\uFF1A \u72B6\u6001\u884C\u3001\u54CD\u5E94\u5934\u3001\u7A7A\u884C\u3001\u54CD\u5E94\u4F53

> \u8BF7\u6C42\u62A5\u6587
1. \u8BF7\u6C42\u884C\uFF1A Http\u65B9\u6CD5\u3001\u8BF7\u6C42\u5730\u5740\u3001Http\u534F\u8BAE\u548C\u7248\u672C
2. \u8BF7\u6C42\u5934\uFF1Akey-value\u503C\uFF0C\u544A\u8BC9\u670D\u52A1\u7AEF\u9700\u8981\u7684\u5185\u5BB9
3. \u7A7A\u884C\uFF1A\u544A\u8BC9\u670D\u52A1\u7AEF\u4EE5\u4E0B\u5185\u5BB9\u4E3A\u8BF7\u6C42\u4F53
4. \u8BF7\u6C42\u4F53\uFF1A\u6570\u636E\u90E8\u5206

> \u54CD\u5E94\u62A5\u6587
1. \u72B6\u6001\u884C\uFF1AHttp\u7248\u672C\u3001\u54CD\u5E94\u72B6\u6001\u7801\u3001\u72B6\u6001\u7801\u7684\u6587\u672C\u63CF\u8FF0
2. \u54CD\u5E94\u5934(Response Header)
3. \u7A7A\u884C\uFF1A\u544A\u8BC9\u670D\u52A1\u7AEF\u4EE5\u4E0B\u5185\u5BB9\u4E3A\u54CD\u5E94\u5185\u5BB9
4. \u54CD\u5E94\u4F53\uFF1A\u54CD\u5E94\u7684\u6570\u636E

# 3. \u4EC0\u4E48\u662F\u6784\u9020\u51FD\u6570
> \u6784\u9020\u51FD\u6570\u7684\u672C\u8D28\u662F\u4E00\u4E2A\u666E\u901A\u51FD\u6570\uFF0C\u5B83\u7684\u7279\u70B9\u662F\u901A\u8FC7new\u5173\u952E\u5B57\u6765\u8C03\u7528\uFF0C\u7528\u6765\u521B\u5EFA\u5BF9\u8C61\u7684\u5B9E\u4F8B

# 4. \u4EC0\u4E48\u662F\u539F\u578B\u548C\u539F\u578B\u94FE
\u539F\u578B\u6A21\u5F0F\u662FJS\u5B9E\u73B0\u7EE7\u627F\u7684\u4E00\u79CD\u65B9\u5F0F\u3002\u6240\u6709\u7684\u51FD\u6570\u90FD\u6709\u4E00\u4E2Aprototype\u5C5E\u6027\uFF0C\u901A\u8FC7new\u751F\u6210\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0Cprototype\u4F1A\u5B9E\u4F8B\u5316\u4E3A\u5BF9\u8C61\u7684\u5C5E\u6027\u3002\u6240\u6709\u7684\u5F15\u7528\u7C7B\u578B\u90FD\u6709\u4E00\u4E2A__proto__\u6307\u5411\u5176\u6784\u9020\u51FD\u6570\u7684prototype\u3002
\u539F\u578B\u94FE\u7684\u8BDD\uFF0C\u6307\u7684\u5C31\u662F\u5F53\u8BBF\u95EE\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\u65F6\uFF0C\u5982\u679C\u672C\u8EAB\u6CA1\u6709\u8FD9\u4E2A\u5C5E\u6027\u6216\u65B9\u6CD5\uFF0C\u5C31\u4F1A\u901A\u8FC7__proto__\u5C5E\u6027\u5728\u7236\u7EA7\u7684\u539F\u578B\u4E2D\u627E\uFF0C\u4E00\u7EA7\u4E00\u7EA7\u5F80\u4E0A\u627E\uFF0C\u76F4\u5230\u6700\u9876\u5C42\u4E3A\u6B62\u3002
> \u6CE8\uFF1A\u539F\u578B\u94FE\u6700\u9876\u5C42\u662FObject\uFF0C\u5B83\u7684prototype\u7684__proto__\u6307\u5411\u4E3Anulll

# 5. \u5982\u4F55\u7406\u89E3constructor\u5C5E\u6027
\u6240\u6709\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u90FD\u6709\u4E00\u4E2Aconstructor\u5C5E\u6027\u6307\u5411\u51FD\u6570\u672C\u8EAB
\`\`\`js
[].__proto__.constructor    // Array() { [native code] }

\`\`\`

# 6. new\u64CD\u4F5C\u7B26\u7684\u6267\u884C\u8FC7\u7A0B
1. \u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61
2. \u5C06\u8FD9\u4E2A\u7A7A\u5BF9\u8C61\u7684__proto__\u6307\u5411\u6784\u9020\u51FD\u6570\u7684prototype
3. \u5C06\u6784\u9020\u51FD\u6570\u7684this\u6307\u5411\u8FD9\u4E2A\u5BF9\u8C61
4. \u6267\u884C\u8FD9\u4E2A\u6784\u9020\u51FD\u6570\u7684\u4EE3\u7801

# 7. \u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u53D8\u91CF\u662F\u4E0D\u662F\u6570\u7EC4\u7C7B\u578B
\u6700\u5B8C\u7F8E\u7684\u65B9\u6CD5\uFF1AtoString Object.prototype.toString.call([])  
\u6216\u8005\u4E5F\u53EF\u4EE5\u4F7F\u7528instanceof\u65B9\u6CD5\u6216\u8005constructor\u5C5E\u6027
\`\`\`js
Object.prototype.toString.call([])  // [object Object]
[] instanceof Array //true
[].constructor === Array  //true
\`\`\``,isRecommend:!1,isPublish:!1,createDate:"2021-03-19T16:17:52.000Z",updateDate:"2022-03-02T09:19:08.000Z"},{id:19,title:"Vue\u539F\u7406\u77E5\u8BC6\u70B9",author:"\u5F20\u4F20\u9F99",category:"Vue",description:"Vue\u539F\u7406\u77E5\u8BC6\u70B9",content:`### 1. Vue\u7684\u53CC\u5411\u7ED1\u5B9A\u539F\u7406\uFF0C\u8BF7\u624B\u52A8\u5199\u4E00\u4E2A\u6570\u636E\u7ED1\u5B9A
\u6838\u5FC3\u662F\u5229\u7528ES5\u7684Object.defineProperty\u5B9E\u73B0\u6570\u636E\u52AB\u6301\uFF0C\u5728getter\u4E2D\u6536\u96C6\u4F9D\u8D56\uFF0C\u5728setter\u4E2D\u6D3E\u53D1\u66F4\u65B0

\u624B\u5199\u4E00\u4E2A\u6570\u636E\u7ED1\u5B9A
\`\`\`html
<h3 id="text"></h3>
<input id="input" type="text" />

<script>
  let text = document.getElementById("text");
  let input = document.getElementById("input");
  let data = { value: "" };
  Object.defineProperty(data, "value", {
    set: function(val) {
      text.innerHTML = val;
      input.value = val;
    },
    get: function() {
      return input.value;
    }
  });
  input.onkeyup = function(e) {
    data.value = e.target.value;
  }
<\/script>
\`\`\`

### 2. Vue \u9879\u76EE\u65F6\u4E3A\u4EC0\u4E48\u8981\u5728\u5217\u8868\u7EC4\u4EF6\u4E2D\u5199 key\uFF0C\u5176\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F
Vue\u9879\u76EE\u4E2D\u4F7F\u7528\u7684\u662F\u865A\u62DFDom\uFF0C\u5229\u7528diff\u7B97\u6CD5\u6BD4\u5BF9\u865A\u62DF\u8282\u70B9\u7684\u53D8\u5316\uFF0C\u5217\u8868\u7EC4\u4EF6\u4E2D\u4F7F\u7528key\u662F\u4E3A\u4E86\u63D0\u5347diff\uFF08\u540C\u7EA7\u6BD4\u8F83\uFF09\u7684\u6548\u7387\uFF0C\u76F8\u5F53\u4E8E\u7ED9\u6BCF\u4E00\u9879\u589E\u52A0\u4E00\u4E2A\u552F\u4E00\u7D22\u5F15\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5F88\u6E05\u695A\u7684\u77E5\u9053\u6BCF\u4E00\u4E2A\u5217\u8868\u7684\u53D8\u5316\uFF0C\u5982\u679C\u4E0D\u52A0key\u7684\u8BDD\u5C31\u53EA\u80FD\u4E00\u4E2A\u4E2A\u5BF9\u6BD4\u4E86\uFF0C\u800C\u4E14\u5BB9\u6613\u5BFC\u81F4\u5217\u8868\u72B6\u6001\u66F4\u65B0\u9519\u4E71\u95EE\u9898\u3002

### 3. \u4E3A\u4EC0\u4E48 Vuex \u7684 mutation \u4E2D\u4E0D\u80FD\u505A\u5F02\u6B65\u64CD\u4F5C\uFF1F
\u56E0\u4E3A\u4FEE\u6539state\u7684\u51FD\u6570\u5FC5\u987B\u662F\u7EAF\u51FD\u6570\uFF0C\u5373\u662F\u7EDF\u4E00\u8F93\u5165\u5C31\u4F1A\u7EDF\u4E00\u8F93\u51FA\uFF0C\u6CA1\u6709\u4EFB\u4F55\u526F\u4F5C\u7528\uFF0C\u5982\u679C\u662F\u5F02\u6B65\u7684\u8BDD\u5219\u4F1A\u5BFC\u81F4state\u7684\u4FEE\u6539\u4E0D\u53EF\u9884\u6D4B

### 4. \u5728Vue\u4E2D\uFF0C\u5B50\u7EC4\u4EF6\u4E3A\u4EC0\u4E48\u4E0D\u53EF\u4EE5\u4FEE\u6539\u7236\u7EC4\u4EF6\u4F20\u9012\u7684Prop\uFF1F
\u4E3A\u4E86\u4FDD\u8BC1\u6570\u636E\u7684\u5355\u5411\u6D41\u52A8\uFF0C\u9632\u6B62\u4ECE\u5B50\u7EC4\u4EF6\u610F\u5916\u53D8\u66F4\u7236\u7EA7\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u4ECE\u800C\u5BFC\u81F4\u4F60\u7684\u5E94\u7528\u7684\u6570\u636E\u6D41\u5411\u96BE\u4EE5\u7406\u89E3\uFF0C\u8FD9\u6837\u505A\u4E5F\u4FBF\u4E8E\u5BF9\u6570\u636E\u8FDB\u884C\u8FFD\u8E2A\uFF0C\u907F\u514D\u6570\u636E\u6DF7\u4E71\u3002

### 5. Vue\u7684\u54CD\u5E94\u5F0F\u539F\u7406\u4E2DObject.defineProperty\u6709\u4EC0\u4E48\u7F3A\u9677\uFF1F
Object.defineProperty\u65E0\u6CD5\u76D1\u63A7\u5230\u6570\u7EC4\u4E0B\u6807\u7684\u53D8\u5316\uFF0C\u5BFC\u81F4\u76F4\u63A5\u901A\u8FC7\u4E0B\u6807\u4FEE\u6539\u6570\u7EC4\u503C\u4E0D\u80FD\u5B9E\u65F6\u54CD\u5E94
\u5728Vue3.0\u4E2D\u5F03\u7528\u4E86Object.defineProperty\uFF0C\u91C7\u7528Proxy\u52AB\u6301\u6574\u4E2A\u5BF9\u8C61\uFF0C\u670913\u79CD\u52AB\u6301\u64CD\u4F5C\uFF0C\u89E3\u51B3\u4E86\u8FD9\u4E2A\u95EE\u9898

### 6. Vue\u7684\u7236\u7EC4\u4EF6\u548C\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u94A9\u5B50\u6267\u884C\u987A\u5E8F\u662F\u4EC0\u4E48\uFF1F

\u52A0\u8F7D\u6E32\u67D3\u8FC7\u7A0B\uFF1A
1. \u7236 beforeCreate
2. \u7236 created
3. \u7236 beforeMount
4. \u5B50 beforeCreate
5. \u5B50 cerated
6. \u5B50 beforeMount
7. \u5B50 mounted
8. \u7236 mounted

\u5B50\u7EC4\u4EF6\u66F4\u65B0\u8FC7\u7A0B\uFF1A
1. \u7236 beforeUpdate
2. \u5B50 beforeUpdate
3. \u5B50 updated
4. \u7236 updated

\u7236\u7EC4\u4EF6\u66F4\u65B0\u8FC7\u7A0B\uFF1A
1. \u7236 beforeUpdate
2. \u7236 updated

\u9500\u6BC1\u8FC7\u7A0B\uFF1A
1. \u7236 beforeDestroy
2. \u5B50 beforeDestroy
3. \u5B50 destroyed
3. \u7236 destroyed

### 7. Vue\u662F\u5982\u4F55\u5BF9\u6570\u7EC4\u65B9\u6CD5\u8FDB\u884C\u53D8\u5F02\u7684\uFF1F

1. \u4E3A\u4EC0\u4E48\u8981\u5BF9\u6570\u7EC4\u8FDB\u884C\u5355\u72EC\u5904\u7406

\u5728Vue2.x\u4E2D\uFF0C\u901A\u8FC7Object.defineProperty\u52AB\u6301\u6570\u636E\u5904\u7406\u54CD\u5E94\u5F0F\uFF0C\u4F46\u8FD9\u4E2A\u65B9\u6CD5\u5E76\u4E0D\u80FD\u76D1\u542C\u5230\u6570\u7EC4\u5185\u7684\u53D8\u5316\uFF0C\u6240\u4EE5\u9700\u8981\u5BF9\u8FD9\u4E9B\u6570\u7EC4\u64CD\u4F5C\u8FDB\u884Chack\uFF0C\u8BA9vue\u80FD\u76D1\u542C\u5230\u5176\u4E2D\u7684\u53D8\u5316\u3002

2. \u600E\u4E48\u5904\u7406\u7684

\u7B80\u5355\u6765\u8BB2\u5C31\u662F\u91CD\u5199\u4E86\u6570\u7EC4\u7684\u90A3\u4E9B\u65B9\u6CD5\uFF0C\u9996\u5148\u83B7\u53D6\u5230\u8FD9\u4E2A\u6570\u7EC4\u7684_ob_\uFF0C\u4E5F\u5C31\u662F\u5B83\u7684Observe\u5BF9\u8C61\uFF0C\u5982\u679C\u6709\u65B0\u7684\u503C\u5C31\u8C03\u7528observeArray\u7EE7\u7EED\u5BF9\u65B0\u7684\u503C\u89C2\u5BDF\u53D8\u5316\uFF0C\u7136\u540E\u624B\u52A8\u8C03\u7528notify\uFF0C\u901A\u77E5watcher\u6267\u884Cupdate

### 8. Vue nextTick\u7684\u539F\u7406

nextTick\u4F7F\u7528\u573A\u666F\uFF1A

1. \u5728Vue\u7684created\u94A9\u5B50\u51FD\u6570\u4E2D\u8FDB\u884CDOM\u64CD\u4F5C\u4E00\u5B9A\u8981\u653E\u5230Vue.nextTick()\u7684\u56DE\u8C03\u51FD\u6570\u4E2D
2. \u5728\u6570\u636E\u53D8\u5316\u540E\u8981\u6267\u884C\u67D0\u4E2A\u64CD\u4F5C\uFF0C\u800C\u8FD9\u4E2A\u64CD\u4F5C\u9700\u8981\u7528\u5230\u968F\u6570\u636E\u53D8\u5316\u800C\u6539\u53D8\u7684DOM\u7ED3\u6784\u65F6\uFF0C\u8FD9\u4E2A\u64CD\u4F5C\u9700\u8981\u653E\u5230Vue.nextTick()\u7684\u56DE\u8C03\u51FD\u6570\u4E2D

\u4F7F\u7528\u539F\u56E0\uFF1A

> Vue\u6267\u884CDOM\u66F4\u65B0\u662F\u5F02\u6B65\u7684\u3002\u53EA\u8981\u89C2\u5BDF\u5230\u6570\u636E\u53D8\u5316\uFF0CVue\u5C06\u5F00\u542F\u4E00\u4E2A\u961F\u5217\uFF0C\u5E76\u7F13\u51B2\u5728\u540C\u4E00\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u53D1\u751F\u7684\u6240\u6709\u6570\u636E\u6539\u53D8\uFF0C\u5982\u679C\u540C\u4E00\u4E2Awatcher\u88AB\u591A\u6B21\u89E6\u53D1\uFF0C\u5219\u53EA\u4F1A\u88AB\u52A0\u5165\u961F\u5217\u4E2D\u4E00\u6B21\uFF0C\u4EE5\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u8BA1\u7B97\u548C DOM \u64CD\u4F5C\u3002\u7136\u540E\u5728\u4E0B\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF\u201Ctick\u201D\u4E2D,Vue\u5237\u65B0\u961F\u5217\u5E76\u6267\u884C\u5B9E\u9645\uFF08\u5DF2\u53BB\u91CD\uFF09\u5DE5\u4F5C\u3002

### 9. Vue \u4E2D\u7684 computed \u662F\u5982\u4F55\u5B9E\u73B0\u7684

\u672C\u8D28\u5C31\u662F\u4E00\u4E2A\u60F0\u6027\u7684watcher\uFF0C\u5728\u53D6\u503C\u7684\u65F6\u5019\u6839\u636E\u81EA\u8EAB\u6807\u8BB0dirty\u5C5E\u6027\u8FD4\u56DE\u4E0A\u4E00\u6B21\u8BA1\u7B97\u7ED3\u679C\u6216\u8005\u91CD\u65B0\u8BA1\u7B97\u503C\uFF0C\u521B\u5EFA\u65F6\u4F1A\u6267\u884C\u4E00\u6B21\u53D6\u503C\u64CD\u4F5C\uFF0C\u5E76\u6536\u96C6\u4F9D\u8D56\u53D8\u52A8\u7684\u5BF9\u8C61\u548C\u5C5E\u6027\uFF0C\u5728\u4F9D\u8D56\u7684\u5BF9\u8C61\u6216\u5C5E\u6027\u53D8\u52A8\u65F6\uFF0C\u4EC5\u5C06\u81EA\u8EAB\u6807\u8BB0dirty\u8BBE\u7F6E\u6210true

### 10. Vue \u4E2D\u7684 computed \u548C watch \u7684\u533A\u522B\u5728\u54EA\u91CC
computed: \u8BA1\u7B97\u5C5E\u6027

\u8BA1\u7B97\u5C5E\u6027\u662F\u7531data\u4E2D\u5DF2\u77E5\u7684\u503C\u5F97\u5230\u4E00\u4E2A\u65B0\u7684\u503C\uFF0C\u8FD9\u4E2A\u65B0\u503C\u4F1A\u6839\u636E\u8BA1\u7B97\u5C5E\u6027\u4F9D\u8D56\u7684\u5DF2\u77E5\u503C\u7684\u53D8\u5316\u800C\u53D8\u5316\uFF0C\u5176\u4ED6\u4E0D\u76F8\u5173\u6570\u636E\u7684\u53D8\u5316\u4E0D\u4F1A\u5F71\u54CD\u8BE5\u65B0\u503C\u3002

watch\uFF1A\u6570\u636E\u76D1\u542C

\u76D1\u542Cdata\u4E2D\u6570\u636E\u7684\u53D8\u5316\uFF0C\u6839\u636E\u76D1\u542C\u7684\u53D8\u5316\u6267\u884C\u4E00\u4E9B\u64CD\u4F5C

watch\u64C5\u957F\u5904\u7406\u7684\u573A\u666F\uFF1A\u4E00\u4E2A\u6570\u636E\u5F71\u54CD\u591A\u4E2A\u522B\u7684\u6570\u636E

computed\u64C5\u957F\u5904\u7406\u7684\u573A\u666F\uFF1A\u591A\u4E2A\u6570\u636E\u5F71\u54CD\u4E00\u4E2A\u6570\u636E

### 11. v-if\u3001v-show\u3001v-html\u7684\u539F\u7406
v-if\u4F1A\u8C03\u7528addIfCondition\u65B9\u6CD5\uFF0C\u751F\u6210vnode\u7684\u65F6\u5019\u4F1A\u5FFD\u7565\u5BF9\u5E94\u8282\u70B9\uFF0Crender\u7684\u65F6\u5019\u5C31\u4E0D\u4F1A\u6E32\u67D3\u3002
v-show\u4F1A\u751F\u6210vnode\uFF0Crender\u7684\u65F6\u5019\u4E5F\u4F1A\u6E32\u67D3\u6210\u771F\u5B9E\u7684\u8282\u70B9\uFF0C\u53EA\u662F\u5728render\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u5728\u8282\u70B9\u7684\u5C5E\u6027\u4E2D\u4FEE\u6539display\u5C5E\u6027\u503C\u3002
v-html\u4F1A\u5148\u79FB\u9664\u8282\u70B9\u4E0B\u7684\u6240\u6709\u8282\u70B9\uFF0C\u8C03\u7528html\u65B9\u6CD5\uFF0C\u901A\u8FC7addProp\u6DFB\u52A0innerHTML\u5C5E\u6027\uFF0C\u5F52\u6839\u7ED3\u5E95\u8FD8\u662F\u8BBE\u7F6EinnerHTML\u4E3Av-html\u7684\u503C\u3002
`,isRecommend:!0,isPublish:!0,createDate:"2021-02-24T16:55:27.000Z",updateDate:"2022-03-02T09:20:44.000Z"},{id:18,title:"Promise\u7684\u4E94\u4E2A\u9759\u6001\u65B9\u6CD5",author:"\u5F20\u4F20\u9F99",category:"JavaScript",description:"\u7B80\u5355\u4ECB\u7ECD\u4E0B\u5728 Promise \u7C7B\u4E2D\uFF0C\u67095 \u79CD\u9759\u6001\u65B9\u6CD5\u53CA\u5B83\u4EEC\u7684\u4F7F\u7528\u573A\u666F",content:`## 1. Promise.all

\u5E76\u884C\u6267\u884C\u591A\u4E2A promise\uFF0C\u5E76\u7B49\u5F85\u6240\u6709 promise \u90FD\u51C6\u5907\u5C31\u7EEA\u3002\u518D\u5BF9\u5B83\u4EEC\u8FDB\u884C\u5904\u7406\u3002\u8FD9\u5C31\u662F \`Promise.all\` \u7684\u7528\u9014\u3002

\u8BED\u6CD5\uFF1A

\`\`\`js
let promise = Promise.all([...promises...])
\`\`\`

\`Promise.all\`\u63A5\u53D7\u4E00\u4E2Apromise\u6570\u7EC4\u4F5C\u4E3A\u53C2\u6570\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684promise\u3002\u53EA\u6709\u5F53\u6240\u6709\u7ED9\u5B9A\u7684promise\u90FD\u88ABsettled\u65F6\uFF0C\u65B0\u7684promise\u624D\u4F1Aresolve\uFF0C\u5E76\u4E14\u5176\u7ED3\u679C\u6570\u7EC4\u5C06\u6210\u4E3A\u65B0\u7684promise\u7684\u7ED3\u679C\u3002

> \u6CE8\u610F\uFF1A\u7ED3\u679C\u6570\u7EC4\u4E2D\u5143\u7D20\u7684\u987A\u5E8F\u4E0E\u5176\u5728\u6E90 promise \u4E2D\u7684\u987A\u5E8F\u76F8\u540C\uFF0C\u5373\u4F7F\u7B2C\u4E00\u4E2A promise \u82B1\u8D39\u4E86\u6700\u957F\u7684\u65F6\u95F4\u624D resolve\uFF0C\u4F46\u5B83\u4ECD\u662F\u7ED3\u679C\u6570\u7EC4\u4E2D\u7684\u7B2C\u4E00\u4E2A\u3002
>
> **\u5982\u679C\u4EFB\u610F\u4E00\u4E2A promise \u88AB reject\uFF0C\u7531 \`Promise.all\` \u8FD4\u56DE\u7684 promise \u5C31\u4F1A\u7ACB\u5373 reject\uFF0C\u5E76\u4E14\u7ED3\u679C\u5C31\u662F\u8FD9\u4E2A error\uFF0C\u5176\u4ED6 promise \u5C06\u88AB\u5FFD\u7565**

## 2. Promise.allSettled

 \u7B49\u5F85\u6240\u6709 promise \u90FD settle \u65F6\uFF0C\u5E76\u4EE5\u5305\u542B\u4EE5\u4E0B\u5185\u5BB9\u7684\u5BF9\u8C61\u6570\u7EC4\u7684\u5F62\u5F0F\u8FD4\u56DE\u5B83\u4EEC\u7684\u7ED3\u679C\uFF1A

- \`status\`: \`"fulfilled"\` \u6216 \`"rejected"\`
- \`value\`\uFF08\u5982\u679C fulfilled\uFF09\u6216 \`reason\`\uFF08\u5982\u679C rejected\uFF09\u3002

![image-20210222221959318](https://gitee.com/zclzone/res/raw/master/images/image-20210222221959318.png)

## 3. Promise.race

\u7B49\u5F85\u7B2C\u4E00\u4E2A settle \u7684 promise\uFF0C\u5E76\u5C06\u5176 result/error \u4F5C\u4E3A\u7ED3\u679C\u3002

\`\`\`js
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert)	//1
\`\`\`

## 4. Promise.resolve

\`Promise.resolve(value)\` \u7528\u7ED3\u679C \`value\` \u521B\u5EFA\u4E00\u4E2A resolved \u7684 promise\u3002

\u7B49\u4EF7\u4E8E

\`\`\`js
let promise = new Promise(resolve => resolve(value))
\`\`\`

## 5. Promise.reject

\`Promise.reject(error)\` \u7528 \`error\` \u521B\u5EFA\u4E00\u4E2A rejected \u7684 promise\u3002

\u7B49\u4EF7\u4E8E

\`\`\`js
let promise = new Promise((resolve, reject) => reject(error))
\`\`\`

\`\u8FD9\u4E94\u4E2A\u65B9\u6CD5\u4E2D\uFF0CPromise.all\u662F\u5B9E\u9645\u4E2D\u4F7F\u7528\u6700\u591A\u7684\u3002\`






`,isRecommend:!0,isPublish:!0,createDate:"2021-02-22T22:37:06.000Z",updateDate:"2021-09-17T09:33:24.000Z"},{id:17,title:"\u524D\u7AEF\u5E38\u89C1\u9762\u8BD5\u9898\u6536\u96C6\u6574\u7406",author:"\u5F20\u4F20\u9F99",category:"\u5176\u4ED6",description:"\u524D\u7AEF\u5E38\u89C1\u9762\u8BD5\u9898\u6536\u96C6\u6574\u7406",content:`## position\u7684\u503C\uFF0C relative\u548Cabsolute\u5206\u522B\u662F\u76F8\u5BF9\u4E8E\u8C01\u8FDB\u884C\u5B9A\u4F4D\u7684
- absolute: \u751F\u6210\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C\u76F8\u5BF9\u4E8E\u6700\u8FD1\u4E00\u7EA7\u7684\u5B9A\u4F4D\u4E0D\u662Fstatic\u7684\u7236\u5143\u7D20\u6765\u8FDB\u884C\u5B9A\u4F4D
- fixed: \u751F\u6210\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C\u901A\u5E38\u76F8\u5BF9\u4E8E\u6D4F\u89C8\u5668\u7A97\u53E3\u6216\u8005frame\u8FDB\u884C\u5B9A\u4F4D
- relative: \u751F\u6210\u76F8\u5BF9\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C\u76F8\u5BF9\u4E8E\u5176\u5728\u666E\u901A\u6D41\u4E2D\u7684\u4F4D\u7F6E\u8FDB\u884C\u5B9A\u4F4D
- static: \u9ED8\u8BA4\u503C\uFF0C\u6CA1\u6709\u5B9A\u4F4D\uFF0C\u5143\u7D20\u51FA\u73B0\u5728\u6B63\u5E38\u7684\u6D41\u4E2D
- sticky: \u751F\u6210\u7C98\u6027\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C\u5BB9\u5668\u7684\u4F4D\u7F6E\u6839\u636E\u6B63\u5E38\u6587\u6863\u6D41\u8BA1\u7B97\u5F97\u51FA


## \u5982\u4F55\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898
1. JSONP: \u52A8\u6001\u63D2\u5165script\u6807\u7B7E
2. CORS: \u540E\u7AEF\u8BBE\u7F6EAccess-Control-Allow-Origin
3. window.name: window.name\u6301\u4E45\u5B58\u5728\u4E8E\u4E00\u4E2A\u7A97\u53E3\u8F7D\u5165\u8FC7\u7684\u6240\u6709\u9875\u9762\u4E2D\u7684
4. \u53CD\u5411\u4EE3\u7406: \u672C\u5730\u8C03\u8BD5\u4F7F\u7528webpack\u7684devserve,\u751F\u4EA7\u73AF\u5883\u4F7F\u7528nginx\u914D\u7F6E\u53CD\u5411\u4EE3\u7406\u5B9E\u73B0\u540C\u6E90


## XML\u548CJSON\u7684\u533A\u522B
1. json\u4F53\u79EF\u66F4\u5C0F\uFF0C\u4F20\u9012\u7684\u901F\u5EA6\u66F4\u5FEB
2. json\u66F4\u4FBF\u4E8E\u4E0Ejs\u4EA4\u4E92\uFF0C\u66F4\u5BB9\u6613\u89E3\u6790
3. json\u5BF9\u6570\u636E\u7684\u63CF\u8FF0\u6027\u8F83\u5DEE

## \u8C08\u8C08\u4F60\u5BF9webpack\u7684\u770B\u6CD5
WebPack \u662F\u4E00\u4E2A\u6A21\u5757\u6253\u5305\u5DE5\u5177\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528WebPack\u7BA1\u7406\u4F60\u7684\u6A21\u5757\u4F9D\u8D56\uFF0C\u5E76\u7F16\u7ECE\u8F93\u51FA\u6A21\u5757\u4EEC\u6240\u9700\u7684\u9759\u6001\u6587\u4EF6\u3002\u5B83\u80FD\u591F\u5F88\u597D\u5730\u7BA1\u7406\u3001\u6253\u5305Web\u5F00\u53D1\u4E2D\u6240\u7528\u5230\u7684HTML\u3001Javascript\u3001CSS\u4EE5\u53CA\u5404\u79CD\u9759\u6001\u6587\u4EF6\uFF08\u56FE\u7247\u3001\u5B57\u4F53\u7B49\uFF09\uFF0C\u8BA9\u5F00\u53D1\u8FC7\u7A0B\u66F4\u52A0\u9AD8\u6548\u3002\u5BF9\u4E8E\u4E0D\u540C\u7C7B\u578B\u7684\u8D44\u6E90\uFF0Cwebpack\u6709\u5BF9\u5E94\u7684\u6A21\u5757\u52A0\u8F7D\u5668\u3002webpack\u6A21\u5757\u6253\u5305\u5668\u4F1A\u5206\u6790\u6A21\u5757\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u6700\u540E \u751F\u6210\u4E86\u4F18\u5316\u4E14\u5408\u5E76\u540E\u7684\u9759\u6001\u8D44\u6E90\u3002

`,isRecommend:!1,isPublish:!1,createDate:"2021-01-27T16:32:45.000Z",updateDate:"2021-09-17T09:33:24.000Z"},{id:16,title:"Linux\u5B89\u88C5\u5E76\u914D\u7F6ENginx",author:"\u5F20\u4F20\u9F99",category:"Linux",description:"Linux\u5B89\u88C5\u914D\u7F6ENginx",content:`## 1. \u5B89\u88C5nginx\u4F9D\u8D56

1. gcc && g++
\`\`\`cmd
yum install gcc-c++
\`\`\`
2. pcre
\`\`\`
yum install -y pcre pcre-devel
\`\`\`
3. zlib
\`\`\`
yum install -y zlib zlib-devel
\`\`\`
4. openssl
\`\`\`
yum install -y openssl openssl-devel
\`\`\`

## 2. \u5B89\u88C5nginx
1. \u4E0B\u8F7Dnginx\u5B89\u88C5\u5305
\`\`\`cmd
wget http://nginx.org/download/nginx-1.19.6.tar.gz
\`\`\`
2. \u89E3\u538B\u5B89\u88C5\u5305
\`\`\`cmd
tar -zxvf nginx-1.19.6.tar.gz
\`\`\`
3. \u5B89\u88C5
\`\`\`
cd nginx-1.19.6
make && make install
# \u9ED8\u8BA4\u4F1A\u5B89\u88C5\u5728/usr/local/nginx\u4E0B
\`\`\`
4. \u5220\u9664\u5B89\u88C5\u5305\u548C\u89E3\u538B\u5305
\`\`\`cmd
rm -rf nginx-1.19.6.tar.gz
rm -rf nginx-1.19.6
\`\`\`

## 3. \u914D\u7F6Enginx
> \u914D\u7F6E\u6587\u4EF6\u9ED8\u8BA4\u662F /usr/local/nginx/conf \u6587\u4EF6\u5939\u4E0B\u7684 *nginx.conf*
> \u542F\u52A8\u6587\u4EF6\u662F\u5B89\u88C5\u76EE\u5F55\u4E0B\u7684sbin\u7684*nginx*
1. \u542F\u52A8\u3001\u91CD\u542F\u3001\u505C\u6B62nginx
\`\`\`cmd
cd /usr/local/nginx
# \u542F\u52A8
./sbin/nginx
# \u91CD\u542F
./sbin/nginx -s reload
# \u505C\u6B62
./sbin/nginx -s stop
\`\`\`
2. \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6
\`\`\`cmd
cd /usr/local/nginx
vim ./conf/nginx.conf
\`\`\`
3. \u914D\u7F6E\u6587\u4EF6\u53C2\u8003
\`\`\`bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
  worker_connections  1024;
}

http {
  include       mime.types;
  default_type  application/octet-stream;

  sendfile        on;

  keepalive_timeout  65;

  gzip  on;

  upstream api_server {
    server blog.qszone.com:3000;
  }

  upstream sally_api_server {
    server sally.qszone.com:3001;
  }

  upstream blog_server {
    server www.qszone.com:8080;
  }

  server {
    listen       80;
    server_name  qszone.com;
    rewrite  ^/(.*)$  http://www.qszone.com/$1 permanent;
  }

  server {
    listen	 80;
    server_name  fangfang.qszone.com;
    rewrite  ^/(.*)$  http://sally.qszone.com/$1 permanent;
  }

  server {
    listen       80;
    server_name  blog.qszone.com;

    location / {
      root  /usr/local/projects/blog/dist;
      index index.html;
      try_files $uri $uri/ /index.html;
    }

    location /api/ {
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_pass http://api_server/;
    }

    location = /50x.html {
      root   html;
    }
  }

  server {
    listen       80;
    server_name  www.qszone.com;

    location / {
      root  /usr/local/projects/qs-zone/;
      index index.html;
    }

    location /api/ {
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_pass http://api_server/;
    }

    location = /50x.html {
      root   html;
    }
  }

  server {
    listen       80;
    server_name  me.qszone.com;

    location / {
      root  /usr/local/projects/resume/;
      index index.html;
    }

    location = /50x.html {
      root   html;
    }
  }

  server {
    listen       80;
    server_name  sally.qszone.com;

    location / {
      root  /usr/local/projects/sally-blog/dist;
      index index.html;
    }

    location /api/ {
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_pass http://sally_api_server/;
    }

    location = /50x.html {
      root   html;
    }
  }
}

\`\`\`





`,isRecommend:!1,isPublish:!0,createDate:"2021-01-03T20:07:06.000Z",updateDate:"2021-09-17T09:33:24.000Z"},{id:15,title:"\u5341\u5927\u7ECF\u5178\u6392\u5E8F\u7B97\u6CD5\u2014\u8BA1\u6570\u6392\u5E8F",author:"\u5F20\u4F20\u9F99",category:"\u7B97\u6CD5",description:"\u8BA1\u6570\u6392\u5E8F\uFF0C5\u79CDjs\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u4E00\u6B65\u4E00\u6B65\u4F18\u5316\uFF0C\u6700\u7EC8\u89E3\u51B3\u65B9\u6848\u7ED3\u5408hash\u89E3\u51B3\u4E86\u4F20\u7EDF\u8BA1\u6570\u6392\u5E8F\u7684\u5F0A\u7AEF",content:`\`\`\`js
/*\u8BA1\u6570\u6392\u5E8F1 */
function count_sort1 (arr, maxVal) {
  maxVal = maxVal || Math.max(...arr)
  var bucket = new Array(maxVal + 1)
  var sortIndex = 0
  var arrLen = arr.length
  var bucketLen = maxVal + 1
  for (var i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0
    }
    bucket[arr[i]]++
  }
  for (var j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      arr[sortIndex++] = j
      bucket[j]--
    }
  }
  return arr
}

/*\u8BA1\u6570\u6392\u5E8F2 */
function count_sort2 (arr) {
  var bucket = []
  var sorted_arr = []
  var arrLen = arr.length
  for (var i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0
    }
    bucket[arr[i]]++
  }
  var bucketLen = bucket.length
  for (var j = 1; j < bucketLen; j++) {
    bucket[j] = bucket[j] || 0
    bucket[j - 1] = bucket[j - 1] || 0
    bucket[j] += bucket[j - 1] || 0
  }
  for (var k = 0; k < arrLen; k++) {
    sorted_arr[--bucket[arr[k]]] = arr[k]
  }
  return sorted_arr
}

/*\u8BA1\u6570\u6392\u5E8F3 */
function count_sort3 (arr) {
  var bucket = []
  var sorted_arr = []
  for (var i = 0; i < arr.length; i++) {
    if (bucket[arr[i]]) {
      bucket[arr[i]].push(i)
    } else {
      bucket[arr[i]] = [i]
    }
  }
  bucket.forEach(item => {
    if (item && item.length > 0) {
      item.forEach(num => {
        sorted_arr.push(arr[num])
      })
    }
  })
  return sorted_arr
}

/*\u8BA1\u6570\u6392\u5E8F4 */
function count_sort4 (arr) {
  var bucket = {}
  var sorted_arr = []
  var double = arr.length
  for (var i = 0; i < arr.length; i++) {
    insertCount(bucket, i, arr[i] * double)
  }
  for (const key in bucket) {
    if (bucket.hasOwnProperty(key)) {
      sorted_arr.push(arr[bucket[key]])
    }
  }
  return sorted_arr
}

function insertCount (bucket, index, val) {
  if (bucket[val]) {
    insertCount(bucket, index, val + 1)
  } else {
    bucket[val] = index
  }
}

/*\u8BA1\u6570\u6392\u5E8F5\uFF0C\u901F\u5EA6\u6700\u4F18 */
function count_sort5 (arr) {
  console.time('count_sort5')
  var bucket = {}
  var sorted_arr = []
  arr.forEach(function (item) {
    if (bucket[item]) {
      bucket[item].push(item)
    } else {
      bucket[item] = [item]
    }
  })
  for (var key in bucket) {
    if (bucket.hasOwnProperty(key)) {
      bucket[key].forEach(function (item) {
        sorted_arr.push(item)
      })
    }
  }
  console.timeEnd('count_sort5')
  return sorted_arr
}

/*\u8BA1\u6570\u6392\u5E8F6 \u5360\u7A7A\u95F4\u6700\u5C0F*/
function count_sort6 (arr) {
  console.time('count_sort6')
  var bucket = {}
  var sorted_arr = []
  arr.forEach(function (item) {
    if (bucket[item]) {
      bucket[item]++
    } else {
      bucket[item] = 1
    }
  })
  for (var key in bucket) {
    if (bucket.hasOwnProperty(key)) {
      while (bucket[key]-- > 0) {
        sorted_arr.push(key)
      }
    }
  }
  console.timeEnd('count_sort6')
  return sorted_arr
}
\`\`\`
`,isRecommend:!0,isPublish:!0,createDate:"2021-01-02T11:08:19.000Z",updateDate:"2021-09-17T09:33:24.000Z"},{id:14,title:"git\u521B\u5EFAgh-pages\u5206\u652F",author:"\u5F20\u4F20\u9F99",category:"Git",description:"git\u521B\u5EFAgh-pages\u5206\u652F",content:`\`\`\`
npm run build

cd dist

git init

git checkout --orphan gh-pages

git add .

git commit -m 'deploy gh-pages'

git remote add origin https://github.com/zclzone/blog.git

git push -f origin gh-pages

\`\`\``,isRecommend:!1,isPublish:!0,createDate:"2021-01-02T11:07:53.000Z",updateDate:"2021-09-17T09:33:24.000Z"},{id:13,title:"JavaScript\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u5B66\u4E60\u7B14\u8BB0",author:"\u5F20\u4F20\u9F99",category:"JavaScript",description:"ECMAScript \u7684\u8BED\u6CD5\u5927\u91CF\u501F\u9274\u4E86C \u53CA\u5176\u4ED6\u7C7BC \u8BED\u8A00\uFF08\u5982Java \u548CPerl\uFF09\u7684\u8BED\u6CD5...",content:`# 1 \u57FA\u672C\u6982\u5FF5

## 1.1 \u8BED\u6CD5

    ECMAScript \u7684\u8BED\u6CD5\u5927\u91CF\u501F\u9274\u4E86C \u53CA\u5176\u4ED6\u7C7BC \u8BED\u8A00\uFF08\u5982Java \u548CPerl\uFF09\u7684\u8BED\u6CD5\u3002
    \u719F\u6089\u8FD9\u4E9B\u8BED\u8A00\u7684\u5F00\u53D1\u4EBA\u5458\u5728\u63A5\u53D7ECMAScript \u66F4\u52A0\u5BBD\u677E\u7684\u8BED\u6CD5\u65F6\uFF0C\u4E00\u5B9A\u4F1A\u6709\u4E00\u79CD\u8F7B\u677E\u81EA\u5728\u7684\u611F\u89C9\u3002
    \u5373\u4F7F\u6CA1\u6709\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\u57FA\u7840\uFF0CJavaScript\u4ECD\u7136\u6613\u4E0A\u624B\u3002

### 1.1.1 \u533A\u5206\u5927\u5C0F\u5199

    ECMAScript \u4E2D\u7684\u4E00\u5207\uFF08\u53D8\u91CF\u3001\u51FD\u6570\u540D\u548C\u64CD\u4F5C\u7B26\uFF09\u90FD\u533A\u5206\u5927\u5C0F\u5199\u3002
    \u53D8\u91CF\u540Dtest \u548C\u53D8\u91CF\u540DTest \u5206\u522B\u8868\u793A\u4E24\u4E2A\u4E0D\u540C\u7684\u53D8\u91CF\u3002

### 1.1.2 \u6807\u8BC6\u7B26

    \u6807\u8BC6\u7B26\uFF0C\u5C31\u662F\u6307\u53D8\u91CF\u3001\u51FD\u6570\u3001\u5C5E\u6027\u7684\u540D\u5B57\uFF0C\u6216\u8005\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u89C4\u5219\uFF1A
    1. \u7B2C\u4E00\u4E2A\u5B57\u7B26\u5FC5\u987B\u662F\u4E00\u4E2A\u5B57\u6BCD\u3001\u4E0B\u5212\u7EBF\uFF08_\uFF09\u6216\u4E00\u4E2A\u7F8E\u5143\u7B26\u53F7\uFF08$\uFF09
    2. \u5176\u4ED6\u5B57\u7B26\u53EF\u4EE5\u662F\u5B57\u6BCD\u3001\u4E0B\u5212\u7EBF\u3001\u7F8E\u5143\u7B26\u53F7\u6216\u6570\u5B57
    3. \u4E0D\u5141\u8BB8\u662F\u5173\u952E\u5B57\u3001\u4FDD\u7559\u5B57\u3001true\u3001false\u548Cnull

ECMAScript \u6807\u8BC6\u7B26\u91C7\u7528\u9A7C\u5CF0\u5927\u5C0F\u5199\u683C\u5F0F\uFF1A

\`\`\`javascript
var myBlog
var doSomethingImportant
\`\`\`

### 1.1.3 \u6CE8\u91CA

\`\`\`javascript
//\u5355\u884C\u6CE8\u91CA

/*
 * \u8FD9\u662F\u4E00\u4E2A\u591A\u884C
 * \uFF08\u5757\u7EA7\uFF09\u6CE8\u91CA
 */
\`\`\`

    \u867D\u7136\u4E0A\u9762\u591A\u884C\u6CE8\u91CA\u4E2D\u7684\u7B2C\u4E8C\u548C\u7B2C\u4E09\u884C\u90FD\u4EE5\u4E00\u4E2A\u661F\u53F7\u5F00\u5934\uFF0C\u4F46\u8FD9\u4E0D\u662F\u5FC5\u9700\u7684\u3002\u4E4B\u6240\u4EE5\u6DFB\u52A0\u90A3\u4E24\u4E2A\u661F\u53F7\uFF0C\u7EAF\u7CB9\u662F\u4E3A\u4E86\u63D0\u9AD8\u6CE8\u91CA\u7684\u53EF\u8BFB\u6027

### 1.1.4 \u8BED\u53E5

ECMAScript \u4E2D\u7684\u8BED\u53E5\u4EE5\u4E00\u4E2A\u5206\u53F7\u7ED3\u5C3E\uFF1B\u5982\u679C\u7701\u7565\u5206\u53F7\uFF0C\u5219\u7531\u89E3\u6790\u5668\u786E\u5B9A\u8BED\u53E5\u7684\u7ED3\u5C3E\uFF0C\u5982\u4E0B\u4F8B\u6240\u793A\uFF1A

\`\`\`javascript
var sum = a + b // \u5373\u4F7F\u6CA1\u6709\u5206\u53F7\u4E5F\u662F\u6709\u6548\u7684\u8BED\u53E5\u2014\u2014\u4E0D\u63A8\u8350
var diff = a - b // \u6709\u6548\u7684\u8BED\u53E5\u2014\u2014\u63A8\u8350
\`\`\`

    \u52A0\u4E0A\u5206\u53F7\u4E5F\u4F1A\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u589E\u8FDB\u4EE3\u7801\u7684\u6027\u80FD\uFF0C\u56E0\u4E3A\u8FD9\u6837\u89E3\u6790\u5668\u5C31\u4E0D\u5FC5\u518D\u82B1\u65F6\u95F4\u63A8\u6D4B\u5E94\u8BE5\u5728\u54EA\u91CC\u63D2\u5165\u5206\u53F7\u4E86

\u5C3D\u91CF\u59CB\u7EC8\u5728\u63A7\u5236\u8BED\u53E5\u4E2D\u4F7F\u7528\u4EE3\u7801\u5757\u2014\u2014\u5373\u4F7F\u4EE3\u7801\u5757\u4E2D\u53EA\u6709\u4E00\u6761\u8BED\u53E5

\`\`\`javascript
// \u6709\u6548\u4F46\u5BB9\u6613\u51FA\u9519\uFF0C\u4E0D\u8981\u4F7F\u7528
if (test) alert(test)

// \u63A8\u8350\u4F7F\u7528
if (test) {
  alert(test)
}
\`\`\`

    \u5728\u63A7\u5236\u8BED\u53E5\u4E2D\u4F7F\u7528\u4EE3\u7801\u5757\u53EF\u4EE5\u8BA9\u7F16\u7801\u610F\u56FE\u66F4\u52A0\u6E05\u6670\uFF0C\u800C\u4E14\u4E5F\u80FD\u964D\u4F4E\u4FEE\u6539\u4EE3\u7801\u65F6\u51FA\u9519\u7684\u51E0\u7387

## 1.2 \u5173\u952E\u5B57\u548C\u4FDD\u7559\u5B57

ECMAScript \u7684\u5168\u90E8\u5173\u952E\u5B57

> break do instanceof typeof case else new var
> catch finally return void continue for switch while
> debugger function this with default if throw delete in try

\u4FDD\u7559\u5B57\uFF1A

> abstract enum int short boolean export interface static
> byte extends long super char final native synchronized
> class float package throws const goto private transient
> debugger implements protected volatile double import public

## 1.3 \u53D8\u91CF

ECMAScript \u7684\u53D8\u91CF\u662F\u677E\u6563\u7C7B\u578B\u7684\uFF0C\u6240\u8C13\u677E\u6563\u7C7B\u578B\u5C31\u662F\u53EF\u4EE5\u7528\u6765\u4FDD\u5B58\u4EFB\u4F55\u7C7B\u578B\u7684\u6570\u636E\u3002

    \u53EF\u4EE5\u4F7F\u7528\u4E00\u6761\u8BED\u53E5\u5B9A\u4E49\u591A\u4E2A\u53D8\u91CF\uFF0C\u53EA\u8981\u50CF\u4E0B\u9762\u8FD9\u6837\u628A\u6BCF\u4E2A\u53D8\u91CF\uFF08\u521D\u59CB\u5316\u6216\u4E0D\u521D\u59CB\u5316\u5747\u53EF\uFF09\u7528\u9017\u53F7\u5206\u9694\u5F00\u5373\u53EF\uFF1A

\`\`\`javascript
var message = 'hi',
  found = false,
  age = 29
\`\`\`

## 1.4 \u6570\u636E\u7C7B\u578B

5 \u79CD\u7B80\u5355\u6570\u636E\u7C7B\u578B\uFF08\u4E5F\u79F0\u4E3A\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF09\uFF1A

- Undefined
- Null
- Boolean
- Number
- String

1 \u79CD\u590D\u6742\u6570\u636E\u7C7B\u578B: Object

### 1.4.1 typeof \u64CD\u4F5C\u7B26

typeof\u2014\u2014\u7528\u6765\u68C0\u6D4B\u7ED9\u5B9A\u53D8\u91CF\u7684\u6570\u636E\u7C7B\u578B\u7684\u64CD\u4F5C\u7B26

- "undefined"\u2014\u2014\u5982\u679C\u8FD9\u4E2A\u503C\u672A\u5B9A\u4E49
- "boolean"\u2014\u2014\u5982\u679C\u8FD9\u4E2A\u503C\u662F\u5E03\u5C14\u503C
- "string"\u2014\u2014\u5982\u679C\u8FD9\u4E2A\u503C\u662F\u5B57\u7B26\u4E32
- "number"\u2014\u2014\u5982\u679C\u8FD9\u4E2A\u503C\u662F\u6570\u503C
- "object"\u2014\u2014\u5982\u679C\u8FD9\u4E2A\u503C\u662F\u5BF9\u8C61\u6216 null
- "function"\u2014\u2014\u5982\u679C\u8FD9\u4E2A\u503C\u662F\u51FD\u6570

\u4F8B\uFF1A

\`\`\`javascript
var message = 'some string'
console.log(typeof message) // "string"
console.log(typeof message) // "string"
console.log(typeof 95) // "number"
\`\`\`

    \u6CE8\u610F\uFF1Atypeof \u662F\u4E00\u4E2A\u64CD\u4F5C\u7B26\u800C\u4E0D\u662F\u51FD\u6570\uFF0C\u56E0\u6B64\u4F8B\u5B50\u4E2D\u7684\u5706\u62EC\u53F7\u5C3D\u7BA1\u53EF\u4EE5\u4F7F\u7528\uFF0C\u4F46\u4E0D\u662F\u5FC5\u9700\u7684

### 1.4.2 Undefined \u7C7B\u578B

Undefined \u7C7B\u578B\u53EA\u6709\u4E00\u4E2A\u503C\uFF0C\u5373\u7279\u6B8A\u7684 undefined\u3002\u5728\u4F7F\u7528 var \u58F0\u660E\u53D8\u91CF\u4F46\u672A\u5BF9\u5176\u52A0\u4EE5\u521D\u59CB\u5316\u65F6\uFF0C
\u8FD9\u4E2A\u53D8\u91CF\u7684\u503C\u5C31\u662F undefined\uFF0C\u4F8B\u5982\uFF1A

\`\`\`javascript
var message
console.log(message == undefined) //true
\`\`\`

### 1.4.3 Null \u7C7B\u578B

Null \u7C7B\u578B\u662F\u7B2C\u4E8C\u4E2A\u53EA\u6709\u4E00\u4E2A\u503C\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u8FD9\u4E2A\u7279\u6B8A\u7684\u503C\u662F null\u3002\u4ECE\u903B\u8F91\u89D2\u5EA6\u6765\u770B\uFF0Cnull \u503C\u8868\u793A\u4E00\u4E2A\u7A7A\u5BF9\u8C61\u6307\u9488\uFF0C\u800C\u8FD9\u4E5F\u6B63\u662F\u4F7F\u7528 typeof \u64CD\u4F5C\u7B26\u68C0\u6D4B null \u503C\u65F6\u4F1A\u8FD4\u56DE"object"\u7684\u539F\u56E0\uFF0C\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\u6240\u793A\uFF1A

\`\`\`javascript
var car = null
console.log(typeof car) // "object"
\`\`\`

\u5B9E\u9645\u4E0A\uFF0Cundefined \u503C\u662F\u6D3E\u751F\u81EA null \u503C\u7684\uFF0C\u56E0\u6B64 ECMA-262 \u89C4\u5B9A\u5BF9\u5B83\u4EEC\u7684\u76F8\u7B49\u6027\u6D4B\u8BD5\u8981\u8FD4\u56DE true\uFF1A

\`\`\`javascript
console.log(null == undefined) //true
\`\`\`

### 1.4.4 Boolean \u7C7B\u578B

\u8BE5\u7C7B\u578B\u53EA\u6709\u4E24\u4E2A\u5B57\u9762\u503C\uFF1Atrue \u548C false\u3002
\u867D\u7136 Boolean \u7C7B\u578B\u7684\u5B57\u9762\u503C\u53EA\u6709\u4E24\u4E2A\uFF0C\u4F46 ECMAScript \u4E2D\u6240\u6709\u7C7B\u578B\u7684\u503C\u90FD\u6709\u4E0E\u8FD9\u4E24\u4E2A Boolean \u503C \u7B49\u4EF7\u7684\u503C\u3002\u8981\u5C06\u4E00\u4E2A\u503C\u8F6C\u6362\u4E3A\u5176\u5BF9\u5E94\u7684 Boolean \u503C\uFF0C\u53EF\u4EE5\u8C03\u7528\u8F6C\u578B\u51FD\u6570 Boolean()\uFF0C\u5982\u4E0B\u4F8B\u6240\u793A\uFF1A

\`\`\`javascript
var message = 'Hello world!'
var messageAsBoolean = Boolean(message)
console.log(messageAsBoolean) //true
\`\`\`

| \u6570\u636E\u7C7B\u578B  |       \u8F6C\u6362\u4E3A true \u7684\u503C       | \u8F6C\u6362\u4E3A false \u7684\u503C |
| :-------: | :--------------------------: | :---------------: |
|  Boolean  |             true             |       false       |
|  String   |        \u4EFB\u4F55\u975E\u7A7A\u5B57\u7B26\u4E32        |   ''(\u7A7A\u5B57\u7B26\u4E32)    |
|  Number   | \u4EFB\u4F55\u975E\u96F6\u6570\u5B57\u503C\uFF08\u5305\u62EC\u65E0\u7A77\u5927\uFF09 |     0 \u548C NaN      |
| Undefined |        \u4E0D\u9002\u5408\u8FD9\u79CD\u89C4\u5219        |     undefined     |

### 1.4.5 Number \u7C7B\u578B

Number \u7C7B\u578B\u4F7F\u7528 IEEE754 \u683C\u5F0F\u6765\u8868\u793A \u6574\u6570\u548C\u6D6E\u70B9\u6570\u503C\uFF08\u6D6E\u70B9\u6570\u503C\u5728\u67D0\u4E9B\u8BED\u8A00\u4E2D\u4E5F\u88AB\u79F0\u4E3A\u53CC\u7CBE\u5EA6\u6570\u503C\uFF09\u3002

#### 1. \u6D6E\u70B9\u6570\u503C

\u6240\u8C13\u6D6E\u70B9\u6570\u503C\uFF0C\u5C31\u662F\u8BE5\u6570\u503C\u4E2D\u5FC5\u987B\u5305\u542B\u4E00\u4E2A\u5C0F\u6570\u70B9\uFF0C\u5E76\u4E14\u5C0F\u6570\u70B9\u540E\u9762\u5FC5\u987B\u81F3\u5C11\u6709\u4E00\u4F4D\u6570\u5B57
\u7531\u4E8E\u4FDD\u5B58\u6D6E\u70B9\u6570\u503C\u9700\u8981\u7684\u5185\u5B58\u7A7A\u95F4\u662F\u4FDD\u5B58\u6574\u6570\u503C\u7684\u4E24\u500D\uFF0C\u56E0\u6B64 ECMAScript \u4F1A\u4E0D\u5931\u65F6\u673A\u5730\u5C06\u6D6E\u70B9\u6570\u503C \u8F6C\u6362\u4E3A\u6574\u6570\u503C\u3002\u663E\u7136\uFF0C\u5982\u679C\u5C0F\u6570\u70B9\u540E\u9762\u6CA1\u6709\u8DDF\u4EFB\u4F55\u6570\u5B57\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u6570\u503C\u5C31\u53EF\u4EE5\u4F5C\u4E3A\u6574\u6570\u503C\u6765\u4FDD\u5B58\u3002\u540C\u6837 \u5730\uFF0C\u5982\u679C\u6D6E\u70B9\u6570\u503C\u672C\u8EAB\u8868\u793A\u7684\u5C31\u662F\u4E00\u4E2A\u6574\u6570\uFF08\u5982 1.0\uFF09\uFF0C\u90A3\u4E48\u8BE5\u503C\u4E5F\u4F1A\u88AB\u8F6C\u6362\u4E3A\u6574\u6570\uFF0C\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\u6240\u793A\uFF1A

\`\`\`javascript
var floatNum1 = 1 // \u5C0F\u6570\u70B9\u540E\u9762\u6CA1\u6709\u6570\u5B57\u2014\u2014\u89E3\u6790\u4E3A 1
var floatNum2 = 10.0 // \u6574\u6570\u2014\u2014\u89E3\u6790\u4E3A 10
\`\`\`

\u6D6E\u70B9\u6570\u503C\u7684\u9AD8\u7CBE\u5EA6\u662F 17 \u4F4D\u5C0F\u6570\uFF0C\u4F46\u5728\u8FDB\u884C\u7B97\u672F\u8BA1\u7B97\u65F6\u5176\u7CBE\u786E\u5EA6\u8FDC\u8FDC\u4E0D\u5982\u6574\u6570\u3002\u4F8B\u5982\uFF0C0.1 \u52A0 0.2 \u7684\u7ED3\u679C\u4E0D\u662F 0.3\uFF0C\u800C\u662F 0.30000000000000004\u3002\u8FD9\u4E2A\u5C0F\u5C0F\u7684\u820D\u5165\u8BEF\u5DEE\u4F1A\u5BFC\u81F4\u65E0\u6CD5\u6D4B\u8BD5\u7279\u5B9A\u7684\u6D6E\u70B9\u6570\u503C\u3002 \u4F8B\u5982:

\`\`\`javascript
if (a + b == 0.3) {
  console.log('You got 0.3.') // \u4E0D\u8981\u505A\u8FD9\u6837\u7684\u6D4B\u8BD5\uFF01
}
\`\`\`

    \u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u6D4B\u8BD5\u7684\u662F\u4E24\u4E2A\u6570\u7684\u548C\u662F\u4E0D\u662F\u7B49\u4E8E 0.3\u3002\u5982\u679C\u8FD9\u4E24\u4E2A\u6570
    \u662F 0.05\u548C 0.25\uFF0C\u6216\u8005\u662F 0.15 \u548C 0.15\u90FD\u4E0D\u4F1A\u6709\u95EE\u9898\u3002\u800C\u5982\u524D\u6240\u8FF0\uFF0C\u5982
    \u679C\u8FD9\u4E24\u4E2A\u6570\u662F 0.1\u548C 0.2\uFF0C\u90A3\u4E48\u6D4B\u8BD5\u5C06\u65E0\u6CD5\u901A\u8FC7\u3002\u56E0\u6B64\uFF0C\u6C38\u8FDC\u4E0D \u8981\u6D4B\u8BD5\u67D0
    \u4E2A\u7279\u5B9A\u7684\u6D6E\u70B9\u6570\u503C\u3002

#### 2. \u6570\u503C\u8303\u56F4

\u7531\u4E8E\u5185\u5B58\u7684\u9650\u5236\uFF0CECMAScript \u5E76\u4E0D\u80FD\u4FDD\u5B58\u4E16\u754C\u4E0A\u6240\u6709\u7684\u6570\u503C\u3002ECMAScript \u80FD\u591F\u8868\u793A\u7684\u5C0F\u6570\u503C\u4FDD \u5B58\u5728 Number.MIN_VALUE \u4E2D\u2014\u2014\u5728\u5927\u591A\u6570\u6D4F\u89C8\u5668\u4E2D\uFF0C\u8FD9\u4E2A\u503C\u662F 5e-324\uFF1B\u80FD\u591F\u8868\u793A\u7684\u5927\u6570\u503C\u4FDD\u5B58\u5728 Number.MAX_VALUE \u4E2D\u2014\u2014\u5728\u5927\u591A\u6570\u6D4F\u89C8\u5668\u4E2D\uFF0C\u8FD9\u4E2A\u503C\u662F 1.7976931348623157e+308\u3002\u5982\u679C\u67D0\u6B21\u8BA1\u7B97\u7684 \u7ED3\u679C\u5F97\u5230\u4E86\u4E00\u4E2A\u8D85\u51FA JavaScript \u6570\u503C\u8303\u56F4\u7684\u503C\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u6570\u503C\u5C06\u88AB\u81EA\u52A8\u8F6C\u6362\u6210\u7279\u6B8A\u7684 Infinity \u503C\u3002\u5177 \u4F53\u6765\u8BF4\uFF0C\u5982\u679C\u8FD9\u4E2A\u6570\u503C\u662F\u8D1F\u6570\uFF0C\u5219\u4F1A\u88AB\u8F6C\u6362\u6210-Infinity\uFF08\u8D1F\u65E0\u7A77\uFF09\uFF0C\u5982\u679C\u8FD9\u4E2A\u6570\u503C\u662F\u6B63\u6570\uFF0C\u5219\u4F1A\u88AB\u8F6C \u6362\u6210 Infinity\uFF08\u6B63\u65E0\u7A77\uFF09\u3002

    \u5982\u679C\u67D0\u6B21\u8BA1\u7B97\u8FD4\u56DE\u4E86\u6B63\u6216\u8D1F\u7684 Infinity \u503C\uFF0C\u90A3\u4E48\u8BE5\u503C\u5C06\u65E0\u6CD5\u7EE7\u7EED\u53C2\u4E0E\u4E0B\u4E00\u6B21\u7684\u8BA1\u7B97\uFF0C
    \u56E0\u4E3A Infinity \u4E0D\u662F\u80FD\u591F\u53C2\u4E0E\u8BA1\u7B97\u7684\u6570\u503C

#### 3. NaN

NaN\uFF0C\u5373\u975E\u6570\u503C\uFF08Not a Number\uFF09\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u6570\u503C\uFF0C\u8FD9\u4E2A\u6570\u503C\u7528\u4E8E\u8868\u793A\u4E00\u4E2A\u672C\u6765\u8981\u8FD4\u56DE\u6570\u503C\u7684\u64CD\u4F5C\u6570 \u672A\u8FD4\u56DE\u6570\u503C\u7684\u60C5\u51B5\uFF08\u8FD9\u6837\u5C31\u4E0D\u4F1A\u629B\u51FA\u9519\u8BEF\u4E86\uFF09,\u4F8B\u5982,\u4EFB\u4F55\u6570\u503C\u9664\u4EE5 0 \u90FD\u4F1A\u5BFC\u81F4\u9519\u8BEF\uFF0C\u4ECE\u800C\u505C\u6B62\u4EE3\u7801\u6267\u884C\u3002\u4F46\u5728 ECMAScript \u4E2D\uFF0C\u4EFB\u4F55\u6570\u503C\u9664\u4EE5 0 \u4F1A\u8FD4\u56DE NaN\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u4EE3\u7801\u7684\u6267\u884C\u3002

#### 4. \u6570\u503C\u8F6C\u6362

\u6709 3 \u4E2A\u51FD\u6570\u53EF\u4EE5\u628A\u975E\u6570\u503C\u8F6C\u6362\u4E3A\u6570\u503C\uFF1ANumber()\u3001parseInt()\u548C parseFloat()

Number()\u51FD\u6570\u7684\u8F6C\u6362\u89C4\u5219\uFF1A

    1. \u5982\u679C\u662FBoolean \u503C\uFF0Ctrue \u548Cfalse \u5C06\u5206\u522B\u88AB\u8F6C\u6362\u4E3A1 \u548C0\u3002
    2. \u5982\u679C\u662F\u6570\u5B57\u503C\uFF0C\u53EA\u662F\u7B80\u5355\u7684\u4F20\u5165\u548C\u8FD4\u56DE\u3002
    3. \u5982\u679C\u662Fnull \u503C\uFF0C\u8FD4\u56DE0\u3002
    4. \u5982\u679C\u662Fundefined\uFF0C\u8FD4\u56DENaN\u3002
    5. \u5982\u679C\u662F\u5B57\u7B26\u4E32\uFF0C\u9075\u5FAA\u4E0B\u5217\u89C4\u5219\uFF1A
      -  \u5982\u679C\u5B57\u7B26\u4E32\u4E2D\u53EA\u5305\u542B\u6570\u5B57\uFF08\u5305\u62EC\u524D\u9762\u5E26\u6B63\u53F7\u6216\u8D1F\u53F7\u7684\u60C5\u51B5\uFF09\uFF0C\u5219\u5C06\u5176\u8F6C\u6362\u4E3A\u5341\u8FDB\u5236\u6570\u503C\uFF0C\u5373"1"\u4F1A\u53D8\u62101\uFF0C"123"\u4F1A\u53D8\u6210123\uFF0C\u800C"011"\u4F1A\u53D8\u621011\uFF08\u6CE8\u610F\uFF1A\u524D\u5BFC\u7684\u96F6\u88AB\u5FFD\u7565\u4E86\uFF09\uFF1B
      -  \u5982\u679C\u5B57\u7B26\u4E32\u4E2D\u5305\u542B\u6709\u6548\u7684\u6D6E\u70B9\u683C\u5F0F\uFF0C\u5982"1.1"\uFF0C\u5219\u5C06\u5176\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684\u6D6E\u70B9\u6570\u503C\uFF08\u540C\u6837\uFF0C\u4E5F\u4F1A\u5FFD\u7565\u524D\u5BFC\u96F6\uFF09\uFF1B
      -  \u5982\u679C\u5B57\u7B26\u4E32\u4E2D\u5305\u542B\u6709\u6548\u7684\u5341\u516D\u8FDB\u5236\u683C\u5F0F\uFF0C\u4F8B\u5982"0xf"\uFF0C\u5219\u5C06\u5176\u8F6C\u6362\u4E3A\u76F8\u540C\u5927\u5C0F\u7684\u5341\u8FDB\u5236\u6574\u6570\u503C\uFF1B
      -  \u5982\u679C\u5B57\u7B26\u4E32\u662F\u7A7A\u7684\uFF08\u4E0D\u5305\u542B\u4EFB\u4F55\u5B57\u7B26\uFF09\uFF0C\u5219\u5C06\u5176\u8F6C\u6362\u4E3A0\uFF1B
      -  \u5982\u679C\u5B57\u7B26\u4E32\u4E2D\u5305\u542B\u9664\u4E0A\u8FF0\u683C\u5F0F\u4E4B\u5916\u7684\u5B57\u7B26\uFF0C\u5219\u5C06\u5176\u8F6C\u6362\u4E3ANaN\u3002
    6. \u5982\u679C\u662F\u5BF9\u8C61\uFF0C\u5219\u8C03\u7528\u5BF9\u8C61\u7684valueOf()\u65B9\u6CD5\uFF0C\u7136\u540E\u4F9D\u7167\u524D\u9762\u7684\u89C4\u5219\u8F6C\u6362\u8FD4\u56DE\u7684\u503C\u3002\u5982\u679C\u8F6C\u6362\u7684\u7ED3\u679C\u662FNaN\uFF0C\u5219\u8C03\u7528\u5BF9\u8C61\u7684toString()\u65B9\u6CD5\uFF0C\u7136\u540E\u518D\u6B21\u4F9D\u7167\u524D\u9762\u7684\u89C4\u5219\u8F6C\u6362\u8FD4\u56DE\u7684\u5B57\u7B26\u4E32\u503C\u3002

\`\`\`javascript
var num1 = Number('Hello world!') //NaN
var num2 = Number('') //0
var num3 = Number('000011') //11
var num4 = Number(true) //1
\`\`\`

parseInt()\u51FD\u6570\u7684\u8F6C\u6362\u89C4\u5219

\`\`\`javascript
var num1 = parseInt('1234blue') // 1234
var num2 = parseInt('') // NaN
var num3 = parseInt('0xA') // 10\uFF08\u5341\u516D\u8FDB\u5236\u6570\uFF09
var num4 = parseInt(22.5) // 22
var num5 = parseInt('070') // 56\uFF08\u516B\u8FDB\u5236\u6570\uFF09
var num6 = parseInt('70') // 70\uFF08\u5341\u8FDB\u5236\u6570\uFF09
var num7 = parseInt('0xf') // 15\uFF08\u5341\u516D\u8FDB\u5236\u6570\uFF09
\`\`\`

parseFloat()\u8F6C\u6362\u6570\u503C\u7684\u89C4\u5219

\`\`\`javascript
var num1 = parseFloat('1234blue') //1234 \uFF08\u6574\u6570\uFF09
var num2 = parseFloat('0xA') //0
var num3 = parseFloat('22.5') //22.5
var num4 = parseFloat('22.34.5') //22.34
var num5 = parseFloat('0908.5') //908.5
var num6 = parseFloat('3.125e7') //31250000
\`\`\`

### 1.4.6 String \u7C7B\u578B

1.  \u5B57\u7B26\u5B57\u9762\u91CF
    String \u6570\u636E\u7C7B\u578B\u5305\u542B\u4E00\u4E9B\u7279\u6B8A\u7684\u5B57\u7B26\u5B57\u9762\u91CF\uFF0C\u4E5F\u53EB\u8F6C\u4E49\u5E8F\u5217\uFF0C\u7528\u4E8E\u8868\u793A\u975E\u6253\u5370\u5B57\u7B26\uFF0C\u6216\u8005\u5177\u6709\u5176\u4ED6\u7528\u9014\u7684\u5B57\u7B26

| \u5B57\u9762\u91CF |                                             \u542B\u4E49                                             |
| :----: | :------------------------------------------------------------------------------------------: |
|   \\n   |                                             \u6362\u884C                                             |
|   \\t   |                                             \u5236\u8868                                             |
|   \\b   |                                             \u7A7A\u683C                                             |
|   \\r   |                                             \u56DE\u8F66                                             |
|   \\f   |                                             \u8FDB\u7EB8                                             |
|  \\\\\\\\  |                                             \u659C\u6760                                             |
|  \\\\\\'  |             \u5355\u5F15\u53F7\uFF08'\uFF09\uFF0C\u5728\u7528\u5355\u5F15\u53F7\u8868\u793A\u7684\u5B57\u7B26\u4E32\u4E2D\u4F7F\u7528\u3002\u4F8B\u5982\uFF1A'He said, \\'hey.\\''             |
|  \\\\\\"  |             \u53CC\u5F15\u53F7\uFF08"\uFF09\uFF0C\u5728\u7528\u53CC\u5F15\u53F7\u8868\u793A\u7684\u5B57\u7B26\u4E32\u4E2D\u4F7F\u7528\u3002\u4F8B\u5982\uFF1A"He said, \\"hey.\\""             |
|  \\xnn  |           \u4EE5\u5341\u516D\u8FDB\u5236\u4EE3\u7801 nn \u8868\u793A\u7684\u4E00\u4E2A\u5B57\u7B26\uFF08\u5176\u4E2D n \u4E3A 0 \uFF5E F\uFF09\u3002\u4F8B\u5982\uFF0C\\x41 \u8868\u793A"A"           |
| \\unnnn | \u4EE5\u5341\u516D\u8FDB\u5236\u4EE3\u7801 nnnn \u8868\u793A\u7684\u4E00\u4E2A Unicode \u5B57\u7B26\uFF08\u5176\u4E2D n \u4E3A 0 \uFF5E F\uFF09\u3002\u4F8B\u5982\uFF0C\\u03a3 \u8868\u793A\u5E0C\u814A\u5B57\u7B26 \u03A3 |

2.  \u5B57\u7B26\u4E32\u7684\u7279\u70B9
    ECMAScript \u4E2D\u7684\u5B57\u7B26\u4E32\u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5B57\u7B26\u4E32\u4E00\u65E6\u521B\u5EFA\uFF0C\u5B83\u4EEC\u7684\u503C\u5C31\u4E0D\u80FD\u6539\u53D8\u3002\u8981\u6539\u53D8\u67D0\u4E2A\u53D8\u91CF\u4FDD\u5B58\u7684\u5B57\u7B26\u4E32\uFF0C\u9996\u5148\u8981\u9500\u6BC1\u539F\u6765\u7684\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u518D\u7528\u53E6\u4E00\u4E2A\u5305\u542B\u65B0\u503C\u7684\u5B57\u7B26\u4E32\u586B\u5145\u8BE5\u53D8\u91CF

3.  \u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32
    \u8981\u628A\u4E00\u4E2A\u503C\u8F6C\u6362\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32\u6709\u4E24\u79CD\u65B9\u5F0F:

- toString()\u65B9\u6CD5

\`\`\`javascript
var age = 11
var ageAsString = age.toString() // \u5B57\u7B26\u4E32"11"
var found = true
var foundAsString = found.toString() // \u5B57\u7B26\u4E32"true"
\`\`\`

- String()\u65B9\u6CD5

\`\`\`javascript
var value1 = 10
var value2 = true
var value3 = null
var value4
alert(String(value1)) // "10"
alert(String(value2)) // "true"
alert(String(value3)) // "null"
alert(String(value4)) // "undefined"
\`\`\`

\u672A\u5B8C\u5F85\u7EED\u3002\u3002\u3002`,isRecommend:!1,isPublish:!1,createDate:"2021-01-02T11:07:20.000Z",updateDate:"2022-03-02T09:15:26.000Z"},{id:12,title:"ES6\u5E38\u7528\u77E5\u8BC6\u70B9\u603B\u7ED3\u5F52\u7EB3",author:"\u5F20\u4F20\u9F99",category:"JavaScript",description:"ES6\u5E38\u7528\u77E5\u8BC6\u70B9\u603B\u7ED3\u5F52\u7EB3",content:`
## \u4E00\u3001\u65B0\u7684\u58F0\u660E\u65B9\u5F0F

1. let\uFF1A\u58F0\u660E\u7684\u53D8\u91CF\u53EA\u5728\u4EE3\u7801\u5757\u5185\u6709\u6548
2. const\uFF1A \u58F0\u660E\u5E38\u91CF\uFF0C\u58F0\u660E\u65F6\u5FC5\u987B\u8D4B\u503C\u4E14\u4E0D\u53EF\u6539\u53D8

\`\`\`javascript
let a = 'aaa'
const b = 'bbb'
console.log(a, b)
\`\`\`

## \u4E8C\u3001\u53D8\u91CF\u7684\u89E3\u6784\u8D4B\u503C

> \u6570\u7EC4\u89E3\u6784\u8D4B\u503C

\`\`\`javascript
let [aa, bb, cc] = [0, 1, 2]
\`\`\`

> \u5BF9\u8C61\u89E3\u6784\u8D4B\u503C

\`\`\`javascript
let { cnName, enName } = {
  id: '151521574',
  cnName: '\u5F20\u751F',
  enName: 'Ronnie'
}
console.log(cnName, enName) //'\u5F20\u751F'\uFF0C'Ronnie'
\`\`\`

## \u4E09\u3001\u6269\u5C55\u8FD0\u7B97\u7B26\u548C rest \u8FD0\u7B97\u7B26

> \u5BF9\u8C61\u6269\u5C55\u8FD0\u7B97\u7B26

\`\`\`javascript
function test01(...arg) {
  console.log(arg[0]) //1
  console.log(arg[1]) //2
  console.log(arg[2]) //3
  console.log(arg[3]) //undefined
}
test01(1, 2, 3)

let arr1 = [1, 2, 3]
let arr2 = [...arr1]
arr2.push(4) //\u6B64\u65F6\u4E0D\u6539\u53D8arr1
console.log(arr1) //[1,2,3]
console.log(arr2) //[1,2,3,4]
\`\`\`

> rest \u8FD0\u7B97\u7B26(\u8868\u793A\u5269\u4F59\u53C2\u6570)

\`\`\`javascript
function test02(first, ...arg) {
  for (let item of arg) {
    console.log(item) //\u4F9D\u6B21\u8F93\u51FA1,2\uFF0C3,4,5,6
  }
  console.log(first) //0
}
test02(0, 1, 2, 3, 4, 5, 6)
\`\`\`

## \u56DB\u3001\u5B57\u7B26\u4E32\u6A21\u7248

> \u5B57\u7B26\u4E32\u6A21\u7248

\`\`\`javascript
let name = 'Ronnie'
let str = \`\u5927\u5BB6\u597D\uFF0C\u6211\u662F<b>\${name}</b><br/>\u5F88\u9AD8\u5174\u8BA4\u8BC6\u5927\u5BB6\`
console.log(str)
\`\`\`

> \u5B57\u7B26\u4E32\u67E5\u627E

\`\`\`javascript
let str = \`\u5927\u5BB6\u597D\uFF0C\u6211\u662F<b>\${name}</b><br/>\u5F88\u9AD8\u5174\u8BA4\u8BC6\u5927\u5BB6\`
console.log(str.includes('\u4E0D\u9AD8\u5174')) //false
console.log(str.startsWith('\u5927\u5BB6\u597D')) //\u5224\u65AD\u5F00\u5934\u662F\u5426\u5B58\u5728\uFF0Ctrue
console.log(str.endsWith('\u5927\u5BB6')) //\u5224\u65AD\u7ED3\u5C3E\u662F\u5426\u5B58\u5728\uFF0Ctrue
\`\`\`

## \u4E94\u3001\u6570\u5B57\u64CD\u4F5C

> \u4E8C\u8FDB\u5236\u58F0\u660E Binary

\`\`\`javascript
let binary = 0b010101
console.log(binary) //21
\`\`\`

> \u516B\u8FDB\u5236\u58F0\u660E Octal

\`\`\`javascript
let octal = 0o666
console.log(octal) //438
\`\`\`

> \u5224\u65AD\u662F\u5426\u4E3A\u6570\u5B57

\`\`\`javascript
Number.isFinite(888) //true
Number.isFinite('888') //false\uFF0C\u4E0D\u4F1A\u5148\u5C06\u5B57\u7B26\u4E32\u5C1D\u8BD5\u8F6C\u6362\u6210\u6570\u5B57\u518D\u5224\u65AD
Number.isFinite('asd') //false
Number.isFinite(undefined) //false
Number.isFinite(NaN) //false
\`\`\`

> \u5224\u65AD\u662F\u5426\u662F\u6574\u6570

\`\`\`javascript
Number.isInteger(1.1) //false
Number.isInteger(1) //true
\`\`\`

> \u6700\u5927\u548C\u6700\u5C0F\u5B89\u5168\u6574\u6570

\`\`\`javascript
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
\`\`\`

> \u5224\u65AD\u662F\u5426\u4E3A\u5B89\u5168\u6574\u6570

\`\`\`javascript
Number.isSafeInteger(Math.pow(2, 53) - 1) //true
Number.isSafeInteger(Math.pow(2, 53) + 1) //false
\`\`\`

## \u516D\u3001\u65B0\u589E\u7684\u6570\u7EC4\u77E5\u8BC6

> \u6570\u7EC4\u683C\u5F0F\u8F6C\u6362: Array.from\u3001 Array.of

\`\`\`javascript
let json = {
  '0': 'Ronnie',
  '1': 'Rose',
  '2': 'zhangsheng',
  '3': 'Json',
  length: 4
}

let jsonArr = Array.from(json)
console.log(jsonArr) //['Ronnie','Rose','zhangsheng','Json']

let strArr = Array.of('a', 'b', 'c', 'd')
console.log(strArr) //['a', 'b', 'c', 'd']
\`\`\`

> find()\u65B9\u6CD5:\u8FD4\u56DE\u6EE1\u8DB3\u6761\u4EF6\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u4E09\u4E2A\u53C2\u6570

- value\uFF1A\u5F53\u524D\u67E5\u627E\u7684\u503C
- index: \u5F53\u524D\u67E5\u627E\u7684\u503C\u7684\u7D22\u5F15
- strArr: \u67E5\u627E\u7684\u539F\u6570\u7EC4

\`\`\`javascript
let findRst = strArr.find((value, index, strArr) => {
  return value === 'd' || value === 'a'
})
console.log(findRst) //a
\`\`\`

> fill() \u65B9\u6CD5

\`\`\`javascript
let fillArr = ['Ronnie', 'Rose', 'Zhangsheng']
fillArr.fill('es6', 1, 3) //\u5C06\u7D22\u5F15\u4E3A[1,3),\u5373\u7D22\u5F15\u4E3A1\u548C2\u7684\u503C\u66FF\u6362\u4E3A'es6'
console.log(fillArr) //["Ronnie", "es6", "es6"]
\`\`\`

> for...of

\`\`\`javascript
for (let item of fillArr) {
  console.log(item)
}
//\u5E26\u7D22\u5F15\u7684\u65B9\u5F0F
for (let [index, value] of fillArr.entries()) {
  console.log(index + ':' + value)
}
\`\`\`

> entries() \u751F\u6210\u7684\u662F Iterator \u5F62\u5F0F\u7684\u6570\u7EC4,\u8FD9\u79CD\u5F62\u5F0F\u7684\u597D\u5904\u5C31\u662F\u53EF\u4EE5\u8BA9\u6211\u4EEC\u5728\u9700\u8981\u65F6\u7528 next()\u624B\u52A8\u8DF3\u8F6C\u5230\u4E0B\u4E00\u4E2A\u503C

\`\`\`javascript
let list = fillArr.entries()
console.log(list.next().value) //[0, "Ronnie"]
console.log(list.next().value) //[1, "es6"]
console.log(list.next().value) //[2, "es6"]
console.log(list.next().value) //undefined
\`\`\`

> some \u65B9\u6CD5: \u8FD4\u56DE\u4E00\u4E2A Boolean\uFF0C\u5224\u65AD\u662F\u5426\u6709\u5143\u7D20\u7B26\u5408 func \u6761\u4EF6

\`\`\`javascript
let someArr = [1, 2, 3, 4]
someArr.some((item) => item > 1) //true
\`\`\`

> every \u65B9\u6CD5: \u8FD4\u56DE\u4E00\u4E2A Boolean\uFF0C\u5224\u65AD\u6BCF\u4E00\u4E2A\u5143\u7D20\u662F\u5426\u7B26\u5408 func \u6761\u4EF6

\`\`\`javascript
let everyArr = [1, 2, 3, 4]
everyArr.every((item) => item > 3) //false
everyArr.every((item) => item >= 1) //true
\`\`\`

> filter \u65B9\u6CD5: \u8FD4\u56DE\u4E00\u4E2A\u7B26\u5408 func \u6761\u4EF6\u7684\u5143\u7D20\u6570\u7EC4,\u4E0D\u6539\u53D8\u539F\u6765\u6570\u7EC4

\`\`\`javascript
let ages = [23, 28, 25, 32]
ages.filter((item) => item > 25) //[28,32]
console.log(ages) //[23, 28, 25, 32]
\`\`\`

> map \u65B9\u6CD5: \u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 array\uFF0C\u6570\u7EC4\u5143\u7D20\u7531\u6BCF\u4E00\u6B21\u8C03\u7528\u51FD\u6570\u4EA7\u751F\u7ED3\u679C\u7EC4\u6210

\`\`\`javascript
let mapArr = [1, 2, 3, 4, 5, 6]
mapArr.map((item) => item + 1) //[2,3,4,5,6,7]
\`\`\`

> in \u65B9\u6CD5:\u7528\u6765\u5224\u65AD\u5BF9\u8C61\u6216\u8005\u6570\u7EC4\u4E2D\u662F\u5426\u5B58\u5728\u67D0\u4E2A key \u6216\u7D22\u5F15

\`\`\`javascript
let inObj = {
  cnName: '\u5F20\u751F',
  enName: 'Ronnie'
}
console.log('enName' in inObj) //true
console.log(4 in ages) //false
\`\`\`

## \u4E03\u3001ES6 \u4E2D\u7684\u51FD\u6570

> \u51FD\u6570\u89E3\u6784 json \u5BF9\u8C61

\`\`\`javascript
let jsonObj = {
  cnName: '\u5F20\u751F',
  enName: 'Rose'
}

function fun({ cnName, enName = 'Ronnie' }) {
  console.log(cnName, enName)
}
fun(jsonObj) //\u5F20\u751F Rose
\`\`\`

## \u516B\u3001ES6 \u4E2D\u7684\u5BF9\u8C61

> \u5BF9\u8C61\u8D4B\u503C\uFF1AES6 \u5141\u8BB8\u628A\u58F0\u660E\u7684\u53D8\u91CF\u76F4\u63A5\u8D4B\u503C\u7ED9\u5BF9\u8C61

\`\`\`javascript
let nameObj = { cnName, enName }
console.log(nameObj) //{cnName: "\u5F20\u751F",enName: "Ronnie"}

//\u5BF9\u8C61Key\u503C\u6784\u5EFA
let key = 'skill'
let keyObj = {
  [key]: 'web'
}
console.log(keyObj) //skill: "web"
\`\`\`

> Object.is( ) \u5BF9\u8C61\u6BD4\u8F83,===\u4E3A\u540C\u503C\u76F8\u7B49\uFF0Cis()\u4E3A\u4E25\u683C\u76F8\u7B49

\`\`\`javascript
console.log(+0 === -0) //true
console.log(NaN === NaN) //false
console.log(Object.is(+0, -0)) //false
console.log(Object.is(NaN, NaN)) //true
\`\`\`

> Object.assign()\u5BF9\u8C61\u5408\u5E76

\`\`\`javascript
let obj1 = { cnName: '\u5F20\u751F' }
let obj2 = { enName: 'Ronnie', age: 26 }
let obj3 = Object.assign(obj1, obj2)
console.log(obj3) //{cnName: "\u5F20\u751F", enName: "Ronnie", age: 26}
\`\`\`

## \u4E5D\u3001Set\u3001WeakSet \u4EE5\u53CA map \u6570\u636E\u7ED3\u6784

Set:Set \u548C Array \u7684\u533A\u522B\u662F Set \u4E0D\u5141\u8BB8\u5185\u90E8\u6709\u91CD\u590D\u7684\u503C\uFF0C\u5982\u679C\u6709\u53EA\u663E\u793A\u4E00\u4E2A\uFF0C\u76F8\u5F53\u4E8E\u53BB\u91CD

> Set \u7684\u58F0\u660E

\`\`\`javascript
let setArr = new Set(['ronnie', 'zhangsheng', 'web'])
console.log(setArr) //Set(3)\xA0{'ronnie', 'zhangsheng', 'web'}
\`\`\`

> Set \u503C\u7684\u589E\u5220\u67E5

\`\`\`javascript
setArr.add('\u524D\u7AEF') //\u589E
setArr.delete('web') //\u5220
setArr.has('\u524D\u7AEF') //\u67E5: true
setArr.clear() //\u6E05\u7A7A
\`\`\`

> Set \u7684\u904D\u5386

\`\`\`javascript
for (let item of setArr) {
  console.log(item)
}
\`\`\`

> size \u5C5E\u6027

\`\`\`javascript
console.log(setArr.size) //3
\`\`\`

WeakSet\uFF1A\u7528\u4E8E\u5B58\u50A8\u5BF9\u8C61\u7684 set

> WeakSet \u58F0\u660E\uFF0C\u58F0\u660E\u662F\u4E0D\u5141\u8BB8\u8D4B\u503C\uFF0C\u5426\u5219\u62A5\u9519,\u540C\u65F6 WeakSet \u91CC\u8FB9\u7684\u503C\u4E5F\u662F\u4E0D\u5141\u8BB8\u91CD\u590D\u7684

\`\`\`javascript
let weakObj = new WeakSet()
weakObj.add({ cnName: '\u5F20\u751F', age: 26 })
console.log(weakObj)
\`\`\`

map\uFF1Amap \u662F\u4E00\u79CD\u7075\u6D3B\uFF0C\u7B80\u5355\u7684\u9002\u5408\u4E00\u5BF9\u4E00\u67E5\u627E\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5B83\u8DDF json \u5BF9\u8C61\u5F88\u50CF\uFF0C\u4F46\u53CD\u5E94\u901F\u5EA6\u66F4\u9AD8\uFF0C\u800C\u4E14 Map \u7684\u7075\u6D3B\u6027\u8981\u66F4\u597D\uFF0C\u4F60\u53EF\u4EE5\u628A\u5B83\u770B\u6210\u4E00\u79CD\u7279\u6B8A\u7684\u952E\u503C\u5BF9\uFF0C\u4F46 key \u53EF\u4EE5\u8BBE\u7F6E\u6210\u6570\u7EC4\uFF0C\u503C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u6210\u5B57\u7B26\u4E32

> map \u7684\u58F0\u660E

\`\`\`javascript
let map = new Map()
\`\`\`

> map \u7684\u589E\u5220\u67E5

\`\`\`javascript
let obj4 = { cnName: '\u5F20\u751F', age: 26 }
map.set('ronnie', obj4) //\u589E
map.set('ronnie', '\u6C38\u8FDC\u5341\u516B\u5C81') //\u6539\uFF1A\u76F8\u540Ckey\u5219\u4FEE\u6539
map.set(obj4, 'Ronnie') //\u589E\uFF1Akey\u4E5F\u53EF\u4EE5\u4E3A\u5BF9\u8C61
console.log(map)
console.log(map.get(obj4)) //\u53D6\u503C\uFF1A Ronnie
map.delete('ronnie') //\u5220\u9664:\u6839\u636Ekey\u503C\u5220\u9664
console.log(map.size) //size\u5C5E\u6027
console.log(map.has(obj4)) //has\uFF1A\u67E5\u627E\u662F\u5426\u5B58\u5728
map.clear() //clear\u6E05\u9664\u6240\u6709\u5143\u7D20
console.log(map)
\`\`\`

## \u5341\u3001Proxy \u9884\u5904\u7406

Proxy: \u7C7B\u4F3C\u4E8E\u94A9\u5B50\u51FD\u6570\uFF0C\u5F53\u6211\u4EEC\u5728\u64CD\u4F5C\u4E00\u4E2A\u5BF9\u8C61\u6216\u8005\u65B9\u6CD5\u65F6\u4F1A\u6709\u51E0\u79CD\u524D\u7F6E\u52A8\u4F5C

- get \u5C5E\u6027\uFF1Aget \u5C5E\u6027\u662F\u5728\u4F60\u5F97\u5230\u67D0\u5BF9\u8C61\u5C5E\u6027\u503C\u65F6\u9884\u5904\u7406\u7684\u65B9\u6CD5\uFF0C\u5B83\u63A5\u6536\u4E09\u4E2A\u53C2\u6570
  1. target\uFF1A\u5F97\u5230\u7684\u76EE\u6807\u503C
  2. key\uFF1A\u76EE\u6807\u7684 key \u503C\uFF0C\u76F8\u5F53\u4E8E\u5BF9\u8C61\u7684\u5C5E\u6027
  3. property\uFF1A\u53EF\u9009\u53C2\u6570\uFF0C\u8FD9\u4E2A\u4E0D\u5E38\u7528
- set \u5C5E\u6027\uFF1Aset \u5C5E\u6027\u662F\u6307\u4F60\u8981\u6539\u53D8 Proxy \u5C5E\u6027\u503C\u65F6\uFF0C\u8FDB\u884C\u7684\u9884\u5148\u5904\u7406\u3002\u5B83\u63A5\u6536\u56DB\u4E2A\u53C2\u6570\u3002
  1. target:\u76EE\u6807\u503C
  2. key\uFF1A\u76EE\u6807\u7684 Key \u503C
  3. value\uFF1A\u8981\u6539\u53D8\u7684\u503C
  4. receiver\uFF1A\u6539\u53D8\u524D\u7684\u539F\u59CB\u503C

\`\`\`javascript
let pro = new Proxy(
  {
    add: function (val) {
      return val + 10
    },
    name: 'I am Ronnie'
  },
  {
    get: function (target, key) {
      console.log('come in Get')
      return target[key]
    },
    set: function (target, key, value, receiver) {
      console.log(\`setting \${key} = \${value}\`)
      return (target[key] = value)
    }
  }
)
console.log(pro.name) //\u5148\u8F93\u51FA come in Get  \u518D\u8F93\u51FA I am Ronnie
pro.name = '\u5F20\u751F' //setting name = \u5F20\u751F
\`\`\`

## \u5341\u4E00\u3001promise \u5BF9\u8C61\u7684\u4F7F\u7528

promise \u7684\u51FA\u73B0\u662F\u4E3A\u4E86\u89E3\u51B3\u56DE\u8C03\u5730\u72F1\u7684\u95EE\u9898

> promise \u7684\u57FA\u672C\u7528\u6CD5(\u4E3E\u4F8B\u8BF4\u660E)\uFF0C\u6BD4\u5982\u628A\u5927\u8C61\u653E\u5165\u51B0\u7BB1\u6709\u4E09\u4E2A\u6B65\u9AA4

1. \u6253\u5F00\u51B0\u7BB1\u95E8
2. \u628A\u5927\u8C61\u653E\u8FDB\u53BB
3. \u5173\u4E0A\u51B0\u7BB1\u95E8

\`\`\`javascript
let isSuccess = true
function step1(resolve, reject) {
  console.log('First step')
  if (isSuccess) {
    resolve('\u6210\u529F\u6253\u5F00\u51B0\u7BB1\u95E8')
  } else {
    reject('\u6253\u5F00\u51B0\u7BB1\u95E8\u51FA\u9519')
  }
}
function step2(resolve, reject) {
  console.log('Second step')
  isSuccess = false
  if (isSuccess) {
    resolve('\u6210\u529F\u628A\u5927\u8C61\u653E\u8FDB\u53BB')
  } else {
    reject('\u628A\u5927\u8C61\u653E\u8FDB\u53BB\u51FA\u9519')
  }
}
function step3(resolve, reject) {
  console.log('Third step')
  if (isSuccess) {
    resolve('\u6210\u529F\u5173\u4E0A\u51B0\u7BB1\u95E8')
  } else {
    reject('\u5173\u4E0A\u51B0\u7BB1\u95E8\u51FA\u9519')
  }
}

new Promise(step1)
  .then(function (rst) {
    console.log(rst)
    return new Promise(step2)
  })
  .then(function (rst) {
    console.log(rst)
    return new Promise(step3)
  })
  .then(function (rst) {
    // console.log(rst);
    return rst
  })
  .catch((e) => {
    console.log(e) //\u6355\u83B7Promise reject\u8FD4\u56DE\u7684\u9519\u8BEF\u4FE1\u606F
  })
\`\`\`

## \u5341\u4E8C\u3001class \u7C7B\u7684\u4F7F\u7528

> \u7C7B\u7684\u58F0\u660E\u4E0E\u4F7F\u7528

\`\`\`javascript
class Coder {
  name(val) {
    console.log(val)
    return val
  }
  skill(val) {
    console.log(this.name('Ronnie') + ':' + 'Skill-' + val)
  }
  constructor(cnName, age) {
    this.cnName = cnName
    this.age = age
  }
  introduce() {
    return this.cnName + ':' + this.age
  }
}

let Ronnie = new Coder('\u5F20\u751F', 26)
Ronnie.name('Ronnie') //Ronnie
Ronnie.skill('web') //Ronnie: Skill-web
console.log(Ronnie.introduce()) //Ronnie:26
\`\`\`

> class \u7684\u7EE7\u627F

\`\`\`javascript
class htmler extends Coder {}

let zhangsheng = new htmler()
zhangsheng.name('zhangsheng') //zhangsheng
\`\`\`

## \u5341\u4E09\u3001\u6A21\u5757\u5316\u64CD\u4F5C

> \u6A21\u5757\u5316\u64CD\u4F5C\u4E3B\u8981\u5305\u62EC\u4E24\u4E2A\u65B9\u9762

1. export :\u8D1F\u8D23\u8FDB\u884C\u6A21\u5757\u5316\uFF0C\u4E5F\u662F\u6A21\u5757\u7684\u8F93\u51FA
2. import : \u8D1F\u8D23\u628A\u6A21\u5757\u5F15\uFF0C\u4E5F\u662F\u6A21\u5757\u7684\u5F15\u5165\u64CD\u4F5C

> export \u7684\u7528\u6CD5:export \u53EF\u4EE5\u8BA9\u6211\u4EEC\u628A\u53D8\u91CF\uFF0C\u51FD\u6570\uFF0C\u5BF9\u8C61\u8FDB\u884C\u6A21\u5757\u5316\uFF0C\u63D0\u4F9B\u5916\u90E8\u8C03\u7528\u63A5\u53E3\uFF0C\u8BA9\u5916\u90E8\u8FDB\u884C\u5F15\u7528

\`\`\`javascript
export let name = 'Ronnie' //export   temp.js

import { a } from './temp.js' //\u5728index.js\u4E2D\u4EE5import\u7684\u5F62\u5F0F\u5F15\u5165  \u6B64\u65F6\u7684a\u5BF9\u5E94\u7684\u662Ftemp.js\u4E2D\u8F93\u51FA\u7684name
\`\`\`

> \u591A\u53D8\u91CF\u7684\u8F93\u51FA\u4EE5\u53CA\u51FD\u6570\u7684\u8F93\u51FA

\`\`\`javascript
let var1 = 'Ronnie'
var var2 = '\u5F20\u751F'
var var3 = 'zhangsheng'
function add(a, b) {
  return a + b
}
export { var1, var2, var3, add }
import { var1, add } from './temp' //\u5BF9\u5E94\u7684\u5F15\u5165\u65B9\u5F0F
\`\`\`

> export defalut: \u53EA\u80FD\u8F93\u51FA\u4E00\u4E2A

\`\`\`javascript
let str = 'ronnie is so handsome'
export default str
import aaa from './temp.js' //\u5BF9\u5E94\u7684\u5F15\u5165\u65B9\u5F0F\uFF0C\u5F15\u5165\u7684\u540D\u79F0\u53EF\u4EE5\u4EFB\u610F
\`\`\`

OK\uFF0C\u4EE5\u4E0A\u5C31\u662F\u5173\u4E8E ES6 \u7684\u5E38\u7528\u77E5\u8BC6\u70B9\u4E86\uFF0C\u5173\u4E8E Proxy \u9884\u5904\u7406\u7684\u4ECB\u7ECD\u53EF\u80FD\u4E0D\u662F\u5F88\u8BE6\u7EC6\uFF0C\u5177\u4F53\u8BB2\u89E3\u7684\u8BDD\u5C06\u4F1A\u662F\u957F\u7BC7\u5927\u8BBA\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5C31\u4E0D\u6DF1\u5165\u4ECB\u7ECD\u4E86\uFF0C\u611F\u5174\u8DA3\u7684\u670B\u53CB\u53EF\u4EE5\u81EA\u884C\u641C\u7D22\u522B\u4EBA\u7684\u6587\u7AE0\uFF0C\u76F8\u4FE1\u5F88\u591A\u670B\u53CB\u90FD\u89E3\u91CA\u5F97\u6BD4\u6211\u597D\u3002
`,isRecommend:!0,isPublish:!0,createDate:"2021-01-02T11:06:42.000Z",updateDate:"2021-09-17T09:33:24.000Z"},{id:11,title:"Css Flex\u5E03\u5C40",author:"\u5F20\u4F20\u9F99",category:"Css",description:"CSS Flex\u5E03\u5C40",content:`## \u5C5E\u6027\u603B\u89C8

| \u4F5C\u7528\u5728 flex \u5BB9\u5668\u4E0A | \u4F5C\u7528\u5728 flex \u5B50\u9879\u4E0A |
| ------------------ | ------------------ |
| flex-direction     | order              |
| flex-wrap          | flex-grow          |
| flex-flow          | flex-shrink        |
| justify-content    | flex-basis         |
| align-items        | flex               |
| align-content      | align-self         |

> \u65E0\u8BBA\u4F5C\u7528\u5728 flex \u5BB9\u5668\u4E0A\uFF0C\u8FD8\u662F\u4F5C\u7528\u5728 flex \u5B50\u9879\uFF0C\u90FD\u662F\u63A7\u5236\u7684 flex \u5B50\u9879\u7684\u5448\u73B0\uFF0C\u53EA\u662F\u524D\u8005\u63A7\u5236\u7684\u662F\u6574\u4F53\uFF0C\u540E\u8005\u63A7\u5236\u7684\u662F\u4E2A\u4F53\u3002

## \u5C5E\u6027\u8BE6\u89E3

### 1. flex-direction

\`flex-direction\`\u7528\u6765\u63A7\u5236\u5B50\u9879\u6574\u4F53\u5E03\u5C40\u65B9\u5411\uFF0C\u662F\u4ECE\u5DE6\u5F80\u53F3\u8FD8\u662F\u4ECE\u53F3\u5F80\u5DE6\uFF0C\u662F\u4ECE\u4E0A\u5F80\u4E0B\u8FD8\u662F\u4ECE\u4E0B\u5F80\u4E0A\u3002

\u5C5E\u6027\u5982\u4E0B:

\`row\`: \u9ED8\u8BA4\u503C\uFF0C\u663E\u793A\u4E3A\u884C\uFF0C\u4ECE\u5DE6\u5230\u53F3

\`row-reverse\`: \u663E\u793A\u4E3A\u884C\uFF0C\u65B9\u5411\u4ECE\u53F3\u5230\u5DE6\uFF0C\u4E0E row \u76F8\u53CD

\`column\`: \u663E\u793A\u4E3A\u5217\uFF0C\u4ECE\u4E0A\u81F3\u4E0B

\`column-reverse\`: \u663E\u793A\u4E3A\u5217\uFF0C\u4ECE\u4E0B\u5F80\u4E0A

\u8BED\u6CD5\u5982\u4E0B:

\`\`\`css
flex-direction: row | row-reverse | column | column-reverse;
\`\`\`

### 2. flex-wrap

\`flex-wrap\`\u7528\u6765\u63A7\u5236\u5B50\u9879\u662F\u5355\u884C\u663E\u793A\u8FD8\u662F\u6362\u884C\u663E\u793A

\u5C5E\u6027\u5982\u4E0B:

\`nowrap\`: \u9ED8\u8BA4\u503C\uFF0C\u4E0D\u6362\u884C\uFF0C\u6240\u6709\u7684\u5B50\u9879\u5355\u884C\u663E\u793A\uFF0C\u5982\u679C\u5BBD\u5EA6\u6EA2\u51FA\u4F1A\u538B\u7F29\u5BBD\u5EA6\u663E\u793A

\`wrap\`: \u5BBD\u5EA6\u6EA2\u51FA\u5219\u6362\u884C\u663E\u793A

\`wrap-reverse\`: \u5BBD\u5EA6\u6EA2\u51FA\u6362\u884C\u663E\u793A\uFF0C\u4ECE\u4E0B\u5F80\u4E0A\u663E\u793A\uFF0C\u5373\u539F\u672C\u6362\u884C\u5728\u4E0B\u9762\u7684\u5B50\u9879\u663E\u793A\u5728\u4E0A\u9762

\u8BED\u6CD5\u5982\u4E0B:

\`\`\`css
flex-wrap: nowrap | wrap | wrap-reverse;
\`\`\`

### 3. flex-flow

\`flex-flow\`\u662F **_flex-direction_** \u548C **_flex-wrap_** \u7684\u7F29\u5199

\u8BED\u6CD5\u5982\u4E0B:

\`\`\`css
flex-flow: row wrap;
\`\`\`

> \u5F53\u591A\u5C5E\u6027\u540C\u65F6\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u4F7F\u7528\u7A7A\u683C\u5206\u9694

### 4. justify-content

\`justify-content\`\u5C5E\u6027\u51B3\u5B9A\u4E86\u6C34\u5E73\u65B9\u5411\u5B50\u9879\u7684\u5BF9\u9F50\u548C\u5206\u5E03\u65B9\u5F0F

\u5C5E\u6027\u5982\u4E0B:

\`flex-start\`: \u9ED8\u8BA4\u503C\uFF0C\u5DE6\u5BF9\u9F50

\`flex-end\`: \u53F3\u5BF9\u9F50

\`center\`: \u5C45\u4E2D\u5BF9\u9F50

\`space-between\`: \u4E24\u7AEF\u5BF9\u9F50\uFF0C\u591A\u4F59\u7684\u7A7A\u767D\u53EA\u5728\u5143\u7D20\u4E2D\u95F4\u5206\u914D

\`space-around\`: \u73AF\u7ED5\uFF0C\u6BCF\u4E2A\u5B50\u9879\u4E24\u4FA7\u90FD\u73AF\u7ED5\u4E92\u4E0D\u5E72\u6270\u7684\u7B49\u5BBD\u95F4\u8DDD\uFF0C\u6700\u7EC8\u8868\u73B0\u4E3A\u4E24\u7AEF\u7A7A\u767D\u662F\u4E2D\u95F4\u7A7A\u767D\u7684\u4E00\u534A

\`space-evenly\`: \u5747\u5300\u5206\u5E03\uFF0C\u6BCF\u4E2A\u5B50\u9879\u4E24\u4FA7\u7A7A\u767D\u5B8C\u5168\u76F8\u7B49

\u8BED\u6CD5\u5982\u4E0B:

\`\`\`css
justify-content: flex-start | flex-end | center | space-between | space-arount |
  space-evenly;
\`\`\`

### 5. align-items

\`align-items\`\u4E2D\u7684 items \u6307\u7684\u662F flex \u4E2D\u7684\u5B50\u9879\uFF0C\u56E0\u6B64\`align-items\`\u6307\u7684\u5C31\u662F flex \u5B50\u9879\u4EEC\u76F8\u5BF9\u4E8E flex \u5BB9\u5668\u5728\u5782\u76F4\u65B9\u5411\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F

\u5C5E\u6027\u5982\u4E0B:

\`stretch\`: \u9ED8\u8BA4\u503C\uFF0C\u5B50\u9879\u62C9\u4F38\u663E\u793A\u3002\u5982\u679C\u5B50\u9879\u8BBE\u7F6E\u4E86\u9AD8\u5EA6\uFF0C\u5219\u6309\u8BBE\u7F6E\u7684\u9AD8\u5EA6\u6E32\u67D3\uFF0C\u800C\u4E0D\u662F\u62C9\u4F38

\`flex-start\`: \u9876\u90E8\u5BF9\u9F50

\`flex-end\`: \u5E95\u90E8\u5BF9\u9F50

\`center\`: \u5782\u76F4\u5C45\u4E2D\u5BF9\u9F50

\`baseline\`: \u76F8\u5BF9\u4E8E flex \u5BB9\u5668\u7684\u57FA\u7EBF\u5BF9\u9F50

### 6. align-content

\`align-content\`\u53EF\u4EE5\u770B\u6210\u662F\u548C justify-content \u662F\u76F8\u4F3C\u4E14\u5BF9\u7ACB\u7684\u5C5E\u6027\uFF0C\`justify-content\`\u6307\u7684\u662F\u6C34\u5E73\u65B9\u5411 flex \u5B50\u9879\u7684\u5BF9\u9F50\u548C\u5206\u5E03\u65B9\u5F0F\uFF0C\u800C align-content \u5219\u662F\u6307\u5782\u76F4\u65B9\u5411\u6BCF\u4E00\u884C flex \u5B50\u9879\u7684\u5BF9\u9F50\u548C\u5206\u5E03\u65B9\u5F0F

> \u5982\u679C\u6240\u6709 flex \u5B50\u9879\u53EA\u6709\u4E00\u884C\uFF0C\u5219 align-content \u5C5E\u6027\u662F\u6CA1\u6709\u4EFB\u4F55\u6548\u679C\u7684

\u5C5E\u6027\u5982\u4E0B:

\`stretch\`: \u9ED8\u8BA4\u503C\u3002\u6BCF\u4E00\u884C flex \u5B50\u5143\u7D20\u90FD\u7B49\u6BD4\u4F8B\u62C9\u4F38\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u5171\u4E24\u884C flex \u5B50\u5143\u7D20\uFF0C\u5219\u6BCF\u4E00\u884C\u62C9\u4F38\u9AD8\u5EA6\u662F 50%\u3002

\`flex-start\`: \u903B\u8F91 CSS \u5C5E\u6027\u503C\uFF0C\u4E0E\u6587\u6863\u6D41\u65B9\u5411\u76F8\u5173\u3002\u9ED8\u8BA4\u8868\u73B0\u4E3A\u9876\u90E8\u5806\u780C\u3002

\`flex-end\`: \u903B\u8F91 CSS \u5C5E\u6027\u503C\uFF0C\u4E0E\u6587\u6863\u6D41\u65B9\u5411\u76F8\u5173\u3002\u9ED8\u8BA4\u8868\u73B0\u4E3A\u5E95\u90E8\u5806\u653E\u3002

\`center\`: \u8868\u73B0\u4E3A\u6574\u4F53\u5782\u76F4\u5C45\u4E2D\u5BF9\u9F50\u3002

\`space-between\`: \u8868\u73B0\u4E3A\u4E0A\u4E0B\u4E24\u884C\u4E24\u7AEF\u5BF9\u9F50\u3002\u5269\u4E0B\u6BCF\u4E00\u884C\u5143\u7D20\u7B49\u5206\u5269\u4F59\u7A7A\u95F4\u3002

\`space-around\`: \u6BCF\u4E00\u884C\u5143\u7D20\u4E0A\u4E0B\u90FD\u4EAB\u6709\u72EC\u7ACB\u4E0D\u91CD\u53E0\u7684\u7A7A\u767D\u7A7A\u95F4\u3002

\`space-evenly\`: \u6BCF\u4E00\u884C\u5143\u7D20\u90FD\u5B8C\u5168\u4E0A\u4E0B\u7B49\u5206\u3002

### 7. order (==\u4F5C\u7528\u5728 flex \u5B50\u9879==)

\`order\`\u53EF\u4EE5\u6539\u53D8\u4E00\u4E2A flex \u5B50\u9879\u7684\u6392\u5E8F\u4F4D\u7F6E

> \u6240\u6709 flex \u5B50\u9879\u9ED8\u8BA4 order \u5C5E\u6027\u503C\u4E3A 0\uFF0C\u5982\u679C\u60F3\u8BA9\u67D0\u4E00\u5B50\u9879\u5728\u6700\u524D\u9762\u663E\u793A\uFF0C\u8BBE\u7F6E\u6BD4 0 \u5C0F\u7684\u6574\u6570\u503C\u5C31\u884C\u4E86\uFF0C\u5982\uFF1A-1

\u8BED\u6CD5\u5982\u4E0B:

\`\`\`css
order: -1;
\`\`\`

### 8. flex-grow (==\u4F5C\u7528\u5728 flex \u5B50\u9879==)

\`flex-grow\`\u6307\u6269\u5C55 flex \u5B50\u9879\u6240\u5360\u636E\u7684\u5BBD\u5EA6\uFF0C\u6269\u5C55\u7684\u7A7A\u95F4\u5C31\u662F\u9664\u53BB\u5143\u7D20\u5916\u5269\u4F59\u7684\u7A7A\u767D\u95F4\u9699

> flex-grow \u4E0D\u652F\u6301\u8D1F\u503C\uFF0C\u9ED8\u8BA4\u503C\u662F 0\uFF0C\u8868\u793A\u4E0D\u5360\u7528\u5269\u4F59\u7684\u7A7A\u767D\u95F4\u9699\u6269\u5C55\u81EA\u5DF1\u7684\u5BBD\u5EA6\u3002\u5982\u679C flex-grow \u5927\u4E8E 0\uFF0C\u5219 flex \u5BB9\u5668\u5269\u4F59\u7A7A\u95F4\u7684\u5206\u914D\u5C31\u4F1A\u53D1\u751F\uFF0C\u5177\u4F53\u89C4\u5219\u5982\u4E0B\uFF1A

- \u6240\u6709\u5269\u4F59\u7A7A\u95F4\u603B\u91CF\u662F 1\u3002
- \u5982\u679C\u53EA\u6709\u4E00\u4E2A flex \u5B50\u9879\u8BBE\u7F6E\u4E86 flex-grow \u5C5E\u6027\u503C\uFF1A

  - \u5982\u679C flex-grow \u503C\u5C0F\u4E8E 1\uFF0C\u5219\u6269\u5C55\u7684\u7A7A\u95F4\u5C31\u603B\u5269\u4F59\u7A7A\u95F4\u548C\u8FD9\u4E2A\u6BD4\u4F8B\u7684\u8BA1\u7B97\u503C\u3002
  - \u5982\u679C flex-grow \u503C\u5927\u4E8E 1\uFF0C\u5219\u72EC\u4EAB\u6240\u6709\u5269\u4F59\u7A7A\u95F4\u3002

- \u5982\u679C\u6709\u591A\u4E2A flex \u8BBE\u7F6E\u4E86 flex-grow \u5C5E\u6027\u503C\uFF1A
  - \u5982\u679C flex-grow \u503C\u603B\u548C\u5C0F\u4E8E 1\uFF0C\u5219\u6BCF\u4E2A\u5B50\u9879\u6269\u5C55\u7684\u7A7A\u95F4\u5C31\u603B\u5269\u4F59\u7A7A\u95F4\u548C\u5F53\u524D\u5143\u7D20\u8BBE\u7F6E\u7684 flex-grow \u6BD4\u4F8B\u7684\u8BA1\u7B97\u503C\u3002
  - \u5982\u679C flex-grow \u503C\u603B\u548C\u5927\u4E8E 1\uFF0C\u5219\u6240\u6709\u5269\u4F59\u7A7A\u95F4\u88AB\u5229\u7528\uFF0C\u5206\u914D\u6BD4\u4F8B\u5C31\u662F flex-grow \u5C5E\u6027\u503C\u7684\u6BD4\u4F8B\u3002\u4F8B\u5982\u6240\u6709\u7684 flex \u5B50\u9879\u90FD\u8BBE\u7F6E flex-grow:1\uFF0C\u5219\u8868\u793A\u5269\u4F59\u7A7A\u767D\u95F4\u9699\u5927\u5BB6\u7B49\u5206\uFF0C\u5982\u679C\u8BBE\u7F6E\u7684 flex-grow \u6BD4\u4F8B\u662F 1:2:1\uFF0C\u5219\u4E2D\u95F4\u7684 flex \u5B50\u9879\u5360\u636E\u4E00\u534A\u7684\u7A7A\u767D\u95F4\u9699\uFF0C\u5269\u4E0B\u7684\u524D\u540E\u4E24\u4E2A\u5143\u7D20\u7B49\u5206\u3002

\u8BED\u6CD5\u5982\u4E0B:

\`\`\`css
flex-grow: 0.5; /* \u6570\u503C\uFF0C\u53EF\u4EE5\u662F\u5C0F\u6570\uFF0C\u9ED8\u8BA4\u503C\u662F 0 */
\`\`\`

### 9. flex-shrink(==\u4F5C\u7528\u5728 flex \u5B50\u9879==)

shrink: \u6536\u7F29\uFF0C\`flex-shrink\`\u6307\u7684\u662F\u5F53 flex \u5BB9\u5668\u7A7A\u95F4\u4E0D\u8DB3\u65F6\u5019\uFF0C\u5355\u4E2A\u5143\u7D20\u7684\u6536\u7F29\u6BD4\u4F8B\u3002

> flex-shrink \u4E0D\u652F\u6301\u8D1F\u503C\uFF0C\u9ED8\u8BA4\u503C\u662F 1\uFF0C\u4E5F\u5C31\u662F\u9ED8\u8BA4\u6240\u6709\u7684 flex \u5B50\u9879\u90FD\u4F1A\u6536\u7F29\u3002\u5982\u679C\u8BBE\u7F6E\u4E3A 0\uFF0C\u5219\u8868\u793A\u4E0D\u6536\u7F29\uFF0C\u4FDD\u6301\u539F\u59CB\u7684\u5BBD\u5EA6\u3002

\u5DF2\u77E5 flex \u5B50\u9879\u4E0D\u6362\u884C\uFF0C\u4E14\u5BB9\u5668\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u4E0D\u8DB3\u7684\u7A7A\u95F4\u5C31\u662F\u201C\u5B8C\u5168\u6536\u7F29\u7684\u5C3A\u5BF8\u201D\uFF1A

- \u5982\u679C\u53EA\u6709\u4E00\u4E2A flex \u5B50\u9879\u8BBE\u7F6E\u4E86 flex-shrink\uFF1A
  - flex-shrink \u503C\u5C0F\u4E8E 1\uFF0C\u5219\u6536\u7F29\u7684\u5C3A\u5BF8\u4E0D\u5B8C\u5168\uFF0C\u4F1A\u6709\u4E00\u90E8\u5206\u5185\u5BB9\u6EA2\u51FA flex \u5BB9\u5668\u3002
  - flex-shrink \u503C\u5927\u4E8E\u7B49\u4E8E 1\uFF0C\u5219\u6536\u7F29\u5B8C\u5168\uFF0C\u6B63\u597D\u586B\u6EE1 flex \u5BB9\u5668\u3002
- \u5982\u679C\u591A\u4E2A flex \u5B50\u9879\u8BBE\u7F6E\u4E86 flex-shrink\uFF1A
  - flex-shrink \u503C\u7684\u603B\u548C\u5C0F\u4E8E 1\uFF0C\u5219\u6536\u7F29\u7684\u5C3A\u5BF8\u4E0D\u5B8C\u5168\uFF0C\u6BCF\u4E2A\u5143\u7D20\u6536\u7F29\u5C3A\u5BF8\u5360\u201C\u5B8C\u5168\u6536\u7F29\u7684\u5C3A\u5BF8\u201D\u7684\u6BD4\u4F8B\u5C31\u662F\u8BBE\u7F6E\u7684 flex-shrink \u7684\u503C\u3002
  - flex-shrink \u503C\u7684\u603B\u548C\u5927\u4E8E 1\uFF0C\u5219\u6536\u7F29\u5B8C\u5168\uFF0C\u6BCF\u4E2A\u5143\u7D20\u6536\u7F29\u5C3A\u5BF8\u7684\u6BD4\u4F8B\u548C flex-shrink \u503C\u7684\u6BD4\u4F8B\u4E00\u6837\u3002\u4E0B\u9762\u6848\u4F8B\u6F14\u793A\u7684\u5C31\u662F\u6B64\u573A\u666F\u3002

\u8BED\u6CD5\u5982\u4E0B:

\`\`\`css
flex-shrink: 0; /* \u6570\u503C\uFF0C\u53EF\u4EE5\u662F\u5C0F\u6570\uFF0C\u9ED8\u8BA4\u503C\u662F 1 */
\`\`\`

### 10. flex-basis(==\u4F5C\u7528\u5728 flex \u5B50\u9879==)

\`flex-basis\`\u5B9A\u4E49\u4E86\u5728\u5206\u914D\u5269\u4F59\u7A7A\u95F4\u4E4B\u524D\u5143\u7D20\u7684\u9ED8\u8BA4\u5927\u5C0F\u3002

\u9ED8\u8BA4\u503C\u662F auto\uFF0C\u5C31\u662F\u81EA\u52A8\u3002\u6709\u8BBE\u7F6E width \u5219\u5360\u636E\u7A7A\u95F4\u5C31\u662F width\uFF0C\u6CA1\u6709\u8BBE\u7F6E\u5C31\u6309\u5185\u5BB9\u5BBD\u5EA6\u6765\u3002\u5982\u679C\u540C\u65F6\u8BBE\u7F6E width \u548C flex-basis\uFF0C\u5C31\u6E32\u67D3\u8868\u73B0\u6765\u770B\uFF0C\u4F1A\u5FFD\u7565 width\u3002flex \u987E\u540D\u601D\u4E49\u5C31\u662F\u5F39\u6027\u7684\u610F\u601D\uFF0C\u56E0\u6B64\uFF0C\u5B9E\u9645\u4E0A\u4E0D\u5EFA\u8BAE\u5BF9 flex \u5B50\u9879\u4F7F\u7528 width \u5C5E\u6027\uFF0C\u56E0\u4E3A\u4E0D\u591F\u5F39\u6027\u3002

> \u5F53\u5269\u4F59\u7A7A\u95F4\u4E0D\u8DB3\u7684\u65F6\u5019\uFF0Cflex \u5B50\u9879\u7684\u5B9E\u9645\u5BBD\u5EA6\u901A\u5E38\u5E76\u4E0D\u662F\u8BBE\u7F6E\u7684 flex-basis \u5C3A\u5BF8\uFF0C\u56E0\u4E3A flex \u5E03\u5C40\u5269\u4F59\u7A7A\u95F4\u4E0D\u8DB3\u7684\u65F6\u5019\u9ED8\u8BA4\u4F1A\u6536\u7F29\u3002

\u8BED\u6CD5\u5982\u4E0B:

\`\`\`css
flex-basis: <length> | auto; /* \u9ED8\u8BA4\u503C\u662F auto */
\`\`\`

### 11. flex(==flex \u5B50\u9879\u4E2D==)

\`flex\`\u5C5E\u6027\u662F flex-grow\uFF0Cflex-shrink \u548C flex-basis \u7684\u7F29\u5199\u3002

\u8BED\u6CD5\u5982\u4E0B:

\`\`\`css
flex: none | auto | [ < 'flex-grow' > < 'flex-shrink' >? || < 'flex-basis' > ];
\`\`\`

> \u7B2C 2 \u548C\u7B2C 3 \u4E2A\u53C2\u6570\uFF08flex-shrink \u548C flex-basis\uFF09\u662F\u53EF\u9009\u7684\u3002\u9ED8\u8BA4\u503C\u4E3A 0 1 auto\u3002

### 12. align-self(==\u4F5C\u7528\u5728 flex \u5B50\u9879==)

\`align-self\`\u6307\u63A7\u5236\u5355\u72EC\u67D0\u4E00\u4E2A flex \u5B50\u9879\u7684\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u5199\u5728 flex \u5BB9\u5668\u4E0A\u7684\u8FD9\u4E2A align-items \u5C5E\u6027\uFF0C\u540E\u9762\u662F items\uFF0C\u6709\u4E2A s\uFF0C\u8868\u793A\u5B50\u9879\u4EEC\uFF0C\u662F\u5168\u4F53\uFF1B\u8FD9\u91CC\u662F self\uFF0C\u5355\u72EC\u4E00\u4E2A\u4E2A\u4F53\u3002\u8BED\u6CD5\u51E0\u4E4E\u4E00\u6837\uFF1A

\`\`\`css
align-self: auto | flex-start | flex-end | center | baseline | stretch;
\`\`\`

\u552F\u4E00\u533A\u522B\u5C31\u662F align-self \u591A\u4E86\u4E2A auto\uFF08\u9ED8\u8BA4\u503C\uFF09\uFF0C\u8868\u793A\u7EE7\u627F\u81EA flex \u5BB9\u5668\u7684 align-items \u5C5E\u6027\u503C\u3002
`,isRecommend:!1,isPublish:!1,createDate:"2021-01-02T11:06:17.000Z",updateDate:"2022-03-02T09:15:41.000Z"},{id:10,title:"\u4E13\u5C5E\u5355\u8F66",author:"\u5F20\u4F20\u9F99",category:"\u60C5\u611F",description:"\u6211\u60F3\u8981\u4E00\u8F86\u5355\u8F66,\u4E00\u8F86\u4E13\u5C5E\u6211\u7684\u5355\u8F66",content:`\u6211\u60F3\u8981\u4E00\u8F86\u5355\u8F66
\u4E00\u8F86\u4E13\u5C5E\u6211\u7684\u5355\u8F66
\u5B83\u4E0D\u662F\u6469\u62DC
\u4E5F\u4E0D\u50CFofo
\u5B83\uFF0C\u53EA\u7531\u6211\u638C\u63A7
\u5B83\uFF0C\u53EA\u4F9B\u6211\u9A71\u4F7F

\u6211\u5E0C\u671B
\u5B83\u662F\u6CA1\u6709\u5239\u8F66\u7684
\u9A91\u4E0A\u5B83
\u4FBF\u4EC0\u4E48\u90FD\u4E0D\u7528\u7BA1
\u4E0D\u7BA1\u662F\u4E0A\u5761\u8FD8\u662F\u4E0B\u5761
\u7EA2\u706F\u8FD8\u662F\u7EFF\u706F
\u4E5F\u4E0D\u7528\u987E\u5DE6\u76FC\u53F3
\u8FDF\u7591\u524D\u540E
\u5B83\uFF0C\u662F\u52C7\u5F80\u76F4\u524D\u7684
\u5B83\uFF0C\u662F\u6C38\u4E0D\u505C\u6B47\u7684
\u5B83\uFF0C\u662F\u65E0\u754F\u89C4\u6761\u7684

\u5982\u679C\u771F\u6709\u8FD9\u4E48\u4E00\u8F86\u8F66
\u6211\u5E0C\u671B
\u5728\u6211\u9A91\u4E0A\u5B83\u7684\u65F6\u5019
\u80FD\u591F\u5934\u6234\u8033\u9EA6
\u653E\u4E00\u9996\u6211\u6700\u7231\u7684\u97F3\u4E50
\u5355\u66F2\u5FAA\u73AF
\u97F3\u91CF\u5F00\u5230\u6700\u5927
\u7A7F\u5C71\u8D8A\u6D77
\u8D8A\u964C\u5EA6\u9621
\u4E0D\u77A9\u76EE
\u4E0D\u56DE\u671B
\u72C2\u653E\u9A70\u9A8B
\u6267\u8457\u524D\u884C

\u9A91\u4E0A\u8FD9\u6837\u7684\u5355\u8F66
\u6CE8\u5B9A\u662F\u5B64\u72EC\u7684
\u8FD9\u4EFD\u5B64\u72EC
\u6211\u5E0C\u671B\u53EF\u4EE5\u72EC\u4EAB
\u5982\u679C\u8DB3\u591F\u5E78\u8FD0
\u78B0\u5230\u540C\u884C\u8005
\u6211\u4E5F\u5F88\u4E50\u610F\u4E0E\u5176\u5206\u4EAB\u8FD9\u4E00\u8DEF\u7684\u7CBE\u5F69
\u54EA\u6015\u53EA\u6709\u5B64\u72EC
\u4E5F\u4E00\u6837\u7CBE\u5F69`,isRecommend:!1,isPublish:!1,createDate:"2021-01-02T11:05:56.000Z",updateDate:"2021-09-17T09:33:24.000Z"},{id:9,title:"\u5982\u4F55\u5728github\u4E0A\u627E\u5F00\u6E90\u9879\u76EE",author:"\u5F20\u4F20\u9F99",category:"\u5176\u4ED6",description:"\u5F88\u591A\u4EBA\u627E\u5F00\u6E90\u9879\u76EE\u4F1A\u76F4\u63A5\u5728\u5728\u641C\u7D22\u6846\u4E2D\u8F93\u5165\u5173\u952E\u5B57\u76F4\u63A5\u67E5\u8BE2...",content:"\u5F88\u591A\u4EBA\u627E\u5F00\u6E90\u9879\u76EE\u4F1A\u76F4\u63A5\u5728\u5728\u641C\u7D22\u6846\u4E2D\u8F93\u5165\u5173\u952E\u5B57\u76F4\u63A5\u67E5\u8BE2\uFF0C\u6BD4\u5982\u8981\u627EVue\u5F00\u6E90\u9879\u76EE\uFF0C\u76F4\u63A5\u5728\u641C\u7D22\u6846\u76F4\u63A5\u641C\u7D22Vue\uFF0C\u8FD9\u6837\u4E0D\u662F\u4E0D\u884C\uFF0C\u53EA\u662F\u8FD9\u6837\u4F1A\u641C\u7D22\u51FA\u5927\u91CF\u76F8\u5173\u7684\u7ED3\u679C\uFF0C\u96BE\u4EE5\u7B5B\u9009\u7ED3\u679C\uFF0C\u90A3\u4E48\u8981\u5982\u4F55\u7B5B\u9009\u5462\n\n> \u7B5B\u9009\u9879\u76EE\u540D\u79F0\u4E2D\u5E26\u6709Vue\u7684\u9879\u76EE\n```\nin:name Vue\n```\n\n> \u7B5B\u9009README\u4E2D\u4E2D\u5E26\u6709Vue\u7684\u9879\u76EE\n```\nin:readme Vue\n```\n\n> \u7B5B\u9009\u9879\u76EE\u540D\u79F0\u4E2D\u5E26\u6709Vue\u4E14Star>2000\u7684\u9879\u76EE\n```\nin:name Vue stars:>2000\n```\n\n> \u7B5B\u9009\u9879\u76EE\u540D\u79F0\u4E2D\u5E26\u6709Vue\u4E14\u66F4\u65B0\u65F6\u95F4>2020-09-01\u7684\u9879\u76EE\n```\nin:name Vue pushed:>2020-09-01\n```\n\n> \u7B5B\u9009\u9879\u76EE\u540D\u79F0\u4E2D\u5E26\u6709Vue\u4E14\u7F16\u7A0B\u8BED\u8A00\u4E3AVue\u7684\u9879\u76EE\n```\nin:name Vue language:vue\n```\n\n> \u7B5B\u9009\u9879\u76EE\u540D\u79F0\u4E2D\u5E26\u6709Vue\u4E14forks>1000\u7684\u9879\u76EE\n```\nin:name Vue forks:>10000\n```",isRecommend:!1,isPublish:!0,createDate:"2021-01-02T11:05:12.000Z",updateDate:"2021-09-17T09:33:24.000Z"},{id:8,title:"js\u5224\u65AD\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u5305\u542B\u67D0\u4E2A\u5B57\u7B26\u4E32",author:"Ronnie",category:"JavaScript",description:"\u51E0\u79CD\u5E38\u7528\u7684\u5224\u65AD\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u5305\u542B\u67D0\u4E2A\u5B57\u7B26\u4E32\u7684\u65B9\u6CD5\uFF0C\u5305\u62ECES5\u548CES6\u65B9\u6CD5",content:`### ES6\uFF1A
- includes()\uFF1A\u662F\u5426\u5305\u542B\u4E86\u53C2\u6570\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE\u5E03\u5C14\u503C
- startsWith()\uFF1A\u53C2\u6570\u5B57\u7B26\u4E32\u662F\u5426\u5728\u539F\u5B57\u7B26\u4E32\u7684\u5934\u90E8\uFF0C\u8FD4\u56DE\u5E03\u5C14\u503C
- endsWith()\uFF1A\u53C2\u6570\u5B57\u7B26\u4E32\u662F\u5426\u5728\u539F\u5B57\u7B26\u4E32\u7684\u5C3E\u90E8\uFF0C\u8FD4\u56DE\u5E03\u5C14\u503C
\`\`\`js
const homeUrl = 'https://qszone.com'
homeUrl.includes('qszone')  //true
homeUrl.startsWith('https') //true
homeUrl.endsWith('cn') //false
\`\`\`

\u6CE8\uFF1A\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u90FD\u652F\u6301\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u8868\u793A\u5F00\u59CB\u5339\u914D\u7684\u4F4D\u7F6E

### ES5:
1. indexOf()\uFF1A\u8FD4\u56DE\u67D0\u4E2A\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\u503C\u5728\u5B57\u7B26\u4E32\u4E2D\u9996\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF0C\u5982\u679C\u68C0\u7D22\u7684\u5B57\u7B26\u4E32\u6CA1\u6709\u51FA\u73B0\uFF0C\u5219\u8FD4\u56DE-1\uFF0C\u6B64\u65B9\u6CD5\u540C\u6837\u9002\u7528\u4E8E\u6570\u7EC4
\`\`\`js
var homeUrl = 'https://qszone.com'
homeUrl.indexOf('qszone') !== -1 //true\uFF0C\u8868\u793A\u5305\u542B

var arr = ['https','qszone','com']
arr.indexOf('http')  //-1
arr.indexOf('qszone') //1
\`\`\`
2. search()\uFF1A\u8DDFindexOf\u65B9\u6CD5\u7C7B\u4F3C\uFF0C\u53C2\u6570\u53EF\u4EE5\u662F\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u4E0D\u8FC7\u4E0D\u9002\u7528\u6570\u7EC4\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528
3. \u6B63\u5219\u65B9\u6CD5\uFF1Amatch()\u3001test()\u3001exec()
\`\`\`js
var homeUrl = 'https://qszone.com'
var reg = RegExp(/1024/)
homeUrl.match(reg))  //null,\u8FD4\u56DE\u5339\u914D\u7684\u5BF9\u8C61\uFF0C\u4E0D\u5339\u914D\u5219\u8FD4\u56DEnull

reg.test(homeUrl)  //false,\u8FD4\u56DEbool\u503C

reg = RegExp(/qszone/)
reg.exec(homeUrl)  //["qszone", index: 8, input: "https://qszone.com", groups: undefined],\u4E0D\u5339\u914D\u5219\u8FD4\u56DEnull
\`\`\`
`,isRecommend:!1,isPublish:!1,createDate:"2021-01-02T11:04:47.000Z",updateDate:"2022-03-02T09:15:51.000Z"},{id:7,title:"CSS\u5E38\u7528\u77E5\u8BC6\u70B9",author:"\u5F20\u4F20\u9F99",category:"Css",description:"CSS\u76D2\u5B50\u6A21\u578B\u3001CSS\u9009\u62E9\u5668...",content:`## 1. CSS\u76D2\u5B50\u6A21\u578B\u6709\u54EA\u4E9B\uFF0C\u533A\u522B\u662F\u4EC0\u4E48\uFF1F

> \u76D2\u5B50\u6A21\u578B

\u6709\u4E24\u79CD\u76D2\u5B50\u6A21\u578B\uFF0CIE\u548C\u6A21\u578B(border-box)\u3001W3C\u6807\u51C6\u548C\u6A21\u578B\uFF08content-box\uFF09
\u76D2\u6A21\u578B\u5206\u4E3A\u5185\u5BB9\uFF08content\uFF09\u3001\u586B\u5145\uFF08padding\uFF09\u3001\u8FB9\u754C\uFF08margin\uFF09\u3001\u8FB9\u6846\uFF08border\uFF09\u56DB\u4E2A\u90E8\u5206

> \u533A\u522B\uFF1A

1. W3C\u6807\u51C6\u76D2\u6A21\u578B\uFF1A\u5C5E\u6027width,height\u53EA\u5305\u542Bborder\u548Cpadding
2. IE\u76D2\u6A21\u578B\uFF1A\u5C5E\u6027width,height\u5305\u542Bcontent\u3001border\u548Cpadding

\u6D4F\u89C8\u4E2D\u7531box-sizing\u63A7\u5236\u4F7F\u7528\u54EA\u4E2A\u76D2\u6A21\u578B\uFF0C\u9ED8\u8BA4\u503C\u4E3Acontent-box\u6807\u51C6\u76D2\u6A21\u578B


## 2. CSS\u9009\u62E9\u5668\u6709\u54EA\u4E9B\uFF1F

1. id\u9009\u62E9\u5668\uFF08#idName\uFF09
2. \u7C7B\u9009\u62E9\u5668\uFF08.className\uFF09
3. \u6807\u7B7E\u9009\u62E9\u5668\uFF08div\u3001p\u3001ul\uFF09
4. \u540E\u4EE3\u9009\u62E9\u5668\uFF08ul li\uFF09
5. \u5B50\u9009\u62E9\u5668\uFF08ul>li\uFF09
6. \u5144\u5F1F\u9009\u62E9\u5668\uFF08li~a\uFF09
7. \u76F8\u90BB\u5144\u5F1F\u9009\u62E9\u5668\uFF08li+a\uFF09
8. \u5C5E\u6027\u9009\u62E9\u5668\uFF08h1[title="\u6807\u9898"]\u3001input[type="checkbox"]\uFF09
9. \u4F2A\u7C7B\u9009\u62E9\u5668\uFF08button:hover\u3001li:nth-child(1)\uFF09
10. \u4F2A\u5143\u7D20\u9009\u62E9\u5668\uFF08::before\u3001::after\uFF09
11. \u901A\u914D\u7B26\u9009\u62E9\u5668\uFF08*\uFF09


## 3. ::before\u548C:after\u4E2D\u53CC\u5192\u53F7\u548C\u5355\u5192\u53F7\u6709\u4EC0\u4E48\u533A\u522B

\u5355\u5192\u53F7\u7528\u4E8ECSS3\u4F2A\u7C7B\uFF0C\u53CC\u5192\u53F7\u7528\u4E8ECSS3\u4E3A\u5143\u7D20
\u53CC\u5192\u53F7\u662F\u5728CSS3\u89C4\u8303\u4E2D\u5F15\u5165\u7684\uFF0C\u7528\u4E8E\u533A\u5206\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\u3002\u4E0D\u8FC7\u6D4F\u89C8\u5668\u9700\u8981\u540C\u65F6\u652F\u6301\u65E7\u7684\u5DF2\u7ECF\u5B58\u5728\u7684\u4F2A\u5143\u7D20\u5199\u6CD5\uFF0C\u6BD4\u5982:first-line\u3001:first-letter\u3001:before\u3001:after\u7B49
\u800C\u5728\u65B0\u7684CSS3\u4E2D\u5F15\u5165\u7684\u4E3A\u5143\u7D20\u5219\u4E0D\u5141\u8BB8\u518D\u652F\u6301\u65E7\u7684\u5355\u5192\u53F7\u5199\u6CD5


## 4. \u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\u7684\u533A\u522B

\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\u662F\u7528\u4E8E\u4FEE\u9970\u4E0D\u5728\u6587\u6863\u6811\u4E2D\u7684\u90E8\u5206\uFF0C\u6BD4\u5982p\u6807\u7B7E\u4E2D\u7684\u7B2C\u4E00\u4E2A\u5B57\u6BCD\uFF0C\u6216\u8005ul\u5217\u8868\u4E2D\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20li

>\u533A\u522B

1. \u4F2A\u7C7B\u7528\u4E8E\u63CF\u8FF0\u5DF2\u6709\u5143\u7D20\u7684\u67D0\u4E2A\u72B6\u6001\uFF0C\u6BD4\u5982\u9F20\u6807\u60AC\u505C\u5728\u67D0\u4E2A\u5143\u7D20\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528:hover\u6765\u63CF\u8FF0\u8FD9\u4E2A\u5143\u7D20\u7684\u72B6\u6001
2. \u4F2A\u5143\u7D20\u7528\u4E8E\u521B\u5EFA\u4E00\u4E9B\u4E0D\u5728\u6587\u6863\u6811\u4E2D\u7684\u5143\u7D20\u5E76\u6DFB\u52A0\u6837\u5F0F\uFF0C\u6BD4\u5982\u53EF\u4EE5\u4F7F\u7528:after\u5728\u4E00\u4E2A\u5143\u7D20\u540E\u9762\u589E\u52A0\u4E00\u4E2A\u5143\u7D20\u5E76\u6307\u5B9A\u6837\u5F0F\uFF0C\u867D\u7136\u6D4F\u89C8\u5668\u53EF\u4EE5\u770B\u5230\u8FD9\u4E2A\u5143\u7D20\uFF0C\u5355\u5B9E\u9645\u4E0A\u8FD9\u4E2A\u5143\u7D20\u4E0D\u5B58\u5728\u6587\u6863\u6811\u4E0A\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u7528js\u5F88\u96BE\u76F4\u63A5\u63A7\u5236\u4F2A\u5143\u7D20


## 5. CSS\u4E2D\u54EA\u4E9B\u5C5E\u6027\u53EF\u4EE5\u7EE7\u627F

\u4E00\u822C\u5177\u6709\u7EE7\u627F\u6027\u7684\u5C5E\u6027\u6709\uFF0C\u5B57\u4F53\u76F8\u5173\u7684\u5C5E\u6027\uFF0Cfont-size\u548Cfont-weight\u7B49\uFF1B\u6587\u672C\u76F8\u5173\u7684\u5C5E\u6027color\u548Ctext-align\u7B49
\u8868\u683C\u7684\u4E00\u4E9B\u5E03\u5C40\u5C5E\u6027\u3001\u5217\u8868\u5C5E\u6027\u5982list-style\u7B49\uFF1B\u5149\u6807\u5C5E\u6027cursor\u3001\u5143\u7D20\u53EF\u89C1\u6027\u5C5E\u6027visibility\u3002

\u6CE8\uFF1A\u5F53\u4E00\u4E2A\u5C5E\u6027\u4E0D\u662F\u7EE7\u627F\u5C5E\u6027\u65F6\uFF0C\u53EF\u901A\u8FC7\u5C06\u5C5E\u6027\u503C\u8BBE\u7F6E\u6210inherit\u6765\u4F7F\u5B83\u4ECE\u7236\u5143\u7D20\u90A3\u83B7\u53D6\u540C\u540D\u7684\u5C5E\u6027\u503C\u6765\u7EE7\u627F\u3002


## 6. CSS\u4F18\u5148\u7EA7\u7B97\u6CD5

\u5224\u65AD\u4F18\u5148\u7EA7\uFF0C\u9996\u5148\u5224\u65AD\u5C5E\u6027\u58F0\u660E\u540E\u9762\u662F\u5426\u52A0\u4E86!important\uFF0C\u5982\u679C\u5939\u4E86\u5219\u5B83\u7684\u4F18\u5148\u7EA7\u662F\u6700\u9AD8\u7684\uFF0C\u9664\u975E\u5B83\u540E\u9762\u51FA\u73B0\u4E86\u540C\u6837\u52A0\u4E86!important\u7684\u58F0\u660E\u3002

!important > \u884C\u5185\u6837\u5F0F > id\u9009\u62E9\u5668 > \u7C7B\u9009\u62E9\u5668\u3001\u4F2A\u7C7B\u9009\u62E9\u5668\u548C\u5C5E\u6027\u9009\u62E9\u5668 > \u5143\u7D20\u9009\u62E9\u5668\u548C\u4F2A\u5143\u7D20\u9009\u62E9\u5668

\u6CE8\uFF1A\u540C\u7B49\u89C4\u5219\uFF0C\u540E\u51FA\u73B0\u7684\u4F18\u5148\u7EA7\u66F4\u9AD8

## 7. \u4F2A\u7C7BLVHA

a\u6807\u7B7E\u7684\u56DB\u79CD\u72B6\u6001\uFF0C\u94FE\u63A5\u8BBF\u95EE\u524D\u3001\u8BBF\u95EE\u540E\u3001\u9F20\u6807\u6ED1\u8FC7\u3001\u6FC0\u6D3B\uFF0C\u5206\u522B\u5BF9\u5E94:link\u3001:visited\u3001:hover\u3001:active

1. \u5F53\u9F20\u6807\u6ED1\u8FC7a\u94FE\u63A5\u65F6\uFF0C\u6EE1\u8DB3:link\u548C:hover\u4E24\u79CD\u72B6\u6001\uFF0C\u8981\u6539\u53D8a\u6807\u7B7E\u7684\u989C\u8272\uFF0C\u5C31\u5FC5\u987B\u5C06:hover\u5728:link\u540E\u9762\u58F0\u660E
2. \u5F53\u9F20\u6807\u70B9\u51FB\u6FC0\u6D3Ba\u94FE\u63A5\u65F6\uFF0C\u540C\u65F6\u6EE1\u8DB3:hover\u3001:link\u3001:active\u4E09\u79CD\u72B6\u6001\uFF0C\u8981\u663E\u793Aa\u6807\u7B7E:active\uFF0C\u5FC5\u987B\u5C06:active\u58F0\u660E\u653E\u5230:link\u548C:hover\u4E4B\u540E\u3002\u56E0\u6B64\u5F97\u51FALVHA\u987A\u5E8F

### 8. CSS3\u65B0\u589E\u4F2A\u7C7B

1. ele:nth-child(n) \u9009\u4E2D\u7236\u5143\u7D20\u4E0B\u7684\u7B2Cn\u4E2A\u5B50\u5143\u7D20\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u5B50\u5143\u7D20\u662Fele\u6807\u7B7E
2. ele:nth-last-child(n) \u4F5C\u7528\u540C\u4E0A\uFF0C\u9006\u5E8F\u5F00\u59CB\u8BA1\u7B97
3. ele:first-child \u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20
4. ele:last-child \u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20
5. ele:only-child \u5982\u679Cele\u662F\u7236\u5143\u7D20\u4E0B\u552F\u4E00\u7684\u5B50\u5143\u7D20\uFF0C\u5219\u9009\u4E2D
6. ele:nth-of-type(n) \u9009\u4E2D\u7236\u5143\u7D20\u4E0B\u7B2Cn\u4E2Aele\u7C7B\u578B\u7684\u5143\u7D20  
7. ele:first-of-type \u7236\u5143\u7D20\u4E0B\u7B2C\u4E00\u4E2Aele\u7C7B\u578B\u5143\u7D20
8. ele:last-of-type \u7236\u5143\u7D20\u4E0B\u6700\u540E\u4E00\u4E2Aele\u7C7B\u578B\u5143\u7D20
9. ele:only-of-type \u5982\u679Cele\u662F\u7236\u5143\u7D20\u4E0B\u552F\u4E00\u4E00\u4E2A\u6B64\u7C7B\u578B\u7684\u5143\u7D20\uFF0C\u5219\u9009\u4E2D
10. ele:empty \u9009\u4E2D\u4E0D\u5305\u542B\u5B50\u5143\u7D20\u548C\u5185\u5BB9\u7684ele\u7C7B\u578B\u5143\u7D20
11. ele:target \u9009\u4E2D\u5F53\u524D\u6D3B\u52A8\u7684ele\u5143\u7D20
12. :not(ele) \u9009\u4E2D\u975Eele\u5143\u7D20\u7684\u6BCF\u4E2A\u5143\u7D20
13. :enabled \u63A7\u5236\u8868\u5355\u63A7\u4EF6\u7684\u7981\u7528\u72B6\u6001
14. :disabled \u63A7\u5236\u8868\u5355\u63A7\u4EF6\u7684\u7981\u7528\u72B6\u6001
15. :checked \u5355\u9009\u6846\u6216\u590D\u9009\u6846\u88AB\u9009\u4E2D

### 9. div\u5C45\u4E2D
- \u6C34\u5E73\u5C45\u4E2D

> \u7ED9div\u8BBE\u7F6E\u4E00\u4E2A\u5BBD\u5EA6\uFF0C\u7136\u540E\u6DFB\u52A0margin: 0 auto\u5C5E\u6027
\`\`\`css
  div {
    width: 500px;
    margin: 0 auto;
  }
\`\`\`
> \u4F7F\u7528text-align:center
\`\`\`css
  .container{
    text-align: center;
    font-size: 0;
  }
  .container .box {
    display: inline-block;
    width: 500px;
  }
\`\`\`
> \u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D
\`\`\`css
  div {
    position: absolute;
    width: 200px;
    height: 200px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
\`\`\`
- \u6C34\u5E73\u5782\u76F4\u5C45\u4E2D

> \u4F7F\u7528\u5B9A\u4F4D + margin\u6216transform
\`\`\`css
  div{
    position: absolute;
    width: 500px;
    height: 300px;
    top: 50%;
    left: 50%;
    /* margin\u65B9\u5F0F */
    margin: -150px 0 0 -250px;
    /* transform\u65B9\u5F0F */
    /* transform: translate(-50%,-50%); */
  }
\`\`\`
> \u4F7F\u7528flex
\`\`\`css
  .container {
    display: flex;
    align-items: center; /* \u5782\u76F4\u5C45\u4E2D */
    justify-content: center; /* \u6C34\u5E73\u5C45\u4E2D */
  }
  .container div {
    width: 200px;
    height: 150px;
  }
\`\`\`
> \u4F7F\u7528fixed
\`\`\`css
  .container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 0;
    white-space: nowrap;
    overflow: auto;
  }
  .container::after {
    content: '',
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .container .box {
    display: inline-block;
    width: 300px;
    height: 300px;
    white-space: normal;
    vertical-align: middle;
  }
\`\`\`

### 10. display\u6709\u54EA\u4E9B\u503C

- block \u5757\u7C7B\u578B\uFF0C\u53EF\u8BBE\u7F6E\u5BBD\u9AD8\u548C\u6362\u884C\u663E\u793A\uFF0C\u9ED8\u8BA4\u5BBD\u5EA6\u4E3A\u7236\u5143\u7D20\u7684\u5BBD\u5EA6
- none \u4E0D\u663E\u793A
- inline \u884C\u5185\u7C7B\u578B\uFF0C\u4E0D\u53EF\u8BBE\u7F6E\u5BBD\u9AD8\uFF0C\u540C\u884C\u663E\u793A\uFF0C\u5BBD\u5EA6\u4E3A\u5185\u5BB9\u5BBD\u5EA6
- inline-block \u884C\u5185\u5757\u7C7B\u578B\uFF0C\u53EF\u8BBE\u7F6E\u5BBD\u9AD8\uFF0C\u540C\u884C\u663E\u793A\uFF0C\u9ED8\u8BA4\u5BBD\u5EA6\u4E3A\u5185\u5BB9\u5BBD\u5EA6
- list-item \u50CF\u5757\u5143\u7D20\u4E00\u6837\u663E\u793A\uFF0C\u5E76\u6DFB\u52A0\u6837\u5F0F\u5217\u8868\u6807\u8BB0
- table \u6B64\u5143\u7D20\u5757\u7EA7\u8868\u683C\u6765\u663E\u793A
- inherit \u4ECE\u7236\u5143\u7D20\u7EE7\u627Fdisplay\u5C5E\u6027

### 11. relative\u548Cabsolute\u5B9A\u4F4D\u7684\u539F\u70B9
relative\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C\u662F\u76F8\u5BF9\u4E8E\u5143\u7D20\u672C\u8EAB\u7684\u6B63\u5E38\u4F4D\u7F6E\u6765\u8FDB\u884C\u5B9A\u4F4D\u7684
absolute\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C\u662F\u76F8\u5BF9\u4E8E\u5B83\u7684\u7B2C\u4E00\u4E2Aposition\u503C\u4E0D\u4E3Astatic\u7684\u7956\u5148\u5143\u7D20\u7684padding\u8FDB\u884C\u5B9A\u4F4D\u7684

### 12. CSS3\u7684Flex box\u5E03\u5C40\u662F\u4EC0\u4E48\uFF0C\u9002\u7528\u4E8E\u4EC0\u4E48\u573A\u666F
Flex\u5E03\u5C40\u65F6CSS3\u65B0\u589E\u7684\u4E00\u79CD\u5E03\u5C40\u65B9\u5F0F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5C06\u4E00\u4E2A\u5143\u7D20\u7684display\u5C5E\u6027\u503C\u8BBE\u7F6E\u6210flex\u8BA9\u5B83\u6210\u4E3A\u4E00\u4E2Aflex\u5BB9\u5668\uFF0C\u5B83\u7684\u6240\u6709\u5B50\u5143\u7D20\u90FD\u4F1A\u6210\u4E3A\u5B83\u7684\u9879\u76EE\u3002

\u4E00\u4E2Aflex\u5BB9\u5668\u9ED8\u8BA4\u6709\u4E24\u6761\u8F74\uFF0C\u4E00\u4E2A\u65F6\u6C34\u5E73\u7684\u4E3B\u8F74\uFF0C\u4E00\u4E2A\u662F\u4E0E\u4E3B\u8F74\u5782\u76F4\u7684\u4EA4\u53C9\u8F74\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528flex-direction\u6765\u6307\u5B9A\u4E3B\u8F74\u7684\u65B9\u5411














`,isRecommend:!1,isPublish:!1,createDate:"2021-01-02T11:02:56.000Z",updateDate:"2022-03-02T09:15:53.000Z"},{id:6,title:"Linux\u5B89\u88C5\u548C\u5378\u8F7DDocker",author:"\u5F20\u4F20\u9F99",category:"Linux",description:"Linux\u5B89\u88C5\u548C\u5378\u8F7DDocker",content:`## 1. \u5378\u8F7D\u65E7\u7248\u672C
\`\`\`shell
yum remove docker \\
docker-client \\
docker-client-latest \\
docker-common \\
docker-latest \\
docker-latest-logrotate \\
docker-logrotate \\
docker-engine
\`\`\`

## 2. \u5B89\u88C5\u4F9D\u8D56\u5305
\`\`\`shell
yum install -y yum-utils
\`\`\`

## 3. \u8BBE\u7F6E\u955C\u50CF\u7684\u4ED3\u5E93
\`\`\`shell
yum-config-manager \\
--add-repo \\
https://download.docker.com/linux/centos/docker-ce.repo
\`\`\`

##  4.\u66F4\u65B0yum\u8F6F\u4EF6\u5305\u7D22\u5F15
\`\`\`shell
yum makecache
\`\`\`

## 5. \u5B89\u88C5Docker docker-ce \u793E\u533A\u7248
\`\`\`shell
yum install docker-ce docker-ce-cli containerd.io
\`\`\`

## 6. \u542F\u52A8Docker
\`\`\`shell
systemctl start docker
\`\`\`

## 7. Hello-world
\`\`\`shell
docker run hello-world	# \u68C0\u6D4B\u6CA1\u6709\u4F1A\u81EA\u52A8\u4E0B\u8F7D
\`\`\`

## 8. \u67E5\u770B\u4E0B\u8F7D\u7684\u955C\u50CF
\`\`\`shell
docker images
\`\`\`

## 9. \u914D\u7F6E\u963F\u91CC\u4E91\u955C\u50CF\u52A0\u901F\u5668
\`\`\`
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://tpnvxk11.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
\`\`\`

## 10. \u5378\u8F7DDocker
\`\`\`shell
# \u5378\u8F7D\u4F9D\u8D56
yum remove docker-ce docker-ce-cli containerd.io
# \u5220\u9664\u8D44\u6E90(docker\u7684\u9ED8\u8BA4\u5DE5\u4F5C\u8DEF\u5F84\uFF1A/var/lib/docker)
rm -rf /var/lib/docker
\`\`\`
`,isRecommend:!0,isPublish:!0,createDate:"2021-01-02T11:02:29.000Z",updateDate:"2021-09-17T09:33:24.000Z"},{id:5,title:"\u5F7B\u5E95\u5F04\u61C2JavaScript\u95ED\u5305",author:"\u5F20\u4F20\u9F99",category:"JavaScript",description:"\u5F7B\u5E95\u5F04\u61C2JavaScript\u95ED\u5305",content:`
## 1. \u95ED\u5305\u7684\u5B9A\u4E49
\u5173\u4E8EJavaScript\u95ED\u5305\u7684\u5B9A\u4E49\u6709\u5F88\u591A\u79CD\uFF0C\u5F88\u96BE\u51C6\u786E\u7684\u7ED9\u5176\u4E0B\u5B9A\u4E49\uFF0C\u95ED\u5305\u7684\u672C\u8D28\u662F\u51FD\u6570\uFF0C\u662F\u58F0\u660E\u5728\u4E00\u4E2A\u51FD\u6570\u5185\u90E8\u7684\u51FD\u6570\u3002


**\u95ED\u5305\u7684\u4EA7\u751F\uFF1A\u5F53\u5185\u5C42\u4F5C\u7528\u57DF\u8BBF\u95EE\u5B83\u5916\u5C42\u51FD\u6570\u4F5C\u7528\u57DF\u91CC\u7684\u53D8\u91CF\u3001\u53C2\u6570\u6216\u8005\u51FD\u6570\u65F6\uFF0C\u5C31\u4EA7\u751F\u95ED\u5305\u4E86**

\u4E3E\u4F8B\uFF1A
\`\`\`js
function fn1() {
  let a = 123
  function fn2() {
    return a
  }
  return fn1
}
console.log(fn1()())  //123
\`\`\`
\u4F8B\u5B50\u4E2Dfn1\u51FD\u6570\u5916\u90E8\u672C\u6765\u662F\u8BBF\u95EE\u4E0D\u5230fn1\u51FD\u6570\u5185\u90E8\u7684a\u53D8\u91CF\u7684\uFF0C\u4F46\u662Ffn1\u51FD\u6570\u901A\u8FC7\u8FD4\u56DE\u4E00\u4E2A\u5185\u90E8\u51FD\u6570\u7684\u65B9\u5F0F\u8BA9\u5916\u90E8\u8BBF\u95EE\u5185\u90E8\u53D8\u91CF\u6210\u4E3A\u53EF\u80FD.

## 2. \u95ED\u5305\u4E0E\u51FD\u6570\u4F5C\u7528\u57DF
\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u5B9E\u9645\u4E0A\u662F\u4E2A\u52A8\u6001\u6982\u5FF5\uFF0C\u5982\u679C\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u4F46\u6CA1\u6709\u8C03\u7528\uFF0C\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u662F\u4E0D\u5B58\u5728\u7684\uFF0C\u53EA\u6709\u51FD\u6570\u8C03\u7528\u65F6\u624D\u4F1A\u5728\u5185\u5B58\u4E2D\u521B\u5EFA\u4E00\u4E2A\u72EC\u7ACB\u7684\u4F5C\u7528\u57DF\uFF0C\u8C03\u7528\u7ED3\u675F\u540E\u8FD9\u4E2A\u4F5C\u7528\u57DF\u53C8\u5173\u95ED\u4E86\uFF0C\u51FD\u6570\u8FD0\u884C\u4E2D\u5728\u5185\u5B58\u521B\u5EFA\u7684\u6570\u636E\u4E5F\u4F1A\u88AB\u6E05\u9664\u3002

\`\`\`js
function fn1() {
  let a = 0
  function fn2() {
    console.log(++a)
  }
  fn2()
  fn2()
  fn2()
}
fn1() //1 2 3
\`\`\`
\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0Cfn1\u88AB\u8C03\u7528\uFF0C\u9996\u5148\u4F1A\u5728\u5185\u5B58\u4E2D\u5F00\u8F9F\u4F5C\u7528\u57DF\uFF0C\u6267\u884C\u8FC7\u7A0B\u4E2D\u5B9A\u4E49\u5E76\u8C03\u7528\u4E86\u4E09\u6B21fn2\u51FD\u6570\uFF0Cfn2\u6BCF\u6B21\u8C03\u7528\u4E5F\u90FD\u4F1A\u5F00\u8F9F\u81EA\u5DF1\u7684\u4F5C\u7528\u57DF\uFF0C\u5728\u8C03\u7528fn2\u7684\u8FC7\u7A0B\u4E2D\u8BBF\u95EE\u4E86\u8FD8\u672A\u5173\u95ED\u7684fn1\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CFa,\u4E14\u4E09\u6B21\u8C03\u7528\u8BBF\u95EE\u7684\u90FD\u662F\u540C\u4E00\u4E2A\u53D8\u91CFa\u3002\u4F46fn1\u603B\u6709\u6267\u884C\u5B8C\u7684\u65F6\u523B\uFF0C\u4E5F\u5373\u6709\u5173\u95ED\u4F5C\u7528\u57DF\u7684\u65F6\u5019\u3002
\`\`\`js
function fn1() {
  let a = 0
  function fn2() {
    console.log(++a)
  }
  return fn2
}
let fn = fn1()
fn()  //1
fn()  //2
fn()  //3
\`\`\`
\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u8FD0\u884Cfn1,\u5C06fn1\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u521B\u5EFA\u7684fn2\u51FD\u6570\u8D4B\u7ED9\u5168\u5C40\u53D8\u91CFfn\uFF0C\u5BFC\u81F4fn1\u51FD\u6570\u8FD0\u884C\u5B8C\u65F6\u4E0D\u6562\u5173\u95ED\u81EA\u5DF1\u7684\u4F5C\u7528\u57DF\uFF0C\u6B64\u65F6\u8BA9\u5185\u90E8\u51FD\u6570fn2\u6210\u4E86\u95ED\u5305\u51FD\u6570\uFF0C\u800C\u5168\u5C40\u53D8\u91CFfn\u5219\u662F\u8FD9\u4E2A\u95ED\u5305\u51FD\u6570\u7684\u5F15\u7528\uFF0C\u7531\u4E8E\u5168\u5C40\u4F5C\u7528\u57DF\u662F\u6C38\u6052\u7684\uFF0C\u53EA\u8981\u6D4F\u89C8\u5668\u7A97\u53E3\u4E0D\u5173\u95ED\uFF0C\u5168\u5C40\u53D8\u91CFfn\u6240\u5F15\u7528\u95ED\u5305\u51FD\u6570\u7684\u7236\u4F5C\u7528\u57DF\u4E5F\u4E0D\u4F1A\u88AB\u5173\u95ED\uFF0C\u4F1A\u4E00\u76F4\u5728\u5185\u5B58\u4E2D\u5B58\u5728\u3002\u5F53\u95ED\u5305\u51FD\u6570\u88AB\u8C03\u7528\u65F6\uFF0C\u59CB\u7EC8\u80FD\u8BBF\u95EE\u5176\u7236\u4F5C\u7528\u57DF\uFF0C\u53EA\u6709\u5F53\u95ED\u5305\u51FD\u6570\u7684\u5F15\u7528\u88AB\u91CA\u653E\u65F6\uFF0C\u5B83\u7684\u7236\u4F5C\u7528\u57DF\u624D\u4F1A\u88AB\u5173\u95ED\u3002

## 3. \u4F7F\u7528\u95ED\u5305\u7684\u597D\u5904
- \u4F7F\u7528\u95ED\u5305\u53EF\u4EE5\u907F\u514D\u4F7F\u7528\u5168\u5C40\u53D8\u91CF\uFF0C\u9632\u6B62\u6C61\u67D3\u5168\u5C40\u53D8\u91CF
- \u4F7F\u7528\u95ED\u5305\u8BA9\u5916\u90E8\u4F5C\u7528\u57DF\u8BBF\u95EE\u51FD\u6570\u5185\u90E8\u53D8\u91CF\u53D8\u6210\u53EF\u80FD\uFF0C\u6B64\u70B9\u7528\u4E8E\u5B9E\u73B0\u8F6F\u4EF6\u8BBE\u8BA1\u4E0A\u7684\u5C01\u88C5\uFF0C\u53EF\u4EE5\u8BBE\u8BA1\u51FA\u7C7B\u5E93\u3001\u6846\u67B6\uFF0C\u6BD4\u5982jQuery\u3001Vue.js

## 4. \u95ED\u5305\u7684\u7F3A\u70B9
\u4F7F\u7528\u95ED\u5305\u4F1A\u4F7F\u5F97\u5C40\u90E8\u4F5C\u7528\u57DF\u7684\u53D8\u91CF\u5E38\u9A7B\u5728\u5185\u5B58\u4E2D\uFF08\u6709\u4E00\u5757\u5185\u5B58\u7A7A\u95F4\u88AB\u957F\u671F\u5360\u7528\uFF0C\u800C\u4E0D\u88AB\u91CA\u653E\uFF09\uFF0C\u8FC7\u5EA6\u4F7F\u7528\u95ED\u5305\uFF0C\u4F1A\u5BFC\u81F4\u5185\u5B58\u5360\u7528\u8FC7\u591A\uFF0C\u5BB9\u6613\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\u3002
\u907F\u514D\u95ED\u5305\u5BFC\u81F4\u5185\u5B58\u6CC4\u6F0F\u7684\u89E3\u51B3\u65B9\u6CD5\u662F\uFF0C\u5C06\u4E0D\u518D\u4F7F\u7528\u7684\u95ED\u5305\u51FD\u6570\u7684\u5F15\u7528\u5168\u90E8\u5220\u9664\u6216\u8005\u8D4B\u503C\u4E3Anull\u3002



`,isRecommend:!0,isPublish:!0,createDate:"2021-01-02T11:02:01.000Z",updateDate:"2021-09-17T09:33:24.000Z"},{id:4,title:"Linux\u5B89\u88C5\u5E76\u914D\u7F6EMySql",author:"Ronnie",category:"Linux",description:"Linux\u5B89\u88C5\u5E76\u914D\u7F6EMySql",content:`## \u4E00\u3001\u5B89\u88C5\u524D\u51C6\u5907
1. \u68C0\u67E5\u662F\u5426\u5DF2\u7ECF\u5B89\u88C5\u8FC7mysql
\`\`\`cmd
rpm -qa | grep mysql
\`\`\`

2. \u67E5\u8BE2\u6240\u6709Mysql\u5BF9\u5E94\u7684\u6587\u4EF6\u5939
\`\`\`cmd
whereis mysql
find / -name mysql
\`\`\`

3. \u5220\u9664\u76F8\u5173\u76EE\u5F55\u6216\u6587\u4EF6
\`\`\`cmd
rm -rf ...
\`\`\`

4. \u68C0\u67E5mysql\u7528\u6237\u7EC4\u548C\u7528\u6237\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u5219\u521B\u5EFA
\`\`\`cmd
cat /etc/group | grep mysql
cat /etc/passwd |grep mysql
groupadd mysql
useradd -r -g mysql mysql
\`\`\`
5. \u4ECE[\u5B98\u7F51](https://downloads.mysql.com/archives/community/)\u4E0B\u8F7D\u662F\u7528\u4E8ELinux\u7684Mysql\u5B89\u88C5\u5305
\`\`\`cmd
wget https://downloads.mysql.com/archives/get/p/23/file/mysql-5.7.31-linux-glibc2.12-x86_64.tar.gz
\`\`\`

## \u4E8C\u3001\u5B89\u88C5Mysql
1\u3001\u5728\u6267\u884Cwget\u547D\u4EE4\u7684\u76EE\u5F55\u4E0B\u6216\u4F60\u7684\u4E0A\u4F20\u76EE\u5F55\u4E0B\u627E\u5230Mysql\u5B89\u88C5\u5305\uFF0C\u6267\u884C\u89E3\u538B\u547D\u4EE4\uFF1A
\`\`\`cmd
#\u89E3\u538B
tar xzvf mysql-5.7.31-linux-glibc2.12-x86_64.tar.gz
#\u5220\u9664\u538B\u7F29\u5305
rm -rf xzvf mysql-5.7.31-linux-glibc2.12-x86_64.tar.gz
#\u79FB\u52A8\u89E3\u538B\u6587\u4EF6\u5939
mv xzvf mysql-5.7.31-linux-glibc2.12-x86_64.tar.gz /usr/local/mysql
\`\`\`
2. \u5728/usr/local/mysql\u76EE\u5F55\u4E0B\u521B\u5EFAdata\u76EE\u5F55
\`\`\`cmd
mkdir /usr/local/mysql/data
\`\`\`
3. \u66F4\u6539mysql\u76EE\u5F55\u4E0B\u6240\u6709\u7684\u76EE\u5F55\u53CA\u6587\u4EF6\u5939\u6240\u5C5E\u7684\u7528\u6237\u7EC4\u548C\u7528\u6237\uFF0C\u4EE5\u53CA\u6743\u9650
\`\`\`cmd
chown -R mysql:mysql /usr/local/mysql
chmod -R 755 /usr/local/mysql
\`\`\`
4. \u7F16\u8BD1\u5B89\u88C5\u5E76\u521D\u59CB\u5316mysql,\u52A1\u5FC5\u8BB0\u4F4F\u521D\u59CB\u5316\u8F93\u51FA\u65E5\u5FD7\u672B\u5C3E\u7684\u5BC6\u7801\uFF08\u6570\u636E\u5E93\u7BA1\u7406\u5458\u4E34\u65F6\u5BC6\u7801\uFF09
\`\`\`cmd
cd /usr/local/mysql/bin
./mysqld --initialize --user=mysql --datadir=/usr/local/mysql/data --basedir=/usr/local/mysql
\`\`\`
5. \u7F16\u8F91\u914D\u7F6E\u6587\u4EF6my.cnf\uFF0C\u6DFB\u52A0\u914D\u7F6E\u5982\u4E0B
\`\`\`cmd
vi /etc/my.cnf

[mysqld]
datadir=/usr/local/mysql/data
port=3306
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
symbolic-links=0
max_connections=600
#\u662F\u5426\u5C06\u6BCF\u4E2A\u8868\u7684\u6570\u636E\u5355\u72EC\u5B58\u50A8\uFF0C1\u8868\u793A\u5355\u72EC\u5B58\u50A8\uFF1B0\u8868\u793A\u5173\u95ED\u72EC\u7ACB\u8868\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u901A\u8FC7\u67E5\u770B\u6570\u636E\u76EE\u5F55\uFF0C\u67E5\u770B\u6587\u4EF6\u7ED3\u6784\u7684\u533A\u522B\uFF1B
innodb_file_per_table=1
#\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199\uFF0C1\u8868\u793A\u5B58\u50A8\u65F6\u8868\u540D\u4E3A\u5C0F\u5199\uFF0C\u64CD\u4F5C\u65F6\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF1B0\u8868\u793A\u533A\u5206\u5927\u5C0F\u5199\uFF1B\u4E0D\u80FD\u52A8\u6001\u8BBE\u7F6E\uFF0C\u4FEE\u6539\u540E\uFF0C\u5FC5\u987B\u91CD\u542F\u624D\u80FD\u751F\u6548\uFF1A
lower_case_table_names=1
#\u8BBE\u7F6E\u6570\u636E\u5E93\u9ED8\u8BA4\u5B57\u7B26\u96C6\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\u9ED8\u8BA4\u4E3Alatin1
character_set_server=utf8

\`\`\`
6. \u6D4B\u8BD5\u542F\u52A8mysql\u670D\u52A1\u5668
\`\`\`cmd
/usr/local/mysql/support-files/mysql.server start
\`\`\`
7. \u6DFB\u52A0\u8F6F\u8FDE\u63A5\uFF0C\u5E76\u91CD\u542Fmysql\u670D\u52A1
\`\`\`cmd
ln -s /usr/local/mysql/support-files/mysql.server /etc/init.d/mysql
ln -s /usr/local/mysql/bin/mysql /usr/bin/mysql
ervice mysql restart

\`\`\`
8. \u767B\u5F55mysql\uFF0C\u4FEE\u6539\u5BC6\u7801(\u5BC6\u7801\u4E3A\u6B65\u9AA44\u751F\u6210\u7684\u4E34\u65F6\u5BC6\u7801)
\`\`\`cmd
mysql -u root -p
Enter password:
set password for root@localhost = password('123456');
\`\`\`
9. \u5F00\u653E\u8FDC\u7A0B\u8FDE\u63A5
\`\`\`cmd
use mysql;
update user set user.Host='%' where user.User='root';
lush privileges;
\`\`\`
10. \u8BBE\u7F6E\u5F00\u673A\u81EA\u52A8\u542F\u52A8
\`\`\`cmd
#1. \u5C06\u670D\u52A1\u6587\u4EF6\u62F7\u8D1D\u5230init.d\u4E0B\uFF0C\u5E76\u91CD\u547D\u540D\u4E3Amysql
cp /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld
#2. \u8D4B\u4E88\u53EF\u6267\u884C\u6743\u9650
chmod +x /etc/init.d/mysqld
#3. \u6DFB\u52A0\u670D\u52A1
chkconfig --add mysqld
#4. \u663E\u793A\u670D\u52A1\u5217\u8868
chkconfig --list
\`\`\`
\u81F3\u6B64\uFF0Cmysql5.7.31\u7248\u672C\u7684\u6570\u636E\u5E93\u5B89\u88C5\uFF0C\u5DF2\u7ECF\u5B8C\u6210\u3002
\u5177\u4F53\u53C2\u8003\u6587\u7AE0[https://www.jianshu.com/p/276d59cbc529](https://www.jianshu.com/p/276d59cbc529)







`,isRecommend:!0,isPublish:!0,createDate:"2020-12-28T22:24:51.000Z",updateDate:"2021-09-17T09:33:24.000Z"}]})}],__glob_1_3=Object.freeze(Object.defineProperty({__proto__:null,default:index$1},Symbol.toStringTag,{value:"Module"}));const users={admin:{id:1,name:"\u5927\u8138\u602A(admin)",avatar:"https://assets.qszone.com/images/avatar.jpg",email:"Ronnie@123.com",role:["admin"]},editor:{id:2,name:"\u5927\u8138\u602A(editor)",avatar:"https://assets.qszone.com/images/avatar.jpg",email:"Ronnie@123.com",role:["editor"]},guest:{id:3,name:"\u8BBF\u5BA2(guest)",avatar:"https://assets.qszone.com/images/avatar.jpg",role:[]}};var index=[{url:"/api/user",method:"get",response:({headers:e})=>{const t=resolveToken(e==null?void 0:e.authorization);return{code:0,data:Ne({},users[t]||users.guest)}}}],__glob_1_4=Object.freeze(Object.defineProperty({__proto__:null,default:index},Symbol.toStringTag,{value:"Module"})),mock={exports:{}};(function(module,exports){(function(t,n){module.exports=n()})(commonjsGlobal,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){var r=n(1),o=n(3),a=n(5),s=n(20),l=n(23),u=n(25),d;typeof window!="undefined"&&(d=n(27));/*!
    Mock - 模拟请求 & 模拟数据
    https://github.com/nuysoft/Mock
    墨智 mozhi.gyy@taobao.com nuysoft@gmail.com
*/var f={Handler:r,Random:a,Util:o,XHR:d,RE:s,toJSONSchema:l,valid:u,heredoc:o.heredoc,setup:function(m){return d.setup(m)},_mocked:{}};f.version="1.0.1-beta3",d&&(d.Mock=f),f.mock=function(m,g,y){return arguments.length===1?r.gen(m):(arguments.length===2&&(y=g,g=void 0),d&&(window.XMLHttpRequest=d),f._mocked[m+(g||"")]={rurl:m,rtype:g,template:y},f)},e.exports=f},function(module,exports,__webpack_require__){var Constant=__webpack_require__(2),Util=__webpack_require__(3),Parser=__webpack_require__(4),Random=__webpack_require__(5),RE=__webpack_require__(20),Handler={extend:Util.extend};Handler.gen=function(e,t,n){t=t==null?"":t+"",n=n||{},n={path:n.path||[Constant.GUID],templatePath:n.templatePath||[Constant.GUID++],currentContext:n.currentContext,templateCurrentContext:n.templateCurrentContext||e,root:n.root||n.currentContext,templateRoot:n.templateRoot||n.templateCurrentContext||e};var r=Parser.parse(t),o=Util.type(e),a;return Handler[o]?(a=Handler[o]({type:o,template:e,name:t,parsedName:t&&t.replace(Constant.RE_KEY,"$1"),rule:r,context:n}),n.root||(n.root=a),a):e},Handler.extend({array:function(e){var t=[],n,r;if(e.template.length===0)return t;if(e.rule.parameters)if(e.rule.min===1&&e.rule.max===void 0)e.context.path.push(e.name),e.context.templatePath.push(e.name),t=Random.pick(Handler.gen(e.template,void 0,{path:e.context.path,templatePath:e.context.templatePath,currentContext:t,templateCurrentContext:e.template,root:e.context.root||t,templateRoot:e.context.templateRoot||e.template})),e.context.path.pop(),e.context.templatePath.pop();else if(e.rule.parameters[2])e.template.__order_index=e.template.__order_index||0,e.context.path.push(e.name),e.context.templatePath.push(e.name),t=Handler.gen(e.template,void 0,{path:e.context.path,templatePath:e.context.templatePath,currentContext:t,templateCurrentContext:e.template,root:e.context.root||t,templateRoot:e.context.templateRoot||e.template})[e.template.__order_index%e.template.length],e.template.__order_index+=+e.rule.parameters[2],e.context.path.pop(),e.context.templatePath.pop();else for(n=0;n<e.rule.count;n++)for(r=0;r<e.template.length;r++)e.context.path.push(t.length),e.context.templatePath.push(r),t.push(Handler.gen(e.template[r],t.length,{path:e.context.path,templatePath:e.context.templatePath,currentContext:t,templateCurrentContext:e.template,root:e.context.root||t,templateRoot:e.context.templateRoot||e.template})),e.context.path.pop(),e.context.templatePath.pop();else for(n=0;n<e.template.length;n++)e.context.path.push(n),e.context.templatePath.push(n),t.push(Handler.gen(e.template[n],n,{path:e.context.path,templatePath:e.context.templatePath,currentContext:t,templateCurrentContext:e.template,root:e.context.root||t,templateRoot:e.context.templateRoot||e.template})),e.context.path.pop(),e.context.templatePath.pop();return t},object:function(e){var t={},n,r,o,a,s,l;if(e.rule.min!=null)for(n=Util.keys(e.template),n=Random.shuffle(n),n=n.slice(0,e.rule.count),l=0;l<n.length;l++)o=n[l],a=o.replace(Constant.RE_KEY,"$1"),e.context.path.push(a),e.context.templatePath.push(o),t[a]=Handler.gen(e.template[o],o,{path:e.context.path,templatePath:e.context.templatePath,currentContext:t,templateCurrentContext:e.template,root:e.context.root||t,templateRoot:e.context.templateRoot||e.template}),e.context.path.pop(),e.context.templatePath.pop();else{n=[],r=[];for(o in e.template)(typeof e.template[o]=="function"?r:n).push(o);for(n=n.concat(r),l=0;l<n.length;l++)o=n[l],a=o.replace(Constant.RE_KEY,"$1"),e.context.path.push(a),e.context.templatePath.push(o),t[a]=Handler.gen(e.template[o],o,{path:e.context.path,templatePath:e.context.templatePath,currentContext:t,templateCurrentContext:e.template,root:e.context.root||t,templateRoot:e.context.templateRoot||e.template}),e.context.path.pop(),e.context.templatePath.pop(),s=o.match(Constant.RE_KEY),s&&s[2]&&Util.type(e.template[o])==="number"&&(e.template[o]+=parseInt(s[2],10))}return t},number:function(e){var t,n;if(e.rule.decimal){for(e.template+="",n=e.template.split("."),n[0]=e.rule.range?e.rule.count:n[0],n[1]=(n[1]||"").slice(0,e.rule.dcount);n[1].length<e.rule.dcount;)n[1]+=n[1].length<e.rule.dcount-1?Random.character("number"):Random.character("123456789");t=parseFloat(n.join("."),10)}else t=e.rule.range&&!e.rule.parameters[2]?e.rule.count:e.template;return t},boolean:function(e){var t;return t=e.rule.parameters?Random.bool(e.rule.min,e.rule.max,e.template):e.template,t},string:function(e){var t="",n,r,o,a;if(e.template.length){for(e.rule.count==null&&(t+=e.template),n=0;n<e.rule.count;n++)t+=e.template;for(r=t.match(Constant.RE_PLACEHOLDER)||[],n=0;n<r.length;n++){if(o=r[n],/^\\/.test(o)){r.splice(n--,1);continue}if(a=Handler.placeholder(o,e.context.currentContext,e.context.templateCurrentContext,e),r.length===1&&o===t&&typeof a!=typeof t){t=a;break}t=t.replace(o,a)}}else t=e.rule.range?Random.string(e.rule.count):e.template;return t},function:function(e){return e.template.call(e.context.currentContext,e)},regexp:function(e){var t="";e.rule.count==null&&(t+=e.template.source);for(var n=0;n<e.rule.count;n++)t+=e.template.source;return RE.Handler.gen(RE.Parser.parse(t))}}),Handler.extend({_all:function(){var e={};for(var t in Random)e[t.toLowerCase()]=t;return e},placeholder:function(placeholder,obj,templateContext,options){Constant.RE_PLACEHOLDER.exec("");var parts=Constant.RE_PLACEHOLDER.exec(placeholder),key=parts&&parts[1],lkey=key&&key.toLowerCase(),okey=this._all()[lkey],params=parts&&parts[2]||"",pathParts=this.splitPathToArray(key);try{params=eval("(function(){ return [].splice.call(arguments, 0 ) })("+params+")")}catch(e){params=parts[2].split(/,\s*/)}if(obj&&key in obj)return obj[key];if(key.charAt(0)==="/"||pathParts.length>1)return this.getValueByKeyPath(key,options);if(templateContext&&typeof templateContext=="object"&&key in templateContext&&placeholder!==templateContext[key])return templateContext[key]=Handler.gen(templateContext[key],key,{currentContext:obj,templateCurrentContext:templateContext}),templateContext[key];if(!(key in Random)&&!(lkey in Random)&&!(okey in Random))return placeholder;for(var i=0;i<params.length;i++)Constant.RE_PLACEHOLDER.exec(""),Constant.RE_PLACEHOLDER.test(params[i])&&(params[i]=Handler.placeholder(params[i],obj,templateContext,options));var handle=Random[key]||Random[lkey]||Random[okey];switch(Util.type(handle)){case"array":return Random.pick(handle);case"function":handle.options=options;var re=handle.apply(Random,params);return re===void 0&&(re=""),delete handle.options,re}},getValueByKeyPath:function(e,t){var n=e,r=this.splitPathToArray(e),o=[];e.charAt(0)==="/"?o=[t.context.path[0]].concat(this.normalizePath(r)):r.length>1&&(o=t.context.path.slice(0),o.pop(),o=this.normalizePath(o.concat(r)));try{e=r[r.length-1];for(var a=t.context.root,s=t.context.templateRoot,l=1;l<o.length-1;l++)a=a[o[l]],s=s[o[l]];if(a&&e in a)return a[e];if(s&&typeof s=="object"&&e in s&&n!==s[e])return s[e]=Handler.gen(s[e],e,{currentContext:a,templateCurrentContext:s}),s[e]}catch(u){}return"@"+r.join("/")},normalizePath:function(e){for(var t=[],n=0;n<e.length;n++)switch(e[n]){case"..":t.pop();break;case".":break;default:t.push(e[n])}return t},splitPathToArray:function(e){var t=e.split(/\/+/);return t[t.length-1]||(t=t.slice(0,-1)),t[0]||(t=t.slice(1)),t}}),module.exports=Handler},function(e,t){e.exports={GUID:1,RE_KEY:/(.+)\|(?:\+(\d+)|([\+\-]?\d+-?[\+\-]?\d*)?(?:\.(\d+-?\d*))?)/,RE_RANGE:/([\+\-]?\d+)-?([\+\-]?\d+)?/,RE_PLACEHOLDER:/\\*@([^@#%&()\?\s]+)(?:\((.*?)\))?/g}},function(e,t){var n={};n.extend=function(){var o=arguments[0]||{},a=1,s=arguments.length,l,u,d,f,m;for(s===1&&(o=this,a=0);a<s;a++)if(l=arguments[a],!!l)for(u in l)d=o[u],f=l[u],o!==f&&f!==void 0&&(n.isArray(f)||n.isObject(f)?(n.isArray(f)&&(m=d&&n.isArray(d)?d:[]),n.isObject(f)&&(m=d&&n.isObject(d)?d:{}),o[u]=n.extend(m,f)):o[u]=f);return o},n.each=function(o,a,s){var l,u;if(this.type(o)==="number")for(l=0;l<o;l++)a(l,l);else if(o.length===+o.length)for(l=0;l<o.length&&a.call(s,o[l],l,o)!==!1;l++);else for(u in o)if(a.call(s,o[u],u,o)===!1)break},n.type=function(o){return o==null?String(o):Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1].toLowerCase()},n.each("String Object Array RegExp Function".split(" "),function(r){n["is"+r]=function(o){return n.type(o)===r.toLowerCase()}}),n.isObjectOrArray=function(r){return n.isObject(r)||n.isArray(r)},n.isNumeric=function(r){return!isNaN(parseFloat(r))&&isFinite(r)},n.keys=function(r){var o=[];for(var a in r)r.hasOwnProperty(a)&&o.push(a);return o},n.values=function(r){var o=[];for(var a in r)r.hasOwnProperty(a)&&o.push(r[a]);return o},n.heredoc=function(o){return o.toString().replace(/^[^\/]+\/\*!?/,"").replace(/\*\/[^\/]+$/,"").replace(/^[\s\xA0]+/,"").replace(/[\s\xA0]+$/,"")},n.noop=function(){},e.exports=n},function(e,t,n){var r=n(2),o=n(5);e.exports={parse:function(a){a=a==null?"":a+"";var s=(a||"").match(r.RE_KEY),l=s&&s[3]&&s[3].match(r.RE_RANGE),u=l&&l[1]&&parseInt(l[1],10),d=l&&l[2]&&parseInt(l[2],10),f=l?l[2]?o.integer(u,d):parseInt(l[1],10):void 0,m=s&&s[4]&&s[4].match(r.RE_RANGE),g=m&&m[1]&&parseInt(m[1],10),y=m&&m[2]&&parseInt(m[2],10),b=m?!m[2]&&parseInt(m[1],10)||o.integer(g,y):void 0,x={parameters:s,range:l,min:u,max:d,count:f,decimal:m,dmin:g,dmax:y,dcount:b};for(var C in x)if(x[C]!=null)return x;return{}}}},function(e,t,n){var r=n(3),o={extend:r.extend};o.extend(n(6)),o.extend(n(7)),o.extend(n(8)),o.extend(n(10)),o.extend(n(13)),o.extend(n(15)),o.extend(n(16)),o.extend(n(17)),o.extend(n(14)),o.extend(n(19)),e.exports=o},function(e,t){e.exports={boolean:function(n,r,o){return o!==void 0?(n=typeof n!="undefined"&&!isNaN(n)?parseInt(n,10):1,r=typeof r!="undefined"&&!isNaN(r)?parseInt(r,10):1,Math.random()>1/(n+r)*n?!o:o):Math.random()>=.5},bool:function(n,r,o){return this.boolean(n,r,o)},natural:function(n,r){return n=typeof n!="undefined"?parseInt(n,10):0,r=typeof r!="undefined"?parseInt(r,10):9007199254740992,Math.round(Math.random()*(r-n))+n},integer:function(n,r){return n=typeof n!="undefined"?parseInt(n,10):-9007199254740992,r=typeof r!="undefined"?parseInt(r,10):9007199254740992,Math.round(Math.random()*(r-n))+n},int:function(n,r){return this.integer(n,r)},float:function(n,r,o,a){o=o===void 0?0:o,o=Math.max(Math.min(o,17),0),a=a===void 0?17:a,a=Math.max(Math.min(a,17),0);for(var s=this.integer(n,r)+".",l=0,u=this.natural(o,a);l<u;l++)s+=l<u-1?this.character("number"):this.character("123456789");return parseFloat(s,10)},character:function(n){var r={lower:"abcdefghijklmnopqrstuvwxyz",upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",number:"0123456789",symbol:"!@#$%^&*()[]"};return r.alpha=r.lower+r.upper,r.undefined=r.lower+r.upper+r.number+r.symbol,n=r[(""+n).toLowerCase()]||n,n.charAt(this.natural(0,n.length-1))},char:function(n){return this.character(n)},string:function(n,r,o){var a;switch(arguments.length){case 0:a=this.natural(3,7);break;case 1:a=n,n=void 0;break;case 2:typeof arguments[0]=="string"?a=r:(a=this.natural(n,r),n=void 0);break;case 3:a=this.natural(r,o);break}for(var s="",l=0;l<a;l++)s+=this.character(n);return s},str:function(){return this.string.apply(this,arguments)},range:function(n,r,o){arguments.length<=1&&(r=n||0,n=0),o=arguments[2]||1,n=+n,r=+r,o=+o;for(var a=Math.max(Math.ceil((r-n)/o),0),s=0,l=new Array(a);s<a;)l[s++]=n,n+=o;return l}}},function(e,t){var n={yyyy:"getFullYear",yy:function(r){return(""+r.getFullYear()).slice(2)},y:"yy",MM:function(r){var o=r.getMonth()+1;return o<10?"0"+o:o},M:function(r){return r.getMonth()+1},dd:function(r){var o=r.getDate();return o<10?"0"+o:o},d:"getDate",HH:function(r){var o=r.getHours();return o<10?"0"+o:o},H:"getHours",hh:function(r){var o=r.getHours()%12;return o<10?"0"+o:o},h:function(r){return r.getHours()%12},mm:function(r){var o=r.getMinutes();return o<10?"0"+o:o},m:"getMinutes",ss:function(r){var o=r.getSeconds();return o<10?"0"+o:o},s:"getSeconds",SS:function(r){var o=r.getMilliseconds();return o<10&&"00"+o||o<100&&"0"+o||o},S:"getMilliseconds",A:function(r){return r.getHours()<12?"AM":"PM"},a:function(r){return r.getHours()<12?"am":"pm"},T:"getTime"};e.exports={_patternLetters:n,_rformat:new RegExp(function(){var r=[];for(var o in n)r.push(o);return"("+r.join("|")+")"}(),"g"),_formatDate:function(r,o){return o.replace(this._rformat,function a(s,l){return typeof n[l]=="function"?n[l](r):n[l]in n?a(s,n[l]):r[n[l]]()})},_randomDate:function(r,o){return r=r===void 0?new Date(0):r,o=o===void 0?new Date:o,new Date(Math.random()*(o.getTime()-r.getTime()))},date:function(r){return r=r||"yyyy-MM-dd",this._formatDate(this._randomDate(),r)},time:function(r){return r=r||"HH:mm:ss",this._formatDate(this._randomDate(),r)},datetime:function(r){return r=r||"yyyy-MM-dd HH:mm:ss",this._formatDate(this._randomDate(),r)},now:function(r,o){arguments.length===1&&(/year|month|day|hour|minute|second|week/.test(r)||(o=r,r="")),r=(r||"").toLowerCase(),o=o||"yyyy-MM-dd HH:mm:ss";var a=new Date;switch(r){case"year":a.setMonth(0);case"month":a.setDate(1);case"week":case"day":a.setHours(0);case"hour":a.setMinutes(0);case"minute":a.setSeconds(0);case"second":a.setMilliseconds(0)}switch(r){case"week":a.setDate(a.getDate()-a.getDay())}return this._formatDate(a,o)}}},function(e,t,n){(function(r){r.exports={_adSize:["300x250","250x250","240x400","336x280","180x150","720x300","468x60","234x60","88x31","120x90","120x60","120x240","125x125","728x90","160x600","120x600","300x600"],_screenSize:["320x200","320x240","640x480","800x480","800x480","1024x600","1024x768","1280x800","1440x900","1920x1200","2560x1600"],_videoSize:["720x480","768x576","1280x720","1920x1080"],image:function(o,a,s,l,u){return arguments.length===4&&(u=l,l=void 0),arguments.length===3&&(u=s,s=void 0),o||(o=this.pick(this._adSize)),a&&~a.indexOf("#")&&(a=a.slice(1)),s&&~s.indexOf("#")&&(s=s.slice(1)),"http://dummyimage.com/"+o+(a?"/"+a:"")+(s?"/"+s:"")+(l?"."+l:"")+(u?"&text="+u:"")},img:function(){return this.image.apply(this,arguments)},_brandColors:{"4ormat":"#fb0a2a","500px":"#02adea","About.me (blue)":"#00405d","About.me (yellow)":"#ffcc33",Addvocate:"#ff6138",Adobe:"#ff0000",Aim:"#fcd20b",Amazon:"#e47911",Android:"#a4c639","Angie's List":"#7fbb00",AOL:"#0060a3",Atlassian:"#003366",Behance:"#053eff","Big Cartel":"#97b538",bitly:"#ee6123",Blogger:"#fc4f08",Boeing:"#0039a6","Booking.com":"#003580",Carbonmade:"#613854",Cheddar:"#ff7243","Code School":"#3d4944",Delicious:"#205cc0",Dell:"#3287c1",Designmoo:"#e54a4f",Deviantart:"#4e6252","Designer News":"#2d72da",Devour:"#fd0001",DEWALT:"#febd17","Disqus (blue)":"#59a3fc","Disqus (orange)":"#db7132",Dribbble:"#ea4c89",Dropbox:"#3d9ae8",Drupal:"#0c76ab",Dunked:"#2a323a",eBay:"#89c507",Ember:"#f05e1b",Engadget:"#00bdf6",Envato:"#528036",Etsy:"#eb6d20",Evernote:"#5ba525","Fab.com":"#dd0017",Facebook:"#3b5998",Firefox:"#e66000","Flickr (blue)":"#0063dc","Flickr (pink)":"#ff0084",Forrst:"#5b9a68",Foursquare:"#25a0ca",Garmin:"#007cc3",GetGlue:"#2d75a2",Gimmebar:"#f70078",GitHub:"#171515","Google Blue":"#0140ca","Google Green":"#16a61e","Google Red":"#dd1812","Google Yellow":"#fcca03","Google+":"#dd4b39",Grooveshark:"#f77f00",Groupon:"#82b548","Hacker News":"#ff6600",HelloWallet:"#0085ca","Heroku (light)":"#c7c5e6","Heroku (dark)":"#6567a5",HootSuite:"#003366",Houzz:"#73ba37",HTML5:"#ec6231",IKEA:"#ffcc33",IMDb:"#f3ce13",Instagram:"#3f729b",Intel:"#0071c5",Intuit:"#365ebf",Kickstarter:"#76cc1e",kippt:"#e03500",Kodery:"#00af81",LastFM:"#c3000d",LinkedIn:"#0e76a8",Livestream:"#cf0005",Lumo:"#576396",Mixpanel:"#a086d3",Meetup:"#e51937",Nokia:"#183693",NVIDIA:"#76b900",Opera:"#cc0f16",Path:"#e41f11","PayPal (dark)":"#1e477a","PayPal (light)":"#3b7bbf",Pinboard:"#0000e6",Pinterest:"#c8232c",PlayStation:"#665cbe",Pocket:"#ee4056",Prezi:"#318bff",Pusha:"#0f71b4",Quora:"#a82400","QUOTE.fm":"#66ceff",Rdio:"#008fd5",Readability:"#9c0000","Red Hat":"#cc0000",Resource:"#7eb400",Rockpack:"#0ba6ab",Roon:"#62b0d9",RSS:"#ee802f",Salesforce:"#1798c1",Samsung:"#0c4da2",Shopify:"#96bf48",Skype:"#00aff0",Snagajob:"#f47a20",Softonic:"#008ace",SoundCloud:"#ff7700","Space Box":"#f86960",Spotify:"#81b71a",Sprint:"#fee100",Squarespace:"#121212",StackOverflow:"#ef8236",Staples:"#cc0000","Status Chart":"#d7584f",Stripe:"#008cdd",StudyBlue:"#00afe1",StumbleUpon:"#f74425","T-Mobile":"#ea0a8e",Technorati:"#40a800","The Next Web":"#ef4423",Treehouse:"#5cb868",Trulia:"#5eab1f",Tumblr:"#34526f","Twitch.tv":"#6441a5",Twitter:"#00acee",TYPO3:"#ff8700",Ubuntu:"#dd4814",Ustream:"#3388ff",Verizon:"#ef1d1d",Vimeo:"#86c9ef",Vine:"#00a478",Virb:"#06afd8","Virgin Media":"#cc0000",Wooga:"#5b009c","WordPress (blue)":"#21759b","WordPress (orange)":"#d54e21","WordPress (grey)":"#464646",Wunderlist:"#2b88d9",XBOX:"#9bc848",XING:"#126567","Yahoo!":"#720e9e",Yandex:"#ffcc00",Yelp:"#c41200",YouTube:"#c4302b",Zalongo:"#5498dc",Zendesk:"#78a300",Zerply:"#9dcc7a",Zootool:"#5e8b1d"},_brandNames:function(){var o=[];for(var a in this._brandColors)o.push(a);return o},dataImage:function(o,a){var s;if(typeof document!="undefined")s=document.createElement("canvas");else{var l=r.require("canvas");s=new l}var u=s&&s.getContext&&s.getContext("2d");if(!s||!u)return"";o||(o=this.pick(this._adSize)),a=a!==void 0?a:o,o=o.split("x");var d=parseInt(o[0],10),f=parseInt(o[1],10),m=this._brandColors[this.pick(this._brandNames())],g="#FFF",y=14,b="sans-serif";return s.width=d,s.height=f,u.textAlign="center",u.textBaseline="middle",u.fillStyle=m,u.fillRect(0,0,d,f),u.fillStyle=g,u.font="bold "+y+"px "+b,u.fillText(a,d/2,f/2,d),s.toDataURL("image/png")}}}).call(t,n(9)(e))},function(e,t){e.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children=[],n.webpackPolyfill=1),n}},function(e,t,n){var r=n(11),o=n(12);e.exports={color:function(a){return a||o[a]?o[a].nicer:this.hex()},hex:function(){var a=this._goldenRatioColor(),s=r.hsv2rgb(a),l=r.rgb2hex(s[0],s[1],s[2]);return l},rgb:function(){var a=this._goldenRatioColor(),s=r.hsv2rgb(a);return"rgb("+parseInt(s[0],10)+", "+parseInt(s[1],10)+", "+parseInt(s[2],10)+")"},rgba:function(){var a=this._goldenRatioColor(),s=r.hsv2rgb(a);return"rgba("+parseInt(s[0],10)+", "+parseInt(s[1],10)+", "+parseInt(s[2],10)+", "+Math.random().toFixed(2)+")"},hsl:function(){var a=this._goldenRatioColor(),s=r.hsv2hsl(a);return"hsl("+parseInt(s[0],10)+", "+parseInt(s[1],10)+", "+parseInt(s[2],10)+")"},_goldenRatioColor:function(a,s){return this._goldenRatio=.618033988749895,this._hue=this._hue||Math.random(),this._hue+=this._goldenRatio,this._hue%=1,typeof a!="number"&&(a=.5),typeof s!="number"&&(s=.95),[this._hue*360,a*100,s*100]}}},function(e,t){e.exports={rgb2hsl:function(r){var o=r[0]/255,a=r[1]/255,s=r[2]/255,l=Math.min(o,a,s),u=Math.max(o,a,s),d=u-l,f,m,g;return u==l?f=0:o==u?f=(a-s)/d:a==u?f=2+(s-o)/d:s==u&&(f=4+(o-a)/d),f=Math.min(f*60,360),f<0&&(f+=360),g=(l+u)/2,u==l?m=0:g<=.5?m=d/(u+l):m=d/(2-u-l),[f,m*100,g*100]},rgb2hsv:function(r){var o=r[0],a=r[1],s=r[2],l=Math.min(o,a,s),u=Math.max(o,a,s),d=u-l,f,m,g;return u===0?m=0:m=d/u*1e3/10,u==l?f=0:o==u?f=(a-s)/d:a==u?f=2+(s-o)/d:s==u&&(f=4+(o-a)/d),f=Math.min(f*60,360),f<0&&(f+=360),g=u/255*1e3/10,[f,m,g]},hsl2rgb:function(r){var o=r[0]/360,a=r[1]/100,s=r[2]/100,l,u,d,f,m;if(a===0)return m=s*255,[m,m,m];s<.5?u=s*(1+a):u=s+a-s*a,l=2*s-u,f=[0,0,0];for(var g=0;g<3;g++)d=o+1/3*-(g-1),d<0&&d++,d>1&&d--,6*d<1?m=l+(u-l)*6*d:2*d<1?m=u:3*d<2?m=l+(u-l)*(2/3-d)*6:m=l,f[g]=m*255;return f},hsl2hsv:function(r){var o=r[0],a=r[1]/100,s=r[2]/100,l,u;return s*=2,a*=s<=1?s:2-s,u=(s+a)/2,l=2*a/(s+a),[o,l*100,u*100]},hsv2rgb:function(r){var o=r[0]/60,a=r[1]/100,s=r[2]/100,l=Math.floor(o)%6,u=o-Math.floor(o),d=255*s*(1-a),f=255*s*(1-a*u),m=255*s*(1-a*(1-u));switch(s=255*s,l){case 0:return[s,m,d];case 1:return[f,s,d];case 2:return[d,s,m];case 3:return[d,f,s];case 4:return[m,d,s];case 5:return[s,d,f]}},hsv2hsl:function(r){var o=r[0],a=r[1]/100,s=r[2]/100,l,u;return u=(2-a)*s,l=a*s,l/=u<=1?u:2-u,u/=2,[o,l*100,u*100]},rgb2hex:function(n,r,o){return"#"+((256+n<<8|r)<<8|o).toString(16).slice(1)},hex2rgb:function(n){return n="0x"+n.slice(1).replace(n.length>4?n:/./g,"$&$&")|0,[n>>16,n>>8&255,n&255]}}},function(e,t){e.exports={navy:{value:"#000080",nicer:"#001F3F"},blue:{value:"#0000ff",nicer:"#0074D9"},aqua:{value:"#00ffff",nicer:"#7FDBFF"},teal:{value:"#008080",nicer:"#39CCCC"},olive:{value:"#008000",nicer:"#3D9970"},green:{value:"#008000",nicer:"#2ECC40"},lime:{value:"#00ff00",nicer:"#01FF70"},yellow:{value:"#ffff00",nicer:"#FFDC00"},orange:{value:"#ffa500",nicer:"#FF851B"},red:{value:"#ff0000",nicer:"#FF4136"},maroon:{value:"#800000",nicer:"#85144B"},fuchsia:{value:"#ff00ff",nicer:"#F012BE"},purple:{value:"#800080",nicer:"#B10DC9"},silver:{value:"#c0c0c0",nicer:"#DDDDDD"},gray:{value:"#808080",nicer:"#AAAAAA"},black:{value:"#000000",nicer:"#111111"},white:{value:"#FFFFFF",nicer:"#FFFFFF"}}},function(e,t,n){var r=n(6),o=n(14);function a(s,l,u,d){return u===void 0?r.natural(s,l):d===void 0?u:r.natural(parseInt(u,10),parseInt(d,10))}e.exports={paragraph:function(s,l){for(var u=a(3,7,s,l),d=[],f=0;f<u;f++)d.push(this.sentence());return d.join(" ")},cparagraph:function(s,l){for(var u=a(3,7,s,l),d=[],f=0;f<u;f++)d.push(this.csentence());return d.join("")},sentence:function(s,l){for(var u=a(12,18,s,l),d=[],f=0;f<u;f++)d.push(this.word());return o.capitalize(d.join(" "))+"."},csentence:function(s,l){for(var u=a(12,18,s,l),d=[],f=0;f<u;f++)d.push(this.cword());return d.join("")+"\u3002"},word:function(s,l){for(var u=a(3,10,s,l),d="",f=0;f<u;f++)d+=r.character("lower");return d},cword:function(s,l,u){var d="\u7684\u4E00\u662F\u5728\u4E0D\u4E86\u6709\u548C\u4EBA\u8FD9\u4E2D\u5927\u4E3A\u4E0A\u4E2A\u56FD\u6211\u4EE5\u8981\u4ED6\u65F6\u6765\u7528\u4EEC\u751F\u5230\u4F5C\u5730\u4E8E\u51FA\u5C31\u5206\u5BF9\u6210\u4F1A\u53EF\u4E3B\u53D1\u5E74\u52A8\u540C\u5DE5\u4E5F\u80FD\u4E0B\u8FC7\u5B50\u8BF4\u4EA7\u79CD\u9762\u800C\u65B9\u540E\u591A\u5B9A\u884C\u5B66\u6CD5\u6240\u6C11\u5F97\u7ECF\u5341\u4E09\u4E4B\u8FDB\u7740\u7B49\u90E8\u5EA6\u5BB6\u7535\u529B\u91CC\u5982\u6C34\u5316\u9AD8\u81EA\u4E8C\u7406\u8D77\u5C0F\u7269\u73B0\u5B9E\u52A0\u91CF\u90FD\u4E24\u4F53\u5236\u673A\u5F53\u4F7F\u70B9\u4ECE\u4E1A\u672C\u53BB\u628A\u6027\u597D\u5E94\u5F00\u5B83\u5408\u8FD8\u56E0\u7531\u5176\u4E9B\u7136\u524D\u5916\u5929\u653F\u56DB\u65E5\u90A3\u793E\u4E49\u4E8B\u5E73\u5F62\u76F8\u5168\u8868\u95F4\u6837\u4E0E\u5173\u5404\u91CD\u65B0\u7EBF\u5185\u6570\u6B63\u5FC3\u53CD\u4F60\u660E\u770B\u539F\u53C8\u4E48\u5229\u6BD4\u6216\u4F46\u8D28\u6C14\u7B2C\u5411\u9053\u547D\u6B64\u53D8\u6761\u53EA\u6CA1\u7ED3\u89E3\u95EE\u610F\u5EFA\u6708\u516C\u65E0\u7CFB\u519B\u5F88\u60C5\u8005\u6700\u7ACB\u4EE3\u60F3\u5DF2\u901A\u5E76\u63D0\u76F4\u9898\u515A\u7A0B\u5C55\u4E94\u679C\u6599\u8C61\u5458\u9769\u4F4D\u5165\u5E38\u6587\u603B\u6B21\u54C1\u5F0F\u6D3B\u8BBE\u53CA\u7BA1\u7279\u4EF6\u957F\u6C42\u8001\u5934\u57FA\u8D44\u8FB9\u6D41\u8DEF\u7EA7\u5C11\u56FE\u5C71\u7EDF\u63A5\u77E5\u8F83\u5C06\u7EC4\u89C1\u8BA1\u522B\u5979\u624B\u89D2\u671F\u6839\u8BBA\u8FD0\u519C\u6307\u51E0\u4E5D\u533A\u5F3A\u653E\u51B3\u897F\u88AB\u5E72\u505A\u5FC5\u6218\u5148\u56DE\u5219\u4EFB\u53D6\u636E\u5904\u961F\u5357\u7ED9\u8272\u5149\u95E8\u5373\u4FDD\u6CBB\u5317\u9020\u767E\u89C4\u70ED\u9886\u4E03\u6D77\u53E3\u4E1C\u5BFC\u5668\u538B\u5FD7\u4E16\u91D1\u589E\u4E89\u6D4E\u9636\u6CB9\u601D\u672F\u6781\u4EA4\u53D7\u8054\u4EC0\u8BA4\u516D\u5171\u6743\u6536\u8BC1\u6539\u6E05\u5DF1\u7F8E\u518D\u91C7\u8F6C\u66F4\u5355\u98CE\u5207\u6253\u767D\u6559\u901F\u82B1\u5E26\u5B89\u573A\u8EAB\u8F66\u4F8B\u771F\u52A1\u5177\u4E07\u6BCF\u76EE\u81F3\u8FBE\u8D70\u79EF\u793A\u8BAE\u58F0\u62A5\u6597\u5B8C\u7C7B\u516B\u79BB\u534E\u540D\u786E\u624D\u79D1\u5F20\u4FE1\u9A6C\u8282\u8BDD\u7C73\u6574\u7A7A\u5143\u51B5\u4ECA\u96C6\u6E29\u4F20\u571F\u8BB8\u6B65\u7FA4\u5E7F\u77F3\u8BB0\u9700\u6BB5\u7814\u754C\u62C9\u6797\u5F8B\u53EB\u4E14\u7A76\u89C2\u8D8A\u7EC7\u88C5\u5F71\u7B97\u4F4E\u6301\u97F3\u4F17\u4E66\u5E03\u590D\u5BB9\u513F\u987B\u9645\u5546\u975E\u9A8C\u8FDE\u65AD\u6DF1\u96BE\u8FD1\u77FF\u5343\u5468\u59D4\u7D20\u6280\u5907\u534A\u529E\u9752\u7701\u5217\u4E60\u54CD\u7EA6\u652F\u822C\u53F2\u611F\u52B3\u4FBF\u56E2\u5F80\u9178\u5386\u5E02\u514B\u4F55\u9664\u6D88\u6784\u5E9C\u79F0\u592A\u51C6\u7CBE\u503C\u53F7\u7387\u65CF\u7EF4\u5212\u9009\u6807\u5199\u5B58\u5019\u6BDB\u4EB2\u5FEB\u6548\u65AF\u9662\u67E5\u6C5F\u578B\u773C\u738B\u6309\u683C\u517B\u6613\u7F6E\u6D3E\u5C42\u7247\u59CB\u5374\u4E13\u72B6\u80B2\u5382\u4EAC\u8BC6\u9002\u5C5E\u5706\u5305\u706B\u4F4F\u8C03\u6EE1\u53BF\u5C40\u7167\u53C2\u7EA2\u7EC6\u5F15\u542C\u8BE5\u94C1\u4EF7\u4E25\u9F99\u98DE",f;switch(arguments.length){case 0:s=d,f=1;break;case 1:typeof arguments[0]=="string"?f=1:(f=s,s=d);break;case 2:typeof arguments[0]=="string"?f=l:(f=this.natural(s,l),s=d);break;case 3:f=this.natural(l,u);break}for(var m="",g=0;g<f;g++)m+=s.charAt(this.natural(0,s.length-1));return m},title:function(s,l){for(var u=a(3,7,s,l),d=[],f=0;f<u;f++)d.push(this.capitalize(this.word()));return d.join(" ")},ctitle:function(s,l){for(var u=a(3,7,s,l),d=[],f=0;f<u;f++)d.push(this.cword());return d.join("")}}},function(e,t,n){var r=n(3);e.exports={capitalize:function(o){return(o+"").charAt(0).toUpperCase()+(o+"").substr(1)},upper:function(o){return(o+"").toUpperCase()},lower:function(o){return(o+"").toLowerCase()},pick:function(a,s,l){return r.isArray(a)?(s===void 0&&(s=1),l===void 0&&(l=s)):(a=[].slice.call(arguments),s=1,l=1),s===1&&l===1?a[this.natural(0,a.length-1)]:this.shuffle(a,s,l)},shuffle:function(a,s,l){a=a||[];for(var u=a.slice(0),d=[],f=0,m=u.length,g=0;g<m;g++)f=this.natural(0,u.length-1),d.push(u[f]),u.splice(f,1);switch(arguments.length){case 0:case 1:return d;case 2:l=s;case 3:return s=parseInt(s,10),l=parseInt(l,10),d.slice(0,this.natural(s,l))}},order:function o(a){o.cache=o.cache||{},arguments.length>1&&(a=[].slice.call(arguments,0));var s=o.options,l=s.context.templatePath.join("."),u=o.cache[l]=o.cache[l]||{index:0,array:a};return u.array[u.index++%u.array.length]}}},function(e,t){e.exports={first:function(){var n=["James","John","Robert","Michael","William","David","Richard","Charles","Joseph","Thomas","Christopher","Daniel","Paul","Mark","Donald","George","Kenneth","Steven","Edward","Brian","Ronald","Anthony","Kevin","Jason","Matthew","Gary","Timothy","Jose","Larry","Jeffrey","Frank","Scott","Eric"].concat(["Mary","Patricia","Linda","Barbara","Elizabeth","Jennifer","Maria","Susan","Margaret","Dorothy","Lisa","Nancy","Karen","Betty","Helen","Sandra","Donna","Carol","Ruth","Sharon","Michelle","Laura","Sarah","Kimberly","Deborah","Jessica","Shirley","Cynthia","Angela","Melissa","Brenda","Amy","Anna"]);return this.pick(n)},last:function(){var n=["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Rodriguez","Wilson","Martinez","Anderson","Taylor","Thomas","Hernandez","Moore","Martin","Jackson","Thompson","White","Lopez","Lee","Gonzalez","Harris","Clark","Lewis","Robinson","Walker","Perez","Hall","Young","Allen"];return this.pick(n)},name:function(n){return this.first()+" "+(n?this.first()+" ":"")+this.last()},cfirst:function(){var n="\u738B \u674E \u5F20 \u5218 \u9648 \u6768 \u8D75 \u9EC4 \u5468 \u5434 \u5F90 \u5B59 \u80E1 \u6731 \u9AD8 \u6797 \u4F55 \u90ED \u9A6C \u7F57 \u6881 \u5B8B \u90D1 \u8C22 \u97E9 \u5510 \u51AF \u4E8E \u8463 \u8427 \u7A0B \u66F9 \u8881 \u9093 \u8BB8 \u5085 \u6C88 \u66FE \u5F6D \u5415 \u82CF \u5362 \u848B \u8521 \u8D3E \u4E01 \u9B4F \u859B \u53F6 \u960E \u4F59 \u6F58 \u675C \u6234 \u590F \u953A \u6C6A \u7530 \u4EFB \u59DC \u8303 \u65B9 \u77F3 \u59DA \u8C2D \u5ED6 \u90B9 \u718A \u91D1 \u9646 \u90DD \u5B54 \u767D \u5D14 \u5EB7 \u6BDB \u90B1 \u79E6 \u6C5F \u53F2 \u987E \u4FAF \u90B5 \u5B5F \u9F99 \u4E07 \u6BB5 \u96F7 \u94B1 \u6C64 \u5C39 \u9ECE \u6613 \u5E38 \u6B66 \u4E54 \u8D3A \u8D56 \u9F9A \u6587".split(" ");return this.pick(n)},clast:function(){var n="\u4F1F \u82B3 \u5A1C \u79C0\u82F1 \u654F \u9759 \u4E3D \u5F3A \u78CA \u519B \u6D0B \u52C7 \u8273 \u6770 \u5A1F \u6D9B \u660E \u8D85 \u79C0\u5170 \u971E \u5E73 \u521A \u6842\u82F1".split(" ");return this.pick(n)},cname:function(){return this.cfirst()+this.clast()}}},function(e,t){e.exports={url:function(n,r){return(n||this.protocol())+"://"+(r||this.domain())+"/"+this.word()},protocol:function(){return this.pick("http ftp gopher mailto mid cid news nntp prospero telnet rlogin tn3270 wais".split(" "))},domain:function(n){return this.word()+"."+(n||this.tld())},tld:function(){return this.pick("com net org edu gov int mil cn com.cn net.cn gov.cn org.cn \u4E2D\u56FD \u4E2D\u56FD\u4E92\u8054.\u516C\u53F8 \u4E2D\u56FD\u4E92\u8054.\u7F51\u7EDC tel biz cc tv info name hk mobi asia cd travel pro museum coop aero ad ae af ag ai al am an ao aq ar as at au aw az ba bb bd be bf bg bh bi bj bm bn bo br bs bt bv bw by bz ca cc cf cg ch ci ck cl cm cn co cq cr cu cv cx cy cz de dj dk dm do dz ec ee eg eh es et ev fi fj fk fm fo fr ga gb gd ge gf gh gi gl gm gn gp gr gt gu gw gy hk hm hn hr ht hu id ie il in io iq ir is it jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md mg mh ml mm mn mo mp mq mr ms mt mv mw mx my mz na nc ne nf ng ni nl no np nr nt nu nz om qa pa pe pf pg ph pk pl pm pn pr pt pw py re ro ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr st su sy sz tc td tf tg th tj tk tm tn to tp tr tt tv tw tz ua ug uk us uy va vc ve vg vn vu wf ws ye yu za zm zr zw".split(" "))},email:function(n){return this.character("lower")+"."+this.word()+"@"+(n||this.word()+"."+this.tld())},ip:function(){return this.natural(0,255)+"."+this.natural(0,255)+"."+this.natural(0,255)+"."+this.natural(0,255)}}},function(e,t,n){var r=n(18),o=["\u4E1C\u5317","\u534E\u5317","\u534E\u4E1C","\u534E\u4E2D","\u534E\u5357","\u897F\u5357","\u897F\u5317"];e.exports={region:function(){return this.pick(o)},province:function(){return this.pick(r).name},city:function(a){var s=this.pick(r),l=this.pick(s.children);return a?[s.name,l.name].join(" "):l.name},county:function(a){var s=this.pick(r),l=this.pick(s.children),u=this.pick(l.children)||{name:"-"};return a?[s.name,l.name,u.name].join(" "):u.name},zip:function(a){for(var s="",l=0;l<(a||6);l++)s+=this.natural(0,9);return s}}},function(e,t){var n={"110000":"\u5317\u4EAC","110100":"\u5317\u4EAC\u5E02","110101":"\u4E1C\u57CE\u533A","110102":"\u897F\u57CE\u533A","110105":"\u671D\u9633\u533A","110106":"\u4E30\u53F0\u533A","110107":"\u77F3\u666F\u5C71\u533A","110108":"\u6D77\u6DC0\u533A","110109":"\u95E8\u5934\u6C9F\u533A","110111":"\u623F\u5C71\u533A","110112":"\u901A\u5DDE\u533A","110113":"\u987A\u4E49\u533A","110114":"\u660C\u5E73\u533A","110115":"\u5927\u5174\u533A","110116":"\u6000\u67D4\u533A","110117":"\u5E73\u8C37\u533A","110228":"\u5BC6\u4E91\u53BF","110229":"\u5EF6\u5E86\u53BF","110230":"\u5176\u5B83\u533A","120000":"\u5929\u6D25","120100":"\u5929\u6D25\u5E02","120101":"\u548C\u5E73\u533A","120102":"\u6CB3\u4E1C\u533A","120103":"\u6CB3\u897F\u533A","120104":"\u5357\u5F00\u533A","120105":"\u6CB3\u5317\u533A","120106":"\u7EA2\u6865\u533A","120110":"\u4E1C\u4E3D\u533A","120111":"\u897F\u9752\u533A","120112":"\u6D25\u5357\u533A","120113":"\u5317\u8FB0\u533A","120114":"\u6B66\u6E05\u533A","120115":"\u5B9D\u577B\u533A","120116":"\u6EE8\u6D77\u65B0\u533A","120221":"\u5B81\u6CB3\u53BF","120223":"\u9759\u6D77\u53BF","120225":"\u84DF\u53BF","120226":"\u5176\u5B83\u533A","130000":"\u6CB3\u5317\u7701","130100":"\u77F3\u5BB6\u5E84\u5E02","130102":"\u957F\u5B89\u533A","130103":"\u6865\u4E1C\u533A","130104":"\u6865\u897F\u533A","130105":"\u65B0\u534E\u533A","130107":"\u4E95\u9649\u77FF\u533A","130108":"\u88D5\u534E\u533A","130121":"\u4E95\u9649\u53BF","130123":"\u6B63\u5B9A\u53BF","130124":"\u683E\u57CE\u53BF","130125":"\u884C\u5510\u53BF","130126":"\u7075\u5BFF\u53BF","130127":"\u9AD8\u9091\u53BF","130128":"\u6DF1\u6CFD\u53BF","130129":"\u8D5E\u7687\u53BF","130130":"\u65E0\u6781\u53BF","130131":"\u5E73\u5C71\u53BF","130132":"\u5143\u6C0F\u53BF","130133":"\u8D75\u53BF","130181":"\u8F9B\u96C6\u5E02","130182":"\u85C1\u57CE\u5E02","130183":"\u664B\u5DDE\u5E02","130184":"\u65B0\u4E50\u5E02","130185":"\u9E7F\u6CC9\u5E02","130186":"\u5176\u5B83\u533A","130200":"\u5510\u5C71\u5E02","130202":"\u8DEF\u5357\u533A","130203":"\u8DEF\u5317\u533A","130204":"\u53E4\u51B6\u533A","130205":"\u5F00\u5E73\u533A","130207":"\u4E30\u5357\u533A","130208":"\u4E30\u6DA6\u533A","130223":"\u6EE6\u53BF","130224":"\u6EE6\u5357\u53BF","130225":"\u4E50\u4EAD\u53BF","130227":"\u8FC1\u897F\u53BF","130229":"\u7389\u7530\u53BF","130230":"\u66F9\u5983\u7538\u533A","130281":"\u9075\u5316\u5E02","130283":"\u8FC1\u5B89\u5E02","130284":"\u5176\u5B83\u533A","130300":"\u79E6\u7687\u5C9B\u5E02","130302":"\u6D77\u6E2F\u533A","130303":"\u5C71\u6D77\u5173\u533A","130304":"\u5317\u6234\u6CB3\u533A","130321":"\u9752\u9F99\u6EE1\u65CF\u81EA\u6CBB\u53BF","130322":"\u660C\u9ECE\u53BF","130323":"\u629A\u5B81\u53BF","130324":"\u5362\u9F99\u53BF","130398":"\u5176\u5B83\u533A","130400":"\u90AF\u90F8\u5E02","130402":"\u90AF\u5C71\u533A","130403":"\u4E1B\u53F0\u533A","130404":"\u590D\u5174\u533A","130406":"\u5CF0\u5CF0\u77FF\u533A","130421":"\u90AF\u90F8\u53BF","130423":"\u4E34\u6F33\u53BF","130424":"\u6210\u5B89\u53BF","130425":"\u5927\u540D\u53BF","130426":"\u6D89\u53BF","130427":"\u78C1\u53BF","130428":"\u80A5\u4E61\u53BF","130429":"\u6C38\u5E74\u53BF","130430":"\u90B1\u53BF","130431":"\u9E21\u6CFD\u53BF","130432":"\u5E7F\u5E73\u53BF","130433":"\u9986\u9676\u53BF","130434":"\u9B4F\u53BF","130435":"\u66F2\u5468\u53BF","130481":"\u6B66\u5B89\u5E02","130482":"\u5176\u5B83\u533A","130500":"\u90A2\u53F0\u5E02","130502":"\u6865\u4E1C\u533A","130503":"\u6865\u897F\u533A","130521":"\u90A2\u53F0\u53BF","130522":"\u4E34\u57CE\u53BF","130523":"\u5185\u4E18\u53BF","130524":"\u67CF\u4E61\u53BF","130525":"\u9686\u5C27\u53BF","130526":"\u4EFB\u53BF","130527":"\u5357\u548C\u53BF","130528":"\u5B81\u664B\u53BF","130529":"\u5DE8\u9E7F\u53BF","130530":"\u65B0\u6CB3\u53BF","130531":"\u5E7F\u5B97\u53BF","130532":"\u5E73\u4E61\u53BF","130533":"\u5A01\u53BF","130534":"\u6E05\u6CB3\u53BF","130535":"\u4E34\u897F\u53BF","130581":"\u5357\u5BAB\u5E02","130582":"\u6C99\u6CB3\u5E02","130583":"\u5176\u5B83\u533A","130600":"\u4FDD\u5B9A\u5E02","130602":"\u65B0\u5E02\u533A","130603":"\u5317\u5E02\u533A","130604":"\u5357\u5E02\u533A","130621":"\u6EE1\u57CE\u53BF","130622":"\u6E05\u82D1\u53BF","130623":"\u6D9E\u6C34\u53BF","130624":"\u961C\u5E73\u53BF","130625":"\u5F90\u6C34\u53BF","130626":"\u5B9A\u5174\u53BF","130627":"\u5510\u53BF","130628":"\u9AD8\u9633\u53BF","130629":"\u5BB9\u57CE\u53BF","130630":"\u6D9E\u6E90\u53BF","130631":"\u671B\u90FD\u53BF","130632":"\u5B89\u65B0\u53BF","130633":"\u6613\u53BF","130634":"\u66F2\u9633\u53BF","130635":"\u8821\u53BF","130636":"\u987A\u5E73\u53BF","130637":"\u535A\u91CE\u53BF","130638":"\u96C4\u53BF","130681":"\u6DBF\u5DDE\u5E02","130682":"\u5B9A\u5DDE\u5E02","130683":"\u5B89\u56FD\u5E02","130684":"\u9AD8\u7891\u5E97\u5E02","130699":"\u5176\u5B83\u533A","130700":"\u5F20\u5BB6\u53E3\u5E02","130702":"\u6865\u4E1C\u533A","130703":"\u6865\u897F\u533A","130705":"\u5BA3\u5316\u533A","130706":"\u4E0B\u82B1\u56ED\u533A","130721":"\u5BA3\u5316\u53BF","130722":"\u5F20\u5317\u53BF","130723":"\u5EB7\u4FDD\u53BF","130724":"\u6CBD\u6E90\u53BF","130725":"\u5C1A\u4E49\u53BF","130726":"\u851A\u53BF","130727":"\u9633\u539F\u53BF","130728":"\u6000\u5B89\u53BF","130729":"\u4E07\u5168\u53BF","130730":"\u6000\u6765\u53BF","130731":"\u6DBF\u9E7F\u53BF","130732":"\u8D64\u57CE\u53BF","130733":"\u5D07\u793C\u53BF","130734":"\u5176\u5B83\u533A","130800":"\u627F\u5FB7\u5E02","130802":"\u53CC\u6865\u533A","130803":"\u53CC\u6EE6\u533A","130804":"\u9E70\u624B\u8425\u5B50\u77FF\u533A","130821":"\u627F\u5FB7\u53BF","130822":"\u5174\u9686\u53BF","130823":"\u5E73\u6CC9\u53BF","130824":"\u6EE6\u5E73\u53BF","130825":"\u9686\u5316\u53BF","130826":"\u4E30\u5B81\u6EE1\u65CF\u81EA\u6CBB\u53BF","130827":"\u5BBD\u57CE\u6EE1\u65CF\u81EA\u6CBB\u53BF","130828":"\u56F4\u573A\u6EE1\u65CF\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF","130829":"\u5176\u5B83\u533A","130900":"\u6CA7\u5DDE\u5E02","130902":"\u65B0\u534E\u533A","130903":"\u8FD0\u6CB3\u533A","130921":"\u6CA7\u53BF","130922":"\u9752\u53BF","130923":"\u4E1C\u5149\u53BF","130924":"\u6D77\u5174\u53BF","130925":"\u76D0\u5C71\u53BF","130926":"\u8083\u5B81\u53BF","130927":"\u5357\u76AE\u53BF","130928":"\u5434\u6865\u53BF","130929":"\u732E\u53BF","130930":"\u5B5F\u6751\u56DE\u65CF\u81EA\u6CBB\u53BF","130981":"\u6CCA\u5934\u5E02","130982":"\u4EFB\u4E18\u5E02","130983":"\u9EC4\u9A85\u5E02","130984":"\u6CB3\u95F4\u5E02","130985":"\u5176\u5B83\u533A","131000":"\u5ECA\u574A\u5E02","131002":"\u5B89\u6B21\u533A","131003":"\u5E7F\u9633\u533A","131022":"\u56FA\u5B89\u53BF","131023":"\u6C38\u6E05\u53BF","131024":"\u9999\u6CB3\u53BF","131025":"\u5927\u57CE\u53BF","131026":"\u6587\u5B89\u53BF","131028":"\u5927\u5382\u56DE\u65CF\u81EA\u6CBB\u53BF","131081":"\u9738\u5DDE\u5E02","131082":"\u4E09\u6CB3\u5E02","131083":"\u5176\u5B83\u533A","131100":"\u8861\u6C34\u5E02","131102":"\u6843\u57CE\u533A","131121":"\u67A3\u5F3A\u53BF","131122":"\u6B66\u9091\u53BF","131123":"\u6B66\u5F3A\u53BF","131124":"\u9976\u9633\u53BF","131125":"\u5B89\u5E73\u53BF","131126":"\u6545\u57CE\u53BF","131127":"\u666F\u53BF","131128":"\u961C\u57CE\u53BF","131181":"\u5180\u5DDE\u5E02","131182":"\u6DF1\u5DDE\u5E02","131183":"\u5176\u5B83\u533A","140000":"\u5C71\u897F\u7701","140100":"\u592A\u539F\u5E02","140105":"\u5C0F\u5E97\u533A","140106":"\u8FCE\u6CFD\u533A","140107":"\u674F\u82B1\u5CAD\u533A","140108":"\u5C16\u8349\u576A\u533A","140109":"\u4E07\u67CF\u6797\u533A","140110":"\u664B\u6E90\u533A","140121":"\u6E05\u5F90\u53BF","140122":"\u9633\u66F2\u53BF","140123":"\u5A04\u70E6\u53BF","140181":"\u53E4\u4EA4\u5E02","140182":"\u5176\u5B83\u533A","140200":"\u5927\u540C\u5E02","140202":"\u57CE\u533A","140203":"\u77FF\u533A","140211":"\u5357\u90CA\u533A","140212":"\u65B0\u8363\u533A","140221":"\u9633\u9AD8\u53BF","140222":"\u5929\u9547\u53BF","140223":"\u5E7F\u7075\u53BF","140224":"\u7075\u4E18\u53BF","140225":"\u6D51\u6E90\u53BF","140226":"\u5DE6\u4E91\u53BF","140227":"\u5927\u540C\u53BF","140228":"\u5176\u5B83\u533A","140300":"\u9633\u6CC9\u5E02","140302":"\u57CE\u533A","140303":"\u77FF\u533A","140311":"\u90CA\u533A","140321":"\u5E73\u5B9A\u53BF","140322":"\u76C2\u53BF","140323":"\u5176\u5B83\u533A","140400":"\u957F\u6CBB\u5E02","140421":"\u957F\u6CBB\u53BF","140423":"\u8944\u57A3\u53BF","140424":"\u5C6F\u7559\u53BF","140425":"\u5E73\u987A\u53BF","140426":"\u9ECE\u57CE\u53BF","140427":"\u58F6\u5173\u53BF","140428":"\u957F\u5B50\u53BF","140429":"\u6B66\u4E61\u53BF","140430":"\u6C81\u53BF","140431":"\u6C81\u6E90\u53BF","140481":"\u6F5E\u57CE\u5E02","140482":"\u57CE\u533A","140483":"\u90CA\u533A","140485":"\u5176\u5B83\u533A","140500":"\u664B\u57CE\u5E02","140502":"\u57CE\u533A","140521":"\u6C81\u6C34\u53BF","140522":"\u9633\u57CE\u53BF","140524":"\u9675\u5DDD\u53BF","140525":"\u6CFD\u5DDE\u53BF","140581":"\u9AD8\u5E73\u5E02","140582":"\u5176\u5B83\u533A","140600":"\u6714\u5DDE\u5E02","140602":"\u6714\u57CE\u533A","140603":"\u5E73\u9C81\u533A","140621":"\u5C71\u9634\u53BF","140622":"\u5E94\u53BF","140623":"\u53F3\u7389\u53BF","140624":"\u6000\u4EC1\u53BF","140625":"\u5176\u5B83\u533A","140700":"\u664B\u4E2D\u5E02","140702":"\u6986\u6B21\u533A","140721":"\u6986\u793E\u53BF","140722":"\u5DE6\u6743\u53BF","140723":"\u548C\u987A\u53BF","140724":"\u6614\u9633\u53BF","140725":"\u5BFF\u9633\u53BF","140726":"\u592A\u8C37\u53BF","140727":"\u7941\u53BF","140728":"\u5E73\u9065\u53BF","140729":"\u7075\u77F3\u53BF","140781":"\u4ECB\u4F11\u5E02","140782":"\u5176\u5B83\u533A","140800":"\u8FD0\u57CE\u5E02","140802":"\u76D0\u6E56\u533A","140821":"\u4E34\u7317\u53BF","140822":"\u4E07\u8363\u53BF","140823":"\u95FB\u559C\u53BF","140824":"\u7A37\u5C71\u53BF","140825":"\u65B0\u7EDB\u53BF","140826":"\u7EDB\u53BF","140827":"\u57A3\u66F2\u53BF","140828":"\u590F\u53BF","140829":"\u5E73\u9646\u53BF","140830":"\u82AE\u57CE\u53BF","140881":"\u6C38\u6D4E\u5E02","140882":"\u6CB3\u6D25\u5E02","140883":"\u5176\u5B83\u533A","140900":"\u5FFB\u5DDE\u5E02","140902":"\u5FFB\u5E9C\u533A","140921":"\u5B9A\u8944\u53BF","140922":"\u4E94\u53F0\u53BF","140923":"\u4EE3\u53BF","140924":"\u7E41\u5CD9\u53BF","140925":"\u5B81\u6B66\u53BF","140926":"\u9759\u4E50\u53BF","140927":"\u795E\u6C60\u53BF","140928":"\u4E94\u5BE8\u53BF","140929":"\u5CA2\u5C9A\u53BF","140930":"\u6CB3\u66F2\u53BF","140931":"\u4FDD\u5FB7\u53BF","140932":"\u504F\u5173\u53BF","140981":"\u539F\u5E73\u5E02","140982":"\u5176\u5B83\u533A","141000":"\u4E34\u6C7E\u5E02","141002":"\u5C27\u90FD\u533A","141021":"\u66F2\u6C83\u53BF","141022":"\u7FFC\u57CE\u53BF","141023":"\u8944\u6C7E\u53BF","141024":"\u6D2A\u6D1E\u53BF","141025":"\u53E4\u53BF","141026":"\u5B89\u6CFD\u53BF","141027":"\u6D6E\u5C71\u53BF","141028":"\u5409\u53BF","141029":"\u4E61\u5B81\u53BF","141030":"\u5927\u5B81\u53BF","141031":"\u96B0\u53BF","141032":"\u6C38\u548C\u53BF","141033":"\u84B2\u53BF","141034":"\u6C7E\u897F\u53BF","141081":"\u4FAF\u9A6C\u5E02","141082":"\u970D\u5DDE\u5E02","141083":"\u5176\u5B83\u533A","141100":"\u5415\u6881\u5E02","141102":"\u79BB\u77F3\u533A","141121":"\u6587\u6C34\u53BF","141122":"\u4EA4\u57CE\u53BF","141123":"\u5174\u53BF","141124":"\u4E34\u53BF","141125":"\u67F3\u6797\u53BF","141126":"\u77F3\u697C\u53BF","141127":"\u5C9A\u53BF","141128":"\u65B9\u5C71\u53BF","141129":"\u4E2D\u9633\u53BF","141130":"\u4EA4\u53E3\u53BF","141181":"\u5B5D\u4E49\u5E02","141182":"\u6C7E\u9633\u5E02","141183":"\u5176\u5B83\u533A","150000":"\u5185\u8499\u53E4\u81EA\u6CBB\u533A","150100":"\u547C\u548C\u6D69\u7279\u5E02","150102":"\u65B0\u57CE\u533A","150103":"\u56DE\u6C11\u533A","150104":"\u7389\u6CC9\u533A","150105":"\u8D5B\u7F55\u533A","150121":"\u571F\u9ED8\u7279\u5DE6\u65D7","150122":"\u6258\u514B\u6258\u53BF","150123":"\u548C\u6797\u683C\u5C14\u53BF","150124":"\u6E05\u6C34\u6CB3\u53BF","150125":"\u6B66\u5DDD\u53BF","150126":"\u5176\u5B83\u533A","150200":"\u5305\u5934\u5E02","150202":"\u4E1C\u6CB3\u533A","150203":"\u6606\u90FD\u4ED1\u533A","150204":"\u9752\u5C71\u533A","150205":"\u77F3\u62D0\u533A","150206":"\u767D\u4E91\u9102\u535A\u77FF\u533A","150207":"\u4E5D\u539F\u533A","150221":"\u571F\u9ED8\u7279\u53F3\u65D7","150222":"\u56FA\u9633\u53BF","150223":"\u8FBE\u5C14\u7F55\u8302\u660E\u5B89\u8054\u5408\u65D7","150224":"\u5176\u5B83\u533A","150300":"\u4E4C\u6D77\u5E02","150302":"\u6D77\u52C3\u6E7E\u533A","150303":"\u6D77\u5357\u533A","150304":"\u4E4C\u8FBE\u533A","150305":"\u5176\u5B83\u533A","150400":"\u8D64\u5CF0\u5E02","150402":"\u7EA2\u5C71\u533A","150403":"\u5143\u5B9D\u5C71\u533A","150404":"\u677E\u5C71\u533A","150421":"\u963F\u9C81\u79D1\u5C14\u6C81\u65D7","150422":"\u5DF4\u6797\u5DE6\u65D7","150423":"\u5DF4\u6797\u53F3\u65D7","150424":"\u6797\u897F\u53BF","150425":"\u514B\u4EC0\u514B\u817E\u65D7","150426":"\u7FC1\u725B\u7279\u65D7","150428":"\u5580\u5587\u6C81\u65D7","150429":"\u5B81\u57CE\u53BF","150430":"\u6556\u6C49\u65D7","150431":"\u5176\u5B83\u533A","150500":"\u901A\u8FBD\u5E02","150502":"\u79D1\u5C14\u6C81\u533A","150521":"\u79D1\u5C14\u6C81\u5DE6\u7FFC\u4E2D\u65D7","150522":"\u79D1\u5C14\u6C81\u5DE6\u7FFC\u540E\u65D7","150523":"\u5F00\u9C81\u53BF","150524":"\u5E93\u4F26\u65D7","150525":"\u5948\u66FC\u65D7","150526":"\u624E\u9C81\u7279\u65D7","150581":"\u970D\u6797\u90ED\u52D2\u5E02","150582":"\u5176\u5B83\u533A","150600":"\u9102\u5C14\u591A\u65AF\u5E02","150602":"\u4E1C\u80DC\u533A","150621":"\u8FBE\u62C9\u7279\u65D7","150622":"\u51C6\u683C\u5C14\u65D7","150623":"\u9102\u6258\u514B\u524D\u65D7","150624":"\u9102\u6258\u514B\u65D7","150625":"\u676D\u9526\u65D7","150626":"\u4E4C\u5BA1\u65D7","150627":"\u4F0A\u91D1\u970D\u6D1B\u65D7","150628":"\u5176\u5B83\u533A","150700":"\u547C\u4F26\u8D1D\u5C14\u5E02","150702":"\u6D77\u62C9\u5C14\u533A","150703":"\u624E\u8D49\u8BFA\u5C14\u533A","150721":"\u963F\u8363\u65D7","150722":"\u83AB\u529B\u8FBE\u74E6\u8FBE\u65A1\u5C14\u65CF\u81EA\u6CBB\u65D7","150723":"\u9102\u4F26\u6625\u81EA\u6CBB\u65D7","150724":"\u9102\u6E29\u514B\u65CF\u81EA\u6CBB\u65D7","150725":"\u9648\u5DF4\u5C14\u864E\u65D7","150726":"\u65B0\u5DF4\u5C14\u864E\u5DE6\u65D7","150727":"\u65B0\u5DF4\u5C14\u864E\u53F3\u65D7","150781":"\u6EE1\u6D32\u91CC\u5E02","150782":"\u7259\u514B\u77F3\u5E02","150783":"\u624E\u5170\u5C6F\u5E02","150784":"\u989D\u5C14\u53E4\u7EB3\u5E02","150785":"\u6839\u6CB3\u5E02","150786":"\u5176\u5B83\u533A","150800":"\u5DF4\u5F66\u6DD6\u5C14\u5E02","150802":"\u4E34\u6CB3\u533A","150821":"\u4E94\u539F\u53BF","150822":"\u78F4\u53E3\u53BF","150823":"\u4E4C\u62C9\u7279\u524D\u65D7","150824":"\u4E4C\u62C9\u7279\u4E2D\u65D7","150825":"\u4E4C\u62C9\u7279\u540E\u65D7","150826":"\u676D\u9526\u540E\u65D7","150827":"\u5176\u5B83\u533A","150900":"\u4E4C\u5170\u5BDF\u5E03\u5E02","150902":"\u96C6\u5B81\u533A","150921":"\u5353\u8D44\u53BF","150922":"\u5316\u5FB7\u53BF","150923":"\u5546\u90FD\u53BF","150924":"\u5174\u548C\u53BF","150925":"\u51C9\u57CE\u53BF","150926":"\u5BDF\u54C8\u5C14\u53F3\u7FFC\u524D\u65D7","150927":"\u5BDF\u54C8\u5C14\u53F3\u7FFC\u4E2D\u65D7","150928":"\u5BDF\u54C8\u5C14\u53F3\u7FFC\u540E\u65D7","150929":"\u56DB\u5B50\u738B\u65D7","150981":"\u4E30\u9547\u5E02","150982":"\u5176\u5B83\u533A","152200":"\u5174\u5B89\u76DF","152201":"\u4E4C\u5170\u6D69\u7279\u5E02","152202":"\u963F\u5C14\u5C71\u5E02","152221":"\u79D1\u5C14\u6C81\u53F3\u7FFC\u524D\u65D7","152222":"\u79D1\u5C14\u6C81\u53F3\u7FFC\u4E2D\u65D7","152223":"\u624E\u8D49\u7279\u65D7","152224":"\u7A81\u6CC9\u53BF","152225":"\u5176\u5B83\u533A","152500":"\u9521\u6797\u90ED\u52D2\u76DF","152501":"\u4E8C\u8FDE\u6D69\u7279\u5E02","152502":"\u9521\u6797\u6D69\u7279\u5E02","152522":"\u963F\u5DF4\u560E\u65D7","152523":"\u82CF\u5C3C\u7279\u5DE6\u65D7","152524":"\u82CF\u5C3C\u7279\u53F3\u65D7","152525":"\u4E1C\u4E4C\u73E0\u7A46\u6C81\u65D7","152526":"\u897F\u4E4C\u73E0\u7A46\u6C81\u65D7","152527":"\u592A\u4EC6\u5BFA\u65D7","152528":"\u9576\u9EC4\u65D7","152529":"\u6B63\u9576\u767D\u65D7","152530":"\u6B63\u84DD\u65D7","152531":"\u591A\u4F26\u53BF","152532":"\u5176\u5B83\u533A","152900":"\u963F\u62C9\u5584\u76DF","152921":"\u963F\u62C9\u5584\u5DE6\u65D7","152922":"\u963F\u62C9\u5584\u53F3\u65D7","152923":"\u989D\u6D4E\u7EB3\u65D7","152924":"\u5176\u5B83\u533A","210000":"\u8FBD\u5B81\u7701","210100":"\u6C88\u9633\u5E02","210102":"\u548C\u5E73\u533A","210103":"\u6C88\u6CB3\u533A","210104":"\u5927\u4E1C\u533A","210105":"\u7687\u59D1\u533A","210106":"\u94C1\u897F\u533A","210111":"\u82CF\u5BB6\u5C6F\u533A","210112":"\u4E1C\u9675\u533A","210113":"\u65B0\u57CE\u5B50\u533A","210114":"\u4E8E\u6D2A\u533A","210122":"\u8FBD\u4E2D\u53BF","210123":"\u5EB7\u5E73\u53BF","210124":"\u6CD5\u5E93\u53BF","210181":"\u65B0\u6C11\u5E02","210184":"\u6C88\u5317\u65B0\u533A","210185":"\u5176\u5B83\u533A","210200":"\u5927\u8FDE\u5E02","210202":"\u4E2D\u5C71\u533A","210203":"\u897F\u5C97\u533A","210204":"\u6C99\u6CB3\u53E3\u533A","210211":"\u7518\u4E95\u5B50\u533A","210212":"\u65C5\u987A\u53E3\u533A","210213":"\u91D1\u5DDE\u533A","210224":"\u957F\u6D77\u53BF","210281":"\u74E6\u623F\u5E97\u5E02","210282":"\u666E\u5170\u5E97\u5E02","210283":"\u5E84\u6CB3\u5E02","210298":"\u5176\u5B83\u533A","210300":"\u978D\u5C71\u5E02","210302":"\u94C1\u4E1C\u533A","210303":"\u94C1\u897F\u533A","210304":"\u7ACB\u5C71\u533A","210311":"\u5343\u5C71\u533A","210321":"\u53F0\u5B89\u53BF","210323":"\u5CAB\u5CA9\u6EE1\u65CF\u81EA\u6CBB\u53BF","210381":"\u6D77\u57CE\u5E02","210382":"\u5176\u5B83\u533A","210400":"\u629A\u987A\u5E02","210402":"\u65B0\u629A\u533A","210403":"\u4E1C\u6D32\u533A","210404":"\u671B\u82B1\u533A","210411":"\u987A\u57CE\u533A","210421":"\u629A\u987A\u53BF","210422":"\u65B0\u5BBE\u6EE1\u65CF\u81EA\u6CBB\u53BF","210423":"\u6E05\u539F\u6EE1\u65CF\u81EA\u6CBB\u53BF","210424":"\u5176\u5B83\u533A","210500":"\u672C\u6EAA\u5E02","210502":"\u5E73\u5C71\u533A","210503":"\u6EAA\u6E56\u533A","210504":"\u660E\u5C71\u533A","210505":"\u5357\u82AC\u533A","210521":"\u672C\u6EAA\u6EE1\u65CF\u81EA\u6CBB\u53BF","210522":"\u6853\u4EC1\u6EE1\u65CF\u81EA\u6CBB\u53BF","210523":"\u5176\u5B83\u533A","210600":"\u4E39\u4E1C\u5E02","210602":"\u5143\u5B9D\u533A","210603":"\u632F\u5174\u533A","210604":"\u632F\u5B89\u533A","210624":"\u5BBD\u7538\u6EE1\u65CF\u81EA\u6CBB\u53BF","210681":"\u4E1C\u6E2F\u5E02","210682":"\u51E4\u57CE\u5E02","210683":"\u5176\u5B83\u533A","210700":"\u9526\u5DDE\u5E02","210702":"\u53E4\u5854\u533A","210703":"\u51CC\u6CB3\u533A","210711":"\u592A\u548C\u533A","210726":"\u9ED1\u5C71\u53BF","210727":"\u4E49\u53BF","210781":"\u51CC\u6D77\u5E02","210782":"\u5317\u9547\u5E02","210783":"\u5176\u5B83\u533A","210800":"\u8425\u53E3\u5E02","210802":"\u7AD9\u524D\u533A","210803":"\u897F\u5E02\u533A","210804":"\u9C85\u9C7C\u5708\u533A","210811":"\u8001\u8FB9\u533A","210881":"\u76D6\u5DDE\u5E02","210882":"\u5927\u77F3\u6865\u5E02","210883":"\u5176\u5B83\u533A","210900":"\u961C\u65B0\u5E02","210902":"\u6D77\u5DDE\u533A","210903":"\u65B0\u90B1\u533A","210904":"\u592A\u5E73\u533A","210905":"\u6E05\u6CB3\u95E8\u533A","210911":"\u7EC6\u6CB3\u533A","210921":"\u961C\u65B0\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF","210922":"\u5F70\u6B66\u53BF","210923":"\u5176\u5B83\u533A","211000":"\u8FBD\u9633\u5E02","211002":"\u767D\u5854\u533A","211003":"\u6587\u5723\u533A","211004":"\u5B8F\u4F1F\u533A","211005":"\u5F13\u957F\u5CAD\u533A","211011":"\u592A\u5B50\u6CB3\u533A","211021":"\u8FBD\u9633\u53BF","211081":"\u706F\u5854\u5E02","211082":"\u5176\u5B83\u533A","211100":"\u76D8\u9526\u5E02","211102":"\u53CC\u53F0\u5B50\u533A","211103":"\u5174\u9686\u53F0\u533A","211121":"\u5927\u6D3C\u53BF","211122":"\u76D8\u5C71\u53BF","211123":"\u5176\u5B83\u533A","211200":"\u94C1\u5CAD\u5E02","211202":"\u94F6\u5DDE\u533A","211204":"\u6E05\u6CB3\u533A","211221":"\u94C1\u5CAD\u53BF","211223":"\u897F\u4E30\u53BF","211224":"\u660C\u56FE\u53BF","211281":"\u8C03\u5175\u5C71\u5E02","211282":"\u5F00\u539F\u5E02","211283":"\u5176\u5B83\u533A","211300":"\u671D\u9633\u5E02","211302":"\u53CC\u5854\u533A","211303":"\u9F99\u57CE\u533A","211321":"\u671D\u9633\u53BF","211322":"\u5EFA\u5E73\u53BF","211324":"\u5580\u5587\u6C81\u5DE6\u7FFC\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF","211381":"\u5317\u7968\u5E02","211382":"\u51CC\u6E90\u5E02","211383":"\u5176\u5B83\u533A","211400":"\u846B\u82A6\u5C9B\u5E02","211402":"\u8FDE\u5C71\u533A","211403":"\u9F99\u6E2F\u533A","211404":"\u5357\u7968\u533A","211421":"\u7EE5\u4E2D\u53BF","211422":"\u5EFA\u660C\u53BF","211481":"\u5174\u57CE\u5E02","211482":"\u5176\u5B83\u533A","220000":"\u5409\u6797\u7701","220100":"\u957F\u6625\u5E02","220102":"\u5357\u5173\u533A","220103":"\u5BBD\u57CE\u533A","220104":"\u671D\u9633\u533A","220105":"\u4E8C\u9053\u533A","220106":"\u7EFF\u56ED\u533A","220112":"\u53CC\u9633\u533A","220122":"\u519C\u5B89\u53BF","220181":"\u4E5D\u53F0\u5E02","220182":"\u6986\u6811\u5E02","220183":"\u5FB7\u60E0\u5E02","220188":"\u5176\u5B83\u533A","220200":"\u5409\u6797\u5E02","220202":"\u660C\u9091\u533A","220203":"\u9F99\u6F6D\u533A","220204":"\u8239\u8425\u533A","220211":"\u4E30\u6EE1\u533A","220221":"\u6C38\u5409\u53BF","220281":"\u86DF\u6CB3\u5E02","220282":"\u6866\u7538\u5E02","220283":"\u8212\u5170\u5E02","220284":"\u78D0\u77F3\u5E02","220285":"\u5176\u5B83\u533A","220300":"\u56DB\u5E73\u5E02","220302":"\u94C1\u897F\u533A","220303":"\u94C1\u4E1C\u533A","220322":"\u68A8\u6811\u53BF","220323":"\u4F0A\u901A\u6EE1\u65CF\u81EA\u6CBB\u53BF","220381":"\u516C\u4E3B\u5CAD\u5E02","220382":"\u53CC\u8FBD\u5E02","220383":"\u5176\u5B83\u533A","220400":"\u8FBD\u6E90\u5E02","220402":"\u9F99\u5C71\u533A","220403":"\u897F\u5B89\u533A","220421":"\u4E1C\u4E30\u53BF","220422":"\u4E1C\u8FBD\u53BF","220423":"\u5176\u5B83\u533A","220500":"\u901A\u5316\u5E02","220502":"\u4E1C\u660C\u533A","220503":"\u4E8C\u9053\u6C5F\u533A","220521":"\u901A\u5316\u53BF","220523":"\u8F89\u5357\u53BF","220524":"\u67F3\u6CB3\u53BF","220581":"\u6885\u6CB3\u53E3\u5E02","220582":"\u96C6\u5B89\u5E02","220583":"\u5176\u5B83\u533A","220600":"\u767D\u5C71\u5E02","220602":"\u6D51\u6C5F\u533A","220621":"\u629A\u677E\u53BF","220622":"\u9756\u5B87\u53BF","220623":"\u957F\u767D\u671D\u9C9C\u65CF\u81EA\u6CBB\u53BF","220625":"\u6C5F\u6E90\u533A","220681":"\u4E34\u6C5F\u5E02","220682":"\u5176\u5B83\u533A","220700":"\u677E\u539F\u5E02","220702":"\u5B81\u6C5F\u533A","220721":"\u524D\u90ED\u5C14\u7F57\u65AF\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF","220722":"\u957F\u5CAD\u53BF","220723":"\u4E7E\u5B89\u53BF","220724":"\u6276\u4F59\u5E02","220725":"\u5176\u5B83\u533A","220800":"\u767D\u57CE\u5E02","220802":"\u6D2E\u5317\u533A","220821":"\u9547\u8D49\u53BF","220822":"\u901A\u6986\u53BF","220881":"\u6D2E\u5357\u5E02","220882":"\u5927\u5B89\u5E02","220883":"\u5176\u5B83\u533A","222400":"\u5EF6\u8FB9\u671D\u9C9C\u65CF\u81EA\u6CBB\u5DDE","222401":"\u5EF6\u5409\u5E02","222402":"\u56FE\u4EEC\u5E02","222403":"\u6566\u5316\u5E02","222404":"\u73F2\u6625\u5E02","222405":"\u9F99\u4E95\u5E02","222406":"\u548C\u9F99\u5E02","222424":"\u6C6A\u6E05\u53BF","222426":"\u5B89\u56FE\u53BF","222427":"\u5176\u5B83\u533A","230000":"\u9ED1\u9F99\u6C5F\u7701","230100":"\u54C8\u5C14\u6EE8\u5E02","230102":"\u9053\u91CC\u533A","230103":"\u5357\u5C97\u533A","230104":"\u9053\u5916\u533A","230106":"\u9999\u574A\u533A","230108":"\u5E73\u623F\u533A","230109":"\u677E\u5317\u533A","230111":"\u547C\u5170\u533A","230123":"\u4F9D\u5170\u53BF","230124":"\u65B9\u6B63\u53BF","230125":"\u5BBE\u53BF","230126":"\u5DF4\u5F66\u53BF","230127":"\u6728\u5170\u53BF","230128":"\u901A\u6CB3\u53BF","230129":"\u5EF6\u5BFF\u53BF","230181":"\u963F\u57CE\u533A","230182":"\u53CC\u57CE\u5E02","230183":"\u5C1A\u5FD7\u5E02","230184":"\u4E94\u5E38\u5E02","230186":"\u5176\u5B83\u533A","230200":"\u9F50\u9F50\u54C8\u5C14\u5E02","230202":"\u9F99\u6C99\u533A","230203":"\u5EFA\u534E\u533A","230204":"\u94C1\u950B\u533A","230205":"\u6602\u6602\u6EAA\u533A","230206":"\u5BCC\u62C9\u5C14\u57FA\u533A","230207":"\u78BE\u5B50\u5C71\u533A","230208":"\u6885\u91CC\u65AF\u8FBE\u65A1\u5C14\u65CF\u533A","230221":"\u9F99\u6C5F\u53BF","230223":"\u4F9D\u5B89\u53BF","230224":"\u6CF0\u6765\u53BF","230225":"\u7518\u5357\u53BF","230227":"\u5BCC\u88D5\u53BF","230229":"\u514B\u5C71\u53BF","230230":"\u514B\u4E1C\u53BF","230231":"\u62DC\u6CC9\u53BF","230281":"\u8BB7\u6CB3\u5E02","230282":"\u5176\u5B83\u533A","230300":"\u9E21\u897F\u5E02","230302":"\u9E21\u51A0\u533A","230303":"\u6052\u5C71\u533A","230304":"\u6EF4\u9053\u533A","230305":"\u68A8\u6811\u533A","230306":"\u57CE\u5B50\u6CB3\u533A","230307":"\u9EBB\u5C71\u533A","230321":"\u9E21\u4E1C\u53BF","230381":"\u864E\u6797\u5E02","230382":"\u5BC6\u5C71\u5E02","230383":"\u5176\u5B83\u533A","230400":"\u9E64\u5C97\u5E02","230402":"\u5411\u9633\u533A","230403":"\u5DE5\u519C\u533A","230404":"\u5357\u5C71\u533A","230405":"\u5174\u5B89\u533A","230406":"\u4E1C\u5C71\u533A","230407":"\u5174\u5C71\u533A","230421":"\u841D\u5317\u53BF","230422":"\u7EE5\u6EE8\u53BF","230423":"\u5176\u5B83\u533A","230500":"\u53CC\u9E2D\u5C71\u5E02","230502":"\u5C16\u5C71\u533A","230503":"\u5CAD\u4E1C\u533A","230505":"\u56DB\u65B9\u53F0\u533A","230506":"\u5B9D\u5C71\u533A","230521":"\u96C6\u8D24\u53BF","230522":"\u53CB\u8C0A\u53BF","230523":"\u5B9D\u6E05\u53BF","230524":"\u9976\u6CB3\u53BF","230525":"\u5176\u5B83\u533A","230600":"\u5927\u5E86\u5E02","230602":"\u8428\u5C14\u56FE\u533A","230603":"\u9F99\u51E4\u533A","230604":"\u8BA9\u80E1\u8DEF\u533A","230605":"\u7EA2\u5C97\u533A","230606":"\u5927\u540C\u533A","230621":"\u8087\u5DDE\u53BF","230622":"\u8087\u6E90\u53BF","230623":"\u6797\u7538\u53BF","230624":"\u675C\u5C14\u4F2F\u7279\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF","230625":"\u5176\u5B83\u533A","230700":"\u4F0A\u6625\u5E02","230702":"\u4F0A\u6625\u533A","230703":"\u5357\u5C94\u533A","230704":"\u53CB\u597D\u533A","230705":"\u897F\u6797\u533A","230706":"\u7FE0\u5CE6\u533A","230707":"\u65B0\u9752\u533A","230708":"\u7F8E\u6EAA\u533A","230709":"\u91D1\u5C71\u5C6F\u533A","230710":"\u4E94\u8425\u533A","230711":"\u4E4C\u9A6C\u6CB3\u533A","230712":"\u6C64\u65FA\u6CB3\u533A","230713":"\u5E26\u5CAD\u533A","230714":"\u4E4C\u4F0A\u5CAD\u533A","230715":"\u7EA2\u661F\u533A","230716":"\u4E0A\u7518\u5CAD\u533A","230722":"\u5609\u836B\u53BF","230781":"\u94C1\u529B\u5E02","230782":"\u5176\u5B83\u533A","230800":"\u4F73\u6728\u65AF\u5E02","230803":"\u5411\u9633\u533A","230804":"\u524D\u8FDB\u533A","230805":"\u4E1C\u98CE\u533A","230811":"\u90CA\u533A","230822":"\u6866\u5357\u53BF","230826":"\u6866\u5DDD\u53BF","230828":"\u6C64\u539F\u53BF","230833":"\u629A\u8FDC\u53BF","230881":"\u540C\u6C5F\u5E02","230882":"\u5BCC\u9526\u5E02","230883":"\u5176\u5B83\u533A","230900":"\u4E03\u53F0\u6CB3\u5E02","230902":"\u65B0\u5174\u533A","230903":"\u6843\u5C71\u533A","230904":"\u8304\u5B50\u6CB3\u533A","230921":"\u52C3\u5229\u53BF","230922":"\u5176\u5B83\u533A","231000":"\u7261\u4E39\u6C5F\u5E02","231002":"\u4E1C\u5B89\u533A","231003":"\u9633\u660E\u533A","231004":"\u7231\u6C11\u533A","231005":"\u897F\u5B89\u533A","231024":"\u4E1C\u5B81\u53BF","231025":"\u6797\u53E3\u53BF","231081":"\u7EE5\u82AC\u6CB3\u5E02","231083":"\u6D77\u6797\u5E02","231084":"\u5B81\u5B89\u5E02","231085":"\u7A46\u68F1\u5E02","231086":"\u5176\u5B83\u533A","231100":"\u9ED1\u6CB3\u5E02","231102":"\u7231\u8F89\u533A","231121":"\u5AE9\u6C5F\u53BF","231123":"\u900A\u514B\u53BF","231124":"\u5B59\u5434\u53BF","231181":"\u5317\u5B89\u5E02","231182":"\u4E94\u5927\u8FDE\u6C60\u5E02","231183":"\u5176\u5B83\u533A","231200":"\u7EE5\u5316\u5E02","231202":"\u5317\u6797\u533A","231221":"\u671B\u594E\u53BF","231222":"\u5170\u897F\u53BF","231223":"\u9752\u5188\u53BF","231224":"\u5E86\u5B89\u53BF","231225":"\u660E\u6C34\u53BF","231226":"\u7EE5\u68F1\u53BF","231281":"\u5B89\u8FBE\u5E02","231282":"\u8087\u4E1C\u5E02","231283":"\u6D77\u4F26\u5E02","231284":"\u5176\u5B83\u533A","232700":"\u5927\u5174\u5B89\u5CAD\u5730\u533A","232702":"\u677E\u5CAD\u533A","232703":"\u65B0\u6797\u533A","232704":"\u547C\u4E2D\u533A","232721":"\u547C\u739B\u53BF","232722":"\u5854\u6CB3\u53BF","232723":"\u6F20\u6CB3\u53BF","232724":"\u52A0\u683C\u8FBE\u5947\u533A","232725":"\u5176\u5B83\u533A","310000":"\u4E0A\u6D77","310100":"\u4E0A\u6D77\u5E02","310101":"\u9EC4\u6D66\u533A","310104":"\u5F90\u6C47\u533A","310105":"\u957F\u5B81\u533A","310106":"\u9759\u5B89\u533A","310107":"\u666E\u9640\u533A","310108":"\u95F8\u5317\u533A","310109":"\u8679\u53E3\u533A","310110":"\u6768\u6D66\u533A","310112":"\u95F5\u884C\u533A","310113":"\u5B9D\u5C71\u533A","310114":"\u5609\u5B9A\u533A","310115":"\u6D66\u4E1C\u65B0\u533A","310116":"\u91D1\u5C71\u533A","310117":"\u677E\u6C5F\u533A","310118":"\u9752\u6D66\u533A","310120":"\u5949\u8D24\u533A","310230":"\u5D07\u660E\u53BF","310231":"\u5176\u5B83\u533A","320000":"\u6C5F\u82CF\u7701","320100":"\u5357\u4EAC\u5E02","320102":"\u7384\u6B66\u533A","320104":"\u79E6\u6DEE\u533A","320105":"\u5EFA\u90BA\u533A","320106":"\u9F13\u697C\u533A","320111":"\u6D66\u53E3\u533A","320113":"\u6816\u971E\u533A","320114":"\u96E8\u82B1\u53F0\u533A","320115":"\u6C5F\u5B81\u533A","320116":"\u516D\u5408\u533A","320124":"\u6EA7\u6C34\u533A","320125":"\u9AD8\u6DF3\u533A","320126":"\u5176\u5B83\u533A","320200":"\u65E0\u9521\u5E02","320202":"\u5D07\u5B89\u533A","320203":"\u5357\u957F\u533A","320204":"\u5317\u5858\u533A","320205":"\u9521\u5C71\u533A","320206":"\u60E0\u5C71\u533A","320211":"\u6EE8\u6E56\u533A","320281":"\u6C5F\u9634\u5E02","320282":"\u5B9C\u5174\u5E02","320297":"\u5176\u5B83\u533A","320300":"\u5F90\u5DDE\u5E02","320302":"\u9F13\u697C\u533A","320303":"\u4E91\u9F99\u533A","320305":"\u8D3E\u6C6A\u533A","320311":"\u6CC9\u5C71\u533A","320321":"\u4E30\u53BF","320322":"\u6C9B\u53BF","320323":"\u94DC\u5C71\u533A","320324":"\u7762\u5B81\u53BF","320381":"\u65B0\u6C82\u5E02","320382":"\u90B3\u5DDE\u5E02","320383":"\u5176\u5B83\u533A","320400":"\u5E38\u5DDE\u5E02","320402":"\u5929\u5B81\u533A","320404":"\u949F\u697C\u533A","320405":"\u621A\u5885\u5830\u533A","320411":"\u65B0\u5317\u533A","320412":"\u6B66\u8FDB\u533A","320481":"\u6EA7\u9633\u5E02","320482":"\u91D1\u575B\u5E02","320483":"\u5176\u5B83\u533A","320500":"\u82CF\u5DDE\u5E02","320505":"\u864E\u4E18\u533A","320506":"\u5434\u4E2D\u533A","320507":"\u76F8\u57CE\u533A","320508":"\u59D1\u82CF\u533A","320581":"\u5E38\u719F\u5E02","320582":"\u5F20\u5BB6\u6E2F\u5E02","320583":"\u6606\u5C71\u5E02","320584":"\u5434\u6C5F\u533A","320585":"\u592A\u4ED3\u5E02","320596":"\u5176\u5B83\u533A","320600":"\u5357\u901A\u5E02","320602":"\u5D07\u5DDD\u533A","320611":"\u6E2F\u95F8\u533A","320612":"\u901A\u5DDE\u533A","320621":"\u6D77\u5B89\u53BF","320623":"\u5982\u4E1C\u53BF","320681":"\u542F\u4E1C\u5E02","320682":"\u5982\u768B\u5E02","320684":"\u6D77\u95E8\u5E02","320694":"\u5176\u5B83\u533A","320700":"\u8FDE\u4E91\u6E2F\u5E02","320703":"\u8FDE\u4E91\u533A","320705":"\u65B0\u6D66\u533A","320706":"\u6D77\u5DDE\u533A","320721":"\u8D63\u6986\u53BF","320722":"\u4E1C\u6D77\u53BF","320723":"\u704C\u4E91\u53BF","320724":"\u704C\u5357\u53BF","320725":"\u5176\u5B83\u533A","320800":"\u6DEE\u5B89\u5E02","320802":"\u6E05\u6CB3\u533A","320803":"\u6DEE\u5B89\u533A","320804":"\u6DEE\u9634\u533A","320811":"\u6E05\u6D66\u533A","320826":"\u6D9F\u6C34\u53BF","320829":"\u6D2A\u6CFD\u53BF","320830":"\u76F1\u7719\u53BF","320831":"\u91D1\u6E56\u53BF","320832":"\u5176\u5B83\u533A","320900":"\u76D0\u57CE\u5E02","320902":"\u4EAD\u6E56\u533A","320903":"\u76D0\u90FD\u533A","320921":"\u54CD\u6C34\u53BF","320922":"\u6EE8\u6D77\u53BF","320923":"\u961C\u5B81\u53BF","320924":"\u5C04\u9633\u53BF","320925":"\u5EFA\u6E56\u53BF","320981":"\u4E1C\u53F0\u5E02","320982":"\u5927\u4E30\u5E02","320983":"\u5176\u5B83\u533A","321000":"\u626C\u5DDE\u5E02","321002":"\u5E7F\u9675\u533A","321003":"\u9097\u6C5F\u533A","321023":"\u5B9D\u5E94\u53BF","321081":"\u4EEA\u5F81\u5E02","321084":"\u9AD8\u90AE\u5E02","321088":"\u6C5F\u90FD\u533A","321093":"\u5176\u5B83\u533A","321100":"\u9547\u6C5F\u5E02","321102":"\u4EAC\u53E3\u533A","321111":"\u6DA6\u5DDE\u533A","321112":"\u4E39\u5F92\u533A","321181":"\u4E39\u9633\u5E02","321182":"\u626C\u4E2D\u5E02","321183":"\u53E5\u5BB9\u5E02","321184":"\u5176\u5B83\u533A","321200":"\u6CF0\u5DDE\u5E02","321202":"\u6D77\u9675\u533A","321203":"\u9AD8\u6E2F\u533A","321281":"\u5174\u5316\u5E02","321282":"\u9756\u6C5F\u5E02","321283":"\u6CF0\u5174\u5E02","321284":"\u59DC\u5830\u533A","321285":"\u5176\u5B83\u533A","321300":"\u5BBF\u8FC1\u5E02","321302":"\u5BBF\u57CE\u533A","321311":"\u5BBF\u8C6B\u533A","321322":"\u6CAD\u9633\u53BF","321323":"\u6CD7\u9633\u53BF","321324":"\u6CD7\u6D2A\u53BF","321325":"\u5176\u5B83\u533A","330000":"\u6D59\u6C5F\u7701","330100":"\u676D\u5DDE\u5E02","330102":"\u4E0A\u57CE\u533A","330103":"\u4E0B\u57CE\u533A","330104":"\u6C5F\u5E72\u533A","330105":"\u62F1\u5885\u533A","330106":"\u897F\u6E56\u533A","330108":"\u6EE8\u6C5F\u533A","330109":"\u8427\u5C71\u533A","330110":"\u4F59\u676D\u533A","330122":"\u6850\u5E90\u53BF","330127":"\u6DF3\u5B89\u53BF","330182":"\u5EFA\u5FB7\u5E02","330183":"\u5BCC\u9633\u5E02","330185":"\u4E34\u5B89\u5E02","330186":"\u5176\u5B83\u533A","330200":"\u5B81\u6CE2\u5E02","330203":"\u6D77\u66D9\u533A","330204":"\u6C5F\u4E1C\u533A","330205":"\u6C5F\u5317\u533A","330206":"\u5317\u4ED1\u533A","330211":"\u9547\u6D77\u533A","330212":"\u911E\u5DDE\u533A","330225":"\u8C61\u5C71\u53BF","330226":"\u5B81\u6D77\u53BF","330281":"\u4F59\u59DA\u5E02","330282":"\u6148\u6EAA\u5E02","330283":"\u5949\u5316\u5E02","330284":"\u5176\u5B83\u533A","330300":"\u6E29\u5DDE\u5E02","330302":"\u9E7F\u57CE\u533A","330303":"\u9F99\u6E7E\u533A","330304":"\u74EF\u6D77\u533A","330322":"\u6D1E\u5934\u53BF","330324":"\u6C38\u5609\u53BF","330326":"\u5E73\u9633\u53BF","330327":"\u82CD\u5357\u53BF","330328":"\u6587\u6210\u53BF","330329":"\u6CF0\u987A\u53BF","330381":"\u745E\u5B89\u5E02","330382":"\u4E50\u6E05\u5E02","330383":"\u5176\u5B83\u533A","330400":"\u5609\u5174\u5E02","330402":"\u5357\u6E56\u533A","330411":"\u79C0\u6D32\u533A","330421":"\u5609\u5584\u53BF","330424":"\u6D77\u76D0\u53BF","330481":"\u6D77\u5B81\u5E02","330482":"\u5E73\u6E56\u5E02","330483":"\u6850\u4E61\u5E02","330484":"\u5176\u5B83\u533A","330500":"\u6E56\u5DDE\u5E02","330502":"\u5434\u5174\u533A","330503":"\u5357\u6D54\u533A","330521":"\u5FB7\u6E05\u53BF","330522":"\u957F\u5174\u53BF","330523":"\u5B89\u5409\u53BF","330524":"\u5176\u5B83\u533A","330600":"\u7ECD\u5174\u5E02","330602":"\u8D8A\u57CE\u533A","330621":"\u7ECD\u5174\u53BF","330624":"\u65B0\u660C\u53BF","330681":"\u8BF8\u66A8\u5E02","330682":"\u4E0A\u865E\u5E02","330683":"\u5D4A\u5DDE\u5E02","330684":"\u5176\u5B83\u533A","330700":"\u91D1\u534E\u5E02","330702":"\u5A7A\u57CE\u533A","330703":"\u91D1\u4E1C\u533A","330723":"\u6B66\u4E49\u53BF","330726":"\u6D66\u6C5F\u53BF","330727":"\u78D0\u5B89\u53BF","330781":"\u5170\u6EAA\u5E02","330782":"\u4E49\u4E4C\u5E02","330783":"\u4E1C\u9633\u5E02","330784":"\u6C38\u5EB7\u5E02","330785":"\u5176\u5B83\u533A","330800":"\u8862\u5DDE\u5E02","330802":"\u67EF\u57CE\u533A","330803":"\u8862\u6C5F\u533A","330822":"\u5E38\u5C71\u53BF","330824":"\u5F00\u5316\u53BF","330825":"\u9F99\u6E38\u53BF","330881":"\u6C5F\u5C71\u5E02","330882":"\u5176\u5B83\u533A","330900":"\u821F\u5C71\u5E02","330902":"\u5B9A\u6D77\u533A","330903":"\u666E\u9640\u533A","330921":"\u5CB1\u5C71\u53BF","330922":"\u5D4A\u6CD7\u53BF","330923":"\u5176\u5B83\u533A","331000":"\u53F0\u5DDE\u5E02","331002":"\u6912\u6C5F\u533A","331003":"\u9EC4\u5CA9\u533A","331004":"\u8DEF\u6865\u533A","331021":"\u7389\u73AF\u53BF","331022":"\u4E09\u95E8\u53BF","331023":"\u5929\u53F0\u53BF","331024":"\u4ED9\u5C45\u53BF","331081":"\u6E29\u5CAD\u5E02","331082":"\u4E34\u6D77\u5E02","331083":"\u5176\u5B83\u533A","331100":"\u4E3D\u6C34\u5E02","331102":"\u83B2\u90FD\u533A","331121":"\u9752\u7530\u53BF","331122":"\u7F19\u4E91\u53BF","331123":"\u9042\u660C\u53BF","331124":"\u677E\u9633\u53BF","331125":"\u4E91\u548C\u53BF","331126":"\u5E86\u5143\u53BF","331127":"\u666F\u5B81\u7572\u65CF\u81EA\u6CBB\u53BF","331181":"\u9F99\u6CC9\u5E02","331182":"\u5176\u5B83\u533A","340000":"\u5B89\u5FBD\u7701","340100":"\u5408\u80A5\u5E02","340102":"\u7476\u6D77\u533A","340103":"\u5E90\u9633\u533A","340104":"\u8700\u5C71\u533A","340111":"\u5305\u6CB3\u533A","340121":"\u957F\u4E30\u53BF","340122":"\u80A5\u4E1C\u53BF","340123":"\u80A5\u897F\u53BF","340192":"\u5176\u5B83\u533A","340200":"\u829C\u6E56\u5E02","340202":"\u955C\u6E56\u533A","340203":"\u5F0B\u6C5F\u533A","340207":"\u9E20\u6C5F\u533A","340208":"\u4E09\u5C71\u533A","340221":"\u829C\u6E56\u53BF","340222":"\u7E41\u660C\u53BF","340223":"\u5357\u9675\u53BF","340224":"\u5176\u5B83\u533A","340300":"\u868C\u57E0\u5E02","340302":"\u9F99\u5B50\u6E56\u533A","340303":"\u868C\u5C71\u533A","340304":"\u79B9\u4F1A\u533A","340311":"\u6DEE\u4E0A\u533A","340321":"\u6000\u8FDC\u53BF","340322":"\u4E94\u6CB3\u53BF","340323":"\u56FA\u9547\u53BF","340324":"\u5176\u5B83\u533A","340400":"\u6DEE\u5357\u5E02","340402":"\u5927\u901A\u533A","340403":"\u7530\u5BB6\u5EB5\u533A","340404":"\u8C22\u5BB6\u96C6\u533A","340405":"\u516B\u516C\u5C71\u533A","340406":"\u6F58\u96C6\u533A","340421":"\u51E4\u53F0\u53BF","340422":"\u5176\u5B83\u533A","340500":"\u9A6C\u978D\u5C71\u5E02","340503":"\u82B1\u5C71\u533A","340504":"\u96E8\u5C71\u533A","340506":"\u535A\u671B\u533A","340521":"\u5F53\u6D82\u53BF","340522":"\u5176\u5B83\u533A","340600":"\u6DEE\u5317\u5E02","340602":"\u675C\u96C6\u533A","340603":"\u76F8\u5C71\u533A","340604":"\u70C8\u5C71\u533A","340621":"\u6FC9\u6EAA\u53BF","340622":"\u5176\u5B83\u533A","340700":"\u94DC\u9675\u5E02","340702":"\u94DC\u5B98\u5C71\u533A","340703":"\u72EE\u5B50\u5C71\u533A","340711":"\u90CA\u533A","340721":"\u94DC\u9675\u53BF","340722":"\u5176\u5B83\u533A","340800":"\u5B89\u5E86\u5E02","340802":"\u8FCE\u6C5F\u533A","340803":"\u5927\u89C2\u533A","340811":"\u5B9C\u79C0\u533A","340822":"\u6000\u5B81\u53BF","340823":"\u679E\u9633\u53BF","340824":"\u6F5C\u5C71\u53BF","340825":"\u592A\u6E56\u53BF","340826":"\u5BBF\u677E\u53BF","340827":"\u671B\u6C5F\u53BF","340828":"\u5CB3\u897F\u53BF","340881":"\u6850\u57CE\u5E02","340882":"\u5176\u5B83\u533A","341000":"\u9EC4\u5C71\u5E02","341002":"\u5C6F\u6EAA\u533A","341003":"\u9EC4\u5C71\u533A","341004":"\u5FBD\u5DDE\u533A","341021":"\u6B59\u53BF","341022":"\u4F11\u5B81\u53BF","341023":"\u9EDF\u53BF","341024":"\u7941\u95E8\u53BF","341025":"\u5176\u5B83\u533A","341100":"\u6EC1\u5DDE\u5E02","341102":"\u7405\u740A\u533A","341103":"\u5357\u8C2F\u533A","341122":"\u6765\u5B89\u53BF","341124":"\u5168\u6912\u53BF","341125":"\u5B9A\u8FDC\u53BF","341126":"\u51E4\u9633\u53BF","341181":"\u5929\u957F\u5E02","341182":"\u660E\u5149\u5E02","341183":"\u5176\u5B83\u533A","341200":"\u961C\u9633\u5E02","341202":"\u988D\u5DDE\u533A","341203":"\u988D\u4E1C\u533A","341204":"\u988D\u6CC9\u533A","341221":"\u4E34\u6CC9\u53BF","341222":"\u592A\u548C\u53BF","341225":"\u961C\u5357\u53BF","341226":"\u988D\u4E0A\u53BF","341282":"\u754C\u9996\u5E02","341283":"\u5176\u5B83\u533A","341300":"\u5BBF\u5DDE\u5E02","341302":"\u57C7\u6865\u533A","341321":"\u7800\u5C71\u53BF","341322":"\u8427\u53BF","341323":"\u7075\u74A7\u53BF","341324":"\u6CD7\u53BF","341325":"\u5176\u5B83\u533A","341400":"\u5DE2\u6E56\u5E02","341421":"\u5E90\u6C5F\u53BF","341422":"\u65E0\u4E3A\u53BF","341423":"\u542B\u5C71\u53BF","341424":"\u548C\u53BF","341500":"\u516D\u5B89\u5E02","341502":"\u91D1\u5B89\u533A","341503":"\u88D5\u5B89\u533A","341521":"\u5BFF\u53BF","341522":"\u970D\u90B1\u53BF","341523":"\u8212\u57CE\u53BF","341524":"\u91D1\u5BE8\u53BF","341525":"\u970D\u5C71\u53BF","341526":"\u5176\u5B83\u533A","341600":"\u4EB3\u5DDE\u5E02","341602":"\u8C2F\u57CE\u533A","341621":"\u6DA1\u9633\u53BF","341622":"\u8499\u57CE\u53BF","341623":"\u5229\u8F9B\u53BF","341624":"\u5176\u5B83\u533A","341700":"\u6C60\u5DDE\u5E02","341702":"\u8D35\u6C60\u533A","341721":"\u4E1C\u81F3\u53BF","341722":"\u77F3\u53F0\u53BF","341723":"\u9752\u9633\u53BF","341724":"\u5176\u5B83\u533A","341800":"\u5BA3\u57CE\u5E02","341802":"\u5BA3\u5DDE\u533A","341821":"\u90CE\u6EAA\u53BF","341822":"\u5E7F\u5FB7\u53BF","341823":"\u6CFE\u53BF","341824":"\u7EE9\u6EAA\u53BF","341825":"\u65CC\u5FB7\u53BF","341881":"\u5B81\u56FD\u5E02","341882":"\u5176\u5B83\u533A","350000":"\u798F\u5EFA\u7701","350100":"\u798F\u5DDE\u5E02","350102":"\u9F13\u697C\u533A","350103":"\u53F0\u6C5F\u533A","350104":"\u4ED3\u5C71\u533A","350105":"\u9A6C\u5C3E\u533A","350111":"\u664B\u5B89\u533A","350121":"\u95FD\u4FAF\u53BF","350122":"\u8FDE\u6C5F\u53BF","350123":"\u7F57\u6E90\u53BF","350124":"\u95FD\u6E05\u53BF","350125":"\u6C38\u6CF0\u53BF","350128":"\u5E73\u6F6D\u53BF","350181":"\u798F\u6E05\u5E02","350182":"\u957F\u4E50\u5E02","350183":"\u5176\u5B83\u533A","350200":"\u53A6\u95E8\u5E02","350203":"\u601D\u660E\u533A","350205":"\u6D77\u6CA7\u533A","350206":"\u6E56\u91CC\u533A","350211":"\u96C6\u7F8E\u533A","350212":"\u540C\u5B89\u533A","350213":"\u7FD4\u5B89\u533A","350214":"\u5176\u5B83\u533A","350300":"\u8386\u7530\u5E02","350302":"\u57CE\u53A2\u533A","350303":"\u6DB5\u6C5F\u533A","350304":"\u8354\u57CE\u533A","350305":"\u79C0\u5C7F\u533A","350322":"\u4ED9\u6E38\u53BF","350323":"\u5176\u5B83\u533A","350400":"\u4E09\u660E\u5E02","350402":"\u6885\u5217\u533A","350403":"\u4E09\u5143\u533A","350421":"\u660E\u6EAA\u53BF","350423":"\u6E05\u6D41\u53BF","350424":"\u5B81\u5316\u53BF","350425":"\u5927\u7530\u53BF","350426":"\u5C24\u6EAA\u53BF","350427":"\u6C99\u53BF","350428":"\u5C06\u4E50\u53BF","350429":"\u6CF0\u5B81\u53BF","350430":"\u5EFA\u5B81\u53BF","350481":"\u6C38\u5B89\u5E02","350482":"\u5176\u5B83\u533A","350500":"\u6CC9\u5DDE\u5E02","350502":"\u9CA4\u57CE\u533A","350503":"\u4E30\u6CFD\u533A","350504":"\u6D1B\u6C5F\u533A","350505":"\u6CC9\u6E2F\u533A","350521":"\u60E0\u5B89\u53BF","350524":"\u5B89\u6EAA\u53BF","350525":"\u6C38\u6625\u53BF","350526":"\u5FB7\u5316\u53BF","350527":"\u91D1\u95E8\u53BF","350581":"\u77F3\u72EE\u5E02","350582":"\u664B\u6C5F\u5E02","350583":"\u5357\u5B89\u5E02","350584":"\u5176\u5B83\u533A","350600":"\u6F33\u5DDE\u5E02","350602":"\u8297\u57CE\u533A","350603":"\u9F99\u6587\u533A","350622":"\u4E91\u9704\u53BF","350623":"\u6F33\u6D66\u53BF","350624":"\u8BCF\u5B89\u53BF","350625":"\u957F\u6CF0\u53BF","350626":"\u4E1C\u5C71\u53BF","350627":"\u5357\u9756\u53BF","350628":"\u5E73\u548C\u53BF","350629":"\u534E\u5B89\u53BF","350681":"\u9F99\u6D77\u5E02","350682":"\u5176\u5B83\u533A","350700":"\u5357\u5E73\u5E02","350702":"\u5EF6\u5E73\u533A","350721":"\u987A\u660C\u53BF","350722":"\u6D66\u57CE\u53BF","350723":"\u5149\u6CFD\u53BF","350724":"\u677E\u6EAA\u53BF","350725":"\u653F\u548C\u53BF","350781":"\u90B5\u6B66\u5E02","350782":"\u6B66\u5937\u5C71\u5E02","350783":"\u5EFA\u74EF\u5E02","350784":"\u5EFA\u9633\u5E02","350785":"\u5176\u5B83\u533A","350800":"\u9F99\u5CA9\u5E02","350802":"\u65B0\u7F57\u533A","350821":"\u957F\u6C40\u53BF","350822":"\u6C38\u5B9A\u53BF","350823":"\u4E0A\u676D\u53BF","350824":"\u6B66\u5E73\u53BF","350825":"\u8FDE\u57CE\u53BF","350881":"\u6F33\u5E73\u5E02","350882":"\u5176\u5B83\u533A","350900":"\u5B81\u5FB7\u5E02","350902":"\u8549\u57CE\u533A","350921":"\u971E\u6D66\u53BF","350922":"\u53E4\u7530\u53BF","350923":"\u5C4F\u5357\u53BF","350924":"\u5BFF\u5B81\u53BF","350925":"\u5468\u5B81\u53BF","350926":"\u67D8\u8363\u53BF","350981":"\u798F\u5B89\u5E02","350982":"\u798F\u9F0E\u5E02","350983":"\u5176\u5B83\u533A","360000":"\u6C5F\u897F\u7701","360100":"\u5357\u660C\u5E02","360102":"\u4E1C\u6E56\u533A","360103":"\u897F\u6E56\u533A","360104":"\u9752\u4E91\u8C31\u533A","360105":"\u6E7E\u91CC\u533A","360111":"\u9752\u5C71\u6E56\u533A","360121":"\u5357\u660C\u53BF","360122":"\u65B0\u5EFA\u53BF","360123":"\u5B89\u4E49\u53BF","360124":"\u8FDB\u8D24\u53BF","360128":"\u5176\u5B83\u533A","360200":"\u666F\u5FB7\u9547\u5E02","360202":"\u660C\u6C5F\u533A","360203":"\u73E0\u5C71\u533A","360222":"\u6D6E\u6881\u53BF","360281":"\u4E50\u5E73\u5E02","360282":"\u5176\u5B83\u533A","360300":"\u840D\u4E61\u5E02","360302":"\u5B89\u6E90\u533A","360313":"\u6E58\u4E1C\u533A","360321":"\u83B2\u82B1\u53BF","360322":"\u4E0A\u6817\u53BF","360323":"\u82A6\u6EAA\u53BF","360324":"\u5176\u5B83\u533A","360400":"\u4E5D\u6C5F\u5E02","360402":"\u5E90\u5C71\u533A","360403":"\u6D54\u9633\u533A","360421":"\u4E5D\u6C5F\u53BF","360423":"\u6B66\u5B81\u53BF","360424":"\u4FEE\u6C34\u53BF","360425":"\u6C38\u4FEE\u53BF","360426":"\u5FB7\u5B89\u53BF","360427":"\u661F\u5B50\u53BF","360428":"\u90FD\u660C\u53BF","360429":"\u6E56\u53E3\u53BF","360430":"\u5F6D\u6CFD\u53BF","360481":"\u745E\u660C\u5E02","360482":"\u5176\u5B83\u533A","360483":"\u5171\u9752\u57CE\u5E02","360500":"\u65B0\u4F59\u5E02","360502":"\u6E1D\u6C34\u533A","360521":"\u5206\u5B9C\u53BF","360522":"\u5176\u5B83\u533A","360600":"\u9E70\u6F6D\u5E02","360602":"\u6708\u6E56\u533A","360622":"\u4F59\u6C5F\u53BF","360681":"\u8D35\u6EAA\u5E02","360682":"\u5176\u5B83\u533A","360700":"\u8D63\u5DDE\u5E02","360702":"\u7AE0\u8D21\u533A","360721":"\u8D63\u53BF","360722":"\u4FE1\u4E30\u53BF","360723":"\u5927\u4F59\u53BF","360724":"\u4E0A\u72B9\u53BF","360725":"\u5D07\u4E49\u53BF","360726":"\u5B89\u8FDC\u53BF","360727":"\u9F99\u5357\u53BF","360728":"\u5B9A\u5357\u53BF","360729":"\u5168\u5357\u53BF","360730":"\u5B81\u90FD\u53BF","360731":"\u4E8E\u90FD\u53BF","360732":"\u5174\u56FD\u53BF","360733":"\u4F1A\u660C\u53BF","360734":"\u5BFB\u4E4C\u53BF","360735":"\u77F3\u57CE\u53BF","360781":"\u745E\u91D1\u5E02","360782":"\u5357\u5EB7\u5E02","360783":"\u5176\u5B83\u533A","360800":"\u5409\u5B89\u5E02","360802":"\u5409\u5DDE\u533A","360803":"\u9752\u539F\u533A","360821":"\u5409\u5B89\u53BF","360822":"\u5409\u6C34\u53BF","360823":"\u5CE1\u6C5F\u53BF","360824":"\u65B0\u5E72\u53BF","360825":"\u6C38\u4E30\u53BF","360826":"\u6CF0\u548C\u53BF","360827":"\u9042\u5DDD\u53BF","360828":"\u4E07\u5B89\u53BF","360829":"\u5B89\u798F\u53BF","360830":"\u6C38\u65B0\u53BF","360881":"\u4E95\u5188\u5C71\u5E02","360882":"\u5176\u5B83\u533A","360900":"\u5B9C\u6625\u5E02","360902":"\u8881\u5DDE\u533A","360921":"\u5949\u65B0\u53BF","360922":"\u4E07\u8F7D\u53BF","360923":"\u4E0A\u9AD8\u53BF","360924":"\u5B9C\u4E30\u53BF","360925":"\u9756\u5B89\u53BF","360926":"\u94DC\u9F13\u53BF","360981":"\u4E30\u57CE\u5E02","360982":"\u6A1F\u6811\u5E02","360983":"\u9AD8\u5B89\u5E02","360984":"\u5176\u5B83\u533A","361000":"\u629A\u5DDE\u5E02","361002":"\u4E34\u5DDD\u533A","361021":"\u5357\u57CE\u53BF","361022":"\u9ECE\u5DDD\u53BF","361023":"\u5357\u4E30\u53BF","361024":"\u5D07\u4EC1\u53BF","361025":"\u4E50\u5B89\u53BF","361026":"\u5B9C\u9EC4\u53BF","361027":"\u91D1\u6EAA\u53BF","361028":"\u8D44\u6EAA\u53BF","361029":"\u4E1C\u4E61\u53BF","361030":"\u5E7F\u660C\u53BF","361031":"\u5176\u5B83\u533A","361100":"\u4E0A\u9976\u5E02","361102":"\u4FE1\u5DDE\u533A","361121":"\u4E0A\u9976\u53BF","361122":"\u5E7F\u4E30\u53BF","361123":"\u7389\u5C71\u53BF","361124":"\u94C5\u5C71\u53BF","361125":"\u6A2A\u5CF0\u53BF","361126":"\u5F0B\u9633\u53BF","361127":"\u4F59\u5E72\u53BF","361128":"\u9131\u9633\u53BF","361129":"\u4E07\u5E74\u53BF","361130":"\u5A7A\u6E90\u53BF","361181":"\u5FB7\u5174\u5E02","361182":"\u5176\u5B83\u533A","370000":"\u5C71\u4E1C\u7701","370100":"\u6D4E\u5357\u5E02","370102":"\u5386\u4E0B\u533A","370103":"\u5E02\u4E2D\u533A","370104":"\u69D0\u836B\u533A","370105":"\u5929\u6865\u533A","370112":"\u5386\u57CE\u533A","370113":"\u957F\u6E05\u533A","370124":"\u5E73\u9634\u53BF","370125":"\u6D4E\u9633\u53BF","370126":"\u5546\u6CB3\u53BF","370181":"\u7AE0\u4E18\u5E02","370182":"\u5176\u5B83\u533A","370200":"\u9752\u5C9B\u5E02","370202":"\u5E02\u5357\u533A","370203":"\u5E02\u5317\u533A","370211":"\u9EC4\u5C9B\u533A","370212":"\u5D02\u5C71\u533A","370213":"\u674E\u6CA7\u533A","370214":"\u57CE\u9633\u533A","370281":"\u80F6\u5DDE\u5E02","370282":"\u5373\u58A8\u5E02","370283":"\u5E73\u5EA6\u5E02","370285":"\u83B1\u897F\u5E02","370286":"\u5176\u5B83\u533A","370300":"\u6DC4\u535A\u5E02","370302":"\u6DC4\u5DDD\u533A","370303":"\u5F20\u5E97\u533A","370304":"\u535A\u5C71\u533A","370305":"\u4E34\u6DC4\u533A","370306":"\u5468\u6751\u533A","370321":"\u6853\u53F0\u53BF","370322":"\u9AD8\u9752\u53BF","370323":"\u6C82\u6E90\u53BF","370324":"\u5176\u5B83\u533A","370400":"\u67A3\u5E84\u5E02","370402":"\u5E02\u4E2D\u533A","370403":"\u859B\u57CE\u533A","370404":"\u5CC4\u57CE\u533A","370405":"\u53F0\u513F\u5E84\u533A","370406":"\u5C71\u4EAD\u533A","370481":"\u6ED5\u5DDE\u5E02","370482":"\u5176\u5B83\u533A","370500":"\u4E1C\u8425\u5E02","370502":"\u4E1C\u8425\u533A","370503":"\u6CB3\u53E3\u533A","370521":"\u57A6\u5229\u53BF","370522":"\u5229\u6D25\u53BF","370523":"\u5E7F\u9976\u53BF","370591":"\u5176\u5B83\u533A","370600":"\u70DF\u53F0\u5E02","370602":"\u829D\u7F58\u533A","370611":"\u798F\u5C71\u533A","370612":"\u725F\u5E73\u533A","370613":"\u83B1\u5C71\u533A","370634":"\u957F\u5C9B\u53BF","370681":"\u9F99\u53E3\u5E02","370682":"\u83B1\u9633\u5E02","370683":"\u83B1\u5DDE\u5E02","370684":"\u84EC\u83B1\u5E02","370685":"\u62DB\u8FDC\u5E02","370686":"\u6816\u971E\u5E02","370687":"\u6D77\u9633\u5E02","370688":"\u5176\u5B83\u533A","370700":"\u6F4D\u574A\u5E02","370702":"\u6F4D\u57CE\u533A","370703":"\u5BD2\u4EAD\u533A","370704":"\u574A\u5B50\u533A","370705":"\u594E\u6587\u533A","370724":"\u4E34\u6710\u53BF","370725":"\u660C\u4E50\u53BF","370781":"\u9752\u5DDE\u5E02","370782":"\u8BF8\u57CE\u5E02","370783":"\u5BFF\u5149\u5E02","370784":"\u5B89\u4E18\u5E02","370785":"\u9AD8\u5BC6\u5E02","370786":"\u660C\u9091\u5E02","370787":"\u5176\u5B83\u533A","370800":"\u6D4E\u5B81\u5E02","370802":"\u5E02\u4E2D\u533A","370811":"\u4EFB\u57CE\u533A","370826":"\u5FAE\u5C71\u53BF","370827":"\u9C7C\u53F0\u53BF","370828":"\u91D1\u4E61\u53BF","370829":"\u5609\u7965\u53BF","370830":"\u6C76\u4E0A\u53BF","370831":"\u6CD7\u6C34\u53BF","370832":"\u6881\u5C71\u53BF","370881":"\u66F2\u961C\u5E02","370882":"\u5156\u5DDE\u5E02","370883":"\u90B9\u57CE\u5E02","370884":"\u5176\u5B83\u533A","370900":"\u6CF0\u5B89\u5E02","370902":"\u6CF0\u5C71\u533A","370903":"\u5CB1\u5CB3\u533A","370921":"\u5B81\u9633\u53BF","370923":"\u4E1C\u5E73\u53BF","370982":"\u65B0\u6CF0\u5E02","370983":"\u80A5\u57CE\u5E02","370984":"\u5176\u5B83\u533A","371000":"\u5A01\u6D77\u5E02","371002":"\u73AF\u7FE0\u533A","371081":"\u6587\u767B\u5E02","371082":"\u8363\u6210\u5E02","371083":"\u4E73\u5C71\u5E02","371084":"\u5176\u5B83\u533A","371100":"\u65E5\u7167\u5E02","371102":"\u4E1C\u6E2F\u533A","371103":"\u5C9A\u5C71\u533A","371121":"\u4E94\u83B2\u53BF","371122":"\u8392\u53BF","371123":"\u5176\u5B83\u533A","371200":"\u83B1\u829C\u5E02","371202":"\u83B1\u57CE\u533A","371203":"\u94A2\u57CE\u533A","371204":"\u5176\u5B83\u533A","371300":"\u4E34\u6C82\u5E02","371302":"\u5170\u5C71\u533A","371311":"\u7F57\u5E84\u533A","371312":"\u6CB3\u4E1C\u533A","371321":"\u6C82\u5357\u53BF","371322":"\u90EF\u57CE\u53BF","371323":"\u6C82\u6C34\u53BF","371324":"\u82CD\u5C71\u53BF","371325":"\u8D39\u53BF","371326":"\u5E73\u9091\u53BF","371327":"\u8392\u5357\u53BF","371328":"\u8499\u9634\u53BF","371329":"\u4E34\u6CAD\u53BF","371330":"\u5176\u5B83\u533A","371400":"\u5FB7\u5DDE\u5E02","371402":"\u5FB7\u57CE\u533A","371421":"\u9675\u53BF","371422":"\u5B81\u6D25\u53BF","371423":"\u5E86\u4E91\u53BF","371424":"\u4E34\u9091\u53BF","371425":"\u9F50\u6CB3\u53BF","371426":"\u5E73\u539F\u53BF","371427":"\u590F\u6D25\u53BF","371428":"\u6B66\u57CE\u53BF","371481":"\u4E50\u9675\u5E02","371482":"\u79B9\u57CE\u5E02","371483":"\u5176\u5B83\u533A","371500":"\u804A\u57CE\u5E02","371502":"\u4E1C\u660C\u5E9C\u533A","371521":"\u9633\u8C37\u53BF","371522":"\u8398\u53BF","371523":"\u830C\u5E73\u53BF","371524":"\u4E1C\u963F\u53BF","371525":"\u51A0\u53BF","371526":"\u9AD8\u5510\u53BF","371581":"\u4E34\u6E05\u5E02","371582":"\u5176\u5B83\u533A","371600":"\u6EE8\u5DDE\u5E02","371602":"\u6EE8\u57CE\u533A","371621":"\u60E0\u6C11\u53BF","371622":"\u9633\u4FE1\u53BF","371623":"\u65E0\u68E3\u53BF","371624":"\u6CBE\u5316\u53BF","371625":"\u535A\u5174\u53BF","371626":"\u90B9\u5E73\u53BF","371627":"\u5176\u5B83\u533A","371700":"\u83CF\u6CFD\u5E02","371702":"\u7261\u4E39\u533A","371721":"\u66F9\u53BF","371722":"\u5355\u53BF","371723":"\u6210\u6B66\u53BF","371724":"\u5DE8\u91CE\u53BF","371725":"\u90D3\u57CE\u53BF","371726":"\u9104\u57CE\u53BF","371727":"\u5B9A\u9676\u53BF","371728":"\u4E1C\u660E\u53BF","371729":"\u5176\u5B83\u533A","410000":"\u6CB3\u5357\u7701","410100":"\u90D1\u5DDE\u5E02","410102":"\u4E2D\u539F\u533A","410103":"\u4E8C\u4E03\u533A","410104":"\u7BA1\u57CE\u56DE\u65CF\u533A","410105":"\u91D1\u6C34\u533A","410106":"\u4E0A\u8857\u533A","410108":"\u60E0\u6D4E\u533A","410122":"\u4E2D\u725F\u53BF","410181":"\u5DE9\u4E49\u5E02","410182":"\u8365\u9633\u5E02","410183":"\u65B0\u5BC6\u5E02","410184":"\u65B0\u90D1\u5E02","410185":"\u767B\u5C01\u5E02","410188":"\u5176\u5B83\u533A","410200":"\u5F00\u5C01\u5E02","410202":"\u9F99\u4EAD\u533A","410203":"\u987A\u6CB3\u56DE\u65CF\u533A","410204":"\u9F13\u697C\u533A","410205":"\u79B9\u738B\u53F0\u533A","410211":"\u91D1\u660E\u533A","410221":"\u675E\u53BF","410222":"\u901A\u8BB8\u53BF","410223":"\u5C09\u6C0F\u53BF","410224":"\u5F00\u5C01\u53BF","410225":"\u5170\u8003\u53BF","410226":"\u5176\u5B83\u533A","410300":"\u6D1B\u9633\u5E02","410302":"\u8001\u57CE\u533A","410303":"\u897F\u5DE5\u533A","410304":"\u700D\u6CB3\u56DE\u65CF\u533A","410305":"\u6DA7\u897F\u533A","410306":"\u5409\u5229\u533A","410307":"\u6D1B\u9F99\u533A","410322":"\u5B5F\u6D25\u53BF","410323":"\u65B0\u5B89\u53BF","410324":"\u683E\u5DDD\u53BF","410325":"\u5D69\u53BF","410326":"\u6C5D\u9633\u53BF","410327":"\u5B9C\u9633\u53BF","410328":"\u6D1B\u5B81\u53BF","410329":"\u4F0A\u5DDD\u53BF","410381":"\u5043\u5E08\u5E02","410400":"\u5E73\u9876\u5C71\u5E02","410402":"\u65B0\u534E\u533A","410403":"\u536B\u4E1C\u533A","410404":"\u77F3\u9F99\u533A","410411":"\u6E5B\u6CB3\u533A","410421":"\u5B9D\u4E30\u53BF","410422":"\u53F6\u53BF","410423":"\u9C81\u5C71\u53BF","410425":"\u90CF\u53BF","410481":"\u821E\u94A2\u5E02","410482":"\u6C5D\u5DDE\u5E02","410483":"\u5176\u5B83\u533A","410500":"\u5B89\u9633\u5E02","410502":"\u6587\u5CF0\u533A","410503":"\u5317\u5173\u533A","410505":"\u6BB7\u90FD\u533A","410506":"\u9F99\u5B89\u533A","410522":"\u5B89\u9633\u53BF","410523":"\u6C64\u9634\u53BF","410526":"\u6ED1\u53BF","410527":"\u5185\u9EC4\u53BF","410581":"\u6797\u5DDE\u5E02","410582":"\u5176\u5B83\u533A","410600":"\u9E64\u58C1\u5E02","410602":"\u9E64\u5C71\u533A","410603":"\u5C71\u57CE\u533A","410611":"\u6DC7\u6EE8\u533A","410621":"\u6D5A\u53BF","410622":"\u6DC7\u53BF","410623":"\u5176\u5B83\u533A","410700":"\u65B0\u4E61\u5E02","410702":"\u7EA2\u65D7\u533A","410703":"\u536B\u6EE8\u533A","410704":"\u51E4\u6CC9\u533A","410711":"\u7267\u91CE\u533A","410721":"\u65B0\u4E61\u53BF","410724":"\u83B7\u5609\u53BF","410725":"\u539F\u9633\u53BF","410726":"\u5EF6\u6D25\u53BF","410727":"\u5C01\u4E18\u53BF","410728":"\u957F\u57A3\u53BF","410781":"\u536B\u8F89\u5E02","410782":"\u8F89\u53BF\u5E02","410783":"\u5176\u5B83\u533A","410800":"\u7126\u4F5C\u5E02","410802":"\u89E3\u653E\u533A","410803":"\u4E2D\u7AD9\u533A","410804":"\u9A6C\u6751\u533A","410811":"\u5C71\u9633\u533A","410821":"\u4FEE\u6B66\u53BF","410822":"\u535A\u7231\u53BF","410823":"\u6B66\u965F\u53BF","410825":"\u6E29\u53BF","410881":"\u6D4E\u6E90\u5E02","410882":"\u6C81\u9633\u5E02","410883":"\u5B5F\u5DDE\u5E02","410884":"\u5176\u5B83\u533A","410900":"\u6FEE\u9633\u5E02","410902":"\u534E\u9F99\u533A","410922":"\u6E05\u4E30\u53BF","410923":"\u5357\u4E50\u53BF","410926":"\u8303\u53BF","410927":"\u53F0\u524D\u53BF","410928":"\u6FEE\u9633\u53BF","410929":"\u5176\u5B83\u533A","411000":"\u8BB8\u660C\u5E02","411002":"\u9B4F\u90FD\u533A","411023":"\u8BB8\u660C\u53BF","411024":"\u9122\u9675\u53BF","411025":"\u8944\u57CE\u53BF","411081":"\u79B9\u5DDE\u5E02","411082":"\u957F\u845B\u5E02","411083":"\u5176\u5B83\u533A","411100":"\u6F2F\u6CB3\u5E02","411102":"\u6E90\u6C47\u533A","411103":"\u90FE\u57CE\u533A","411104":"\u53EC\u9675\u533A","411121":"\u821E\u9633\u53BF","411122":"\u4E34\u988D\u53BF","411123":"\u5176\u5B83\u533A","411200":"\u4E09\u95E8\u5CE1\u5E02","411202":"\u6E56\u6EE8\u533A","411221":"\u6E11\u6C60\u53BF","411222":"\u9655\u53BF","411224":"\u5362\u6C0F\u53BF","411281":"\u4E49\u9A6C\u5E02","411282":"\u7075\u5B9D\u5E02","411283":"\u5176\u5B83\u533A","411300":"\u5357\u9633\u5E02","411302":"\u5B9B\u57CE\u533A","411303":"\u5367\u9F99\u533A","411321":"\u5357\u53EC\u53BF","411322":"\u65B9\u57CE\u53BF","411323":"\u897F\u5CE1\u53BF","411324":"\u9547\u5E73\u53BF","411325":"\u5185\u4E61\u53BF","411326":"\u6DC5\u5DDD\u53BF","411327":"\u793E\u65D7\u53BF","411328":"\u5510\u6CB3\u53BF","411329":"\u65B0\u91CE\u53BF","411330":"\u6850\u67CF\u53BF","411381":"\u9093\u5DDE\u5E02","411382":"\u5176\u5B83\u533A","411400":"\u5546\u4E18\u5E02","411402":"\u6881\u56ED\u533A","411403":"\u7762\u9633\u533A","411421":"\u6C11\u6743\u53BF","411422":"\u7762\u53BF","411423":"\u5B81\u9675\u53BF","411424":"\u67D8\u57CE\u53BF","411425":"\u865E\u57CE\u53BF","411426":"\u590F\u9091\u53BF","411481":"\u6C38\u57CE\u5E02","411482":"\u5176\u5B83\u533A","411500":"\u4FE1\u9633\u5E02","411502":"\u6D49\u6CB3\u533A","411503":"\u5E73\u6865\u533A","411521":"\u7F57\u5C71\u53BF","411522":"\u5149\u5C71\u53BF","411523":"\u65B0\u53BF","411524":"\u5546\u57CE\u53BF","411525":"\u56FA\u59CB\u53BF","411526":"\u6F62\u5DDD\u53BF","411527":"\u6DEE\u6EE8\u53BF","411528":"\u606F\u53BF","411529":"\u5176\u5B83\u533A","411600":"\u5468\u53E3\u5E02","411602":"\u5DDD\u6C47\u533A","411621":"\u6276\u6C9F\u53BF","411622":"\u897F\u534E\u53BF","411623":"\u5546\u6C34\u53BF","411624":"\u6C88\u4E18\u53BF","411625":"\u90F8\u57CE\u53BF","411626":"\u6DEE\u9633\u53BF","411627":"\u592A\u5EB7\u53BF","411628":"\u9E7F\u9091\u53BF","411681":"\u9879\u57CE\u5E02","411682":"\u5176\u5B83\u533A","411700":"\u9A7B\u9A6C\u5E97\u5E02","411702":"\u9A7F\u57CE\u533A","411721":"\u897F\u5E73\u53BF","411722":"\u4E0A\u8521\u53BF","411723":"\u5E73\u8206\u53BF","411724":"\u6B63\u9633\u53BF","411725":"\u786E\u5C71\u53BF","411726":"\u6CCC\u9633\u53BF","411727":"\u6C5D\u5357\u53BF","411728":"\u9042\u5E73\u53BF","411729":"\u65B0\u8521\u53BF","411730":"\u5176\u5B83\u533A","420000":"\u6E56\u5317\u7701","420100":"\u6B66\u6C49\u5E02","420102":"\u6C5F\u5CB8\u533A","420103":"\u6C5F\u6C49\u533A","420104":"\u785A\u53E3\u533A","420105":"\u6C49\u9633\u533A","420106":"\u6B66\u660C\u533A","420107":"\u9752\u5C71\u533A","420111":"\u6D2A\u5C71\u533A","420112":"\u4E1C\u897F\u6E56\u533A","420113":"\u6C49\u5357\u533A","420114":"\u8521\u7538\u533A","420115":"\u6C5F\u590F\u533A","420116":"\u9EC4\u9642\u533A","420117":"\u65B0\u6D32\u533A","420118":"\u5176\u5B83\u533A","420200":"\u9EC4\u77F3\u5E02","420202":"\u9EC4\u77F3\u6E2F\u533A","420203":"\u897F\u585E\u5C71\u533A","420204":"\u4E0B\u9646\u533A","420205":"\u94C1\u5C71\u533A","420222":"\u9633\u65B0\u53BF","420281":"\u5927\u51B6\u5E02","420282":"\u5176\u5B83\u533A","420300":"\u5341\u5830\u5E02","420302":"\u8305\u7BAD\u533A","420303":"\u5F20\u6E7E\u533A","420321":"\u90E7\u53BF","420322":"\u90E7\u897F\u53BF","420323":"\u7AF9\u5C71\u53BF","420324":"\u7AF9\u6EAA\u53BF","420325":"\u623F\u53BF","420381":"\u4E39\u6C5F\u53E3\u5E02","420383":"\u5176\u5B83\u533A","420500":"\u5B9C\u660C\u5E02","420502":"\u897F\u9675\u533A","420503":"\u4F0D\u5BB6\u5C97\u533A","420504":"\u70B9\u519B\u533A","420505":"\u7307\u4EAD\u533A","420506":"\u5937\u9675\u533A","420525":"\u8FDC\u5B89\u53BF","420526":"\u5174\u5C71\u53BF","420527":"\u79ED\u5F52\u53BF","420528":"\u957F\u9633\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF","420529":"\u4E94\u5CF0\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF","420581":"\u5B9C\u90FD\u5E02","420582":"\u5F53\u9633\u5E02","420583":"\u679D\u6C5F\u5E02","420584":"\u5176\u5B83\u533A","420600":"\u8944\u9633\u5E02","420602":"\u8944\u57CE\u533A","420606":"\u6A0A\u57CE\u533A","420607":"\u8944\u5DDE\u533A","420624":"\u5357\u6F33\u53BF","420625":"\u8C37\u57CE\u53BF","420626":"\u4FDD\u5EB7\u53BF","420682":"\u8001\u6CB3\u53E3\u5E02","420683":"\u67A3\u9633\u5E02","420684":"\u5B9C\u57CE\u5E02","420685":"\u5176\u5B83\u533A","420700":"\u9102\u5DDE\u5E02","420702":"\u6881\u5B50\u6E56\u533A","420703":"\u534E\u5BB9\u533A","420704":"\u9102\u57CE\u533A","420705":"\u5176\u5B83\u533A","420800":"\u8346\u95E8\u5E02","420802":"\u4E1C\u5B9D\u533A","420804":"\u6387\u5200\u533A","420821":"\u4EAC\u5C71\u53BF","420822":"\u6C99\u6D0B\u53BF","420881":"\u949F\u7965\u5E02","420882":"\u5176\u5B83\u533A","420900":"\u5B5D\u611F\u5E02","420902":"\u5B5D\u5357\u533A","420921":"\u5B5D\u660C\u53BF","420922":"\u5927\u609F\u53BF","420923":"\u4E91\u68A6\u53BF","420981":"\u5E94\u57CE\u5E02","420982":"\u5B89\u9646\u5E02","420984":"\u6C49\u5DDD\u5E02","420985":"\u5176\u5B83\u533A","421000":"\u8346\u5DDE\u5E02","421002":"\u6C99\u5E02\u533A","421003":"\u8346\u5DDE\u533A","421022":"\u516C\u5B89\u53BF","421023":"\u76D1\u5229\u53BF","421024":"\u6C5F\u9675\u53BF","421081":"\u77F3\u9996\u5E02","421083":"\u6D2A\u6E56\u5E02","421087":"\u677E\u6ECB\u5E02","421088":"\u5176\u5B83\u533A","421100":"\u9EC4\u5188\u5E02","421102":"\u9EC4\u5DDE\u533A","421121":"\u56E2\u98CE\u53BF","421122":"\u7EA2\u5B89\u53BF","421123":"\u7F57\u7530\u53BF","421124":"\u82F1\u5C71\u53BF","421125":"\u6D60\u6C34\u53BF","421126":"\u8572\u6625\u53BF","421127":"\u9EC4\u6885\u53BF","421181":"\u9EBB\u57CE\u5E02","421182":"\u6B66\u7A74\u5E02","421183":"\u5176\u5B83\u533A","421200":"\u54B8\u5B81\u5E02","421202":"\u54B8\u5B89\u533A","421221":"\u5609\u9C7C\u53BF","421222":"\u901A\u57CE\u53BF","421223":"\u5D07\u9633\u53BF","421224":"\u901A\u5C71\u53BF","421281":"\u8D64\u58C1\u5E02","421283":"\u5176\u5B83\u533A","421300":"\u968F\u5DDE\u5E02","421302":"\u66FE\u90FD\u533A","421321":"\u968F\u53BF","421381":"\u5E7F\u6C34\u5E02","421382":"\u5176\u5B83\u533A","422800":"\u6069\u65BD\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE","422801":"\u6069\u65BD\u5E02","422802":"\u5229\u5DDD\u5E02","422822":"\u5EFA\u59CB\u53BF","422823":"\u5DF4\u4E1C\u53BF","422825":"\u5BA3\u6069\u53BF","422826":"\u54B8\u4E30\u53BF","422827":"\u6765\u51E4\u53BF","422828":"\u9E64\u5CF0\u53BF","422829":"\u5176\u5B83\u533A","429004":"\u4ED9\u6843\u5E02","429005":"\u6F5C\u6C5F\u5E02","429006":"\u5929\u95E8\u5E02","429021":"\u795E\u519C\u67B6\u6797\u533A","430000":"\u6E56\u5357\u7701","430100":"\u957F\u6C99\u5E02","430102":"\u8299\u84C9\u533A","430103":"\u5929\u5FC3\u533A","430104":"\u5CB3\u9E93\u533A","430105":"\u5F00\u798F\u533A","430111":"\u96E8\u82B1\u533A","430121":"\u957F\u6C99\u53BF","430122":"\u671B\u57CE\u533A","430124":"\u5B81\u4E61\u53BF","430181":"\u6D4F\u9633\u5E02","430182":"\u5176\u5B83\u533A","430200":"\u682A\u6D32\u5E02","430202":"\u8377\u5858\u533A","430203":"\u82A6\u6DDE\u533A","430204":"\u77F3\u5CF0\u533A","430211":"\u5929\u5143\u533A","430221":"\u682A\u6D32\u53BF","430223":"\u6538\u53BF","430224":"\u8336\u9675\u53BF","430225":"\u708E\u9675\u53BF","430281":"\u91B4\u9675\u5E02","430282":"\u5176\u5B83\u533A","430300":"\u6E58\u6F6D\u5E02","430302":"\u96E8\u6E56\u533A","430304":"\u5CB3\u5858\u533A","430321":"\u6E58\u6F6D\u53BF","430381":"\u6E58\u4E61\u5E02","430382":"\u97F6\u5C71\u5E02","430383":"\u5176\u5B83\u533A","430400":"\u8861\u9633\u5E02","430405":"\u73E0\u6656\u533A","430406":"\u96C1\u5CF0\u533A","430407":"\u77F3\u9F13\u533A","430408":"\u84B8\u6E58\u533A","430412":"\u5357\u5CB3\u533A","430421":"\u8861\u9633\u53BF","430422":"\u8861\u5357\u53BF","430423":"\u8861\u5C71\u53BF","430424":"\u8861\u4E1C\u53BF","430426":"\u7941\u4E1C\u53BF","430481":"\u8012\u9633\u5E02","430482":"\u5E38\u5B81\u5E02","430483":"\u5176\u5B83\u533A","430500":"\u90B5\u9633\u5E02","430502":"\u53CC\u6E05\u533A","430503":"\u5927\u7965\u533A","430511":"\u5317\u5854\u533A","430521":"\u90B5\u4E1C\u53BF","430522":"\u65B0\u90B5\u53BF","430523":"\u90B5\u9633\u53BF","430524":"\u9686\u56DE\u53BF","430525":"\u6D1E\u53E3\u53BF","430527":"\u7EE5\u5B81\u53BF","430528":"\u65B0\u5B81\u53BF","430529":"\u57CE\u6B65\u82D7\u65CF\u81EA\u6CBB\u53BF","430581":"\u6B66\u5188\u5E02","430582":"\u5176\u5B83\u533A","430600":"\u5CB3\u9633\u5E02","430602":"\u5CB3\u9633\u697C\u533A","430603":"\u4E91\u6EAA\u533A","430611":"\u541B\u5C71\u533A","430621":"\u5CB3\u9633\u53BF","430623":"\u534E\u5BB9\u53BF","430624":"\u6E58\u9634\u53BF","430626":"\u5E73\u6C5F\u53BF","430681":"\u6C68\u7F57\u5E02","430682":"\u4E34\u6E58\u5E02","430683":"\u5176\u5B83\u533A","430700":"\u5E38\u5FB7\u5E02","430702":"\u6B66\u9675\u533A","430703":"\u9F0E\u57CE\u533A","430721":"\u5B89\u4E61\u53BF","430722":"\u6C49\u5BFF\u53BF","430723":"\u6FA7\u53BF","430724":"\u4E34\u6FA7\u53BF","430725":"\u6843\u6E90\u53BF","430726":"\u77F3\u95E8\u53BF","430781":"\u6D25\u5E02\u5E02","430782":"\u5176\u5B83\u533A","430800":"\u5F20\u5BB6\u754C\u5E02","430802":"\u6C38\u5B9A\u533A","430811":"\u6B66\u9675\u6E90\u533A","430821":"\u6148\u5229\u53BF","430822":"\u6851\u690D\u53BF","430823":"\u5176\u5B83\u533A","430900":"\u76CA\u9633\u5E02","430902":"\u8D44\u9633\u533A","430903":"\u8D6B\u5C71\u533A","430921":"\u5357\u53BF","430922":"\u6843\u6C5F\u53BF","430923":"\u5B89\u5316\u53BF","430981":"\u6C85\u6C5F\u5E02","430982":"\u5176\u5B83\u533A","431000":"\u90F4\u5DDE\u5E02","431002":"\u5317\u6E56\u533A","431003":"\u82CF\u4ED9\u533A","431021":"\u6842\u9633\u53BF","431022":"\u5B9C\u7AE0\u53BF","431023":"\u6C38\u5174\u53BF","431024":"\u5609\u79BE\u53BF","431025":"\u4E34\u6B66\u53BF","431026":"\u6C5D\u57CE\u53BF","431027":"\u6842\u4E1C\u53BF","431028":"\u5B89\u4EC1\u53BF","431081":"\u8D44\u5174\u5E02","431082":"\u5176\u5B83\u533A","431100":"\u6C38\u5DDE\u5E02","431102":"\u96F6\u9675\u533A","431103":"\u51B7\u6C34\u6EE9\u533A","431121":"\u7941\u9633\u53BF","431122":"\u4E1C\u5B89\u53BF","431123":"\u53CC\u724C\u53BF","431124":"\u9053\u53BF","431125":"\u6C5F\u6C38\u53BF","431126":"\u5B81\u8FDC\u53BF","431127":"\u84DD\u5C71\u53BF","431128":"\u65B0\u7530\u53BF","431129":"\u6C5F\u534E\u7476\u65CF\u81EA\u6CBB\u53BF","431130":"\u5176\u5B83\u533A","431200":"\u6000\u5316\u5E02","431202":"\u9E64\u57CE\u533A","431221":"\u4E2D\u65B9\u53BF","431222":"\u6C85\u9675\u53BF","431223":"\u8FB0\u6EAA\u53BF","431224":"\u6E86\u6D66\u53BF","431225":"\u4F1A\u540C\u53BF","431226":"\u9EBB\u9633\u82D7\u65CF\u81EA\u6CBB\u53BF","431227":"\u65B0\u6643\u4F97\u65CF\u81EA\u6CBB\u53BF","431228":"\u82B7\u6C5F\u4F97\u65CF\u81EA\u6CBB\u53BF","431229":"\u9756\u5DDE\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u53BF","431230":"\u901A\u9053\u4F97\u65CF\u81EA\u6CBB\u53BF","431281":"\u6D2A\u6C5F\u5E02","431282":"\u5176\u5B83\u533A","431300":"\u5A04\u5E95\u5E02","431302":"\u5A04\u661F\u533A","431321":"\u53CC\u5CF0\u53BF","431322":"\u65B0\u5316\u53BF","431381":"\u51B7\u6C34\u6C5F\u5E02","431382":"\u6D9F\u6E90\u5E02","431383":"\u5176\u5B83\u533A","433100":"\u6E58\u897F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE","433101":"\u5409\u9996\u5E02","433122":"\u6CF8\u6EAA\u53BF","433123":"\u51E4\u51F0\u53BF","433124":"\u82B1\u57A3\u53BF","433125":"\u4FDD\u9756\u53BF","433126":"\u53E4\u4E08\u53BF","433127":"\u6C38\u987A\u53BF","433130":"\u9F99\u5C71\u53BF","433131":"\u5176\u5B83\u533A","440000":"\u5E7F\u4E1C\u7701","440100":"\u5E7F\u5DDE\u5E02","440103":"\u8354\u6E7E\u533A","440104":"\u8D8A\u79C0\u533A","440105":"\u6D77\u73E0\u533A","440106":"\u5929\u6CB3\u533A","440111":"\u767D\u4E91\u533A","440112":"\u9EC4\u57D4\u533A","440113":"\u756A\u79BA\u533A","440114":"\u82B1\u90FD\u533A","440115":"\u5357\u6C99\u533A","440116":"\u841D\u5C97\u533A","440183":"\u589E\u57CE\u5E02","440184":"\u4ECE\u5316\u5E02","440189":"\u5176\u5B83\u533A","440200":"\u97F6\u5173\u5E02","440203":"\u6B66\u6C5F\u533A","440204":"\u6D48\u6C5F\u533A","440205":"\u66F2\u6C5F\u533A","440222":"\u59CB\u5174\u53BF","440224":"\u4EC1\u5316\u53BF","440229":"\u7FC1\u6E90\u53BF","440232":"\u4E73\u6E90\u7476\u65CF\u81EA\u6CBB\u53BF","440233":"\u65B0\u4E30\u53BF","440281":"\u4E50\u660C\u5E02","440282":"\u5357\u96C4\u5E02","440283":"\u5176\u5B83\u533A","440300":"\u6DF1\u5733\u5E02","440303":"\u7F57\u6E56\u533A","440304":"\u798F\u7530\u533A","440305":"\u5357\u5C71\u533A","440306":"\u5B9D\u5B89\u533A","440307":"\u9F99\u5C97\u533A","440308":"\u76D0\u7530\u533A","440309":"\u5176\u5B83\u533A","440320":"\u5149\u660E\u65B0\u533A","440321":"\u576A\u5C71\u65B0\u533A","440322":"\u5927\u9E4F\u65B0\u533A","440323":"\u9F99\u534E\u65B0\u533A","440400":"\u73E0\u6D77\u5E02","440402":"\u9999\u6D32\u533A","440403":"\u6597\u95E8\u533A","440404":"\u91D1\u6E7E\u533A","440488":"\u5176\u5B83\u533A","440500":"\u6C55\u5934\u5E02","440507":"\u9F99\u6E56\u533A","440511":"\u91D1\u5E73\u533A","440512":"\u6FE0\u6C5F\u533A","440513":"\u6F6E\u9633\u533A","440514":"\u6F6E\u5357\u533A","440515":"\u6F84\u6D77\u533A","440523":"\u5357\u6FB3\u53BF","440524":"\u5176\u5B83\u533A","440600":"\u4F5B\u5C71\u5E02","440604":"\u7985\u57CE\u533A","440605":"\u5357\u6D77\u533A","440606":"\u987A\u5FB7\u533A","440607":"\u4E09\u6C34\u533A","440608":"\u9AD8\u660E\u533A","440609":"\u5176\u5B83\u533A","440700":"\u6C5F\u95E8\u5E02","440703":"\u84EC\u6C5F\u533A","440704":"\u6C5F\u6D77\u533A","440705":"\u65B0\u4F1A\u533A","440781":"\u53F0\u5C71\u5E02","440783":"\u5F00\u5E73\u5E02","440784":"\u9E64\u5C71\u5E02","440785":"\u6069\u5E73\u5E02","440786":"\u5176\u5B83\u533A","440800":"\u6E5B\u6C5F\u5E02","440802":"\u8D64\u574E\u533A","440803":"\u971E\u5C71\u533A","440804":"\u5761\u5934\u533A","440811":"\u9EBB\u7AE0\u533A","440823":"\u9042\u6EAA\u53BF","440825":"\u5F90\u95FB\u53BF","440881":"\u5EC9\u6C5F\u5E02","440882":"\u96F7\u5DDE\u5E02","440883":"\u5434\u5DDD\u5E02","440884":"\u5176\u5B83\u533A","440900":"\u8302\u540D\u5E02","440902":"\u8302\u5357\u533A","440903":"\u8302\u6E2F\u533A","440923":"\u7535\u767D\u53BF","440981":"\u9AD8\u5DDE\u5E02","440982":"\u5316\u5DDE\u5E02","440983":"\u4FE1\u5B9C\u5E02","440984":"\u5176\u5B83\u533A","441200":"\u8087\u5E86\u5E02","441202":"\u7AEF\u5DDE\u533A","441203":"\u9F0E\u6E56\u533A","441223":"\u5E7F\u5B81\u53BF","441224":"\u6000\u96C6\u53BF","441225":"\u5C01\u5F00\u53BF","441226":"\u5FB7\u5E86\u53BF","441283":"\u9AD8\u8981\u5E02","441284":"\u56DB\u4F1A\u5E02","441285":"\u5176\u5B83\u533A","441300":"\u60E0\u5DDE\u5E02","441302":"\u60E0\u57CE\u533A","441303":"\u60E0\u9633\u533A","441322":"\u535A\u7F57\u53BF","441323":"\u60E0\u4E1C\u53BF","441324":"\u9F99\u95E8\u53BF","441325":"\u5176\u5B83\u533A","441400":"\u6885\u5DDE\u5E02","441402":"\u6885\u6C5F\u533A","441421":"\u6885\u53BF","441422":"\u5927\u57D4\u53BF","441423":"\u4E30\u987A\u53BF","441424":"\u4E94\u534E\u53BF","441426":"\u5E73\u8FDC\u53BF","441427":"\u8549\u5CAD\u53BF","441481":"\u5174\u5B81\u5E02","441482":"\u5176\u5B83\u533A","441500":"\u6C55\u5C3E\u5E02","441502":"\u57CE\u533A","441521":"\u6D77\u4E30\u53BF","441523":"\u9646\u6CB3\u53BF","441581":"\u9646\u4E30\u5E02","441582":"\u5176\u5B83\u533A","441600":"\u6CB3\u6E90\u5E02","441602":"\u6E90\u57CE\u533A","441621":"\u7D2B\u91D1\u53BF","441622":"\u9F99\u5DDD\u53BF","441623":"\u8FDE\u5E73\u53BF","441624":"\u548C\u5E73\u53BF","441625":"\u4E1C\u6E90\u53BF","441626":"\u5176\u5B83\u533A","441700":"\u9633\u6C5F\u5E02","441702":"\u6C5F\u57CE\u533A","441721":"\u9633\u897F\u53BF","441723":"\u9633\u4E1C\u53BF","441781":"\u9633\u6625\u5E02","441782":"\u5176\u5B83\u533A","441800":"\u6E05\u8FDC\u5E02","441802":"\u6E05\u57CE\u533A","441821":"\u4F5B\u5188\u53BF","441823":"\u9633\u5C71\u53BF","441825":"\u8FDE\u5C71\u58EE\u65CF\u7476\u65CF\u81EA\u6CBB\u53BF","441826":"\u8FDE\u5357\u7476\u65CF\u81EA\u6CBB\u53BF","441827":"\u6E05\u65B0\u533A","441881":"\u82F1\u5FB7\u5E02","441882":"\u8FDE\u5DDE\u5E02","441883":"\u5176\u5B83\u533A","441900":"\u4E1C\u839E\u5E02","442000":"\u4E2D\u5C71\u5E02","442101":"\u4E1C\u6C99\u7FA4\u5C9B","445100":"\u6F6E\u5DDE\u5E02","445102":"\u6E58\u6865\u533A","445121":"\u6F6E\u5B89\u533A","445122":"\u9976\u5E73\u53BF","445186":"\u5176\u5B83\u533A","445200":"\u63ED\u9633\u5E02","445202":"\u6995\u57CE\u533A","445221":"\u63ED\u4E1C\u533A","445222":"\u63ED\u897F\u53BF","445224":"\u60E0\u6765\u53BF","445281":"\u666E\u5B81\u5E02","445285":"\u5176\u5B83\u533A","445300":"\u4E91\u6D6E\u5E02","445302":"\u4E91\u57CE\u533A","445321":"\u65B0\u5174\u53BF","445322":"\u90C1\u5357\u53BF","445323":"\u4E91\u5B89\u53BF","445381":"\u7F57\u5B9A\u5E02","445382":"\u5176\u5B83\u533A","450000":"\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A","450100":"\u5357\u5B81\u5E02","450102":"\u5174\u5B81\u533A","450103":"\u9752\u79C0\u533A","450105":"\u6C5F\u5357\u533A","450107":"\u897F\u4E61\u5858\u533A","450108":"\u826F\u5E86\u533A","450109":"\u9095\u5B81\u533A","450122":"\u6B66\u9E23\u53BF","450123":"\u9686\u5B89\u53BF","450124":"\u9A6C\u5C71\u53BF","450125":"\u4E0A\u6797\u53BF","450126":"\u5BBE\u9633\u53BF","450127":"\u6A2A\u53BF","450128":"\u5176\u5B83\u533A","450200":"\u67F3\u5DDE\u5E02","450202":"\u57CE\u4E2D\u533A","450203":"\u9C7C\u5CF0\u533A","450204":"\u67F3\u5357\u533A","450205":"\u67F3\u5317\u533A","450221":"\u67F3\u6C5F\u53BF","450222":"\u67F3\u57CE\u53BF","450223":"\u9E7F\u5BE8\u53BF","450224":"\u878D\u5B89\u53BF","450225":"\u878D\u6C34\u82D7\u65CF\u81EA\u6CBB\u53BF","450226":"\u4E09\u6C5F\u4F97\u65CF\u81EA\u6CBB\u53BF","450227":"\u5176\u5B83\u533A","450300":"\u6842\u6797\u5E02","450302":"\u79C0\u5CF0\u533A","450303":"\u53E0\u5F69\u533A","450304":"\u8C61\u5C71\u533A","450305":"\u4E03\u661F\u533A","450311":"\u96C1\u5C71\u533A","450321":"\u9633\u6714\u53BF","450322":"\u4E34\u6842\u533A","450323":"\u7075\u5DDD\u53BF","450324":"\u5168\u5DDE\u53BF","450325":"\u5174\u5B89\u53BF","450326":"\u6C38\u798F\u53BF","450327":"\u704C\u9633\u53BF","450328":"\u9F99\u80DC\u5404\u65CF\u81EA\u6CBB\u53BF","450329":"\u8D44\u6E90\u53BF","450330":"\u5E73\u4E50\u53BF","450331":"\u8354\u6D66\u53BF","450332":"\u606D\u57CE\u7476\u65CF\u81EA\u6CBB\u53BF","450333":"\u5176\u5B83\u533A","450400":"\u68A7\u5DDE\u5E02","450403":"\u4E07\u79C0\u533A","450405":"\u957F\u6D32\u533A","450406":"\u9F99\u5729\u533A","450421":"\u82CD\u68A7\u53BF","450422":"\u85E4\u53BF","450423":"\u8499\u5C71\u53BF","450481":"\u5C91\u6EAA\u5E02","450482":"\u5176\u5B83\u533A","450500":"\u5317\u6D77\u5E02","450502":"\u6D77\u57CE\u533A","450503":"\u94F6\u6D77\u533A","450512":"\u94C1\u5C71\u6E2F\u533A","450521":"\u5408\u6D66\u53BF","450522":"\u5176\u5B83\u533A","450600":"\u9632\u57CE\u6E2F\u5E02","450602":"\u6E2F\u53E3\u533A","450603":"\u9632\u57CE\u533A","450621":"\u4E0A\u601D\u53BF","450681":"\u4E1C\u5174\u5E02","450682":"\u5176\u5B83\u533A","450700":"\u94A6\u5DDE\u5E02","450702":"\u94A6\u5357\u533A","450703":"\u94A6\u5317\u533A","450721":"\u7075\u5C71\u53BF","450722":"\u6D66\u5317\u53BF","450723":"\u5176\u5B83\u533A","450800":"\u8D35\u6E2F\u5E02","450802":"\u6E2F\u5317\u533A","450803":"\u6E2F\u5357\u533A","450804":"\u8983\u5858\u533A","450821":"\u5E73\u5357\u53BF","450881":"\u6842\u5E73\u5E02","450882":"\u5176\u5B83\u533A","450900":"\u7389\u6797\u5E02","450902":"\u7389\u5DDE\u533A","450903":"\u798F\u7EF5\u533A","450921":"\u5BB9\u53BF","450922":"\u9646\u5DDD\u53BF","450923":"\u535A\u767D\u53BF","450924":"\u5174\u4E1A\u53BF","450981":"\u5317\u6D41\u5E02","450982":"\u5176\u5B83\u533A","451000":"\u767E\u8272\u5E02","451002":"\u53F3\u6C5F\u533A","451021":"\u7530\u9633\u53BF","451022":"\u7530\u4E1C\u53BF","451023":"\u5E73\u679C\u53BF","451024":"\u5FB7\u4FDD\u53BF","451025":"\u9756\u897F\u53BF","451026":"\u90A3\u5761\u53BF","451027":"\u51CC\u4E91\u53BF","451028":"\u4E50\u4E1A\u53BF","451029":"\u7530\u6797\u53BF","451030":"\u897F\u6797\u53BF","451031":"\u9686\u6797\u5404\u65CF\u81EA\u6CBB\u53BF","451032":"\u5176\u5B83\u533A","451100":"\u8D3A\u5DDE\u5E02","451102":"\u516B\u6B65\u533A","451119":"\u5E73\u6842\u7BA1\u7406\u533A","451121":"\u662D\u5E73\u53BF","451122":"\u949F\u5C71\u53BF","451123":"\u5BCC\u5DDD\u7476\u65CF\u81EA\u6CBB\u53BF","451124":"\u5176\u5B83\u533A","451200":"\u6CB3\u6C60\u5E02","451202":"\u91D1\u57CE\u6C5F\u533A","451221":"\u5357\u4E39\u53BF","451222":"\u5929\u5CE8\u53BF","451223":"\u51E4\u5C71\u53BF","451224":"\u4E1C\u5170\u53BF","451225":"\u7F57\u57CE\u4EEB\u4F6C\u65CF\u81EA\u6CBB\u53BF","451226":"\u73AF\u6C5F\u6BDB\u5357\u65CF\u81EA\u6CBB\u53BF","451227":"\u5DF4\u9A6C\u7476\u65CF\u81EA\u6CBB\u53BF","451228":"\u90FD\u5B89\u7476\u65CF\u81EA\u6CBB\u53BF","451229":"\u5927\u5316\u7476\u65CF\u81EA\u6CBB\u53BF","451281":"\u5B9C\u5DDE\u5E02","451282":"\u5176\u5B83\u533A","451300":"\u6765\u5BBE\u5E02","451302":"\u5174\u5BBE\u533A","451321":"\u5FFB\u57CE\u53BF","451322":"\u8C61\u5DDE\u53BF","451323":"\u6B66\u5BA3\u53BF","451324":"\u91D1\u79C0\u7476\u65CF\u81EA\u6CBB\u53BF","451381":"\u5408\u5C71\u5E02","451382":"\u5176\u5B83\u533A","451400":"\u5D07\u5DE6\u5E02","451402":"\u6C5F\u5DDE\u533A","451421":"\u6276\u7EE5\u53BF","451422":"\u5B81\u660E\u53BF","451423":"\u9F99\u5DDE\u53BF","451424":"\u5927\u65B0\u53BF","451425":"\u5929\u7B49\u53BF","451481":"\u51ED\u7965\u5E02","451482":"\u5176\u5B83\u533A","460000":"\u6D77\u5357\u7701","460100":"\u6D77\u53E3\u5E02","460105":"\u79C0\u82F1\u533A","460106":"\u9F99\u534E\u533A","460107":"\u743C\u5C71\u533A","460108":"\u7F8E\u5170\u533A","460109":"\u5176\u5B83\u533A","460200":"\u4E09\u4E9A\u5E02","460300":"\u4E09\u6C99\u5E02","460321":"\u897F\u6C99\u7FA4\u5C9B","460322":"\u5357\u6C99\u7FA4\u5C9B","460323":"\u4E2D\u6C99\u7FA4\u5C9B\u7684\u5C9B\u7901\u53CA\u5176\u6D77\u57DF","469001":"\u4E94\u6307\u5C71\u5E02","469002":"\u743C\u6D77\u5E02","469003":"\u510B\u5DDE\u5E02","469005":"\u6587\u660C\u5E02","469006":"\u4E07\u5B81\u5E02","469007":"\u4E1C\u65B9\u5E02","469025":"\u5B9A\u5B89\u53BF","469026":"\u5C6F\u660C\u53BF","469027":"\u6F84\u8FC8\u53BF","469028":"\u4E34\u9AD8\u53BF","469030":"\u767D\u6C99\u9ECE\u65CF\u81EA\u6CBB\u53BF","469031":"\u660C\u6C5F\u9ECE\u65CF\u81EA\u6CBB\u53BF","469033":"\u4E50\u4E1C\u9ECE\u65CF\u81EA\u6CBB\u53BF","469034":"\u9675\u6C34\u9ECE\u65CF\u81EA\u6CBB\u53BF","469035":"\u4FDD\u4EAD\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF","469036":"\u743C\u4E2D\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF","471005":"\u5176\u5B83\u533A","500000":"\u91CD\u5E86","500100":"\u91CD\u5E86\u5E02","500101":"\u4E07\u5DDE\u533A","500102":"\u6DAA\u9675\u533A","500103":"\u6E1D\u4E2D\u533A","500104":"\u5927\u6E21\u53E3\u533A","500105":"\u6C5F\u5317\u533A","500106":"\u6C99\u576A\u575D\u533A","500107":"\u4E5D\u9F99\u5761\u533A","500108":"\u5357\u5CB8\u533A","500109":"\u5317\u789A\u533A","500110":"\u4E07\u76DB\u533A","500111":"\u53CC\u6865\u533A","500112":"\u6E1D\u5317\u533A","500113":"\u5DF4\u5357\u533A","500114":"\u9ED4\u6C5F\u533A","500115":"\u957F\u5BFF\u533A","500222":"\u7DA6\u6C5F\u533A","500223":"\u6F7C\u5357\u53BF","500224":"\u94DC\u6881\u53BF","500225":"\u5927\u8DB3\u533A","500226":"\u8363\u660C\u53BF","500227":"\u74A7\u5C71\u53BF","500228":"\u6881\u5E73\u53BF","500229":"\u57CE\u53E3\u53BF","500230":"\u4E30\u90FD\u53BF","500231":"\u57AB\u6C5F\u53BF","500232":"\u6B66\u9686\u53BF","500233":"\u5FE0\u53BF","500234":"\u5F00\u53BF","500235":"\u4E91\u9633\u53BF","500236":"\u5949\u8282\u53BF","500237":"\u5DEB\u5C71\u53BF","500238":"\u5DEB\u6EAA\u53BF","500240":"\u77F3\u67F1\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF","500241":"\u79C0\u5C71\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF","500242":"\u9149\u9633\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF","500243":"\u5F6D\u6C34\u82D7\u65CF\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF","500381":"\u6C5F\u6D25\u533A","500382":"\u5408\u5DDD\u533A","500383":"\u6C38\u5DDD\u533A","500384":"\u5357\u5DDD\u533A","500385":"\u5176\u5B83\u533A","510000":"\u56DB\u5DDD\u7701","510100":"\u6210\u90FD\u5E02","510104":"\u9526\u6C5F\u533A","510105":"\u9752\u7F8A\u533A","510106":"\u91D1\u725B\u533A","510107":"\u6B66\u4FAF\u533A","510108":"\u6210\u534E\u533A","510112":"\u9F99\u6CC9\u9A7F\u533A","510113":"\u9752\u767D\u6C5F\u533A","510114":"\u65B0\u90FD\u533A","510115":"\u6E29\u6C5F\u533A","510121":"\u91D1\u5802\u53BF","510122":"\u53CC\u6D41\u53BF","510124":"\u90EB\u53BF","510129":"\u5927\u9091\u53BF","510131":"\u84B2\u6C5F\u53BF","510132":"\u65B0\u6D25\u53BF","510181":"\u90FD\u6C5F\u5830\u5E02","510182":"\u5F6D\u5DDE\u5E02","510183":"\u909B\u5D03\u5E02","510184":"\u5D07\u5DDE\u5E02","510185":"\u5176\u5B83\u533A","510300":"\u81EA\u8D21\u5E02","510302":"\u81EA\u6D41\u4E95\u533A","510303":"\u8D21\u4E95\u533A","510304":"\u5927\u5B89\u533A","510311":"\u6CBF\u6EE9\u533A","510321":"\u8363\u53BF","510322":"\u5BCC\u987A\u53BF","510323":"\u5176\u5B83\u533A","510400":"\u6500\u679D\u82B1\u5E02","510402":"\u4E1C\u533A","510403":"\u897F\u533A","510411":"\u4EC1\u548C\u533A","510421":"\u7C73\u6613\u53BF","510422":"\u76D0\u8FB9\u53BF","510423":"\u5176\u5B83\u533A","510500":"\u6CF8\u5DDE\u5E02","510502":"\u6C5F\u9633\u533A","510503":"\u7EB3\u6EAA\u533A","510504":"\u9F99\u9A6C\u6F6D\u533A","510521":"\u6CF8\u53BF","510522":"\u5408\u6C5F\u53BF","510524":"\u53D9\u6C38\u53BF","510525":"\u53E4\u853A\u53BF","510526":"\u5176\u5B83\u533A","510600":"\u5FB7\u9633\u5E02","510603":"\u65CC\u9633\u533A","510623":"\u4E2D\u6C5F\u53BF","510626":"\u7F57\u6C5F\u53BF","510681":"\u5E7F\u6C49\u5E02","510682":"\u4EC0\u90A1\u5E02","510683":"\u7EF5\u7AF9\u5E02","510684":"\u5176\u5B83\u533A","510700":"\u7EF5\u9633\u5E02","510703":"\u6DAA\u57CE\u533A","510704":"\u6E38\u4ED9\u533A","510722":"\u4E09\u53F0\u53BF","510723":"\u76D0\u4EAD\u53BF","510724":"\u5B89\u53BF","510725":"\u6893\u6F7C\u53BF","510726":"\u5317\u5DDD\u7F8C\u65CF\u81EA\u6CBB\u53BF","510727":"\u5E73\u6B66\u53BF","510781":"\u6C5F\u6CB9\u5E02","510782":"\u5176\u5B83\u533A","510800":"\u5E7F\u5143\u5E02","510802":"\u5229\u5DDE\u533A","510811":"\u662D\u5316\u533A","510812":"\u671D\u5929\u533A","510821":"\u65FA\u82CD\u53BF","510822":"\u9752\u5DDD\u53BF","510823":"\u5251\u9601\u53BF","510824":"\u82CD\u6EAA\u53BF","510825":"\u5176\u5B83\u533A","510900":"\u9042\u5B81\u5E02","510903":"\u8239\u5C71\u533A","510904":"\u5B89\u5C45\u533A","510921":"\u84EC\u6EAA\u53BF","510922":"\u5C04\u6D2A\u53BF","510923":"\u5927\u82F1\u53BF","510924":"\u5176\u5B83\u533A","511000":"\u5185\u6C5F\u5E02","511002":"\u5E02\u4E2D\u533A","511011":"\u4E1C\u5174\u533A","511024":"\u5A01\u8FDC\u53BF","511025":"\u8D44\u4E2D\u53BF","511028":"\u9686\u660C\u53BF","511029":"\u5176\u5B83\u533A","511100":"\u4E50\u5C71\u5E02","511102":"\u5E02\u4E2D\u533A","511111":"\u6C99\u6E7E\u533A","511112":"\u4E94\u901A\u6865\u533A","511113":"\u91D1\u53E3\u6CB3\u533A","511123":"\u728D\u4E3A\u53BF","511124":"\u4E95\u7814\u53BF","511126":"\u5939\u6C5F\u53BF","511129":"\u6C90\u5DDD\u53BF","511132":"\u5CE8\u8FB9\u5F5D\u65CF\u81EA\u6CBB\u53BF","511133":"\u9A6C\u8FB9\u5F5D\u65CF\u81EA\u6CBB\u53BF","511181":"\u5CE8\u7709\u5C71\u5E02","511182":"\u5176\u5B83\u533A","511300":"\u5357\u5145\u5E02","511302":"\u987A\u5E86\u533A","511303":"\u9AD8\u576A\u533A","511304":"\u5609\u9675\u533A","511321":"\u5357\u90E8\u53BF","511322":"\u8425\u5C71\u53BF","511323":"\u84EC\u5B89\u53BF","511324":"\u4EEA\u9647\u53BF","511325":"\u897F\u5145\u53BF","511381":"\u9606\u4E2D\u5E02","511382":"\u5176\u5B83\u533A","511400":"\u7709\u5C71\u5E02","511402":"\u4E1C\u5761\u533A","511421":"\u4EC1\u5BFF\u53BF","511422":"\u5F6D\u5C71\u53BF","511423":"\u6D2A\u96C5\u53BF","511424":"\u4E39\u68F1\u53BF","511425":"\u9752\u795E\u53BF","511426":"\u5176\u5B83\u533A","511500":"\u5B9C\u5BBE\u5E02","511502":"\u7FE0\u5C4F\u533A","511521":"\u5B9C\u5BBE\u53BF","511522":"\u5357\u6EAA\u533A","511523":"\u6C5F\u5B89\u53BF","511524":"\u957F\u5B81\u53BF","511525":"\u9AD8\u53BF","511526":"\u73D9\u53BF","511527":"\u7B60\u8FDE\u53BF","511528":"\u5174\u6587\u53BF","511529":"\u5C4F\u5C71\u53BF","511530":"\u5176\u5B83\u533A","511600":"\u5E7F\u5B89\u5E02","511602":"\u5E7F\u5B89\u533A","511603":"\u524D\u950B\u533A","511621":"\u5CB3\u6C60\u53BF","511622":"\u6B66\u80DC\u53BF","511623":"\u90BB\u6C34\u53BF","511681":"\u534E\u84E5\u5E02","511683":"\u5176\u5B83\u533A","511700":"\u8FBE\u5DDE\u5E02","511702":"\u901A\u5DDD\u533A","511721":"\u8FBE\u5DDD\u533A","511722":"\u5BA3\u6C49\u53BF","511723":"\u5F00\u6C5F\u53BF","511724":"\u5927\u7AF9\u53BF","511725":"\u6E20\u53BF","511781":"\u4E07\u6E90\u5E02","511782":"\u5176\u5B83\u533A","511800":"\u96C5\u5B89\u5E02","511802":"\u96E8\u57CE\u533A","511821":"\u540D\u5C71\u533A","511822":"\u8365\u7ECF\u53BF","511823":"\u6C49\u6E90\u53BF","511824":"\u77F3\u68C9\u53BF","511825":"\u5929\u5168\u53BF","511826":"\u82A6\u5C71\u53BF","511827":"\u5B9D\u5174\u53BF","511828":"\u5176\u5B83\u533A","511900":"\u5DF4\u4E2D\u5E02","511902":"\u5DF4\u5DDE\u533A","511903":"\u6069\u9633\u533A","511921":"\u901A\u6C5F\u53BF","511922":"\u5357\u6C5F\u53BF","511923":"\u5E73\u660C\u53BF","511924":"\u5176\u5B83\u533A","512000":"\u8D44\u9633\u5E02","512002":"\u96C1\u6C5F\u533A","512021":"\u5B89\u5CB3\u53BF","512022":"\u4E50\u81F3\u53BF","512081":"\u7B80\u9633\u5E02","512082":"\u5176\u5B83\u533A","513200":"\u963F\u575D\u85CF\u65CF\u7F8C\u65CF\u81EA\u6CBB\u5DDE","513221":"\u6C76\u5DDD\u53BF","513222":"\u7406\u53BF","513223":"\u8302\u53BF","513224":"\u677E\u6F58\u53BF","513225":"\u4E5D\u5BE8\u6C9F\u53BF","513226":"\u91D1\u5DDD\u53BF","513227":"\u5C0F\u91D1\u53BF","513228":"\u9ED1\u6C34\u53BF","513229":"\u9A6C\u5C14\u5EB7\u53BF","513230":"\u58E4\u5858\u53BF","513231":"\u963F\u575D\u53BF","513232":"\u82E5\u5C14\u76D6\u53BF","513233":"\u7EA2\u539F\u53BF","513234":"\u5176\u5B83\u533A","513300":"\u7518\u5B5C\u85CF\u65CF\u81EA\u6CBB\u5DDE","513321":"\u5EB7\u5B9A\u53BF","513322":"\u6CF8\u5B9A\u53BF","513323":"\u4E39\u5DF4\u53BF","513324":"\u4E5D\u9F99\u53BF","513325":"\u96C5\u6C5F\u53BF","513326":"\u9053\u5B5A\u53BF","513327":"\u7089\u970D\u53BF","513328":"\u7518\u5B5C\u53BF","513329":"\u65B0\u9F99\u53BF","513330":"\u5FB7\u683C\u53BF","513331":"\u767D\u7389\u53BF","513332":"\u77F3\u6E20\u53BF","513333":"\u8272\u8FBE\u53BF","513334":"\u7406\u5858\u53BF","513335":"\u5DF4\u5858\u53BF","513336":"\u4E61\u57CE\u53BF","513337":"\u7A3B\u57CE\u53BF","513338":"\u5F97\u8363\u53BF","513339":"\u5176\u5B83\u533A","513400":"\u51C9\u5C71\u5F5D\u65CF\u81EA\u6CBB\u5DDE","513401":"\u897F\u660C\u5E02","513422":"\u6728\u91CC\u85CF\u65CF\u81EA\u6CBB\u53BF","513423":"\u76D0\u6E90\u53BF","513424":"\u5FB7\u660C\u53BF","513425":"\u4F1A\u7406\u53BF","513426":"\u4F1A\u4E1C\u53BF","513427":"\u5B81\u5357\u53BF","513428":"\u666E\u683C\u53BF","513429":"\u5E03\u62D6\u53BF","513430":"\u91D1\u9633\u53BF","513431":"\u662D\u89C9\u53BF","513432":"\u559C\u5FB7\u53BF","513433":"\u5195\u5B81\u53BF","513434":"\u8D8A\u897F\u53BF","513435":"\u7518\u6D1B\u53BF","513436":"\u7F8E\u59D1\u53BF","513437":"\u96F7\u6CE2\u53BF","513438":"\u5176\u5B83\u533A","520000":"\u8D35\u5DDE\u7701","520100":"\u8D35\u9633\u5E02","520102":"\u5357\u660E\u533A","520103":"\u4E91\u5CA9\u533A","520111":"\u82B1\u6EAA\u533A","520112":"\u4E4C\u5F53\u533A","520113":"\u767D\u4E91\u533A","520121":"\u5F00\u9633\u53BF","520122":"\u606F\u70FD\u53BF","520123":"\u4FEE\u6587\u53BF","520151":"\u89C2\u5C71\u6E56\u533A","520181":"\u6E05\u9547\u5E02","520182":"\u5176\u5B83\u533A","520200":"\u516D\u76D8\u6C34\u5E02","520201":"\u949F\u5C71\u533A","520203":"\u516D\u679D\u7279\u533A","520221":"\u6C34\u57CE\u53BF","520222":"\u76D8\u53BF","520223":"\u5176\u5B83\u533A","520300":"\u9075\u4E49\u5E02","520302":"\u7EA2\u82B1\u5C97\u533A","520303":"\u6C47\u5DDD\u533A","520321":"\u9075\u4E49\u53BF","520322":"\u6850\u6893\u53BF","520323":"\u7EE5\u9633\u53BF","520324":"\u6B63\u5B89\u53BF","520325":"\u9053\u771F\u4EE1\u4F6C\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF","520326":"\u52A1\u5DDD\u4EE1\u4F6C\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF","520327":"\u51E4\u5188\u53BF","520328":"\u6E44\u6F6D\u53BF","520329":"\u4F59\u5E86\u53BF","520330":"\u4E60\u6C34\u53BF","520381":"\u8D64\u6C34\u5E02","520382":"\u4EC1\u6000\u5E02","520383":"\u5176\u5B83\u533A","520400":"\u5B89\u987A\u5E02","520402":"\u897F\u79C0\u533A","520421":"\u5E73\u575D\u53BF","520422":"\u666E\u5B9A\u53BF","520423":"\u9547\u5B81\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF","520424":"\u5173\u5CAD\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF","520425":"\u7D2B\u4E91\u82D7\u65CF\u5E03\u4F9D\u65CF\u81EA\u6CBB\u53BF","520426":"\u5176\u5B83\u533A","522200":"\u94DC\u4EC1\u5E02","522201":"\u78A7\u6C5F\u533A","522222":"\u6C5F\u53E3\u53BF","522223":"\u7389\u5C4F\u4F97\u65CF\u81EA\u6CBB\u53BF","522224":"\u77F3\u9621\u53BF","522225":"\u601D\u5357\u53BF","522226":"\u5370\u6C5F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF","522227":"\u5FB7\u6C5F\u53BF","522228":"\u6CBF\u6CB3\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF","522229":"\u677E\u6843\u82D7\u65CF\u81EA\u6CBB\u53BF","522230":"\u4E07\u5C71\u533A","522231":"\u5176\u5B83\u533A","522300":"\u9ED4\u897F\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE","522301":"\u5174\u4E49\u5E02","522322":"\u5174\u4EC1\u53BF","522323":"\u666E\u5B89\u53BF","522324":"\u6674\u9686\u53BF","522325":"\u8D1E\u4E30\u53BF","522326":"\u671B\u8C1F\u53BF","522327":"\u518C\u4EA8\u53BF","522328":"\u5B89\u9F99\u53BF","522329":"\u5176\u5B83\u533A","522400":"\u6BD5\u8282\u5E02","522401":"\u4E03\u661F\u5173\u533A","522422":"\u5927\u65B9\u53BF","522423":"\u9ED4\u897F\u53BF","522424":"\u91D1\u6C99\u53BF","522425":"\u7EC7\u91D1\u53BF","522426":"\u7EB3\u96CD\u53BF","522427":"\u5A01\u5B81\u5F5D\u65CF\u56DE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF","522428":"\u8D6B\u7AE0\u53BF","522429":"\u5176\u5B83\u533A","522600":"\u9ED4\u4E1C\u5357\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u5DDE","522601":"\u51EF\u91CC\u5E02","522622":"\u9EC4\u5E73\u53BF","522623":"\u65BD\u79C9\u53BF","522624":"\u4E09\u7A57\u53BF","522625":"\u9547\u8FDC\u53BF","522626":"\u5C91\u5DE9\u53BF","522627":"\u5929\u67F1\u53BF","522628":"\u9526\u5C4F\u53BF","522629":"\u5251\u6CB3\u53BF","522630":"\u53F0\u6C5F\u53BF","522631":"\u9ECE\u5E73\u53BF","522632":"\u6995\u6C5F\u53BF","522633":"\u4ECE\u6C5F\u53BF","522634":"\u96F7\u5C71\u53BF","522635":"\u9EBB\u6C5F\u53BF","522636":"\u4E39\u5BE8\u53BF","522637":"\u5176\u5B83\u533A","522700":"\u9ED4\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE","522701":"\u90FD\u5300\u5E02","522702":"\u798F\u6CC9\u5E02","522722":"\u8354\u6CE2\u53BF","522723":"\u8D35\u5B9A\u53BF","522725":"\u74EE\u5B89\u53BF","522726":"\u72EC\u5C71\u53BF","522727":"\u5E73\u5858\u53BF","522728":"\u7F57\u7538\u53BF","522729":"\u957F\u987A\u53BF","522730":"\u9F99\u91CC\u53BF","522731":"\u60E0\u6C34\u53BF","522732":"\u4E09\u90FD\u6C34\u65CF\u81EA\u6CBB\u53BF","522733":"\u5176\u5B83\u533A","530000":"\u4E91\u5357\u7701","530100":"\u6606\u660E\u5E02","530102":"\u4E94\u534E\u533A","530103":"\u76D8\u9F99\u533A","530111":"\u5B98\u6E21\u533A","530112":"\u897F\u5C71\u533A","530113":"\u4E1C\u5DDD\u533A","530121":"\u5448\u8D21\u533A","530122":"\u664B\u5B81\u53BF","530124":"\u5BCC\u6C11\u53BF","530125":"\u5B9C\u826F\u53BF","530126":"\u77F3\u6797\u5F5D\u65CF\u81EA\u6CBB\u53BF","530127":"\u5D69\u660E\u53BF","530128":"\u7984\u529D\u5F5D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF","530129":"\u5BFB\u7538\u56DE\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF","530181":"\u5B89\u5B81\u5E02","530182":"\u5176\u5B83\u533A","530300":"\u66F2\u9756\u5E02","530302":"\u9E92\u9E9F\u533A","530321":"\u9A6C\u9F99\u53BF","530322":"\u9646\u826F\u53BF","530323":"\u5E08\u5B97\u53BF","530324":"\u7F57\u5E73\u53BF","530325":"\u5BCC\u6E90\u53BF","530326":"\u4F1A\u6CFD\u53BF","530328":"\u6CBE\u76CA\u53BF","530381":"\u5BA3\u5A01\u5E02","530382":"\u5176\u5B83\u533A","530400":"\u7389\u6EAA\u5E02","530402":"\u7EA2\u5854\u533A","530421":"\u6C5F\u5DDD\u53BF","530422":"\u6F84\u6C5F\u53BF","530423":"\u901A\u6D77\u53BF","530424":"\u534E\u5B81\u53BF","530425":"\u6613\u95E8\u53BF","530426":"\u5CE8\u5C71\u5F5D\u65CF\u81EA\u6CBB\u53BF","530427":"\u65B0\u5E73\u5F5D\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF","530428":"\u5143\u6C5F\u54C8\u5C3C\u65CF\u5F5D\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF","530429":"\u5176\u5B83\u533A","530500":"\u4FDD\u5C71\u5E02","530502":"\u9686\u9633\u533A","530521":"\u65BD\u7538\u53BF","530522":"\u817E\u51B2\u53BF","530523":"\u9F99\u9675\u53BF","530524":"\u660C\u5B81\u53BF","530525":"\u5176\u5B83\u533A","530600":"\u662D\u901A\u5E02","530602":"\u662D\u9633\u533A","530621":"\u9C81\u7538\u53BF","530622":"\u5DE7\u5BB6\u53BF","530623":"\u76D0\u6D25\u53BF","530624":"\u5927\u5173\u53BF","530625":"\u6C38\u5584\u53BF","530626":"\u7EE5\u6C5F\u53BF","530627":"\u9547\u96C4\u53BF","530628":"\u5F5D\u826F\u53BF","530629":"\u5A01\u4FE1\u53BF","530630":"\u6C34\u5BCC\u53BF","530631":"\u5176\u5B83\u533A","530700":"\u4E3D\u6C5F\u5E02","530702":"\u53E4\u57CE\u533A","530721":"\u7389\u9F99\u7EB3\u897F\u65CF\u81EA\u6CBB\u53BF","530722":"\u6C38\u80DC\u53BF","530723":"\u534E\u576A\u53BF","530724":"\u5B81\u8497\u5F5D\u65CF\u81EA\u6CBB\u53BF","530725":"\u5176\u5B83\u533A","530800":"\u666E\u6D31\u5E02","530802":"\u601D\u8305\u533A","530821":"\u5B81\u6D31\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF","530822":"\u58A8\u6C5F\u54C8\u5C3C\u65CF\u81EA\u6CBB\u53BF","530823":"\u666F\u4E1C\u5F5D\u65CF\u81EA\u6CBB\u53BF","530824":"\u666F\u8C37\u50A3\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF","530825":"\u9547\u6C85\u5F5D\u65CF\u54C8\u5C3C\u65CF\u62C9\u795C\u65CF\u81EA\u6CBB\u53BF","530826":"\u6C5F\u57CE\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF","530827":"\u5B5F\u8FDE\u50A3\u65CF\u62C9\u795C\u65CF\u4F64\u65CF\u81EA\u6CBB\u53BF","530828":"\u6F9C\u6CA7\u62C9\u795C\u65CF\u81EA\u6CBB\u53BF","530829":"\u897F\u76DF\u4F64\u65CF\u81EA\u6CBB\u53BF","530830":"\u5176\u5B83\u533A","530900":"\u4E34\u6CA7\u5E02","530902":"\u4E34\u7FD4\u533A","530921":"\u51E4\u5E86\u53BF","530922":"\u4E91\u53BF","530923":"\u6C38\u5FB7\u53BF","530924":"\u9547\u5EB7\u53BF","530925":"\u53CC\u6C5F\u62C9\u795C\u65CF\u4F64\u65CF\u5E03\u6717\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF","530926":"\u803F\u9A6C\u50A3\u65CF\u4F64\u65CF\u81EA\u6CBB\u53BF","530927":"\u6CA7\u6E90\u4F64\u65CF\u81EA\u6CBB\u53BF","530928":"\u5176\u5B83\u533A","532300":"\u695A\u96C4\u5F5D\u65CF\u81EA\u6CBB\u5DDE","532301":"\u695A\u96C4\u5E02","532322":"\u53CC\u67CF\u53BF","532323":"\u725F\u5B9A\u53BF","532324":"\u5357\u534E\u53BF","532325":"\u59DA\u5B89\u53BF","532326":"\u5927\u59DA\u53BF","532327":"\u6C38\u4EC1\u53BF","532328":"\u5143\u8C0B\u53BF","532329":"\u6B66\u5B9A\u53BF","532331":"\u7984\u4E30\u53BF","532332":"\u5176\u5B83\u533A","532500":"\u7EA2\u6CB3\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u5DDE","532501":"\u4E2A\u65E7\u5E02","532502":"\u5F00\u8FDC\u5E02","532522":"\u8499\u81EA\u5E02","532523":"\u5C4F\u8FB9\u82D7\u65CF\u81EA\u6CBB\u53BF","532524":"\u5EFA\u6C34\u53BF","532525":"\u77F3\u5C4F\u53BF","532526":"\u5F25\u52D2\u5E02","532527":"\u6CF8\u897F\u53BF","532528":"\u5143\u9633\u53BF","532529":"\u7EA2\u6CB3\u53BF","532530":"\u91D1\u5E73\u82D7\u65CF\u7476\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF","532531":"\u7EFF\u6625\u53BF","532532":"\u6CB3\u53E3\u7476\u65CF\u81EA\u6CBB\u53BF","532533":"\u5176\u5B83\u533A","532600":"\u6587\u5C71\u58EE\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE","532621":"\u6587\u5C71\u5E02","532622":"\u781A\u5C71\u53BF","532623":"\u897F\u7574\u53BF","532624":"\u9EBB\u6817\u5761\u53BF","532625":"\u9A6C\u5173\u53BF","532626":"\u4E18\u5317\u53BF","532627":"\u5E7F\u5357\u53BF","532628":"\u5BCC\u5B81\u53BF","532629":"\u5176\u5B83\u533A","532800":"\u897F\u53CC\u7248\u7EB3\u50A3\u65CF\u81EA\u6CBB\u5DDE","532801":"\u666F\u6D2A\u5E02","532822":"\u52D0\u6D77\u53BF","532823":"\u52D0\u814A\u53BF","532824":"\u5176\u5B83\u533A","532900":"\u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE","532901":"\u5927\u7406\u5E02","532922":"\u6F3E\u6FDE\u5F5D\u65CF\u81EA\u6CBB\u53BF","532923":"\u7965\u4E91\u53BF","532924":"\u5BBE\u5DDD\u53BF","532925":"\u5F25\u6E21\u53BF","532926":"\u5357\u6DA7\u5F5D\u65CF\u81EA\u6CBB\u53BF","532927":"\u5DCD\u5C71\u5F5D\u65CF\u56DE\u65CF\u81EA\u6CBB\u53BF","532928":"\u6C38\u5E73\u53BF","532929":"\u4E91\u9F99\u53BF","532930":"\u6D31\u6E90\u53BF","532931":"\u5251\u5DDD\u53BF","532932":"\u9E64\u5E86\u53BF","532933":"\u5176\u5B83\u533A","533100":"\u5FB7\u5B8F\u50A3\u65CF\u666F\u9887\u65CF\u81EA\u6CBB\u5DDE","533102":"\u745E\u4E3D\u5E02","533103":"\u8292\u5E02","533122":"\u6881\u6CB3\u53BF","533123":"\u76C8\u6C5F\u53BF","533124":"\u9647\u5DDD\u53BF","533125":"\u5176\u5B83\u533A","533300":"\u6012\u6C5F\u5088\u50F3\u65CF\u81EA\u6CBB\u5DDE","533321":"\u6CF8\u6C34\u53BF","533323":"\u798F\u8D21\u53BF","533324":"\u8D21\u5C71\u72EC\u9F99\u65CF\u6012\u65CF\u81EA\u6CBB\u53BF","533325":"\u5170\u576A\u767D\u65CF\u666E\u7C73\u65CF\u81EA\u6CBB\u53BF","533326":"\u5176\u5B83\u533A","533400":"\u8FEA\u5E86\u85CF\u65CF\u81EA\u6CBB\u5DDE","533421":"\u9999\u683C\u91CC\u62C9\u53BF","533422":"\u5FB7\u94A6\u53BF","533423":"\u7EF4\u897F\u5088\u50F3\u65CF\u81EA\u6CBB\u53BF","533424":"\u5176\u5B83\u533A","540000":"\u897F\u85CF\u81EA\u6CBB\u533A","540100":"\u62C9\u8428\u5E02","540102":"\u57CE\u5173\u533A","540121":"\u6797\u5468\u53BF","540122":"\u5F53\u96C4\u53BF","540123":"\u5C3C\u6728\u53BF","540124":"\u66F2\u6C34\u53BF","540125":"\u5806\u9F99\u5FB7\u5E86\u53BF","540126":"\u8FBE\u5B5C\u53BF","540127":"\u58A8\u7AF9\u5DE5\u5361\u53BF","540128":"\u5176\u5B83\u533A","542100":"\u660C\u90FD\u5730\u533A","542121":"\u660C\u90FD\u53BF","542122":"\u6C5F\u8FBE\u53BF","542123":"\u8D21\u89C9\u53BF","542124":"\u7C7B\u4E4C\u9F50\u53BF","542125":"\u4E01\u9752\u53BF","542126":"\u5BDF\u96C5\u53BF","542127":"\u516B\u5BBF\u53BF","542128":"\u5DE6\u8D21\u53BF","542129":"\u8292\u5EB7\u53BF","542132":"\u6D1B\u9686\u53BF","542133":"\u8FB9\u575D\u53BF","542134":"\u5176\u5B83\u533A","542200":"\u5C71\u5357\u5730\u533A","542221":"\u4E43\u4E1C\u53BF","542222":"\u624E\u56CA\u53BF","542223":"\u8D21\u560E\u53BF","542224":"\u6851\u65E5\u53BF","542225":"\u743C\u7ED3\u53BF","542226":"\u66F2\u677E\u53BF","542227":"\u63AA\u7F8E\u53BF","542228":"\u6D1B\u624E\u53BF","542229":"\u52A0\u67E5\u53BF","542231":"\u9686\u5B50\u53BF","542232":"\u9519\u90A3\u53BF","542233":"\u6D6A\u5361\u5B50\u53BF","542234":"\u5176\u5B83\u533A","542300":"\u65E5\u5580\u5219\u5730\u533A","542301":"\u65E5\u5580\u5219\u5E02","542322":"\u5357\u6728\u6797\u53BF","542323":"\u6C5F\u5B5C\u53BF","542324":"\u5B9A\u65E5\u53BF","542325":"\u8428\u8FE6\u53BF","542326":"\u62C9\u5B5C\u53BF","542327":"\u6602\u4EC1\u53BF","542328":"\u8C22\u901A\u95E8\u53BF","542329":"\u767D\u6717\u53BF","542330":"\u4EC1\u5E03\u53BF","542331":"\u5EB7\u9A6C\u53BF","542332":"\u5B9A\u7ED3\u53BF","542333":"\u4EF2\u5DF4\u53BF","542334":"\u4E9A\u4E1C\u53BF","542335":"\u5409\u9686\u53BF","542336":"\u8042\u62C9\u6728\u53BF","542337":"\u8428\u560E\u53BF","542338":"\u5C97\u5DF4\u53BF","542339":"\u5176\u5B83\u533A","542400":"\u90A3\u66F2\u5730\u533A","542421":"\u90A3\u66F2\u53BF","542422":"\u5609\u9ECE\u53BF","542423":"\u6BD4\u5982\u53BF","542424":"\u8042\u8363\u53BF","542425":"\u5B89\u591A\u53BF","542426":"\u7533\u624E\u53BF","542427":"\u7D22\u53BF","542428":"\u73ED\u6208\u53BF","542429":"\u5DF4\u9752\u53BF","542430":"\u5C3C\u739B\u53BF","542431":"\u5176\u5B83\u533A","542432":"\u53CC\u6E56\u53BF","542500":"\u963F\u91CC\u5730\u533A","542521":"\u666E\u5170\u53BF","542522":"\u672D\u8FBE\u53BF","542523":"\u5676\u5C14\u53BF","542524":"\u65E5\u571F\u53BF","542525":"\u9769\u5409\u53BF","542526":"\u6539\u5219\u53BF","542527":"\u63AA\u52E4\u53BF","542528":"\u5176\u5B83\u533A","542600":"\u6797\u829D\u5730\u533A","542621":"\u6797\u829D\u53BF","542622":"\u5DE5\u5E03\u6C5F\u8FBE\u53BF","542623":"\u7C73\u6797\u53BF","542624":"\u58A8\u8131\u53BF","542625":"\u6CE2\u5BC6\u53BF","542626":"\u5BDF\u9685\u53BF","542627":"\u6717\u53BF","542628":"\u5176\u5B83\u533A","610000":"\u9655\u897F\u7701","610100":"\u897F\u5B89\u5E02","610102":"\u65B0\u57CE\u533A","610103":"\u7891\u6797\u533A","610104":"\u83B2\u6E56\u533A","610111":"\u705E\u6865\u533A","610112":"\u672A\u592E\u533A","610113":"\u96C1\u5854\u533A","610114":"\u960E\u826F\u533A","610115":"\u4E34\u6F7C\u533A","610116":"\u957F\u5B89\u533A","610122":"\u84DD\u7530\u53BF","610124":"\u5468\u81F3\u53BF","610125":"\u6237\u53BF","610126":"\u9AD8\u9675\u53BF","610127":"\u5176\u5B83\u533A","610200":"\u94DC\u5DDD\u5E02","610202":"\u738B\u76CA\u533A","610203":"\u5370\u53F0\u533A","610204":"\u8000\u5DDE\u533A","610222":"\u5B9C\u541B\u53BF","610223":"\u5176\u5B83\u533A","610300":"\u5B9D\u9E21\u5E02","610302":"\u6E2D\u6EE8\u533A","610303":"\u91D1\u53F0\u533A","610304":"\u9648\u4ED3\u533A","610322":"\u51E4\u7FD4\u53BF","610323":"\u5C90\u5C71\u53BF","610324":"\u6276\u98CE\u53BF","610326":"\u7709\u53BF","610327":"\u9647\u53BF","610328":"\u5343\u9633\u53BF","610329":"\u9E9F\u6E38\u53BF","610330":"\u51E4\u53BF","610331":"\u592A\u767D\u53BF","610332":"\u5176\u5B83\u533A","610400":"\u54B8\u9633\u5E02","610402":"\u79E6\u90FD\u533A","610403":"\u6768\u9675\u533A","610404":"\u6E2D\u57CE\u533A","610422":"\u4E09\u539F\u53BF","610423":"\u6CFE\u9633\u53BF","610424":"\u4E7E\u53BF","610425":"\u793C\u6CC9\u53BF","610426":"\u6C38\u5BFF\u53BF","610427":"\u5F6C\u53BF","610428":"\u957F\u6B66\u53BF","610429":"\u65EC\u9091\u53BF","610430":"\u6DF3\u5316\u53BF","610431":"\u6B66\u529F\u53BF","610481":"\u5174\u5E73\u5E02","610482":"\u5176\u5B83\u533A","610500":"\u6E2D\u5357\u5E02","610502":"\u4E34\u6E2D\u533A","610521":"\u534E\u53BF","610522":"\u6F7C\u5173\u53BF","610523":"\u5927\u8354\u53BF","610524":"\u5408\u9633\u53BF","610525":"\u6F84\u57CE\u53BF","610526":"\u84B2\u57CE\u53BF","610527":"\u767D\u6C34\u53BF","610528":"\u5BCC\u5E73\u53BF","610581":"\u97E9\u57CE\u5E02","610582":"\u534E\u9634\u5E02","610583":"\u5176\u5B83\u533A","610600":"\u5EF6\u5B89\u5E02","610602":"\u5B9D\u5854\u533A","610621":"\u5EF6\u957F\u53BF","610622":"\u5EF6\u5DDD\u53BF","610623":"\u5B50\u957F\u53BF","610624":"\u5B89\u585E\u53BF","610625":"\u5FD7\u4E39\u53BF","610626":"\u5434\u8D77\u53BF","610627":"\u7518\u6CC9\u53BF","610628":"\u5BCC\u53BF","610629":"\u6D1B\u5DDD\u53BF","610630":"\u5B9C\u5DDD\u53BF","610631":"\u9EC4\u9F99\u53BF","610632":"\u9EC4\u9675\u53BF","610633":"\u5176\u5B83\u533A","610700":"\u6C49\u4E2D\u5E02","610702":"\u6C49\u53F0\u533A","610721":"\u5357\u90D1\u53BF","610722":"\u57CE\u56FA\u53BF","610723":"\u6D0B\u53BF","610724":"\u897F\u4E61\u53BF","610725":"\u52C9\u53BF","610726":"\u5B81\u5F3A\u53BF","610727":"\u7565\u9633\u53BF","610728":"\u9547\u5DF4\u53BF","610729":"\u7559\u575D\u53BF","610730":"\u4F5B\u576A\u53BF","610731":"\u5176\u5B83\u533A","610800":"\u6986\u6797\u5E02","610802":"\u6986\u9633\u533A","610821":"\u795E\u6728\u53BF","610822":"\u5E9C\u8C37\u53BF","610823":"\u6A2A\u5C71\u53BF","610824":"\u9756\u8FB9\u53BF","610825":"\u5B9A\u8FB9\u53BF","610826":"\u7EE5\u5FB7\u53BF","610827":"\u7C73\u8102\u53BF","610828":"\u4F73\u53BF","610829":"\u5434\u5821\u53BF","610830":"\u6E05\u6DA7\u53BF","610831":"\u5B50\u6D32\u53BF","610832":"\u5176\u5B83\u533A","610900":"\u5B89\u5EB7\u5E02","610902":"\u6C49\u6EE8\u533A","610921":"\u6C49\u9634\u53BF","610922":"\u77F3\u6CC9\u53BF","610923":"\u5B81\u9655\u53BF","610924":"\u7D2B\u9633\u53BF","610925":"\u5C9A\u768B\u53BF","610926":"\u5E73\u5229\u53BF","610927":"\u9547\u576A\u53BF","610928":"\u65EC\u9633\u53BF","610929":"\u767D\u6CB3\u53BF","610930":"\u5176\u5B83\u533A","611000":"\u5546\u6D1B\u5E02","611002":"\u5546\u5DDE\u533A","611021":"\u6D1B\u5357\u53BF","611022":"\u4E39\u51E4\u53BF","611023":"\u5546\u5357\u53BF","611024":"\u5C71\u9633\u53BF","611025":"\u9547\u5B89\u53BF","611026":"\u67DE\u6C34\u53BF","611027":"\u5176\u5B83\u533A","620000":"\u7518\u8083\u7701","620100":"\u5170\u5DDE\u5E02","620102":"\u57CE\u5173\u533A","620103":"\u4E03\u91CC\u6CB3\u533A","620104":"\u897F\u56FA\u533A","620105":"\u5B89\u5B81\u533A","620111":"\u7EA2\u53E4\u533A","620121":"\u6C38\u767B\u53BF","620122":"\u768B\u5170\u53BF","620123":"\u6986\u4E2D\u53BF","620124":"\u5176\u5B83\u533A","620200":"\u5609\u5CEA\u5173\u5E02","620300":"\u91D1\u660C\u5E02","620302":"\u91D1\u5DDD\u533A","620321":"\u6C38\u660C\u53BF","620322":"\u5176\u5B83\u533A","620400":"\u767D\u94F6\u5E02","620402":"\u767D\u94F6\u533A","620403":"\u5E73\u5DDD\u533A","620421":"\u9756\u8FDC\u53BF","620422":"\u4F1A\u5B81\u53BF","620423":"\u666F\u6CF0\u53BF","620424":"\u5176\u5B83\u533A","620500":"\u5929\u6C34\u5E02","620502":"\u79E6\u5DDE\u533A","620503":"\u9EA6\u79EF\u533A","620521":"\u6E05\u6C34\u53BF","620522":"\u79E6\u5B89\u53BF","620523":"\u7518\u8C37\u53BF","620524":"\u6B66\u5C71\u53BF","620525":"\u5F20\u5BB6\u5DDD\u56DE\u65CF\u81EA\u6CBB\u53BF","620526":"\u5176\u5B83\u533A","620600":"\u6B66\u5A01\u5E02","620602":"\u51C9\u5DDE\u533A","620621":"\u6C11\u52E4\u53BF","620622":"\u53E4\u6D6A\u53BF","620623":"\u5929\u795D\u85CF\u65CF\u81EA\u6CBB\u53BF","620624":"\u5176\u5B83\u533A","620700":"\u5F20\u6396\u5E02","620702":"\u7518\u5DDE\u533A","620721":"\u8083\u5357\u88D5\u56FA\u65CF\u81EA\u6CBB\u53BF","620722":"\u6C11\u4E50\u53BF","620723":"\u4E34\u6CFD\u53BF","620724":"\u9AD8\u53F0\u53BF","620725":"\u5C71\u4E39\u53BF","620726":"\u5176\u5B83\u533A","620800":"\u5E73\u51C9\u5E02","620802":"\u5D06\u5CD2\u533A","620821":"\u6CFE\u5DDD\u53BF","620822":"\u7075\u53F0\u53BF","620823":"\u5D07\u4FE1\u53BF","620824":"\u534E\u4EAD\u53BF","620825":"\u5E84\u6D6A\u53BF","620826":"\u9759\u5B81\u53BF","620827":"\u5176\u5B83\u533A","620900":"\u9152\u6CC9\u5E02","620902":"\u8083\u5DDE\u533A","620921":"\u91D1\u5854\u53BF","620922":"\u74DC\u5DDE\u53BF","620923":"\u8083\u5317\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF","620924":"\u963F\u514B\u585E\u54C8\u8428\u514B\u65CF\u81EA\u6CBB\u53BF","620981":"\u7389\u95E8\u5E02","620982":"\u6566\u714C\u5E02","620983":"\u5176\u5B83\u533A","621000":"\u5E86\u9633\u5E02","621002":"\u897F\u5CF0\u533A","621021":"\u5E86\u57CE\u53BF","621022":"\u73AF\u53BF","621023":"\u534E\u6C60\u53BF","621024":"\u5408\u6C34\u53BF","621025":"\u6B63\u5B81\u53BF","621026":"\u5B81\u53BF","621027":"\u9547\u539F\u53BF","621028":"\u5176\u5B83\u533A","621100":"\u5B9A\u897F\u5E02","621102":"\u5B89\u5B9A\u533A","621121":"\u901A\u6E2D\u53BF","621122":"\u9647\u897F\u53BF","621123":"\u6E2D\u6E90\u53BF","621124":"\u4E34\u6D2E\u53BF","621125":"\u6F33\u53BF","621126":"\u5CB7\u53BF","621127":"\u5176\u5B83\u533A","621200":"\u9647\u5357\u5E02","621202":"\u6B66\u90FD\u533A","621221":"\u6210\u53BF","621222":"\u6587\u53BF","621223":"\u5B95\u660C\u53BF","621224":"\u5EB7\u53BF","621225":"\u897F\u548C\u53BF","621226":"\u793C\u53BF","621227":"\u5FBD\u53BF","621228":"\u4E24\u5F53\u53BF","621229":"\u5176\u5B83\u533A","622900":"\u4E34\u590F\u56DE\u65CF\u81EA\u6CBB\u5DDE","622901":"\u4E34\u590F\u5E02","622921":"\u4E34\u590F\u53BF","622922":"\u5EB7\u4E50\u53BF","622923":"\u6C38\u9756\u53BF","622924":"\u5E7F\u6CB3\u53BF","622925":"\u548C\u653F\u53BF","622926":"\u4E1C\u4E61\u65CF\u81EA\u6CBB\u53BF","622927":"\u79EF\u77F3\u5C71\u4FDD\u5B89\u65CF\u4E1C\u4E61\u65CF\u6492\u62C9\u65CF\u81EA\u6CBB\u53BF","622928":"\u5176\u5B83\u533A","623000":"\u7518\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE","623001":"\u5408\u4F5C\u5E02","623021":"\u4E34\u6F6D\u53BF","623022":"\u5353\u5C3C\u53BF","623023":"\u821F\u66F2\u53BF","623024":"\u8FED\u90E8\u53BF","623025":"\u739B\u66F2\u53BF","623026":"\u788C\u66F2\u53BF","623027":"\u590F\u6CB3\u53BF","623028":"\u5176\u5B83\u533A","630000":"\u9752\u6D77\u7701","630100":"\u897F\u5B81\u5E02","630102":"\u57CE\u4E1C\u533A","630103":"\u57CE\u4E2D\u533A","630104":"\u57CE\u897F\u533A","630105":"\u57CE\u5317\u533A","630121":"\u5927\u901A\u56DE\u65CF\u571F\u65CF\u81EA\u6CBB\u53BF","630122":"\u6E5F\u4E2D\u53BF","630123":"\u6E5F\u6E90\u53BF","630124":"\u5176\u5B83\u533A","632100":"\u6D77\u4E1C\u5E02","632121":"\u5E73\u5B89\u53BF","632122":"\u6C11\u548C\u56DE\u65CF\u571F\u65CF\u81EA\u6CBB\u53BF","632123":"\u4E50\u90FD\u533A","632126":"\u4E92\u52A9\u571F\u65CF\u81EA\u6CBB\u53BF","632127":"\u5316\u9686\u56DE\u65CF\u81EA\u6CBB\u53BF","632128":"\u5FAA\u5316\u6492\u62C9\u65CF\u81EA\u6CBB\u53BF","632129":"\u5176\u5B83\u533A","632200":"\u6D77\u5317\u85CF\u65CF\u81EA\u6CBB\u5DDE","632221":"\u95E8\u6E90\u56DE\u65CF\u81EA\u6CBB\u53BF","632222":"\u7941\u8FDE\u53BF","632223":"\u6D77\u664F\u53BF","632224":"\u521A\u5BDF\u53BF","632225":"\u5176\u5B83\u533A","632300":"\u9EC4\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE","632321":"\u540C\u4EC1\u53BF","632322":"\u5C16\u624E\u53BF","632323":"\u6CFD\u5E93\u53BF","632324":"\u6CB3\u5357\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF","632325":"\u5176\u5B83\u533A","632500":"\u6D77\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE","632521":"\u5171\u548C\u53BF","632522":"\u540C\u5FB7\u53BF","632523":"\u8D35\u5FB7\u53BF","632524":"\u5174\u6D77\u53BF","632525":"\u8D35\u5357\u53BF","632526":"\u5176\u5B83\u533A","632600":"\u679C\u6D1B\u85CF\u65CF\u81EA\u6CBB\u5DDE","632621":"\u739B\u6C81\u53BF","632622":"\u73ED\u739B\u53BF","632623":"\u7518\u5FB7\u53BF","632624":"\u8FBE\u65E5\u53BF","632625":"\u4E45\u6CBB\u53BF","632626":"\u739B\u591A\u53BF","632627":"\u5176\u5B83\u533A","632700":"\u7389\u6811\u85CF\u65CF\u81EA\u6CBB\u5DDE","632721":"\u7389\u6811\u5E02","632722":"\u6742\u591A\u53BF","632723":"\u79F0\u591A\u53BF","632724":"\u6CBB\u591A\u53BF","632725":"\u56CA\u8C26\u53BF","632726":"\u66F2\u9EBB\u83B1\u53BF","632727":"\u5176\u5B83\u533A","632800":"\u6D77\u897F\u8499\u53E4\u65CF\u85CF\u65CF\u81EA\u6CBB\u5DDE","632801":"\u683C\u5C14\u6728\u5E02","632802":"\u5FB7\u4EE4\u54C8\u5E02","632821":"\u4E4C\u5170\u53BF","632822":"\u90FD\u5170\u53BF","632823":"\u5929\u5CFB\u53BF","632824":"\u5176\u5B83\u533A","640000":"\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A","640100":"\u94F6\u5DDD\u5E02","640104":"\u5174\u5E86\u533A","640105":"\u897F\u590F\u533A","640106":"\u91D1\u51E4\u533A","640121":"\u6C38\u5B81\u53BF","640122":"\u8D3A\u5170\u53BF","640181":"\u7075\u6B66\u5E02","640182":"\u5176\u5B83\u533A","640200":"\u77F3\u5634\u5C71\u5E02","640202":"\u5927\u6B66\u53E3\u533A","640205":"\u60E0\u519C\u533A","640221":"\u5E73\u7F57\u53BF","640222":"\u5176\u5B83\u533A","640300":"\u5434\u5FE0\u5E02","640302":"\u5229\u901A\u533A","640303":"\u7EA2\u5BFA\u5821\u533A","640323":"\u76D0\u6C60\u53BF","640324":"\u540C\u5FC3\u53BF","640381":"\u9752\u94DC\u5CE1\u5E02","640382":"\u5176\u5B83\u533A","640400":"\u56FA\u539F\u5E02","640402":"\u539F\u5DDE\u533A","640422":"\u897F\u5409\u53BF","640423":"\u9686\u5FB7\u53BF","640424":"\u6CFE\u6E90\u53BF","640425":"\u5F6D\u9633\u53BF","640426":"\u5176\u5B83\u533A","640500":"\u4E2D\u536B\u5E02","640502":"\u6C99\u5761\u5934\u533A","640521":"\u4E2D\u5B81\u53BF","640522":"\u6D77\u539F\u53BF","640523":"\u5176\u5B83\u533A","650000":"\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A","650100":"\u4E4C\u9C81\u6728\u9F50\u5E02","650102":"\u5929\u5C71\u533A","650103":"\u6C99\u4F9D\u5DF4\u514B\u533A","650104":"\u65B0\u5E02\u533A","650105":"\u6C34\u78E8\u6C9F\u533A","650106":"\u5934\u5C6F\u6CB3\u533A","650107":"\u8FBE\u5742\u57CE\u533A","650109":"\u7C73\u4E1C\u533A","650121":"\u4E4C\u9C81\u6728\u9F50\u53BF","650122":"\u5176\u5B83\u533A","650200":"\u514B\u62C9\u739B\u4F9D\u5E02","650202":"\u72EC\u5C71\u5B50\u533A","650203":"\u514B\u62C9\u739B\u4F9D\u533A","650204":"\u767D\u78B1\u6EE9\u533A","650205":"\u4E4C\u5C14\u79BE\u533A","650206":"\u5176\u5B83\u533A","652100":"\u5410\u9C81\u756A\u5730\u533A","652101":"\u5410\u9C81\u756A\u5E02","652122":"\u912F\u5584\u53BF","652123":"\u6258\u514B\u900A\u53BF","652124":"\u5176\u5B83\u533A","652200":"\u54C8\u5BC6\u5730\u533A","652201":"\u54C8\u5BC6\u5E02","652222":"\u5DF4\u91CC\u5764\u54C8\u8428\u514B\u81EA\u6CBB\u53BF","652223":"\u4F0A\u543E\u53BF","652224":"\u5176\u5B83\u533A","652300":"\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE","652301":"\u660C\u5409\u5E02","652302":"\u961C\u5EB7\u5E02","652323":"\u547C\u56FE\u58C1\u53BF","652324":"\u739B\u7EB3\u65AF\u53BF","652325":"\u5947\u53F0\u53BF","652327":"\u5409\u6728\u8428\u5C14\u53BF","652328":"\u6728\u5792\u54C8\u8428\u514B\u81EA\u6CBB\u53BF","652329":"\u5176\u5B83\u533A","652700":"\u535A\u5C14\u5854\u62C9\u8499\u53E4\u81EA\u6CBB\u5DDE","652701":"\u535A\u4E50\u5E02","652702":"\u963F\u62C9\u5C71\u53E3\u5E02","652722":"\u7CBE\u6CB3\u53BF","652723":"\u6E29\u6CC9\u53BF","652724":"\u5176\u5B83\u533A","652800":"\u5DF4\u97F3\u90ED\u695E\u8499\u53E4\u81EA\u6CBB\u5DDE","652801":"\u5E93\u5C14\u52D2\u5E02","652822":"\u8F6E\u53F0\u53BF","652823":"\u5C09\u7281\u53BF","652824":"\u82E5\u7F8C\u53BF","652825":"\u4E14\u672B\u53BF","652826":"\u7109\u8006\u56DE\u65CF\u81EA\u6CBB\u53BF","652827":"\u548C\u9759\u53BF","652828":"\u548C\u7855\u53BF","652829":"\u535A\u6E56\u53BF","652830":"\u5176\u5B83\u533A","652900":"\u963F\u514B\u82CF\u5730\u533A","652901":"\u963F\u514B\u82CF\u5E02","652922":"\u6E29\u5BBF\u53BF","652923":"\u5E93\u8F66\u53BF","652924":"\u6C99\u96C5\u53BF","652925":"\u65B0\u548C\u53BF","652926":"\u62DC\u57CE\u53BF","652927":"\u4E4C\u4EC0\u53BF","652928":"\u963F\u74E6\u63D0\u53BF","652929":"\u67EF\u576A\u53BF","652930":"\u5176\u5B83\u533A","653000":"\u514B\u5B5C\u52D2\u82CF\u67EF\u5C14\u514B\u5B5C\u81EA\u6CBB\u5DDE","653001":"\u963F\u56FE\u4EC0\u5E02","653022":"\u963F\u514B\u9676\u53BF","653023":"\u963F\u5408\u5947\u53BF","653024":"\u4E4C\u6070\u53BF","653025":"\u5176\u5B83\u533A","653100":"\u5580\u4EC0\u5730\u533A","653101":"\u5580\u4EC0\u5E02","653121":"\u758F\u9644\u53BF","653122":"\u758F\u52D2\u53BF","653123":"\u82F1\u5409\u6C99\u53BF","653124":"\u6CFD\u666E\u53BF","653125":"\u838E\u8F66\u53BF","653126":"\u53F6\u57CE\u53BF","653127":"\u9EA6\u76D6\u63D0\u53BF","653128":"\u5CB3\u666E\u6E56\u53BF","653129":"\u4F3D\u5E08\u53BF","653130":"\u5DF4\u695A\u53BF","653131":"\u5854\u4EC0\u5E93\u5C14\u5E72\u5854\u5409\u514B\u81EA\u6CBB\u53BF","653132":"\u5176\u5B83\u533A","653200":"\u548C\u7530\u5730\u533A","653201":"\u548C\u7530\u5E02","653221":"\u548C\u7530\u53BF","653222":"\u58A8\u7389\u53BF","653223":"\u76AE\u5C71\u53BF","653224":"\u6D1B\u6D66\u53BF","653225":"\u7B56\u52D2\u53BF","653226":"\u4E8E\u7530\u53BF","653227":"\u6C11\u4E30\u53BF","653228":"\u5176\u5B83\u533A","654000":"\u4F0A\u7281\u54C8\u8428\u514B\u81EA\u6CBB\u5DDE","654002":"\u4F0A\u5B81\u5E02","654003":"\u594E\u5C6F\u5E02","654021":"\u4F0A\u5B81\u53BF","654022":"\u5BDF\u5E03\u67E5\u5C14\u9521\u4F2F\u81EA\u6CBB\u53BF","654023":"\u970D\u57CE\u53BF","654024":"\u5DE9\u7559\u53BF","654025":"\u65B0\u6E90\u53BF","654026":"\u662D\u82CF\u53BF","654027":"\u7279\u514B\u65AF\u53BF","654028":"\u5C3C\u52D2\u514B\u53BF","654029":"\u5176\u5B83\u533A","654200":"\u5854\u57CE\u5730\u533A","654201":"\u5854\u57CE\u5E02","654202":"\u4E4C\u82CF\u5E02","654221":"\u989D\u654F\u53BF","654223":"\u6C99\u6E7E\u53BF","654224":"\u6258\u91CC\u53BF","654225":"\u88D5\u6C11\u53BF","654226":"\u548C\u5E03\u514B\u8D5B\u5C14\u8499\u53E4\u81EA\u6CBB\u53BF","654227":"\u5176\u5B83\u533A","654300":"\u963F\u52D2\u6CF0\u5730\u533A","654301":"\u963F\u52D2\u6CF0\u5E02","654321":"\u5E03\u5C14\u6D25\u53BF","654322":"\u5BCC\u8574\u53BF","654323":"\u798F\u6D77\u53BF","654324":"\u54C8\u5DF4\u6CB3\u53BF","654325":"\u9752\u6CB3\u53BF","654326":"\u5409\u6728\u4E43\u53BF","654327":"\u5176\u5B83\u533A","659001":"\u77F3\u6CB3\u5B50\u5E02","659002":"\u963F\u62C9\u5C14\u5E02","659003":"\u56FE\u6728\u8212\u514B\u5E02","659004":"\u4E94\u5BB6\u6E20\u5E02","710000":"\u53F0\u6E7E","710100":"\u53F0\u5317\u5E02","710101":"\u4E2D\u6B63\u533A","710102":"\u5927\u540C\u533A","710103":"\u4E2D\u5C71\u533A","710104":"\u677E\u5C71\u533A","710105":"\u5927\u5B89\u533A","710106":"\u4E07\u534E\u533A","710107":"\u4FE1\u4E49\u533A","710108":"\u58EB\u6797\u533A","710109":"\u5317\u6295\u533A","710110":"\u5185\u6E56\u533A","710111":"\u5357\u6E2F\u533A","710112":"\u6587\u5C71\u533A","710113":"\u5176\u5B83\u533A","710200":"\u9AD8\u96C4\u5E02","710201":"\u65B0\u5174\u533A","710202":"\u524D\u91D1\u533A","710203":"\u82A9\u96C5\u533A","710204":"\u76D0\u57D5\u533A","710205":"\u9F13\u5C71\u533A","710206":"\u65D7\u6D25\u533A","710207":"\u524D\u9547\u533A","710208":"\u4E09\u6C11\u533A","710209":"\u5DE6\u8425\u533A","710210":"\u6960\u6893\u533A","710211":"\u5C0F\u6E2F\u533A","710212":"\u5176\u5B83\u533A","710241":"\u82D3\u96C5\u533A","710242":"\u4EC1\u6B66\u533A","710243":"\u5927\u793E\u533A","710244":"\u5188\u5C71\u533A","710245":"\u8DEF\u7AF9\u533A","710246":"\u963F\u83B2\u533A","710247":"\u7530\u5BEE\u533A","710248":"\u71D5\u5DE2\u533A","710249":"\u6865\u5934\u533A","710250":"\u6893\u5B98\u533A","710251":"\u5F25\u9640\u533A","710252":"\u6C38\u5B89\u533A","710253":"\u6E56\u5185\u533A","710254":"\u51E4\u5C71\u533A","710255":"\u5927\u5BEE\u533A","710256":"\u6797\u56ED\u533A","710257":"\u9E1F\u677E\u533A","710258":"\u5927\u6811\u533A","710259":"\u65D7\u5C71\u533A","710260":"\u7F8E\u6D53\u533A","710261":"\u516D\u9F9F\u533A","710262":"\u5185\u95E8\u533A","710263":"\u6749\u6797\u533A","710264":"\u7532\u4ED9\u533A","710265":"\u6843\u6E90\u533A","710266":"\u90A3\u739B\u590F\u533A","710267":"\u8302\u6797\u533A","710268":"\u8304\u8423\u533A","710300":"\u53F0\u5357\u5E02","710301":"\u4E2D\u897F\u533A","710302":"\u4E1C\u533A","710303":"\u5357\u533A","710304":"\u5317\u533A","710305":"\u5B89\u5E73\u533A","710306":"\u5B89\u5357\u533A","710307":"\u5176\u5B83\u533A","710339":"\u6C38\u5EB7\u533A","710340":"\u5F52\u4EC1\u533A","710341":"\u65B0\u5316\u533A","710342":"\u5DE6\u9547\u533A","710343":"\u7389\u4E95\u533A","710344":"\u6960\u897F\u533A","710345":"\u5357\u5316\u533A","710346":"\u4EC1\u5FB7\u533A","710347":"\u5173\u5E99\u533A","710348":"\u9F99\u5D0E\u533A","710349":"\u5B98\u7530\u533A","710350":"\u9EBB\u8C46\u533A","710351":"\u4F73\u91CC\u533A","710352":"\u897F\u6E2F\u533A","710353":"\u4E03\u80A1\u533A","710354":"\u5C06\u519B\u533A","710355":"\u5B66\u7532\u533A","710356":"\u5317\u95E8\u533A","710357":"\u65B0\u8425\u533A","710358":"\u540E\u58C1\u533A","710359":"\u767D\u6CB3\u533A","710360":"\u4E1C\u5C71\u533A","710361":"\u516D\u7532\u533A","710362":"\u4E0B\u8425\u533A","710363":"\u67F3\u8425\u533A","710364":"\u76D0\u6C34\u533A","710365":"\u5584\u5316\u533A","710366":"\u5927\u5185\u533A","710367":"\u5C71\u4E0A\u533A","710368":"\u65B0\u5E02\u533A","710369":"\u5B89\u5B9A\u533A","710400":"\u53F0\u4E2D\u5E02","710401":"\u4E2D\u533A","710402":"\u4E1C\u533A","710403":"\u5357\u533A","710404":"\u897F\u533A","710405":"\u5317\u533A","710406":"\u5317\u5C6F\u533A","710407":"\u897F\u5C6F\u533A","710408":"\u5357\u5C6F\u533A","710409":"\u5176\u5B83\u533A","710431":"\u592A\u5E73\u533A","710432":"\u5927\u91CC\u533A","710433":"\u96FE\u5CF0\u533A","710434":"\u4E4C\u65E5\u533A","710435":"\u4E30\u539F\u533A","710436":"\u540E\u91CC\u533A","710437":"\u77F3\u5188\u533A","710438":"\u4E1C\u52BF\u533A","710439":"\u548C\u5E73\u533A","710440":"\u65B0\u793E\u533A","710441":"\u6F6D\u5B50\u533A","710442":"\u5927\u96C5\u533A","710443":"\u795E\u5188\u533A","710444":"\u5927\u809A\u533A","710445":"\u6C99\u9E7F\u533A","710446":"\u9F99\u4E95\u533A","710447":"\u68A7\u6816\u533A","710448":"\u6E05\u6C34\u533A","710449":"\u5927\u7532\u533A","710450":"\u5916\u57D4\u533A","710451":"\u5927\u5B89\u533A","710500":"\u91D1\u95E8\u53BF","710507":"\u91D1\u6C99\u9547","710508":"\u91D1\u6E56\u9547","710509":"\u91D1\u5B81\u4E61","710510":"\u91D1\u57CE\u9547","710511":"\u70C8\u5C7F\u4E61","710512":"\u4E4C\u5775\u4E61","710600":"\u5357\u6295\u53BF","710614":"\u5357\u6295\u5E02","710615":"\u4E2D\u5BEE\u4E61","710616":"\u8349\u5C6F\u9547","710617":"\u56FD\u59D3\u4E61","710618":"\u57D4\u91CC\u9547","710619":"\u4EC1\u7231\u4E61","710620":"\u540D\u95F4\u4E61","710621":"\u96C6\u96C6\u9547","710622":"\u6C34\u91CC\u4E61","710623":"\u9C7C\u6C60\u4E61","710624":"\u4FE1\u4E49\u4E61","710625":"\u7AF9\u5C71\u9547","710626":"\u9E7F\u8C37\u4E61","710700":"\u57FA\u9686\u5E02","710701":"\u4EC1\u7231\u533A","710702":"\u4FE1\u4E49\u533A","710703":"\u4E2D\u6B63\u533A","710704":"\u4E2D\u5C71\u533A","710705":"\u5B89\u4E50\u533A","710706":"\u6696\u6696\u533A","710707":"\u4E03\u5835\u533A","710708":"\u5176\u5B83\u533A","710800":"\u65B0\u7AF9\u5E02","710801":"\u4E1C\u533A","710802":"\u5317\u533A","710803":"\u9999\u5C71\u533A","710804":"\u5176\u5B83\u533A","710900":"\u5609\u4E49\u5E02","710901":"\u4E1C\u533A","710902":"\u897F\u533A","710903":"\u5176\u5B83\u533A","711100":"\u65B0\u5317\u5E02","711130":"\u4E07\u91CC\u533A","711131":"\u91D1\u5C71\u533A","711132":"\u677F\u6865\u533A","711133":"\u6C50\u6B62\u533A","711134":"\u6DF1\u5751\u533A","711135":"\u77F3\u7887\u533A","711136":"\u745E\u82B3\u533A","711137":"\u5E73\u6EAA\u533A","711138":"\u53CC\u6EAA\u533A","711139":"\u8D21\u5BEE\u533A","711140":"\u65B0\u5E97\u533A","711141":"\u576A\u6797\u533A","711142":"\u4E4C\u6765\u533A","711143":"\u6C38\u548C\u533A","711144":"\u4E2D\u548C\u533A","711145":"\u571F\u57CE\u533A","711146":"\u4E09\u5CE1\u533A","711147":"\u6811\u6797\u533A","711148":"\u83BA\u6B4C\u533A","711149":"\u4E09\u91CD\u533A","711150":"\u65B0\u5E84\u533A","711151":"\u6CF0\u5C71\u533A","711152":"\u6797\u53E3\u533A","711153":"\u82A6\u6D32\u533A","711154":"\u4E94\u80A1\u533A","711155":"\u516B\u91CC\u533A","711156":"\u6DE1\u6C34\u533A","711157":"\u4E09\u829D\u533A","711158":"\u77F3\u95E8\u533A","711200":"\u5B9C\u5170\u53BF","711214":"\u5B9C\u5170\u5E02","711215":"\u5934\u57CE\u9547","711216":"\u7901\u6EAA\u4E61","711217":"\u58EE\u56F4\u4E61","711218":"\u5458\u5C71\u4E61","711219":"\u7F57\u4E1C\u9547","711220":"\u4E09\u661F\u4E61","711221":"\u5927\u540C\u4E61","711222":"\u4E94\u7ED3\u4E61","711223":"\u51AC\u5C71\u4E61","711224":"\u82CF\u6FB3\u9547","711225":"\u5357\u6FB3\u4E61","711226":"\u9493\u9C7C\u53F0","711300":"\u65B0\u7AF9\u53BF","711314":"\u7AF9\u5317\u5E02","711315":"\u6E56\u53E3\u4E61","711316":"\u65B0\u4E30\u4E61","711317":"\u65B0\u57D4\u9547","711318":"\u5173\u897F\u9547","711319":"\u828E\u6797\u4E61","711320":"\u5B9D\u5C71\u4E61","711321":"\u7AF9\u4E1C\u9547","711322":"\u4E94\u5CF0\u4E61","711323":"\u6A2A\u5C71\u4E61","711324":"\u5C16\u77F3\u4E61","711325":"\u5317\u57D4\u4E61","711326":"\u5CE8\u7709\u4E61","711400":"\u6843\u56ED\u53BF","711414":"\u4E2D\u575C\u5E02","711415":"\u5E73\u9547\u5E02","711416":"\u9F99\u6F6D\u4E61","711417":"\u6768\u6885\u5E02","711418":"\u65B0\u5C4B\u4E61","711419":"\u89C2\u97F3\u4E61","711420":"\u6843\u56ED\u5E02","711421":"\u9F9F\u5C71\u4E61","711422":"\u516B\u5FB7\u5E02","711423":"\u5927\u6EAA\u9547","711424":"\u590D\u5174\u4E61","711425":"\u5927\u56ED\u4E61","711426":"\u82A6\u7AF9\u4E61","711500":"\u82D7\u6817\u53BF","711519":"\u7AF9\u5357\u9547","711520":"\u5934\u4EFD\u9547","711521":"\u4E09\u6E7E\u4E61","711522":"\u5357\u5E84\u4E61","711523":"\u72EE\u6F6D\u4E61","711524":"\u540E\u9F99\u9547","711525":"\u901A\u9704\u9547","711526":"\u82D1\u91CC\u9547","711527":"\u82D7\u6817\u5E02","711528":"\u9020\u6865\u4E61","711529":"\u5934\u5C4B\u4E61","711530":"\u516C\u9986\u4E61","711531":"\u5927\u6E56\u4E61","711532":"\u6CF0\u5B89\u4E61","711533":"\u94DC\u9523\u4E61","711534":"\u4E09\u4E49\u4E61","711535":"\u897F\u6E56\u4E61","711536":"\u5353\u5170\u9547","711700":"\u5F70\u5316\u53BF","711727":"\u5F70\u5316\u5E02","711728":"\u82AC\u56ED\u4E61","711729":"\u82B1\u575B\u4E61","711730":"\u79C0\u6C34\u4E61","711731":"\u9E7F\u6E2F\u9547","711732":"\u798F\u5174\u4E61","711733":"\u7EBF\u897F\u4E61","711734":"\u548C\u7F8E\u9547","711735":"\u4F38\u6E2F\u4E61","711736":"\u5458\u6797\u9547","711737":"\u793E\u5934\u4E61","711738":"\u6C38\u9756\u4E61","711739":"\u57D4\u5FC3\u4E61","711740":"\u6EAA\u6E56\u9547","711741":"\u5927\u6751\u4E61","711742":"\u57D4\u76D0\u4E61","711743":"\u7530\u4E2D\u9547","711744":"\u5317\u6597\u9547","711745":"\u7530\u5C3E\u4E61","711746":"\u57E4\u5934\u4E61","711747":"\u6EAA\u5DDE\u4E61","711748":"\u7AF9\u5858\u4E61","711749":"\u4E8C\u6797\u9547","711750":"\u5927\u57CE\u4E61","711751":"\u82B3\u82D1\u4E61","711752":"\u4E8C\u6C34\u4E61","711900":"\u5609\u4E49\u53BF","711919":"\u756A\u8DEF\u4E61","711920":"\u6885\u5C71\u4E61","711921":"\u7AF9\u5D0E\u4E61","711922":"\u963F\u91CC\u5C71\u4E61","711923":"\u4E2D\u57D4\u4E61","711924":"\u5927\u57D4\u4E61","711925":"\u6C34\u4E0A\u4E61","711926":"\u9E7F\u8349\u4E61","711927":"\u592A\u4FDD\u5E02","711928":"\u6734\u5B50\u5E02","711929":"\u4E1C\u77F3\u4E61","711930":"\u516D\u811A\u4E61","711931":"\u65B0\u6E2F\u4E61","711932":"\u6C11\u96C4\u4E61","711933":"\u5927\u6797\u9547","711934":"\u6EAA\u53E3\u4E61","711935":"\u4E49\u7AF9\u4E61","711936":"\u5E03\u888B\u9547","712100":"\u4E91\u6797\u53BF","712121":"\u6597\u5357\u9547","712122":"\u5927\u57E4\u4E61","712123":"\u864E\u5C3E\u9547","712124":"\u571F\u5E93\u9547","712125":"\u8912\u5FE0\u4E61","712126":"\u4E1C\u52BF\u4E61","712127":"\u53F0\u897F\u4E61","712128":"\u4ED1\u80CC\u4E61","712129":"\u9EA6\u5BEE\u4E61","712130":"\u6597\u516D\u5E02","712131":"\u6797\u5185\u4E61","712132":"\u53E4\u5751\u4E61","712133":"\u83BF\u6850\u4E61","712134":"\u897F\u87BA\u9547","712135":"\u4E8C\u4ED1\u4E61","712136":"\u5317\u6E2F\u9547","712137":"\u6C34\u6797\u4E61","712138":"\u53E3\u6E56\u4E61","712139":"\u56DB\u6E56\u4E61","712140":"\u5143\u957F\u4E61","712400":"\u5C4F\u4E1C\u53BF","712434":"\u5C4F\u4E1C\u5E02","712435":"\u4E09\u5730\u95E8\u4E61","712436":"\u96FE\u53F0\u4E61","712437":"\u739B\u5BB6\u4E61","712438":"\u4E5D\u5982\u4E61","712439":"\u91CC\u6E2F\u4E61","712440":"\u9AD8\u6811\u4E61","712441":"\u76D0\u57D4\u4E61","712442":"\u957F\u6CBB\u4E61","712443":"\u9E9F\u6D1B\u4E61","712444":"\u7AF9\u7530\u4E61","712445":"\u5185\u57D4\u4E61","712446":"\u4E07\u4E39\u4E61","712447":"\u6F6E\u5DDE\u9547","712448":"\u6CF0\u6B66\u4E61","712449":"\u6765\u4E49\u4E61","712450":"\u4E07\u5CE6\u4E61","712451":"\u5D01\u9876\u4E61","712452":"\u65B0\u57E4\u4E61","712453":"\u5357\u5DDE\u4E61","712454":"\u6797\u8FB9\u4E61","712455":"\u4E1C\u6E2F\u9547","712456":"\u7409\u7403\u4E61","712457":"\u4F73\u51AC\u4E61","712458":"\u65B0\u56ED\u4E61","712459":"\u678B\u5BEE\u4E61","712460":"\u678B\u5C71\u4E61","712461":"\u6625\u65E5\u4E61","712462":"\u72EE\u5B50\u4E61","712463":"\u8F66\u57CE\u4E61","712464":"\u7261\u4E39\u4E61","712465":"\u6052\u6625\u9547","712466":"\u6EE1\u5DDE\u4E61","712500":"\u53F0\u4E1C\u53BF","712517":"\u53F0\u4E1C\u5E02","712518":"\u7EFF\u5C9B\u4E61","712519":"\u5170\u5C7F\u4E61","712520":"\u5EF6\u5E73\u4E61","712521":"\u5351\u5357\u4E61","712522":"\u9E7F\u91CE\u4E61","712523":"\u5173\u5C71\u9547","712524":"\u6D77\u7AEF\u4E61","712525":"\u6C60\u4E0A\u4E61","712526":"\u4E1C\u6CB3\u4E61","712527":"\u6210\u529F\u9547","712528":"\u957F\u6EE8\u4E61","712529":"\u91D1\u5CF0\u4E61","712530":"\u5927\u6B66\u4E61","712531":"\u8FBE\u4EC1\u4E61","712532":"\u592A\u9EBB\u91CC\u4E61","712600":"\u82B1\u83B2\u53BF","712615":"\u82B1\u83B2\u5E02","712616":"\u65B0\u57CE\u4E61","712617":"\u592A\u9C81\u9601","712618":"\u79C0\u6797\u4E61","712619":"\u5409\u5B89\u4E61","712620":"\u5BFF\u4E30\u4E61","712621":"\u51E4\u6797\u9547","712622":"\u5149\u590D\u4E61","712623":"\u4E30\u6EE8\u4E61","712624":"\u745E\u7A57\u4E61","712625":"\u4E07\u8363\u4E61","712626":"\u7389\u91CC\u9547","712627":"\u5353\u6EAA\u4E61","712628":"\u5BCC\u91CC\u4E61","712700":"\u6F8E\u6E56\u53BF","712707":"\u9A6C\u516C\u5E02","712708":"\u897F\u5C7F\u4E61","712709":"\u671B\u5B89\u4E61","712710":"\u4E03\u7F8E\u4E61","712711":"\u767D\u6C99\u4E61","712712":"\u6E56\u897F\u4E61","712800":"\u8FDE\u6C5F\u53BF","712805":"\u5357\u7AFF\u4E61","712806":"\u5317\u7AFF\u4E61","712807":"\u8392\u5149\u4E61","712808":"\u4E1C\u5F15\u4E61","810000":"\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A","810100":"\u9999\u6E2F\u5C9B","810101":"\u4E2D\u897F\u533A","810102":"\u6E7E\u4ED4","810103":"\u4E1C\u533A","810104":"\u5357\u533A","810200":"\u4E5D\u9F99","810201":"\u4E5D\u9F99\u57CE\u533A","810202":"\u6CB9\u5C16\u65FA\u533A","810203":"\u6DF1\u6C34\u57D7\u533A","810204":"\u9EC4\u5927\u4ED9\u533A","810205":"\u89C2\u5858\u533A","810300":"\u65B0\u754C","810301":"\u5317\u533A","810302":"\u5927\u57D4\u533A","810303":"\u6C99\u7530\u533A","810304":"\u897F\u8D21\u533A","810305":"\u5143\u6717\u533A","810306":"\u5C6F\u95E8\u533A","810307":"\u8343\u6E7E\u533A","810308":"\u8475\u9752\u533A","810309":"\u79BB\u5C9B\u533A","820000":"\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A","820100":"\u6FB3\u95E8\u534A\u5C9B","820200":"\u79BB\u5C9B","990000":"\u6D77\u5916","990100":"\u6D77\u5916"};function r(a){for(var s={},l=0,u;l<a.length;l++)u=a[l],!(!u||!u.id)&&(s[u.id]=u);for(var d=[],f=0;f<a.length;f++)if(u=a[f],!!u){if(u.pid==null&&u.parentId==null){d.push(u);continue}var m=s[u.pid]||s[u.parentId];!m||(m.children||(m.children=[]),m.children.push(u))}return d}var o=function(){var a=[];for(var s in n){var l=s.slice(2,6)==="0000"?void 0:s.slice(4,6)=="00"?s.slice(0,2)+"0000":s.slice(0,4)+"00";a.push({id:s,pid:l,name:n[s]})}return r(a)}();e.exports=o},function(e,t,n){var r=n(18);e.exports={d4:function(){return this.natural(1,4)},d6:function(){return this.natural(1,6)},d8:function(){return this.natural(1,8)},d12:function(){return this.natural(1,12)},d20:function(){return this.natural(1,20)},d100:function(){return this.natural(1,100)},guid:function(){var o="abcdefABCDEF1234567890",a=this.string(o,8)+"-"+this.string(o,4)+"-"+this.string(o,4)+"-"+this.string(o,4)+"-"+this.string(o,12);return a},uuid:function(){return this.guid()},id:function(){var o,a=0,s=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],l=["1","0","X","9","8","7","6","5","4","3","2"];o=this.pick(r).id+this.date("yyyyMMdd")+this.string("number",3);for(var u=0;u<o.length;u++)a+=o[u]*s[u];return o+=l[a%11],o},increment:function(){var o=0;return function(a){return o+=+a||1}}(),inc:function(o){return this.increment(o)}}},function(e,t,n){var r=n(21),o=n(22);e.exports={Parser:r,Handler:o}},function(e,t){function n(S){this.type=S,this.offset=n.offset(),this.text=n.text()}function r(S,k){n.call(this,"alternate"),this.left=S,this.right=k}function o(S){n.call(this,"match"),this.body=S.filter(Boolean)}function a(S,k){n.call(this,S),this.body=k}function s(S){a.call(this,"capture-group"),this.index=N[this.offset]||(N[this.offset]=E++),this.body=S}function l(S,k){n.call(this,"quantified"),this.body=S,this.quantifier=k}function u(S,k){n.call(this,"quantifier"),this.min=S,this.max=k,this.greedy=!0}function d(S,k){n.call(this,"charset"),this.invert=S,this.body=k}function f(S,k){n.call(this,"range"),this.start=S,this.end=k}function m(S){n.call(this,"literal"),this.body=S,this.escaped=this.body!=this.text}function g(S){n.call(this,"unicode"),this.code=S.toUpperCase()}function y(S){n.call(this,"hex"),this.code=S.toUpperCase()}function b(S){n.call(this,"octal"),this.code=S.toUpperCase()}function x(S){n.call(this,"back-reference"),this.code=S.toUpperCase()}function C(S){n.call(this,"control-character"),this.code=S.toUpperCase()}var $=function(){function S(_,P){function I(){this.constructor=_}I.prototype=P.prototype,_.prototype=new I}function k(_,P,I,O,j){function B(V,L){function G(ie){function ye(be){return be.charCodeAt(0).toString(16).toUpperCase()}return ie.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(be){return"\\x0"+ye(be)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(be){return"\\x"+ye(be)}).replace(/[\u0180-\u0FFF]/g,function(be){return"\\u0"+ye(be)}).replace(/[\u1080-\uFFFF]/g,function(be){return"\\u"+ye(be)})}var z,J;switch(V.length){case 0:z="end of input";break;case 1:z=V[0];break;default:z=V.slice(0,-1).join(", ")+" or "+V[V.length-1]}return J=L?'"'+G(L)+'"':"end of input","Expected "+z+" but "+J+" found."}this.expected=_,this.found=P,this.offset=I,this.line=O,this.column=j,this.name="SyntaxError",this.message=B(_,P)}function A(_){function P(){return _.substring(pe,T)}function I(){return pe}function O(v){function w(D,ce,Ce){var Le,Ve;for(Le=ce;Ce>Le;Le++)Ve=_.charAt(Le),Ve===`
`?(D.seenCR||D.line++,D.column=1,D.seenCR=!1):Ve==="\r"||Ve==="\u2028"||Ve==="\u2029"?(D.line++,D.column=1,D.seenCR=!0):(D.column++,D.seenCR=!1)}return De!==v&&(De>v&&(De=0,tt={line:1,column:1,seenCR:!1}),w(tt,De,v),De=v),tt}function j(v){Ye>T||(T>Ye&&(Ye=T,Xe=[]),Xe.push(v))}function B(v){var w=0;for(v.sort();w<v.length;)v[w-1]===v[w]?v.splice(w,1):w++}function V(){var v,w,D,ce,Ce;return v=T,w=L(),w!==null?(D=T,_.charCodeAt(T)===124?(ce=Kt,T++):(ce=null,oe===0&&j(Ut)),ce!==null?(Ce=V(),Ce!==null?(ce=[ce,Ce],D=ce):(T=D,D=fe)):(T=D,D=fe),D===null&&(D=He),D!==null?(pe=v,w=Wt(w,D),w===null&&(T=v),v=w):(T=v,v=fe)):(T=v,v=fe),v}function L(){var v,w,D,ce,Ce;if(v=T,w=z(),w===null&&(w=He),w!==null)if(D=T,oe++,ce=ye(),oe--,ce===null?D=He:(T=D,D=fe),D!==null){for(ce=[],Ce=ie(),Ce===null&&(Ce=G());Ce!==null;)ce.push(Ce),Ce=ie(),Ce===null&&(Ce=G());ce!==null?(Ce=J(),Ce===null&&(Ce=He),Ce!==null?(pe=v,w=qt(w,ce,Ce),w===null&&(T=v),v=w):(T=v,v=fe)):(T=v,v=fe)}else T=v,v=fe;else T=v,v=fe;return v}function G(){var v;return v=se(),v===null&&(v=R(),v===null&&(v=Z())),v}function z(){var v,w;return v=T,_.charCodeAt(T)===94?(w=st,T++):(w=null,oe===0&&j(lt)),w!==null&&(pe=v,w=Gt()),w===null&&(T=v),v=w,v}function J(){var v,w;return v=T,_.charCodeAt(T)===36?(w=Yt,T++):(w=null,oe===0&&j(Xt)),w!==null&&(pe=v,w=Jt()),w===null&&(T=v),v=w,v}function ie(){var v,w,D;return v=T,w=G(),w!==null?(D=ye(),D!==null?(pe=v,w=Zt(w,D),w===null&&(T=v),v=w):(T=v,v=fe)):(T=v,v=fe),v}function ye(){var v,w,D;return oe++,v=T,w=be(),w!==null?(D=Y(),D===null&&(D=He),D!==null?(pe=v,w=en(w,D),w===null&&(T=v),v=w):(T=v,v=fe)):(T=v,v=fe),oe--,v===null&&(w=null,oe===0&&j(Qt)),v}function be(){var v;return v=Te(),v===null&&(v=Ae(),v===null&&(v=Oe(),v===null&&(v=Me(),v===null&&(v=H(),v===null&&(v=te()))))),v}function Te(){var v,w,D,ce,Ce,Le;return v=T,_.charCodeAt(T)===123?(w=Ze,T++):(w=null,oe===0&&j(Qe)),w!==null?(D=ne(),D!==null?(_.charCodeAt(T)===44?(ce=tn,T++):(ce=null,oe===0&&j(nn)),ce!==null?(Ce=ne(),Ce!==null?(_.charCodeAt(T)===125?(Le=ct,T++):(Le=null,oe===0&&j(ut)),Le!==null?(pe=v,w=rn(D,Ce),w===null&&(T=v),v=w):(T=v,v=fe)):(T=v,v=fe)):(T=v,v=fe)):(T=v,v=fe)):(T=v,v=fe),v}function Ae(){var v,w,D,ce;return v=T,_.charCodeAt(T)===123?(w=Ze,T++):(w=null,oe===0&&j(Qe)),w!==null?(D=ne(),D!==null?(_.substr(T,2)===dt?(ce=dt,T+=2):(ce=null,oe===0&&j(an)),ce!==null?(pe=v,w=sn(D),w===null&&(T=v),v=w):(T=v,v=fe)):(T=v,v=fe)):(T=v,v=fe),v}function Oe(){var v,w,D,ce;return v=T,_.charCodeAt(T)===123?(w=Ze,T++):(w=null,oe===0&&j(Qe)),w!==null?(D=ne(),D!==null?(_.charCodeAt(T)===125?(ce=ct,T++):(ce=null,oe===0&&j(ut)),ce!==null?(pe=v,w=ln(D),w===null&&(T=v),v=w):(T=v,v=fe)):(T=v,v=fe)):(T=v,v=fe),v}function Me(){var v,w;return v=T,_.charCodeAt(T)===43?(w=cn,T++):(w=null,oe===0&&j(un)),w!==null&&(pe=v,w=dn()),w===null&&(T=v),v=w,v}function H(){var v,w;return v=T,_.charCodeAt(T)===42?(w=fn,T++):(w=null,oe===0&&j(hn)),w!==null&&(pe=v,w=pn()),w===null&&(T=v),v=w,v}function te(){var v,w;return v=T,_.charCodeAt(T)===63?(w=ft,T++):(w=null,oe===0&&j(ht)),w!==null&&(pe=v,w=mn()),w===null&&(T=v),v=w,v}function Y(){var v;return _.charCodeAt(T)===63?(v=ft,T++):(v=null,oe===0&&j(ht)),v}function ne(){var v,w,D;if(v=T,w=[],pt.test(_.charAt(T))?(D=_.charAt(T),T++):(D=null,oe===0&&j(mt)),D!==null)for(;D!==null;)w.push(D),pt.test(_.charAt(T))?(D=_.charAt(T),T++):(D=null,oe===0&&j(mt));else w=fe;return w!==null&&(pe=v,w=gn(w)),w===null&&(T=v),v=w,v}function se(){var v,w,D,ce;return v=T,_.charCodeAt(T)===40?(w=vn,T++):(w=null,oe===0&&j(bn)),w!==null?(D=ve(),D===null&&(D=Se(),D===null&&(D=me(),D===null&&(D=_e()))),D!==null?(_.charCodeAt(T)===41?(ce=yn,T++):(ce=null,oe===0&&j(xn)),ce!==null?(pe=v,w=wn(D),w===null&&(T=v),v=w):(T=v,v=fe)):(T=v,v=fe)):(T=v,v=fe),v}function _e(){var v,w;return v=T,w=V(),w!==null&&(pe=v,w=Cn(w)),w===null&&(T=v),v=w,v}function me(){var v,w,D;return v=T,_.substr(T,2)===gt?(w=gt,T+=2):(w=null,oe===0&&j($n)),w!==null?(D=V(),D!==null?(pe=v,w=_n(D),w===null&&(T=v),v=w):(T=v,v=fe)):(T=v,v=fe),v}function ve(){var v,w,D;return v=T,_.substr(T,2)===vt?(w=vt,T+=2):(w=null,oe===0&&j(Sn)),w!==null?(D=V(),D!==null?(pe=v,w=Tn(D),w===null&&(T=v),v=w):(T=v,v=fe)):(T=v,v=fe),v}function Se(){var v,w,D;return v=T,_.substr(T,2)===bt?(w=bt,T+=2):(w=null,oe===0&&j(En)),w!==null?(D=V(),D!==null?(pe=v,w=Pn(D),w===null&&(T=v),v=w):(T=v,v=fe)):(T=v,v=fe),v}function R(){var v,w,D,ce,Ce;if(oe++,v=T,_.charCodeAt(T)===91?(w=kn,T++):(w=null,oe===0&&j(An)),w!==null)if(_.charCodeAt(T)===94?(D=st,T++):(D=null,oe===0&&j(lt)),D===null&&(D=He),D!==null){for(ce=[],Ce=M(),Ce===null&&(Ce=F());Ce!==null;)ce.push(Ce),Ce=M(),Ce===null&&(Ce=F());ce!==null?(_.charCodeAt(T)===93?(Ce=In,T++):(Ce=null,oe===0&&j(On)),Ce!==null?(pe=v,w=Mn(D,ce),w===null&&(T=v),v=w):(T=v,v=fe)):(T=v,v=fe)}else T=v,v=fe;else T=v,v=fe;return oe--,v===null&&(w=null,oe===0&&j(Rn)),v}function M(){var v,w,D,ce;return oe++,v=T,w=F(),w!==null?(_.charCodeAt(T)===45?(D=jn,T++):(D=null,oe===0&&j(Bn)),D!==null?(ce=F(),ce!==null?(pe=v,w=zn(w,ce),w===null&&(T=v),v=w):(T=v,v=fe)):(T=v,v=fe)):(T=v,v=fe),oe--,v===null&&(w=null,oe===0&&j(Nn)),v}function F(){var v;return oe++,v=K(),v===null&&(v=q()),oe--,v===null&&oe===0&&j(Ln),v}function q(){var v,w;return v=T,Fn.test(_.charAt(T))?(w=_.charAt(T),T++):(w=null,oe===0&&j(Hn)),w!==null&&(pe=v,w=et(w)),w===null&&(T=v),v=w,v}function K(){var v;return v=X(),v===null&&(v=ke(),v===null&&(v=de(),v===null&&(v=ge(),v===null&&(v=xe(),v===null&&(v=we(),v===null&&(v=Ee(),v===null&&(v=W(),v===null&&(v=ae(),v===null&&(v=he(),v===null&&(v=Pe(),v===null&&(v=Re(),v===null&&(v=Ie(),v===null&&(v=je(),v===null&&(v=ze(),v===null&&(v=nt(),v===null&&(v=rt(),v===null&&(v=ot()))))))))))))))))),v}function Z(){var v;return v=Q(),v===null&&(v=ee(),v===null&&(v=U())),v}function Q(){var v,w;return v=T,_.charCodeAt(T)===46?(w=Dn,T++):(w=null,oe===0&&j(Vn)),w!==null&&(pe=v,w=Kn()),w===null&&(T=v),v=w,v}function U(){var v,w;return oe++,v=T,Wn.test(_.charAt(T))?(w=_.charAt(T),T++):(w=null,oe===0&&j(qn)),w!==null&&(pe=v,w=et(w)),w===null&&(T=v),v=w,oe--,v===null&&(w=null,oe===0&&j(Un)),v}function ee(){var v;return v=ue(),v===null&&(v=le(),v===null&&(v=ke(),v===null&&(v=de(),v===null&&(v=ge(),v===null&&(v=xe(),v===null&&(v=we(),v===null&&(v=Ee(),v===null&&(v=W(),v===null&&(v=ae(),v===null&&(v=he(),v===null&&(v=Pe(),v===null&&(v=Re(),v===null&&(v=Ie(),v===null&&(v=$e(),v===null&&(v=je(),v===null&&(v=ze(),v===null&&(v=nt(),v===null&&(v=rt(),v===null&&(v=ot()))))))))))))))))))),v}function X(){var v,w;return v=T,_.substr(T,2)===Ue?(w=Ue,T+=2):(w=null,oe===0&&j(yt)),w!==null&&(pe=v,w=Gn()),w===null&&(T=v),v=w,v}function ue(){var v,w;return v=T,_.substr(T,2)===Ue?(w=Ue,T+=2):(w=null,oe===0&&j(yt)),w!==null&&(pe=v,w=Yn()),w===null&&(T=v),v=w,v}function le(){var v,w;return v=T,_.substr(T,2)===xt?(w=xt,T+=2):(w=null,oe===0&&j(Xn)),w!==null&&(pe=v,w=Jn()),w===null&&(T=v),v=w,v}function de(){var v,w;return v=T,_.substr(T,2)===wt?(w=wt,T+=2):(w=null,oe===0&&j(Zn)),w!==null&&(pe=v,w=Qn()),w===null&&(T=v),v=w,v}function ge(){var v,w;return v=T,_.substr(T,2)===Ct?(w=Ct,T+=2):(w=null,oe===0&&j(er)),w!==null&&(pe=v,w=tr()),w===null&&(T=v),v=w,v}function xe(){var v,w;return v=T,_.substr(T,2)===$t?(w=$t,T+=2):(w=null,oe===0&&j(nr)),w!==null&&(pe=v,w=rr()),w===null&&(T=v),v=w,v}function we(){var v,w;return v=T,_.substr(T,2)===_t?(w=_t,T+=2):(w=null,oe===0&&j(or)),w!==null&&(pe=v,w=ir()),w===null&&(T=v),v=w,v}function Ee(){var v,w;return v=T,_.substr(T,2)===St?(w=St,T+=2):(w=null,oe===0&&j(ar)),w!==null&&(pe=v,w=sr()),w===null&&(T=v),v=w,v}function W(){var v,w;return v=T,_.substr(T,2)===Tt?(w=Tt,T+=2):(w=null,oe===0&&j(lr)),w!==null&&(pe=v,w=cr()),w===null&&(T=v),v=w,v}function ae(){var v,w;return v=T,_.substr(T,2)===Et?(w=Et,T+=2):(w=null,oe===0&&j(ur)),w!==null&&(pe=v,w=dr()),w===null&&(T=v),v=w,v}function he(){var v,w;return v=T,_.substr(T,2)===Pt?(w=Pt,T+=2):(w=null,oe===0&&j(fr)),w!==null&&(pe=v,w=hr()),w===null&&(T=v),v=w,v}function Pe(){var v,w;return v=T,_.substr(T,2)===Rt?(w=Rt,T+=2):(w=null,oe===0&&j(pr)),w!==null&&(pe=v,w=mr()),w===null&&(T=v),v=w,v}function Re(){var v,w;return v=T,_.substr(T,2)===kt?(w=kt,T+=2):(w=null,oe===0&&j(gr)),w!==null&&(pe=v,w=vr()),w===null&&(T=v),v=w,v}function Ie(){var v,w;return v=T,_.substr(T,2)===At?(w=At,T+=2):(w=null,oe===0&&j(br)),w!==null&&(pe=v,w=yr()),w===null&&(T=v),v=w,v}function ke(){var v,w,D;return v=T,_.substr(T,2)===It?(w=It,T+=2):(w=null,oe===0&&j(xr)),w!==null?(_.length>T?(D=_.charAt(T),T++):(D=null,oe===0&&j(Ot)),D!==null?(pe=v,w=wr(D),w===null&&(T=v),v=w):(T=v,v=fe)):(T=v,v=fe),v}function $e(){var v,w,D;return v=T,_.charCodeAt(T)===92?(w=Mt,T++):(w=null,oe===0&&j(Nt)),w!==null?(Cr.test(_.charAt(T))?(D=_.charAt(T),T++):(D=null,oe===0&&j($r)),D!==null?(pe=v,w=_r(D),w===null&&(T=v),v=w):(T=v,v=fe)):(T=v,v=fe),v}function je(){var v,w,D,ce;if(v=T,_.substr(T,2)===We?(w=We,T+=2):(w=null,oe===0&&j(jt)),w!==null){if(D=[],Bt.test(_.charAt(T))?(ce=_.charAt(T),T++):(ce=null,oe===0&&j(zt)),ce!==null)for(;ce!==null;)D.push(ce),Bt.test(_.charAt(T))?(ce=_.charAt(T),T++):(ce=null,oe===0&&j(zt));else D=fe;D!==null?(pe=v,w=Sr(D),w===null&&(T=v),v=w):(T=v,v=fe)}else T=v,v=fe;return v}function ze(){var v,w,D,ce;if(v=T,_.substr(T,2)===Lt?(w=Lt,T+=2):(w=null,oe===0&&j(Tr)),w!==null){if(D=[],qe.test(_.charAt(T))?(ce=_.charAt(T),T++):(ce=null,oe===0&&j(Ge)),ce!==null)for(;ce!==null;)D.push(ce),qe.test(_.charAt(T))?(ce=_.charAt(T),T++):(ce=null,oe===0&&j(Ge));else D=fe;D!==null?(pe=v,w=Er(D),w===null&&(T=v),v=w):(T=v,v=fe)}else T=v,v=fe;return v}function nt(){var v,w,D,ce;if(v=T,_.substr(T,2)===Ft?(w=Ft,T+=2):(w=null,oe===0&&j(Pr)),w!==null){if(D=[],qe.test(_.charAt(T))?(ce=_.charAt(T),T++):(ce=null,oe===0&&j(Ge)),ce!==null)for(;ce!==null;)D.push(ce),qe.test(_.charAt(T))?(ce=_.charAt(T),T++):(ce=null,oe===0&&j(Ge));else D=fe;D!==null?(pe=v,w=Rr(D),w===null&&(T=v),v=w):(T=v,v=fe)}else T=v,v=fe;return v}function rt(){var v,w;return v=T,_.substr(T,2)===We?(w=We,T+=2):(w=null,oe===0&&j(jt)),w!==null&&(pe=v,w=kr()),w===null&&(T=v),v=w,v}function ot(){var v,w,D;return v=T,_.charCodeAt(T)===92?(w=Mt,T++):(w=null,oe===0&&j(Nt)),w!==null?(_.length>T?(D=_.charAt(T),T++):(D=null,oe===0&&j(Ot)),D!==null?(pe=v,w=et(D),w===null&&(T=v),v=w):(T=v,v=fe)):(T=v,v=fe),v}var Je,Ke=arguments.length>1?arguments[1]:{},it={regexp:V},at=V,fe=null,He="",Kt="|",Ut='"|"',Wt=function(v,w){return w?new r(v,w[1]):v},qt=function(v,w,D){return new o([v].concat(w).concat([D]))},st="^",lt='"^"',Gt=function(){return new n("start")},Yt="$",Xt='"$"',Jt=function(){return new n("end")},Zt=function(v,w){return new l(v,w)},Qt="Quantifier",en=function(v,w){return w&&(v.greedy=!1),v},Ze="{",Qe='"{"',tn=",",nn='","',ct="}",ut='"}"',rn=function(v,w){return new u(v,w)},dt=",}",an='",}"',sn=function(v){return new u(v,1/0)},ln=function(v){return new u(v,v)},cn="+",un='"+"',dn=function(){return new u(1,1/0)},fn="*",hn='"*"',pn=function(){return new u(0,1/0)},ft="?",ht='"?"',mn=function(){return new u(0,1)},pt=/^[0-9]/,mt="[0-9]",gn=function(v){return+v.join("")},vn="(",bn='"("',yn=")",xn='")"',wn=function(v){return v},Cn=function(v){return new s(v)},gt="?:",$n='"?:"',_n=function(v){return new a("non-capture-group",v)},vt="?=",Sn='"?="',Tn=function(v){return new a("positive-lookahead",v)},bt="?!",En='"?!"',Pn=function(v){return new a("negative-lookahead",v)},Rn="CharacterSet",kn="[",An='"["',In="]",On='"]"',Mn=function(v,w){return new d(!!v,w)},Nn="CharacterRange",jn="-",Bn='"-"',zn=function(v,w){return new f(v,w)},Ln="Character",Fn=/^[^\\\]]/,Hn="[^\\\\\\]]",et=function(v){return new m(v)},Dn=".",Vn='"."',Kn=function(){return new n("any-character")},Un="Literal",Wn=/^[^|\\\/.[()?+*$\^]/,qn="[^|\\\\\\/.[()?+*$\\^]",Ue="\\b",yt='"\\\\b"',Gn=function(){return new n("backspace")},Yn=function(){return new n("word-boundary")},xt="\\B",Xn='"\\\\B"',Jn=function(){return new n("non-word-boundary")},wt="\\d",Zn='"\\\\d"',Qn=function(){return new n("digit")},Ct="\\D",er='"\\\\D"',tr=function(){return new n("non-digit")},$t="\\f",nr='"\\\\f"',rr=function(){return new n("form-feed")},_t="\\n",or='"\\\\n"',ir=function(){return new n("line-feed")},St="\\r",ar='"\\\\r"',sr=function(){return new n("carriage-return")},Tt="\\s",lr='"\\\\s"',cr=function(){return new n("white-space")},Et="\\S",ur='"\\\\S"',dr=function(){return new n("non-white-space")},Pt="\\t",fr='"\\\\t"',hr=function(){return new n("tab")},Rt="\\v",pr='"\\\\v"',mr=function(){return new n("vertical-tab")},kt="\\w",gr='"\\\\w"',vr=function(){return new n("word")},At="\\W",br='"\\\\W"',yr=function(){return new n("non-word")},It="\\c",xr='"\\\\c"',Ot="any character",wr=function(v){return new C(v)},Mt="\\",Nt='"\\\\"',Cr=/^[1-9]/,$r="[1-9]",_r=function(v){return new x(v)},We="\\0",jt='"\\\\0"',Bt=/^[0-7]/,zt="[0-7]",Sr=function(v){return new b(v.join(""))},Lt="\\x",Tr='"\\\\x"',qe=/^[0-9a-fA-F]/,Ge="[0-9a-fA-F]",Er=function(v){return new y(v.join(""))},Ft="\\u",Pr='"\\\\u"',Rr=function(v){return new g(v.join(""))},kr=function(){return new n("null-character")},T=0,pe=0,De=0,tt={line:1,column:1,seenCR:!1},Ye=0,Xe=[],oe=0;if("startRule"in Ke){if(!(Ke.startRule in it))throw new Error(`Can't start parsing from rule "`+Ke.startRule+'".');at=it[Ke.startRule]}if(n.offset=I,n.text=P,Je=at(),Je!==null&&T===_.length)return Je;throw B(Xe),pe=Math.max(T,Ye),new k(Xe,pe<_.length?_.charAt(pe):null,pe,O(pe).line,O(pe).column)}return S(k,Error),{SyntaxError:k,parse:A}}(),E=1,N={};e.exports=$},function(e,t,n){var r=n(3),o=n(5),a={extend:r.extend},s=y(97,122),l=y(65,90),u=y(48,57),d=y(32,47)+y(58,64)+y(91,96)+y(123,126),f=y(32,126),m=` \f
\r	\v\xA0\u2028\u2029`,g={"\\w":s+l+u+"_","\\W":d.replace("_",""),"\\s":m,"\\S":function(){for(var b=f,x=0;x<m.length;x++)b=b.replace(m[x],"");return b}(),"\\d":u,"\\D":s+l+d};function y(b,x){for(var C="",$=b;$<=x;$++)C+=String.fromCharCode($);return C}a.gen=function(b,x,C){return C=C||{guid:1},a[b.type]?a[b.type](b,x,C):a.token(b,x,C)},a.extend({token:function(b,x,C){switch(b.type){case"start":case"end":return"";case"any-character":return o.character();case"backspace":return"";case"word-boundary":return"";case"non-word-boundary":break;case"digit":return o.pick(u.split(""));case"non-digit":return o.pick((s+l+d).split(""));case"form-feed":break;case"line-feed":return b.body||b.text;case"carriage-return":break;case"white-space":return o.pick(m.split(""));case"non-white-space":return o.pick((s+l+u).split(""));case"tab":break;case"vertical-tab":break;case"word":return o.pick((s+l+u).split(""));case"non-word":return o.pick(d.replace("_","").split(""))}return b.body||b.text},alternate:function(b,x,C){return this.gen(o.boolean()?b.left:b.right,x,C)},match:function(b,x,C){x="";for(var $=0;$<b.body.length;$++)x+=this.gen(b.body[$],x,C);return x},"capture-group":function(b,x,C){return x=this.gen(b.body,x,C),C[C.guid++]=x,x},"non-capture-group":function(b,x,C){return this.gen(b.body,x,C)},"positive-lookahead":function(b,x,C){return this.gen(b.body,x,C)},"negative-lookahead":function(b,x,C){return""},quantified:function(b,x,C){x="";for(var $=this.quantifier(b.quantifier),E=0;E<$;E++)x+=this.gen(b.body,x,C);return x},quantifier:function(b,x,C){var $=Math.max(b.min,0),E=isFinite(b.max)?b.max:$+o.integer(3,7);return o.integer($,E)},charset:function(b,x,C){if(b.invert)return this["invert-charset"](b,x,C);var $=o.pick(b.body);return this.gen($,x,C)},"invert-charset":function(b,x,C){for(var $=f,E=0,N;E<b.body.length;E++)switch(N=b.body[E],N.type){case"literal":$=$.replace(N.body,"");break;case"range":for(var S=this.gen(N.start,x,C).charCodeAt(),k=this.gen(N.end,x,C).charCodeAt(),A=S;A<=k;A++)$=$.replace(String.fromCharCode(A),"");default:var _=g[N.text];if(_)for(var P=0;P<=_.length;P++)$=$.replace(_[P],"")}return o.pick($.split(""))},range:function(b,x,C){var $=this.gen(b.start,x,C).charCodeAt(),E=this.gen(b.end,x,C).charCodeAt();return String.fromCharCode(o.integer($,E))},literal:function(b,x,C){return b.escaped?b.body:b.text},unicode:function(b,x,C){return String.fromCharCode(parseInt(b.code,16))},hex:function(b,x,C){return String.fromCharCode(parseInt(b.code,16))},octal:function(b,x,C){return String.fromCharCode(parseInt(b.code,8))},"back-reference":function(b,x,C){return C[b.code]||""},CONTROL_CHARACTER_MAP:function(){for(var b="@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \\ ] ^ _".split(" "),x=`\0       \x07 \b 	 
 \v \f \r              \x1B    `.split(" "),C={},$=0;$<b.length;$++)C[b[$]]=x[$];return C}(),"control-character":function(b,x,C){return this.CONTROL_CHARACTER_MAP[b.code]}}),e.exports=a},function(e,t,n){e.exports=n(24)},function(e,t,n){var r=n(2),o=n(3),a=n(4);function s(l,u,d){d=d||[];var f={name:typeof u=="string"?u.replace(r.RE_KEY,"$1"):u,template:l,type:o.type(l),rule:a.parse(u)};switch(f.path=d.slice(0),f.path.push(u===void 0?"ROOT":f.name),f.type){case"array":f.items=[],o.each(l,function(m,g){f.items.push(s(m,g,f.path))});break;case"object":f.properties=[],o.each(l,function(m,g){f.properties.push(s(m,g,f.path))});break}return f}e.exports=s},function(e,t,n){e.exports=n(26)},function(e,t,n){var r=n(2),o=n(3),a=n(23);function s(d,f){for(var m=a(d),g=l.diff(m,f),y=0;y<g.length;y++);return g}var l={diff:function(f,m,g){var y=[];return this.name(f,m,g,y)&&this.type(f,m,g,y)&&(this.value(f,m,g,y),this.properties(f,m,g,y),this.items(f,m,g,y)),y},name:function(d,f,m,g){var y=g.length;return u.equal("name",d.path,m+"",d.name+"",g),g.length===y},type:function(d,f,m,g){var y=g.length;switch(d.type){case"string":if(d.template.match(r.RE_PLACEHOLDER))return!0;break;case"array":if(d.rule.parameters&&(d.rule.min!==void 0&&d.rule.max===void 0&&d.rule.count===1||d.rule.parameters[2]))return!0;break;case"function":return!0}return u.equal("type",d.path,o.type(f),d.type,g),g.length===y},value:function(d,f,m,g){var y=g.length,b=d.rule,x=d.type;if(x==="object"||x==="array"||x==="function")return!0;if(!b.parameters){switch(x){case"regexp":return u.match("value",d.path,f,d.template,g),g.length===y;case"string":if(d.template.match(r.RE_PLACEHOLDER))return g.length===y;break}return u.equal("value",d.path,f,d.template,g),g.length===y}var C;switch(x){case"number":var $=(f+"").split(".");$[0]=+$[0],b.min!==void 0&&b.max!==void 0&&(u.greaterThanOrEqualTo("value",d.path,$[0],Math.min(b.min,b.max),g),u.lessThanOrEqualTo("value",d.path,$[0],Math.max(b.min,b.max),g)),b.min!==void 0&&b.max===void 0&&u.equal("value",d.path,$[0],b.min,g,"[value] "+m),b.decimal&&(b.dmin!==void 0&&b.dmax!==void 0&&(u.greaterThanOrEqualTo("value",d.path,$[1].length,b.dmin,g),u.lessThanOrEqualTo("value",d.path,$[1].length,b.dmax,g)),b.dmin!==void 0&&b.dmax===void 0&&u.equal("value",d.path,$[1].length,b.dmin,g));break;case"boolean":break;case"string":C=f.match(new RegExp(d.template,"g")),C=C?C.length:0,b.min!==void 0&&b.max!==void 0&&(u.greaterThanOrEqualTo("repeat count",d.path,C,b.min,g),u.lessThanOrEqualTo("repeat count",d.path,C,b.max,g)),b.min!==void 0&&b.max===void 0&&u.equal("repeat count",d.path,C,b.min,g);break;case"regexp":C=f.match(new RegExp(d.template.source.replace(/^\^|\$$/g,""),"g")),C=C?C.length:0,b.min!==void 0&&b.max!==void 0&&(u.greaterThanOrEqualTo("repeat count",d.path,C,b.min,g),u.lessThanOrEqualTo("repeat count",d.path,C,b.max,g)),b.min!==void 0&&b.max===void 0&&u.equal("repeat count",d.path,C,b.min,g);break}return g.length===y},properties:function(d,f,m,g){var y=g.length,b=d.rule,x=o.keys(f);if(!!d.properties){if(d.rule.parameters?(b.min!==void 0&&b.max!==void 0&&(u.greaterThanOrEqualTo("properties length",d.path,x.length,Math.min(b.min,b.max),g),u.lessThanOrEqualTo("properties length",d.path,x.length,Math.max(b.min,b.max),g)),b.min!==void 0&&b.max===void 0&&b.count!==1&&u.equal("properties length",d.path,x.length,b.min,g)):u.equal("properties length",d.path,x.length,d.properties.length,g),g.length!==y)return!1;for(var C=0;C<x.length;C++)g.push.apply(g,this.diff(function(){var $;return o.each(d.properties,function(E){E.name===x[C]&&($=E)}),$||d.properties[C]}(),f[x[C]],x[C]));return g.length===y}},items:function(d,f,m,g){var y=g.length;if(!!d.items){var b=d.rule;if(!d.rule.parameters)u.equal("items length",d.path,f.length,d.items.length,g);else{if(b.min!==void 0&&b.max!==void 0&&(u.greaterThanOrEqualTo("items",d.path,f.length,Math.min(b.min,b.max)*d.items.length,g,"[{utype}] array is too short: {path} must have at least {expected} elements but instance has {actual} elements"),u.lessThanOrEqualTo("items",d.path,f.length,Math.max(b.min,b.max)*d.items.length,g,"[{utype}] array is too long: {path} must have at most {expected} elements but instance has {actual} elements")),b.min!==void 0&&b.max===void 0){if(b.count===1)return g.length===y;u.equal("items length",d.path,f.length,b.min*d.items.length,g)}if(b.parameters[2])return g.length===y}if(g.length!==y)return!1;for(var x=0;x<f.length;x++)g.push.apply(g,this.diff(d.items[x%d.items.length],f[x],x%d.items.length));return g.length===y}}},u={message:function(d){return(d.message||"[{utype}] Expect {path}'{ltype} {action} {expected}, but is {actual}").replace("{utype}",d.type.toUpperCase()).replace("{ltype}",d.type.toLowerCase()).replace("{path}",o.isArray(d.path)&&d.path.join(".")||d.path).replace("{action}",d.action).replace("{expected}",d.expected).replace("{actual}",d.actual)},equal:function(d,f,m,g,y,b){if(m===g)return!0;switch(d){case"type":if(g==="regexp"&&m==="string")return!0;break}var x={path:f,type:d,actual:m,expected:g,action:"is equal to",message:b};return x.message=u.message(x),y.push(x),!1},match:function(d,f,m,g,y,b){if(g.test(m))return!0;var x={path:f,type:d,actual:m,expected:g,action:"matches",message:b};return x.message=u.message(x),y.push(x),!1},notEqual:function(d,f,m,g,y,b){if(m!==g)return!0;var x={path:f,type:d,actual:m,expected:g,action:"is not equal to",message:b};return x.message=u.message(x),y.push(x),!1},greaterThan:function(d,f,m,g,y,b){if(m>g)return!0;var x={path:f,type:d,actual:m,expected:g,action:"is greater than",message:b};return x.message=u.message(x),y.push(x),!1},lessThan:function(d,f,m,g,y,b){if(m<g)return!0;var x={path:f,type:d,actual:m,expected:g,action:"is less to",message:b};return x.message=u.message(x),y.push(x),!1},greaterThanOrEqualTo:function(d,f,m,g,y,b){if(m>=g)return!0;var x={path:f,type:d,actual:m,expected:g,action:"is greater than or equal to",message:b};return x.message=u.message(x),y.push(x),!1},lessThanOrEqualTo:function(d,f,m,g,y,b){if(m<=g)return!0;var x={path:f,type:d,actual:m,expected:g,action:"is less than or equal to",message:b};return x.message=u.message(x),y.push(x),!1}};s.Diff=l,s.Assert=u,e.exports=s},function(e,t,n){e.exports=n(28)},function(e,t,n){var r=n(3);window._XMLHttpRequest=window.XMLHttpRequest,window._ActiveXObject=window.ActiveXObject;try{new window.Event("custom")}catch(y){window.Event=function(b,x,C,$){var E=document.createEvent("CustomEvent");return E.initCustomEvent(b,x,C,$),E}}var o={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},a="readystatechange loadstart progress abort error load timeout loadend".split(" "),s="timeout withCredentials".split(" "),l="readyState responseURL status statusText responseType response responseText responseXML".split(" "),u={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",300:"Multiple Choice",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported"};function d(){this.custom={events:{},requestHeaders:{},responseHeaders:{}}}d._settings={timeout:"10-100"},d.setup=function(y){return r.extend(d._settings,y),d._settings},r.extend(d,o),r.extend(d.prototype,o),d.prototype.mock=!0,d.prototype.match=!1,r.extend(d.prototype,{open:function(y,b,x,C,$){var E=this;r.extend(this.custom,{method:y,url:b,async:typeof x=="boolean"?x:!0,username:C,password:$,options:{url:b,type:y}}),this.custom.timeout=function(P){if(typeof P=="number")return P;if(typeof P=="string"&&!~P.indexOf("-"))return parseInt(P,10);if(typeof P=="string"&&~P.indexOf("-")){var I=P.split("-"),O=parseInt(I[0],10),j=parseInt(I[1],10);return Math.round(Math.random()*(j-O))+O}}(d._settings.timeout);var N=m(this.custom.options);function S(P){for(var I=0;I<l.length;I++)try{E[l[I]]=k[l[I]]}catch(O){}E.dispatchEvent(new Event(P.type))}if(!N){var k=f();this.custom.xhr=k;for(var A=0;A<a.length;A++)k.addEventListener(a[A],S);C?k.open(y,b,x,C,$):k.open(y,b,x);for(var _=0;_<s.length;_++)try{k[s[_]]=E[s[_]]}catch(P){}return}this.match=!0,this.custom.template=N,this.readyState=d.OPENED,this.dispatchEvent(new Event("readystatechange"))},setRequestHeader:function(y,b){if(!this.match){this.custom.xhr.setRequestHeader(y,b);return}var x=this.custom.requestHeaders;x[y]?x[y]+=","+b:x[y]=b},timeout:0,withCredentials:!1,upload:{},send:function(b){var x=this;if(this.custom.options.body=b,!this.match){this.custom.xhr.send(b);return}this.setRequestHeader("X-Requested-With","MockXMLHttpRequest"),this.dispatchEvent(new Event("loadstart")),this.custom.async?setTimeout(C,this.custom.timeout):C();function C(){x.readyState=d.HEADERS_RECEIVED,x.dispatchEvent(new Event("readystatechange")),x.readyState=d.LOADING,x.dispatchEvent(new Event("readystatechange")),x.status=200,x.statusText=u[200],x.response=x.responseText=JSON.stringify(g(x.custom.template,x.custom.options),null,4),x.readyState=d.DONE,x.dispatchEvent(new Event("readystatechange")),x.dispatchEvent(new Event("load")),x.dispatchEvent(new Event("loadend"))}},abort:function(){if(!this.match){this.custom.xhr.abort();return}this.readyState=d.UNSENT,this.dispatchEvent(new Event("abort",!1,!1,this)),this.dispatchEvent(new Event("error",!1,!1,this))}}),r.extend(d.prototype,{responseURL:"",status:d.UNSENT,statusText:"",getResponseHeader:function(y){return this.match?this.custom.responseHeaders[y.toLowerCase()]:this.custom.xhr.getResponseHeader(y)},getAllResponseHeaders:function(){if(!this.match)return this.custom.xhr.getAllResponseHeaders();var y=this.custom.responseHeaders,b="";for(var x in y)!y.hasOwnProperty(x)||(b+=x+": "+y[x]+`\r
`);return b},overrideMimeType:function(){},responseType:"",response:null,responseText:"",responseXML:null}),r.extend(d.prototype,{addEventListener:function(b,x){var C=this.custom.events;C[b]||(C[b]=[]),C[b].push(x)},removeEventListener:function(b,x){for(var C=this.custom.events[b]||[],$=0;$<C.length;$++)C[$]===x&&C.splice($--,1)},dispatchEvent:function(b){for(var x=this.custom.events[b.type]||[],C=0;C<x.length;C++)x[C].call(this,b);var $="on"+b.type;this[$]&&this[$](b)}});function f(){var y=function(){var C=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,$=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,E=location.href,N=$.exec(E.toLowerCase())||[];return C.test(N[1])}();return window.ActiveXObject?!y&&b()||x():b();function b(){try{return new window._XMLHttpRequest}catch(C){}}function x(){try{return new window._ActiveXObject("Microsoft.XMLHTTP")}catch(C){}}}function m(y){for(var b in d.Mock._mocked){var x=d.Mock._mocked[b];if((!x.rurl||C(x.rurl,y.url))&&(!x.rtype||C(x.rtype,y.type.toLowerCase())))return x}function C($,E){if(r.type($)==="string")return $===E;if(r.type($)==="regexp")return $.test(E)}}function g(y,b){return r.isFunction(y.template)?y.template(b):d.Mock.mock(y.template)}e.exports=d}])})})(mock);var mockJs=mock.exports;function lexer(e){for(var t=[],n=0;n<e.length;){var r=e[n];if(r==="*"||r==="+"||r==="?"){t.push({type:"MODIFIER",index:n,value:e[n++]});continue}if(r==="\\"){t.push({type:"ESCAPED_CHAR",index:n++,value:e[n++]});continue}if(r==="{"){t.push({type:"OPEN",index:n,value:e[n++]});continue}if(r==="}"){t.push({type:"CLOSE",index:n,value:e[n++]});continue}if(r===":"){for(var o="",a=n+1;a<e.length;){var s=e.charCodeAt(a);if(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||s===95){o+=e[a++];continue}break}if(!o)throw new TypeError("Missing parameter name at "+n);t.push({type:"NAME",index:n,value:o}),n=a;continue}if(r==="("){var l=1,u="",a=n+1;if(e[a]==="?")throw new TypeError('Pattern cannot start with "?" at '+a);for(;a<e.length;){if(e[a]==="\\"){u+=e[a++]+e[a++];continue}if(e[a]===")"){if(l--,l===0){a++;break}}else if(e[a]==="("&&(l++,e[a+1]!=="?"))throw new TypeError("Capturing groups are not allowed at "+a);u+=e[a++]}if(l)throw new TypeError("Unbalanced pattern at "+n);if(!u)throw new TypeError("Missing pattern at "+n);t.push({type:"PATTERN",index:n,value:u}),n=a;continue}t.push({type:"CHAR",index:n,value:e[n++]})}return t.push({type:"END",index:n,value:""}),t}function parse(e,t){t===void 0&&(t={});for(var n=lexer(e),r=t.prefixes,o=r===void 0?"./":r,a="[^"+escapeString(t.delimiter||"/#?")+"]+?",s=[],l=0,u=0,d="",f=function(A){if(u<n.length&&n[u].type===A)return n[u++].value},m=function(A){var _=f(A);if(_!==void 0)return _;var P=n[u],I=P.type,O=P.index;throw new TypeError("Unexpected "+I+" at "+O+", expected "+A)},g=function(){for(var A="",_;_=f("CHAR")||f("ESCAPED_CHAR");)A+=_;return A};u<n.length;){var y=f("CHAR"),b=f("NAME"),x=f("PATTERN");if(b||x){var C=y||"";o.indexOf(C)===-1&&(d+=C,C=""),d&&(s.push(d),d=""),s.push({name:b||l++,prefix:C,suffix:"",pattern:x||a,modifier:f("MODIFIER")||""});continue}var $=y||f("ESCAPED_CHAR");if($){d+=$;continue}d&&(s.push(d),d="");var E=f("OPEN");if(E){var C=g(),N=f("NAME")||"",S=f("PATTERN")||"",k=g();m("CLOSE"),s.push({name:N||(S?l++:""),pattern:N&&!S?a:S,prefix:C,suffix:k,modifier:f("MODIFIER")||""});continue}m("END")}return s}function escapeString(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function flags(e){return e&&e.sensitive?"":"i"}function regexpToRegexp(e,t){if(!t)return e;for(var n=/\((?:\?<(.*?)>)?(?!\?)/g,r=0,o=n.exec(e.source);o;)t.push({name:o[1]||r++,prefix:"",suffix:"",modifier:"",pattern:""}),o=n.exec(e.source);return e}function arrayToRegexp(e,t,n){var r=e.map(function(o){return pathToRegexp(o,t,n).source});return new RegExp("(?:"+r.join("|")+")",flags(n))}function stringToRegexp(e,t,n){return tokensToRegexp(parse(e,n),t,n)}function tokensToRegexp(e,t,n){n===void 0&&(n={});for(var r=n.strict,o=r===void 0?!1:r,a=n.start,s=a===void 0?!0:a,l=n.end,u=l===void 0?!0:l,d=n.encode,f=d===void 0?function(A){return A}:d,m="["+escapeString(n.endsWith||"")+"]|$",g="["+escapeString(n.delimiter||"/#?")+"]",y=s?"^":"",b=0,x=e;b<x.length;b++){var C=x[b];if(typeof C=="string")y+=escapeString(f(C));else{var $=escapeString(f(C.prefix)),E=escapeString(f(C.suffix));if(C.pattern)if(t&&t.push(C),$||E)if(C.modifier==="+"||C.modifier==="*"){var N=C.modifier==="*"?"?":"";y+="(?:"+$+"((?:"+C.pattern+")(?:"+E+$+"(?:"+C.pattern+"))*)"+E+")"+N}else y+="(?:"+$+"("+C.pattern+")"+E+")"+C.modifier;else y+="("+C.pattern+")"+C.modifier;else y+="(?:"+$+E+")"+C.modifier}}if(u)o||(y+=g+"?"),y+=n.endsWith?"(?="+m+")":"$";else{var S=e[e.length-1],k=typeof S=="string"?g.indexOf(S[S.length-1])>-1:S===void 0;o||(y+="(?:"+g+"(?="+m+"))?"),k||(y+="(?="+g+"|"+m+")")}return new RegExp(y,flags(n))}function pathToRegexp(e,t,n){return e instanceof RegExp?regexpToRegexp(e,t):Array.isArray(e)?arrayToRegexp(e,t,n):stringToRegexp(e,t,n)}const Mock=mockJs;function createProdMockServer(e){Mock.XHR.prototype.__send=Mock.XHR.prototype.send,Mock.XHR.prototype.send=function(){if(this.custom.xhr&&(this.custom.xhr.withCredentials=this.withCredentials||!1,this.responseType&&(this.custom.xhr.responseType=this.responseType)),this.custom.requestHeaders){const t={};for(let n in this.custom.requestHeaders)t[n.toString().toLowerCase()]=this.custom.requestHeaders[n];this.custom.options=Object.assign({},this.custom.options,{headers:t})}this.__send.apply(this,arguments)},Mock.XHR.prototype.proxy_open=Mock.XHR.prototype.open,Mock.XHR.prototype.open=function(){let t=this.responseType;this.proxy_open(...arguments),this.custom.xhr&&t&&(this.custom.xhr.responseType=t)};for(const{url:t,method:n,response:r,timeout:o}of e)__setupMock__(o),Mock.mock(pathToRegexp(t,void 0,{end:!1}),n||"get",__XHR2ExpressReqWrapper__(r))}function __param2Obj__(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"').replace(/\+/g," ")+'"}'):{}}function __XHR2ExpressReqWrapper__(e){return function(t){let n=null;if(typeof e=="function"){const{body:r,type:o,url:a,headers:s}=t;let l=r;try{l=JSON.parse(r)}catch(u){}n=e({method:o,body:l,query:__param2Obj__(a),headers:s})}else n=e;return Mock.mock(n)}}function __setupMock__(e=0){e&&Mock.setup({timeout:e})}const modules={"./_utils.js":__glob_1_1,"./auth/index.js":__glob_1_2,"./post/index.js":__glob_1_3,"./user/index.js":__glob_1_4},mockModules=[];Object.keys(modules).forEach(e=>{e.includes("/_")||mockModules.push(...modules[e].default)});function setupProdMockServer(){createProdMockServer(mockModules)}function setupApp(){const e=createApp(_sfc_main);setupStore(e),setupRouter(e),e.mount("#app")}setupApp();setupProdMockServer();export{c$1 as $,withKeys as A,login as B,setToken as C,onMounted as D,ErrorIcon as E,onActivated as F,onDeactivated as G,__unplugin_components_0$4 as H,InfoIcon as I,resolveComponent as J,createBlock as K,replaceable as L,useSsrAdapter as M,NBaseIcon as N,cssrAnchorMetaName as O,useMemo as P,depx as Q,pxfy as R,SuccessIcon as S,c as T,beforeNextFrameOnce as U,VResizeObserver as V,WarningIcon as W,mergeProps as X,nextTick as Y,renderSlot as Z,_export_sfc as _,cB as a,ChevronRightIcon as a$,useLocale as a0,inject as a1,configProviderInjectionKey as a2,createTheme as a3,scrollbarLight$1 as a4,internalSelectionMenuInjectionKey as a5,render$a as a6,Transition as a7,cM as a8,cNotM as a9,useFormItem as aA,getCurrentInstance as aB,useRtl as aC,on as aD,call as aE,off as aF,warn$2 as aG,insideModal as aH,insidePopover as aI,createId as aJ,createTreeMate as aK,useCompitable as aL,isMounted as aM,useAdjustedTo as aN,VBinder as aO,VTarget as aP,VFollower as aQ,vShow as aR,clickoutside$1 as aS,tooltipLight$1 as aT,buttonLight$1 as aU,composite as aV,NTooltip as aW,flatten$2 as aX,getSlot$1 as aY,__unplugin_components_0$5 as aZ,get as a_,fadeInScaleUpTransition as aa,toRef as ab,createIndexGetter as ac,watch as ad,getMargin as ae,provide as af,internalSelectionMenuBodyInjectionKey as ag,resolveWrappedSlot as ah,NBaseLoading as ai,NScrollbar as aj,resolveSlot as ak,formatLength as al,happensIn as am,createIconSwitchTransition as an,useStyle as ao,NIconSwitchTransition as ap,popoverLight$1 as aq,changeColor as ar,watchEffect as as,__unplugin_components_0$8 as at,NPopover as au,Fragment as av,createInjectionKey as aw,resolveSlotWithProps as ax,warnOnce as ay,useMergedState as az,cE as b,cssrAnchorMetaName$1 as b0,onUnmounted as b1,repeat as b2,isSlotEmpty as b3,defAxios as b4,commonjsGlobal as b5,onBeforeMount as b6,reactive as b7,onBeforeUnmount as b8,cloneVNode as b9,commonLight as c,defineComponent as d,useTheme as e,computed as f,createKey as g,h,useThemeClass as i,useRouter as j,createElementBlock as k,createVNode as l,unref as m,popScopeId as n,openBlock as o,pushScopeId as p,createTextVNode as q,__unplugin_components_0$6 as r,createBaseVNode as s,ref as t,useConfig as u,createLocalStorage as v,withCtx as w,toDisplayString as x,withDirectives as y,vModelText as z};
