webpackJsonp([21],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandicapPageModule", function() { return HandicapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handicap__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HandicapPageModule = /** @class */ (function () {
    function HandicapPageModule() {
    }
    HandicapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__handicap__["a" /* HandicapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__handicap__["a" /* HandicapPage */]),
            ],
        })
    ], HandicapPageModule);
    return HandicapPageModule;
}());

//# sourceMappingURL=handicap.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandicapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(14);
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
 * Generated class for the HandicapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HandicapPage = /** @class */ (function () {
    function HandicapPage(navCtrl, navParams, storage, http, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.handicapArr = [];
        this.url = "https://visitdelawarebackendv2.herokuapp.com/restaurantsInDE/handicap";
        var headers = {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        var data = this.http.get(this.url, headers);
        data.subscribe(function (result) {
            _this.handicapArr = result['businesses'];
        });
    }
    HandicapPage.prototype.addToItinerary = function (nameOnJson, latLongOnJson) {
        console.log(nameOnJson, latLongOnJson);
        this.storage.set(nameOnJson, latLongOnJson);
        var alert = this.alertCtrl.create({
            title: 'Location Added',
            subTitle: 'This location was added to your itinerary!',
            buttons: ['OK']
        });
        alert.present();
        console.log(this.storage.length());
    };
    HandicapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HandicapPage');
    };
    HandicapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-handicap',template:/*ion-inline-start:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/handicap/handicap.html"*/'<!--\n  Generated template for the HandicapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Wheelchair Accessible Places</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ng-container *ngFor="let handicap of handicapArr; let i = index">\n    <ion-card *ngIf="i<3">\n      <img src=\'{{handicap.image_url}}\'>\n      <ion-card-content>\n        <ion-card-title>{{handicap.name}}</ion-card-title>\n        <div>\n          <label>Price: {{handicap.price}}</label>\n          <label>Rating: {{handicap.rating}}</label>\n        </div>\n\n      </ion-card-content>\n      <button ion-button color="primary" (click)="addToItinerary(handicap.name, handicap.coordinates)" outline block>Add to itinerary</button>\n    </ion-card>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/handicap/handicap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HandicapPage);
    return HandicapPage;
}());

//# sourceMappingURL=handicap.js.map

/***/ })

});
//# sourceMappingURL=21.js.map