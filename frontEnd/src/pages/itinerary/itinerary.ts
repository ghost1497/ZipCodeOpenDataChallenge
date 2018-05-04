import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ItineraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-itinerary',
  templateUrl: 'itinerary.html',
})
export class ItineraryPage {
  itineraryList : string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage ) {
    console.log(storage.keys());
    this.storage.keys().then(data => {
      this.itineraryList = data;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItineraryPage');
  }

  deleteItem(item:any){
    this.storage.remove(item);
    this.navCtrl.pop();
    this.navCtrl.push(ItineraryPage);
  }

}
