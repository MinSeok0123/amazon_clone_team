(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{55:function(e,c,t){},56:function(e,c,t){},57:function(e,c,t){},65:function(e,c,t){},66:function(e,c,t){},67:function(e,c,t){},68:function(e,c,t){"use strict";t.r(c);var s=t(0),i=t.n(s),a=t(10),r=t.n(a),n=(t(55),t(56),t(23)),o=t(8),l=t(19),d=(t(57),t(46)),j=t.n(d),h=t(98),m=t.p+"static/media/sprite.7ce4d67e.png",b=t(2);var u=function(){var e=Object(s.useState)("All"),c=Object(l.a)(e,2),t=c[0],i=c[1];return Object(b.jsxs)("nav",{className:"header",children:[Object(b.jsxs)("div",{className:"header__top",children:[Object(b.jsx)(n.b,{to:"/",children:Object(b.jsx)("img",{className:"header__logo",alt:"amazon-logo",src:"https://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(b.jsxs)("div",{className:"header__location",children:[Object(b.jsx)("img",{className:"header__locationImg",src:m,alt:"location"}),Object(b.jsxs)("div",{children:["Delever to MinSeok",Object(b.jsx)("span",{children:Object(b.jsx)("b",{children:"Busan Sw Meister High School"})})]})]}),Object(b.jsxs)("div",{className:"header__search",children:[Object(b.jsxs)(h.a,{className:"header__searchSelect",value:t,onChange:function(e){i(e.target.value)},autoWidth:!0,children:[Object(b.jsx)("option",{className:"header__option",value:"All",children:"All"}),Object(b.jsx)("option",{className:"header__option",value:"arts-craft",children:"Arts & Craft"}),Object(b.jsx)("option",{className:"header__option",value:"automotive",children:"automotive"}),Object(b.jsx)("option",{className:"header__option",value:"baby",children:"baby"}),Object(b.jsx)("option",{className:"header__option",value:"beauty-personal",children:"Beauty & Personal Care"}),Object(b.jsx)("option",{className:"header__option",value:"books",children:"Books"}),Object(b.jsx)("option",{className:"header__option",value:"computers",children:"Computers"})]}),Object(b.jsx)("input",{type:"text",className:"header__searchInput"}),Object(b.jsx)(j.a,{className:"header__searchIcon"})]}),Object(b.jsxs)("div",{className:"header__nav",children:[Object(b.jsx)("div",{className:"header__language"}),Object(b.jsx)(n.b,{to:"/",className:"header__link",children:Object(b.jsxs)("div",{className:"header__account header__linkblock",children:[Object(b.jsx)("span",{className:"",children:"Hello, MinSeok "}),Object(b.jsx)("span",{className:"",children:Object(b.jsx)("b",{children:"Account & Lists"})})]})}),Object(b.jsx)(n.b,{to:"/",className:"header__link",children:Object(b.jsxs)("div",{className:"header__order  header__linkblock",children:[Object(b.jsx)("span",{className:"",children:"Returns "}),Object(b.jsx)("span",{className:"",children:Object(b.jsx)("b",{children:"& Orders"})})]})}),Object(b.jsx)(n.b,{to:"/checkout",className:"header__link",children:Object(b.jsxs)("div",{className:"header__shoppingCart header__linkblock",children:[Object(b.jsx)("img",{className:"header__cartImg",src:m,alt:"cart"}),Object(b.jsx)("span",{className:"header__cartNum",children:"0"}),Object(b.jsx)("span",{children:Object(b.jsx)("b",{children:"Cart"})})]})})]})]}),Object(b.jsx)("div",{className:"header__bottom",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"All"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"Today's Deals"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"Customer Service"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"MinSeok's Amazon.com"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"Buy Again"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"Browsing History"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"Gift Cards"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"Sell"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"Registry"})})]})})]})};t(65);var p=function(e){var c=e.className,t=e.profileImg,s=e.title,i=e.subtitle,a=e.productInfo,r=e.linkMsg;return Object(b.jsxs)("li",{className:c,children:[t?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"product__profile",children:[Object(b.jsx)("img",{src:t}),Object(b.jsx)("h2",{className:"product__title",children:s})]}),Object(b.jsx)("p",{className:"product__subtitle",children:i})]}):Object(b.jsx)("h2",{className:"product__title",children:s}),a.length>1?Object(b.jsx)("div",{className:"product__multiContainer",children:a.map((function(e){return Object(b.jsxs)("div",{className:"product__multiImg",children:[Object(b.jsx)("img",{src:e.imgSrc,alt:""}),Object(b.jsx)("p",{children:e.imgDesc}),Object(b.jsx)("a",{className:"product__imgLink"})]})}))}):Object(b.jsx)("div",{className:"product__img",children:Object(b.jsx)("img",{src:a[0],alt:""})}),Object(b.jsx)("a",{className:"product__link",children:r})]})};t(66),t(67);var g=function(e){e.link;var c=e.imgSrc,t=e.imgAlt,i=e.show,a=(e.left,Object(s.useState)()),r=Object(l.a)(a,2),n=r[0],o=r[1];Object(s.useLayoutEffect)((function(){return window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}}),[n]);var d=function(){o(window.innerWidth)};return Object(b.jsx)("li",{style:{width:"".concat(n,"px"),visibility:i},children:Object(b.jsx)("div",{className:"home__imgSize",children:Object(b.jsx)("div",{className:"home__imgCenter",children:Object(b.jsx)("a",{className:"home__imgLink",href:"/",children:Object(b.jsx)("img",{className:"home__Img",src:c,alt:t})})})})})},O=t.p+"static/media/background1.18921740.jpg",x=t.p+"static/media/background2.a61b629a.jpg",_=t.p+"static/media/background3.07344826.jpg",f=t.p+"static/media/background4.da68c766.jpg",N=t.p+"static/media/background5.6f0b4c6a.jpg",v=t(47),k=t.n(v),w=t(48),S=t.n(w);var y=function(){var e=Object(s.useState)(0),c=Object(l.a)(e,2),t=c[0],i=c[1],a=Object(s.useState)(0),r=Object(l.a)(a,2),n=r[0],o=r[1],d=Object(s.useState)(26),j=Object(l.a)(d,2),h=j[0],m=j[1],u=Object(s.useState)(window.innerWidth),v=Object(l.a)(u,2),w=v[0],y=v[1];Object(s.useLayoutEffect)((function(){return n>4?o(0):n<0&&o(4),i(window.innerWidth*n),window.addEventListener("resize",I),m(w>1500?(window.innerWidth-1500)/2+30:30),function(){window.removeEventListener("resize",I)}}),[w,n]);var I=function(){y(window.innerWidth)};return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsxs)("div",{className:"home__arrow",children:[Object(b.jsx)("a",{onClick:function(e){o((function(e){return e-1}))},style:{left:"".concat(h,"px")},children:Object(b.jsx)(k.a,{className:"arrow back__arrow"})}),Object(b.jsx)("a",{onClick:function(e){o((function(e){return e+1}))},style:w>1e3?{right:"".concat(h,"px")}:{right:null,left:"916px"},children:Object(b.jsx)(S.a,{className:"arrow forward__arrow"})})]}),Object(b.jsxs)("ol",{className:"home__imgSlide",style:{transform:"translateX(-".concat(t,"px)"),width:"".concat(5*w,"px")},children:[Object(b.jsx)(g,{link:"",imgSrc:O,imgAlt:"background1 - ship over 45 million products around the world",screenWidth:w,show:0===n?"visible":"hidden"}),Object(b.jsx)(g,{link:"",imgSrc:x,imgAlt:"background2 - Discover our beauty selection",screenWidth:w,show:1===n?"visible":"hidden",left:"900px"}),Object(b.jsx)(g,{link:"",imgSrc:_,imgAlt:"background3 - Shop computers and accessories",screenWidth:w,show:2===n?"visible":"hidden"}),Object(b.jsx)(g,{link:"",imgSrc:f,imgAlt:"background4 - Refresh your space",screenWidth:w,show:3===n?"visible":"hidden"}),Object(b.jsx)(g,{link:"",imgSrc:N,imgAlt:"background5 - Shop toys and games",screenWidth:w,show:4===n?"visible":"hidden"})]}),Object(b.jsxs)("ol",{className:"product__ol",children:[Object(b.jsx)(p,{className:"product product__show",title:"Hi, MinSeok",subtitle:"Recommendations for you",profileImg:"/images/product-profile.jfif",productInfo:[{imgSrc:"/images/product1-1.jfif",imgDesc:"Your Orders"},{imgSrc:"/images/product1-2.jfif",imgDesc:"Electronics"},{imgSrc:"/images/product1-3.jfif",imgDesc:"Computers & Accessories"},{imgSrc:"/images/product1-4.jfif",imgDesc:"Home & Kitchen"}]}),Object(b.jsx)(p,{className:"product product__show",title:"Shop by Category",productInfo:[{imgSrc:"/images/product2-1.jpg",imgDesc:"Computers & Accessories"},{imgSrc:"/images/product2-2.jpg",imgDesc:"Video Games"},{imgSrc:"/images/product2-3.jpg",imgDesc:"Baby"},{imgSrc:"/images/product2-4.jpg",imgDesc:"Toys & Games"}],imageInfo:"",linkMsg:"Shop now"}),Object(b.jsx)(p,{className:"product product__show",title:"Shop top categories",productInfo:["/images/product3.jpg"],linkMsg:"See more"}),Object(b.jsx)(p,{className:"product product__show",title:"Deals & Promotions",productInfo:["/images/product4.jpg"],linkMsg:"Shop now"}),Object(b.jsx)(p,{className:"product product product__show",title:"Get fit at home",productInfo:["/images/product5.jpg"],linkMsg:"Explore now"}),Object(b.jsx)(p,{className:"product product__show",title:"AmazonBasics",productInfo:["/images/product6.jpg"],linkMsg:"See more"}),Object(b.jsx)(p,{className:"product product__hide",title:"Computers & Accessories",productInfo:["/images/product7.jpg"],linkMsg:"Shop now"}),Object(b.jsx)(p,{className:"product product__hide",title:"Electronics",productInfo:["/images/product8.jpg"],linkMsg:"See more"})]})]})};var I=function(){return Object(b.jsx)(n.a,{children:Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/checkout",children:Object(b.jsx)(u,{})}),Object(b.jsx)(o.a,{path:"/login",children:Object(b.jsx)("h1",{children:"Login page"})}),Object(b.jsxs)(o.a,{path:"/",children:[Object(b.jsx)(u,{}),Object(b.jsx)(y,{})]})]})})})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,100)).then((function(c){var t=c.getCLS,s=c.getFID,i=c.getFCP,a=c.getLCP,r=c.getTTFB;t(e),s(e),i(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),C()}},[[68,1,2]]]);
//# sourceMappingURL=main.4b61c1c8.chunk.js.map