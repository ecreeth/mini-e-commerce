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
            React.createElement("span", { className: "rounded text-sm px-2 py-1 text-blue-700 font-medium", title: "Precio del art\u00EDculo", style: { background: '#2a2a2a' } },
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
    return (React.createElement("div", { className: "bg-white container rounded-lg mx-auto", style: { background: '#303030' } },
        React.createElement("div", { className: "max-w-7xl mx-auto py-4 sm:px-6 lg:px-8" },
            React.createElement("div", { className: "flex justify-between items-center text-sm" },
                React.createElement("div", null,
                    React.createElement("ul", { className: "flex" },
                        React.createElement("li", { className: "mr-4" },
                            React.createElement("a", { className: "font-thin font-bold", href: "#", style: { color: 'white' } }, "Mostrar Todo")),
                        React.createElement("li", { className: "mr-4" },
                            React.createElement("a", { className: "font-thin", href: "#", style: { color: '#a9b7b9' } }, "Computadoras")),
                        React.createElement("li", { className: "mr-4" },
                            React.createElement("a", { className: "font-thin", href: "#", style: { color: '#a9b7b9' } }, "Telefonos")),
                        React.createElement("li", { className: "mr-4" },
                            React.createElement("a", { className: "font-thin", href: "#", style: { color: '#a9b7b9' } }, "Celulares")),
                        React.createElement("li", { className: "mr-4" },
                            React.createElement("a", { className: "font-thin", href: "#", style: { color: '#a9b7b9' } }, "Impresoras")),
                        React.createElement("li", { className: "mr-4" },
                            React.createElement("a", { className: "font-thin", href: "#", style: { color: '#a9b7b9' } }, "Tarjetas")),
                        React.createElement("li", { className: "mr-4" },
                            React.createElement("a", { className: "font-thin", href: "#", style: { color: '#a9b7b9' } }, "Almacenamiento")),
                        React.createElement("li", { className: "mr-4" },
                            React.createElement("a", { className: "font-thin", href: "#", style: { color: '#a9b7b9' } }, "Im\u00E1genes & Sonido")))),
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
    return (React.createElement("div", { className: "p-12 border text-center flex items-center" },
        React.createElement("h1", null, "Cargando lista de productos...")));
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