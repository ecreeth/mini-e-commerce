(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,r){r(22),e.exports=r(82)},22:function(e,t,r){"use strict";r(23),r(65)},23:function(e,t,r){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=a(r(0)),u=n(r(3)),o=n(r(28)),i=n(r(47)),c=n(r(53)),s=n(r(54)),d=n(r(63));var f=document.getElementById("products");f&&u.default.render(l.default.createElement((function(){var e=l.useState(!1),t=e[0],r=e[1];return l.default.createElement(d.default,null,l.default.createElement(c.default,{onClick:function(){return r(!0)}}),l.default.createElement(o.default,null),l.default.createElement(i.default,null),l.default.createElement(s.default,{close:function(){return r(!1)},show:t}))}),null),f)},28:function(e,t,r){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=a(r(0)),u=n(r(5)),o=n(r(4)),i=l.default.lazy((function(){return Promise.resolve().then((function(){return a(r(46))}))}));t.default=function(){var e=l.useContext(o.default),t=e.filterByCategory,r=e.getAllProducts,a=e.sortProductBy,n=l.useState(0),c=n[0],s=n[1],d=l.useState([]),f=d[0],m=d[1];return l.useEffect((function(){u.default.get("/api/categories").then((function(e){m(e.data.data)})).catch((function(e){return console.log(e)}))}),[]),l.default.createElement("div",{className:"bg-white container rounded-t-lg mx-auto",style:{background:"#303030"}},l.default.createElement("div",{className:"max-w-7xl mx-auto py-4 sm:px-6 lg:px-6"},l.default.createElement("div",{className:"flex justify-between items-center text-sm"},l.default.createElement("div",null,l.default.createElement("ul",{className:"flex"},l.default.createElement("li",{className:"mr-4"},l.default.createElement("button",{onClick:function(){r(),s(0)},className:"font-thin "+(0==c?"font-bold text-white":"text-gray-150")+" flex items-center"},l.default.createElement("svg",{className:"mr-2",width:"16",height:"16",viewBox:"0 0 69 68",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.default.createElement("path",{d:"M23.396 0.0469055H8.396C6.40687 0.0469055 4.49922 0.837081 3.09269 2.2436C1.68617 3.65013 0.895996 5.55778 0.895996 7.54691V22.5469C0.895996 24.536 1.68617 26.4437 3.09269 27.8502C4.49922 29.2567 6.40687 30.0469 8.396 30.0469H23.396C25.3851 30.0469 27.2928 29.2567 28.6993 27.8502C30.1058 26.4437 30.896 24.536 30.896 22.5469V7.54691C30.896 5.55778 30.1058 3.65013 28.6993 2.2436C27.2928 0.837081 25.3851 0.0469055 23.396 0.0469055ZM60.896 0.0469055H45.896C43.9069 0.0469055 41.9992 0.837081 40.5927 2.2436C39.1862 3.65013 38.396 5.55778 38.396 7.54691V22.5469C38.396 24.536 39.1862 26.4437 40.5927 27.8502C41.9992 29.2567 43.9069 30.0469 45.896 30.0469H60.896C62.8851 30.0469 64.7928 29.2567 66.1993 27.8502C67.6058 26.4437 68.396 24.536 68.396 22.5469V7.54691C68.396 5.55778 67.6058 3.65013 66.1993 2.2436C64.7928 0.837081 62.8851 0.0469055 60.896 0.0469055ZM23.396 37.5469H8.396C6.40687 37.5469 4.49922 38.3371 3.09269 39.7436C1.68617 41.1501 0.895996 43.0578 0.895996 45.0469V60.0469C0.895996 62.036 1.68617 63.9437 3.09269 65.3502C4.49922 66.7567 6.40687 67.5469 8.396 67.5469H23.396C25.3851 67.5469 27.2928 66.7567 28.6993 65.3502C30.1058 63.9437 30.896 62.036 30.896 60.0469V45.0469C30.896 43.0578 30.1058 41.1501 28.6993 39.7436C27.2928 38.3371 25.3851 37.5469 23.396 37.5469ZM60.896 37.5469H45.896C43.9069 37.5469 41.9992 38.3371 40.5927 39.7436C39.1862 41.1501 38.396 43.0578 38.396 45.0469V60.0469C38.396 62.036 39.1862 63.9437 40.5927 65.3502C41.9992 66.7567 43.9069 67.5469 45.896 67.5469H60.896C62.8851 67.5469 64.7928 66.7567 66.1993 65.3502C67.6058 63.9437 68.396 62.036 68.396 60.0469V45.0469C68.396 43.0578 67.6058 41.1501 66.1993 39.7436C64.7928 38.3371 62.8851 37.5469 60.896 37.5469Z",fill:"#56c667"})),"Mostrar Todo")),l.default.createElement(l.Suspense,{fallback:l.default.createElement("span",{className:"text-white"},"Cargando lista de filtros")},f.map((function(e){var r=e.id,a=e.name;return l.default.createElement(i,{key:r,id:r,selected:c,filter:t,setSelected:s,category:r,title:a})}))))),l.default.createElement("div",null,l.default.createElement("select",{defaultValue:0,onChange:function(e){var t=e.target;return a(t.value)},className:"cursor-pointer form-select text-sm text-white bg-gray-1000 border-transparent block w-full"},l.default.createElement("option",{disabled:!0,value:"0"},"Ordenar Por"),l.default.createElement("option",{value:"Asc"},"Nombre (Asc)"),l.default.createElement("option",{value:"Desc"},"Nombre (Desc)"))))))}},4:function(e,t,r){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(0)).createContext({products:[],cart:[],total:0,isLoading:!1,isSaving:!1,addProductToCart:function(e){},removeProductFromCart:function(e){},filterByCategory:function(e){},getAllProducts:function(){},sortProductBy:function(e){},completeOrder:function(){}});t.default=n},46:function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(0));t.default=function(e){var t=e.id,r=e.title,a=e.category,l=e.filter,u=e.selected,o=e.setSelected,i=u==t;return n.default.createElement("li",{className:"mr-4"},n.default.createElement("button",{disabled:i,onClick:function(){l(a),o(t)},className:"font-thin hover:text-white text-gray-150"},n.default.createElement("span",{className:"text-gray-100"},"#")," ",n.default.createElement("span",{className:i?"font-bold text-white":""},r)))}},47:function(e,t,r){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=a(r(0)),u=n(r(4)),o=n(r(48)),i=n(r(51)),c=n(r(52));t.default=function(){var e=l.useContext(u.default);return e.isLoading?l.default.createElement(i.default,{title:"🔥 Cargando Productos..."}):0==e.products.data.length?l.default.createElement(i.default,{type:0,title:"😐 No hay productos disponibles"}):l.default.createElement(l.default.Fragment,null,l.default.createElement(c.default,{total:e.products.meta.total,count:e.products.data.length}),l.default.createElement("div",{className:"mt-10 grid lg:grid-cols-4 sm:grid-cols-2 row-gap-8 col-gap-8"},e.products.data.map((function(t){var r=t.id,a=t.name,n=t.price,u=t.category,i=t.cover;return l.default.createElement(o.default,{key:r,id:r,title:a,cover:i,price:n,addProduct:function(){return e.addProductToCart({id:r,name:a,price:n,category:u,cover:i})},category:u.name})}))))}},48:function(e,t,r){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=a(r(0)),u=n(r(6)),o=n(r(4));t.default=function(e){var t=e.id,r=e.title,a=e.price,n=e.category,i=e.cover,c=void 0===i?1:i,s=e.addProduct,d=0,f=l.useContext(o.default).cart.find((function(e){return e.id===t}));return f&&(d=f.quantity),l.default.createElement("div",{className:"product-card-container relative"},l.default.createElement("img",{src:"/images/products/"+c+".png",className:"object-cover w-full shadow-sm h-48 rounded-lg mb-px"}),l.default.createElement("div",{className:"flex justify-between mt-2 items-center text-white"},l.default.createElement("a",{href:"#",className:"hover:underline font-bold"},r),l.default.createElement("span",{className:"rounded text-sm px-2 py-1 text-blue-500 font-medium",title:"Precio del artículo",style:{background:"#2a2a2a"}},"$",a)),l.default.createElement("p",{className:"text-xs text-gray-200"},"Por ",l.default.createElement("span",{className:"font-medium hover:underline cursor-pointer"},"Luis Alvarado "),"en ",l.default.createElement("a",{href:"#",className:"font-bold hover:underline",style:{color:"rgb(86, 198, 109)"}},n)),l.default.createElement("div",{className:"absolute top-0 rounded-lg right-0 w-full h-48 bg-gray-300 hidden product-card-hover"},l.default.createElement("div",{className:"flex flex-col items-center justify-center h-full text-sm"},l.default.createElement("div",{className:"relative"},l.default.createElement("img",{className:"h-6",src:"/images/icon-cart.svg",alt:""}),d>0&&l.default.createElement("span",{className:"text-white w-5 h-5 flex items-center bg-gray-800 justify-center rounded-full absolute top-0 right-0 -mt-4 -mr-5"},d)),l.default.createElement("button",{onClick:function(){s(),u.default.success(l.default.createElement("span",null,"Has agregado: ",l.default.createElement("strong",null,r)," a tu carrito!"),{position:"bottom-right"})},className:"shadow-lg transition-all text-white hover:bg-gray-800 bg-gray-1000 active:bg-blue-700 rounded px-4 py-1 mt-4"},"+ Agregar al carrito"))))}},51:function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(0));t.default=function(e){var t=e.title,r=e.type,a=void 0===r?1:r;return n.default.createElement("div",{className:"border border-"+(1==a?"green":"red")+"-500 w-full mt-6 py-8 mb-4 rounded px-4 flex items-center text-white justify-center"},t)}},52:function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(0));t.default=function(e){var t=e.count,r=e.total;return n.default.createElement("div",{className:"text-white rounded-b flex items-center justify-between text-xs bg-gray-1000"},n.default.createElement("div",{className:"ml-4"},"Mostrando ( ",n.default.createElement("strong",{className:"text-green-500"},t)," ) de ",r," registros"),n.default.createElement("div",{className:"flex bg-gray-850 border-r border-b border-t border-gray-1000 px-3 py-2"},n.default.createElement("div",{className:"mr-3 border-r pr-3 border-gray-1000 flex items-center justify-center"},n.default.createElement("svg",{width:"14",height:"12",className:"mr-1",viewBox:"0 0 76 70",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.default.createElement("path",{d:"M37.9268 69.4747L32.4893 64.5247C13.1768 47.0122 0.426819 35.4622 0.426819 21.2872C0.426819 9.73722 9.50182 0.662216 21.0518 0.662216C27.5768 0.662216 33.8393 3.69972 37.9268 8.49972C42.0143 3.69972 48.2768 0.662216 54.8018 0.662216C66.3518 0.662216 75.4268 9.73722 75.4268 21.2872C75.4268 35.4622 62.6768 47.0122 43.3643 64.5622L37.9268 69.4747Z",fill:"red"})),"Mis Favoritos"),n.default.createElement("div",{className:"flex items-center justify-center"},n.default.createElement("svg",{width:"15",height:"14",className:"mr-1 fill-current text-yellow-500",viewBox:"0 0 76 76",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.default.createElement("path",{d:"M60.4268 48.9522V63.9522C60.4268 66.0147 58.7393 67.7022 56.6768 67.7022H11.6768C9.61432 67.7022 7.92682 66.0147 7.92682 63.9522V18.9522C7.92682 16.8897 9.61432 15.2022 11.6768 15.2022H23.0018C25.0643 15.2022 26.7518 13.5147 26.7518 11.4522C26.7518 9.38971 25.0643 7.70221 23.0018 7.70221H7.92682C3.80182 7.70221 0.426819 11.0772 0.426819 15.2022V67.7022C0.426819 71.8272 3.80182 75.2022 7.92682 75.2022H60.4268C64.5518 75.2022 67.9268 71.8272 67.9268 67.7022V48.9522C67.9268 46.8897 66.2393 45.2022 64.1768 45.2022C62.1143 45.2022 60.4268 46.8897 60.4268 48.9522ZM51.0518 60.2022H17.3768C15.8018 60.2022 14.9393 58.4022 15.9143 57.1647L22.4393 48.8022C22.6122 48.5809 22.8325 48.4013 23.0841 48.2766C23.3357 48.1519 23.6121 48.0853 23.8928 48.0817C24.1736 48.0781 24.4516 48.1376 24.7063 48.2558C24.9609 48.374 25.1858 48.5479 25.3643 48.7647L31.2143 55.8147L40.0268 44.4897C40.7768 43.5147 42.2768 43.5147 42.9893 44.5272L52.5518 57.2397C53.4893 58.4397 52.5893 60.2022 51.0518 60.2022V60.2022ZM65.3018 26.0397C67.1018 23.1522 68.1143 19.7772 67.8893 16.0647C67.4018 8.00221 60.9893 1.17721 53.0018 0.314707C50.6371 0.0396077 48.2409 0.26797 45.9707 0.98479C43.7006 1.70161 41.6077 2.89066 39.8298 4.47383C38.0518 6.057 36.6289 7.99845 35.6547 10.1706C34.6804 12.3428 34.1767 14.6965 34.1768 17.0772C34.1768 26.4147 41.7143 33.9522 51.0143 33.9522C54.3143 33.9522 57.3893 32.9772 59.9768 31.3272L69.0143 40.3647C70.4768 41.8272 72.8768 41.8272 74.3393 40.3647C75.8018 38.9022 75.8018 36.5022 74.3393 35.0397L65.3018 26.0397ZM51.0518 26.4522C48.5654 26.4522 46.1808 25.4645 44.4227 23.7063C42.6645 21.9482 41.6768 19.5636 41.6768 17.0772C41.6768 14.5908 42.6645 12.2062 44.4227 10.4481C46.1808 8.68993 48.5654 7.70221 51.0518 7.70221C53.5382 7.70221 55.9228 8.68993 57.6809 10.4481C59.4391 12.2062 60.4268 14.5908 60.4268 17.0772C60.4268 19.5636 59.4391 21.9482 57.6809 23.7063C55.9228 25.4645 53.5382 26.4522 51.0518 26.4522Z"})),"Búsquedas Guardadas")))}},53:function(e,t,r){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=a(r(0)),u=n(r(3)),o=n(r(4));function i(e){var t=l.useContext(o.default),r=new Intl.NumberFormat("en-IN").format(t.total);return l.default.createElement("button",{onClick:e.onClick,className:"p-1 mb-2 -mt-10 absolute right-0 top-0 text-gray-400 rounded hover:text-white focus:outline-none focus:text-white focus:bg-gray-700",style:{backgroundColor:"#303030"}},l.default.createElement("div",{className:"relative"},l.default.createElement("a",{href:"#",className:"flex items-center justify-between px-2"},l.default.createElement("img",{src:"/images/icon-cart.svg",className:"pr-2 border-gray-800",alt:"Carrito de compras"}),l.default.createElement("span",{className:"text-sm"},"·  $",r)),l.default.createElement("span",{className:"bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center absolute top-0 -mt-3 right-0 -mr-3"},t.cart.reduce((function(e,t){return e+t.quantity}),0))))}t.default=i;var c=document.getElementById("cart");c&&u.default.render(l.default.createElement(i,null),c)},54:function(e,t,r){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(r(0)),o=r(66);r(55);var i=l(r(4)),c=l(r(60)),s=l(r(61)),d=l(r(62));t.default=function(e){var t=u.useContext(i.default),r=t.removeProductFromCart,n=t.completeOrder,l=t.isSaving,f=t.cart,m=t.total,p=f.length>0;return u.default.createElement(o.Dialog,{isOpen:e.show,onDismiss:e.close},u.default.createElement("div",{className:"flex items-center"},u.default.createElement("div",{className:"w-full"},p?f.map((function(e){return u.default.createElement(c.default,a({loading:l,key:e.id,removeItem:r},e))})):u.default.createElement(d.default,null)),p&&u.default.createElement(s.default,a({loading:l,completeOrder:n,total:m},e))),u.default.createElement("button",{className:"bg-gray-800 mt-6 text-white font-bold rounded py-2 px-4",onClick:e.close},"Cerrar"))}},60:function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(0)),l=a(r(6));t.default=function(e){var t=e.id,r=e.name,a=e.quantity,u=e.price,o=e.removeItem,i=e.loading;return n.default.createElement("div",{className:"border border-gray-200 py-1 mb-1 rounded pl-4 pr-2 flex items-center justify-between"},n.default.createElement("div",{className:"text-sm"},n.default.createElement("h2",{className:"font-bold"},r),n.default.createElement("span",{className:"pr-2"},"Precio: ",n.default.createElement("span",{className:"underline"},"$",u)),n.default.createElement("span",{className:"w-6 h-6 text-center"},"Cantidad: ",n.default.createElement("span",{className:"underline"},a))),n.default.createElement("button",{disabled:i,onClick:function(){o(t),l.default.success(n.default.createElement("span",null,"Has eliminado: ",n.default.createElement("strong",null,r)," de tu carrito!"),{position:"bottom-right"})},className:"bg-red-700 hover:bg-red-800 text-sm text-white flex items-center justify-center font-medium rounded px-4 py-2"},n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"mr-2 fill-current text-gray-200",viewBox:"0 0 24 24",width:"18",height:"18"},n.default.createElement("path",{className:"heroicon-ui",d:"M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8H3a1 1 0 1 1 0-2h5zM6 8v12h12V8H6zm8-2V4h-4v2h4zm-4 4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z"}))," ","Eliminar del carrito"))}},61:function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(0));t.default=function(e){var t=e.total,r=e.loading,a=e.completeOrder,l=new Intl.NumberFormat("en-IN").format(t);return n.default.createElement("div",{className:"w-2/5"},n.default.createElement("img",{className:"h-12 mx-auto pb-2",src:"/images/logo.svg",alt:"Logo"}),n.default.createElement("div",{className:"ml-4 border h-48 bg-gray-100 rounded text-center px-4 py-3"},n.default.createElement("h2",{className:"mt-2 text-lg"},"Total a pagar:"),n.default.createElement("p",{className:"text-xl font-bold p-2"},"$",l),n.default.createElement("button",{disabled:r,className:"mt-2 text-white font-bold rounded py-2 px-8",style:{background:"#82b440"},onClick:function(){a()}},r?"Guardando...":"Completar Orden"),n.default.createElement("p",{className:"text-xs text-gray-700 text-center mt-4"},"· Impuestos incluidos")))}},62:function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(0));t.default=function(){return n.default.createElement("div",{className:"border-2 w-full border-dashed py-8 mb-4 rounded px-4 flex items-center justify-center"},"🛒 Su Carrito está vacío")}},63:function(e,t,r){"use strict";var a=this&&this.__awaiter||function(e,t,r,a){return new(r||(r=Promise))((function(n,l){function u(e){try{i(a.next(e))}catch(e){l(e)}}function o(e){try{i(a.throw(e))}catch(e){l(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,o)}i((a=a.apply(e,t||[])).next())}))},n=this&&this.__generator||function(e,t){var r,a,n,l,u={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(l){return function(o){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,a&&(n=2&l[0]?a.return:l[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,l[1])).done)return n;switch(a=0,n&&(l=[2&l[0],n.value]),l[0]){case 0:case 1:n=l;break;case 4:return u.label++,{value:l[1],done:!1};case 5:u.label++,a=l[1],l=[0];continue;case 7:l=u.ops.pop(),u.trys.pop();continue;default:if(!(n=u.trys,(n=n.length>0&&n[n.length-1])||6!==l[0]&&2!==l[0])){u=0;continue}if(3===l[0]&&(!n||l[1]>n[0]&&l[1]<n[3])){u.label=l[1];break}if(6===l[0]&&u.label<n[1]){u.label=n[1],n=l;break}if(n&&u.label<n[2]){u.label=n[2],u.ops.push(l);break}n[2]&&u.ops.pop(),u.trys.pop();continue}l=t.call(e,u)}catch(e){l=[6,e],a=0}finally{r=n=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}},l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=l(r(0)),i=u(r(4)),c=u(r(5)),s=u(r(6)),d=r(64);t.default=function(e){var t=this,r=e.children,l=o.useReducer(d.CartReducer,{cart:[],products:[],total:0,isLoading:!0,isSaving:!1}),u=l[0],f=l[1],m=function(e){return a(t,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return f({type:d.SET_LOADING,loading:!0}),[4,c.default.get(e).then((function(e){p(e.data),f({type:d.SET_LOADING,loading:!1})})).catch((function(e){console.log(e)}))];case 1:return t.sent(),[2]}}))}))};o.useEffect((function(){m("/api/products")}),[]);var p=function(e){f({type:d.ADD_PRODUCTS,products:e})};return o.default.createElement(i.default.Provider,{value:{products:u.products,total:u.total,cart:u.cart,isSaving:u.isSaving,isLoading:u.isLoading,completeOrder:function(){f({type:d.SET_LOADING_SAVING,loading:!0});var e=0,t=u.cart.flatMap((function(t){return e+=Number(t.price)*Number(t.quantity),{id:t.id,quantity:t.quantity}}));s.default.loading("Guardando la orden...").then((function(){c.default.post("/api/order",{products:t,total:e}).then((function(e){f({type:d.SET_EMPTY_CART}),f({type:d.SET_LOADING_SAVING,loading:!1})})).catch((function(e){return console.log(e)})),s.default.success("Su orden ha sido guardada con exito!")}))},addProductToCart:function(e){f({type:d.ADD_PRODUCT,product:e})},getAllProducts:function(){m("/api/products")},removeProductFromCart:function(e){f({type:d.REMOVE_PRODUCT,productId:e})},filterByCategory:function(e){m("/api/categories/"+e+"/products")},sortProductBy:function(e){m("/api/products/order/"+e)}}},r)}},64:function(e,t,r){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var a=Array(e),n=0;for(t=0;t<r;t++)for(var l=arguments[t],u=0,o=l.length;u<o;u++,n++)a[n]=l[u];return a};Object.defineProperty(t,"__esModule",{value:!0}),t.ADD_PRODUCT="ADD_PRODUCT",t.REMOVE_PRODUCT="REMOVE_PRODUCT",t.ADD_PRODUCTS="ADD_PRODUCTS",t.SET_LOADING="SET_LOADING",t.SET_LOADING_SAVING="SET_LOADING_SAVING",t.SET_EMPTY_CART="SET_EMPTY_CART";t.CartReducer=function(e,r){switch(r.type){case t.ADD_PRODUCT:return function(e,t){var r=n(t.cart),l=r.findIndex((function(t){return t.id===e.id})),u=(Number(t.total)+Number(e.price)).toFixed(2);if(l<0)r.push(a(a({},e),{quantity:1}));else{var o=a({},r[l]);o.quantity++,r[l]=o}return a(a({},t),{cart:r,total:u})}(r.product,e);case t.REMOVE_PRODUCT:return function(e,t){var r=n(t.cart),l=r.findIndex((function(t){return t.id===e})),u=a({},r[l]),o=(Number(t.total)-Number(u.price)).toFixed(2);return u.quantity--,u.quantity<=0?r.splice(l,1):r[l]=u,a(a({},t),{cart:r,total:o})}(r.productId,e);case t.ADD_PRODUCTS:return function(e,t){return a(a({},t),{products:e})}(r.products,e);case t.SET_LOADING:return function(e,t){return a(a({},t),{isLoading:e})}(r.loading,e);case t.SET_LOADING_SAVING:return function(e,t){return a(a({},t),{isSaving:e})}(r.loading,e);case t.SET_EMPTY_CART:return function(e){return a(a({},e),{cart:[],total:0})}(e);default:return e}}},65:function(e,t,r){window.axios=r(5),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"},82:function(e,t){}},[[21,1,2]]]);