webpackJsonp([16],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FastfoodPageModule", function() { return FastfoodPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fastfood__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FastfoodPageModule = /** @class */ (function () {
    function FastfoodPageModule() {
    }
    FastfoodPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fastfood__["a" /* FastfoodPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fastfood__["a" /* FastfoodPage */]),
            ],
        })
    ], FastfoodPageModule);
    return FastfoodPageModule;
}());

//# sourceMappingURL=fastfood.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FastfoodPage; });
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
 * Generated class for the FastfoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FastfoodPage = /** @class */ (function () {
    function FastfoodPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FastfoodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FastfoodPage');
    };
    FastfoodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fastfood',template:/*ion-inline-start:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/fastfood/fastfood.html"*/'<!--\n  Generated template for the FastfoodPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>fastfood</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ng-container  *ngFor="let fastfood of fastFoodArry; let i = index">\n        <ion-card *ngIf="i<3">\n      <img src=\'{{fastfood.image_url}}\'>\n      <ion-card-content>\n        <ion-card-title>{{fastfood.name}}</ion-card-title>\n        <div>\n          <label >Price: {{fastfood.price}}</label>\n          <label >Rating: {{fastfood.rating}}</label>\n        </div>\n  \n      </ion-card-content>\n      <button ion-button color="primary" (click)="addToItinerary(fastfood.name, fastfood.coordinates)" outline block>Add to itinerary</button>\n    </ion-card>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/fastfood/fastfood.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FastfoodPage);
    return FastfoodPage;
}());

//# sourceMappingURL=fastfood.js.map

/***/ })

});
//# sourceMappingURL=16.js.map