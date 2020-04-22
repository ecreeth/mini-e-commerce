(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/js/app.ts":
/*!*****************************!*\
  !*** ./resources/js/app.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
__webpack_require__(/*! ./components/Product/List */ "./resources/js/components/Product/List.tsx");


/***/ }),

/***/ "./resources/js/components/Product/Card.tsx":
/*!**************************************************!*\
  !*** ./resources/js/components/Product/Card.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function Card(_a) {
    var title = _a.title, price = _a.price, created_by = _a.created_by, category = _a.category, cover = _a.cover;
    return (React.createElement("div", { className: "product-card-container relative" },
        React.createElement("img", { src: "/images/computer.png", className: "object-cover w-full h-48 rounded-lg mb-px" }),
        React.createElement("div", { className: "flex justify-between mt-2 items-center text-white" },
            React.createElement("a", { href: "#", className: "hover:underline font-bold" }, title),
            React.createElement("span", { className: "rounded text-sm px-2 py-1 text-blue-500 font-medium", title: "Precio del art\u00EDculo", style: { background: '#2a2a2a' } },
                "$",
                price)),
        React.createElement("p", { className: "text-xs text-gray-200" },
            "Por\u00A0",
            React.createElement("span", { className: "font-bold hover:underline cursor-pointer" },
                created_by,
                "\u00A0"),
            "en\u00A0",
            React.createElement("a", { href: "#", className: "font-bold hover:underline", style: { color: 'rgb(86, 198, 109)' } }, category)),
        React.createElement("div", { className: "absolute top-0 rounded-lg right-0 w-full h-48 bg-gray-300 hidden product-card-hover" },
            React.createElement("div", { className: "flex flex-col items-center justify-center h-full text-sm" },
                React.createElement("img", { className: "h-6", src: "/images/icon-cart.svg", alt: "" }),
                React.createElement("a", { href: "#", className: "shadow-lg text-white rounded px-4 py-1 mt-4", style: { background: "#353535" } }, "+ Agregar al carrito")))));
}
exports.default = Card;


/***/ }),

/***/ "./resources/js/components/Product/Context.tsx":
/*!*****************************************************!*\
  !*** ./resources/js/components/Product/Context.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var ProductContext = React.createContext({});
exports.default = ProductContext;


/***/ }),

/***/ "./resources/js/components/Product/Filters.tsx":
/*!*****************************************************!*\
  !*** ./resources/js/components/Product/Filters.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function Filters() {
    return (React.createElement("div", { className: "bg-white container rounded-lg mx-auto", style: { background: "#303030" } },
        React.createElement("div", { className: "max-w-7xl mx-auto py-4 sm:px-6 lg:px-8" },
            React.createElement("div", { className: "flex justify-between items-center text-sm" },
                React.createElement("div", null,
                    React.createElement("ul", { className: "flex" },
                        React.createElement("li", { className: "mr-4" },
                            React.createElement("a", { className: "font-thin font-bold flex items-center", href: "#", style: { color: "white" } },
                                React.createElement("svg", { className: "mr-2", width: "16", height: "16", viewBox: "0 0 69 68", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    React.createElement("path", { d: "M23.396 0.0469055H8.396C6.40687 0.0469055 4.49922 0.837081 3.09269 2.2436C1.68617 3.65013 0.895996 5.55778 0.895996 7.54691V22.5469C0.895996 24.536 1.68617 26.4437 3.09269 27.8502C4.49922 29.2567 6.40687 30.0469 8.396 30.0469H23.396C25.3851 30.0469 27.2928 29.2567 28.6993 27.8502C30.1058 26.4437 30.896 24.536 30.896 22.5469V7.54691C30.896 5.55778 30.1058 3.65013 28.6993 2.2436C27.2928 0.837081 25.3851 0.0469055 23.396 0.0469055ZM60.896 0.0469055H45.896C43.9069 0.0469055 41.9992 0.837081 40.5927 2.2436C39.1862 3.65013 38.396 5.55778 38.396 7.54691V22.5469C38.396 24.536 39.1862 26.4437 40.5927 27.8502C41.9992 29.2567 43.9069 30.0469 45.896 30.0469H60.896C62.8851 30.0469 64.7928 29.2567 66.1993 27.8502C67.6058 26.4437 68.396 24.536 68.396 22.5469V7.54691C68.396 5.55778 67.6058 3.65013 66.1993 2.2436C64.7928 0.837081 62.8851 0.0469055 60.896 0.0469055ZM23.396 37.5469H8.396C6.40687 37.5469 4.49922 38.3371 3.09269 39.7436C1.68617 41.1501 0.895996 43.0578 0.895996 45.0469V60.0469C0.895996 62.036 1.68617 63.9437 3.09269 65.3502C4.49922 66.7567 6.40687 67.5469 8.396 67.5469H23.396C25.3851 67.5469 27.2928 66.7567 28.6993 65.3502C30.1058 63.9437 30.896 62.036 30.896 60.0469V45.0469C30.896 43.0578 30.1058 41.1501 28.6993 39.7436C27.2928 38.3371 25.3851 37.5469 23.396 37.5469ZM60.896 37.5469H45.896C43.9069 37.5469 41.9992 38.3371 40.5927 39.7436C39.1862 41.1501 38.396 43.0578 38.396 45.0469V60.0469C38.396 62.036 39.1862 63.9437 40.5927 65.3502C41.9992 66.7567 43.9069 67.5469 45.896 67.5469H60.896C62.8851 67.5469 64.7928 66.7567 66.1993 65.3502C67.6058 63.9437 68.396 62.036 68.396 60.0469V45.0469C68.396 43.0578 67.6058 41.1501 66.1993 39.7436C64.7928 38.3371 62.8851 37.5469 60.896 37.5469Z", fill: "#56c667" })),
                                "Mostrar Todo")),
                        React.createElement("li", { className: "mr-4" },
                            React.createElement("a", { className: "font-thin hover:text-white text-gray-150", href: "#" },
                                React.createElement("span", { className: "text-gray-1000 font-bold" }, "#"),
                                " ",
                                "Computadoras")),
                        React.createElement("li", { className: "mr-4" },
                            React.createElement("a", { className: "font-thin hover:text-white text-gray-150", href: "#" },
                                React.createElement("span", { className: "text-gray-1000 font-bold" }, "#"),
                                " Telefonos")),
                        React.createElement("li", { className: "mr-4" },
                            React.createElement("a", { className: "font-thin hover:text-white text-gray-150", href: "#" },
                                React.createElement("span", { className: "text-gray-1000 font-bold" }, "#"),
                                " Celulares")),
                        React.createElement("li", { className: "mr-4" },
                            React.createElement("a", { className: "font-thin hover:text-white text-gray-150", href: "#" },
                                React.createElement("span", { className: "text-gray-1000 font-bold" }, "#"),
                                " Impresoras")),
                        React.createElement("li", { className: "mr-4" },
                            React.createElement("a", { className: "font-thin hover:text-white text-gray-150", href: "#" },
                                React.createElement("span", { className: "text-gray-1000 font-bold" }, "#"),
                                " Tarjetas")),
                        React.createElement("li", { className: "mr-4" },
                            React.createElement("a", { className: "font-thin hover:text-white text-gray-150", href: "#" },
                                React.createElement("span", { className: "text-gray-1000 font-bold" }, "#"),
                                " ",
                                "Almacenamiento")),
                        React.createElement("li", { className: "mr-4" },
                            React.createElement("a", { className: "font-thin hover:text-white text-gray-150", href: "#" },
                                React.createElement("span", { className: "text-gray-1000 font-bold" }, "#"),
                                " Im\u00E1genes & Sonido")))),
                React.createElement("div", null,
                    React.createElement("select", { className: "form-select text-sm text-white bg-gray-1000 border-transparent block w-full" },
                        React.createElement("option", { value: "Mas Recientes" }, "Mas Recientes"),
                        React.createElement("option", { value: "Ascendente" }, "Ascendente"),
                        React.createElement("option", { value: "Descendente" }, "Descendente")))))));
}
exports.default = Filters;


/***/ }),

/***/ "./resources/js/components/Product/List.tsx":
/*!**************************************************!*\
  !*** ./resources/js/components/Product/List.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));
var Spinner_1 = __importDefault(__webpack_require__(/*! ../Spinner */ "./resources/js/components/Spinner.tsx"));
var Context_1 = __importDefault(__webpack_require__(/*! ./Context */ "./resources/js/components/Product/Context.tsx"));
var Filters_1 = __importDefault(__webpack_require__(/*! ./Filters */ "./resources/js/components/Product/Filters.tsx"));
var ProductCard = react_1.lazy(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./Card */ "./resources/js/components/Product/Card.tsx")); }); });
function ProductList() {
    var _a = react_1.useState([]), products = _a[0], setProducts = _a[1];
    react_1.useEffect(function () {
        axios_1.default
            .get("/api/products")
            .then(function (res) {
            setProducts(res.data.data);
        })
            .catch(function (error) {
            console.log(error);
        });
    }, []);
    return (react_1.default.createElement(Context_1.default.Provider, { value: products },
        react_1.default.createElement(Filters_1.default, null),
        react_1.default.createElement("div", { className: "mt-10 grid lg:grid-cols-4 sm:grid-cols-2 row-gap-8 col-gap-8" },
            react_1.default.createElement(react_1.default.Suspense, { fallback: react_1.default.createElement(Spinner_1.default, null) }, products.map(function (_a) {
                var id = _a.id, name = _a.name, price = _a.price, category = _a.category, cover = _a.cover;
                return (react_1.default.createElement(ProductCard, { key: id, title: name, cover: cover, price: price, created_by: "Luis Alvarado", category: category["name"] }));
            })))));
}
exports.default = ProductList;
var element = document.getElementById("products");
if (element) {
    react_dom_1.default.render(react_1.default.createElement(ProductList, null), element);
}


/***/ }),

/***/ "./resources/js/components/Spinner.tsx":
/*!*********************************************!*\
  !*** ./resources/js/components/Spinner.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function Spinner() {
    return (React.createElement("div", { className: "p-12 border shadow-lg rounded-lg border-gray-1000 text-center mt-4 flex items-center" },
        React.createElement("h1", { className: "text-white" }, "Cargando lista de productos...")));
}
exports.default = Spinner;


/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./resources/js/app.ts ./resources/css/app.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ecreeth/code/backend/laravel/mini-e-commerce/resources/js/app.ts */"./resources/js/app.ts");
module.exports = __webpack_require__(/*! /Users/ecreeth/code/backend/laravel/mini-e-commerce/resources/css/app.css */"./resources/css/app.css");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);