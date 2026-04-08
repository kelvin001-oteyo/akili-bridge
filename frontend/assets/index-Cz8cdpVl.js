(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function l(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function o(u){if(u.ep)return;u.ep=!0;const m=l(u);fetch(u.href,m)}})();function my(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var xu={exports:{}},Cs={};var g0;function P1(){if(g0)return Cs;g0=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(o,u,m){var f=null;if(m!==void 0&&(f=""+m),u.key!==void 0&&(f=""+u.key),"key"in u){m={};for(var h in u)h!=="key"&&(m[h]=u[h])}else m=u;return u=m.ref,{$$typeof:a,type:o,key:f,ref:u!==void 0?u:null,props:m}}return Cs.Fragment=i,Cs.jsx=l,Cs.jsxs=l,Cs}var y0;function X1(){return y0||(y0=1,xu.exports=P1()),xu.exports}var r=X1(),wu={exports:{}},oe={};var b0;function Z1(){if(b0)return oe;b0=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),w=Symbol.iterator;function T(k){return k===null||typeof k!="object"?null:(k=w&&k[w]||k["@@iterator"],typeof k=="function"?k:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,A={};function M(k,F,J){this.props=k,this.context=F,this.refs=A,this.updater=J||C}M.prototype.isReactComponent={},M.prototype.setState=function(k,F){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,F,"setState")},M.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function R(){}R.prototype=M.prototype;function L(k,F,J){this.props=k,this.context=F,this.refs=A,this.updater=J||C}var q=L.prototype=new R;q.constructor=L,N(q,M.prototype),q.isPureReactComponent=!0;var P=Array.isArray;function ie(){}var Q={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function $(k,F,J){var ae=J.ref;return{$$typeof:a,type:k,key:F,ref:ae!==void 0?ae:null,props:J}}function I(k,F){return $(k.type,F,k.props)}function fe(k){return typeof k=="object"&&k!==null&&k.$$typeof===a}function me(k){var F={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(J){return F[J]})}var X=/\/+/g;function le(k,F){return typeof k=="object"&&k!==null&&k.key!=null?me(""+k.key):F.toString(36)}function he(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(ie,ie):(k.status="pending",k.then(function(F){k.status==="pending"&&(k.status="fulfilled",k.value=F)},function(F){k.status==="pending"&&(k.status="rejected",k.reason=F)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function _(k,F,J,ae,ue){var ye=typeof k;(ye==="undefined"||ye==="boolean")&&(k=null);var Ce=!1;if(k===null)Ce=!0;else switch(ye){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(k.$$typeof){case a:case i:Ce=!0;break;case b:return Ce=k._init,_(Ce(k._payload),F,J,ae,ue)}}if(Ce)return ue=ue(k),Ce=ae===""?"."+le(k,0):ae,P(ue)?(J="",Ce!=null&&(J=Ce.replace(X,"$&/")+"/"),_(ue,F,J,"",function(Oi){return Oi})):ue!=null&&(fe(ue)&&(ue=I(ue,J+(ue.key==null||k&&k.key===ue.key?"":(""+ue.key).replace(X,"$&/")+"/")+Ce)),F.push(ue)),1;Ce=0;var ft=ae===""?".":ae+":";if(P(k))for(var Ye=0;Ye<k.length;Ye++)ae=k[Ye],ye=ft+le(ae,Ye),Ce+=_(ae,F,J,ye,ue);else if(Ye=T(k),typeof Ye=="function")for(k=Ye.call(k),Ye=0;!(ae=k.next()).done;)ae=ae.value,ye=ft+le(ae,Ye++),Ce+=_(ae,F,J,ye,ue);else if(ye==="object"){if(typeof k.then=="function")return _(he(k),F,J,ae,ue);throw F=String(k),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function Z(k,F,J){if(k==null)return k;var ae=[],ue=0;return _(k,ae,"","",function(ye){return F.call(J,ye,ue++)}),ae}function K(k){if(k._status===-1){var F=k._result;F=F(),F.then(function(J){(k._status===0||k._status===-1)&&(k._status=1,k._result=J)},function(J){(k._status===0||k._status===-1)&&(k._status=2,k._result=J)}),k._status===-1&&(k._status=0,k._result=F)}if(k._status===1)return k._result.default;throw k._result}var ce=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},ge={map:Z,forEach:function(k,F,J){Z(k,function(){F.apply(this,arguments)},J)},count:function(k){var F=0;return Z(k,function(){F++}),F},toArray:function(k){return Z(k,function(F){return F})||[]},only:function(k){if(!fe(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return oe.Activity=v,oe.Children=ge,oe.Component=M,oe.Fragment=l,oe.Profiler=u,oe.PureComponent=L,oe.StrictMode=o,oe.Suspense=g,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,oe.__COMPILER_RUNTIME={__proto__:null,c:function(k){return Q.H.useMemoCache(k)}},oe.cache=function(k){return function(){return k.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(k,F,J){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var ae=N({},k.props),ue=k.key;if(F!=null)for(ye in F.key!==void 0&&(ue=""+F.key),F)!W.call(F,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&F.ref===void 0||(ae[ye]=F[ye]);var ye=arguments.length-2;if(ye===1)ae.children=J;else if(1<ye){for(var Ce=Array(ye),ft=0;ft<ye;ft++)Ce[ft]=arguments[ft+2];ae.children=Ce}return $(k.type,ue,ae)},oe.createContext=function(k){return k={$$typeof:f,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:m,_context:k},k},oe.createElement=function(k,F,J){var ae,ue={},ye=null;if(F!=null)for(ae in F.key!==void 0&&(ye=""+F.key),F)W.call(F,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(ue[ae]=F[ae]);var Ce=arguments.length-2;if(Ce===1)ue.children=J;else if(1<Ce){for(var ft=Array(Ce),Ye=0;Ye<Ce;Ye++)ft[Ye]=arguments[Ye+2];ue.children=ft}if(k&&k.defaultProps)for(ae in Ce=k.defaultProps,Ce)ue[ae]===void 0&&(ue[ae]=Ce[ae]);return $(k,ye,ue)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(k){return{$$typeof:h,render:k}},oe.isValidElement=fe,oe.lazy=function(k){return{$$typeof:b,_payload:{_status:-1,_result:k},_init:K}},oe.memo=function(k,F){return{$$typeof:p,type:k,compare:F===void 0?null:F}},oe.startTransition=function(k){var F=Q.T,J={};Q.T=J;try{var ae=k(),ue=Q.S;ue!==null&&ue(J,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(ie,ce)}catch(ye){ce(ye)}finally{F!==null&&J.types!==null&&(F.types=J.types),Q.T=F}},oe.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},oe.use=function(k){return Q.H.use(k)},oe.useActionState=function(k,F,J){return Q.H.useActionState(k,F,J)},oe.useCallback=function(k,F){return Q.H.useCallback(k,F)},oe.useContext=function(k){return Q.H.useContext(k)},oe.useDebugValue=function(){},oe.useDeferredValue=function(k,F){return Q.H.useDeferredValue(k,F)},oe.useEffect=function(k,F){return Q.H.useEffect(k,F)},oe.useEffectEvent=function(k){return Q.H.useEffectEvent(k)},oe.useId=function(){return Q.H.useId()},oe.useImperativeHandle=function(k,F,J){return Q.H.useImperativeHandle(k,F,J)},oe.useInsertionEffect=function(k,F){return Q.H.useInsertionEffect(k,F)},oe.useLayoutEffect=function(k,F){return Q.H.useLayoutEffect(k,F)},oe.useMemo=function(k,F){return Q.H.useMemo(k,F)},oe.useOptimistic=function(k,F){return Q.H.useOptimistic(k,F)},oe.useReducer=function(k,F,J){return Q.H.useReducer(k,F,J)},oe.useRef=function(k){return Q.H.useRef(k)},oe.useState=function(k){return Q.H.useState(k)},oe.useSyncExternalStore=function(k,F,J){return Q.H.useSyncExternalStore(k,F,J)},oe.useTransition=function(){return Q.H.useTransition()},oe.version="19.2.4",oe}var v0;function Cd(){return v0||(v0=1,wu.exports=Z1()),wu.exports}var S=Cd();const W1=my(S);var ju={exports:{}},Es={},Su={exports:{}},Nu={};var x0;function Q1(){return x0||(x0=1,(function(a){function i(_,Z){var K=_.length;_.push(Z);e:for(;0<K;){var ce=K-1>>>1,ge=_[ce];if(0<u(ge,Z))_[ce]=Z,_[K]=ge,K=ce;else break e}}function l(_){return _.length===0?null:_[0]}function o(_){if(_.length===0)return null;var Z=_[0],K=_.pop();if(K!==Z){_[0]=K;e:for(var ce=0,ge=_.length,k=ge>>>1;ce<k;){var F=2*(ce+1)-1,J=_[F],ae=F+1,ue=_[ae];if(0>u(J,K))ae<ge&&0>u(ue,J)?(_[ce]=ue,_[ae]=K,ce=ae):(_[ce]=J,_[F]=K,ce=F);else if(ae<ge&&0>u(ue,K))_[ce]=ue,_[ae]=K,ce=ae;else break e}}return Z}function u(_,Z){var K=_.sortIndex-Z.sortIndex;return K!==0?K:_.id-Z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;a.unstable_now=function(){return m.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var g=[],p=[],b=1,v=null,w=3,T=!1,C=!1,N=!1,A=!1,M=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function q(_){for(var Z=l(p);Z!==null;){if(Z.callback===null)o(p);else if(Z.startTime<=_)o(p),Z.sortIndex=Z.expirationTime,i(g,Z);else break;Z=l(p)}}function P(_){if(N=!1,q(_),!C)if(l(g)!==null)C=!0,ie||(ie=!0,me());else{var Z=l(p);Z!==null&&he(P,Z.startTime-_)}}var ie=!1,Q=-1,W=5,$=-1;function I(){return A?!0:!(a.unstable_now()-$<W)}function fe(){if(A=!1,ie){var _=a.unstable_now();$=_;var Z=!0;try{e:{C=!1,N&&(N=!1,R(Q),Q=-1),T=!0;var K=w;try{t:{for(q(_),v=l(g);v!==null&&!(v.expirationTime>_&&I());){var ce=v.callback;if(typeof ce=="function"){v.callback=null,w=v.priorityLevel;var ge=ce(v.expirationTime<=_);if(_=a.unstable_now(),typeof ge=="function"){v.callback=ge,q(_),Z=!0;break t}v===l(g)&&o(g),q(_)}else o(g);v=l(g)}if(v!==null)Z=!0;else{var k=l(p);k!==null&&he(P,k.startTime-_),Z=!1}}break e}finally{v=null,w=K,T=!1}Z=void 0}}finally{Z?me():ie=!1}}}var me;if(typeof L=="function")me=function(){L(fe)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,le=X.port2;X.port1.onmessage=fe,me=function(){le.postMessage(null)}}else me=function(){M(fe,0)};function he(_,Z){Q=M(function(){_(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(_){_.callback=null},a.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<_?Math.floor(1e3/_):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_next=function(_){switch(w){case 1:case 2:case 3:var Z=3;break;default:Z=w}var K=w;w=Z;try{return _()}finally{w=K}},a.unstable_requestPaint=function(){A=!0},a.unstable_runWithPriority=function(_,Z){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var K=w;w=_;try{return Z()}finally{w=K}},a.unstable_scheduleCallback=function(_,Z,K){var ce=a.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ce+K:ce):K=ce,_){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=K+ge,_={id:b++,callback:Z,priorityLevel:_,startTime:K,expirationTime:ge,sortIndex:-1},K>ce?(_.sortIndex=K,i(p,_),l(g)===null&&_===l(p)&&(N?(R(Q),Q=-1):N=!0,he(P,K-ce))):(_.sortIndex=ge,i(g,_),C||T||(C=!0,ie||(ie=!0,me()))),_},a.unstable_shouldYield=I,a.unstable_wrapCallback=function(_){var Z=w;return function(){var K=w;w=Z;try{return _.apply(this,arguments)}finally{w=K}}}})(Nu)),Nu}var w0;function K1(){return w0||(w0=1,Su.exports=Q1()),Su.exports}var Tu={exports:{}},ut={};var j0;function J1(){if(j0)return ut;j0=1;var a=Cd();function i(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var o={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function m(g,p,b){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:v==null?null:""+v,children:g,containerInfo:p,implementation:b}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ut.createPortal=function(g,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(i(299));return m(g,p,null,b)},ut.flushSync=function(g){var p=f.T,b=o.p;try{if(f.T=null,o.p=2,g)return g()}finally{f.T=p,o.p=b,o.d.f()}},ut.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(g,p))},ut.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},ut.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var b=p.as,v=h(b,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,T=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?o.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:T}):b==="script"&&o.d.X(g,{crossOrigin:v,integrity:w,fetchPriority:T,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ut.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=h(p.as,p.crossOrigin);o.d.M(g,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(g)},ut.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,v=h(b,p.crossOrigin);o.d.L(g,b,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ut.preloadModule=function(g,p){if(typeof g=="string")if(p){var b=h(p.as,p.crossOrigin);o.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(g)},ut.requestFormReset=function(g){o.d.r(g)},ut.unstable_batchedUpdates=function(g,p){return g(p)},ut.useFormState=function(g,p,b){return f.H.useFormState(g,p,b)},ut.useFormStatus=function(){return f.H.useHostTransitionStatus()},ut.version="19.2.4",ut}var S0;function I1(){if(S0)return Tu.exports;S0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Tu.exports=J1(),Tu.exports}var N0;function $1(){if(N0)return Es;N0=1;var a=K1(),i=Cd(),l=I1();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(m(e)!==e)throw Error(o(188))}function p(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,s=t;;){var c=n.return;if(c===null)break;var d=c.alternate;if(d===null){if(s=c.return,s!==null){n=s;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===n)return g(c),e;if(d===s)return g(c),t;d=d.sibling}throw Error(o(188))}if(n.return!==s.return)n=c,s=d;else{for(var y=!1,x=c.child;x;){if(x===n){y=!0,n=c,s=d;break}if(x===s){y=!0,s=c,n=d;break}x=x.sibling}if(!y){for(x=d.child;x;){if(x===n){y=!0,n=d,s=c;break}if(x===s){y=!0,s=d,n=c;break}x=x.sibling}if(!y)throw Error(o(189))}}if(n.alternate!==s)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,w=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),L=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),$=Symbol.for("react.activity"),I=Symbol.for("react.memo_cache_sentinel"),fe=Symbol.iterator;function me(e){return e===null||typeof e!="object"?null:(e=fe&&e[fe]||e["@@iterator"],typeof e=="function"?e:null)}var X=Symbol.for("react.client.reference");function le(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===X?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case M:return"Profiler";case A:return"StrictMode";case P:return"Suspense";case ie:return"SuspenseList";case $:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case L:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:le(e.type)||"Memo";case W:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var he=Array.isArray,_=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},ce=[],ge=-1;function k(e){return{current:e}}function F(e){0>ge||(e.current=ce[ge],ce[ge]=null,ge--)}function J(e,t){ge++,ce[ge]=e.current,e.current=t}var ae=k(null),ue=k(null),ye=k(null),Ce=k(null);function ft(e,t){switch(J(ye,t),J(ue,e),J(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hp(t),e=Up(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F(ae),J(ae,e)}function Ye(){F(ae),F(ue),F(ye)}function Oi(e){e.memoizedState!==null&&J(Ce,e);var t=ae.current,n=Up(t,e.type);t!==n&&(J(ue,e),J(ae,n))}function $s(e){ue.current===e&&(F(ae),F(ue)),Ce.current===e&&(F(Ce),Ss._currentValue=K)}var to,pf;function dn(e){if(to===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);to=t&&t[1]||"",pf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+to+e+pf}var ao=!1;function no(e,t){if(!e||ao)return"";ao=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(H){var B=H}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(H){B=H}e.call(Y.prototype)}}else{try{throw Error()}catch(H){B=H}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(H){if(H&&B&&typeof H.stack=="string")return[H.stack,B.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=s.DetermineComponentFrameRoot(),y=d[0],x=d[1];if(y&&x){var E=y.split(`
`),V=x.split(`
`);for(c=s=0;s<E.length&&!E[s].includes("DetermineComponentFrameRoot");)s++;for(;c<V.length&&!V[c].includes("DetermineComponentFrameRoot");)c++;if(s===E.length||c===V.length)for(s=E.length-1,c=V.length-1;1<=s&&0<=c&&E[s]!==V[c];)c--;for(;1<=s&&0<=c;s--,c--)if(E[s]!==V[c]){if(s!==1||c!==1)do if(s--,c--,0>c||E[s]!==V[c]){var U=`
`+E[s].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=s&&0<=c);break}}}finally{ao=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?dn(n):""}function jv(e,t){switch(e.tag){case 26:case 27:case 5:return dn(e.type);case 16:return dn("Lazy");case 13:return e.child!==t&&t!==null?dn("Suspense Fallback"):dn("Suspense");case 19:return dn("SuspenseList");case 0:case 15:return no(e.type,!1);case 11:return no(e.type.render,!1);case 1:return no(e.type,!0);case 31:return dn("Activity");default:return""}}function gf(e){try{var t="",n=null;do t+=jv(e,n),n=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var io=Object.prototype.hasOwnProperty,so=a.unstable_scheduleCallback,ro=a.unstable_cancelCallback,Sv=a.unstable_shouldYield,Nv=a.unstable_requestPaint,Nt=a.unstable_now,Tv=a.unstable_getCurrentPriorityLevel,yf=a.unstable_ImmediatePriority,bf=a.unstable_UserBlockingPriority,er=a.unstable_NormalPriority,Av=a.unstable_LowPriority,vf=a.unstable_IdlePriority,Cv=a.log,Ev=a.unstable_setDisableYieldValue,Vi=null,Tt=null;function Ra(e){if(typeof Cv=="function"&&Ev(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Vi,e)}catch{}}var At=Math.clz32?Math.clz32:Mv,kv=Math.log,zv=Math.LN2;function Mv(e){return e>>>=0,e===0?32:31-(kv(e)/zv|0)|0}var tr=256,ar=262144,nr=4194304;function fn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ir(e,t,n){var s=e.pendingLanes;if(s===0)return 0;var c=0,d=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var x=s&134217727;return x!==0?(s=x&~d,s!==0?c=fn(s):(y&=x,y!==0?c=fn(y):n||(n=x&~e,n!==0&&(c=fn(n))))):(x=s&~d,x!==0?c=fn(x):y!==0?c=fn(y):n||(n=s&~e,n!==0&&(c=fn(n)))),c===0?0:t!==0&&t!==c&&(t&d)===0&&(d=c&-c,n=t&-t,d>=n||d===32&&(n&4194048)!==0)?t:c}function Bi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Dv(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xf(){var e=nr;return nr<<=1,(nr&62914560)===0&&(nr=4194304),e}function lo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Li(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Rv(e,t,n,s,c,d){var y=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var x=e.entanglements,E=e.expirationTimes,V=e.hiddenUpdates;for(n=y&~n;0<n;){var U=31-At(n),Y=1<<U;x[U]=0,E[U]=-1;var B=V[U];if(B!==null)for(V[U]=null,U=0;U<B.length;U++){var H=B[U];H!==null&&(H.lane&=-536870913)}n&=~Y}s!==0&&wf(e,s,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(y&~t))}function wf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-At(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|n&261930}function jf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-At(n),c=1<<s;c&t|e[s]&t&&(e[s]|=t),n&=~c}}function Sf(e,t){var n=t&-t;return n=(n&42)!==0?1:oo(n),(n&(e.suspendedLanes|t))!==0?0:n}function oo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function co(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Nf(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:c0(e.type))}function Tf(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var Oa=Math.random().toString(36).slice(2),st="__reactFiber$"+Oa,gt="__reactProps$"+Oa,Ln="__reactContainer$"+Oa,uo="__reactEvents$"+Oa,Ov="__reactListeners$"+Oa,Vv="__reactHandles$"+Oa,Af="__reactResources$"+Oa,_i="__reactMarker$"+Oa;function fo(e){delete e[st],delete e[gt],delete e[uo],delete e[Ov],delete e[Vv]}function _n(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ln]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zp(e);e!==null;){if(n=e[st])return n;e=Zp(e)}return t}e=n,n=e.parentNode}return null}function Hn(e){if(e=e[st]||e[Ln]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Hi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Un(e){var t=e[Af];return t||(t=e[Af]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function at(e){e[_i]=!0}var Cf=new Set,Ef={};function mn(e,t){qn(e,t),qn(e+"Capture",t)}function qn(e,t){for(Ef[e]=t,e=0;e<t.length;e++)Cf.add(t[e])}var Bv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kf={},zf={};function Lv(e){return io.call(zf,e)?!0:io.call(kf,e)?!1:Bv.test(e)?zf[e]=!0:(kf[e]=!0,!1)}function sr(e,t,n){if(Lv(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function rr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ma(e,t,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+s)}}function Lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _v(e,t,n){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,d=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(y){n=""+y,d.call(this,y)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return n},setValue:function(y){n=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mo(e){if(!e._valueTracker){var t=Mf(e)?"checked":"value";e._valueTracker=_v(e,t,""+e[t])}}function Df(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=Mf(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hv=/[\n"\\]/g;function _t(e){return e.replace(Hv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ho(e,t,n,s,c,d,y,x){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),t!=null?y==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Lt(t)):e.value!==""+Lt(t)&&(e.value=""+Lt(t)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),t!=null?po(e,y,Lt(t)):n!=null?po(e,y,Lt(n)):s!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Lt(x):e.removeAttribute("name")}function Rf(e,t,n,s,c,d,y,x){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),t!=null||n!=null){if(!(d!=="submit"&&d!=="reset"||t!=null)){mo(e);return}n=n!=null?""+Lt(n):"",t=t!=null?""+Lt(t):n,x||t===e.value||(e.value=t),e.defaultValue=t}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=x?e.checked:!!s,e.defaultChecked=!!s,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),mo(e)}function po(e,t,n){t==="number"&&lr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Gn(e,t,n,s){if(e=e.options,t){t={};for(var c=0;c<n.length;c++)t["$"+n[c]]=!0;for(n=0;n<e.length;n++)c=t.hasOwnProperty("$"+e[n].value),e[n].selected!==c&&(e[n].selected=c),c&&s&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,c=0;c<e.length;c++){if(e[c].value===n){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function Of(e,t,n){if(t!=null&&(t=""+Lt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Lt(n):""}function Vf(e,t,n,s){if(t==null){if(s!=null){if(n!=null)throw Error(o(92));if(he(s)){if(1<s.length)throw Error(o(93));s=s[0]}n=s}n==null&&(n=""),t=n}n=Lt(t),e.defaultValue=n,s=e.textContent,s===n&&s!==""&&s!==null&&(e.value=s),mo(e)}function Yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Uv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bf(e,t,n){var s=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,n):typeof n!="number"||n===0||Uv.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Lf(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var s in n)!n.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in t)s=t[c],t.hasOwnProperty(c)&&n[c]!==s&&Bf(e,c,s)}else for(var d in t)t.hasOwnProperty(d)&&Bf(e,d,t[d])}function go(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function or(e){return Gv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ha(){}var yo=null;function bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fn=null,Pn=null;function _f(e){var t=Hn(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ho(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+_t(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var c=s[gt]||null;if(!c)throw Error(o(90));ho(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<n.length;t++)s=n[t],s.form===e.form&&Df(s)}break e;case"textarea":Of(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Gn(e,!!n.multiple,t,!1)}}}var vo=!1;function Hf(e,t,n){if(vo)return e(t,n);vo=!0;try{var s=e(t);return s}finally{if(vo=!1,(Fn!==null||Pn!==null)&&(Qr(),Fn&&(t=Fn,e=Pn,Pn=Fn=null,_f(t),e)))for(t=0;t<e.length;t++)_f(e[t])}}function Ui(e,t){var n=e.stateNode;if(n===null)return null;var s=n[gt]||null;if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xo=!1;if(pa)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){xo=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{xo=!1}var Va=null,wo=null,cr=null;function Uf(){if(cr)return cr;var e,t=wo,n=t.length,s,c="value"in Va?Va.value:Va.textContent,d=c.length;for(e=0;e<n&&t[e]===c[e];e++);var y=n-e;for(s=1;s<=y&&t[n-s]===c[d-s];s++);return cr=c.slice(e,1<s?1-s:void 0)}function ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function dr(){return!0}function qf(){return!1}function yt(e){function t(n,s,c,d,y){this._reactName=n,this._targetInst=c,this.type=s,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(d):d[x]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?dr:qf,this.isPropagationStopped=qf,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dr)},persist:function(){},isPersistent:dr}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fr=yt(hn),Gi=v({},hn,{view:0,detail:0}),Yv=yt(Gi),jo,So,Yi,mr=v({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:To,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yi&&(Yi&&e.type==="mousemove"?(jo=e.screenX-Yi.screenX,So=e.screenY-Yi.screenY):So=jo=0,Yi=e),jo)},movementY:function(e){return"movementY"in e?e.movementY:So}}),Gf=yt(mr),Fv=v({},mr,{dataTransfer:0}),Pv=yt(Fv),Xv=v({},Gi,{relatedTarget:0}),No=yt(Xv),Zv=v({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Wv=yt(Zv),Qv=v({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kv=yt(Qv),Jv=v({},hn,{data:0}),Yf=yt(Jv),Iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ex[e])?!!t[e]:!1}function To(){return tx}var ax=v({},Gi,{key:function(e){if(e.key){var t=Iv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$v[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:To,charCode:function(e){return e.type==="keypress"?ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nx=yt(ax),ix=v({},mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ff=yt(ix),sx=v({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:To}),rx=yt(sx),lx=v({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ox=yt(lx),cx=v({},mr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=yt(cx),dx=v({},hn,{newState:0,oldState:0}),fx=yt(dx),mx=[9,13,27,32],Ao=pa&&"CompositionEvent"in window,Fi=null;pa&&"documentMode"in document&&(Fi=document.documentMode);var hx=pa&&"TextEvent"in window&&!Fi,Pf=pa&&(!Ao||Fi&&8<Fi&&11>=Fi),Xf=" ",Zf=!1;function Wf(e,t){switch(e){case"keyup":return mx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function px(e,t){switch(e){case"compositionend":return Qf(t);case"keypress":return t.which!==32?null:(Zf=!0,Xf);case"textInput":return e=t.data,e===Xf&&Zf?null:e;default:return null}}function gx(e,t){if(Xn)return e==="compositionend"||!Ao&&Wf(e,t)?(e=Uf(),cr=wo=Va=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pf&&t.locale!=="ko"?null:t.data;default:return null}}var yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yx[e.type]:t==="textarea"}function Jf(e,t,n,s){Fn?Pn?Pn.push(s):Pn=[s]:Fn=s,t=al(t,"onChange"),0<t.length&&(n=new fr("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var Pi=null,Xi=null;function bx(e){Rp(e,0)}function hr(e){var t=Hi(e);if(Df(t))return e}function If(e,t){if(e==="change")return t}var $f=!1;if(pa){var Co;if(pa){var Eo="oninput"in document;if(!Eo){var em=document.createElement("div");em.setAttribute("oninput","return;"),Eo=typeof em.oninput=="function"}Co=Eo}else Co=!1;$f=Co&&(!document.documentMode||9<document.documentMode)}function tm(){Pi&&(Pi.detachEvent("onpropertychange",am),Xi=Pi=null)}function am(e){if(e.propertyName==="value"&&hr(Xi)){var t=[];Jf(t,Xi,e,bo(e)),Hf(bx,t)}}function vx(e,t,n){e==="focusin"?(tm(),Pi=t,Xi=n,Pi.attachEvent("onpropertychange",am)):e==="focusout"&&tm()}function xx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hr(Xi)}function wx(e,t){if(e==="click")return hr(t)}function jx(e,t){if(e==="input"||e==="change")return hr(t)}function Sx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:Sx;function Zi(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var c=n[s];if(!io.call(t,c)||!Ct(e[c],t[c]))return!1}return!0}function nm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function im(e,t){var n=nm(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nm(n)}}function sm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=lr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=lr(e.document)}return t}function ko(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Nx=pa&&"documentMode"in document&&11>=document.documentMode,Zn=null,zo=null,Wi=null,Mo=!1;function lm(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mo||Zn==null||Zn!==lr(s)||(s=Zn,"selectionStart"in s&&ko(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Wi&&Zi(Wi,s)||(Wi=s,s=al(zo,"onSelect"),0<s.length&&(t=new fr("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=Zn)))}function pn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wn={animationend:pn("Animation","AnimationEnd"),animationiteration:pn("Animation","AnimationIteration"),animationstart:pn("Animation","AnimationStart"),transitionrun:pn("Transition","TransitionRun"),transitionstart:pn("Transition","TransitionStart"),transitioncancel:pn("Transition","TransitionCancel"),transitionend:pn("Transition","TransitionEnd")},Do={},om={};pa&&(om=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function gn(e){if(Do[e])return Do[e];if(!Wn[e])return e;var t=Wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in om)return Do[e]=t[n];return e}var cm=gn("animationend"),um=gn("animationiteration"),dm=gn("animationstart"),Tx=gn("transitionrun"),Ax=gn("transitionstart"),Cx=gn("transitioncancel"),fm=gn("transitionend"),mm=new Map,Ro="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ro.push("scrollEnd");function Qt(e,t){mm.set(e,t),mn(t,[e])}var pr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ht=[],Qn=0,Oo=0;function gr(){for(var e=Qn,t=Oo=Qn=0;t<e;){var n=Ht[t];Ht[t++]=null;var s=Ht[t];Ht[t++]=null;var c=Ht[t];Ht[t++]=null;var d=Ht[t];if(Ht[t++]=null,s!==null&&c!==null){var y=s.pending;y===null?c.next=c:(c.next=y.next,y.next=c),s.pending=c}d!==0&&hm(n,c,d)}}function yr(e,t,n,s){Ht[Qn++]=e,Ht[Qn++]=t,Ht[Qn++]=n,Ht[Qn++]=s,Oo|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Vo(e,t,n,s){return yr(e,t,n,s),br(e)}function yn(e,t){return yr(e,null,null,t),br(e)}function hm(e,t,n){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n);for(var c=!1,d=e.return;d!==null;)d.childLanes|=n,s=d.alternate,s!==null&&(s.childLanes|=n),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&t!==null&&(c=31-At(n),e=d.hiddenUpdates,s=e[c],s===null?e[c]=[t]:s.push(t),t.lane=n|536870912),d):null}function br(e){if(50<gs)throw gs=0,Fc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Kn={};function Ex(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,n,s){return new Ex(e,t,n,s)}function Bo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ga(e,t){var n=e.alternate;return n===null?(n=Et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function pm(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vr(e,t,n,s,c,d){var y=0;if(s=e,typeof e=="function")Bo(e)&&(y=1);else if(typeof e=="string")y=R1(e,n,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case $:return e=Et(31,n,t,c),e.elementType=$,e.lanes=d,e;case N:return bn(n.children,c,d,t);case A:y=8,c|=24;break;case M:return e=Et(12,n,t,c|2),e.elementType=M,e.lanes=d,e;case P:return e=Et(13,n,t,c),e.elementType=P,e.lanes=d,e;case ie:return e=Et(19,n,t,c),e.elementType=ie,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:y=10;break e;case R:y=9;break e;case q:y=11;break e;case Q:y=14;break e;case W:y=16,s=null;break e}y=29,n=Error(o(130,e===null?"null":typeof e,"")),s=null}return t=Et(y,n,t,c),t.elementType=e,t.type=s,t.lanes=d,t}function bn(e,t,n,s){return e=Et(7,e,s,t),e.lanes=n,e}function Lo(e,t,n){return e=Et(6,e,null,t),e.lanes=n,e}function gm(e){var t=Et(18,null,null,0);return t.stateNode=e,t}function _o(e,t,n){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ym=new WeakMap;function Ut(e,t){if(typeof e=="object"&&e!==null){var n=ym.get(e);return n!==void 0?n:(t={value:e,source:t,stack:gf(t)},ym.set(e,t),t)}return{value:e,source:t,stack:gf(t)}}var Jn=[],In=0,xr=null,Qi=0,qt=[],Gt=0,Ba=null,sa=1,ra="";function ya(e,t){Jn[In++]=Qi,Jn[In++]=xr,xr=e,Qi=t}function bm(e,t,n){qt[Gt++]=sa,qt[Gt++]=ra,qt[Gt++]=Ba,Ba=e;var s=sa;e=ra;var c=32-At(s)-1;s&=~(1<<c),n+=1;var d=32-At(t)+c;if(30<d){var y=c-c%5;d=(s&(1<<y)-1).toString(32),s>>=y,c-=y,sa=1<<32-At(t)+c|n<<c|s,ra=d+e}else sa=1<<d|n<<c|s,ra=e}function Ho(e){e.return!==null&&(ya(e,1),bm(e,1,0))}function Uo(e){for(;e===xr;)xr=Jn[--In],Jn[In]=null,Qi=Jn[--In],Jn[In]=null;for(;e===Ba;)Ba=qt[--Gt],qt[Gt]=null,ra=qt[--Gt],qt[Gt]=null,sa=qt[--Gt],qt[Gt]=null}function vm(e,t){qt[Gt++]=sa,qt[Gt++]=ra,qt[Gt++]=Ba,sa=t.id,ra=t.overflow,Ba=e}var rt=null,Oe=null,je=!1,La=null,Yt=!1,qo=Error(o(519));function _a(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ki(Ut(t,e)),qo}function xm(e){var t=e.stateNode,n=e.type,s=e.memoizedProps;switch(t[st]=e,t[gt]=s,n){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(n=0;n<bs.length;n++)ve(bs[n],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),Rf(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),Vf(t,s.value,s.defaultValue,s.children)}n=s.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||s.suppressHydrationWarning===!0||Lp(t.textContent,n)?(s.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),s.onScroll!=null&&ve("scroll",t),s.onScrollEnd!=null&&ve("scrollend",t),s.onClick!=null&&(t.onclick=ha),t=!0):t=!1,t||_a(e,!0)}function wm(e){for(rt=e.return;rt;)switch(rt.tag){case 5:case 31:case 13:Yt=!1;return;case 27:case 3:Yt=!0;return;default:rt=rt.return}}function $n(e){if(e!==rt)return!1;if(!je)return wm(e),je=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||su(e.type,e.memoizedProps)),n=!n),n&&Oe&&_a(e),wm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Oe=Xp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Oe=Xp(e)}else t===27?(t=Oe,Ia(e.type)?(e=uu,uu=null,Oe=e):Oe=t):Oe=rt?Pt(e.stateNode.nextSibling):null;return!0}function vn(){Oe=rt=null,je=!1}function Go(){var e=La;return e!==null&&(wt===null?wt=e:wt.push.apply(wt,e),La=null),e}function Ki(e){La===null?La=[e]:La.push(e)}var Yo=k(null),xn=null,ba=null;function Ha(e,t,n){J(Yo,t._currentValue),t._currentValue=n}function va(e){e._currentValue=Yo.current,F(Yo)}function Fo(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function Po(e,t,n,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var y=c.child;d=d.firstContext;e:for(;d!==null;){var x=d;d=c;for(var E=0;E<t.length;E++)if(x.context===t[E]){d.lanes|=n,x=d.alternate,x!==null&&(x.lanes|=n),Fo(d.return,n,e),s||(y=null);break e}d=x.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(o(341));y.lanes|=n,d=y.alternate,d!==null&&(d.lanes|=n),Fo(y,n,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function ei(e,t,n,s){e=null;for(var c=t,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(o(387));if(y=y.memoizedProps,y!==null){var x=c.type;Ct(c.pendingProps.value,y.value)||(e!==null?e.push(x):e=[x])}}else if(c===Ce.current){if(y=c.alternate,y===null)throw Error(o(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ss):e=[Ss])}c=c.return}e!==null&&Po(t,e,n,s),t.flags|=262144}function wr(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wn(e){xn=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function lt(e){return jm(xn,e)}function jr(e,t){return xn===null&&wn(e),jm(e,t)}function jm(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ba===null){if(e===null)throw Error(o(308));ba=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ba=ba.next=t;return n}var kx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},zx=a.unstable_scheduleCallback,Mx=a.unstable_NormalPriority,Ze={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xo(){return{controller:new kx,data:new Map,refCount:0}}function Ji(e){e.refCount--,e.refCount===0&&zx(Mx,function(){e.controller.abort()})}var Ii=null,Zo=0,ti=0,ai=null;function Dx(e,t){if(Ii===null){var n=Ii=[];Zo=0,ti=Kc(),ai={status:"pending",value:void 0,then:function(s){n.push(s)}}}return Zo++,t.then(Sm,Sm),t}function Sm(){if(--Zo===0&&Ii!==null){ai!==null&&(ai.status="fulfilled");var e=Ii;Ii=null,ti=0,ai=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Rx(e,t){var n=[],s={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var c=0;c<n.length;c++)(0,n[c])(t)},function(c){for(s.status="rejected",s.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),s}var Nm=_.S;_.S=function(e,t){lp=Nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Dx(e,t),Nm!==null&&Nm(e,t)};var jn=k(null);function Wo(){var e=jn.current;return e!==null?e:Re.pooledCache}function Sr(e,t){t===null?J(jn,jn.current):J(jn,t.pool)}function Tm(){var e=Wo();return e===null?null:{parent:Ze._currentValue,pool:e}}var ni=Error(o(460)),Qo=Error(o(474)),Nr=Error(o(542)),Tr={then:function(){}};function Am(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cm(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ha,ha),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,km(e),e;default:if(typeof t.status=="string")t.then(ha,ha);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=s}},function(s){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,km(e),e}throw Nn=t,ni}}function Sn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Nn=n,ni):n}}var Nn=null;function Em(){if(Nn===null)throw Error(o(459));var e=Nn;return Nn=null,e}function km(e){if(e===ni||e===Nr)throw Error(o(483))}var ii=null,$i=0;function Ar(e){var t=$i;return $i+=1,ii===null&&(ii=[]),Cm(ii,e,t)}function es(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Cr(e,t){throw t.$$typeof===w?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function zm(e){function t(D,z){if(e){var O=D.deletions;O===null?(D.deletions=[z],D.flags|=16):O.push(z)}}function n(D,z){if(!e)return null;for(;z!==null;)t(D,z),z=z.sibling;return null}function s(D){for(var z=new Map;D!==null;)D.key!==null?z.set(D.key,D):z.set(D.index,D),D=D.sibling;return z}function c(D,z){return D=ga(D,z),D.index=0,D.sibling=null,D}function d(D,z,O){return D.index=O,e?(O=D.alternate,O!==null?(O=O.index,O<z?(D.flags|=67108866,z):O):(D.flags|=67108866,z)):(D.flags|=1048576,z)}function y(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function x(D,z,O,G){return z===null||z.tag!==6?(z=Lo(O,D.mode,G),z.return=D,z):(z=c(z,O),z.return=D,z)}function E(D,z,O,G){var se=O.type;return se===N?U(D,z,O.props.children,G,O.key):z!==null&&(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===W&&Sn(se)===z.type)?(z=c(z,O.props),es(z,O),z.return=D,z):(z=vr(O.type,O.key,O.props,null,D.mode,G),es(z,O),z.return=D,z)}function V(D,z,O,G){return z===null||z.tag!==4||z.stateNode.containerInfo!==O.containerInfo||z.stateNode.implementation!==O.implementation?(z=_o(O,D.mode,G),z.return=D,z):(z=c(z,O.children||[]),z.return=D,z)}function U(D,z,O,G,se){return z===null||z.tag!==7?(z=bn(O,D.mode,G,se),z.return=D,z):(z=c(z,O),z.return=D,z)}function Y(D,z,O){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Lo(""+z,D.mode,O),z.return=D,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case T:return O=vr(z.type,z.key,z.props,null,D.mode,O),es(O,z),O.return=D,O;case C:return z=_o(z,D.mode,O),z.return=D,z;case W:return z=Sn(z),Y(D,z,O)}if(he(z)||me(z))return z=bn(z,D.mode,O,null),z.return=D,z;if(typeof z.then=="function")return Y(D,Ar(z),O);if(z.$$typeof===L)return Y(D,jr(D,z),O);Cr(D,z)}return null}function B(D,z,O,G){var se=z!==null?z.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return se!==null?null:x(D,z,""+O,G);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case T:return O.key===se?E(D,z,O,G):null;case C:return O.key===se?V(D,z,O,G):null;case W:return O=Sn(O),B(D,z,O,G)}if(he(O)||me(O))return se!==null?null:U(D,z,O,G,null);if(typeof O.then=="function")return B(D,z,Ar(O),G);if(O.$$typeof===L)return B(D,z,jr(D,O),G);Cr(D,O)}return null}function H(D,z,O,G,se){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return D=D.get(O)||null,x(z,D,""+G,se);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case T:return D=D.get(G.key===null?O:G.key)||null,E(z,D,G,se);case C:return D=D.get(G.key===null?O:G.key)||null,V(z,D,G,se);case W:return G=Sn(G),H(D,z,O,G,se)}if(he(G)||me(G))return D=D.get(O)||null,U(z,D,G,se,null);if(typeof G.then=="function")return H(D,z,O,Ar(G),se);if(G.$$typeof===L)return H(D,z,O,jr(z,G),se);Cr(z,G)}return null}function ee(D,z,O,G){for(var se=null,Ne=null,ne=z,pe=z=0,we=null;ne!==null&&pe<O.length;pe++){ne.index>pe?(we=ne,ne=null):we=ne.sibling;var Te=B(D,ne,O[pe],G);if(Te===null){ne===null&&(ne=we);break}e&&ne&&Te.alternate===null&&t(D,ne),z=d(Te,z,pe),Ne===null?se=Te:Ne.sibling=Te,Ne=Te,ne=we}if(pe===O.length)return n(D,ne),je&&ya(D,pe),se;if(ne===null){for(;pe<O.length;pe++)ne=Y(D,O[pe],G),ne!==null&&(z=d(ne,z,pe),Ne===null?se=ne:Ne.sibling=ne,Ne=ne);return je&&ya(D,pe),se}for(ne=s(ne);pe<O.length;pe++)we=H(ne,D,pe,O[pe],G),we!==null&&(e&&we.alternate!==null&&ne.delete(we.key===null?pe:we.key),z=d(we,z,pe),Ne===null?se=we:Ne.sibling=we,Ne=we);return e&&ne.forEach(function(nn){return t(D,nn)}),je&&ya(D,pe),se}function re(D,z,O,G){if(O==null)throw Error(o(151));for(var se=null,Ne=null,ne=z,pe=z=0,we=null,Te=O.next();ne!==null&&!Te.done;pe++,Te=O.next()){ne.index>pe?(we=ne,ne=null):we=ne.sibling;var nn=B(D,ne,Te.value,G);if(nn===null){ne===null&&(ne=we);break}e&&ne&&nn.alternate===null&&t(D,ne),z=d(nn,z,pe),Ne===null?se=nn:Ne.sibling=nn,Ne=nn,ne=we}if(Te.done)return n(D,ne),je&&ya(D,pe),se;if(ne===null){for(;!Te.done;pe++,Te=O.next())Te=Y(D,Te.value,G),Te!==null&&(z=d(Te,z,pe),Ne===null?se=Te:Ne.sibling=Te,Ne=Te);return je&&ya(D,pe),se}for(ne=s(ne);!Te.done;pe++,Te=O.next())Te=H(ne,D,pe,Te.value,G),Te!==null&&(e&&Te.alternate!==null&&ne.delete(Te.key===null?pe:Te.key),z=d(Te,z,pe),Ne===null?se=Te:Ne.sibling=Te,Ne=Te);return e&&ne.forEach(function(F1){return t(D,F1)}),je&&ya(D,pe),se}function De(D,z,O,G){if(typeof O=="object"&&O!==null&&O.type===N&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case T:e:{for(var se=O.key;z!==null;){if(z.key===se){if(se=O.type,se===N){if(z.tag===7){n(D,z.sibling),G=c(z,O.props.children),G.return=D,D=G;break e}}else if(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===W&&Sn(se)===z.type){n(D,z.sibling),G=c(z,O.props),es(G,O),G.return=D,D=G;break e}n(D,z);break}else t(D,z);z=z.sibling}O.type===N?(G=bn(O.props.children,D.mode,G,O.key),G.return=D,D=G):(G=vr(O.type,O.key,O.props,null,D.mode,G),es(G,O),G.return=D,D=G)}return y(D);case C:e:{for(se=O.key;z!==null;){if(z.key===se)if(z.tag===4&&z.stateNode.containerInfo===O.containerInfo&&z.stateNode.implementation===O.implementation){n(D,z.sibling),G=c(z,O.children||[]),G.return=D,D=G;break e}else{n(D,z);break}else t(D,z);z=z.sibling}G=_o(O,D.mode,G),G.return=D,D=G}return y(D);case W:return O=Sn(O),De(D,z,O,G)}if(he(O))return ee(D,z,O,G);if(me(O)){if(se=me(O),typeof se!="function")throw Error(o(150));return O=se.call(O),re(D,z,O,G)}if(typeof O.then=="function")return De(D,z,Ar(O),G);if(O.$$typeof===L)return De(D,z,jr(D,O),G);Cr(D,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,z!==null&&z.tag===6?(n(D,z.sibling),G=c(z,O),G.return=D,D=G):(n(D,z),G=Lo(O,D.mode,G),G.return=D,D=G),y(D)):n(D,z)}return function(D,z,O,G){try{$i=0;var se=De(D,z,O,G);return ii=null,se}catch(ne){if(ne===ni||ne===Nr)throw ne;var Ne=Et(29,ne,null,D.mode);return Ne.lanes=G,Ne.return=D,Ne}}}var Tn=zm(!0),Mm=zm(!1),Ua=!1;function Ko(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ae&2)!==0){var c=s.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),s.pending=t,t=br(e),hm(e,null,n),t}return yr(e,s,t,n),br(e)}function ts(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,jf(e,n)}}function Io(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var c=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var y={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};d===null?c=d=y:d=d.next=y,n=n.next}while(n!==null);d===null?c=d=t:d=d.next=t}else c=d=t;n={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:s.shared,callbacks:s.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $o=!1;function as(){if($o){var e=ai;if(e!==null)throw e}}function ns(e,t,n,s){$o=!1;var c=e.updateQueue;Ua=!1;var d=c.firstBaseUpdate,y=c.lastBaseUpdate,x=c.shared.pending;if(x!==null){c.shared.pending=null;var E=x,V=E.next;E.next=null,y===null?d=V:y.next=V,y=E;var U=e.alternate;U!==null&&(U=U.updateQueue,x=U.lastBaseUpdate,x!==y&&(x===null?U.firstBaseUpdate=V:x.next=V,U.lastBaseUpdate=E))}if(d!==null){var Y=c.baseState;y=0,U=V=E=null,x=d;do{var B=x.lane&-536870913,H=B!==x.lane;if(H?(xe&B)===B:(s&B)===B){B!==0&&B===ti&&($o=!0),U!==null&&(U=U.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var ee=e,re=x;B=t;var De=n;switch(re.tag){case 1:if(ee=re.payload,typeof ee=="function"){Y=ee.call(De,Y,B);break e}Y=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=re.payload,B=typeof ee=="function"?ee.call(De,Y,B):ee,B==null)break e;Y=v({},Y,B);break e;case 2:Ua=!0}}B=x.callback,B!==null&&(e.flags|=64,H&&(e.flags|=8192),H=c.callbacks,H===null?c.callbacks=[B]:H.push(B))}else H={lane:B,tag:x.tag,payload:x.payload,callback:x.callback,next:null},U===null?(V=U=H,E=Y):U=U.next=H,y|=B;if(x=x.next,x===null){if(x=c.shared.pending,x===null)break;H=x,x=H.next,H.next=null,c.lastBaseUpdate=H,c.shared.pending=null}}while(!0);U===null&&(E=Y),c.baseState=E,c.firstBaseUpdate=V,c.lastBaseUpdate=U,d===null&&(c.shared.lanes=0),Za|=y,e.lanes=y,e.memoizedState=Y}}function Dm(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Rm(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Dm(n[e],t)}var si=k(null),Er=k(0);function Om(e,t){e=Ea,J(Er,e),J(si,t),Ea=e|t.baseLanes}function ec(){J(Er,Ea),J(si,si.current)}function tc(){Ea=Er.current,F(si),F(Er)}var kt=k(null),Ft=null;function Ya(e){var t=e.alternate;J(Fe,Fe.current&1),J(kt,e),Ft===null&&(t===null||si.current!==null||t.memoizedState!==null)&&(Ft=e)}function ac(e){J(Fe,Fe.current),J(kt,e),Ft===null&&(Ft=e)}function Vm(e){e.tag===22?(J(Fe,Fe.current),J(kt,e),Ft===null&&(Ft=e)):Fa()}function Fa(){J(Fe,Fe.current),J(kt,kt.current)}function zt(e){F(kt),Ft===e&&(Ft=null),F(Fe)}var Fe=k(0);function kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ou(n)||cu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xa=0,de=null,ze=null,We=null,zr=!1,ri=!1,An=!1,Mr=0,is=0,li=null,Ox=0;function Ue(){throw Error(o(321))}function nc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function ic(e,t,n,s,c,d){return xa=d,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?bh:vc,An=!1,d=n(s,c),An=!1,ri&&(d=Lm(t,n,s,c)),Bm(e),d}function Bm(e){_.H=ls;var t=ze!==null&&ze.next!==null;if(xa=0,We=ze=de=null,zr=!1,is=0,li=null,t)throw Error(o(300));e===null||Qe||(e=e.dependencies,e!==null&&wr(e)&&(Qe=!0))}function Lm(e,t,n,s){de=e;var c=0;do{if(ri&&(li=null),is=0,ri=!1,25<=c)throw Error(o(301));if(c+=1,We=ze=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}_.H=vh,d=t(n,s)}while(ri);return d}function Vx(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?ss(t):t,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(de.flags|=1024),t}function sc(){var e=Mr!==0;return Mr=0,e}function rc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function lc(e){if(zr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zr=!1}xa=0,We=ze=de=null,ri=!1,is=Mr=0,li=null}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?de.memoizedState=We=e:We=We.next=e,We}function Pe(){if(ze===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=We===null?de.memoizedState:We.next;if(t!==null)We=t,ze=e;else{if(e===null)throw de.alternate===null?Error(o(467)):Error(o(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},We===null?de.memoizedState=We=e:We=We.next=e}return We}function Dr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ss(e){var t=is;return is+=1,li===null&&(li=[]),e=Cm(li,e,t),t=de,(We===null?t.memoizedState:We.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?bh:vc),e}function Rr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ss(e);if(e.$$typeof===L)return lt(e)}throw Error(o(438,String(e)))}function oc(e){var t=null,n=de.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Dr(),de.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),s=0;s<e;s++)n[s]=I;return t.index++,n}function wa(e,t){return typeof t=="function"?t(e):t}function Or(e){var t=Pe();return cc(t,ze,e)}function cc(e,t,n){var s=e.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=n;var c=e.baseQueue,d=s.pending;if(d!==null){if(c!==null){var y=c.next;c.next=d.next,d.next=y}t.baseQueue=c=d,s.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{t=c.next;var x=y=null,E=null,V=t,U=!1;do{var Y=V.lane&-536870913;if(Y!==V.lane?(xe&Y)===Y:(xa&Y)===Y){var B=V.revertLane;if(B===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),Y===ti&&(U=!0);else if((xa&B)===B){V=V.next,B===ti&&(U=!0);continue}else Y={lane:0,revertLane:V.revertLane,gesture:null,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},E===null?(x=E=Y,y=d):E=E.next=Y,de.lanes|=B,Za|=B;Y=V.action,An&&n(d,Y),d=V.hasEagerState?V.eagerState:n(d,Y)}else B={lane:Y,revertLane:V.revertLane,gesture:V.gesture,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},E===null?(x=E=B,y=d):E=E.next=B,de.lanes|=Y,Za|=Y;V=V.next}while(V!==null&&V!==t);if(E===null?y=d:E.next=x,!Ct(d,e.memoizedState)&&(Qe=!0,U&&(n=ai,n!==null)))throw n;e.memoizedState=d,e.baseState=y,e.baseQueue=E,s.lastRenderedState=d}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function uc(e){var t=Pe(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var s=n.dispatch,c=n.pending,d=t.memoizedState;if(c!==null){n.pending=null;var y=c=c.next;do d=e(d,y.action),y=y.next;while(y!==c);Ct(d,t.memoizedState)||(Qe=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),n.lastRenderedState=d}return[d,s]}function _m(e,t,n){var s=de,c=Pe(),d=je;if(d){if(n===void 0)throw Error(o(407));n=n()}else n=t();var y=!Ct((ze||c).memoizedState,n);if(y&&(c.memoizedState=n,Qe=!0),c=c.queue,mc(qm.bind(null,s,c,e),[e]),c.getSnapshot!==t||y||We!==null&&We.memoizedState.tag&1){if(s.flags|=2048,oi(9,{destroy:void 0},Um.bind(null,s,c,n,t),null),Re===null)throw Error(o(349));d||(xa&127)!==0||Hm(s,t,n)}return n}function Hm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t=Dr(),de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Um(e,t,n,s){t.value=n,t.getSnapshot=s,Gm(t)&&Ym(e)}function qm(e,t,n){return n(function(){Gm(t)&&Ym(e)})}function Gm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function Ym(e){var t=yn(e,2);t!==null&&jt(t,e,2)}function dc(e){var t=mt();if(typeof e=="function"){var n=e;if(e=n(),An){Ra(!0);try{n()}finally{Ra(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:e},t}function Fm(e,t,n,s){return e.baseState=n,cc(e,ze,typeof s=="function"?s:wa)}function Bx(e,t,n,s,c){if(Lr(e))throw Error(o(485));if(e=t.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};_.T!==null?n(!0):d.isTransition=!1,s(d),n=t.pending,n===null?(d.next=t.pending=d,Pm(t,d)):(d.next=n.next,t.pending=n.next=d)}}function Pm(e,t){var n=t.action,s=t.payload,c=e.state;if(t.isTransition){var d=_.T,y={};_.T=y;try{var x=n(c,s),E=_.S;E!==null&&E(y,x),Xm(e,t,x)}catch(V){fc(e,t,V)}finally{d!==null&&y.types!==null&&(d.types=y.types),_.T=d}}else try{d=n(c,s),Xm(e,t,d)}catch(V){fc(e,t,V)}}function Xm(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(s){Zm(e,t,s)},function(s){return fc(e,t,s)}):Zm(e,t,n)}function Zm(e,t,n){t.status="fulfilled",t.value=n,Wm(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Pm(e,n)))}function fc(e,t,n){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=n,Wm(t),t=t.next;while(t!==s)}e.action=null}function Wm(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qm(e,t){return t}function Km(e,t){if(je){var n=Re.formState;if(n!==null){e:{var s=de;if(je){if(Oe){t:{for(var c=Oe,d=Yt;c.nodeType!==8;){if(!d){c=null;break t}if(c=Pt(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Oe=Pt(c.nextSibling),s=c.data==="F!";break e}}_a(s)}s=!1}s&&(t=n[0])}}return n=mt(),n.memoizedState=n.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qm,lastRenderedState:t},n.queue=s,n=ph.bind(null,de,s),s.dispatch=n,s=dc(!1),d=bc.bind(null,de,!1,s.queue),s=mt(),c={state:t,dispatch:null,action:e,pending:null},s.queue=c,n=Bx.bind(null,de,c,d,n),c.dispatch=n,s.memoizedState=e,[t,n,!1]}function Jm(e){var t=Pe();return Im(t,ze,e)}function Im(e,t,n){if(t=cc(e,t,Qm)[0],e=Or(wa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=ss(t)}catch(y){throw y===ni?Nr:y}else s=t;t=Pe();var c=t.queue,d=c.dispatch;return n!==t.memoizedState&&(de.flags|=2048,oi(9,{destroy:void 0},Lx.bind(null,c,n),null)),[s,d,e]}function Lx(e,t){e.action=t}function $m(e){var t=Pe(),n=ze;if(n!==null)return Im(t,n,e);Pe(),t=t.memoizedState,n=Pe();var s=n.queue.dispatch;return n.memoizedState=e,[t,s,!1]}function oi(e,t,n,s){return e={tag:e,create:n,deps:s,inst:t,next:null},t=de.updateQueue,t===null&&(t=Dr(),de.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e),e}function eh(){return Pe().memoizedState}function Vr(e,t,n,s){var c=mt();de.flags|=e,c.memoizedState=oi(1|t,{destroy:void 0},n,s===void 0?null:s)}function Br(e,t,n,s){var c=Pe();s=s===void 0?null:s;var d=c.memoizedState.inst;ze!==null&&s!==null&&nc(s,ze.memoizedState.deps)?c.memoizedState=oi(t,d,n,s):(de.flags|=e,c.memoizedState=oi(1|t,d,n,s))}function th(e,t){Vr(8390656,8,e,t)}function mc(e,t){Br(2048,8,e,t)}function _x(e){de.flags|=4;var t=de.updateQueue;if(t===null)t=Dr(),de.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ah(e){var t=Pe().memoizedState;return _x({ref:t,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function nh(e,t){return Br(4,2,e,t)}function ih(e,t){return Br(4,4,e,t)}function sh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rh(e,t,n){n=n!=null?n.concat([e]):null,Br(4,4,sh.bind(null,t,e),n)}function hc(){}function lh(e,t){var n=Pe();t=t===void 0?null:t;var s=n.memoizedState;return t!==null&&nc(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function oh(e,t){var n=Pe();t=t===void 0?null:t;var s=n.memoizedState;if(t!==null&&nc(t,s[1]))return s[0];if(s=e(),An){Ra(!0);try{e()}finally{Ra(!1)}}return n.memoizedState=[s,t],s}function pc(e,t,n){return n===void 0||(xa&1073741824)!==0&&(xe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=cp(),de.lanes|=e,Za|=e,n)}function ch(e,t,n,s){return Ct(n,t)?n:si.current!==null?(e=pc(e,n,s),Ct(e,t)||(Qe=!0),e):(xa&42)===0||(xa&1073741824)!==0&&(xe&261930)===0?(Qe=!0,e.memoizedState=n):(e=cp(),de.lanes|=e,Za|=e,t)}function uh(e,t,n,s,c){var d=Z.p;Z.p=d!==0&&8>d?d:8;var y=_.T,x={};_.T=x,bc(e,!1,t,n);try{var E=c(),V=_.S;if(V!==null&&V(x,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var U=Rx(E,s);rs(e,t,U,Rt(e))}else rs(e,t,s,Rt(e))}catch(Y){rs(e,t,{then:function(){},status:"rejected",reason:Y},Rt())}finally{Z.p=d,y!==null&&x.types!==null&&(y.types=x.types),_.T=y}}function Hx(){}function gc(e,t,n,s){if(e.tag!==5)throw Error(o(476));var c=dh(e).queue;uh(e,c,t,K,n===null?Hx:function(){return fh(e),n(s)})}function dh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:K},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function fh(e){var t=dh(e);t.next===null&&(t=e.alternate.memoizedState),rs(e,t.next.queue,{},Rt())}function yc(){return lt(Ss)}function mh(){return Pe().memoizedState}function hh(){return Pe().memoizedState}function Ux(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Rt();e=qa(n);var s=Ga(t,e,n);s!==null&&(jt(s,t,n),ts(s,t,n)),t={cache:Xo()},e.payload=t;return}t=t.return}}function qx(e,t,n){var s=Rt();n={lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Lr(e)?gh(t,n):(n=Vo(e,t,n,s),n!==null&&(jt(n,e,s),yh(n,t,s)))}function ph(e,t,n){var s=Rt();rs(e,t,n,s)}function rs(e,t,n,s){var c={lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lr(e))gh(t,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var y=t.lastRenderedState,x=d(y,n);if(c.hasEagerState=!0,c.eagerState=x,Ct(x,y))return yr(e,t,c,0),Re===null&&gr(),!1}catch{}if(n=Vo(e,t,c,s),n!==null)return jt(n,e,s),yh(n,t,s),!0}return!1}function bc(e,t,n,s){if(s={lane:2,revertLane:Kc(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Lr(e)){if(t)throw Error(o(479))}else t=Vo(e,n,s,2),t!==null&&jt(t,e,2)}function Lr(e){var t=e.alternate;return e===de||t!==null&&t===de}function gh(e,t){ri=zr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yh(e,t,n){if((n&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,jf(e,n)}}var ls={readContext:lt,use:Rr,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};ls.useEffectEvent=Ue;var bh={readContext:lt,use:Rr,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:th,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Vr(4194308,4,sh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vr(4194308,4,e,t)},useInsertionEffect:function(e,t){Vr(4,2,e,t)},useMemo:function(e,t){var n=mt();t=t===void 0?null:t;var s=e();if(An){Ra(!0);try{e()}finally{Ra(!1)}}return n.memoizedState=[s,t],s},useReducer:function(e,t,n){var s=mt();if(n!==void 0){var c=n(t);if(An){Ra(!0);try{n(t)}finally{Ra(!1)}}}else c=t;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=qx.bind(null,de,e),[s.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:function(e){e=dc(e);var t=e.queue,n=ph.bind(null,de,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hc,useDeferredValue:function(e,t){var n=mt();return pc(n,e,t)},useTransition:function(){var e=dc(!1);return e=uh.bind(null,de,e.queue,!0,!1),mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var s=de,c=mt();if(je){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Re===null)throw Error(o(349));(xe&127)!==0||Hm(s,t,n)}c.memoizedState=n;var d={value:n,getSnapshot:t};return c.queue=d,th(qm.bind(null,s,d,e),[e]),s.flags|=2048,oi(9,{destroy:void 0},Um.bind(null,s,d,n,t),null),n},useId:function(){var e=mt(),t=Re.identifierPrefix;if(je){var n=ra,s=sa;n=(s&~(1<<32-At(s)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Mr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Ox++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:yc,useFormState:Km,useActionState:Km,useOptimistic:function(e){var t=mt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=bc.bind(null,de,!0,n),n.dispatch=t,[e,t]},useMemoCache:oc,useCacheRefresh:function(){return mt().memoizedState=Ux.bind(null,de)},useEffectEvent:function(e){var t=mt(),n={impl:e};return t.memoizedState=n,function(){if((Ae&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},vc={readContext:lt,use:Rr,useCallback:lh,useContext:lt,useEffect:mc,useImperativeHandle:rh,useInsertionEffect:nh,useLayoutEffect:ih,useMemo:oh,useReducer:Or,useRef:eh,useState:function(){return Or(wa)},useDebugValue:hc,useDeferredValue:function(e,t){var n=Pe();return ch(n,ze.memoizedState,e,t)},useTransition:function(){var e=Or(wa)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:ss(e),t]},useSyncExternalStore:_m,useId:mh,useHostTransitionStatus:yc,useFormState:Jm,useActionState:Jm,useOptimistic:function(e,t){var n=Pe();return Fm(n,ze,e,t)},useMemoCache:oc,useCacheRefresh:hh};vc.useEffectEvent=ah;var vh={readContext:lt,use:Rr,useCallback:lh,useContext:lt,useEffect:mc,useImperativeHandle:rh,useInsertionEffect:nh,useLayoutEffect:ih,useMemo:oh,useReducer:uc,useRef:eh,useState:function(){return uc(wa)},useDebugValue:hc,useDeferredValue:function(e,t){var n=Pe();return ze===null?pc(n,e,t):ch(n,ze.memoizedState,e,t)},useTransition:function(){var e=uc(wa)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:ss(e),t]},useSyncExternalStore:_m,useId:mh,useHostTransitionStatus:yc,useFormState:$m,useActionState:$m,useOptimistic:function(e,t){var n=Pe();return ze!==null?Fm(n,ze,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:oc,useCacheRefresh:hh};vh.useEffectEvent=ah;function xc(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wc={enqueueSetState:function(e,t,n){e=e._reactInternals;var s=Rt(),c=qa(s);c.payload=t,n!=null&&(c.callback=n),t=Ga(e,c,s),t!==null&&(jt(t,e,s),ts(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=Rt(),c=qa(s);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=Ga(e,c,s),t!==null&&(jt(t,e,s),ts(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Rt(),s=qa(n);s.tag=2,t!=null&&(s.callback=t),t=Ga(e,s,n),t!==null&&(jt(t,e,n),ts(t,e,n))}};function xh(e,t,n,s,c,d,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,y):t.prototype&&t.prototype.isPureReactComponent?!Zi(n,s)||!Zi(c,d):!0}function wh(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&wc.enqueueReplaceState(t,t.state,null)}function Cn(e,t){var n=t;if("ref"in t){n={};for(var s in t)s!=="ref"&&(n[s]=t[s])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var c in e)n[c]===void 0&&(n[c]=e[c])}return n}function jh(e){pr(e)}function Sh(e){console.error(e)}function Nh(e){pr(e)}function _r(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function Th(e,t,n){try{var s=e.onCaughtError;s(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function jc(e,t,n){return n=qa(n),n.tag=3,n.payload={element:null},n.callback=function(){_r(e,t)},n}function Ah(e){return e=qa(e),e.tag=3,e}function Ch(e,t,n,s){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;e.payload=function(){return c(d)},e.callback=function(){Th(t,n,s)}}var y=n.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Th(t,n,s),typeof c!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var x=s.stack;this.componentDidCatch(s.value,{componentStack:x!==null?x:""})})}function Gx(e,t,n,s,c){if(n.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=n.alternate,t!==null&&ei(t,n,c,!0),n=kt.current,n!==null){switch(n.tag){case 31:case 13:return Ft===null?Kr():n.alternate===null&&qe===0&&(qe=3),n.flags&=-257,n.flags|=65536,n.lanes=c,s===Tr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([s]):t.add(s),Zc(e,s,c)),!1;case 22:return n.flags|=65536,s===Tr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([s]):n.add(s)),Zc(e,s,c)),!1}throw Error(o(435,n.tag))}return Zc(e,s,c),Kr(),!1}if(je)return t=kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,s!==qo&&(e=Error(o(422),{cause:s}),Ki(Ut(e,n)))):(s!==qo&&(t=Error(o(423),{cause:s}),Ki(Ut(t,n))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=Ut(s,n),c=jc(e.stateNode,s,c),Io(e,c),qe!==4&&(qe=2)),!1;var d=Error(o(520),{cause:s});if(d=Ut(d,n),ps===null?ps=[d]:ps.push(d),qe!==4&&(qe=2),t===null)return!0;s=Ut(s,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=c&-c,n.lanes|=e,e=jc(n.stateNode,s,e),Io(n,e),!1;case 1:if(t=n.type,d=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Wa===null||!Wa.has(d))))return n.flags|=65536,c&=-c,n.lanes|=c,c=Ah(c),Ch(c,e,n,s),Io(n,c),!1}n=n.return}while(n!==null);return!1}var Sc=Error(o(461)),Qe=!1;function ot(e,t,n,s){t.child=e===null?Mm(t,null,n,s):Tn(t,e.child,n,s)}function Eh(e,t,n,s,c){n=n.render;var d=t.ref;if("ref"in s){var y={};for(var x in s)x!=="ref"&&(y[x]=s[x])}else y=s;return wn(t),s=ic(e,t,n,y,d,c),x=sc(),e!==null&&!Qe?(rc(e,t,c),ja(e,t,c)):(je&&x&&Ho(t),t.flags|=1,ot(e,t,s,c),t.child)}function kh(e,t,n,s,c){if(e===null){var d=n.type;return typeof d=="function"&&!Bo(d)&&d.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=d,zh(e,t,d,s,c)):(e=vr(n.type,null,s,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,!Mc(e,c)){var y=d.memoizedProps;if(n=n.compare,n=n!==null?n:Zi,n(y,s)&&e.ref===t.ref)return ja(e,t,c)}return t.flags|=1,e=ga(d,s),e.ref=t.ref,e.return=t,t.child=e}function zh(e,t,n,s,c){if(e!==null){var d=e.memoizedProps;if(Zi(d,s)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=s=d,Mc(e,c))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,ja(e,t,c)}return Nc(e,t,n,s,c)}function Mh(e,t,n,s){var c=s.children,d=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(d=d!==null?d.baseLanes|n:n,e!==null){for(s=t.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~d}else s=0,t.child=null;return Dh(e,t,d,n,s)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sr(t,d!==null?d.cachePool:null),d!==null?Om(t,d):ec(),Vm(t);else return s=t.lanes=536870912,Dh(e,t,d!==null?d.baseLanes|n:n,n,s)}else d!==null?(Sr(t,d.cachePool),Om(t,d),Fa(),t.memoizedState=null):(e!==null&&Sr(t,null),ec(),Fa());return ot(e,t,c,n),t.child}function os(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Dh(e,t,n,s,c){var d=Wo();return d=d===null?null:{parent:Ze._currentValue,pool:d},t.memoizedState={baseLanes:n,cachePool:d},e!==null&&Sr(t,null),ec(),Vm(t),e!==null&&ei(e,t,s,!0),t.childLanes=c,null}function Hr(e,t){return t=qr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Rh(e,t,n){return Tn(t,e.child,null,n),e=Hr(t,t.pendingProps),e.flags|=2,zt(t),t.memoizedState=null,e}function Yx(e,t,n){var s=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(je){if(s.mode==="hidden")return e=Hr(t,s),t.lanes=536870912,os(null,e);if(ac(t),(e=Oe)?(e=Pp(e,Yt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:sa,overflow:ra}:null,retryLane:536870912,hydrationErrors:null},n=gm(e),n.return=t,t.child=n,rt=t,Oe=null)):e=null,e===null)throw _a(t);return t.lanes=536870912,null}return Hr(t,s)}var d=e.memoizedState;if(d!==null){var y=d.dehydrated;if(ac(t),c)if(t.flags&256)t.flags&=-257,t=Rh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Qe||ei(e,t,n,!1),c=(n&e.childLanes)!==0,Qe||c){if(s=Re,s!==null&&(y=Sf(s,n),y!==0&&y!==d.retryLane))throw d.retryLane=y,yn(e,y),jt(s,e,y),Sc;Kr(),t=Rh(e,t,n)}else e=d.treeContext,Oe=Pt(y.nextSibling),rt=t,je=!0,La=null,Yt=!1,e!==null&&vm(t,e),t=Hr(t,s),t.flags|=4096;return t}return e=ga(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ur(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Nc(e,t,n,s,c){return wn(t),n=ic(e,t,n,s,void 0,c),s=sc(),e!==null&&!Qe?(rc(e,t,c),ja(e,t,c)):(je&&s&&Ho(t),t.flags|=1,ot(e,t,n,c),t.child)}function Oh(e,t,n,s,c,d){return wn(t),t.updateQueue=null,n=Lm(t,s,n,c),Bm(e),s=sc(),e!==null&&!Qe?(rc(e,t,d),ja(e,t,d)):(je&&s&&Ho(t),t.flags|=1,ot(e,t,n,d),t.child)}function Vh(e,t,n,s,c){if(wn(t),t.stateNode===null){var d=Kn,y=n.contextType;typeof y=="object"&&y!==null&&(d=lt(y)),d=new n(s,d),t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=wc,t.stateNode=d,d._reactInternals=t,d=t.stateNode,d.props=s,d.state=t.memoizedState,d.refs={},Ko(t),y=n.contextType,d.context=typeof y=="object"&&y!==null?lt(y):Kn,d.state=t.memoizedState,y=n.getDerivedStateFromProps,typeof y=="function"&&(xc(t,n,y,s),d.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&wc.enqueueReplaceState(d,d.state,null),ns(t,s,d,c),as(),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){d=t.stateNode;var x=t.memoizedProps,E=Cn(n,x);d.props=E;var V=d.context,U=n.contextType;y=Kn,typeof U=="object"&&U!==null&&(y=lt(U));var Y=n.getDerivedStateFromProps;U=typeof Y=="function"||typeof d.getSnapshotBeforeUpdate=="function",x=t.pendingProps!==x,U||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x||V!==y)&&wh(t,d,s,y),Ua=!1;var B=t.memoizedState;d.state=B,ns(t,s,d,c),as(),V=t.memoizedState,x||B!==V||Ua?(typeof Y=="function"&&(xc(t,n,Y,s),V=t.memoizedState),(E=Ua||xh(t,n,E,s,B,V,y))?(U||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=V),d.props=s,d.state=V,d.context=y,s=E):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{d=t.stateNode,Jo(e,t),y=t.memoizedProps,U=Cn(n,y),d.props=U,Y=t.pendingProps,B=d.context,V=n.contextType,E=Kn,typeof V=="object"&&V!==null&&(E=lt(V)),x=n.getDerivedStateFromProps,(V=typeof x=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==Y||B!==E)&&wh(t,d,s,E),Ua=!1,B=t.memoizedState,d.state=B,ns(t,s,d,c),as();var H=t.memoizedState;y!==Y||B!==H||Ua||e!==null&&e.dependencies!==null&&wr(e.dependencies)?(typeof x=="function"&&(xc(t,n,x,s),H=t.memoizedState),(U=Ua||xh(t,n,U,s,B,H,E)||e!==null&&e.dependencies!==null&&wr(e.dependencies))?(V||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(s,H,E),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(s,H,E)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=H),d.props=s,d.state=H,d.context=E,s=U):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),s=!1)}return d=s,Ur(e,t),s=(t.flags&128)!==0,d||s?(d=t.stateNode,n=s&&typeof n.getDerivedStateFromError!="function"?null:d.render(),t.flags|=1,e!==null&&s?(t.child=Tn(t,e.child,null,c),t.child=Tn(t,null,n,c)):ot(e,t,n,c),t.memoizedState=d.state,e=t.child):e=ja(e,t,c),e}function Bh(e,t,n,s){return vn(),t.flags|=256,ot(e,t,n,s),t.child}var Tc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ac(e){return{baseLanes:e,cachePool:Tm()}}function Cc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Dt),e}function Lh(e,t,n){var s=t.pendingProps,c=!1,d=(t.flags&128)!==0,y;if((y=d)||(y=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),y&&(c=!0,t.flags&=-129),y=(t.flags&32)!==0,t.flags&=-33,e===null){if(je){if(c?Ya(t):Fa(),(e=Oe)?(e=Pp(e,Yt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:sa,overflow:ra}:null,retryLane:536870912,hydrationErrors:null},n=gm(e),n.return=t,t.child=n,rt=t,Oe=null)):e=null,e===null)throw _a(t);return cu(e)?t.lanes=32:t.lanes=536870912,null}var x=s.children;return s=s.fallback,c?(Fa(),c=t.mode,x=qr({mode:"hidden",children:x},c),s=bn(s,c,n,null),x.return=t,s.return=t,x.sibling=s,t.child=x,s=t.child,s.memoizedState=Ac(n),s.childLanes=Cc(e,y,n),t.memoizedState=Tc,os(null,s)):(Ya(t),Ec(t,x))}var E=e.memoizedState;if(E!==null&&(x=E.dehydrated,x!==null)){if(d)t.flags&256?(Ya(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState!==null?(Fa(),t.child=e.child,t.flags|=128,t=null):(Fa(),x=s.fallback,c=t.mode,s=qr({mode:"visible",children:s.children},c),x=bn(x,c,n,null),x.flags|=2,s.return=t,x.return=t,s.sibling=x,t.child=s,Tn(t,e.child,null,n),s=t.child,s.memoizedState=Ac(n),s.childLanes=Cc(e,y,n),t.memoizedState=Tc,t=os(null,s));else if(Ya(t),cu(x)){if(y=x.nextSibling&&x.nextSibling.dataset,y)var V=y.dgst;y=V,s=Error(o(419)),s.stack="",s.digest=y,Ki({value:s,source:null,stack:null}),t=kc(e,t,n)}else if(Qe||ei(e,t,n,!1),y=(n&e.childLanes)!==0,Qe||y){if(y=Re,y!==null&&(s=Sf(y,n),s!==0&&s!==E.retryLane))throw E.retryLane=s,yn(e,s),jt(y,e,s),Sc;ou(x)||Kr(),t=kc(e,t,n)}else ou(x)?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,Oe=Pt(x.nextSibling),rt=t,je=!0,La=null,Yt=!1,e!==null&&vm(t,e),t=Ec(t,s.children),t.flags|=4096);return t}return c?(Fa(),x=s.fallback,c=t.mode,E=e.child,V=E.sibling,s=ga(E,{mode:"hidden",children:s.children}),s.subtreeFlags=E.subtreeFlags&65011712,V!==null?x=ga(V,x):(x=bn(x,c,n,null),x.flags|=2),x.return=t,s.return=t,s.sibling=x,t.child=s,os(null,s),s=t.child,x=e.child.memoizedState,x===null?x=Ac(n):(c=x.cachePool,c!==null?(E=Ze._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=Tm(),x={baseLanes:x.baseLanes|n,cachePool:c}),s.memoizedState=x,s.childLanes=Cc(e,y,n),t.memoizedState=Tc,os(e.child,s)):(Ya(t),n=e.child,e=n.sibling,n=ga(n,{mode:"visible",children:s.children}),n.return=t,n.sibling=null,e!==null&&(y=t.deletions,y===null?(t.deletions=[e],t.flags|=16):y.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=qr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function qr(e,t){return e=Et(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Tn(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _h(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Fo(e.return,t,n)}function zc(e,t,n,s,c,d){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:c,treeForkCount:d}:(y.isBackwards=t,y.rendering=null,y.renderingStartTime=0,y.last=s,y.tail=n,y.tailMode=c,y.treeForkCount=d)}function Hh(e,t,n){var s=t.pendingProps,c=s.revealOrder,d=s.tail;s=s.children;var y=Fe.current,x=(y&2)!==0;if(x?(y=y&1|2,t.flags|=128):y&=1,J(Fe,y),ot(e,t,s,n),s=je?Qi:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_h(e,n,t);else if(e.tag===19)_h(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(n=t.child,c=null;n!==null;)e=n.alternate,e!==null&&kr(e)===null&&(c=n),n=n.sibling;n=c,n===null?(c=t.child,t.child=null):(c=n.sibling,n.sibling=null),zc(t,!1,c,n,d,s);break;case"backwards":case"unstable_legacy-backwards":for(n=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&kr(e)===null){t.child=c;break}e=c.sibling,c.sibling=n,n=c,c=e}zc(t,!0,n,null,d,s);break;case"together":zc(t,!1,null,null,void 0,s);break;default:t.memoizedState=null}return t.child}function ja(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Za|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ei(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=ga(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ga(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&wr(e)))}function Fx(e,t,n){switch(t.tag){case 3:ft(t,t.stateNode.containerInfo),Ha(t,Ze,e.memoizedState.cache),vn();break;case 27:case 5:Oi(t);break;case 4:ft(t,t.stateNode.containerInfo);break;case 10:Ha(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ac(t),null;break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(Ya(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Lh(e,t,n):(Ya(t),e=ja(e,t,n),e!==null?e.sibling:null);Ya(t);break;case 19:var c=(e.flags&128)!==0;if(s=(n&t.childLanes)!==0,s||(ei(e,t,n,!1),s=(n&t.childLanes)!==0),c){if(s)return Hh(e,t,n);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),J(Fe,Fe.current),s)break;return null;case 22:return t.lanes=0,Mh(e,t,n,t.pendingProps);case 24:Ha(t,Ze,e.memoizedState.cache)}return ja(e,t,n)}function Uh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!Mc(e,n)&&(t.flags&128)===0)return Qe=!1,Fx(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,je&&(t.flags&1048576)!==0&&bm(t,Qi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=Sn(t.elementType),t.type=e,typeof e=="function")Bo(e)?(s=Cn(e,s),t.tag=1,t=Vh(null,t,e,s,n)):(t.tag=0,t=Nc(null,t,e,s,n));else{if(e!=null){var c=e.$$typeof;if(c===q){t.tag=11,t=Eh(null,t,e,s,n);break e}else if(c===Q){t.tag=14,t=kh(null,t,e,s,n);break e}}throw t=le(e)||e,Error(o(306,t,""))}}return t;case 0:return Nc(e,t,t.type,t.pendingProps,n);case 1:return s=t.type,c=Cn(s,t.pendingProps),Vh(e,t,s,c,n);case 3:e:{if(ft(t,t.stateNode.containerInfo),e===null)throw Error(o(387));s=t.pendingProps;var d=t.memoizedState;c=d.element,Jo(e,t),ns(t,s,null,n);var y=t.memoizedState;if(s=y.cache,Ha(t,Ze,s),s!==d.cache&&Po(t,[Ze],n,!0),as(),s=y.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:y.cache},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){t=Bh(e,t,s,n);break e}else if(s!==c){c=Ut(Error(o(424)),t),Ki(c),t=Bh(e,t,s,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Oe=Pt(e.firstChild),rt=t,je=!0,La=null,Yt=!0,n=Mm(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),s===c){t=ja(e,t,n);break e}ot(e,t,s,n)}t=t.child}return t;case 26:return Ur(e,t),e===null?(n=Jp(t.type,null,t.pendingProps,null))?t.memoizedState=n:je||(n=t.type,e=t.pendingProps,s=nl(ye.current).createElement(n),s[st]=t,s[gt]=e,ct(s,n,e),at(s),t.stateNode=s):t.memoizedState=Jp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Oi(t),e===null&&je&&(s=t.stateNode=Wp(t.type,t.pendingProps,ye.current),rt=t,Yt=!0,c=Oe,Ia(t.type)?(uu=c,Oe=Pt(s.firstChild)):Oe=c),ot(e,t,t.pendingProps.children,n),Ur(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&je&&((c=s=Oe)&&(s=x1(s,t.type,t.pendingProps,Yt),s!==null?(t.stateNode=s,rt=t,Oe=Pt(s.firstChild),Yt=!1,c=!0):c=!1),c||_a(t)),Oi(t),c=t.type,d=t.pendingProps,y=e!==null?e.memoizedProps:null,s=d.children,su(c,d)?s=null:y!==null&&su(c,y)&&(t.flags|=32),t.memoizedState!==null&&(c=ic(e,t,Vx,null,null,n),Ss._currentValue=c),Ur(e,t),ot(e,t,s,n),t.child;case 6:return e===null&&je&&((e=n=Oe)&&(n=w1(n,t.pendingProps,Yt),n!==null?(t.stateNode=n,rt=t,Oe=null,e=!0):e=!1),e||_a(t)),null;case 13:return Lh(e,t,n);case 4:return ft(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Tn(t,null,s,n):ot(e,t,s,n),t.child;case 11:return Eh(e,t,t.type,t.pendingProps,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:return s=t.pendingProps,Ha(t,t.type,s.value),ot(e,t,s.children,n),t.child;case 9:return c=t.type._context,s=t.pendingProps.children,wn(t),c=lt(c),s=s(c),t.flags|=1,ot(e,t,s,n),t.child;case 14:return kh(e,t,t.type,t.pendingProps,n);case 15:return zh(e,t,t.type,t.pendingProps,n);case 19:return Hh(e,t,n);case 31:return Yx(e,t,n);case 22:return Mh(e,t,n,t.pendingProps);case 24:return wn(t),s=lt(Ze),e===null?(c=Wo(),c===null&&(c=Re,d=Xo(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=n),c=d),t.memoizedState={parent:s,cache:c},Ko(t),Ha(t,Ze,c)):((e.lanes&n)!==0&&(Jo(e,t),ns(t,null,null,n),as()),c=e.memoizedState,d=t.memoizedState,c.parent!==s?(c={parent:s,cache:s},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),Ha(t,Ze,s)):(s=d.cache,Ha(t,Ze,s),s!==c.cache&&Po(t,[Ze],n,!0))),ot(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Sa(e){e.flags|=4}function Dc(e,t,n,s,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(mp())e.flags|=8192;else throw Nn=Tr,Qo}else e.flags&=-16777217}function qh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!a0(t))if(mp())e.flags|=8192;else throw Nn=Tr,Qo}function Gr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?xf():536870912,e.lanes|=t,fi|=t)}function cs(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var c=e.child;c!==null;)n|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)n|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function Px(e,t,n){var s=t.pendingProps;switch(Uo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return n=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),va(Ze),Ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&($n(t)?Sa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Go())),Ve(t),null;case 26:var c=t.type,d=t.memoizedState;return e===null?(Sa(t),d!==null?(Ve(t),qh(t,d)):(Ve(t),Dc(t,c,null,s,n))):d?d!==e.memoizedState?(Sa(t),Ve(t),qh(t,d)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&Sa(t),Ve(t),Dc(t,c,e,s,n)),null;case 27:if($s(t),n=ye.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Sa(t);else{if(!s){if(t.stateNode===null)throw Error(o(166));return Ve(t),null}e=ae.current,$n(t)?xm(t):(e=Wp(c,s,n),t.stateNode=e,Sa(t))}return Ve(t),null;case 5:if($s(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Sa(t);else{if(!s){if(t.stateNode===null)throw Error(o(166));return Ve(t),null}if(d=ae.current,$n(t))xm(t);else{var y=nl(ye.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof s.is=="string"?y.createElement("select",{is:s.is}):y.createElement("select"),s.multiple?d.multiple=!0:s.size&&(d.size=s.size);break;default:d=typeof s.is=="string"?y.createElement(c,{is:s.is}):y.createElement(c)}}d[st]=t,d[gt]=s;e:for(y=t.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}t.stateNode=d;e:switch(ct(d,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Sa(t)}}return Ve(t),Dc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&Sa(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(e=ye.current,$n(t)){if(e=t.stateNode,n=t.memoizedProps,s=null,c=rt,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||s!==null&&s.suppressHydrationWarning===!0||Lp(e.nodeValue,n)),e||_a(t,!0)}else e=nl(e).createTextNode(s),e[st]=t,t.stateNode=e}return Ve(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(s=$n(t),n!==null){if(e===null){if(!s)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[st]=t}else vn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else n=Go(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(zt(t),t):(zt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Ve(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=$n(t),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[st]=t}else vn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),c=!1}else c=Go(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(zt(t),t):(zt(t),null)}return zt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=s!==null,e=e!==null&&e.memoizedState!==null,n&&(s=t.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),d=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(d=s.memoizedState.cachePool.pool),d!==c&&(s.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Gr(t,t.updateQueue),Ve(t),null);case 4:return Ye(),e===null&&eu(t.stateNode.containerInfo),Ve(t),null;case 10:return va(t.type),Ve(t),null;case 19:if(F(Fe),s=t.memoizedState,s===null)return Ve(t),null;if(c=(t.flags&128)!==0,d=s.rendering,d===null)if(c)cs(s,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=kr(e),d!==null){for(t.flags|=128,cs(s,!1),e=d.updateQueue,t.updateQueue=e,Gr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)pm(n,e),n=n.sibling;return J(Fe,Fe.current&1|2),je&&ya(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&Nt()>Zr&&(t.flags|=128,c=!0,cs(s,!1),t.lanes=4194304)}else{if(!c)if(e=kr(d),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,Gr(t,e),cs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!d.alternate&&!je)return Ve(t),null}else 2*Nt()-s.renderingStartTime>Zr&&n!==536870912&&(t.flags|=128,c=!0,cs(s,!1),t.lanes=4194304);s.isBackwards?(d.sibling=t.child,t.child=d):(e=s.last,e!==null?e.sibling=d:t.child=d,s.last=d)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=Fe.current,J(Fe,c?n&1|2:n&1),je&&ya(t,s.treeForkCount),e):(Ve(t),null);case 22:case 23:return zt(t),tc(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(n&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),n=t.updateQueue,n!==null&&Gr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==n&&(t.flags|=2048),e!==null&&F(jn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),va(Ze),Ve(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Xx(e,t){switch(Uo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return va(Ze),Ye(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $s(t),null;case 31:if(t.memoizedState!==null){if(zt(t),t.alternate===null)throw Error(o(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(Fe),null;case 4:return Ye(),null;case 10:return va(t.type),null;case 22:case 23:return zt(t),tc(),e!==null&&F(jn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return va(Ze),null;case 25:return null;default:return null}}function Gh(e,t){switch(Uo(t),t.tag){case 3:va(Ze),Ye();break;case 26:case 27:case 5:$s(t);break;case 4:Ye();break;case 31:t.memoizedState!==null&&zt(t);break;case 13:zt(t);break;case 19:F(Fe);break;case 10:va(t.type);break;case 22:case 23:zt(t),tc(),e!==null&&F(jn);break;case 24:va(Ze)}}function us(e,t){try{var n=t.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var c=s.next;n=c;do{if((n.tag&e)===e){s=void 0;var d=n.create,y=n.inst;s=d(),y.destroy=s}n=n.next}while(n!==c)}}catch(x){ke(t,t.return,x)}}function Pa(e,t,n){try{var s=t.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var d=c.next;s=d;do{if((s.tag&e)===e){var y=s.inst,x=y.destroy;if(x!==void 0){y.destroy=void 0,c=t;var E=n,V=x;try{V()}catch(U){ke(c,E,U)}}}s=s.next}while(s!==d)}}catch(U){ke(t,t.return,U)}}function Yh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Rm(t,n)}catch(s){ke(e,e.return,s)}}}function Fh(e,t,n){n.props=Cn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(s){ke(e,t,s)}}function ds(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof n=="function"?e.refCleanup=n(s):n.current=s}}catch(c){ke(e,t,c)}}function la(e,t){var n=e.ref,s=e.refCleanup;if(n!==null)if(typeof s=="function")try{s()}catch(c){ke(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){ke(e,t,c)}else n.current=null}function Ph(e){var t=e.type,n=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&s.focus();break e;case"img":n.src?s.src=n.src:n.srcSet&&(s.srcset=n.srcSet)}}catch(c){ke(e,e.return,c)}}function Rc(e,t,n){try{var s=e.stateNode;h1(s,e.type,n,t),s[gt]=t}catch(c){ke(e,e.return,c)}}function Xh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function Oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vc(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ha));else if(s!==4&&(s===27&&Ia(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Vc(e,t,n),e=e.sibling;e!==null;)Vc(e,t,n),e=e.sibling}function Yr(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(s===27&&Ia(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Yr(e,t,n),e=e.sibling;e!==null;)Yr(e,t,n),e=e.sibling}function Zh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var s=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);ct(t,s,n),t[st]=e,t[gt]=n}catch(d){ke(e,e.return,d)}}var Na=!1,Ke=!1,Bc=!1,Wh=typeof WeakSet=="function"?WeakSet:Set,nt=null;function Zx(e,t){if(e=e.containerInfo,nu=ul,e=rm(e),ko(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var c=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var y=0,x=-1,E=-1,V=0,U=0,Y=e,B=null;t:for(;;){for(var H;Y!==n||c!==0&&Y.nodeType!==3||(x=y+c),Y!==d||s!==0&&Y.nodeType!==3||(E=y+s),Y.nodeType===3&&(y+=Y.nodeValue.length),(H=Y.firstChild)!==null;)B=Y,Y=H;for(;;){if(Y===e)break t;if(B===n&&++V===c&&(x=y),B===d&&++U===s&&(E=y),(H=Y.nextSibling)!==null)break;Y=B,B=Y.parentNode}Y=H}n=x===-1||E===-1?null:{start:x,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(iu={focusedElem:e,selectionRange:n},ul=!1,nt=t;nt!==null;)if(t=nt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,nt=e;else for(;nt!==null;){switch(t=nt,d=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)c=e[n],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,n=t,c=d.memoizedProps,d=d.memoizedState,s=n.stateNode;try{var ee=Cn(n.type,c);e=s.getSnapshotBeforeUpdate(ee,d),s.__reactInternalSnapshotBeforeUpdate=e}catch(re){ke(n,n.return,re)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)lu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":lu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,nt=e;break}nt=t.return}}function Qh(e,t,n){var s=n.flags;switch(n.tag){case 0:case 11:case 15:Aa(e,n),s&4&&us(5,n);break;case 1:if(Aa(e,n),s&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(y){ke(n,n.return,y)}else{var c=Cn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){ke(n,n.return,y)}}s&64&&Yh(n),s&512&&ds(n,n.return);break;case 3:if(Aa(e,n),s&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Rm(e,t)}catch(y){ke(n,n.return,y)}}break;case 27:t===null&&s&4&&Zh(n);case 26:case 5:Aa(e,n),t===null&&s&4&&Ph(n),s&512&&ds(n,n.return);break;case 12:Aa(e,n);break;case 31:Aa(e,n),s&4&&Ih(e,n);break;case 13:Aa(e,n),s&4&&$h(e,n),s&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=a1.bind(null,n),j1(e,n))));break;case 22:if(s=n.memoizedState!==null||Na,!s){t=t!==null&&t.memoizedState!==null||Ke,c=Na;var d=Ke;Na=s,(Ke=t)&&!d?Ca(e,n,(n.subtreeFlags&8772)!==0):Aa(e,n),Na=c,Ke=d}break;case 30:break;default:Aa(e,n)}}function Kh(e){var t=e.alternate;t!==null&&(e.alternate=null,Kh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&fo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,bt=!1;function Ta(e,t,n){for(n=n.child;n!==null;)Jh(e,t,n),n=n.sibling}function Jh(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Vi,n)}catch{}switch(n.tag){case 26:Ke||la(n,t),Ta(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ke||la(n,t);var s=Le,c=bt;Ia(n.type)&&(Le=n.stateNode,bt=!1),Ta(e,t,n),xs(n.stateNode),Le=s,bt=c;break;case 5:Ke||la(n,t);case 6:if(s=Le,c=bt,Le=null,Ta(e,t,n),Le=s,bt=c,Le!==null)if(bt)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(n.stateNode)}catch(d){ke(n,t,d)}else try{Le.removeChild(n.stateNode)}catch(d){ke(n,t,d)}break;case 18:Le!==null&&(bt?(e=Le,Yp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),xi(e)):Yp(Le,n.stateNode));break;case 4:s=Le,c=bt,Le=n.stateNode.containerInfo,bt=!0,Ta(e,t,n),Le=s,bt=c;break;case 0:case 11:case 14:case 15:Pa(2,n,t),Ke||Pa(4,n,t),Ta(e,t,n);break;case 1:Ke||(la(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"&&Fh(n,t,s)),Ta(e,t,n);break;case 21:Ta(e,t,n);break;case 22:Ke=(s=Ke)||n.memoizedState!==null,Ta(e,t,n),Ke=s;break;default:Ta(e,t,n)}}function Ih(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{xi(e)}catch(n){ke(t,t.return,n)}}}function $h(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xi(e)}catch(n){ke(t,t.return,n)}}function Wx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Wh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Wh),t;default:throw Error(o(435,e.tag))}}function Fr(e,t){var n=Wx(e);t.forEach(function(s){if(!n.has(s)){n.add(s);var c=n1.bind(null,e,s);s.then(c,c)}})}function vt(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var c=n[s],d=e,y=t,x=y;e:for(;x!==null;){switch(x.tag){case 27:if(Ia(x.type)){Le=x.stateNode,bt=!1;break e}break;case 5:Le=x.stateNode,bt=!1;break e;case 3:case 4:Le=x.stateNode.containerInfo,bt=!0;break e}x=x.return}if(Le===null)throw Error(o(160));Jh(d,y,c),Le=null,bt=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ep(t,e),t=t.sibling}var Kt=null;function ep(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vt(t,e),xt(e),s&4&&(Pa(3,e,e.return),us(3,e),Pa(5,e,e.return));break;case 1:vt(t,e),xt(e),s&512&&(Ke||n===null||la(n,n.return)),s&64&&Na&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?s:n.concat(s))));break;case 26:var c=Kt;if(vt(t,e),xt(e),s&512&&(Ke||n===null||la(n,n.return)),s&4){var d=n!==null?n.memoizedState:null;if(s=e.memoizedState,n===null)if(s===null)if(e.stateNode===null){e:{s=e.type,n=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":d=c.getElementsByTagName("title")[0],(!d||d[_i]||d[st]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(s),c.head.insertBefore(d,c.querySelector("head > title"))),ct(d,s,n),d[st]=e,at(d),s=d;break e;case"link":var y=e0("link","href",c).get(s+(n.href||""));if(y){for(var x=0;x<y.length;x++)if(d=y[x],d.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&d.getAttribute("rel")===(n.rel==null?null:n.rel)&&d.getAttribute("title")===(n.title==null?null:n.title)&&d.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){y.splice(x,1);break t}}d=c.createElement(s),ct(d,s,n),c.head.appendChild(d);break;case"meta":if(y=e0("meta","content",c).get(s+(n.content||""))){for(x=0;x<y.length;x++)if(d=y[x],d.getAttribute("content")===(n.content==null?null:""+n.content)&&d.getAttribute("name")===(n.name==null?null:n.name)&&d.getAttribute("property")===(n.property==null?null:n.property)&&d.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&d.getAttribute("charset")===(n.charSet==null?null:n.charSet)){y.splice(x,1);break t}}d=c.createElement(s),ct(d,s,n),c.head.appendChild(d);break;default:throw Error(o(468,s))}d[st]=e,at(d),s=d}e.stateNode=s}else t0(c,e.type,e.stateNode);else e.stateNode=$p(c,s,e.memoizedProps);else d!==s?(d===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):d.count--,s===null?t0(c,e.type,e.stateNode):$p(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Rc(e,e.memoizedProps,n.memoizedProps)}break;case 27:vt(t,e),xt(e),s&512&&(Ke||n===null||la(n,n.return)),n!==null&&s&4&&Rc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vt(t,e),xt(e),s&512&&(Ke||n===null||la(n,n.return)),e.flags&32){c=e.stateNode;try{Yn(c,"")}catch(ee){ke(e,e.return,ee)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,Rc(e,c,n!==null?n.memoizedProps:c)),s&1024&&(Bc=!0);break;case 6:if(vt(t,e),xt(e),s&4){if(e.stateNode===null)throw Error(o(162));s=e.memoizedProps,n=e.stateNode;try{n.nodeValue=s}catch(ee){ke(e,e.return,ee)}}break;case 3:if(rl=null,c=Kt,Kt=il(t.containerInfo),vt(t,e),Kt=c,xt(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{xi(t.containerInfo)}catch(ee){ke(e,e.return,ee)}Bc&&(Bc=!1,tp(e));break;case 4:s=Kt,Kt=il(e.stateNode.containerInfo),vt(t,e),xt(e),Kt=s;break;case 12:vt(t,e),xt(e);break;case 31:vt(t,e),xt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Fr(e,s)));break;case 13:vt(t,e),xt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Xr=Nt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Fr(e,s)));break;case 22:c=e.memoizedState!==null;var E=n!==null&&n.memoizedState!==null,V=Na,U=Ke;if(Na=V||c,Ke=U||E,vt(t,e),Ke=U,Na=V,xt(e),s&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(n===null||E||Na||Ke||En(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){E=n=t;try{if(d=E.stateNode,c)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{x=E.stateNode;var Y=E.memoizedProps.style,B=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;x.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(ee){ke(E,E.return,ee)}}}else if(t.tag===6){if(n===null){E=t;try{E.stateNode.nodeValue=c?"":E.memoizedProps}catch(ee){ke(E,E.return,ee)}}}else if(t.tag===18){if(n===null){E=t;try{var H=E.stateNode;c?Fp(H,!0):Fp(E.stateNode,!1)}catch(ee){ke(E,E.return,ee)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(n=s.retryQueue,n!==null&&(s.retryQueue=null,Fr(e,n))));break;case 19:vt(t,e),xt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Fr(e,s)));break;case 30:break;case 21:break;default:vt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{for(var n,s=e.return;s!==null;){if(Xh(s)){n=s;break}s=s.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var c=n.stateNode,d=Oc(e);Yr(e,d,c);break;case 5:var y=n.stateNode;n.flags&32&&(Yn(y,""),n.flags&=-33);var x=Oc(e);Yr(e,x,y);break;case 3:case 4:var E=n.stateNode.containerInfo,V=Oc(e);Vc(e,V,E);break;default:throw Error(o(161))}}catch(U){ke(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;tp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Aa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Qh(e,t.alternate,t),t=t.sibling}function En(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Pa(4,t,t.return),En(t);break;case 1:la(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Fh(t,t.return,n),En(t);break;case 27:xs(t.stateNode);case 26:case 5:la(t,t.return),En(t);break;case 22:t.memoizedState===null&&En(t);break;case 30:En(t);break;default:En(t)}e=e.sibling}}function Ca(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,c=e,d=t,y=d.flags;switch(d.tag){case 0:case 11:case 15:Ca(c,d,n),us(4,d);break;case 1:if(Ca(c,d,n),s=d,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(V){ke(s,s.return,V)}if(s=d,c=s.updateQueue,c!==null){var x=s.stateNode;try{var E=c.shared.hiddenCallbacks;if(E!==null)for(c.shared.hiddenCallbacks=null,c=0;c<E.length;c++)Dm(E[c],x)}catch(V){ke(s,s.return,V)}}n&&y&64&&Yh(d),ds(d,d.return);break;case 27:Zh(d);case 26:case 5:Ca(c,d,n),n&&s===null&&y&4&&Ph(d),ds(d,d.return);break;case 12:Ca(c,d,n);break;case 31:Ca(c,d,n),n&&y&4&&Ih(c,d);break;case 13:Ca(c,d,n),n&&y&4&&$h(c,d);break;case 22:d.memoizedState===null&&Ca(c,d,n),ds(d,d.return);break;case 30:break;default:Ca(c,d,n)}t=t.sibling}}function Lc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ji(n))}function _c(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ji(e))}function Jt(e,t,n,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ap(e,t,n,s),t=t.sibling}function ap(e,t,n,s){var c=t.flags;switch(t.tag){case 0:case 11:case 15:Jt(e,t,n,s),c&2048&&us(9,t);break;case 1:Jt(e,t,n,s);break;case 3:Jt(e,t,n,s),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ji(e)));break;case 12:if(c&2048){Jt(e,t,n,s),e=t.stateNode;try{var d=t.memoizedProps,y=d.id,x=d.onPostCommit;typeof x=="function"&&x(y,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){ke(t,t.return,E)}}else Jt(e,t,n,s);break;case 31:Jt(e,t,n,s);break;case 13:Jt(e,t,n,s);break;case 23:break;case 22:d=t.stateNode,y=t.alternate,t.memoizedState!==null?d._visibility&2?Jt(e,t,n,s):fs(e,t):d._visibility&2?Jt(e,t,n,s):(d._visibility|=2,ci(e,t,n,s,(t.subtreeFlags&10256)!==0||!1)),c&2048&&Lc(y,t);break;case 24:Jt(e,t,n,s),c&2048&&_c(t.alternate,t);break;default:Jt(e,t,n,s)}}function ci(e,t,n,s,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var d=e,y=t,x=n,E=s,V=y.flags;switch(y.tag){case 0:case 11:case 15:ci(d,y,x,E,c),us(8,y);break;case 23:break;case 22:var U=y.stateNode;y.memoizedState!==null?U._visibility&2?ci(d,y,x,E,c):fs(d,y):(U._visibility|=2,ci(d,y,x,E,c)),c&&V&2048&&Lc(y.alternate,y);break;case 24:ci(d,y,x,E,c),c&&V&2048&&_c(y.alternate,y);break;default:ci(d,y,x,E,c)}t=t.sibling}}function fs(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,s=t,c=s.flags;switch(s.tag){case 22:fs(n,s),c&2048&&Lc(s.alternate,s);break;case 24:fs(n,s),c&2048&&_c(s.alternate,s);break;default:fs(n,s)}t=t.sibling}}var ms=8192;function ui(e,t,n){if(e.subtreeFlags&ms)for(e=e.child;e!==null;)np(e,t,n),e=e.sibling}function np(e,t,n){switch(e.tag){case 26:ui(e,t,n),e.flags&ms&&e.memoizedState!==null&&O1(n,Kt,e.memoizedState,e.memoizedProps);break;case 5:ui(e,t,n);break;case 3:case 4:var s=Kt;Kt=il(e.stateNode.containerInfo),ui(e,t,n),Kt=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=ms,ms=16777216,ui(e,t,n),ms=s):ui(e,t,n));break;default:ui(e,t,n)}}function ip(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function hs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var s=t[n];nt=s,rp(s,e)}ip(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sp(e),e=e.sibling}function sp(e){switch(e.tag){case 0:case 11:case 15:hs(e),e.flags&2048&&Pa(9,e,e.return);break;case 3:hs(e);break;case 12:hs(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Pr(e)):hs(e);break;default:hs(e)}}function Pr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var s=t[n];nt=s,rp(s,e)}ip(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Pa(8,t,t.return),Pr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Pr(t));break;default:Pr(t)}e=e.sibling}}function rp(e,t){for(;nt!==null;){var n=nt;switch(n.tag){case 0:case 11:case 15:Pa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var s=n.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ji(n.memoizedState.cache)}if(s=n.child,s!==null)s.return=n,nt=s;else e:for(n=e;nt!==null;){s=nt;var c=s.sibling,d=s.return;if(Kh(s),s===n){nt=null;break e}if(c!==null){c.return=d,nt=c;break e}nt=d}}}var Qx={getCacheForType:function(e){var t=lt(Ze),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return lt(Ze).controller.signal}},Kx=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Re=null,be=null,xe=0,Ee=0,Mt=null,Xa=!1,di=!1,Hc=!1,Ea=0,qe=0,Za=0,kn=0,Uc=0,Dt=0,fi=0,ps=null,wt=null,qc=!1,Xr=0,lp=0,Zr=1/0,Wr=null,Wa=null,$e=0,Qa=null,mi=null,ka=0,Gc=0,Yc=null,op=null,gs=0,Fc=null;function Rt(){return(Ae&2)!==0&&xe!==0?xe&-xe:_.T!==null?Kc():Nf()}function cp(){if(Dt===0)if((xe&536870912)===0||je){var e=ar;ar<<=1,(ar&3932160)===0&&(ar=262144),Dt=e}else Dt=536870912;return e=kt.current,e!==null&&(e.flags|=32),Dt}function jt(e,t,n){(e===Re&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(hi(e,0),Ka(e,xe,Dt,!1)),Li(e,n),((Ae&2)===0||e!==Re)&&(e===Re&&((Ae&2)===0&&(kn|=n),qe===4&&Ka(e,xe,Dt,!1)),oa(e))}function up(e,t,n){if((Ae&6)!==0)throw Error(o(327));var s=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Bi(e,t),c=s?$x(e,t):Xc(e,t,!0),d=s;do{if(c===0){di&&!s&&Ka(e,t,0,!1);break}else{if(n=e.current.alternate,d&&!Jx(n)){c=Xc(e,t,!1),d=!1;continue}if(c===2){if(d=t,e.errorRecoveryDisabledLanes&d)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){t=y;e:{var x=e;c=ps;var E=x.current.memoizedState.isDehydrated;if(E&&(hi(x,y).flags|=256),y=Xc(x,y,!1),y!==2){if(Hc&&!E){x.errorRecoveryDisabledLanes|=d,kn|=d,c=4;break e}d=wt,wt=c,d!==null&&(wt===null?wt=d:wt.push.apply(wt,d))}c=y}if(d=!1,c!==2)continue}}if(c===1){hi(e,0),Ka(e,t,0,!0);break}e:{switch(s=e,d=c,d){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Ka(s,t,Dt,!Xa);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(c=Xr+300-Nt(),10<c)){if(Ka(s,t,Dt,!Xa),ir(s,0,!0)!==0)break e;ka=t,s.timeoutHandle=qp(dp.bind(null,s,n,wt,Wr,qc,t,Dt,kn,fi,Xa,d,"Throttled",-0,0),c);break e}dp(s,n,wt,Wr,qc,t,Dt,kn,fi,Xa,d,null,-0,0)}}break}while(!0);oa(e)}function dp(e,t,n,s,c,d,y,x,E,V,U,Y,B,H){if(e.timeoutHandle=-1,Y=t.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ha},np(t,d,Y);var ee=(d&62914560)===d?Xr-Nt():(d&4194048)===d?lp-Nt():0;if(ee=V1(Y,ee),ee!==null){ka=d,e.cancelPendingCommit=ee(vp.bind(null,e,t,d,n,s,c,y,x,E,U,Y,null,B,H)),Ka(e,d,y,!V);return}}vp(e,t,d,n,s,c,y,x,E)}function Jx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var s=0;s<n.length;s++){var c=n[s],d=c.getSnapshot;c=c.value;try{if(!Ct(d(),c))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ka(e,t,n,s){t&=~Uc,t&=~kn,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var c=t;0<c;){var d=31-At(c),y=1<<d;s[d]=-1,c&=~y}n!==0&&wf(e,n,t)}function Qr(){return(Ae&6)===0?(ys(0),!1):!0}function Pc(){if(be!==null){if(Ee===0)var e=be.return;else e=be,ba=xn=null,lc(e),ii=null,$i=0,e=be;for(;e!==null;)Gh(e.alternate,e),e=e.return;be=null}}function hi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,y1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ka=0,Pc(),Re=e,be=n=ga(e.current,null),xe=t,Ee=0,Mt=null,Xa=!1,di=Bi(e,t),Hc=!1,fi=Dt=Uc=kn=Za=qe=0,wt=ps=null,qc=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var c=31-At(s),d=1<<c;t|=e[c],s&=~d}return Ea=t,gr(),n}function fp(e,t){de=null,_.H=ls,t===ni||t===Nr?(t=Em(),Ee=3):t===Qo?(t=Em(),Ee=4):Ee=t===Sc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Mt=t,be===null&&(qe=1,_r(e,Ut(t,e.current)))}function mp(){var e=kt.current;return e===null?!0:(xe&4194048)===xe?Ft===null:(xe&62914560)===xe||(xe&536870912)!==0?e===Ft:!1}function hp(){var e=_.H;return _.H=ls,e===null?ls:e}function pp(){var e=_.A;return _.A=Qx,e}function Kr(){qe=4,Xa||(xe&4194048)!==xe&&kt.current!==null||(di=!0),(Za&134217727)===0&&(kn&134217727)===0||Re===null||Ka(Re,xe,Dt,!1)}function Xc(e,t,n){var s=Ae;Ae|=2;var c=hp(),d=pp();(Re!==e||xe!==t)&&(Wr=null,hi(e,t)),t=!1;var y=qe;e:do try{if(Ee!==0&&be!==null){var x=be,E=Mt;switch(Ee){case 8:Pc(),y=6;break e;case 3:case 2:case 9:case 6:kt.current===null&&(t=!0);var V=Ee;if(Ee=0,Mt=null,pi(e,x,E,V),n&&di){y=0;break e}break;default:V=Ee,Ee=0,Mt=null,pi(e,x,E,V)}}Ix(),y=qe;break}catch(U){fp(e,U)}while(!0);return t&&e.shellSuspendCounter++,ba=xn=null,Ae=s,_.H=c,_.A=d,be===null&&(Re=null,xe=0,gr()),y}function Ix(){for(;be!==null;)gp(be)}function $x(e,t){var n=Ae;Ae|=2;var s=hp(),c=pp();Re!==e||xe!==t?(Wr=null,Zr=Nt()+500,hi(e,t)):di=Bi(e,t);e:do try{if(Ee!==0&&be!==null){t=be;var d=Mt;t:switch(Ee){case 1:Ee=0,Mt=null,pi(e,t,d,1);break;case 2:case 9:if(Am(d)){Ee=0,Mt=null,yp(t);break}t=function(){Ee!==2&&Ee!==9||Re!==e||(Ee=7),oa(e)},d.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:Am(d)?(Ee=0,Mt=null,yp(t)):(Ee=0,Mt=null,pi(e,t,d,7));break;case 5:var y=null;switch(be.tag){case 26:y=be.memoizedState;case 5:case 27:var x=be;if(y?a0(y):x.stateNode.complete){Ee=0,Mt=null;var E=x.sibling;if(E!==null)be=E;else{var V=x.return;V!==null?(be=V,Jr(V)):be=null}break t}}Ee=0,Mt=null,pi(e,t,d,5);break;case 6:Ee=0,Mt=null,pi(e,t,d,6);break;case 8:Pc(),qe=6;break e;default:throw Error(o(462))}}e1();break}catch(U){fp(e,U)}while(!0);return ba=xn=null,_.H=s,_.A=c,Ae=n,be!==null?0:(Re=null,xe=0,gr(),qe)}function e1(){for(;be!==null&&!Sv();)gp(be)}function gp(e){var t=Uh(e.alternate,e,Ea);e.memoizedProps=e.pendingProps,t===null?Jr(e):be=t}function yp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Oh(n,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=Oh(n,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:lc(t);default:Gh(n,t),t=be=pm(t,Ea),t=Uh(n,t,Ea)}e.memoizedProps=e.pendingProps,t===null?Jr(e):be=t}function pi(e,t,n,s){ba=xn=null,lc(t),ii=null,$i=0;var c=t.return;try{if(Gx(e,c,t,n,xe)){qe=1,_r(e,Ut(n,e.current)),be=null;return}}catch(d){if(c!==null)throw be=c,d;qe=1,_r(e,Ut(n,e.current)),be=null;return}t.flags&32768?(je||s===1?e=!0:di||(xe&536870912)!==0?e=!1:(Xa=e=!0,(s===2||s===9||s===3||s===6)&&(s=kt.current,s!==null&&s.tag===13&&(s.flags|=16384))),bp(t,e)):Jr(t)}function Jr(e){var t=e;do{if((t.flags&32768)!==0){bp(t,Xa);return}e=t.return;var n=Px(t.alternate,t,Ea);if(n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);qe===0&&(qe=5)}function bp(e,t){do{var n=Xx(e.alternate,e);if(n!==null){n.flags&=32767,be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=n}while(e!==null);qe=6,be=null}function vp(e,t,n,s,c,d,y,x,E){e.cancelPendingCommit=null;do Ir();while($e!==0);if((Ae&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(d=t.lanes|t.childLanes,d|=Oo,Rv(e,n,d,y,x,E),e===Re&&(be=Re=null,xe=0),mi=t,Qa=e,ka=n,Gc=d,Yc=c,op=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,i1(er,function(){return Np(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=_.T,_.T=null,c=Z.p,Z.p=2,y=Ae,Ae|=4;try{Zx(e,t,n)}finally{Ae=y,Z.p=c,_.T=s}}$e=1,xp(),wp(),jp()}}function xp(){if($e===1){$e=0;var e=Qa,t=mi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var s=Z.p;Z.p=2;var c=Ae;Ae|=4;try{ep(t,e);var d=iu,y=rm(e.containerInfo),x=d.focusedElem,E=d.selectionRange;if(y!==x&&x&&x.ownerDocument&&sm(x.ownerDocument.documentElement,x)){if(E!==null&&ko(x)){var V=E.start,U=E.end;if(U===void 0&&(U=V),"selectionStart"in x)x.selectionStart=V,x.selectionEnd=Math.min(U,x.value.length);else{var Y=x.ownerDocument||document,B=Y&&Y.defaultView||window;if(B.getSelection){var H=B.getSelection(),ee=x.textContent.length,re=Math.min(E.start,ee),De=E.end===void 0?re:Math.min(E.end,ee);!H.extend&&re>De&&(y=De,De=re,re=y);var D=im(x,re),z=im(x,De);if(D&&z&&(H.rangeCount!==1||H.anchorNode!==D.node||H.anchorOffset!==D.offset||H.focusNode!==z.node||H.focusOffset!==z.offset)){var O=Y.createRange();O.setStart(D.node,D.offset),H.removeAllRanges(),re>De?(H.addRange(O),H.extend(z.node,z.offset)):(O.setEnd(z.node,z.offset),H.addRange(O))}}}}for(Y=[],H=x;H=H.parentNode;)H.nodeType===1&&Y.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<Y.length;x++){var G=Y[x];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}ul=!!nu,iu=nu=null}finally{Ae=c,Z.p=s,_.T=n}}e.current=t,$e=2}}function wp(){if($e===2){$e=0;var e=Qa,t=mi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var s=Z.p;Z.p=2;var c=Ae;Ae|=4;try{Qh(e,t.alternate,t)}finally{Ae=c,Z.p=s,_.T=n}}$e=3}}function jp(){if($e===4||$e===3){$e=0,Nv();var e=Qa,t=mi,n=ka,s=op;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$e=5:($e=0,mi=Qa=null,Sp(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Wa=null),co(n),t=t.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Vi,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=_.T,c=Z.p,Z.p=2,_.T=null;try{for(var d=e.onRecoverableError,y=0;y<s.length;y++){var x=s[y];d(x.value,{componentStack:x.stack})}}finally{_.T=t,Z.p=c}}(ka&3)!==0&&Ir(),oa(e),c=e.pendingLanes,(n&261930)!==0&&(c&42)!==0?e===Fc?gs++:(gs=0,Fc=e):gs=0,ys(0)}}function Sp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ji(t)))}function Ir(){return xp(),wp(),jp(),Np()}function Np(){if($e!==5)return!1;var e=Qa,t=Gc;Gc=0;var n=co(ka),s=_.T,c=Z.p;try{Z.p=32>n?32:n,_.T=null,n=Yc,Yc=null;var d=Qa,y=ka;if($e=0,mi=Qa=null,ka=0,(Ae&6)!==0)throw Error(o(331));var x=Ae;if(Ae|=4,sp(d.current),ap(d,d.current,y,n),Ae=x,ys(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Vi,d)}catch{}return!0}finally{Z.p=c,_.T=s,Sp(e,t)}}function Tp(e,t,n){t=Ut(n,t),t=jc(e.stateNode,t,2),e=Ga(e,t,2),e!==null&&(Li(e,2),oa(e))}function ke(e,t,n){if(e.tag===3)Tp(e,e,n);else for(;t!==null;){if(t.tag===3){Tp(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Wa===null||!Wa.has(s))){e=Ut(n,e),n=Ah(2),s=Ga(t,n,2),s!==null&&(Ch(n,s,t,e),Li(s,2),oa(s));break}}t=t.return}}function Zc(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new Kx;var c=new Set;s.set(t,c)}else c=s.get(t),c===void 0&&(c=new Set,s.set(t,c));c.has(n)||(Hc=!0,c.add(n),e=t1.bind(null,e,t,n),t.then(e,e))}function t1(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Re===e&&(xe&n)===n&&(qe===4||qe===3&&(xe&62914560)===xe&&300>Nt()-Xr?(Ae&2)===0&&hi(e,0):Uc|=n,fi===xe&&(fi=0)),oa(e)}function Ap(e,t){t===0&&(t=xf()),e=yn(e,t),e!==null&&(Li(e,t),oa(e))}function a1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ap(e,n)}function n1(e,t){var n=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(n=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(t),Ap(e,n)}function i1(e,t){return so(e,t)}var $r=null,gi=null,Wc=!1,el=!1,Qc=!1,Ja=0;function oa(e){e!==gi&&e.next===null&&(gi===null?$r=gi=e:gi=gi.next=e),el=!0,Wc||(Wc=!0,r1())}function ys(e,t){if(!Qc&&el){Qc=!0;do for(var n=!1,s=$r;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var d=0;else{var y=s.suspendedLanes,x=s.pingedLanes;d=(1<<31-At(42|e)+1)-1,d&=c&~(y&~x),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(n=!0,zp(s,d))}else d=xe,d=ir(s,s===Re?d:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(d&3)===0||Bi(s,d)||(n=!0,zp(s,d));s=s.next}while(n);Qc=!1}}function s1(){Cp()}function Cp(){el=Wc=!1;var e=0;Ja!==0&&g1()&&(e=Ja);for(var t=Nt(),n=null,s=$r;s!==null;){var c=s.next,d=Ep(s,t);d===0?(s.next=null,n===null?$r=c:n.next=c,c===null&&(gi=n)):(n=s,(e!==0||(d&3)!==0)&&(el=!0)),s=c}$e!==0&&$e!==5||ys(e),Ja!==0&&(Ja=0)}function Ep(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var y=31-At(d),x=1<<y,E=c[y];E===-1?((x&n)===0||(x&s)!==0)&&(c[y]=Dv(x,t)):E<=t&&(e.expiredLanes|=x),d&=~x}if(t=Re,n=xe,n=ir(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,n===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&ro(s),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Bi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(s!==null&&ro(s),co(n)){case 2:case 8:n=bf;break;case 32:n=er;break;case 268435456:n=vf;break;default:n=er}return s=kp.bind(null,e),n=so(n,s),e.callbackPriority=t,e.callbackNode=n,t}return s!==null&&s!==null&&ro(s),e.callbackPriority=2,e.callbackNode=null,2}function kp(e,t){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ir()&&e.callbackNode!==n)return null;var s=xe;return s=ir(e,e===Re?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(up(e,s,t),Ep(e,Nt()),e.callbackNode!=null&&e.callbackNode===n?kp.bind(null,e):null)}function zp(e,t){if(Ir())return null;up(e,t,!0)}function r1(){b1(function(){(Ae&6)!==0?so(yf,s1):Cp()})}function Kc(){if(Ja===0){var e=ti;e===0&&(e=tr,tr<<=1,(tr&261888)===0&&(tr=256)),Ja=e}return Ja}function Mp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:or(""+e)}function Dp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function l1(e,t,n,s,c){if(t==="submit"&&n&&n.stateNode===c){var d=Mp((c[gt]||null).action),y=s.submitter;y&&(t=(t=y[gt]||null)?Mp(t.formAction):y.getAttribute("formAction"),t!==null&&(d=t,y=null));var x=new fr("action","action",null,s,c);e.push({event:x,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ja!==0){var E=y?Dp(c,y):new FormData(c);gc(n,{pending:!0,data:E,method:c.method,action:d},null,E)}}else typeof d=="function"&&(x.preventDefault(),E=y?Dp(c,y):new FormData(c),gc(n,{pending:!0,data:E,method:c.method,action:d},d,E))},currentTarget:c}]})}}for(var Jc=0;Jc<Ro.length;Jc++){var Ic=Ro[Jc],o1=Ic.toLowerCase(),c1=Ic[0].toUpperCase()+Ic.slice(1);Qt(o1,"on"+c1)}Qt(cm,"onAnimationEnd"),Qt(um,"onAnimationIteration"),Qt(dm,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(Tx,"onTransitionRun"),Qt(Ax,"onTransitionStart"),Qt(Cx,"onTransitionCancel"),Qt(fm,"onTransitionEnd"),qn("onMouseEnter",["mouseout","mouseover"]),qn("onMouseLeave",["mouseout","mouseover"]),qn("onPointerEnter",["pointerout","pointerover"]),qn("onPointerLeave",["pointerout","pointerover"]),mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),mn("onBeforeInput",["compositionend","keypress","textInput","paste"]),mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bs));function Rp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],c=s.event;s=s.listeners;e:{var d=void 0;if(t)for(var y=s.length-1;0<=y;y--){var x=s[y],E=x.instance,V=x.currentTarget;if(x=x.listener,E!==d&&c.isPropagationStopped())break e;d=x,c.currentTarget=V;try{d(c)}catch(U){pr(U)}c.currentTarget=null,d=E}else for(y=0;y<s.length;y++){if(x=s[y],E=x.instance,V=x.currentTarget,x=x.listener,E!==d&&c.isPropagationStopped())break e;d=x,c.currentTarget=V;try{d(c)}catch(U){pr(U)}c.currentTarget=null,d=E}}}}function ve(e,t){var n=t[uo];n===void 0&&(n=t[uo]=new Set);var s=e+"__bubble";n.has(s)||(Op(t,e,2,!1),n.add(s))}function $c(e,t,n){var s=0;t&&(s|=4),Op(n,e,s,t)}var tl="_reactListening"+Math.random().toString(36).slice(2);function eu(e){if(!e[tl]){e[tl]=!0,Cf.forEach(function(n){n!=="selectionchange"&&(u1.has(n)||$c(n,!1,e),$c(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[tl]||(t[tl]=!0,$c("selectionchange",!1,t))}}function Op(e,t,n,s){switch(c0(t)){case 2:var c=_1;break;case 8:c=H1;break;default:c=pu}n=c.bind(null,t,n,e),c=void 0,!xo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(t,n,{capture:!0,passive:c}):e.addEventListener(t,n,!0):c!==void 0?e.addEventListener(t,n,{passive:c}):e.addEventListener(t,n,!1)}function tu(e,t,n,s,c){var d=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var x=s.stateNode.containerInfo;if(x===c)break;if(y===4)for(y=s.return;y!==null;){var E=y.tag;if((E===3||E===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;x!==null;){if(y=_n(x),y===null)return;if(E=y.tag,E===5||E===6||E===26||E===27){s=d=y;continue e}x=x.parentNode}}s=s.return}Hf(function(){var V=d,U=bo(n),Y=[];e:{var B=mm.get(e);if(B!==void 0){var H=fr,ee=e;switch(e){case"keypress":if(ur(n)===0)break e;case"keydown":case"keyup":H=nx;break;case"focusin":ee="focus",H=No;break;case"focusout":ee="blur",H=No;break;case"beforeblur":case"afterblur":H=No;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=rx;break;case cm:case um:case dm:H=Wv;break;case fm:H=ox;break;case"scroll":case"scrollend":H=Yv;break;case"wheel":H=ux;break;case"copy":case"cut":case"paste":H=Kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Ff;break;case"toggle":case"beforetoggle":H=fx}var re=(t&4)!==0,De=!re&&(e==="scroll"||e==="scrollend"),D=re?B!==null?B+"Capture":null:B;re=[];for(var z=V,O;z!==null;){var G=z;if(O=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||O===null||D===null||(G=Ui(z,D),G!=null&&re.push(vs(z,G,O))),De)break;z=z.return}0<re.length&&(B=new H(B,ee,null,n,U),Y.push({event:B,listeners:re}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",B&&n!==yo&&(ee=n.relatedTarget||n.fromElement)&&(_n(ee)||ee[Ln]))break e;if((H||B)&&(B=U.window===U?U:(B=U.ownerDocument)?B.defaultView||B.parentWindow:window,H?(ee=n.relatedTarget||n.toElement,H=V,ee=ee?_n(ee):null,ee!==null&&(De=m(ee),re=ee.tag,ee!==De||re!==5&&re!==27&&re!==6)&&(ee=null)):(H=null,ee=V),H!==ee)){if(re=Gf,G="onMouseLeave",D="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(re=Ff,G="onPointerLeave",D="onPointerEnter",z="pointer"),De=H==null?B:Hi(H),O=ee==null?B:Hi(ee),B=new re(G,z+"leave",H,n,U),B.target=De,B.relatedTarget=O,G=null,_n(U)===V&&(re=new re(D,z+"enter",ee,n,U),re.target=O,re.relatedTarget=De,G=re),De=G,H&&ee)t:{for(re=d1,D=H,z=ee,O=0,G=D;G;G=re(G))O++;G=0;for(var se=z;se;se=re(se))G++;for(;0<O-G;)D=re(D),O--;for(;0<G-O;)z=re(z),G--;for(;O--;){if(D===z||z!==null&&D===z.alternate){re=D;break t}D=re(D),z=re(z)}re=null}else re=null;H!==null&&Vp(Y,B,H,re,!1),ee!==null&&De!==null&&Vp(Y,De,ee,re,!0)}}e:{if(B=V?Hi(V):window,H=B.nodeName&&B.nodeName.toLowerCase(),H==="select"||H==="input"&&B.type==="file")var Ne=If;else if(Kf(B))if($f)Ne=jx;else{Ne=xx;var ne=vx}else H=B.nodeName,!H||H.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?V&&go(V.elementType)&&(Ne=If):Ne=wx;if(Ne&&(Ne=Ne(e,V))){Jf(Y,Ne,n,U);break e}ne&&ne(e,B,V),e==="focusout"&&V&&B.type==="number"&&V.memoizedProps.value!=null&&po(B,"number",B.value)}switch(ne=V?Hi(V):window,e){case"focusin":(Kf(ne)||ne.contentEditable==="true")&&(Zn=ne,zo=V,Wi=null);break;case"focusout":Wi=zo=Zn=null;break;case"mousedown":Mo=!0;break;case"contextmenu":case"mouseup":case"dragend":Mo=!1,lm(Y,n,U);break;case"selectionchange":if(Nx)break;case"keydown":case"keyup":lm(Y,n,U)}var pe;if(Ao)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Xn?Wf(e,n)&&(we="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(we="onCompositionStart");we&&(Pf&&n.locale!=="ko"&&(Xn||we!=="onCompositionStart"?we==="onCompositionEnd"&&Xn&&(pe=Uf()):(Va=U,wo="value"in Va?Va.value:Va.textContent,Xn=!0)),ne=al(V,we),0<ne.length&&(we=new Yf(we,e,null,n,U),Y.push({event:we,listeners:ne}),pe?we.data=pe:(pe=Qf(n),pe!==null&&(we.data=pe)))),(pe=hx?px(e,n):gx(e,n))&&(we=al(V,"onBeforeInput"),0<we.length&&(ne=new Yf("onBeforeInput","beforeinput",null,n,U),Y.push({event:ne,listeners:we}),ne.data=pe)),l1(Y,e,V,n,U)}Rp(Y,t)})}function vs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function al(e,t){for(var n=t+"Capture",s=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Ui(e,n),c!=null&&s.unshift(vs(e,c,d)),c=Ui(e,t),c!=null&&s.push(vs(e,c,d))),e.tag===3)return s;e=e.return}return[]}function d1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vp(e,t,n,s,c){for(var d=t._reactName,y=[];n!==null&&n!==s;){var x=n,E=x.alternate,V=x.stateNode;if(x=x.tag,E!==null&&E===s)break;x!==5&&x!==26&&x!==27||V===null||(E=V,c?(V=Ui(n,d),V!=null&&y.unshift(vs(n,V,E))):c||(V=Ui(n,d),V!=null&&y.push(vs(n,V,E)))),n=n.return}y.length!==0&&e.push({event:t,listeners:y})}var f1=/\r\n?/g,m1=/\u0000|\uFFFD/g;function Bp(e){return(typeof e=="string"?e:""+e).replace(f1,`
`).replace(m1,"")}function Lp(e,t){return t=Bp(t),Bp(e)===t}function Me(e,t,n,s,c,d){switch(n){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||Yn(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&Yn(e,""+s);break;case"className":rr(e,"class",s);break;case"tabIndex":rr(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":rr(e,n,s);break;case"style":Lf(e,s,d);break;case"data":if(t!=="object"){rr(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=or(""+s),e.setAttribute(n,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(n==="formAction"?(t!=="input"&&Me(e,t,"name",c.name,c,null),Me(e,t,"formEncType",c.formEncType,c,null),Me(e,t,"formMethod",c.formMethod,c,null),Me(e,t,"formTarget",c.formTarget,c,null)):(Me(e,t,"encType",c.encType,c,null),Me(e,t,"method",c.method,c,null),Me(e,t,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=or(""+s),e.setAttribute(n,s);break;case"onClick":s!=null&&(e.onclick=ha);break;case"onScroll":s!=null&&ve("scroll",e);break;case"onScrollEnd":s!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(n=s.__html,n!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}n=or(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""+s):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":s===!0?e.setAttribute(n,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,s):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(n,s):e.removeAttribute(n);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(n):e.setAttribute(n,s);break;case"popover":ve("beforetoggle",e),ve("toggle",e),sr(e,"popover",s);break;case"xlinkActuate":ma(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ma(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ma(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ma(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ma(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ma(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ma(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ma(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ma(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":sr(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=qv.get(n)||n,sr(e,n,s))}}function au(e,t,n,s,c,d){switch(n){case"style":Lf(e,s,d);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(n=s.__html,n!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof s=="string"?Yn(e,s):(typeof s=="number"||typeof s=="bigint")&&Yn(e,""+s);break;case"onScroll":s!=null&&ve("scroll",e);break;case"onScrollEnd":s!=null&&ve("scrollend",e);break;case"onClick":s!=null&&(e.onclick=ha);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ef.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),t=n.slice(2,c?n.length-7:void 0),d=e[gt]||null,d=d!=null?d[n]:null,typeof d=="function"&&e.removeEventListener(t,d,c),typeof s=="function")){typeof d!="function"&&d!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,s,c);break e}n in e?e[n]=s:s===!0?e.setAttribute(n,""):sr(e,n,s)}}}function ct(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var s=!1,c=!1,d;for(d in n)if(n.hasOwnProperty(d)){var y=n[d];if(y!=null)switch(d){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Me(e,t,d,y,n,null)}}c&&Me(e,t,"srcSet",n.srcSet,n,null),s&&Me(e,t,"src",n.src,n,null);return;case"input":ve("invalid",e);var x=d=y=c=null,E=null,V=null;for(s in n)if(n.hasOwnProperty(s)){var U=n[s];if(U!=null)switch(s){case"name":c=U;break;case"type":y=U;break;case"checked":E=U;break;case"defaultChecked":V=U;break;case"value":d=U;break;case"defaultValue":x=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,t));break;default:Me(e,t,s,U,n,null)}}Rf(e,d,x,E,V,y,c,!1);return;case"select":ve("invalid",e),s=y=d=null;for(c in n)if(n.hasOwnProperty(c)&&(x=n[c],x!=null))switch(c){case"value":d=x;break;case"defaultValue":y=x;break;case"multiple":s=x;default:Me(e,t,c,x,n,null)}t=d,n=y,e.multiple=!!s,t!=null?Gn(e,!!s,t,!1):n!=null&&Gn(e,!!s,n,!0);return;case"textarea":ve("invalid",e),d=c=s=null;for(y in n)if(n.hasOwnProperty(y)&&(x=n[y],x!=null))switch(y){case"value":s=x;break;case"defaultValue":c=x;break;case"children":d=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(o(91));break;default:Me(e,t,y,x,n,null)}Vf(e,s,c,d);return;case"option":for(E in n)n.hasOwnProperty(E)&&(s=n[E],s!=null)&&(E==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":Me(e,t,E,s,n,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(s=0;s<bs.length;s++)ve(bs[s],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in n)if(n.hasOwnProperty(V)&&(s=n[V],s!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Me(e,t,V,s,n,null)}return;default:if(go(t)){for(U in n)n.hasOwnProperty(U)&&(s=n[U],s!==void 0&&au(e,t,U,s,n,void 0));return}}for(x in n)n.hasOwnProperty(x)&&(s=n[x],s!=null&&Me(e,t,x,s,n,null))}function h1(e,t,n,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,y=null,x=null,E=null,V=null,U=null;for(H in n){var Y=n[H];if(n.hasOwnProperty(H)&&Y!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":E=Y;default:s.hasOwnProperty(H)||Me(e,t,H,null,s,Y)}}for(var B in s){var H=s[B];if(Y=n[B],s.hasOwnProperty(B)&&(H!=null||Y!=null))switch(B){case"type":d=H;break;case"name":c=H;break;case"checked":V=H;break;case"defaultChecked":U=H;break;case"value":y=H;break;case"defaultValue":x=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(o(137,t));break;default:H!==Y&&Me(e,t,B,H,s,Y)}}ho(e,y,x,E,V,U,d,c);return;case"select":H=y=x=B=null;for(d in n)if(E=n[d],n.hasOwnProperty(d)&&E!=null)switch(d){case"value":break;case"multiple":H=E;default:s.hasOwnProperty(d)||Me(e,t,d,null,s,E)}for(c in s)if(d=s[c],E=n[c],s.hasOwnProperty(c)&&(d!=null||E!=null))switch(c){case"value":B=d;break;case"defaultValue":x=d;break;case"multiple":y=d;default:d!==E&&Me(e,t,c,d,s,E)}t=x,n=y,s=H,B!=null?Gn(e,!!n,B,!1):!!s!=!!n&&(t!=null?Gn(e,!!n,t,!0):Gn(e,!!n,n?[]:"",!1));return;case"textarea":H=B=null;for(x in n)if(c=n[x],n.hasOwnProperty(x)&&c!=null&&!s.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Me(e,t,x,null,s,c)}for(y in s)if(c=s[y],d=n[y],s.hasOwnProperty(y)&&(c!=null||d!=null))switch(y){case"value":B=c;break;case"defaultValue":H=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:c!==d&&Me(e,t,y,c,s,d)}Of(e,B,H);return;case"option":for(var ee in n)B=n[ee],n.hasOwnProperty(ee)&&B!=null&&!s.hasOwnProperty(ee)&&(ee==="selected"?e.selected=!1:Me(e,t,ee,null,s,B));for(E in s)B=s[E],H=n[E],s.hasOwnProperty(E)&&B!==H&&(B!=null||H!=null)&&(E==="selected"?e.selected=B&&typeof B!="function"&&typeof B!="symbol":Me(e,t,E,B,s,H));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in n)B=n[re],n.hasOwnProperty(re)&&B!=null&&!s.hasOwnProperty(re)&&Me(e,t,re,null,s,B);for(V in s)if(B=s[V],H=n[V],s.hasOwnProperty(V)&&B!==H&&(B!=null||H!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,t));break;default:Me(e,t,V,B,s,H)}return;default:if(go(t)){for(var De in n)B=n[De],n.hasOwnProperty(De)&&B!==void 0&&!s.hasOwnProperty(De)&&au(e,t,De,void 0,s,B);for(U in s)B=s[U],H=n[U],!s.hasOwnProperty(U)||B===H||B===void 0&&H===void 0||au(e,t,U,B,s,H);return}}for(var D in n)B=n[D],n.hasOwnProperty(D)&&B!=null&&!s.hasOwnProperty(D)&&Me(e,t,D,null,s,B);for(Y in s)B=s[Y],H=n[Y],!s.hasOwnProperty(Y)||B===H||B==null&&H==null||Me(e,t,Y,B,s,H)}function _p(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function p1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),s=0;s<n.length;s++){var c=n[s],d=c.transferSize,y=c.initiatorType,x=c.duration;if(d&&x&&_p(y)){for(y=0,x=c.responseEnd,s+=1;s<n.length;s++){var E=n[s],V=E.startTime;if(V>x)break;var U=E.transferSize,Y=E.initiatorType;U&&_p(Y)&&(E=E.responseEnd,y+=U*(E<x?1:(x-V)/(E-V)))}if(--s,t+=8*(d+y)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var nu=null,iu=null;function nl(e){return e.nodeType===9?e:e.ownerDocument}function Hp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Up(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function su(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ru=null;function g1(){var e=window.event;return e&&e.type==="popstate"?e===ru?!1:(ru=e,!0):(ru=null,!1)}var qp=typeof setTimeout=="function"?setTimeout:void 0,y1=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,b1=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(e){return Gp.resolve(null).then(e).catch(v1)}:qp;function v1(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function Yp(e,t){var n=t,s=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"||n==="/&"){if(s===0){e.removeChild(c),xi(t);return}s--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")s++;else if(n==="html")xs(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,xs(n);for(var d=n.firstChild;d;){var y=d.nextSibling,x=d.nodeName;d[_i]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&d.rel.toLowerCase()==="stylesheet"||n.removeChild(d),d=y}}else n==="body"&&xs(e.ownerDocument.body);n=c}while(n);xi(t)}function Fp(e,t){var n=e;e=0;do{var s=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=s}while(n)}function lu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":lu(n),fo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function x1(e,t,n,s){for(;e.nodeType===1;){var c=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[_i])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Pt(e.nextSibling),e===null)break}return null}function w1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Pt(e.nextSibling),e===null))return null;return e}function Pp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Pt(e.nextSibling),e===null))return null;return e}function ou(e){return e.data==="$?"||e.data==="$~"}function cu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function j1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var s=function(){t(),n.removeEventListener("DOMContentLoaded",s)};n.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var uu=null;function Xp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Pt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Zp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Wp(e,t,n){switch(t=nl(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function xs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);fo(e)}var Xt=new Map,Qp=new Set;function il(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var za=Z.d;Z.d={f:S1,r:N1,D:T1,C:A1,L:C1,m:E1,X:z1,S:k1,M:M1};function S1(){var e=za.f(),t=Qr();return e||t}function N1(e){var t=Hn(e);t!==null&&t.tag===5&&t.type==="form"?fh(t):za.r(e)}var yi=typeof document>"u"?null:document;function Kp(e,t,n){var s=yi;if(s&&typeof t=="string"&&t){var c=_t(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),Qp.has(c)||(Qp.add(c),e={rel:e,crossOrigin:n,href:t},s.querySelector(c)===null&&(t=s.createElement("link"),ct(t,"link",e),at(t),s.head.appendChild(t)))}}function T1(e){za.D(e),Kp("dns-prefetch",e,null)}function A1(e,t){za.C(e,t),Kp("preconnect",e,t)}function C1(e,t,n){za.L(e,t,n);var s=yi;if(s&&e&&t){var c='link[rel="preload"][as="'+_t(t)+'"]';t==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+_t(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+_t(n.imageSizes)+'"]')):c+='[href="'+_t(e)+'"]';var d=c;switch(t){case"style":d=bi(e);break;case"script":d=vi(e)}Xt.has(d)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Xt.set(d,e),s.querySelector(c)!==null||t==="style"&&s.querySelector(ws(d))||t==="script"&&s.querySelector(js(d))||(t=s.createElement("link"),ct(t,"link",e),at(t),s.head.appendChild(t)))}}function E1(e,t){za.m(e,t);var n=yi;if(n&&e){var s=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+_t(s)+'"][href="'+_t(e)+'"]',d=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=vi(e)}if(!Xt.has(d)&&(e=v({rel:"modulepreload",href:e},t),Xt.set(d,e),n.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(js(d)))return}s=n.createElement("link"),ct(s,"link",e),at(s),n.head.appendChild(s)}}}function k1(e,t,n){za.S(e,t,n);var s=yi;if(s&&e){var c=Un(s).hoistableStyles,d=bi(e);t=t||"default";var y=c.get(d);if(!y){var x={loading:0,preload:null};if(y=s.querySelector(ws(d)))x.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Xt.get(d))&&du(e,n);var E=y=s.createElement("link");at(E),ct(E,"link",e),E._p=new Promise(function(V,U){E.onload=V,E.onerror=U}),E.addEventListener("load",function(){x.loading|=1}),E.addEventListener("error",function(){x.loading|=2}),x.loading|=4,sl(y,t,s)}y={type:"stylesheet",instance:y,count:1,state:x},c.set(d,y)}}}function z1(e,t){za.X(e,t);var n=yi;if(n&&e){var s=Un(n).hoistableScripts,c=vi(e),d=s.get(c);d||(d=n.querySelector(js(c)),d||(e=v({src:e,async:!0},t),(t=Xt.get(c))&&fu(e,t),d=n.createElement("script"),at(d),ct(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(c,d))}}function M1(e,t){za.M(e,t);var n=yi;if(n&&e){var s=Un(n).hoistableScripts,c=vi(e),d=s.get(c);d||(d=n.querySelector(js(c)),d||(e=v({src:e,async:!0,type:"module"},t),(t=Xt.get(c))&&fu(e,t),d=n.createElement("script"),at(d),ct(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(c,d))}}function Jp(e,t,n,s){var c=(c=ye.current)?il(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=bi(n.href),n=Un(c).hoistableStyles,s=n.get(t),s||(s={type:"style",instance:null,count:0,state:null},n.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=bi(n.href);var d=Un(c).hoistableStyles,y=d.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,y),(d=c.querySelector(ws(e)))&&!d._p&&(y.instance=d,y.state.loading=5),Xt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Xt.set(e,n),d||D1(c,e,n,y.state))),t&&s===null)throw Error(o(528,""));return y}if(t&&s!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=vi(n),n=Un(c).hoistableScripts,s=n.get(t),s||(s={type:"script",instance:null,count:0,state:null},n.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function bi(e){return'href="'+_t(e)+'"'}function ws(e){return'link[rel="stylesheet"]['+e+"]"}function Ip(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function D1(e,t,n,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),ct(t,"link",n),at(t),e.head.appendChild(t))}function vi(e){return'[src="'+_t(e)+'"]'}function js(e){return"script[async]"+e}function $p(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+_t(n.href)+'"]');if(s)return t.instance=s,at(s),s;var c=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),at(s),ct(s,"style",c),sl(s,n.precedence,e),t.instance=s;case"stylesheet":c=bi(n.href);var d=e.querySelector(ws(c));if(d)return t.state.loading|=4,t.instance=d,at(d),d;s=Ip(n),(c=Xt.get(c))&&du(s,c),d=(e.ownerDocument||e).createElement("link"),at(d);var y=d;return y._p=new Promise(function(x,E){y.onload=x,y.onerror=E}),ct(d,"link",s),t.state.loading|=4,sl(d,n.precedence,e),t.instance=d;case"script":return d=vi(n.src),(c=e.querySelector(js(d)))?(t.instance=c,at(c),c):(s=n,(c=Xt.get(d))&&(s=v({},n),fu(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),at(c),ct(c,"link",s),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,sl(s,n.precedence,e));return t.instance}function sl(e,t,n){for(var s=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,d=c,y=0;y<s.length;y++){var x=s[y];if(x.dataset.precedence===t)d=x;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function du(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function fu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var rl=null;function e0(e,t,n){if(rl===null){var s=new Map,c=rl=new Map;c.set(n,s)}else c=rl,s=c.get(n),s||(s=new Map,c.set(n,s));if(s.has(e))return s;for(s.set(e,null),n=n.getElementsByTagName(e),c=0;c<n.length;c++){var d=n[c];if(!(d[_i]||d[st]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(t)||"";y=e+y;var x=s.get(y);x?x.push(d):s.set(y,[d])}}return s}function t0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function R1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function a0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function O1(e,t,n,s){if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=bi(s.href),d=t.querySelector(ws(c));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ll.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=d,at(d);return}d=t.ownerDocument||t,s=Ip(s),(c=Xt.get(c))&&du(s,c),d=d.createElement("link"),at(d);var y=d;y._p=new Promise(function(x,E){y.onload=x,y.onerror=E}),ct(d,"link",s),n.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ll.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var mu=0;function V1(e,t){return e.stylesheets&&e.count===0&&cl(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var s=setTimeout(function(){if(e.stylesheets&&cl(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+t);0<e.imgBytes&&mu===0&&(mu=62500*p1());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cl(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>mu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function ll(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ol=null;function cl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ol=new Map,t.forEach(B1,e),ol=null,ll.call(e))}function B1(e,t){if(!(t.state.loading&4)){var n=ol.get(e);if(n)var s=n.get(null);else{n=new Map,ol.set(e,n);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var y=c[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(n.set(y.dataset.precedence,y),s=y)}s&&n.set(null,s)}c=t.instance,y=c.getAttribute("data-precedence"),d=n.get(y)||s,d===s&&n.set(null,c),n.set(y,c),this.count++,s=ll.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Ss={$$typeof:L,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function L1(e,t,n,s,c,d,y,x,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lo(0),this.hiddenUpdates=lo(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function n0(e,t,n,s,c,d,y,x,E,V,U,Y){return e=new L1(e,t,n,y,E,V,U,Y,x),t=1,d===!0&&(t|=24),d=Et(3,null,null,t),e.current=d,d.stateNode=e,t=Xo(),t.refCount++,e.pooledCache=t,t.refCount++,d.memoizedState={element:s,isDehydrated:n,cache:t},Ko(d),e}function i0(e){return e?(e=Kn,e):Kn}function s0(e,t,n,s,c,d){c=i0(c),s.context===null?s.context=c:s.pendingContext=c,s=qa(t),s.payload={element:n},d=d===void 0?null:d,d!==null&&(s.callback=d),n=Ga(e,s,t),n!==null&&(jt(n,e,t),ts(n,e,t))}function r0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hu(e,t){r0(e,t),(e=e.alternate)&&r0(e,t)}function l0(e){if(e.tag===13||e.tag===31){var t=yn(e,67108864);t!==null&&jt(t,e,67108864),hu(e,67108864)}}function o0(e){if(e.tag===13||e.tag===31){var t=Rt();t=oo(t);var n=yn(e,t);n!==null&&jt(n,e,t),hu(e,t)}}var ul=!0;function _1(e,t,n,s){var c=_.T;_.T=null;var d=Z.p;try{Z.p=2,pu(e,t,n,s)}finally{Z.p=d,_.T=c}}function H1(e,t,n,s){var c=_.T;_.T=null;var d=Z.p;try{Z.p=8,pu(e,t,n,s)}finally{Z.p=d,_.T=c}}function pu(e,t,n,s){if(ul){var c=gu(s);if(c===null)tu(e,t,s,dl,n),u0(e,s);else if(q1(c,e,t,n,s))s.stopPropagation();else if(u0(e,s),t&4&&-1<U1.indexOf(e)){for(;c!==null;){var d=Hn(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=fn(d.pendingLanes);if(y!==0){var x=d;for(x.pendingLanes|=2,x.entangledLanes|=2;y;){var E=1<<31-At(y);x.entanglements[1]|=E,y&=~E}oa(d),(Ae&6)===0&&(Zr=Nt()+500,ys(0))}}break;case 31:case 13:x=yn(d,2),x!==null&&jt(x,d,2),Qr(),hu(d,2)}if(d=gu(s),d===null&&tu(e,t,s,dl,n),d===c)break;c=d}c!==null&&s.stopPropagation()}else tu(e,t,s,null,n)}}function gu(e){return e=bo(e),yu(e)}var dl=null;function yu(e){if(dl=null,e=_n(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===31){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return dl=e,null}function c0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Tv()){case yf:return 2;case bf:return 8;case er:case Av:return 32;case vf:return 268435456;default:return 32}default:return 32}}var bu=!1,$a=null,en=null,tn=null,Ns=new Map,Ts=new Map,an=[],U1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function u0(e,t){switch(e){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":Ns.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ts.delete(t.pointerId)}}function As(e,t,n,s,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:d,targetContainers:[c]},t!==null&&(t=Hn(t),t!==null&&l0(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function q1(e,t,n,s,c){switch(t){case"focusin":return $a=As($a,e,t,n,s,c),!0;case"dragenter":return en=As(en,e,t,n,s,c),!0;case"mouseover":return tn=As(tn,e,t,n,s,c),!0;case"pointerover":var d=c.pointerId;return Ns.set(d,As(Ns.get(d)||null,e,t,n,s,c)),!0;case"gotpointercapture":return d=c.pointerId,Ts.set(d,As(Ts.get(d)||null,e,t,n,s,c)),!0}return!1}function d0(e){var t=_n(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,Tf(e.priority,function(){o0(n)});return}}else if(t===31){if(t=h(n),t!==null){e.blockedOn=t,Tf(e.priority,function(){o0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gu(e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);yo=s,n.target.dispatchEvent(s),yo=null}else return t=Hn(n),t!==null&&l0(t),e.blockedOn=n,!1;t.shift()}return!0}function f0(e,t,n){fl(e)&&n.delete(t)}function G1(){bu=!1,$a!==null&&fl($a)&&($a=null),en!==null&&fl(en)&&(en=null),tn!==null&&fl(tn)&&(tn=null),Ns.forEach(f0),Ts.forEach(f0)}function ml(e,t){e.blockedOn===t&&(e.blockedOn=null,bu||(bu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,G1)))}var hl=null;function m0(e){hl!==e&&(hl=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){hl===e&&(hl=null);for(var t=0;t<e.length;t+=3){var n=e[t],s=e[t+1],c=e[t+2];if(typeof s!="function"){if(yu(s||n)===null)continue;break}var d=Hn(n);d!==null&&(e.splice(t,3),t-=3,gc(d,{pending:!0,data:c,method:n.method,action:s},s,c))}}))}function xi(e){function t(E){return ml(E,e)}$a!==null&&ml($a,e),en!==null&&ml(en,e),tn!==null&&ml(tn,e),Ns.forEach(t),Ts.forEach(t);for(var n=0;n<an.length;n++){var s=an[n];s.blockedOn===e&&(s.blockedOn=null)}for(;0<an.length&&(n=an[0],n.blockedOn===null);)d0(n),n.blockedOn===null&&an.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(s=0;s<n.length;s+=3){var c=n[s],d=n[s+1],y=c[gt]||null;if(typeof d=="function")y||m0(n);else if(y){var x=null;if(d&&d.hasAttribute("formAction")){if(c=d,y=d[gt]||null)x=y.formAction;else if(yu(c)!==null)continue}else x=y.action;typeof x=="function"?n[s+1]=x:(n.splice(s,3),s-=3),m0(n)}}}function h0(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),s||setTimeout(n,20)}function n(){if(!s&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function vu(e){this._internalRoot=e}pl.prototype.render=vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,s=Rt();s0(n,s,e,t,null,null)},pl.prototype.unmount=vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;s0(e.current,2,null,e,null,null),Qr(),t[Ln]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&d0(e)}};var p0=i.version;if(p0!=="19.2.4")throw Error(o(527,p0,"19.2.4"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=p(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var Y1={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{Vi=gl.inject(Y1),Tt=gl}catch{}}return Es.createRoot=function(e,t){if(!u(e))throw Error(o(299));var n=!1,s="",c=jh,d=Sh,y=Nh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError)),t=n0(e,1,!1,null,null,n,s,null,c,d,y,h0),e[Ln]=t.current,eu(e),new vu(t)},Es.hydrateRoot=function(e,t,n){if(!u(e))throw Error(o(299));var s=!1,c="",d=jh,y=Sh,x=Nh,E=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(y=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.formState!==void 0&&(E=n.formState)),t=n0(e,1,!0,t,n??null,s,c,E,d,y,x,h0),t.context=i0(null),n=t.current,s=Rt(),s=oo(s),c=qa(s),c.callback=null,Ga(n,c,s),n=s,t.current.lanes=n,Li(t,n),oa(t),e[Ln]=t.current,eu(e),new pl(t)},Es.version="19.2.4",Es}var T0;function e2(){if(T0)return ju.exports;T0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),ju.exports=$1(),ju.exports}var t2=e2();const a2=my(t2);var A0="popstate";function C0(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function n2(a={}){function i(o,u){let m=u.state?.masked,{pathname:f,search:h,hash:g}=m||o.location;return Ju("",{pathname:f,search:h,hash:g},u.state&&u.state.usr||null,u.state&&u.state.key||"default",m?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function l(o,u){return typeof u=="string"?u:Hs(u)}return s2(i,l,null,a)}function He(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function aa(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function i2(){return Math.random().toString(36).substring(2,10)}function E0(a,i){return{usr:a.state,key:a.key,idx:i,masked:a.unstable_mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function Ju(a,i,l=null,o,u){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?Ei(i):i,state:l,key:i&&i.key||o||i2(),unstable_mask:u}}function Hs({pathname:a="/",search:i="",hash:l=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(a+=l.charAt(0)==="#"?l:"#"+l),a}function Ei(a){let i={};if(a){let l=a.indexOf("#");l>=0&&(i.hash=a.substring(l),a=a.substring(0,l));let o=a.indexOf("?");o>=0&&(i.search=a.substring(o),a=a.substring(0,o)),a&&(i.pathname=a)}return i}function s2(a,i,l,o={}){let{window:u=document.defaultView,v5Compat:m=!1}=o,f=u.history,h="POP",g=null,p=b();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function b(){return(f.state||{idx:null}).idx}function v(){h="POP";let A=b(),M=A==null?null:A-p;p=A,g&&g({action:h,location:N.location,delta:M})}function w(A,M){h="PUSH";let R=C0(A)?A:Ju(N.location,A,M);p=b()+1;let L=E0(R,p),q=N.createHref(R.unstable_mask||R);try{f.pushState(L,"",q)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;u.location.assign(q)}m&&g&&g({action:h,location:N.location,delta:1})}function T(A,M){h="REPLACE";let R=C0(A)?A:Ju(N.location,A,M);p=b();let L=E0(R,p),q=N.createHref(R.unstable_mask||R);f.replaceState(L,"",q),m&&g&&g({action:h,location:N.location,delta:0})}function C(A){return r2(A)}let N={get action(){return h},get location(){return a(u,f)},listen(A){if(g)throw new Error("A history only accepts one active listener");return u.addEventListener(A0,v),g=A,()=>{u.removeEventListener(A0,v),g=null}},createHref(A){return i(u,A)},createURL:C,encodeLocation(A){let M=C(A);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:w,replace:T,go(A){return f.go(A)}};return N}function r2(a,i=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),He(l,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Hs(a);return o=o.replace(/ $/,"%20"),!i&&o.startsWith("//")&&(o=l+o),new URL(o,l)}function hy(a,i,l="/"){return l2(a,i,l,!1)}function l2(a,i,l,o){let u=typeof i=="string"?Ei(i):i,m=Ma(u.pathname||"/",l);if(m==null)return null;let f=py(a);o2(f);let h=null;for(let g=0;h==null&&g<f.length;++g){let p=v2(m);h=y2(f[g],p,o)}return h}function py(a,i=[],l=[],o="",u=!1){let m=(f,h,g=u,p)=>{let b={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(o)&&g)return;He(b.relativePath.startsWith(o),`Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(o.length)}let v=da([o,b.relativePath]),w=l.concat(b);f.children&&f.children.length>0&&(He(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),py(f.children,i,w,v,g)),!(f.path==null&&!f.index)&&i.push({path:v,score:p2(v,f.index),routesMeta:w})};return a.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))m(f,h);else for(let g of gy(f.path))m(f,h,!0,g)}),i}function gy(a){let i=a.split("/");if(i.length===0)return[];let[l,...o]=i,u=l.endsWith("?"),m=l.replace(/\?$/,"");if(o.length===0)return u?[m,""]:[m];let f=gy(o.join("/")),h=[];return h.push(...f.map(g=>g===""?m:[m,g].join("/"))),u&&h.push(...f),h.map(g=>a.startsWith("/")&&g===""?"/":g)}function o2(a){a.sort((i,l)=>i.score!==l.score?l.score-i.score:g2(i.routesMeta.map(o=>o.childrenIndex),l.routesMeta.map(o=>o.childrenIndex)))}var c2=/^:[\w-]+$/,u2=3,d2=2,f2=1,m2=10,h2=-2,k0=a=>a==="*";function p2(a,i){let l=a.split("/"),o=l.length;return l.some(k0)&&(o+=h2),i&&(o+=d2),l.filter(u=>!k0(u)).reduce((u,m)=>u+(c2.test(m)?u2:m===""?f2:m2),o)}function g2(a,i){return a.length===i.length&&a.slice(0,-1).every((o,u)=>o===i[u])?a[a.length-1]-i[i.length-1]:0}function y2(a,i,l=!1){let{routesMeta:o}=a,u={},m="/",f=[];for(let h=0;h<o.length;++h){let g=o[h],p=h===o.length-1,b=m==="/"?i:i.slice(m.length)||"/",v=Bl({path:g.relativePath,caseSensitive:g.caseSensitive,end:p},b),w=g.route;if(!v&&p&&l&&!o[o.length-1].route.index&&(v=Bl({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},b)),!v)return null;Object.assign(u,v.params),f.push({params:u,pathname:da([m,v.pathname]),pathnameBase:S2(da([m,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(m=da([m,v.pathnameBase]))}return f}function Bl(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[l,o]=b2(a.path,a.caseSensitive,a.end),u=i.match(l);if(!u)return null;let m=u[0],f=m.replace(/(.)\/+$/,"$1"),h=u.slice(1);return{params:o.reduce((p,{paramName:b,isOptional:v},w)=>{if(b==="*"){let C=h[w]||"";f=m.slice(0,m.length-C.length).replace(/(.)\/+$/,"$1")}const T=h[w];return v&&!T?p[b]=void 0:p[b]=(T||"").replace(/%2F/g,"/"),p},{}),pathname:m,pathnameBase:f,pattern:a}}function b2(a,i=!1,l=!0){aa(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],u="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,g,p,b)=>{if(o.push({paramName:h,isOptional:g!=null}),g){let v=b.charAt(p+f.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),u+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?u+="\\/*$":a!==""&&a!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),o]}function v2(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return aa(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function Ma(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let l=i.endsWith("/")?i.length-1:i.length,o=a.charAt(l);return o&&o!=="/"?null:a.slice(l)||"/"}var x2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function w2(a,i="/"){let{pathname:l,search:o="",hash:u=""}=typeof a=="string"?Ei(a):a,m;return l?(l=l.replace(/\/\/+/g,"/"),l.startsWith("/")?m=z0(l.substring(1),"/"):m=z0(l,i)):m=i,{pathname:m,search:N2(o),hash:T2(u)}}function z0(a,i){let l=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(u=>{u===".."?l.length>1&&l.pop():u!=="."&&l.push(u)}),l.length>1?l.join("/"):"/"}function Au(a,i,l,o){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function j2(a){return a.filter((i,l)=>l===0||i.route.path&&i.route.path.length>0)}function Ed(a){let i=j2(a);return i.map((l,o)=>o===i.length-1?l.pathname:l.pathnameBase)}function Xl(a,i,l,o=!1){let u;typeof a=="string"?u=Ei(a):(u={...a},He(!u.pathname||!u.pathname.includes("?"),Au("?","pathname","search",u)),He(!u.pathname||!u.pathname.includes("#"),Au("#","pathname","hash",u)),He(!u.search||!u.search.includes("#"),Au("#","search","hash",u)));let m=a===""||u.pathname==="",f=m?"/":u.pathname,h;if(f==null)h=l;else{let v=i.length-1;if(!o&&f.startsWith("..")){let w=f.split("/");for(;w[0]==="..";)w.shift(),v-=1;u.pathname=w.join("/")}h=v>=0?i[v]:"/"}let g=w2(u,h),p=f&&f!=="/"&&f.endsWith("/"),b=(m||f===".")&&l.endsWith("/");return!g.pathname.endsWith("/")&&(p||b)&&(g.pathname+="/"),g}var da=a=>a.join("/").replace(/\/\/+/g,"/"),S2=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),N2=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,T2=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,A2=class{constructor(a,i,l,o=!1){this.status=a,this.statusText=i||"",this.internal=o,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}};function C2(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function E2(a){return a.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var yy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function by(a,i){let l=a;if(typeof l!="string"||!x2.test(l))return{absoluteURL:void 0,isExternal:!1,to:l};let o=l,u=!1;if(yy)try{let m=new URL(window.location.href),f=l.startsWith("//")?new URL(m.protocol+l):new URL(l),h=Ma(f.pathname,i);f.origin===m.origin&&h!=null?l=h+f.search+f.hash:u=!0}catch{aa(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:u,to:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var vy=["POST","PUT","PATCH","DELETE"];new Set(vy);var k2=["GET",...vy];new Set(k2);var ki=S.createContext(null);ki.displayName="DataRouter";var Zl=S.createContext(null);Zl.displayName="DataRouterState";var z2=S.createContext(!1),xy=S.createContext({isTransitioning:!1});xy.displayName="ViewTransition";var M2=S.createContext(new Map);M2.displayName="Fetchers";var D2=S.createContext(null);D2.displayName="Await";var Bt=S.createContext(null);Bt.displayName="Navigation";var Xs=S.createContext(null);Xs.displayName="Location";var ia=S.createContext({outlet:null,matches:[],isDataRoute:!1});ia.displayName="Route";var kd=S.createContext(null);kd.displayName="RouteError";var wy="REACT_ROUTER_ERROR",R2="REDIRECT",O2="ROUTE_ERROR_RESPONSE";function V2(a){if(a.startsWith(`${wy}:${R2}:{`))try{let i=JSON.parse(a.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function B2(a){if(a.startsWith(`${wy}:${O2}:{`))try{let i=JSON.parse(a.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new A2(i.status,i.statusText,i.data)}catch{}}function L2(a,{relative:i}={}){He(zi(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:o}=S.useContext(Bt),{hash:u,pathname:m,search:f}=Zs(a,{relative:i}),h=m;return l!=="/"&&(h=m==="/"?l:da([l,m])),o.createHref({pathname:h,search:f,hash:u})}function zi(){return S.useContext(Xs)!=null}function Da(){return He(zi(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(Xs).location}var jy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sy(a){S.useContext(Bt).static||S.useLayoutEffect(a)}function Ie(){let{isDataRoute:a}=S.useContext(ia);return a?K2():_2()}function _2(){He(zi(),"useNavigate() may be used only in the context of a <Router> component.");let a=S.useContext(ki),{basename:i,navigator:l}=S.useContext(Bt),{matches:o}=S.useContext(ia),{pathname:u}=Da(),m=JSON.stringify(Ed(o)),f=S.useRef(!1);return Sy(()=>{f.current=!0}),S.useCallback((g,p={})=>{if(aa(f.current,jy),!f.current)return;if(typeof g=="number"){l.go(g);return}let b=Xl(g,JSON.parse(m),u,p.relative==="path");a==null&&i!=="/"&&(b.pathname=b.pathname==="/"?i:da([i,b.pathname])),(p.replace?l.replace:l.push)(b,p.state,p)},[i,l,m,u,a])}S.createContext(null);function zd(){let{matches:a}=S.useContext(ia),i=a[a.length-1];return i?i.params:{}}function Zs(a,{relative:i}={}){let{matches:l}=S.useContext(ia),{pathname:o}=Da(),u=JSON.stringify(Ed(l));return S.useMemo(()=>Xl(a,JSON.parse(u),o,i==="path"),[a,u,o,i])}function H2(a,i){return Ny(a,i)}function Ny(a,i,l){He(zi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=S.useContext(Bt),{matches:u}=S.useContext(ia),m=u[u.length-1],f=m?m.params:{},h=m?m.pathname:"/",g=m?m.pathnameBase:"/",p=m&&m.route;{let A=p&&p.path||"";Ay(h,!p||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let b=Da(),v;if(i){let A=typeof i=="string"?Ei(i):i;He(g==="/"||A.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${A.pathname}" was given in the \`location\` prop.`),v=A}else v=b;let w=v.pathname||"/",T=w;if(g!=="/"){let A=g.replace(/^\//,"").split("/");T="/"+w.replace(/^\//,"").split("/").slice(A.length).join("/")}let C=hy(a,{pathname:T});aa(p||C!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),aa(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=F2(C&&C.map(A=>Object.assign({},A,{params:Object.assign({},f,A.params),pathname:da([g,o.encodeLocation?o.encodeLocation(A.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?g:da([g,o.encodeLocation?o.encodeLocation(A.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathnameBase])})),u,l);return i&&N?S.createElement(Xs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},N):N}function U2(){let a=Q2(),i=C2(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),l=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:o},m={padding:"2px 4px",backgroundColor:o},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:m},"ErrorBoundary")," or"," ",S.createElement("code",{style:m},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},i),l?S.createElement("pre",{style:u},l):null,f)}var q2=S.createElement(U2,null),Ty=class extends S.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){this.props.onError?this.props.onError(a,i):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const l=B2(a.digest);l&&(a=l)}let i=a!==void 0?S.createElement(ia.Provider,{value:this.props.routeContext},S.createElement(kd.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?S.createElement(G2,{error:a},i):i}};Ty.contextType=z2;var Cu=new WeakMap;function G2({children:a,error:i}){let{basename:l}=S.useContext(Bt);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let o=V2(i.digest);if(o){let u=Cu.get(i);if(u)throw u;let m=by(o.location,l);if(yy&&!Cu.get(i))if(m.isExternal||o.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:o.replace}));throw Cu.set(i,f),f}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return a}function Y2({routeContext:a,match:i,children:l}){let o=S.useContext(ki);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),S.createElement(ia.Provider,{value:a},l)}function F2(a,i=[],l){let o=l?.state;if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let u=a,m=o?.errors;if(m!=null){let b=u.findIndex(v=>v.route.id&&m?.[v.route.id]!==void 0);He(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),u=u.slice(0,Math.min(u.length,b+1))}let f=!1,h=-1;if(l&&o){f=o.renderFallback;for(let b=0;b<u.length;b++){let v=u[b];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=b),v.route.id){let{loaderData:w,errors:T}=o,C=v.route.loader&&!w.hasOwnProperty(v.route.id)&&(!T||T[v.route.id]===void 0);if(v.route.lazy||C){l.isStatic&&(f=!0),h>=0?u=u.slice(0,h+1):u=[u[0]];break}}}}let g=l?.onError,p=o&&g?(b,v)=>{g(b,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:E2(o.matches),errorInfo:v})}:void 0;return u.reduceRight((b,v,w)=>{let T,C=!1,N=null,A=null;o&&(T=m&&v.route.id?m[v.route.id]:void 0,N=v.route.errorElement||q2,f&&(h<0&&w===0?(Ay("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,A=null):h===w&&(C=!0,A=v.route.hydrateFallbackElement||null)));let M=i.concat(u.slice(0,w+1)),R=()=>{let L;return T?L=N:C?L=A:v.route.Component?L=S.createElement(v.route.Component,null):v.route.element?L=v.route.element:L=b,S.createElement(Y2,{match:v,routeContext:{outlet:b,matches:M,isDataRoute:o!=null},children:L})};return o&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?S.createElement(Ty,{location:o.location,revalidation:o.revalidation,component:N,error:T,children:R(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:p}):R()},null)}function Md(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function P2(a){let i=S.useContext(ki);return He(i,Md(a)),i}function X2(a){let i=S.useContext(Zl);return He(i,Md(a)),i}function Z2(a){let i=S.useContext(ia);return He(i,Md(a)),i}function Dd(a){let i=Z2(a),l=i.matches[i.matches.length-1];return He(l.route.id,`${a} can only be used on routes that contain a unique "id"`),l.route.id}function W2(){return Dd("useRouteId")}function Q2(){let a=S.useContext(kd),i=X2("useRouteError"),l=Dd("useRouteError");return a!==void 0?a:i.errors?.[l]}function K2(){let{router:a}=P2("useNavigate"),i=Dd("useNavigate"),l=S.useRef(!1);return Sy(()=>{l.current=!0}),S.useCallback(async(u,m={})=>{aa(l.current,jy),l.current&&(typeof u=="number"?await a.navigate(u):await a.navigate(u,{fromRouteId:i,...m}))},[a,i])}var M0={};function Ay(a,i,l){!i&&!M0[a]&&(M0[a]=!0,aa(!1,l))}S.memo(J2);function J2({routes:a,future:i,state:l,isStatic:o,onError:u}){return Ny(a,void 0,{state:l,isStatic:o,onError:u})}function D0({to:a,replace:i,state:l,relative:o}){He(zi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:u}=S.useContext(Bt);aa(!u,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:m}=S.useContext(ia),{pathname:f}=Da(),h=Ie(),g=Xl(a,Ed(m),f,o==="path"),p=JSON.stringify(g);return S.useEffect(()=>{h(JSON.parse(p),{replace:i,state:l,relative:o})},[h,p,o,i,l]),null}function _e(a){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function I2({basename:a="/",children:i=null,location:l,navigationType:o="POP",navigator:u,static:m=!1,unstable_useTransitions:f}){He(!zi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=a.replace(/^\/*/,"/"),g=S.useMemo(()=>({basename:h,navigator:u,static:m,unstable_useTransitions:f,future:{}}),[h,u,m,f]);typeof l=="string"&&(l=Ei(l));let{pathname:p="/",search:b="",hash:v="",state:w=null,key:T="default",unstable_mask:C}=l,N=S.useMemo(()=>{let A=Ma(p,h);return A==null?null:{location:{pathname:A,search:b,hash:v,state:w,key:T,unstable_mask:C},navigationType:o}},[h,p,b,v,w,T,o,C]);return aa(N!=null,`<Router basename="${h}"> is not able to match the URL "${p}${b}${v}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:S.createElement(Bt.Provider,{value:g},S.createElement(Xs.Provider,{children:i,value:N}))}function $2({children:a,location:i}){return H2(Iu(a),i)}function Iu(a,i=[]){let l=[];return S.Children.forEach(a,(o,u)=>{if(!S.isValidElement(o))return;let m=[...i,u];if(o.type===S.Fragment){l.push.apply(l,Iu(o.props.children,m));return}He(o.type===_e,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!o.props.index||!o.props.children,"An index route cannot have child routes.");let f={id:o.props.id||m.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(f.children=Iu(o.props.children,m)),l.push(f)}),l}var Tl="get",Al="application/x-www-form-urlencoded";function Wl(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function e5(a){return Wl(a)&&a.tagName.toLowerCase()==="button"}function t5(a){return Wl(a)&&a.tagName.toLowerCase()==="form"}function a5(a){return Wl(a)&&a.tagName.toLowerCase()==="input"}function n5(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function i5(a,i){return a.button===0&&(!i||i==="_self")&&!n5(a)}var yl=null;function s5(){if(yl===null)try{new FormData(document.createElement("form"),0),yl=!1}catch{yl=!0}return yl}var r5=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Eu(a){return a!=null&&!r5.has(a)?(aa(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Al}"`),null):a}function l5(a,i){let l,o,u,m,f;if(t5(a)){let h=a.getAttribute("action");o=h?Ma(h,i):null,l=a.getAttribute("method")||Tl,u=Eu(a.getAttribute("enctype"))||Al,m=new FormData(a)}else if(e5(a)||a5(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||h.getAttribute("action");if(o=g?Ma(g,i):null,l=a.getAttribute("formmethod")||h.getAttribute("method")||Tl,u=Eu(a.getAttribute("formenctype"))||Eu(h.getAttribute("enctype"))||Al,m=new FormData(h,a),!s5()){let{name:p,type:b,value:v}=a;if(b==="image"){let w=p?`${p}.`:"";m.append(`${w}x`,"0"),m.append(`${w}y`,"0")}else p&&m.append(p,v)}}else{if(Wl(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=Tl,o=null,u=Al,f=a}return m&&u==="text/plain"&&(f=m,m=void 0),{action:o,method:l.toLowerCase(),encType:u,formData:m,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Rd(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function o5(a,i,l,o){let u=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return l?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${o}`:u.pathname=`${u.pathname}.${o}`:u.pathname==="/"?u.pathname=`_root.${o}`:i&&Ma(u.pathname,i)==="/"?u.pathname=`${i.replace(/\/$/,"")}/_root.${o}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${o}`,u}async function c5(a,i){if(a.id in i)return i[a.id];try{let l=await import(a.module);return i[a.id]=l,l}catch(l){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function u5(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function d5(a,i,l){let o=await Promise.all(a.map(async u=>{let m=i.routes[u.route.id];if(m){let f=await c5(m,l);return f.links?f.links():[]}return[]}));return p5(o.flat(1).filter(u5).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function R0(a,i,l,o,u,m){let f=(g,p)=>l[p]?g.route.id!==l[p].route.id:!0,h=(g,p)=>l[p].pathname!==g.pathname||l[p].route.path?.endsWith("*")&&l[p].params["*"]!==g.params["*"];return m==="assets"?i.filter((g,p)=>f(g,p)||h(g,p)):m==="data"?i.filter((g,p)=>{let b=o.routes[g.route.id];if(!b||!b.hasLoader)return!1;if(f(g,p)||h(g,p))return!0;if(g.route.shouldRevalidate){let v=g.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function f5(a,i,{includeHydrateFallback:l}={}){return m5(a.map(o=>{let u=i.routes[o.route.id];if(!u)return[];let m=[u.module];return u.clientActionModule&&(m=m.concat(u.clientActionModule)),u.clientLoaderModule&&(m=m.concat(u.clientLoaderModule)),l&&u.hydrateFallbackModule&&(m=m.concat(u.hydrateFallbackModule)),u.imports&&(m=m.concat(u.imports)),m}).flat(1))}function m5(a){return[...new Set(a)]}function h5(a){let i={},l=Object.keys(a).sort();for(let o of l)i[o]=a[o];return i}function p5(a,i){let l=new Set;return new Set(i),a.reduce((o,u)=>{let m=JSON.stringify(h5(u));return l.has(m)||(l.add(m),o.push({key:m,link:u})),o},[])}function Cy(){let a=S.useContext(ki);return Rd(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function g5(){let a=S.useContext(Zl);return Rd(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Od=S.createContext(void 0);Od.displayName="FrameworkContext";function Ey(){let a=S.useContext(Od);return Rd(a,"You must render this element inside a <HydratedRouter> element"),a}function y5(a,i){let l=S.useContext(Od),[o,u]=S.useState(!1),[m,f]=S.useState(!1),{onFocus:h,onBlur:g,onMouseEnter:p,onMouseLeave:b,onTouchStart:v}=i,w=S.useRef(null);S.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let N=M=>{M.forEach(R=>{f(R.isIntersecting)})},A=new IntersectionObserver(N,{threshold:.5});return w.current&&A.observe(w.current),()=>{A.disconnect()}}},[a]),S.useEffect(()=>{if(o){let N=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(N)}}},[o]);let T=()=>{u(!0)},C=()=>{u(!1),f(!1)};return l?a!=="intent"?[m,w,{}]:[m,w,{onFocus:ks(h,T),onBlur:ks(g,C),onMouseEnter:ks(p,T),onMouseLeave:ks(b,C),onTouchStart:ks(v,T)}]:[!1,w,{}]}function ks(a,i){return l=>{a&&a(l),l.defaultPrevented||i(l)}}function b5({page:a,...i}){let{router:l}=Cy(),o=S.useMemo(()=>hy(l.routes,a,l.basename),[l.routes,a,l.basename]);return o?S.createElement(x5,{page:a,matches:o,...i}):null}function v5(a){let{manifest:i,routeModules:l}=Ey(),[o,u]=S.useState([]);return S.useEffect(()=>{let m=!1;return d5(a,i,l).then(f=>{m||u(f)}),()=>{m=!0}},[a,i,l]),o}function x5({page:a,matches:i,...l}){let o=Da(),{future:u,manifest:m,routeModules:f}=Ey(),{basename:h}=Cy(),{loaderData:g,matches:p}=g5(),b=S.useMemo(()=>R0(a,i,p,m,o,"data"),[a,i,p,m,o]),v=S.useMemo(()=>R0(a,i,p,m,o,"assets"),[a,i,p,m,o]),w=S.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let N=new Set,A=!1;if(i.forEach(R=>{let L=m.routes[R.route.id];!L||!L.hasLoader||(!b.some(q=>q.route.id===R.route.id)&&R.route.id in g&&f[R.route.id]?.shouldRevalidate||L.hasClientLoader?A=!0:N.add(R.route.id))}),N.size===0)return[];let M=o5(a,h,u.unstable_trailingSlashAwareDataRequests,"data");return A&&N.size>0&&M.searchParams.set("_routes",i.filter(R=>N.has(R.route.id)).map(R=>R.route.id).join(",")),[M.pathname+M.search]},[h,u.unstable_trailingSlashAwareDataRequests,g,o,m,b,i,a,f]),T=S.useMemo(()=>f5(v,m),[v,m]),C=v5(v);return S.createElement(S.Fragment,null,w.map(N=>S.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...l})),T.map(N=>S.createElement("link",{key:N,rel:"modulepreload",href:N,...l})),C.map(({key:N,link:A})=>S.createElement("link",{key:N,nonce:l.nonce,...A,crossOrigin:A.crossOrigin??l.crossOrigin})))}function w5(...a){return i=>{a.forEach(l=>{typeof l=="function"?l(i):l!=null&&(l.current=i)})}}var j5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{j5&&(window.__reactRouterVersion="7.13.1")}catch{}function S5({basename:a,children:i,unstable_useTransitions:l,window:o}){let u=S.useRef();u.current==null&&(u.current=n2({window:o,v5Compat:!0}));let m=u.current,[f,h]=S.useState({action:m.action,location:m.location}),g=S.useCallback(p=>{l===!1?h(p):S.startTransition(()=>h(p))},[l]);return S.useLayoutEffect(()=>m.listen(g),[m,g]),S.createElement(I2,{basename:a,children:i,location:f.location,navigationType:f.action,navigator:m,unstable_useTransitions:l})}var ky=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ot=S.forwardRef(function({onClick:i,discover:l="render",prefetch:o="none",relative:u,reloadDocument:m,replace:f,unstable_mask:h,state:g,target:p,to:b,preventScrollReset:v,viewTransition:w,unstable_defaultShouldRevalidate:T,...C},N){let{basename:A,navigator:M,unstable_useTransitions:R}=S.useContext(Bt),L=typeof b=="string"&&ky.test(b),q=by(b,A);b=q.to;let P=L2(b,{relative:u}),ie=Da(),Q=null;if(h){let he=Xl(h,[],ie.unstable_mask?ie.unstable_mask.pathname:"/",!0);A!=="/"&&(he.pathname=he.pathname==="/"?A:da([A,he.pathname])),Q=M.createHref(he)}let[W,$,I]=y5(o,C),fe=C5(b,{replace:f,unstable_mask:h,state:g,target:p,preventScrollReset:v,relative:u,viewTransition:w,unstable_defaultShouldRevalidate:T,unstable_useTransitions:R});function me(he){i&&i(he),he.defaultPrevented||fe(he)}let X=!(q.isExternal||m),le=S.createElement("a",{...C,...I,href:(X?Q:void 0)||q.absoluteURL||P,onClick:X?me:i,ref:w5(N,$),target:p,"data-discover":!L&&l==="render"?"true":void 0});return W&&!L?S.createElement(S.Fragment,null,le,S.createElement(b5,{page:P})):le});Ot.displayName="Link";var N5=S.forwardRef(function({"aria-current":i="page",caseSensitive:l=!1,className:o="",end:u=!1,style:m,to:f,viewTransition:h,children:g,...p},b){let v=Zs(f,{relative:p.relative}),w=Da(),T=S.useContext(Zl),{navigator:C,basename:N}=S.useContext(Bt),A=T!=null&&D5(v)&&h===!0,M=C.encodeLocation?C.encodeLocation(v).pathname:v.pathname,R=w.pathname,L=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;l||(R=R.toLowerCase(),L=L?L.toLowerCase():null,M=M.toLowerCase()),L&&N&&(L=Ma(L,N)||L);const q=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let P=R===M||!u&&R.startsWith(M)&&R.charAt(q)==="/",ie=L!=null&&(L===M||!u&&L.startsWith(M)&&L.charAt(M.length)==="/"),Q={isActive:P,isPending:ie,isTransitioning:A},W=P?i:void 0,$;typeof o=="function"?$=o(Q):$=[o,P?"active":null,ie?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let I=typeof m=="function"?m(Q):m;return S.createElement(Ot,{...p,"aria-current":W,className:$,ref:b,style:I,to:f,viewTransition:h},typeof g=="function"?g(Q):g)});N5.displayName="NavLink";var T5=S.forwardRef(({discover:a="render",fetcherKey:i,navigate:l,reloadDocument:o,replace:u,state:m,method:f=Tl,action:h,onSubmit:g,relative:p,preventScrollReset:b,viewTransition:v,unstable_defaultShouldRevalidate:w,...T},C)=>{let{unstable_useTransitions:N}=S.useContext(Bt),A=z5(),M=M5(h,{relative:p}),R=f.toLowerCase()==="get"?"get":"post",L=typeof h=="string"&&ky.test(h),q=P=>{if(g&&g(P),P.defaultPrevented)return;P.preventDefault();let ie=P.nativeEvent.submitter,Q=ie?.getAttribute("formmethod")||f,W=()=>A(ie||P.currentTarget,{fetcherKey:i,method:Q,navigate:l,replace:u,state:m,relative:p,preventScrollReset:b,viewTransition:v,unstable_defaultShouldRevalidate:w});N&&l!==!1?S.startTransition(()=>W()):W()};return S.createElement("form",{ref:C,method:R,action:M,onSubmit:o?g:q,...T,"data-discover":!L&&a==="render"?"true":void 0})});T5.displayName="Form";function A5(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zy(a){let i=S.useContext(ki);return He(i,A5(a)),i}function C5(a,{target:i,replace:l,unstable_mask:o,state:u,preventScrollReset:m,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:g,unstable_useTransitions:p}={}){let b=Ie(),v=Da(),w=Zs(a,{relative:f});return S.useCallback(T=>{if(i5(T,i)){T.preventDefault();let C=l!==void 0?l:Hs(v)===Hs(w),N=()=>b(a,{replace:C,unstable_mask:o,state:u,preventScrollReset:m,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:g});p?S.startTransition(()=>N()):N()}},[v,b,w,l,o,u,i,a,m,f,h,g,p])}var E5=0,k5=()=>`__${String(++E5)}__`;function z5(){let{router:a}=zy("useSubmit"),{basename:i}=S.useContext(Bt),l=W2(),o=a.fetch,u=a.navigate;return S.useCallback(async(m,f={})=>{let{action:h,method:g,encType:p,formData:b,body:v}=l5(m,i);if(f.navigate===!1){let w=f.fetcherKey||k5();await o(w,l,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:b,body:v,formMethod:f.method||g,formEncType:f.encType||p,flushSync:f.flushSync})}else await u(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:b,body:v,formMethod:f.method||g,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:l,flushSync:f.flushSync,viewTransition:f.viewTransition})},[o,u,i,l])}function M5(a,{relative:i}={}){let{basename:l}=S.useContext(Bt),o=S.useContext(ia);He(o,"useFormAction must be used inside a RouteContext");let[u]=o.matches.slice(-1),m={...Zs(a||".",{relative:i})},f=Da();if(a==null){m.search=f.search;let h=new URLSearchParams(m.search),g=h.getAll("index");if(g.some(b=>b==="")){h.delete("index"),g.filter(v=>v).forEach(v=>h.append("index",v));let b=h.toString();m.search=b?`?${b}`:""}}return(!a||a===".")&&u.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(m.pathname=m.pathname==="/"?l:da([l,m.pathname])),Hs(m)}function D5(a,{relative:i}={}){let l=S.useContext(xy);He(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=zy("useViewTransitionState"),u=Zs(a,{relative:i});if(!l.isTransitioning)return!1;let m=Ma(l.currentLocation.pathname,o)||l.currentLocation.pathname,f=Ma(l.nextLocation.pathname,o)||l.nextLocation.pathname;return Bl(u.pathname,f)!=null||Bl(u.pathname,m)!=null}const Vd=S.createContext({});function on(a){const i=S.useRef(null);return i.current===null&&(i.current=a()),i.current}const R5=typeof window<"u",Ql=R5?S.useLayoutEffect:S.useEffect,Kl=S.createContext(null);function Bd(a,i){a.indexOf(i)===-1&&a.push(i)}function Ll(a,i){const l=a.indexOf(i);l>-1&&a.splice(l,1)}const na=(a,i,l)=>l>i?i:l<a?a:l;let Us=()=>{};const cn={},My=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);function Dy(a){return typeof a=="object"&&a!==null}const Ry=a=>/^0[^.\s]+$/u.test(a);function Oy(a){let i;return()=>(i===void 0&&(i=a()),i)}const St=a=>a,O5=(a,i)=>l=>i(a(l)),Ws=(...a)=>a.reduce(O5),Ai=(a,i,l)=>{const o=i-a;return o===0?1:(l-a)/o};class Ld{constructor(){this.subscriptions=[]}add(i){return Bd(this.subscriptions,i),()=>Ll(this.subscriptions,i)}notify(i,l,o){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](i,l,o);else for(let m=0;m<u;m++){const f=this.subscriptions[m];f&&f(i,l,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Vt=a=>a*1e3,Zt=a=>a/1e3;function _d(a,i){return i?a*(1e3/i):0}const Vy=(a,i,l)=>(((1-3*l+3*i)*a+(3*l-6*i))*a+3*i)*a,V5=1e-7,B5=12;function L5(a,i,l,o,u){let m,f,h=0;do f=i+(l-i)/2,m=Vy(f,o,u)-a,m>0?l=f:i=f;while(Math.abs(m)>V5&&++h<B5);return f}function Qs(a,i,l,o){if(a===i&&l===o)return St;const u=m=>L5(m,0,1,a,l);return m=>m===0||m===1?m:Vy(u(m),i,o)}const By=a=>i=>i<=.5?a(2*i)/2:(2-a(2*(1-i)))/2,Ly=a=>i=>1-a(1-i),_y=Qs(.33,1.53,.69,.99),Hd=Ly(_y),Hy=By(Hd),Uy=a=>a>=1?1:(a*=2)<1?.5*Hd(a):.5*(2-Math.pow(2,-10*(a-1))),Ud=a=>1-Math.sin(Math.acos(a)),qy=Ly(Ud),Gy=By(Ud),_5=Qs(.42,0,1,1),H5=Qs(0,0,.58,1),Yy=Qs(.42,0,.58,1),U5=a=>Array.isArray(a)&&typeof a[0]!="number",Fy=a=>Array.isArray(a)&&typeof a[0]=="number",q5={linear:St,easeIn:_5,easeInOut:Yy,easeOut:H5,circIn:Ud,circInOut:Gy,circOut:qy,backIn:Hd,backInOut:Hy,backOut:_y,anticipate:Uy},G5=a=>typeof a=="string",O0=a=>{if(Fy(a)){Us(a.length===4);const[i,l,o,u]=a;return Qs(i,l,o,u)}else if(G5(a))return q5[a];return a},bl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Y5(a,i){let l=new Set,o=new Set,u=!1,m=!1;const f=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function g(b){f.has(b)&&(p.schedule(b),a()),b(h)}const p={schedule:(b,v=!1,w=!1)=>{const C=w&&u?l:o;return v&&f.add(b),C.add(b),b},cancel:b=>{o.delete(b),f.delete(b)},process:b=>{if(h=b,u){m=!0;return}u=!0;const v=l;l=o,o=v,l.forEach(g),l.clear(),u=!1,m&&(m=!1,p.process(b))}};return p}const F5=40;function Py(a,i){let l=!1,o=!0;const u={delta:0,timestamp:0,isProcessing:!1},m=()=>l=!0,f=bl.reduce((L,q)=>(L[q]=Y5(m),L),{}),{setup:h,read:g,resolveKeyframes:p,preUpdate:b,update:v,preRender:w,render:T,postRender:C}=f,N=()=>{const L=cn.useManualTiming,q=L?u.timestamp:performance.now();l=!1,L||(u.delta=o?1e3/60:Math.max(Math.min(q-u.timestamp,F5),1)),u.timestamp=q,u.isProcessing=!0,h.process(u),g.process(u),p.process(u),b.process(u),v.process(u),w.process(u),T.process(u),C.process(u),u.isProcessing=!1,l&&i&&(o=!1,a(N))},A=()=>{l=!0,o=!0,u.isProcessing||a(N)};return{schedule:bl.reduce((L,q)=>{const P=f[q];return L[q]=(ie,Q=!1,W=!1)=>(l||A(),P.schedule(ie,Q,W)),L},{}),cancel:L=>{for(let q=0;q<bl.length;q++)f[bl[q]].cancel(L)},state:u,steps:f}}const{schedule:Se,cancel:Wt,state:it,steps:ku}=Py(typeof requestAnimationFrame<"u"?requestAnimationFrame:St,!0);let Cl;function P5(){Cl=void 0}const ht={now:()=>(Cl===void 0&&ht.set(it.isProcessing||cn.useManualTiming?it.timestamp:performance.now()),Cl),set:a=>{Cl=a,queueMicrotask(P5)}},Xy=a=>i=>typeof i=="string"&&i.startsWith(a),Zy=Xy("--"),X5=Xy("var(--"),qd=a=>X5(a)?Z5.test(a.split("/*")[0].trim()):!1,Z5=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function V0(a){return typeof a!="string"?!1:a.split("/*")[0].includes("var(--")}const Mi={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},qs={...Mi,transform:a=>na(0,1,a)},vl={...Mi,default:1},Rs=a=>Math.round(a*1e5)/1e5,Gd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function W5(a){return a==null}const Q5=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Yd=(a,i)=>l=>!!(typeof l=="string"&&Q5.test(l)&&l.startsWith(a)||i&&!W5(l)&&Object.prototype.hasOwnProperty.call(l,i)),Wy=(a,i,l)=>o=>{if(typeof o!="string")return o;const[u,m,f,h]=o.match(Gd);return{[a]:parseFloat(u),[i]:parseFloat(m),[l]:parseFloat(f),alpha:h!==void 0?parseFloat(h):1}},K5=a=>na(0,255,a),zu={...Mi,transform:a=>Math.round(K5(a))},Rn={test:Yd("rgb","red"),parse:Wy("red","green","blue"),transform:({red:a,green:i,blue:l,alpha:o=1})=>"rgba("+zu.transform(a)+", "+zu.transform(i)+", "+zu.transform(l)+", "+Rs(qs.transform(o))+")"};function J5(a){let i="",l="",o="",u="";return a.length>5?(i=a.substring(1,3),l=a.substring(3,5),o=a.substring(5,7),u=a.substring(7,9)):(i=a.substring(1,2),l=a.substring(2,3),o=a.substring(3,4),u=a.substring(4,5),i+=i,l+=l,o+=o,u+=u),{red:parseInt(i,16),green:parseInt(l,16),blue:parseInt(o,16),alpha:u?parseInt(u,16)/255:1}}const $u={test:Yd("#"),parse:J5,transform:Rn.transform},Ks=a=>({test:i=>typeof i=="string"&&i.endsWith(a)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${a}`}),rn=Ks("deg"),fa=Ks("%"),te=Ks("px"),I5=Ks("vh"),$5=Ks("vw"),B0={...fa,parse:a=>fa.parse(a)/100,transform:a=>fa.transform(a*100)},Si={test:Yd("hsl","hue"),parse:Wy("hue","saturation","lightness"),transform:({hue:a,saturation:i,lightness:l,alpha:o=1})=>"hsla("+Math.round(a)+", "+fa.transform(Rs(i))+", "+fa.transform(Rs(l))+", "+Rs(qs.transform(o))+")"},Je={test:a=>Rn.test(a)||$u.test(a)||Si.test(a),parse:a=>Rn.test(a)?Rn.parse(a):Si.test(a)?Si.parse(a):$u.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?Rn.transform(a):Si.transform(a),getAnimatableNone:a=>{const i=Je.parse(a);return i.alpha=0,Je.transform(i)}},ew=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function tw(a){return isNaN(a)&&typeof a=="string"&&(a.match(Gd)?.length||0)+(a.match(ew)?.length||0)>0}const Qy="number",Ky="color",aw="var",nw="var(",L0="${}",iw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ci(a){const i=a.toString(),l=[],o={color:[],number:[],var:[]},u=[];let m=0;const h=i.replace(iw,g=>(Je.test(g)?(o.color.push(m),u.push(Ky),l.push(Je.parse(g))):g.startsWith(nw)?(o.var.push(m),u.push(aw),l.push(g)):(o.number.push(m),u.push(Qy),l.push(parseFloat(g))),++m,L0)).split(L0);return{values:l,split:h,indexes:o,types:u}}function sw(a){return Ci(a).values}function Jy({split:a,types:i}){const l=a.length;return o=>{let u="";for(let m=0;m<l;m++)if(u+=a[m],o[m]!==void 0){const f=i[m];f===Qy?u+=Rs(o[m]):f===Ky?u+=Je.transform(o[m]):u+=o[m]}return u}}function rw(a){return Jy(Ci(a))}const lw=a=>typeof a=="number"?0:Je.test(a)?Je.getAnimatableNone(a):a,ow=(a,i)=>typeof a=="number"?i?.trim().endsWith("/")?a:0:lw(a);function cw(a){const i=Ci(a);return Jy(i)(i.values.map((o,u)=>ow(o,i.split[u])))}const ta={test:tw,parse:sw,createTransformer:rw,getAnimatableNone:cw};function Mu(a,i,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(i-a)*6*l:l<1/2?i:l<2/3?a+(i-a)*(2/3-l)*6:a}function uw({hue:a,saturation:i,lightness:l,alpha:o}){a/=360,i/=100,l/=100;let u=0,m=0,f=0;if(!i)u=m=f=l;else{const h=l<.5?l*(1+i):l+i-l*i,g=2*l-h;u=Mu(g,h,a+1/3),m=Mu(g,h,a),f=Mu(g,h,a-1/3)}return{red:Math.round(u*255),green:Math.round(m*255),blue:Math.round(f*255),alpha:o}}function _l(a,i){return l=>l>0?i:a}const Be=(a,i,l)=>a+(i-a)*l,Du=(a,i,l)=>{const o=a*a,u=l*(i*i-o)+o;return u<0?0:Math.sqrt(u)},dw=[$u,Rn,Si],fw=a=>dw.find(i=>i.test(a));function _0(a){const i=fw(a);if(!i)return!1;let l=i.parse(a);return i===Si&&(l=uw(l)),l}const H0=(a,i)=>{const l=_0(a),o=_0(i);if(!l||!o)return _l(a,i);const u={...l};return m=>(u.red=Du(l.red,o.red,m),u.green=Du(l.green,o.green,m),u.blue=Du(l.blue,o.blue,m),u.alpha=Be(l.alpha,o.alpha,m),Rn.transform(u))},ed=new Set(["none","hidden"]);function mw(a,i){return ed.has(a)?l=>l<=0?a:i:l=>l>=1?i:a}function hw(a,i){return l=>Be(a,i,l)}function Fd(a){return typeof a=="number"?hw:typeof a=="string"?qd(a)?_l:Je.test(a)?H0:yw:Array.isArray(a)?Iy:typeof a=="object"?Je.test(a)?H0:pw:_l}function Iy(a,i){const l=[...a],o=l.length,u=a.map((m,f)=>Fd(m)(m,i[f]));return m=>{for(let f=0;f<o;f++)l[f]=u[f](m);return l}}function pw(a,i){const l={...a,...i},o={};for(const u in l)a[u]!==void 0&&i[u]!==void 0&&(o[u]=Fd(a[u])(a[u],i[u]));return u=>{for(const m in o)l[m]=o[m](u);return l}}function gw(a,i){const l=[],o={color:0,var:0,number:0};for(let u=0;u<i.values.length;u++){const m=i.types[u],f=a.indexes[m][o[m]],h=a.values[f]??0;l[u]=h,o[m]++}return l}const yw=(a,i)=>{const l=ta.createTransformer(i),o=Ci(a),u=Ci(i);return o.indexes.var.length===u.indexes.var.length&&o.indexes.color.length===u.indexes.color.length&&o.indexes.number.length>=u.indexes.number.length?ed.has(a)&&!u.values.length||ed.has(i)&&!o.values.length?mw(a,i):Ws(Iy(gw(o,u),u.values),l):_l(a,i)};function $y(a,i,l){return typeof a=="number"&&typeof i=="number"&&typeof l=="number"?Be(a,i,l):Fd(a)(a,i)}const bw=a=>{const i=({timestamp:l})=>a(l);return{start:(l=!0)=>Se.update(i,l),stop:()=>Wt(i),now:()=>it.isProcessing?it.timestamp:ht.now()}},eb=(a,i,l=10)=>{let o="";const u=Math.max(Math.round(i/l),2);for(let m=0;m<u;m++)o+=Math.round(a(m/(u-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},Hl=2e4;function Pd(a){let i=0;const l=50;let o=a.next(i);for(;!o.done&&i<Hl;)i+=l,o=a.next(i);return i>=Hl?1/0:i}function vw(a,i=100,l){const o=l({...a,keyframes:[0,i]}),u=Math.min(Pd(o),Hl);return{type:"keyframes",ease:m=>o.next(u*m).value/i,duration:Zt(u)}}const Ge={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function td(a,i){return a*Math.sqrt(1-i*i)}const xw=12;function ww(a,i,l){let o=l;for(let u=1;u<xw;u++)o=o-a(o)/i(o);return o}const Ru=.001;function jw({duration:a=Ge.duration,bounce:i=Ge.bounce,velocity:l=Ge.velocity,mass:o=Ge.mass}){let u,m,f=1-i;f=na(Ge.minDamping,Ge.maxDamping,f),a=na(Ge.minDuration,Ge.maxDuration,Zt(a)),f<1?(u=p=>{const b=p*f,v=b*a,w=b-l,T=td(p,f),C=Math.exp(-v);return Ru-w/T*C},m=p=>{const v=p*f*a,w=v*l+l,T=Math.pow(f,2)*Math.pow(p,2)*a,C=Math.exp(-v),N=td(Math.pow(p,2),f);return(-u(p)+Ru>0?-1:1)*((w-T)*C)/N}):(u=p=>{const b=Math.exp(-p*a),v=(p-l)*a+1;return-Ru+b*v},m=p=>{const b=Math.exp(-p*a),v=(l-p)*(a*a);return b*v});const h=5/a,g=ww(u,m,h);if(a=Vt(a),isNaN(g))return{stiffness:Ge.stiffness,damping:Ge.damping,duration:a};{const p=Math.pow(g,2)*o;return{stiffness:p,damping:f*2*Math.sqrt(o*p),duration:a}}}const Sw=["duration","bounce"],Nw=["stiffness","damping","mass"];function U0(a,i){return i.some(l=>a[l]!==void 0)}function Tw(a){let i={velocity:Ge.velocity,stiffness:Ge.stiffness,damping:Ge.damping,mass:Ge.mass,isResolvedFromDuration:!1,...a};if(!U0(a,Nw)&&U0(a,Sw))if(i.velocity=0,a.visualDuration){const l=a.visualDuration,o=2*Math.PI/(l*1.2),u=o*o,m=2*na(.05,1,1-(a.bounce||0))*Math.sqrt(u);i={...i,mass:Ge.mass,stiffness:u,damping:m}}else{const l=jw({...a,velocity:0});i={...i,...l,mass:Ge.mass},i.isResolvedFromDuration=!0}return i}function Ul(a=Ge.visualDuration,i=Ge.bounce){const l=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:i}:a;let{restSpeed:o,restDelta:u}=l;const m=l.keyframes[0],f=l.keyframes[l.keyframes.length-1],h={done:!1,value:m},{stiffness:g,damping:p,mass:b,duration:v,velocity:w,isResolvedFromDuration:T}=Tw({...l,velocity:-Zt(l.velocity||0)}),C=w||0,N=p/(2*Math.sqrt(g*b)),A=f-m,M=Zt(Math.sqrt(g/b)),R=Math.abs(A)<5;o||(o=R?Ge.restSpeed.granular:Ge.restSpeed.default),u||(u=R?Ge.restDelta.granular:Ge.restDelta.default);let L,q,P,ie,Q,W;if(N<1)P=td(M,N),ie=(C+N*M*A)/P,L=I=>{const fe=Math.exp(-N*M*I);return f-fe*(ie*Math.sin(P*I)+A*Math.cos(P*I))},Q=N*M*ie+A*P,W=N*M*A-ie*P,q=I=>Math.exp(-N*M*I)*(Q*Math.sin(P*I)+W*Math.cos(P*I));else if(N===1){L=fe=>f-Math.exp(-M*fe)*(A+(C+M*A)*fe);const I=C+M*A;q=fe=>Math.exp(-M*fe)*(M*I*fe-C)}else{const I=M*Math.sqrt(N*N-1);L=le=>{const he=Math.exp(-N*M*le),_=Math.min(I*le,300);return f-he*((C+N*M*A)*Math.sinh(_)+I*A*Math.cosh(_))/I};const fe=(C+N*M*A)/I,me=N*M*fe-A*I,X=N*M*A-fe*I;q=le=>{const he=Math.exp(-N*M*le),_=Math.min(I*le,300);return he*(me*Math.sinh(_)+X*Math.cosh(_))}}const $={calculatedDuration:T&&v||null,velocity:I=>Vt(q(I)),next:I=>{if(!T&&N<1){const me=Math.exp(-N*M*I),X=Math.sin(P*I),le=Math.cos(P*I),he=f-me*(ie*X+A*le),_=Vt(me*(Q*X+W*le));return h.done=Math.abs(_)<=o&&Math.abs(f-he)<=u,h.value=h.done?f:he,h}const fe=L(I);if(T)h.done=I>=v;else{const me=Vt(q(I));h.done=Math.abs(me)<=o&&Math.abs(f-fe)<=u}return h.value=h.done?f:fe,h},toString:()=>{const I=Math.min(Pd($),Hl),fe=eb(me=>$.next(I*me).value,I,30);return I+"ms "+fe},toTransition:()=>{}};return $}Ul.applyToOptions=a=>{const i=vw(a,100,Ul);return a.ease=i.ease,a.duration=Vt(i.duration),a.type="keyframes",a};const Aw=5;function tb(a,i,l){const o=Math.max(i-Aw,0);return _d(l-a(o),i-o)}function ad({keyframes:a,velocity:i=0,power:l=.8,timeConstant:o=325,bounceDamping:u=10,bounceStiffness:m=500,modifyTarget:f,min:h,max:g,restDelta:p=.5,restSpeed:b}){const v=a[0],w={done:!1,value:v},T=W=>h!==void 0&&W<h||g!==void 0&&W>g,C=W=>h===void 0?g:g===void 0||Math.abs(h-W)<Math.abs(g-W)?h:g;let N=l*i;const A=v+N,M=f===void 0?A:f(A);M!==A&&(N=M-v);const R=W=>-N*Math.exp(-W/o),L=W=>M+R(W),q=W=>{const $=R(W),I=L(W);w.done=Math.abs($)<=p,w.value=w.done?M:I};let P,ie;const Q=W=>{T(w.value)&&(P=W,ie=Ul({keyframes:[w.value,C(w.value)],velocity:tb(L,W,w.value),damping:u,stiffness:m,restDelta:p,restSpeed:b}))};return Q(0),{calculatedDuration:null,next:W=>{let $=!1;return!ie&&P===void 0&&($=!0,q(W),Q(W)),P!==void 0&&W>=P?ie.next(W-P):(!$&&q(W),w)}}}function Cw(a,i,l){const o=[],u=l||cn.mix||$y,m=a.length-1;for(let f=0;f<m;f++){let h=u(a[f],a[f+1]);if(i){const g=Array.isArray(i)?i[f]||St:i;h=Ws(g,h)}o.push(h)}return o}function Xd(a,i,{clamp:l=!0,ease:o,mixer:u}={}){const m=a.length;if(Us(m===i.length),m===1)return()=>i[0];if(m===2&&i[0]===i[1])return()=>i[1];const f=a[0]===a[1];a[0]>a[m-1]&&(a=[...a].reverse(),i=[...i].reverse());const h=Cw(i,o,u),g=h.length,p=b=>{if(f&&b<a[0])return i[0];let v=0;if(g>1)for(;v<a.length-2&&!(b<a[v+1]);v++);const w=Ai(a[v],a[v+1],b);return h[v](w)};return l?b=>p(na(a[0],a[m-1],b)):p}function Ew(a,i){const l=a[a.length-1];for(let o=1;o<=i;o++){const u=Ai(0,i,o);a.push(Be(l,1,u))}}function ab(a){const i=[0];return Ew(i,a.length-1),i}function kw(a,i){return a.map(l=>l*i)}function zw(a,i){return a.map(()=>i||Yy).splice(0,a.length-1)}function Os({duration:a=300,keyframes:i,times:l,ease:o="easeInOut"}){const u=U5(o)?o.map(O0):O0(o),m={done:!1,value:i[0]},f=kw(l&&l.length===i.length?l:ab(i),a),h=Xd(f,i,{ease:Array.isArray(u)?u:zw(i,u)});return{calculatedDuration:a,next:g=>(m.value=h(g),m.done=g>=a,m)}}const Mw=a=>a!==null;function Jl(a,{repeat:i,repeatType:l="loop"},o,u=1){const m=a.filter(Mw),h=u<0||i&&l!=="loop"&&i%2===1?0:m.length-1;return!h||o===void 0?m[h]:o}const Dw={decay:ad,inertia:ad,tween:Os,keyframes:Os,spring:Ul};function nb(a){typeof a.type=="string"&&(a.type=Dw[a.type])}class Zd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,l){return this.finished.then(i,l)}}const Rw=a=>a/100;class Gs extends Zd{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:l}=this.options;l&&l.updatedAt!==ht.now()&&this.tick(ht.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;nb(i);const{type:l=Os,repeat:o=0,repeatDelay:u=0,repeatType:m,velocity:f=0}=i;let{keyframes:h}=i;const g=l||Os;g!==Os&&typeof h[0]!="number"&&(this.mixKeyframes=Ws(Rw,$y(h[0],h[1])),h=[0,100]);const p=g({...i,keyframes:h});m==="mirror"&&(this.mirroredGenerator=g({...i,keyframes:[...h].reverse(),velocity:-f})),p.calculatedDuration===null&&(p.calculatedDuration=Pd(p));const{calculatedDuration:b}=p;this.calculatedDuration=b,this.resolvedDuration=b+u,this.totalDuration=this.resolvedDuration*(o+1)-u,this.generator=p}updateTime(i){const l=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(i,l=!1){const{generator:o,totalDuration:u,mixKeyframes:m,mirroredGenerator:f,resolvedDuration:h,calculatedDuration:g}=this;if(this.startTime===null)return o.next(0);const{delay:p=0,keyframes:b,repeat:v,repeatType:w,repeatDelay:T,type:C,onUpdate:N,finalKeyframe:A}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-u/this.speed,this.startTime)),l?this.currentTime=i:this.updateTime(i);const M=this.currentTime-p*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?M<0:M>u;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let L=this.currentTime,q=o;if(v){const W=Math.min(this.currentTime,u)/h;let $=Math.floor(W),I=W%1;!I&&W>=1&&(I=1),I===1&&$--,$=Math.min($,v+1),$%2&&(w==="reverse"?(I=1-I,T&&(I-=T/h)):w==="mirror"&&(q=f)),L=na(0,1,I)*h}let P;R?(this.delayState.value=b[0],P=this.delayState):P=q.next(L),m&&!R&&(P.value=m(P.value));let{done:ie}=P;!R&&g!==null&&(ie=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const Q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&ie);return Q&&C!==ad&&(P.value=Jl(b,this.options,A,this.speed)),N&&N(P.value),Q&&this.finish(),P}then(i,l){return this.finished.then(i,l)}get duration(){return Zt(this.calculatedDuration)}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Zt(i)}get time(){return Zt(this.currentTime)}set time(i){i=Vt(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=i,this.tick(i))}getGeneratorVelocity(){const i=this.currentTime;if(i<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(i);const l=this.generator.next(i).value;return tb(o=>this.generator.next(o).value,i,l)}get speed(){return this.playbackSpeed}set speed(i){const l=this.playbackSpeed!==i;l&&this.driver&&this.updateTime(ht.now()),this.playbackSpeed=i,l&&this.driver&&(this.time=Zt(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=bw,startTime:l}=this.options;this.driver||(this.driver=i(u=>this.tick(u))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=l??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ht.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)}}function Ow(a){for(let i=1;i<a.length;i++)a[i]??(a[i]=a[i-1])}const On=a=>a*180/Math.PI,nd=a=>{const i=On(Math.atan2(a[1],a[0]));return id(i)},Vw={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:nd,rotateZ:nd,skewX:a=>On(Math.atan(a[1])),skewY:a=>On(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},id=a=>(a=a%360,a<0&&(a+=360),a),q0=nd,G0=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),Y0=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),Bw={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:G0,scaleY:Y0,scale:a=>(G0(a)+Y0(a))/2,rotateX:a=>id(On(Math.atan2(a[6],a[5]))),rotateY:a=>id(On(Math.atan2(-a[2],a[0]))),rotateZ:q0,rotate:q0,skewX:a=>On(Math.atan(a[4])),skewY:a=>On(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function sd(a){return a.includes("scale")?1:0}function rd(a,i){if(!a||a==="none")return sd(i);const l=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,u;if(l)o=Bw,u=l;else{const h=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=Vw,u=h}if(!u)return sd(i);const m=o[i],f=u[1].split(",").map(_w);return typeof m=="function"?m(f):f[m]}const Lw=(a,i)=>{const{transform:l="none"}=getComputedStyle(a);return rd(l,i)};function _w(a){return parseFloat(a.trim())}const Di=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ri=new Set(Di),F0=a=>a===Mi||a===te,Hw=new Set(["x","y","z"]),Uw=Di.filter(a=>!Hw.has(a));function qw(a){const i=[];return Uw.forEach(l=>{const o=a.getValue(l);o!==void 0&&(i.push([l,o.get()]),o.set(l.startsWith("scale")?1:0))}),i}const ln={width:({x:a},{paddingLeft:i="0",paddingRight:l="0",boxSizing:o})=>{const u=a.max-a.min;return o==="border-box"?u:u-parseFloat(i)-parseFloat(l)},height:({y:a},{paddingTop:i="0",paddingBottom:l="0",boxSizing:o})=>{const u=a.max-a.min;return o==="border-box"?u:u-parseFloat(i)-parseFloat(l)},top:(a,{top:i})=>parseFloat(i),left:(a,{left:i})=>parseFloat(i),bottom:({y:a},{top:i})=>parseFloat(i)+(a.max-a.min),right:({x:a},{left:i})=>parseFloat(i)+(a.max-a.min),x:(a,{transform:i})=>rd(i,"x"),y:(a,{transform:i})=>rd(i,"y")};ln.translateX=ln.x;ln.translateY=ln.y;const Vn=new Set;let ld=!1,od=!1,cd=!1;function ib(){if(od){const a=Array.from(Vn).filter(o=>o.needsMeasurement),i=new Set(a.map(o=>o.element)),l=new Map;i.forEach(o=>{const u=qw(o);u.length&&(l.set(o,u),o.render())}),a.forEach(o=>o.measureInitialState()),i.forEach(o=>{o.render();const u=l.get(o);u&&u.forEach(([m,f])=>{o.getValue(m)?.set(f)})}),a.forEach(o=>o.measureEndState()),a.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}od=!1,ld=!1,Vn.forEach(a=>a.complete(cd)),Vn.clear()}function sb(){Vn.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(od=!0)})}function Gw(){cd=!0,sb(),ib(),cd=!1}class Wd{constructor(i,l,o,u,m,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=l,this.name=o,this.motionValue=u,this.element=m,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(Vn.add(this),ld||(ld=!0,Se.read(sb),Se.resolveKeyframes(ib))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:l,element:o,motionValue:u}=this;if(i[0]===null){const m=u?.get(),f=i[i.length-1];if(m!==void 0)i[0]=m;else if(o&&l){const h=o.readValue(l,f);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=f),u&&m===void 0&&u.set(i[0])}Ow(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),Vn.delete(this)}cancel(){this.state==="scheduled"&&(Vn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Yw=a=>a.startsWith("--");function rb(a,i,l){Yw(i)?a.style.setProperty(i,l):a.style[i]=l}const Fw={};function Qd(a,i){const l=Oy(a);return()=>Fw[i]??l()}const Kd=Qd(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),lb=Qd(()=>window.ViewTimeline!==void 0,"viewTimeline"),ob=Qd(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ms=([a,i,l,o])=>`cubic-bezier(${a}, ${i}, ${l}, ${o})`,P0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ms([0,.65,.55,1]),circOut:Ms([.55,0,1,.45]),backIn:Ms([.31,.01,.66,-.59]),backOut:Ms([.33,1.53,.69,.99])};function cb(a,i){if(a)return typeof a=="function"?ob()?eb(a,i):"ease-out":Fy(a)?Ms(a):Array.isArray(a)?a.map(l=>cb(l,i)||P0.easeOut):P0[a]}function Pw(a,i,l,{delay:o=0,duration:u=300,repeat:m=0,repeatType:f="loop",ease:h="easeOut",times:g}={},p=void 0){const b={[i]:l};g&&(b.offset=g);const v=cb(h,u);Array.isArray(v)&&(b.easing=v);const w={delay:o,duration:u,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:m+1,direction:f==="reverse"?"alternate":"normal"};return p&&(w.pseudoElement=p),a.animate(b,w)}function ub(a){return typeof a=="function"&&"applyToOptions"in a}function Xw({type:a,...i}){return ub(a)&&ob()?a.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class db extends Zd{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!i)return;const{element:l,name:o,keyframes:u,pseudoElement:m,allowFlatten:f=!1,finalKeyframe:h,onComplete:g}=i;this.isPseudoElement=!!m,this.allowFlatten=f,this.options=i,Us(typeof i.type!="string");const p=Xw(i);this.animation=Pw(l,o,u,p,m),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!m){const b=Jl(u,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(b),rb(l,o,b),this.animation.cancel()}g?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const i=this.options?.element;!this.isPseudoElement&&i?.isConnected&&this.animation.commitStyles?.()}get duration(){const i=this.animation.effect?.getComputedTiming?.().duration||0;return Zt(Number(i))}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Zt(i)}get time(){return Zt(Number(this.animation.currentTime)||0)}set time(i){const l=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Vt(i),l&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(i){this.manualStartTime=this.animation.startTime=i}attachTimeline({timeline:i,rangeStart:l,rangeEnd:o,observe:u}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,i&&Kd()?(this.animation.timeline=i,l&&(this.animation.rangeStart=l),o&&(this.animation.rangeEnd=o),St):u(this)}}const fb={anticipate:Uy,backInOut:Hy,circInOut:Gy};function Zw(a){return a in fb}function Ww(a){typeof a.ease=="string"&&Zw(a.ease)&&(a.ease=fb[a.ease])}const Ou=10;class Qw extends db{constructor(i){Ww(i),nb(i),super(i),i.startTime!==void 0&&i.autoplay!==!1&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:l,onUpdate:o,onComplete:u,element:m,...f}=this.options;if(!l)return;if(i!==void 0){l.set(i);return}const h=new Gs({...f,autoplay:!1}),g=Math.max(Ou,ht.now()-this.startTime),p=na(0,Ou,g-Ou),b=h.sample(g).value,{name:v}=this.options;m&&v&&rb(m,v,b),l.setWithVelocity(h.sample(Math.max(0,g-p)).value,b,p),h.stop()}}const X0=(a,i)=>i==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(ta.test(a)||a==="0")&&!a.startsWith("url("));function Kw(a){const i=a[0];if(a.length===1)return!0;for(let l=0;l<a.length;l++)if(a[l]!==i)return!0}function Jw(a,i,l,o){const u=a[0];if(u===null)return!1;if(i==="display"||i==="visibility")return!0;const m=a[a.length-1],f=X0(u,i),h=X0(m,i);return!f||!h?!1:Kw(a)||(l==="spring"||ub(l))&&o}function ud(a){a.duration=0,a.type="keyframes"}const mb=new Set(["opacity","clipPath","filter","transform"]),Iw=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function $w(a){for(let i=0;i<a.length;i++)if(typeof a[i]=="string"&&Iw.test(a[i]))return!0;return!1}const ej=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),tj=Oy(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function aj(a){const{motionValue:i,name:l,repeatDelay:o,repeatType:u,damping:m,type:f,keyframes:h}=a;if(!(i?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:b}=i.owner.getProps();return tj()&&l&&(mb.has(l)||ej.has(l)&&$w(h))&&(l!=="transform"||!b)&&!p&&!o&&u!=="mirror"&&m!==0&&f!=="inertia"}const nj=40;class ij extends Zd{constructor({autoplay:i=!0,delay:l=0,type:o="keyframes",repeat:u=0,repeatDelay:m=0,repeatType:f="loop",keyframes:h,name:g,motionValue:p,element:b,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ht.now();const w={autoplay:i,delay:l,type:o,repeat:u,repeatDelay:m,repeatType:f,name:g,motionValue:p,element:b,...v},T=b?.KeyframeResolver||Wd;this.keyframeResolver=new T(h,(C,N,A)=>this.onKeyframesResolved(C,N,w,!A),g,p,b),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(i,l,o,u){this.keyframeResolver=void 0;const{name:m,type:f,velocity:h,delay:g,isHandoff:p,onUpdate:b}=o;this.resolvedAt=ht.now();let v=!0;Jw(i,m,f,h)||(v=!1,(cn.instantAnimations||!g)&&b?.(Jl(i,o,l)),i[0]=i[i.length-1],ud(o),o.repeat=0);const T={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>nj?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...o,keyframes:i},C=v&&!p&&aj(T),N=T.motionValue?.owner?.current;let A;if(C)try{A=new Qw({...T,element:N})}catch{A=new Gs(T)}else A=new Gs(T);A.finished.then(()=>{this.notifyFinished()}).catch(St),this.pendingTimeline&&(this.stopTimeline=A.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=A}get finished(){return this._animation?this.animation.finished:this._finished}then(i,l){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Gw()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function hb(a,i,l,o=0,u=1){const m=Array.from(a).sort((p,b)=>p.sortNodePosition(b)).indexOf(i),f=a.size,h=(f-1)*o;return typeof l=="function"?l(m,f):u===1?m*o:h-m*o}const sj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function rj(a){const i=sj.exec(a);if(!i)return[,];const[,l,o,u]=i;return[`--${l??o}`,u]}function pb(a,i,l=1){const[o,u]=rj(a);if(!o)return;const m=window.getComputedStyle(i).getPropertyValue(o);if(m){const f=m.trim();return My(f)?parseFloat(f):f}return qd(u)?pb(u,i,l+1):u}const lj={type:"spring",stiffness:500,damping:25,restSpeed:10},oj=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),cj={type:"keyframes",duration:.8},uj={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},dj=(a,{keyframes:i})=>i.length>2?cj:Ri.has(a)?a.startsWith("scale")?oj(i[1]):lj:uj;function gb(a,i){if(a?.inherit&&i){const{inherit:l,...o}=a;return{...i,...o}}return a}function Jd(a,i){const l=a?.[i]??a?.default??a;return l!==a?gb(l,a):l}const fj=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function mj(a){for(const i in a)if(!fj.has(i))return!0;return!1}const Id=(a,i,l,o={},u,m)=>f=>{const h=Jd(o,a)||{},g=h.delay||o.delay||0;let{elapsed:p=0}=o;p=p-Vt(g);const b={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:i.getVelocity(),...h,delay:-p,onUpdate:w=>{i.set(w),h.onUpdate&&h.onUpdate(w)},onComplete:()=>{f(),h.onComplete&&h.onComplete()},name:a,motionValue:i,element:m?void 0:u};mj(h)||Object.assign(b,dj(a,b)),b.duration&&(b.duration=Vt(b.duration)),b.repeatDelay&&(b.repeatDelay=Vt(b.repeatDelay)),b.from!==void 0&&(b.keyframes[0]=b.from);let v=!1;if((b.type===!1||b.duration===0&&!b.repeatDelay)&&(ud(b),b.delay===0&&(v=!0)),(cn.instantAnimations||cn.skipAnimations||u?.shouldSkipAnimations)&&(v=!0,ud(b),b.delay=0),b.allowFlatten=!h.type&&!h.ease,v&&!m&&i.get()!==void 0){const w=Jl(b.keyframes,h);if(w!==void 0){Se.update(()=>{b.onUpdate(w),b.onComplete()});return}}return h.isSync?new Gs(b):new ij(b)};function Z0(a){const i=[{},{}];return a?.values.forEach((l,o)=>{i[0][o]=l.get(),i[1][o]=l.getVelocity()}),i}function $d(a,i,l,o){if(typeof i=="function"){const[u,m]=Z0(o);i=i(l!==void 0?l:a.custom,u,m)}if(typeof i=="string"&&(i=a.variants&&a.variants[i]),typeof i=="function"){const[u,m]=Z0(o);i=i(l!==void 0?l:a.custom,u,m)}return i}function Bn(a,i,l){const o=a.getProps();return $d(o,i,l!==void 0?l:o.custom,a)}const yb=new Set(["width","height","top","left","right","bottom",...Di]),W0=30,hj=a=>!isNaN(parseFloat(a)),Vs={current:void 0};class pj{constructor(i,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const u=ht.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const m of this.dependents)m.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=l.owner}setCurrent(i){this.current=i,this.updatedAt=ht.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=hj(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,l){this.events[i]||(this.events[i]=new Ld);const o=this.events[i].add(l);return i==="change"?()=>{o(),Se.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,l){this.passiveEffect=i,this.stopPassiveEffect=l}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,l,o){this.set(l),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-o}jump(i,l=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return Vs.current&&Vs.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const i=ht.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>W0)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,W0);return _d(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(i){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=i(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ea(a,i){return new pj(a,i)}const dd=a=>Array.isArray(a);function gj(a,i,l){a.hasValue(i)?a.getValue(i).set(l):a.addValue(i,ea(l))}function yj(a){return dd(a)?a[a.length-1]||0:a}function bj(a,i){const l=Bn(a,i);let{transitionEnd:o={},transition:u={},...m}=l||{};m={...m,...o};for(const f in m){const h=yj(m[f]);gj(a,f,h)}}const tt=a=>!!(a&&a.getVelocity);function vj(a){return!!(tt(a)&&a.add)}function fd(a,i){const l=a.getValue("willChange");if(vj(l))return l.add(i);if(!l&&cn.WillChange){const o=new cn.WillChange("auto");a.addValue("willChange",o),o.add(i)}}function ef(a){return a.replace(/([A-Z])/g,i=>`-${i.toLowerCase()}`)}const xj="framerAppearId",bb="data-"+ef(xj);function vb(a){return a.props[bb]}function wj({protectedKeys:a,needsAnimating:i},l){const o=a.hasOwnProperty(l)&&i[l]!==!0;return i[l]=!1,o}function xb(a,i,{delay:l=0,transitionOverride:o,type:u}={}){let{transition:m,transitionEnd:f,...h}=i;const g=a.getDefaultTransition();m=m?gb(m,g):g;const p=m?.reduceMotion;o&&(m=o);const b=[],v=u&&a.animationState&&a.animationState.getState()[u];for(const w in h){const T=a.getValue(w,a.latestValues[w]??null),C=h[w];if(C===void 0||v&&wj(v,w))continue;const N={delay:l,...Jd(m||{},w)},A=T.get();if(A!==void 0&&!T.isAnimating()&&!Array.isArray(C)&&C===A&&!N.velocity){Se.update(()=>T.set(C));continue}let M=!1;if(window.MotionHandoffAnimation){const q=vb(a);if(q){const P=window.MotionHandoffAnimation(q,w,Se);P!==null&&(N.startTime=P,M=!0)}}fd(a,w);const R=p??a.shouldReduceMotion;T.start(Id(w,T,C,R&&yb.has(w)?{type:!1}:N,a,M));const L=T.animation;L&&b.push(L)}if(f){const w=()=>Se.update(()=>{f&&bj(a,f)});b.length?Promise.all(b).then(w):w()}return b}function md(a,i,l={}){const o=Bn(a,i,l.type==="exit"?a.presenceContext?.custom:void 0);let{transition:u=a.getDefaultTransition()||{}}=o||{};l.transitionOverride&&(u=l.transitionOverride);const m=o?()=>Promise.all(xb(a,o,l)):()=>Promise.resolve(),f=a.variantChildren&&a.variantChildren.size?(g=0)=>{const{delayChildren:p=0,staggerChildren:b,staggerDirection:v}=u;return jj(a,i,g,p,b,v,l)}:()=>Promise.resolve(),{when:h}=u;if(h){const[g,p]=h==="beforeChildren"?[m,f]:[f,m];return g().then(()=>p())}else return Promise.all([m(),f(l.delay)])}function jj(a,i,l=0,o=0,u=0,m=1,f){const h=[];for(const g of a.variantChildren)g.notify("AnimationStart",i),h.push(md(g,i,{...f,delay:l+(typeof o=="function"?0:o)+hb(a.variantChildren,g,o,u,m)}).then(()=>g.notify("AnimationComplete",i)));return Promise.all(h)}function Sj(a,i,l={}){a.notify("AnimationStart",i);let o;if(Array.isArray(i)){const u=i.map(m=>md(a,m,l));o=Promise.all(u)}else if(typeof i=="string")o=md(a,i,l);else{const u=typeof i=="function"?Bn(a,i,l.custom):i;o=Promise.all(xb(a,u,l))}return o.then(()=>{a.notify("AnimationComplete",i)})}const Nj={test:a=>a==="auto",parse:a=>a},wb=a=>i=>i.test(a),jb=[Mi,te,fa,rn,$5,I5,Nj],Q0=a=>jb.find(wb(a));function Tj(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||Ry(a):!0}const Aj=new Set(["brightness","contrast","saturate","opacity"]);function Cj(a){const[i,l]=a.slice(0,-1).split("(");if(i==="drop-shadow")return a;const[o]=l.match(Gd)||[];if(!o)return a;const u=l.replace(o,"");let m=Aj.has(i)?1:0;return o!==l&&(m*=100),i+"("+m+u+")"}const Ej=/\b([a-z-]*)\(.*?\)/gu,hd={...ta,getAnimatableNone:a=>{const i=a.match(Ej);return i?i.map(Cj).join(" "):a}},pd={...ta,getAnimatableNone:a=>{const i=ta.parse(a);return ta.createTransformer(a)(i.map(o=>typeof o=="number"?0:typeof o=="object"?{...o,alpha:1}:o))}},K0={...Mi,transform:Math.round},kj={rotate:rn,rotateX:rn,rotateY:rn,rotateZ:rn,scale:vl,scaleX:vl,scaleY:vl,scaleZ:vl,skew:rn,skewX:rn,skewY:rn,distance:te,translateX:te,translateY:te,translateZ:te,x:te,y:te,z:te,perspective:te,transformPerspective:te,opacity:qs,originX:B0,originY:B0,originZ:te},tf={borderWidth:te,borderTopWidth:te,borderRightWidth:te,borderBottomWidth:te,borderLeftWidth:te,borderRadius:te,borderTopLeftRadius:te,borderTopRightRadius:te,borderBottomRightRadius:te,borderBottomLeftRadius:te,width:te,maxWidth:te,height:te,maxHeight:te,top:te,right:te,bottom:te,left:te,inset:te,insetBlock:te,insetBlockStart:te,insetBlockEnd:te,insetInline:te,insetInlineStart:te,insetInlineEnd:te,padding:te,paddingTop:te,paddingRight:te,paddingBottom:te,paddingLeft:te,paddingBlock:te,paddingBlockStart:te,paddingBlockEnd:te,paddingInline:te,paddingInlineStart:te,paddingInlineEnd:te,margin:te,marginTop:te,marginRight:te,marginBottom:te,marginLeft:te,marginBlock:te,marginBlockStart:te,marginBlockEnd:te,marginInline:te,marginInlineStart:te,marginInlineEnd:te,fontSize:te,backgroundPositionX:te,backgroundPositionY:te,...kj,zIndex:K0,fillOpacity:qs,strokeOpacity:qs,numOctaves:K0},zj={...tf,color:Je,backgroundColor:Je,outlineColor:Je,fill:Je,stroke:Je,borderColor:Je,borderTopColor:Je,borderRightColor:Je,borderBottomColor:Je,borderLeftColor:Je,filter:hd,WebkitFilter:hd,mask:pd,WebkitMask:pd},Sb=a=>zj[a],Mj=new Set([hd,pd]);function Nb(a,i){let l=Sb(a);return Mj.has(l)||(l=ta),l.getAnimatableNone?l.getAnimatableNone(i):void 0}const Dj=new Set(["auto","none","0"]);function Rj(a,i,l){let o=0,u;for(;o<a.length&&!u;){const m=a[o];typeof m=="string"&&!Dj.has(m)&&Ci(m).values.length&&(u=a[o]),o++}if(u&&l)for(const m of i)a[m]=Nb(l,u)}class Oj extends Wd{constructor(i,l,o,u,m){super(i,l,o,u,m,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:l,name:o}=this;if(!l||!l.current)return;super.readKeyframes();for(let b=0;b<i.length;b++){let v=i[b];if(typeof v=="string"&&(v=v.trim(),qd(v))){const w=pb(v,l.current);w!==void 0&&(i[b]=w),b===i.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!yb.has(o)||i.length!==2)return;const[u,m]=i,f=Q0(u),h=Q0(m),g=V0(u),p=V0(m);if(g!==p&&ln[o]){this.needsMeasurement=!0;return}if(f!==h)if(F0(f)&&F0(h))for(let b=0;b<i.length;b++){const v=i[b];typeof v=="string"&&(i[b]=parseFloat(v))}else ln[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:l}=this,o=[];for(let u=0;u<i.length;u++)(i[u]===null||Tj(i[u]))&&o.push(u);o.length&&Rj(i,o,l)}measureInitialState(){const{element:i,unresolvedKeyframes:l,name:o}=this;if(!i||!i.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ln[o](i.measureViewportBox(),window.getComputedStyle(i.current)),l[0]=this.measuredOrigin;const u=l[l.length-1];u!==void 0&&i.getValue(o,u).jump(u,!1)}measureEndState(){const{element:i,name:l,unresolvedKeyframes:o}=this;if(!i||!i.current)return;const u=i.getValue(l);u&&u.jump(this.measuredOrigin,!1);const m=o.length-1,f=o[m];o[m]=ln[l](i.measureViewportBox(),window.getComputedStyle(i.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([h,g])=>{i.getValue(h).set(g)}),this.resolveNoneKeyframes()}}function af(a,i,l){if(a==null)return[];if(a instanceof EventTarget)return[a];if(typeof a=="string"){const u=document.querySelectorAll(a);return u?Array.from(u):[]}return Array.from(a).filter(o=>o!=null)}const Tb=(a,i)=>i&&typeof a=="number"?i.transform(a):a;function Bs(a){return Dy(a)&&"offsetHeight"in a&&!("ownerSVGElement"in a)}const{schedule:nf}=Py(queueMicrotask,!1),$t={x:!1,y:!1};function Ab(){return $t.x||$t.y}function Vj(a){return a==="x"||a==="y"?$t[a]?null:($t[a]=!0,()=>{$t[a]=!1}):$t.x||$t.y?null:($t.x=$t.y=!0,()=>{$t.x=$t.y=!1})}function Cb(a,i){const l=af(a),o=new AbortController,u={passive:!0,...i,signal:o.signal};return[l,u,()=>o.abort()]}function Bj(a){return!(a.pointerType==="touch"||Ab())}function Lj(a,i,l={}){const[o,u,m]=Cb(a,l);return o.forEach(f=>{let h=!1,g=!1,p;const b=()=>{f.removeEventListener("pointerleave",C)},v=A=>{p&&(p(A),p=void 0),b()},w=A=>{h=!1,window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",w),g&&(g=!1,v(A))},T=()=>{h=!0,window.addEventListener("pointerup",w,u),window.addEventListener("pointercancel",w,u)},C=A=>{if(A.pointerType!=="touch"){if(h){g=!0;return}v(A)}},N=A=>{if(!Bj(A))return;g=!1;const M=i(f,A);typeof M=="function"&&(p=M,f.addEventListener("pointerleave",C,u))};f.addEventListener("pointerenter",N,u),f.addEventListener("pointerdown",T,u)}),m}const Eb=(a,i)=>i?a===i?!0:Eb(a,i.parentElement):!1,sf=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,_j=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Hj(a){return _j.has(a.tagName)||a.isContentEditable===!0}const Uj=new Set(["INPUT","SELECT","TEXTAREA"]);function qj(a){return Uj.has(a.tagName)||a.isContentEditable===!0}const El=new WeakSet;function J0(a){return i=>{i.key==="Enter"&&a(i)}}function Vu(a,i){a.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const Gj=(a,i)=>{const l=a.currentTarget;if(!l)return;const o=J0(()=>{if(El.has(l))return;Vu(l,"down");const u=J0(()=>{Vu(l,"up")}),m=()=>Vu(l,"cancel");l.addEventListener("keyup",u,i),l.addEventListener("blur",m,i)});l.addEventListener("keydown",o,i),l.addEventListener("blur",()=>l.removeEventListener("keydown",o),i)};function I0(a){return sf(a)&&!Ab()}const $0=new WeakSet;function Yj(a,i,l={}){const[o,u,m]=Cb(a,l),f=h=>{const g=h.currentTarget;if(!I0(h)||$0.has(h))return;El.add(g),l.stopPropagation&&$0.add(h);const p=i(g,h),b=(T,C)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",w),El.has(g)&&El.delete(g),I0(T)&&typeof p=="function"&&p(T,{success:C})},v=T=>{b(T,g===window||g===document||l.useGlobalTarget||Eb(g,T.target))},w=T=>{b(T,!1)};window.addEventListener("pointerup",v,u),window.addEventListener("pointercancel",w,u)};return o.forEach(h=>{(l.useGlobalTarget?window:h).addEventListener("pointerdown",f,u),Bs(h)&&(h.addEventListener("focus",p=>Gj(p,u)),!Hj(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),m}function rf(a){return Dy(a)&&"ownerSVGElement"in a}const kl=new WeakMap;let zl;const kb=(a,i,l)=>(o,u)=>u&&u[0]?u[0][a+"Size"]:rf(o)&&"getBBox"in o?o.getBBox()[i]:o[l],Fj=kb("inline","width","offsetWidth"),Pj=kb("block","height","offsetHeight");function Xj({target:a,borderBoxSize:i}){kl.get(a)?.forEach(l=>{l(a,{get width(){return Fj(a,i)},get height(){return Pj(a,i)}})})}function Zj(a){a.forEach(Xj)}function Wj(){typeof ResizeObserver>"u"||(zl=new ResizeObserver(Zj))}function Qj(a,i){zl||Wj();const l=af(a);return l.forEach(o=>{let u=kl.get(o);u||(u=new Set,kl.set(o,u)),u.add(i),zl?.observe(o)}),()=>{l.forEach(o=>{const u=kl.get(o);u?.delete(i),u?.size||zl?.unobserve(o)})}}const Ml=new Set;let Ni;function Kj(){Ni=()=>{const a={get width(){return window.innerWidth},get height(){return window.innerHeight}};Ml.forEach(i=>i(a))},window.addEventListener("resize",Ni)}function Jj(a){return Ml.add(a),Ni||Kj(),()=>{Ml.delete(a),!Ml.size&&typeof Ni=="function"&&(window.removeEventListener("resize",Ni),Ni=void 0)}}function gd(a,i){return typeof a=="function"?Jj(a):Qj(a,i)}function zb(a,i){let l;const o=()=>{const{currentTime:u}=i,f=(u===null?0:u.value)/100;l!==f&&a(f),l=f};return Se.preUpdate(o,!0),()=>Wt(o)}function Ij(a){return rf(a)&&a.tagName==="svg"}function $j(...a){const i=!Array.isArray(a[0]),l=i?0:-1,o=a[0+l],u=a[1+l],m=a[2+l],f=a[3+l],h=Xd(u,m,f);return i?h(o):h}function eS(a,i,l={}){const o=a.get();let u=null,m=o,f;const h=typeof o=="string"?o.replace(/[\d.-]/g,""):void 0,g=()=>{u&&(u.stop(),u=null),a.animation=void 0},p=()=>{const v=eg(a.get()),w=eg(m);if(v===w){g();return}const T=u?u.getGeneratorVelocity():a.getVelocity();g(),u=new Gs({keyframes:[v,w],velocity:T,type:"spring",restDelta:.001,restSpeed:.01,...l,onUpdate:f})},b=()=>{p(),a.animation=u??void 0,a.events.animationStart?.notify(),u?.then(()=>{a.animation=void 0,a.events.animationComplete?.notify()})};if(a.attach((v,w)=>{m=v,f=T=>w(Bu(T,h)),Se.postRender(b)},g),tt(i)){let v=l.skipInitialAnimation===!0;const w=i.on("change",C=>{v?(v=!1,a.jump(Bu(C,h),!1)):a.set(Bu(C,h))}),T=a.on("destroy",w);return()=>{w(),T()}}return g}function Bu(a,i){return i?a+i:a}function eg(a){return typeof a=="number"?a:parseFloat(a)}const tS=[...jb,Je,ta],aS=a=>tS.find(wb(a)),tg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ti=()=>({x:tg(),y:tg()}),ag=()=>({min:0,max:0}),et=()=>({x:ag(),y:ag()}),nS=new WeakMap;function Il(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function Ys(a){return typeof a=="string"||Array.isArray(a)}const lf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],of=["initial",...lf];function $l(a){return Il(a.animate)||of.some(i=>Ys(a[i]))}function Mb(a){return!!($l(a)||a.variants)}function iS(a,i,l){for(const o in i){const u=i[o],m=l[o];if(tt(u))a.addValue(o,u);else if(tt(m))a.addValue(o,ea(u,{owner:a}));else if(m!==u)if(a.hasValue(o)){const f=a.getValue(o);f.liveStyle===!0?f.jump(u):f.hasAnimated||f.set(u)}else{const f=a.getStaticValue(o);a.addValue(o,ea(f!==void 0?f:u,{owner:a}))}}for(const o in l)i[o]===void 0&&a.removeValue(o);return i}const yd={current:null},Db={current:!1},sS=typeof window<"u";function rS(){if(Db.current=!0,!!sS)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),i=()=>yd.current=a.matches;a.addEventListener("change",i),i()}else yd.current=!1}const ng=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ql={};function Rb(a){ql=a}function lS(){return ql}class oS{scrapeMotionValuesFromProps(i,l,o){return{}}constructor({parent:i,props:l,presenceContext:o,reducedMotionConfig:u,skipAnimations:m,blockInitialAnimation:f,visualState:h},g={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Wd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const T=ht.now();this.renderScheduledAt<T&&(this.renderScheduledAt=T,Se.render(this.render,!1,!0))};const{latestValues:p,renderState:b}=h;this.latestValues=p,this.baseTarget={...p},this.initialValues=l.initial?{...p}:{},this.renderState=b,this.parent=i,this.props=l,this.presenceContext=o,this.depth=i?i.depth+1:0,this.reducedMotionConfig=u,this.skipAnimationsConfig=m,this.options=g,this.blockInitialAnimation=!!f,this.isControllingVariants=$l(l),this.isVariantNode=Mb(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:v,...w}=this.scrapeMotionValuesFromProps(l,{},this);for(const T in w){const C=w[T];p[T]!==void 0&&tt(C)&&C.set(p[T])}}mount(i){if(this.hasBeenMounted)for(const l in this.initialValues)this.values.get(l)?.jump(this.initialValues[l]),this.latestValues[l]=this.initialValues[l];this.current=i,nS.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,o)=>this.bindToMotionValue(o,l)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Db.current||rS(),this.shouldReduceMotion=yd.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Wt(this.notifyUpdate),Wt(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const l=this.features[i];l&&(l.unmount(),l.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,l){if(this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)(),l.accelerate&&mb.has(i)&&this.current instanceof HTMLElement){const{factory:f,keyframes:h,times:g,ease:p,duration:b}=l.accelerate,v=new db({element:this.current,name:i,keyframes:h,times:g,ease:p,duration:Vt(b)}),w=f(v);this.valueSubscriptions.set(i,()=>{w(),v.cancel()});return}const o=Ri.has(i);o&&this.onBindTransform&&this.onBindTransform();const u=l.on("change",f=>{this.latestValues[i]=f,this.props.onUpdate&&Se.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let m;typeof window<"u"&&window.MotionCheckAppearSync&&(m=window.MotionCheckAppearSync(this,i,l)),this.valueSubscriptions.set(i,()=>{u(),m&&m(),l.owner&&l.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in ql){const l=ql[i];if(!l)continue;const{isEnabled:o,Feature:u}=l;if(!this.features[i]&&u&&o(this.props)&&(this.features[i]=new u(this)),this.features[i]){const m=this.features[i];m.isMounted?m.update():(m.mount(),m.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):et()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,l){this.latestValues[i]=l}update(i,l){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let o=0;o<ng.length;o++){const u=ng[o];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const m="on"+u,f=i[m];f&&(this.propEventSubscriptions[u]=this.on(u,f))}this.prevMotionValues=iS(this,this.scrapeMotionValuesFromProps(i,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(i),()=>l.variantChildren.delete(i)}addValue(i,l){const o=this.values.get(i);l!==o&&(o&&this.removeValue(i),this.bindToMotionValue(i,l),this.values.set(i,l),this.latestValues[i]=l.get())}removeValue(i){this.values.delete(i);const l=this.valueSubscriptions.get(i);l&&(l(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,l){if(this.props.values&&this.props.values[i])return this.props.values[i];let o=this.values.get(i);return o===void 0&&l!==void 0&&(o=ea(l===null?void 0:l,{owner:this}),this.addValue(i,o)),o}readValue(i,l){let o=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return o!=null&&(typeof o=="string"&&(My(o)||Ry(o))?o=parseFloat(o):!aS(o)&&ta.test(l)&&(o=Nb(i,l)),this.setBaseTarget(i,tt(o)?o.get():o)),tt(o)?o.get():o}setBaseTarget(i,l){this.baseTarget[i]=l}getBaseTarget(i){const{initial:l}=this.props;let o;if(typeof l=="string"||typeof l=="object"){const m=$d(this.props,l,this.presenceContext?.custom);m&&(o=m[i])}if(l&&o!==void 0)return o;const u=this.getBaseTargetFromProps(this.props,i);return u!==void 0&&!tt(u)?u:this.initialValues[i]!==void 0&&o===void 0?void 0:this.baseTarget[i]}on(i,l){return this.events[i]||(this.events[i]=new Ld),this.events[i].add(l)}notify(i,...l){this.events[i]&&this.events[i].notify(...l)}scheduleRenderMicrotask(){nf.render(this.render)}}class Ob extends oS{constructor(){super(...arguments),this.KeyframeResolver=Oj}sortInstanceNodePosition(i,l){return i.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(i,l){const o=i.style;return o?o[l]:void 0}removeValueFromRenderState(i,{vars:l,style:o}){delete l[i],delete o[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;tt(i)&&(this.childSubscription=i.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}class un{constructor(i){this.isMounted=!1,this.node=i}update(){}}function Vb({top:a,left:i,right:l,bottom:o}){return{x:{min:i,max:l},y:{min:a,max:o}}}function cS({x:a,y:i}){return{top:i.min,right:a.max,bottom:i.max,left:a.min}}function uS(a,i){if(!i)return a;const l=i({x:a.left,y:a.top}),o=i({x:a.right,y:a.bottom});return{top:l.y,left:l.x,bottom:o.y,right:o.x}}function Lu(a){return a===void 0||a===1}function bd({scale:a,scaleX:i,scaleY:l}){return!Lu(a)||!Lu(i)||!Lu(l)}function Mn(a){return bd(a)||Bb(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function Bb(a){return ig(a.x)||ig(a.y)}function ig(a){return a&&a!=="0%"}function Gl(a,i,l){const o=a-l,u=i*o;return l+u}function sg(a,i,l,o,u){return u!==void 0&&(a=Gl(a,u,o)),Gl(a,l,o)+i}function vd(a,i=0,l=1,o,u){a.min=sg(a.min,i,l,o,u),a.max=sg(a.max,i,l,o,u)}function Lb(a,{x:i,y:l}){vd(a.x,i.translate,i.scale,i.originPoint),vd(a.y,l.translate,l.scale,l.originPoint)}const rg=.999999999999,lg=1.0000000000001;function dS(a,i,l,o=!1){const u=l.length;if(!u)return;i.x=i.y=1;let m,f;for(let h=0;h<u;h++){m=l[h],f=m.projectionDelta;const{visualElement:g}=m.options;g&&g.props.style&&g.props.style.display==="contents"||(o&&m.options.layoutScroll&&m.scroll&&m!==m.root&&(ua(a.x,-m.scroll.offset.x),ua(a.y,-m.scroll.offset.y)),f&&(i.x*=f.x.scale,i.y*=f.y.scale,Lb(a,f)),o&&Mn(m.latestValues)&&Dl(a,m.latestValues,m.layout?.layoutBox))}i.x<lg&&i.x>rg&&(i.x=1),i.y<lg&&i.y>rg&&(i.y=1)}function ua(a,i){a.min+=i,a.max+=i}function og(a,i,l,o,u=.5){const m=Be(a.min,a.max,u);vd(a,i,l,m,o)}function cg(a,i){return typeof a=="string"?parseFloat(a)/100*(i.max-i.min):a}function Dl(a,i,l){const o=l??a;og(a.x,cg(i.x,o.x),i.scaleX,i.scale,i.originX),og(a.y,cg(i.y,o.y),i.scaleY,i.scale,i.originY)}function _b(a,i){return Vb(uS(a.getBoundingClientRect(),i))}function fS(a,i,l){const o=_b(a,l),{scroll:u}=i;return u&&(ua(o.x,u.offset.x),ua(o.y,u.offset.y)),o}const mS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},hS=Di.length;function pS(a,i,l){let o="",u=!0;for(let m=0;m<hS;m++){const f=Di[m],h=a[f];if(h===void 0)continue;let g=!0;if(typeof h=="number")g=h===(f.startsWith("scale")?1:0);else{const p=parseFloat(h);g=f.startsWith("scale")?p===1:p===0}if(!g||l){const p=Tb(h,tf[f]);if(!g){u=!1;const b=mS[f]||f;o+=`${b}(${p}) `}l&&(i[f]=p)}}return o=o.trim(),l?o=l(i,u?"":o):u&&(o="none"),o}function cf(a,i,l){const{style:o,vars:u,transformOrigin:m}=a;let f=!1,h=!1;for(const g in i){const p=i[g];if(Ri.has(g)){f=!0;continue}else if(Zy(g)){u[g]=p;continue}else{const b=Tb(p,tf[g]);g.startsWith("origin")?(h=!0,m[g]=b):o[g]=b}}if(i.transform||(f||l?o.transform=pS(i,a.transform,l):o.transform&&(o.transform="none")),h){const{originX:g="50%",originY:p="50%",originZ:b=0}=m;o.transformOrigin=`${g} ${p} ${b}`}}function Hb(a,{style:i,vars:l},o,u){const m=a.style;let f;for(f in i)m[f]=i[f];u?.applyProjectionStyles(m,o);for(f in l)m.setProperty(f,l[f])}function ug(a,i){return i.max===i.min?0:a/(i.max-i.min)*100}const zs={correct:(a,i)=>{if(!i.target)return a;if(typeof a=="string")if(te.test(a))a=parseFloat(a);else return a;const l=ug(a,i.target.x),o=ug(a,i.target.y);return`${l}% ${o}%`}},gS={correct:(a,{treeScale:i,projectionDelta:l})=>{const o=a,u=ta.parse(a);if(u.length>5)return o;const m=ta.createTransformer(a),f=typeof u[0]!="number"?1:0,h=l.x.scale*i.x,g=l.y.scale*i.y;u[0+f]/=h,u[1+f]/=g;const p=Be(h,g,.5);return typeof u[2+f]=="number"&&(u[2+f]/=p),typeof u[3+f]=="number"&&(u[3+f]/=p),m(u)}},xd={borderRadius:{...zs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:zs,borderTopRightRadius:zs,borderBottomLeftRadius:zs,borderBottomRightRadius:zs,boxShadow:gS};function Ub(a,{layout:i,layoutId:l}){return Ri.has(a)||a.startsWith("origin")||(i||l!==void 0)&&(!!xd[a]||a==="opacity")}function uf(a,i,l){const o=a.style,u=i?.style,m={};if(!o)return m;for(const f in o)(tt(o[f])||u&&tt(u[f])||Ub(f,a)||l?.getValue(f)?.liveStyle!==void 0)&&(m[f]=o[f]);return m}function yS(a){return window.getComputedStyle(a)}class bS extends Ob{constructor(){super(...arguments),this.type="html",this.renderInstance=Hb}readValueFromInstance(i,l){if(Ri.has(l))return this.projection?.isProjecting?sd(l):Lw(i,l);{const o=yS(i),u=(Zy(l)?o.getPropertyValue(l):o[l])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(i,{transformPagePoint:l}){return _b(i,l)}build(i,l,o){cf(i,l,o.transformTemplate)}scrapeMotionValuesFromProps(i,l,o){return uf(i,l,o)}}const vS={offset:"stroke-dashoffset",array:"stroke-dasharray"},xS={offset:"strokeDashoffset",array:"strokeDasharray"};function wS(a,i,l=1,o=0,u=!0){a.pathLength=1;const m=u?vS:xS;a[m.offset]=`${-o}`,a[m.array]=`${i} ${l}`}const jS=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function qb(a,{attrX:i,attrY:l,attrScale:o,pathLength:u,pathSpacing:m=1,pathOffset:f=0,...h},g,p,b){if(cf(a,h,p),g){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:v,style:w}=a;v.transform&&(w.transform=v.transform,delete v.transform),(w.transform||v.transformOrigin)&&(w.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),w.transform&&(w.transformBox=b?.transformBox??"fill-box",delete v.transformBox);for(const T of jS)v[T]!==void 0&&(w[T]=v[T],delete v[T]);i!==void 0&&(v.x=i),l!==void 0&&(v.y=l),o!==void 0&&(v.scale=o),u!==void 0&&wS(v,u,m,f,!1)}const Gb=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Yb=a=>typeof a=="string"&&a.toLowerCase()==="svg";function SS(a,i,l,o){Hb(a,i,void 0,o);for(const u in i.attrs)a.setAttribute(Gb.has(u)?u:ef(u),i.attrs[u])}function Fb(a,i,l){const o=uf(a,i,l);for(const u in a)if(tt(a[u])||tt(i[u])){const m=Di.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;o[m]=a[u]}return o}class NS extends Ob{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=et}getBaseTargetFromProps(i,l){return i[l]}readValueFromInstance(i,l){if(Ri.has(l)){const o=Sb(l);return o&&o.default||0}return l=Gb.has(l)?l:ef(l),i.getAttribute(l)}scrapeMotionValuesFromProps(i,l,o){return Fb(i,l,o)}build(i,l,o){qb(i,l,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(i,l,o,u){SS(i,l,o,u)}mount(i){this.isSVGTag=Yb(i.tagName),super.mount(i)}}const TS=of.length;function Pb(a){if(!a)return;if(!a.isControllingVariants){const l=a.parent?Pb(a.parent)||{}:{};return a.props.initial!==void 0&&(l.initial=a.props.initial),l}const i={};for(let l=0;l<TS;l++){const o=of[l],u=a.props[o];(Ys(u)||u===!1)&&(i[o]=u)}return i}function Xb(a,i){if(!Array.isArray(i))return!1;const l=i.length;if(l!==a.length)return!1;for(let o=0;o<l;o++)if(i[o]!==a[o])return!1;return!0}const AS=[...lf].reverse(),CS=lf.length;function ES(a){return i=>Promise.all(i.map(({animation:l,options:o})=>Sj(a,l,o)))}function kS(a){let i=ES(a),l=dg(),o=!0,u=!1;const m=p=>(b,v)=>{const w=Bn(a,v,p==="exit"?a.presenceContext?.custom:void 0);if(w){const{transition:T,transitionEnd:C,...N}=w;b={...b,...N,...C}}return b};function f(p){i=p(a)}function h(p){const{props:b}=a,v=Pb(a.parent)||{},w=[],T=new Set;let C={},N=1/0;for(let M=0;M<CS;M++){const R=AS[M],L=l[R],q=b[R]!==void 0?b[R]:v[R],P=Ys(q),ie=R===p?L.isActive:null;ie===!1&&(N=M);let Q=q===v[R]&&q!==b[R]&&P;if(Q&&(o||u)&&a.manuallyAnimateOnMount&&(Q=!1),L.protectedKeys={...C},!L.isActive&&ie===null||!q&&!L.prevProp||Il(q)||typeof q=="boolean")continue;if(R==="exit"&&L.isActive&&ie!==!0){L.prevResolvedValues&&(C={...C,...L.prevResolvedValues});continue}const W=zS(L.prevProp,q);let $=W||R===p&&L.isActive&&!Q&&P||M>N&&P,I=!1;const fe=Array.isArray(q)?q:[q];let me=fe.reduce(m(R),{});ie===!1&&(me={});const{prevResolvedValues:X={}}=L,le={...X,...me},he=K=>{$=!0,T.has(K)&&(I=!0,T.delete(K)),L.needsAnimating[K]=!0;const ce=a.getValue(K);ce&&(ce.liveStyle=!1)};for(const K in le){const ce=me[K],ge=X[K];if(C.hasOwnProperty(K))continue;let k=!1;dd(ce)&&dd(ge)?k=!Xb(ce,ge):k=ce!==ge,k?ce!=null?he(K):T.add(K):ce!==void 0&&T.has(K)?he(K):L.protectedKeys[K]=!0}L.prevProp=q,L.prevResolvedValues=me,L.isActive&&(C={...C,...me}),(o||u)&&a.blockInitialAnimation&&($=!1);const _=Q&&W;$&&(!_||I)&&w.push(...fe.map(K=>{const ce={type:R};if(typeof K=="string"&&(o||u)&&!_&&a.manuallyAnimateOnMount&&a.parent){const{parent:ge}=a,k=Bn(ge,K);if(ge.enteringChildren&&k){const{delayChildren:F}=k.transition||{};ce.delay=hb(ge.enteringChildren,a,F)}}return{animation:K,options:ce}}))}if(T.size){const M={};if(typeof b.initial!="boolean"){const R=Bn(a,Array.isArray(b.initial)?b.initial[0]:b.initial);R&&R.transition&&(M.transition=R.transition)}T.forEach(R=>{const L=a.getBaseTarget(R),q=a.getValue(R);q&&(q.liveStyle=!0),M[R]=L??null}),w.push({animation:M})}let A=!!w.length;return o&&(b.initial===!1||b.initial===b.animate)&&!a.manuallyAnimateOnMount&&(A=!1),o=!1,u=!1,A?i(w):Promise.resolve()}function g(p,b){if(l[p].isActive===b)return Promise.resolve();a.variantChildren?.forEach(w=>w.animationState?.setActive(p,b)),l[p].isActive=b;const v=h(p);for(const w in l)l[w].protectedKeys={};return v}return{animateChanges:h,setActive:g,setAnimateFunction:f,getState:()=>l,reset:()=>{l=dg(),u=!0}}}function zS(a,i){return typeof i=="string"?i!==a:Array.isArray(i)?!Xb(i,a):!1}function zn(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function dg(){return{animate:zn(!0),whileInView:zn(),whileHover:zn(),whileTap:zn(),whileDrag:zn(),whileFocus:zn(),exit:zn()}}function wd(a,i){a.min=i.min,a.max=i.max}function It(a,i){wd(a.x,i.x),wd(a.y,i.y)}function fg(a,i){a.translate=i.translate,a.scale=i.scale,a.originPoint=i.originPoint,a.origin=i.origin}const Zb=1e-4,MS=1-Zb,DS=1+Zb,Wb=.01,RS=0-Wb,OS=0+Wb;function pt(a){return a.max-a.min}function VS(a,i,l){return Math.abs(a-i)<=l}function mg(a,i,l,o=.5){a.origin=o,a.originPoint=Be(i.min,i.max,a.origin),a.scale=pt(l)/pt(i),a.translate=Be(l.min,l.max,a.origin)-a.originPoint,(a.scale>=MS&&a.scale<=DS||isNaN(a.scale))&&(a.scale=1),(a.translate>=RS&&a.translate<=OS||isNaN(a.translate))&&(a.translate=0)}function Ls(a,i,l,o){mg(a.x,i.x,l.x,o?o.originX:void 0),mg(a.y,i.y,l.y,o?o.originY:void 0)}function hg(a,i,l,o=0){const u=o?Be(l.min,l.max,o):l.min;a.min=u+i.min,a.max=a.min+pt(i)}function BS(a,i,l,o){hg(a.x,i.x,l.x,o?.x),hg(a.y,i.y,l.y,o?.y)}function pg(a,i,l,o=0){const u=o?Be(l.min,l.max,o):l.min;a.min=i.min-u,a.max=a.min+pt(i)}function Yl(a,i,l,o){pg(a.x,i.x,l.x,o?.x),pg(a.y,i.y,l.y,o?.y)}function gg(a,i,l,o,u){return a-=i,a=Gl(a,1/l,o),u!==void 0&&(a=Gl(a,1/u,o)),a}function LS(a,i=0,l=1,o=.5,u,m=a,f=a){if(fa.test(i)&&(i=parseFloat(i),i=Be(f.min,f.max,i/100)-f.min),typeof i!="number")return;let h=Be(m.min,m.max,o);a===m&&(h-=i),a.min=gg(a.min,i,l,h,u),a.max=gg(a.max,i,l,h,u)}function yg(a,i,[l,o,u],m,f){LS(a,i[l],i[o],i[u],i.scale,m,f)}const _S=["x","scaleX","originX"],HS=["y","scaleY","originY"];function bg(a,i,l,o){yg(a.x,i,_S,l?l.x:void 0,o?o.x:void 0),yg(a.y,i,HS,l?l.y:void 0,o?o.y:void 0)}function vg(a){return a.translate===0&&a.scale===1}function Qb(a){return vg(a.x)&&vg(a.y)}function xg(a,i){return a.min===i.min&&a.max===i.max}function US(a,i){return xg(a.x,i.x)&&xg(a.y,i.y)}function wg(a,i){return Math.round(a.min)===Math.round(i.min)&&Math.round(a.max)===Math.round(i.max)}function Kb(a,i){return wg(a.x,i.x)&&wg(a.y,i.y)}function jg(a){return pt(a.x)/pt(a.y)}function Sg(a,i){return a.translate===i.translate&&a.scale===i.scale&&a.originPoint===i.originPoint}function ca(a){return[a("x"),a("y")]}function qS(a,i,l){let o="";const u=a.x.translate/i.x,m=a.y.translate/i.y,f=l?.z||0;if((u||m||f)&&(o=`translate3d(${u}px, ${m}px, ${f}px) `),(i.x!==1||i.y!==1)&&(o+=`scale(${1/i.x}, ${1/i.y}) `),l){const{transformPerspective:p,rotate:b,rotateX:v,rotateY:w,skewX:T,skewY:C}=l;p&&(o=`perspective(${p}px) ${o}`),b&&(o+=`rotate(${b}deg) `),v&&(o+=`rotateX(${v}deg) `),w&&(o+=`rotateY(${w}deg) `),T&&(o+=`skewX(${T}deg) `),C&&(o+=`skewY(${C}deg) `)}const h=a.x.scale*i.x,g=a.y.scale*i.y;return(h!==1||g!==1)&&(o+=`scale(${h}, ${g})`),o||"none"}const Jb=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],GS=Jb.length,Ng=a=>typeof a=="string"?parseFloat(a):a,Tg=a=>typeof a=="number"||te.test(a);function YS(a,i,l,o,u,m){u?(a.opacity=Be(0,l.opacity??1,FS(o)),a.opacityExit=Be(i.opacity??1,0,PS(o))):m&&(a.opacity=Be(i.opacity??1,l.opacity??1,o));for(let f=0;f<GS;f++){const h=Jb[f];let g=Ag(i,h),p=Ag(l,h);if(g===void 0&&p===void 0)continue;g||(g=0),p||(p=0),g===0||p===0||Tg(g)===Tg(p)?(a[h]=Math.max(Be(Ng(g),Ng(p),o),0),(fa.test(p)||fa.test(g))&&(a[h]+="%")):a[h]=p}(i.rotate||l.rotate)&&(a.rotate=Be(i.rotate||0,l.rotate||0,o))}function Ag(a,i){return a[i]!==void 0?a[i]:a.borderRadius}const FS=Ib(0,.5,qy),PS=Ib(.5,.95,St);function Ib(a,i,l){return o=>o<a?0:o>i?1:l(Ai(a,i,o))}function XS(a,i,l){const o=tt(a)?a:ea(a);return o.start(Id("",o,i,l)),o.animation}function Fs(a,i,l,o={passive:!0}){return a.addEventListener(i,l,o),()=>a.removeEventListener(i,l)}const ZS=(a,i)=>a.depth-i.depth;class WS{constructor(){this.children=[],this.isDirty=!1}add(i){Bd(this.children,i),this.isDirty=!0}remove(i){Ll(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(ZS),this.isDirty=!1,this.children.forEach(i)}}function QS(a,i){const l=ht.now(),o=({timestamp:u})=>{const m=u-l;m>=i&&(Wt(o),a(m-i))};return Se.setup(o,!0),()=>Wt(o)}function Rl(a){return tt(a)?a.get():a}class KS{constructor(){this.members=[]}add(i){Bd(this.members,i);for(let l=this.members.length-1;l>=0;l--){const o=this.members[l];if(o===i||o===this.lead||o===this.prevLead)continue;const u=o.instance;(!u||u.isConnected===!1)&&!o.snapshot&&(Ll(this.members,o),o.unmount())}i.scheduleRender()}remove(i){if(Ll(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(i){for(let l=this.members.indexOf(i)-1;l>=0;l--){const o=this.members[l];if(o.isPresent!==!1&&o.instance?.isConnected!==!1)return this.promote(o),!0}return!1}promote(i,l){const o=this.lead;if(i!==o&&(this.prevLead=o,this.lead=i,i.show(),o)){o.updateSnapshot(),i.scheduleRender();const{layoutDependency:u}=o.options,{layoutDependency:m}=i.options;(u===void 0||u!==m)&&(i.resumeFrom=o,l&&(o.preserveOpacity=!0),o.snapshot&&(i.snapshot=o.snapshot,i.snapshot.latestValues=o.animationValues||o.latestValues),i.root?.isUpdating&&(i.isLayoutDirty=!0)),i.options.crossfade===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(i=>{i.options.onExitComplete?.(),i.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(i=>i.instance&&i.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const Ol={hasAnimatedSinceResize:!0,hasEverUpdated:!1},_u=["","X","Y","Z"],JS=1e3;let IS=0;function Hu(a,i,l,o){const{latestValues:u}=i;u[a]&&(l[a]=u[a],i.setStaticValue(a,0),o&&(o[a]=0))}function $b(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:i}=a.options;if(!i)return;const l=vb(i);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:u,layoutId:m}=a.options;window.MotionCancelOptimisedAnimation(l,"transform",Se,!(u||m))}const{parent:o}=a;o&&!o.hasCheckedOptimisedAppear&&$b(o)}function ev({attachResizeListener:a,defaultParent:i,measureScroll:l,checkIsScrollRoot:o,resetTransform:u}){return class{constructor(f={},h=i?.()){this.id=IS++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(tN),this.nodes.forEach(lN),this.nodes.forEach(oN),this.nodes.forEach(aN)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let g=0;g<this.path.length;g++)this.path[g].shouldResetTransform=!0;this.root===this&&(this.nodes=new WS)}addEventListener(f,h){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new Ld),this.eventHandlers.get(f).add(h)}notifyListeners(f,...h){const g=this.eventHandlers.get(f);g&&g.notify(...h)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=rf(f)&&!Ij(f),this.instance=f;const{layoutId:h,layout:g,visualElement:p}=this.options;if(p&&!p.current&&p.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(g||h)&&(this.isLayoutDirty=!0),a){let b,v=0;const w=()=>this.root.updateBlockedByResize=!1;Se.read(()=>{v=window.innerWidth}),a(f,()=>{const T=window.innerWidth;T!==v&&(v=T,this.root.updateBlockedByResize=!0,b&&b(),b=QS(w,250),Ol.hasAnimatedSinceResize&&(Ol.hasAnimatedSinceResize=!1,this.nodes.forEach(kg)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&p&&(h||g)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:v,hasRelativeLayoutChanged:w,layout:T})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||p.getDefaultTransition()||mN,{onLayoutAnimationStart:N,onLayoutAnimationComplete:A}=p.getProps(),M=!this.targetLayout||!Kb(this.targetLayout,T),R=!v&&w;if(this.options.layoutRoot||this.resumeFrom||R||v&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...Jd(C,"layout"),onPlay:N,onComplete:A};(p.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(b,R)}else v||kg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=T})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Wt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(cN),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&$b(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let b=0;b<this.path.length;b++){const v=this.path[b];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:h,layout:g}=this.options;if(h===void 0&&!g)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const g=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),g&&this.nodes.forEach(iN),this.nodes.forEach(Cg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Eg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(sN),this.nodes.forEach(rN),this.nodes.forEach($S),this.nodes.forEach(eN)):this.nodes.forEach(Eg),this.clearAllSnapshots();const h=ht.now();it.delta=na(0,1e3/60,h-it.timestamp),it.timestamp=h,it.isProcessing=!0,ku.update.process(it),ku.preRender.process(it),ku.render.process(it),it.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,nf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(nN),this.sharedNodes.forEach(uN)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!pt(this.snapshot.measuredBox.x)&&!pt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let g=0;g<this.path.length;g++)this.path[g].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=et()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(h=!1),h&&this.instance){const g=o(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:g,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:g}}}resetTransform(){if(!u)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!Qb(this.projectionDelta),g=this.getTransformTemplate(),p=g?g(this.latestValues,""):void 0,b=p!==this.prevTransformTemplateValue;f&&this.instance&&(h||Mn(this.latestValues)||b)&&(u(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const h=this.measurePageBox();let g=this.removeElementScroll(h);return f&&(g=this.removeTransform(g)),hN(g),{animationId:this.root.animationId,measuredBox:h,layoutBox:g,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return et();const h=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(pN))){const{scroll:p}=this.root;p&&(ua(h.x,p.offset.x),ua(h.y,p.offset.y))}return h}removeElementScroll(f){const h=et();if(It(h,f),this.scroll?.wasRoot)return h;for(let g=0;g<this.path.length;g++){const p=this.path[g],{scroll:b,options:v}=p;p!==this.root&&b&&v.layoutScroll&&(b.wasRoot&&It(h,f),ua(h.x,b.offset.x),ua(h.y,b.offset.y))}return h}applyTransform(f,h=!1,g){const p=g||et();It(p,f);for(let b=0;b<this.path.length;b++){const v=this.path[b];!h&&v.options.layoutScroll&&v.scroll&&v!==v.root&&(ua(p.x,-v.scroll.offset.x),ua(p.y,-v.scroll.offset.y)),Mn(v.latestValues)&&Dl(p,v.latestValues,v.layout?.layoutBox)}return Mn(this.latestValues)&&Dl(p,this.latestValues,this.layout?.layoutBox),p}removeTransform(f){const h=et();It(h,f);for(let g=0;g<this.path.length;g++){const p=this.path[g];if(!Mn(p.latestValues))continue;let b;p.instance&&(bd(p.latestValues)&&p.updateSnapshot(),b=et(),It(b,p.measurePageBox())),bg(h,p.latestValues,p.snapshot?.layoutBox,b)}return Mn(this.latestValues)&&bg(h,this.latestValues),h}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==it.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const g=!!this.resumingFrom||this!==h;if(!(f||g&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:v}=this.options;if(!this.layout||!(b||v))return;this.resolvedRelativeTargetAt=it.timestamp;const w=this.getClosestProjectingParent();w&&this.linkedParentVersion!==w.layoutVersion&&!w.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&w&&w.layout?this.createRelativeTarget(w,this.layout.layoutBox,w.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=et(),this.targetWithTransforms=et()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),BS(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):It(this.target,this.layout.layoutBox),Lb(this.target,this.targetDelta)):It(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?this.createRelativeTarget(w,this.target,w.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||bd(this.parent.latestValues)||Bb(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(f,h,g){this.relativeParent=f,this.linkedParentVersion=f.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=et(),this.relativeTargetOrigin=et(),Yl(this.relativeTargetOrigin,h,g,this.options.layoutAnchor||void 0),It(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const f=this.getLead(),h=!!this.resumingFrom||this!==f;let g=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(g=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(g=!1),this.resolvedRelativeTargetAt===it.timestamp&&(g=!1),g)return;const{layout:p,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||b))return;It(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,w=this.treeScale.y;dS(this.layoutCorrected,this.treeScale,this.path,h),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=et());const{target:T}=f;if(!T){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(fg(this.prevProjectionDelta.x,this.projectionDelta.x),fg(this.prevProjectionDelta.y,this.projectionDelta.y)),Ls(this.projectionDelta,this.layoutCorrected,T,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==w||!Sg(this.projectionDelta.x,this.prevProjectionDelta.x)||!Sg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",T))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ti(),this.projectionDelta=Ti(),this.projectionDeltaWithTransform=Ti()}setAnimationOrigin(f,h=!1){const g=this.snapshot,p=g?g.latestValues:{},b={...this.latestValues},v=Ti();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const w=et(),T=g?g.source:void 0,C=this.layout?this.layout.source:void 0,N=T!==C,A=this.getStack(),M=!A||A.members.length<=1,R=!!(N&&!M&&this.options.crossfade===!0&&!this.path.some(fN));this.animationProgress=0;let L;this.mixTargetDelta=q=>{const P=q/1e3;zg(v.x,f.x,P),zg(v.y,f.y,P),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Yl(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),dN(this.relativeTarget,this.relativeTargetOrigin,w,P),L&&US(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=et()),It(L,this.relativeTarget)),N&&(this.animationValues=b,YS(b,p,this.latestValues,P,R,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Wt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Se.update(()=>{Ol.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ea(0)),this.motionValue.jump(0,!1),this.currentAnimation=XS(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:h=>{this.mixTargetDelta(h),f.onUpdate&&f.onUpdate(h)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(JS),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:h,target:g,layout:p,latestValues:b}=f;if(!(!h||!g||!p)){if(this!==f&&this.layout&&p&&tv(this.options.animationType,this.layout.layoutBox,p.layoutBox)){g=this.target||et();const v=pt(this.layout.layoutBox.x);g.x.min=f.target.x.min,g.x.max=g.x.min+v;const w=pt(this.layout.layoutBox.y);g.y.min=f.target.y.min,g.y.max=g.y.min+w}It(h,g),Dl(h,b),Ls(this.projectionDeltaWithTransform,this.layoutCorrected,h,b)}}registerSharedNode(f,h){this.sharedNodes.has(f)||this.sharedNodes.set(f,new KS),this.sharedNodes.get(f).add(h);const p=h.options.initialPromotionConfig;h.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(h):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:h,preserveFollowOpacity:g}={}){const p=this.getStack();p&&p.promote(this,g),f&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let h=!1;const{latestValues:g}=f;if((g.z||g.rotate||g.rotateX||g.rotateY||g.rotateZ||g.skewX||g.skewY)&&(h=!0),!h)return;const p={};g.z&&Hu("z",f,p,this.animationValues);for(let b=0;b<_u.length;b++)Hu(`rotate${_u[b]}`,f,p,this.animationValues),Hu(`skew${_u[b]}`,f,p,this.animationValues);f.render();for(const b in p)f.setStaticValue(b,p[b]),this.animationValues&&(this.animationValues[b]=p[b]);f.scheduleRender()}applyProjectionStyles(f,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const g=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=Rl(h?.pointerEvents)||"",f.transform=g?g(this.latestValues,""):"none";return}const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=Rl(h?.pointerEvents)||""),this.hasProjected&&!Mn(this.latestValues)&&(f.transform=g?g({},""):"none",this.hasProjected=!1);return}f.visibility="";const b=p.animationValues||p.latestValues;this.applyTransformsToTarget();let v=qS(this.projectionDeltaWithTransform,this.treeScale,b);g&&(v=g(b,v)),f.transform=v;const{x:w,y:T}=this.projectionDelta;f.transformOrigin=`${w.origin*100}% ${T.origin*100}% 0`,p.animationValues?f.opacity=p===this?b.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:b.opacityExit:f.opacity=p===this?b.opacity!==void 0?b.opacity:"":b.opacityExit!==void 0?b.opacityExit:0;for(const C in xd){if(b[C]===void 0)continue;const{correct:N,applyTo:A,isCSSVariable:M}=xd[C],R=v==="none"?b[C]:N(b[C],p);if(A){const L=A.length;for(let q=0;q<L;q++)f[A[q]]=R}else M?this.options.visualElement.renderState.vars[C]=R:f[C]=R}this.options.layoutId&&(f.pointerEvents=p===this?Rl(h?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(Cg),this.root.sharedNodes.clear()}}}function $S(a){a.updateLayout()}function eN(a){const i=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&i&&a.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:o}=a.layout,{animationType:u}=a.options,m=i.source!==a.layout.source;if(u==="size")ca(b=>{const v=m?i.measuredBox[b]:i.layoutBox[b],w=pt(v);v.min=l[b].min,v.max=v.min+w});else if(u==="x"||u==="y"){const b=u==="x"?"y":"x";wd(m?i.measuredBox[b]:i.layoutBox[b],l[b])}else tv(u,i.layoutBox,l)&&ca(b=>{const v=m?i.measuredBox[b]:i.layoutBox[b],w=pt(l[b]);v.max=v.min+w,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[b].max=a.relativeTarget[b].min+w)});const f=Ti();Ls(f,l,i.layoutBox);const h=Ti();m?Ls(h,a.applyTransform(o,!0),i.measuredBox):Ls(h,l,i.layoutBox);const g=!Qb(f);let p=!1;if(!a.resumeFrom){const b=a.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:v,layout:w}=b;if(v&&w){const T=a.options.layoutAnchor||void 0,C=et();Yl(C,i.layoutBox,v.layoutBox,T);const N=et();Yl(N,l,w.layoutBox,T),Kb(C,N)||(p=!0),b.options.layoutRoot&&(a.relativeTarget=N,a.relativeTargetOrigin=C,a.relativeParent=b)}}}a.notifyListeners("didUpdate",{layout:l,snapshot:i,delta:h,layoutDelta:f,hasLayoutChanged:g,hasRelativeLayoutChanged:p})}else if(a.isLead()){const{onExitComplete:l}=a.options;l&&l()}a.options.transition=void 0}function tN(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function aN(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function nN(a){a.clearSnapshot()}function Cg(a){a.clearMeasurements()}function iN(a){a.isLayoutDirty=!0,a.updateLayout()}function Eg(a){a.isLayoutDirty=!1}function sN(a){a.isAnimationBlocked&&a.layout&&!a.isLayoutDirty&&(a.snapshot=a.layout,a.isLayoutDirty=!0)}function rN(a){const{visualElement:i}=a.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),a.resetTransform()}function kg(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function lN(a){a.resolveTargetDelta()}function oN(a){a.calcProjection()}function cN(a){a.resetSkewAndRotation()}function uN(a){a.removeLeadSnapshot()}function zg(a,i,l){a.translate=Be(i.translate,0,l),a.scale=Be(i.scale,1,l),a.origin=i.origin,a.originPoint=i.originPoint}function Mg(a,i,l,o){a.min=Be(i.min,l.min,o),a.max=Be(i.max,l.max,o)}function dN(a,i,l,o){Mg(a.x,i.x,l.x,o),Mg(a.y,i.y,l.y,o)}function fN(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const mN={duration:.45,ease:[.4,0,.1,1]},Dg=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),Rg=Dg("applewebkit/")&&!Dg("chrome/")?Math.round:St;function Og(a){a.min=Rg(a.min),a.max=Rg(a.max)}function hN(a){Og(a.x),Og(a.y)}function tv(a,i,l){return a==="position"||a==="preserve-aspect"&&!VS(jg(i),jg(l),.2)}function pN(a){return a!==a.root&&a.scroll?.wasRoot}const gN=ev({attachResizeListener:(a,i)=>Fs(a,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Uu={current:void 0},av=ev({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!Uu.current){const a=new gN({});a.mount(window),a.setOptions({layoutScroll:!0}),Uu.current=a}return Uu.current},resetTransform:(a,i)=>{a.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),Js=S.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function Vg(a,i){if(typeof a=="function")return a(i);a!=null&&(a.current=i)}function yN(...a){return i=>{let l=!1;const o=a.map(u=>{const m=Vg(u,i);return!l&&typeof m=="function"&&(l=!0),m});if(l)return()=>{for(let u=0;u<o.length;u++){const m=o[u];typeof m=="function"?m():Vg(a[u],null)}}}}function bN(...a){return S.useCallback(yN(...a),a)}class vN extends S.Component{getSnapshotBeforeUpdate(i){const l=this.props.childRef.current;if(Bs(l)&&i.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const o=l.offsetParent,u=Bs(o)&&o.offsetWidth||0,m=Bs(o)&&o.offsetHeight||0,f=getComputedStyle(l),h=this.props.sizeRef.current;h.height=parseFloat(f.height),h.width=parseFloat(f.width),h.top=l.offsetTop,h.left=l.offsetLeft,h.right=u-h.width-h.left,h.bottom=m-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function xN({children:a,isPresent:i,anchorX:l,anchorY:o,root:u,pop:m}){const f=S.useId(),h=S.useRef(null),g=S.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:p}=S.useContext(Js),b=a.props?.ref??a?.ref,v=bN(h,b);return S.useInsertionEffect(()=>{const{width:w,height:T,top:C,left:N,right:A,bottom:M}=g.current;if(i||m===!1||!h.current||!w||!T)return;const R=l==="left"?`left: ${N}`:`right: ${A}`,L=o==="bottom"?`bottom: ${M}`:`top: ${C}`;h.current.dataset.motionPopId=f;const q=document.createElement("style");p&&(q.nonce=p);const P=u??document.head;return P.appendChild(q),q.sheet&&q.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${w}px !important;
            height: ${T}px !important;
            ${R}px !important;
            ${L}px !important;
          }
        `),()=>{h.current?.removeAttribute("data-motion-pop-id"),P.contains(q)&&P.removeChild(q)}},[i]),r.jsx(vN,{isPresent:i,childRef:h,sizeRef:g,pop:m,children:m===!1?a:S.cloneElement(a,{ref:v})})}const wN=({children:a,initial:i,isPresent:l,onExitComplete:o,custom:u,presenceAffectsLayout:m,mode:f,anchorX:h,anchorY:g,root:p})=>{const b=on(jN),v=S.useId();let w=!0,T=S.useMemo(()=>(w=!1,{id:v,initial:i,isPresent:l,custom:u,onExitComplete:C=>{b.set(C,!0);for(const N of b.values())if(!N)return;o&&o()},register:C=>(b.set(C,!1),()=>b.delete(C))}),[l,b,o]);return m&&w&&(T={...T}),S.useMemo(()=>{b.forEach((C,N)=>b.set(N,!1))},[l]),S.useEffect(()=>{!l&&!b.size&&o&&o()},[l]),a=r.jsx(xN,{pop:f==="popLayout",isPresent:l,anchorX:h,anchorY:g,root:p,children:a}),r.jsx(Kl.Provider,{value:T,children:a})};function jN(){return new Map}function nv(a=!0){const i=S.useContext(Kl);if(i===null)return[!0,null];const{isPresent:l,onExitComplete:o,register:u}=i,m=S.useId();S.useEffect(()=>{if(a)return u(m)},[a]);const f=S.useCallback(()=>a&&o&&o(m),[m,o,a]);return!l&&o?[!1,f]:[!0]}const xl=a=>a.key||"";function Bg(a){const i=[];return S.Children.forEach(a,l=>{S.isValidElement(l)&&i.push(l)}),i}const dt=({children:a,custom:i,initial:l=!0,onExitComplete:o,presenceAffectsLayout:u=!0,mode:m="sync",propagate:f=!1,anchorX:h="left",anchorY:g="top",root:p})=>{const[b,v]=nv(f),w=S.useMemo(()=>Bg(a),[a]),T=f&&!b?[]:w.map(xl),C=S.useRef(!0),N=S.useRef(w),A=on(()=>new Map),M=S.useRef(new Set),[R,L]=S.useState(w),[q,P]=S.useState(w);Ql(()=>{C.current=!1,N.current=w;for(let W=0;W<q.length;W++){const $=xl(q[W]);T.includes($)?(A.delete($),M.current.delete($)):A.get($)!==!0&&A.set($,!1)}},[q,T.length,T.join("-")]);const ie=[];if(w!==R){let W=[...w];for(let $=0;$<q.length;$++){const I=q[$],fe=xl(I);T.includes(fe)||(W.splice($,0,I),ie.push(I))}return m==="wait"&&ie.length&&(W=ie),P(Bg(W)),L(w),null}const{forceRender:Q}=S.useContext(Vd);return r.jsx(r.Fragment,{children:q.map(W=>{const $=xl(W),I=f&&!b?!1:w===q||T.includes($),fe=()=>{if(M.current.has($))return;if(A.has($))M.current.add($),A.set($,!0);else return;let me=!0;A.forEach(X=>{X||(me=!1)}),me&&(Q?.(),P(N.current),f&&v?.(),o&&o())};return r.jsx(wN,{isPresent:I,initial:!C.current||l?void 0:!1,custom:i,presenceAffectsLayout:u,mode:m,root:p,onExitComplete:I?void 0:fe,anchorX:h,anchorY:g,children:W},$)})})},iv=S.createContext({strict:!1}),Lg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let _g=!1;function SN(){if(_g)return;const a={};for(const i in Lg)a[i]={isEnabled:l=>Lg[i].some(o=>!!l[o])};Rb(a),_g=!0}function sv(){return SN(),lS()}function NN(a){const i=sv();for(const l in a)i[l]={...i[l],...a[l]};Rb(i)}const TN=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Fl(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||TN.has(a)}let rv=a=>!Fl(a);function AN(a){typeof a=="function"&&(rv=i=>i.startsWith("on")?!Fl(i):a(i))}try{AN(require("@emotion/is-prop-valid").default)}catch{}function CN(a,i,l){const o={};for(const u in a)u==="values"&&typeof a.values=="object"||tt(a[u])||(rv(u)||l===!0&&Fl(u)||!i&&!Fl(u)||a.draggable&&u.startsWith("onDrag"))&&(o[u]=a[u]);return o}const eo=S.createContext({});function EN(a,i){if($l(a)){const{initial:l,animate:o}=a;return{initial:l===!1||Ys(l)?l:void 0,animate:Ys(o)?o:void 0}}return a.inherit!==!1?i:{}}function kN(a){const{initial:i,animate:l}=EN(a,S.useContext(eo));return S.useMemo(()=>({initial:i,animate:l}),[Hg(i),Hg(l)])}function Hg(a){return Array.isArray(a)?a.join(" "):a}const df=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function lv(a,i,l){for(const o in i)!tt(i[o])&&!Ub(o,l)&&(a[o]=i[o])}function zN({transformTemplate:a},i){return S.useMemo(()=>{const l=df();return cf(l,i,a),Object.assign({},l.vars,l.style)},[i])}function MN(a,i){const l=a.style||{},o={};return lv(o,l,a),Object.assign(o,zN(a,i)),o}function DN(a,i){const l={},o=MN(a,i);return a.drag&&a.dragListener!==!1&&(l.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(l.tabIndex=0),l.style=o,l}const ov=()=>({...df(),attrs:{}});function RN(a,i,l,o){const u=S.useMemo(()=>{const m=ov();return qb(m,i,Yb(o),a.transformTemplate,a.style),{...m.attrs,style:{...m.style}}},[i]);if(a.style){const m={};lv(m,a.style,a),u.style={...m,...u.style}}return u}const ON=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ff(a){return typeof a!="string"||a.includes("-")?!1:!!(ON.indexOf(a)>-1||/[A-Z]/u.test(a))}function VN(a,i,l,{latestValues:o},u,m=!1,f){const g=(f??ff(a)?RN:DN)(i,o,u,a),p=CN(i,typeof a=="string",m),b=a!==S.Fragment?{...p,...g,ref:l}:{},{children:v}=i,w=S.useMemo(()=>tt(v)?v.get():v,[v]);return S.createElement(a,{...b,children:w})}function BN({scrapeMotionValuesFromProps:a,createRenderState:i},l,o,u){return{latestValues:LN(l,o,u,a),renderState:i()}}function LN(a,i,l,o){const u={},m=o(a,{});for(const w in m)u[w]=Rl(m[w]);let{initial:f,animate:h}=a;const g=$l(a),p=Mb(a);i&&p&&!g&&a.inherit!==!1&&(f===void 0&&(f=i.initial),h===void 0&&(h=i.animate));let b=l?l.initial===!1:!1;b=b||f===!1;const v=b?h:f;if(v&&typeof v!="boolean"&&!Il(v)){const w=Array.isArray(v)?v:[v];for(let T=0;T<w.length;T++){const C=$d(a,w[T]);if(C){const{transitionEnd:N,transition:A,...M}=C;for(const R in M){let L=M[R];if(Array.isArray(L)){const q=b?L.length-1:0;L=L[q]}L!==null&&(u[R]=L)}for(const R in N)u[R]=N[R]}}}return u}const cv=a=>(i,l)=>{const o=S.useContext(eo),u=S.useContext(Kl),m=()=>BN(a,i,o,u);return l?m():on(m)},_N=cv({scrapeMotionValuesFromProps:uf,createRenderState:df}),HN=cv({scrapeMotionValuesFromProps:Fb,createRenderState:ov}),UN=Symbol.for("motionComponentSymbol");function qN(a,i,l){const o=S.useRef(l);S.useInsertionEffect(()=>{o.current=l});const u=S.useRef(null);return S.useCallback(m=>{m&&a.onMount?.(m);const f=o.current;if(typeof f=="function")if(m){const h=f(m);typeof h=="function"&&(u.current=h)}else u.current?(u.current(),u.current=null):f(m);else f&&(f.current=m);i&&(m?i.mount(m):i.unmount())},[i])}const uv=S.createContext({});function ji(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function GN(a,i,l,o,u,m){const{visualElement:f}=S.useContext(eo),h=S.useContext(iv),g=S.useContext(Kl),p=S.useContext(Js),b=p.reducedMotion,v=p.skipAnimations,w=S.useRef(null),T=S.useRef(!1);o=o||h.renderer,!w.current&&o&&(w.current=o(a,{visualState:i,parent:f,props:l,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:b,skipAnimations:v,isSVG:m}),T.current&&w.current&&(w.current.manuallyAnimateOnMount=!0));const C=w.current,N=S.useContext(uv);C&&!C.projection&&u&&(C.type==="html"||C.type==="svg")&&YN(w.current,l,u,N);const A=S.useRef(!1);S.useInsertionEffect(()=>{C&&A.current&&C.update(l,g)});const M=l[bb],R=S.useRef(!!M&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(M)&&window.MotionHasOptimisedAnimation?.(M));return Ql(()=>{T.current=!0,C&&(A.current=!0,window.MotionIsMounted=!0,C.updateFeatures(),C.scheduleRenderMicrotask(),R.current&&C.animationState&&C.animationState.animateChanges())}),S.useEffect(()=>{C&&(!R.current&&C.animationState&&C.animationState.animateChanges(),R.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(M)}),R.current=!1),C.enteringChildren=void 0)}),C}function YN(a,i,l,o){const{layoutId:u,layout:m,drag:f,dragConstraints:h,layoutScroll:g,layoutRoot:p,layoutAnchor:b,layoutCrossfade:v}=i;a.projection=new l(a.latestValues,i["data-framer-portal-id"]?void 0:dv(a.parent)),a.projection.setOptions({layoutId:u,layout:m,alwaysMeasureLayout:!!f||h&&ji(h),visualElement:a,animationType:typeof m=="string"?m:"both",initialPromotionConfig:o,crossfade:v,layoutScroll:g,layoutRoot:p,layoutAnchor:b})}function dv(a){if(a)return a.options.allowProjection!==!1?a.projection:dv(a.parent)}function qu(a,{forwardMotionProps:i=!1,type:l}={},o,u){o&&NN(o);const m=l?l==="svg":ff(a),f=m?HN:_N;function h(p,b){let v;const w={...S.useContext(Js),...p,layoutId:FN(p)},{isStatic:T}=w,C=kN(p),N=f(p,T);if(!T&&typeof window<"u"){PN();const A=XN(w);v=A.MeasureLayout,C.visualElement=GN(a,N,w,u,A.ProjectionNode,m)}return r.jsxs(eo.Provider,{value:C,children:[v&&C.visualElement?r.jsx(v,{visualElement:C.visualElement,...w}):null,VN(a,p,qN(N,C.visualElement,b),N,T,i,m)]})}h.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const g=S.forwardRef(h);return g[UN]=a,g}function FN({layoutId:a}){const i=S.useContext(Vd).id;return i&&a!==void 0?i+"-"+a:a}function PN(a,i){S.useContext(iv).strict}function XN(a){const i=sv(),{drag:l,layout:o}=i;if(!l&&!o)return{};const u={...l,...o};return{MeasureLayout:l?.isEnabled(a)||o?.isEnabled(a)?u.MeasureLayout:void 0,ProjectionNode:u.ProjectionNode}}function ZN(a,i){if(typeof Proxy>"u")return qu;const l=new Map,o=(m,f)=>qu(m,f,a,i),u=(m,f)=>o(m,f);return new Proxy(u,{get:(m,f)=>f==="create"?o:(l.has(f)||l.set(f,qu(f,void 0,a,i)),l.get(f))})}const WN=(a,i)=>i.isSVG??ff(a)?new NS(i):new bS(i,{allowProjection:a!==S.Fragment});class QN extends un{constructor(i){super(i),i.animationState||(i.animationState=kS(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Il(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:l}=this.node.prevProps||{};i!==l&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let KN=0;class JN extends un{constructor(){super(...arguments),this.id=KN++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:l}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===o)return;if(i&&o===!1){if(this.isExitComplete){const{initial:m,custom:f}=this.node.getProps();if(typeof m=="string"){const h=Bn(this.node,m,f);if(h){const{transition:g,transitionEnd:p,...b}=h;for(const v in b)this.node.getValue(v)?.jump(b[v])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const u=this.node.animationState.setActive("exit",!i);l&&!i&&u.then(()=>{this.isExitComplete=!0,l(this.id)})}mount(){const{register:i,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const IN={animation:{Feature:QN},exit:{Feature:JN}};function Is(a){return{point:{x:a.pageX,y:a.pageY}}}const $N=a=>i=>sf(i)&&a(i,Is(i));function _s(a,i,l,o){return Fs(a,i,$N(l),o)}const fv=({current:a})=>a?a.ownerDocument.defaultView:null,Ug=(a,i)=>Math.abs(a-i);function e3(a,i){const l=Ug(a.x,i.x),o=Ug(a.y,i.y);return Math.sqrt(l**2+o**2)}const qg=new Set(["auto","scroll"]);class mv{constructor(i,l,{transformPagePoint:o,contextWindow:u=window,dragSnapToOrigin:m=!1,distanceThreshold:f=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=T=>{this.handleScroll(T.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=wl(this.lastRawMoveEventInfo,this.transformPagePoint));const T=Gu(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,N=e3(T.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!N)return;const{point:A}=T,{timestamp:M}=it;this.history.push({...A,timestamp:M});const{onStart:R,onMove:L}=this.handlers;C||(R&&R(this.lastMoveEvent,T),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,T)},this.handlePointerMove=(T,C)=>{this.lastMoveEvent=T,this.lastRawMoveEventInfo=C,this.lastMoveEventInfo=wl(C,this.transformPagePoint),Se.update(this.updatePoint,!0)},this.handlePointerUp=(T,C)=>{this.end();const{onEnd:N,onSessionEnd:A,resumeAnimation:M}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const R=Gu(T.type==="pointercancel"?this.lastMoveEventInfo:wl(C,this.transformPagePoint),this.history);this.startEvent&&N&&N(T,R),A&&A(T,R)},!sf(i))return;this.dragSnapToOrigin=m,this.handlers=l,this.transformPagePoint=o,this.distanceThreshold=f,this.contextWindow=u||window;const g=Is(i),p=wl(g,this.transformPagePoint),{point:b}=p,{timestamp:v}=it;this.history=[{...b,timestamp:v}];const{onSessionStart:w}=l;w&&w(i,Gu(p,this.history)),this.removeListeners=Ws(_s(this.contextWindow,"pointermove",this.handlePointerMove),_s(this.contextWindow,"pointerup",this.handlePointerUp),_s(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(i){let l=i.parentElement;for(;l;){const o=getComputedStyle(l);(qg.has(o.overflowX)||qg.has(o.overflowY))&&this.scrollPositions.set(l,{x:l.scrollLeft,y:l.scrollTop}),l=l.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(i){const l=this.scrollPositions.get(i);if(!l)return;const o=i===window,u=o?{x:window.scrollX,y:window.scrollY}:{x:i.scrollLeft,y:i.scrollTop},m={x:u.x-l.x,y:u.y-l.y};m.x===0&&m.y===0||(o?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=m.x,this.lastMoveEventInfo.point.y+=m.y):this.history.length>0&&(this.history[0].x-=m.x,this.history[0].y-=m.y),this.scrollPositions.set(i,u),Se.update(this.updatePoint,!0))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Wt(this.updatePoint)}}function wl(a,i){return i?{point:i(a.point)}:a}function Gg(a,i){return{x:a.x-i.x,y:a.y-i.y}}function Gu({point:a},i){return{point:a,delta:Gg(a,hv(i)),offset:Gg(a,t3(i)),velocity:a3(i,.1)}}function t3(a){return a[0]}function hv(a){return a[a.length-1]}function a3(a,i){if(a.length<2)return{x:0,y:0};let l=a.length-1,o=null;const u=hv(a);for(;l>=0&&(o=a[l],!(u.timestamp-o.timestamp>Vt(i)));)l--;if(!o)return{x:0,y:0};o===a[0]&&a.length>2&&u.timestamp-o.timestamp>Vt(i)*2&&(o=a[1]);const m=Zt(u.timestamp-o.timestamp);if(m===0)return{x:0,y:0};const f={x:(u.x-o.x)/m,y:(u.y-o.y)/m};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function n3(a,{min:i,max:l},o){return i!==void 0&&a<i?a=o?Be(i,a,o.min):Math.max(a,i):l!==void 0&&a>l&&(a=o?Be(l,a,o.max):Math.min(a,l)),a}function Yg(a,i,l){return{min:i!==void 0?a.min+i:void 0,max:l!==void 0?a.max+l-(a.max-a.min):void 0}}function i3(a,{top:i,left:l,bottom:o,right:u}){return{x:Yg(a.x,l,u),y:Yg(a.y,i,o)}}function Fg(a,i){let l=i.min-a.min,o=i.max-a.max;return i.max-i.min<a.max-a.min&&([l,o]=[o,l]),{min:l,max:o}}function s3(a,i){return{x:Fg(a.x,i.x),y:Fg(a.y,i.y)}}function r3(a,i){let l=.5;const o=pt(a),u=pt(i);return u>o?l=Ai(i.min,i.max-o,a.min):o>u&&(l=Ai(a.min,a.max-u,i.min)),na(0,1,l)}function l3(a,i){const l={};return i.min!==void 0&&(l.min=i.min-a.min),i.max!==void 0&&(l.max=i.max-a.min),l}const jd=.35;function o3(a=jd){return a===!1?a=0:a===!0&&(a=jd),{x:Pg(a,"left","right"),y:Pg(a,"top","bottom")}}function Pg(a,i,l){return{min:Xg(a,i),max:Xg(a,l)}}function Xg(a,i){return typeof a=="number"?a:a[i]||0}const c3=new WeakMap;class u3{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=et(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:l=!1,distanceThreshold:o}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const m=v=>{l&&this.snapToCursor(Is(v).point),this.stopAnimation()},f=(v,w)=>{const{drag:T,dragPropagation:C,onDragStart:N}=this.getProps();if(T&&!C&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Vj(T),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=w,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ca(M=>{let R=this.getAxisMotionValue(M).get()||0;if(fa.test(R)){const{projection:L}=this.visualElement;if(L&&L.layout){const q=L.layout.layoutBox[M];q&&(R=pt(q)*(parseFloat(R)/100))}}this.originPoint[M]=R}),N&&Se.update(()=>N(v,w),!1,!0),fd(this.visualElement,"transform");const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},h=(v,w)=>{this.latestPointerEvent=v,this.latestPanInfo=w;const{dragPropagation:T,dragDirectionLock:C,onDirectionLock:N,onDrag:A}=this.getProps();if(!T&&!this.openDragLock)return;const{offset:M}=w;if(C&&this.currentDirection===null){this.currentDirection=f3(M),this.currentDirection!==null&&N&&N(this.currentDirection);return}this.updateAxis("x",w.point,M),this.updateAxis("y",w.point,M),this.visualElement.render(),A&&Se.update(()=>A(v,w),!1,!0)},g=(v,w)=>{this.latestPointerEvent=v,this.latestPanInfo=w,this.stop(v,w),this.latestPointerEvent=null,this.latestPanInfo=null},p=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:b}=this.getProps();this.panSession=new mv(i,{onSessionStart:m,onStart:f,onMove:h,onSessionEnd:g,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:b,distanceThreshold:o,contextWindow:fv(this.visualElement),element:this.visualElement.current})}stop(i,l){const o=i||this.latestPointerEvent,u=l||this.latestPanInfo,m=this.isDragging;if(this.cancel(),!m||!u||!o)return;const{velocity:f}=u;this.startAnimation(f);const{onDragEnd:h}=this.getProps();h&&Se.postRender(()=>h(o,u))}cancel(){this.isDragging=!1;const{projection:i,animationState:l}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(i,l,o){const{drag:u}=this.getProps();if(!o||!jl(i,u,this.currentDirection))return;const m=this.getAxisMotionValue(i);let f=this.originPoint[i]+o[i];this.constraints&&this.constraints[i]&&(f=n3(f,this.constraints[i],this.elastic[i])),m.set(f)}resolveConstraints(){const{dragConstraints:i,dragElastic:l}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;i&&ji(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&o?this.constraints=i3(o.layoutBox,i):this.constraints=!1,this.elastic=o3(l),u!==this.constraints&&!ji(i)&&o&&this.constraints&&!this.hasMutatedConstraints&&ca(m=>{this.constraints!==!1&&this.getAxisMotionValue(m)&&(this.constraints[m]=l3(o.layoutBox[m],this.constraints[m]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:l}=this.getProps();if(!i||!ji(i))return!1;const o=i.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const m=fS(o,u.root,this.visualElement.getTransformPagePoint());let f=s3(u.layout.layoutBox,m);if(l){const h=l(cS(f));this.hasMutatedConstraints=!!h,h&&(f=Vb(h))}return f}startAnimation(i){const{drag:l,dragMomentum:o,dragElastic:u,dragTransition:m,dragSnapToOrigin:f,onDragTransitionEnd:h}=this.getProps(),g=this.constraints||{},p=ca(b=>{if(!jl(b,l,this.currentDirection))return;let v=g&&g[b]||{};(f===!0||f===b)&&(v={min:0,max:0});const w=u?200:1e6,T=u?40:1e7,C={type:"inertia",velocity:o?i[b]:0,bounceStiffness:w,bounceDamping:T,timeConstant:750,restDelta:1,restSpeed:10,...m,...v};return this.startAxisValueAnimation(b,C)});return Promise.all(p).then(h)}startAxisValueAnimation(i,l){const o=this.getAxisMotionValue(i);return fd(this.visualElement,i),o.start(Id(i,o,0,l,this.visualElement,!1))}stopAnimation(){ca(i=>this.getAxisMotionValue(i).stop())}getAxisMotionValue(i){const l=`_drag${i.toUpperCase()}`,o=this.visualElement.getProps(),u=o[l];return u||this.visualElement.getValue(i,(o.initial?o.initial[i]:void 0)||0)}snapToCursor(i){ca(l=>{const{drag:o}=this.getProps();if(!jl(l,o,this.currentDirection))return;const{projection:u}=this.visualElement,m=this.getAxisMotionValue(l);if(u&&u.layout){const{min:f,max:h}=u.layout.layoutBox[l],g=m.get()||0;m.set(i[l]-Be(f,h,.5)+g)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:l}=this.getProps(),{projection:o}=this.visualElement;if(!ji(l)||!o||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};ca(f=>{const h=this.getAxisMotionValue(f);if(h&&this.constraints!==!1){const g=h.get();u[f]=r3({min:g,max:g},this.constraints[f])}});const{transformTemplate:m}=this.visualElement.getProps();this.visualElement.current.style.transform=m?m({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.constraints=!1,this.resolveConstraints(),ca(f=>{if(!jl(f,i,null))return;const h=this.getAxisMotionValue(f),{min:g,max:p}=this.constraints[f];h.set(Be(g,p,u[f]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;c3.set(this.visualElement,this);const i=this.visualElement.current,l=_s(i,"pointerdown",p=>{const{drag:b,dragListener:v=!0}=this.getProps(),w=p.target,T=w!==i&&qj(w);b&&v&&!T&&this.start(p)});let o;const u=()=>{const{dragConstraints:p}=this.getProps();ji(p)&&p.current&&(this.constraints=this.resolveRefConstraints(),o||(o=d3(i,p.current,()=>this.scalePositionWithinConstraints())))},{projection:m}=this.visualElement,f=m.addEventListener("measure",u);m&&!m.layout&&(m.root&&m.root.updateScroll(),m.updateLayout()),Se.read(u);const h=Fs(window,"resize",()=>this.scalePositionWithinConstraints()),g=m.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:b})=>{this.isDragging&&b&&(ca(v=>{const w=this.getAxisMotionValue(v);w&&(this.originPoint[v]+=p[v].translate,w.set(w.get()+p[v].translate))}),this.visualElement.render())}));return()=>{h(),l(),f(),g&&g(),o&&o()}}getProps(){const i=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:o=!1,dragPropagation:u=!1,dragConstraints:m=!1,dragElastic:f=jd,dragMomentum:h=!0}=i;return{...i,drag:l,dragDirectionLock:o,dragPropagation:u,dragConstraints:m,dragElastic:f,dragMomentum:h}}}function Zg(a){let i=!0;return()=>{if(i){i=!1;return}a()}}function d3(a,i,l){const o=gd(a,Zg(l)),u=gd(i,Zg(l));return()=>{o(),u()}}function jl(a,i,l){return(i===!0||i===a)&&(l===null||l===a)}function f3(a,i=10){let l=null;return Math.abs(a.y)>i?l="y":Math.abs(a.x)>i&&(l="x"),l}class m3 extends un{constructor(i){super(i),this.removeGroupControls=St,this.removeListeners=St,this.controls=new u3(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||St}update(){const{dragControls:i}=this.node.getProps(),{dragControls:l}=this.node.prevProps||{};i!==l&&(this.removeGroupControls(),i&&(this.removeGroupControls=i.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Yu=a=>(i,l)=>{a&&Se.update(()=>a(i,l),!1,!0)};class h3 extends un{constructor(){super(...arguments),this.removePointerDownListener=St}onPointerDown(i){this.session=new mv(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:fv(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:l,onPan:o,onPanEnd:u}=this.node.getProps();return{onSessionStart:Yu(i),onStart:Yu(l),onMove:Yu(o),onEnd:(m,f)=>{delete this.session,u&&Se.postRender(()=>u(m,f))}}}mount(){this.removePointerDownListener=_s(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Fu=!1;class p3 extends S.Component{componentDidMount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:o,layoutId:u}=this.props,{projection:m}=i;m&&(l.group&&l.group.add(m),o&&o.register&&u&&o.register(m),Fu&&m.root.didUpdate(),m.addEventListener("animationComplete",()=>{this.safeToRemove()}),m.setOptions({...m.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ol.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:l,visualElement:o,drag:u,isPresent:m}=this.props,{projection:f}=o;return f&&(f.isPresent=m,i.layoutDependency!==l&&f.setOptions({...f.options,layoutDependency:l}),Fu=!0,u||i.layoutDependency!==l||l===void 0||i.isPresent!==m?f.willUpdate():this.safeToRemove(),i.isPresent!==m&&(m?f.promote():f.relegate()||Se.postRender(()=>{const h=f.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:i,layoutAnchor:l}=this.props,{projection:o}=i;o&&(o.options.layoutAnchor=l,o.root.didUpdate(),nf.postRender(()=>{!o.currentAnimation&&o.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:o}=this.props,{projection:u}=i;Fu=!0,u&&(u.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(u),o&&o.deregister&&o.deregister(u))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function pv(a){const[i,l]=nv(),o=S.useContext(Vd);return r.jsx(p3,{...a,layoutGroup:o,switchLayoutGroup:S.useContext(uv),isPresent:i,safeToRemove:l})}const g3={pan:{Feature:h3},drag:{Feature:m3,ProjectionNode:av,MeasureLayout:pv}};function Wg(a,i,l){const{props:o}=a;a.animationState&&o.whileHover&&a.animationState.setActive("whileHover",l==="Start");const u="onHover"+l,m=o[u];m&&Se.postRender(()=>m(i,Is(i)))}class y3 extends un{mount(){const{current:i}=this.node;i&&(this.unmount=Lj(i,(l,o)=>(Wg(this.node,o,"Start"),u=>Wg(this.node,u,"End"))))}unmount(){}}class b3 extends un{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ws(Fs(this.node.current,"focus",()=>this.onFocus()),Fs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Qg(a,i,l){const{props:o}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&o.whileTap&&a.animationState.setActive("whileTap",l==="Start");const u="onTap"+(l==="End"?"":l),m=o[u];m&&Se.postRender(()=>m(i,Is(i)))}class v3 extends un{mount(){const{current:i}=this.node;if(!i)return;const{globalTapTarget:l,propagate:o}=this.node.props;this.unmount=Yj(i,(u,m)=>(Qg(this.node,m,"Start"),(f,{success:h})=>Qg(this.node,f,h?"End":"Cancel")),{useGlobalTarget:l,stopPropagation:o?.tap===!1})}unmount(){}}const Sd=new WeakMap,Pu=new WeakMap,x3=a=>{const i=Sd.get(a.target);i&&i(a)},w3=a=>{a.forEach(x3)};function j3({root:a,...i}){const l=a||document;Pu.has(l)||Pu.set(l,{});const o=Pu.get(l),u=JSON.stringify(i);return o[u]||(o[u]=new IntersectionObserver(w3,{root:a,...i})),o[u]}function S3(a,i,l){const o=j3(i);return Sd.set(a,l),o.observe(a),()=>{Sd.delete(a),o.unobserve(a)}}const N3={some:0,all:1};class T3 extends un{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:i={}}=this.node.getProps(),{root:l,margin:o,amount:u="some",once:m}=i,f={root:l?l.current:void 0,rootMargin:o,threshold:typeof u=="number"?u:N3[u]},h=g=>{const{isIntersecting:p}=g;if(this.isInView===p||(this.isInView=p,m&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:b,onViewportLeave:v}=this.node.getProps(),w=p?b:v;w&&w(g)};this.stopObserver=S3(this.node.current,f,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:l}=this.node;["amount","margin","root"].some(A3(i,l))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}function A3({viewport:a={}},{viewport:i={}}={}){return l=>a[l]!==i[l]}const C3={inView:{Feature:T3},tap:{Feature:v3},focus:{Feature:b3},hover:{Feature:y3}},E3={layout:{ProjectionNode:av,MeasureLayout:pv}},k3={...IN,...C3,...g3,...E3},j=ZN(k3,WN);function Pl(a){return typeof window>"u"?!1:a?lb():Kd()}const z3=50,Kg=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),M3=()=>({time:0,x:Kg(),y:Kg()}),D3={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Jg(a,i,l,o){const u=l[i],{length:m,position:f}=D3[i],h=u.current,g=l.time;u.current=Math.abs(a[`scroll${f}`]),u.scrollLength=a[`scroll${m}`]-a[`client${m}`],u.offset.length=0,u.offset[0]=0,u.offset[1]=u.scrollLength,u.progress=Ai(0,u.scrollLength,u.current);const p=o-g;u.velocity=p>z3?0:_d(u.current-h,p)}function R3(a,i,l){Jg(a,"x",i,l),Jg(a,"y",i,l),i.time=l}function O3(a,i){const l={x:0,y:0};let o=a;for(;o&&o!==i;)if(Bs(o))l.x+=o.offsetLeft,l.y+=o.offsetTop,o=o.offsetParent;else if(o.tagName==="svg"){const u=o.getBoundingClientRect();o=o.parentElement;const m=o.getBoundingClientRect();l.x+=u.left-m.left,l.y+=u.top-m.top}else if(o instanceof SVGGraphicsElement){const{x:u,y:m}=o.getBBox();l.x+=u,l.y+=m;let f=null,h=o.parentNode;for(;!f;)h.tagName==="svg"&&(f=h),h=o.parentNode;o=f}else break;return l}const Nd={start:0,center:.5,end:1};function Ig(a,i,l=0){let o=0;if(a in Nd&&(a=Nd[a]),typeof a=="string"){const u=parseFloat(a);a.endsWith("px")?o=u:a.endsWith("%")?a=u/100:a.endsWith("vw")?o=u/100*document.documentElement.clientWidth:a.endsWith("vh")?o=u/100*document.documentElement.clientHeight:a=u}return typeof a=="number"&&(o=i*a),l+o}const V3=[0,0];function B3(a,i,l,o){let u=Array.isArray(a)?a:V3,m=0,f=0;return typeof a=="number"?u=[a,a]:typeof a=="string"&&(a=a.trim(),a.includes(" ")?u=a.split(" "):u=[a,Nd[a]?a:"0"]),m=Ig(u[0],l,o),f=Ig(u[1],i),m-f}const Ds={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},L3={x:0,y:0};function _3(a){return"getBBox"in a&&a.tagName!=="svg"?a.getBBox():{width:a.clientWidth,height:a.clientHeight}}function H3(a,i,l){const{offset:o=Ds.All}=l,{target:u=a,axis:m="y"}=l,f=m==="y"?"height":"width",h=u!==a?O3(u,a):L3,g=u===a?{width:a.scrollWidth,height:a.scrollHeight}:_3(u),p={width:a.clientWidth,height:a.clientHeight};i[m].offset.length=0;let b=!i[m].interpolate;const v=o.length;for(let w=0;w<v;w++){const T=B3(o[w],p[f],g[f],h[m]);!b&&T!==i[m].interpolatorOffsets[w]&&(b=!0),i[m].offset[w]=T}b&&(i[m].interpolate=Xd(i[m].offset,ab(o),{clamp:!1}),i[m].interpolatorOffsets=[...i[m].offset]),i[m].progress=na(0,1,i[m].interpolate(i[m].current))}function U3(a,i=a,l){if(l.x.targetOffset=0,l.y.targetOffset=0,i!==a){let o=i;for(;o&&o!==a;)l.x.targetOffset+=o.offsetLeft,l.y.targetOffset+=o.offsetTop,o=o.offsetParent}l.x.targetLength=i===a?i.scrollWidth:i.clientWidth,l.y.targetLength=i===a?i.scrollHeight:i.clientHeight,l.x.containerLength=a.clientWidth,l.y.containerLength=a.clientHeight}function q3(a,i,l,o={}){return{measure:u=>{U3(a,o.target,l),R3(a,l,u),(o.offset||o.target)&&H3(a,l,o)},notify:()=>i(l)}}const wi=new WeakMap,$g=new WeakMap,Xu=new WeakMap,ey=new WeakMap,Sl=new WeakMap,ty=a=>a===document.scrollingElement?window:a;function gv(a,{container:i=document.scrollingElement,trackContentSize:l=!1,...o}={}){if(!i)return St;let u=Xu.get(i);u||(u=new Set,Xu.set(i,u));const m=M3(),f=q3(i,a,m,o);if(u.add(f),!wi.has(i)){const g=()=>{for(const w of u)w.measure(it.timestamp);Se.preUpdate(p)},p=()=>{for(const w of u)w.notify()},b=()=>Se.read(g);wi.set(i,b);const v=ty(i);window.addEventListener("resize",b),i!==document.documentElement&&$g.set(i,gd(i,b)),v.addEventListener("scroll",b),b()}if(l&&!Sl.has(i)){const g=wi.get(i),p={width:i.scrollWidth,height:i.scrollHeight};ey.set(i,p);const b=()=>{const w=i.scrollWidth,T=i.scrollHeight;(p.width!==w||p.height!==T)&&(g(),p.width=w,p.height=T)},v=Se.read(b,!0);Sl.set(i,v)}const h=wi.get(i);return Se.read(h,!1,!0),()=>{Wt(h);const g=Xu.get(i);if(!g||(g.delete(f),g.size))return;const p=wi.get(i);wi.delete(i),p&&(ty(i).removeEventListener("scroll",p),$g.get(i)?.(),window.removeEventListener("resize",p));const b=Sl.get(i);b&&(Wt(b),Sl.delete(i)),ey.delete(i)}}const G3=[[Ds.Enter,"entry"],[Ds.Exit,"exit"],[Ds.Any,"cover"],[Ds.All,"contain"]],ay={start:0,end:1};function Y3(a){const i=a.trim().split(/\s+/);if(i.length!==2)return;const l=ay[i[0]],o=ay[i[1]];if(!(l===void 0||o===void 0))return[l,o]}function F3(a){if(a.length!==2)return;const i=[];for(const l of a)if(Array.isArray(l))i.push(l);else if(typeof l=="string"){const o=Y3(l);if(!o)return;i.push(o)}else return;return i}function P3(a,i){const l=F3(a);if(!l)return!1;for(let o=0;o<2;o++){const u=l[o],m=i[o];if(u[0]!==m[0]||u[1]!==m[1])return!1}return!0}function mf(a){if(!a)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[i,l]of G3)if(P3(a,i))return{rangeStart:`${l} 0%`,rangeEnd:`${l} 100%`}}const ny=new Map;function iy(a){const i={value:0},l=gv(o=>{i.value=o[a.axis].progress*100},a);return{currentTime:i,cancel:l}}function yv({source:a,container:i,...l}){const{axis:o}=l;a&&(i=a);let u=ny.get(i);u||(u=new Map,ny.set(i,u));const m=l.target??"self";let f=u.get(m);f||(f={},u.set(m,f));const h=o+(l.offset??[]).join(",");return f[h]||(l.target&&Pl(l.target)?mf(l.offset)?f[h]=new ViewTimeline({subject:l.target,axis:o}):f[h]=iy({container:i,...l}):Pl()?f[h]=new ScrollTimeline({source:i,axis:o}):f[h]=iy({container:i,...l})),f[h]}function X3(a,i){const l=yv(i),o=i.target?mf(i.offset):void 0,u=i.target?Pl(i.target)&&!!o:Pl();return a.attachTimeline({timeline:u?l:void 0,...o&&u&&{rangeStart:o.rangeStart,rangeEnd:o.rangeEnd},observe:m=>(m.pause(),zb(f=>{m.time=m.iterationDuration*f},l))})}function Z3(a){return a.length===2}function W3(a,i){return Z3(a)?gv(l=>{a(l[i.axis].progress,l)},i):zb(a,yv(i))}function bv(a,{axis:i="y",container:l=document.scrollingElement,...o}={}){if(!l)return St;const u={axis:i,container:l,...o};return typeof a=="function"?W3(a,u):X3(a,u)}const Q3=()=>({scrollX:ea(0),scrollY:ea(0),scrollXProgress:ea(0),scrollYProgress:ea(0)}),Nl=a=>a?!a.current:!1;function sy(a,i,l,o){return{factory:u=>bv(u,{...i,axis:a,container:l?.current||void 0,target:o?.current||void 0}),times:[0,1],keyframes:[0,1],ease:u=>u,duration:1}}function K3(a,i){return typeof window>"u"?!1:a?lb()&&!!mf(i):Kd()}function J3({container:a,target:i,...l}={}){const o=on(Q3);K3(i,l.offset)&&(o.scrollXProgress.accelerate=sy("x",l,a,i),o.scrollYProgress.accelerate=sy("y",l,a,i));const u=S.useRef(null),m=S.useRef(!1),f=S.useCallback(()=>(u.current=bv((h,{x:g,y:p})=>{o.scrollX.set(g.current),o.scrollXProgress.set(g.progress),o.scrollY.set(p.current),o.scrollYProgress.set(p.progress)},{...l,container:a?.current||void 0,target:i?.current||void 0}),()=>{u.current?.()}),[a,i,JSON.stringify(l.offset)]);return Ql(()=>{if(m.current=!1,Nl(a)||Nl(i)){m.current=!0;return}else return f()},[f]),S.useEffect(()=>{if(m.current)return Us(!Nl(a)),Us(!Nl(i)),f()},[f]),o}function vv(a){const i=on(()=>ea(a)),{isStatic:l}=S.useContext(Js);if(l){const[,o]=S.useState(a);S.useEffect(()=>i.on("change",o),[])}return i}function xv(a,i){const l=vv(i()),o=()=>l.set(i());return o(),Ql(()=>{const u=()=>Se.preRender(o,!1,!0),m=a.map(f=>f.on("change",u));return()=>{m.forEach(f=>f()),Wt(o)}}),l}function I3(a){Vs.current=[],a();const i=xv(Vs.current,a);return Vs.current=void 0,i}function Dn(a,i,l,o){if(typeof a=="function")return I3(a);if(l!==void 0&&!Array.isArray(l)&&typeof i!="function")return $3(a,i,l,o);const f=typeof i=="function"?i:$j(i,l,o),h=Array.isArray(a)?ry(a,f):ry([a],([p])=>f(p)),g=Array.isArray(a)?void 0:a.accelerate;return g&&!g.isTransformed&&typeof i!="function"&&Array.isArray(l)&&o?.clamp!==!1&&(h.accelerate={...g,times:i,keyframes:l,isTransformed:!0}),h}function ry(a,i){const l=on(()=>[]);return xv(a,()=>{l.length=0;const o=a.length;for(let u=0;u<o;u++)l[u]=a[u].get();return i(l)})}function $3(a,i,l,o){const u=on(()=>Object.keys(l)),m=on(()=>({}));for(const f of u)m[f]=Dn(a,i,l[f],o);return m}function eT(a,i={}){const{isStatic:l}=S.useContext(Js),o=()=>tt(a)?a.get():a;if(l)return Dn(o);const u=vv(o());return S.useInsertionEffect(()=>eS(u,a,i),[u,JSON.stringify(i)]),u}function tT(a,i={}){return eT(a,{type:"spring",...i})}const aT={some:0,all:1};function nT(a,i,{root:l,margin:o,amount:u="some"}={}){const m=af(a),f=new WeakMap,h=p=>{p.forEach(b=>{const v=f.get(b.target);if(b.isIntersecting!==!!v)if(b.isIntersecting){const w=i(b.target,b);typeof w=="function"?f.set(b.target,w):g.unobserve(b.target)}else typeof v=="function"&&(v(b),f.delete(b.target))})},g=new IntersectionObserver(h,{root:l,rootMargin:o,threshold:typeof u=="number"?u:aT[u]});return m.forEach(p=>g.observe(p)),()=>g.disconnect()}function iT(a,{root:i,margin:l,amount:o,once:u=!1,initial:m=!1}={}){const[f,h]=S.useState(m);return S.useEffect(()=>{if(!a.current||u&&f)return;const g=()=>(h(!0),u?void 0:()=>h(!1)),p={root:i&&i.current||void 0,margin:l,amount:o};return nT(a.current,g,p)},[i,a,l,u,o]),f}const sT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAFiUlEQVR4nO3d223bQBRF0VGQQtySG3BxbsAtuRPlIyZM0JLJed9zZq+fAEkgDcWtER8Sebvf7wlw8Wf2AICWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpWCBpW/s4ewKpe3l5D3CDy8/3jNnsMLTFDD/by9nqPEnNK32+sSGOqceNOsmOoBKM+YxN0RyoRHylHTdAdqIa8pxo1QTfkEPKeYtTsFDbiFnNKmstE0A0orvir1JaNTY4Tz1bo9nGstsJLqWx+EPTBy9vr/fP947ZKqDkUoiboHSI+Fz1qgv4yM+aRkbRYzshRWwatMNPOjMI5aouglbZ7o4TgGrV80AoRb6IF4Bi19HFoYq7TYkzR1oFs0NFeyN9EjHnjFrVk0JFewDORY97UjjHSMsptQ6vHfBx/pBhqXtsoyyEV9KiYnx0x2a+0306Jb0dd9n+fO/ZZgZS+xgSdaeTM/Oh7GqWzbY9x945HOWqJoEdvZhxn4twVNfKTpNdjlyxDhKDD7xTO3mbOWUmjfwDb87kixFki9GUMHA/8t1byCXKVytnXvbAztGLM7m8eBWGDdjo22pvaLNpT2KBVj4mu9EaKKGzQpVYNiln6v5A7hbOPg9Y+/9WdqVHHrVcSMugStTG3CKk04rN/vzq2nkc8VFgEHSHmM6uHNor8NnT0mD/fP24jj9isvskiH3SNESt/9cBGWzpoJczS1ywbtMt3Lo5abOIoWzLoGTNY71P5q4e8WS7omR/Hvb4bTcjflgta/bT4/uQNIf9kcRw6V82ZvEdaPtYVhPzckkGnNO5yuMQ31nKbHEfPgssJscVjoI3lg07pZ3glIbZ4DNQj6C/7na2Zj4E6BL3T8igE5iBoWCFoWCFoWCFoWCFoWCFoWCFoWCHoAVb+Bcloy345abTIV+53QtCTnN0h4NH/501wjk2O4PbXnGbT5Zx80NFXcs34oi9bRPJBp+Sx4o+3wXi2TA7L2lPIoEu2FUffDqKXK8swajkVX8+QQddQXAkp5b8hey6n8uQQNuiaPXrVlRHB7EsZ1wobdK1tlnHeKWs9vujLe0X4+xS2fpFrrxEX5RpzrWdE1VuAHIUPOqV5YVx93tFX4o8Uc0oEXWR0IBE/fnuE4xRzSkJBb3qFVnuz+Z4ihpxSvJhTEtwp7PUiRgp4j5jzSH45SfGWvbmOZw5njmUvasgbuRl603Pmmh0QMZeTDToljRc4x/ESucScTzrolHyuk7zaTmkvktvQj7QMYkRcKpGojHNjE/RRy4/u1sepVSJRGeeebdA99Y559uaGYsgb+W3o0dxnZoUx/oagMxBzfASdoXSFRw7F7SLtBJ0pd8Xn/v/Rd53d/+mAncICrW8LVzuW3s+hhBm60FlIxDwHQR/kfOS3vp3b7MN1Dgj6gZqoiXkugn6iJGpinm+JoCNvz6pfNiCaJYJOqfxqTD3GMurxV7RM0KV6Red+1nEWuR/J1lKfFYn5d8vN0OpBqL8he1su6JS0o1Ye+whLBq2KmM8tG7RaHGrjnWXZoFPSiURlnBEsHXRK8WOJPr5olg86MmLOR9ApZjgRx6SAoL9EuGCN4y9IRlvuTOEVM05eEHEbBA0rbHLACkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDCkHDyj9vnCMszE+GHQAAAABJRU5ErkJggg==",ly=j.create(Ot);function rT(){const[a,i]=S.useState(null),[l,o]=S.useState(!1),[u,m]=S.useState(!1),f=S.useRef(null),h=Ie(),g=JSON.parse(localStorage.getItem("user"));S.useEffect(()=>{const N=()=>{o(window.scrollY>50)};return window.addEventListener("scroll",N),()=>window.removeEventListener("scroll",N)},[]);const p=N=>{i(a===N?null:N)},b=()=>{i(null),m(!1)},v=()=>{localStorage.removeItem("token"),localStorage.removeItem("access"),localStorage.removeItem("refresh"),localStorage.removeItem("user"),h("/auth")},w={hidden:{opacity:0,y:-20,scale:.95,transition:{duration:.2}},visible:{opacity:1,y:0,scale:1,transition:{duration:.3,ease:"easeOut"}},exit:{opacity:0,y:-10,scale:.95,transition:{duration:.2}}},T={hidden:{opacity:0,x:"100%",transition:{duration:.3}},visible:{opacity:1,x:0,transition:{duration:.3,ease:"easeOut"}},exit:{opacity:0,x:"100%",transition:{duration:.3}}},C={hidden:{opacity:0,y:-20},visible:N=>({opacity:1,y:0,transition:{delay:N*.05,duration:.5}})};return r.jsxs(r.Fragment,{children:[r.jsxs(j.nav,{ref:f,className:`navbar ${l?"navbar-scrolled":""}`,initial:{y:-100},animate:{y:0},transition:{duration:.5},children:[r.jsx("div",{className:"navbar-bg"}),r.jsxs("div",{className:"navbar-container",children:[r.jsxs(Ot,{to:"/",className:"logo",onClick:b,children:[r.jsx("img",{src:sT,alt:"AkiliBridge logo",className:"logo-image"}),r.jsxs("span",{className:"logo-text",children:["Akili",r.jsx("span",{className:"logo-highlight",children:"Bridge"})]})]}),r.jsxs("ul",{className:"nav-links",children:[[{name:"Home",path:"/",hasDropdown:!1},{name:"About",key:"about",items:[{name:"Get to Know Us",path:"/about/get-to-know-us"},{name:"Who We Are",path:"/about/who-we-are"},{name:"Mission & Purpose",path:"/about/mission-purpose"}]},{name:"What We Do",key:"whatwedo",items:[{name:"Fellowship Program",path:"/what-we-do/fellowship"},{name:"Training & Workshops",path:"/what-we-do/training"}]},{name:"How to Apply",key:"apply",items:[{name:"For Fellows",path:"/apply/fellows"},{name:"For Mentors",path:"/apply/mentors"}]},{name:"Labs",path:"/labs",hasDropdown:!1},{name:"Careers",key:"careers",items:[{name:"Undergraduate Research Assistant",path:"/careers/undergraduate"},{name:"Careers Application Form",path:"/careers/application"}]},{name:"What's New",path:"/news",hasDropdown:!1},{name:"Dashboard",path:"/dashboard",hasDropdown:!1},...g?.is_admin?[{name:"Admin Dashboard",path:"/admin-dashboard",hasDropdown:!1}]:[]].map((N,A)=>r.jsx(j.li,{custom:A,variants:C,initial:"hidden",animate:"visible",className:N.hasDropdown===!1&&!N.items?"nav-item":"dropdown",children:N.items?r.jsxs(r.Fragment,{children:[r.jsxs("button",{className:"dropdown-btn",onClick:()=>p(N.key),children:[N.name,r.jsx("span",{className:`dropdown-arrow ${a===N.key?"open":""}`})]}),r.jsx(dt,{children:a===N.key&&r.jsx(j.ul,{className:"dropdown-menu",variants:w,initial:"hidden",animate:"visible",exit:"exit",children:N.items.map(M=>r.jsx(j.li,{whileHover:{x:8},whileTap:{scale:.98},children:r.jsx(Ot,{to:M.path,onClick:b,children:M.name})},M.name))})})]}):r.jsx(ly,{to:N.path,onClick:b,whileHover:{color:"#7abfff"},whileTap:{scale:.98},children:N.name})},N.name)),g?r.jsxs(r.Fragment,{children:[r.jsx(j.li,{className:"nav-item welcome-item",variants:C,initial:"hidden",animate:"visible",custom:10,children:r.jsxs("span",{className:"welcome-text",children:["Welcome, ",g.username||g.email]})}),r.jsx(j.li,{className:"nav-item",variants:C,initial:"hidden",animate:"visible",custom:11,children:r.jsx("button",{onClick:v,className:"logout-btn",children:"Logout"})})]}):r.jsx(j.li,{className:"nav-item",variants:C,initial:"hidden",animate:"visible",custom:10,children:r.jsx(ly,{to:"/auth",onClick:b,className:"auth-link",whileHover:{color:"#7abfff"},whileTap:{scale:.98},children:"Register / Login"})})]}),r.jsxs("button",{className:`mobile-menu-btn ${u?"open":""}`,onClick:()=>m(!u),children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]})]})]}),r.jsx(dt,{children:u&&r.jsx(j.div,{className:"mobile-menu-overlay",variants:T,initial:"hidden",animate:"visible",exit:"exit",onClick:b,children:r.jsxs(j.div,{className:"mobile-menu-content",onClick:N=>N.stopPropagation(),initial:{opacity:0},animate:{opacity:1},transition:{delay:.1},children:[r.jsxs("div",{className:"mobile-menu-header",children:[r.jsx("div",{className:"mobile-logo",children:"AkiliBridge"}),r.jsx("button",{className:"mobile-close-btn",onClick:b,"aria-label":"Close menu"})]}),r.jsxs("ul",{className:"mobile-nav-links",children:[[{name:"Home",path:"/"},{name:"Get to Know Us",path:"/about/get-to-know-us"},{name:"Who We Are",path:"/about/who-we-are"},{name:"Mission & Purpose",path:"/about/mission-purpose"},{name:"Fellowship Program",path:"/what-we-do/fellowship"},{name:"Training & Workshops",path:"/what-we-do/training"},{name:"For Fellows",path:"/apply/fellows"},{name:"For Mentors",path:"/apply/mentors"},{name:"Labs",path:"/labs"},{name:"Undergraduate Research Assistant",path:"/careers/undergraduate"},{name:"Careers Application Form",path:"/careers/application"},{name:"What's New",path:"/news"},{name:"Dashboard",path:"/dashboard"},...g?.is_admin?[{name:"Admin Dashboard",path:"/admin-dashboard"}]:[]].map((N,A)=>r.jsx(j.li,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{delay:A*.05},children:r.jsx(Ot,{to:N.path,onClick:b,children:N.name})},N.name)),g?r.jsxs(r.Fragment,{children:[r.jsx(j.li,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{delay:.7},children:r.jsxs("div",{className:"mobile-welcome-text",children:["Welcome, ",g.username||g.email]})}),r.jsx(j.li,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{delay:.75},children:r.jsx("button",{onClick:()=>{v(),b()},className:"mobile-logout-btn",children:"Logout"})})]}):r.jsx(j.li,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{delay:.7},children:r.jsx(Ot,{to:"/auth",onClick:b,className:"mobile-auth-link",children:"Register / Login"})})]})]})})})]})}const Td="https://akili-bridge.onrender.com";function lT(a){return document.cookie.split("; ").find(i=>i.startsWith(`${a}=`))?.split("=")[1]}function wv(){return{access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),token:localStorage.getItem("token")}}function oT(){const{access:a,token:i}=wv();return a?`Bearer ${a}`:i?`Token ${i}`:null}function cT(a={}){const i=oT();return i?{...a,Authorization:i}:a}function oy(a="GET",i={}){if(!!["GET","HEAD","OPTIONS","TRACE"].includes(a.toUpperCase())||i["X-CSRFToken"])return i;const o=lT("csrftoken");return o?{...i,"X-CSRFToken":o}:i}function hf(){localStorage.removeItem("access"),localStorage.removeItem("refresh"),localStorage.removeItem("token"),localStorage.removeItem("user"),sessionStorage.clear()}function uT(){const a=localStorage.getItem("user");if(a)try{return JSON.parse(a)}catch{return null}return null}async function dT(a){try{const i=await fetch(`${Td}/api/auth/refresh/`,{method:"POST",credentials:"omit",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh:a})});if(!i.ok)throw new Error("Refresh failed");const l=await i.json();if(l.access)return localStorage.setItem("access",l.access),l.access;throw new Error("No access token in response")}catch(i){throw console.error("Token refresh failed:",i),hf(),new Error("Session expired. Please log in again.")}}async function Xe(a,i={}){const l=i.method||"GET",{refresh:o}=wv();let u={credentials:"omit",...i};const m=a.includes("/api/auth/register/")||a.includes("/api/auth/login/")||a.includes("/api/auth/refresh/")||a.includes("/api/auth/request-password-reset/")||a.includes("/api/auth/verify-password-reset-token/")||a.includes("/api/auth/reset-password/")||a.includes("/api/auth/request-email-confirmation/")||a.includes("/api/auth/confirm-email/");m?u.headers=oy(l,i.headers||{}):u.headers=oy(l,cT(i.headers||{}));let f=await fetch(`${Td}${a}`,u);if(f.status===401&&o&&!m)try{const h=await dT(o),g={...u.headers||{},Authorization:`Bearer ${h}`};g.Authorization==="Bearer null"&&delete g.Authorization;const p={...u,headers:g};f=await fetch(`${Td}${a}`,p)}catch(h){throw hf(),typeof window<"u"&&!window.location.pathname.includes("/auth")&&!window.location.pathname.includes("/login")&&(window.location.href="/auth"),new Error(h.message||"Session expired. Please log in again.")}return f}const Zu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA1ElEQVR4nO2WwQ0DIQwEQ5Q+QkmhgFAcDdASnTivkxAy9vpAch6sxOd0eMcGWwQienjq6ep+AA7APwC8VjbHnMQebqUGLUawzgHN1AoBAUimkkG/b/afegdm5q3UoGWHHIF4B7QMJDjNGAIYA1rPfxuApDHbmBPFnAitAgxwZd8H5sws5TcBcIGtZpyWJuFVATeAUXdgIIA+MGcyqwQCtDwJNW0ZxRKINCOWJ+FMrdTQtx/XorCIyLTe3w8h39B1qwI7R7L7i8j8INkt9wocgAPgDvADhuTSq6pJqM8AAAAASUVORK5CYII=";function fT(){const a=S.useRef(null),i=Ie(),{scrollYProgress:l}=J3({target:a,offset:["start start","end end"]}),o=tT(l,{stiffness:100,damping:30,restDelta:.001}),[u,m]=S.useState(""),[f,h]=S.useState(!1),[g,p]=S.useState(""),b=async T=>{if(T.preventDefault(),p(""),!u||!u.includes("@")){p("Enter a valid email address.");return}try{const C=await Xe("/api/fellowship/newsletter-subscriptions/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:u,role:"Subscriber",source:"homepage"})});if(!C.ok){const N=await C.json().catch(()=>null),A=Array.isArray(N?.email)?N.email.join(", "):null;throw new Error(A||N?.detail||"Subscription failed.")}h(!0),m(""),setTimeout(()=>h(!1),3e3)}catch(C){p(C.message||"Subscription failed.")}},v=Dn(o,[0,.5],[1,.95]),w=Dn(o,[0,.3],[1,.7]);return Dn(o,[0,1],["0%","20%"]),Dn(o,[0,1],["0%","15%"]),Dn(o,[0,1],["0%","25%"]),r.jsxs("div",{className:"home-page",ref:a,children:[r.jsxs(j.section,{className:"home-hero",style:{scale:v,opacity:w,backgroundImage:"url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},children:[r.jsx("div",{className:"hero-overlay"}),r.jsxs(j.div,{className:"hero-content",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[r.jsx(j.h1,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.3},children:"AkiliBridge"}),r.jsx(j.p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.5},children:"Nurturing the Next Generation of African Researcher Scholars"}),r.jsxs(j.div,{className:"hero-stats",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},children:[r.jsxs("div",{className:"stat",children:[r.jsx(j.span,{className:"stat-number",initial:{opacity:0},animate:{opacity:1},transition:{delay:.9},children:"17%"}),r.jsx("span",{children:"of global population"})]}),r.jsxs("div",{className:"stat",children:[r.jsx(j.span,{className:"stat-number",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.1},children:"<1%"}),r.jsx("span",{children:"of global research"})]})]})]})]}),r.jsxs(j.section,{className:"home-section fellowship-section",initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.7},style:{backgroundImage:"url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[r.jsx("div",{className:"section-overlay"}),r.jsx("div",{className:"section-content",children:r.jsxs(j.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.2},children:[r.jsx(j.span,{className:"section-badge",initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{delay:.1},children:"✨ First Cohort 2025"}),r.jsx(j.h2,{initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.3},children:"STEM Fellowship Program"}),r.jsx(j.p,{initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.4},children:"Join the first cohort of our one-year researcher-in-training fellowship for undergraduate students in Rwanda, focusing on research skills, mentorship, and career development in STEM."}),r.jsx(j.div,{className:"fellowship-features",children:["Research Skills","Mentorship","Career Development","Networking"].map((T,C)=>r.jsx(j.span,{className:"feature-tag",initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{delay:.5+C*.1},whileHover:{scale:1.05,backgroundColor:"#2c3e66"},children:T},T))}),r.jsxs(j.button,{className:"home-btn primary-btn",whileHover:{scale:1.05,boxShadow:"0 10px 25px -5px rgba(0,0,0,0.3)"},whileTap:{scale:.98},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.8},onClick:()=>i("/careers/undergraduate"),children:[r.jsx("img",{src:Zu,alt:"AkiliBridge logo",className:"btn-icon"}),r.jsx("span",{children:"Learn More"}),r.jsx(j.span,{animate:{x:[0,5,0]},transition:{repeat:1/0,duration:1.5,ease:"easeInOut"},children:"→"})]})]})})]}),r.jsxs(j.section,{className:"home-section stats-section",initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7},style:{backgroundImage:"url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[r.jsx("div",{className:"section-overlay dark"}),r.jsxs("div",{className:"section-content",children:[r.jsxs(j.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},children:[r.jsx(j.h2,{initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.2},children:"Why Africa Needs More Researchers"}),r.jsx(j.p,{initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.3},className:"highlight-text",children:"Africa contributes less than 1% of global research output despite being home to 17% of the world's population. Without a strong research foundation, scientific breakthroughs, innovation, and technological advancements will remain out of reach."}),r.jsx(j.p,{initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.5},children:"At AkiliBridge, we believe Africa needs more researchers — not just in numbers, but in quality, innovation, and impact."})]}),r.jsx(j.div,{className:"impact-cards",initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.7},children:[{number:"100+",label:"Researchers Trained",icon:"🎓"},{number:"10+",label:"Partner Institutions",icon:"🤝"},{number:"5+",label:"African Countries",icon:"🌍"},{number:"100%",label:"Commitment to Excellence",icon:"⭐"}].map((T,C)=>r.jsxs(j.div,{className:"impact-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{delay:.8+C*.1},whileHover:{y:-8,scale:1.02},children:[r.jsx("span",{className:"impact-icon",children:T.icon}),r.jsx(j.span,{className:"impact-number",initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},transition:{delay:.9+C*.1},children:T.number}),r.jsx("span",{className:"impact-label",children:T.label})]},T.label))})]})]}),r.jsxs(j.section,{className:"home-section news-section",initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7},style:{backgroundImage:"url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[r.jsx("div",{className:"section-overlay gradient"}),r.jsx("div",{className:"section-content",children:r.jsxs(j.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},children:[r.jsx(j.h2,{initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.2},children:"What's New"}),r.jsx(j.p,{initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.3},children:"Stay updated with the latest from AkiliBridge — workshops, fellowship updates, and announcements."}),r.jsx(j.div,{className:"news-grid",initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.5},children:[{title:"Application Deadline Extended",date:"Mar 30, 2025",type:"Announcement"},{title:"Research Methods Workshop",date:"Apr 5, 2025",type:"Event"},{title:"New Mentorship Program Launch",date:"Apr 12, 2025",type:"Update"}].map((T,C)=>r.jsxs(j.div,{className:"news-card",initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{delay:.6+C*.1},whileHover:{x:8,backgroundColor:"rgba(255,255,255,0.15)"},children:[r.jsx("span",{className:"news-type",children:T.type}),r.jsx("h4",{children:T.title}),r.jsx("span",{className:"news-date",children:T.date})]},T.title))}),r.jsxs(j.button,{className:"home-btn secondary-btn",whileHover:{scale:1.05,backgroundColor:"#ffffff",color:"#1e2a47"},whileTap:{scale:.98},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.9},onClick:()=>i("/careers/application"),children:[r.jsx("img",{src:Zu,alt:"AkiliBridge logo",className:"btn-icon"}),"Discover More",r.jsx(j.span,{animate:{rotate:[0,360]},transition:{duration:20,repeat:1/0,ease:"linear"},style:{marginLeft:"8px"},children:"✨"})]})]})})]}),r.jsx(j.section,{className:"home-section subscribe-section",initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7},style:{backgroundColor:"#152238",color:"#ffffff"},children:r.jsxs("div",{className:"section-content",style:{maxWidth:"960px",margin:"0 auto",textAlign:"center"},children:[r.jsx(j.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},style:{marginBottom:"1rem"},children:"Stay In The Loop"}),r.jsx(j.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},style:{maxWidth:"720px",margin:"0 auto 1.5rem",lineHeight:1.8},children:"Subscribe to AkiliBridge announcements and receive the latest fellowship, events, and research updates straight to your inbox."}),r.jsxs(j.form,{onSubmit:b,style:{display:"flex",flexWrap:"wrap",gap:"12px",justifyContent:"center",margin:"0 auto"},children:[r.jsx(j.input,{type:"email",placeholder:"Enter your email address",value:u,onChange:T=>m(T.target.value),style:{flex:"1 1 280px",minWidth:"260px",padding:"14px 18px",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.25)",background:"rgba(255,255,255,0.08)",color:"#ffffff",outline:"none"}}),r.jsxs(j.button,{type:"submit",whileHover:{scale:1.03},whileTap:{scale:.97},style:{padding:"14px 26px",borderRadius:"8px",border:"none",background:"#2fb3ff",color:"#1e2a47",fontWeight:"700",cursor:"pointer",minWidth:"160px",display:"inline-flex",alignItems:"center",gap:"8px"},children:[r.jsx("img",{src:Zu,alt:"AkiliBridge logo",className:"btn-icon"}),f?"Subscribed ✓":"Subscribe"]})]}),g&&r.jsx(j.p,{initial:{opacity:0},animate:{opacity:1},style:{color:"#ff7a7a",marginTop:"1rem"},children:g})]})}),r.jsx(j.button,{className:"floating-btn",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{delay:1.5,type:"spring"},whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:r.jsx(j.span,{animate:{y:[0,-4,0]},transition:{repeat:1/0,duration:1.5},children:"↑"})})]})}function mT(){return r.jsxs("div",{className:"about-page",children:[r.jsxs(j.section,{className:"about-hero",initial:{opacity:0,y:-40},animate:{opacity:1,y:0},transition:{duration:1},children:[r.jsx("h1",{children:"About AkiliBridge"}),r.jsx("p",{children:"Building Africa’s Next Generation of Researchers"})]}),r.jsx(j.section,{className:"about-section",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:1},children:r.jsx("p",{children:"At AkiliBridge, we provide aspiring African researchers with the skills, training, and support needed to tackle Africa’s most pressing challenges. Through our fellowship and training programs, we equip undergraduate students with hands-on research experience, mentorship from top-tier academics, and the tools to drive innovation in their fields."})})]})}const hT=j.create(Ot);function pT(){const a=Ie(),i=[{title:"Fellowship Program",description:"Our one-year researcher-in-training fellowship equips undergraduate students in East Africa with research skills, mentorship, and career development in STEM.",icon:"🎓",features:["1:1 mentorship with leading researchers","Hands-on research experience","Career development workshops","Publication opportunities"],link:"/what-we-do/fellowship",color:"#ff6a00"},{title:"Training & Workshops",description:"We provide hands-on workshops and training sessions to strengthen research capacity and innovation across Africa.",icon:"📚",features:["Research methodology training","Data analysis workshops","Scientific writing bootcamps","Policy impact sessions"],link:"/what-we-do/training",color:"#2ecc71"},{title:"For Fellows",description:"Our fellows gain access to mentorship, collaborative labs, and opportunities to publish and present their research.",icon:"🌟",features:["Access to research labs","Mentorship network","Conference presentations","Publication support"],link:"/apply/fellows",color:"#3498db"},{title:"For Mentors",description:"Experienced researchers guide emerging scholars, sharing expertise and building the next generation of African scientists.",icon:"🤝",features:["Shape future researchers","Expand your network","Collaborative opportunities","Recognition and impact"],link:"/apply/mentors",color:"#e74c3c"},{title:"Research Labs",description:"Cutting-edge research facilities focused on solving Africa's most pressing challenges in STEM fields.",icon:"🔬",features:["AI & Data Science Lab","Biotechnology Lab","Renewable Energy Lab","Nanotechnology Lab"],link:"/labs",color:"#9b59b6"},{title:"Community Engagement",description:"Building a vibrant community of researchers, innovators, and change-makers across East Africa.",icon:"🌍",features:["Networking events","Research symposiums","Collaborative projects","Alumni network"],link:"/news",color:"#f1c40f"}],l={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.3}}},o={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}},hover:{y:-8,transition:{duration:.2}}};return r.jsxs("div",{className:"whatwedo-page",children:[r.jsxs("div",{className:"background-wrapper",children:[r.jsx("div",{className:"background-image",style:{backgroundImage:"url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format')"}}),r.jsx("div",{className:"gradient-overlay"}),r.jsx("div",{className:"pattern-overlay"})]}),r.jsxs("div",{className:"container",children:[r.jsxs(j.div,{className:"hero-section",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[r.jsxs("div",{className:"hero-badge",children:[r.jsx("span",{className:"badge-icon",children:"🚀"}),"Our Programs"]}),r.jsx("h1",{className:"page-title",children:"What We Do"}),r.jsx("p",{className:"hero-description",children:"At AkiliBridge, we nurture the next generation of African researcher scholars through fellowship programs, training workshops, and mentorship opportunities. Our comprehensive approach empowers emerging researchers to drive innovation and create lasting impact across the continent."}),r.jsxs("div",{className:"hero-stats",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-number",children:"6"}),r.jsx("span",{className:"stat-label",children:"Core Programs"})]}),r.jsx("div",{className:"stat-divider"}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-number",children:"100+"}),r.jsx("span",{className:"stat-label",children:"Fellows Trained"})]}),r.jsx("div",{className:"stat-divider"}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-number",children:"50+"}),r.jsx("span",{className:"stat-label",children:"Expert Mentors"})]})]})]}),r.jsx(j.div,{className:"programs-grid",variants:l,initial:"hidden",animate:"visible",children:i.map((u,m)=>r.jsxs(j.div,{variants:o,whileHover:"hover",className:"program-card",style:{borderTopColor:u.color},children:[r.jsx("div",{className:"program-icon",style:{background:`${u.color}20`},children:r.jsx("span",{style:{color:u.color},children:u.icon})}),r.jsx("h2",{className:"program-title",style:{color:u.color},children:u.title}),r.jsx("p",{className:"program-description",children:u.description}),r.jsxs("div",{className:"program-features",children:[r.jsx("h4",{className:"features-title",children:"Key Highlights:"}),r.jsx("ul",{className:"features-list",children:u.features.map((f,h)=>r.jsxs("li",{children:[r.jsx("span",{className:"feature-marker",style:{color:u.color},children:"✓"}),f]},h))})]}),r.jsx(hT,{to:u.link,className:"program-link",style:{color:u.color},whileHover:{x:5},children:"Learn More →"})]},m))}),r.jsxs(j.div,{className:"impact-section",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.5},children:[r.jsx("h2",{className:"section-title",children:"Our Impact"}),r.jsxs("div",{className:"impact-stats",children:[r.jsxs("div",{className:"impact-card",children:[r.jsx("div",{className:"impact-number",children:"12"}),r.jsx("div",{className:"impact-label",children:"Months of Training"})]}),r.jsxs("div",{className:"impact-card",children:[r.jsx("div",{className:"impact-number",children:"1:1"}),r.jsx("div",{className:"impact-label",children:"Mentorship Ratio"})]}),r.jsxs("div",{className:"impact-card",children:[r.jsx("div",{className:"impact-number",children:"8"}),r.jsx("div",{className:"impact-label",children:"Research Labs"})]}),r.jsxs("div",{className:"impact-card",children:[r.jsx("div",{className:"impact-number",children:"5+"}),r.jsx("div",{className:"impact-label",children:"East African Countries"})]})]})]}),r.jsxs(j.div,{className:"cta-wrapper",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7},children:[r.jsxs(j.button,{className:"cta-button",whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(255, 106, 0, 0.4)"},whileTap:{scale:.98},onClick:()=>a("/careers/application"),children:[r.jsx("span",{className:"button-text",children:"Join Our Community"}),r.jsx(j.span,{className:"button-icon",animate:{x:[0,5,0]},transition:{repeat:1/0,duration:1.5,ease:"easeInOut"},children:"→"})]}),r.jsx("p",{className:"cta-note",children:"Be part of Africa's research revolution • Apply today"})]})]}),r.jsx("style",{children:`
        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        /* Main Container */
        .whatwedo-page {
          position: relative;
          min-height: 100vh;
          color: #ffffff;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Background Wrapper */
        .background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          animation: slowZoom 25s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(10, 15, 26, 0.94) 0%, rgba(20, 30, 50, 0.9) 100%);
        }

        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 2px, transparent 2px, transparent 8px);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        /* Hero Section */
        .hero-section {
          text-align: center;
          margin-bottom: 4rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 106, 0, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 106, 0, 0.5);
        }

        .badge-icon {
          font-size: 1rem;
        }

        .page-title {
          font-size: clamp(2rem, 8vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #a8e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        .hero-description {
          font-size: clamp(1rem, 3vw, 1.1rem);
          max-width: 800px;
          margin: 0 auto 2rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .stat-label {
          font-size: 0.85rem;
          opacity: 0.8;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.3);
        }

        /* Programs Grid */
        .programs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .program-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.8rem;
          border-top: 4px solid;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }

        .program-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        .program-icon {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.2rem;
        }

        .program-icon span {
          font-size: 2rem;
        }

        .program-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
        }

        .program-description {
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1.2rem;
          opacity: 0.85;
        }

        .program-features {
          margin: 1rem 0;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
        }

        .features-title {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.8rem;
          opacity: 0.7;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .features-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .feature-marker {
          font-weight: bold;
          font-size: 0.9rem;
        }

        .program-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          margin-top: 0.5rem;
          transition: gap 0.3s ease;
        }

        /* Impact Section */
        .impact-section {
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(1.6rem, 5vw, 2rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          margin: 0.5rem auto 0;
          border-radius: 3px;
        }

        .impact-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          text-align: center;
        }

        .impact-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .impact-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 106, 0, 0.1);
        }

        .impact-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 0.5rem;
        }

        .impact-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        /* CTA Section */
        .cta-wrapper {
          text-align: center;
          margin-top: 2rem;
        }

        .cta-button {
          position: relative;
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          border: none;
          border-radius: 50px;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .button-text {
          position: relative;
          z-index: 1;
        }

        .button-icon {
          position: relative;
          z-index: 1;
          font-size: 1.2rem;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-note {
          margin-top: 1rem;
          font-size: 0.85rem;
          opacity: 0.7;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1.5rem;
          }

          .hero-stats {
            gap: 1rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .programs-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .program-card {
            padding: 1.5rem;
          }

          .program-title {
            font-size: 1.2rem;
          }

          .impact-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem 1rem;
          }

          .page-title {
            font-size: 1.8rem;
          }

          .hero-description {
            font-size: 0.9rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 0.8rem;
          }

          .stat-divider {
            width: 50px;
            height: 1px;
          }

          .impact-stats {
            grid-template-columns: 1fr;
          }

          .cta-button {
            padding: 0.8rem 2rem;
            font-size: 0.9rem;
          }
        }
      `})]})}function gT(){const a=Ie();return r.jsxs("div",{className:"apply-page",children:[r.jsxs(j.section,{className:"apply-hero",initial:{opacity:0,y:-40},animate:{opacity:1,y:0},transition:{duration:1},children:[r.jsx("h1",{children:"How to Apply"}),r.jsx("p",{children:"Join the first cohort of our one-year researcher-in-training fellowship for undergraduate students in Rwanda."})]}),r.jsxs(j.section,{className:"apply-section",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:1},children:[r.jsx("h2",{children:"Eligibility"}),r.jsx("p",{children:"Open to undergraduate students in Rwanda who are passionate about STEM and eager to gain hands-on research experience."})]}),r.jsxs(j.section,{className:"apply-section",initial:{opacity:0},animate:{opacity:1},transition:{delay:.8,duration:1},children:[r.jsx("h2",{children:"Application Process"}),r.jsxs("ol",{children:[r.jsx("li",{children:"Complete the online application form."}),r.jsx("li",{children:"Submit your academic details and motivation statement."}),r.jsx("li",{children:"Shortlisted candidates will be invited for interviews."})]})]}),r.jsxs(j.section,{className:"apply-section",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.1,duration:1},children:[r.jsx("h2",{children:"Ready to Apply?"}),r.jsx("p",{children:"Applications are open online. Don’t miss the chance to be part of the first cohort of AkiliBridge Fellows."}),r.jsx(j.button,{className:"apply-btn",whileHover:{scale:1.1},whileTap:{scale:.95},onClick:()=>a("/careers/application"),children:"Apply Now"})]})]})}const yT=[{title:"EdTech & Digital Learning Lab",description:"Learning technologies for equitable STEM education across Africa.",focus:"Adaptive learning; Gamification; Virtual Labs",image:"https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format",color:"#4a90e2"},{title:"Energy Storage & Battery Technology Lab",description:"Reliable storage solutions for mini-grids, mobility, and portable devices.",focus:"Battery chemistries; Grid integration; Sustainable materials",image:"https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070&auto=format",color:"#e67e22"},{title:"Nanotechnology & Advanced Materials Lab",description:"Novel materials for energy, water purification, health, and construction.",focus:"Nanocoatings; Composites; Biomaterials",image:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format",color:"#2ecc71"},{title:"Artificial Intelligence & Data Science Lab",description:"Harnessing AI and machine learning to solve African development challenges.",focus:"Predictive analytics; Computer vision; NLP",image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format",color:"#9b59b6"},{title:"Biotechnology & Health Innovations Lab",description:"Advancing healthcare solutions through cutting-edge biotech research.",focus:"Genomics; Drug discovery; Diagnostic tools",image:"https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=2070&auto=format",color:"#e74c3c"},{title:"Renewable Energy Systems Lab",description:"Developing sustainable energy solutions for off-grid communities.",focus:"Solar tech; Wind energy; Hybrid systems",image:"https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format",color:"#f1c40f"},{title:"Civil & Environmental Engineering Lab",description:"Infrastructure solutions for sustainable urban and rural development.",focus:"Smart materials; Water systems; Green construction",image:"https://images.unsplash.com/photo-1577972830832-2dd2c7b7f50c?q=80&w=2070&auto=format",color:"#3498db"},{title:"ICT & Emerging Technologies Lab",description:"Exploring next-gen technologies for digital transformation in Africa.",focus:"IoT; Blockchain; 5G; Cloud computing",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format",color:"#1abc9c"}];function bT(){const a=Ie(),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},l={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}},hover:{y:-10,transition:{duration:.3}}};return r.jsxs("div",{className:"labs-page",children:[r.jsxs("div",{className:"background-wrapper",children:[r.jsx("div",{className:"background-image",style:{backgroundImage:"url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format')"}}),r.jsx("div",{className:"gradient-overlay"}),r.jsx("div",{className:"pattern-overlay"})]}),r.jsxs("div",{className:"container",children:[r.jsxs(j.div,{className:"hero-section",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[r.jsxs("div",{className:"hero-badge",children:[r.jsx("span",{className:"badge-icon",children:"🔬"}),"Innovation Hubs"]}),r.jsx("h1",{className:"page-title",children:"Our Innovation Labs"}),r.jsx("p",{className:"hero-description",children:"Discover our cutting-edge research laboratories where African researchers are developing innovative solutions to address the continent's most pressing challenges. Each lab is equipped with state-of-the-art facilities and led by world-class experts."}),r.jsxs("div",{className:"hero-stats",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-number",children:"8"}),r.jsx("span",{className:"stat-label",children:"Research Labs"})]}),r.jsx("div",{className:"stat-divider"}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-number",children:"50+"}),r.jsx("span",{className:"stat-label",children:"Active Projects"})]}),r.jsx("div",{className:"stat-divider"}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-number",children:"100+"}),r.jsx("span",{className:"stat-label",children:"Researchers"})]})]})]}),r.jsx(j.div,{className:"labs-grid",variants:i,initial:"hidden",animate:"visible",children:yT.map((o,u)=>r.jsxs(j.div,{variants:l,whileHover:"hover",className:"lab-card",style:{borderTopColor:o.color},children:[r.jsxs("div",{className:"lab-image-container",children:[r.jsx("img",{src:o.image,alt:o.title,className:"lab-image"}),r.jsx("div",{className:"lab-overlay",style:{background:`linear-gradient(135deg, ${o.color}80, transparent)`}}),r.jsx("div",{className:"lab-badge",style:{background:o.color},children:u+1})]}),r.jsxs("div",{className:"lab-content",children:[r.jsx("h2",{className:"lab-title",style:{color:o.color},children:o.title}),r.jsx("p",{className:"lab-description",children:o.description}),r.jsxs("div",{className:"lab-focus",children:[r.jsx("span",{className:"focus-label",children:"Focus Areas:"}),r.jsx("p",{className:"focus-text",children:o.focus})]}),r.jsx(j.a,{href:"#",className:"lab-link",style:{color:o.color},whileHover:{x:5},onClick:m=>{m.preventDefault(),a("/careers/application")},children:"Explore Lab →"})]})]},u))}),r.jsxs(j.div,{className:"cta-wrapper",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},children:[r.jsxs(j.button,{className:"cta-button",whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(255, 106, 0, 0.4)"},whileTap:{scale:.98},onClick:()=>a("/careers/application"),children:[r.jsx("span",{className:"button-text",children:"Join a Research Lab"}),r.jsx(j.span,{className:"button-icon",animate:{x:[0,5,0]},transition:{repeat:1/0,duration:1.5,ease:"easeInOut"},children:"→"})]}),r.jsx("p",{className:"cta-note",children:"Collaborate with our researchers • Open positions available"})]})]}),r.jsx("style",{children:`
        /* Main Container */
        .labs-page {
          position: relative;
          min-height: 100vh;
          color: #ffffff;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Background Wrapper */
        .background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          animation: slowZoom 25s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(10, 15, 26, 0.94) 0%, rgba(20, 30, 50, 0.9) 100%);
        }

        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 2px, transparent 2px, transparent 8px);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        /* Hero Section */
        .hero-section {
          text-align: center;
          margin-bottom: 4rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 106, 0, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 106, 0, 0.5);
        }

        .badge-icon {
          font-size: 1rem;
        }

        .page-title {
          font-size: clamp(2rem, 8vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #a8e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        .hero-description {
          font-size: clamp(1rem, 3vw, 1.1rem);
          max-width: 800px;
          margin: 0 auto 2rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .stat-label {
          font-size: 0.85rem;
          opacity: 0.8;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.3);
        }

        /* Labs Grid */
        .labs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .lab-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          overflow: hidden;
          border-top: 4px solid;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }

        .lab-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        .lab-image-container {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .lab-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .lab-card:hover .lab-image {
          transform: scale(1.1);
        }

        .lab-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.4;
          transition: opacity 0.3s ease;
        }

        .lab-card:hover .lab-overlay {
          opacity: 0.2;
        }

        .lab-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.9rem;
          color: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .lab-content {
          padding: 1.5rem;
        }

        .lab-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          transition: color 0.3s ease;
        }

        .lab-description {
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          opacity: 0.85;
        }

        .lab-focus {
          margin-bottom: 1.2rem;
          padding: 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
        }

        .focus-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.7;
          display: block;
          margin-bottom: 0.3rem;
        }

        .focus-text {
          font-size: 0.85rem;
          margin: 0;
          line-height: 1.4;
        }

        .lab-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .lab-link:hover {
          gap: 0.8rem;
        }

        /* CTA Section */
        .cta-wrapper {
          text-align: center;
          margin-top: 2rem;
        }

        .cta-button {
          position: relative;
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          border: none;
          border-radius: 50px;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .button-text {
          position: relative;
          z-index: 1;
        }

        .button-icon {
          position: relative;
          z-index: 1;
          font-size: 1.2rem;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-note {
          margin-top: 1rem;
          font-size: 0.85rem;
          opacity: 0.7;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1.5rem;
          }

          .hero-stats {
            gap: 1rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .labs-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .lab-image-container {
            height: 200px;
          }

          .lab-title {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem 1rem;
          }

          .page-title {
            font-size: 1.8rem;
          }

          .hero-description {
            font-size: 0.9rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 0.8rem;
          }

          .stat-divider {
            width: 50px;
            height: 1px;
          }

          .lab-content {
            padding: 1.2rem;
          }

          .lab-title {
            font-size: 1.1rem;
          }

          .cta-button {
            padding: 0.8rem 1.8rem;
            font-size: 0.9rem;
          }
        }

        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `})]})}function vT(){const a=Ie();return r.jsxs("div",{className:"careers-page",children:[r.jsxs(j.section,{className:"careers-hero",initial:{opacity:0,y:-40},animate:{opacity:1,y:0},transition:{duration:1},children:[r.jsx("h1",{children:"Careers at AkiliBridge"}),r.jsx("p",{children:"Join us in building Africa’s next generation of researchers and innovators."})]}),r.jsxs(j.section,{className:"careers-section",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:1},children:[r.jsx("h2",{children:"Why Work With Us?"}),r.jsx("p",{children:"At AkiliBridge, we believe in nurturing talent, fostering innovation, and creating opportunities for growth. Our team is dedicated to empowering African scholars through mentorship, training, and impactful research programs."})]}),r.jsxs(j.section,{className:"careers-section",initial:{opacity:0},animate:{opacity:1},transition:{delay:.8,duration:1},children:[r.jsx("h2",{children:"Current Opportunities"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Program Coordinator – STEM Fellowship"}),r.jsx("li",{children:"Research Mentor – Labs Division"}),r.jsx("li",{children:"Communications & Outreach Officer"})]}),r.jsx("p",{children:"More roles will be announced soon. Stay tuned for updates in our News & Announcements section."})]}),r.jsxs(j.section,{className:"careers-section",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.1,duration:1},children:[r.jsx("h2",{children:"How to Apply"}),r.jsx("p",{children:"Interested candidates can submit their applications online. Share your CV and a short motivation statement explaining why you want to join AkiliBridge."}),r.jsx(j.button,{className:"careers-btn",whileHover:{scale:1.1},whileTap:{scale:.95},onClick:()=>a("/careers/application"),children:"Apply Now"})]})]})}const xT=j.create(Ot);function wT(){const[a,i]=S.useState([]),[l,o]=S.useState(""),[u,m]=S.useState([]),[f,h]=S.useState(!1),[g,p]=S.useState(""),[b,v]=S.useState({firstName:"",lastName:"",email:"",role:"Fellow"});S.useEffect(()=>{(async()=>{try{const R=await Xe("/api/blog/");if(!R.ok)throw new Error("Failed to fetch posts");const q=(await R.json()).map(P=>({id:P.id,title:P.title,excerpt:P.excerpt||(P.body?P.body.substring(0,120)+"...":""),date:new Date(P.created_at).toLocaleDateString(),category:P.category||"General",author:P.author||"Unknown",image:P.image?P.image:"https://via.placeholder.com/600x400",link:`/blog/${P.id}`}));i(q),m(q)}catch(R){console.error("Error fetching posts:",R)}})()},[]),S.useEffect(()=>{const M=a.filter(R=>R.title.toLowerCase().includes(l.toLowerCase())||R.excerpt.toLowerCase().includes(l.toLowerCase())||R.category.toLowerCase().includes(l.toLowerCase()));m(M)},[l,a]);const w=async M=>{if(M.preventDefault(),p(""),b.email){try{const R=await Xe("/api/fellowship/newsletter-subscriptions/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:b.firstName,last_name:b.lastName,email:b.email,role:b.role||"Subscriber",source:"news"})});if(!R.ok){const L=await R.json().catch(()=>null),q=Array.isArray(L?.email)?L.email.join(", "):null;throw new Error(q||L?.detail||"Subscription failed.")}h(!0),setTimeout(()=>h(!1),5e3),v({firstName:"",lastName:"",email:"",role:"Fellow"})}catch(R){p(R.message||"Subscription failed.")}return}p("Email is required.")},T=M=>{const{name:R,value:L}=M.target;v({...b,[R]:L})},C={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},N={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}},hover:{y:-8,transition:{duration:.2}}},A=M=>({Announcement:"#ff6a00",Event:"#2ecc71",Update:"#3498db",Partnership:"#9b59b6",Spotlight:"#e74c3c"})[M]||"#ff6a00";return r.jsxs("div",{className:"whats-new",children:[r.jsxs("div",{className:"background-wrapper",children:[r.jsx("div",{className:"background-image",style:{backgroundImage:"url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format')"}}),r.jsx("div",{className:"gradient-overlay"}),r.jsx("div",{className:"pattern-overlay"})]}),r.jsxs("div",{className:"container",children:[r.jsxs(j.div,{className:"hero-section",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[r.jsxs("div",{className:"hero-badge",children:[r.jsx("span",{className:"badge-icon",children:"📰"}),"Latest Updates"]}),r.jsx("h1",{className:"page-title",children:"What's New"}),r.jsx("p",{className:"hero-description",children:"Stay updated with the latest news, announcements, and events from AkiliBridge. Discover opportunities, success stories, and groundbreaking research from our community."})]}),r.jsxs(j.div,{className:"search-section",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[r.jsxs("div",{className:"search-container",children:[r.jsx("span",{className:"search-icon",children:"🔍"}),r.jsx("input",{type:"text",placeholder:"Search news, announcements, events...",value:l,onChange:M=>o(M.target.value),className:"search-input"}),l&&r.jsx("button",{className:"search-clear",onClick:()=>o(""),children:"✕"})]}),r.jsxs("p",{className:"search-results",children:[u.length," ",u.length===1?"post":"posts"," found"]})]}),r.jsx(dt,{children:u.length>0?r.jsx(j.div,{className:"posts-grid",variants:C,initial:"hidden",animate:"visible",children:u.map((M,R)=>r.jsxs(j.article,{variants:N,whileHover:"hover",className:"post-card",children:[r.jsxs("div",{className:"post-image-container",children:[r.jsx("img",{src:M.image,alt:M.title,className:"post-image"}),r.jsx("div",{className:"post-category",style:{background:A(M.category)},children:M.category}),r.jsx("div",{className:"post-overlay"})]}),r.jsxs("div",{className:"post-content",children:[r.jsxs("div",{className:"post-meta",children:[r.jsxs("span",{className:"post-date",children:["📅 ",M.date]}),r.jsxs("span",{className:"post-author",children:["✍️ ",M.author]})]}),r.jsx("h2",{className:"post-title",children:M.title}),r.jsx("p",{className:"post-excerpt",children:M.excerpt}),r.jsx(xT,{to:M.link,className:"post-link",whileHover:{x:5},children:"Read More →"})]})]},M.id))}):r.jsxs(j.div,{className:"no-posts",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0},children:[r.jsx("div",{className:"no-posts-icon",children:"🔍"}),r.jsx("h2",{children:"No Posts Found"}),r.jsxs("p",{children:[`We couldn't find any posts matching "`,l,'"']}),r.jsx("button",{className:"clear-search-btn",onClick:()=>o(""),children:"Clear Search"})]})}),r.jsx(j.div,{className:"subscription-section",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:r.jsxs("div",{className:"subscription-card",children:[r.jsxs("div",{className:"subscription-header",children:[r.jsx("span",{className:"subscription-icon",children:"📧"}),r.jsx("h2",{className:"subscription-title",children:"Subscribe for Updates"}),r.jsx("p",{className:"subscription-description",children:"Get the latest news and announcements delivered straight to your inbox"})]}),r.jsxs("form",{onSubmit:w,className:"subscription-form",children:[r.jsxs("div",{className:"form-row",children:[r.jsx("div",{className:"form-group",children:r.jsx("input",{type:"text",name:"firstName",placeholder:"First Name",value:b.firstName,onChange:T,className:"form-input"})}),r.jsx("div",{className:"form-group",children:r.jsx("input",{type:"text",name:"lastName",placeholder:"Last Name",value:b.lastName,onChange:T,className:"form-input"})})]}),r.jsxs("div",{className:"form-row",children:[r.jsx("div",{className:"form-group",children:r.jsx("input",{type:"email",name:"email",placeholder:"Email Address *",required:!0,value:b.email,onChange:T,className:"form-input"})}),r.jsx("div",{className:"form-group",children:r.jsxs("select",{name:"role",value:b.role,onChange:T,className:"form-select",children:[r.jsx("option",{children:"Fellow"}),r.jsx("option",{children:"Mentor"}),r.jsx("option",{children:"Researcher"}),r.jsx("option",{children:"Partner"})]})})]}),r.jsxs(j.button,{type:"submit",className:"subscribe-button",whileHover:{scale:1.02},whileTap:{scale:.98},children:["Subscribe Now",r.jsx("span",{className:"button-icon",children:"→"})]})]}),r.jsx(dt,{children:f&&r.jsx(j.div,{className:"success-message",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:"✓ Successfully subscribed! Check your email for confirmation."})}),r.jsx(dt,{children:g&&r.jsx(j.div,{className:"success-message",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},style:{background:"rgba(231, 76, 60, 0.2)",borderColor:"#e74c3c",color:"#ffb3b3"},children:g})})]})})]}),r.jsx("style",{children:`
        /* Main Container */
        .whats-new {
          position: relative;
          min-height: 100vh;
          color: #ffffff;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Background Wrapper */
        .background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          animation: slowZoom 25s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(10, 15, 26, 0.94) 0%, rgba(20, 30, 50, 0.9) 100%);
        }

        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 2px, transparent 2px, transparent 8px);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        /* Hero Section */
        .hero-section {
          text-align: center;
          margin-bottom: 3rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 106, 0, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 106, 0, 0.5);
        }

        .badge-icon {
          font-size: 1rem;
        }

        .page-title {
          font-size: clamp(2rem, 8vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #a8e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        .hero-description {
          font-size: clamp(1rem, 3vw, 1.1rem);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          opacity: 0.9;
        }

        /* Search Section */
        .search-section {
          margin-bottom: 3rem;
        }

        .search-container {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.1rem;
          opacity: 0.6;
        }

        .search-input {
          width: 100%;
          padding: 1rem 1rem 1rem 2.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #ff6a00;
          background: rgba(255, 106, 0, 0.1);
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .search-clear {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .search-clear:hover {
          color: #ff6a00;
        }

        .search-results {
          text-align: center;
          margin-top: 0.8rem;
          font-size: 0.85rem;
          opacity: 0.7;
        }

        /* Posts Grid */
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .post-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .post-card:hover {
          border-color: rgba(255, 106, 0, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .post-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .post-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .post-card:hover .post-image {
          transform: scale(1.1);
        }

        .post-category {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .post-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.7));
        }

        .post-content {
          padding: 1.5rem;
        }

        .post-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.8rem;
          font-size: 0.75rem;
          opacity: 0.7;
        }

        .post-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          line-height: 1.4;
        }

        .post-excerpt {
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          opacity: 0.85;
        }

        .post-link {
          color: #ff6a00;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          transition: gap 0.3s ease;
        }

        /* No Posts */
        .no-posts {
          text-align: center;
          padding: 3rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          margin-bottom: 4rem;
        }

        .no-posts-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .no-posts h2 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .no-posts p {
          margin-bottom: 1rem;
          opacity: 0.7;
        }

        .clear-search-btn {
          padding: 0.6rem 1.5rem;
          background: rgba(255, 106, 0, 0.2);
          border: 1px solid #ff6a00;
          border-radius: 25px;
          color: #ff6a00;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .clear-search-btn:hover {
          background: rgba(255, 106, 0, 0.4);
        }

        /* Subscription Section */
        .subscription-section {
          margin-top: 2rem;
        }

        .subscription-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .subscription-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .subscription-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 0.5rem;
        }

        .subscription-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .subscription-description {
          font-size: 0.85rem;
          opacity: 0.7;
        }

        .subscription-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          flex: 1;
        }

        .form-input,
        .form-select {
          width: 100%;
          padding: 0.8rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          color: #ffffff;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-select:focus {
          outline: none;
          border-color: #ff6a00;
          background: rgba(255, 106, 0, 0.1);
        }

        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .subscribe-button {
          width: 100%;
          padding: 0.8rem;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          border: none;
          border-radius: 10px;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .button-icon {
          font-size: 1rem;
          transition: transform 0.3s ease;
        }

        .subscribe-button:hover .button-icon {
          transform: translateX(5px);
        }

        .success-message {
          margin-top: 1rem;
          padding: 0.8rem;
          background: rgba(76, 175, 80, 0.2);
          border: 1px solid #4caf50;
          border-radius: 10px;
          color: #4caf50;
          text-align: center;
          font-size: 0.85rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1.5rem;
          }

          .posts-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0.8rem;
          }

          .subscription-card {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem 1rem;
          }

          .page-title {
            font-size: 1.8rem;
          }

          .post-title {
            font-size: 1.1rem;
          }

          .subscription-title {
            font-size: 1.3rem;
          }
        }

        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `})]})}function jT(a){return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...a,children:[r.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),r.jsx("path",{d:"m3 7 9 6 9-6"})]})}function ST(a){return r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",...a,children:r.jsx("path",{d:"M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V11H7.5v3h2.8v8h3.2Z"})})}function NT(a){return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...a,children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"5"}),r.jsx("circle",{cx:"12",cy:"12",r:"4"}),r.jsx("circle",{cx:"17.5",cy:"6.5",r:"1",fill:"currentColor",stroke:"none"})]})}function TT(a){return r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",...a,children:r.jsx("path",{d:"M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.3L6.5 22H3.4l7.3-8.4L1 2h6.2l4.3 5.8L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z"})})}function AT(a){return r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",...a,children:r.jsx("path",{d:"M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56a1.96 1.96 0 1 0-3.92 0 1.96 1.96 0 0 0 3.92 0ZM20.44 20h-3.38v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.66V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.22-1.77 3.44 0 4.07 2.26 4.07 5.2V20Z"})})}function CT(a){return r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",...a,children:r.jsx("path",{d:"M20.52 3.48A11.9 11.9 0 0 0 12.07 0C5.5 0 .14 5.36.14 11.94c0 2.1.55 4.14 1.6 5.94L0 24l6.3-1.65a11.93 11.93 0 0 0 5.77 1.48h.01c6.57 0 11.93-5.36 11.93-11.94 0-3.18-1.24-6.17-3.49-8.41Zm-8.45 18.34h-.01a9.94 9.94 0 0 1-5.07-1.39l-.36-.22-3.74.98 1-3.64-.24-.37a9.96 9.96 0 0 1-1.53-5.3c0-5.49 4.47-9.96 9.97-9.96 2.66 0 5.16 1.03 7.03 2.91a9.86 9.86 0 0 1 2.92 7.04c0 5.49-4.48 9.95-9.97 9.95Zm5.46-7.45c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.16-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.39-1.48-.88-.78-1.48-1.74-1.66-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.91-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.79.38-.27.3-1.04 1.01-1.04 2.47s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.1 4.5.71.31 1.27.5 1.7.65.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.35Z"})})}const ET="data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22%2017C15%2017%2010%2022%2010%2029C10%2035%2014%2039%2019%2040C19%2046%2023%2051%2029%2051C35%2051%2039%2047%2040%2042C49%2042%2056%2036%2056%2027C56%2018%2049%2011%2040%2011C35%2011%2031%2013%2028%2016C26%2015%2024%2015%2022%2017Z'%20stroke='%231F5D50'%20stroke-width='4.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M20%2027C23%2024%2028%2024%2031%2027'%20stroke='%231F5D50'%20stroke-width='3.8'%20stroke-linecap='round'/%3e%3cpath%20d='M30%2021C34%2019%2040%2020%2043%2025'%20stroke='%231F5D50'%20stroke-width='3.8'%20stroke-linecap='round'/%3e%3cpath%20d='M23%2039C29%2040%2035%2039%2041%2035'%20stroke='%231F5D50'%20stroke-width='3.8'%20stroke-linecap='round'/%3e%3cpath%20d='M27%2045C30%2042%2033%2039%2034%2033'%20stroke='%231F5D50'%20stroke-width='3.8'%20stroke-linecap='round'/%3e%3c/svg%3e",kT=j.create(Ot);function zT(){const a=S.useRef(null),i=iT(a,{once:!0,amount:.2}),[l,o]=S.useState(""),[u,m]=S.useState(!1),[f,h]=S.useState(""),g=async C=>{if(C.preventDefault(),h(""),l&&l.includes("@")){try{const N=await Xe("/api/fellowship/newsletter-subscriptions/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,role:"Subscriber",source:"footer"})});if(!N.ok){const A=await N.json().catch(()=>null),M=Array.isArray(A?.email)?A.email.join(", "):null;throw new Error(M||A?.detail||"Subscription failed.")}m(!0),setTimeout(()=>m(!1),3e3),o("")}catch(N){h(N.message||"Subscription failed.")}return}h("Enter a valid email address.")},p={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15,delayChildren:.2,duration:.6}}},b={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},v={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.3}},hover:{x:8,color:"#2fb3ff",transition:{duration:.2}}},w={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.3}},hover:{scale:1.05,y:-3,transition:{duration:.2}}},T=[{name:"Facebook",icon:ST,link:"#"},{name:"Instagram",icon:NT,link:"#"},{name:"X",icon:TT,link:"#"},{name:"LinkedIn",icon:AT,link:"#"}];return r.jsxs(j.footer,{ref:a,className:"footer",initial:"hidden",animate:i?"visible":"hidden",variants:p,style:{backgroundImage:"url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed",position:"relative"},children:[r.jsx(j.div,{className:"footer-overlay",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},style:{position:"absolute",inset:0,background:"linear-gradient(135deg, rgba(10, 20, 40, 0.95) 0%, rgba(5, 15, 30, 0.92) 100%)",zIndex:0}}),r.jsxs("div",{className:"footer-content",style:{position:"relative",zIndex:1},children:[r.jsxs(j.div,{className:"footer-logo-section",variants:b,whileHover:{scale:1.02},children:[r.jsxs(j.div,{className:"footer-logo",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.2},whileHover:{textShadow:"0 0 20px rgba(255,217,102,0.5)"},children:["Akili ",r.jsx("span",{children:"Bridge"})]}),r.jsx(j.p,{variants:b,initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},style:{lineHeight:1.6},children:"Building stronger pathways for African researchers through mentorship, training, and opportunity."})]}),r.jsxs(j.div,{className:"quick-links",variants:b,children:[r.jsxs(j.h4,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.4},style:{fontSize:"1.2rem",marginBottom:"1rem",color:"#2fb3ff",position:"relative",display:"inline-block"},children:["Quick Links",r.jsx(j.span,{initial:{width:0},animate:{width:"100%"},transition:{delay:.6,duration:.5},style:{position:"absolute",bottom:-5,left:0,height:"2px",background:"#2fb3ff",borderRadius:"2px"}})]}),r.jsx("ul",{style:{listStyle:"none",padding:0},children:[{name:"Who We Are",path:"/about/who-we-are"},{name:"Get to Know Us",path:"/about/get-to-know-us"},{name:"Fellowship Program",path:"/what-we-do/fellowship"},{name:"Training & Workshops",path:"/what-we-do/training"},{name:"For Fellows",path:"/apply/fellows"}].map((C,N)=>r.jsx(j.li,{variants:v,whileHover:"hover",custom:N,style:{marginBottom:"0.75rem"},children:r.jsx(kT,{to:C.path,style:{color:"#ffffff",textDecoration:"none",transition:"color 0.2s",display:"inline-block"},whileHover:{color:"#2fb3ff"},children:C.name})},C.name))})]}),r.jsxs(j.div,{className:"newsletter",variants:b,children:[r.jsxs(j.h4,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:.5},style:{marginBottom:"1rem",color:"#2fb3ff",display:"flex",alignItems:"center",gap:"0.5rem"},children:[r.jsx(jT,{style:{width:"1rem",height:"1rem"}}),"Subscribe for updates"]}),r.jsxs(j.form,{onSubmit:g,style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[r.jsx(j.input,{type:"email",placeholder:"Enter your official email address",value:l,onChange:C=>o(C.target.value),whileFocus:{scale:1.02,boxShadow:"0 0 0 2px #2fb3ff"},style:{flex:1,padding:"12px 16px",borderRadius:"8px",border:"none",background:"rgba(255,255,255,0.1)",color:"#ffffff",fontSize:"0.9rem",outline:"none",transition:"all 0.2s"}}),r.jsx(j.button,{type:"submit",whileHover:{scale:1.05,backgroundColor:"#2fb3ff",color:"#1a2a3a"},whileTap:{scale:.95},animate:u?{scale:[1,1.1,1]}:{},style:{padding:"12px 24px",borderRadius:"8px",border:"none",background:"#2fb3ff",color:"#1a2a3a",fontWeight:"bold",cursor:"pointer",transition:"all 0.2s"},children:u?"Subscribed":"Subscribe"})]}),u&&r.jsx(j.p,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},style:{marginTop:"10px",color:"#2fb3ff",fontSize:"0.85rem"},children:"Thanks for subscribing."}),f&&r.jsx(j.p,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},style:{marginTop:"10px",color:"#ffb3b3",fontSize:"0.85rem"},children:f})]}),r.jsxs(j.div,{className:"socials",variants:b,children:[r.jsx(j.h4,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6},style:{marginBottom:"1rem",color:"#2fb3ff"},children:"Connect With Us"}),r.jsx("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:T.map(C=>{const N=C.icon;return r.jsxs(j.a,{href:C.link,variants:w,whileHover:"hover",style:{display:"flex",alignItems:"center",gap:"8px",color:"#ffffff",textDecoration:"none",padding:"8px 16px",borderRadius:"25px",background:"rgba(255,255,255,0.1)",transition:"all 0.2s"},children:[r.jsx(j.span,{animate:{rotate:[0,360]},transition:{duration:20,repeat:1/0,ease:"linear"},style:{display:"inline-flex"},children:r.jsx(N,{style:{width:"1.15rem",height:"1.15rem"}})}),C.name]},C.name)})})]})]}),r.jsxs(j.div,{className:"footer-bottom",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,duration:.5},style:{position:"relative",zIndex:1,borderTop:"1px solid rgba(255,217,102,0.2)",marginTop:"2rem",paddingTop:"1.5rem",textAlign:"center"},children:[r.jsx(j.div,{style:{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:"0%",height:"1px",background:"#2fb3ff"},animate:{width:"50%"},transition:{delay:.9,duration:.8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"12px",flexWrap:"wrap",fontSize:"0.85rem",alignItems:"center"},children:[r.jsx("img",{src:ET,alt:"AkiliBridge logo",style:{height:"24px"}}),r.jsx(j.p,{whileHover:{color:"#2fb3ff"},children:"© 2025 | AkiliBridge | All Rights Reserved."}),r.jsx(j.p,{whileHover:{color:"#2fb3ff"},children:"StaffWEBMAIL | WebAdmin"}),r.jsx(j.p,{whileHover:{color:"#2fb3ff"},children:"Built by AkiliBridge"})]})]}),r.jsx(j.div,{className:"footer-particles",style:{position:"absolute",bottom:0,left:0,right:0,height:"100%",pointerEvents:"none",overflow:"hidden",zIndex:0},children:[...Array(20)].map((C,N)=>r.jsx(j.div,{style:{position:"absolute",width:`${Math.random()*4+2}px`,height:`${Math.random()*4+2}px`,background:`rgba(255,217,102,${Math.random()*.3+.1})`,borderRadius:"50%",bottom:`${Math.random()*100}%`,left:`${Math.random()*100}%`},animate:{y:[0,-Math.random()*100-50],opacity:[0,.5,0]},transition:{duration:Math.random()*5+3,repeat:1/0,delay:Math.random()*5}},N))})]})}function MT(){const{id:a}=zd(),[i,l]=S.useState(null),[o,u]=S.useState("");return S.useEffect(()=>{(async()=>{try{u("");const f=await Xe(`/api/blog/${a}/`);if(!f.ok)throw new Error("Failed to fetch post");const h=await f.json();l(h)}catch(f){console.error("Error fetching post:",f),u(f.message||"Failed to fetch post")}})()},[a]),i?r.jsxs("div",{className:"blog-detail",children:[r.jsxs(j.div,{className:"blog-header",initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:.6},children:[r.jsx("h1",{className:"blog-title",children:i.title}),r.jsxs("div",{className:"blog-meta",children:[r.jsxs("span",{children:["📅 ",new Date(i.created_at).toLocaleDateString()]}),r.jsxs("span",{children:["✍️ ",i.author]}),r.jsx("span",{className:"blog-category",children:i.category})]})]}),i.image&&r.jsx(j.img,{src:i.image,alt:i.title,className:"blog-image",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8}}),r.jsxs(j.div,{className:"blog-body",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.2},children:[r.jsx("p",{children:r.jsx(Ot,{to:"/news",children:"Back to news"})}),r.jsx("p",{children:i.body})]})]}):r.jsx("p",{children:o||"Loading post..."})}const DT="https://api.whatsapp.com/send?phone=17859799051&text=Hello%20Akili%20Bridge%2C%20I%20would%20like%20to%20learn%20more.";function RT(){return r.jsxs(j.a,{href:DT,target:"_blank",rel:"noreferrer",className:"whatsapp-float","aria-label":"Contact AkiliBridge on WhatsApp",initial:{opacity:0,scale:.85,y:24},animate:{opacity:1,scale:1,y:0},transition:{duration:.4,ease:"easeOut",delay:.2},whileHover:{scale:1.06,y:-2},whileTap:{scale:.97},children:[r.jsx("span",{className:"whatsapp-float__halo"}),r.jsxs("span",{className:"whatsapp-float__content",children:[r.jsx(CT,{className:"whatsapp-float__icon"}),r.jsx("span",{className:"whatsapp-float__label",children:"WhatsApp"})]})]})}function OT(){const a=Ie(),i=[{title:"Limited Indigenous Research Investment and Training",description:"There is a notable shortfall in quality research training and resources at the university level. Underinvestment in local institutions means many emerging scholars lack robust, ethical, and practical training to develop high-caliber, contextually relevant research."},{title:"Brain Drain",description:"The scarcity of local opportunities has led many of Africa's brightest minds to seek prospects abroad. Approximately 30% of African scientists leave the continent each year, further depleting research capacity."},{title:"Over-Reliance on Western Collaboration and Funding",description:"Much of Africa's research is funded by foreign donors with their own agendas, often sidelining issues most pertinent to local development. This reliance sometimes produces outputs misaligned with Africa's needs."},{title:"Policy and Infrastructure Gaps",description:"A lack of strong policy frameworks and dedicated funding exacerbates challenges. Without cohesive institutional support, efforts to transform knowledge into sustainable development outcomes remain fragmented."}],l={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15,delayChildren:.3}}},o={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},u={hidden:{opacity:0,x:-30},visible:m=>({opacity:1,x:0,transition:{delay:m*.1,duration:.5,ease:"easeOut"}}),hover:{y:-8,transition:{duration:.3}}};return r.jsxs("div",{className:"get-to-know-us",children:[r.jsxs("div",{className:"page-bg",children:[r.jsx("div",{className:"gradient-orb orb-1"}),r.jsx("div",{className:"gradient-orb orb-2"}),r.jsx("div",{className:"gradient-orb orb-3"})]}),r.jsxs("div",{className:"container",children:[r.jsx(j.h1,{className:"page-title",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:"About Us"}),r.jsxs(j.div,{className:"tagline-wrapper",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.2},children:[r.jsx("h2",{className:"tagline",children:"Bridging Africa's Research Gap"}),r.jsx("div",{className:"tagline-underline"})]}),r.jsxs(j.section,{className:"intro-section",variants:o,initial:"hidden",animate:"visible",children:[r.jsxs("div",{className:"stat-badge",children:[r.jsx("span",{className:"stat-number",children:"17%"}),r.jsx("span",{className:"stat-label",children:"of global population"}),r.jsx("div",{className:"stat-divider"}),r.jsx("span",{className:"stat-number",children:"<2%"}),r.jsx("span",{className:"stat-label",children:"of research output"})]}),r.jsx("p",{className:"intro-text",children:"Despite representing roughly 17% of the global population, Africa contributes less than 2% to the world's research output — a stark indicator of underdeveloped research capacity. This imbalance is compounded by concentration of efforts in just a few countries, leaving many regions with limited representation and opportunity."})]}),r.jsxs(j.section,{className:"challenges-section",variants:l,initial:"hidden",animate:"visible",children:[r.jsx(j.h2,{className:"section-title",variants:o,children:"Challenges We Address"}),r.jsx("div",{className:"challenges-grid",children:i.map((m,f)=>r.jsxs(j.div,{custom:f,variants:u,initial:"hidden",animate:"visible",whileHover:"hover",className:"challenge-card",children:[r.jsx("div",{className:"card-icon",children:r.jsx("span",{className:"icon-number",children:String(f+1).padStart(2,"0")})}),r.jsx("h3",{className:"card-title",children:m.title}),r.jsx("p",{className:"card-description",children:m.description}),r.jsx("div",{className:"card-hover-effect"})]},f))})]}),r.jsx(j.section,{className:"mission-section",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.7,delay:.6},children:r.jsxs("div",{className:"mission-content",children:[r.jsx("div",{className:"mission-icon",children:"🎯"}),r.jsx("h2",{className:"section-title",children:"Our Mission"}),r.jsx("p",{className:"mission-text",children:"At AkiliBridge, we are committed to reversing these trends. Our mission is to empower emerging African researchers by providing comprehensive training, mentorship, and resources. By fostering a vibrant, indigenous research culture, we aim to catalyze innovative solutions directly aligned with Africa's unique challenges and opportunities."})]})}),r.jsx(j.div,{className:"cta-wrapper",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.9},children:r.jsxs(j.button,{className:"cta-button",whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(255, 106, 0, 0.4)"},whileTap:{scale:.98},onClick:()=>a("/careers/application"),children:[r.jsx("span",{className:"button-text",children:"Get Involved"}),r.jsx(j.span,{className:"button-icon",animate:{x:[0,5,0]},transition:{repeat:1/0,duration:1.5,ease:"easeInOut"},children:"→"})]})})]}),r.jsx("style",{children:`
        /* Main Container */
        .get-to-know-us {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0f1a 0%, #0a1a2f 100%);
          color: #ffffff;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Animated Background Orbs */
        .page-bg {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 106, 0, 0.4), rgba(255, 106, 0, 0));
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0, 114, 255, 0.3), rgba(0, 114, 255, 0));
          bottom: -250px;
          right: -250px;
          animation-delay: 5s;
        }

        .orb-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(238, 9, 121, 0.3), rgba(238, 9, 121, 0));
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 10s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        /* Title Styles */
        .page-title {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #a8e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        /* Tagline Styles */
        .tagline-wrapper {
          text-align: center;
          margin-bottom: 3rem;
        }

        .tagline {
          font-size: clamp(1.2rem, 4vw, 1.8rem);
          font-weight: 600;
          color: #ff6a00;
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .tagline-underline {
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          margin: 0.5rem auto 0;
          border-radius: 3px;
          animation: expandWidth 0.6s ease-out;
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 80px;
          }
        }

        /* Intro Section */
        .intro-section {
          margin-bottom: 4rem;
        }

        .stat-badge {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 1.5rem 2rem;
          border-radius: 60px;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #d9b26a, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .stat-divider {
          width: 1px;
          height: 30px;
          background: rgba(255, 255, 255, 0.3);
        }

        .intro-text {
          font-size: 1.1rem;
          line-height: 1.8;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          opacity: 0.9;
        }

        /* Section Title */
        .section-title {
          font-size: clamp(1.8rem, 5vw, 2.5rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
          display: inline-block;
          width: 100%;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          margin: 0.5rem auto 0;
          border-radius: 3px;
        }

        /* Challenges Grid */
        .challenges-section {
          margin-bottom: 4rem;
        }

        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .challenge-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          overflow: hidden;
          cursor: pointer;
        }

        .challenge-card:hover {
          border-color: rgba(255, 106, 0, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .card-icon {
          margin-bottom: 1rem;
        }

        .icon-number {
          display: inline-block;
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          opacity: 0.5;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #ff6a00;
          line-height: 1.4;
        }

        .card-description {
          font-size: 0.95rem;
          line-height: 1.6;
          opacity: 0.8;
        }

        .card-hover-effect {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .challenge-card:hover .card-hover-effect {
          transform: scaleX(1);
        }

        /* Mission Section */
        .mission-section {
          margin-bottom: 3rem;
          background: linear-gradient(135deg, rgba(255, 106, 0, 0.1), rgba(0, 114, 255, 0.1));
          border-radius: 30px;
          padding: 3rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mission-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .mission-text {
          font-size: 1.1rem;
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto;
          opacity: 0.9;
        }

        /* CTA Section */
        .cta-wrapper {
          text-align: center;
          margin-top: 2rem;
        }

        .cta-button {
          position: relative;
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          border: none;
          border-radius: 50px;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .button-text {
          position: relative;
          z-index: 1;
        }

        .button-icon {
          position: relative;
          z-index: 1;
          font-size: 1.2rem;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1rem;
          }

          .stat-badge {
            flex-direction: column;
            gap: 0.8rem;
            border-radius: 30px;
            padding: 1rem;
          }

          .stat-divider {
            width: 50px;
            height: 1px;
          }

          .challenges-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .mission-section {
            padding: 2rem 1rem;
          }

          .intro-text {
            font-size: 1rem;
          }

          .mission-text {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .page-title {
            font-size: 2rem;
          }

          .tagline {
            font-size: 1.2rem;
          }

          .card-title {
            font-size: 1.1rem;
          }

          .cta-button {
            padding: 0.8rem 2rem;
            font-size: 1rem;
          }
        }

        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `})]})}function VT(){const a=Ie(),i=[{year:"2024",title:"AkiliBridge Founded",description:"Established to bridge Africa's research gap and empower emerging scholars."},{year:"2025",title:"First Fellowship Cohort",description:"Launched the STEM Fellowship, training and mentoring the first group of fellows."},{year:"2026",title:"Virtual Research Labs",description:"Introduced labs in AI, renewable energy, and biotechnology to expand opportunities."},{year:"Future",title:"Scaling Across Africa",description:"Expanding programs to reach more universities and researchers across the continent."}],l={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},o={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},u={hidden:{opacity:0,x:-30},visible:m=>({opacity:1,x:0,transition:{delay:m*.15,duration:.5,ease:"easeOut"}})};return r.jsxs("div",{className:"who-we-are",children:[r.jsxs("div",{className:"background-wrapper",children:[r.jsx("div",{className:"background-image",style:{backgroundImage:"url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format')"}}),r.jsx("div",{className:"gradient-overlay"}),r.jsx("div",{className:"pattern-overlay"})]}),r.jsxs("div",{className:"container",children:[r.jsx(j.h1,{className:"page-title",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:"Who We Are"}),r.jsxs(j.div,{className:"tagline-wrapper",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.2},children:[r.jsx("h2",{className:"tagline",children:"Building Africa's Research Future, One Scholar at a Time"}),r.jsx("div",{className:"tagline-underline"})]}),r.jsxs(j.section,{className:"mission-section",variants:l,initial:"hidden",animate:"visible",children:[r.jsxs(j.div,{className:"mission-card",variants:o,children:[r.jsx("div",{className:"mission-icon-wrapper",children:r.jsx("span",{className:"mission-icon",children:"🌍"})}),r.jsx("p",{className:"mission-text",children:"At AkiliBridge, we believe Africa's greatest potential lies in its people. Our mission is to bridge Africa's research gap by empowering emerging scholars to become world-class researchers and innovators."})]}),r.jsxs(j.div,{className:"vision-card",variants:o,children:[r.jsx("div",{className:"vision-icon-wrapper",children:r.jsx("span",{className:"vision-icon",children:"🎓"})}),r.jsx("p",{className:"vision-text",children:"We provide comprehensive training, mentorship, and resources to nurture the next generation of African scientists, engineers, and thought leaders. By equipping students and early-career researchers with the skills and networks needed to excel, we help them generate solutions that address Africa's most pressing challenges and contribute to global knowledge."})]}),r.jsxs(j.div,{className:"movement-card",variants:o,children:[r.jsx("div",{className:"movement-icon-wrapper",children:r.jsx("span",{className:"movement-icon",children:"🚀"})}),r.jsx("p",{className:"movement-text",children:"We are not just an educational program — we are a movement to create an Africa where research excellence drives social progress, technological advancement, and sustainable development."})]})]}),r.jsxs(j.section,{className:"timeline-section",initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.5},children:[r.jsx("h2",{className:"section-title",children:"Our Journey"}),r.jsxs("div",{className:"timeline-wrapper",children:[r.jsx("div",{className:"timeline-line"}),r.jsx("div",{className:"timeline-items",children:i.map((m,f)=>r.jsxs(j.div,{custom:f,variants:u,initial:"hidden",animate:"visible",className:"timeline-item",children:[r.jsx("div",{className:"timeline-dot",children:r.jsx("span",{className:"dot-inner"})}),r.jsxs("div",{className:"timeline-content",children:[r.jsx("div",{className:"timeline-year",children:m.year}),r.jsx("h3",{className:"timeline-title",children:m.title}),r.jsx("p",{className:"timeline-description",children:m.description})]})]},f))})]})]}),r.jsx(j.div,{className:"cta-wrapper",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},children:r.jsxs(j.button,{className:"cta-button",whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(255, 106, 0, 0.4)"},whileTap:{scale:.98},onClick:()=>a("/careers/application"),children:[r.jsx("span",{className:"button-text",children:"Join the Movement"}),r.jsx(j.span,{className:"button-icon",animate:{x:[0,5,0]},transition:{repeat:1/0,duration:1.5,ease:"easeInOut"},children:"→"})]})})]}),r.jsx("style",{children:`
        /* Main Container */
        .who-we-are {
          position: relative;
          min-height: 100vh;
          color: #ffffff;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Background Wrapper */
        .background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          animation: slowZoom 25s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(10, 15, 26, 0.92) 0%, rgba(20, 30, 50, 0.88) 100%);
        }

        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 2px, transparent 2px, transparent 8px);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        /* Page Title */
        .page-title {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #a8e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        /* Tagline */
        .tagline-wrapper {
          text-align: center;
          margin-bottom: 3rem;
        }

        .tagline {
          font-size: clamp(1.2rem, 4vw, 1.8rem);
          font-weight: 600;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .tagline-underline {
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          margin: 0.5rem auto 0;
          border-radius: 3px;
          animation: expandWidth 0.6s ease-out;
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 80px;
          }
        }

        /* Mission Cards */
        .mission-section {
          margin-bottom: 4rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mission-card,
        .vision-card,
        .movement-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .mission-card:hover,
        .vision-card:hover,
        .movement-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 106, 0, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .mission-icon-wrapper,
        .vision-icon-wrapper,
        .movement-icon-wrapper {
          text-align: center;
          margin-bottom: 1rem;
        }

        .mission-icon,
        .vision-icon,
        .movement-icon {
          font-size: 2.5rem;
          display: inline-block;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .mission-text,
        .vision-text,
        .movement-text {
          font-size: 1.05rem;
          line-height: 1.7;
          text-align: center;
          margin: 0;
        }

        /* Timeline Section */
        .timeline-section {
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(1.8rem, 5vw, 2.5rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 2.5rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          margin: 0.5rem auto 0;
          border-radius: 3px;
        }

        .timeline-wrapper {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #ff6a00, #c68a3d, rgba(255, 106, 0, 0.2));
        }

        .timeline-items {
          position: relative;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2.5rem;
          display: flex;
          gap: 1.5rem;
        }

        .timeline-dot {
          position: relative;
          width: 40px;
          flex-shrink: 0;
        }

        .dot-inner {
          position: absolute;
          left: -2px;
          top: 0;
          width: 12px;
          height: 12px;
          background: #ff6a00;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(255, 106, 0, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 106, 0, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(255, 106, 0, 0);
          }
        }

        .timeline-content {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateX(8px);
          border-color: rgba(255, 106, 0, 0.5);
        }

        .timeline-year {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .timeline-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #c68a3d;
        }

        .timeline-description {
          font-size: 0.95rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        /* CTA Button */
        .cta-wrapper {
          text-align: center;
          margin-top: 2rem;
        }

        .cta-button {
          position: relative;
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          border: none;
          border-radius: 50px;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .button-text {
          position: relative;
          z-index: 1;
        }

        .button-icon {
          position: relative;
          z-index: 1;
          font-size: 1.2rem;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1.5rem;
          }

          .mission-card,
          .vision-card,
          .movement-card {
            padding: 1.5rem;
          }

          .mission-text,
          .vision-text,
          .movement-text {
            font-size: 0.95rem;
          }

          .timeline-wrapper {
            padding-left: 1rem;
          }

          .timeline-dot {
            width: 30px;
          }

          .dot-inner {
            width: 10px;
            height: 10px;
          }

          .timeline-content {
            padding: 1rem;
          }

          .timeline-title {
            font-size: 1.1rem;
          }

          .timeline-description {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem 1rem;
          }

          .page-title {
            font-size: 2rem;
          }

          .tagline {
            font-size: 1.1rem;
          }

          .timeline-item {
            gap: 1rem;
          }

          .timeline-content {
            padding: 0.8rem;
          }

          .cta-button {
            padding: 0.8rem 2rem;
            font-size: 1rem;
          }
        }

        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `})]})}function BT(){const a=Ie(),i=[{title:"Excellence",description:"We uphold the highest standards in research and innovation."},{title:"Collaboration",description:"We believe mentorship and teamwork accelerate impact."},{title:"Equity",description:"We create opportunities for talented students regardless of background."},{title:"Innovation",description:"We encourage bold thinking and creative problem-solving."},{title:"Integrity",description:"We maintain transparency and ethical standards in all our work."}],l=[{title:"Ethical Research Excellence",description:"Upholding the highest standards of integrity, transparency, and responsibility."},{title:"Collaboration",description:"Working together across disciplines and borders to accelerate impact."},{title:"Leadership and Lifelong Learning",description:"Fostering curiosity, continuous learning, and mentorship."},{title:"Innovation",description:"Encouraging groundbreaking research that leads to practical solutions."},{title:"Research for Impact",description:"Focusing on studies directly addressing Africa's health, technology, and economics."}],o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.3}}},u={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},m={hidden:{opacity:0,x:-30},visible:h=>({opacity:1,x:0,transition:{delay:h*.08,duration:.4,ease:"easeOut"}}),hover:{y:-5,transition:{duration:.2}}},f={hidden:{opacity:0,y:30},visible:h=>({opacity:1,y:0,transition:{delay:h*.08,duration:.4,ease:"easeOut"}}),hover:{y:-5,transition:{duration:.2}}};return r.jsxs("div",{className:"mission-purpose",children:[r.jsxs("div",{className:"background-wrapper",children:[r.jsx("div",{className:"background-image",style:{backgroundImage:"url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format')"}}),r.jsx("div",{className:"gradient-overlay"}),r.jsx("div",{className:"pattern-overlay"})]}),r.jsxs("div",{className:"container",children:[r.jsx(j.h1,{className:"page-title",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:"Mission & Purpose"}),r.jsxs(j.div,{className:"mission-vision-grid",variants:o,initial:"hidden",animate:"visible",children:[r.jsxs(j.div,{className:"mission-card",variants:u,children:[r.jsx("div",{className:"card-icon",children:"🎯"}),r.jsx("h2",{className:"card-title",children:"Our Mission"}),r.jsx("p",{className:"card-text",children:"To create a thriving ecosystem of African researchers who drive innovation and solve local and global challenges through STEM excellence."})]}),r.jsxs(j.div,{className:"vision-card",variants:u,children:[r.jsx("div",{className:"card-icon",children:"👁️"}),r.jsx("h2",{className:"card-title",children:"Vision"}),r.jsx("p",{className:"card-text",children:"We empower East Africa's top undergraduate students with the skills, mentorship, and networks they need to produce high-quality, impactful research that transforms their communities and beyond."})]})]}),r.jsxs(j.section,{className:"commitment-section",initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.4},children:[r.jsx("h2",{className:"section-title",children:"Our Commitment"}),r.jsx("div",{className:"commitment-intro",children:r.jsx("p",{className:"commitment-text",children:"AkiliBridge is not just an initiative; it is a movement to empower Africa's next generation of innovators, thinkers, and changemakers. Together, we are building a future where African research drives solutions that transform communities and influence the world."})}),r.jsx("div",{className:"commitments-grid",children:i.map((h,g)=>r.jsxs(j.div,{custom:g,variants:m,initial:"hidden",animate:"visible",whileHover:"hover",className:"commitment-card",children:[r.jsxs("div",{className:"commitment-header",children:[r.jsxs("span",{className:"commitment-icon",children:[g===0&&"⭐",g===1&&"🤝",g===2&&"⚖️",g===3&&"💡",g===4&&"🔒"]}),r.jsx("strong",{className:"commitment-title",children:h.title})]}),r.jsx("p",{className:"commitment-description",children:h.description}),r.jsx("div",{className:"card-glow"})]},g))})]}),r.jsxs(j.section,{className:"values-section",initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.6},children:[r.jsx("h2",{className:"section-title",children:"Our Values"}),r.jsx("div",{className:"values-grid",children:l.map((h,g)=>r.jsxs(j.div,{custom:g,variants:f,initial:"hidden",animate:"visible",whileHover:"hover",className:"value-card",children:[r.jsxs("div",{className:"value-number",children:["0",g+1]}),r.jsx("h3",{className:"value-title",children:h.title}),r.jsx("p",{className:"value-description",children:h.description})]},g))})]}),r.jsx(j.div,{className:"cta-wrapper",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.9},children:r.jsxs(j.button,{className:"cta-button",whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(255, 106, 0, 0.4)"},whileTap:{scale:.98},onClick:()=>a("/careers/application"),children:[r.jsx("span",{className:"button-text",children:"Be Part of the Mission"}),r.jsx(j.span,{className:"button-icon",animate:{x:[0,5,0]},transition:{repeat:1/0,duration:1.5,ease:"easeInOut"},children:"→"})]})})]}),r.jsx("style",{children:`
        /* Main Container */
        .mission-purpose {
          position: relative;
          min-height: 100vh;
          color: #ffffff;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Background Wrapper */
        .background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          animation: slowZoom 25s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(10, 15, 26, 0.94) 0%, rgba(20, 30, 50, 0.9) 100%);
        }

        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 2px, transparent 2px, transparent 8px);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        /* Page Title */
        .page-title {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #ffffff, #a8e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        /* Mission & Vision Grid */
        .mission-vision-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .mission-card,
        .vision-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 2rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .mission-card:hover,
        .vision-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 106, 0, 0.5);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .card-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .card-text {
          font-size: 1rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        /* Section Title */
        .section-title {
          font-size: clamp(1.8rem, 5vw, 2.5rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          margin: 0.5rem auto 0;
          border-radius: 3px;
        }

        /* Commitment Section */
        .commitment-section {
          margin-bottom: 4rem;
        }

        .commitment-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 2rem;
        }

        .commitment-text {
          font-size: 1.1rem;
          line-height: 1.7;
          opacity: 0.9;
        }

        .commitments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .commitment-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .commitment-card:hover {
          border-color: rgba(255, 106, 0, 0.5);
        }

        .commitment-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.8rem;
        }

        .commitment-icon {
          font-size: 1.5rem;
        }

        .commitment-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #ff6a00;
        }

        .commitment-description {
          font-size: 0.9rem;
          line-height: 1.5;
          opacity: 0.85;
          margin: 0;
        }

        .card-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 106, 0, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .commitment-card:hover .card-glow {
          left: 100%;
        }

        /* Values Section */
        .values-section {
          margin-bottom: 4rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .value-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .value-card:hover {
          transform: translateY(-5px);
          border-color: rgba(77, 166, 255, 0.5);
        }

        .value-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, rgba(77, 166, 255, 0.3), rgba(77, 166, 255, 0.1));
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .value-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
          color: #4da6ff;
        }

        .value-description {
          font-size: 0.9rem;
          line-height: 1.5;
          opacity: 0.85;
          margin: 0;
        }

        /* CTA Button */
        .cta-wrapper {
          text-align: center;
          margin-top: 2rem;
        }

        .cta-button {
          position: relative;
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          border: none;
          border-radius: 50px;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .button-text {
          position: relative;
          z-index: 1;
        }

        .button-icon {
          position: relative;
          z-index: 1;
          font-size: 1.2rem;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1.5rem;
          }

          .mission-vision-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .mission-card,
          .vision-card {
            padding: 1.5rem;
          }

          .card-title {
            font-size: 1.5rem;
          }

          .commitments-grid,
          .values-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .commitment-text {
            font-size: 1rem;
          }

          .value-card {
            padding: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem 1rem;
          }

          .page-title {
            font-size: 2rem;
          }

          .card-icon {
            font-size: 2.5rem;
          }

          .card-title {
            font-size: 1.3rem;
          }

          .commitment-title {
            font-size: 1rem;
          }

          .value-title {
            font-size: 1rem;
          }

          .cta-button {
            padding: 0.8rem 2rem;
            font-size: 1rem;
          }
        }

        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `})]})}function LT(){const a=Ie(),i=[{title:"Foundations & Orientation (Weeks 1–4)",description:"Introduction to research ethics, design, and methods; mentor matching",progress:20,icon:"🌱"},{title:"Research Skills & Proposal Development (Weeks 5–10)",description:"Data collection, analysis techniques, literature review strategies, proposal drafting",progress:40,icon:"📚"},{title:"Independent Research & Mentorship (Weeks 11–20)",description:"Conducting original research, weekly mentor check-ins, skill workshops",progress:70,icon:"🔬"},{title:"Presentation & Career Readiness (Weeks 21–24)",description:"Final paper submission, presentation, graduate school prep, career guidance",progress:100,icon:"🎓"}],l=["Renewable Energy & Sustainability","Artificial Intelligence & Data Science","Civil & Environmental Engineering","Biotechnology & Public Health","ICT & Emerging Technologies"],o=["1:1 mentorship from experienced researchers","Research methodology and academic writing training","Access to an East Africa-wide peer research network","Certificate of completion","Publication and conference opportunities"],u=["World-Class Mentorship and Training – 1:1 guidance from top researchers","Cutting-Edge Research Opportunities – contribute to real-world STEM solutions","Career and Academic Development – workshops, scholarships, global pathways"],m={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},f={hidden:{opacity:0,x:-30},visible:h=>({opacity:1,x:0,transition:{delay:h*.15,duration:.5,ease:"easeOut"}})};return r.jsxs("div",{className:"fellowship",children:[r.jsxs("div",{className:"background-wrapper",children:[r.jsx("div",{className:"background-image",style:{backgroundImage:"url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format')"}}),r.jsx("div",{className:"gradient-overlay"}),r.jsx("div",{className:"pattern-overlay"})]}),r.jsxs("div",{className:"container",children:[r.jsxs(j.div,{className:"hero-section",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[r.jsxs("div",{className:"hero-badge",children:[r.jsx("span",{className:"badge-icon",children:"🚀"}),"Apply Now for 2025 Cohort"]}),r.jsx("h1",{className:"page-title",children:"STEM Research Fellowship"}),r.jsx("p",{className:"hero-description",children:"The AkiliBridge STEM Fellowship is a one-year immersive program designed to nurture Africa's brightest and most driven undergraduate students into high-impact researchers and innovators. By combining advanced research training, personalized mentorship, and hands-on project execution, the fellowship empowers fellows to create solutions that address Africa's most pressing development challenges in STEM."}),r.jsxs("div",{className:"hero-stats",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-number",children:"12"}),r.jsx("span",{className:"stat-label",children:"Months"})]}),r.jsx("div",{className:"stat-divider"}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-number",children:"1:1"}),r.jsx("span",{className:"stat-label",children:"Mentorship"})]}),r.jsx("div",{className:"stat-divider"}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-number",children:"100%"}),r.jsx("span",{className:"stat-label",children:"Remote"})]})]})]}),r.jsxs(j.section,{className:"structure-section",variants:m,initial:"hidden",animate:"visible",children:[r.jsx("h2",{className:"section-title",children:"Program Structure"}),r.jsx("p",{className:"section-subtitle",children:"Duration: 6 months – fully remote"}),r.jsx("div",{className:"phases-container",children:i.map((h,g)=>r.jsxs(j.div,{custom:g,variants:f,className:"phase-card",children:[r.jsxs("div",{className:"phase-header",children:[r.jsx("div",{className:"phase-icon",children:h.icon}),r.jsx("h3",{className:"phase-title",children:h.title})]}),r.jsx("p",{className:"phase-description",children:h.description}),r.jsxs("div",{className:"progress-bar-container",children:[r.jsxs("div",{className:"progress-label",children:[r.jsx("span",{children:"Progress"}),r.jsxs("span",{children:[h.progress,"%"]})]}),r.jsx("div",{className:"progress-bar-bg",children:r.jsx(j.div,{className:"progress-bar-fill",initial:{width:0},animate:{width:`${h.progress}%`},transition:{duration:1,delay:.5+g*.2}})})]})]},g))})]}),r.jsxs(j.section,{className:"why-join-section",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:[r.jsx("h2",{className:"section-title",children:"Why Join the STEM Fellowship?"}),r.jsx("div",{className:"why-join-grid",children:u.map((h,g)=>r.jsxs(j.div,{className:"why-join-card",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.5+g*.1,duration:.4},whileHover:{y:-5},children:[r.jsxs("div",{className:"card-icon",children:[g===0&&"🎯",g===1&&"💡",g===2&&"🚀"]}),r.jsx("p",{className:"card-text",children:h})]},g))})]}),r.jsxs("div",{className:"two-column-section",children:[r.jsxs(j.section,{className:"focus-section",initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.6},children:[r.jsxs("div",{className:"section-header",children:[r.jsx("span",{className:"header-icon",children:"🎯"}),r.jsx("h2",{className:"section-title-left",children:"Focus Areas"})]}),r.jsx("div",{className:"focus-grid",children:l.map((h,g)=>r.jsxs(j.div,{className:"focus-item",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.7+g*.05,duration:.3},children:[r.jsx("span",{className:"focus-marker",children:"▹"}),r.jsx("span",{children:h})]},g))})]}),r.jsxs(j.section,{className:"benefits-section",initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.6},children:[r.jsxs("div",{className:"section-header",children:[r.jsx("span",{className:"header-icon",children:"✨"}),r.jsx("h2",{className:"section-title-left",children:"Program Benefits"})]}),r.jsx("div",{className:"benefits-list",children:o.map((h,g)=>r.jsxs(j.div,{className:"benefit-item",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.7+g*.05,duration:.3},children:[r.jsx("span",{className:"benefit-check",children:"✓"}),r.jsx("span",{children:h})]},g))})]})]}),r.jsxs(j.div,{className:"cta-wrapper",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.9},children:[r.jsxs(j.button,{className:"cta-button",whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(255, 106, 0, 0.4)"},whileTap:{scale:.98},onClick:()=>a("/careers/application"),children:[r.jsx("span",{className:"button-text",children:"Apply Now"}),r.jsx(j.span,{className:"button-icon",animate:{x:[0,5,0]},transition:{repeat:1/0,duration:1.5,ease:"easeInOut"},children:"→"})]}),r.jsx("p",{className:"cta-note",children:"Applications open until March 31, 2025 • Limited spots available"})]})]}),r.jsx("style",{children:`
        /* Main Container */
        .fellowship {
          position: relative;
          min-height: 100vh;
          color: #ffffff;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Background Wrapper */
        .background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          animation: slowZoom 25s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(10, 15, 26, 0.94) 0%, rgba(20, 30, 50, 0.9) 100%);
        }

        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 2px, transparent 2px, transparent 8px);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        /* Hero Section */
        .hero-section {
          text-align: center;
          margin-bottom: 4rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 106, 0, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 106, 0, 0.5);
        }

        .badge-icon {
          font-size: 1rem;
        }

        .page-title {
          font-size: clamp(2rem, 8vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #a8e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        .hero-description {
          font-size: clamp(1rem, 3vw, 1.1rem);
          max-width: 800px;
          margin: 0 auto 2rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .stat-label {
          font-size: 0.85rem;
          opacity: 0.8;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.3);
        }

        /* Section Title */
        .section-title {
          font-size: clamp(1.6rem, 5vw, 2.2rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          margin: 0.5rem auto 0;
          border-radius: 3px;
        }

        .section-subtitle {
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 2rem;
        }

        /* Program Structure */
        .structure-section {
          margin-bottom: 4rem;
        }

        .phases-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .phase-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .phase-card:hover {
          transform: translateX(8px);
          border-color: rgba(255, 106, 0, 0.5);
        }

        .phase-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .phase-icon {
          font-size: 2rem;
        }

        .phase-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0;
          color: #ff6a00;
        }

        .phase-description {
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          opacity: 0.85;
        }

        .progress-bar-container {
          margin-top: 0.5rem;
        }

        .progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          margin-bottom: 0.3rem;
          opacity: 0.7;
        }

        .progress-bar-bg {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          overflow: hidden;
          height: 8px;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          border-radius: 10px;
        }

        /* Why Join Section */
        .why-join-section {
          margin-bottom: 4rem;
        }

        .why-join-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .why-join-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.8rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .why-join-card:hover {
          background: rgba(255, 106, 0, 0.1);
          border-color: rgba(255, 106, 0, 0.5);
        }

        .card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .card-text {
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
        }

        /* Two Column Section */
        .two-column-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .focus-section,
        .benefits-section {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 1.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid rgba(255, 106, 0, 0.3);
          padding-bottom: 0.8rem;
        }

        .header-icon {
          font-size: 1.8rem;
        }

        .section-title-left {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .focus-grid {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .focus-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.5rem;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .focus-item:hover {
          background: rgba(255, 106, 0, 0.1);
          transform: translateX(5px);
        }

        .focus-marker {
          color: #ff6a00;
          font-size: 1rem;
        }

        .benefits-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          padding: 0.5rem;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .benefit-item:hover {
          background: rgba(255, 106, 0, 0.1);
          transform: translateX(5px);
        }

        .benefit-check {
          color: #4caf50;
          font-size: 1rem;
          font-weight: bold;
        }

        /* CTA Section */
        .cta-wrapper {
          text-align: center;
          margin-top: 2rem;
        }

        .cta-button {
          position: relative;
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          border: none;
          border-radius: 50px;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .button-text {
          position: relative;
          z-index: 1;
        }

        .button-icon {
          position: relative;
          z-index: 1;
          font-size: 1.2rem;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-note {
          margin-top: 1rem;
          font-size: 0.85rem;
          opacity: 0.7;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1.5rem;
          }

          .hero-stats {
            gap: 1rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .phase-card {
            padding: 1.2rem;
          }

          .phase-title {
            font-size: 1rem;
          }

          .why-join-grid {
            grid-template-columns: 1fr;
          }

          .two-column-section {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem 1rem;
          }

          .page-title {
            font-size: 1.8rem;
          }

          .hero-description {
            font-size: 0.9rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 0.8rem;
          }

          .stat-divider {
            width: 50px;
            height: 1px;
          }

          .phase-header {
            flex-direction: column;
            text-align: center;
          }

          .phase-title {
            text-align: center;
          }

          .cta-button {
            padding: 0.8rem 2rem;
            font-size: 1rem;
          }
        }

        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `})]})}function _T(){const a=Ie(),i=["Research methodologies & experimental design","Scientific writing & publishing strategies","Data analysis (qualitative & quantitative techniques)","Policy research & impact-driven studies","Laboratory techniques","Career development (CV writing, networking, grant applications)"],l=[{title:"Scientific Writing Bootcamp",date:"April 10, 2026",description:"Learn how to structure papers, publish in journals, and improve clarity.",icon:"✍️",duration:"2 Days",format:"Virtual"},{title:"Data Analysis Workshop",date:"April 20, 2026",description:"Hands-on training in Python, R, and visualization tools for STEM research.",icon:"📊",duration:"3 Days",format:"Hybrid"},{title:"Policy Research & Impact Studies",date:"May 5, 2026",description:"Explore how research informs policy decisions and drives social change.",icon:"🏛️",duration:"1 Day",format:"Virtual"}],o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.2}}},u={hidden:{opacity:0,x:-20},visible:f=>({opacity:1,x:0,transition:{delay:f*.05,duration:.3,ease:"easeOut"}})},m={hidden:{opacity:0,y:30},visible:f=>({opacity:1,y:0,transition:{delay:f*.15,duration:.5,ease:"easeOut"}}),hover:{y:-8,transition:{duration:.2}}};return r.jsxs("div",{className:"training-workshops",children:[r.jsxs("div",{className:"background-wrapper",children:[r.jsx("div",{className:"background-image",style:{backgroundImage:"url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format')"}}),r.jsx("div",{className:"gradient-overlay"}),r.jsx("div",{className:"pattern-overlay"})]}),r.jsxs("div",{className:"container",children:[r.jsxs(j.div,{className:"hero-section",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[r.jsxs("div",{className:"hero-badge",children:[r.jsx("span",{className:"badge-icon",children:"🎓"}),"Continuous Learning"]}),r.jsx("h1",{className:"page-title",children:"Training & Workshops"}),r.jsx("p",{className:"hero-description",children:"Our program includes workshops, boot camps, and specialized training sessions to equip aspiring researchers with cutting-edge research skills across disciplines. Learn from world-class experts and connect with peers across East Africa."}),r.jsxs("div",{className:"hero-stats",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-number",children:"12+"}),r.jsx("span",{className:"stat-label",children:"Workshops Yearly"})]}),r.jsx("div",{className:"stat-divider"}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-number",children:"500+"}),r.jsx("span",{className:"stat-label",children:"Researchers Trained"})]}),r.jsx("div",{className:"stat-divider"}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-number",children:"6"}),r.jsx("span",{className:"stat-label",children:"Focus Areas"})]})]})]}),r.jsxs(j.section,{className:"focus-section",variants:o,initial:"hidden",animate:"visible",children:[r.jsx("h2",{className:"section-title",children:"Key Focus Areas"}),r.jsx("div",{className:"focus-grid",children:i.map((f,h)=>r.jsxs(j.div,{custom:h,variants:u,className:"focus-card",children:[r.jsxs("div",{className:"focus-icon",children:[h===0&&"🔬",h===1&&"✍️",h===2&&"📊",h===3&&"🏛️",h===4&&"🧪",h===5&&"💼"]}),r.jsx("p",{className:"focus-text",children:f})]},h))})]}),r.jsxs(j.section,{className:"sessions-section",initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.3},children:[r.jsx("h2",{className:"section-title",children:"Upcoming Workshops & Bootcamps"}),r.jsx("p",{className:"section-subtitle",children:"Join our transformative learning experiences designed to accelerate your research career"}),r.jsx("div",{className:"sessions-grid",children:l.map((f,h)=>r.jsxs(j.div,{custom:h,variants:m,initial:"hidden",animate:"visible",whileHover:"hover",className:"session-card",children:[r.jsx("div",{className:"session-icon",children:f.icon}),r.jsx("h3",{className:"session-title",children:f.title}),r.jsxs("div",{className:"session-meta",children:[r.jsxs("span",{className:"meta-item",children:[r.jsx("span",{className:"meta-icon",children:"📅"}),f.date]}),r.jsxs("span",{className:"meta-item",children:[r.jsx("span",{className:"meta-icon",children:"⏱️"}),f.duration]}),r.jsxs("span",{className:"meta-item",children:[r.jsx("span",{className:"meta-icon",children:"💻"}),f.format]})]}),r.jsx("p",{className:"session-description",children:f.description}),r.jsx(j.button,{className:"register-btn",whileHover:{scale:1.05},whileTap:{scale:.98},onClick:()=>a("/careers/application"),children:"Register Now →"})]},h))})]}),r.jsxs(j.section,{className:"features-section",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:[r.jsx("h2",{className:"section-title",children:"What You'll Gain"}),r.jsxs("div",{className:"features-grid",children:[r.jsxs("div",{className:"feature-card",children:[r.jsx("div",{className:"feature-icon",children:"🎯"}),r.jsx("h3",{children:"Hands-on Experience"}),r.jsx("p",{children:"Practical exercises and real-world case studies"})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("div",{className:"feature-icon",children:"👥"}),r.jsx("h3",{children:"Expert Instructors"}),r.jsx("p",{children:"Learn from leading researchers and industry professionals"})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("div",{className:"feature-icon",children:"📜"}),r.jsx("h3",{children:"Certification"}),r.jsx("p",{children:"Earn certificates recognized by partner institutions"})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("div",{className:"feature-icon",children:"🌍"}),r.jsx("h3",{children:"Networking"}),r.jsx("p",{children:"Connect with peers and mentors across East Africa"})]})]})]}),r.jsxs(j.div,{className:"cta-wrapper",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},children:[r.jsxs(j.button,{className:"cta-button",whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(255, 106, 0, 0.4)"},whileTap:{scale:.98},onClick:()=>a("/careers/application"),children:[r.jsx("span",{className:"button-text",children:"Join Our Upcoming Workshops & Bootcamps!"}),r.jsx(j.span,{className:"button-icon",animate:{x:[0,5,0]},transition:{repeat:1/0,duration:1.5,ease:"easeInOut"},children:"→"})]}),r.jsx("p",{className:"cta-note",children:"Limited spots available • Early bird registration ends March 25, 2026"})]})]}),r.jsx("style",{children:`
        /* Main Container */
        .training-workshops {
          position: relative;
          min-height: 100vh;
          color: #ffffff;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Background Wrapper */
        .background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          animation: slowZoom 25s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(10, 15, 26, 0.94) 0%, rgba(20, 30, 50, 0.9) 100%);
        }

        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 2px, transparent 2px, transparent 8px);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        /* Hero Section */
        .hero-section {
          text-align: center;
          margin-bottom: 4rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 106, 0, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 106, 0, 0.5);
        }

        .badge-icon {
          font-size: 1rem;
        }

        .page-title {
          font-size: clamp(2rem, 8vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #a8e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        .hero-description {
          font-size: clamp(1rem, 3vw, 1.1rem);
          max-width: 800px;
          margin: 0 auto 2rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .stat-label {
          font-size: 0.85rem;
          opacity: 0.8;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.3);
        }

        /* Section Title */
        .section-title {
          font-size: clamp(1.6rem, 5vw, 2.2rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          margin: 0.5rem auto 0;
          border-radius: 3px;
        }

        .section-subtitle {
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 2rem;
        }

        /* Focus Areas */
        .focus-section {
          margin-bottom: 4rem;
        }

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.2rem;
        }

        .focus-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 1rem 1.2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .focus-card:hover {
          transform: translateX(8px);
          border-color: rgba(255, 106, 0, 0.5);
          background: rgba(255, 106, 0, 0.1);
        }

        .focus-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .focus-text {
          font-size: 0.95rem;
          margin: 0;
          line-height: 1.4;
        }

        /* Sessions Grid */
        .sessions-section {
          margin-bottom: 4rem;
        }

        .sessions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .session-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 1.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .session-card:hover {
          border-color: rgba(255, 106, 0, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .session-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .session-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #ff6a00;
        }

        .session-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.8rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
        }

        .meta-icon {
          font-size: 0.8rem;
        }

        .session-description {
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          opacity: 0.85;
        }

        .register-btn {
          width: 100%;
          padding: 0.8rem;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          border: none;
          border-radius: 10px;
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .register-btn:hover {
          box-shadow: 0 5px 15px rgba(255, 106, 0, 0.4);
        }

        /* Features Section */
        .features-section {
          margin-bottom: 4rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .feature-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 106, 0, 0.5);
        }

        .feature-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .feature-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #ff6a00;
        }

        .feature-card p {
          font-size: 0.85rem;
          line-height: 1.4;
          opacity: 0.8;
          margin: 0;
        }

        /* CTA Section */
        .cta-wrapper {
          text-align: center;
          margin-top: 2rem;
        }

        .cta-button {
          position: relative;
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          border: none;
          border-radius: 50px;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .button-text {
          position: relative;
          z-index: 1;
        }

        .button-icon {
          position: relative;
          z-index: 1;
          font-size: 1.2rem;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-note {
          margin-top: 1rem;
          font-size: 0.85rem;
          opacity: 0.7;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1.5rem;
          }

          .hero-stats {
            gap: 1rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .focus-grid {
            grid-template-columns: 1fr;
          }

          .sessions-grid {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .session-meta {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem 1rem;
          }

          .page-title {
            font-size: 1.8rem;
          }

          .hero-description {
            font-size: 0.9rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 0.8rem;
          }

          .stat-divider {
            width: 50px;
            height: 1px;
          }

          .session-title {
            font-size: 1.1rem;
          }

          .cta-button {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
        }

        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `})]})}function HT(){const a=Ie(),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},l={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},o={hidden:{opacity:0,x:-20},visible:f=>({opacity:1,x:0,transition:{delay:f*.05,duration:.3,ease:"easeOut"}})},u=[{icon:"🎓",title:"12 Months",description:"Intensive training and research program"},{icon:"🤝",title:"1-on-1 Mentorship",description:"With world-class researchers"},{icon:"🌍",title:"Africa Focus",description:"100% focus on Africa's development priorities"},{icon:"📚",title:"Research Skills",description:"Comprehensive research methodology training"}],m=[{q:"Who can apply?",a:"Eligible STEM undergraduates from East Africa (3rd or final year students)"},{q:"Will the fellowship interfere with my university studies?",a:"No, it is designed to complement your coursework and enhance your academic experience"},{q:"Is the fellowship fully funded?",a:"Yes, selected fellows receive full support including mentorship, resources, and training materials"},{q:"What is the time commitment?",a:"Approximately 5-8 hours per week, flexible around your academic schedule"}];return r.jsxs("div",{className:"for-fellows",children:[r.jsxs("div",{className:"background-wrapper",children:[r.jsx("div",{className:"background-image",style:{backgroundImage:"url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format')"}}),r.jsx("div",{className:"gradient-overlay"}),r.jsx("div",{className:"pattern-overlay"})]}),r.jsxs("div",{className:"container",children:[r.jsxs(j.h1,{className:"page-title",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:["Fellowship Program",r.jsx("span",{className:"title-sub",children:"For Fellows"})]}),r.jsxs(j.div,{className:"content-grid",variants:i,initial:"hidden",animate:"visible",children:[r.jsxs(j.section,{className:"info-card",variants:l,children:[r.jsxs("div",{className:"card-header",children:[r.jsx("span",{className:"card-icon",children:"✅"}),r.jsx("h2",{className:"card-title",children:"Eligibility"})]}),r.jsx("ul",{className:"styled-list",children:["Third or final-year undergraduate students in STEM disciplines","Citizen of an East African country (Kenya, Uganda, Tanzania, Rwanda, Burundi, South Sudan, Ethiopia, Somalia)","Demonstrated academic excellence and commitment to research"].map((f,h)=>r.jsxs(j.li,{custom:h,variants:o,initial:"hidden",animate:"visible",children:[r.jsx("span",{className:"list-marker",children:"▹"}),f]},h))})]}),r.jsxs(j.section,{className:"info-card",variants:l,children:[r.jsxs("div",{className:"card-header",children:[r.jsx("span",{className:"card-icon",children:"📋"}),r.jsx("h2",{className:"card-title",children:"Application Requirements"})]}),r.jsx("ul",{className:"styled-list",children:["Completed application form","Academic CV or résumé","Transcript or proof of enrollment","Letter of recommendation from a faculty member","Statement of Purpose (max 500 words)"].map((f,h)=>r.jsxs(j.li,{custom:h,variants:o,initial:"hidden",animate:"visible",children:[r.jsx("span",{className:"list-marker",children:"▹"}),f]},h))})]}),r.jsxs(j.section,{className:"info-card",variants:l,children:[r.jsxs("div",{className:"card-header",children:[r.jsx("span",{className:"card-icon",children:"🔄"}),r.jsx("h2",{className:"card-title",children:"Application Process"})]}),r.jsx("div",{className:"process-steps",children:[{step:1,title:"Application Screening",icon:"📝"},{step:2,title:"Shortlist Interviews",icon:"🎤"},{step:3,title:"Final Selection & Mentor Matching",icon:"🤝"}].map((f,h)=>r.jsxs(j.div,{className:"process-step",custom:h,variants:o,initial:"hidden",animate:"visible",children:[r.jsx("div",{className:"step-number",children:f.step}),r.jsxs("div",{className:"step-content",children:[r.jsx("span",{className:"step-icon",children:f.icon}),r.jsx("span",{className:"step-title",children:f.title})]})]},h))})]})]}),r.jsxs(j.section,{className:"highlights-section",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:[r.jsx("h2",{className:"section-title",children:"Program Highlights"}),r.jsx("div",{className:"highlights-grid",children:u.map((f,h)=>r.jsxs(j.div,{className:"highlight-card",whileHover:{y:-8,scale:1.02},transition:{duration:.2},children:[r.jsx("div",{className:"highlight-icon",children:f.icon}),r.jsx("h3",{className:"highlight-title",children:f.title}),r.jsx("p",{className:"highlight-description",children:f.description})]},h))})]}),r.jsx(j.section,{className:"impact-section",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.6},children:r.jsxs("div",{className:"impact-wrapper",children:[r.jsx("div",{className:"impact-icon",children:"📊"}),r.jsx("h2",{className:"section-title",children:"Impact at a Glance"}),r.jsxs("div",{className:"impact-stats",children:[r.jsxs("div",{className:"stat",children:[r.jsx(j.span,{className:"stat-number",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{delay:.8,duration:.5},children:"12"}),r.jsx("span",{className:"stat-label",children:"Months of Intensive Training"})]}),r.jsx("div",{className:"stat-divider"}),r.jsxs("div",{className:"stat",children:[r.jsx(j.span,{className:"stat-number",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{delay:.9,duration:.5},children:"100%"}),r.jsx("span",{className:"stat-label",children:"Africa-Focused Research"})]})]})]})}),r.jsxs(j.section,{className:"faq-section",initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.7},children:[r.jsx("h2",{className:"section-title",children:"Frequently Asked Questions"}),r.jsx("div",{className:"faq-grid",children:m.map((f,h)=>r.jsxs(j.div,{className:"faq-card",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8+h*.1,duration:.4},whileHover:{x:5},children:[r.jsxs("div",{className:"faq-question",children:[r.jsx("span",{className:"faq-icon",children:"❓"}),r.jsx("h3",{children:f.q})]}),r.jsx("p",{className:"faq-answer",children:f.a})]},h))})]}),r.jsxs(j.div,{className:"cta-wrapper",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:1},children:[r.jsxs(j.button,{className:"cta-button",whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(255, 106, 0, 0.4)"},whileTap:{scale:.98},onClick:()=>a("/careers/application"),children:[r.jsx("span",{className:"button-text",children:"Apply Now"}),r.jsx(j.span,{className:"button-icon",animate:{x:[0,5,0]},transition:{repeat:1/0,duration:1.5,ease:"easeInOut"},children:"→"})]}),r.jsx("p",{className:"cta-note",children:"Applications open until March 31, 2025"})]})]}),r.jsx("style",{children:`
        /* Main Container */
        .for-fellows {
          position: relative;
          min-height: 100vh;
          color: #ffffff;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Background Wrapper */
        .background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          animation: slowZoom 25s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(10, 15, 26, 0.94) 0%, rgba(20, 30, 50, 0.9) 100%);
        }

        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 2px, transparent 2px, transparent 8px);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        /* Page Title */
        .page-title {
          font-size: clamp(2rem, 7vw, 3.5rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #ffffff, #a8e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        .title-sub {
          display: block;
          font-size: clamp(1.2rem, 4vw, 1.8rem);
          font-weight: 500;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-top: 0.5rem;
        }

        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 1.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 106, 0, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid rgba(255, 106, 0, 0.3);
          padding-bottom: 0.8rem;
        }

        .card-icon {
          font-size: 2rem;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        /* Styled List */
        .styled-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .styled-list li {
          padding: 0.6rem 0;
          font-size: 0.95rem;
          line-height: 1.5;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .list-marker {
          color: #ff6a00;
          font-size: 1rem;
          margin-right: 0.5rem;
        }

        /* Process Steps */
        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .process-step {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.8rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .process-step:hover {
          background: rgba(255, 106, 0, 0.1);
          transform: translateX(5px);
        }

        .step-number {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
        }

        .step-content {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          flex: 1;
        }

        .step-icon {
          font-size: 1.2rem;
        }

        .step-title {
          font-size: 0.95rem;
          font-weight: 500;
        }

        /* Section Title */
        .section-title {
          font-size: clamp(1.6rem, 5vw, 2.2rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          margin: 0.5rem auto 0;
          border-radius: 3px;
        }

        /* Highlights Section */
        .highlights-section {
          margin-bottom: 4rem;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .highlight-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.8rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .highlight-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .highlight-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #ff6a00;
        }

        .highlight-description {
          font-size: 0.9rem;
          line-height: 1.5;
          opacity: 0.85;
        }

        /* Impact Section */
        .impact-section {
          margin-bottom: 4rem;
        }

        .impact-wrapper {
          background: linear-gradient(135deg, rgba(255, 106, 0, 0.15), rgba(255, 180, 71, 0.1));
          border-radius: 30px;
          padding: 2.5rem;
          text-align: center;
          border: 1px solid rgba(255, 106, 0, 0.3);
        }

        .impact-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .impact-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          display: block;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.85;
        }

        .stat-divider {
          width: 1px;
          height: 50px;
          background: rgba(255, 255, 255, 0.3);
        }

        /* FAQ Section */
        .faq-section {
          margin-bottom: 4rem;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .faq-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .faq-card:hover {
          border-color: rgba(255, 106, 0, 0.5);
        }

        .faq-question {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1rem;
        }

        .faq-icon {
          font-size: 1.3rem;
        }

        .faq-question h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
          color: #c68a3d;
        }

        .faq-answer {
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
          padding-left: 2rem;
          opacity: 0.85;
        }

        /* CTA Section */
        .cta-wrapper {
          text-align: center;
          margin-top: 2rem;
        }

        .cta-button {
          position: relative;
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          border: none;
          border-radius: 50px;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .button-text {
          position: relative;
          z-index: 1;
        }

        .button-icon {
          position: relative;
          z-index: 1;
          font-size: 1.2rem;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-note {
          margin-top: 1rem;
          font-size: 0.85rem;
          opacity: 0.7;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1.5rem;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .info-card {
            padding: 1.3rem;
          }

          .highlights-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }

          .impact-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .stat-divider {
            width: 50px;
            height: 1px;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }

          .faq-question h3 {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem 1rem;
          }

          .page-title {
            font-size: 1.8rem;
          }

          .card-title {
            font-size: 1.2rem;
          }

          .highlight-card {
            padding: 1.2rem;
          }

          .stat-number {
            font-size: 2.5rem;
          }

          .cta-button {
            padding: 0.8rem 2rem;
            font-size: 1rem;
          }
        }

        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `})]})}function UT(){const a=Ie(),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},l={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},o={hidden:{opacity:0,x:-20},visible:p=>({opacity:1,x:0,transition:{delay:p*.05,duration:.3,ease:"easeOut"}})},u={hidden:{opacity:0,scale:.8},visible:p=>({opacity:1,scale:1,transition:{delay:p*.1,duration:.4,ease:"easeOut"}})},m=[{icon:"🎯",title:"Shape Future Leaders",description:"Guide Africa's brightest minds through real-world challenges"},{icon:"🤝",title:"Expand Network",description:"Collaborate and co-author with emerging researchers"},{icon:"🎓",title:"Recruit Talent",description:"Identify exceptional candidates for graduate programs"},{icon:"🌍",title:"Drive Change",description:"Foster ethical, context-relevant research in Africa"}],f=["Provide guidance on research design, execution, and publication","Offer constructive feedback on proposals and reports","Conduct virtual check-ins (minimum twice per month)","Encourage professional and academic growth"],h=["Shape the next generation of African STEM leaders","Expand your research network in East Africa","Gain recognition on our website and publications"],g=["Master's or PhD in a STEM field","At least one peer-reviewed publication as lead author","Commitment to a six-month remote mentorship"];return r.jsxs("div",{className:"for-mentors",children:[r.jsxs("div",{className:"background-wrapper",children:[r.jsx("div",{className:"background-image",style:{backgroundImage:"url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format')"}}),r.jsx("div",{className:"gradient-overlay"}),r.jsx("div",{className:"pattern-overlay"})]}),r.jsxs("div",{className:"container",children:[r.jsxs(j.h1,{className:"page-title",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:["FOR MENTORS",r.jsx("span",{className:"title-sub",children:"Shape the Future of African Research"})]}),r.jsx(j.section,{className:"intro-section",variants:l,initial:"hidden",animate:"visible",children:r.jsxs("div",{className:"intro-card",children:[r.jsx("div",{className:"intro-icon",children:"🌟"}),r.jsx("h2",{className:"intro-title",children:"Fellowship Program Mentor Application"}),r.jsx("p",{className:"intro-text",children:"Are you passionate about shaping the future of African research and innovation? The AkiliBridge STEM Fellowship Program invites experienced researchers, academics, and industry experts to mentor Africa's brightest emerging STEM talents."}),r.jsx("p",{className:"intro-text",children:"This is your opportunity to empower the next generation of African researchers and contribute to solving pressing challenges through high-quality, ethical, and impactful research."})]})}),r.jsxs(j.div,{className:"content-grid",variants:i,initial:"hidden",animate:"visible",children:[r.jsxs(j.section,{className:"info-card",variants:l,children:[r.jsxs("div",{className:"card-header",children:[r.jsx("span",{className:"card-icon",children:"📋"}),r.jsx("h2",{className:"card-title",children:"Role & Responsibilities"})]}),r.jsx("ul",{className:"styled-list",children:f.map((p,b)=>r.jsxs(j.li,{custom:b,variants:o,initial:"hidden",animate:"visible",children:[r.jsx("span",{className:"list-marker",children:"▹"}),p]},b))})]}),r.jsxs(j.section,{className:"info-card",variants:l,children:[r.jsxs("div",{className:"card-header",children:[r.jsx("span",{className:"card-icon",children:"✨"}),r.jsx("h2",{className:"card-title",children:"Benefits of Mentoring"})]}),r.jsx("ul",{className:"styled-list",children:h.map((p,b)=>r.jsxs(j.li,{custom:b,variants:o,initial:"hidden",animate:"visible",children:[r.jsx("span",{className:"list-marker",children:"▹"}),p]},b))})]}),r.jsxs(j.section,{className:"info-card",variants:l,children:[r.jsxs("div",{className:"card-header",children:[r.jsx("span",{className:"card-icon",children:"✅"}),r.jsx("h2",{className:"card-title",children:"Eligibility to Mentor"})]}),r.jsx("ul",{className:"styled-list",children:g.map((p,b)=>r.jsxs(j.li,{custom:b,variants:o,initial:"hidden",animate:"visible",children:[r.jsx("span",{className:"list-marker",children:"▹"}),p]},b))})]})]}),r.jsxs(j.section,{className:"benefits-section",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:[r.jsx("h2",{className:"section-title",children:"Why Become an AkiliBridge Mentor?"}),r.jsx("div",{className:"benefits-grid",children:m.map((p,b)=>r.jsxs(j.div,{className:"benefit-card",whileHover:{y:-8,scale:1.02},transition:{duration:.2},children:[r.jsx("div",{className:"benefit-icon",children:p.icon}),r.jsx("h3",{className:"benefit-title",children:p.title}),r.jsx("p",{className:"benefit-description",children:p.description})]},b))})]}),r.jsxs(j.section,{className:"process-section",initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.6},children:[r.jsx("h2",{className:"section-title",children:"How to Apply"}),r.jsx("div",{className:"process-steps",children:[{step:1,title:"Complete the Mentor Application Form",icon:"📝",description:"Fill out your personal and professional details"},{step:2,title:"Provide Credentials",icon:"📚",description:"Academic credentials, publication details, and research expertise"},{step:3,title:"Profile Review & Matching",icon:"🤝",description:"Our team reviews your profile and matches you with a fellow"}].map((p,b)=>r.jsxs(j.div,{custom:b,variants:u,initial:"hidden",animate:"visible",className:"process-step",children:[r.jsx("div",{className:"step-number",children:p.step}),r.jsxs("div",{className:"step-content",children:[r.jsx("div",{className:"step-icon",children:p.icon}),r.jsxs("div",{children:[r.jsx("div",{className:"step-title",children:p.title}),r.jsx("div",{className:"step-description",children:p.description})]})]})]},b))}),r.jsxs(j.div,{className:"process-note",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.9,duration:.4},children:[r.jsx("span",{className:"note-icon",children:"📌"}),r.jsx("p",{children:"Selected mentors will receive an onboarding guide and be introduced to their mentees at the start of the program."})]})]}),r.jsxs(j.div,{className:"cta-wrapper",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:1},children:[r.jsxs(j.button,{className:"cta-button",whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(255, 106, 0, 0.4)"},whileTap:{scale:.98},onClick:()=>a("/careers/application"),children:[r.jsx("span",{className:"button-text",children:"Apply Now"}),r.jsx(j.span,{className:"button-icon",animate:{x:[0,5,0]},transition:{repeat:1/0,duration:1.5,ease:"easeInOut"},children:"→"})]}),r.jsx("p",{className:"cta-note",children:"Become a mentor and help shape Africa's research future"})]})]}),r.jsx("style",{children:`
        /* Main Container */
        .for-mentors {
          position: relative;
          min-height: 100vh;
          color: #ffffff;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Background Wrapper */
        .background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          animation: slowZoom 25s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(10, 15, 26, 0.94) 0%, rgba(20, 30, 50, 0.9) 100%);
        }

        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 2px, transparent 2px, transparent 8px);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        /* Page Title */
        .page-title {
          font-size: clamp(2rem, 7vw, 3.5rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #ffffff, #a8e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        .title-sub {
          display: block;
          font-size: clamp(1rem, 3vw, 1.3rem);
          font-weight: 500;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-top: 0.5rem;
        }

        /* Intro Section */
        .intro-section {
          margin-bottom: 3rem;
        }

        .intro-card {
          background: linear-gradient(135deg, rgba(255, 106, 0, 0.15), rgba(255, 180, 71, 0.05));
          backdrop-filter: blur(10px);
          border-radius: 30px;
          padding: 2.5rem;
          text-align: center;
          border: 1px solid rgba(255, 106, 0, 0.3);
        }

        .intro-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .intro-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .intro-text {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 1.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 106, 0, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid rgba(255, 106, 0, 0.3);
          padding-bottom: 0.8rem;
        }

        .card-icon {
          font-size: 2rem;
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        /* Styled List */
        .styled-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .styled-list li {
          padding: 0.6rem 0;
          font-size: 0.95rem;
          line-height: 1.5;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .list-marker {
          color: #ff6a00;
          font-size: 1rem;
          margin-right: 0.5rem;
        }

        /* Section Title */
        .section-title {
          font-size: clamp(1.6rem, 5vw, 2.2rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          margin: 0.5rem auto 0;
          border-radius: 3px;
        }

        /* Benefits Section */
        .benefits-section {
          margin-bottom: 4rem;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .benefit-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.8rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .benefit-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .benefit-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #ff6a00;
        }

        .benefit-description {
          font-size: 0.9rem;
          line-height: 1.5;
          opacity: 0.85;
        }

        /* Process Section */
        .process-section {
          margin-bottom: 4rem;
        }

        .process-steps {
          max-width: 800px;
          margin: 0 auto;
        }

        .process-step {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 1.2rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .process-step:hover {
          background: rgba(255, 106, 0, 0.1);
          transform: translateX(8px);
        }

        .step-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .step-content {
          display: flex;
          gap: 1rem;
          flex: 1;
        }

        .step-icon {
          font-size: 1.5rem;
        }

        .step-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .step-description {
          font-size: 0.85rem;
          opacity: 0.7;
        }

        .process-note {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 106, 0, 0.1);
          border-radius: 16px;
          padding: 1.2rem;
          margin-top: 2rem;
          border-left: 3px solid #ff6a00;
        }

        .note-icon {
          font-size: 1.5rem;
        }

        .process-note p {
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* CTA Section */
        .cta-wrapper {
          text-align: center;
          margin-top: 2rem;
        }

        .cta-button {
          position: relative;
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          border: none;
          border-radius: 50px;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .button-text {
          position: relative;
          z-index: 1;
        }

        .button-icon {
          position: relative;
          z-index: 1;
          font-size: 1.2rem;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-note {
          margin-top: 1rem;
          font-size: 0.85rem;
          opacity: 0.7;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1.5rem;
          }

          .intro-card {
            padding: 1.5rem;
          }

          .intro-title {
            font-size: 1.4rem;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .info-card {
            padding: 1.3rem;
          }

          .card-title {
            font-size: 1.2rem;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .process-step {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .step-content {
            flex-direction: column;
            align-items: center;
          }

          .process-note {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem 1rem;
          }

          .page-title {
            font-size: 1.8rem;
          }

          .intro-text {
            font-size: 0.9rem;
          }

          .benefit-card {
            padding: 1.2rem;
          }

          .cta-button {
            padding: 0.8rem 2rem;
            font-size: 1rem;
          }
        }

        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `})]})}function qT(){const[a,i]=S.useState({fullName:"",email:"",phone:"",university:"",degree:"",year:"",country:"",gpa:"",availability:"",timezone:"",lab1:"",lab2:"",portfolio:"",cv:null,transcript:null,sop:null,sampleWork:null}),[l,o]=S.useState(!1),[u,m]=S.useState(!1),f=b=>{const{name:v,value:w,files:T}=b.target;i({...a,[v]:T?T[0]:w})},h=async b=>{b.preventDefault(),o(!0);const v=new FormData;v.append("full_name",a.fullName),v.append("email",a.email),v.append("phone_number",a.phone),v.append("country",a.country),v.append("university",a.university),v.append("degree_program",a.degree),v.append("year_of_study",a.year),v.append("gpa",a.gpa),v.append("availability",a.availability),v.append("time_zone",a.timezone),v.append("target_lab_first",a.lab1),a.lab2&&v.append("target_lab_second",a.lab2),a.portfolio&&v.append("portfolio_link",a.portfolio),a.cv&&v.append("cv",a.cv),a.transcript&&v.append("transcript",a.transcript),a.sop&&v.append("statement",a.sop),a.sampleWork&&v.append("sample_work",a.sampleWork);try{const w=await Xe("/api/fellowship/undergraduate-applications/",{method:"POST",body:v});if(w.ok)m(!0),i({fullName:"",email:"",phone:"",university:"",degree:"",year:"",country:"",gpa:"",availability:"",timezone:"",lab1:"",lab2:"",portfolio:"",cv:null,transcript:null,sop:null,sampleWork:null}),alert("Application submitted successfully!");else{const T=await w.json().catch(()=>null);console.error("Backend error:",T),alert(T?.detail||T?.message||"Error submitting application. Please try again.")}}catch(w){console.error("Network error:",w),alert("Network error. Please try again later.")}finally{o(!1)}},g={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.05,delayChildren:.2}}},p={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut"}}};return r.jsxs("div",{className:"careers-application",children:[r.jsxs("div",{className:"background-wrapper",children:[r.jsx("div",{className:"background-image",style:{backgroundImage:"url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format')"}}),r.jsx("div",{className:"gradient-overlay"}),r.jsx("div",{className:"pattern-overlay"})]}),r.jsxs("div",{className:"container",children:[r.jsxs(j.div,{className:"header-section",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[r.jsxs("div",{className:"header-badge",children:[r.jsx("span",{className:"badge-icon",children:"🚀"}),"Join Our Team"]}),r.jsx("h1",{className:"page-title",children:"Career Application Form"}),r.jsx("p",{className:"header-description",children:"Take the next step in your research career. Apply to join the AkiliBridge community and contribute to groundbreaking research that shapes Africa's future."})]}),r.jsxs(j.form,{className:"application-form",onSubmit:h,variants:g,initial:"hidden",animate:"visible",children:[r.jsxs(j.div,{className:"form-section",variants:p,children:[r.jsxs("div",{className:"section-header",children:[r.jsx("span",{className:"section-icon",children:"👤"}),r.jsx("h2",{className:"section-title",children:"Personal Information"})]}),r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Full Name *"}),r.jsx("input",{name:"fullName",type:"text",placeholder:"Enter your full name",value:a.fullName,required:!0,onChange:f,className:"form-input"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Email Address *"}),r.jsx("input",{name:"email",type:"email",placeholder:"your.email@example.com",value:a.email,required:!0,onChange:f,className:"form-input"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Phone Number *"}),r.jsx("input",{name:"phone",type:"tel",placeholder:"+250 788 123 456",value:a.phone,required:!0,onChange:f,className:"form-input"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Country *"}),r.jsx("input",{name:"country",type:"text",placeholder:"Your country",value:a.country,required:!0,onChange:f,className:"form-input"})]})]})]}),r.jsxs(j.div,{className:"form-section",variants:p,children:[r.jsxs("div",{className:"section-header",children:[r.jsx("span",{className:"section-icon",children:"🎓"}),r.jsx("h2",{className:"section-title",children:"Academic Information"})]}),r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"University & Department *"}),r.jsx("input",{name:"university",type:"text",placeholder:"University name and department",value:a.university,required:!0,onChange:f,className:"form-input"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Degree Program *"}),r.jsx("input",{name:"degree",type:"text",placeholder:"Bachelor of Science in ...",value:a.degree,required:!0,onChange:f,className:"form-input"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Year of Study *"}),r.jsx("input",{name:"year",type:"text",placeholder:"3rd Year / Final Year",value:a.year,required:!0,onChange:f,className:"form-input"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"GPA (on 4.0 scale or %) *"}),r.jsx("input",{name:"gpa",type:"text",placeholder:"3.5 / 85%",value:a.gpa,required:!0,onChange:f,className:"form-input"})]})]})]}),r.jsxs(j.div,{className:"form-section",variants:p,children:[r.jsxs("div",{className:"section-header",children:[r.jsx("span",{className:"section-icon",children:"⏰"}),r.jsx("h2",{className:"section-title",children:"Availability"})]}),r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Weekly Availability *"}),r.jsx("input",{name:"availability",type:"text",placeholder:"e.g., 10-15 hours/week",value:a.availability,required:!0,onChange:f,className:"form-input"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Time Zone *"}),r.jsx("input",{name:"timezone",type:"text",placeholder:"e.g., EAT (UTC+3)",value:a.timezone,required:!0,onChange:f,className:"form-input"})]})]})]}),r.jsxs(j.div,{className:"form-section",variants:p,children:[r.jsxs("div",{className:"section-header",children:[r.jsx("span",{className:"section-icon",children:"🔬"}),r.jsx("h2",{className:"section-title",children:"Research Preferences"})]}),r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Target Lab (First Choice) *"}),r.jsx("input",{name:"lab1",type:"text",placeholder:"AI Research Lab / Biotech Lab",value:a.lab1,required:!0,onChange:f,className:"form-input"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Target Lab (Second Choice)"}),r.jsx("input",{name:"lab2",type:"text",placeholder:"Alternative lab preference",value:a.lab2,onChange:f,className:"form-input"})]}),r.jsxs("div",{className:"form-group full-width",children:[r.jsx("label",{className:"form-label",children:"Portfolio / GitHub Link"}),r.jsx("input",{name:"portfolio",type:"url",placeholder:"https://github.com/yourusername",value:a.portfolio,onChange:f,className:"form-input"})]})]})]}),r.jsxs(j.div,{className:"form-section",variants:p,children:[r.jsxs("div",{className:"section-header",children:[r.jsx("span",{className:"section-icon",children:"📄"}),r.jsx("h2",{className:"section-title",children:"Required Documents"})]}),r.jsxs("div",{className:"uploads-grid",children:[r.jsxs("div",{className:"upload-group",children:[r.jsxs("label",{className:"upload-label",children:[r.jsx("span",{className:"upload-icon",children:"📑"}),"CV / Résumé *",r.jsx("span",{className:"file-info",children:"(PDF, max 5MB)"})]}),r.jsx("input",{name:"cv",type:"file",accept:".pdf",required:!0,onChange:f,className:"file-input"})]}),r.jsxs("div",{className:"upload-group",children:[r.jsxs("label",{className:"upload-label",children:[r.jsx("span",{className:"upload-icon",children:"📊"}),"Academic Transcript *",r.jsx("span",{className:"file-info",children:"(PDF, max 5MB)"})]}),r.jsx("input",{name:"transcript",type:"file",accept:".pdf",required:!0,onChange:f,className:"file-input"})]}),r.jsxs("div",{className:"upload-group",children:[r.jsxs("label",{className:"upload-label",children:[r.jsx("span",{className:"upload-icon",children:"✍️"}),"Statement of Purpose *",r.jsx("span",{className:"file-info",children:"(PDF, max 5MB)"})]}),r.jsx("input",{name:"sop",type:"file",accept:".pdf",required:!0,onChange:f,className:"file-input"})]}),r.jsxs("div",{className:"upload-group",children:[r.jsxs("label",{className:"upload-label",children:[r.jsx("span",{className:"upload-icon",children:"🎨"}),"Sample Work (Optional)",r.jsx("span",{className:"file-info",children:"(PDF, max 10MB)"})]}),r.jsx("input",{name:"sampleWork",type:"file",accept:".pdf,.doc,.docx",onChange:f,className:"file-input"})]})]})]}),r.jsxs(j.div,{className:"submit-section",variants:p,children:[r.jsx("button",{type:"submit",className:"submit-button",disabled:l,children:l?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"spinner"}),"Submitting..."]}):r.jsxs(r.Fragment,{children:[r.jsx("span",{children:"Submit Application"}),r.jsx("span",{className:"button-arrow",children:"→"})]})}),u&&r.jsx(j.div,{className:"success-message",initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0},children:"✓ Application submitted successfully! We'll be in touch soon."}),r.jsx("p",{className:"form-note",children:"* Required fields. All documents should be in PDF format. Maximum file size: 10MB per file."})]})]})]})]})}function GT(){const a={fullName:"",email:"",phone:"",university:"",degree:"",year:"",country:"",gpa:"",availability:"",timezone:"",labFirst:"",labSecond:"",portfolio:"",sampleWork:null,sop:null,cv:null,transcript:null},[i,l]=S.useState(a),[o,u]=S.useState(!1),[m,f]=S.useState(!1),[h,g]=S.useState({}),p=N=>{const{name:A,value:M,files:R}=N.target;l({...i,[A]:R?R[0]:M}),h[A]&&g({...h,[A]:""})},b=()=>{const N={};return i.fullName||(N.fullName="Please fill out this field."),i.email||(N.email="Please fill out this field."),i.phone||(N.phone="Please fill out this field."),i.university||(N.university="Please fill out this field."),i.degree||(N.degree="Please fill out this field."),i.year||(N.year="Please fill out this field."),i.country||(N.country="Please fill out this field."),i.gpa||(N.gpa="Please fill out this field."),i.availability||(N.availability="Please fill out this field."),i.timezone||(N.timezone="Please fill out this field."),i.cv||(N.cv="Please upload your CV (PDF)."),i.transcript||(N.transcript="Please upload your transcript (PDF)."),g(N),Object.keys(N).length===0},v=async N=>{if(N.preventDefault(),!b())return;u(!0);const A=new FormData;A.append("full_name",i.fullName),A.append("email",i.email),A.append("country",i.country),A.append("discipline",i.degree),A.append("phone",i.phone),A.append("university",i.university),A.append("degree",i.degree),A.append("year",i.year),A.append("gpa",i.gpa),A.append("availability",i.availability),A.append("timezone",i.timezone),A.append("lab1",i.labFirst),i.labSecond&&A.append("lab2",i.labSecond),i.portfolio&&A.append("portfolio",i.portfolio),i.sampleWork&&A.append("sampleWork",i.sampleWork),i.sop&&A.append("sop",i.sop),i.cv&&A.append("cv",i.cv),i.transcript&&A.append("transcript",i.transcript);try{const M=await Xe("/api/fellowship/applications/",{method:"POST",body:A});if(!M.ok){const R=await M.json().catch(()=>null),L=R?.detail||(R&&typeof R=="object"?Object.entries(R).map(([q,P])=>`${q}: ${Array.isArray(P)?P.join(", "):P}`).join("; "):"Error submitting application. Please try again.");throw new Error(L)}f(!0),l(a),setTimeout(()=>f(!1),5e3)}catch(M){alert(M.message||"Error submitting application. Please try again.")}finally{u(!1)}},w=["EdTech & Digital Learning Lab","Energy Storage & Battery Technology Lab","Nanotechnology & Advanced Materials Lab","Artificial Intelligence & Data Science Lab","Biotechnology & Health Innovations Lab","Renewable Energy Systems Lab","Civil & Environmental Engineering Lab","ICT & Emerging Technologies Lab"],T={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.05,delayChildren:.2}}},C={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut"}}};return r.jsxs("div",{className:"careers-application",children:[r.jsxs("div",{className:"background-wrapper",children:[r.jsx("div",{className:"background-image",style:{backgroundImage:"url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format')"}}),r.jsx("div",{className:"gradient-overlay"}),r.jsx("div",{className:"pattern-overlay"})]}),r.jsxs("div",{className:"container",children:[r.jsxs(j.div,{className:"header-section",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[r.jsxs("div",{className:"header-badge",children:[r.jsx("img",{className:"badge-icon",src:"/akili_bridge_social_icon_256.png",alt:"AkiliBridge icon"}),"Join Our Team"]}),r.jsx("h1",{className:"page-title",children:"Careers Application Form"}),r.jsx("p",{className:"header-description",children:"Submit your application to join AkiliBridge and become part of Africa's research revolution. We're looking for passionate, driven individuals ready to make an impact."})]}),r.jsxs(j.form,{className:"application-form",onSubmit:v,variants:T,initial:"hidden",animate:"visible",children:[r.jsxs(j.div,{className:"form-section",variants:C,children:[r.jsxs("div",{className:"section-header",children:[r.jsx("img",{className:"section-icon",src:"/akili_bridge_social_icon_256.png",alt:"Section icon"}),r.jsx("h2",{className:"section-title",children:"Personal Information"})]}),r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Full name *"}),r.jsx("input",{name:"fullName",type:"text",placeholder:"Full name",value:i.fullName,onChange:p,className:`form-input ${h.fullName?"error":""}`}),h.fullName&&r.jsx("span",{className:"error-message",children:h.fullName})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Your Email *"}),r.jsx("input",{name:"email",type:"email",placeholder:"Your Email",value:i.email,onChange:p,className:`form-input ${h.email?"error":""}`}),h.email&&r.jsx("span",{className:"error-message",children:h.email})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Phone *"}),r.jsx("input",{name:"phone",type:"tel",placeholder:"Phone",value:i.phone,onChange:p,className:`form-input ${h.phone?"error":""}`}),h.phone&&r.jsx("span",{className:"error-message",children:h.phone})]})]})]}),r.jsxs(j.div,{className:"form-section",variants:C,children:[r.jsxs("div",{className:"section-header",children:[r.jsx("img",{className:"section-icon",src:"/akili_bridge_social_icon_256.png",alt:"Section icon"}),r.jsx("h2",{className:"section-title",children:"Academic Information"})]}),r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"University and department *"}),r.jsx("input",{name:"university",type:"text",placeholder:"Enter your University and department",value:i.university,onChange:p,className:`form-input ${h.university?"error":""}`}),h.university&&r.jsx("span",{className:"error-message",children:h.university})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Degree program *"}),r.jsx("input",{name:"degree",type:"text",placeholder:"Enter your Degree program",value:i.degree,onChange:p,className:`form-input ${h.degree?"error":""}`}),h.degree&&r.jsx("span",{className:"error-message",children:h.degree})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Year of study *"}),r.jsx("input",{name:"year",type:"text",placeholder:"Enter Year of study",value:i.year,onChange:p,className:`form-input ${h.year?"error":""}`}),h.year&&r.jsx("span",{className:"error-message",children:h.year})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Your Country *"}),r.jsx("input",{name:"country",type:"text",placeholder:"Enter Your Country",value:i.country,onChange:p,className:`form-input ${h.country?"error":""}`}),h.country&&r.jsx("span",{className:"error-message",children:h.country})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"GPA on a 4.0 scale or percentage mark *"}),r.jsx("input",{name:"gpa",type:"text",placeholder:"Enter GPA on a 4.0 scale or percentage mark",value:i.gpa,onChange:p,className:`form-input ${h.gpa?"error":""}`}),h.gpa&&r.jsx("span",{className:"error-message",children:h.gpa})]})]})]}),r.jsxs(j.div,{className:"form-section",variants:C,children:[r.jsxs("div",{className:"section-header",children:[r.jsx("img",{className:"section-icon",src:"/akili_bridge_social_icon_256.png",alt:"Section icon"}),r.jsx("h2",{className:"section-title",children:"Availability"})]}),r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Weekly availability *"}),r.jsx("input",{name:"availability",type:"text",placeholder:"e.g., 10-15 hours/week",value:i.availability,onChange:p,className:`form-input ${h.availability?"error":""}`}),h.availability&&r.jsx("span",{className:"error-message",children:h.availability})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Time zone *"}),r.jsx("input",{name:"timezone",type:"text",placeholder:"Enter Time zone",value:i.timezone,onChange:p,className:`form-input ${h.timezone?"error":""}`}),h.timezone&&r.jsx("span",{className:"error-message",children:h.timezone})]})]})]}),r.jsxs(j.div,{className:"form-section",variants:C,children:[r.jsxs("div",{className:"section-header",children:[r.jsx("img",{className:"section-icon",src:"/akili_bridge_social_icon_256.png",alt:"Section icon"}),r.jsx("h2",{className:"section-title",children:"Lab Preferences"})]}),r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Target lab preference first choice *"}),r.jsxs("select",{name:"labFirst",value:i.labFirst,onChange:p,className:"form-select",children:[r.jsx("option",{value:"",children:"Select your first choice lab"}),w.map((N,A)=>r.jsx("option",{value:N,children:N},A))]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Target lab preference second choice *"}),r.jsxs("select",{name:"labSecond",value:i.labSecond,onChange:p,className:"form-select",children:[r.jsx("option",{value:"",children:"Select your second choice lab"}),w.map((N,A)=>r.jsx("option",{value:N,children:N},A))]})]})]})]}),r.jsxs(j.div,{className:"form-section",variants:C,children:[r.jsxs("div",{className:"section-header",children:[r.jsx("img",{className:"section-icon",src:"/akili_bridge_social_icon_256.png",alt:"Section icon"}),r.jsx("h2",{className:"section-title",children:"Portfolio & Links"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Links to portfolio or GitHub"}),r.jsx("input",{name:"portfolio",type:"url",placeholder:"https://github.com/yourusername",value:i.portfolio,onChange:p,className:"form-input"})]})]}),r.jsxs(j.div,{className:"form-section",variants:C,children:[r.jsxs("div",{className:"section-header",children:[r.jsx("img",{className:"section-icon",src:"/akili_bridge_social_icon_256.png",alt:"Section icon"}),r.jsx("h2",{className:"section-title",children:"Required Documents"})]}),r.jsxs("div",{className:"uploads-grid",children:[r.jsxs("div",{className:"upload-group",children:[r.jsxs("label",{className:"upload-label",children:[r.jsx("span",{className:"upload-icon",children:"📑"}),"Upload sample work file or link"]}),r.jsxs("div",{className:"file-input-wrapper",children:[r.jsx("input",{name:"sampleWork",type:"file",accept:".pdf,.doc,.docx",onChange:p,className:"file-input",id:"sampleWork"}),r.jsx("label",{htmlFor:"sampleWork",className:"file-input-label",children:"Choose Files"}),r.jsx("span",{className:"file-name",children:i.sampleWork?i.sampleWork.name:"No file chosen"})]})]}),r.jsxs("div",{className:"upload-group",children:[r.jsxs("label",{className:"upload-label",children:[r.jsx("span",{className:"upload-icon",children:"✍️"}),"Upload Statement of Purpose"]}),r.jsxs("div",{className:"file-input-wrapper",children:[r.jsx("input",{name:"sop",type:"file",accept:".pdf",onChange:p,className:"file-input",id:"sop"}),r.jsx("label",{htmlFor:"sop",className:"file-input-label",children:"Choose Files"}),r.jsx("span",{className:"file-name",children:i.sop?i.sop.name:"No file chosen"})]})]}),r.jsxs("div",{className:"upload-group",children:[r.jsxs("label",{className:"upload-label required",children:[r.jsx("span",{className:"upload-icon",children:"📄"}),"Upload CV PDF *"]}),r.jsxs("div",{className:"file-input-wrapper",children:[r.jsx("input",{name:"cv",type:"file",accept:".pdf",required:!0,onChange:p,className:`file-input ${h.cv?"error":""}`,id:"cv"}),r.jsx("label",{htmlFor:"cv",className:"file-input-label",children:"Choose Files"}),r.jsx("span",{className:"file-name",children:i.cv?i.cv.name:"No file chosen"})]}),h.cv&&r.jsx("span",{className:"error-message",children:h.cv})]}),r.jsxs("div",{className:"upload-group",children:[r.jsxs("label",{className:"upload-label required",children:[r.jsx("span",{className:"upload-icon",children:"📊"}),"Upload transcript PDF *"]}),r.jsxs("div",{className:"file-input-wrapper",children:[r.jsx("input",{name:"transcript",type:"file",accept:".pdf",required:!0,onChange:p,className:`file-input ${h.transcript?"error":""}`,id:"transcript"}),r.jsx("label",{htmlFor:"transcript",className:"file-input-label",children:"Choose Files"}),r.jsx("span",{className:"file-name",children:i.transcript?i.transcript.name:"No file chosen"})]}),h.transcript&&r.jsx("span",{className:"error-message",children:h.transcript})]})]})]}),r.jsxs(j.div,{className:"submit-section",variants:C,children:[r.jsx("button",{type:"submit",className:"submit-button",disabled:o,children:o?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"spinner"}),"Submitting..."]}):r.jsxs(r.Fragment,{children:[r.jsx("span",{children:"Send"}),r.jsx("span",{className:"button-arrow",children:"→"})]})}),r.jsx(dt,{children:m&&r.jsx(j.div,{className:"success-message",initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:"✓ Application submitted successfully! We'll be in touch soon."})}),r.jsx("p",{className:"form-note",children:"* Required fields. All documents should be in PDF format. Maximum file size: 10MB per file."})]})]})]}),r.jsx("style",{children:`
        /* Main Container */
        .careers-application {
          position: relative;
          min-height: 100vh;
          color: #ffffff;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Background Wrapper */
        .background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          animation: slowZoom 25s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(10, 15, 26, 0.94) 0%, rgba(20, 30, 50, 0.9) 100%);
        }

        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 2px, transparent 2px, transparent 8px);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        /* Header Section */
        .header-section {
          text-align: center;
          margin-bottom: 3rem;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 106, 0, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 106, 0, 0.5);
        }

        .badge-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          object-fit: cover;
        }

        .page-title {
          font-size: clamp(2rem, 6vw, 3rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #a8e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        .header-description {
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          opacity: 0.85;
        }

        /* Form Styles */
        .application-form {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .form-section {
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .form-section:last-of-type {
          border-bottom: none;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .section-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          object-fit: cover;
        }

        .section-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0;
          background: linear-gradient(135deg, #8bd6ff, #2fb3ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .form-input,
        .form-select {
          padding: 0.8rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          color: #ffffff;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .form-input.error,
        .form-select.error {
          border-color: #e74c3c;
        }

        .form-input:focus,
        .form-select:focus {
          outline: none;
          border-color: #ff6a00;
          background: rgba(255, 106, 0, 0.1);
          box-shadow: 0 0 0 2px rgba(255, 106, 0, 0.2);
        }

        .form-input::placeholder,
        .form-select::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .error-message {
          font-size: 0.7rem;
          color: #e74c3c;
          margin-top: 0.3rem;
        }

        /* Upload Section */
        .uploads-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.2rem;
        }

        .upload-group {
          display: flex;
          flex-direction: column;
        }

        .upload-label {
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .upload-label.required::after {
          content: "*";
          color: #e74c3c;
          margin-left: 0.2rem;
        }

        .upload-icon {
          font-size: 1rem;
        }

        .file-input-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .file-input {
          display: none;
        }

        .file-input-label {
          padding: 0.6rem 1.2rem;
          background: rgba(255, 106, 0, 0.2);
          border: 1px solid rgba(255, 106, 0, 0.5);
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.85rem;
          transition: all 0.3s ease;
        }

        .file-input-label:hover {
          background: rgba(255, 106, 0, 0.4);
        }

        .file-name {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Submit Section */
        .submit-section {
          margin-top: 2rem;
          text-align: center;
        }

        .submit-button {
          position: relative;
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          border: none;
          border-radius: 50px;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .submit-button:hover:not(:disabled) {
          transform: scale(1.02);
          box-shadow: 0 5px 20px rgba(255, 106, 0, 0.4);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .button-arrow {
          font-size: 1.1rem;
          transition: transform 0.3s ease;
        }

        .submit-button:hover:not(:disabled) .button-arrow {
          transform: translateX(5px);
        }

        .spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .success-message {
          margin-top: 1rem;
          padding: 0.8rem;
          background: rgba(76, 175, 80, 0.2);
          border: 1px solid #4caf50;
          border-radius: 10px;
          color: #4caf50;
          font-size: 0.9rem;
        }

        .form-note {
          margin-top: 1rem;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          text-align: center;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1rem;
          }

          .application-form {
            padding: 1.5rem;
          }

          .form-grid,
          .uploads-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 1.1rem;
          }

          .section-icon {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .page-title {
            font-size: 1.8rem;
          }

          .header-description {
            font-size: 0.9rem;
          }

          .application-form {
            padding: 1rem;
          }

          .form-input,
          .form-select {
            padding: 0.6rem 0.8rem;
          }

          .submit-button {
            padding: 0.8rem 2rem;
            font-size: 0.9rem;
          }

          .file-input-label {
            padding: 0.5rem 1rem;
          }
        }

        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `})]})}function YT(){const{token:a}=zd(),i=Ie(),[l,o]=S.useState({new_password:"",confirm_password:""}),[u,m]=S.useState(null),[f,h]=S.useState(null),[g,p]=S.useState(!1),[b,v]=S.useState(!1),[w,T]=S.useState(!0);S.useEffect(()=>{(async()=>{try{const M=await Xe("/api/auth/verify-password-reset-token/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:a})});if(M.ok){const R=await M.json();R.valid?v(!0):m(R.error||"Invalid or expired reset link")}else{const R=await M.json().catch(()=>null);m(R?.error||"Invalid or expired reset link. Please request a new one.")}}catch{m("Failed to verify reset link. Please try again.")}finally{T(!1)}})()},[a]);const C=A=>{o({...l,[A.target.name]:A.target.value}),u&&m(null)},N=async A=>{if(A.preventDefault(),p(!0),m(null),l.new_password!==l.confirm_password){m("Passwords do not match"),p(!1);return}if(l.new_password.length<8){m("Password must be at least 8 characters"),p(!1);return}try{const M=await Xe("/api/auth/reset-password/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:a,new_password:l.new_password,confirm_password:l.confirm_password})});if(!M.ok){const R=await M.json().catch(()=>null);throw new Error(R?.error||"Failed to reset password")}h("Password reset successful! Redirecting to login..."),setTimeout(()=>{i("/auth")},3e3)}catch(M){m(M.message),p(!1)}};return w?r.jsx("div",{className:"auth-container",children:r.jsxs("div",{className:"auth-form",children:[r.jsx("h2",{className:"auth-title",children:"Verifying Reset Link..."}),r.jsx("div",{className:"loading-spinner",children:"Please wait while we verify your request."})]})}):!b&&u?r.jsx("div",{className:"auth-container",children:r.jsxs("div",{className:"auth-form",children:[r.jsx("h2",{className:"auth-title",children:"Invalid Reset Link"}),r.jsx("p",{className:"auth-error",children:u}),r.jsx("button",{onClick:()=>i("/auth"),className:"auth-submit",style:{marginTop:"20px"},children:"Back to Login"})]})}):r.jsx("div",{className:"auth-container",children:r.jsxs(j.form,{onSubmit:N,className:"auth-form",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[r.jsx("h2",{className:"auth-title",children:"Reset Password"}),r.jsxs(dt,{children:[u&&r.jsx(j.p,{className:"auth-error",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:u}),f&&r.jsx(j.p,{className:"auth-success",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:f})]}),r.jsx("input",{type:"password",name:"new_password",placeholder:"New Password",value:l.new_password,onChange:C,className:"auth-input",required:!0}),r.jsx("input",{type:"password",name:"confirm_password",placeholder:"Confirm New Password",value:l.confirm_password,onChange:C,className:"auth-input",required:!0}),r.jsx("button",{type:"submit",className:"auth-submit",disabled:g,children:g?"Resetting...":"Reset Password"}),r.jsx("div",{className:"auth-switch",children:r.jsx("button",{type:"button",onClick:()=>i("/auth"),className:"switch-btn",children:"Back to Login"})})]})})}function FT(){const{token:a}=zd(),i=Ie(),[l,o]=S.useState("verifying"),[u,m]=S.useState("");return S.useEffect(()=>{(async()=>{try{const h=await Xe(`/api/auth/confirm-email/${a}/`,{method:"POST",headers:{"Content-Type":"application/json"}});if(h.ok){const g=await h.json();o("success"),m(g.message||"Email confirmed successfully! You can now log in."),setTimeout(()=>{i("/auth")},3e3)}else{const g=await h.json().catch(()=>null);o("error"),m(g?.error||"Failed to confirm email. The link may be invalid or expired.")}}catch{o("error"),m("An error occurred. Please try again.")}})()},[a,i]),r.jsx("div",{className:"auth-container",children:r.jsxs("div",{className:"auth-form",children:[l==="verifying"&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"auth-title",children:"Verifying Email..."}),r.jsx("p",{children:"Please wait while we confirm your email address."}),r.jsx("div",{className:"loading-spinner",children:"Processing your confirmation..."})]}),l==="success"&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"auth-title",style:{color:"#48bb78"},children:"Email Confirmed!"}),r.jsx("p",{className:"auth-success",children:u}),r.jsx("p",{children:"Redirecting to login page..."})]}),l==="error"&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"auth-title",style:{color:"#f56565"},children:"Confirmation Failed"}),r.jsx("p",{className:"auth-error",children:u}),r.jsx("button",{onClick:()=>i("/auth"),className:"auth-submit",style:{marginTop:"20px"},children:"Back to Login"})]})]})})}const Wu=10,Ad=["all","pending","reviewed","accepted","rejected"],sn={fellowship:{label:"Fellowship Applications",endpoint:"/api/fellowship/applications/",dateField:"created_at",searchFields:["full_name","email","country","discipline","university"],statusField:"status",statusEndpoint:a=>`/api/fellowship/applications/${a}/`,defaultSortBy:"created_at",columns:[{label:"Name",key:"full_name"},{label:"Email",key:"email"},{label:"Country",key:"country"},{label:"Discipline",key:"discipline"},{label:"Status",key:"status"},{label:"Submitted",key:"created_at"},{label:"Actions",key:"actions"}]},undergraduate:{label:"Undergraduate Applications",endpoint:"/api/fellowship/undergraduate-applications/",dateField:"submitted_at",searchFields:["full_name","email","country","university","degree_program"],statusField:"status",statusEndpoint:a=>`/api/fellowship/undergraduate-applications/${a}/`,defaultSortBy:"submitted_at",columns:[{label:"Name",key:"full_name"},{label:"Email",key:"email"},{label:"Country",key:"country"},{label:"University",key:"university"},{label:"Status",key:"status"},{label:"Submitted",key:"submitted_at"},{label:"Actions",key:"actions"}]},newsletter:{label:"Newsletter Subscriptions",endpoint:"/api/fellowship/newsletter-subscriptions/",dateField:"created_at",searchFields:["email","first_name","last_name","role","source"],defaultSortBy:"created_at",columns:[{label:"Email",key:"email"},{label:"Name",key:"full_name"},{label:"Role",key:"role"},{label:"Source",key:"source"},{label:"Joined",key:"created_at"},{label:"Actions",key:"actions"}]}},PT={hidden:{opacity:0,x:-20,scale:.98},visible:{opacity:1,x:0,scale:1,transition:{type:"spring",stiffness:220,damping:20}},exit:{opacity:0,x:20,scale:.98,transition:{duration:.2}}};function XT(){const[a,i]=S.useState({fellowship:[],undergraduate:[],newsletter:[]}),[l,o]=S.useState("fellowship"),[u,m]=S.useState(null),[f,h]=S.useState(!0),[g,p]=S.useState(""),[b,v]=S.useState(""),[w,T]=S.useState("all"),[C,N]=S.useState(1),[A,M]=S.useState(sn.fellowship.defaultSortBy),[R,L]=S.useState("desc");S.useEffect(()=>{(async()=>{h(!0),p("");try{const[le,he,_]=await Promise.all([Xe(sn.fellowship.endpoint),Xe(sn.undergraduate.endpoint),Xe(sn.newsletter.endpoint)]),Z=[le,he,_];for(const k of Z)if(!k.ok)throw new Error("Unable to load admin dashboard data.");const[K,ce,ge]=await Promise.all(Z.map(k=>k.json()));i({fellowship:K,undergraduate:ce,newsletter:ge})}catch(le){console.error(le),p(le.message||"Unable to load admin dashboard data.")}finally{h(!1)}})()},[]),S.useEffect(()=>{N(1),v(""),T("all"),M(sn[l].defaultSortBy),L("desc")},[l]);const q=sn[l],P=a[l]||[],ie=!!q.statusField,Q=S.useMemo(()=>{const X=a.fellowship.filter(he=>he.status==="pending").length,le=a.undergraduate.filter(he=>he.status==="pending").length;return[{title:"Fellowship",value:a.fellowship.length,color:"gradient-blue",icon:"FG"},{title:"Undergraduate",value:a.undergraduate.length,color:"gradient-green",icon:"UG"},{title:"Newsletter",value:a.newsletter.length,color:"gradient-gray",icon:"NL"},{title:"Pending Reviews",value:X+le,color:"gradient-yellow",icon:"RV"}]},[a]),W=S.useMemo(()=>P.filter(X=>{const le=b.toLowerCase(),he=!le||q.searchFields.some(Z=>{const K=X[Z];return K&&String(K).toLowerCase().includes(le)})||l==="newsletter"&&`${X.first_name||""} ${X.last_name||""}`.trim().toLowerCase().includes(le),_=!ie||w==="all"||X.status===w;return he&&_}).sort((X,le)=>QT(X,le,A,R)),[q.searchFields,P,l,b,A,R,w,ie]),$=Math.max(1,Math.ceil(W.length/Wu)),I=W.slice((C-1)*Wu,C*Wu),fe=X=>{if(!(X==="actions"||X==="status")){if(A===X){L(le=>le==="asc"?"desc":"asc");return}M(X),L("asc")}},me=async(X,le)=>{const he=q.statusEndpoint;if(he)try{if(!(await Xe(he(X),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:le})})).ok)throw new Error("Could not update application status.");i(Z=>({...Z,[l]:Z[l].map(K=>K.id===X?{...K,status:le}:K)})),m(Z=>Z&&Z.id===X?{...Z,status:le}:Z)}catch(_){console.error(_),alert(_.message||"Could not update application status.")}};return r.jsxs("div",{className:"admin-dashboard",children:[r.jsxs("div",{className:"dashboard-bg",children:[r.jsx("div",{className:"dashboard-gradient"}),r.jsx("div",{className:"dashboard-particles",children:[...Array(30)].map((X,le)=>r.jsx(j.div,{className:"dashboard-particle",initial:{x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight},animate:{y:[null,-100,-200],x:[null,Math.random()*200-100],opacity:[0,.5,0]},transition:{duration:Math.random()*5+3,repeat:1/0,delay:Math.random()*5}},le))})]}),r.jsxs("div",{className:"dashboard-container",children:[r.jsxs(j.div,{className:"dashboard-header",initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6},children:[r.jsxs("div",{children:[r.jsxs("h1",{className:"dashboard-title",children:["Admin Dashboard",r.jsx(j.span,{className:"dashboard-title-glow",animate:{opacity:[.5,1,.5]},transition:{duration:2,repeat:1/0}})]}),r.jsx("p",{className:"dashboard-subtitle",children:"Review fellowship applications, undergraduate applications, and newsletter subscribers."})]}),r.jsxs(j.div,{className:"dashboard-date",whileHover:{scale:1.05},children:[r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M19 4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4Z",stroke:"currentColor",strokeWidth:"2"}),r.jsx("path",{d:"M16 2V6M8 2V6M3 10H21",stroke:"currentColor",strokeWidth:"2"})]}),r.jsx("span",{children:new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]})]}),r.jsx(j.div,{className:"stats-grid",initial:"hidden",animate:"visible",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},children:Q.map(X=>r.jsx(KT,{title:X.title,value:X.value,color:X.color,icon:X.icon},X.title))}),r.jsxs(j.div,{className:"filters-section",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},children:[r.jsx("div",{className:"section-tabs",children:Object.entries(sn).map(([X,le])=>r.jsx(j.button,{className:`filter-btn ${l===X?"active":""}`,onClick:()=>o(X),whileHover:{scale:1.05},whileTap:{scale:.95},children:le.label},X))}),r.jsxs("div",{className:"search-box",children:[r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor",strokeWidth:"2"})}),r.jsx("input",{type:"text",placeholder:`Search ${q.label.toLowerCase()}...`,value:b,onChange:X=>v(X.target.value)})]}),ie&&r.jsx("div",{className:"filter-buttons",children:Ad.map(X=>r.jsx(j.button,{className:`filter-btn ${w===X?"active":""}`,onClick:()=>T(X),whileHover:{scale:1.05},whileTap:{scale:.95},children:X.charAt(0).toUpperCase()+X.slice(1)},X))})]}),r.jsxs(j.div,{className:"table-container",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:[r.jsx("div",{className:"table-heading",children:r.jsxs("div",{children:[r.jsx("h2",{className:"table-title",children:q.label}),r.jsxs("p",{className:"table-subtitle",children:[W.length," record",W.length===1?"":"s"," match the current view."]})]})}),f?r.jsxs("div",{className:"loading-state",children:[r.jsx(j.div,{className:"loading-spinner",animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}}),r.jsx("p",{children:"Loading dashboard data..."})]}):g?r.jsxs("div",{className:"empty-state",children:[r.jsx("h3",{children:"Could not load dashboard data"}),r.jsx("p",{children:g})]}):I.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("h3",{children:"No records found"}),r.jsx("p",{children:"Try a different search or filter for this section."})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"table-wrapper",children:r.jsxs("table",{className:"premium-table",children:[r.jsx("thead",{children:r.jsx("tr",{children:q.columns.map(X=>r.jsxs("th",{children:[X.label,X.key!=="actions"&&X.key!=="status"&&r.jsx(j.button,{className:"sort-btn",onClick:()=>fe(X.key),whileHover:{scale:1.1},children:r.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M12 5L12 19M12 5L8 9M12 5L16 9",stroke:"currentColor",strokeWidth:"2"})})})]},X.key))})}),r.jsx("tbody",{children:r.jsx(dt,{children:I.map((X,le)=>r.jsx(j.tr,{layout:!0,variants:PT,initial:"hidden",animate:"visible",exit:"exit",whileHover:{y:-3,boxShadow:"0 12px 30px rgba(102, 126, 234, 0.12)"},transition:{delay:le*.03},children:ZT({activeTab:l,record:X,onOpen:()=>m({...X,__type:l}),onStatusChange:me})},`${l}-${X.id}`))})})]})}),$>1&&r.jsxs("div",{className:"pagination",children:[r.jsx(j.button,{onClick:()=>N(X=>Math.max(1,X-1)),disabled:C===1,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Previous"}),Array.from({length:$},(X,le)=>le+1).map(X=>r.jsx(j.button,{className:C===X?"active":"",onClick:()=>N(X),whileHover:{scale:1.05},whileTap:{scale:.95},children:X},X)),r.jsx(j.button,{onClick:()=>N(X=>Math.min($,X+1)),disabled:C===$,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Next"})]})]})]})]}),r.jsx(dt,{children:u&&r.jsx(j.div,{className:"modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>m(null),children:r.jsxs(j.div,{className:"modal-content",initial:{scale:.9,y:50,opacity:0},animate:{scale:1,y:0,opacity:1},exit:{scale:.9,y:50,opacity:0},transition:{type:"spring",damping:25},onClick:X=>X.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsxs("div",{className:"modal-header-info",children:[r.jsx("div",{className:"modal-avatar",children:Ps(u).charAt(0)}),r.jsxs("div",{children:[r.jsx("h2",{children:Ps(u)}),r.jsx("p",{children:sn[u.__type].label})]})]}),r.jsx(j.button,{className:"modal-close",onClick:()=>m(null),whileHover:{scale:1.1,rotate:90},whileTap:{scale:.9},children:"x"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsx("div",{className:"info-grid",children:WT(u).map(X=>r.jsx(JT,{label:X.label,value:X.value,icon:X.icon},`${X.label}-${X.value}`))}),u.portfolio&&r.jsxs("div",{className:"portfolio-link",children:[r.jsx("h3",{children:"Portfolio"}),r.jsx("a",{href:u.portfolio,target:"_blank",rel:"noreferrer",children:u.portfolio})]}),u.portfolio_link&&r.jsxs("div",{className:"portfolio-link",children:[r.jsx("h3",{children:"Portfolio"}),r.jsx("a",{href:u.portfolio_link,target:"_blank",rel:"noreferrer",children:u.portfolio_link})]}),cy(u).length>0&&r.jsxs("div",{className:"documents-section",children:[r.jsx("h3",{children:"Documents"}),r.jsx("div",{className:"documents-grid",children:cy(u).map(X=>r.jsx(IT,{url:X.url,title:X.title,icon:X.icon},X.title))})]})]}),r.jsxs("div",{className:"modal-footer",children:[r.jsx(j.button,{className:"btn-secondary",onClick:()=>m(null),whileHover:{scale:1.05},whileTap:{scale:.95},children:"Close"}),u.__type!=="newsletter"&&r.jsx(j.button,{className:"btn-primary",onClick:()=>me(u.id,"accepted"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"Accept Application"})]})]})})})]})}function ZT({activeTab:a,record:i,onOpen:l,onStatusChange:o}){return a==="newsletter"?r.jsxs(r.Fragment,{children:[r.jsx("td",{"data-label":"Email",children:i.email}),r.jsx("td",{"data-label":"Name",children:r.jsxs("div",{className:"applicant-name",children:[r.jsx("div",{className:"avatar",children:Ps(i).charAt(0)}),Ps(i)]})}),r.jsx("td",{"data-label":"Role",children:r.jsx("span",{className:"meta-badge",children:i.role||"Subscriber"})}),r.jsx("td",{"data-label":"Source",children:i.source||"Unknown"}),r.jsx("td",{"data-label":"Joined",children:Vl(i.created_at)}),r.jsx("td",{"data-label":"Actions",children:r.jsx(j.button,{className:"view-btn",onClick:l,whileHover:{scale:1.05},whileTap:{scale:.95},children:"View Details"})})]}):a==="undergraduate"?r.jsxs(r.Fragment,{children:[r.jsx("td",{"data-label":"Name",children:r.jsxs("div",{className:"applicant-name",children:[r.jsx("div",{className:"avatar",children:i.full_name?.charAt(0)}),i.full_name]})}),r.jsx("td",{"data-label":"Email",children:i.email}),r.jsx("td",{"data-label":"Country",children:i.country}),r.jsx("td",{"data-label":"University",children:i.university}),r.jsx("td",{"data-label":"Status",children:r.jsx("select",{value:i.status,onChange:u=>o(i.id,u.target.value),className:`status-select status-${i.status}`,children:Ad.filter(u=>u!=="all").map(u=>r.jsx("option",{value:u,children:u.charAt(0).toUpperCase()+u.slice(1)},u))})}),r.jsx("td",{"data-label":"Submitted",children:Vl(i.submitted_at)}),r.jsx("td",{"data-label":"Actions",children:r.jsx(j.button,{className:"view-btn",onClick:l,whileHover:{scale:1.05},whileTap:{scale:.95},children:"View Details"})})]}):r.jsxs(r.Fragment,{children:[r.jsx("td",{"data-label":"Name",children:r.jsxs("div",{className:"applicant-name",children:[r.jsx("div",{className:"avatar",children:i.full_name?.charAt(0)}),i.full_name]})}),r.jsx("td",{"data-label":"Email",children:i.email}),r.jsx("td",{"data-label":"Country",children:i.country}),r.jsx("td",{"data-label":"Discipline",children:i.discipline}),r.jsx("td",{"data-label":"Status",children:r.jsx("select",{value:i.status,onChange:u=>o(i.id,u.target.value),className:`status-select status-${i.status}`,children:Ad.filter(u=>u!=="all").map(u=>r.jsx("option",{value:u,children:u.charAt(0).toUpperCase()+u.slice(1)},u))})}),r.jsx("td",{"data-label":"Submitted",children:Vl(i.created_at)}),r.jsx("td",{"data-label":"Actions",children:r.jsx(j.button,{className:"view-btn",onClick:l,whileHover:{scale:1.05},whileTap:{scale:.95},children:"View Details"})})]})}function WT(a){return a.__type==="newsletter"?[{label:"Email",value:a.email,icon:"@"},{label:"First Name",value:a.first_name||"-",icon:"FN"},{label:"Last Name",value:a.last_name||"-",icon:"LN"},{label:"Role",value:a.role||"Subscriber",icon:"RL"},{label:"Source",value:a.source||"Unknown",icon:"SC"},{label:"Joined",value:Vl(a.created_at),icon:"DT"}]:a.__type==="undergraduate"?[{label:"Email",value:a.email,icon:"@"},{label:"Phone",value:a.phone_number,icon:"PH"},{label:"Country",value:a.country,icon:"CT"},{label:"University",value:a.university,icon:"UN"},{label:"Degree Program",value:a.degree_program,icon:"DG"},{label:"Year of Study",value:a.year_of_study,icon:"YR"},{label:"GPA",value:a.gpa,icon:"GP"},{label:"Availability",value:a.availability,icon:"AV"},{label:"Time Zone",value:a.time_zone,icon:"TZ"},{label:"First Lab Choice",value:a.target_lab_first,icon:"L1"},{label:"Second Lab Choice",value:a.target_lab_second||"-",icon:"L2"},{label:"Status",value:a.status,icon:"ST"}]:[{label:"Email",value:a.email,icon:"@"},{label:"Phone",value:a.phone||"-",icon:"PH"},{label:"Country",value:a.country,icon:"CT"},{label:"Discipline",value:a.discipline||"-",icon:"DS"},{label:"University",value:a.university||"-",icon:"UN"},{label:"Degree",value:a.degree||"-",icon:"DG"},{label:"Year",value:a.year||"-",icon:"YR"},{label:"GPA",value:a.gpa||"-",icon:"GP"},{label:"Availability",value:a.availability||"-",icon:"AV"},{label:"Time Zone",value:a.timezone||"-",icon:"TZ"},{label:"First Lab Choice",value:a.lab1||"-",icon:"L1"},{label:"Second Lab Choice",value:a.lab2||"-",icon:"L2"},{label:"Status",value:a.status,icon:"ST"}]}function cy(a){return a.__type==="undergraduate"?[{title:"Curriculum Vitae",url:a.cv,icon:"CV"},{title:"Academic Transcript",url:a.transcript,icon:"TR"},{title:"Statement",url:a.statement,icon:"ST"},a.sample_work?{title:"Sample Work",url:a.sample_work,icon:"SW"}:null].filter(Boolean):a.__type==="fellowship"?[{title:"Curriculum Vitae",url:a.cv,icon:"CV"},{title:"Academic Transcript",url:a.transcript,icon:"TR"},a.sop?{title:"Statement of Purpose",url:a.sop,icon:"SP"}:null,a.sampleWork?{title:"Sample Work",url:a.sampleWork,icon:"SW"}:null].filter(Boolean):[]}function Ps(a){return a.full_name?a.full_name:`${a.first_name||""} ${a.last_name||""}`.trim()||a.email||"Record"}function Vl(a){return a?new Date(a).toLocaleDateString():"-"}function QT(a,i,l,o){const u=uy(a,l),m=uy(i,l);return u<m?o==="asc"?-1:1:u>m?o==="asc"?1:-1:0}function uy(a,i){return i==="full_name"?Ps(a).toLowerCase():i.includes("created_at")||i.includes("submitted_at")?new Date(a[i]||0).getTime():String(a[i]||"").toLowerCase()}function KT({title:a,value:i,color:l,icon:o}){return r.jsxs(j.div,{className:`stat-card ${l}`,variants:{hidden:{scale:.9,opacity:0},visible:{scale:1,opacity:1,transition:{type:"spring",stiffness:180}}},whileHover:{scale:1.03,y:-4},children:[r.jsx("div",{className:"stat-icon",children:o}),r.jsxs("div",{className:"stat-info",children:[r.jsx("h3",{children:a}),r.jsx("p",{children:i})]})]})}function JT({label:a,value:i,icon:l}){return r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-icon",children:l}),r.jsxs("div",{children:[r.jsx("strong",{children:a}),r.jsx("p",{children:i})]})]})}function IT({url:a,title:i,icon:l}){return r.jsxs(j.a,{href:a,target:"_blank",rel:"noreferrer",className:"document-link",whileHover:{scale:1.03,y:-2},whileTap:{scale:.98},children:[r.jsx("span",{className:"doc-icon",children:l}),r.jsxs("div",{children:[r.jsx("strong",{children:i}),r.jsx("p",{children:"Open file"})]}),r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M18 13V19C18 20.1 17.1 21 16 21H5C3.9 21 3 20.1 3 19V8C3 6.9 3.9 6 5 6H11",stroke:"currentColor",strokeWidth:"2"}),r.jsx("path",{d:"M15 3H21V9M21 3L10 14",stroke:"currentColor",strokeWidth:"2"})]})]})}function $T(){const[a,i]=S.useState(!1),[l,o]=S.useState(!1),u=Ie(),m=uT();S.useEffect(()=>{i(!0)},[]),S.useEffect(()=>{m?.is_admin||u("/dashboard")},[m,u]);const f=()=>{hf(),u("/auth")},h=()=>r.jsx(j.button,{className:"admin-toggle-btn",onClick:()=>i(!a),whileHover:{scale:1.05},whileTap:{scale:.95},animate:a?{rotate:180}:{rotate:0},title:a?"Close Admin Panel":"Open Admin Panel",children:r.jsx("span",{className:"toggle-icon",children:a?"✕":"⚙️"})});return r.jsxs(r.Fragment,{children:[r.jsx(h,{}),r.jsx(dt,{children:a&&r.jsx(j.div,{className:"admin-panel-wrapper",initial:{x:"-100%",opacity:0},animate:{x:0,opacity:1},exit:{x:"-100%",opacity:0},transition:{type:"spring",damping:25,stiffness:200},children:r.jsxs("div",{className:"admin-panel",children:[r.jsx("div",{className:"admin-panel-header",children:r.jsxs("div",{className:"admin-header-content",children:[r.jsx("div",{className:"admin-avatar",children:r.jsx("span",{children:"👑"})}),r.jsxs("div",{className:"admin-info",children:[r.jsx("h3",{children:"Admin Panel"}),r.jsx("p",{children:m?.username||"Admin"})]}),r.jsx("button",{className:"admin-minimize-btn",onClick:()=>i(!1),children:"_"})]})}),r.jsxs("div",{className:"admin-quick-stats",children:[r.jsxs("div",{className:"quick-stat",children:[r.jsx("span",{className:"stat-label",children:"👥 Users"}),r.jsx("span",{className:"stat-value",children:"-"})]}),r.jsxs("div",{className:"quick-stat",children:[r.jsx("span",{className:"stat-label",children:"📝 Apps"}),r.jsx("span",{className:"stat-value",children:"-"})]}),r.jsxs("div",{className:"quick-stat",children:[r.jsx("span",{className:"stat-label",children:"⏳ Pending"}),r.jsx("span",{className:"stat-value",children:"-"})]})]}),r.jsx("div",{className:"admin-content",children:r.jsx(XT,{})}),r.jsx("div",{className:"admin-panel-footer",children:r.jsxs("button",{className:"admin-logout-btn",onClick:()=>o(!0),children:[r.jsx("span",{children:"🚪"}),r.jsx("span",{children:"Logout"})]})})]})})}),r.jsx(dt,{children:l&&r.jsx(j.div,{className:"admin-modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>o(!1),children:r.jsxs(j.div,{className:"admin-modal",initial:{scale:.9,y:20},animate:{scale:1,y:0},exit:{scale:.9,y:20},onClick:g=>g.stopPropagation(),children:[r.jsx("h3",{children:"Confirm Logout"}),r.jsx("p",{children:"Are you sure you want to logout from Admin Panel?"}),r.jsxs("div",{className:"admin-modal-actions",children:[r.jsx("button",{onClick:()=>o(!1),className:"modal-cancel",children:"Cancel"}),r.jsx("button",{onClick:f,className:"modal-confirm",children:"Logout"})]})]})})})]})}const dy={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},Qu={hidden:{opacity:0,scale:.9,y:30},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:100,damping:15,duration:.5}},hover:{scale:1.03,y:-5,transition:{type:"spring",stiffness:300,damping:20}}},Ku={hidden:{opacity:0,x:-20},visible:a=>({opacity:1,x:0,transition:{delay:a*.06,type:"spring",stiffness:180,damping:20}})};function eA(){const[a,i]=S.useState([]),[l,o]=S.useState([]),[u,m]=S.useState([]),[f,h]=S.useState(null),[g,p]=S.useState(""),[b,v]=S.useState(!0),w=Ie();S.useEffect(()=>{const N=localStorage.getItem("user");N&&h(JSON.parse(N))},[]),S.useEffect(()=>{const N=localStorage.getItem("access")||localStorage.getItem("token"),A=async(R,L)=>{const P=(R.headers.get("content-type")||"").includes("application/json")?await R.json().catch(()=>null):null;if(!R.ok){if(R.status===401)throw localStorage.removeItem("access"),localStorage.removeItem("token"),localStorage.removeItem("refresh"),localStorage.removeItem("user"),w("/auth"),new Error("Session expired. Please login again.");const ie=P?.detail||P?.error||`${L} request failed (${R.status})`;throw new Error(ie)}return Array.isArray(P)?P:P?.results&&Array.isArray(P.results)?P.results:P?.data&&Array.isArray(P.data)?P.data:[]};(async()=>{try{p(""),v(!0);const R=[Xe("/api/blog/")];N&&(R.push(Xe("/api/fellowship/notifications/")),R.push(Xe("/api/fellowship/applications/")));const L=await Promise.all(R),[q,P,ie]=L,Q=await A(q,"Blog posts");if(m(Q.slice(0,3)),N){const[W,$]=await Promise.all([A(P,"Notifications"),A(ie,"Applications")]);i(W),o($),console.log(`Found ${$.length} applications for ${f?.username}`)}else i([]),o([])}catch(R){console.error("Error fetching dashboard data:",R),R.message.toLowerCase().includes("token")||R.message.toLowerCase().includes("authentication")||R.message.toLowerCase().includes("session expired")?p("Session expired. Please login again."):p(R.message||"Unable to load dashboard data.")}finally{v(!1)}})()},[f,w]);const T=N=>{switch(N){case"accepted":return"status-accepted";case"rejected":return"status-rejected";case"reviewed":return"status-reviewed";default:return"status-pending"}},C=N=>{const A={year:"numeric",month:"long",day:"numeric"};return new Date(N).toLocaleDateString(void 0,A)};return r.jsxs(j.div,{className:"dashboard",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[r.jsxs(j.div,{className:"welcome-banner",initial:{opacity:0,y:-40},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:12,duration:.8},children:[r.jsx(j.h1,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.2,duration:.5},children:f?`Welcome, ${f.username}`:"Welcome to AkiliBridge Dashboard"}),r.jsx(j.p,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.3,duration:.5},children:f?"Track your applications, read the latest updates, and stay on top of notifications.":"Read the latest updates and log in to view your applications and notifications."}),r.jsx(dt,{children:g&&r.jsxs(j.p,{className:"error-message",initial:{opacity:0,scale:.95,y:-10},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-10},transition:{duration:.3},children:[g,g.includes("Session expired")&&r.jsx("button",{onClick:()=>w("/auth"),className:"error-action-btn",children:"Go to Login"})]})})]}),r.jsxs(j.div,{className:"cards-grid",variants:dy,initial:"hidden",animate:"visible",children:[r.jsxs(j.div,{className:"card",variants:Qu,whileHover:"hover",children:[r.jsxs("h2",{children:["My Applications",l.length>0&&f&&r.jsx("span",{className:"badge",children:l.length})]}),f?r.jsx(dt,{mode:"wait",children:b?r.jsx(j.div,{initial:{opacity:0},animate:{opacity:1},className:"loading-spinner",children:"Loading your applications..."}):l.length>0?r.jsx(j.ul,{initial:"hidden",animate:"visible",variants:dy,className:"applications-list",children:l.map((N,A)=>r.jsx(j.li,{custom:A,variants:Ku,initial:"hidden",animate:"visible",className:"application-item",children:r.jsxs("div",{className:"application-info",children:[r.jsx("div",{className:"application-name",children:N.full_name||N.applicant?.username||"Application"}),r.jsxs("div",{className:"application-details",children:[r.jsx("span",{className:"application-discipline",children:N.discipline||"Fellowship"}),r.jsx("span",{className:`application-status ${T(N.status)}`,children:N.status?.toUpperCase()||"PENDING"})]}),r.jsxs("div",{className:"application-date",children:["Submitted: ",C(N.created_at)]})]})},N.id))}):r.jsxs(j.div,{initial:{opacity:0},animate:{opacity:1},className:"empty-state",children:[r.jsx("p",{children:"You haven't submitted any applications yet."}),r.jsx(Ot,{to:"/apply",className:"apply-link",children:"Start Your Application →"})]})}):r.jsxs(j.div,{initial:{opacity:0},animate:{opacity:1},className:"login-prompt",children:[r.jsx("p",{children:"Log in to view your submitted fellowship or undergraduate applications."}),r.jsx("button",{onClick:()=>w("/auth"),className:"login-btn",children:"Login"})]})]}),r.jsxs(j.div,{className:"card",variants:Qu,whileHover:"hover",children:[r.jsx("h2",{children:"Latest News"}),u.length>0?r.jsx("div",{className:"news-list",children:u.map((N,A)=>r.jsxs(j.article,{className:"news-item",custom:A,variants:Ku,initial:"hidden",animate:"visible",children:[r.jsxs("div",{className:"news-item-header",children:[r.jsx("span",{className:"news-category",children:N.category||"Announcement"}),r.jsx("span",{className:"news-date",children:new Date(N.created_at).toLocaleDateString()})]}),r.jsx("h3",{children:N.title}),r.jsx("p",{children:N.excerpt||`${N.body?.slice(0,120)||""}${N.body?.length>120?"...":""}`}),r.jsx(Ot,{to:`/blog/${N.id}`,className:"news-link",children:"Read article →"})]},N.id))}):r.jsx(j.p,{initial:{opacity:0},animate:{opacity:1},children:"No blog posts yet. Check back soon for updates!"})]}),r.jsxs(j.div,{className:"card",variants:Qu,whileHover:"hover",children:[r.jsxs("h2",{children:["Notifications",a.length>0&&f&&r.jsx("span",{className:"badge",children:a.length})]}),f?r.jsx(dt,{mode:"wait",children:b?r.jsx(j.div,{className:"loading-spinner",children:"Loading notifications..."}):a.length>0?r.jsx("div",{className:"notifications-list",children:a.map((N,A)=>r.jsxs(j.div,{className:"notification-item",custom:A,variants:Ku,initial:"hidden",animate:"visible",children:[r.jsx("span",{className:"notification-dot",children:"•"}),r.jsxs("div",{children:[r.jsx("p",{children:N.message}),r.jsx("small",{className:"notification-time",children:C(N.created_at)})]})]},N.id))}):r.jsx(j.p,{initial:{opacity:0},animate:{opacity:1},children:"No notifications yet. We'll notify you when there are updates to your applications."})}):r.jsx(j.p,{initial:{opacity:0},animate:{opacity:1},children:"Log in to see your notifications here."})]})]}),r.jsx(j.button,{className:"floating-btn",initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:15,delay:1},whileHover:{scale:1.1,rotate:90},whileTap:{scale:.9},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:r.jsx(j.span,{animate:{y:[0,-3,0]},transition:{duration:1.5,repeat:1/0,repeatType:"reverse"},children:"↑"})})]})}function fy(){const[a,i]=S.useState("login"),[l,o]=S.useState({username:"",email:"",password:""}),[u,m]=S.useState(null),[f,h]=S.useState(null),[g,p]=S.useState(!1),[b,v]=S.useState(!1),w=Ie(),T=R=>{o({...l,[R.target.name]:R.target.value}),u&&m(null),f&&h(null)},C=async R=>{R.preventDefault(),p(!0),m(null),h(null);try{if(a==="register"){const Q=await Xe("/api/auth/register/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(!Q.ok){const $=await Q.json().catch(()=>null),I=$?.detail||($&&typeof $=="object"?Object.entries($).map(([fe,me])=>`${fe}: ${Array.isArray(me)?me.join(", "):me}`).join("; "):"Registration failed");throw new Error(I||"Registration failed")}const W=await Q.json();h("Registration successful! Please check your email to confirm your account before logging in."),i("login"),o({username:"",email:"",password:""}),p(!1);return}if(a==="forgot-password"){const Q=await Xe("/api/auth/request-password-reset/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l.email})});if(!Q.ok){const W=await Q.json().catch(()=>null);throw new Error(W?.error||"Failed to send reset email")}v(!0),h("If an account exists with this email, you will receive a password reset link."),p(!1);return}const L=await Xe("/api/auth/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:l.username,password:l.password})});if(!L.ok){const Q=await L.json().catch(()=>null);let W=Q?.error||"Login failed";throw(Q?.error?.toLowerCase().includes("confirm")||Q?.detail?.toLowerCase().includes("confirm"))&&(W="Please confirm your email address before logging in. Check your inbox for the confirmation link."),new Error(W)}const q=await L.json(),P=q.access||null,ie=q.token||null;localStorage.removeItem("access"),localStorage.removeItem("token"),localStorage.removeItem("refresh"),P&&localStorage.setItem("access",P),ie&&localStorage.setItem("token",ie),q.refresh&&localStorage.setItem("refresh",q.refresh),localStorage.setItem("user",JSON.stringify(q.user)),q.user.email_confirmed||h("Please check your email to confirm your account. You can still access the dashboard, but some features may be limited."),setTimeout(()=>{q.user.is_admin?w("/admin-dashboard"):w("/dashboard")},800)}catch(L){m(L.message),p(!1)}},N=async()=>{if(!l.email){m("Please enter your email address first");return}p(!0),m(null);try{const R=await Xe("/api/auth/request-email-confirmation/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l.email})});if(!R.ok){const L=await R.json().catch(()=>null);throw new Error(L?.error||"Failed to resend confirmation email")}h("Confirmation email has been resent. Please check your inbox.")}catch(R){m(R.message)}finally{p(!1)}},A={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.2}}},M={hidden:{y:30,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:200,damping:20}}};return a==="forgot-password"?r.jsx("div",{className:"auth-container",children:r.jsxs(j.form,{onSubmit:C,className:"auth-form",variants:A,initial:"hidden",animate:"visible",children:[r.jsx(j.h2,{className:"auth-title",variants:M,children:"Reset Password"}),r.jsxs(dt,{children:[u&&r.jsx(j.p,{className:"auth-error",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:u}),f&&r.jsx(j.p,{className:"auth-success",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:f})]}),b?r.jsx(j.p,{variants:M,className:"auth-info",children:f}):r.jsxs(r.Fragment,{children:[r.jsx(j.input,{type:"email",name:"email",placeholder:"Email Address",value:l.email,onChange:T,className:"auth-input",variants:M,required:!0}),r.jsx(j.button,{type:"submit",className:"auth-submit",whileHover:{scale:1.05},whileTap:{scale:.95},variants:M,disabled:g,children:g?"Sending...":"Send Reset Link"})]}),r.jsx(j.div,{className:"auth-switch",variants:M,children:r.jsx("button",{type:"button",onClick:()=>{i("login"),v(!1),m(null),h(null)},className:"switch-btn",children:"Back to Login"})})]})}):r.jsx("div",{className:"auth-container",children:r.jsxs(j.form,{onSubmit:C,className:"auth-form",variants:A,initial:"hidden",animate:"visible",children:[r.jsx(j.h2,{className:"auth-title",variants:M,children:a==="register"?"Create Account":"Login"}),r.jsxs(dt,{children:[u&&r.jsx(j.p,{className:"auth-error",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:u}),f&&r.jsx(j.p,{className:"auth-success",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:f})]}),r.jsx(j.input,{type:"text",name:"username",placeholder:"Username",value:l.username,onChange:T,className:"auth-input",variants:M,required:a!=="forgot-password"}),a==="register"&&r.jsx(j.input,{type:"email",name:"email",placeholder:"Email",value:l.email,onChange:T,className:"auth-input",variants:M,required:!0}),r.jsx(j.input,{type:"password",name:"password",placeholder:"Password",value:l.password,onChange:T,className:"auth-input",variants:M,required:a!=="forgot-password"}),r.jsx(j.button,{type:"submit",className:"auth-submit",whileHover:{scale:1.05},whileTap:{scale:.95},variants:M,disabled:g,children:g?"Processing...":a==="register"?"Register":"Login"}),a==="login"&&u&&u.includes("confirm")&&r.jsx(j.button,{type:"button",onClick:N,className:"auth-resend-btn",variants:M,whileHover:{scale:1.02},children:"Resend Confirmation Email"}),r.jsx(j.div,{className:"auth-switch",variants:M,children:a==="register"?r.jsxs(r.Fragment,{children:["Already have an account?"," ",r.jsx("button",{type:"button",onClick:()=>{i("login"),m(null),h(null)},className:"switch-btn",children:"Login"})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{children:["Don’t have an account?"," ",r.jsx("button",{type:"button",onClick:()=>{i("register"),m(null),h(null)},className:"switch-btn",children:"Register"})]}),r.jsx("div",{style:{marginTop:"10px"},children:r.jsx("button",{type:"button",onClick:()=>{i("forgot-password"),m(null),h(null)},className:"switch-btn forgot-link",children:"Forgot Password?"})})]})})]})})}function tA({children:a}){const i=localStorage.getItem("token"),l=localStorage.getItem("access"),o=JSON.parse(localStorage.getItem("user"));return!i&&!l||!o?r.jsx(D0,{to:"/login",replace:!0}):o.is_admin?a:r.jsx(D0,{to:"/dashboard",replace:!0})}function aA(){return r.jsxs(r.Fragment,{children:[r.jsx(rT,{}),r.jsxs($2,{children:[r.jsx(_e,{path:"/",element:r.jsx(fT,{})}),r.jsx(_e,{path:"/about",element:r.jsx(mT,{})}),r.jsx(_e,{path:"/about/get-to-know-us",element:r.jsx(OT,{})}),r.jsx(_e,{path:"/about/who-we-are",element:r.jsx(VT,{})}),r.jsx(_e,{path:"/about/mission-purpose",element:r.jsx(BT,{})}),r.jsx(_e,{path:"/what-we-do",element:r.jsx(pT,{})}),r.jsx(_e,{path:"/what-we-do/fellowship",element:r.jsx(LT,{})}),r.jsx(_e,{path:"/what-we-do/training",element:r.jsx(_T,{})}),r.jsx(_e,{path:"/apply",element:r.jsx(gT,{})}),r.jsx(_e,{path:"/apply/fellows",element:r.jsx(HT,{})}),r.jsx(_e,{path:"/apply/mentors",element:r.jsx(UT,{})}),r.jsx(_e,{path:"/reset-password/:token",element:r.jsx(YT,{})}),r.jsx(_e,{path:"/confirm-email/:token",element:r.jsx(FT,{})}),r.jsx(_e,{path:"/labs",element:r.jsx(bT,{})}),r.jsx(_e,{path:"/careers",element:r.jsx(vT,{})}),r.jsx(_e,{path:"/careers/undergraduate",element:r.jsx(qT,{})}),r.jsx(_e,{path:"/careers/application",element:r.jsx(GT,{})}),r.jsx(_e,{path:"/news",element:r.jsx(wT,{})}),r.jsx(_e,{path:"/blog/:id",element:r.jsx(MT,{})}),r.jsx(_e,{path:"/auth",element:r.jsx(fy,{})}),r.jsx(_e,{path:"/login",element:r.jsx(fy,{})})," ",r.jsx(_e,{path:"/dashboard",element:r.jsx(eA,{})}),r.jsx(_e,{path:"/admin-dashboard",element:r.jsx(tA,{children:r.jsx($T,{})})})]}),r.jsx(zT,{}),r.jsx(RT,{})]})}a2.createRoot(document.getElementById("root")).render(r.jsx(W1.StrictMode,{children:r.jsx(S5,{children:r.jsx(aA,{})})}));
