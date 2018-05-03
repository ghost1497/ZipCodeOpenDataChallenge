webpackJsonp([6],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(101);
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
    LaunchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LaunchPage');
    };
    LaunchPage.prototype.goToSignupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LaunchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-launch',template:/*ion-inline-start:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/launch/launch.html"*/'<!--\n  Generated template for the LaunchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <!-- <ion-navbar>\n      <ion-title>launch</ion-title>\n    </ion-navbar> -->\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <!-- <div>\n      <img src="assets/imgs/LOGOLOGO.png">\n    </div> -->\n  \n    <ion-slides pager>\n  \n      <ion-slide style="background-color: white" class="slide-one">\n        <div class="logoimg">\n          <img src="assets/imgs/SplashPage.png">\n        </div>\n      </ion-slide>\n  \n      <ion-slide style="background-color: #a2d0ff">\n        <ion-card>\n            <!-- <img src="assets/imgs/illustration-one.png"/> -->\n          </ion-card>\n        <div class="card-one-text">\n          <h6>Ready For New Adventures But Can\'t Figure Out What To Do?</h6>\n        </div>\n      </ion-slide>\n    \n      <ion-slide style="background-color: #f3ca3e">\n          <ion-card>\n              <!-- <img src="assets/imgs/illustration-two.png"/> -->\n            </ion-card>\n      </ion-slide>\n    \n      <ion-slide style="background-color: #3574f3">\n          <ion-card>\n              <!-- <img src=""/> -->\n            </ion-card>\n        <div class="next-button">\n          <button ion-button (click)="goToSignupPage()">NEXT</button>\n        </div>\n        \n      </ion-slide>\n    \n    </ion-slides>\n  </ion-content>'/*ion-inline-end:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/launch/launch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LaunchPage);
    return LaunchPage;
}());

//# sourceMappingURL=launch.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(46);
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
    function SignupPage(navCtrl, formBuilder, http) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.submitAttempt = false;
        console.log('Hello SignUpProvider Provider');
        this.url = "https://visitdelawarebackendv2.herokuapp.com";
        this.signUpForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            emailAddress: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email.bind(this)])],
            birthDate: [''],
            zipcode: [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            handicapFlag: []
        });
    }
    SignupPage.prototype.save = function () {
        // if(!this.signUpForm.valid){
        //   this.submitAttempt = true;
        //   return;
        // }
        // this.addProfile();
        this.gotoMainPage();
        console.log("success!");
        console.log(this.signUpForm.value);
        console.log(this.signUpForm.value.wheelChair ? 1 : 0);
    };
    SignupPage.prototype.addProfile = function () {
        var headers = {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        this.http.post(this.url + '/' + 'profiles', JSON.stringify(this.signUpForm.value), headers)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    SignupPage.prototype.gotoMainPage = function () {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        //this.navCtrl.push(MainPage);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__main_main__["a" /* MainPage */]);
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n  <ion-navbar text-center>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>\n<ion-list no-lines>\n   <form [formGroup]="signUpForm">\n      <ion-item>\n          <ion-label floating>Full Name</ion-label>\n          <ion-input formControlName="name" type="text" [class.invalid]="!signUpForm.controls.name.valid && (signUpForm.controls.name.dirty || submitAttempt)"></ion-input>\n      </ion-item>\n      \n      <ion-item *ngIf="!signUpForm.controls.name.valid  && (signUpForm.controls.name.dirty || submitAttempt)">\n          <p>Please enter a valid name.</p>\n      </ion-item>\n \n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input formControlName="emailAddress" type="email"  [class.invalid]="!signUpForm.controls.emailAddress.valid && (signUpForm.controls.emailAddress.dirty || submitAttempt)"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="!signUpForm.controls.emailAddress.valid  && (signUpForm.controls.emailAddress.dirty || submitAttempt)">\n            <p>Please enter a valid email.</p>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label>Birth Date</ion-label>\n           <ion-datetime formControlName="birthDate" type="text"   displayFormat="MM DD YYYY" max="2006"> </ion-datetime>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label floating>ZipCode</ion-label>\n            <ion-input formControlName="zipcode" type="number" [class.invalid]="!signUpForm.controls.zipcode.valid && (signUpForm.controls.zipcode.dirty || submitAttempt)"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!signUpForm.controls.zipcode.valid  && (signUpForm.controls.zipcode.dirty || submitAttempt)">\n            <p>Please enter a valid zipcode.</p>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label> Mobile Disibilty</ion-label>\n        <ion-checkbox formControlName="handicapFlag" color="dark" checked="true">Mobility Disibilty</ion-checkbox>\n        </ion-item>\n        <ion-item no-lines>\n                <ion-label> Allergies</ion-label>\n            <ion-checkbox color="dark" checked="true"></ion-checkbox>\n            </ion-item>\n            <ion-item no-lines>\n                    <ion-label> Food Allergies</ion-label>\n                <ion-checkbox color="dark"></ion-checkbox>\n                </ion-item>\n                <ion-item no-lines>\n                        <ion-label> Vegan</ion-label>\n                    <ion-checkbox color="dark"></ion-checkbox>\n                    </ion-item>\n          \n    </form>\n</ion-list>\n\n        <button  ion-button (click)="save()">Sign Up</button>\n</ion-content>'/*ion-inline-end:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_custom__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__package_package__ = __webpack_require__(105);
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
    function MainPage(navParams, navCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
    }
    MainPage.prototype.goToCustomPage = function () {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__custom_custom__["a" /* CustomPage */]);
    };
    MainPage.prototype.goToPackagePage = function () {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__package_package__["a" /* PackagePage */]);
    };
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/main/main.html"*/'<!--\n  Generated template for the MainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Main</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="card-background-page">\n\n        <ion-card (click)="goToPackagePage()">\n          <img src="assets/imgs/Pre-Packaged-Card (1).png"/>\n        </ion-card>\n        <ion-card (click)="goToCustomPage()">\n            <img src="assets/imgs/Customize-Card.png"/>\n          </ion-card>\n   \n</ion-content>\n'/*ion-inline-end:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/main/main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(104);
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
        this.selectedPark = false;
        this.parksItems = [
            { title: 'Parks' },
            { title: 'Coming Soon' },
            { title: 'Coming Soon' },
            { title: 'Coffee Shops' },
            { title: 'Coming Soon' },
            { title: 'Coming Soon' },
            { title: 'Hotels' },
            { title: 'Coming Soon' },
            { title: 'Coming Soon' },
        ];
    }
    /*this method I am working on */
    CustomPage.prototype.saveSelection = function () {
        this.selectedPark = true;
    };
    CustomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomPage');
    };
    CustomPage.prototype.goToListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */]);
    };
    CustomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-custom',template:/*ion-inline-start:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/custom/custom.html"*/'<!--\n  Generated template for the CustomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Custom</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="custom-page" padding>\n    <ion-grid no-padding>\n      <ion-row align-items-start> \n        <ng-container>\n         \n        <ion-col col-4 *ngFor="let item of parksItems">\n          <ion-card (click)="saveSelection()">\n            <ion-card-header>{{ item.title }}</ion-card-header>\n            <ion-card-content>{{ item.text }}</ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ng-container>\n      \n      </ion-row>\n    </ion-grid>   \n    <button ion-button (click)="goToListPage()">NEXT</button>\n    </ion-content>\n    <!-- <ion-content class="custom-page" padding>\n    <ion-grid>\n        <ion-row>\n          <ion-col>\n              <ion-card class="card-one">\n                  <ion-card-content>\n                    <label>Family Fun</label>\n                  </ion-card-content>\n                \n                </ion-card>\n          </ion-col>\n          <ion-col>\n              <ion-card class="card-one">\n                  <ion-card-content>\n                    <label>Club Goers</label>\n                  </ion-card-content>\n                \n                </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-card class="card-one">\n                    <ion-card-content>\n                      <label>Brunch -n- Brews</label>\n                    </ion-card-content>\n                  \n                  </ion-card>\n            </ion-col>\n            <ion-col>\n                <ion-card class="card-one">\n                    <ion-card-content>\n                      <label>Historic Wilmington</label>\n                    </ion-card-content>\n                  \n                  </ion-card>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <ion-card class="card-one">\n                      <ion-card-content>\n                        <label>Nature Lover</label>\n                      </ion-card-content>\n                    \n                    </ion-card>\n              </ion-col>\n              <ion-col>\n                  <ion-card class="card-one">\n                      <ion-card-content>\n                        <label>Free Adventures</label>\n                      </ion-card-content>\n                    \n                    </ion-card>\n              </ion-col>\n            </ion-row>\n      </ion-grid>\n      <button ion-button (click)="goToListPage()">NEXT</button>\n</ion-content> -->\n '/*ion-inline-end:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/custom/custom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CustomPage);
    return CustomPage;
}());

//# sourceMappingURL=custom.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_list_list__ = __webpack_require__(160);
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
    //  search:{
    //    theType: string;
    //    keyword: string;
    //  }
    function ListPage(navCtrl, navParams, listProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listProvider = listProvider;
    }
    ListPage.prototype.ionViewDidLoad = function () {
        /*google search api*/
        // this.search = {
        //   theType : 'parks',
        //   keyword: 'parks'
        // }
        this.parks = this.listProvider.getItem();
        console.log(this.parks);
        // this.listProvider.getItem(this.search.theType, this.search.keyword).then(data => {
        //   this.parks = data;
        //   console.log(this.parks);
        // });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/list/list.html"*/'<!--\n  Generated template for the ListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>list</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<!-- <ion-content padding>\n    <ion-scroll scrollX="true" direction="x">\n        <ion-card *ngFor="let item of listCardsParks">\n          <ion-card-content>\n            <ion-card-title>\n              {{ item.title }}\n              </ion-card-title>\n            <button ion-item (click)="openDetailActivity(item)">            \n              More info\n              <ion-icon name="arrow-forward" item-right color="primary"></ion-icon>\n            </button>\n          </ion-card-content>\n        </ion-card>\n      </ion-scroll>\n</ion-content> -->\n\n<ion-content padding>\n    <ion-scroll scrollX="true" direction="x">\n      <ng-container *ngFor="let parkEvent of parkEvents; let i = index">\n      <ion-card *ngIf="i<5">\n          <ion-card-content>\n            <ion-card-title> {{parkEvent.start_time}}</ion-card-title>\n           \n              <!-- <img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+{{park.photos.photo_reference}}+"&key=AIzaSyAv5Kq24hQJew5gTEGXgpV2x2uxsnm-HkA">\n               -->\n            <button ion-item (click)="openDetailActivity(item)">            \n              More info\n              <ion-icon name="arrow-forward" item-right color="primary"></ion-icon>\n            </button>\n          </ion-card-content>\n        </ion-card>\n      </ng-container>\n      </ion-scroll>\n\n</ion-content> -->\n\n'/*ion-inline-end:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/list/list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_list_list__["a" /* ListProvider */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
    PackagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PackagePage');
    };
    PackagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-package',template:/*ion-inline-start:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/package/package.html"*/'<!--\n  Generated template for the PackagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Package</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/pages/package/package.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PackagePage);
    return PackagePage;
}());

//# sourceMappingURL=package.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/custom/custom.module": [
		284,
		5
	],
	"../pages/launch/launch.module": [
		283,
		4
	],
	"../pages/list/list.module": [
		285,
		3
	],
	"../pages/main/main.module": [
		286,
		2
	],
	"../pages/package/package.module": [
		287,
		1
	],
	"../pages/signup/signup.module": [
		288,
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ListProvider = /** @class */ (function () {
    function ListProvider(http) {
        this.http = http;
        //apiKey = "AIzaSyAv5Kq24hQJew5gTEGXgpV2x2uxsnm-HkA";
        //url;
        this.results = [
            {
                "geometry": {
                    "location": {
                        "lat": 39.7586846,
                        "lng": -75.5524157
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 39.75974412989272,
                            "lng": -75.55139102010727
                        },
                        "southwest": {
                            "lat": 39.75704447010727,
                            "lng": -75.55409067989272
                        }
                    }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
                "id": "5393b3b82927549f9a1c5c2aa631e08272c37f6b",
                "name": "Brandywine Park",
                "photos": [
                    {
                        "height": 2322,
                        "html_attributions": [
                            "<a href=\"https://maps.google.com/maps/contrib/102048502044324954155/photos\">Annette Matthews</a>"
                        ],
                        "photo_reference": "CmRaAAAAl7TgD1HhFGfYWoKLcik9Hp0zOp2I6H4osgVV47qMTkASyvErqIrTRy5YjEbgNf3-uIfBIjc9kMZ68wbsc5i5nkCkkrkpo-mFyyEeL6lcdyFwihT7E3F1-B7h4ZVa0stDEhAoWhCYxJ4F76JWcVOPIjEFGhQHYKw533n0h1vdz2i0713FNu3dRw",
                        "width": 4128
                    }
                ],
                "place_id": "ChIJK67RjRf9xokRpdz7-Et1hfw",
                "rating": 4.5,
                "reference": "CmRbAAAAePtTsjO1Aejd_kIVYA7kaCuDNv8LHgJZVnccSQpF46RNEZr_AkukSGRx_fGtbeckL-LCUsKtlEfn7voHmqMfU2DuWkrT5mO3R8CfTPdimqpD9CoTMNgnDDH6HdS9fefPEhBQL3_K_OXPqC6IgAkZKqheGhRSFKdDGDnFqyICUt--hSDyg9E_2w",
                "scope": "GOOGLE",
                "types": [
                    "park",
                    "point_of_interest",
                    "establishment"
                ],
                "vicinity": "1080 N Park Dr, Wilmington"
            },
            {
                "geometry": {
                    "location": {
                        "lat": 39.7365242,
                        "lng": -75.5525193
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 39.73787402989272,
                            "lng": -75.55116947010728
                        },
                        "southwest": {
                            "lat": 39.73517437010728,
                            "lng": -75.55386912989272
                        }
                    }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
                "id": "b819df5ccaf3709870df20555da83e9de88c9134",
                "name": "Tubman Garrett Riverfront Park",
                "opening_hours": {
                    "open_now": true,
                },
                "photos": [
                    {
                        "height": 2988,
                        "html_attributions": [
                            "<a href=\"https://maps.google.com/maps/contrib/103813815463662874891/photos\">Mike Snyder</a>"
                        ],
                        "photo_reference": "CmRaAAAAohQ6s_bDwy66OiDt4WY1GM-OPP7KSed2WJblxPRM1vx0JCrDRiebgMNuJOvFJfx2sZzyFVRTG2TWnfqIXM6k0hE2A6Hn0Mo6l8CWe95HihMiw6PuJPPwOu-nweY89vBSEhBJg4zw0xGDe02yfXO2clmrGhTQOLpEGhJcmUH8sIhq46HJsN0O4Q",
                        "width": 5312
                    }
                ],
                "place_id": "ChIJXavrwmf9xokR6a5rurexPmM",
                "rating": 4.3,
                "reference": "CmRbAAAAfI7b3-jM17eU7g8Tr0MynGo39_HmDnz5WH9KRtq8Gb3gZXB5hM_EQYyg8tWw4A1SN8vNf4tACeELymZ67mI2nW1BIBHV66YvX36miLH6iH2aKATxMSQmlrNPOEfyfO6bEhAkVXlMcNmGKA73F8LjQQRcGhTH-Fo-luLKYUOH2i9crZAjH6qhdg",
                "scope": "GOOGLE",
                "types": [
                    "park",
                    "point_of_interest",
                    "establishment"
                ],
                "vicinity": "815 Justison St, Wilmington"
            }
        ];
        /*GooglePlace API Call*/
        //     console.log('Hello ListProvider Provider');
        //  this.url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
        //  "39.7489094,-75.5653067&radius=1500&type=";
    }
    /*GooglePlace API Call*/
    //   getItem(type, keyword){
    //     let headers =  {
    //       headers: new HttpHeaders({
    //         'Content-Type':  'application/json',
    //         'Access-Control-Allow-Origin': '*'
    //       })
    //     };
    //     trying to get back google place api data implement this when the api is ready.
    //   return  new Promise (resolve => {this.http.get(this.url +type +"&keyword=" + keyword + "&key=" + this.apiKey, ).subscribe(data => {
    //    console.log(data);
    //     resolve(data);
    //   }, err => {
    //     console.log(err);
    //   });
    // });
    // }
    ListProvider.prototype.getItem = function () {
        // Test data to play round with code
        console.log(this.results);
        return (this.results);
    };
    ListProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ListProvider);
    return ListProvider;
}());

//# sourceMappingURL=list.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_font_awesome__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_main_main__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_package_package__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_custom_custom__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_launch_launch__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_list_list__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_custom_custom_provider__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_list_list__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//import { SignUpProvider } from '../providers/sign-up/sign-up';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_package_package__["a" /* PackagePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_custom_custom__["a" /* CustomPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_launch_launch__["a" /* LaunchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/launch/launch.module#LaunchPageModule', name: 'LaunchPage', segment: 'launch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/custom/custom.module#CustomPageModule', name: 'CustomPage', segment: 'custom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/package/package.module#PackagePageModule', name: 'PackagePage', segment: 'package', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_custom_custom__["a" /* CustomPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_package_package__["a" /* PackagePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_launch_launch__["a" /* LaunchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_custom_custom_provider__["a" /* CustomProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_list_list__["a" /* ListProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_launch_launch__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_launch_launch__["a" /* LaunchPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/joshuawurdemann/Dev/ZipCodeOpenDataChallenge/frontEnd/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CustomProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CustomProvider = /** @class */ (function () {
    // testItems = [
    //   {title: 'Parks'},
    //   {title: 'Coming Soon'},
    //   {title: 'Coming Soon'},
    //   {title: 'Coffee Shops'},
    //   {title: 'Coming Soon'},
    //   {title: 'Coming Soon'},
    //   {title: 'Hotels'},
    //   {title: 'Coming Soon'},
    //   {title: 'Coming Soon'},
    // ];
    function CustomProvider(http) {
        this.http = http;
        console.log('Hello CustomProvider Provider');
    }
    CustomProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CustomProvider);
    return CustomProvider;
}());

//# sourceMappingURL=custom.provider.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map