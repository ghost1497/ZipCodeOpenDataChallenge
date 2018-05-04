import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NplistPage } from '../nplist/nplist';
import {CoffeeshopsPage} from '../coffeeshops/coffeeshops';
import { ItineraryPage } from '../itinerary/itinerary';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the CustomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-custom',
  templateUrl: 'custom.html',
})
export class CustomPage {

  itinerary = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomPage');
  }

  toNationalParkList(){
    this.navCtrl.push(NplistPage);
  }
  toCoffeeShopsListList(){
  this.navCtrl.push(CoffeeshopsPage);
}
  toShoppingCart(){
    this.storage.keys().then(data => {
      this.itinerary = data;
    });
    console.log(this.itinerary);
    if(this.itinerary.length == 0){
      let alert = this.alertCtrl.create({
        title: 'Empty Itinerary',
        subTitle: 'Your itinerary seems to be empty. Try adding a location by clicking on one of our sections!',
        buttons: ['OK']
      });
      alert.present();
      return;
      }
    this.navCtrl.push(ItineraryPage);
  }
}
