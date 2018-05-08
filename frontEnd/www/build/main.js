webpackJsonp([19],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
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
 * Generated class for the BarsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BarsPage = /** @class */ (function () {
    function BarsPage(navCtrl, navParams, http, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.barsArrNotFixed = [];
        this.url = "https://visitdelawarebackendv2.herokuapp.com/restaurantsInDE/bars";
        var headers = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        var data = this.http.get(this.url, headers);
        data.subscribe(function (result) {
            _this.barsArry = result['businesses'];
        });
    }
    BarsPage.prototype.addToItinerary = function (nameOnJson, latLongOnJson) {
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
    BarsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BarsPage');
    };
    BarsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bars',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/bars/bars.html"*/'<!--\n  Generated template for the BarsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Bars</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ng-container  *ngFor="let bar of barsArry; let i = index">\n        <ion-card *ngIf="i<3">\n      <img src=\'{{bar.image_url}}\'>\n      <ion-card-content>\n        <ion-card-title style="font-size: 15px; font-weight: bold;">{{bar.name}}</ion-card-title>\n        <!-- <a href={{bar.url}}>Visit their website for more information here</a> -->\n\n        <div>\n          <label >Price: {{bar.price}}</label>\n          <label >Rating: {{bar.rating}}</label>\n        </div>\n\n      </ion-card-content>\n      <button ion-button color="primary" (click)="addToItinerary(bar.name, bar.coordinates)" outline block>Add to itinerary</button>\n    </ion-card>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/bars/bars.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], BarsPage);
    return BarsPage;
}());

//# sourceMappingURL=bars.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoffeeshopsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
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
 * Generated class for the CoffeeshopsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoffeeshopsPage = /** @class */ (function () {
    function CoffeeshopsPage(navCtrl, navParams, http, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.coffeeShopsArrNotFixed = [];
        this.url = "https://visitdelawarebackendv2.herokuapp.com/restaurantsInDE/coffee";
        var headers = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        var data = this.http.get(this.url, headers);
        data.subscribe(function (result) {
            _this.coffeeShopsArry = result['businesses'];
        });
    }
    CoffeeshopsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoffeeshopsPage');
    };
    CoffeeshopsPage.prototype.addToItinerary = function (nameOnJson, latLongOnJson) {
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
    CoffeeshopsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coffeeshops',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/coffeeshops/coffeeshops.html"*/'<!--\n  Generated template for the CoffeeshopsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Coffee Shops</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ng-container  *ngFor="let coffee of coffeeShopsArry; let i = index">\n        <ion-card *ngIf="i<3">\n      <img src=\'{{coffee.image_url}}\'>\n      <ion-card-content>\n        <ion-card-title style="font-size: 15px; font-weight: bold;">{{coffee.name}}</ion-card-title>\n        <!-- <a href={{coffee.url}}>Visit their website for more information here</a> -->\n        <div>\n          <label >Price: {{coffee.price}}</label>\n          <label >Rating: {{coffee.rating}}</label>\n        </div>\n\n      </ion-card-content>\n      <button ion-button color="primary" (click)="addToItinerary(coffee.name, coffee.coordinates)" outline block>Add to itinerary</button>\n    </ion-card>\n  </ng-container>\n\n  </ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/coffeeshops/coffeeshops.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CoffeeshopsPage);
    return CoffeeshopsPage;
}());

//# sourceMappingURL=coffeeshops.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nplist_nplist__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coffeeshops_coffeeshops__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icecreamshops_icecreamshops__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bars_bars__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__itinerary_itinerary__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__finedining_finedining__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fastfood_fastfood__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__familyfriendly_familyfriendly__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nightclub_nightclub__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__movietheater_movietheater__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__stateparkevents_stateparkevents__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__signup_signup__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__handicap_handicap__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(14);
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
 * Generated class for the CustomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomPage = /** @class */ (function () {
    function CustomPage(navCtrl, navParams, storage, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.itinerary = [];
        this.signup = new __WEBPACK_IMPORTED_MODULE_14__signup_signup__["a" /* SignupPage */](this.navCtrl, this.http);
        this.handicapFlag = this.signup.handicapFlag;
    }
    CustomPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CustomPage");
    };
    CustomPage.prototype.toNationalParkList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__nplist_nplist__["a" /* NplistPage */]);
    };
    CustomPage.prototype.toStateParkEventList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__stateparkevents_stateparkevents__["a" /* StateparkeventsPage */]);
    };
    CustomPage.prototype.toCoffeeShopsList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__coffeeshops_coffeeshops__["a" /* CoffeeshopsPage */]);
    };
    CustomPage.prototype.toIceCreamShopsList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__icecreamshops_icecreamshops__["a" /* IcecreamshopsPage */]);
    };
    CustomPage.prototype.toBarsList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__bars_bars__["a" /* BarsPage */]);
    };
    CustomPage.prototype.toFineDiningList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__finedining_finedining__["a" /* FinediningPage */]);
    };
    CustomPage.prototype.toFastFoodList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__fastfood_fastfood__["a" /* FastfoodPage */]);
    };
    CustomPage.prototype.toFamilyFriendlyList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__familyfriendly_familyfriendly__["a" /* FamilyfriendlyPage */]);
    };
    CustomPage.prototype.tonightClubList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__nightclub_nightclub__["a" /* NightclubPage */]);
    };
    CustomPage.prototype.toMovieTheaterList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__movietheater_movietheater__["a" /* MovietheaterPage */]);
    };
    CustomPage.prototype.handicapPlaces = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__handicap_handicap__["a" /* HandicapPage */]);
    };
    CustomPage.prototype.toShoppingCart = function () {
        var _this = this;
        this.storage.keys().then(function (data) {
            _this.itinerary = data;
        });
        console.log(this.itinerary);
        if (this.itinerary.length == 0) {
            var alert_1 = this.alertCtrl.create({
                title: "Empty Itinerary",
                subTitle: "Your itinerary seems to be empty. Try adding a location by clicking on one of our sections!",
                buttons: ["OK"]
            });
            alert_1.present();
            return;
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__itinerary_itinerary__["a" /* ItineraryPage */]);
        }
    };
    CustomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-custom",template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/custom/custom.html"*/'<!--\n  Generated template for the CustomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Custom Packages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Parks\n    </ion-card-header>\n    <ion-list>\n      <button ion-item (click)="toNationalParkList()">\n        <ion-icon name="leaf" item-start [style.color]="\'#88be48\'"></ion-icon>\n        National Parks\n      </button>\n      <button ion-item (click)="toStateParkEventList()">\n        <ion-icon name="leaf" item-start [style.color]="\'#88be48\'"></ion-icon>\n        State Park Events\n      </button>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Food\n    </ion-card-header>\n    <ion-list>\n      <button ion-item (click)="toFastFoodList()">\n        <ion-icon name="pizza" item-start [style.color]="\'#e3bb39\'"></ion-icon>\n        Fast Food\n      </button>\n      <button ion-item (click)="toFineDiningList()">\n        <ion-icon name="bowtie" item-start [style.color]="\'#e3bb39\'"></ion-icon>\n        Fine Dining\n      </button>\n      <button ion-item (click)="toFamilyFriendlyList()">\n        <ion-icon name="contacts" item-start [style.color]="\'#e3bb39\'"></ion-icon>\n        Family Establishments\n      </button>\n      <button ion-item (click)="toCoffeeShopsList()">\n        <ion-icon name="beaker" item-start [style.color]="\'#e3bb39\'"></ion-icon>\n        Coffee Shops\n      </button>\n      <button ion-item (click)="toIceCreamShopsList()">\n        <ion-icon name="ice-cream" item-start [style.color]="\'#e3bb39\'">\n        </ion-icon>\n        Ice Cream\n      </button>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Recreation\n    </ion-card-header>\n    <ion-list>\n      <button ion-item (click)="toMovieTheaterList()">\n        <ion-icon name="film" item-start [style.color]="\'#0e57a8\'"></ion-icon>\n        Movie Theatres\n      </button>\n      <button ion-item>\n        <ion-icon name="american-football" item-start [style.color]="\'#0e57a8\'"></ion-icon>\n        Sports Events\n      </button>\n      <button ion-item (click)="toBarsList()">\n        <ion-icon name="beer" item-start [style.color]="\'#0e57a8\'">\n        </ion-icon>\n        Bars\n      </button>\n      <button ion-item (click)="tonightClubList()">\n        <ion-icon name="wine" item-start [style.color]="\'#0e57a8\'"></ion-icon>\n        Night Clubs\n      </button>\n    </ion-list>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Handicap Resources\n    </ion-card-header>\n    <ion-list>\n      <button ion-item (click)="handicapPlaces()">\n        <ion-icon name="medical" item-start></ion-icon>\n        Wheelchair Accessible Places\n      </button>\n    </ion-list>\n  </ion-card>\n  <button ion-button (click)=toShoppingCart()>Build Itinerary</button>\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/custom/custom.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["a" /* HttpClient */]])
    ], CustomPage);
    return CustomPage;
}());

//# sourceMappingURL=custom.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NplistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
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
 * Generated class for the NplistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NplistPage = /** @class */ (function () {
    function NplistPage(navCtrl, navParams, http, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.parksArrNotFixed = [];
        this.url = "https://visitdelawarebackendv2.herokuapp.com/parksInDE";
        var headers = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        var data = this.http.get(this.url, headers);
        data.subscribe(function (result) {
            _this.parksArr = result;
        });
    }
    NplistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NplistPage');
    };
    NplistPage.prototype.addToItinerary = function (nameOnJson, latLongOnJson) {
        console.log(nameOnJson);
        this.storage.set(nameOnJson, latLongOnJson);
        var alert = this.alertCtrl.create({
            title: 'Location Added',
            subTitle: 'This location was added to your itinerary!',
            buttons: ['OK']
        });
        alert.present();
        console.log(this.storage.length());
    };
    NplistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nplist',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/nplist/nplist.html"*/'<!--\n  Generated template for the NplistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>National Parks</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let park of parksArr| slice:0:3; let i=index">\n    <img src=\'../../assets/imgs/nature_lover.jpg\'>\n    <ion-card-content>\n      <ion-card-title style="font-size: 15px; font-weight: bold;">{{park.name}}</ion-card-title>\n      <p style="font-size: 13px;">\n        {{park.description}}\n      </p>\n      <!-- <div>\n        <label>Location: {{park.latLong}}</label>\n      </div> -->\n    </ion-card-content>\n    <button ion-button color="primary" (click)="addToItinerary(park.name, park.latLong)" outline block>Add to itinerary</button>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/nplist/nplist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NplistPage);
    return NplistPage;
}());

//# sourceMappingURL=nplist.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IcecreamshopsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
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
 * Generated class for the IcecreamshopsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IcecreamshopsPage = /** @class */ (function () {
    function IcecreamshopsPage(navCtrl, navParams, http, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.iceCreamShopsArrNotFixed = [];
        this.url = "https://visitdelawarebackendv2.herokuapp.com/restaurantsInDE/icecream";
        var headers = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        var data = this.http.get(this.url, headers);
        data.subscribe(function (result) {
            _this.iceCreamShopsArry = result['businesses'];
        });
    }
    IcecreamshopsPage.prototype.addToItinerary = function (nameOnJson, latLongOnJson) {
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
    IcecreamshopsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IcecreamshopsPage');
    };
    IcecreamshopsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-icecreamshops',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/icecreamshops/icecreamshops.html"*/'<!--\n  Generated template for the IcecreamshopsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ice Cream Shops</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ng-container  *ngFor="let icecream of iceCreamShopsArry; let i = index">\n        <ion-card *ngIf="i<3">\n      <img src=\'{{icecream.image_url}}\'>\n      <ion-card-content>\n        <ion-card-title style="font-size: 15px; font-weight: bold;">{{icecream.name}}</ion-card-title>\n        <!-- <a href={{icecream.url}}>Visit their website for more information here</a> -->\n        <div>\n          <label >Price: {{icecream.price}}</label>\n          <label >Rating: {{icecream.rating}}</label>\n        </div>\n\n      </ion-card-content>\n      <button ion-button color="primary" (click)="addToItinerary(icecream.name, icecream.coordinates)" outline block>Add to itinerary</button>\n    </ion-card>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/icecreamshops/icecreamshops.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], IcecreamshopsPage);
    return IcecreamshopsPage;
}());

//# sourceMappingURL=icecreamshops.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinediningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
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
    function FinediningPage(navCtrl, navParams, http, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.iceCreamShopsArrNotFixed = [];
        this.url = "https://visitdelawarebackendv2.herokuapp.com//restaurantsInDE/Fine+Dining";
        var headers = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        var data = this.http.get(this.url, headers);
        data.subscribe(function (result) {
            _this.finediningArry = result['businesses'];
        });
    }
    FinediningPage.prototype.addToItinerary = function (nameOnJson, latLongOnJson) {
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
    FinediningPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FinediningPage');
    };
    FinediningPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-finedining',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/finedining/finedining.html"*/'<!--\n  Generated template for the FinediningPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Fine Dining</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ng-container  *ngFor="let finedine of finediningArry; let i = index">\n        <ion-card *ngIf="i<3">\n      <img src=\'{{finedine.image_url}}\'>\n      <ion-card-content>\n        <ion-card-title style="font-size: 15px; font-weight: bold;">{{finedine.name}}</ion-card-title>\n        <div>\n          <label >Price: {{finedine.price}}</label>\n          <label >Rating: {{finedine.rating}}</label>\n        </div>\n  \n      </ion-card-content>\n      <button ion-button color="primary" (click)="addToItinerary(finedine.name, finedine.coordinates)" outline block>Add to itinerary</button>\n    </ion-card>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/finedining/finedining.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FinediningPage);
    return FinediningPage;
}());

//# sourceMappingURL=finedining.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FastfoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
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
    function FastfoodPage(navCtrl, navParams, http, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.iceCreamShopsArrNotFixed = [];
        this.url = "https://visitdelawarebackendv2.herokuapp.com/restaurantsInDE/Fast+Food";
        var headers = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        var data = this.http.get(this.url, headers);
        data.subscribe(function (result) {
            _this.fastFoodArry = result['businesses'];
        });
    }
    FastfoodPage.prototype.addToItinerary = function (nameOnJson, latLongOnJson) {
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
    FastfoodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FastfoodPage');
    };
    FastfoodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fastfood',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/fastfood/fastfood.html"*/'<!--\n  Generated template for the FastfoodPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Fast Food</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ng-container  *ngFor="let fastfood of fastFoodArry; let i = index">\n        <ion-card *ngIf="i<3">\n      <img src=\'{{fastfood.image_url}}\'>\n      <ion-card-content>\n        <ion-card-title style="font-size: 15px; font-weight: bold;">{{fastfood.name}}</ion-card-title>\n        <div>\n          <label >Price: {{fastfood.price}}</label>\n          <label >Rating: {{fastfood.rating}}</label>\n        </div>\n  \n      </ion-card-content>\n      <button ion-button color="primary" (click)="addToItinerary(fastfood.name, fastfood.coordinates)" outline block>Add to itinerary</button>\n    </ion-card>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/fastfood/fastfood.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FastfoodPage);
    return FastfoodPage;
}());

//# sourceMappingURL=fastfood.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyfriendlyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
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
 * Generated class for the FamilyfriendlyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FamilyfriendlyPage = /** @class */ (function () {
    function FamilyfriendlyPage(navCtrl, navParams, http, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.iceCreamShopsArrNotFixed = [];
        this.url = "https://visitdelawarebackendv2.herokuapp.com/restaurantsInDE/Family+Friendly+Restaurants";
        var headers = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        var data = this.http.get(this.url, headers);
        data.subscribe(function (result) {
            _this.familyFriendlyArry = result['businesses'];
        });
    }
    FamilyfriendlyPage.prototype.addToItinerary = function (nameOnJson, latLongOnJson) {
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
    FamilyfriendlyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FamilyfriendlyPage');
    };
    FamilyfriendlyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-familyfriendly',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/familyfriendly/familyfriendly.html"*/'<!--\n  Generated template for the FamilyfriendlyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Family Establishments</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ng-container  *ngFor="let family of familyFriendlyArry; let i = index">\n        <ion-card *ngIf="i<3">\n      <img src=\'{{family.image_url}}\'>\n      <ion-card-content>\n        <ion-card-title style="font-size: 15px; font-weight: bold;">{{family.name}}</ion-card-title>\n        <div>\n          <label >Price: {{family.price}}</label>\n          <label >Rating: {{family.rating}}</label>\n        </div>\n  \n      </ion-card-content>\n      <button ion-button color="primary" (click)="addToItinerary(family.name, family.coordinates)" outline block>Add to itinerary</button>\n    </ion-card>\n  </ng-container>\n\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/familyfriendly/familyfriendly.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FamilyfriendlyPage);
    return FamilyfriendlyPage;
}());

//# sourceMappingURL=familyfriendly.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NightclubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
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
 * Generated class for the NightclubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NightclubPage = /** @class */ (function () {
    function NightclubPage(navCtrl, navParams, http, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.nightClubcArrNotFixed = [];
        this.url = "https://visitdelawarebackendv2.herokuapp.com/restaurantsInDE/Night+Clubs";
        var headers = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        var data = this.http.get(this.url, headers);
        data.subscribe(function (result) {
            _this.nightclubsArry = result['businesses'];
        });
    }
    NightclubPage.prototype.addToItinerary = function (nameOnJson, latLongOnJson) {
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
    NightclubPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NightclubPage');
    };
    NightclubPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nightclub',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/nightclub/nightclub.html"*/'<!--\n  Generated template for the NightclubPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Night Club</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ng-container  *ngFor="let club of nightclubsArry; let i = index">\n        <ion-card *ngIf="i<3">\n      <img src=\'{{club.image_url}}\'>\n      <ion-card-content>\n        <ion-card-title style="font-size: 15px; font-weight: bold;">{{club.name}}</ion-card-title>\n        <div>\n          <label >Price: {{club.price}}</label>\n          <label >Rating: {{club.rating}}</label>\n        </div>\n  \n      </ion-card-content>\n      <button ion-button color="primary" (click)="addToItinerary(club.name, club.coordinates)" outline block>Add to itinerary</button>\n    </ion-card>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/nightclub/nightclub.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NightclubPage);
    return NightclubPage;
}());

//# sourceMappingURL=nightclub.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovietheaterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
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
 * Generated class for the MovietheaterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MovietheaterPage = /** @class */ (function () {
    function MovietheaterPage(navCtrl, navParams, http, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.movieTheaterArrNotFixed = [];
        this.url = "https://visitdelawarebackendv2.herokuapp.com/restaurantsInDE/Movie+Theater";
        var headers = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        var data = this.http.get(this.url, headers);
        data.subscribe(function (result) {
            _this.movieTheaterArry = result['businesses'];
        });
    }
    MovietheaterPage.prototype.addToItinerary = function (nameOnJson, latLongOnJson) {
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
    MovietheaterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MovietheaterPage');
    };
    MovietheaterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movietheater',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/movietheater/movietheater.html"*/'<!--\n  Generated template for the MovietheaterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Movie Theater</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ng-container  *ngFor="let movie of movieTheaterArry; let i = index">\n        <ion-card *ngIf="i<3">\n      <img src=\'{{movie.image_url}}\'>\n      <ion-card-content>\n        <ion-card-title style="font-size: 15px; font-weight: bold;">{{movie.name}}</ion-card-title>\n        <div>\n          <label >Price: {{movie.price}}</label>\n          <label >Rating: {{movie.rating}}</label>\n        </div>\n  \n      </ion-card-content>\n      <button ion-button color="primary" (click)="addToItinerary(movie.name, movie.coordinates)" outline block>Add to itinerary</button>\n    </ion-card>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/movietheater/movietheater.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MovietheaterPage);
    return MovietheaterPage;
}());

//# sourceMappingURL=movietheater.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateparkeventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
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
 * Generated class for the StateparkeventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StateparkeventsPage = /** @class */ (function () {
    function StateparkeventsPage(navCtrl, navParams, http, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.iceCreamShopsArrNotFixed = [];
        this.url = "https://visitdelawarebackendv2.herokuapp.com/stateParkEvents";
        var headers = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        var data = this.http.get(this.url, headers);
        data.subscribe(function (result) {
            _this.stateParkEventArry = result;
        });
    }
    StateparkeventsPage.prototype.addToItinerary = function (nameOnJson, latLongOnJson) {
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
    StateparkeventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StateparkeventsPage');
    };
    StateparkeventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stateparkevents',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/stateparkevents/stateparkevents.html"*/'<!--\n  Generated template for the StateparkeventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>State Park Events</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ng-container  *ngFor="let event of stateParkEventArry; let i = index">\n        <ion-card *ngIf="i<3">\n            <img src=\'../../assets/imgs/nature_lover.jpg\'>\n      <ion-card-content>\n        <ion-card-title style="font-size: 15px; font-weight: bold;">Name: {{event.park}}</ion-card-title>\n        <div>\n           \n          <label style="font-size: 13px;"> {{event.description}}</label>\n          <label style="font-weight: bold">Price: {{event.cost}}</label>\n          <!-- <label >Date: {{event.start_date}}</label> -->\n          <label style="font-weight: bold">Time: {{event.start_time}}</label>\n          \n        </div>\n  \n      </ion-card-content>\n      <button ion-button color="primary" (click)="addToItinerary(event.park, 19)" outline block>Add to itinerary</button>\n    </ion-card>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/stateparkevents/stateparkevents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], StateparkeventsPage);
    return StateparkeventsPage;
}());

//# sourceMappingURL=stateparkevents.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_custom__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__package_package__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
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
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.storage.clear();
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad MainPage');
    // }
    MainPage.prototype.goToPackagePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__package_package__["a" /* PackagePage */]);
    };
    MainPage.prototype.goToCustomPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__custom_custom__["a" /* CustomPage */]);
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/main/main.html"*/'<!--\n  Generated template for the MainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n  <div class="label">\n      <label>Let\'s create your experience!</label>\n  </div>\n\n\n\n  <div class="custom">\n    <button ion-button outline block (click)="goToCustomPage()">Custom Packages</button>\n  </div>\n\n  <div class="packages">\n    <button ion-button outline block (click)="goToPackagePage()">Pre-Packages</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/main/main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(117);
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
 * Generated class for the PackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PackagePage = /** @class */ (function () {
    function PackagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad PackagePage');
    // }
    PackagePage.prototype.goToListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */]);
    };
    PackagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-package',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/package/package.html"*/'<!--\n  Generated template for the PackagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Pre-Packages</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="card-background-page" padding>\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col>\n        <ion-card class="card-one">\n          <img src="../../assets/imgs/family_photo.jpeg">\n          <label>Family Fun</label>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card class="card-two">\n          <img src="../../assets/imgs/nightclub.jpg">\n          <label>Club Goers</label>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card class="card-three">\n          <img src="../../assets/imgs/brunch-pic.jpg">\n          <label>Brunch -n- Brews</label>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card class="card-four">\n          <img src="../../assets/imgs/historic_wilmington.jpg">\n          <label>Historic Wilmington</label>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card class="card-five" (click)="goToListPage()">\n          <img src="../../assets/imgs/nature_lover.jpg">\n          <label>Nature Lover</label>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card class="card-six">\n          <img src="../../assets/imgs/adventure.jpg">\n          <label>Free Adventures</label>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/package/package.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PackagePage);
    return PackagePage;
}());

//# sourceMappingURL=package.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__itinerary_itinerary__ = __webpack_require__(52);
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
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    ListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPage');
    };
    ListPage.prototype.goToItinerary = function () {
        this.storage.clear();
        this.storage.set("White Clay Creek State Park", "1");
        this.storage.set("First State National Historical Park", "2");
        this.storage.set("El Diablo Burritos", "3");
        this.storage.set("Alapocas Run State Park/Wilmington State Parks", "4");
        this.storage.set("Rockford Tower at Alapocas State Park", "5");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__itinerary_itinerary__["a" /* ItineraryPage */]);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/list/list.html"*/'<!--\n  Generated template for the ListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nature Lover Package</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="splash-bg"></div>\n  <h1>Contents of our Nature Lover Package</h1>\n  <p>\n    Come explore the beauty of Delaware! This package includes a day full of hiking, and historic spots that will excite anyone\n    from a complete foreigner to a Delaware native. It also includes a stop at the hit local burrito spot, "El Diablo Burritos".\n    The night is ended with stargazing at Alapocas State Park with fellow naturalists. If trails, tacos and twilight are\n    calling your name this package is perfect for you!\n  </p>\n  <ion-item-divider>\n    <ion-card>\n      <ion-card-content>\n        <ion-icon name="leaf"></ion-icon>\n        <h1>White Clay Creek State Park</h1>\n        <p>\n          Time: any\n          <br> Price: FREE\n          <br> Description: With nine different trails spread among and between three different park areas, White Clay Creek\n          has hiking for the amateur to the advanced hiker. Trails range from an easy one mile up to four miles individually.\n          Two interesting stops along the Twin Valley and Bryan\'s Field trails are historic markers: one marks the western\n          edge of the Mason-Dixon Line and the other marks the Arc Corner Monument where Pennsylvania and Delaware meet.\n        </p>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <ion-icon name="leaf"></ion-icon>\n        <h1>First State National Historical Park</h1>\n        <p>\n          Time: 11am\n          <br> Price: FREE\n          <br> Description: The park covers the early colonial history of Delaware and the role Delaware played in the establishment\n          of the nation, leading up to it being the first state to ratify the Constitution. It tells the unique story of\n          the early settlement of the Delaware Valley.\n        </p>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <ion-icon name="pizza"></ion-icon>\n        <h1>El Diablo Burritos</h1>\n        <p>\n          Time: 2pm\n          <br> Price: $\n          <br> Description: Delicious spot for some tasty tacos and burritos. All house made and fresh ingredients. A great place\n          to stop for a quick meal or sit down dinner.\n        </p>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <ion-icon name="leaf"></ion-icon>\n        <h1>Alapocas Run State Park/Wilmington State Parks</h1>\n        <p>\n          Time: 5pm\n          <br> Price: $\n          <br> Description: Alapocas Run State Park is a state park, located in Wilmington, Delaware, United States, along the\n          Brandywine Creek and its Alapocas Run tributary. Open year-round, it is 415 acres in area. Much of the state park\n          was created from land originally preserved by William Poole Bancroft in the early 1900s to be used as open space\n          parkland by the city of Wilmington as it expanded.The park also includes the Blue Ball Barn, a dairy barn built\n          by Alfred I. du Pont as part of his Nemours estate in 1914\n        </p>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <ion-icon name="leaf"></ion-icon>\n        <h1>Rockford Tower at Alapocas State Park</h1>\n        <p>\n          Time: 9pm\n          <br> Price: FREE\n          <br> Description: Stop by the Rockford Tower at Alapocas State Park and learn more about winter stargazing with park\n          naturalists. Climb to the top of the tower to see the night sky and the city of Wilmington.\n        </p>\n      </ion-card-content>\n    </ion-card>\n  </ion-item-divider>\n  <button ion-button (click)="goToItinerary()" outline block>Select This Package</button>\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/list/list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandicapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
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
        this.url = "https://visitdelawarebackendv2.herokuapp.com/restaurantsInDE/wheelchair_accessible";
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
            selector: 'page-handicap',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/handicap/handicap.html"*/'<!--\n  Generated template for the HandicapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Wheelchair Accessible Places</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ng-container *ngFor="let handicap of handicapArr; let i = index">\n    <ion-card *ngIf="i<3">\n      <img src=\'{{handicap.image_url}}\'>\n      <ion-card-content>\n        <ion-card-title>{{handicap.name}}</ion-card-title>\n        <label bold>Wheelchair Accessible</label>\n        <div>\n          <label>Price: {{handicap.price}}</label>\n          <label>Rating: {{handicap.rating}}</label>\n        </div>\n\n      </ion-card-content>\n      <button ion-button color="primary" (click)="addToItinerary(handicap.name, handicap.coordinates)" outline block>Add to itinerary</button>\n    </ion-card>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/handicap/handicap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HandicapPage);
    return HandicapPage;
}());

//# sourceMappingURL=handicap.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(53);
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
 * Generated class for the LaunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LaunchPage = /** @class */ (function () {
    function LaunchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad LaunchPage');
    // }
    LaunchPage.prototype.goToSignupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LaunchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-launch',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/launch/launch.html"*/'<!--\n  Generated template for the LaunchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <!-- <ion-navbar>\n    <ion-title>launch</ion-title>\n  </ion-navbar> -->\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <div>\n    <img src="assets/imgs/LOGOLOGO.png">\n  </div> -->\n\n  <ion-slides pager>\n\n    <ion-slide style="background-color: white" class="slide-one">\n      <div class="logoimg">\n        <img src="assets/imgs/SplashPage.png">\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-card style="background-color: #ffffff">\n          <img src="assets/imgs/illustration-one.png" style="padding-left: 8%;"/>\n        </ion-card>\n      <div class="card-one-text" style="padding-left: 10%;">\n        <h6>Ready For New Adventures But Can\'t Figure Out What To Do?</h6>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n        <ion-card style="background-color: #f3ca3e" >\n            <img src="assets/imgs/illustration-two.png" style="padding-left: 8%;"/>\n          </ion-card>\n          <div class="card-one-text" style="padding-left: 5%;">\n              <h6>This app allows you to explore Delaware and put together an itinerary for the day!</h6>\n            </div>\n    </ion-slide>\n\n    <ion-slide >\n        <ion-card style="background-color: #0f66c3">\n            <img src="assets/imgs/thumbsup.png" style="padding-left: 8%;"/>\n          </ion-card>\n          <div class="card-one-text">\n              <h6>Let\'s get started!</h6>\n            </div>\n      <div class="next-button" style="padding-top: 15%;">\n        <button ion-button (click)="goToSignupPage()">NEXT</button>\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/launch/launch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LaunchPage);
    return LaunchPage;
}());

//needs ionic plugin for logo launch 
//# sourceMappingURL=launch.js.map

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bars/bars.module": [
		297,
		18
	],
	"../pages/coffeeshops/coffeeshops.module": [
		298,
		17
	],
	"../pages/custom/custom.module": [
		299,
		16
	],
	"../pages/familyfriendly/familyfriendly.module": [
		300,
		15
	],
	"../pages/fastfood/fastfood.module": [
		301,
		14
	],
	"../pages/finedining/finedining.module": [
		302,
		13
	],
	"../pages/guide-one/guide-one.module": [
		303,
		12
	],
	"../pages/handicap/handicap.module": [
		304,
		11
	],
	"../pages/icecreamshops/icecreamshops.module": [
		305,
		10
	],
	"../pages/itinerary/itinerary.module": [
		309,
		9
	],
	"../pages/launch/launch.module": [
		306,
		8
	],
	"../pages/list/list.module": [
		307,
		7
	],
	"../pages/main/main.module": [
		308,
		6
	],
	"../pages/movietheater/movietheater.module": [
		310,
		5
	],
	"../pages/nightclub/nightclub.module": [
		311,
		4
	],
	"../pages/nplist/nplist.module": [
		312,
		3
	],
	"../pages/package/package.module": [
		313,
		2
	],
	"../pages/signup/signup.module": [
		315,
		1
	],
	"../pages/stateparkevents/stateparkevents.module": [
		314,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 172;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuideOnePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the GuideOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GuideOnePage = /** @class */ (function () {
    function GuideOnePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GuideOnePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GuideOnePage');
    };
    GuideOnePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-guide-one',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/guide-one/guide-one.html"*/'<!--\n  Generated template for the GuideOnePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>guideOne</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  \n\n  \n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/guide-one/guide-one.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], GuideOnePage);
    return GuideOnePage;
}());

//# sourceMappingURL=guide-one.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_launch_launch__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_guide_one_guide_one__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_main_main__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_itinerary_itinerary__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_custom_custom__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_package_package__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_nplist_nplist__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_coffeeshops_coffeeshops__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_icecreamshops_icecreamshops__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_bars_bars__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_finedining_finedining__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_fastfood_fastfood__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_familyfriendly_familyfriendly__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_nightclub_nightclub__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_movietheater_movietheater__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_stateparkevents_stateparkevents__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_handicap_handicap__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { StatusBar } from '@ionic-native/status-bar';























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_launch_launch__["a" /* LaunchPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_guide_one_guide_one__["a" /* GuideOnePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_itinerary_itinerary__["a" /* ItineraryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_custom_custom__["a" /* CustomPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_package_package__["a" /* PackagePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_nplist_nplist__["a" /* NplistPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_stateparkevents_stateparkevents__["a" /* StateparkeventsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_coffeeshops_coffeeshops__["a" /* CoffeeshopsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_icecreamshops_icecreamshops__["a" /* IcecreamshopsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_bars_bars__["a" /* BarsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_finedining_finedining__["a" /* FinediningPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_fastfood_fastfood__["a" /* FastfoodPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_familyfriendly_familyfriendly__["a" /* FamilyfriendlyPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_nightclub_nightclub__["a" /* NightclubPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_movietheater_movietheater__["a" /* MovietheaterPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_handicap_handicap__["a" /* HandicapPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bars/bars.module#BarsPageModule', name: 'BarsPage', segment: 'bars', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coffeeshops/coffeeshops.module#CoffeeshopsPageModule', name: 'CoffeeshopsPage', segment: 'coffeeshops', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/custom/custom.module#CustomPageModule', name: 'CustomPage', segment: 'custom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/familyfriendly/familyfriendly.module#FamilyfriendlyPageModule', name: 'FamilyfriendlyPage', segment: 'familyfriendly', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fastfood/fastfood.module#FastfoodPageModule', name: 'FastfoodPage', segment: 'fastfood', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/finedining/finedining.module#FinediningPageModule', name: 'FinediningPage', segment: 'finedining', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guide-one/guide-one.module#GuideOnePageModule', name: 'GuideOnePage', segment: 'guide-one', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/handicap/handicap.module#HandicapPageModule', name: 'HandicapPage', segment: 'handicap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/icecreamshops/icecreamshops.module#IcecreamshopsPageModule', name: 'IcecreamshopsPage', segment: 'icecreamshops', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/launch/launch.module#LaunchPageModule', name: 'LaunchPage', segment: 'launch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/itinerary/itinerary.module#ItineraryPageModule', name: 'ItineraryPage', segment: 'itinerary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movietheater/movietheater.module#MovietheaterPageModule', name: 'MovietheaterPage', segment: 'movietheater', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nightclub/nightclub.module#NightclubPageModule', name: 'NightclubPage', segment: 'nightclub', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nplist/nplist.module#NplistPageModule', name: 'NplistPage', segment: 'nplist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/package/package.module#PackagePageModule', name: 'PackagePage', segment: 'package', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stateparkevents/stateparkevents.module#StateparkeventsPageModule', name: 'StateparkeventsPage', segment: 'stateparkevents', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_launch_launch__["a" /* LaunchPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_guide_one_guide_one__["a" /* GuideOnePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_itinerary_itinerary__["a" /* ItineraryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_custom_custom__["a" /* CustomPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_package_package__["a" /* PackagePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_nplist_nplist__["a" /* NplistPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_stateparkevents_stateparkevents__["a" /* StateparkeventsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_coffeeshops_coffeeshops__["a" /* CoffeeshopsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_icecreamshops_icecreamshops__["a" /* IcecreamshopsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_bars_bars__["a" /* BarsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_finedining_finedining__["a" /* FinediningPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_fastfood_fastfood__["a" /* FastfoodPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_familyfriendly_familyfriendly__["a" /* FamilyfriendlyPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_nightclub_nightclub__["a" /* NightclubPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_movietheater_movietheater__["a" /* MovietheaterPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_handicap_handicap__["a" /* HandicapPage */]
            ],
            providers: [
                //StatusBar,
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_launch_launch__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { StatusBar } from '@ionic-native/status-bar';


var MyApp = /** @class */ (function () {
    function MyApp(platform) {
        // set the rootPage to the first page we want displayed
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_launch_launch__["a" /* LaunchPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //statusBar.styleDefault();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItineraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(173);
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
 * Generated class for the ItineraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItineraryPage = /** @class */ (function () {
    function ItineraryPage(navCtrl, navParams, storage, geolocation, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        console.log(storage.keys());
        this.storage.keys().then(function (data) {
            _this.itineraryList = data;
        });
        this.getLocation();
    }
    ItineraryPage_1 = ItineraryPage;
    ItineraryPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ItineraryPage");
        this.loadMap();
    };
    ItineraryPage.prototype.getLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lat = String(resp.coords.latitude);
            _this.long = String(resp.coords.longitude);
            console.log(resp.coords.longitude + ' ' + resp.coords.latitude);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        this.origin = this.lat + ", " + this.long;
        console.log(this.origin);
    };
    ItineraryPage.prototype.deleteItem = function (item) {
        this.storage.remove(item);
        this.navCtrl.pop();
        this.navCtrl.push(ItineraryPage_1);
    };
    ItineraryPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }, function (err) {
            console.log(err);
        });
    };
    ItineraryPage.prototype.startNavigating = function () {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay.setMap(this.map);
        directionsDisplay.setPanel(this.directionsPanel.nativeElement);
        directionsService.route({
            origin: this.origin,
            destination: this.destination,
            travelMode: google.maps.TravelMode['DRIVING']
        }, function (res, status) {
            // if(status == google.maps.DirectionsStatus.OK){
            //     directionsDisplay.setDirections(res);
            // } else {
            //     console.warn(status);
            // }
            directionsDisplay.setDirections(res);
        });
    };
    ItineraryPage.prototype.setNewDestination = function (input) {
        var alert = this.alertCtrl.create({
            title: 'Travel Advisory Alert',
            subTitle: 'Your travel route contructed for your itinerary contains a travel advisory: \nType: Construction   \nCounty: New Castle County  \nDate:  05/04/2018 9:10 AM \nNotice: 301 SB HAS INTERMITTENT LANE CLOSURES UNTIL AT STRAWBERRY LANE UNTIL 4PM.',
            buttons: ['OK']
        });
        alert.present();
        this.getLocation();
        this.destination = input;
        this.startNavigating();
    };
    ItineraryPage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    ItineraryPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, "click", function () {
            infoWindow.open(_this.map, marker);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ItineraryPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('directionsPanel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ItineraryPage.prototype, "directionsPanel", void 0);
    ItineraryPage = ItineraryPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-itinerary",template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/itinerary/itinerary.html"*/'<!--\n  Generated template for the ItineraryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Itinerary</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<style>\n    /* Always set the map height explicitly to define the size of the div\n     * element that contains the map. */\n    #map {\n      height: 70%;\n    }\n    /* Optional: Makes the sample page fill the window. */\n    html, body {\n      height: 100%;\n      margin: 0;\n      padding: 0;\n    }\n  </style>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div #directionsPanel></div>\n    </ion-card-content>\n  </ion-card>\n      <div #map id="map"></div>\n  <ion-item-divider></ion-item-divider>\n  <h1 ion-text style="font-size: 16px;">Your Itinerary</h1>\n  <ion-item-divider>\n    <ion-card *ngFor="let item of itineraryList" style="width: 265px; padding-left: -10%;">\n      <ion-card-content>\n        <ion-label>{{item}}</ion-label>\n        <ion-row>\n          <ion-col>\n            <button ion-button color="danger" outline (click)="deleteItem(item)"> Delete item</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button color="primary" outline (click)="setNewDestination(item)"> Navigate</button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-item-divider>\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/itinerary/itinerary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ItineraryPage);
    return ItineraryPage;
    var ItineraryPage_1;
}());

//# sourceMappingURL=itinerary.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main__ = __webpack_require__(115);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.submitAttempt = false;
        console.log('Hello SignUpProvider Provider');
        this.url = "https://visitdelawarebackendv2.herokuapp.com";
    }
    SignupPage.prototype.save = function () {
        if (this.infoIsValid() == false) {
            console.log("Missing Info!");
            return;
        }
        this.addProfile();
        console.log("success!");
    };
    SignupPage.prototype.addProfile = function () {
        var signUpForm = {
            name: this.name,
            emailAddress: this.email,
            birthDate: this.birthday,
            zipcode: this.zipcode,
            handicapFlag: this.handicapFlag
        };
        var headers = {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        this.http.post(this.url + '/' + 'profiles', JSON.stringify(signUpForm), headers)
            .subscribe(function (signUpForm) {
            console.log(signUpForm);
        });
    };
    SignupPage.prototype.goToMainPage = function () {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__main_main__["a" /* MainPage */]);
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.infoIsValid = function () {
        var isValid = true;
        if (this.email == null || this.name == null || this.birthday == null || this.zipcode == null) {
            isValid = false;
        }
        return isValid;
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p align="center">First we need some more information so we can help you find the things you want to experience!</p>\n\n\n  <!-- this is our form for the signup page -->\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-list no-lines>\n          <form class="form" (ngSubmit)="save()">\n            <!-- Dashboard Style -->\n            <ion-item class="group-name">\n              <ion-input [(ngModel)]="name" name="name" type="text" placeholder="Full name" required>\n              </ion-input>\n            </ion-item>\n            <ion-item class="group-email">\n              <ion-input [(ngModel)]="email" name="email" type="email" placeholder="Email" required>\n              </ion-input>\n            </ion-item>\n            <ion-item no-lines class="group-date">\n              <ion-label>Select Birthday</ion-label>\n              <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="birthday" name="birthday"></ion-datetime>\n            </ion-item>\n            <ion-item class="group-zipcode">\n              <ion-input [(ngModel)]="zipcode" name="zipcode" type="text" placeholder="Zipcode" required>\n              </ion-input>\n            </ion-item>\n            <ion-label class="group-accom">Accomodations:</ion-label>\n            <ion-item class="disability">\n              <ion-label left stacked>Person with Disability</ion-label>\n              <ion-checkbox [(ngModel)]="handicapFlag" name="handicapFlag"></ion-checkbox>\n            </ion-item>\n            <button ion-button (click)="goToMainPage()" style="padding-right: 5px" >NEXT</button>\n          </form>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map