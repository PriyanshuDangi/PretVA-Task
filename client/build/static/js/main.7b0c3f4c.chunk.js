(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,c){e.exports={container:"Card_container__2li58",box1:"Card_box1__1tLin",userImg:"Card_userImg__1zId-",box2:"Card_box2__z5L8w",requirement:"Card_requirement__1gIz3",company:"Card_company__33DiC",weiandquan:"Card_weiandquan__3Jtct",box3:"Card_box3__2u1dB",icons:"Card_icons__OwmaK"}},24:function(e,t,c){e.exports={container:"Footer_container__181hO",contact:"Footer_contact__229VA",social:"Footer_social__CyH3J",copyright:"Footer_copyright__wbc--"}},25:function(e,t,c){e.exports={container:"AppliedFilters_container__15C7W",title:"AppliedFilters_title__3x3Cp",appliedFilters:"AppliedFilters_appliedFilters__A90K7",filterscontainer:"AppliedFilters_filterscontainer__iciHn",clearAll:"AppliedFilters_clearAll__3zLoy"}},30:function(e,t,c){e.exports={active:"Header_active__11YnJ",buttons:"Header_buttons__YV6jh",navLinks:"Header_navLinks__29M3p"}},31:function(e,t,c){e.exports={container:"NavButtons_container__2azYX",button1:"NavButtons_button1__2L5Lr",button2:"NavButtons_button2__2gXha"}},45:function(e,t,c){e.exports={hrEnd:"Hr_hrEnd__3qZ_b"}},46:function(e,t,c){e.exports={breadcrumb:"Breadcrumb_breadcrumb__1LVNq"}},49:function(e,t,c){e.exports={cards:"Page_cards__3Z5i4"}},55:function(e,t,c){},56:function(e,t,c){},8:function(e,t,c){e.exports={filterscontainer:"SearchFilter_filterscontainer__2KckE",searchContainer:"SearchFilter_searchContainer__1XDhI",heading:"SearchFilter_heading__184DQ",dropdownContainer:"SearchFilter_dropdownContainer__3PkqJ",dropdownButton:"SearchFilter_dropdownButton__1qG5c",forms:"SearchFilter_forms__A-N_j",applyFilters:"SearchFilter_applyFilters__TMX4S"}},81:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),i=c.n(a),s=c(17),r=c.n(s),l=(c(55),c(56),c(57),c(12)),j=c(87),d=c(88),o=c(44),b=c.p+"static/media/logo.29f78891.png",u=c(30),h=c.n(u),x=function(){return Object(n.jsxs)(j.a,{bg:"light",expand:"lg",children:[Object(n.jsx)(j.a.Brand,{href:"/",children:Object(n.jsx)("img",{src:b,width:"150px",className:"d-inline-block align-top",alt:"",loading:"lazy"})}),Object(n.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(j.a.Collapse,{id:"basic-navbar-nav",className:h.a.navLinks,children:[Object(n.jsxs)(d.a,{className:"mr-auto",style:{margin:"auto"},children:[Object(n.jsx)(d.a.Link,{href:"/",children:"About"}),Object(n.jsx)(d.a.Link,{href:"/",children:"Services"}),Object(n.jsx)(d.a.Link,{href:"/",className:h.a.active,children:"Search"}),Object(n.jsxs)(d.a.Link,{href:"/",children:["Feedback ","&"," Support"]})]}),Object(n.jsxs)(d.a,{className:h.a.buttons,children:[Object(n.jsx)("div",{children:Object(n.jsx)(o.a,{variant:"outline-secondary",className:!0,children:"My Account"})}),Object(n.jsx)("div",{children:Object(n.jsx)(o.a,{variant:"dark",children:"Logout"})})]})]})]})},O=c(45),p=c.n(O),m=function(){return Object(n.jsx)("div",{className:p.a.hrEnd})},_=c(89),f=c(46),v=c.n(f),g=function(){return Object(n.jsxs)(_.a,{className:v.a.breadcrumb,children:[Object(n.jsx)(_.a.Item,{href:"/",children:"Search"}),Object(n.jsx)(_.a.Item,{active:!0,children:"Search Buyer Requirement"})]})},N=c(31),y=c.n(N),C=function(){return Object(n.jsxs)("div",{className:y.a.container,children:[Object(n.jsx)("div",{className:y.a.button1,children:Object(n.jsx)(o.a,{variant:"outline-dark",children:"Search Supplier Products"})}),Object(n.jsx)("div",{className:y.a.button2,children:Object(n.jsx)(o.a,{variant:"outline-dark",children:"Search Buyer Requirements"})})]})},F=c(86),S=c(8),k=c.n(S),w=function(e){var t=Object(a.useState)(null),c=Object(l.a)(t,2),i=c[0],s=c[1],r=Object(a.useState)(null),j=Object(l.a)(r,2),d=j[0],b=j[1],u=Object(a.useState)(null),h=Object(l.a)(u,2),x=h[0],O=h[1],p=Object(a.useState)(null),m=Object(l.a)(p,2),_=m[0],f=m[1],v=e.productNames.map((function(t,c){return Object(n.jsx)(F.a.Item,{as:"button",onClick:function(){return e.filterClick("product_name*"+t)},children:t},c)}));return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:k.a.filterscontainer,children:[Object(n.jsx)("div",{className:k.a.heading,children:"Search Filters"}),Object(n.jsxs)("div",{className:k.a.dropdownContainer,children:[Object(n.jsx)("div",{children:Object(n.jsxs)(F.a,{children:[Object(n.jsx)(F.a.Toggle,{id:"dropdown-basic",className:k.a.dropdownButton,children:"Product"}),Object(n.jsx)(F.a.Menu,{children:v})]})}),Object(n.jsx)("div",{children:Object(n.jsxs)(F.a,{children:[Object(n.jsx)(F.a.Toggle,{id:"dropdown-basic",className:k.a.dropdownButton,children:"Quantity"}),Object(n.jsx)(F.a.Menu,{children:Object(n.jsxs)("form",{className:k.a.forms,onSubmit:function(t){t.preventDefault(),e.filterClick("quantity*"+i),s(null)},children:[Object(n.jsx)("input",{type:"number",placeholder:"Enter Quantity in mtrs",min:"0",required:!0,onChange:function(e){return s(e.target.value)}}),Object(n.jsx)("button",{children:"Apply"})]})})]})}),Object(n.jsx)("div",{children:Object(n.jsxs)(F.a,{children:[Object(n.jsx)(F.a.Toggle,{id:"dropdown-basic",className:k.a.dropdownButton,children:"Cost"}),Object(n.jsx)(F.a.Menu,{children:Object(n.jsxs)("form",{className:k.a.forms,onSubmit:function(t){t.preventDefault(),e.filterClick("price_rs*"+d),b(null)},children:[Object(n.jsx)("input",{type:"number",placeholder:"Enter Cost in Rs",min:"0",required:!0,onChange:function(e){return b(e.target.value)}}),Object(n.jsx)("button",{children:"Apply"})]})})]})}),Object(n.jsx)("div",{children:Object(n.jsxs)(F.a,{children:[Object(n.jsx)(F.a.Toggle,{id:"dropdown-basic",className:k.a.dropdownButton,children:"Lead Time"}),Object(n.jsx)(F.a.Menu,{children:Object(n.jsxs)("form",{className:k.a.forms,onSubmit:function(t){t.preventDefault(),e.filterClick("lead_time*"+x),b(null)},children:[Object(n.jsx)("input",{type:"number",placeholder:"Enter Lead Time in months",min:"0",required:!0,onChange:function(e){return O(e.target.value)}}),Object(n.jsx)("button",{children:"Apply"})]})})]})}),Object(n.jsx)("div",{children:Object(n.jsxs)(F.a,{children:[Object(n.jsx)(F.a.Toggle,{id:"dropdown-basic",className:k.a.dropdownButton,children:"Rating"}),Object(n.jsx)(F.a.Menu,{children:Object(n.jsx)(F.a.Item,{as:"button",children:"\u2605 \u2605 \u2605 \u2605 \u2605"})})]})}),Object(n.jsx)("div",{children:Object(n.jsxs)(F.a,{children:[Object(n.jsx)(F.a.Toggle,{id:"dropdown-basic",className:k.a.dropdownButton,children:"Location"}),Object(n.jsx)(F.a.Menu,{children:Object(n.jsx)(F.a.Item,{as:"button",children:"Bengaluru"})})]})}),Object(n.jsx)("div",{className:k.a.applyFilters,children:Object(n.jsx)(o.a,{variant:"outline-secondary",className:!0,children:"Apply Filters"})})]})]}),Object(n.jsx)("div",{className:k.a.searchContainer,children:Object(n.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.filterClick("buyer_name*"+_),b(null)},children:Object(n.jsxs)("div",{class:"input-group",children:[Object(n.jsx)("div",{class:"input-group-prepend",children:Object(n.jsx)("span",{class:"input-group-text",id:"basic-addon1",children:"@"})}),Object(n.jsx)("input",{type:"text",class:"form-control",placeholder:"Search Buyer Requirements","aria-label":"Username","aria-describedby":"basic-addon1",onChange:function(e){return f(e.target.value)}}),Object(n.jsx)(o.a,{variant:"outline-dark",className:k.a.buyerButton,type:"submit",children:"Search Buyer"})]})})})]})},B=c(24),L=c.n(B),q=function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:L.a.container,children:[Object(n.jsx)("div",{children:Object(n.jsx)("b",{children:"Get In Touch!"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:"Location"}),Object(n.jsx)("div",{children:"Bengaluru, Karnataka, India"})]}),Object(n.jsxs)("div",{className:L.a.contact,children:[Object(n.jsx)("div",{children:"Contact"}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{id:"mail",href:"mailto:support@pretva.com",children:"support@pretva.com"})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:"Follow"}),Object(n.jsxs)("div",{className:L.a.social,children:[Object(n.jsx)("i",{class:"fab fa-facebook-f"}),Object(n.jsx)("i",{class:"fab fa-instagram"}),Object(n.jsx)("i",{class:"fab fa-linkedin-in"})]})]})]}),Object(n.jsx)("div",{className:L.a.copyright,children:"\xa92020 by PretVA"})]})},A=c.p+"static/media/profile.a9f4b1bf.png",I=c(11),T=c.n(I),E=function(e){return Object(n.jsxs)("div",{className:T.a.container,children:[Object(n.jsxs)("div",{className:T.a.box1,children:[Object(n.jsx)("img",{className:T.a.userImg,src:A,alt:"profile"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:e.info.buyer_name}),Object(n.jsx)("div",{className:T.a.company,children:"Buyer, Sunshine Apparel Pvt. Limited"}),Object(n.jsx)("div",{children:"Bangalore, Karnataka , India"})]})]}),Object(n.jsxs)("div",{className:T.a.box2,children:[Object(n.jsxs)("div",{className:T.a.requirement,children:[Object(n.jsx)("b",{children:"Requirement : "}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:" Posted: March 2, 2020"}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:" Expires: July 2, 2020"})]})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Fabric : "}),Object(n.jsx)("span",{children:e.info.product_name})]}),Object(n.jsxs)("div",{className:T.a.weiandquan,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Weight : "}),Object(n.jsxs)("span",{children:[" ",e.info.weight_gsm," gsm"]})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Quantity : "}),Object(n.jsxs)("span",{children:[" ",e.info.quantity," mtrs"]})]})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Cost Bracket : "}),Object(n.jsxs)("span",{children:["INR ",e.info.price_rs]})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Lead Time Provision : "}),Object(n.jsxs)("span",{children:[e.info.lead_time," months"]})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Delivery Location : "}),Object(n.jsx)("span",{children:"New Delhi, India"})]})]}),Object(n.jsxs)("div",{className:T.a.box3,children:[Object(n.jsx)("div",{className:T.a.icons,children:Object(n.jsx)("i",{class:"far fa-user"})}),Object(n.jsx)("div",{className:T.a.icons,children:Object(n.jsx)("i",{class:"far fa-comment-alt"})}),Object(n.jsx)("div",{className:T.a.icons,children:Object(n.jsx)("i",{class:"fas fa-share-alt"})}),Object(n.jsx)("div",{className:T.a.icons,children:Object(n.jsx)("i",{class:"far fa-bookmark"})})]})]})},M=c(48),D=c.n(M),P=c(49),R=c.n(P),J=c(25),z=c.n(J),H=function(e){var t=null;return e.filter&&(t=Object(n.jsxs)("div",{children:[e.filter,Object(n.jsx)("button",{onClick:e.clearFilter,children:"x"})]})),Object(n.jsxs)("div",{className:z.a.container,children:[Object(n.jsx)("div",{className:z.a.title,children:"Search Filters :"}),Object(n.jsxs)("div",{className:z.a.appliedFilters,children:[t,Object(n.jsxs)("div",{children:["5 \u2605",Object(n.jsx)("button",{children:"x"})]}),Object(n.jsxs)("div",{children:["Bengaluru",Object(n.jsx)("button",{children:"x"})]}),Object(n.jsx)("div",{className:z.a.clearAll,children:Object(n.jsx)("button",{onClick:e.clearFilter,children:"Clear All"})})]})]})},K=function(){var e,t=Object(a.useState)([]),c=Object(l.a)(t,2),s=c[0],r=c[1],j=Object(a.useState)([]),d=Object(l.a)(j,2),o=d[0],b=d[1],u=Object(a.useState)(null),h=Object(l.a)(u,2),O=h[0],p=h[1],_=Object(a.useState)(!1),f=Object(l.a)(_,2),v=f[0],N=f[1],y=Object(a.useState)("all*true"),F=Object(l.a)(y,2),S=F[0],k=F[1];Object(a.useEffect)((function(){N(!0);var e=S.split("*"),t="/api/product?"+e[0]+"="+e[1];D.a.get(t).then((function(e){N(!1),p(null),b(e.data),0===s.length&&r(e.data)})).catch((function(e){N(!1),p("Unable to find the requested products"),console.log(e)}))}),[S,s]),v?e=Object(n.jsx)("div",{children:"Loading..."}):O?e=Object(n.jsx)("div",{children:O}):o&&(e=o.map((function(e,t){return Object(n.jsx)(E,{info:e},t)})));var B=[];s&&s.forEach((function(e){-1===B.indexOf(e.product_name)&&B.push(e.product_name)}));var L=null;"all*true"!==S&&(L="quantity"===S.split("*")[0]?S.split("*")[1]+" mtrs":"price_rs"===S.split("*")[0]?S.split("*")[1]+" Rs":"lead_time"===S.split("*")[0]?S.split("*")[1]+" months":S.split("*")[1]);return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(x,{}),Object(n.jsx)(m,{}),Object(n.jsx)(g,{}),Object(n.jsx)(C,{}),Object(n.jsx)(w,{productNames:B,filterClick:function(e){console.log(e),S!==e&&k(e)}}),Object(n.jsx)(H,{filter:L,clearFilter:function(){"all*true"!==S&&k("all*true")}}),Object(n.jsx)("div",{className:R.a.cards,children:e}),Object(n.jsx)(q,{})]})};c(80);var Q=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(K,{})})},V=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,90)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(Q,{})}),document.getElementById("root")),V()}},[[81,1,2]]]);
//# sourceMappingURL=main.7b0c3f4c.chunk.js.map