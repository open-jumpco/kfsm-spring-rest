"use strict";
(self["webpackChunkkfsm_hateoas_client_open_jumpco_io"] = self["webpackChunkkfsm_hateoas_client_open_jumpco_io"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _turnstile_list_turnstile_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./turnstile-list/turnstile-list.component */ 2868);



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-turnstile-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _turnstile_list_turnstile_list_component__WEBPACK_IMPORTED_MODULE_0__.TurnstileListComponent], styles: ["p[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7O0NBSUMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG59XG5cbi8qXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcbmNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiovIl19 */"] });


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
        return {
            size: this.size,
            sort: this.sort
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
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 9573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



var TurnstileState;
(function (TurnstileState) {
    TurnstileState["LOCKED"] = "LOCKED";
    TurnstileState["UNLOCKED"] = "UNLOCKED";
})(TurnstileState || (TurnstileState = {}));
class TurnstileApiService {
    constructor(apiService) {
        this.apiService = apiService;
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
TurnstileApiService.ɵfac = function TurnstileApiService_Factory(t) { return new (t || TurnstileApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
TurnstileApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TurnstileApiService, factory: TurnstileApiService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var app_service_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/service/api.service */ 9573);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_service_turnstile_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/service/turnstile-api.service */ 3144);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);
/* harmony import */ var _turnstile_turnstile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../turnstile/turnstile.component */ 8752);
/* harmony import */ var _pager_pager_pager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pager/pager/pager.component */ 1595);














function TurnstileListComponent_app_pager_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-pager", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageUpdated", function TurnstileListComponent_app_pager_8_Template_app_pager_pageUpdated_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.pageUpdated($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("size", ctx_r0.pageSize)("pagedResource", ctx_r0.turnstilePage);
} }
function TurnstileListComponent_ng_container_12_mat_grid_list_1_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-grid-tile", 10)(1, "app-turnstile", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resourceUpdated", function TurnstileListComponent_ng_container_12_mat_grid_list_1_mat_grid_tile_1_Template_app_turnstile_resourceUpdated_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.updateTurnstile($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const turnstile_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("turnstile", turnstile_r8);
} }
function TurnstileListComponent_ng_container_12_mat_grid_list_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-grid-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TurnstileListComponent_ng_container_12_mat_grid_list_1_mat_grid_tile_1_Template, 2, 1, "mat-grid-tile", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const turnstileList_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", turnstileList_r6 == null ? null : turnstileList_r6.turnstiles);
} }
function TurnstileListComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TurnstileListComponent_ng_container_12_mat_grid_list_1_Template, 2, 1, "mat-grid-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r1.turnstiles));
} }
function TurnstileListComponent_ng_container_14_mat_grid_list_1_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-grid-tile", 15)(1, "app-turnstile", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resourceUpdated", function TurnstileListComponent_ng_container_14_mat_grid_list_1_mat_grid_tile_1_Template_app_turnstile_resourceUpdated_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.updateTurnstile($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const turnstile_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("turnstile", turnstile_r14);
} }
function TurnstileListComponent_ng_container_14_mat_grid_list_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-grid-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TurnstileListComponent_ng_container_14_mat_grid_list_1_mat_grid_tile_1_Template, 2, 1, "mat-grid-tile", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const turnstileList_r12 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", turnstileList_r12 == null ? null : turnstileList_r12.turnstiles);
} }
function TurnstileListComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TurnstileListComponent_ng_container_14_mat_grid_list_1_Template, 2, 1, "mat-grid-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r2.turnstiles));
} }
class TurnstileListComponent {
    constructor(turnstileService, breakpointObserver) {
        this.turnstileService = turnstileService;
        this.turnstiles = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        this.errorMessage = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        this.totalPages = 0;
        switch (window.screen.orientation.type) {
            case "portrait-primary":
            case "portrait-secondary":
                this.pageSize = 6;
                break;
            case "landscape-primary":
            case "landscape-secondary":
            default:
                this.pageSize = 10;
                break;
        }
        this.portrait = new Promise(resolve => {
            breakpointObserver.observe([
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.Breakpoints.HandsetLandscape,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.Breakpoints.WebLandscape,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.Breakpoints.TabletLandscape
            ]).subscribe(result => {
                if (result.matches) {
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            });
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.listTurnstiles();
        });
    }
    listTurnstiles() {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.errorMessage.next(null);
                this.turnstilePage = yield this.turnstileService.list({ size: this.pageSize });
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.debug('updateTurnstile', resource);
            if (resource == null) {
                return this.listTurnstiles();
            }
            let found = false;
            for (const item of this.turnstiles.getValue().turnstiles) {
                if (item.id === resource.id) {
                    item.currentState = resource.currentState;
                    item.locked = resource.locked;
                    item.message = resource.message;
                    item._links = resource._links;
                    found = true;
                }
            }
            if (!found) {
                return this.listTurnstiles();
            }
        });
    }
    pageUpdated(event) {
        console.debug('pageUpdated:', event);
        this.turnstilePage = event;
        this.turnstiles.next(this.turnstilePage._embedded);
    }
}
TurnstileListComponent.ɵfac = function TurnstileListComponent_Factory(t) { return new (t || TurnstileListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_service_turnstile_api_service__WEBPACK_IMPORTED_MODULE_1__.TurnstileApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.BreakpointObserver)); };
TurnstileListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TurnstileListComponent, selectors: [["app-turnstile-list"]], decls: 16, vars: 10, consts: [["color", "accent"], [1, "mat-warn"], [1, "spacer"], [3, "size", "pagedResource", "pageUpdated", 4, "ngIf"], ["mat-button", "", 3, "click"], [4, "ngIf"], [3, "size", "pagedResource", "pageUpdated"], ["cols", "12", "rowHeight", "12rem", "gutterSize", "1rem", 4, "ngIf"], ["cols", "12", "rowHeight", "12rem", "gutterSize", "1rem"], ["colspan", "3", 4, "ngFor", "ngForOf"], ["colspan", "3"], [3, "turnstile", "resourceUpdated"], ["cols", "12", "rowHeight", "10rem", "gutterSize", "1rem", 4, "ngIf"], ["cols", "12", "rowHeight", "10rem", "gutterSize", "1rem"], ["colspan", "6", 4, "ngFor", "ngForOf"], ["colspan", "6"]], template: function TurnstileListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "mat-toolbar-row")(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Turnstile");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TurnstileListComponent_app_pager_8_Template, 1, 2, "app-pager", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TurnstileListComponent_Template_button_click_9_listener() { return ctx.createTurnstile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, TurnstileListComponent_ng_container_12_Template, 3, 3, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, TurnstileListComponent_ng_container_14_Template, 3, 3, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 4, ctx.errorMessage));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.turnstilePage == null ? null : ctx.turnstilePage.page == null ? null : ctx.turnstilePage.page.totalPages) > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 6, ctx.portrait));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 8, ctx.portrait));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarRow, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridTile, _turnstile_turnstile_component__WEBPACK_IMPORTED_MODULE_2__.TurnstileComponent, _pager_pager_pager_component__WEBPACK_IMPORTED_MODULE_3__.PagerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe], styles: [".spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1cm5zdGlsZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InR1cm5zdGlsZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cbiJdfQ== */"] });


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










function TurnstileComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 1)(1, "mat-card-header")(2, "mat-card-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-subtitle", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-card-actions")(10, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TurnstileComponent_mat_card_0_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.sendEvent("coin")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TurnstileComponent_mat_card_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.sendEvent("pass")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "transfer_within_a_station");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TurnstileComponent_mat_card_0_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.delete()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Turnstile ", ctx_r0.turnstile.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("State: ", ctx_r0.turnstile.currentState, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("className", ctx_r0.turnstile.message ? "mat-accent" : "mat-warn");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 7, ctx_r0.errorString), "\u00A0 ");
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
    sendEvent(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.turnstile = yield this.turnstileService.sendEvent(this.turnstile, event);
                this.resourceUpdated.emit(this.turnstile);
                if (this.turnstile.message) {
                    this.errorString.next(this.turnstile.message);
                    const self = this;
                    setTimeout(function () {
                        self.errorString.next(" ");
                    }, 2000);
                }
                else {
                    this.errorString.next(" ");
                }
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
    delete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.turnstileService.delete(this.turnstile);
            this.resourceUpdated.emit(null);
        });
    }
}
TurnstileComponent.ɵfac = function TurnstileComponent_Factory(t) { return new (t || TurnstileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_service_turnstile_api_service__WEBPACK_IMPORTED_MODULE_1__.TurnstileApiService)); };
TurnstileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TurnstileComponent, selectors: [["app-turnstile"]], inputs: { turnstile: "turnstile" }, outputs: { resourceUpdated: "resourceUpdated" }, decls: 1, vars: 1, consts: [["class", "mat-accent", 4, "ngIf"], [1, "mat-accent"], ["aria-label", "Id"], ["aria-label", "State"], ["aria-label", "Error", 3, "className"], ["mat-icon-button", "", "aria-label", "Coin", 3, "disabled", "click"], ["mat-icon-button", "", "aria-label", "Pass", 3, "disabled", "click"], ["mat-icon-button", "", "aria-label", "Delete", 3, "disabled", "click"]], template: function TurnstileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TurnstileComponent_mat_card_0_Template, 19, 9, "mat-card", 0);
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
    apiUrl: new URL(window.location.href).origin + '/api'
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