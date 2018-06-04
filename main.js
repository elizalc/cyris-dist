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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/layout.module */ "./src/app/layouts/layout.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _directives_only_number_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/only-number.directive */ "./src/app/directives/only-number.directive.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");
/* harmony import */ var _pages_staff_information_staff_information_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/staff-information/staff-information.component */ "./src/app/pages/staff-information/staff-information.component.ts");
/* harmony import */ var _pages_new_personal_new_personal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/new-personal/new-personal.component */ "./src/app/pages/new-personal/new-personal.component.ts");
/* harmony import */ var _pages_personal_edit_personal_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/personal-edit/personal-edit.component */ "./src/app/pages/personal-edit/personal-edit.component.ts");
/* harmony import */ var _modals_deletemodal_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modals/deletemodal/modal.component */ "./src/app/modals/deletemodal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _pages_staff_information_staff_information_component__WEBPACK_IMPORTED_MODULE_23__["StaffInformationComponent"],
                _pages_new_personal_new_personal_component__WEBPACK_IMPORTED_MODULE_24__["NewPersonalComponent"],
                _pages_personal_edit_personal_edit_component__WEBPACK_IMPORTED_MODULE_25__["PersonalEditComponent"],
                _directives_only_number_directive__WEBPACK_IMPORTED_MODULE_19__["OnlyNumberDirective"],
                _modals_deletemodal_modal_component__WEBPACK_IMPORTED_MODULE_26__["ModalComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layouts_layout_module__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_17__["AppRoutes"]),
                _material_material_module__WEBPACK_IMPORTED_MODULE_16__["MaterialModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_18__["ModalModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"], _services_personal_service__WEBPACK_IMPORTED_MODULE_21__["PersonalService"], _services_authguard_service__WEBPACK_IMPORTED_MODULE_22__["AuthguardService"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorage"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
            entryComponents: [
                _modals_deletemodal_modal_component__WEBPACK_IMPORTED_MODULE_26__["ModalComponent"],
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/layout.component */ "./src/app/layouts/layout.component.ts");
/* harmony import */ var _pages_staff_information_staff_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/staff-information/staff-information.component */ "./src/app/pages/staff-information/staff-information.component.ts");
/* harmony import */ var _pages_new_personal_new_personal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/new-personal/new-personal.component */ "./src/app/pages/new-personal/new-personal.component.ts");
/* harmony import */ var _pages_personal_edit_personal_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/personal-edit/personal-edit.component */ "./src/app/pages/personal-edit/personal-edit.component.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");






var AppRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
        pathMatch: 'full'
    },
    {
        "path": "",
        "component": _layouts_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        "canActivate": [_services_authguard_service__WEBPACK_IMPORTED_MODULE_5__["AuthguardService"]],
        "children": [
            {
                path: "personal",
                component: _pages_staff_information_staff_information_component__WEBPACK_IMPORTED_MODULE_2__["StaffInformationComponent"]
            },
            {
                path: "nuevo-personal",
                component: _pages_new_personal_new_personal_component__WEBPACK_IMPORTED_MODULE_3__["NewPersonalComponent"]
            },
            {
                path: "personal/editar/:id",
                component: _pages_personal_edit_personal_edit_component__WEBPACK_IMPORTED_MODULE_4__["PersonalEditComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/directives/only-number.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/only-number.directive.ts ***!
  \*****************************************************/
/*! exports provided: OnlyNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyNumberDirective", function() { return OnlyNumberDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnlyNumberDirective = /** @class */ (function () {
    function OnlyNumberDirective(el) {
        this.el = el;
    }
    OnlyNumberDirective.prototype.onKeyDown = function (event) {
        var e = event;
        if (this.OnlyNumber) {
            if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+C
                (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+V
                (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+X
                (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OnlyNumberDirective.prototype, "OnlyNumber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OnlyNumberDirective.prototype, "onKeyDown", null);
    OnlyNumberDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[OnlyNumber]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], OnlyNumberDirective);
    return OnlyNumberDirective;
}());



/***/ }),

/***/ "./src/app/layouts/app-footer/app-footer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/layouts/app-footer/app-footer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/app-footer/app-footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/layouts/app-footer/app-footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-shared text-center py-2\">\r\n  <span>Copyright 2018</span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layouts/app-footer/app-footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/app-footer/app-footer.component.ts ***!
  \************************************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return AppFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent() {
    }
    AppFooterComponent.prototype.ngOnInit = function () {
    };
    AppFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./app-footer.component.html */ "./src/app/layouts/app-footer/app-footer.component.html"),
            styles: [__webpack_require__(/*! ./app-footer.component.css */ "./src/app/layouts/app-footer/app-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "./src/app/layouts/app-header/app-header.component.css":
/*!*************************************************************!*\
  !*** ./src/app/layouts/app-header/app-header.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/app-header/app-header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/layouts/app-header/app-header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg pb-0\">\r\n  <div class=\"container\">\r\n    <div class=\"row w-100\">\r\n      <div class=\"col-12\">\r\n        <div class=\"title-nav mb-4\">\r\n          <a class=\"navbar-brand\" [routerLink]=\"['/personal']\"><img src=\"../../../assets/img/logo.png\" alt=\"\"></a>\r\n          <div>\r\n            <p>{{email}}</p>\r\n            <a (click)=\"logout()\" class=\"logout\">\r\n              Cerrar Sesión</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <div class=\"nav-collapse\" id=\"basicExampleNav\">\r\n    \r\n          <!-- Links -->\r\n          <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active\">\r\n              <a class=\"nav-link\"  [routerLink]=\"['/personal']\" href=\"#\">Información del Personal\r\n                <span class=\"sr-only\">(current)</span>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <!-- Links -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n</nav>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/layouts/app-header/app-header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/app-header/app-header.component.ts ***!
  \************************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
        this.email = this.auth.email;
        console.log(this.email);
    };
    AppHeaderComponent.prototype.logout = function () {
        this.router.navigate(['login']);
        this.auth.logout();
    };
    AppHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./app-header.component.html */ "./src/app/layouts/app-header/app-header.component.html"),
            styles: [__webpack_require__(/*! ./app-header.component.css */ "./src/app/layouts/app-header/app-header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/layouts/layout.component.html":
/*!***********************************************!*\
  !*** ./src/app/layouts/layout.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/layouts/layout.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layouts/layout.component.ts ***!
  \*********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
        this.deadSession = 30 * 60;
        this.minutesForDead = 30 * 60;
        this.initSession = 0;
    }
    LayoutComponent.prototype.ngAfterViewInit = function () {
    };
    LayoutComponent.prototype.destroyView = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '.page-wrapper',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layouts/layout.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/layout.module.ts":
/*!******************************************!*\
  !*** ./src/app/layouts/layout.module.ts ***!
  \******************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layouts/layout.component.ts");
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-header/app-header.component */ "./src/app/layouts/app-header/app-header.component.ts");
/* harmony import */ var _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-footer/app-footer.component */ "./src/app/layouts/app-footer/app-footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
                _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_3__["AppHeaderComponent"],
                _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_4__["AppFooterComponent"],
            ],
            exports: [
                _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
                _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_3__["AppHeaderComponent"],
                _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_4__["AppFooterComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-full full-page\">\r\n  <div class=\"row m-0 h-100\">\r\n    <div class=\"col-12\">\r\n      <div class=\"container-form h-100\">\r\n        <div class=\"center-form\">\r\n          <form [formGroup]=\"userForm\" (ngSubmit)=\"login()\" class=\"login\">\r\n            <div class=\"title text-center mb-3\">\r\n              <mat-icon class=\"big-icon\">account_circle</mat-icon>\r\n              <p class=\"font-bold\">Simareg - RRHH</p>\r\n            </div>\r\n            <div class=\"example-full-width form-group\">\r\n              <input placeholder=\"Correo electrónico\" [className]=\"formErrors.email ? 'form-control is-invalid' : 'form-control'\" formControlName=\"email\" [(ngModel)]=\"email\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.email }}\r\n              </small>\r\n            </div>\r\n            <div class=\"example-full-width form-group\">\r\n              <input placeholder=\"Contraseña\" type=\"password\" [className]=\"formErrors.password ? 'form-control is-invalid' : 'form-control'\" formControlName=\"password\" [(ngModel)]=\"password\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.password }}\r\n              </small>\r\n            </div>\r\n            <button class=\"mt-3 btn btn-default btn-primary\" type=\"submit\" [disabled]=\"!userForm.valid\">Login</button>\r\n          </form>\r\n        </div>\r\n        <div class=\"img w-25 text-center mt-3\">\r\n          <img class=\"img-fluid\" src=\"../../assets/img/logo.png\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 footer text-center py-2\">\r\n      <span>Copyright 2018</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, fb, router, toastr) {
        this.auth = auth;
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this.formErrors = {
            'email': '',
            'password': ''
        };
        this.validationMessages = {
            'email': {
                'required': 'Este campoes obligatorio',
                'pattern': 'Ingrese un email válido'
            },
            'password': {
                'required': 'Este campo es obligatorio',
                'minlength': 'Debe tener 6 caracteres como mínimo',
                'maxlength': 'La contraseña no puede exceder los 40 caracteres',
            }
        };
    }
    LoginComponent.prototype.login = function () {
        this.auth.login(this.email, this.password);
        // .then(value => {
        //   console.log(value);
        //   if (value == "auth/wrong-password") {
        //     this.toastr.error('Contraseña incorrecta', 'Intenta otra vez', {
        //       timeOut: 3000,
        //     });
        //   } else if (value == "auth/user-not-found") {
        //     this.toastr.error('Usuario no encontrado', 'Intenta otra vez', {
        //       timeOut: 3000,
        //     });
        //   } else if (value.operationType == 'signIn') {
        //     this.router.navigate(['personal'])
        //     this.toastr.success('Ingreso Correcto', 'Bienvenido', {
        //       timeOut: 3000,
        //     });
        //   }
        // })
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LoginComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'email': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                ]
            ],
            'password': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)
                ]
            ],
        });
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
    };
    // Updates validation state on form changes.
    LoginComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.invalid && control.dirty) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/modals/deletemodal/modal.component.css":
/*!********************************************************!*\
  !*** ./src/app/modals/deletemodal/modal.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modals/deletemodal/modal.component.html":
/*!*********************************************************!*\
  !*** ./src/app/modals/deletemodal/modal.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body popup-finish\">\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onNoClick()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n  <h3>¿Estás seguro que desea eliminar este usuario?</h3>\r\n  <div class=\"actions\">\r\n    <a class=\"btn btn-air text-white btn-green\" (click)=\"deletePersonal(data.id)\">Sí</a>\r\n    <button type=\"button\" (click)=\"onNoClick()\" class=\"btn btn-danger\">No</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modals/deletemodal/modal.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modals/deletemodal/modal.component.ts ***!
  \*******************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/personal.service */ "./src/app/services/personal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ModalComponent = /** @class */ (function () {
    function ModalComponent(pes, dialogRef, data, changeDetectorRefs) {
        this.pes = pes;
        this.dialogRef = dialogRef;
        this.data = data;
        this.changeDetectorRefs = changeDetectorRefs;
        // dataSource = new MatTableDataSource<Personal>();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
        // this.pes.getPersonal().subscribe(data => {
        //   this.dataSource.data = data;
        // });
    };
    ModalComponent.prototype.deletePersonal = function (id) {
        this.pes.deleteFb(id).then(function (data) { return console.log(data); });
        this.dialogRef.close();
        // this.refresh();
    };
    ModalComponent.prototype.ngOnInit = function () { };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-modal",
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/modals/deletemodal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/modals/deletemodal/modal.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_personal_service__WEBPACK_IMPORTED_MODULE_2__["PersonalService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/new-personal/new-personal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/new-personal/new-personal.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/new-personal/new-personal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/new-personal/new-personal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"bg-white\">\r\n    <form [formGroup]=\"personalForm\" (ngSubmit)=\"addNew()\">\r\n      <h3 class=\"mt-4\">Nuevo Personal</h3>\r\n      <hr>\r\n\r\n\r\n      <!-- <div class=\"row\">\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Primer nombre *\" [className]=\"formErrors.nombre ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"nombre\" formControlName=\"nombre\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.nombre }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Segundo nombre\" [className]=\"formErrors.nombre2 ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"nombre2\" formControlName=\"nombre2\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.nombre2 }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Primer apellido *\" [className]=\"formErrors.paterno ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"paterno\" formControlName=\"paterno\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.paterno }}\r\n              </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Segundo apellido *\" [className]=\"formErrors.materno ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"materno\" formControlName=\"materno\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.materno }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Número de DNI *\" [className]=\"formErrors.nroDNI ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"nroDNI\" OnlyNumber=\"true\" maxlength=\"8\"\r\n              formControlName=\"nroDNI\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.nroDNI }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"date\" placeholder=\"Vigencia del documento de identidad *\" [className]=\"formErrors.vigenciaDNI ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"vigenciaDNI\"\r\n              OnlyNumber=\"true\" formControlName=\"vigenciaDNI\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.vigenciaDNI }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Número de RUC\" [className]=\"formErrors.nroRUC ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"nroRUC\" maxlength=\"11\" \r\n              OnlyNumber=\"true\" formControlName=\"nroRUC\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.nroRUC }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n      \r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Número de Pasaporte\" [className]=\"formErrors.nroPasaporte ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"nroPasaporte\" maxlength=\"15\" \r\n              OnlyNumber=\"true\" formControlName=\"nroPasaporte\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.nroPasaporte }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input placeholder=\"Vigencia de Pasaporte\" type=\"date\" [className]=\"formErrors.vigenciaPasaporte ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n              id=\"vigenciaPasaporte\" OnlyNumber=\"true\" formControlName=\"vigenciaPasaporte\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.vigenciaPasaporte }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <select [className]=\"formErrors.estadoCivil ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n              id=\"estadoCivil\" formControlName=\"estadoCivil\">\r\n              <option value=\"\" selected>Estado Civil *</option>\r\n              <option value=\"soltero\">soltero</option>\r\n              <option value=\"casado\">casado</option>\r\n              <option value=\"viudo\">viudo</option>\r\n              <option value=\"divorciado\">divorciado</option>\r\n              <option value=\"conviviente\">conviviente</option>\r\n              <option value=\"separado\">separado</option>\r\n            </select>\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.estadoCivil }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <select [className]=\"formErrors.sexo ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n              id=\"sexo\" formControlName=\"sexo\">\r\n              <option value=\"\" selected>Sexo *</option>\r\n              <option value=\"femenino\">femenino</option>\r\n              <option value=\"masculino\">masculino</option>\r\n            </select>\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.sexo }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"date\" [className]=\"formErrors.fechaNacimiento ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n              id=\"fechaNacimiento\" OnlyNumber=\"true\" formControlName=\"fechaNacimiento\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.fechaNacimiento }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n      </div>  \r\n\r\n      <hr>\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Número de celular personal\" [className]=\"formErrors.celular ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"celular\" maxlength=\"9\"\r\n              OnlyNumber=\"true\" formControlName=\"celular\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.celular }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Número del celular del trabajo\" [className]=\"formErrors.celularTrab ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"celularTrab\"\r\n              maxlength=\"9\" OnlyNumber=\"true\" formControlName=\"celularTrab\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.celularTrab }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Teléfono fijo\" [className]=\"formErrors.fijo ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n              id=\"fijo\" maxlength=\"11\" OnlyNumber=\"true\" formControlName=\"fijo\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.fijo }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Teléfono de referencia en caso de emergencia\" [className]=\"formErrors.telefonoRef ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"telefonoRef\"\r\n              maxlength=\"11\" OnlyNumber=\"true\" formControlName=\"fijo\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.telefonoRef }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Teléfono Fijo del Trabajo\" [className]=\"formErrors.fijoTrab ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n              id=\"fijoTrab\" maxlength=\"11\" OnlyNumber=\"true\" formControlName=\"fijoTrab\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.fijoTrab }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Número de anexo\" [className]=\"formErrors.anexo ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"anexo\" \r\n            maxlength=\"6\" OnlyNumber=\"true\" formControlName=\"anexo\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.anexo }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"email\" placeholder=\"Email personal\" [className]=\"formErrors.email ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"email\" formControlName=\"email\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.email }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"email\" placeholder=\"Email del Trabajo\" [className]=\"formErrors.emailTrab ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"emailTrab\" formControlName=\"emailTrab\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.emailTrab }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Página Web o Linkedin o Facebook\" [className]=\"formErrors.web ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" maxlength=\"40\" \r\n              id=\"web\" formControlName=\"web\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.web }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Número de Licencia de conducir\" [className]=\"formErrors.email ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" OnlyNumber=\"true\"\r\n              id=\"nroLicencia\" formControlName=\"nroLicencia\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.nroLicencia }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"date\" [className]=\"formErrors.vigenciaLicencia ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n              id=\"vigenciaLicencia\" OnlyNumber=\"true\" formControlName=\"vigenciaLicencia\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.vigenciaLicencia }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <select type=\"text\" [className]=\"formErrors.catLicencia ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"catLicencia\"\r\n                formControlName=\"catLicencia\">\r\n              <option value=\"\" selected>Categoría de licencia de conducir</option>\r\n              <option value=\"A1\">A1</option>\r\n              <option value=\"A2\">A2</option>\r\n              <option value=\"A3\">A3</option>\r\n              <option value=\"B1\">B1</option>\r\n              <option value=\"B2\">B2</option>\r\n            </select>\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.catLicencia }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <hr>\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Autogenerado de Essalud\" [className]=\"formErrors.codSalud ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" OnlyNumber=\"true\" \r\n              id=\"codSalud\" formControlName=\"codSalud\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.codSalud }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <select [className]=\"formErrors.fondoPension ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"fondoPension\"\r\n              formControlName=\"fondoPension\">\r\n              <option value=\"\" selected>Fondo de Pensiones</option>\r\n              <option value=\"AFP\">AFP</option>\r\n              <option value=\"ONP\">ONP</option>\r\n            </select>\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.fondoPension }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <select [className]=\"formErrors.tipoAfp ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"tipoAfp\"\r\n              formControlName=\"tipoAfp\">\r\n              <option value=\"\" selected>Id de AFP</option>\r\n              <option value=\"AHB\">AHB</option>\r\n              <option value=\"AFP\">AFP</option>\r\n              <option value=\"AIN\">AIN</option>\r\n              <option value=\"APM\">APM</option>\r\n              <option value=\"SNP\">SNP</option>\r\n              <option value=\"ORP\">ORP</option>\r\n              <option value=\"JSP\">JSP</option>\r\n              <option value=\"CSS\">CSS</option>\r\n            </select>\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.tipoAfp }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Código único del sistema de pensiones\" [className]=\"formErrors.cuspp ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" OnlyNumber=\"true\"\r\n              id=\"cuspp\"  formControlName=\"cuspp\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.cuspp }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Profesión actual\" [className]=\"formErrors.profesion ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n              id=\"profesion\" formControlName=\"profesion\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.profesion }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Peso\" [className]=\"formErrors.peso ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n              id=\"peso\" formControlName=\"peso\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.peso }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Talla\" [className]=\"formErrors.talla ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n              id=\"talla\" formControlName=\"talla\">\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.talla }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <select type=\"text\" [className]=\"formErrors.contextura ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"contextura\" formControlName=\"contextura\">\r\n              <option value=\"\" selected>Contextura</option>\r\n              <option value=\"delgado\">delgado</option>\r\n              <option value=\"normal\">normal</option>\r\n              <option value=\"sobrepeso\">sobrepeso</option>\r\n            </select>\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.contextura }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <select type=\"text\" [className]=\"formErrors.grupoSangre ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"grupoSangre\" formControlName=\"grupoSangre\">\r\n              <option value=\"\" selected>Grupo Sanguíneo</option>\r\n              <option value=\"O+\">O+</option>\r\n              <option value=\"O-\">O-</option>\r\n              <option value=\"A+\">A+</option>\r\n              <option value=\"A-\">A-</option>\r\n              <option value=\"B+\">B+</option>\r\n              <option value=\"B-\">B-</option>\r\n              <option value=\"AB+\">AB+</option>\r\n              <option value=\"AB-\">AB-</option>\r\n            </select>\r\n            <small class=\"text-danger\">\r\n              {{ formErrors.grupoSangre }}\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n    \r\n        <div class=\"col-sm-4 form-group mb-4\">\r\n          <label>Foto del Empleado</label>\r\n          <input type=\"file\" placeholder=\"Foto del empleado\" formControlName=\"foto\" (change)=\"fileChangeEvent($event)\" name=\"image\">\r\n          <img id=\"preview\" src=\"{{imagen}}\">\r\n          <small>* Solo arhivos .jpg o .png y max. de tamaño 5MB</small>\r\n        </div>\r\n        \r\n       \r\n\r\n      </div> -->\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Primer nombre *\" [className]=\"formErrors.nombre ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"nombre\" formControlName=\"nombre\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.nombre }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Segundo nombre\" [className]=\"formErrors.nombre2 ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"nombre2\" formControlName=\"nombre2\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.nombre2 }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Primer apellido *\" [className]=\"formErrors.paterno ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"paterno\" formControlName=\"paterno\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.paterno }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Segundo apellido *\" [className]=\"formErrors.materno ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"materno\" formControlName=\"materno\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.materno }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Número de DNI *\" [className]=\"formErrors.nrodni ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"nroDNI\" OnlyNumber=\"true\" maxlength=\"8\" formControlName=\"nrodni\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.nrodni }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"date\" placeholder=\"Vigencia del documento de identidad *\" [className]=\"formErrors.vigenciadni ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"vigenciaDNI\" OnlyNumber=\"true\" formControlName=\"vigenciadni\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.vigenciadni }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Número de RUC\" [className]=\"formErrors.nroruc ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"nroRUC\" maxlength=\"11\" OnlyNumber=\"true\" formControlName=\"nroruc\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.nroruc }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Número de Pasaporte\" [className]=\"formErrors.nropasaporte ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"nroPasaporte\" maxlength=\"15\" OnlyNumber=\"true\" formControlName=\"nropasaporte\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.nropasaporte }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input placeholder=\"Vigencia de Pasaporte\" type=\"date\" [className]=\"formErrors.vigenciapasaporte ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"vigenciaPasaporte\" OnlyNumber=\"true\" formControlName=\"vigenciapasaporte\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.vigenciapasaporte }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <select [className]=\"formErrors.estadocivil ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"estadoCivil\"\r\n                formControlName=\"estadocivil\">\r\n                <option value=\"\" selected>Estado Civil *</option>\r\n                <option value=\"soltero\">soltero</option>\r\n                <option value=\"casado\">casado</option>\r\n                <option value=\"viudo\">viudo</option>\r\n                <option value=\"divorciado\">divorciado</option>\r\n                <option value=\"conviviente\">conviviente</option>\r\n                <option value=\"separado\">separado</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.estadocivil }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <select [className]=\"formErrors.sexo ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"sexo\" formControlName=\"sexo\">\r\n                <option value=\"\" selected>Sexo *</option>\r\n                <option value=\"femenino\">femenino</option>\r\n                <option value=\"masculino\">masculino</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.sexo }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"date\" [className]=\"formErrors.fechanacimiento ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"fechaNacimiento\" OnlyNumber=\"true\" formControlName=\"fechanacimiento\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.fechanacimiento }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Número de celular personal\" [className]=\"formErrors.celular ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"celular\" maxlength=\"9\" OnlyNumber=\"true\" formControlName=\"celular\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.celular }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Número del celular del trabajo\" [className]=\"formErrors.celulartrab ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"celularTrab\" maxlength=\"9\" OnlyNumber=\"true\" formControlName=\"celulartrab\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.celulartrab }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Teléfono fijo\" [className]=\"formErrors.fijo ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"fijo\" maxlength=\"11\" OnlyNumber=\"true\" formControlName=\"fijo\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.fijo }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Teléfono de referencia en caso de emergencia\" [className]=\"formErrors.telefonoref ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"telefonoRef\" maxlength=\"11\" OnlyNumber=\"true\" formControlName=\"telefonoref\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.telefonoref }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Teléfono Fijo del Trabajo\" [className]=\"formErrors.fijotrab ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"fijoTrab\" maxlength=\"11\" OnlyNumber=\"true\" formControlName=\"fijotrab\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.fijotrab }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Número de anexo\" [className]=\"formErrors.anexo ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"anexo\" maxlength=\"6\" OnlyNumber=\"true\" formControlName=\"anexo\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.anexo }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"email\" placeholder=\"Email personal\" [className]=\"formErrors.email ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" formControlName=\"email\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.email }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"email\" placeholder=\"Email del Trabajo\" [className]=\"formErrors.emailtrab ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" formControlName=\"emailtrab\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.emailtrab }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Página Web o Linkedin o Facebook\" [className]=\"formErrors.web ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" maxlength=\"40\" formControlName=\"web\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.web }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Número de Licencia de conducir\" [className]=\"formErrors.nrolicencia ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" OnlyNumber=\"true\" formControlName=\"nrolicencia\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.nrolicencia }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"date\" [className]=\"formErrors.vigencialicencia ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" OnlyNumber=\"true\" formControlName=\"vigencialicencia\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.vigencialicencia }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <select type=\"text\" [className]=\"formErrors.catlicencia ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" formControlName=\"catlicencia\">\r\n                <option value=\"\" selected>Categoría de licencia de conducir</option>\r\n                <option value=\"A1\">A1</option>\r\n                <option value=\"A2\">A2</option>\r\n                <option value=\"A3\">A3</option>\r\n                <option value=\"B1\">B1</option>\r\n                <option value=\"B2\">B2</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.catlicencia }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Autogenerado de Essalud\" [className]=\"formErrors.codsalud ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" OnlyNumber=\"true\" formControlName=\"codsalud\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.codsalud }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <select [className]=\"formErrors.fondopension ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                formControlName=\"fondopension\">\r\n                <option value=\"\" selected>Fondo de Pensiones</option>\r\n                <option value=\"AFP\">AFP</option>\r\n                <option value=\"ONP\">ONP</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.fondopension }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <select [className]=\"formErrors.tipoafp ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" formControlName=\"tipoafp\">\r\n                <option value=\"\" selected>Id de AFP</option>\r\n                <option value=\"AHB\">AHB</option>\r\n                <option value=\"AFP\">AFP</option>\r\n                <option value=\"AIN\">AIN</option>\r\n                <option value=\"APM\">APM</option>\r\n                <option value=\"SNP\">SNP</option>\r\n                <option value=\"ORP\">ORP</option>\r\n                <option value=\"JSP\">JSP</option>\r\n                <option value=\"CSS\">CSS</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.tipoafp }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Código único del sistema de pensiones\" [className]=\"formErrors.cuspp ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" OnlyNumber=\"true\"  formControlName=\"cuspp\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.cuspp }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Profesión actual\" [className]=\"formErrors.profesion ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" formControlName=\"profesion\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.profesion }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Peso\" [className]=\"formErrors.peso ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n              formControlName=\"peso\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.peso }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Talla\" [className]=\"formErrors.talla ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" formControlName=\"talla\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.talla }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <select type=\"text\" [className]=\"formErrors.contextura ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" formControlName=\"contextura\">\r\n                <option value=\"\" selected>Contextura</option>\r\n                <option value=\"delgado\">delgado</option>\r\n                <option value=\"normal\">normal</option>\r\n                <option value=\"sobrepeso\">sobrepeso</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.contextura }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <select type=\"text\" [className]=\"formErrors.gruposangre ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" formControlName=\"gruposangre\">\r\n                <option value=\"\" selected>Grupo Sanguíneo</option>\r\n                <option value=\"O+\">O+</option>\r\n                <option value=\"O-\">O-</option>\r\n                <option value=\"A+\">A+</option>\r\n                <option value=\"A-\">A-</option>\r\n                <option value=\"B+\">B+</option>\r\n                <option value=\"B-\">B-</option>\r\n                <option value=\"AB+\">AB+</option>\r\n                <option value=\"AB-\">AB-</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.gruposangre }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n          \r\n          \r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Foto del Empleado</label>\r\n              <input type=\"file\" placeholder=\"Foto del empleado\" formControlName=\"foto\" (change)=\"fileChangeEvent($event)\" name=\"image\">\r\n              <img id=\"preview\" src=\"{{imagen}}\">\r\n              <!-- <small>* Solo arhivos .jpg o .png y max. de tamaño 5MB</small> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"text-right mt-4 mb-5\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" routerLinkActive=\"active\" routerLink=\"/personal\">Cancelar</button>\r\n        <button class=\"btn btn-primary btn-air ml-2\" type=\"submit\" [disabled]=\"!personalForm.valid\" >Guardar</button>\r\n      </div>\r\n\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/new-personal/new-personal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/new-personal/new-personal.component.ts ***!
  \**************************************************************/
/*! exports provided: NewPersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPersonalComponent", function() { return NewPersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewPersonalComponent = /** @class */ (function () {
    function NewPersonalComponent(fb, pes, toastr, router, afStorage) {
        this.fb = fb;
        this.pes = pes;
        this.toastr = toastr;
        this.router = router;
        this.afStorage = afStorage;
        this.imagen = '';
        this.formErrors = {
            'idpersona': '',
            'nombre': '',
            'nombre2': '',
            'paterno': '',
            'materno': '',
            'nroDNI': '',
            'vigenciadni': '',
            'nroruc': '',
            'nropasaporte': '',
            'vigenciapasaporte': '',
            'estadocivil': '',
            'sexo': '',
            'fechanacimiento': '',
            'celular': '',
            'celulartrab': '',
            'fijo': '',
            'telefonoref': '',
            'fijotrab': '',
            'anexo': '',
            'email': '',
            'emailtrab': '',
            'web': '',
            'nrolicencia': '',
            'vigencialicencia': '',
            'catLicencia': '',
            'codsalud': '',
            'fondopension': '',
            'tipoafp': '',
            'cuspp': '',
            'profesion': '',
            'peso': '',
            'talla': '',
            'contextura': '',
            'gruposangre': '',
            'foto': ''
        };
        this.validationMessages = {
            'idpersona': {
                'required': 'Este campo es obligatorio',
                'pattern': 'Solo números'
            },
            'nombre': {
                'required': 'Este campo es obligatorio',
                'pattern': 'Ingresa un nombre válido'
            },
            'nombre2': {
                'pattern': 'Ingresa un nombre válido'
            },
            'paterno': {
                'required': 'Este campo es obligatorio',
                'pattern': 'Ingresa un apellido válido'
            },
            'materno': {
                'required': 'Este campo es obligatorio',
                'pattern': 'Ingrese un apellido válido'
            },
            'nrodni': {
                'pattern': 'Ingrese un número válido',
                'required': 'Este campo es obligatorio'
            },
            'vigenciadni': {
                'required': 'Este campo es obligatorio',
            },
            'nroruc': {
                'pattern': 'Ingrese un número válido'
            },
            'nropasaporte': {
                'pattern': 'Ingrese un número válido'
            },
            'vigenciapasaporte': {},
            'estadocivil': {
                'required': 'Este campo es obligatorio',
            },
            'sexo': {
                'required': 'Este campo es obligatorio'
            },
            'fechanacimiento': {
                'required': 'Este campo es obligatorio'
            },
            'celular': {
                'maxLength': 'Puede tener hasta 9 dígitos'
            },
            'celulartrab': {
                'maxLength': 'Puede tener hasta 9 dígitos'
            },
            'fijo': {
                'maxLength': 'Puede tener hasta 9 dígitos'
            },
            'telefonoref': {
                'maxLength': 'Puede tener hasta 9 dígitos'
            },
            'fijotrab': {
                'maxLength': 'Puede tener hasta 9 dígitos'
            },
            'anexo': {
                'maxLength': 'Puede tener hasta 9 dígitos'
            },
            'email': {
                'email': 'Ingrese un email válido'
            },
            'emailtrab': {
                'email': 'Ingrese un email válido'
            },
            'web': {
                'maxLength': 'Puede tener hasta 40 carácteres'
            },
            'nrolicencia': {
                'pattern': 'Ingrese un número válido'
            },
            'vigencialicencia': {},
            'catlicencia': {
                'maxLength': 'Puede tener hasta 3 digitos'
            },
            'codsalud': {
                'pattern': 'Ingrese un número válido'
            },
            'fondopension': {
                'maxLength': 'Puede tener hasta 3 digitos'
            },
            'tipoafp': {
                'maxLength': 'Puede tener hasta 3 digitos'
            },
            'cuspp': {
                'pattern': 'Ingrese un número válido'
            },
            'profesion': {
                'maxLength': 'Puede tener hata 30 digitos'
            },
            'peso': {},
            'talla': {},
            'contextura': {
                'maxLength': 'Puede tener hasta 15 digitos'
            },
            'gruposangre': {
                'maxLength': 'Puede tener hasta 3 digitos'
            },
            'foto': {}
        };
    }
    NewPersonalComponent.prototype.ngOnChanges = function () {
        this.rebuildForm();
    };
    NewPersonalComponent.prototype.rebuildForm = function () {
        this.personalForm.reset();
    };
    NewPersonalComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    NewPersonalComponent.prototype.addPersonal = function () {
        this.pes.addPersonal(this.personalForm.value)
            .subscribe(function (data) {
            return console.log(data);
        });
        //this.afStorage.upload('/fotos', this.file); 
        this.router.navigate(['/personal']);
    };
    NewPersonalComponent.prototype.addNew = function () {
        var route = this.router;
        var afs = this.afStorage;
        var file = this.file;
        this.pes.addPersonalfb(this.personalForm.value)
            .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            if (file) {
                console.log(file);
                afs.upload(docRef.id, file);
            }
            route.navigate(['/personal']);
        });
    };
    NewPersonalComponent.prototype.fileChangeEvent = function (fileInput) {
        var file = fileInput.target.files;
        this.file = fileInput.target.files[0];
        console.log(file);
        var fileExtension = file[0].name.substr(file[0].name.length - 3);
        if (fileExtension != "png" && fileExtension != 'jpg') {
            this.toastr.error('Contraseña incorrecta', 'Intenta otra vez', {
                timeOut: 3000,
            });
        }
        else {
            var size = file[0].size / 1024 / 1024;
            console.log(size);
            if (size > 5) {
                this.toastr.error('La foto supera el máximo de tamaño permitido 5MB');
            }
            else {
                //var user = this.user;
                var imagen = this.imagen;
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#preview').attr('src', e.target.result);
                    imagen = e.target.result;
                    //user.image = e.target.result.split(',')[1];
                };
                reader.readAsDataURL(file[0]);
            }
        }
    };
    //construye el formulario
    NewPersonalComponent.prototype.buildForm = function () {
        var _this = this;
        this.personalForm = this.fb.group({
            'idpersona': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')
                ]],
            'nombre': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1])[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')
                ]],
            'nombre2': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1])[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')
                ]],
            'paterno': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1])[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')
                ]],
            'materno': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1])[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')
                ]],
            'nrodni': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            'vigenciadni': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            'nroruc': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)
                ]],
            'nropasaporte': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)
                ]],
            'vigenciapasaporte': ['', []],
            'estadocivil': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)
                ]],
            'sexo': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(9)
                ]],
            'fechanacimiento': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            'celular': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)
                ]],
            'celulartrab': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)
                ]],
            'fijo': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)
                ]],
            'telefonoref': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)
                ]],
            'fijotrab': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)
                ]],
            'anexo': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)
                ]],
            'email': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)
                ]],
            'emailtrab': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)
                ]],
            'web': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)
                ]],
            'nrolicencia': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')
                ]],
            'vigencialicencia': ['', []],
            'catlicencia': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)
                ]],
            'codsalud': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')
                ]],
            'fondopension': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)
                ]],
            'tipoafp': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)
                ]],
            'cuspp': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')
                ]],
            'profesion': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)
                ]],
            'peso': ['', []],
            'talla': ['', []],
            'contextura': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)
                ]],
            'gruposangre': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)
                ]],
            'foto': ['', []]
        });
        this.personalForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset validation messages
    };
    // Updates validation state on form changes.
    NewPersonalComponent.prototype.onValueChanged = function (data) {
        if (!this.personalForm) {
            return;
        }
        var form = this.personalForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    NewPersonalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-personal',
            template: __webpack_require__(/*! ./new-personal.component.html */ "./src/app/pages/new-personal/new-personal.component.html"),
            styles: [__webpack_require__(/*! ./new-personal.component.css */ "./src/app/pages/new-personal/new-personal.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_personal_service__WEBPACK_IMPORTED_MODULE_3__["PersonalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]])
    ], NewPersonalComponent);
    return NewPersonalComponent;
}());



/***/ }),

/***/ "./src/app/pages/personal-edit/personal-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/personal-edit/personal-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/personal-edit/personal-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/personal-edit/personal-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"bg-white\">\r\n    <form [formGroup]=\"personalForm\" (ngSubmit)=\"editPersonal()\">\r\n      <h3 class=\"mt-4\">Nuevo Personal</h3>\r\n      <hr>\r\n\r\n\r\n      <!-- <div class=\"row\">\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"nombre\" class=\"col-form-label\">Primer nombre\r\n              <span>*</span>\r\n            </label>\r\n            <div class=\"\">\r\n              <input type=\"text\" [className]=\"formErrors.nombre ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"nombre\" formControlName=\"nombre\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.nombre }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"nombre2\" class=\"col-form-label\">Segundo nombre</label>\r\n            <div class=\"full-input\">\r\n              <input type=\"text\" [className]=\"formErrors.nombre2 ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"nombre2\"\r\n                formControlName=\"nombre2\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.nombre2 }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"paterno\" class=\"col-form-label\">Primer apellido\r\n              <span>*</span>\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"text\" [className]=\"formErrors.paterno ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"paterno\"\r\n                formControlName=\"paterno\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.paterno }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"materno\" class=\"col-form-label\">Segundo apellido\r\n              <span>*</span>\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"text\" [className]=\"formErrors.materno ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"materno\"\r\n                formControlName=\"materno\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.materno }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"nroDNI\" class=\"col-form-label\">Número de DNI\r\n              <span>*</span>\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"text\" [className]=\"formErrors.nroDNI ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"nroDNI\"\r\n                OnlyNumber=\"true\" maxlength=\"8\" formControlName=\"nroDNI\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.nroDNI }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"vigenciaDNI\" class=\"col-form-label\">Vigencia del documento de identidad\r\n              <span>*</span>\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"date\" [className]=\"formErrors.vigenciaDNI ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"vigenciaDNI\" OnlyNumber=\"true\" formControlName=\"vigenciaDNI\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.vigenciaDNI }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"nroRUC\" class=\"col-form-label\">Número de RUC\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"text\" [className]=\"formErrors.nroRUC ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"nroRUC\"\r\n                maxlength=\"11\" OnlyNumber=\"true\" formControlName=\"nroRUC\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.nroRUC }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"nroPasaporte\" class=\"col-form-label\">Número de Pasaporte\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"text\" [className]=\"formErrors.nroPasaporte ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"nroPasaporte\" maxlength=\"15\" OnlyNumber=\"true\" formControlName=\"nroPasaporte\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.nroPasaporte }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"vigenciaPasaporte\" class=\"col-form-label\">Vigencia del Pasaporte\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"date\" [className]=\"formErrors.vigenciaPasaporte ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"vigenciaPasaporte\" OnlyNumber=\"true\" formControlName=\"vigenciaPasaporte\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.vigenciaPasaporte }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"estadoCivil\" class=\"col-form-label\">Estado civil\r\n              <span>*</span>\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <select type=\"text\" [className]=\"formErrors.estadoCivil ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"estadoCivil\" formControlName=\"estadoCivil\">\r\n                <option value=\"soltero\">soltero</option>\r\n                <option value=\"casado\">casado</option>\r\n                <option value=\"viudo\">viudo</option>\r\n                <option value=\"divorciado\">divorciado</option>\r\n                <option value=\"conviviente\">conviviente</option>\r\n                <option value=\"separado\">separado</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.estadoCivil }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"sexo\" class=\"col-form-label\">Género\r\n              <span>*</span>\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <select type=\"text\" [className]=\"formErrors.sexo ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"sexo\"\r\n                formControlName=\"sexo\">\r\n                <option value=\"femenino\">femenino</option>\r\n                <option value=\"masculino\">masculino</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.sexo }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"fechaNacimiento\" class=\"col-form-label\">Fecha de Nacimiento\r\n              <span>*</span>\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"date\" [className]=\"formErrors.fechaNacimiento ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"fechaNacimiento\" OnlyNumber=\"true\" formControlName=\"fechaNacimiento\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.fechaNacimiento }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <hr>\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"celular\" class=\"col-form-label\">Celular\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"text\" [className]=\"formErrors.celular ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"celular\"\r\n                maxlength=\"9\" OnlyNumber=\"true\" formControlName=\"celular\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.celular }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"celularTrab\" class=\"col-form-label\">Celular de Trabajo\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"text\" [className]=\"formErrors.celularTrab ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"celularTrab\" maxlength=\"9\" OnlyNumber=\"true\" formControlName=\"celularTrab\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.celularTrab }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"fijo\" class=\"col-form-label\">Teléfono fijo\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"text\" [className]=\"formErrors.fijo ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"fijo\"\r\n                maxlength=\"11\" OnlyNumber=\"true\" formControlName=\"fijo\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.fijo }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"telefonoRef\" class=\"col-form-label\">Teléfono de Referencia\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"text\" [className]=\"formErrors.telefonoRef ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"telefonoRef\" maxlength=\"11\" OnlyNumber=\"true\" formControlName=\"fijo\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.telefonoRef }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"fijoTrab\" class=\"col-form-label\">Teléfono Fijo del Trabajo\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"text\" [className]=\"formErrors.fijoTrab ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"fijoTrab\"\r\n                maxlength=\"11\" OnlyNumber=\"true\" formControlName=\"fijoTrab\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.fijoTrab }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"anexo\" class=\"col-form-label\">Anexo\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"text\" [className]=\"formErrors.anexo ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"anexo\"\r\n                maxlength=\"6\" OnlyNumber=\"true\" formControlName=\"anexo\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.anexo }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"email\" class=\"col-form-label\">Email\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"email\" [className]=\"formErrors.email ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"email\"\r\n                placeholder=\"example@example\" formControlName=\"email\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.email }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"emailTrab\" class=\"col-form-label\">Email de Trabajo\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"email\" [className]=\"formErrors.emailTrab ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"emailTrab\" placeholder=\"example@example\" formControlName=\"emailTrab\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.emailTrab }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"web\" class=\"col-form-label\">Web\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"text\" [className]=\"formErrors.web ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" maxlength=\"40\"\r\n                id=\"web\" formControlName=\"web\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.web }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"nroLicencia\" class=\"col-form-label\">Número de Licencia\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"text\" [className]=\"formErrors.nroLicencia ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                OnlyNumber=\"true\" id=\"nroLicencia\" formControlName=\"nroLicencia\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.nroLicencia }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"vigenciaLicencia\" class=\"col-form-label\">Vigencia de Licencia\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"date\" [className]=\"formErrors.vigenciaLicencia ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"vigenciaLicencia\" OnlyNumber=\"true\" formControlName=\"vigenciaLicencia\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.vigenciaLicencia }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"catLicencia\" class=\"col-form-label\">Categoría de Licencia\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <select type=\"text\" [className]=\"formErrors.catLicencia ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"catLicencia\" formControlName=\"catLicencia\">\r\n                <option value=\"A1\">A1</option>\r\n                <option value=\"A2\">A2</option>\r\n                <option value=\"A3\">A3</option>\r\n                <option value=\"B1\">B1</option>\r\n                <option value=\"B2\">B2</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.catLicencia }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <hr>\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"codSalud\" class=\"col-form-label\">Autogenerado de Essalud\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"text\" [className]=\"formErrors.codSalud ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" OnlyNumber=\"true\"\r\n                id=\"codSalud\" formControlName=\"codSalud\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.codSalud }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"fondoPension\" class=\"col-form-label\">Fondo de Pensiones\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <select type=\"text\" [className]=\"formErrors.fondoPension ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"fondoPension\" formControlName=\"fondoPension\">\r\n                <option value=\"AFP\">AFP</option>\r\n                <option value=\"ONP\">ONP</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.fondoPension }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"tipoAfp\" class=\"col-form-label\">Id de AFP\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <select type=\"text\" [className]=\"formErrors.tipoAfp ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"tipoAfp\"\r\n                formControlName=\"tipoAfp\">\r\n                <option value=\"AHB\">AHB</option>\r\n                <option value=\"AFP\">AFP</option>\r\n                <option value=\"AIN\">AIN</option>\r\n                <option value=\"APM\">APM</option>\r\n                <option value=\"SNP\">SNP</option>\r\n                <option value=\"ORP\">ORP</option>\r\n                <option value=\"JSP\">JSP</option>\r\n                <option value=\"CSS\">CSS</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.tipoAfp }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"cuspp\" class=\"col-form-label\">Código único del sistema\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"text\" [className]=\"formErrors.cuspp ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" OnlyNumber=\"true\"\r\n                id=\"cuspp\" formControlName=\"cuspp\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.cuspp }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"profesion\" class=\"col-form-label\">Profesión actual\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"text\" [className]=\"formErrors.profesion ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"profesion\"\r\n                formControlName=\"profesion\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.profesion }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-\">\r\n          <div class=\"form-group\">\r\n            <label for=\"peso\" class=\"col-form-label\">Peso\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"text\" [className]=\"formErrors.peso ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"peso\"\r\n                formControlName=\"peso\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.peso }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"talla\" class=\"col-form-label\">Talla\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <input type=\"email\" [className]=\"formErrors.talla ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"talla\"\r\n                formControlName=\"talla\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.talla }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"contextura\" class=\"col-form-label\">Contextura\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <select type=\"text\" [className]=\"formErrors.contextura ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"contextura\" formControlName=\"contextura\">\r\n                <option value=\"delgado\">delgado</option>\r\n                <option value=\"normal\">normal</option>\r\n                <option value=\"sobrepeso\">sobrepeso</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.contextura }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"grupoSangre\" class=\"col-form-label\">Grupo Sanguíneo\r\n            </label>\r\n            <div class=\"full-input\">\r\n              <select type=\"text\" [className]=\"formErrors.grupoSangre ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"grupoSangre\" formControlName=\"grupoSangre\">\r\n                <option value=\"O+\">O+</option>\r\n                <option value=\"O-\">O-</option>\r\n                <option value=\"A+\">A+</option>\r\n                <option value=\"A-\">A-</option>\r\n                <option value=\"B+\">B+</option>\r\n                <option value=\"B-\">B-</option>\r\n                <option value=\"AB+\">AB+</option>\r\n                <option value=\"AB-\">AB-</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.grupoSangre }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4 form-group mb-4\">\r\n          <label>Foto del Empleado</label>\r\n          <div class=\"file-input-plus file-input\">\r\n            <i class=\"la la-plus-circle\"></i>\r\n            <input type=\"file\"  (change)=\"fileChangeEvent($event)\" name=\"image\">\r\n          </div>\r\n          <img id=\"preview\" src=\"{{imagen}}\">\r\n          <div>\r\n            <p class=\"info\">* Solo arhivos .jpg o .png y max. de tamaño 5MB</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div> -->\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Primer nombre *\" [className]=\"formErrors.nombre ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"nombre\" formControlName=\"nombre\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.nombre }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Segundo nombre\" [className]=\"formErrors.nombre2 ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"nombre2\" formControlName=\"nombre2\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.nombre2 }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Primer apellido *\" [className]=\"formErrors.paterno ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"paterno\" formControlName=\"paterno\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.paterno }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Segundo apellido *\" [className]=\"formErrors.materno ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"materno\" formControlName=\"materno\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.materno }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Número de DNI *\" [className]=\"formErrors.nrodni ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"nrodni\" OnlyNumber=\"true\" maxlength=\"8\" formControlName=\"nrodni\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.nrodni }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"date\" placeholder=\"Vigencia del documento de identidad *\" [className]=\"formErrors.vigenciadni ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"vigenciaDNI\" OnlyNumber=\"true\" formControlName=\"vigenciadni\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.vigenciadni }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Número de RUC\" [className]=\"formErrors.nroruc ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"nroRUC\" maxlength=\"11\" OnlyNumber=\"true\" formControlName=\"nroruc\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.nroruc }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Número de Pasaporte\" [className]=\"formErrors.nropasaporte ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"nroPasaporte\" maxlength=\"15\" OnlyNumber=\"true\" formControlName=\"nropasaporte\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.nropasaporte }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input placeholder=\"Vigencia de Pasaporte\" type=\"date\" [className]=\"formErrors.vigenciapasaporte ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"vigenciaPasaporte\" OnlyNumber=\"true\" formControlName=\"vigenciapasaporte\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.vigenciapasaporte }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <select [className]=\"formErrors.estadocivil ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"estadoCivil\"\r\n                formControlName=\"estadocivil\">\r\n                <option value=\"\" selected>Estado Civil *</option>\r\n                <option value=\"soltero\">soltero</option>\r\n                <option value=\"casado\">casado</option>\r\n                <option value=\"viudo\">viudo</option>\r\n                <option value=\"divorciado\">divorciado</option>\r\n                <option value=\"conviviente\">conviviente</option>\r\n                <option value=\"separado\">separado</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.estadocivil }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <select [className]=\"formErrors.sexo ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"sexo\" formControlName=\"sexo\">\r\n                <option value=\"\" selected>Sexo *</option>\r\n                <option value=\"femenino\">femenino</option>\r\n                <option value=\"masculino\">masculino</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.sexo }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"date\" [className]=\"formErrors.fechanacimiento ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"fechaNacimiento\" OnlyNumber=\"true\" formControlName=\"fechanacimiento\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.fechanacimiento }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Número de celular personal\" [className]=\"formErrors.celular ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"celular\" maxlength=\"9\" OnlyNumber=\"true\" formControlName=\"celular\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.celular }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Número del celular del trabajo\" [className]=\"formErrors.celulartrab ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"celularTrab\" maxlength=\"9\" OnlyNumber=\"true\" formControlName=\"celulartrab\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.celulartrab }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Teléfono fijo\" [className]=\"formErrors.fijo ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"fijo\" maxlength=\"11\" OnlyNumber=\"true\" formControlName=\"fijo\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.fijo }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Teléfono de referencia en caso de emergencia\" [className]=\"formErrors.telefonoref ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"telefonoRef\" maxlength=\"11\" OnlyNumber=\"true\" formControlName=\"telefonoref\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.telefonoref }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Teléfono Fijo del Trabajo\" [className]=\"formErrors.fijotrab ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"fijoTrab\" maxlength=\"11\" OnlyNumber=\"true\" formControlName=\"fijotrab\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.fijotrab }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Número de anexo\" [className]=\"formErrors.anexo ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"anexo\" maxlength=\"6\" OnlyNumber=\"true\" formControlName=\"anexo\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.anexo }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"email\" placeholder=\"Email personal\" [className]=\"formErrors.email ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"email\" formControlName=\"email\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.email }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"email\" placeholder=\"Email del Trabajo\" [className]=\"formErrors.emailtrab ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"emailTrab\" formControlName=\"emailtrab\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.emailtrab }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Página Web o Linkedin o Facebook\" [className]=\"formErrors.web ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" maxlength=\"40\" id=\"web\" formControlName=\"web\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.web }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Número de Licencia de conducir\" [className]=\"formErrors.nrolicencia ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" OnlyNumber=\"true\" id=\"nroLicencia\" formControlName=\"nrolicencia\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.nrolicencia }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"date\" [className]=\"formErrors.vigencialicencia ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"vigenciaLicencia\" OnlyNumber=\"true\" formControlName=\"vigencialicencia\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.vigencialicencia }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <select type=\"text\" [className]=\"formErrors.catlicencia ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"catLicencia\" formControlName=\"catlicencia\">\r\n                <option value=\"\" selected>Categoría de licencia de conducir</option>\r\n                <option value=\"A1\">A1</option>\r\n                <option value=\"A2\">A2</option>\r\n                <option value=\"A3\">A3</option>\r\n                <option value=\"B1\">B1</option>\r\n                <option value=\"B2\">B2</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.catlicencia }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Autogenerado de Essalud\" [className]=\"formErrors.codsalud ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" OnlyNumber=\"true\" id=\"codSalud\" formControlName=\"codsalud\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.codsalud }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <select [className]=\"formErrors.fondopension ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"fondoPension\"\r\n                formControlName=\"fondopension\">\r\n                <option value=\"\" selected>Fondo de Pensiones</option>\r\n                <option value=\"AFP\">AFP</option>\r\n                <option value=\"ONP\">ONP</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.fondopension }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <select [className]=\"formErrors.tipoafp ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\" id=\"tipoAfp\" formControlName=\"tipoafp\">\r\n                <option value=\"\" selected>Id de AFP</option>\r\n                <option value=\"AHB\">AHB</option>\r\n                <option value=\"AFP\">AFP</option>\r\n                <option value=\"AIN\">AIN</option>\r\n                <option value=\"APM\">APM</option>\r\n                <option value=\"SNP\">SNP</option>\r\n                <option value=\"ORP\">ORP</option>\r\n                <option value=\"JSP\">JSP</option>\r\n                <option value=\"CSS\">CSS</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.tipoafp }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Código único del sistema de pensiones\" [className]=\"formErrors.cuspp ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" OnlyNumber=\"true\" id=\"cuspp\" formControlName=\"cuspp\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.cuspp }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Profesión actual\" [className]=\"formErrors.profesion ? 'form-control is-invalid' : 'form-control'\"\r\n                class=\"form-control\" id=\"profesion\" formControlName=\"profesion\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.profesion }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Peso\" [className]=\"formErrors.peso ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"peso\" formControlName=\"peso\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.peso }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Talla\" [className]=\"formErrors.talla ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"talla\" formControlName=\"talla\">\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.talla }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <select type=\"text\" [className]=\"formErrors.contextura ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"contextura\" formControlName=\"contextura\">\r\n                <option value=\"\" selected>Contextura</option>\r\n                <option value=\"delgado\">delgado</option>\r\n                <option value=\"normal\">normal</option>\r\n                <option value=\"sobrepeso\">sobrepeso</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.contextura }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <select type=\"text\" [className]=\"formErrors.gruposangre ? 'form-control is-invalid' : 'form-control'\" class=\"form-control\"\r\n                id=\"grupoSangre\" formControlName=\"gruposangre\">\r\n                <option value=\"\" selected>Grupo Sanguíneo</option>\r\n                <option value=\"O+\">O+</option>\r\n                <option value=\"O-\">O-</option>\r\n                <option value=\"A+\">A+</option>\r\n                <option value=\"A-\">A-</option>\r\n                <option value=\"B+\">B+</option>\r\n                <option value=\"B-\">B-</option>\r\n                <option value=\"AB+\">AB+</option>\r\n                <option value=\"AB-\">AB-</option>\r\n              </select>\r\n              <small class=\"text-danger\">\r\n                {{ formErrors.gruposangre }}\r\n              </small>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <label>Foto del Empleado</label>\r\n              <input type=\"file\" placeholder=\"Foto del empleado\" (change)=\"fileChangeEvent($event)\" name=\"image\">\r\n              <img id=\"preview\" src=\"{{imagen}}\">\r\n              <!-- <small>* Solo arhivos .jpg o .png y max. de tamaño 5MB</small> -->\r\n              <img  src=\"{{img}}\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"text-right mt-4 mb-5\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" routerLinkActive=\"active\" routerLink=\"/personal\">Cancelar</button>\r\n        <button class=\"btn btn-primary btn-air ml-2\" type=\"submit\">Guardar</button>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/personal-edit/personal-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/personal-edit/personal-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: PersonalEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalEditComponent", function() { return PersonalEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PersonalEditComponent = /** @class */ (function () {
    function PersonalEditComponent(fb, pes, router, route, toastr, afStorage) {
        this.fb = fb;
        this.pes = pes;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.afStorage = afStorage;
        this.imagen = '';
        this.formErrors = {
            'idpersona': '',
            'nombre': '',
            'nombre2': '',
            'paterno': '',
            'materno': '',
            'nrodni': '',
            'vigenciadni': '',
            'nroruc': '',
            'nropasaporte': '',
            'vigenciapasaporte': '',
            'estadocivil': '',
            'sexo': '',
            'fechanacimiento': '',
            'celular': '',
            'celulartrab': '',
            'fijo': '',
            'telefonoref': '',
            'fijotrab': '',
            'anexo': '',
            'email': '',
            'emailtrab': '',
            'web': '',
            'nrolicencia': '',
            'vigencialicencia': '',
            'catlicencia': '',
            'codsalud': '',
            'fondopension': '',
            'tipoafp': '',
            'cuspp': '',
            'profesion': '',
            'peso': '',
            'talla': '',
            'contextura': '',
            'gruposangre': '',
            'foto': ''
        };
        this.validationMessages = {
            'idpersona': {
                'required': 'Este campo es obligatorio',
                'pattern': 'Solo números'
            },
            'nombre': {
                'required': 'Este campo es obligatorio',
                'pattern': 'Ingresa un nombre válido'
            },
            'nombre2': {
                'pattern': 'Ingresa un nombre válido'
            },
            'paterno': {
                'required': 'Este campo es obligatorio',
                'pattern': 'Ingresa un apellido válido'
            },
            'materno': {
                'required': 'Este campo es obligatorio',
                'pattern': 'Ingrese un apellido válido'
            },
            'nrodni': {
                'pattern': 'Ingrese un número válido',
                'required': 'Este campo es obligatorio'
            },
            'vigenciadni': {
                'required': 'Este campo es obligatorio',
            },
            'nroruc': {
                'pattern': 'Ingrese un número válido'
            },
            'nropasaporte': {
                'pattern': 'Ingrese un número válido'
            },
            'vigenciapasaporte': {},
            'estadocivil': {
                'required': 'Este campo es obligatorio',
            },
            'sexo': {
                'required': 'Este campo es obligatorio'
            },
            'fechanacimiento': {
                'required': 'Este campo es obligatorio'
            },
            'celular': {
                'maxLength': 'Puede tener hasta 9 dígitos'
            },
            'celulartrab': {
                'maxLength': 'Puede tener hasta 9 dígitos'
            },
            'fijo': {
                'maxLength': 'Puede tener hasta 9 dígitos'
            },
            'telefonoref': {
                'maxLength': 'Puede tener hasta 9 dígitos'
            },
            'fijotrab': {
                'maxLength': 'Puede tener hasta 9 dígitos'
            },
            'anexo': {
                'maxLength': 'Puede tener hasta 9 dígitos'
            },
            'email': {
                'email': 'Ingrese un email válido'
            },
            'emailtrab': {
                'email': 'Ingrese un email válido'
            },
            'web': {
                'maxLength': 'Puede tener hasta 40 carácteres'
            },
            'nrolicencia': {
                'pattern': 'Ingrese un número válido'
            },
            'vigencialicencia': {},
            'catlicencia': {
                'maxLength': 'Puede tener hasta 3 digitos'
            },
            'codsalud': {
                'pattern': 'Ingrese un número válido'
            },
            'fondopension': {
                'maxLength': 'Puede tener hasta 3 digitos'
            },
            'tipoafp': {
                'maxLength': 'Puede tener hasta 3 digitos'
            },
            'cuspp': {
                'pattern': 'Ingrese un número válido'
            },
            'profesion': {
                'maxLength': 'Puede tener hata 30 digitos'
            },
            'peso': {},
            'talla': {},
            'contextura': {
                'maxLength': 'Puede tener hasta 15 digitos'
            },
            'gruposangre': {
                'maxLength': 'Puede tener hasta 3 digitos'
            },
            'foto': {}
        };
    }
    PersonalEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        // this.pes.loadPersonal(this.id)
        //   .subscribe(
        //   data =>{
        //     this.personal = data
        //     console.log(data)
        //     this.personalForm.patchValue(
        //       this.personal
        //     )
        //   }
        // )
        this.buildForm();
        console.log(this.pes.getSingleItemfb(this.id));
        this.pes.getSingleItemfb(this.id)
            .then(function (data) {
            _this.personal = data.data();
            console.log(data.data());
            _this.personalForm.patchValue(_this.personal);
        });
        this.afStorage.ref(this.id).getDownloadURL()
            .subscribe(function (data) { return _this.img = data; });
    };
    PersonalEditComponent.prototype.ngAfterViewInit = function () {
        // $('#popoverData').popover();
        // $('.popover').popover({ trigger: "hover" });
    };
    // editPersonal(): void {
    //   //const newObject = Object.assign({}, this.personal, this.personalForm.value );
    //   console.log(this.personalForm.value)
    //   this.pes.editPersonal(this.personalForm.value,this.id)
    //   .subscribe(
    //     data=> console.log(data)
    //     )
    //   this.router.navigate(['/personal']);
    // }
    PersonalEditComponent.prototype.editPersonal = function () {
        console.log(this.personalForm.value);
        this.pes.updateTodo(this.id, this.personalForm.value)
            .then(function (data) { return console.log(data); });
        if (this.file) {
            this.afStorage.upload(this.id, this.file);
        }
        this.router.navigate(['/personal']);
    };
    PersonalEditComponent.prototype.fileChangeEvent = function (fileInput) {
        var file = fileInput.target.files;
        this.file = fileInput.target.files[0];
        console.log(file);
        var fileExtension = file[0].name.substr(file[0].name.length - 3);
        if (fileExtension != "png" && fileExtension != 'jpg') {
            this.toastr.error('Contraseña incorrecta', 'Intenta otra vez', {
                timeOut: 3000,
            });
        }
        else {
            var size = file[0].size / 1024 / 1024;
            console.log(size);
            if (size > 5) {
                this.toastr.error('La foto supera el máximo de tamaño permitido 5MB');
            }
            else {
                //var user = this.user;
                var imagen = this.imagen;
                console.log(imagen);
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#preview').attr('src', e.target.result);
                    imagen = e.target.result;
                    //user.image = e.target.result.split(',')[1];
                };
                reader.readAsDataURL(file[0]);
            }
        }
    };
    //construye el formulario
    PersonalEditComponent.prototype.buildForm = function () {
        var _this = this;
        this.personalForm = this.fb.group({
            'idpersona': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')
                ]],
            'nombre': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1])[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')
                ]],
            'nombre2': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1])[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')
                ]],
            'paterno': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1])[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')
                ]],
            'materno': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1])[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')
                ]],
            'nrodni': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')
                ]],
            'vigenciadni': ['', []],
            'nroruc': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)
                ]],
            'nropasaporte': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)
                ]],
            'vigenciapasaporte': ['', []],
            'estadocivil': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
                ]],
            'sexo': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(9)
                ]],
            'fechanacimiento': ['', []],
            'celular': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)
                ]],
            'celulartrab': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)
                ]],
            'fijo': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)
                ]],
            'telefonoref': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)
                ]],
            'fijotrab': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)
                ]],
            'anexo': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6)
                ]],
            'email': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)
                ]],
            'emailtrab': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)
                ]],
            'web': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40)
                ]],
            'nrolicencia': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')
                ]],
            'vigencialicencia': ['', []],
            'catlicencia': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(3)
                ]],
            'codsalud': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')
                ]],
            'fondopension': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(3)
                ]],
            'tipoafp': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(3)
                ]],
            'cuspp': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')
                ]],
            'profesion': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)
                ]],
            'peso': ['', []],
            'talla': ['', []],
            'contextura': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)
                ]],
            'gruposangre': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)
                ]],
            'foto': ['', []]
        });
        this.personalForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset validation messages
    };
    // Updates validation state on form changes.
    PersonalEditComponent.prototype.onValueChanged = function (data) {
        if (!this.personalForm) {
            return;
        }
        var form = this.personalForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    PersonalEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-edit',
            template: __webpack_require__(/*! ./personal-edit.component.html */ "./src/app/pages/personal-edit/personal-edit.component.html"),
            styles: [__webpack_require__(/*! ./personal-edit.component.css */ "./src/app/pages/personal-edit/personal-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_personal_service__WEBPACK_IMPORTED_MODULE_3__["PersonalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]])
    ], PersonalEditComponent);
    return PersonalEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/staff-information/staff-information.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/staff-information/staff-information.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/staff-information/staff-information.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/staff-information/staff-information.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-5\">\r\n  <div class=\"table-header  mt-5\">\r\n    <div class=\"form-group mb-0 btn-input\">\r\n      <div class=\"full-input\">\r\n        <input type=\"text\" placeholder=\"Filtro\" class=\"form-control\"  (keyup)=\"applyFilter($event.target.value)\">\r\n      </div>\r\n    </div>\r\n    <a routerLink=\"/nuevo-personal\" type=\"button\" class=\"btn-new\">Nuevo Personal</a>\r\n  </div>\r\n  <div class=\"example-container mat-elevation-z8 mt-5\">\r\n    <div class=\"example-header\">\r\n      \r\n    </div>\r\n\r\n    <table mat-table #table [dataSource]=\"dataSource\">\r\n\r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"nombre\">\r\n        <th mat-header-cell *matHeaderCellDef> Nombre </th>\r\n        <td mat-cell *matCellDef=\"let personal\"> {{personal.nombre}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"paterno\">\r\n        <th mat-header-cell *matHeaderCellDef> Apellido Paterno </th>\r\n        <td mat-cell *matCellDef=\"let personal\"> {{personal.paterno}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Weight Column -->\r\n      <ng-container matColumnDef=\"materno\">\r\n        <th mat-header-cell *matHeaderCellDef> Apellido Materno </th>\r\n        <td mat-cell *matCellDef=\"let personal\"> {{personal.materno}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Symbol Column -->\r\n      <ng-container matColumnDef=\"nrodni\">\r\n        <th mat-header-cell *matHeaderCellDef> DNI </th>\r\n        <td mat-cell *matCellDef=\"let personal\"> {{personal.nrodni}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"estadocivil\">\r\n        <th mat-header-cell *matHeaderCellDef> Estado Civil </th>\r\n        <td mat-cell *matCellDef=\"let personal\"> {{personal.estadocivil}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"fechanacimiento\">\r\n        <th mat-header-cell *matHeaderCellDef> Fecha de Nacimiento </th>\r\n        <td mat-cell *matCellDef=\"let personal\"> {{personal.fechanacimiento}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"Acciones\">\r\n        <th mat-header-cell *matHeaderCellDef> Acciones </th>\r\n        <td mat-cell *matCellDef=\"let personal\"> <a class=\"action-links\" [routerLink]=\"['/personal/editar', personal.id ]\">Editar </a> <a href=\"javascript:void(0)\" class=\"action-links\" (click)=\"openDialog(personal.id)\"> Borrar</a></td>\r\n      </ng-container>\r\n       <!-- (click)=\"deletePersonal(personal.id)\" -->\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n      <ng-template #template>\r\n        <div class=\"modal-body popup-finish\">\r\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n          <h3>¿Estás seguro que desea eliminar este usuario?</h3>\r\n          <div class=\"actions\">\r\n            <a class=\"btn btn-air text-white btn-green\" (click)=\"deletePersonal(personal.id)\">Sí</a>\r\n            <button _ngcontent-c1=\"\" (click)=\"modalRef.hide()\" class=\"btn btn-danger\">No</button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </table>\r\n\r\n    <mat-paginator #paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n    </mat-paginator>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/staff-information/staff-information.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/staff-information/staff-information.component.ts ***!
  \************************************************************************/
/*! exports provided: StaffInformationComponent, PersonalDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffInformationComponent", function() { return StaffInformationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDataSource", function() { return PersonalDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _modals_deletemodal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modals/deletemodal/modal.component */ "./src/app/modals/deletemodal/modal.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var StaffInformationComponent = /** @class */ (function () {
    function StaffInformationComponent(dialog, pes, changeDetectorRefs, afStorage) {
        this.dialog = dialog;
        this.pes = pes;
        this.changeDetectorRefs = changeDetectorRefs;
        this.afStorage = afStorage;
        this.allPersonal = [];
        this.userFilterAll = {
            name: ""
        };
        this.displayedColumns = [
            "nombre",
            "paterno",
            "materno",
            "nrodni",
            "estadocivil",
            "fechanacimiento",
            "Acciones"
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    StaffInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.refresh()
        this.pes.getPersonalfb().subscribe(function (data) {
            _this.dataSource.data = data;
        });
        // this.pes.getPersonal()
        //   .subscribe(data => {
        //     this.dataSource.data = data;
        //   })
    };
    StaffInformationComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        //this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    };
    StaffInformationComponent.prototype.ngOnChanges = function () {
        this.refresh();
    };
    StaffInformationComponent.prototype.openDialog = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_modals_deletemodal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"], {
            width: "400px",
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed: " + result);
            _this.refresh();
            //this.dialogResult = result;
        });
    };
    StaffInformationComponent.prototype.showPersonal = function () {
        console.log("algo");
        this.pes.getPersonal().subscribe(function (data) { return console.log(data); });
    };
    // deletePersonal(id): void {
    //   this.pes.deletePersonal(id)
    //     .subscribe(
    //       data=> console.log(data)
    //     )
    //   this.refresh()
    // }
    StaffInformationComponent.prototype.deletePersonal = function (id) {
        this.pes.deleteFb(id).then(function (data) { return console.log(data); });
        // this.refresh();
    };
    StaffInformationComponent.prototype.refresh = function () {
        var _this = this;
        this.pes.getPersonal().subscribe(function (data) {
            _this.dataSource.data = data;
            _this.changeDetectorRefs.detectChanges();
        });
    };
    StaffInformationComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], StaffInformationComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], StaffInformationComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("filter"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StaffInformationComponent.prototype, "filter", void 0);
    StaffInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-staff-information",
            template: __webpack_require__(/*! ./staff-information.component.html */ "./src/app/pages/staff-information/staff-information.component.html"),
            styles: [__webpack_require__(/*! ./staff-information.component.css */ "./src/app/pages/staff-information/staff-information.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _services_personal_service__WEBPACK_IMPORTED_MODULE_3__["PersonalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]])
    ], StaffInformationComponent);
    return StaffInformationComponent;
}());

var PersonalDataSource = /** @class */ (function (_super) {
    __extends(PersonalDataSource, _super);
    function PersonalDataSource(pes) {
        var _this = _super.call(this) || this;
        _this.pes = pes;
        return _this;
    }
    PersonalDataSource.prototype.connect = function () {
        return this.pes.getPersonal();
    };
    PersonalDataSource.prototype.disconnect = function () { };
    return PersonalDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["DataSource"]));



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, router, toastr) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.toastr = toastr;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.afAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(function (value) {
            _this.router.navigate(['personal']);
            //this.updateUserData(value)
            _this.email = value.user.email;
            console.log('Nice, it worked!');
            console.log(value);
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
            console.log(err);
            if (err.code == "auth/wrong-password") {
                _this.toastr.error('Contraseña incorrecta', 'Intenta otra vez', {
                    timeOut: 3000,
                });
            }
            else if (err.code == "auth/user-not-found") {
                _this.toastr.error('Usuario no encontrado', 'Intenta otra vez', {
                    timeOut: 3000,
                });
            }
        });
    };
    // public login (email:string, password:string) {
    //   return this.afAuth.auth.signInWithEmailAndPassword(email,password)
    //     .catch(this.handleError)
    // }
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.handleError = function (error) {
        // console.error('handleError',error);
        console.error('handleError', error.message || error);
        return error.code;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/authguard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/authguard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardService", function() { return AuthguardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthguardService = /** @class */ (function () {
    function AuthguardService(router, afAuth, authService) {
        this.router = router;
        this.afAuth = afAuth;
        this.authService = authService;
    }
    AuthguardService.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.afAuth.authState
            .take(1)
            .map(function (authState) { return !!authState; })
            .do(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/']);
            }
        });
    };
    AuthguardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], AuthguardService);
    return AuthguardService;
}());



/***/ }),

/***/ "./src/app/services/personal.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/personal.service.ts ***!
  \**********************************************/
/*! exports provided: PersonalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalService", function() { return PersonalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonalService = /** @class */ (function () {
    function PersonalService(http, afs) {
        var _this = this;
        this.http = http;
        this.afs = afs;
        this.url_service = "https://34.230.73.198:8443/v1/personas";
        this.serviceUrl = "https://cyris-data.herokuapp.com/personal";
        // this.dataCollection = this.afs.collection('datos');
        // this.data = this.dataCollection.valueChanges();
        // this.data.subscribe(
        //   data=> console.log(data)
        // )
        this.dataCollection = this.afs.collection("datos");
        this.personal = this.dataCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                console.log(data);
                var id = action.payload.doc.id;
                _this.id = id;
                return __assign({ id: id }, data);
            });
        });
    }
    PersonalService.prototype.getPersonal = function () {
        return this.http.get(this.url_service);
    };
    PersonalService.prototype.addPersonal = function (newPersonal) {
        return this.http.post(this.url_service, newPersonal);
    };
    PersonalService.prototype.editPersonal = function (editPersonal, id) {
        return this.http.put(this.url_service, editPersonal);
    };
    PersonalService.prototype.loadPersonal = function (id) {
        return this.http.get(this.url_service + "/" + id);
    };
    PersonalService.prototype.deletePersonal = function (id) {
        return this.http.delete(this.url_service + "/" + id);
    };
    PersonalService.prototype.handleError = function (error) {
        // console.error('handleError',error);
        console.error("handleError", error.message || error);
        return error;
    };
    PersonalService.prototype.addPersonalfb = function (newPersonal) {
        return this.dataCollection.add(newPersonal);
    };
    PersonalService.prototype.getPersonalfb = function () {
        var _this = this;
        this.personalObs = this.afs.collection('datos').snapshotChanges().map(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                _this.id = id;
                return __assign({ id: id }, data);
            });
        });
        return this.personalObs;
    };
    PersonalService.prototype.getSingleItem = function (id) {
        return this.dataCollection
            .doc(id)
            .ref.get()
            .then(function (doc) {
            if (doc.exists) {
                //console.log("Document data:", doc.data());
                return doc.data();
            }
        });
    };
    PersonalService.prototype.getSingleItemfb = function (id) {
        return this.dataCollection.doc(id).ref.get();
    };
    PersonalService.prototype.updateTodo = function (id, editPersonal) {
        return this.dataCollection.doc(id).update(editPersonal);
    };
    PersonalService.prototype.deleteFb = function (id) {
        return this.dataCollection.doc(id).delete();
    };
    PersonalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], PersonalService);
    return PersonalService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBB5JKUZCxMZ9JuK5lQeA9Zce5-bG5es80",
        authDomain: "cyris-18.firebaseapp.com",
        databaseURL: "https://cyris-18.firebaseio.com",
        projectId: "cyris-18",
        storageBucket: "cyris-18.appspot.com",
        messagingSenderId: "947646433556"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\acabrera\Desktop\eli\cyris\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map