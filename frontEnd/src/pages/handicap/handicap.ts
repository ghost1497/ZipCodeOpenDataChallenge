import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the HandicapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-handicap',
  templateUrl: 'handicap.html',
})
export class HandicapPage {
  url : any ;
  handicapArr = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public http: HttpClient, public alertCtrl: AlertController) {
    this.url ="https://visitdelawarebackendv2.herokuapp.com/restaurantsInDE/wheelchair_accessible";
      let headers = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      };
      let data: Observable<any> = this.http.get(this.url, headers);
      data.subscribe(result => {
        this.handicapArr = result['businesses'];
      });
  }

  addToItinerary(nameOnJson: string, latLongOnJson: string){
    console.log(nameOnJson, latLongOnJson);
    this.storage.set(nameOnJson, latLongOnJson);
    let alert = this.alertCtrl.create({
      title: 'Location Added',
      subTitle: 'This location was added to your itinerary!',
      buttons: ['OK']
    });
    alert.present();
    console.log(this.storage.length());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HandicapPage');
  }

}
