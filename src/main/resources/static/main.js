"use strict";
(self["webpackChunkkfsm_hateoas_client_open_jumpco_io"] = self["webpackChunkkfsm_hateoas_client_open_jumpco_io"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent),
/* harmony export */   "determineFontSize": () => (/* binding */ determineFontSize)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var app_turnstile_list_turnstile_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/turnstile-list/turnstile-list.component */ 2868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const _c0 = function (a0) { return { "font-size": a0 }; };
function AppComponent_app_turnstile_list_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-turnstile-list", 2);
} if (rf & 2) {
    const fs_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, fs_r1));
} }
function determineFontSize(breakpointObserver) {
    const portrait = breakpointObserver.isMatched([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.WebPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.HandsetPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.TabletPortrait]);
    const web = breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.Web);
    const tablet = breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.Tablet);
    const handset = breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.Handset);
    console.log("determineFontSize:portrait =", portrait, ', web =', web, ', tablet =', tablet, ', handset =', handset);
    if (handset) {
        return "9pt";
    }
    else {
        if (breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.XSmall)) {
            return portrait ? "9pt" : "10pt";
        }
        else if (breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.Small)) {
            return portrait ? "10pt" : "12pt";
        }
        else if (breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.Medium)) {
            return portrait ? "12pt" : "14pt";
        }
        else if (breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.Large)) {
            return portrait ? "14pt" : "16pt";
        }
        else if (breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.XLarge)) {
            return portrait ? "16pt" : "18pt";
        }
    }
    return "10pt";
}
class AppComponent {
    constructor(breakpointObserver) {
        this.fontSize = new Promise(resolve => {
            breakpointObserver.observe([
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.Small,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.XSmall,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.Medium,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.Large,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.XLarge
            ]).subscribe(value => {
                console.log("breakpointObserver:", value);
                resolve(determineFontSize(breakpointObserver));
            });
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.BreakpointObserver)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](app_turnstile_list_turnstile_list_component__WEBPACK_IMPORTED_MODULE_0__.TurnstileListComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.turnstileList = _t.first);
    } }, decls: 4, vars: 3, consts: [[3, "ngStyle", 4, "ngIf"], [1, "container"], [3, "ngStyle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_app_turnstile_list_0_Template, 1, 3, "app-turnstile-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.fontSize));
    } }, styles: ["p[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7O0NBSUMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG59XG5cbi8qXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcbmNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiovIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _turnstile_turnstile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./turnstile/turnstile.component */ 8752);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _turnstile_list_turnstile_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./turnstile-list/turnstile-list.component */ 2868);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var app_basic_http_interceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/basic-http-interceptor.service */ 9603);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);
/* harmony import */ var _pager_pager_pager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pager/pager/pager.component */ 1595);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6362);



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
            useClass: app_basic_http_interceptor_service__WEBPACK_IMPORTED_MODULE_3__.BasicHttpInterceptor,
            multi: true
        }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot([
            { path: '', component: _turnstile_turnstile_component__WEBPACK_IMPORTED_MODULE_1__.TurnstileComponent },
        ]),
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _turnstile_turnstile_component__WEBPACK_IMPORTED_MODULE_1__.TurnstileComponent,
        _turnstile_list_turnstile_list_component__WEBPACK_IMPORTED_MODULE_2__.TurnstileListComponent,
        _pager_pager_pager_component__WEBPACK_IMPORTED_MODULE_4__.PagerComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _turnstile_list_turnstile_list_component__WEBPACK_IMPORTED_MODULE_2__.TurnstileListComponent]; }, function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe]; });


/***/ }),

/***/ 9603:
/*!***************************************************!*\
  !*** ./src/app/basic-http-interceptor.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicHttpInterceptor": () => (/* binding */ BasicHttpInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class BasicHttpInterceptor {
    constructor() {
    }
    intercept(request, next) {
        return next.handle(request.clone({
            setHeaders: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
            }
        }));
    }
}
BasicHttpInterceptor.ɵfac = function BasicHttpInterceptor_Factory(t) { return new (t || BasicHttpInterceptor)(); };
BasicHttpInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BasicHttpInterceptor, factory: BasicHttpInterceptor.ɵfac });


/***/ }),

/***/ 1595:
/*!************************************************!*\
  !*** ./src/app/pager/pager/pager.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagerComponent": () => (/* binding */ PagerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_service_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/service/api.service */ 9573);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ 6439);






class PagerComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.pageUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        if (!this.pageSizes) {
            this.pageSizes = [5, 10, 20, 50];
        }
        if (!this.size) {
            this.size = 10;
        }
    }
    ngOnInit() {
    }
    reload(pageRequest) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.pagedResource = yield this.apiService.selfPage(this.pagedResource, pageRequest);
            this.size = this.pagedResource.page.size;
            this.pageUpdated.emit(this.pagedResource);
        });
    }
    getPageable() {
        var _a, _b;
        return {
            size: this.size,
            sort: this.sort,
            page: (_b = (_a = this.pagedResource) === null || _a === void 0 ? void 0 : _a.page) === null || _b === void 0 ? void 0 : _b.number
        };
    }
    first() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.pagedResource = yield this.apiService.firstPage(this.pagedResource, this.getPageable());
            this.size = this.pagedResource.page.size;
            this.pageUpdated.emit(this.pagedResource);
        });
    }
    next() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.pagedResource = yield this.apiService.nextPage(this.pagedResource, this.getPageable());
            this.size = this.pagedResource.page.size;
            this.pageUpdated.emit(this.pagedResource);
        });
    }
    prev() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.pagedResource = yield this.apiService.prevPage(this.pagedResource, this.getPageable());
            this.size = this.pagedResource.page.size;
            this.pageUpdated.emit(this.pagedResource);
        });
    }
    last() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.pagedResource = yield this.apiService.lastPage(this.pagedResource, this.getPageable());
            this.size = this.pagedResource.page.size;
            this.pageUpdated.emit(this.pagedResource);
        });
    }
    pageEvent(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (this.size !== event.pageSize) {
                this.size = event.pageSize;
            }
            if (event.pageIndex !== this.pagedResource.page.number) {
                if (event.pageIndex == 0) {
                    return this.first();
                }
                if (this.pagedResource.page.number + 1 === event.pageIndex) {
                    return this.next();
                }
                else if (this.pagedResource.page.number - 1 === event.pageIndex) {
                    return this.prev();
                }
                else if (this.pagedResource.page.totalPages - 1 === event.pageIndex) {
                    return this.last();
                }
                else {
                    return this.reload({ page: event.pageIndex, size: event.pageSize });
                }
            }
        });
    }
}
PagerComponent.ɵfac = function PagerComponent_Factory(t) { return new (t || PagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_service_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
PagerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PagerComponent, selectors: [["app-pager"]], inputs: { pagedResource: "pagedResource", sort: "sort", size: "size", sortOptions: "sortOptions", pageSizes: "pageSizes" }, outputs: { pageUpdated: "pageUpdated" }, decls: 1, vars: 4, consts: [["hidePageSize", "true", 3, "className", "length", "pageSize", "pageSizeOptions", "page"]], template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-paginator", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function PagerComponent_Template_mat_paginator_page_0_listener($event) { return ctx.pageEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("className", "mat-primary")("length", ctx.pagedResource.page.totalElements)("pageSize", ctx.size)("pageSizeOptions", ctx.pageSizes);
    } }, dependencies: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9573:
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService),
/* harmony export */   "asPromise": () => (/* binding */ asPromise),
/* harmony export */   "convertErrorToString": () => (/* binding */ convertErrorToString),
/* harmony export */   "makeLink": () => (/* binding */ makeLink),
/* harmony export */   "makeUrl": () => (/* binding */ makeUrl)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var url_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-template */ 1931);
/* harmony import */ var app_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/../environments/environment */ 2340);
/* harmony import */ var app_utils_errors_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/utils/errors.util */ 9507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








function convertErrorToString(error) {
    var _a, _b, _c;
    if (!error) {
        return 'Unknown';
    }
    if (typeof error === 'string') {
        return error;
    }
    if ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.detail) {
        return error.error.detail;
    }
    if ((_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.title) {
        return error.error.title;
    }
    if ((_c = error === null || error === void 0 ? void 0 : error.error) === null || _c === void 0 ? void 0 : _c.message) {
        return error.error.message;
    }
    if (error.status && typeof error.status === 'number') {
        const status = error.status;
        if (status === 0) {
            return 'Connection error';
        }
        switch (error.status) {
            case 405:
                return 'Unknown API error';
        }
    }
    if (error.message) {
        return error.message;
    }
    if (error.error) {
        return error.error;
    }
    return error.toString();
}
function addObserve(reqOpts) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers = headers.append('Access-Control-Allow-Origin', '*');
    const opts = { observe: 'response', responseType: 'json', headers };
    if (reqOpts && Object.getOwnPropertyNames(reqOpts).length !== 0) {
        for (const k of Object.keys(reqOpts)) {
            if (k === 'headers') {
                const hdr = reqOpts[k];
                for (const h of hdr.keys()) {
                    headers = headers.append(h, hdr.get(h));
                }
                opts.headers = headers;
            }
            else {
                opts[k] = reqOpts[k];
            }
        }
    }
    return opts;
}
function makeLink(links, linkName) {
    if (links._links) {
        return (0,app_utils_errors_util__WEBPACK_IMPORTED_MODULE_1__.expectNotNullFn)(links._links[linkName], () => `Expected ${linkName} from ${links}`);
    }
    else {
        return (0,app_utils_errors_util__WEBPACK_IMPORTED_MODULE_1__.expectNotNullFn)(links[linkName], () => `Expected ${linkName} from ${links}`);
    }
}
function makeUrl(link, params) {
    let result = link.href;
    if (link.templated) {
        (0,app_utils_errors_util__WEBPACK_IMPORTED_MODULE_1__.preconditionFn)(params != null, () => `params required for ${link.href}`);
        const template = (0,url_template__WEBPACK_IMPORTED_MODULE_3__.parseTemplate)(link.href);
        const url = template.expand(params);
        console.debug(`makeUrl:${link.href}`, params);
        result = url;
    }
    if (params != null) {
        const url = new URL(result);
        for (const param of Object.keys(params)) {
            const value = params[param];
            if (value !== null && value !== undefined) {
                if (!url.searchParams.has(param) && !link.href.includes('{' + param + '}')) {
                    console.debug('makeUrl:add:', param, '=', value);
                    url.searchParams.append(param, value);
                }
            }
        }
        result = url.toString();
    }
    return result;
}
function asPromise(observable) {
    return new Promise((resolve, reject) => {
        observable.subscribe({
            next: (data) => resolve(data),
            error: (err) => reject(err)
        });
    });
}
class ApiService {
    constructor(http) {
        this.http = http;
        this.baseURL = app_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    /**
     * Provide a URL given endpoint name and parameters
     * @param endpoint
     * @param params
     */
    url(endpoint, params) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const linksResponse = yield this.links();
            return makeUrl(makeLink(linksResponse, endpoint), params);
        });
    }
    links() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.systemInfo) {
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('requestedVersion', '1');
                const opts = addObserve({ params });
                try {
                    const response = yield asPromise(this.http.get(this.baseURL, opts));
                    if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {
                        const httpResponse = response;
                        if (httpResponse.ok) {
                            console.debug('links:ok', httpResponse);
                            this.systemInfo = httpResponse.body;
                        }
                        else if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse) {
                            const error = response;
                            console.error('links:error', error);
                            throw error;
                        }
                        else {
                            console.error('links:unknown', response);
                            throw response;
                        }
                    }
                }
                catch (error) {
                    if (error.status === 417) {
                        alert(error.error);
                        document.location.reload();
                        return null;
                    }
                    console.error('links:error', error);
                    throw error;
                }
            }
            return this.systemInfo;
        });
    }
    processEvent(response, link) {
        if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {
            const httpResponse = response;
            if (httpResponse.ok) {
                console.debug('process:ok', link, httpResponse);
                return httpResponse.body;
            }
            else {
                console.debug('process:response:error:', link, httpResponse);
                throw httpResponse;
            }
        }
        else {
            throw response;
        }
    }
    getByLinkName(links, linkName, params, reqOpts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return this.getByLink(makeLink(links, linkName), params, reqOpts);
        });
    }
    deleteByLinkName(links, linkName, params, reqOpts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return this.deleteByLink(makeLink(links, linkName), params, reqOpts);
        });
    }
    putByLinkName(links, linkName, body, params, reqOpts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return this.putByLink(makeLink(links, linkName), body, params, reqOpts);
        });
    }
    postByLinkName(links, linkName, body, params, reqOpts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return this.postByLink(makeLink(links, linkName), body, params, reqOpts);
        });
    }
    patchByLinkName(links, linkName, body, params, reqOpts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return this.patchByLink(makeLink(links, linkName), body, params, reqOpts);
        });
    }
    getByLink(link, params, reqOpts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (link == null) {
                console.log('link is null');
            }
            const url = makeUrl(link, params);
            const opts = addObserve(reqOpts);
            console.debug('get:url', link, url, opts);
            return this.processEvent(yield asPromise(this.http.get(url, opts)), link);
        });
    }
    get(endpoint, params, reqOpts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const linksResponse = yield this.links();
            console.debug('links', linksResponse);
            return this.getByLinkName(linksResponse, endpoint, params, reqOpts);
        });
    }
    postByLink(link, body, params, reqOpts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const url = makeUrl(link, params);
            const opts = addObserve(reqOpts);
            console.debug('post:url', link, url, body, params, opts);
            return this.processEvent(yield asPromise(this.http.post(url, body, opts)), link);
        });
    }
    post(endpoint, body, params, reqOpts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('post', endpoint, body, params, reqOpts);
            const linksResponse = yield this.links();
            console.debug('links', linksResponse);
            return this.postByLinkName(linksResponse, endpoint, body, params, reqOpts);
        });
    }
    putByLink(link, body, params, reqOpts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const url = makeUrl(link, params);
            const opts = addObserve(reqOpts);
            console.debug(`put:url=${url}`, link, opts);
            return this.processEvent(yield asPromise(this.http.put(url, body, opts)), link);
        });
    }
    put(endpoint, body, params, reqOpts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const linksResponse = yield this.links();
            console.debug('links', linksResponse);
            return this.putByLinkName(linksResponse, endpoint, body, params, reqOpts);
        });
    }
    deleteByLink(link, params, reqOpts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const url = makeUrl(link, params);
            const opts = addObserve(reqOpts);
            console.debug(`delete:url=${url}`, link, opts);
            return this.processEvent(yield asPromise(this.http.delete(url, opts)), link);
        });
    }
    delete(endpoint, params, reqOpts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const linksResponse = yield this.links();
            console.debug('links', linksResponse);
            return yield this.deleteByLinkName(linksResponse, endpoint, params, reqOpts);
        });
    }
    patchByLink(link, body, params, reqOpts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const url = makeUrl(link, params);
            const opts = addObserve(reqOpts);
            console.debug(`patch:url=${url}`, link, opts);
            return this.processEvent(yield asPromise(this.http.patch(url, body, opts)), link);
        });
    }
    patch(endpoint, body, params, reqOpts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const linksResponse = yield this.links();
            console.debug('links', linksResponse);
            return this.patchByLinkName(linksResponse, endpoint, body, params, reqOpts);
        });
    }
    request(request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.debug('apiService:request:', request);
            return asPromise(this.http.request(request));
        });
    }
    self(links) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return this.getByLinkName(links, 'self');
        });
    }
    selfPage(page, request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return this.getByLinkName(page, 'self', request);
        });
    }
    firstPage(page, request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return this.getByLinkName(page, 'first', request);
        });
    }
    lastPage(page, request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return this.getByLinkName(page, 'last', request);
        });
    }
    nextPage(page, request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return this.getByLinkName(page, 'next', request);
        });
    }
    prevPage(page, request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return this.getByLinkName(page, 'prev', request);
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3144:
/*!**************************************************!*\
  !*** ./src/app/service/turnstile-api.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TurnstileApiService": () => (/* binding */ TurnstileApiService)
/* harmony export */ });
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/Subject */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ 9573);





var TurnstileState;
(function (TurnstileState) {
    TurnstileState["LOCKED"] = "LOCKED";
    TurnstileState["UNLOCKED"] = "UNLOCKED";
})(TurnstileState || (TurnstileState = {}));
class TurnstileApiService {
    constructor(apiService) {
        this.apiService = apiService;
        this.messages = this.connect(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.wsUrl).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
                console.log("WebSocket:response:", response);
            }
            const data = JSON.parse(response.data);
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
                console.log("WebSocket:data:", response.data);
            }
            return data;
        }));
    }
    connect(url) {
        if (!this.subject) {
            console.log("WebSocket Connection to:" + url);
            this.subject = this.createWs(url);
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
                console.log("Successfully connected: " + url);
            }
        }
        return this.subject;
    }
    createWs(url) {
        const ws = new WebSocket(url);
        const observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(obs => {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        const observer = {
            error: null,
            complete: null,
            next: (data) => {
                if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
                    console.log('Message sent to websocket: ', data);
                }
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__.AnonymousSubject(observer, observable);
    }
    list(pageRequest) {
        return this.apiService.get('list', pageRequest);
    }
    create() {
        return this.apiService.post('create');
    }
    get(turnstile) {
        return this.apiService.getByLinkName(turnstile, 'self');
    }
    sendEvent(turnstile, event) {
        return this.apiService.postByLinkName(turnstile, event);
    }
    delete(turnstile) {
        return this.apiService.deleteByLinkName(turnstile, 'delete');
    }
}
TurnstileApiService.ɵfac = function TurnstileApiService_Factory(t) { return new (t || TurnstileApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService)); };
TurnstileApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: TurnstileApiService, factory: TurnstileApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2868:
/*!************************************************************!*\
  !*** ./src/app/turnstile-list/turnstile-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TurnstileListComponent": () => (/* binding */ TurnstileListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var app_service_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/service/api.service */ 9573);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var app_turnstile_turnstile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../turnstile/turnstile.component */ 8752);
/* harmony import */ var app_pager_pager_pager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pager/pager/pager.component */ 1595);
/* harmony import */ var app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_service_turnstile_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/turnstile-api.service */ 3144);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);



















function TurnstileListComponent_app_pager_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-pager", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageUpdated", function TurnstileListComponent_app_pager_8_Template_app_pager_pageUpdated_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.pageUpdated($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", ctx_r0.pageSize)("pagedResource", ctx_r0.turnstilePage);
} }
function TurnstileListComponent_ng_container_12_mat_grid_list_1_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-grid-tile", 10)(1, "app-turnstile", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("resourceUpdated", function TurnstileListComponent_ng_container_12_mat_grid_list_1_mat_grid_tile_1_Template_app_turnstile_resourceUpdated_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.updateTurnstile($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const turnstile_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("colspan", ctx_r6.colspan);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("turnstile", turnstile_r7);
} }
function TurnstileListComponent_ng_container_12_mat_grid_list_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-grid-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TurnstileListComponent_ng_container_12_mat_grid_list_1_mat_grid_tile_1_Template, 2, 2, "mat-grid-tile", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const turnstileList_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", turnstileList_r5 == null ? null : turnstileList_r5.turnstiles);
} }
function TurnstileListComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TurnstileListComponent_ng_container_12_mat_grid_list_1_Template, 2, 1, "mat-grid-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r1.turnstiles));
} }
const _c0 = function (a0) { return { "font-size": a0 }; };
class TurnstileListComponent {
    constructor(turnstileService, breakpointObserver) {
        this.turnstileService = turnstileService;
        this.turnstiles = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
        this.errorMessage = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
        this.fontSize = "8pt";
        this.colspan = 3;
        this.totalPages = 0;
        this.breakpoint = new Promise(resolve => {
            breakpointObserver.observe([
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.Breakpoints.Small,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.Breakpoints.XSmall,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.Breakpoints.Medium,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.Breakpoints.Large,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.Breakpoints.XLarge
            ]).subscribe(value => {
                const portrait = breakpointObserver.isMatched([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.Breakpoints.WebPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.Breakpoints.HandsetPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.Breakpoints.TabletPortrait]);
                if (portrait) {
                    this.colspan = 4;
                    this.pageSize = 9;
                }
                else {
                    this.colspan = 2;
                    this.pageSize = 12;
                }
                console.log("breakpointObserver:", value);
                this.fontSize = (0,app_app_component__WEBPACK_IMPORTED_MODULE_4__.determineFontSize)(breakpointObserver);
                resolve(true);
            });
        });
        this.turnstileService.messages.subscribe((value) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
                console.log("Updated", value);
            }
            let current = this.turnstilePage._embedded.turnstiles.find(v => v.id == value.id);
            if (current) {
                if (current.locked != value.locked || current.currentState != value.currentState) {
                    // load if the links are changing
                    current = yield this.turnstileService.get(current);
                }
                else {
                    current.message = value.message;
                }
            }
            yield this.updateTurnstile(current);
        }));
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.listTurnstiles();
        });
    }
    listTurnstiles() {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.errorMessage.next(null);
                const pageRequest = this.pager ?
                    this.pager.getPageable() :
                    { size: this.pageSize };
                this.turnstilePage = yield this.turnstileService.list(pageRequest);
                this.totalPages = (_b = (_a = this.turnstilePage) === null || _a === void 0 ? void 0 : _a.page) === null || _b === void 0 ? void 0 : _b.totalPages;
                this.turnstiles.next((_c = this.turnstilePage) === null || _c === void 0 ? void 0 : _c._embedded);
            }
            catch (error) {
                console.debug('listTurnstiles:error:', error);
                this.errorMessage.next((0,app_service_api_service__WEBPACK_IMPORTED_MODULE_0__.convertErrorToString)(error));
            }
        });
    }
    createTurnstile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.debug('createTurnstile');
            try {
                this.errorMessage.next(null);
                const created = yield this.turnstileService.create();
            }
            catch (error) {
                console.debug('createTurnstile:error:', error);
                this.errorMessage.next((0,app_service_api_service__WEBPACK_IMPORTED_MODULE_0__.convertErrorToString)(error));
            }
            return this.listTurnstiles();
        });
    }
    updateTurnstile(resource) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.debug('updateTurnstile', resource);
            if (resource == null) {
                return this.listTurnstiles();
            }
            let found = false;
            const child = this.childTurnstiles.find(item => item.turnstile.id === resource.id);
            if (child) {
                child.turnstile = resource;
                child.setMessage(resource.message);
            }
            else {
                yield this.listTurnstiles();
                const item = this.childTurnstiles.find(item => item.turnstile.id === resource.id);
                if (item) {
                    item.turnstile = resource;
                    if (resource.message && resource.message.length > 0) {
                        item.setMessage(resource.message);
                    }
                }
            }
        });
    }
    pageUpdated(event) {
        console.debug('pageUpdated:', event);
        this.turnstilePage = event;
        this.turnstiles.next(this.turnstilePage._embedded);
    }
}
TurnstileListComponent.ɵfac = function TurnstileListComponent_Factory(t) { return new (t || TurnstileListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_service_turnstile_api_service__WEBPACK_IMPORTED_MODULE_5__.TurnstileApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.BreakpointObserver)); };
TurnstileListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: TurnstileListComponent, selectors: [["app-turnstile-list"]], viewQuery: function TurnstileListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](app_pager_pager_pager_component__WEBPACK_IMPORTED_MODULE_3__.PagerComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](app_turnstile_turnstile_component__WEBPACK_IMPORTED_MODULE_2__.TurnstileComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.pager = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.childTurnstiles = _t);
    } }, decls: 14, vars: 10, consts: [["color", "accent", 3, "ngStyle"], [1, "mat-warn"], [1, "spacer"], [3, "size", "pagedResource", "pageUpdated", 4, "ngIf"], ["mat-button", "", "aria-label", "Add", 3, "click"], [4, "ngIf"], [3, "size", "pagedResource", "pageUpdated"], ["cols", "12", "rowHeight", "12em", "gutterSize", "0.5em", 4, "ngIf"], ["cols", "12", "rowHeight", "12em", "gutterSize", "0.5em"], [3, "colspan", 4, "ngFor", "ngForOf"], [3, "colspan"], [3, "turnstile", "resourceUpdated"]], template: function TurnstileListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "mat-toolbar-row")(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Turnstile");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, TurnstileListComponent_app_pager_8_Template, 1, 2, "app-pager", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TurnstileListComponent_Template_button_click_9_listener() { return ctx.createTurnstile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, TurnstileListComponent_ng_container_12_Template, 3, 3, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c0, ctx.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 4, ctx.errorMessage));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.turnstilePage == null ? null : ctx.turnstilePage.page == null ? null : ctx.turnstilePage.page.totalPages) > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 6, ctx.breakpoint));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarRow, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__.MatGridTile, app_turnstile_turnstile_component__WEBPACK_IMPORTED_MODULE_2__.TurnstileComponent, app_pager_pager_pager_component__WEBPACK_IMPORTED_MODULE_3__.PagerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: [".spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1cm5zdGlsZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InR1cm5zdGlsZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8752:
/*!**************************************************!*\
  !*** ./src/app/turnstile/turnstile.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TurnstileComponent": () => (/* binding */ TurnstileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var app_service_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/service/api.service */ 9573);
/* harmony import */ var app_service_turnstile_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/service/turnstile-api.service */ 3144);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);










function TurnstileComponent_mat_card_0_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TurnstileComponent_mat_card_0_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "lock_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TurnstileComponent_mat_card_0_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "hourglass_empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TurnstileComponent_mat_card_0_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "monetization_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TurnstileComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 1)(1, "mat-card-header", 2)(2, "mat-card-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-subtitle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TurnstileComponent_mat_card_0_mat_icon_5_Template, 2, 0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TurnstileComponent_mat_card_0_mat_icon_6_Template, 2, 0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-card-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TurnstileComponent_mat_card_0_mat_icon_9_Template, 2, 0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TurnstileComponent_mat_card_0_mat_icon_10_Template, 2, 0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-card-content", 8)(13, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-card-actions", 10)(17, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TurnstileComponent_mat_card_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.sendEvent("coin")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TurnstileComponent_mat_card_0_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.sendEvent("pass")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "transfer_within_a_station");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TurnstileComponent_mat_card_0_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.delete()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_3_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Turnstile ", ctx_r0.turnstile.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.turnstile.locked);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.turnstile.locked);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.turnstile.message == null ? null : (tmp_3_0 = ctx_r0.turnstile.message.toLowerCase()) == null ? null : tmp_3_0.includes("timeout"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.turnstile.message == null ? null : (tmp_4_0 = ctx_r0.turnstile.message.toLowerCase()) == null ? null : tmp_4_0.includes("coin"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("className", ctx_r0.turnstile.message ? "mat-accent" : "mat-warn");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 10, ctx_r0.errorString), "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.turnstile._links["coin"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.turnstile._links["pass"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.turnstile._links["delete"]);
} }
class TurnstileComponent {
    constructor(turnstileService) {
        this.turnstileService = turnstileService;
        this.resourceUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.errorString = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(" ");
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        var _a;
        this.setMessage((_a = this.turnstile) === null || _a === void 0 ? void 0 : _a.message);
    }
    sendEvent(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.turnstile = yield this.turnstileService.sendEvent(this.turnstile, event);
                this.resourceUpdated.emit(this.turnstile);
                this.setMessage(this.turnstile.message);
            }
            catch (error) {
                console.error('sendEvent:', event, error);
                this.errorString.next((0,app_service_api_service__WEBPACK_IMPORTED_MODULE_0__.convertErrorToString)(error));
                const self = this;
                setTimeout(function () {
                    self.errorString.next(" ");
                }, 5000);
            }
        });
    }
    setMessage(message) {
        this.errorString.next(message ? message : " ");
    }
    delete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.turnstileService.delete(this.turnstile);
            this.resourceUpdated.emit(null);
        });
    }
}
TurnstileComponent.ɵfac = function TurnstileComponent_Factory(t) { return new (t || TurnstileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_service_turnstile_api_service__WEBPACK_IMPORTED_MODULE_1__.TurnstileApiService)); };
TurnstileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TurnstileComponent, selectors: [["app-turnstile"]], inputs: { turnstile: "turnstile" }, outputs: { resourceUpdated: "resourceUpdated" }, decls: 1, vars: 1, consts: [["class", "mat-accent", "style", "font-size: 1em", 4, "ngIf"], [1, "mat-accent", 2, "font-size", "1em"], [2, "text-align", "center"], ["aria-label", "Id", 2, "font-size", "0.9em", "white-space", "nowrap"], ["aria-label", "State", 1, "mat-accent", 2, "font-size", "1em"], ["style", "font-size: 1em; vertical-align: text-bottom", 4, "ngIf"], [2, "text-align", "center", "font-size", "1em"], ["style", "font-size: 1em", 4, "ngIf"], ["aria-label", "Message", 3, "className"], [2, "text-align", "center", "font-size", "0.7em"], [2, "min-height", "1ex"], ["mat-icon-button", "", "aria-label", "Coin", 2, "font-size", "1em", 3, "disabled", "click"], [2, "font-size", "1em"], ["mat-icon-button", "", "aria-label", "Pass", 2, "font-size", "1em", 3, "disabled", "click"], ["mat-icon-button", "", "aria-label", "Delete", 2, "font-size", "1em", 3, "disabled", "click"], [2, "font-size", "1em", "vertical-align", "text-bottom"]], template: function TurnstileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TurnstileComponent_mat_card_0_Template, 26, 12, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.turnstile);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0dXJuc3RpbGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 9507:
/*!**************************************!*\
  !*** ./src/app/utils/errors.util.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expectNotNull": () => (/* binding */ expectNotNull),
/* harmony export */   "expectNotNullFn": () => (/* binding */ expectNotNullFn),
/* harmony export */   "precondition": () => (/* binding */ precondition),
/* harmony export */   "preconditionFn": () => (/* binding */ preconditionFn)
/* harmony export */ });
function expectNotNullFn(value, msgProvider) {
    if (value == null) {
        throw new Error(msgProvider ? msgProvider() : 'expected a non-null value');
    }
    return value;
}
function expectNotNull(value, msg) {
    if (value == null) {
        throw new Error(msg ? msg : 'expected a non-null value');
    }
    return value;
}
function preconditionFn(expression, msgProvider) {
    if (!expression) {
        throw new Error(msgProvider ? msgProvider() : 'Precondition failed');
    }
}
function precondition(expression, msg) {
    if (!expression) {
        throw new Error(msg ? msg : 'Precondition failed');
    }
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:8080/api',
    wsUrl: 'ws://localhost:8080/ws'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 6747);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map