import{k as J,l as Z,n as ee,o as z,p as F,j as e,L as U,P as B,r as x,S as V,N as L,a as G,b as se,i as A,E as Q,m as te}from"./index-78dc4f8c.js";import{p as W}from"./page-title-arrow-fff31928.js";/* empty css                  */import{f as q,c as X,h as ie,C as re,o as ne,t as oe,a as ae,b as le}from"./Recommendations-e0b4e256.js";import{A as ce,a as P,b as C,c as N,d as k,e as y}from"./conditions-ellipse-point-94c5b978.js";import{C as de}from"./Cost-db270d4e.js";function Y(i){let{swiper:s,extendParams:l,on:o}=i;l({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let c=!1,d=!1;s.thumbs={swiper:null};function u(){const r=s.thumbs.swiper;if(!r||r.destroyed)return;const t=r.clickedIndex,m=r.clickedSlide;if(m&&m.classList.contains(s.params.thumbs.slideThumbActiveClass)||typeof t>"u"||t===null)return;let f;r.params.loop?f=parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"),10):f=t,s.params.loop?s.slideToLoop(f):s.slideTo(f)}function g(){const{thumbs:r}=s.params;if(c)return!1;c=!0;const t=s.constructor;if(r.swiper instanceof t)s.thumbs.swiper=r.swiper,Object.assign(s.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(s.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),s.thumbs.swiper.update();else if(Z(r.swiper)){const m=Object.assign({},r.swiper);Object.assign(m,{watchSlidesProgress:!0,slideToClickedSlide:!1}),s.thumbs.swiper=new t(m),d=!0}return s.thumbs.swiper.el.classList.add(s.params.thumbs.thumbsContainerClass),s.thumbs.swiper.on("tap",u),!0}function j(r){const t=s.thumbs.swiper;if(!t||t.destroyed)return;const m=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView;let f=1;const n=s.params.thumbs.slideThumbActiveClass;if(s.params.slidesPerView>1&&!s.params.centeredSlides&&(f=s.params.slidesPerView),s.params.thumbs.multipleActiveThumbs||(f=1),f=Math.floor(f),t.slides.forEach(b=>b.classList.remove(n)),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let b=0;b<f;b+=1)ee(t.slidesEl,`[data-swiper-slide-index="${s.realIndex+b}"]`).forEach(h=>{h.classList.add(n)});else for(let b=0;b<f;b+=1)t.slides[s.realIndex+b]&&t.slides[s.realIndex+b].classList.add(n);const p=s.params.thumbs.autoScrollOffset,S=p&&!t.params.loop;if(s.realIndex!==t.realIndex||S){const b=t.activeIndex;let h,T;if(t.params.loop){const a=t.slides.filter(_=>_.getAttribute("data-swiper-slide-index")===`${s.realIndex}`)[0];h=t.slides.indexOf(a),T=s.activeIndex>s.previousIndex?"next":"prev"}else h=s.realIndex,T=h>s.previousIndex?"next":"prev";S&&(h+=T==="next"?p:-1*p),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(h)<0&&(t.params.centeredSlides?h>b?h=h-Math.floor(m/2)+1:h=h+Math.floor(m/2)-1:h>b&&t.params.slidesPerGroup,t.slideTo(h,r?0:void 0))}}o("beforeInit",()=>{const{thumbs:r}=s.params;if(!(!r||!r.swiper))if(typeof r.swiper=="string"||r.swiper instanceof HTMLElement){const t=J(),m=()=>{const n=typeof r.swiper=="string"?t.querySelector(r.swiper):r.swiper;if(n&&n.swiper)r.swiper=n.swiper,g(),j(!0);else if(n){const p=S=>{r.swiper=S.detail[0],n.removeEventListener("init",p),g(),j(!0),r.swiper.update(),s.update()};n.addEventListener("init",p)}return n},f=()=>{if(s.destroyed)return;m()||requestAnimationFrame(f)};requestAnimationFrame(f)}else g(),j(!0)}),o("slideChange update resize observerUpdate",()=>{j()}),o("setTransition",(r,t)=>{const m=s.thumbs.swiper;!m||m.destroyed||m.setTransition(t)}),o("beforeDestroy",()=>{const r=s.thumbs.swiper;!r||r.destroyed||d&&r.destroy()}),Object.assign(s.thumbs,{init:g,update:j})}function H(i){let{swiper:s,extendParams:l,emit:o,once:c}=i;l({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function d(){if(s.params.cssMode)return;const j=s.getTranslate();s.setTranslate(j),s.setTransition(0),s.touchEventsData.velocities.length=0,s.freeMode.onTouchEnd({currentPos:s.rtl?s.translate:-s.translate})}function u(){if(s.params.cssMode)return;const{touchEventsData:j,touches:r}=s;j.velocities.length===0&&j.velocities.push({position:r[s.isHorizontal()?"startX":"startY"],time:j.touchStartTime}),j.velocities.push({position:r[s.isHorizontal()?"currentX":"currentY"],time:z()})}function g(j){let{currentPos:r}=j;if(s.params.cssMode)return;const{params:t,wrapperEl:m,rtlTranslate:f,snapGrid:n,touchEventsData:p}=s,b=z()-p.touchStartTime;if(r<-s.minTranslate()){s.slideTo(s.activeIndex);return}if(r>-s.maxTranslate()){s.slides.length<n.length?s.slideTo(n.length-1):s.slideTo(s.slides.length-1);return}if(t.freeMode.momentum){if(p.velocities.length>1){const w=p.velocities.pop(),v=p.velocities.pop(),K=w.position-v.position,D=w.time-v.time;s.velocity=K/D,s.velocity/=2,Math.abs(s.velocity)<t.freeMode.minimumVelocity&&(s.velocity=0),(D>150||z()-w.time>300)&&(s.velocity=0)}else s.velocity=0;s.velocity*=t.freeMode.momentumVelocityRatio,p.velocities.length=0;let h=1e3*t.freeMode.momentumRatio;const T=s.velocity*h;let a=s.translate+T;f&&(a=-a);let _=!1,M;const E=Math.abs(s.velocity)*20*t.freeMode.momentumBounceRatio;let I;if(a<s.maxTranslate())t.freeMode.momentumBounce?(a+s.maxTranslate()<-E&&(a=s.maxTranslate()-E),M=s.maxTranslate(),_=!0,p.allowMomentumBounce=!0):a=s.maxTranslate(),t.loop&&t.centeredSlides&&(I=!0);else if(a>s.minTranslate())t.freeMode.momentumBounce?(a-s.minTranslate()>E&&(a=s.minTranslate()+E),M=s.minTranslate(),_=!0,p.allowMomentumBounce=!0):a=s.minTranslate(),t.loop&&t.centeredSlides&&(I=!0);else if(t.freeMode.sticky){let w;for(let v=0;v<n.length;v+=1)if(n[v]>-a){w=v;break}Math.abs(n[w]-a)<Math.abs(n[w-1]-a)||s.swipeDirection==="next"?a=n[w]:a=n[w-1],a=-a}if(I&&c("transitionEnd",()=>{s.loopFix()}),s.velocity!==0){if(f?h=Math.abs((-a-s.translate)/s.velocity):h=Math.abs((a-s.translate)/s.velocity),t.freeMode.sticky){const w=Math.abs((f?-a:a)-s.translate),v=s.slidesSizesGrid[s.activeIndex];w<v?h=t.speed:w<2*v?h=t.speed*1.5:h=t.speed*2.5}}else if(t.freeMode.sticky){s.slideToClosest();return}t.freeMode.momentumBounce&&_?(s.updateProgress(M),s.setTransition(h),s.setTranslate(a),s.transitionStart(!0,s.swipeDirection),s.animating=!0,F(m,()=>{!s||s.destroyed||!p.allowMomentumBounce||(o("momentumBounce"),s.setTransition(t.speed),setTimeout(()=>{s.setTranslate(M),F(m,()=>{!s||s.destroyed||s.transitionEnd()})},0))})):s.velocity?(o("_freeModeNoMomentumRelease"),s.updateProgress(a),s.setTransition(h),s.setTranslate(a),s.transitionStart(!0,s.swipeDirection),s.animating||(s.animating=!0,F(m,()=>{!s||s.destroyed||s.transitionEnd()}))):s.updateProgress(a),s.updateActiveIndex(),s.updateSlidesClasses()}else if(t.freeMode.sticky){s.slideToClosest();return}else t.freeMode&&o("_freeModeNoMomentumRelease");(!t.freeMode.momentum||b>=t.longSwipesMs)&&(o("_freeModeStaticRelease"),s.updateProgress(),s.updateActiveIndex(),s.updateSlidesClasses())}Object.assign(s,{freeMode:{onTouchStart:d,onTouchMove:u,onTouchEnd:g}})}function ns({pageTitleLink:i,homeLink:s,shopLink:l}){return e.jsx("div",{className:"page-link",children:e.jsx("div",{className:"conteiner",children:e.jsxs("div",{className:"page-link__items",children:[e.jsx(U,{to:B.HOME,children:s}),e.jsx("img",{src:W,alt:"#"}),e.jsx(U,{to:B.SHOPPAGE,children:l}),e.jsx("img",{src:W,alt:"#"}),e.jsx("span",{children:i})]})})})}const ue=[{id:"showPr01",imageSrc:"/shirts-shop-image.jpg",imageAlt:"Plaid shirt"},{id:"showPr02",imageSrc:"/t-shirts-shop-image.jpg",imageAlt:"Red T-shirt"},{id:"showPr03",imageSrc:"/bottoms-shop-image.jpg",imageAlt:"Children in rubber boots"},{id:"showPr04",imageSrc:"/roompers-shop-image.jpg",imageAlt:"Girl in overalls"},{id:"showPr05",imageSrc:"/hats-shop-image.jpg",imageAlt:"Children's toy in a red hat"},{id:"showPr06",imageSrc:"/shop-all-image.jpg",imageAlt:"Girl sitting on the grass"},{id:"showPr07",imageSrc:"/shirts-shop-image.jpg",imageAlt:"Plaid shirt"},{id:"showPr08",imageSrc:"/t-shirts-shop-image.jpg",imageAlt:"Red T-shirt"},{id:"showPr09",imageSrc:"/bottoms-shop-image.jpg",imageAlt:"Children in rubber boots"}];const $=ue.map(i=>e.jsx(se,{className:"show-slide",children:e.jsx("img",{src:i.imageSrc,alt:i.imageAlt})},i.id));function me(){const[i,s]=x.useState(null);return e.jsxs("div",{className:"product__appearance",children:[e.jsx(V,{modules:[H,L,Y,G],loop:!0,spaceBetween:10,pagination:{type:"fraction"},navigation:!0,thumbs:{swiper:i&&!i.destroyed?i:null},id:"productShow",children:$}),e.jsx(V,{modules:[H,L,Y,G],onSwiper:s,loop:!0,spaceBetween:8,slidesPerView:6,freeMode:!0,watchSlidesProgress:!0,id:"imgSelect",children:$})]})}const pe="/product-journey-icon.png",he="/fair-working-conditions-icon.png",fe="/sustainable-icon.png",R="/pop-up-close-icon.png",ge="/products-pop-up-image.jpg",xe="/fair-pop-up-image.jpg",je="/sustainable-pop-up-image.jpg",be="/svg/product-line-icon.svg",we=[{id:"stepsPU01",caption:"Raw materials processing",text:"Refining and supplying material."},{id:"stepsPU02",caption:"Yarn processing",text:"Spinning raw material into yarn."},{id:"stepsPU03",caption:"Fabric processing",text:"Processing and turning yarn into fabric."},{id:"stepsPU04",caption:"Manufacturing",text:"The different manufacturing steps and processes."},{id:"stepsPU05",caption:"Tree House",text:"Design and sale of the product."}],ve=[{id:"fairPU01",cite:e.jsx(e.Fragment,{children:e.jsx("a",{rel:"noopener",target:"_blank",href:"https://global-standard.org/"})}),imgScr:"/global-OTS-logo.png",imgAlt:"Global Organic Textile Standard logo",link:"https://global-standard.org/"},{id:"fairPU02",cite:e.jsx(e.Fragment,{children:e.jsx("a",{rel:"noopener",target:"_blank",href:"https://www.fairtrade.net/product/cotton"})}),imgScr:"/fairtrade-cotton-logo.png",imgAlt:"Fairtrade cotton logo",link:"https://www.fairtrade.net/product/cotton"},{id:"fairPU03",cite:e.jsx(e.Fragment,{children:e.jsx("a",{rel:"noopener",target:"_blank",href:"https://www.ekowarehouse.com/certification/organic-100-content-standard"})}),imgScr:"/organic-100 -CS-logo.png",imgAlt:"Organic-100 Content Standard logo",link:"https://www.ekowarehouse.com/certification/organic-100-content-standard"},{id:"fairPU04",cite:e.jsx(e.Fragment,{children:e.jsx("a",{rel:"noopener",target:"_blank",href:"https://idfl.com/services/audits-certifications/global-recycled-standard-grs/"})}),imgScr:"/global-RS-logo.png",imgAlt:"Global Recycled Standard logo",link:"https://idfl.com/services/audits-certifications/global-recycled-standard-grs/"}],ye=[{id:"sustPU01",cite:e.jsx(e.Fragment,{children:e.jsx("a",{rel:"noopener",target:"_blank",href:"https://global-standard.org/"})}),imgScr:"/global-OTS-logo.png",imgAlt:"Global Organic Textile Standard logo",link:"https://global-standard.org/"},{id:"sustPU02",cite:e.jsx(e.Fragment,{children:e.jsx("a",{rel:"noopener",target:"_blank",href:"https://www.oeko-tex.com/en/our-standards/oeko-tex-standard-100"})}),imgScr:"/oeko-tex-logo.png",imgAlt:"Oeko Tex logo",link:"https://www.oeko-tex.com/en/our-standards/oeko-tex-standard-100"}];function O({src:i,onClick:s}){return e.jsx("button",{className:"popup__button",onClick:s,children:e.jsx("img",{src:i,alt:"#"})})}function Se({imgAlt:i,caption:s,title:l,subTitle:o,onClick:c}){return e.jsxs("div",{className:"popup__wrapper",children:[e.jsx("img",{className:"popup__close",src:R,alt:"#",onClick:c}),e.jsx("img",{className:"content__image",src:ge,alt:i}),e.jsxs("div",{className:"content",children:[e.jsx("p",{className:"caption",children:s}),e.jsx("h3",{children:l}),e.jsx("h4",{id:"subTitle",children:o}),e.jsxs("section",{className:"content__items",children:[e.jsx("img",{src:be,alt:"#"}),e.jsx("div",{className:"content__steps",children:we.map(d=>e.jsxs(x.Fragment,{children:[e.jsx("h4",{className:"step__title",children:d.caption}),e.jsx("p",{children:d.text})]},d.id))})]})]})]})}function Te({imgAlt:i,caption:s,title:l,text:o,certificates:c,onClick:d}){return e.jsxs("div",{className:"popup__wrapper",children:[e.jsx("img",{className:"popup__close",src:R,alt:"#",onClick:d}),e.jsx("img",{className:"content__image",src:xe,alt:i}),e.jsxs("div",{className:"content",children:[e.jsx("p",{className:"caption",children:s}),e.jsx("h3",{children:l}),e.jsx("p",{className:"content__text",children:o}),e.jsx("p",{className:"content__certificates",children:c}),e.jsx("div",{className:"content__links",children:ve.map(u=>e.jsx("a",{rel:"noopener",target:"_blank",href:u.link,children:e.jsx("img",{src:u.imgScr,alt:u.imgAlt})},u.id))})]})]})}function _e({imgAlt:i,caption:s,title:l,text:o,certificates:c,onClick:d}){return e.jsxs("div",{className:"popup__wrapper",children:[e.jsx("img",{className:"popup__close",src:R,alt:"#",onClick:d}),e.jsx("img",{className:"content__image",src:je,alt:i}),e.jsxs("div",{className:"content",children:[e.jsx("p",{className:"caption",children:s}),e.jsx("h3",{children:l}),e.jsx("p",{className:"content__text",children:o}),e.jsx("p",{className:"content__certificates",children:c}),e.jsx("div",{className:"content__links",children:ye.map(u=>e.jsx("a",{rel:"noopener",target:"_blank",href:u.link,children:e.jsx("img",{src:u.imgScr,alt:u.imgAlt})},u.id))})]})]})}function Pe(){const[i,s]=x.useState(!1);x.useEffect(()=>{i?document.body.style.overflow="hidden":document.body.style.overflowY="scroll"},[i]);const[l,o]=x.useState(!1);x.useEffect(()=>{l?document.body.style.overflow="hidden":document.body.style.overflowY="scroll"},[l]);const[c,d]=x.useState(!1);return x.useEffect(()=>{c?document.body.style.overflow="hidden":document.body.style.overflowY="scroll"},[c]),e.jsxs("div",{className:"card-popups",children:[e.jsxs("section",{className:"card-popups__items",children:[e.jsx(O,{src:pe,onClick:()=>s(!0)}),e.jsx(O,{src:he,onClick:()=>o(!0)}),e.jsx(O,{src:fe,onClick:()=>d(!0)})]}),i&&A.createPortal(e.jsx("div",{className:"blackoutScreen",onClose:()=>s(!1),children:e.jsx(Se,{onClick:()=>s(!i),imgAlt:"A boy looks at an open card",caption:"WHERE I CAME FROM",title:"Product's journey",subTitle:"steps and processes"})}),document.body),l&&A.createPortal(e.jsx("div",{className:"blackoutScreen",onClose:()=>o(!1),children:e.jsx(Te,{onClick:()=>o(!l),imgAlt:"Manufacturing with machines",caption:"We care about people",title:"Fair Working Conditions",text:"Good management practices are implemented to ensure and continuously improve the working conditions of factory workers and all employees.",certificates:"Certificates"})}),document.body),c&&A.createPortal(e.jsx("div",{className:"blackoutScreen",onClose:()=>d(!1),children:e.jsx(_e,{onClick:()=>d(!c),imgAlt:"Field with flax flowers",caption:"In nature we trust",title:"Sustainable Materials",text:"More than 98% of the materials used in this product are proven to be sustainable or eco-friendly.",certificates:"Certificates"})}),document.body)]})}const Ce=[{id:"sizeV01",value:"2-3 years",size:"2-3 years"},{id:"sizeV02",value:"3-4 years",size:"3-4 years"},{id:"sizeV03",value:"4-5 years",size:"4-5 years"},{id:"sizeV04",value:"5-6 years",size:"5-6 years"},{id:"sizeV05",value:"6-7 years",size:"6-7 years"},{id:"sizeV06",value:"6-7 years",size:"6-7 years"},{id:"sizeV07",value:"8-9 years",size:"8-9 years"},{id:"sizeV08",value:"9-10 years",size:"9-10 years"}],Ne="/product-color-icon.png",ke="/svg/size-close-icon.svg",Ae="/size-guide-image.jpg";function Me({text:i,children:s}){return e.jsxs("div",{id:"colorTooltip",children:[s,e.jsx("p",{className:"tooltip-text",children:e.jsx("span",{children:i})})]})}function Ee({labelColor:i,text:s}){return e.jsxs("div",{className:"product-color__items",children:[e.jsxs("div",{id:"color",children:[e.jsx("span",{children:i}),e.jsx("div",{id:"productColor"})]}),e.jsx(Me,{text:s,children:e.jsx("img",{src:Ne,alt:"#"})})]})}const Ie=Ce.map(i=>e.jsx("option",{value:i.value,form:"cardForm",children:i.size},i.id));function ze({buttonText:i,onClick:s}){return e.jsx("button",{type:"button",id:"sizeGuide",onClick:s,children:i})}function Fe({buttonText:i}){return e.jsx("button",{type:"submit",id:"addCart",children:i})}function Oe({labelSize:i,labelQuantity:s}){const[l,o]=x.useState(""),[c,d]=x.useState(!1);x.useEffect(()=>{c?document.body.style.overflow="hidden":document.body.style.overflowY="scroll"},[c]);const[u,g]=x.useState(1),j=()=>{u<50&&g(u+1)},r=()=>{u>1&&g(u-1)};function t(m){m.preventDefault();const f=m.target,n=new FormData(f),p=Object.fromEntries(n.entries());console.log(p)}return e.jsxs(Q,{fallback:e.jsx("p",{style:{color:"red",textAlign:"center",fontSize:20,paddingTop:30},children:"There was an error while submitting the form"}),children:[e.jsx(Ee,{labelColor:"Color",text:"All colors are carefully selected in accordance with the Pantone Color Institute"}),e.jsxs("form",{method:"post",onSubmit:t,id:"cardForm",children:[e.jsxs("fieldset",{className:"size__items",children:[e.jsxs("label",{children:[" ",i="Select size",e.jsx("select",{value:l,onChange:m=>o(m.target.value),name:"size",children:Ie})]}),e.jsx(ze,{onClick:()=>d(!0),buttonText:"Size guide"})]}),e.jsxs("label",{children:[s="Quantity",e.jsxs("div",{className:"product-quantity__items",children:[e.jsx("input",{type:"button",id:"productMinus",defaultValue:"-",onClick:()=>r()}),e.jsx("input",{type:"number",min:1,required:"",id:"productNumber",name:"productQuantity",value:u,readOnly:!0}),e.jsx("input",{type:"button",id:"productPlus",defaultValue:"+",onClick:()=>j()})]})]}),e.jsx(Fe,{buttonText:"ADD TO CART"})]}),c&&A.createPortal(e.jsx("div",{id:"sizeBlackout",onClose:()=>d(!1),children:e.jsxs("div",{className:"size-image",children:[e.jsx("img",{className:"size__close",src:ke,alt:"#",onClick:()=>d(!c)}),e.jsx("img",{id:"sizeImage",src:Ae,alt:"Size"})]})}),document.body)]})}const Re=e.jsx(e.Fragment,{children:"100% OEKO-TEX®certified Linen Shirt"}),De=e.jsx(e.Fragment,{children:"Loose, breathable, and stylish, this 100% OEKO-TEX® certified linen shirt will leave your little one looking polished in utmost comfort. Its boxy fit is perfect for running through sand dunes, exploring the city, or strollingn through the park, and its neutral coloring is perfect for the summer sun."}),Ue=e.jsx(e.Fragment,{children:"The linen weave allows for breathability in hot temps, keeping your cutie at ease. Additionally, Its versatile design features a belt, meaning your big kid’s shirt can be a shirt dress for little siblings. In short, this shirt is beautiful, durable, and comfortable for all your little loves"}),Be=e.jsx(e.Fragment,{children:"DID YOU KNOW? The birch leaf symbolizes protection, keeping your little one safe on their big adventures."}),Ve=e.jsx(e.Fragment,{children:"Sustainably and ethically produced from OEKO-TEX STANDART 100 certified linen"}),Le=e.jsx(e.Fragment,{children:"Belt loops (for wearing as a shirt dress in a size down)"}),Ge=e.jsx(e.Fragment,{children:"Wooden button detailing"}),We=e.jsx(e.Fragment,{children:"Wash in cold or warm water (<30C) with eco-detergent. Line dry or tumble dry on low. Hand-down or donate when outgrown"}),Ye=e.jsx(e.Fragment,{children:"We offer free shipping within the continental US on orders of $150+. Orders shipping to Alaska, Hawaii, or outside of the US are excluded from free shipping."}),He=e.jsx(e.Fragment,{children:"We offer standard rates for both domestic and international shipping. If in Manhattan, deliveries will be made same day if the order is received before 1pm EST. Brooklyn, Queens, and New Jersey shipments will be delivered next day. All orders received before 1pm EST will be shipped same day, regardless of domestic or international address."});function $e({caption:i}){return e.jsx("div",{className:"product-properties",children:e.jsxs(ce,{allowMultipleExpanded:!0,allowZeroExpanded:!0,children:[e.jsxs(P,{children:[e.jsx(C,{children:e.jsx(N,{children:i="Composition"})}),e.jsx(k,{children:e.jsxs("div",{className:"content__composition",children:[e.jsx("img",{src:y,alt:"#"}),e.jsx("p",{children:Re})]})})]}),e.jsxs(P,{children:[e.jsx(C,{children:e.jsx(N,{children:i="Description"})}),e.jsxs(k,{children:[e.jsxs("div",{className:"content__composition",children:[e.jsx("img",{src:y,alt:"#"}),e.jsx("p",{children:De})]}),e.jsxs("div",{className:"content__composition",children:[e.jsx("img",{src:y,alt:"#"}),e.jsx("p",{children:Ue})]}),e.jsx("div",{className:"content__composition",children:e.jsx("p",{children:Be})})]})]}),e.jsxs(P,{children:[e.jsx(C,{children:e.jsx(N,{children:i="Features"})}),e.jsxs(k,{children:[e.jsxs("div",{className:"content__composition",children:[e.jsx("img",{src:y,alt:"#"}),e.jsx("p",{children:Ve})]}),e.jsxs("div",{className:"content__composition",children:[e.jsx("img",{src:y,alt:"#"}),e.jsx("p",{children:Le})]}),e.jsxs("div",{className:"content__composition",children:[e.jsx("img",{src:y,alt:"#"}),e.jsx("p",{children:Ge})]})]})]}),e.jsxs(P,{children:[e.jsx(C,{children:e.jsx(N,{children:i="Clothing Care"})}),e.jsx(k,{children:e.jsxs("div",{className:"content__composition",children:[e.jsx("img",{src:y,alt:"#"}),e.jsx("p",{children:We})]})})]}),e.jsxs(P,{children:[e.jsx(C,{children:e.jsx(N,{children:i="Shipping and Delivery"})}),e.jsxs(k,{children:[e.jsxs("div",{className:"content__composition",children:[e.jsx("img",{src:y,alt:"#"}),e.jsx("p",{children:Ye})]}),e.jsxs("div",{className:"content__composition",children:[e.jsx("img",{src:y,alt:"#"}),e.jsx("p",{children:He})]})]})]})]})})}function Qe({newLabel:i,title:s,captionText:l}){return e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"product__label",children:i}),e.jsx("h2",{children:s}),e.jsx("p",{className:"product__caption",children:l})]})}function qe({buttonText:i,onClick:s}){return e.jsx("button",{id:"productReview",onClick:s,children:i})}function Xe({title01:i,title02:s,title03:l,close:o,onClick:c}){return e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[i,e.jsx("span",{children:s}),l]}),e.jsxs("div",{id:"reviewsClose",onClick:c,children:[e.jsx("span",{children:o}),e.jsx("img",{src:te,alt:"#"})]})]})}function Ke({buttonSave:i}){const[s,l]=x.useState(""),[o,c]=x.useState(""),[d,u]=x.useState(""),[g,j]=x.useState(0);function r(){return g===1?ne:g===2?oe:g===3?ae:g===4?le:q}const[t,m]=x.useState(0);function f(n){n.preventDefault();const p=n.target,S=new FormData(p),b={stars:r(),name:s,caption:o,review:d,autorIcon:s[0]};X.unshift(b);const h=Object.fromEntries(S.entries());console.log(h),console.log(g)}return e.jsx(Q,{fallback:e.jsx("p",{style:{color:"red",textAlign:"center",fontSize:20,paddingTop:30},children:"There was an error while submitting the form"}),children:e.jsxs("form",{method:"post",onSubmit:f,id:"formReviews",children:[e.jsx("input",{type:"name",name:"name",autoComplete:"off",value:s,onChange:n=>l(n.target.value),placeholder:"Your Name"}),e.jsx("input",{type:"text",name:"caption",autoComplete:"off",value:o||"",onChange:n=>c(n.target.value),placeholder:"What is Your review about?"}),e.jsx("textarea",{name:"review",autoComplete:"off",value:d,onChange:n=>u(n.target.value),rows:10,cols:40,placeholder:"Write Your review here!"}),e.jsx("div",{className:"star__rating",children:[...Array(5)].map((n,p)=>(p+=1,e.jsx("button",{type:"button",className:p<=(t||g)?"on":"off",onClick:()=>j(p),onMouseEnter:()=>m(p),onMouseLeave:()=>m(g),children:e.jsx("span",{className:"star",children:"★"})},p)))}),e.jsx("button",{type:"submit",id:"buttonSave",children:i})]})})}function Je({price:i}){return e.jsx(e.Fragment,{children:e.jsx("span",{className:"product__price",children:i})})}function os({reviews:i,newLabel:s,title:l,captionText:o,price:c,ancor:d}){const[u,g]=x.useState(!1);return x.useEffect(()=>{u?document.body.style.overflow="hidden":document.body.style.overflowY="scroll"},[u]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"card",children:e.jsxs("div",{className:"conteiner",children:[e.jsxs("section",{className:"card__items",children:[e.jsx(me,{}),e.jsxs("div",{className:"product__feature",children:[e.jsx(Qe,{newLabel:s,title:l,captionText:o}),e.jsxs("div",{className:"product__reviews",children:[e.jsxs("a",{href:`#${d}`,className:"rating__link",children:[e.jsx("img",{src:q,alt:"#"}),e.jsxs("p",{className:"rating__caption",children:[X.length+ie.length,i=" reviews"]})]}),e.jsx(qe,{onClick:()=>g(!0),buttonText:"Write a review"})]}),e.jsx(Je,{price:c}),e.jsx(Pe,{}),e.jsx(Oe,{})]})]}),e.jsx($e,{}),e.jsx(de,{}),u&&A.createPortal(e.jsx("div",{id:"reviews",onClose:()=>g(!1),children:e.jsxs("div",{className:"form__reviews",children:[e.jsx(Xe,{onClick:()=>g(!u),title01:"Your ",title02:"feedback",title03:"!",close:"close"}),e.jsx(Ke,{buttonSave:"Save review"})]})}),document.body)]})}),e.jsx("div",{id:d,children:e.jsx(re,{})})]})}export{ns as P,os as a};
