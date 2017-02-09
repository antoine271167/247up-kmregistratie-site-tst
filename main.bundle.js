webpackJsonp([0,3],{

/***/ 1097:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1097;


/***/ }),

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(519);


/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SigninService = (function () {
    function SigninService() {
        this._isAuthenticated = false;
        this._userAuthToken = null;
        this._userDisplayName = null;
    }
    Object.defineProperty(SigninService.prototype, "isAuthenticated", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* isDevMode */])() ? true : this._isAuthenticated;
        },
        set: function (value) {
            this._isAuthenticated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SigninService.prototype, "userAuthToken", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* isDevMode */])()) {
                return "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhmYTE3YTc1OTk4MTU1ZDU3MDJiMzcxNWY1NTljNTEzYmI4MWJkMWIifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiaWF0IjoxNDg2Njc0OTI5LCJleHAiOjE0ODY2Nzg1MjksImF0X2hhc2giOiJGdTVsdkNCZ1VkRzBNVkdUNUlsU0t3IiwiYXVkIjoiODg1MTY1OTc0OTM4LWo3MnE1N2cwZnNtYnJnanY1N3MybGhxdG0xNmkxajYwLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0NzExNjI2ODA1ODQ5NDY1ODc0IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF6cCI6Ijg4NTE2NTk3NDkzOC1qNzJxNTdnMGZzbWJyZ2p2NTdzMmxocXRtMTZpMWo2MC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImVtYWlsIjoiYW50b2luZTI3MTExOTY3QGdtYWlsLmNvbSIsIm5hbWUiOiJBbnRvaW5lIEdlYm9lcnMiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDUuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1PdjZfTHZtSDlmby9BQUFBQUFBQUFBSS9BQUFBQUFBQUF6US9oVTRNTXJubWVwSS9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiQW50b2luZSIsImZhbWlseV9uYW1lIjoiR2Vib2VycyIsImxvY2FsZSI6Im5sIn0.A6jEXBNovklKgSoqXUleQ8QUdyAf-_Y877ZfLNot291o0b-nXM3RULF_lqUNlNUTR3utInGCPqt7zrI7MXk7wJ38bCXFGtG-8oJS7FdZwp-z0KA9Q3JLrk7fHVIKL5KbIOCYqOHwpZvqemgg2SUVlSKz1TnC2pa27MfEA7ygPHVrYGl22HdauMkRU5UgyYEX3uVJowvnkoBy1pNK7WhFNSue5QewgSKrHD0VT0hL8zmuN2wk_OAe0dz_cslHVHX2Har0LHPudnlDg3O2nS6qLuazCIF4fEvfRjVcIKmN0UnNWMbkUf1Mqrv6TI7pqq5-t3m92t1_4jlqyWXWdiDYZQ";
            }
            return this._userAuthToken;
        },
        set: function (value) {
            this._userAuthToken = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SigninService.prototype, "userDisplayName", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* isDevMode */])() ? "John Doe" : this._userDisplayName;
        },
        set: function (value) {
            this._userDisplayName = value;
        },
        enumerable: true,
        configurable: true
    });
    SigninService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], SigninService);
    return SigninService;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - KmRegistratie - Site/src/kmregistratie/src/signin.service.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signin_service__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RitService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RitService = (function () {
    function RitService(_http, _signinService) {
        this._http = _http;
        this._signinService = _signinService;
        this._ritten = [];
        this._index = 0;
        //
    }
    RitService.prototype.updateRit = function (rit) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serviceUrl + "/api/rit/update", rit, this.createRequestOptions(true))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RitService.prototype.getAllRitten = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serviceUrl + "/api/rit/getall", this.createRequestOptions())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RitService.prototype.getRitById = function (id) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serviceUrl + "/api/rit/getbyid/" + id, this.createRequestOptions())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RitService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error");
    };
    RitService.prototype.createRequestOptions = function (withContentType) {
        if (withContentType === void 0) { withContentType = false; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("UserAuthToken", this._signinService.userAuthToken);
        if (withContentType) {
            headers.append("Content-Type", "application/json");
        }
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
    };
    RitService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__signin_service__["a" /* SigninService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__signin_service__["a" /* SigninService */]) === 'function' && _b) || Object])
    ], RitService);
    return RitService;
    var _a, _b;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - KmRegistratie - Site/src/kmregistratie/src/rit.service.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    serviceUrl: "http://247up-kmregistratie-service-tst.azurewebsites.net"
};
//# sourceMappingURL=D:/TfsOnlineGit/247UP - KmRegistratie - Site/src/kmregistratie/src/environment.prod.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = "app works!";
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: "app-root",
            template: __webpack_require__(830),
            styles: [__webpack_require__(824)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - KmRegistratie - Site/src/kmregistratie/src/app.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
var BaseComponent = (function () {
    function BaseComponent(_signinService) {
        this._signinService = _signinService;
        //
    }
    Object.defineProperty(BaseComponent.prototype, "signinService", {
        get: function () {
            return this._signinService;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "isAuthenticated", {
        get: function () {
            return this._signinService.isAuthenticated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "userAuthToken", {
        get: function () {
            return this._signinService.userAuthToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "userDisplayName", {
        get: function () {
            return this._signinService.userDisplayName;
        },
        enumerable: true,
        configurable: true
    });
    return BaseComponent;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - KmRegistratie - Site/src/kmregistratie/src/base.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signin_service__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LookupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LookupService = (function () {
    function LookupService(_http, _signinService) {
        this._http = _http;
        this._signinService = _signinService;
        this._locaties = [];
        //
    }
    LookupService.prototype.getLocaties = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serviceUrl + "/api/lookup/getlocaties", this.createRequestOptions())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    LookupService.prototype.getKentekens = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].serviceUrl + "/api/lookup/getkentekens", this.createRequestOptions())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    LookupService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error");
    };
    LookupService.prototype.createRequestOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("UserAuthToken", this._signinService.userAuthToken);
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
    };
    LookupService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__signin_service__["a" /* SigninService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__signin_service__["a" /* SigninService */]) === 'function' && _b) || Object])
    ], LookupService);
    return LookupService;
    var _a, _b;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - KmRegistratie - Site/src/kmregistratie/src/lookup.service.js.map

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 518;


/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(637);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
// ReSharper disable once TsResolvedFromInaccessibleModule
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=D:/TfsOnlineGit/247UP - KmRegistratie - Site/src/kmregistratie/src/main.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rit_app_rit_app_component__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rit_app_list_rit_app_list_component__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rit_app_form_rit_app_form_component__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__spinner_spinner_component__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signin_signin_component__ = __webpack_require__(642);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var appRoutes = [
    { path: "edit/:id", component: __WEBPACK_IMPORTED_MODULE_9__rit_app_form_rit_app_form_component__["a" /* RitAppFormComponent */] },
    { path: "new", component: __WEBPACK_IMPORTED_MODULE_9__rit_app_form_rit_app_form_component__["a" /* RitAppFormComponent */] },
    { path: "", component: __WEBPACK_IMPORTED_MODULE_8__rit_app_list_rit_app_list_component__["a" /* RitAppListComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__rit_app_rit_app_component__["a" /* RitAppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__rit_app_list_rit_app_list_component__["a" /* RitAppListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__rit_app_form_rit_app_form_component__["a" /* RitAppFormComponent */],
                __WEBPACK_IMPORTED_MODULE_10__spinner_spinner_component__["a" /* SpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__signin_signin_component__["a" /* SigninComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__["DatepickerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__["TimepickerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - KmRegistratie - Site/src/kmregistratie/src/app.module.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(397);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(636);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=D:/TfsOnlineGit/247UP - KmRegistratie - Site/src/kmregistratie/src/index.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rit__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rit_service__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lookup_service__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RitAppFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RitAppFormComponent = (function () {
    function RitAppFormComponent(_route, _router, _ritService, _lookupService) {
        this._route = _route;
        this._router = _router;
        this._ritService = _ritService;
        this._lookupService = _lookupService;
        this._rit = new __WEBPACK_IMPORTED_MODULE_1__rit__["a" /* Rit */]();
        this._locaties = [];
        this._kentekens = [];
        this.isRequesting = false;
        //
    }
    RitAppFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isRequesting = true;
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].forkJoin(this.loadLocaties(), this.loadKentekens())
            .subscribe(function () {
            _this.loadRit();
        }, function (error) {
            _this.handleError(error);
        });
    };
    RitAppFormComponent.prototype.submitForm = function () {
        var _this = this;
        this.isRequesting = true;
        this._ritService.updateRit(this._rit)
            .subscribe(function (rit) {
            _this._rit = rit;
            _this.isRequesting = false;
            _this._router.navigate([""]);
        }, function (error) { return _this.handleError(error); });
    };
    Object.defineProperty(RitAppFormComponent.prototype, "isNew", {
        get: function () {
            return this._isNew;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RitAppFormComponent.prototype, "rit", {
        get: function () {
            return this._rit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RitAppFormComponent.prototype, "locaties", {
        get: function () {
            return this._locaties;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RitAppFormComponent.prototype, "kentekens", {
        get: function () {
            return this._kentekens;
        },
        enumerable: true,
        configurable: true
    });
    RitAppFormComponent.prototype.loadRit = function () {
        var _this = this;
        this._route.params.map(function (p) { return p["id"]; })
            .subscribe(function (sid) {
            var id = +sid;
            if (!id) {
                // if id is NOT found, populate form with empty rit.
                _this._isNew = true;
                _this.isRequesting = false;
                _this._rit = new __WEBPACK_IMPORTED_MODULE_1__rit__["a" /* Rit */]({
                    datum: new Date(),
                    tijdStart: new Date(),
                    tijdEind: new Date()
                });
            }
            else {
                // otherwise, download rit data and display in form.
                _this._isNew = false;
                _this._ritService.getRitById(id)
                    .subscribe(function (rit) {
                    _this.isRequesting = false;
                    _this._rit = rit;
                }, function (error) { return _this.handleError(error); });
            }
        });
    };
    RitAppFormComponent.prototype.loadLocaties = function () {
        var _this = this;
        return this._lookupService.getLocaties()
            .do(function (locaties) { return _this._locaties = locaties; });
    };
    RitAppFormComponent.prototype.loadKentekens = function () {
        var _this = this;
        return this._lookupService.getKentekens()
            .do(function (kentekens) { return _this._kentekens = kentekens; });
    };
    RitAppFormComponent.prototype.handleError = function (error) {
        this.isRequesting = false;
        console.error(error);
        alert(error);
    };
    RitAppFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: "app-rit-form",
            template: __webpack_require__(831),
            styles: [__webpack_require__(825)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__rit_service__["a" /* RitService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__rit_service__["a" /* RitService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__lookup_service__["a" /* LookupService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__lookup_service__["a" /* LookupService */]) === 'function' && _d) || Object])
    ], RitAppFormComponent);
    return RitAppFormComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - KmRegistratie - Site/src/kmregistratie/src/rit-app-form.component.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rit_service__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_service__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RitAppListComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RitAppListComponent = (function (_super) {
    __extends(RitAppListComponent, _super);
    function RitAppListComponent(_ritService, signinService) {
        _super.call(this, signinService);
        this._ritService = _ritService;
        this._ritten = [];
        this.isRequesting = false;
    }
    RitAppListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isRequesting = true;
        this._ritService.getAllRitten()
            .subscribe(function (ritten) {
            _this._ritten = ritten;
            _this.isRequesting = false;
        }, function (error) { return _this.handleError(error); });
    };
    Object.defineProperty(RitAppListComponent.prototype, "ritten", {
        get: function () {
            return this._ritten;
        },
        enumerable: true,
        configurable: true
    });
    RitAppListComponent.prototype.handleError = function (error) {
        this.isRequesting = false;
        console.error(error);
        alert(error);
    };
    RitAppListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: "app-rit-list",
            template: __webpack_require__(832),
            styles: [__webpack_require__(826)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__rit_service__["a" /* RitService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__rit_service__["a" /* RitService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__signin_service__["a" /* SigninService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__signin_service__["a" /* SigninService */]) === 'function' && _b) || Object])
    ], RitAppListComponent);
    return RitAppListComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_2__base_component__["a" /* BaseComponent */]));
//# sourceMappingURL=D:/TfsOnlineGit/247UP - KmRegistratie - Site/src/kmregistratie/src/rit-app-list.component.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rit_service__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lookup_service__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_service__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RitAppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RitAppComponent = (function () {
    function RitAppComponent() {
    }
    RitAppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_1__rit_service__["a" /* RitService */], __WEBPACK_IMPORTED_MODULE_2__lookup_service__["a" /* LookupService */], __WEBPACK_IMPORTED_MODULE_3__signin_service__["a" /* SigninService */]],
            selector: "rit-app",
            template: __webpack_require__(833),
            styles: [__webpack_require__(827)]
        }), 
        __metadata('design:paramtypes', [])
    ], RitAppComponent);
    return RitAppComponent;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - KmRegistratie - Site/src/kmregistratie/src/rit-app.component.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rit; });
var Rit = (function () {
    function Rit(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Rit;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - KmRegistratie - Site/src/kmregistratie/src/rit.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signin_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_component__ = __webpack_require__(398);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = (function (_super) {
    __extends(SigninComponent, _super);
    function SigninComponent(_zone, signinService) {
        var _this = this;
        _super.call(this, signinService);
        this._zone = _zone;
        this.googleLoginButtonId = "google-login-button";
        this.onGoogleLoginSuccess = function (loggedInUser) {
            _this._zone.run(function () {
                _this.signinService.userAuthToken = loggedInUser.getAuthResponse().id_token;
                _this.signinService.userDisplayName = loggedInUser.getBasicProfile().getName();
                _this.signinService.isAuthenticated = true;
                console.log("userAuthToken: " + _this.signinService.userAuthToken);
                console.log("userDisplayName: " + _this.signinService.userDisplayName);
            });
        };
    }
    SigninComponent.prototype.ngAfterViewInit = function () {
        gapi.signin2.render(this.googleLoginButtonId, {
            "onSuccess": this.onGoogleLoginSuccess,
            "scope": "profile",
            "theme": "dark"
        });
    };
    SigninComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: "app-signin",
            template: __webpack_require__(834),
            styles: [__webpack_require__(828)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgZone */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__signin_service__["a" /* SigninService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__signin_service__["a" /* SigninService */]) === 'function' && _b) || Object])
    ], SigninComponent);
    return SigninComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_2__base_component__["a" /* BaseComponent */]));
//# sourceMappingURL=D:/TfsOnlineGit/247UP - KmRegistratie - Site/src/kmregistratie/src/signin.component.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.isDelayedRunning = false;
        this.delay = 300;
    }
    Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this.cancelTimeout();
                this.isDelayedRunning = false;
            }
            if (this._currentTimeout) {
                return;
            }
            this._currentTimeout = setTimeout(function () {
                _this.isDelayedRunning = value;
                _this.cancelTimeout();
            }, this.delay);
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.prototype.cancelTimeout = function () {
        clearTimeout(this._currentTimeout);
        this._currentTimeout = undefined;
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.cancelTimeout();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Object)
    ], SpinnerComponent.prototype, "delay", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], SpinnerComponent.prototype, "isRunning", null);
    SpinnerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: "spinner",
            template: __webpack_require__(835),
            styles: [__webpack_require__(829)]
        }), 
        __metadata('design:paramtypes', [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - KmRegistratie - Site/src/kmregistratie/src/spinner.component.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1096);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/TfsOnlineGit/247UP - KmRegistratie - Site/src/kmregistratie/src/polyfills.js.map

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = ".row-bordered:after {\r\n    border-bottom: 1px solid #ccc;\r\n    content: \"\";\r\n    display: block;\r\n    margin: 5px 0 7px 0;\r\n}\r\nlabel {\r\n    font-weight: normal;\r\n}\r\nul {\r\n    list-style-type: none;\r\n    padding-left: 0;\r\n}\r\n.listitem label {\r\n    display: inline;\r\n}"

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = ".rittenapp {\r\n    margin-bottom: 15px;\r\n}\r\n"

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = ".spinner {\r\n    border: 16px solid black; /* Light grey */\r\n    border-top: 16px solid #2780e3; /* Blue */\r\n    border-radius: 50%;\r\n    width: 120px;\r\n    height: 120px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n            animation: spin 2s linear infinite;\r\n    top: calc(50% - 60px);\r\n    left: calc(50% - 60px);\r\n\r\n    position: fixed;\r\n    margin-right: -50%;\r\n    z-index: 20001;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0); transform: rotate(0); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n    0% { -webkit-transform: rotate(0); transform: rotate(0); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n.spinnercontainer {\r\n    background-color: transparant;\r\n    background-color: #000;\r\n    display: block;\r\n    height: 100vh;\r\n    left: 0;\r\n    opacity: 0.5;\r\n    position: fixed;\r\n    top: 0;\r\n    -webkit-transition: all 0.5s ease;\r\n    transition: all 0.5s ease;\r\n    width: 100%;\r\n    z-index: 20000;\r\n}\r\n"

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "<rit-app></rit-app>"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "<spinner [isRunning]=\"isRequesting\"></spinner>\r\n<section>\r\n    <div class=\"container\">\r\n        <h1 *ngIf=\"!isNew\">Rit Bewerken</h1>\r\n        <h1 *ngIf=\"isNew\">Nieuwe Rit</h1>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"datum\">Datum:</label>\r\n                    <div class=\"input-group\">\r\n                        <datepicker [(ngModel)]=\"rit.datum\" [showWeeks]=\"true\" id=\"datum\"></datepicker>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"kenteken\">Kenteken:</label>\r\n                    <select [(ngModel)]=\"rit.kenteken\" class=\"form-control\" id=\"kenteken\">\r\n                        <option>-- maak een keuze --</option>\r\n                        <option *ngFor=\"let kenteken of kentekens async\" [value]=\"kenteken\">{{kenteken}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <h2>Start</h2>\r\n                <div class=\"form-group\">\r\n                    <label for=\"locatieStart\">Locatie:</label>\r\n                    <select [(ngModel)]=\"rit.locatieStart\" class=\"form-control\" id=\"locatieStart\">\r\n                        <option>-- maak een keuze --</option>\r\n                        <option *ngFor=\"let locatie of locaties async\" [value]=\"locatie\">{{locatie}}</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"tijdStart\">Tijd:</label>\r\n                    <div class=\"input-group\">\r\n                        <timepicker [(ngModel)]=\"rit.tijdStart\" id=\"tijdStart\"></timepicker>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"kmStart\">Kilometerstand:</label>\r\n                    <div class=\"input-group\">\r\n                        <input [(ngModel)]=\"rit.kmStart\" type=\"number\" class=\"form-control\" id=\"kmStart\"/>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <h2>Eind</h2>\r\n                <div class=\"form-group\">\r\n                    <label for=\"locatieEind\">Locatie:</label>\r\n                    <select [(ngModel)]=\"rit.locatieEind\" class=\"form-control\" id=\"locatieEind\">\r\n                        <option>-- maak een keuze --</option>\r\n                        <option *ngFor=\"let locatie of locaties async\" [value]=\"locatie\">{{locatie}}</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"tijdEind\">Tijd:</label>\r\n                    <div class=\"input-group\">\r\n                        <timepicker [(ngModel)]=\"rit.tijdEind\" id=\"tijdEind\"></timepicker>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"kmEind\">Kilometerstand:</label>\r\n                    <div class=\"input-group\">\r\n                        <input [(ngModel)]=\"rit.kmEind\" type=\"number\" class=\"form-control\" id=\"kmEind\"/>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <a routerLink=\"\" class=\"btn btn-primary pull-right\" style=\"margin-left: 10px\">Sluiten</a>\r\n        <a (click)=\"submitForm()\" class=\"btn btn-primary pull-right\">Opslaan</a>\r\n    </div>\r\n</section>"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "<spinner [isRunning]=\"isRequesting\"></spinner>\r\n<section>\r\n    <div class=\"container\">\r\n        <h1>Ritten</h1>\r\n        <section *ngIf=\"isAuthenticated && !isRequesting\">\r\n            <section *ngIf=\"ritten.length > 0\">\r\n                <ul>\r\n                    <li *ngFor=\"let rit of ritten async\">\r\n                        <div class=\"row-bordered listitem\">\r\n                            <a [routerLink]=\"['/edit', rit.id]\" class=\"btn btn-primary btn-edit-item pull-right glyphicon glyphicon-pencil\"></a>\r\n                            <label><b>{{rit.datum | date: 'dd-MM-yyyy'}}</b><br/>\r\n                                {{rit.locatieStart}}&nbsp;-&nbsp;{{rit.locatieEind}}\r\n                                <span *ngIf=\"rit.kmEind && rit.kmStart\"> |&nbsp;{{rit.kmEind - rit.kmStart}}&nbsp;km</span></label>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </section>\r\n            <section *ngIf=\"ritten.length == 0\">\r\n                <blockquote>\r\n                    <p>Geen ritten gevonden!</p>\r\n                </blockquote>\r\n            </section>\r\n            <a routerLink=\"/new\" class=\"btn btn-primary pull-right\">Nieuwe Rit</a>\r\n        </section>\r\n        <section *ngIf=\"!isAuthenticated\">\r\n            <blockquote>\r\n                <p>Niet aangemeld!</p>\r\n            </blockquote>\r\n        </section>\r\n    </div>\r\n</section>"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <p class=\"nav navbar-text pull-right\" style=\"margin-bottom: initial !important;\">\r\n                <app-signin></app-signin>\r\n            </p>\r\n            <a class=\"navbar-brand\" href=\"#\">KM Registratie</a>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div class=\"container rittenapp\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isAuthenticated\" id=\"{{googleLoginButtonId}}\" style=\"margin-right: 7px; margin-top: -6.5px;\"></div>\r\n<p style=\"margin-right: 15px;\" *ngIf=\"isAuthenticated\">{{userDisplayName}}</p>"

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isDelayedRunning\" class=\"spinnercontainer\"></div>\r\n<div *ngIf=\"isDelayedRunning\" class=\"spinner\"></div>"

/***/ })

},[1098]);
//# sourceMappingURL=main.bundle.map