function j(){}function re(e,t){for(const n in t)e[n]=t[n];return e}function Oe(e,t,n,i,r){e.__svelte_meta={loc:{file:t,line:n,column:i,char:r}}}function J(e){return e()}function F(){return Object.create(null)}function x(e){e.forEach(J)}function K(e){return typeof e=="function"}function De(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let O;function je(e,t){return O||(O=document.createElement("a")),O.href=t,e===O.href}function oe(e){return Object.keys(e).length===0}function Ae(e,t){if(e!=null&&typeof e.subscribe!="function")throw new Error(`'${t}' is not a store with a 'subscribe' method`)}function se(e,...t){if(e==null)return j;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ne(e,t,n){e.$$.on_destroy.push(se(t,n))}function Ce(e,t,n,i){if(e){const r=Q(e,t,n,i);return e[0](r)}}function Q(e,t,n,i){return e[1]&&i?re(n.ctx.slice(),e[1](i(t))):n.ctx}function Te(e,t,n,i){if(e[2]&&i){const r=e[2](i(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const a=[],o=Math.max(t.dirty.length,r.length);for(let c=0;c<o;c+=1)a[c]=t.dirty[c]|r[c];return a}return t.dirty|r}return t.dirty}function qe(e,t,n,i,r,a){if(r){const o=Q(t,n,i,a);e.p(o,r)}}function Pe(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}function Le(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function Ie(e,t){const n={};t=new Set(t);for(const i in e)!t.has(i)&&i[0]!=="$"&&(n[i]=e[i]);return n}const ce=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in ce;let A=!1;function ae(){A=!0}function le(){A=!1}function ue(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function fe(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let l=0;l<t.length;l++){const f=t[l];f.claim_order!==void 0&&s.push(f)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const l=t[s].claim_order,f=(r>0&&t[n[r]].claim_order<=l?r+1:ue(1,r,d=>t[n[d]].claim_order,l))-1;i[s]=n[f]+1;const _=f+1;n[_]=s,r=Math.max(_,r)}const a=[],o=[];let c=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(a.push(t[s-1]);c>=s;c--)o.push(t[c]);c--}for(;c>=0;c--)o.push(t[c]);a.reverse(),o.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<o.length;s++){for(;l<a.length&&o[s].claim_order>=a[l].claim_order;)l++;const f=l<a.length?a[l]:null;e.insertBefore(o[s],f)}}function U(e,t){if(A){for(fe(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function de(e,t,n){A&&!n?U(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function V(e){e.parentNode&&e.parentNode.removeChild(e)}function _e(e){return document.createElement(e)}function he(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function R(e){return document.createTextNode(e)}function Re(){return R(" ")}function Be(){return R("")}function me(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function He(e){return function(t){return t.stopPropagation(),e.call(this,t)}}function pe(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function We(e){return e===""?null:+e}function ye(e){return Array.from(e.childNodes)}function ge(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function X(e,t,n,i,r=!1){ge(e);const a=(()=>{for(let o=e.claim_info.last_index;o<e.length;o++){const c=e[o];if(t(c)){const s=n(c);return s===void 0?e.splice(o,1):e[o]=s,r||(e.claim_info.last_index=o),c}}for(let o=e.claim_info.last_index-1;o>=0;o--){const c=e[o];if(t(c)){const s=n(c);return s===void 0?e.splice(o,1):e[o]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=o,c}}return i()})();return a.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,a}function Z(e,t,n,i){return X(e,r=>r.nodeName===t,r=>{const a=[];for(let o=0;o<r.attributes.length;o++){const c=r.attributes[o];n[c.name]||a.push(c.name)}a.forEach(o=>r.removeAttribute(o))},()=>i(t))}function ze(e,t,n){return Z(e,t,n,_e)}function Fe(e,t,n){return Z(e,t,n,he)}function be(e,t){return X(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>R(t),!0)}function Ye(e){return be(e," ")}function Ge(e,t){e.value=t??""}function Je(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function Ke(e,t,n){for(let i=0;i<e.options.length;i+=1){const r=e.options[i];if(r.__value===t){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Qe(e){const t=e.querySelector(":checked");return t&&t.__value}function Ue(e,t,n){e.classList[n?"add":"remove"](t)}function we(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,i,t),r}function Ve(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const a=r.textContent.trim();a===`HEAD_${e}_END`?(i-=1,n.push(r)):a===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}let E;function S(e){E=e}function B(){if(!E)throw new Error("Function called outside component initialization");return E}function Xe(e){B().$$.on_mount.push(e)}function Ze(e){B().$$.after_update.push(e)}function et(e,t){return B().$$.context.set(e,t),t}function tt(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(i=>i.call(this,t))}const v=[],Y=[];let $=[];const G=[],ee=Promise.resolve();let L=!1;function te(){L||(L=!0,ee.then(ne))}function nt(){return te(),ee}function I(e){$.push(e)}const P=new Set;let w=0;function ne(){if(w!==0)return;const e=E;do{try{for(;w<v.length;){const t=v[w];w++,S(t),ve(t.$$)}}catch(t){throw v.length=0,w=0,t}for(S(null),v.length=0,w=0;Y.length;)Y.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];P.has(n)||(P.add(n),n())}$.length=0}while(v.length);for(;G.length;)G.pop()();L=!1,P.clear(),S(e)}function ve(e){if(e.fragment!==null){e.update(),x(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}function $e(e){const t=[],n=[];$.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),$=t}const D=new Set;let b;function it(){b={r:0,c:[],p:b}}function rt(){b.r||x(b.c),b=b.p}function ie(e,t){e&&e.i&&(D.delete(e),e.i(t))}function ot(e,t,n,i){if(e&&e.o){if(D.has(e))return;D.add(e),b.c.push(()=>{D.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function st(e,t){e.d(1),t.delete(e.key)}function ct(e,t,n,i,r,a,o,c,s,l,f,_){let d=e.length,m=a.length,h=d;const N={};for(;h--;)N[e[h].key]=h;const k=[],C=new Map,T=new Map,H=[];for(h=m;h--;){const u=_(r,a,h),p=n(u);let y=o.get(p);y?i&&H.push(()=>y.p(u,t)):(y=l(p,u),y.c()),C.set(p,k[h]=y),p in N&&T.set(p,Math.abs(h-N[p]))}const W=new Set,z=new Set;function q(u){ie(u,1),u.m(c,f),o.set(u.key,u),f=u.first,m--}for(;d&&m;){const u=k[m-1],p=e[d-1],y=u.key,M=p.key;u===p?(f=u.first,d--,m--):C.has(M)?!o.has(y)||W.has(y)?q(u):z.has(M)?d--:T.get(y)>T.get(M)?(z.add(y),q(u)):(W.add(M),d--):(s(p,o),d--)}for(;d--;){const u=e[d];C.has(u.key)||s(u,o)}for(;m;)q(k[m-1]);return x(H),k}function at(e,t,n,i){const r=new Set;for(let a=0;a<t.length;a++){const o=i(n(e,t,a));if(r.has(o))throw new Error("Cannot have duplicate keys in a keyed each");r.add(o)}}function lt(e,t){const n={},i={},r={$$scope:1};let a=e.length;for(;a--;){const o=e[a],c=t[a];if(c){for(const s in o)s in c||(i[s]=1);for(const s in c)r[s]||(n[s]=c[s],r[s]=1);e[a]=c}else for(const s in o)r[s]=1}for(const o in i)o in n||(n[o]=void 0);return n}function ut(e){return typeof e=="object"&&e!==null?e:{}}const xe=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...xe];function ft(e){e&&e.c()}function dt(e,t){e&&e.l(t)}function Se(e,t,n,i){const{fragment:r,after_update:a}=e.$$;r&&r.m(t,n),i||I(()=>{const o=e.$$.on_mount.map(J).filter(K);e.$$.on_destroy?e.$$.on_destroy.push(...o):x(o),e.$$.on_mount=[]}),a.forEach(I)}function Ee(e,t){const n=e.$$;n.fragment!==null&&($e(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ke(e,t){e.$$.dirty[0]===-1&&(v.push(e),te(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function _t(e,t,n,i,r,a,o,c=[-1]){const s=E;S(e);const l=e.$$={fragment:null,ctx:[],props:a,update:j,not_equal:r,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:F(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};o&&o(l.root);let f=!1;if(l.ctx=n?n(e,t.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&r(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),f&&ke(e,_)),d}):[],l.update(),f=!0,x(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){ae();const _=ye(t.target);l.fragment&&l.fragment.l(_),_.forEach(V)}else l.fragment&&l.fragment.c();t.intro&&ie(e.$$.fragment),Se(e,t.target,t.anchor,t.customElement),le(),ne()}S(s)}class Me{$destroy(){Ee(this,1),this.$destroy=j}$on(t,n){if(!K(n))return j;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!oe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function g(e,t){document.dispatchEvent(we(e,Object.assign({version:"3.59.1"},t),{bubbles:!0}))}function ht(e,t){g("SvelteDOMInsert",{target:e,node:t}),U(e,t)}function mt(e,t,n){g("SvelteDOMInsert",{target:e,node:t,anchor:n}),de(e,t,n)}function pt(e){g("SvelteDOMRemove",{node:e}),V(e)}function yt(e,t,n,i,r,a,o){const c=i===!0?["capture"]:i?Array.from(Object.keys(i)):[];r&&c.push("preventDefault"),a&&c.push("stopPropagation"),o&&c.push("stopImmediatePropagation"),g("SvelteDOMAddEventListener",{node:e,event:t,handler:n,modifiers:c});const s=me(e,t,n,i);return()=>{g("SvelteDOMRemoveEventListener",{node:e,event:t,handler:n,modifiers:c}),s()}}function gt(e,t,n){pe(e,t,n),n==null?g("SvelteDOMRemoveAttribute",{node:e,attribute:t}):g("SvelteDOMSetAttribute",{node:e,attribute:t,value:n})}function bt(e,t,n){e[t]=n,g("SvelteDOMSetProperty",{node:e,property:t,value:n})}function wt(e,t){t=""+t,e.data!==t&&(g("SvelteDOMSetData",{node:e,data:t}),e.data=t)}function vt(e){if(typeof e!="string"&&!(e&&typeof e=="object"&&"length"in e)){let t="{#each} only iterates over array-like objects.";throw typeof Symbol=="function"&&e&&Symbol.iterator in e&&(t+=" You can use a spread to convert this iterable into an array."),new Error(t)}}function $t(e,t,n){for(const i of Object.keys(t))~n.indexOf(i)||console.warn(`<${e}> received an unexpected slot "${i}".`)}function xt(e,t){const n="this={...} of <svelte:component> should specify a Svelte component.";try{const i=new e(t);if(!i.$$||!i.$set||!i.$on||!i.$destroy)throw new Error(n);return i}catch(i){const{message:r}=i;throw typeof r=="string"&&r.indexOf("is not a constructor")!==-1?new Error(n):i}}class St extends Me{constructor(t){if(!t||!t.target&&!t.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}export{He as $,wt as A,it as B,ft as C,dt as D,Se as E,Ee as F,Ce as G,ht as H,qe as I,Pe as J,Te as K,Ae as L,Ne as M,j as N,re as O,Le as P,je as Q,Ve as R,St as S,he as T,Fe as U,lt as V,ut as W,Ie as X,tt as Y,Ue as Z,yt as _,Ze as a,bt as a0,ce as a1,Qe as a2,We as a3,vt as a4,at as a5,I as a6,Ke as a7,Ge as a8,ct as a9,x as aa,st as ab,et as b,Re as c,g as d,Be as e,Ye as f,mt as g,ot as h,_t as i,rt as j,ie as k,pt as l,Y as m,xt as n,Xe as o,_e as p,ze as q,ye as r,De as s,nt as t,gt as u,$t as v,Je as w,Oe as x,R as y,be as z};