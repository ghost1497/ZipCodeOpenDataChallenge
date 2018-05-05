import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { NplistPage } from "../nplist/nplist";
import { CoffeeshopsPage } from "../coffeeshops/coffeeshops";
import { IcecreamshopsPage } from "../icecreamshops/icecreamshops";
import { BarsPage } from "../bars/bars";
import { ItineraryPage } from "../itinerary/itinerary";
import { Storage } from "@ionic/storage";
import { AlertController } from "ionic-angular";
import { FinediningPage } from "../finedining/finedining";
import { FastfoodPage } from "../fastfood/fastfood";
import { FamilyfriendlyPage } from "../familyfriendly/familyfriendly";
import { NightclubPage } from "../nightclub/nightclub";
import { MovietheaterPage } from "../movietheater/movietheater";
import { StateparkeventsPage } from "../stateparkevents/stateparkevents";
import { SignupPage } from "../signup/signup";
import { HandicapPage } from "../handicap/handicap";
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the CustomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-custom",
  templateUrl: "custom.html"
})
export class CustomPage {
  itinerary = [];
  handicapFlag: boolean;
  signup = new SignupPage(this.navCtrl, this.http);
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public alertCtrl: AlertController,
    public http: HttpClient
  ) {
    this.handicapFlag = this.signup.handicapFlag;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CustomPage");
  }

  toNationalParkList() {
    this.navCtrl.push(NplistPage);
  }
  toStateParkEventList() {
    this.navCtrl.push(StateparkeventsPage);
  }
  toCoffeeShopsList() {
    this.navCtrl.push(CoffeeshopsPage);
  }
  toIceCreamShopsList() {
    this.navCtrl.push(IcecreamshopsPage);
  }
  toBarsList() {
    this.navCtrl.push(BarsPage);
  }
  toFineDiningList() {
    this.navCtrl.push(FinediningPage);
  }
  toFastFoodList() {
    this.navCtrl.push(FastfoodPage);
  }

  toFamilyFriendlyList() {
    this.navCtrl.push(FamilyfriendlyPage);
  }
  tonightClubList() {
    this.navCtrl.push(NightclubPage);
  }
  toMovieTheaterList() {
    this.navCtrl.push(MovietheaterPage);
  }

  handicapPlaces() {
    this.navCtrl.push(HandicapPage);
  }

  toShoppingCart() {
    this.storage.keys().then(data => {
      this.itinerary = data;
    });
    console.log(this.itinerary);
    if (this.itinerary.length == 0) {
      let alert = this.alertCtrl.create({
        title: "Empty Itinerary",
        subTitle:
          "Your itinerary seems to be empty. Try adding a location by clicking on one of our sections!",
        buttons: ["OK"]
      });
      alert.present();
      return;
    } else {
      this.navCtrl.push(ItineraryPage);
    }
  }
}
