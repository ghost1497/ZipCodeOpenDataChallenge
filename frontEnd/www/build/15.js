webpackJsonp([15],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinediningPageModule", function() { return FinediningPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finedining__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FinediningPageModule = /** @class */ (function () {
    function FinediningPageModule() {
    }
    FinediningPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__finedining__["a" /* FinediningPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__finedining__["a" /* FinediningPage */]),
            ],
        })
    ], FinediningPageModule);
    return FinediningPageModule;
}());

//# sourceMappingURL=finedining.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinediningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FinediningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FinediningPage = /** @class */ (function () {
    function FinediningPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FinediningPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FinediningPage');
    };
    FinediningPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-finedining',template:/*ion-inline-start:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/finedining/finedining.html"*/'<!--\n  Generated template for the FinediningPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>finedining</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ng-container  *ngFor="let finedine of finediningArry; let i = index">\n        <ion-card *ngIf="i<3">\n      <img src=\'{{finedine.image_url}}\'>\n      <ion-card-content>\n        <ion-card-title>{{finedine.name}}</ion-card-title>\n        <div>\n          <label >Price: {{finedine.price}}</label>\n          <label >Rating: {{finedine.rating}}</label>\n        </div>\n  \n      </ion-card-content>\n      <button ion-button color="primary" (click)="addToItinerary(finedine.name, finedine.coordinates)" outline block>Add to itinerary</button>\n    </ion-card>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/finedining/finedining.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FinediningPage);
    return FinediningPage;
}());

//# sourceMappingURL=finedining.js.map

/***/ })

});
//# sourceMappingURL=15.js.map