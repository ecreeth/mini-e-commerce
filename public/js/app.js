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
__webpack_require__(/*! ./components/App */ "./resources/js/components/App.tsx");


/***/ }),

/***/ "./resources/js/components/App.tsx":
/*!*****************************************!*\
  !*** ./resources/js/components/App.tsx ***!
  \*****************************************/
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
var Filters_1 = __importDefault(__webpack_require__(/*! ./Product/Filters */ "./resources/js/components/Product/Filters.tsx"));
var List_1 = __importDefault(__webpack_require__(/*! ./Product/List */ "./resources/js/components/Product/List.tsx"));
var Cart_1 = __importDefault(__webpack_require__(/*! ./Cart */ "./resources/js/components/Cart/index.tsx"));
var Dialog_1 = __importDefault(__webpack_require__(/*! ./Cart/Dialog */ "./resources/js/components/Cart/Dialog.tsx"));
var GlobalStateProvider_1 = __importDefault(__webpack_require__(/*! ./GlobalStateProvider */ "./resources/js/components/GlobalStateProvider.tsx"));
function App() {
    var _a = react_1.useState(false), showDialog = _a[0], setShowDialog = _a[1];
    var open = function () { return setShowDialog(true); };
    var close = function () { return setShowDialog(false); };
    return (react_1.default.createElement(GlobalStateProvider_1.default, null,
        react_1.default.createElement(Cart_1.default, { onClick: open }),
        react_1.default.createElement(Filters_1.default, null),
        react_1.default.createElement(List_1.default, null),
        react_1.default.createElement(Dialog_1.default, { close: close, show: showDialog })));
}
var element = document.getElementById("products");
if (element) {
    react_dom_1.default.render(react_1.default.createElement(App, null), element);
}


/***/ }),

/***/ "./resources/js/components/Cart/CheckOut.tsx":
/*!***************************************************!*\
  !*** ./resources/js/components/Cart/CheckOut.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function CheckOut(props) {
    var total = new Intl.NumberFormat("en-IN").format(props.total);
    return (react_1.default.createElement("div", { className: "ml-4 border w-2/5 h-48 bg-gray-100 rounded text-center px-4 py-3" },
        react_1.default.createElement("h2", { className: "mt-2 text-lg" }, "Total a pagar:"),
        react_1.default.createElement("p", { className: "text-xl font-bold p-2" },
            "$",
            total),
        react_1.default.createElement("button", { className: "mt-2 text-white font-bold rounded py-2 px-8", style: { background: "#82b440" }, onClick: props.close }, "Completar Orden"),
        react_1.default.createElement("p", { className: "text-xs text-gray-700 text-center mt-4" }, "\u00B7 Impuestos incluidos")));
}
exports.default = CheckOut;


/***/ }),

/***/ "./resources/js/components/Cart/Dialog.tsx":
/*!*************************************************!*\
  !*** ./resources/js/components/Cart/Dialog.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var dialog_1 = __webpack_require__(/*! @reach/dialog */ "./node_modules/@reach/dialog/dist/dialog.esm.js");
__webpack_require__(/*! @reach/dialog/styles.css */ "./node_modules/@reach/dialog/styles.css");
var Context_1 = __importDefault(__webpack_require__(/*! ../Product/Context */ "./resources/js/components/Product/Context.tsx"));
var Item_1 = __importDefault(__webpack_require__(/*! ./Item */ "./resources/js/components/Cart/Item.tsx"));
var CheckOut_1 = __importDefault(__webpack_require__(/*! ./CheckOut */ "./resources/js/components/Cart/CheckOut.tsx"));
var Empty_1 = __importDefault(__webpack_require__(/*! ./Empty */ "./resources/js/components/Cart/Empty.tsx"));
function DialogCart(props) {
    var _a = react_1.useContext(Context_1.default), removeProductFromCart = _a.removeProductFromCart, cart = _a.cart, total = _a.total;
    var isCartEmpty = cart.length > 0 ? true : false;
    return (react_1.default.createElement(dialog_1.Dialog, { isOpen: props.show, onDismiss: props.close },
        react_1.default.createElement("div", { className: "flex" },
            react_1.default.createElement("div", { className: "w-full" }, isCartEmpty ? (cart.map(function (item) { return (react_1.default.createElement(Item_1.default, __assign({ key: item["id"], removeItem: removeProductFromCart }, item))); })) : (react_1.default.createElement(Empty_1.default, null))),
            isCartEmpty && react_1.default.createElement(CheckOut_1.default, __assign({ total: total }, props))),
        react_1.default.createElement("button", { className: "bg-gray-800 mt-6 text-white font-bold rounded py-2 px-4", onClick: props.close }, "Cerrar")));
}
exports.default = DialogCart;


/***/ }),

/***/ "./resources/js/components/Cart/Empty.tsx":
/*!************************************************!*\
  !*** ./resources/js/components/Cart/Empty.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function EmptyCart() {
    return (react_1.default.createElement("div", { className: "border-2 w-full border-dashed py-8 mb-4 rounded px-4 flex items-center justify-center" }, "\uD83D\uDED2 Su Carrito est\u00E1 vac\u00EDo"));
}
exports.default = EmptyCart;


/***/ }),

/***/ "./resources/js/components/Cart/Item.tsx":
/*!***********************************************!*\
  !*** ./resources/js/components/Cart/Item.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var cogo_toast_1 = __importDefault(__webpack_require__(/*! cogo-toast */ "./node_modules/cogo-toast/dist/index.es.js"));
function CartItem(_a) {
    var id = _a.id, name = _a.name, quantity = _a.quantity, price = _a.price, removeItem = _a.removeItem;
    return (react_1.default.createElement("div", { className: "border border-gray-200 py-2 mb-2 rounded px-4 flex items-center justify-between" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("h2", { className: "font-bold" }, name),
            react_1.default.createElement("span", { className: "text-sm pr-2" },
                "Precio: ",
                react_1.default.createElement("strong", null,
                    "$",
                    price)),
            react_1.default.createElement("span", { className: "w-6 h-6 text-sm text-center" },
                "Cantidad: ",
                react_1.default.createElement("strong", null, quantity))),
        react_1.default.createElement("button", { onClick: function () {
                removeItem(id);
                cogo_toast_1.default.success(react_1.default.createElement("span", null,
                    "Has eliminado: ",
                    react_1.default.createElement("strong", null, name),
                    " de tu carrito!"), { position: "bottom-right" });
            }, className: "bg-red-700 text-sm text-white font-medium rounded px-4 py-2" }, "Eliminar del carrito")));
}
exports.default = CartItem;


/***/ }),

/***/ "./resources/js/components/Cart/index.tsx":
/*!************************************************!*\
  !*** ./resources/js/components/Cart/index.tsx ***!
  \************************************************/
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
var Context_1 = __importDefault(__webpack_require__(/*! ../Product/Context */ "./resources/js/components/Product/Context.tsx"));
function Cart(props) {
    var state = react_1.useContext(Context_1.default);
    var total = new Intl.NumberFormat("en-IN").format(state.total);
    return (react_1.default.createElement("button", { onClick: props.onClick, className: "p-1 mb-2 -mt-12 absolute right-0 top-0 text-gray-400 rounded hover:text-white focus:outline-none focus:text-white focus:bg-gray-700", style: { backgroundColor: "#303030" } },
        react_1.default.createElement("div", { className: "relative" },
            react_1.default.createElement("a", { href: "#", className: "flex items-center justify-between px-2" },
                react_1.default.createElement("img", { src: "/images/icon-cart.svg", className: "pr-2 border-gray-800", alt: "Carrito de compras" }),
                react_1.default.createElement("span", { className: "text-sm" },
                    "\u00B7 \u00A0$",
                    total)),
            react_1.default.createElement("span", { className: "bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center absolute top-0 -mt-3 right-0 -mr-3" }, state.cart.reduce(function (count, item) {
                return count + item["quantity"];
            }, 0)))));
}
exports.default = Cart;
var element = document.getElementById("cart");
if (element) {
    react_dom_1.default.render(react_1.default.createElement(Cart, null), element);
}


/***/ }),

/***/ "./resources/js/components/GlobalStateProvider.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/GlobalStateProvider.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var Context_1 = __importDefault(__webpack_require__(/*! ./Product/Context */ "./resources/js/components/Product/Context.tsx"));
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));
var reducer_1 = __webpack_require__(/*! ./reducer */ "./resources/js/components/reducer.ts");
function GlobalStateProvider(_a) {
    var _this = this;
    var children = _a.children;
    var _b = react_1.useReducer(reducer_1.CartReducer, {
        cart: [],
        products: [],
        total: 0,
        isLoading: true
    }), state = _b[0], dispatch = _b[1];
    var fetchProduct = function (url) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dispatch({ type: reducer_1.SET_LOADING, loading: true });
                    return [4 /*yield*/, axios_1.default
                            .get(url)
                            .then(function (res) {
                            addProducts(res.data.data);
                            dispatch({ type: reducer_1.SET_LOADING, loading: false });
                        })
                            .catch(function (error) {
                            console.log(error);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        fetchProduct("/api/products");
    }, []);
    var addProducts = function (products) {
        dispatch({ type: reducer_1.ADD_PRODUCTS, products: products });
    };
    var getAllProducts = function () {
        fetchProduct("/api/products");
    };
    var addProductToCart = function (product) {
        dispatch({ type: reducer_1.ADD_PRODUCT, product: product });
    };
    var removeProductFromCart = function (productId) {
        dispatch({ type: reducer_1.REMOVE_PRODUCT, productId: productId });
    };
    var filterByCategory = function (categoryId) {
        fetchProduct("/api/categories/" + categoryId + "/products");
    };
    return (react_1.default.createElement(Context_1.default.Provider, { value: {
            products: state.products,
            total: state.total,
            cart: state.cart,
            isLoading: state.isLoading,
            addProductToCart: addProductToCart,
            getAllProducts: getAllProducts,
            removeProductFromCart: removeProductFromCart,
            filterByCategory: filterByCategory
        } }, children));
}
exports.default = GlobalStateProvider;


/***/ }),

/***/ "./resources/js/components/Product/Card.tsx":
/*!**************************************************!*\
  !*** ./resources/js/components/Product/Card.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var cogo_toast_1 = __importDefault(__webpack_require__(/*! cogo-toast */ "./node_modules/cogo-toast/dist/index.es.js"));
function Card(_a) {
    var id = _a.id, title = _a.title, price = _a.price, category = _a.category, cover = _a.cover, addProduct = _a.addProduct;
    return (react_1.default.createElement("div", { className: "product-card-container relative" },
        react_1.default.createElement("img", { src: "/images/computer.png", className: "object-cover w-full shadow-sm h-48 rounded-lg mb-px" }),
        react_1.default.createElement("div", { className: "flex justify-between mt-2 items-center text-white" },
            react_1.default.createElement("a", { href: "#", className: "hover:underline font-bold" }, title),
            react_1.default.createElement("span", { className: "rounded text-sm px-2 py-1 text-blue-500 font-medium", title: "Precio del art\u00EDculo", style: { background: "#2a2a2a" } },
                "$",
                price)),
        react_1.default.createElement("p", { className: "text-xs text-gray-200" },
            "Por\u00A0",
            react_1.default.createElement("span", { className: "font-bold hover:underline cursor-pointer" }, "Luis Alvarado\u00A0"),
            "en\u00A0",
            react_1.default.createElement("a", { href: "#", className: "font-bold hover:underline", style: { color: "rgb(86, 198, 109)" } }, category)),
        react_1.default.createElement("div", { className: "absolute top-0 rounded-lg right-0 w-full h-48 bg-gray-300 hidden product-card-hover" },
            react_1.default.createElement("div", { className: "flex flex-col items-center justify-center h-full text-sm" },
                react_1.default.createElement("img", { className: "h-6", src: "/images/icon-cart.svg", alt: "" }),
                react_1.default.createElement("button", { onClick: function () {
                        addProduct();
                        cogo_toast_1.default.success(react_1.default.createElement("span", null,
                            "Has agregado: ",
                            react_1.default.createElement("strong", null, title),
                            " a tu carrito!"), { position: "bottom-right" });
                    }, className: "shadow-lg transition-all text-white hover:bg-gray-800 bg-gray-1000 active:bg-blue-700 rounded px-4 py-1 mt-4" }, "+ Agregar al carrito")))));
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
var ProductContext = React.createContext({
    products: [],
    cart: [],
    total: 0,
    isLoading: false,
    addProductToCart: function (product) { },
    removeProductFromCart: function (productId) { },
    filterByCategory: function (productId) { },
    getAllProducts: function () { }
});
exports.default = ProductContext;


/***/ }),

/***/ "./resources/js/components/Product/Empty.tsx":
/*!***************************************************!*\
  !*** ./resources/js/components/Product/Empty.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function EmptyProducts(_a) {
    var title = _a.title, _b = _a.type, type = _b === void 0 ? 1 : _b;
    return (react_1.default.createElement("div", { className: "border border-" + (type == 1 ? 'green' : 'red') + "-500 w-full mt-6 py-8 mb-4 rounded px-4 flex items-center text-white justify-center" }, title));
}
exports.default = EmptyProducts;


/***/ }),

/***/ "./resources/js/components/Product/FilterItem.tsx":
/*!********************************************************!*\
  !*** ./resources/js/components/Product/FilterItem.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function FilterItem(_a) {
    var id = _a.id, title = _a.title, category = _a.category, filter = _a.filter, selected = _a.selected, setSelected = _a.setSelected;
    return (react_1.default.createElement("li", { className: "mr-4" },
        react_1.default.createElement("button", { onClick: function () {
                filter(category);
                setSelected(id);
            }, className: "font-thin hover:text-white text-gray-150" },
            react_1.default.createElement("span", { className: "text-gray-100" }, "#"),
            "\u00A0",
            react_1.default.createElement("span", { className: "" + (selected == id ? "font-bold text-white" : "") }, title))));
}
exports.default = FilterItem;


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var Context_1 = __importDefault(__webpack_require__(/*! ./Context */ "./resources/js/components/Product/Context.tsx"));
var FilterItem_1 = __importDefault(__webpack_require__(/*! ./FilterItem */ "./resources/js/components/Product/FilterItem.tsx"));
function Filters() {
    var _a = react_1.useContext(Context_1.default), filterByCategory = _a.filterByCategory, getAllProducts = _a.getAllProducts;
    var _b = react_1.useState(0), selectedFilterItem = _b[0], setSelectedFilter = _b[1];
    return (react_1.default.createElement("div", { className: "bg-white container rounded-lg mx-auto", style: { background: "#303030" } },
        react_1.default.createElement("div", { className: "max-w-7xl mx-auto py-4 sm:px-6 lg:px-8" },
            react_1.default.createElement("div", { className: "flex justify-between items-center text-sm" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("ul", { className: "flex" },
                        react_1.default.createElement("li", { className: "mr-4" },
                            react_1.default.createElement("button", { onClick: function () {
                                    getAllProducts();
                                    setSelectedFilter(0);
                                }, className: "font-thin " + (selectedFilterItem == 0
                                    ? "font-bold text-white"
                                    : "text-gray-150") + " flex items-center" },
                                react_1.default.createElement("svg", { className: "mr-2", width: "16", height: "16", viewBox: "0 0 69 68", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    react_1.default.createElement("path", { d: "M23.396 0.0469055H8.396C6.40687 0.0469055 4.49922 0.837081 3.09269 2.2436C1.68617 3.65013 0.895996 5.55778 0.895996 7.54691V22.5469C0.895996 24.536 1.68617 26.4437 3.09269 27.8502C4.49922 29.2567 6.40687 30.0469 8.396 30.0469H23.396C25.3851 30.0469 27.2928 29.2567 28.6993 27.8502C30.1058 26.4437 30.896 24.536 30.896 22.5469V7.54691C30.896 5.55778 30.1058 3.65013 28.6993 2.2436C27.2928 0.837081 25.3851 0.0469055 23.396 0.0469055ZM60.896 0.0469055H45.896C43.9069 0.0469055 41.9992 0.837081 40.5927 2.2436C39.1862 3.65013 38.396 5.55778 38.396 7.54691V22.5469C38.396 24.536 39.1862 26.4437 40.5927 27.8502C41.9992 29.2567 43.9069 30.0469 45.896 30.0469H60.896C62.8851 30.0469 64.7928 29.2567 66.1993 27.8502C67.6058 26.4437 68.396 24.536 68.396 22.5469V7.54691C68.396 5.55778 67.6058 3.65013 66.1993 2.2436C64.7928 0.837081 62.8851 0.0469055 60.896 0.0469055ZM23.396 37.5469H8.396C6.40687 37.5469 4.49922 38.3371 3.09269 39.7436C1.68617 41.1501 0.895996 43.0578 0.895996 45.0469V60.0469C0.895996 62.036 1.68617 63.9437 3.09269 65.3502C4.49922 66.7567 6.40687 67.5469 8.396 67.5469H23.396C25.3851 67.5469 27.2928 66.7567 28.6993 65.3502C30.1058 63.9437 30.896 62.036 30.896 60.0469V45.0469C30.896 43.0578 30.1058 41.1501 28.6993 39.7436C27.2928 38.3371 25.3851 37.5469 23.396 37.5469ZM60.896 37.5469H45.896C43.9069 37.5469 41.9992 38.3371 40.5927 39.7436C39.1862 41.1501 38.396 43.0578 38.396 45.0469V60.0469C38.396 62.036 39.1862 63.9437 40.5927 65.3502C41.9992 66.7567 43.9069 67.5469 45.896 67.5469H60.896C62.8851 67.5469 64.7928 66.7567 66.1993 65.3502C67.6058 63.9437 68.396 62.036 68.396 60.0469V45.0469C68.396 43.0578 67.6058 41.1501 66.1993 39.7436C64.7928 38.3371 62.8851 37.5469 60.896 37.5469Z", fill: "#56c667" })),
                                "Mostrar Todo")),
                        react_1.default.createElement(FilterItem_1.default, { id: 1, selected: selectedFilterItem, filter: filterByCategory, setSelected: setSelectedFilter, category: 10, title: "Computadoras" }),
                        react_1.default.createElement(FilterItem_1.default, { id: 2, selected: selectedFilterItem, filter: filterByCategory, setSelected: setSelectedFilter, category: 11, title: "Telefonos" }),
                        react_1.default.createElement(FilterItem_1.default, { id: 3, selected: selectedFilterItem, filter: filterByCategory, setSelected: setSelectedFilter, category: 12, title: "Celulares" }),
                        react_1.default.createElement(FilterItem_1.default, { id: 4, selected: selectedFilterItem, filter: filterByCategory, setSelected: setSelectedFilter, category: 13, title: "Impresoras" }),
                        react_1.default.createElement(FilterItem_1.default, { id: 5, selected: selectedFilterItem, filter: filterByCategory, setSelected: setSelectedFilter, category: 14, title: "Tarjetas" }),
                        react_1.default.createElement(FilterItem_1.default, { id: 6, selected: selectedFilterItem, setSelected: setSelectedFilter, filter: filterByCategory, category: 15, title: "Almacenamiento" }),
                        react_1.default.createElement(FilterItem_1.default, { id: 7, setSelected: setSelectedFilter, selected: selectedFilterItem, filter: filterByCategory, category: 16, title: "Im\u00E1genes & Sonido" }))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("select", { className: "form-select text-sm text-white bg-gray-1000 border-transparent block w-full" },
                        react_1.default.createElement("option", { value: "Mas Recientes" }, "Mas Recientes"),
                        react_1.default.createElement("option", { value: "Ascendente" }, "Ascendente"),
                        react_1.default.createElement("option", { value: "Descendente" }, "Descendente")))))));
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
var Context_1 = __importDefault(__webpack_require__(/*! ./Context */ "./resources/js/components/Product/Context.tsx"));
var Card_1 = __importDefault(__webpack_require__(/*! ./Card */ "./resources/js/components/Product/Card.tsx"));
var Empty_1 = __importDefault(__webpack_require__(/*! ./Empty */ "./resources/js/components/Product/Empty.tsx"));
function ProductList() {
    var state = react_1.useContext(Context_1.default);
    if (state.isLoading) {
        return react_1.default.createElement(Empty_1.default, { title: "\uD83D\uDD25 Cargando Productos..." });
    }
    else if (state.products.length == 0) {
        return react_1.default.createElement(Empty_1.default, { type: 0, title: "\uD83D\uDE10 No hay productos disponibles" });
    }
    return (react_1.default.createElement("div", { className: "mt-10 grid lg:grid-cols-4 sm:grid-cols-2 row-gap-8 col-gap-8" }, state.products.map(function (el) {
        var id = el.id, name = el.name, price = el.price, category = el.category, cover = el.cover;
        return (react_1.default.createElement(Card_1.default, { key: id, id: id, title: name, cover: cover, price: price, addProduct: function () {
                return state.addProductToCart({ id: id, name: name, price: price, category: category, cover: cover });
            }, category: category["name"] }));
    })));
}
exports.default = ProductList;


/***/ }),

/***/ "./resources/js/components/reducer.ts":
/*!********************************************!*\
  !*** ./resources/js/components/reducer.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_PRODUCT = "ADD_PRODUCT";
exports.REMOVE_PRODUCT = "REMOVE_PRODUCT";
exports.ADD_PRODUCTS = "ADD_PRODUCTS";
exports.SET_LOADING = "SET_LOADING";
var addProductToCart = function (product, state) {
    var updatedCart = __spreadArrays(state.cart);
    var updatedItemIndex = updatedCart.findIndex(function (item) { return item.id === product.id; });
    var total = (Number(state.total) + Number(product.price)).toFixed(2);
    if (updatedItemIndex < 0) {
        updatedCart.push(__assign(__assign({}, product), { quantity: 1 }));
    }
    else {
        var updatedItem = __assign({}, updatedCart[updatedItemIndex]);
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
    }
    return __assign(__assign({}, state), { cart: updatedCart, total: total });
};
var removeProductFromCart = function (productId, state) {
    var updatedCart = __spreadArrays(state.cart);
    var updatedItemIndex = updatedCart.findIndex(function (item) { return item.id === productId; });
    var updatedItem = __assign({}, updatedCart[updatedItemIndex]);
    var total = (Number(state.total) - Number(updatedItem.price)).toFixed(2);
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
    }
    else {
        updatedCart[updatedItemIndex] = updatedItem;
    }
    return __assign(__assign({}, state), { cart: updatedCart, total: total });
};
var addProducts = function (products, state) {
    return __assign(__assign({}, state), { products: products });
};
var setLoading = function (loading, state) {
    return __assign(__assign({}, state), { isLoading: loading });
};
var sortByMoreRecents = function (state) {
    var sortedProducts = state.products;
    return __assign(__assign({}, state), { products: sortedProducts });
};
var sortByOrderAsc = function (state) {
    var sortedProducts = state.products.sort();
    return __assign(__assign({}, state), { products: sortedProducts });
};
var sortByOrderDesc = function (state) {
    var sortedProducts = state.products.sort();
    return __assign(__assign({}, state), { products: sortedProducts });
};
exports.CartReducer = function (state, action) {
    switch (action.type) {
        case exports.ADD_PRODUCT:
            return addProductToCart(action.product, state);
        case exports.REMOVE_PRODUCT:
            return removeProductFromCart(action.productId, state);
        case exports.ADD_PRODUCTS:
            return addProducts(action.products, state);
        case exports.SET_LOADING:
            return setLoading(action.loading, state);
        default:
            return state;
    }
};


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