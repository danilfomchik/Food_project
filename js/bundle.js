/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";const e=function(e,t){Array.from(e).forEach((e=>{e.classList.remove(t)}))};function t(e,t){const n=document.querySelector(e);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",t&&clearInterval(t)}function n(e){const t=document.querySelector(e);t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow="auto"}const a=function(e,t,n){if(e.target&&e.target.classList.contains(t)){const[...a]=e.target.parentElement.querySelectorAll(`.${t}`);a.forEach((e=>{e.classList.remove(n)})),e.target.classList.add(n)}};window.addEventListener("DOMContentLoaded",(()=>{const o=setTimeout((()=>t(".modal",o)),1e6);(function(t,n,a,o){const c=document.querySelector(t),r=document.querySelectorAll(n);c.addEventListener("click",(t=>{if(t.target&&t.target.matches(`div${a}`)){const n=c.querySelectorAll(a);e(n,o),r.forEach((e=>{e.classList.remove("active"),e.classList.add("fade"),t.target.textContent===e.getAttribute("data-name")&&(t.target.classList.add(o),e.classList.toggle("active"))}))}}))})(".tabheader__items",".tabcontent",".tabheader__item","tabheader__item_active"),function(){class e{constructor(e,t,n,a,o){this.img=e,this.title=t,this.description=n,this.price=a,this.parentContainer=document.querySelector(o),this.transfer=28,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}renderDailyMenu(){this.parentContainer.innerHTML+=`\n                <div class="menu__item">\n                    <img src=${this.img} alt=${this.title}>\n                    <h3 class="menu__item-subtitle">Меню “${this.title}”</h3>\n                    <div class="menu__item-descr">${this.description}</div>\n                    <div class="menu__item-divider"></div>\n                    <div class="menu__item-price">\n                        <div class="menu__item-cost">Цена:</div>\n                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                    </div>\n                </div>\n            `}}(async e=>{const t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach((t=>{let{img:n,title:a,descr:o,price:c}=t;new e(n,a,o,c,".menu__field .container").renderDailyMenu()}))})).catch((()=>{console.error("error")}))}(),function(e,t){function n(e){return e>=0&&e<10?`0${e}`:e}!function(e,t){let a=document.querySelector(e),o=a.querySelector("#days"),c=a.querySelector("#hours"),r=a.querySelector("#minutes"),i=a.querySelector("#seconds"),s=setInterval(l,1e3);function l(){let{endTime:e,remainingDays:a,remainingHours:l,remainingMinutes:d,remainingSeconds:u}=function(e){let t=0;return Date.parse(e)>=Date.parse(new Date)&&(t=Date.parse(e)-Date.parse(new Date)),{endTime:t,remainingDays:Math.floor(t/864e5),remainingHours:Math.floor(t/36e5%24),remainingMinutes:Math.floor(t/1e3/60%60),remainingSeconds:Math.floor(t/1e3%60)}}(t);o.textContent=n(a),c.textContent=n(l),r.textContent=n(d),i.textContent=n(u),e<=0&&clearInterval(s)}l()}(e,t)}(".timer","2022-12-21"),function(e,a,o){const c=document.querySelector(a);document.querySelectorAll(e).forEach((e=>{e.addEventListener("click",(()=>{t(a,o)}))})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&c.classList.contains("show")&&n(a)})),c.addEventListener("click",(e=>{(e.target.matches(".modal")||""==e.target.getAttribute("data-close"))&&n(a)}))}("[data-modal]",".modal",o),function(t){let{sliderContainer:n,allSlides:o,wrapper:c,sliderInner:r,nextArrow:i,prevArrow:s,totalCounter:l,currentCounter:d}=t;const u=document.querySelector(s),m=document.querySelector(i),g=document.querySelector(c),h=document.querySelector(r),_=document.querySelector(d),f=document.querySelector(l),v=document.querySelectorAll(o),y=document.querySelector(n),S=window.getComputedStyle(g).width;let p=1;v.forEach((e=>{e.style.width=S})),h.style.width=100*v.length+"%",v.length<10?f.textContent=`0${v.length}`:f.textContent=v.length,q(_,p);const L=S.match(/\d/g).join("");function q(e,t){e.textContent=t<10?`0${t}`:t}function w(e,t){let n=L*(t-1);e.style.right=`${n}px`}m.addEventListener("click",(()=>{p++,p>v.length&&(p=1),x(p)})),u.addEventListener("click",(()=>{p--,p<=0&&(p=v.length),x(p)}));const C=document.createElement("ul");C.classList.add("carousel-indicators");for(let e=1;e<=v.length;e++)C.innerHTML+=`\n            <li class="dot" data-index="${e}"></li>\n        `;y.append(C);const A=document.querySelectorAll(".dot");function E(e){A[e-1].classList.add("active-dot"),C.addEventListener("click",(e=>{e.target&&"LI"===e.target.tagName&&(p=e.target.getAttribute("data-index"),a(e,"dot","active-dot"),q(_,p),w(h,p))}))}function x(t){e(A,"active-dot"),E(t),q(_,t),w(h,t)}E(p)}({sliderContainer:".offer__slider",allSlides:".offer__slide",wrapper:".offer__slider-wrapper",sliderInner:".offer__slider-inner",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current"}),function(){const e=document.querySelector(".calculating__choose#gender"),t=document.querySelector(".calculating__choose_big"),[...n]=document.querySelectorAll(".calculating__choose_medium .calculating__choose-item"),o=document.querySelector(".calculating__result span");let c=0;o.textContent=c;let r=447.6,i=1.375,s=0,l=0,d=0;const u=[...e.querySelectorAll(".calculating__choose-item")],m=[...t.querySelectorAll(".calculating__choose-item")];function g(e,t,n,a){t.forEach((t=>{t.classList.remove(n),t.getAttribute(a)===localStorage.getItem(e)&&t.classList.add(n)}))}function h(){const t=e.querySelector(".calculating__choose-item_active");l>0&&s>0&&d>0?(c="male"===t.id?(r+13.4*l+4.8*s-5.7*d)*i:(r+9.2*l+3.1*s-4.3*d)*i,o.textContent=Math.round(c)):o.textContent=0}localStorage.getItem("currentSexCoef")&&(r=+localStorage.getItem("currentSexCoef"),g("currentSexCoef",u,"calculating__choose-item_active","data-sex")),localStorage.getItem("currentActivityCoef")&&(i=+localStorage.getItem("currentActivityCoef"),g("currentActivityCoef",m,"calculating__choose-item_active","data-activity")),h(),n.forEach((e=>{e.addEventListener("input",(e=>{switch(e.target.value.match(/\D/g)?(e.target.classList.add("incorect__input-value"),o.textContent=0):e.target.classList.remove("incorect__input-value"),e.target.id){case"height":s=+e.target.value;break;case"weight":l=+e.target.value;break;case"age":d=+e.target.value}h()}))})),e.addEventListener("click",(e=>{a(e,"calculating__choose-item","calculating__choose-item_active"),function(e){e.target&&e.target.classList.contains("calculating__choose-item")&&(r=+e.target.getAttribute("data-sex"),localStorage.setItem("currentSexCoef",+e.target.getAttribute("data-sex")),h())}(e)})),t.addEventListener("click",(e=>{a(e,"calculating__choose-item","calculating__choose-item_active"),function(e){e.target&&e.target.classList.contains("calculating__choose-item")&&(i=+e.target.getAttribute("data-activity"),localStorage.setItem("currentActivityCoef",+e.target.getAttribute("data-activity")),h())}(e)}))}(),function(e,a){function o(a){const o=document.querySelector(".modal__dialog");o.classList.add("hide"),o.classList.remove("show"),t(".modal",e);const c=document.createElement("div");c.classList.add("modal__dialog"),c.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>&times;</div>\n                <div class="modal__title">${a}</div>\n            </div>\n        `,document.querySelector(".modal").append(c),setTimeout((()=>{c.remove(),o.classList.add("show"),o.classList.remove("hide"),n(".modal")}),1e3)}document.querySelectorAll(a).forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();let n=document.createElement("img");n.src="img/form/spinner.svg",n.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",t.insertAdjacentElement("afterend",n);const a=new FormData(t);(async(e,t)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json; charset=utf-8"},body:t});return console.log("result--\x3e",n),await n.json()})(0,JSON.stringify(Object.fromEntries(a.entries()))).then((e=>{console.log(e),o("Спасибо! Скоро мы с вами свяжемся"),n.remove()})).catch((()=>{o("Что-то пошло не так...")})).finally((()=>{t.reset()}))}))}))}(o,"form")}))})();
//# sourceMappingURL=bundle.js.map