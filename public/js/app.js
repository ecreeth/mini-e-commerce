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
__webpack_require__(/*! ./bootsrap */ "./resources/js/bootsrap.js");


/***/ }),

/***/ "./resources/js/bootsrap.js":
/*!**********************************!*\
  !*** ./resources/js/bootsrap.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

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
function CheckOut(_a) {
    var total = _a.total, loading = _a.loading, completeOrder = _a.completeOrder;
    var totalValue = new Intl.NumberFormat("en-IN").format(total);
    return (react_1.default.createElement("div", { className: "w-2/5" },
        react_1.default.createElement("img", { className: "h-12 mx-auto pb-2", src: "/images/logo.svg", alt: "Logo" }),
        react_1.default.createElement("div", { className: "ml-4 border h-48 bg-gray-100 rounded text-center px-4 py-3" },
            react_1.default.createElement("h2", { className: "mt-2 text-lg" }, "Total a pagar:"),
            react_1.default.createElement("p", { className: "text-xl font-bold p-2" },
                "$",
                totalValue),
            react_1.default.createElement("button", { disabled: loading, className: "mt-2 text-white font-bold rounded py-2 px-8", style: { background: "#82b440" }, onClick: function () {
                    completeOrder();
                } }, loading ? "Guardando..." : "Completar Orden"),
            react_1.default.createElement("p", { className: "text-xs text-gray-700 text-center mt-4" }, "\u00B7 Impuestos incluidos"))));
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
    var _a = react_1.useContext(Context_1.default), removeProductFromCart = _a.removeProductFromCart, completeOrder = _a.completeOrder, isSaving = _a.isSaving, cart = _a.cart, total = _a.total;
    var isCartEmpty = cart.length > 0 ? true : false;
    return (react_1.default.createElement(dialog_1.Dialog, { isOpen: props.show, onDismiss: props.close },
        react_1.default.createElement("div", { className: "flex items-center" },
            react_1.default.createElement("div", { className: "w-full" }, isCartEmpty ? (cart.map(function (item) { return (react_1.default.createElement(Item_1.default, __assign({ loading: isSaving, key: item["id"], removeItem: removeProductFromCart }, item))); })) : (react_1.default.createElement(Empty_1.default, null))),
            isCartEmpty && (react_1.default.createElement(CheckOut_1.default, __assign({ loading: isSaving, completeOrder: completeOrder, total: total }, props)))),
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
    var id = _a.id, name = _a.name, quantity = _a.quantity, price = _a.price, removeItem = _a.removeItem, loading = _a.loading;
    return (react_1.default.createElement("div", { className: "border border-gray-200 py-1 mb-1 rounded pl-4 pr-2 flex items-center justify-between" },
        react_1.default.createElement("div", { className: "text-sm" },
            react_1.default.createElement("h2", { className: "font-bold" }, name),
            react_1.default.createElement("span", { className: "pr-2" },
                "Precio: ",
                react_1.default.createElement("span", { className: "underline" },
                    "$",
                    price)),
            react_1.default.createElement("span", { className: "w-6 h-6 text-center" },
                "Cantidad: ",
                react_1.default.createElement("span", { className: "underline" }, quantity))),
        react_1.default.createElement("button", { disabled: loading, onClick: function () {
                removeItem(id);
                cogo_toast_1.default.success(react_1.default.createElement("span", null,
                    "Has eliminado: ",
                    react_1.default.createElement("strong", null, name),
                    " de tu carrito!"), { position: "bottom-right" });
            }, className: "bg-red-700 hover:bg-red-800 text-sm text-white flex items-center justify-center font-medium rounded px-4 py-2" },
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "mr-2 fill-current text-gray-200", viewBox: "0 0 24 24", width: "18", height: "18" },
                react_1.default.createElement("path", { className: "heroicon-ui", d: "M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8H3a1 1 0 1 1 0-2h5zM6 8v12h12V8H6zm8-2V4h-4v2h4zm-4 4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z" })),
            " ",
            "Eliminar del carrito")));
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
    return (react_1.default.createElement("button", { onClick: props.onClick, className: "p-1 mb-2 -mt-10 absolute right-0 top-0 text-gray-400 rounded hover:text-white focus:outline-none focus:text-white focus:bg-gray-700", style: { backgroundColor: "#303030" } },
        react_1.default.createElement("div", { className: "relative" },
            react_1.default.createElement("a", { href: "#", className: "flex items-center justify-between px-2" },
                react_1.default.createElement("img", { src: "/images/icon-cart.svg", className: "pr-2 border-gray-800", alt: "Carrito de compras" }),
                react_1.default.createElement("span", { className: "text-sm" },
                    "\u00B7 \u00A0$",
                    total)),
            react_1.default.createElement("span", { className: "bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center absolute top-0 -mt-3 right-0 -mr-3" }, state.cart.reduce(function (count, _a) {
                var quantity = _a.quantity;
                return count + quantity;
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
var cogo_toast_1 = __importDefault(__webpack_require__(/*! cogo-toast */ "./node_modules/cogo-toast/dist/index.es.js"));
var reducer_1 = __webpack_require__(/*! ./reducer */ "./resources/js/components/reducer.ts");
function GlobalStateProvider(_a) {
    var _this = this;
    var children = _a.children;
    var _b = react_1.useReducer(reducer_1.CartReducer, {
        cart: [],
        products: [],
        total: 0,
        isLoading: true,
        isSaving: false
    }), state = _b[0], dispatch = _b[1];
    var fetchProduct = function (url) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dispatch({ type: reducer_1.SET_LOADING, loading: true });
                    return [4 /*yield*/, axios_1.default
                            .get(url)
                            .then(function (res) {
                            addProducts(res.data);
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
    var sortProductBy = function (type) {
        fetchProduct("/api/products/order/" + type);
    };
    var completeOrder = function () {
        dispatch({ type: reducer_1.SET_LOADING_SAVING, loading: true });
        var total = 0;
        var products = state.cart.flatMap(function (el) {
            total += Number(el.price) * Number(el.quantity);
            return { id: el.id, quantity: el.quantity };
        });
        cogo_toast_1.default.loading("Guardando la orden...").then(function () {
            axios_1.default
                .post("/api/order", { products: products, total: total })
                .then(function (res) {
                dispatch({ type: reducer_1.SET_EMPTY_CART });
                dispatch({ type: reducer_1.SET_LOADING_SAVING, loading: false });
            })
                .catch(function (error) { return console.log(error); });
            cogo_toast_1.default.success("Su orden ha sido guardada con exito!");
        });
    };
    return (react_1.default.createElement(Context_1.default.Provider, { value: {
            products: state.products,
            total: state.total,
            cart: state.cart,
            isSaving: state.isSaving,
            isLoading: state.isLoading,
            completeOrder: completeOrder,
            addProductToCart: addProductToCart,
            getAllProducts: getAllProducts,
            removeProductFromCart: removeProductFromCart,
            filterByCategory: filterByCategory,
            sortProductBy: sortProductBy
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
var cogo_toast_1 = __importDefault(__webpack_require__(/*! cogo-toast */ "./node_modules/cogo-toast/dist/index.es.js"));
var Context_1 = __importDefault(__webpack_require__(/*! ./Context */ "./resources/js/components/Product/Context.tsx"));
function Card(_a) {
    var id = _a.id, title = _a.title, price = _a.price, category = _a.category, cover = _a.cover, addProduct = _a.addProduct;
    var state = react_1.useContext(Context_1.default);
    var quantity = 0;
    var item = state.cart.find(function (item) { return item.id === id; });
    if (item) {
        quantity = item.quantity;
    }
    return (react_1.default.createElement("div", { className: "product-card-container relative" },
        react_1.default.createElement("img", { src: "/images/computer.png", className: "object-cover w-full shadow-sm h-48 rounded-lg mb-px" }),
        react_1.default.createElement("div", { className: "flex justify-between mt-2 items-center text-white" },
            react_1.default.createElement("a", { href: "#", className: "hover:underline font-bold" }, title),
            react_1.default.createElement("span", { className: "rounded text-sm px-2 py-1 text-blue-500 font-medium", title: "Precio del art\u00EDculo", style: { background: "#2a2a2a" } },
                "$",
                price)),
        react_1.default.createElement("p", { className: "text-xs text-gray-200" },
            "Por\u00A0",
            react_1.default.createElement("span", { className: "font-medium hover:underline cursor-pointer" }, "Luis Alvarado\u00A0"),
            "en\u00A0",
            react_1.default.createElement("a", { href: "#", className: "font-bold hover:underline", style: { color: "rgb(86, 198, 109)" } }, category)),
        react_1.default.createElement("div", { className: "absolute top-0 rounded-lg right-0 w-full h-48 bg-gray-300 hidden product-card-hover" },
            react_1.default.createElement("div", { className: "flex flex-col items-center justify-center h-full text-sm" },
                react_1.default.createElement("div", { className: "relative" },
                    react_1.default.createElement("img", { className: "h-6", src: "/images/icon-cart.svg", alt: "" }),
                    quantity > 0 && (react_1.default.createElement("span", { className: "text-white w-5 h-5 flex items-center bg-gray-800 justify-center rounded-full absolute top-0 right-0 -mt-4 -mr-5" }, quantity))),
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
    isSaving: false,
    addProductToCart: function (product) { },
    removeProductFromCart: function (productId) { },
    filterByCategory: function (productId) { },
    getAllProducts: function () { },
    sortProductBy: function (type) { },
    completeOrder: function () { }
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
    var isSelected = selected == id;
    return (react_1.default.createElement("li", { className: "mr-4" },
        react_1.default.createElement("button", { disabled: isSelected, onClick: function () {
                filter(category);
                setSelected(id);
            }, className: "font-thin hover:text-white text-gray-150" },
            react_1.default.createElement("span", { className: "text-gray-100" }, "#"),
            "\u00A0",
            react_1.default.createElement("span", { className: "" + (isSelected ? "font-bold text-white" : "") }, title))));
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
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));
var Context_1 = __importDefault(__webpack_require__(/*! ./Context */ "./resources/js/components/Product/Context.tsx"));
var FilterItem = react_1.default.lazy(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./FilterItem */ "./resources/js/components/Product/FilterItem.tsx")); }); });
function Filters() {
    var _a = react_1.useContext(Context_1.default), filterByCategory = _a.filterByCategory, getAllProducts = _a.getAllProducts, sortProductBy = _a.sortProductBy;
    var _b = react_1.useState(0), selectedFilterItem = _b[0], setSelectedFilter = _b[1];
    var _c = react_1.useState([]), filters = _c[0], setFilters = _c[1];
    react_1.useEffect(function () {
        axios_1.default
            .get("/api/categories")
            .then(function (res) {
            setFilters(res.data.data);
        })
            .catch(function (e) { return console.log(e); });
    }, []);
    return (react_1.default.createElement("div", { className: "bg-white container rounded-t-lg mx-auto", style: { background: "#303030" } },
        react_1.default.createElement("div", { className: "max-w-7xl mx-auto py-4 sm:px-6 lg:px-6" },
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
                        react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement("span", { className: "text-white" }, "Cargando lista de filtros") }, filters.map(function (_a) {
                            var id = _a.id, name = _a.name;
                            return (react_1.default.createElement(FilterItem, { key: id, id: id, selected: selectedFilterItem, filter: filterByCategory, setSelected: setSelectedFilter, category: id, title: name }));
                        })))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("select", { defaultValue: 0, onChange: function (_a) {
                            var target = _a.target;
                            return sortProductBy(target.value);
                        }, className: "cursor-pointer form-select text-sm text-white bg-gray-1000 border-transparent block w-full" },
                        react_1.default.createElement("option", { disabled: true, value: "0" }, "Ordenar Por"),
                        react_1.default.createElement("option", { value: "Asc" }, "Nombre (Asc)"),
                        react_1.default.createElement("option", { value: "Desc" }, "Nombre (Desc)")))))));
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
var SubHeaderFilter_1 = __importDefault(__webpack_require__(/*! ./SubHeaderFilter */ "./resources/js/components/Product/SubHeaderFilter.tsx"));
function ProductList() {
    var state = react_1.useContext(Context_1.default);
    if (state.isLoading) {
        return react_1.default.createElement(Empty_1.default, { title: "\uD83D\uDD25 Cargando Productos..." });
    }
    else if (state.products.data.length == 0) {
        return react_1.default.createElement(Empty_1.default, { type: 0, title: "\uD83D\uDE10 No hay productos disponibles" });
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SubHeaderFilter_1.default, { total: state.products.meta.total, count: state.products.data.length }),
        react_1.default.createElement("div", { className: "mt-10 grid lg:grid-cols-4 sm:grid-cols-2 row-gap-8 col-gap-8" }, state.products.data.map(function (el) {
            var id = el.id, name = el.name, price = el.price, category = el.category, cover = el.cover;
            return (react_1.default.createElement(Card_1.default, { key: id, id: id, title: name, cover: cover, price: price, addProduct: function () {
                    return state.addProductToCart({ id: id, name: name, price: price, category: category, cover: cover });
                }, category: category["name"] }));
        }))));
}
exports.default = ProductList;


/***/ }),

/***/ "./resources/js/components/Product/SubHeaderFilter.tsx":
/*!*************************************************************!*\
  !*** ./resources/js/components/Product/SubHeaderFilter.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function SubHeaderFilter(_a) {
    var count = _a.count, total = _a.total;
    return (react_1.default.createElement("div", { className: "text-white rounded-b flex items-center justify-between text-xs bg-gray-1000" },
        react_1.default.createElement("div", { className: "ml-4" },
            "Mostrando (\u00A0",
            react_1.default.createElement("strong", { className: "text-green-500" }, count),
            "\u00A0) de ",
            total,
            " registros"),
        react_1.default.createElement("div", { className: "flex bg-gray-850 border-r border-b border-t border-gray-1000 px-3 py-2" },
            react_1.default.createElement("div", { className: "mr-3 border-r pr-3 border-gray-1000 flex items-center justify-center" },
                react_1.default.createElement("svg", { width: "14", height: "12", className: "mr-1", viewBox: "0 0 76 70", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M37.9268 69.4747L32.4893 64.5247C13.1768 47.0122 0.426819 35.4622 0.426819 21.2872C0.426819 9.73722 9.50182 0.662216 21.0518 0.662216C27.5768 0.662216 33.8393 3.69972 37.9268 8.49972C42.0143 3.69972 48.2768 0.662216 54.8018 0.662216C66.3518 0.662216 75.4268 9.73722 75.4268 21.2872C75.4268 35.4622 62.6768 47.0122 43.3643 64.5622L37.9268 69.4747Z", fill: "red" })),
                "Mis Favoritos"),
            react_1.default.createElement("div", { className: "flex items-center justify-center" },
                react_1.default.createElement("svg", { width: "15", height: "14", className: "mr-1 fill-current text-yellow-500", viewBox: "0 0 76 76", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M60.4268 48.9522V63.9522C60.4268 66.0147 58.7393 67.7022 56.6768 67.7022H11.6768C9.61432 67.7022 7.92682 66.0147 7.92682 63.9522V18.9522C7.92682 16.8897 9.61432 15.2022 11.6768 15.2022H23.0018C25.0643 15.2022 26.7518 13.5147 26.7518 11.4522C26.7518 9.38971 25.0643 7.70221 23.0018 7.70221H7.92682C3.80182 7.70221 0.426819 11.0772 0.426819 15.2022V67.7022C0.426819 71.8272 3.80182 75.2022 7.92682 75.2022H60.4268C64.5518 75.2022 67.9268 71.8272 67.9268 67.7022V48.9522C67.9268 46.8897 66.2393 45.2022 64.1768 45.2022C62.1143 45.2022 60.4268 46.8897 60.4268 48.9522ZM51.0518 60.2022H17.3768C15.8018 60.2022 14.9393 58.4022 15.9143 57.1647L22.4393 48.8022C22.6122 48.5809 22.8325 48.4013 23.0841 48.2766C23.3357 48.1519 23.6121 48.0853 23.8928 48.0817C24.1736 48.0781 24.4516 48.1376 24.7063 48.2558C24.9609 48.374 25.1858 48.5479 25.3643 48.7647L31.2143 55.8147L40.0268 44.4897C40.7768 43.5147 42.2768 43.5147 42.9893 44.5272L52.5518 57.2397C53.4893 58.4397 52.5893 60.2022 51.0518 60.2022V60.2022ZM65.3018 26.0397C67.1018 23.1522 68.1143 19.7772 67.8893 16.0647C67.4018 8.00221 60.9893 1.17721 53.0018 0.314707C50.6371 0.0396077 48.2409 0.26797 45.9707 0.98479C43.7006 1.70161 41.6077 2.89066 39.8298 4.47383C38.0518 6.057 36.6289 7.99845 35.6547 10.1706C34.6804 12.3428 34.1767 14.6965 34.1768 17.0772C34.1768 26.4147 41.7143 33.9522 51.0143 33.9522C54.3143 33.9522 57.3893 32.9772 59.9768 31.3272L69.0143 40.3647C70.4768 41.8272 72.8768 41.8272 74.3393 40.3647C75.8018 38.9022 75.8018 36.5022 74.3393 35.0397L65.3018 26.0397ZM51.0518 26.4522C48.5654 26.4522 46.1808 25.4645 44.4227 23.7063C42.6645 21.9482 41.6768 19.5636 41.6768 17.0772C41.6768 14.5908 42.6645 12.2062 44.4227 10.4481C46.1808 8.68993 48.5654 7.70221 51.0518 7.70221C53.5382 7.70221 55.9228 8.68993 57.6809 10.4481C59.4391 12.2062 60.4268 14.5908 60.4268 17.0772C60.4268 19.5636 59.4391 21.9482 57.6809 23.7063C55.9228 25.4645 53.5382 26.4522 51.0518 26.4522Z" })),
                "B\u00FAsquedas Guardadas"))));
}
exports.default = SubHeaderFilter;


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
exports.SET_LOADING_SAVING = "SET_LOADING_SAVING";
exports.SET_EMPTY_CART = "SET_EMPTY_CART";
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
var setLoadingSaving = function (loading, state) {
    return __assign(__assign({}, state), { isSaving: loading });
};
var setEmptyCard = function (state) {
    return __assign(__assign({}, state), { cart: [], total: 0.00 });
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
        case exports.SET_LOADING_SAVING:
            return setLoadingSaving(action.loading, state);
        case exports.SET_EMPTY_CART:
            return setEmptyCard(state);
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