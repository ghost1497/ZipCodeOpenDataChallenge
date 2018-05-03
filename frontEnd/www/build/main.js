webpackJsonp([10],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nplist_nplist__ = __webpack_require__(102);
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
    function CustomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CustomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomPage');
    };
    CustomPage.prototype.toNationalParkList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__nplist_nplist__["a" /* NplistPage */]);
    };
    CustomPage.prototype.toShoppingCart = function () {
    };
    CustomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-custom',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/custom/custom.html"*/'<!--\n  Generated template for the CustomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Custom Options</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding=true>\n  <ion-card>\n    <ion-card-header>\n      Parks\n    </ion-card-header>\n    <ion-list>\n      <button ion-item (click)="toNationalParkList()">\n        <ion-icon name="leaf" item-start></ion-icon>\n        National Parks\n      </button>\n      <button ion-item>\n        <ion-icon name="leaf" item-start></ion-icon>\n        State Park Events\n      </button>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Food\n    </ion-card-header>\n    <ion-list>\n      <button ion-item>\n        <ion-icon name="pizza" item-start></ion-icon>\n        Fast Food\n      </button>\n      <button ion-item>\n        <ion-icon name="bowtie" item-start></ion-icon>\n        Fine Dining\n      </button>\n      <button ion-item>\n        <ion-icon name="contacts" item-start></ion-icon>\n        Family Establishments\n      </button>\n      <button ion-item>\n        <ion-icon name="beaker" item-start></ion-icon>\n        Coffee Shops\n      </button>\n      <button ion-item>\n        <ion-icon name="ice-cream" item-start>\n        </ion-icon>\n        Ice Cream\n      </button>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Recreation\n    </ion-card-header>\n    <ion-list>\n      <button ion-item>\n        <ion-icon name="film" item-start></ion-icon>\n        Movie Theatres\n      </button>\n      <button ion-item>\n        <ion-icon name="american-football" item-start></ion-icon>\n        Sports Events\n      </button>\n      <button ion-item>\n        <ion-icon name="beer" item-start>\n        </ion-icon>\n        Bars\n      </button>\n      <button ion-item>\n        <ion-icon name="wine" item-start></ion-icon>\n        Night Clubs\n      </button>\n    </ion-list>\n  </ion-card>\n  <button ion-button color="primary" (click)=toShoppingCart() outline block>Build Itinerary</button>\n</ion-content>\n\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/custom/custom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CustomPage);
    return CustomPage;
}());

//# sourceMappingURL=custom.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NplistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(78);
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
    function NplistPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
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
        // this.parksArr = _.uniq(this.parksArrNotFixed);
    }
    NplistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NplistPage');
    };
    NplistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nplist',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/nplist/nplist.html"*/'<!--\n  Generated template for the NplistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>National Parks</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let park of parksArr">\n    <img src=\'../../assets/imgs/nature_lover.jpg\'>\n    <ion-card-content>\n      <ion-card-title>{{park.name}}</ion-card-title>\n      <p>\n        {{park.description}}\n      </p>\n      <div>\n        <label >Location: {{park.latLong}}</label>\n\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/nplist/nplist.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object])
    ], NplistPage);
    return NplistPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=nplist.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(104);
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
            selector: 'page-launch',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/launch/launch.html"*/'<!--\n  Generated template for the LaunchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <!-- <ion-navbar>\n    <ion-title>launch</ion-title>\n  </ion-navbar> -->\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <div>\n    <img src="assets/imgs/LOGOLOGO.png">\n  </div> -->\n\n  <ion-slides pager>\n\n    <ion-slide style="background-color: white" class="slide-one">\n      <div class="logoimg">\n        <img src="assets/imgs/SplashPage.png">\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-card style="background-color: #a2d0ff">\n          <!-- <img src="assets/imgs/illustration-one.png"/> -->\n        </ion-card>\n      <div class="card-one-text">\n        <!-- <h6>Ready For New Adventures But Can\'t Figure Out What To Do?</h6> -->\n      </div>\n    </ion-slide>\n  \n    <ion-slide>\n        <ion-card style="background-color: #f3ca3e">\n            <!-- <img src="assets/imgs/illustration-two.png"/> -->\n          </ion-card>\n    </ion-slide>\n  \n    <ion-slide >\n        <ion-card style="background-color: #3574f3">\n            <!-- <img src=""/> -->\n          </ion-card>\n      <div class="next-button">\n        <button ion-button (click)="goToSignupPage()">NEXT</button>\n      </div>\n      \n    </ion-slide>\n  \n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/launch/launch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LaunchPage);
    return LaunchPage;
}());

//needs ionic plugin for logo launch 
//# sourceMappingURL=launch.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(78);
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
            selector: 'page-signup',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p align="center">First we need some more information so we can help you find the things you want to experience!</p>\n\n\n  <!-- this is our form for the signup page -->\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-list no-lines>\n          <form class="form" (ngSubmit)="save()">\n            <!-- Dashboard Style -->\n            <ion-item class="group-name">\n              <ion-input [(ngModel)]="name" name="name" type="text" placeholder="Full name" required>\n              </ion-input>\n            </ion-item>\n            <ion-item class="group-email">\n              <ion-input [(ngModel)]="email" name="email" type="email" placeholder="Email" required>\n              </ion-input>\n            </ion-item>\n            <ion-item no-lines class="group-date">\n              <ion-label>Select Birthday</ion-label>\n              <ion-datetime displayFormat="MMDDYYYY" [(ngModel)]="birthday" name="birthday"></ion-datetime>\n            </ion-item>\n            <ion-item class="group-zipcode">\n              <ion-input [(ngModel)]="zipcode" name="zipcode" type="text" placeholder="Zipcode" required>\n              </ion-input>\n            </ion-item>\n            <ion-label class="group-accom">Accomodations:</ion-label>\n            <ion-item class="disability">\n              <ion-label left stacked>Persons with Disability</ion-label>\n              <ion-checkbox [(ngModel)]="handicapFlag" name="handicapFlag"></ion-checkbox>\n            </ion-item>\n            <button ion-button color="primary" (click)="goToMainPage()" outline block>NEXT</button>\n          </form>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_custom__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__package_package__ = __webpack_require__(106);
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
    function MainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
            selector: 'page-main',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/main/main.html"*/'<!--\n  Generated template for the MainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n  <div class="label">\n      <label>Let\'s creat your experience!</label>\n  </div>\n\n\n\n  <div class="custom">\n    <button ion-button outline block (click)="goToCustomPage()">Custom Packages</button>\n  </div>\n\n  <div class="packages">\n    <button ion-button outline block (click)="goToPackagePage()">Pre-Packages</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/main/main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(107);
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
            selector: 'page-package',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/package/package.html"*/'<!--\n  Generated template for the PackagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Pre-Packages</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="card-background-page" padding>\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col>\n        <ion-card class="card-one">\n          <img src="../../assets/imgs/family_photo.jpeg">\n          <label>Family Fun</label>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card class="card-two">\n          <img src="../../assets/imgs/nightclub.jpg">\n          <label>Club Goers</label>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card class="card-three">\n          <img src="../../assets/imgs/brunch-pic.jpg">\n          <label>Brunch -n- Brews</label>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card class="card-four">\n          <img src="../../assets/imgs/historic_wilmington.jpg">\n          <label>Historic Wilmington</label>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card class="card-five">\n          <img src="../../assets/imgs/nature_lover.jpg">\n          <label>Nature Lover</label>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card class="card-six">\n          <img src="../../assets/imgs/adventure.jpg">\n          <label>Free Adventures</label>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <button ion-button (click)="goToListPage()">NEXT</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/package/package.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PackagePage);
    return PackagePage;
}());

//# sourceMappingURL=package.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPage');
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/list/list.html"*/'<!--\n  Generated template for the ListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/list/list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/custom/custom.module": [
		285,
		9
	],
	"../pages/done/done.module": [
		286,
		8
	],
	"../pages/guide-one/guide-one.module": [
		287,
		7
	],
	"../pages/itinerary/itinerary.module": [
		288,
		6
	],
	"../pages/launch/launch.module": [
		289,
		5
	],
	"../pages/list/list.module": [
		290,
		4
	],
	"../pages/main/main.module": [
		292,
		3
	],
	"../pages/nplist/nplist.module": [
		291,
		2
	],
	"../pages/package/package.module": [
		293,
		1
	],
	"../pages/signup/signup.module": [
		294,
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
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the DonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DonePage = /** @class */ (function () {
    function DonePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonePage');
    };
    DonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-done',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/done/done.html"*/'<!--\n  Generated template for the DonePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>done</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/done/done.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DonePage);
    return DonePage;
}());

//# sourceMappingURL=done.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuideOnePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GuideOnePage);
    return GuideOnePage;
}());

//# sourceMappingURL=guide-one.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItineraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    function ItineraryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ItineraryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItineraryPage');
    };
    ItineraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-itinerary',template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/itinerary/itinerary.html"*/'<!--\n  Generated template for the ItineraryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>itinerary</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/itinerary/itinerary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ItineraryPage);
    return ItineraryPage;
}());

//# sourceMappingURL=itinerary.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_launch_launch__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_guide_one_guide_one__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_main_main__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_itinerary_itinerary__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_done_done__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_custom_custom__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_package_package__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_nplist_nplist__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(78);
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
                __WEBPACK_IMPORTED_MODULE_11__pages_done_done__["a" /* DonePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_custom_custom__["a" /* CustomPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_package_package__["a" /* PackagePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_nplist_nplist__["a" /* NplistPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/custom/custom.module#CustomPageModule', name: 'CustomPage', segment: 'custom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/done/done.module#DonePageModule', name: 'DonePage', segment: 'done', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guide-one/guide-one.module#GuideOnePageModule', name: 'GuideOnePage', segment: 'guide-one', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/itinerary/itinerary.module#ItineraryPageModule', name: 'ItineraryPage', segment: 'itinerary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/launch/launch.module#LaunchPageModule', name: 'LaunchPage', segment: 'launch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nplist/nplist.module#NplistPageModule', name: 'NplistPage', segment: 'nplist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/package/package.module#PackagePageModule', name: 'PackagePage', segment: 'package', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_launch_launch__["a" /* LaunchPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_guide_one_guide_one__["a" /* GuideOnePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_itinerary_itinerary__["a" /* ItineraryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_done_done__["a" /* DonePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_custom_custom__["a" /* CustomPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_package_package__["a" /* PackagePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_nplist_nplist__["a" /* NplistPage */]
            ],
            providers: [
                //StatusBar,
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_launch_launch__ = __webpack_require__(103);
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/frankierodriguez/Dev/ZipCodeOpenDataChallenge/frontEnd/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map