export const id=3484;export const ids=[3484];export const modules={7964:(t,n,e)=>{e.d(n,{c:()=>i});var o=e(6008),r=e.n(o),s=e(2076),a=e.n(s)()(r());a.push([t.id,".dropin-debugger--show-slots [data-slot-key]{\n  outline:1px dashed var(--color-neutral-600);\n  border-radius:4px;\n}\n\n.dropin-debugger--show-slots [data-slot-key]::before{\n  content:attr(data-slot-key);\n  font:var(--type-details-caption-1-font);\n  color:var(--color-informational-800);\n  background-color:var(--color-informational-200);\n  font-size:0.75rem;\n  border-radius:4px 4px 0 0;\n  padding:0.2rem 0.4rem;\n  font-weight:600;\n  position:absolute;\n  z-index:2;\n}\n\n.dropin-debugger--show-slots [data-slot]{\n  outline:2px dashed var(--color-informational-800);\n  outline-offset:3px;\n  border-radius:4px;\n  min-height:2rem;\n}\n\n.dropin-debugger--show-slots [data-slot]::before{\n  font:var(--type-details-caption-1-font);\n  content:attr(data-slot);\n  color:var(--color-informational-200);\n  background-color:var(--color-informational-800);\n  font-size:0.75rem;\n  border-radius:4px 4px 0 0;\n  padding:0.2rem 0.4rem;\n  font-weight:600;\n  position:absolute;\n  transform:translateY(-26px);\n  z-index:2;\n}\n",""]);const i=a},3484:(t,n,e)=>{e.r(n),e.d(n,{default:()=>m});var o=e(5536),r=e.n(o),s=e(7008),a=e.n(s),i=e(1496),d=e.n(i),l=e(9356),c=e.n(l),p=e(9904),f=e.n(p),u=e(7964),b={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.22.0"},styleTagTransform:function(t,n){window._loadedStyles=window._loadedStyles??{};const e=t?.match(/^\.dropin-(\w+)/)?.[1],o=n.getAttribute("data-sdk"),r=e?`sdk/${e}`:n.getAttribute("data-dropin");n.setAttribute("data-dropin",r),n.removeAttribute("data-sdk");const s=window._loadedStyles[r];if(s){const r=function(t,n){const[e,o]=t.split("-"),[r,s]=n.split("-"),a=[...e.split("."),o],i=[...r.split("."),s],d=parseInt(a[0],10),l=parseInt(i[0],10);if(d!==l)return d>l?t:n;const c=parseInt(a[1],10),p=parseInt(i[1],10);if(c!==p)return c>p?t:n;const f=parseInt(a[2],10),u=parseInt(i[2],10);if(f!==u)return f>u?t:n;if(a[3]&&i[3]){const e=/(alpha|beta)(.*)/,o=a[3].match(e),r=i[3].match(e),s=o[1],d=r[1],l=parseInt(o[2],10),c=parseInt(r[2],10);if(s===d)return l>c?t:n;if("alpha"===s&&"beta"===d)return n;if("beta"===s&&"alpha"===d)return t}return a[3]?n:t}(o,s.sdk);if(!e||e&&r===s.sdk){const n=s.style.textContent;s.style.textContent=`${n}\n/* --- MERGED --- */\n${t}`}else e&&r!==s.sdk&&(s.style.textContent=`/* --- UPGRADED --- */\n${t}`);return void n.remove()}n.textContent=t,window._loadedStyles[r]={sdk:o,core:e,style:n};const a=document.querySelector("head"),{lastDropinStyleInjected:i,lastSDKStyleInjected:d}=window._loadedStyles;e?(d?a.insertBefore(n,d.nextSibling):a.insertBefore(n,a.firstChild),window._loadedStyles.lastSDKStyleInjected=n):(i?a.insertBefore(n,i.nextSibling):d?a.insertBefore(n,d.nextSibling):a.insertBefore(n,a.firstChild),window._loadedStyles.lastDropinStyleInjected=n)}};b.setAttributes=c(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=f();r()(u.c,b);const m=u.c&&u.c.locals?u.c.locals:void 0}};