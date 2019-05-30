(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/inicio/inicio.component */ "./src/app/componentes/inicio/inicio.component.ts");
/* harmony import */ var _componentes_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/usuario/usuario.component */ "./src/app/componentes/usuario/usuario.component.ts");
/* harmony import */ var _componentes_producto_producto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/producto/producto.component */ "./src/app/componentes/producto/producto.component.ts");
/* harmony import */ var _core_productos_core_productos_core_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/productos-core/productos-core.component */ "./src/app/core/productos-core/productos-core.component.ts");
/* harmony import */ var _core_lista_productos_core_lista_productos_core_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/lista-productos-core/lista-productos-core.component */ "./src/app/core/lista-productos-core/lista-productos-core.component.ts");
/* harmony import */ var _core_lista_usuarios_core_lista_usuarios_core_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/lista-usuarios-core/lista-usuarios-core.component */ "./src/app/core/lista-usuarios-core/lista-usuarios-core.component.ts");
/* harmony import */ var _core_usuario_core_usuario_core_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/usuario-core/usuario-core.component */ "./src/app/core/usuario-core/usuario-core.component.ts");
/* harmony import */ var _core_empresa_core_empresa_core_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/empresa-core/empresa-core.component */ "./src/app/core/empresa-core/empresa-core.component.ts");
/* harmony import */ var _core_lista_distribuidor_core_lista_distribuidor_core_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/lista-distribuidor-core/lista-distribuidor-core.component */ "./src/app/core/lista-distribuidor-core/lista-distribuidor-core.component.ts");
/* harmony import */ var _core_distribuidor_core_distribuidor_core_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/distribuidor-core/distribuidor-core.component */ "./src/app/core/distribuidor-core/distribuidor-core.component.ts");
/* harmony import */ var _core_codigos_qrcore_codigos_qrcore_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/codigos-qrcore/codigos-qrcore.component */ "./src/app/core/codigos-qrcore/codigos-qrcore.component.ts");














var routes = [
    {
        path: '',
        component: _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"]
    },
    {
        path: 'usuario',
        component: _componentes_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["UsuarioComponent"]
    },
    {
        path: 'producto',
        component: _componentes_producto_producto_component__WEBPACK_IMPORTED_MODULE_5__["ProductoComponent"]
    },
    {
        path: 'productoCore',
        component: _core_lista_productos_core_lista_productos_core_component__WEBPACK_IMPORTED_MODULE_7__["ListaProductosCoreComponent"]
    },
    {
        path: 'newProductoCore',
        component: _core_productos_core_productos_core_component__WEBPACK_IMPORTED_MODULE_6__["ProductosCoreComponent"]
    },
    {
        path: 'editProductoCore/:id',
        component: _core_productos_core_productos_core_component__WEBPACK_IMPORTED_MODULE_6__["ProductosCoreComponent"]
    },
    {
        path: 'usuarioCore',
        component: _core_lista_usuarios_core_lista_usuarios_core_component__WEBPACK_IMPORTED_MODULE_8__["ListaUsuariosCoreComponent"]
    },
    {
        path: 'newUsuarioCore',
        component: _core_usuario_core_usuario_core_component__WEBPACK_IMPORTED_MODULE_9__["UsuarioCoreComponent"]
    },
    {
        path: 'editUsuarioCore/:id',
        component: _core_usuario_core_usuario_core_component__WEBPACK_IMPORTED_MODULE_9__["UsuarioCoreComponent"]
    },
    {
        path: 'newEmpresaCore',
        component: _core_empresa_core_empresa_core_component__WEBPACK_IMPORTED_MODULE_10__["EmpresaCoreComponent"]
    },
    {
        path: 'distribuidorCore',
        component: _core_lista_distribuidor_core_lista_distribuidor_core_component__WEBPACK_IMPORTED_MODULE_11__["ListaDistribuidorCoreComponent"]
    },
    {
        path: 'newDistribuidorCore',
        component: _core_distribuidor_core_distribuidor_core_component__WEBPACK_IMPORTED_MODULE_12__["DistribuidorCoreComponent"]
    },
    {
        path: 'editdistribuidorCore/:id',
        component: _core_distribuidor_core_distribuidor_core_component__WEBPACK_IMPORTED_MODULE_12__["DistribuidorCoreComponent"]
    },
    {
        path: 'codigoQRCore',
        component: _core_codigos_qrcore_codigos_qrcore_component__WEBPACK_IMPORTED_MODULE_13__["CodigosQRCoreComponent"]
    },
    { path: '**', component: _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n    <div class=\"app__navbar\">\n        <div class=\"app__navbar__menu\">\n            <i *ngIf=\"page==='/'\" class=\"fa fa-bars fa-2x\" aria-hidden=\"true\" (click)=\"showMenu=!showMenu\"></i>            \n            <i *ngIf=\"page!='/'\" class=\"fa fa-long-arrow-left fa-2x\" aria-hidden=\"true\" onclick=\"window.history.back();\"></i>\n            <div class=\"app__navbar__menu__logo\">\n            <img src=\"assets/images/logo.png\" alt=\"\">\n            </div>\n        </div>\n    </div>\n    <div [ngClass]=\"{'app__menu':!showMenu, 'app__menu__show': showMenu}\"  id=\"appmenu\" (click)=\"showMenu=!showMenu\">\n        <div [ngClass]=\"{'app__menu__options':!showMenu, 'app__menu__show__options__show': showMenu}\">\n            <div class=\"app__menu__show__options__show__head\">\n                Menu Principal\n            </div>\n            <div class=\"app__menu__show__options__show__options\">\n                <div class=\"app__menu__show__options__show__options__opts\" [routerLink]=\"['usuario']\" (click)=\"showMenu=!showMenu\">\n                    <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>&nbsp; Mis Datos\n                </div>\n            </div>\n            <!--<div class=\"app__menu__show__options__show__options\">\n                <div class=\"app__menu__show__options__show__options__opts\" [routerLink]=\"['newEmpresaCore']\" (click)=\"showMenu=!showMenu\">\n                    <i class=\"fa fa-building\" aria-hidden=\"true\"></i>&nbsp; Mi Empresa\n                </div>\n            </div>\n            <div class=\"app__menu__show__options__show__options\">\n                <div class=\"app__menu__show__options__show__options__opts\" [routerLink]=\"['usuarioCore']\" (click)=\"showMenu=!showMenu\">\n                    <i class=\"fa fa-users\" aria-hidden=\"true\"></i>&nbsp; Mis Usuario\n                </div>\n            </div>\n            <div class=\"app__menu__show__options__show__options\">\n                <div class=\"app__menu__show__options__show__options__opts\" [routerLink]=\"['productoCore']\" (click)=\"showMenu=!showMenu\">\n                    <i class=\"fa fa-product-hunt\" aria-hidden=\"true\"></i>&nbsp; Mis Productos\n                </div>\n            </div>\n            <div class=\"app__menu__show__options__show__options\">\n                <div class=\"app__menu__show__options__show__options__opts\" [routerLink]=\"['codigoQRCore']\" (click)=\"showMenu=!showMenu\">\n                    <i class=\"fa fa-qrcode\" aria-hidden=\"true\"></i>&nbsp; Generar Codigos QR\n                </div>\n            </div>\n            <div class=\"app__menu__show__options__show__options\">\n                <div class=\"app__menu__show__options__show__options__opts\" [routerLink]=\"['distribuidorCore']\" (click)=\"showMenu=!showMenu\">\n                    <i class=\"fa fa-building-o\" aria-hidden=\"true\"></i>&nbsp; Mis Distribuidores\n                </div>\n            </div>-->\n        </div>\n\n    </div>\n    <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n  position: relative;\n  display: flex;\n  flex-direction: column; }\n  .app__navbar {\n    background: #7E2662;\n    height: 13%;\n    display: flex;\n    flex-direction: row;\n    padding-left: 10px;\n    align-items: center;\n    color: white; }\n  .app__navbar__menu {\n      width: 100%;\n      height: 50px;\n      margin-top: 15px; }\n  .app__navbar__menu__logo {\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        height: 5px;\n        margin-top: 10px; }\n  .app__menu {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    display: none; }\n  .app__menu__options {\n      position: absolute;\n      left: -210px;\n      width: 50%;\n      height: 10%;\n      color: white; }\n  .app__menu__show {\n    z-index: 99999;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    display: block; }\n  .app__menu__show__options__show {\n      z-index: 999999;\n      position: absolute;\n      left: 0px;\n      width: 250px;\n      height: 100%;\n      color: white;\n      background: linear-gradient(to right bottom, #7e2662, #7a2064, #751967, #70136a, #690d6d); }\n  .app__menu__show__options__show__head {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: #70136a;\n        height: 55px;\n        background: white; }\n  .app__menu__show__options__show__options {\n        width: 100%;\n        display: flex;\n        flex-direction: column; }\n  .app__menu__show__options__show__options__opts {\n          display: flex;\n          flex-direction: row;\n          justify-content: center;\n          align-items: center;\n          height: 60px;\n          box-shadow: 0px 1px 5px 0px #424242; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyby9Qcm9qZWN0cy9Bbmd1bGFyL09yaWdpbmFsQXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWtCO0VBQ2xCLGFBQVk7RUFDWixzQkFBc0IsRUFBQTtFQUNuQjtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTtFQUNaO01BQ0ksV0FBVztNQUNYLFlBQVk7TUFDWixnQkFBZ0IsRUFBQTtFQUNoQjtRQUNJLFdBQVc7UUFDWCxhQUFZO1FBQ1osbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGdCQUFnQixFQUFBO0VBSTVCO0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQTZCO0lBQzdCLGFBQVksRUFBQTtFQUNaO01BQ0ksa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixVQUFVO01BQ1YsV0FBVztNQUNYLFlBQVksRUFBQTtFQUdwQjtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBNkI7SUFDN0IsY0FBYSxFQUFBO0VBQ2I7TUFDSSxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxZQUFZO01BQ1osWUFBWTtNQUNaLFlBQVk7TUFDWix5RkFBeUYsRUFBQTtFQUN6RjtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGNBQWE7UUFDYixZQUFZO1FBQ1osaUJBQWlCLEVBQUE7RUFFckI7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLHNCQUFzQixFQUFBO0VBQ3RCO1VBQ0ksYUFBYTtVQUNiLG1CQUFtQjtVQUNuQix1QkFBdUI7VUFDdkIsbUJBQW1CO1VBQ25CLFlBQVk7VUFHWixtQ0FBbUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHB7XHJcbiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiBkaXNwbGF5OmZsZXg7XHJcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgJl9fbmF2YmFyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjN0UyNjYyOyAgICBcclxuICAgICAgICBoZWlnaHQ6IDEzJTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgJl9fbWVudXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgJl9fbG9nb3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX21lbnUge1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAmX19vcHRpb25ze1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0yMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH0gIFxyXG4gICAgJl9fbWVudV9fc2hvdyB7XHJcbiAgICAgICAgei1pbmRleDogOTk5OTk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICZfX29wdGlvbnNfX3Nob3d7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICM3ZTI2NjIsICM3YTIwNjQsICM3NTE5NjcsICM3MDEzNmEsICM2OTBkNmQpO1xyXG4gICAgICAgICAgICAmX19oZWFke1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiM3MDEzNmE7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX19vcHRpb25zIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAmX19vcHRzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggIzQyNDI0MjtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCAjNDI0MjQyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCAjNDI0MjQyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.title = 'OriginalApp';
        this.showMenu = false;
        this.router.events.subscribe(function (data) {
            if (data.url) {
                _this.page = data.url;
            }
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/inicio/inicio.component */ "./src/app/componentes/inicio/inicio.component.ts");
/* harmony import */ var _componentes_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/usuario/usuario.component */ "./src/app/componentes/usuario/usuario.component.ts");
/* harmony import */ var _componentes_producto_producto_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/producto/producto.component */ "./src/app/componentes/producto/producto.component.ts");
/* harmony import */ var _core_productos_core_productos_core_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/productos-core/productos-core.component */ "./src/app/core/productos-core/productos-core.component.ts");
/* harmony import */ var _core_lista_productos_core_lista_productos_core_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/lista-productos-core/lista-productos-core.component */ "./src/app/core/lista-productos-core/lista-productos-core.component.ts");
/* harmony import */ var _core_lista_usuarios_core_lista_usuarios_core_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/lista-usuarios-core/lista-usuarios-core.component */ "./src/app/core/lista-usuarios-core/lista-usuarios-core.component.ts");
/* harmony import */ var _core_usuario_core_usuario_core_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/usuario-core/usuario-core.component */ "./src/app/core/usuario-core/usuario-core.component.ts");
/* harmony import */ var _core_empresa_core_empresa_core_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/empresa-core/empresa-core.component */ "./src/app/core/empresa-core/empresa-core.component.ts");
/* harmony import */ var _core_lista_distribuidor_core_lista_distribuidor_core_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/lista-distribuidor-core/lista-distribuidor-core.component */ "./src/app/core/lista-distribuidor-core/lista-distribuidor-core.component.ts");
/* harmony import */ var _core_distribuidor_core_distribuidor_core_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/distribuidor-core/distribuidor-core.component */ "./src/app/core/distribuidor-core/distribuidor-core.component.ts");
/* harmony import */ var _core_codigos_qrcore_codigos_qrcore_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/codigos-qrcore/codigos-qrcore.component */ "./src/app/core/codigos-qrcore/codigos-qrcore.component.ts");
/* harmony import */ var _shared_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/autocomplete/autocomplete.component */ "./src/app/shared/autocomplete/autocomplete.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_10__["InicioComponent"],
                _componentes_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_11__["UsuarioComponent"],
                _componentes_producto_producto_component__WEBPACK_IMPORTED_MODULE_12__["ProductoComponent"],
                _core_productos_core_productos_core_component__WEBPACK_IMPORTED_MODULE_13__["ProductosCoreComponent"],
                _core_lista_productos_core_lista_productos_core_component__WEBPACK_IMPORTED_MODULE_14__["ListaProductosCoreComponent"],
                _core_lista_usuarios_core_lista_usuarios_core_component__WEBPACK_IMPORTED_MODULE_15__["ListaUsuariosCoreComponent"],
                _core_usuario_core_usuario_core_component__WEBPACK_IMPORTED_MODULE_16__["UsuarioCoreComponent"],
                _core_empresa_core_empresa_core_component__WEBPACK_IMPORTED_MODULE_17__["EmpresaCoreComponent"],
                _core_lista_distribuidor_core_lista_distribuidor_core_component__WEBPACK_IMPORTED_MODULE_18__["ListaDistribuidorCoreComponent"],
                _core_distribuidor_core_distribuidor_core_component__WEBPACK_IMPORTED_MODULE_19__["DistribuidorCoreComponent"],
                _core_codigos_qrcore_codigos_qrcore_component__WEBPACK_IMPORTED_MODULE_20__["CodigosQRCoreComponent"],
                _shared_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_21__["AutocompleteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_6__["QRCodeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componentes/inicio/inicio.component.html":
/*!**********************************************************!*\
  !*** ./src/app/componentes/inicio/inicio.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inicio\">\n\n  <div class=\"inicio__content\">\n      <div class=\"inicio__content__lbl\">\n        Verificar\n      </div>\n    <div class=\"inicio__content__btn\" (click)=\"readQr()\">\n      <img src=\"assets/images/original.png\" alt=\"\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/componentes/inicio/inicio.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/componentes/inicio/inicio.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inicio {\n  display: flex;\n  flex-direction: column;\n  height: 100vh; }\n  .inicio__content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 90%; }\n  .inicio__content__lbl {\n      color: white;\n      font-size: 35px;\n      font-weight: 400;\n      letter-spacing: 1px;\n      line-height: 1.3;\n      text-transform: uppercase;\n      text-shadow: 0 0 1px rgba(255, 255, 255, 0.2); }\n  .inicio__content__btn {\n      width: 120px;\n      height: 120px;\n      background: white;\n      border-radius: 50%;\n      box-shadow: 0px 0px 94px 0px white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyby9Qcm9qZWN0cy9Bbmd1bGFyL09yaWdpbmFsQXBwL3NyYy9hcHAvY29tcG9uZW50ZXMvaW5pY2lvL2luaWNpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixzQkFBc0I7RUFDdEIsYUFBYSxFQUFBO0VBRWI7SUFDSSxhQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVyxFQUFBO0VBQ1g7TUFDSSxZQUFZO01BQ1osZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6Qiw2Q0FBNkMsRUFBQTtFQUVqRDtNQUNJLFlBQVk7TUFDWixhQUFhO01BQ2IsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUdsQixrQ0FBZ0QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2luaWNpby9pbmljaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5pY2lvIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIFxyXG4gICAgJl9fY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAmX19sYmwge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19idG4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA5NHB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOTRweCAwcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA5NHB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/inicio/inicio.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/inicio/inicio.component.ts ***!
  \********************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/firebase.service */ "./src/app/servicios/firebase.service.ts");
/* harmony import */ var _servicios_producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/producto.service */ "./src/app/servicios/producto.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var InicioComponent = /** @class */ (function () {
    function InicioComponent(service, router, productoService) {
        this.service = service;
        this.router = router;
        this.productoService = productoService;
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent.prototype.readQr = function () {
        var _this = this;
        cordova.plugins.barcodeScanner.scan(function (result) {
            //alert(result.text);
            _this.service.obtenerDatosQR(result.text).subscribe(function (data) {
                _this.productoService.setProductos(data);
                _this.router.navigate(['/producto']);
            });
        }, function (error) {
            //alert(error);
        });
    };
    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/componentes/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.scss */ "./src/app/componentes/inicio/inicio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _servicios_producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"]])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/componentes/producto/producto.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/producto/producto.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"producto\">\n    \n\n\n  <div class=\"producto__primero\">\n    <div class=\"producto__primero__header\">\n        <h2>{{producto.nombre.toUpperCase()}}</h2>\n    </div>\n    <div class=\"producto__primero__body\">\n      \n      <div class=\"producto__primero__body__content\">\n        <div class=\"producto__primero__body__content__left\">\n            {{producto.marca.toUpperCase()}}\n        </div>  \n        <div class=\"producto__primero__body__content__right\">\n            {{producto.registro.toUpperCase()}} \n        </div>\n      </div>  \n    </div>\n  </div>\n\n  <div class=\"producto__tercero\">\n    <div class=\"producto__tercero__header\">\n        <h2>Caracteristicas</h2>\n    </div>\n    <div class=\"producto__tercero__body\">\n        Presentacion: <br/>\n        {{producto.caracteristicas.presentacion.toUpperCase()}}<br/><br/>\n        Contenido Neto: <br/>\n        {{producto.contenidoNeto.toUpperCase()}} <br/><br/>\n        Tipo Tratamiento: <br/>\n        {{producto.caracteristicas.tipoTratamiento.toUpperCase()}} <br/><br/>\n        Fabricante: <br/>\n        {{producto.caracteristicas.fabricante.toUpperCase()}} <br/><br/>\n        Direccion Fabricante: <br/>\n        {{producto.caracteristicas.direccionFabricante.toUpperCase()}} \n    </div>\n  </div>\n\n  <div class=\"producto__segundo\">\n    <div class=\"producto__segundo__header\">\n        <h2>Ingredientes</h2>\n    </div>\n    <div class=\"producto__segundo__body\">\n        <div class=\"producto__segundo__body__ingrediente\" *ngFor=\"let ingrediente of producto.ingredientes\">\n          {{ingrediente.clase.toUpperCase()}} - {{ingrediente.nombre.toUpperCase()}}\n        </div>\n    </div>\n  </div>\n  \n  <div class=\"producto__cuarto\">\n      <div class=\"producto__cuarto__titulo\">\n          Información Nutricional\n      </div>     \n      <div class=\"producto__cuarto__barratitulo\">&nbsp;</div>\n      <div class=\"producto__cuarto__registro\">Calorias: {{producto.infoNutricional.caloriasTotales.toUpperCase()}}</div>\n      <div class=\"producto__cuarto__barratitulo2\">&nbsp;</div>\n      <div class=\"producto__cuarto__registror\">% de valor diario*</div>\n      <div class=\"producto__cuarto__registro\">Calorias Grasa: {{producto.infoNutricional.caloreiasGrasas.toUpperCase()}}</div>\n      <div class=\"producto__cuarto__registro\">Proteinas: {{producto.infoNutricional.proteinas.toUpperCase()}}</div>\n      <div class=\"producto__cuarto__registro\">Grasa Total: {{producto.infoNutricional.grasaTotal.toUpperCase()}}</div>\n      <div class=\"producto__cuarto__registro\">Grasa Saturada: {{producto.infoNutricional.grasaSaturada.toUpperCase()}}</div>\n      <div class=\"producto__cuarto__registro\">Carbohidratos Totales: {{producto.infoNutricional.carbohidratosTotatles.toUpperCase()}}</div>\n      <div class=\"producto__cuarto__registro\">Fibra dietaria: {{producto.infoNutricional.fibraDietaria.toUpperCase()}}</div>\n      <div class=\"producto__cuarto__registro\">Colesterol: {{producto.infoNutricional.colesterol.toUpperCase()}}</div>\n      <div class=\"producto__cuarto__registro\">Sodio: {{producto.infoNutricional.sodio.toUpperCase()}}</div>\n      <div class=\"producto__cuarto__registro\">Grasas Trans: {{producto.infoNutricional.grasaTrans.toUpperCase()}}</div>\n      <div class=\"producto__cuarto__registro\">Azucares: {{producto.infoNutricional.azucares.toUpperCase()}}</div>\n      <div class=\"producto__cuarto__registro\">Vitamina A: {{producto.infoNutricional.vitaminaA.toUpperCase()}}</div>\n      <div class=\"producto__cuarto__registro\">Vitamina C: {{producto.infoNutricional.vitaminaC.toUpperCase()}}</div>\n      <div class=\"producto__cuarto__registro\">Hierro: {{producto.infoNutricional.hierro.toUpperCase()}}</div>\n      <div class=\"producto__cuarto__registro\">Calcio: {{producto.infoNutricional.calcio.toUpperCase()}}</div>\n      <div class=\"producto__cuarto__barratitulo\">&nbsp;</div>\n      <div class=\"producto__cuarto__registro\">Declaracion de Propiedades de Salud: {{producto.infoNutricional.declaracion.toUpperCase()}}</div>\n      <!--<div class=\"producto__cuarto__footer\">*Los porcentajes de valores diarios se basan en una dieta de 2.000 calorias</div>-->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/producto/producto.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/componentes/producto/producto.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".producto {\n  position: relative;\n  top: 30px;\n  height: 90vh;\n  padding: 10px;\n  font-weight: 400;\n  letter-spacing: 1px;\n  line-height: 1.3;\n  overflow: scroll;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n  .producto__primero {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: 100%;\n    height: 220px;\n    background: white;\n    box-shadow: 0px 1px 5px 0px #adadad;\n    margin-bottom: 20px;\n    border-radius: 10px;\n    font-size: 15px; }\n  .producto__primero__header {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      top: 0;\n      width: 100%;\n      border-top-left-radius: 10px;\n      border-top-right-radius: 10px;\n      background: radial-gradient(rgba(0, 0, 0, 0.7), rgba(8, 0, 8, 0.8)), url('productos.jpg') no-repeat center center;\n      height: 230px;\n      color: white; }\n  .producto__primero__body {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      height: 60%;\n      width: 90%;\n      border-bottom-left-radius: 10px;\n      border-bottom-right-radius: 10px;\n      padding: 20px; }\n  .producto__primero__body__content {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        height: 100%;\n        width: 100%; }\n  .producto__primero__body__content__left {\n          width: 100%; }\n  .producto__primero__body__content__right {\n          width: 100%; }\n  .producto__segundo {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: 100%;\n    height: 320px;\n    background: white;\n    box-shadow: 0px 1px 5px 0px #adadad;\n    margin-bottom: 20px;\n    border-radius: 10px;\n    font-size: 15px; }\n  .producto__segundo__header {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      top: 0;\n      width: 100%;\n      border-top-left-radius: 10px;\n      border-top-right-radius: 10px;\n      background: #7e2662;\n      height: 150px;\n      color: white; }\n  .producto__segundo__body {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      height: 100%;\n      width: 90%;\n      border-bottom-left-radius: 10px;\n      border-bottom-right-radius: 10px;\n      padding: 20px;\n      overflow: scroll;\n      overflow-y: scroll;\n      overflow-x: hidden; }\n  .producto__segundo__body__ingrediente {\n        display: flex;\n        flex-direction: column;\n        align-content: space-between;\n        padding: 10px;\n        width: 90%;\n        border-bottom: 1px solid #adadad; }\n  .producto__tercero {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: 100%;\n    height: 440px;\n    background: white;\n    box-shadow: 0px 1px 5px 0px #adadad;\n    margin-bottom: 20px;\n    border-radius: 10px;\n    font-size: 15px; }\n  .producto__tercero__header {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      top: 0;\n      width: 100%;\n      border-top-left-radius: 10px;\n      border-top-right-radius: 10px;\n      background: #7e2662;\n      height: 150px;\n      color: white; }\n  .producto__tercero__body {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      height: 100%;\n      width: 90%;\n      border-bottom-left-radius: 10px;\n      border-bottom-right-radius: 10px;\n      padding: 20px;\n      overflow: scroll;\n      overflow-y: scroll;\n      overflow-x: hidden; }\n  .producto__tercero__body__ingrediente {\n        display: flex;\n        flex-direction: column;\n        align-content: space-between;\n        padding: 10px;\n        width: 90%;\n        border-bottom: 1px solid #adadad; }\n  .producto__cuarto {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: 100%;\n    height: 830px;\n    background: white;\n    box-shadow: 0px 1px 5px 0px #adadad;\n    margin-bottom: 20px;\n    font-size: 15px; }\n  .producto__cuarto__titulo {\n      padding: 10px; }\n  .producto__cuarto__titulo__2 {\n      padding: 10px; }\n  .producto__cuarto__barratitulo {\n      margin-left: 10px;\n      width: 90%;\n      height: 10px;\n      background: black; }\n  .producto__cuarto__barratitulo2 {\n      margin-left: 10px;\n      width: 90%;\n      height: 5px;\n      background: black; }\n  .producto__cuarto__registro {\n      font-size: 14px;\n      width: 90%;\n      padding: 10px;\n      align-content: flex-start;\n      border-bottom: 1px solid #adadad; }\n  .producto__cuarto__registror {\n      padding: 10px;\n      display: flex;\n      flex-direction: column;\n      align-items: flex-end;\n      width: 80%;\n      font-size: 12px; }\n  .producto__cuarto__footer {\n      padding: 10px;\n      display: flex;\n      flex-direction: column;\n      width: 90%;\n      font-size: 9px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyby9Qcm9qZWN0cy9Bbmd1bGFyL09yaWdpbmFsQXBwL3NyYy9hcHAvY29tcG9uZW50ZXMvcHJvZHVjdG8vcHJvZHVjdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7RUFDbEI7SUFDSSxhQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUdqQixtQ0FBK0M7SUFDL0MsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlLEVBQUE7RUFDZjtNQUNJLGtCQUFrQjtNQUNsQixhQUFZO01BQ1osc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsTUFBSztNQUNMLFdBQVc7TUFDWCw0QkFBNEI7TUFDNUIsNkJBQTZCO01BQzdCLGlIQUFpSTtNQUNqSSxhQUFhO01BQ2IsWUFBWSxFQUFBO0VBRWhCO01BQ0ksa0JBQWtCO01BQ2xCLGFBQVk7TUFDWixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsVUFBVTtNQUNWLCtCQUErQjtNQUMvQixnQ0FBZ0M7TUFDaEMsYUFBYSxFQUFBO0VBQ2I7UUFDSSxhQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFdBQVcsRUFBQTtFQUNYO1VBQ0ksV0FBVyxFQUFBO0VBR2Y7VUFDSSxXQUFXLEVBQUE7RUFPM0I7SUFDSSxhQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUdqQixtQ0FBK0M7SUFDL0MsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlLEVBQUE7RUFDZjtNQUNJLGtCQUFrQjtNQUNsQixhQUFZO01BQ1osc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsTUFBSztNQUNMLFdBQVc7TUFDWCw0QkFBNEI7TUFDNUIsNkJBQTZCO01BQzdCLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsWUFBWSxFQUFBO0VBRWhCO01BQ0ksa0JBQWtCO01BQ2xCLGFBQVk7TUFDWixzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLFlBQVk7TUFDWixVQUFVO01BQ1YsK0JBQStCO01BQy9CLGdDQUFnQztNQUNoQyxhQUFhO01BQ2IsZ0JBQWU7TUFDZixrQkFBa0I7TUFDbEIsa0JBQWtCLEVBQUE7RUFDbEI7UUFDSSxhQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1QixhQUFhO1FBQ2IsVUFBVTtRQUNWLGdDQUE0QyxFQUFBO0VBS3hEO0lBQ0ksYUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFHakIsbUNBQStDO0lBQy9DLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZSxFQUFBO0VBQ2Y7TUFDSSxrQkFBa0I7TUFDbEIsYUFBWTtNQUNaLHNCQUFzQjtNQUN0Qix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLE1BQUs7TUFDTCxXQUFXO01BQ1gsNEJBQTRCO01BQzVCLDZCQUE2QjtNQUM3QixtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLFlBQVksRUFBQTtFQUVoQjtNQUNJLGtCQUFrQjtNQUNsQixhQUFZO01BQ1osc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osVUFBVTtNQUNWLCtCQUErQjtNQUMvQixnQ0FBZ0M7TUFDaEMsYUFBYTtNQUNiLGdCQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLGtCQUFrQixFQUFBO0VBQ2xCO1FBQ0ksYUFBWTtRQUNaLHNCQUFzQjtRQUN0Qiw0QkFBNEI7UUFDNUIsYUFBYTtRQUNiLFVBQVU7UUFDVixnQ0FBNEMsRUFBQTtFQUt4RDtJQUNJLGFBQVk7SUFDWixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBR2pCLG1DQUErQztJQUMvQyxtQkFBbUI7SUFDbkIsZUFBZSxFQUFBO0VBQ2Y7TUFDSSxhQUFZLEVBQUE7RUFFaEI7TUFDSSxhQUFZLEVBQUE7RUFFaEI7TUFDSSxpQkFBaUI7TUFDakIsVUFBVTtNQUNWLFlBQVk7TUFDWixpQkFBaUIsRUFBQTtFQUVyQjtNQUNJLGlCQUFpQjtNQUNqQixVQUFVO01BQ1YsV0FBVztNQUNYLGlCQUFpQixFQUFBO0VBRXJCO01BQ0ksZUFBZTtNQUNmLFVBQVU7TUFDVixhQUFZO01BQ1oseUJBQXlCO01BQ3pCLGdDQUE0QyxFQUFBO0VBRWhEO01BQ0ksYUFBWTtNQUNaLGFBQVk7TUFDWixzQkFBc0I7TUFDdEIscUJBQXFCO01BQ3JCLFVBQVU7TUFDVixlQUFlLEVBQUE7RUFFbkI7TUFDSSxhQUFZO01BQ1osYUFBWTtNQUNaLHNCQUFzQjtNQUN0QixVQUFVO01BQ1YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcHJvZHVjdG8vcHJvZHVjdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdG97XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgJl9fcHJpbWVyb3tcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMTczLDE3MywxNzMsMSk7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgxNzMsMTczLDE3MywxKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgxNzMsMTczLDE3MywxKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICZfX2hlYWRlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMCwwLDAsMC43KSwgcmdiYSg4LDAsOCwuOCkpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Byb2R1Y3Rvcy5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fYm9keSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAmX19jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgJl9fbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fcmlnaHR7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19zZWd1bmRve1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgxNzMsMTczLDE3MywxKTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgJl9faGVhZGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjN2UyNjYyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2JvZHl7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzpzY3JvbGw7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICAmX19pbmdyZWRpZW50ZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNzMsMTczLDE3MywxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX190ZXJjZXJve1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgxNzMsMTczLDE3MywxKTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgJl9faGVhZGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjN2UyNjYyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2JvZHl7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzpzY3JvbGw7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICAmX19pbmdyZWRpZW50ZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNzMsMTczLDE3MywxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19jdWFydG97XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMTczLDE3MywxNzMsMSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMTczLDE3MywxNzMsMSk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgJl9fdGl0dWxvIHtcclxuICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX190aXR1bG9fXzIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2JhcnJhdGl0dWxvIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2JhcnJhdGl0dWxvMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3JlZ2lzdHJvIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE3MywxNzMsMTczLDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19yZWdpc3Ryb3Ige1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2Zvb3RlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/componentes/producto/producto.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/producto/producto.component.ts ***!
  \************************************************************/
/*! exports provided: ProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoComponent", function() { return ProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/producto.service */ "./src/app/servicios/producto.service.ts");



var ProductoComponent = /** @class */ (function () {
    function ProductoComponent(productoService) {
        this.productoService = productoService;
    }
    ProductoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productoService.getProductos().subscribe(function (data) {
            _this.producto = data.producto;
            console.log(data);
        });
    };
    ProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-producto',
            template: __webpack_require__(/*! ./producto.component.html */ "./src/app/componentes/producto/producto.component.html"),
            styles: [__webpack_require__(/*! ./producto.component.scss */ "./src/app/componentes/producto/producto.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"]])
    ], ProductoComponent);
    return ProductoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/usuario/usuario.component.html":
/*!************************************************************!*\
  !*** ./src/app/componentes/usuario/usuario.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"usuario\">\n  <div class=\"usuario__content\">\n    <div class=\"usuario__content__head\">\n      Datos de Usuario \n    </div>\n    <div class=\"usuario__content__body\">\n      Nombres\n      <input type=\"text\" [(ngModel)]=\"cliente.nombre\" name=\"nombre\"> <br/>\n      Email\n      <input type=\"text\" [(ngModel)]=\"cliente.email\" name=\"email\"><br/>\n      Telefono\n      <input type=\"text\" [(ngModel)]=\"cliente.telefono\" name=\"telefono\"><br/><br/>\n    </div>\n    <div class=\"usuario__content__footer\">\n      <i class=\"fa fa-save\" aria-hidden=\"true\"></i>&nbsp;Guardar\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/componentes/usuario/usuario.component.scss":
/*!************************************************************!*\
  !*** ./src/app/componentes/usuario/usuario.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".usuario {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 90vh; }\n  .usuario__content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 80%;\n    width: 80%;\n    background: white;\n    border-radius: 10px;\n    box-shadow: 0px 1px 5px 0px #adadad; }\n  .usuario__content__head {\n      height: 10%;\n      border: 1px;\n      display: flex;\n      flex-direction: row;\n      justify-items: center;\n      align-items: center;\n      padding-left: 20px;\n      font-weight: 400;\n      letter-spacing: 1px;\n      line-height: 1.3;\n      text-transform: uppercase;\n      text-shadow: 0 0 1px rgba(255, 255, 255, 0.2); }\n  .usuario__content__body {\n      padding-top: 40px;\n      display: flex;\n      flex-direction: column;\n      justify-items: center;\n      align-items: center;\n      height: 70%;\n      width: 100%; }\n  .usuario__content__footer {\n      width: 100%;\n      height: 80px;\n      color: white;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      background: #7e2662;\n      border-bottom-left-radius: 10px;\n      border-bottom-right-radius: 10px;\n      cursor: pointer; }\n  .usuario__content__footer:hover {\n        background: #7c486c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyby9Qcm9qZWN0cy9Bbmd1bGFyL09yaWdpbmFsQXBwL3NyYy9hcHAvY29tcG9uZW50ZXMvdXN1YXJpby91c3VhcmlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTtFQUNaO0lBQ0ksYUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUduQixtQ0FBK0MsRUFBQTtFQUMvQztNQUNJLFdBQVc7TUFDWCxXQUFXO01BQ1gsYUFBWTtNQUNaLG1CQUFtQjtNQUNuQixxQkFBcUI7TUFDckIsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQix5QkFBeUI7TUFDekIsNkNBQTZDLEVBQUE7RUFFakQ7TUFDSSxpQkFBaUI7TUFDakIsYUFBWTtNQUNaLHNCQUFzQjtNQUN0QixxQkFBcUI7TUFDckIsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxXQUFXLEVBQUE7RUFFZjtNQUNJLFdBQVc7TUFDWCxZQUFZO01BQ1osWUFBWTtNQUNaLGFBQVk7TUFDWixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsK0JBQStCO01BQy9CLGdDQUFnQztNQUNoQyxlQUFlLEVBQUE7RUFYbEI7UUFhTyxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3VzdWFyaW8vdXN1YXJpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c3VhcmlvIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMTczLDE3MywxNzMsMSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMTczLDE3MywxNzMsMSk7XHJcbiAgICAgICAgJl9faGVhZHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2JvZHl7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19mb290ZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3ZTI2NjI7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjN2M0ODZjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/componentes/usuario/usuario.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/usuario/usuario.component.ts ***!
  \**********************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent() {
        this.cliente = { id: '0', codigo: '', nombre: '', email: '', telefono: '' };
    }
    UsuarioComponent.prototype.ngOnInit = function () {
    };
    UsuarioComponent.prototype.guardarCliente = function () {
    };
    UsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! ./usuario.component.html */ "./src/app/componentes/usuario/usuario.component.html"),
            styles: [__webpack_require__(/*! ./usuario.component.scss */ "./src/app/componentes/usuario/usuario.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ }),

/***/ "./src/app/core/codigos-qrcore/codigos-qrcore.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/core/codigos-qrcore/codigos-qrcore.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"codigocore\">\n  <div class=\"codigocore__datosbasicos\">\n        <div class=\"codigocore__datosbasicos__icon\"> <i class=\"fa fa-qrcode fa-4x\" aria-hidden=\"true\"></i> </div>\n        <div class=\"codigocore__datosbasicos__col\">\n          <div class=\"codigocore__datosbasicos__col__registro\">\n            <div class=\"codigocore__datosbasicos__col__registro__lbl\">\n                Producto:\n            </div>\n            <div class=\"codigocore__datosbasicos__col__registro__campo\">\n                <app-autocomplete  [tabla]=\"'producto'\" [maxletras]=\"3\" (obtenerValor)=\"seleccionarProducto($event)\"></app-autocomplete>\n            </div>\n          </div>\n        </div>\n        <div class=\"codigocore__datosbasicos__col\">\n          <div class=\"codigocore__datosbasicos__col__registro\">\n            <div class=\"codigocore__datosbasicos__col__registro__lbl\">\n                Cantidad:\n            </div>\n            <div class=\"codigocore__datosbasicos__col__registro__campo\">\n                <input type=\"number\" name=\"valor\" [(ngModel)]=\"valor\">\n            </div>\n          </div>\n        </div>\n        <div class=\"codigocore__datosbasicos__col\">\n          <div class=\"codigocore__datosbasicos__col__registro\">\n            <div class=\"codigocore__datosbasicos__col__registro__lbl\">\n                &nbsp;\n            </div>\n            <div class=\"codigocore__datosbasicos__col__registro__campo\">\n                <button (click)=\"agregarProducto()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Agregar</button>\n            </div>\n          </div>\n        </div>\n    </div>\n  <div class=\"codigocore__tabla\">\n        <table>\n                <tr>\n                    <th>Producto</th>\n                    <th>Cnatidad</th>\n                    <th>Opciones</th>\n                </tr>\n                <tr *ngFor=\"let qr of qrs\">\n                  <td>{{qr.producto.nombre}}</td>\n                  <td>{{qr.cantidad}}</td>\n                  <td>\n                    <i class=\"fa fa-times fa-2x\" aria-hidden=\"true\" (click)=\"eliminarProducto(qr)\"></i> \n                  </td>\n                </tr>\n              </table>\n              <div class=\"codigocore__tabla__botones\">\n                <button (click)=\"guardar()\"><i class=\"fa fa-save fa-2x\" aria-hidden=\"true\"></i> Guardar</button>\n            </div>\n  </div>\n  <div class=\"codigocore__botones\">\n      <button (click)=\"imprimir()\"><i class=\"fa fa-print fa-2x\" aria-hidden=\"true\"></i> Imprimir</button>\n    </div>\n  <div class=\"codigocore__codigosqr\" id=\"qrsComponent\" style=\"display: inherit;\n  float:left;\n  height: 350px;\n  width: 1000px;\n  margin-top: 20px;\n  background: white;\n  overflow-x: hidden;\n  overflow-y: scroll;        \n  -webkit-box-shadow: 0px 1px 5px 0px rgba(173,173,173,1);\n  -moz-box-shadow: 0px 1px 5px 0px rgba(173,173,173,1);\n  box-shadow: 0px 1px 5px 0px rgba(173,173,173,1);\">\n    <div *ngFor=\"let qr of qrs\" class=\"codigocore__codigosqr__code\" style=\"margin: 20px;\n    width: 200px;\n    height: 200px;\">\n        <qrcode  [qrdata]=\"qr.idunico.toString()\" [size]=\"200\" [level]=\"'M'\"></qrcode>\n        {{qr.idunico}}\n    </div>\n    \n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/core/codigos-qrcore/codigos-qrcore.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/core/codigos-qrcore/codigos-qrcore.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".codigocore {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  padding: 10px;\n  font-size: 12px;\n  margin-top: 35px; }\n  .codigocore__datosbasicos {\n    display: flex;\n    flex-direction: row;\n    height: 150px;\n    width: 95%;\n    background: white;\n    box-shadow: 0px 1px 5px 0px #adadad; }\n  .codigocore__datosbasicos__icon {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      width: 10%;\n      height: 100%;\n      padding-left: 10px;\n      color: #7E2662; }\n  .codigocore__datosbasicos__col {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      padding: 10px;\n      width: 30%;\n      height: 90%; }\n  .codigocore__datosbasicos__col__registro {\n        width: 97%;\n        margin-bottom: 10px;\n        display: flex;\n        flex-direction: row; }\n  .codigocore__datosbasicos__col__registro__lbl {\n          width: 30%; }\n  .codigocore__datosbasicos__col__registro__campo {\n          width: 70%; }\n  .codigocore__datosbasicos__col__registro__campo input {\n            width: 90%; }\n  .codigocore__tabla {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 350px;\n    width: 95%;\n    margin-top: 20px;\n    background: white;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    box-shadow: 0px 1px 5px 0px #adadad; }\n  .codigocore__tabla__botones {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 100%;\n      padding: 20px;\n      cursor: pointer; }\n  .codigocore__botones {\n    margin-top: 20px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 95%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background: white;\n    cursor: pointer; }\n  .codigocore__codigosqr {\n    display: inherit;\n    float: left;\n    height: 900px;\n    width: 500px;\n    margin-top: 20px;\n    background: white;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    box-shadow: 0px 1px 5px 0px #adadad; }\n  .codigocore__codigosqr__code {\n      margin: 20px;\n      width: 200px;\n      height: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyby9Qcm9qZWN0cy9Bbmd1bGFyL09yaWdpbmFsQXBwL3NyYy9hcHAvY29yZS9jb2RpZ29zLXFyY29yZS9jb2RpZ29zLXFyY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBQ2hCO0lBQ0ksYUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtJQUdqQixtQ0FBK0MsRUFBQTtFQUMvQztNQUNJLGFBQVk7TUFDWixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixVQUFVO01BQ1YsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixjQUFjLEVBQUE7RUFFbEI7TUFDSSxhQUFZO01BQ1osc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLFVBQVU7TUFDVixXQUFXLEVBQUE7RUFDWDtRQUNJLFVBQVU7UUFDVixtQkFBbUI7UUFDbkIsYUFBWTtRQUNaLG1CQUFtQixFQUFBO0VBQ25CO1VBQ0ksVUFBVSxFQUFBO0VBRWQ7VUFDSSxVQUFVLEVBQUE7RUFEYjtZQUdPLFVBQVUsRUFBQTtFQU85QjtJQUNJLGFBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBR2xCLG1DQUErQyxFQUFBO0VBQy9DO01BQ0ksYUFBWTtNQUNaLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsV0FBVztNQUNYLGFBQWE7TUFDYixlQUFlLEVBQUE7RUFJdkI7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGFBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZSxFQUFBO0VBR25CO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUdsQixtQ0FBK0MsRUFBQTtFQUMvQztNQUNJLFlBQVk7TUFDWixZQUFZO01BQ1osYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb2RpZ29zLXFyY29yZS9jb2RpZ29zLXFyY29yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2RpZ29jb3Jle1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICZfX2RhdG9zYmFzaWNvcyB7ICAgICAgICBcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgICAgICAgIFxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgxNzMsMTczLDE3MywxKTtcbiAgICAgICAgJl9faWNvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjN0UyNjYyO1xuICAgICAgICB9XG4gICAgICAgICZfX2NvbCB7XG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgICAgICZfX3JlZ2lzdHJvIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTclO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgJl9fbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJl9fY2FtcG8ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX190YWJsYSB7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAgICAgICAgXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMTczLDE3MywxNzMsMSk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMTczLDE3MywxNzMsMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xuICAgICAgICAmX19ib3RvbmVzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2JvdG9uZXMge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgICZfX2NvZGlnb3NxciB7XG4gICAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgIGhlaWdodDogOTAwcHg7XG4gICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAgICAgICAgXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMTczLDE3MywxNzMsMSk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMTczLDE3MywxNzMsMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xuICAgICAgICAmX19jb2Rle1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/codigos-qrcore/codigos-qrcore.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/codigos-qrcore/codigos-qrcore.component.ts ***!
  \*****************************************************************/
/*! exports provided: CodigosQRCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodigosQRCoreComponent", function() { return CodigosQRCoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _servicios_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/firebase.service */ "./src/app/servicios/firebase.service.ts");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_4__);





var CodigosQRCoreComponent = /** @class */ (function () {
    function CodigosQRCoreComponent(service) {
        this.service = service;
        this.qrs = [];
    }
    CodigosQRCoreComponent.prototype.ngOnInit = function () {
    };
    CodigosQRCoreComponent.prototype.seleccionarProducto = function (data) {
        console.log(data);
        this.productoSel = data;
    };
    CodigosQRCoreComponent.prototype.agregarProducto = function () {
        for (var i = 0; i < this.valor; i++) {
            this.productoSel['idunico'] = guid_typescript__WEBPACK_IMPORTED_MODULE_4__["Guid"].create().toString();
            this.productoSel['cantidad'] = 1;
            this.qrs.push({ producto: this.productoSel });
        }
    };
    CodigosQRCoreComponent.prototype.imprimir = function () {
        var printContent = document.getElementById("qrsComponent");
        var WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
        WindowPrt.document.write('<html><head><title>Codigos</title>');
        WindowPrt.document.write('<style>.codigocore__codigosqr{display: inherit;');
        WindowPrt.document.write('float:left;');
        WindowPrt.document.write('height: 350px;');
        WindowPrt.document.write('width: 1000px;');
        WindowPrt.document.write('margin-top: 20px;');
        WindowPrt.document.write('background: white;');
        WindowPrt.document.write('overflow-x: hidden;');
        WindowPrt.document.write('overflow-y: scroll;   }    ');
        WindowPrt.document.write('.codigocore__codigosqr__code{');
        WindowPrt.document.write('    margin: 20px;');
        WindowPrt.document.write('    width: 200px;');
        WindowPrt.document.write('    height: 200px;');
        WindowPrt.document.write('}</style>');
        WindowPrt.document.write('</head><body >');
        WindowPrt.document.write(printContent.innerHTML);
        WindowPrt.document.write('</body></html>');
        WindowPrt.document.close();
        WindowPrt.focus();
        WindowPrt.print();
        WindowPrt.close();
    };
    CodigosQRCoreComponent.prototype.eliminarProducto = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: '',
            text: "Esta seguro de eliminar el producto?",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#7E2662',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
        }).then(function (result) {
            _this.qrs = _this.qrs.filter(function (data) {
                return data != id;
            });
        });
    };
    CodigosQRCoreComponent.prototype.guardar = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: '',
            text: "Desea guardar estos codigos QR?",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#7E2662',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
        }).then(function (result) {
            _this.service.guardarDatos('qr', _this.qrs);
        });
    };
    CodigosQRCoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-codigos-qrcore',
            template: __webpack_require__(/*! ./codigos-qrcore.component.html */ "./src/app/core/codigos-qrcore/codigos-qrcore.component.html"),
            styles: [__webpack_require__(/*! ./codigos-qrcore.component.scss */ "./src/app/core/codigos-qrcore/codigos-qrcore.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]])
    ], CodigosQRCoreComponent);
    return CodigosQRCoreComponent;
}());



/***/ }),

/***/ "./src/app/core/distribuidor-core/distribuidor-core.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/core/distribuidor-core/distribuidor-core.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"distribuidorcore\">\n    <div class=\"distribuidorcore__datosbasicos\">\n        <div class=\"distribuidorcore__datosbasicos__icon\"> <i class=\"fa fa-building fa-4x\" aria-hidden=\"true\"></i> </div>\n        <div class=\"distribuidorcore__datosbasicos__col\">\n          <div class=\"distribuidorcore__datosbasicos__col__registro\">\n            <div class=\"distribuidorcore__datosbasicos__col__registro__lbl\">\n                Nombre:\n            </div>\n            <div class=\"distribuidorcore__datosbasicos__col__registro__campo\">\n                <input type=\"text\" name=\"nombre\" [(ngModel)]=\"distribuidor.nombre\">\n            </div>\n          </div>\n          <div class=\"distribuidorcore__datosbasicos__col__registro\">\n                <div class=\"distribuidorcore__datosbasicos__col__registro__lbl\">\n                    Nit:\n                </div>\n                <div class=\"distribuidorcore__datosbasicos__col__registro__campo\">\n                    <input type=\"text\" name=\"codigo\" [(ngModel)]=\"distribuidor.codigo\">\n                </div>\n            </div>\n          <div class=\"distribuidorcore__datosbasicos__col__registro\">\n              <div class=\"distribuidorcore__datosbasicos__col__registro__lbl\">\n                  Direccion:\n              </div>\n              <div class=\"distribuidorcore__datosbasicos__col__registro__campo\">\n                  <input type=\"text\" name=\"direccion\" [(ngModel)]=\"distribuidor.direccion\">\n              </div>\n          </div>\n          <div class=\"distribuidorcore__datosbasicos__col__registro\">\n              <div class=\"distribuidorcore__datosbasicos__col__registro__lbl\">\n                  Telefono:\n              </div>\n              <div class=\"distribuidorcore__datosbasicos__col__registro__campo\">\n                  <input type=\"text\" name=\"telefono\" [(ngModel)]=\"distribuidor.telefono\">\n              </div>\n          </div>\n          \n        </div>\n        <div class=\"distribuidorcore__datosbasicos__col\">\n            <div class=\"distribuidorcore__datosbasicos__col__registro\">\n              <div class=\"distribuidorcore__datosbasicos__col__registro__lbl\">\n                  &nbsp;\n              </div>\n              <div class=\"distribuidorcore__datosbasicos__col__registro__campo\">\n                  <button (click)=\"guardar()\"><i class=\"fa fa-save\" aria-hidden=\"true\"></i> Guardar</button>\n              </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/core/distribuidor-core/distribuidor-core.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/core/distribuidor-core/distribuidor-core.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".distribuidorcore {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  padding: 10px;\n  font-size: 12px;\n  margin-top: 35px; }\n  .distribuidorcore__datosbasicos {\n    display: flex;\n    flex-direction: row;\n    height: 200px;\n    width: 95%;\n    background: white;\n    box-shadow: 0px 1px 5px 0px #adadad; }\n  .distribuidorcore__datosbasicos__icon {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      width: 10%;\n      height: 100%;\n      padding-left: 10px;\n      color: #7E2662; }\n  .distribuidorcore__datosbasicos__col {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      padding: 10px;\n      width: 30%;\n      height: 90%; }\n  .distribuidorcore__datosbasicos__col__registro {\n        width: 97%;\n        margin-bottom: 10px;\n        display: flex;\n        flex-direction: row; }\n  .distribuidorcore__datosbasicos__col__registro__lbl {\n          width: 30%; }\n  .distribuidorcore__datosbasicos__col__registro__campo {\n          width: 70%; }\n  .distribuidorcore__datosbasicos__col__registro__campo input {\n            width: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyby9Qcm9qZWN0cy9Bbmd1bGFyL09yaWdpbmFsQXBwL3NyYy9hcHAvY29yZS9kaXN0cmlidWlkb3ItY29yZS9kaXN0cmlidWlkb3ItY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBQ2hCO0lBQ0ksYUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtJQUdqQixtQ0FBK0MsRUFBQTtFQUMvQztNQUNJLGFBQVk7TUFDWixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixVQUFVO01BQ1YsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixjQUFjLEVBQUE7RUFFbEI7TUFDSSxhQUFZO01BQ1osc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLFVBQVU7TUFDVixXQUFXLEVBQUE7RUFDWDtRQUNJLFVBQVU7UUFDVixtQkFBbUI7UUFDbkIsYUFBWTtRQUNaLG1CQUFtQixFQUFBO0VBQ25CO1VBQ0ksVUFBVSxFQUFBO0VBRWQ7VUFDSSxVQUFVLEVBQUE7RUFEYjtZQUdPLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZGlzdHJpYnVpZG9yLWNvcmUvZGlzdHJpYnVpZG9yLWNvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzdHJpYnVpZG9yY29yZXtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICAmX19kYXRvc2Jhc2ljb3MgeyAgICAgICAgXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7ICAgICAgICBcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgxNzMsMTczLDE3MywxKTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgxNzMsMTczLDE3MywxKTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMTczLDE3MywxNzMsMSk7XG4gICAgICAgICZfX2ljb24ge1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzdFMjY2MjtcbiAgICAgICAgfVxuICAgICAgICAmX19jb2wge1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICAmX19yZWdpc3RybyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDk3JTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICZfX2xibCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICZfX2NhbXBvIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/distribuidor-core/distribuidor-core.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/distribuidor-core/distribuidor-core.component.ts ***!
  \***********************************************************************/
/*! exports provided: DistribuidorCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistribuidorCoreComponent", function() { return DistribuidorCoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicios_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/firebase.service */ "./src/app/servicios/firebase.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var DistribuidorCoreComponent = /** @class */ (function () {
    function DistribuidorCoreComponent(servicio, route) {
        this.servicio = servicio;
        this.route = route;
        this.distribuidor = { id: '', codigo: '', nombre: '', direccion: '', telefono: '' };
    }
    DistribuidorCoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var editable = params.get("id");
            if (editable) {
                _this.servicio.obtener('distribuidor').subscribe(function (usuario) {
                    _this.distribuidor = usuario.find(function (data) {
                        return data.id === editable;
                    });
                });
            }
        });
    };
    DistribuidorCoreComponent.prototype.guardar = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: '',
            text: "Desea agregar este Distribuidor?",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#7E2662',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                if (_this.distribuidor.id != '') {
                    _this.servicio.actualizarDatos('distribuidor', _this.distribuidor, _this.distribuidor.id);
                }
                else {
                    _this.servicio.guardarDatos('distribuidor', _this.distribuidor);
                }
            }
        });
    };
    DistribuidorCoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-distribuidor-core',
            template: __webpack_require__(/*! ./distribuidor-core.component.html */ "./src/app/core/distribuidor-core/distribuidor-core.component.html"),
            styles: [__webpack_require__(/*! ./distribuidor-core.component.scss */ "./src/app/core/distribuidor-core/distribuidor-core.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], DistribuidorCoreComponent);
    return DistribuidorCoreComponent;
}());



/***/ }),

/***/ "./src/app/core/empresa-core/empresa-core.component.html":
/*!***************************************************************!*\
  !*** ./src/app/core/empresa-core/empresa-core.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"empresacore\">\n    <div class=\"empresacore__datosbasicos\">\n        <div class=\"empresacore__datosbasicos__icon\"> <i class=\"fa fa-building fa-4x\" aria-hidden=\"true\"></i> </div>\n        <div class=\"empresacore__datosbasicos__col\">\n          <div class=\"empresacore__datosbasicos__col__registro\">\n            <div class=\"empresacore__datosbasicos__col__registro__lbl\">\n                Nombre:\n            </div>\n            <div class=\"empresacore__datosbasicos__col__registro__campo\">\n                <input type=\"text\" name=\"nombre\" [(ngModel)]=\"empresa.nombre\">\n            </div>\n          </div>\n          <div class=\"empresacore__datosbasicos__col__registro\">\n              <div class=\"empresacore__datosbasicos__col__registro__lbl\">\n                  Direccion:\n              </div>\n              <div class=\"empresacore__datosbasicos__col__registro__campo\">\n                  <input type=\"text\" name=\"direccion\" [(ngModel)]=\"empresa.direccion\" >\n              </div>\n          </div>\n          <div class=\"empresacore__datosbasicos__col__registro\">\n              <div class=\"empresacore__datosbasicos__col__registro__lbl\">\n                  Telefono:\n              </div>\n              <div class=\"empresacore__datosbasicos__col__registro__campo\">\n                  <input type=\"text\" name=\"telefono\" [(ngModel)]=\"empresa.telefono\">\n              </div>\n          </div>\n          <div class=\"empresacore__datosbasicos__col__registro\">\n              <div class=\"empresacore__datosbasicos__col__registro__lbl\">\n                  Email:\n              </div>\n              <div class=\"empresacore__datosbasicos__col__registro__campo\">\n                  <input type=\"text\" name=\"email\" [(ngModel)]=\"empresa.email\">\n              </div>\n          </div>\n        </div>\n        <div class=\"empresacore__datosbasicos__col\">\n            <div class=\"empresacore__datosbasicos__col__registro\">\n              <div class=\"empresacore__datosbasicos__col__registro__lbl\">\n                  Pagina web:\n              </div>\n              <div class=\"empresacore__datosbasicos__col__registro__campo\">\n                  <input type=\"text\" name=\"web\" [(ngModel)]=\"empresa.web\">\n              </div>\n            </div>\n            <div class=\"empresacore__datosbasicos__col__registro\">\n              <div class=\"empresacore__datosbasicos__col__registro__lbl\">\n                  Identificacion Representante:\n              </div>\n              <div class=\"empresacore__datosbasicos__col__registro__campo\">\n                  <input type=\"text\" name=\"ideRepresentante\" [(ngModel)]=\"empresa.ideRepresentante\">\n              </div>\n            </div>\n            <div class=\"empresacore__datosbasicos__col__registro\">\n              <div class=\"empresacore__datosbasicos__col__registro__lbl\">\n                  Nombre Representante:\n              </div>\n              <div class=\"empresacore__datosbasicos__col__registro__campo\">\n                  <input type=\"text\" name=\"representante\" [(ngModel)]=\"empresa.representante\">\n              </div>\n            </div>\n            <div class=\"empresacore__datosbasicos__col__registro\">\n              <div class=\"empresacore__datosbasicos__col__registro__lbl\">\n                  Telefono Representante:\n              </div>\n              <div class=\"empresacore__datosbasicos__col__registro__campo\">\n                  <input type=\"text\" name=\"telefonoRepresentante\" [(ngModel)]=\"empresa.telefonoRepresentante\">\n              </div>\n            </div>\n        </div>\n        <div class=\"empresacore__datosbasicos__col\">\n            <div class=\"empresacore__datosbasicos__col__registro\">\n              <div class=\"empresacore__datosbasicos__col__registro__lbl\">\n                  &nbsp;\n              </div>\n              <div class=\"empresacore__datosbasicos__col__registro__campo\">\n                  <button (click)=\"guardarEmpresa()\"><i class=\"fa fa-save\" aria-hidden=\"true\"></i> Guardar</button>\n              </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/core/empresa-core/empresa-core.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/core/empresa-core/empresa-core.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".empresacore {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  padding: 10px;\n  font-size: 12px;\n  margin-top: 35px; }\n  .empresacore__datosbasicos {\n    display: flex;\n    flex-direction: row;\n    height: 200px;\n    width: 95%;\n    background: white;\n    box-shadow: 0px 1px 5px 0px #adadad; }\n  .empresacore__datosbasicos__icon {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      width: 10%;\n      height: 100%;\n      padding-left: 10px;\n      color: #7E2662; }\n  .empresacore__datosbasicos__col {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      padding: 10px;\n      width: 30%;\n      height: 90%; }\n  .empresacore__datosbasicos__col__registro {\n        width: 97%;\n        margin-bottom: 10px;\n        display: flex;\n        flex-direction: row; }\n  .empresacore__datosbasicos__col__registro__lbl {\n          width: 30%; }\n  .empresacore__datosbasicos__col__registro__campo {\n          width: 70%; }\n  .empresacore__datosbasicos__col__registro__campo input {\n            width: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyby9Qcm9qZWN0cy9Bbmd1bGFyL09yaWdpbmFsQXBwL3NyYy9hcHAvY29yZS9lbXByZXNhLWNvcmUvZW1wcmVzYS1jb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7RUFDaEI7SUFDSSxhQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixVQUFVO0lBQ1YsaUJBQWlCO0lBR2pCLG1DQUErQyxFQUFBO0VBQy9DO01BQ0ksYUFBWTtNQUNaLHNCQUFzQjtNQUN0Qix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLFVBQVU7TUFDVixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGNBQWMsRUFBQTtFQUVsQjtNQUNJLGFBQVk7TUFDWixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsVUFBVTtNQUNWLFdBQVcsRUFBQTtFQUNYO1FBQ0ksVUFBVTtRQUNWLG1CQUFtQjtRQUNuQixhQUFZO1FBQ1osbUJBQW1CLEVBQUE7RUFDbkI7VUFDSSxVQUFVLEVBQUE7RUFFZDtVQUNJLFVBQVUsRUFBQTtFQURiO1lBR08sVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS9lbXByZXNhLWNvcmUvZW1wcmVzYS1jb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtcHJlc2Fjb3Jle1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICZfX2RhdG9zYmFzaWNvcyB7ICAgICAgICBcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgICAgICAgIFxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgxNzMsMTczLDE3MywxKTtcbiAgICAgICAgJl9faWNvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjN0UyNjYyO1xuICAgICAgICB9XG4gICAgICAgICZfX2NvbCB7XG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgICAgICZfX3JlZ2lzdHJvIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTclO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgJl9fbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJl9fY2FtcG8ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/core/empresa-core/empresa-core.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/empresa-core/empresa-core.component.ts ***!
  \*************************************************************/
/*! exports provided: EmpresaCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresaCoreComponent", function() { return EmpresaCoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/firebase.service */ "./src/app/servicios/firebase.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var EmpresaCoreComponent = /** @class */ (function () {
    function EmpresaCoreComponent(servicio) {
        this.servicio = servicio;
        this.empresa = { id: '', nombre: '', nit: '', direccion: '', telefono: '', email: '', web: '', ideRepresentante: '', representante: '', telefonoRepresentante: '' };
    }
    EmpresaCoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servicio.obtener('empresa').subscribe(function (emp) {
            if (emp.length > 0) {
                _this.empresa = emp[0];
                console.log(_this.empresa);
            }
        });
    };
    EmpresaCoreComponent.prototype.guardarEmpresa = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: '',
            text: "Desea agregar esta empresa?",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#7E2662',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                if (_this.empresa.id != '') {
                    _this.servicio.actualizarDatos('empresa', _this.empresa, _this.empresa.id);
                }
                else {
                    _this.servicio.guardarDatos('empresa', _this.empresa);
                }
            }
        });
    };
    EmpresaCoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empresa-core',
            template: __webpack_require__(/*! ./empresa-core.component.html */ "./src/app/core/empresa-core/empresa-core.component.html"),
            styles: [__webpack_require__(/*! ./empresa-core.component.scss */ "./src/app/core/empresa-core/empresa-core.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], EmpresaCoreComponent);
    return EmpresaCoreComponent;
}());



/***/ }),

/***/ "./src/app/core/lista-distribuidor-core/lista-distribuidor-core.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/core/lista-distribuidor-core/lista-distribuidor-core.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lista\">\n  \n    <div class=\"lista__content\">\n        <div class=\"lista__content__busqueda\">\n            Buscar: <input type=\"text\" name=\"buscarText\"  [(ngModel)]=\"buscarText\" (keyup)=\"buscar()\">\n            <button [routerLink]=\"['/newDistribuidorCore']\" ><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Agregar</button>\n          </div>\n        <table>\n            <tr>\n                <th>Nit</th>\n                <th>Nombre</th>\n                <th>Opciones</th>\n            </tr>\n            <tr *ngFor=\"let distri of distribuidor\">\n                <td>{{distri.codigo}}</td>\n                <td>{{distri.nombre}}</td>\n                <td>\n                  <i [routerLink]=\"['/editdistribuidorCore', distri.id]\"  class=\"fa fa-pencil fa-2x\" aria-hidden=\"true\"></i>  \n                </td>\n              </tr>\n          </table>\n    </div>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/core/lista-distribuidor-core/lista-distribuidor-core.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/core/lista-distribuidor-core/lista-distribuidor-core.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lista {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  padding: 10px;\n  font-size: 12px;\n  margin-top: 35px; }\n  .lista__content {\n    padding-top: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 90%;\n    width: 95%;\n    background: white;\n    box-shadow: 0px 1px 5px 0px #adadad; }\n  .lista__content__busqueda {\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-end;\n      padding-right: 102px; }\n  .lista__content__busqueda input {\n        width: 20%; }\n  .lista__content__busqueda button {\n        width: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyby9Qcm9qZWN0cy9Bbmd1bGFyL09yaWdpbmFsQXBwL3NyYy9hcHAvY29yZS9saXN0YS1kaXN0cmlidWlkb3ItY29yZS9saXN0YS1kaXN0cmlidWlkb3ItY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBQ2hCO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0lBR2pCLG1DQUErQyxFQUFBO0VBQy9DO01BQ0ksV0FBVztNQUNYLGFBQVk7TUFDWixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLHlCQUF5QjtNQUN6QixvQkFBb0IsRUFBQTtFQU52QjtRQVFPLFVBQVUsRUFBQTtFQVJqQjtRQVdPLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGlzdGEtZGlzdHJpYnVpZG9yLWNvcmUvbGlzdGEtZGlzdHJpYnVpZG9yLWNvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdGEge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICZfX2NvbnRlbnQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7ICAgICAgICBcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgxNzMsMTczLDE3MywxKTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgxNzMsMTczLDE3MywxKTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMTczLDE3MywxNzMsMSk7XG4gICAgICAgICZfX2J1c3F1ZWRhe1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMDJweDtcbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/lista-distribuidor-core/lista-distribuidor-core.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/core/lista-distribuidor-core/lista-distribuidor-core.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ListaDistribuidorCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaDistribuidorCoreComponent", function() { return ListaDistribuidorCoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicios_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/firebase.service */ "./src/app/servicios/firebase.service.ts");



var ListaDistribuidorCoreComponent = /** @class */ (function () {
    function ListaDistribuidorCoreComponent(servicio) {
        this.servicio = servicio;
        this.distribuidor = [];
        this.distribuidorAll = [];
    }
    ListaDistribuidorCoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servicio.obtener('distribuidor').subscribe(function (data) {
            if (data.length > 0) {
                _this.distribuidorAll = data;
                _this.distribuidor = _this.distribuidorAll;
            }
        });
    };
    ListaDistribuidorCoreComponent.prototype.buscar = function () {
        var _this = this;
        if (this.buscarText == '') {
            this.distribuidor = this.distribuidorAll;
        }
        this.distribuidor = this.distribuidorAll.filter(function (data) {
            return data.nombre.toLowerCase().indexOf(_this.buscarText.toLowerCase()) >= 0;
        });
    };
    ListaDistribuidorCoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista-distribuidor-core',
            template: __webpack_require__(/*! ./lista-distribuidor-core.component.html */ "./src/app/core/lista-distribuidor-core/lista-distribuidor-core.component.html"),
            styles: [__webpack_require__(/*! ./lista-distribuidor-core.component.scss */ "./src/app/core/lista-distribuidor-core/lista-distribuidor-core.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], ListaDistribuidorCoreComponent);
    return ListaDistribuidorCoreComponent;
}());



/***/ }),

/***/ "./src/app/core/lista-productos-core/lista-productos-core.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/core/lista-productos-core/lista-productos-core.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lista\">\n  \n  <div class=\"lista__content\">\n      <div class=\"lista__content__busqueda\">\n          Buscar: <input type=\"text\" name=\"buscarText\"  [(ngModel)]=\"buscarText\" (keyup)=\"buscar()\">\n          <button [routerLink]=\"['/newProductoCore']\" ><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Agregar</button>\n        </div>\n      <table>\n          <tr>\n              <th>Codigo</th>\n              <th>Nombre</th>\n              <th>Opciones</th>\n          </tr>\n          <tr *ngFor=\"let producto of productos\">\n              <td>{{producto.id}}</td>\n              <td>{{producto.nombre}}</td>\n              <td>\n                <i [routerLink]=\"['/editProductoCore', producto.id]\"  class=\"fa fa-pencil fa-2x\" aria-hidden=\"true\"></i>  \n              </td>\n            </tr>\n        </table>\n  </div>\n\n  \n</div>\n"

/***/ }),

/***/ "./src/app/core/lista-productos-core/lista-productos-core.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/core/lista-productos-core/lista-productos-core.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lista {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  padding: 10px;\n  font-size: 12px;\n  margin-top: 35px; }\n  .lista__content {\n    padding-top: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 90%;\n    width: 95%;\n    background: white;\n    box-shadow: 0px 1px 5px 0px #adadad; }\n  .lista__content__busqueda {\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-end;\n      padding-right: 102px; }\n  .lista__content__busqueda input {\n        width: 20%; }\n  .lista__content__busqueda button {\n        width: 10%; }\n  .lista__boton {\n    color: white;\n    background: #7E2662;\n    position: absolute;\n    top: 70%;\n    left: 95%;\n    padding: 20px;\n    border-radius: 50%;\n    -webkit-border-radius: 50%;\n    -moz-border-radius: 50%;\n    -ms-border-radius: 50%;\n    -o-border-radius: 50%;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyby9Qcm9qZWN0cy9Bbmd1bGFyL09yaWdpbmFsQXBwL3NyYy9hcHAvY29yZS9saXN0YS1wcm9kdWN0b3MtY29yZS9saXN0YS1wcm9kdWN0b3MtY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBQ2hCO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0lBR2pCLG1DQUErQyxFQUFBO0VBQy9DO01BQ0ksV0FBVztNQUNYLGFBQVk7TUFDWixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLHlCQUF5QjtNQUN6QixvQkFBb0IsRUFBQTtFQU52QjtRQVFPLFVBQVUsRUFBQTtFQVJqQjtRQVdPLFVBQVUsRUFBQTtFQUt0QjtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFFBQU87SUFDUCxTQUFTO0lBQ1QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS9saXN0YS1wcm9kdWN0b3MtY29yZS9saXN0YS1wcm9kdWN0b3MtY29yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0YSB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgICAgICAgIFxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgxNzMsMTczLDE3MywxKTtcbiAgICAgICAgJl9fYnVzcXVlZGF7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwMnB4O1xuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19ib3RvbiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzdFMjY2MjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6NzAlO1xuICAgICAgICBsZWZ0OiA5NSU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/core/lista-productos-core/lista-productos-core.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core/lista-productos-core/lista-productos-core.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListaProductosCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProductosCoreComponent", function() { return ListaProductosCoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicios_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/firebase.service */ "./src/app/servicios/firebase.service.ts");



var ListaProductosCoreComponent = /** @class */ (function () {
    function ListaProductosCoreComponent(servicio) {
        this.servicio = servicio;
        this.productos = [];
        this.productosAll = [];
    }
    ListaProductosCoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servicio.obtener('producto').subscribe(function (data) {
            if (data.length > 0) {
                _this.productosAll = data;
                _this.productos = _this.productosAll;
            }
        });
    };
    ListaProductosCoreComponent.prototype.buscar = function () {
        var _this = this;
        if (this.buscarText == '') {
            this.productos = this.productosAll;
        }
        this.productos = this.productosAll.filter(function (data) {
            return data.nombre.toLowerCase().indexOf(_this.buscarText.toLowerCase()) >= 0;
        });
    };
    ListaProductosCoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista-productos-core',
            template: __webpack_require__(/*! ./lista-productos-core.component.html */ "./src/app/core/lista-productos-core/lista-productos-core.component.html"),
            styles: [__webpack_require__(/*! ./lista-productos-core.component.scss */ "./src/app/core/lista-productos-core/lista-productos-core.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], ListaProductosCoreComponent);
    return ListaProductosCoreComponent;
}());



/***/ }),

/***/ "./src/app/core/lista-usuarios-core/lista-usuarios-core.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/core/lista-usuarios-core/lista-usuarios-core.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lista\">\n  \n    <div class=\"lista__content\">\n        <div class=\"lista__content__busqueda\">\n            Buscar: <input type=\"text\" name=\"buscarText\" [(ngModel)]=\"buscarText\" (keyup)=\"buscar()\">\n            <button [routerLink]=\"['/newUsuarioCore']\" ><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Agregar</button>\n          </div>\n        <table>\n            <tr>\n                <th>Email</th>\n                <th>Nombre</th>\n                <th>Opciones</th>\n            </tr>\n            <tr *ngFor=\"let usuario of usuarios\">\n              <td>{{usuario.email}}</td>\n              <td>{{usuario.nombre}}</td>\n              <td>\n                <i [routerLink]=\"['/editUsuarioCore', usuario.id]\"  class=\"fa fa-pencil fa-2x\" aria-hidden=\"true\"></i>  \n              </td>\n            </tr>\n          </table>\n    </div>\n  \n \n  </div>\n  "

/***/ }),

/***/ "./src/app/core/lista-usuarios-core/lista-usuarios-core.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/core/lista-usuarios-core/lista-usuarios-core.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lista {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  padding: 10px;\n  font-size: 12px;\n  margin-top: 35px; }\n  .lista__content {\n    padding-top: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 90%;\n    width: 95%;\n    background: white;\n    box-shadow: 0px 1px 5px 0px #adadad; }\n  .lista__content__busqueda {\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-end;\n      padding-right: 102px; }\n  .lista__content__busqueda input {\n        width: 20%; }\n  .lista__content__busqueda button {\n        width: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyby9Qcm9qZWN0cy9Bbmd1bGFyL09yaWdpbmFsQXBwL3NyYy9hcHAvY29yZS9saXN0YS11c3Vhcmlvcy1jb3JlL2xpc3RhLXVzdWFyaW9zLWNvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtFQUNoQjtJQUNJLGlCQUFpQjtJQUNqQixhQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUdqQixtQ0FBK0MsRUFBQTtFQUMvQztNQUNJLFdBQVc7TUFDWCxhQUFZO01BQ1osbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIsb0JBQW9CLEVBQUE7RUFOdkI7UUFRTyxVQUFVLEVBQUE7RUFSakI7UUFXTyxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2xpc3RhLXVzdWFyaW9zLWNvcmUvbGlzdGEtdXN1YXJpb3MtY29yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0YSB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgICAgICAgIFxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgxNzMsMTczLDE3MywxKTtcbiAgICAgICAgJl9fYnVzcXVlZGF7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwMnB4O1xuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/lista-usuarios-core/lista-usuarios-core.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/lista-usuarios-core/lista-usuarios-core.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListaUsuariosCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaUsuariosCoreComponent", function() { return ListaUsuariosCoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/firebase.service */ "./src/app/servicios/firebase.service.ts");



var ListaUsuariosCoreComponent = /** @class */ (function () {
    function ListaUsuariosCoreComponent(servicio) {
        this.servicio = servicio;
        this.usuarios = [];
        this.usuariosAll = [];
    }
    ListaUsuariosCoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servicio.obtener('usuariocore').subscribe(function (usuario) {
            if (usuario.length > 0) {
                _this.usuariosAll = usuario;
                _this.usuarios = _this.usuariosAll;
            }
        });
    };
    ListaUsuariosCoreComponent.prototype.buscar = function () {
        var _this = this;
        if (this.buscarText == '') {
            this.usuarios = this.usuariosAll;
        }
        this.usuarios = this.usuariosAll.filter(function (data) {
            return data.nombre.toLowerCase().indexOf(_this.buscarText.toLowerCase()) >= 0;
        });
    };
    ListaUsuariosCoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista-usuarios-core',
            template: __webpack_require__(/*! ./lista-usuarios-core.component.html */ "./src/app/core/lista-usuarios-core/lista-usuarios-core.component.html"),
            styles: [__webpack_require__(/*! ./lista-usuarios-core.component.scss */ "./src/app/core/lista-usuarios-core/lista-usuarios-core.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], ListaUsuariosCoreComponent);
    return ListaUsuariosCoreComponent;
}());



/***/ }),

/***/ "./src/app/core/productos-core/productos-core.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/core/productos-core/productos-core.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"productocore\">\n  <div class=\"productocore__datosbasicos\">\n    <div class=\"productocore__datosbasicos__icon\"> <i class=\"fa fa-product-hunt fa-4x\" aria-hidden=\"true\"></i> </div>\n    <div class=\"productocore__datosbasicos__col\">\n      <div class=\"productocore__datosbasicos__col__registro\">\n        <div class=\"productocore__datosbasicos__col__registro__lbl\">\n            Nombre:\n        </div>\n        <div class=\"productocore__datosbasicos__col__registro__campo\">\n            <input type=\"text\" name=\"nombre\" [(ngModel)]=\"producto.nombre\">\n        </div>\n      </div>\n      <div class=\"productocore__datosbasicos__col__registro\">\n          <div class=\"productocore__datosbasicos__col__registro__lbl\">\n              Marca:\n          </div>\n          <div class=\"productocore__datosbasicos__col__registro__campo\">\n              <input type=\"text\" name=\"marca\" [(ngModel)]=\"producto.marca\">\n          </div>\n      </div>\n      <div class=\"productocore__datosbasicos__col__registro\">\n          <div class=\"productocore__datosbasicos__col__registro__lbl\">\n              Registro Sanitario:\n          </div>\n          <div class=\"productocore__datosbasicos__col__registro__campo\">\n              <input type=\"text\" name=\"registro\" [(ngModel)]=\"producto.registro\">\n          </div>\n      </div>\n    </div>\n    <div class=\"productocore__datosbasicos__col\">\n        <div class=\"productocore__datosbasicos__col__registro\">\n            <div class=\"productocore__datosbasicos__col__registro__lbl\">\n                Lote:\n            </div>\n            <div class=\"productocore__datosbasicos__col__registro__campo\">\n                <input type=\"text\" name=\"lote\" [(ngModel)]=\"producto.lote\">\n            </div>\n        </div>\n        <div class=\"productocore__datosbasicos__col__registro\">\n            <div class=\"productocore__datosbasicos__col__registro__lbl\">\n                Fecha Produccion:\n            </div>\n            <div class=\"productocore__datosbasicos__col__registro__campo\">\n                <input type=\"date\" name='fechaProduccion' [(ngModel)]=\"producto.fechaProduccion\">\n            </div>\n        </div>\n        <div class=\"productocore__datosbasicos__col__registro\">\n            <div class=\"productocore__datosbasicos__col__registro__lbl\">\n                Apta de Consumo:\n            </div>\n            <div class=\"productocore__datosbasicos__col__registro__campo\">\n                <input type=\"date\" name='fechaAdtaConsumo' [(ngModel)]=\"producto.fechaAdtaConsumo\">\n            </div>\n        </div>\n    </div>\n    <div class=\"productocore__datosbasicos__col\">\n        <div class=\"productocore__datosbasicos__col__registro\">\n            <div class=\"productocore__datosbasicos__col__registro__lbl\">\n                Vencimiento:\n            </div>\n            <div class=\"productocore__datosbasicos__col__registro__campo\">\n                <input type=\"date\" name='fechaVencimiento' [(ngModel)]=\"producto.fechaVencimiento\">\n            </div>\n        </div>\n        <div class=\"productocore__datosbasicos__col__registro\">\n            <div class=\"productocore__datosbasicos__col__registro__lbl\">\n                Unidad de medida:\n            </div>\n            <div class=\"productocore__datosbasicos__col__registro__campo\">\n                <input type=\"text\" name=\"unidadMedida\" [(ngModel)]=\"producto.unidadMedida\">\n            </div>\n        </div>\n        <div class=\"productocore__datosbasicos__col__registro\">\n            <div class=\"productocore__datosbasicos__col__registro__lbl\">\n                Volumen:\n            </div>\n            <div class=\"productocore__datosbasicos__col__registro__campo\">\n                <input type=\"text\" name=\"volumen\" [(ngModel)]=\"producto.volumen\">\n            </div>\n        </div>\n    </div>\n  </div>\n  <div class=\"productocore__data\">\n      <div class=\"productocore__data__cabecera\">\n        <div (click)=\"showTab(0)\" [ngClass]=\"{'productocore__data__cabecera__opcion': !tabs[0], 'productocore__data__cabecera__opcionseleccion': tabs[0][0]}\">Caracteristicas</div>\n        <div (click)=\"showTab(1)\" [ngClass]=\"{'productocore__data__cabecera__opcion': !tabs[0], 'productocore__data__cabecera__opcionseleccion': tabs[0][1]}\">Ingredientes</div>\n        <div (click)=\"showTab(2)\" [ngClass]=\"{'productocore__data__cabecera__opcion': !tabs[0], 'productocore__data__cabecera__opcionseleccion': tabs[0][2]}\">Informacion Nutricional</div>\n      </div>\n      <div class=\"productocore__data__contenido\" *ngIf=\"tabs[0][0]\">\n          <div class=\"productocore__data__contenido__col\">\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Presentacion:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"presentacion\" [(ngModel)]=\"caracteristicas.presentacion\">\n                  </div>\n              </div>\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Contenido neto:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"contenidoNeto\" [(ngModel)]=\"caracteristicas.contenidoNeto\">\n                  </div>\n              </div>\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Tipo de tratamiento:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"tipoTratamiento\" [(ngModel)]=\"caracteristicas.tipoTratamiento\">\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"productocore__data__contenido__col\">\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Nombre del fabricante:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"fabricante\" [(ngModel)]=\"caracteristicas.fabricante\">\n                  </div>\n              </div>\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Direccion del Fabricante:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"direccionFabricante\" [(ngModel)]=\"caracteristicas.direccionFabricante\">\n                  </div>\n              </div>\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Distribuidor:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <select name=\"distribuidor\" [(ngModel)]=\"caracteristicas.distribuidor\">\n                          <option value=\"0\">Seleccione un Distribuidor</option>\n                          <option *ngFor=\"let distribuidor of distribuidores\" (value)=\"distribuidor\">{{distribuidor.nombre}}</option>\n                      </select>\n                  </div>\n              </div>\n            </div>\n      </div>\n      <div class=\"productocore__data__contenido\" *ngIf=\"tabs[0][1]\">\n          <div class=\"productocore__data__contenido__col\">\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Clase:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"clase\" [(ngModel)]=\"ingrediente.clase\">\n                  </div>\n              </div>\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Nombre:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"nombre\" [(ngModel)]=\"ingrediente.nombre\">\n                  </div>\n              </div>\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      &nbsp;\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <button (click)=\"agregarIngrediente()\"> <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Agregar</button>\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"productocore__data__contenido__coltabla\">\n              <table>\n                  <tr>\n                      <th>Clase</th>\n                      <th>Nombre</th>\n                      <th>Opciones</th>\n                  </tr>\n                  <tr *ngFor=\"let ing of ingredientes; let i = index\">\n                    <td>{{ing.clase}}</td>\n                    <td>{{ing.nombre}}</td>\n                    <td><i class=\"fa fa-times fa-2x\" aria-hidden=\"true\" (click)=\"quitarIngrediente(ing)\"></i> </td>\n                  </tr>\n                </table>\n          </div>\n      </div>\n\n      <div class=\"productocore__data__contenido\" *ngIf=\"tabs[0][2]\">\n          <div class=\"productocore__data__contenido__col\">\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Calorias Totales:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"caloriasTotales\" [(ngModel)]=\"nutricion.caloriasTotales\">\n                  </div>\n              </div>\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Calorias de grasas:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"caloreiasGrasas\" [(ngModel)]=\"nutricion.caloreiasGrasas\">\n                  </div>\n              </div>\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Proteinas:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"proteinas\" [(ngModel)]=\"nutricion.proteinas\">\n                  </div>\n              </div>\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Grasa total:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"grasaTotal\" [(ngModel)]=\"nutricion.grasaTotal\">\n                  </div>\n              </div>\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Grasa saturada:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"grasaSaturada\" [(ngModel)]=\"nutricion.grasaSaturada\">\n                  </div>\n              </div>\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Carbohidratos totales:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"carbohidratosTotatles\" [(ngModel)]=\"nutricion.carbohidratosTotatles\">\n                  </div>\n              </div>\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Fibra dietaria:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"fibraDietaria\" [(ngModel)]=\"nutricion.fibraDietaria\">\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"productocore__data__contenido__col\">\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Colesterol:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"colesterol\" [(ngModel)]=\"nutricion.colesterol\">\n                  </div>\n              </div>\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Sodio:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"sodio\" [(ngModel)]=\"nutricion.sodio\">\n                  </div>\n              </div>\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Grasas Trans:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"grasaTrans\" [(ngModel)]=\"nutricion.grasaTrans\">\n                  </div>\n              </div>\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Azucares:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"azucares\" [(ngModel)]=\"nutricion.azucares\">\n                  </div>\n              </div>\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Vitamina A:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"vitaminaA\" [(ngModel)]=\"nutricion.vitaminaA\">\n                  </div>\n              </div>\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Vitamina C:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"vitaminaC\" [(ngModel)]=\"nutricion.vitaminaC\">\n                  </div>\n              </div>\n              <div class=\"productocore__data__contenido__col__registro\">\n                  <div class=\"productocore__data__contenido__col__registro__lbl\">\n                      Hierro:\n                  </div>\n                  <div class=\"productocore__data__contenido__col__registro__campo\">\n                      <input type=\"text\" name=\"hierro\" [(ngModel)]=\"nutricion.hierro\">\n                  </div>\n              </div>\n            </div>\n            <div class=\"productocore__data__contenido__col\">\n                <div class=\"productocore__data__contenido__col__registro\">\n                    <div class=\"productocore__data__contenido__col__registro__lbl\">\n                        Calcio:\n                    </div>\n                    <div class=\"productocore__data__contenido__col__registro__campo\">\n                        <input type=\"text\" name=\"calcio\" [(ngModel)]=\"nutricion.calcio\">\n                    </div>\n                </div>\n                <div class=\"productocore__data__contenido__col__registro\">\n                    <div class=\"productocore__data__contenido__col__registro__lbl\">\n                        Declaracion de Propiedades de Salud:\n                    </div>\n                    <div class=\"productocore__data__contenido__col__registro__campo\">\n                        <input type=\"text\" name=\"declaracion\" [(ngModel)]=\"nutricion.declaracion\">\n                    </div>\n                </div>\n            </div>\n      </div>\n\n      <div class=\"productocore__data__botones\">\n          <button (click)=\"guardar()\"><i class=\"fa fa-save fa-2x\" aria-hidden=\"true\"></i> Guardar</button>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/productos-core/productos-core.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/core/productos-core/productos-core.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productocore {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  padding: 10px;\n  font-size: 12px;\n  margin-top: 35px; }\n  .productocore__datosbasicos {\n    display: flex;\n    flex-direction: row;\n    height: 200px;\n    width: 95%;\n    background: white;\n    box-shadow: 0px 1px 5px 0px #adadad; }\n  .productocore__datosbasicos__icon {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      width: 10%;\n      height: 100%;\n      padding-left: 10px;\n      color: #7E2662; }\n  .productocore__datosbasicos__col {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      padding: 10px;\n      width: 30%;\n      height: 90%; }\n  .productocore__datosbasicos__col__registro {\n        width: 97%;\n        margin-bottom: 10px;\n        display: flex;\n        flex-direction: row; }\n  .productocore__datosbasicos__col__registro__lbl {\n          width: 30%; }\n  .productocore__datosbasicos__col__registro__campo {\n          width: 70%; }\n  .productocore__datosbasicos__col__registro__campo input {\n            width: 90%; }\n  .productocore__data {\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n    height: 600px;\n    width: 95%;\n    background: white;\n    box-shadow: 0px 1px 5px 0px #adadad; }\n  .productocore__data__cabecera {\n      font-size: 17px;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-around;\n      width: 100%;\n      height: 90px;\n      cursor: pointer;\n      border-bottom: 1px solid #b1b1b1; }\n  .productocore__data__cabecera__opcionseleccion {\n        border-bottom: 2px solid #7E2662; }\n  .productocore__data__contenido {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      padding: 10px;\n      width: 97%;\n      height: 95%; }\n  .productocore__data__contenido__col {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        width: 31%;\n        height: 30%; }\n  .productocore__data__contenido__col__registro {\n          width: 97%;\n          margin-bottom: 10px;\n          display: flex;\n          flex-direction: row; }\n  .productocore__data__contenido__col__registro__lbl {\n            width: 30%; }\n  .productocore__data__contenido__col__registro__campo {\n            width: 70%; }\n  .productocore__data__contenido__col__registro__campo input {\n              width: 90%; }\n  .productocore__data__contenido__col__registro__campo button {\n              width: 90%; }\n  .productocore__data__contenido__coltabla {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        width: 66%;\n        height: 30%; }\n  .productocore__data__botones {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 100%;\n      padding: 20px;\n      cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyby9Qcm9qZWN0cy9Bbmd1bGFyL09yaWdpbmFsQXBwL3NyYy9hcHAvY29yZS9wcm9kdWN0b3MtY29yZS9wcm9kdWN0b3MtY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBQ2hCO0lBRUksYUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtJQUdqQixtQ0FBK0MsRUFBQTtFQUMvQztNQUNJLGFBQVk7TUFDWixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixVQUFVO01BQ1YsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixjQUFjLEVBQUE7RUFFbEI7TUFDSSxhQUFZO01BQ1osc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLFVBQVU7TUFDVixXQUFXLEVBQUE7RUFDWDtRQUNJLFVBQVU7UUFDVixtQkFBbUI7UUFDbkIsYUFBWTtRQUNaLG1CQUFtQixFQUFBO0VBQ25CO1VBQ0ksVUFBVSxFQUFBO0VBRWQ7VUFDSSxVQUFVLEVBQUE7RUFEYjtZQUdPLFVBQVUsRUFBQTtFQU85QjtJQUNJLGdCQUFnQjtJQUNoQixhQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixVQUFVO0lBQ1YsaUJBQWlCO0lBR2pCLG1DQUErQyxFQUFBO0VBQy9DO01BQ0ksZUFBZTtNQUNmLGFBQVk7TUFDWixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLDZCQUE2QjtNQUM3QixXQUFXO01BQ1gsWUFBWTtNQUNaLGVBQWU7TUFDZixnQ0FBMkMsRUFBQTtFQUMzQztRQUNJLGdDQUFnQyxFQUFBO0VBR3hDO01BQ0ksYUFBWTtNQUNaLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsYUFBYTtNQUNiLFVBQVU7TUFDVixXQUFXLEVBQUE7RUFDWDtRQUNJLGFBQVk7UUFDWixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFVBQVU7UUFDVixXQUFXLEVBQUE7RUFDWDtVQUNJLFVBQVU7VUFDVixtQkFBbUI7VUFDbkIsYUFBWTtVQUNaLG1CQUFtQixFQUFBO0VBQ25CO1lBQ0ksVUFBVSxFQUFBO0VBRWQ7WUFDSSxVQUFVLEVBQUE7RUFEYjtjQUdPLFVBQVUsRUFBQTtFQUhqQjtjQU1PLFVBQVUsRUFBQTtFQUsxQjtRQUNJLGFBQVk7UUFDWixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFVBQVU7UUFDVixXQUFXLEVBQUE7RUFJbkI7TUFDSSxhQUFZO01BQ1osdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsYUFBYTtNQUNiLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvZHVjdG9zLWNvcmUvcHJvZHVjdG9zLWNvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdG9jb3Jle1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICZfX2RhdG9zYmFzaWNvcyB7XG4gICAgICAgIFxuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlOyAgICAgICAgXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMTczLDE3MywxNzMsMSk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMTczLDE3MywxNzMsMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xuICAgICAgICAmX19pY29uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICM3RTI2NjI7XG4gICAgICAgIH1cbiAgICAgICAgJl9fY29sIHtcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICAgICAgJl9fcmVnaXN0cm8ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5NyU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAmX19sYmwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmX19jYW1wbyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2RhdGEge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlOyAgICAgICAgXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMTczLDE3MywxNzMsMSk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMTczLDE3MywxNzMsMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xuICAgICAgICAmX19jYWJlY2VyYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE3NywgMTc3LCAxNzcpO1xuICAgICAgICAgICAgJl9fb3BjaW9uc2VsZWNjaW9ue1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN0UyNjYyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICZfX2NvbnRlbmlkbyB7XG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA5NyU7XG4gICAgICAgICAgICBoZWlnaHQ6IDk1JTtcbiAgICAgICAgICAgICZfX2NvbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzElO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzAlO1xuICAgICAgICAgICAgICAgICZfX3JlZ2lzdHJvIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk3JTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAmX19sYmwge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmX19jYW1wbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICZfX2NvbHRhYmxhIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NiU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJl9fYm90b25lcyB7XG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/productos-core/productos-core.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/productos-core/productos-core.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductosCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosCoreComponent", function() { return ProductosCoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modelos_productoModelo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modelos/productoModelo */ "./src/app/modelos/productoModelo.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _servicios_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/firebase.service */ "./src/app/servicios/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_modelos_productoIngredientesModelo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modelos/productoIngredientesModelo */ "./src/app/modelos/productoIngredientesModelo.ts");
/* harmony import */ var _modelos_productoInfoNutricionalModelo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modelos/productoInfoNutricionalModelo */ "./src/app/modelos/productoInfoNutricionalModelo.ts");
/* harmony import */ var _modelos_productoCaracteristicasModelo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modelos/productoCaracteristicasModelo */ "./src/app/modelos/productoCaracteristicasModelo.ts");









var ProductosCoreComponent = /** @class */ (function () {
    function ProductosCoreComponent(servicio, route) {
        this.servicio = servicio;
        this.route = route;
        this.producto = new _modelos_productoModelo__WEBPACK_IMPORTED_MODULE_2__["Producto"]();
        this.caracteristicas = new _modelos_productoCaracteristicasModelo__WEBPACK_IMPORTED_MODULE_8__["Caracteristicas"]();
        this.ingrediente = new src_app_modelos_productoIngredientesModelo__WEBPACK_IMPORTED_MODULE_6__["Ingredientes"];
        this.ingredientes = [];
        this.nutricion = new _modelos_productoInfoNutricionalModelo__WEBPACK_IMPORTED_MODULE_7__["InformacionNutricional"]();
        this.tabs = [{ 0: true, 1: false, 2: false }];
        this.producto = new _modelos_productoModelo__WEBPACK_IMPORTED_MODULE_2__["Producto"]();
    }
    ProductosCoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var editable = params.get("id");
            if (editable) {
                _this.servicio.obtener('producto').subscribe(function (data) {
                    _this.producto = data.find(function (data) {
                        return data.id === editable;
                    });
                    _this.ingredientes = _this.producto.ingredientes;
                    _this.caracteristicas = _this.producto.caracteristicas;
                    _this.nutricion = _this.producto.infoNutricional;
                });
            }
        });
        this.servicio.obtener('distribuidor').subscribe(function (data) {
            _this.distribuidores = data;
        });
    };
    ProductosCoreComponent.prototype.showTab = function (tab) {
        this.tabs[0][0] = false;
        this.tabs[0][1] = false;
        this.tabs[0][2] = false;
        this.tabs[0][tab] = true;
    };
    ProductosCoreComponent.prototype.guardar = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: '',
            text: "Desea guardar este Producto?",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#7E2662',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
        }).then(function (result) {
            _this.producto.ingredientes = _this.ingredientes;
            _this.producto.infoNutricional = _this.nutricion;
            _this.producto.caracteristicas = _this.caracteristicas;
            if (result.value) {
                if (_this.producto.id != '') {
                    _this.servicio.actualizarDatos('producto', _this.producto, _this.producto.id);
                }
                else {
                    _this.servicio.guardarDatos('producto', _this.producto);
                }
            }
        });
    };
    ProductosCoreComponent.prototype.agregarIngrediente = function () {
        if (this.ingrediente.clase != '' && this.ingrediente.nombre != '') {
            this.ingredientes.push(this.ingrediente);
            this.ingrediente = new src_app_modelos_productoIngredientesModelo__WEBPACK_IMPORTED_MODULE_6__["Ingredientes"]();
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('', 'Debe ingresar la informacion faltante', 'error');
        }
    };
    ProductosCoreComponent.prototype.quitarIngrediente = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: '',
            text: "Esta seguro de eliminar el ingrediente?",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#7E2662',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
        }).then(function (result) {
            _this.ingredientes = _this.ingredientes.filter(function (data) {
                return data != id;
            });
        });
    };
    ProductosCoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productos-core',
            template: __webpack_require__(/*! ./productos-core.component.html */ "./src/app/core/productos-core/productos-core.component.html"),
            styles: [__webpack_require__(/*! ./productos-core.component.scss */ "./src/app/core/productos-core/productos-core.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ProductosCoreComponent);
    return ProductosCoreComponent;
}());



/***/ }),

/***/ "./src/app/core/usuario-core/usuario-core.component.html":
/*!***************************************************************!*\
  !*** ./src/app/core/usuario-core/usuario-core.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"usuariocore\">\n    <div class=\"usuariocore__datosbasicos\">\n        <div class=\"usuariocore__datosbasicos__icon\"> <i class=\"fa fa-user-circle fa-4x\" aria-hidden=\"true\"></i> </div>\n        <div class=\"usuariocore__datosbasicos__col\">\n          <div class=\"usuariocore__datosbasicos__col__registro\">\n            <div class=\"usuariocore__datosbasicos__col__registro__lbl\">\n                Nombre:\n            </div>\n            <div class=\"usuariocore__datosbasicos__col__registro__campo\">\n                <input type=\"text\" name=\"nombre\" [(ngModel)]=\"usuario.nombre\">\n            </div>\n          </div>\n          <div class=\"usuariocore__datosbasicos__col__registro\">\n              <div class=\"usuariocore__datosbasicos__col__registro__lbl\">\n                  Email:\n              </div>\n              <div class=\"usuariocore__datosbasicos__col__registro__campo\">\n                  <input type=\"text\" name=\"email\" [(ngModel)]=\"usuario.email\">\n              </div>\n          </div>\n          <div class=\"usuariocore__datosbasicos__col__registro\">\n              <div class=\"usuariocore__datosbasicos__col__registro__lbl\">\n                  Telefono:\n              </div>\n              <div class=\"usuariocore__datosbasicos__col__registro__campo\">\n                  <input type=\"text\" name=\"telefono\" [(ngModel)]=\"usuario.telefono\">\n              </div>\n          </div>\n          <div class=\"usuariocore__datosbasicos__col__registro\">\n              <div class=\"usuariocore__datosbasicos__col__registro__lbl\">\n                  Password:\n              </div>\n              <div class=\"usuariocore__datosbasicos__col__registro__campo\">\n                  <input type=\"password\" name=\"password\" [(ngModel)]=\"usuario.password\">\n              </div>\n          </div>\n        </div>\n        <div class=\"usuariocore__datosbasicos__col\">  \n          <div class=\"usuariocore__datosbasicos__col__registro\">\n              <div class=\"usuariocore__datosbasicos__col__registro__lbl\">\n                  &nbsp;\n              </div>\n              <div class=\"usuariocore__datosbasicos__col__registro__campo\">\n                  <button (click)=\"guardar()\"><i class=\"fa fa-save\" aria-hidden=\"true\"></i> Guardar</button>\n              </div>\n          </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/core/usuario-core/usuario-core.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/core/usuario-core/usuario-core.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".usuariocore {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  padding: 10px;\n  font-size: 12px;\n  margin-top: 35px; }\n  .usuariocore__datosbasicos {\n    display: flex;\n    flex-direction: row;\n    height: 200px;\n    width: 95%;\n    background: white;\n    box-shadow: 0px 1px 5px 0px #adadad; }\n  .usuariocore__datosbasicos__icon {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      width: 10%;\n      height: 100%;\n      padding-left: 10px;\n      color: #7E2662; }\n  .usuariocore__datosbasicos__col {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      padding: 10px;\n      width: 30%;\n      height: 90%; }\n  .usuariocore__datosbasicos__col__registro {\n        width: 97%;\n        margin-bottom: 10px;\n        display: flex;\n        flex-direction: row; }\n  .usuariocore__datosbasicos__col__registro__lbl {\n          width: 30%; }\n  .usuariocore__datosbasicos__col__registro__campo {\n          width: 70%; }\n  .usuariocore__datosbasicos__col__registro__campo input {\n            width: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyby9Qcm9qZWN0cy9Bbmd1bGFyL09yaWdpbmFsQXBwL3NyYy9hcHAvY29yZS91c3VhcmlvLWNvcmUvdXN1YXJpby1jb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7RUFDaEI7SUFDSSxhQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixVQUFVO0lBQ1YsaUJBQWlCO0lBR2pCLG1DQUErQyxFQUFBO0VBQy9DO01BQ0ksYUFBWTtNQUNaLHNCQUFzQjtNQUN0Qix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLFVBQVU7TUFDVixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGNBQWMsRUFBQTtFQUVsQjtNQUNJLGFBQVk7TUFDWixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsVUFBVTtNQUNWLFdBQVcsRUFBQTtFQUNYO1FBQ0ksVUFBVTtRQUNWLG1CQUFtQjtRQUNuQixhQUFZO1FBQ1osbUJBQW1CLEVBQUE7RUFDbkI7VUFDSSxVQUFVLEVBQUE7RUFFZDtVQUNJLFVBQVUsRUFBQTtFQURiO1lBR08sVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS91c3VhcmlvLWNvcmUvdXN1YXJpby1jb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzdWFyaW9jb3Jle1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICZfX2RhdG9zYmFzaWNvcyB7ICAgICAgICBcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgICAgICAgIFxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDE3MywxNzMsMTczLDEpO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgxNzMsMTczLDE3MywxKTtcbiAgICAgICAgJl9faWNvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjN0UyNjYyO1xuICAgICAgICB9XG4gICAgICAgICZfX2NvbCB7XG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgICAgICZfX3JlZ2lzdHJvIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTclO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgJl9fbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJl9fY2FtcG8ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/core/usuario-core/usuario-core.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/usuario-core/usuario-core.component.ts ***!
  \*************************************************************/
/*! exports provided: UsuarioCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioCoreComponent", function() { return UsuarioCoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _servicios_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/firebase.service */ "./src/app/servicios/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UsuarioCoreComponent = /** @class */ (function () {
    function UsuarioCoreComponent(servicio, route) {
        this.servicio = servicio;
        this.route = route;
        this.usuario = { id: '', nombre: '', email: '', telefono: '', password: '' };
    }
    UsuarioCoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var editable = params.get("id");
            if (editable) {
                _this.servicio.obtener('usuariocore').subscribe(function (usuario) {
                    _this.usuario = usuario.find(function (data) {
                        return data.id === editable;
                    });
                });
            }
        });
    };
    UsuarioCoreComponent.prototype.guardar = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: '',
            text: "Desea agregar este Usuario?",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#7E2662',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                if (_this.usuario.id != '') {
                    _this.servicio.actualizarDatos('usuariocore', _this.usuario, _this.usuario.id);
                }
                else {
                    _this.servicio.guardarDatos('usuariocore', _this.usuario);
                }
            }
        });
    };
    UsuarioCoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario-core',
            template: __webpack_require__(/*! ./usuario-core.component.html */ "./src/app/core/usuario-core/usuario-core.component.html"),
            styles: [__webpack_require__(/*! ./usuario-core.component.scss */ "./src/app/core/usuario-core/usuario-core.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], UsuarioCoreComponent);
    return UsuarioCoreComponent;
}());



/***/ }),

/***/ "./src/app/modelos/productoCaracteristicasModelo.ts":
/*!**********************************************************!*\
  !*** ./src/app/modelos/productoCaracteristicasModelo.ts ***!
  \**********************************************************/
/*! exports provided: Caracteristicas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Caracteristicas", function() { return Caracteristicas; });
var Caracteristicas = /** @class */ (function () {
    function Caracteristicas() {
        this.presentacion = '';
        this.contenidoNeto = '';
        this.tipoTratamiento = '';
        this.fabricante = '';
        this.direccionFabricante = '';
        this.distribuidor = { id: '', nombre: '', codigo: '', direccion: '', telefono: '' };
    }
    return Caracteristicas;
}());



/***/ }),

/***/ "./src/app/modelos/productoInfoNutricionalModelo.ts":
/*!**********************************************************!*\
  !*** ./src/app/modelos/productoInfoNutricionalModelo.ts ***!
  \**********************************************************/
/*! exports provided: InformacionNutricional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionNutricional", function() { return InformacionNutricional; });
var InformacionNutricional = /** @class */ (function () {
    function InformacionNutricional() {
        this.caloriasTotales = '';
        this.caloreiasGrasas = '';
        this.proteinas = '';
        this.grasaTotal = '';
        this.grasaSaturada = '';
        this.carbohidratosTotatles = '';
        this.fibraDietaria = '';
        this.colesterol = '';
        this.sodio = '';
        this.grasaTrans = '';
        this.azucares = '';
        this.vitaminaA = '';
        this.vitaminaC = '';
        this.hierro = '';
        this.calcio = '';
        this.declaracion = '';
    }
    return InformacionNutricional;
}());



/***/ }),

/***/ "./src/app/modelos/productoIngredientesModelo.ts":
/*!*******************************************************!*\
  !*** ./src/app/modelos/productoIngredientesModelo.ts ***!
  \*******************************************************/
/*! exports provided: Ingredientes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredientes", function() { return Ingredientes; });
var Ingredientes = /** @class */ (function () {
    function Ingredientes() {
        this.clase = '';
        this.nombre = '';
    }
    return Ingredientes;
}());



/***/ }),

/***/ "./src/app/modelos/productoModelo.ts":
/*!*******************************************!*\
  !*** ./src/app/modelos/productoModelo.ts ***!
  \*******************************************/
/*! exports provided: Producto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto", function() { return Producto; });
/* harmony import */ var _productoCaracteristicasModelo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productoCaracteristicasModelo */ "./src/app/modelos/productoCaracteristicasModelo.ts");
/* harmony import */ var _productoInfoNutricionalModelo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productoInfoNutricionalModelo */ "./src/app/modelos/productoInfoNutricionalModelo.ts");


var Producto = /** @class */ (function () {
    function Producto() {
        this.id = '';
        this.nombre = '';
        this.marca = '';
        this.registro = '';
        this.lote = '';
        this.fechaProduccion = '';
        this.fechaAdtaConsumo = '';
        this.fechaVencimiento = '';
        this.contenidoNeto = '';
        this.volumen = '';
        this.unidadMedida = '';
        this.caracteristicas = new _productoCaracteristicasModelo__WEBPACK_IMPORTED_MODULE_0__["Caracteristicas"]();
        this.ingredientes = [];
        this.infoNutricional = new _productoInfoNutricionalModelo__WEBPACK_IMPORTED_MODULE_1__["InformacionNutricional"]();
    }
    return Producto;
}());



/***/ }),

/***/ "./src/app/servicios/firebase.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/firebase.service.ts ***!
  \***********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var FirebaseService = /** @class */ (function () {
    function FirebaseService(db) {
        this.db = db;
    }
    FirebaseService.prototype.obtenerDatosLogin = function (usuario, password) {
        this.itemsCollection = this.db.collection('usuarios', function (ref) { return ref.where('email', '==', usuario)
            .where('password', '==', password); });
        return this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.map(function (d) {
                var retorno = d.payload.doc.data();
                retorno['id'] = d.payload.doc.id;
                return retorno;
            });
        }));
    };
    FirebaseService.prototype.obtener = function (tabla) {
        this.itemsCollection = this.db.collection(tabla);
        return this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.map(function (d) {
                var retorno = d.payload.doc.data();
                retorno['id'] = d.payload.doc.id;
                return retorno;
            });
        }));
    };
    FirebaseService.prototype.obtenerId = function (tabla, id) {
        this.itemsCollection = this.db.collection(tabla, function (ref) { return ref.where('id', '==', id); });
        return this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.map(function (d) {
                var retorno = d.payload.doc.data();
                retorno['id'] = d.payload.doc.id;
                return retorno;
            });
        }));
    };
    FirebaseService.prototype.guardarDatos = function (tabla, data) {
        this.itemsCollection = this.db.collection(tabla);
        this.itemsCollection.add(JSON.parse(JSON.stringify(data))).then(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'Datos guardados correctamente', 'success');
        }).catch(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'Ocurrio un problema al guardar los datos', 'error');
        });
    };
    FirebaseService.prototype.actualizarDatos = function (tabla, data, id) {
        this.itemsCollection = this.db.collection(tabla);
        this.itemsCollection.doc(id).update(JSON.parse(JSON.stringify(data))).then(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'Datos actualizados correctamente', 'success');
        }).catch(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'Ocurrio un problema al actulizar los datos', 'error');
        });
    };
    FirebaseService.prototype.eliminarDatos = function (tabla, id) {
        this.itemsCollection = this.db.collection(tabla);
        this.itemsCollection.doc(id).delete().then(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'Datos eliminados correctamente', 'success');
        }).catch(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'Ocurrio un problema al eliminar los datos', 'error');
        });
    };
    FirebaseService.prototype.obtenerDatosQR = function (idunico) {
        this.itemsCollection = this.db.collection('qr');
        return this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var docs = data.map(function (d) {
                var data = d.payload.doc.data();
                console.log(data.qrs);
                var qrs = data.qrs.find(function (qr) {
                    return qr.idunico === idunico;
                });
                return qrs;
            });
            if (docs.length > 0) {
                return docs[0];
            }
            return null;
        }));
    };
    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/servicios/producto.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/producto.service.ts ***!
  \***********************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ProductoService = /** @class */ (function () {
    function ProductoService() {
        this.productoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    ProductoService.prototype.getProductos = function () {
        return this.productoSubject.asObservable();
    };
    ProductoService.prototype.setProductos = function (producto) {
        this.productoSubject.next(producto);
    };
    ProductoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductoService);
    return ProductoService;
}());



/***/ }),

/***/ "./src/app/shared/autocomplete/autocomplete.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/autocomplete/autocomplete.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" name=\"valor\" placeholder=\"Escriba para buscar\" [(ngModel)]=\"valor\" (keydown)=\"buscar()\">\n<div class=\"autocomplete\" *ngIf=\"valor!=='' && mostrar\">\n  <div class=\"autocomplete__registro\" *ngFor=\"let reg of resultados\" (click)=\"seleccionar(reg)\">\n    {{reg.nombre}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/autocomplete/autocomplete.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/autocomplete/autocomplete.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".autocomplete {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  width: 220px;\n  height: auto;\n  background: white; }\n  .autocomplete__registro {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 30px;\n    border: 1px solid #a1a1a1; }\n  .autocomplete__registro:hover {\n      background: #7E2662;\n      color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyby9Qcm9qZWN0cy9Bbmd1bGFyL09yaWdpbmFsQXBwL3NyYy9hcHAvc2hhcmVkL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQixFQUFBO0VBQ2pCO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBb0MsRUFBQTtFQU52QztNQVFPLG1CQUFtQjtNQUNuQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRvY29tcGxldGV7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAmX19yZWdpc3Ryb3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjEsIDE2MSwgMTYxKTtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjN0UyNjYyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/autocomplete/autocomplete.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/autocomplete/autocomplete.component.ts ***!
  \***************************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/firebase.service */ "./src/app/servicios/firebase.service.ts");



var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent(service) {
        this.service = service;
        this.obtenerValor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.valor = '';
        this.mostrar = true;
    }
    AutocompleteComponent.prototype.ngOnInit = function () {
    };
    AutocompleteComponent.prototype.buscar = function () {
        var _this = this;
        this.mostrar = true;
        if (this.valor.length >= this.maxletras) {
            this.service.obtener(this.tabla).subscribe(function (data) {
                _this.resultados = data.filter(function (registro) {
                    return registro.nombre.toLowerCase().indexOf(_this.valor.toLowerCase()) != -1;
                });
            });
        }
    };
    AutocompleteComponent.prototype.seleccionar = function (data) {
        this.valor = data.nombre;
        this.mostrar = false;
        this.obtenerValor.emit(data);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AutocompleteComponent.prototype, "maxletras", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AutocompleteComponent.prototype, "tabla", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutocompleteComponent.prototype, "obtenerValor", void 0);
    AutocompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-autocomplete',
            template: __webpack_require__(/*! ./autocomplete.component.html */ "./src/app/shared/autocomplete/autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./autocomplete.component.scss */ "./src/app/shared/autocomplete/autocomplete.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCHy-ipWcBJCQFIcMXoUOh8-st2r_rBqT8",
        authDomain: "originalapp-9bbc1.firebaseapp.com",
        databaseURL: "https://originalapp-9bbc1.firebaseio.com",
        projectId: "originalapp-9bbc1",
        storageBucket: "originalapp-9bbc1.appspot.com",
        messagingSenderId: "980379372696",
        appId: "1:980379372696:web:0be09b33345c1715"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cesarromero/Projects/Angular/OriginalApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map