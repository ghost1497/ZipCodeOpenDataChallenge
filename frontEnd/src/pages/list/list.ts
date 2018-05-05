import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ItineraryPage } from '../itinerary/itinerary';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  goToItinerary(){
    this.storage.clear();
    this.storage.set("White Clay Creek State Park","1");
    this.storage.set("First State National Historical Park","2");
    this.storage.set("El Diablo Burritos","3");
    this.storage.set("Alapocas Run State Park/Wilmington State Parks","4");
    this.storage.set("Rockford Tower at Alapocas State Park","5");
    this.navCtrl.push(ItineraryPage);
  }
}
