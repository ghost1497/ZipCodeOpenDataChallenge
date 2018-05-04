import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CoffeeshopsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coffeeshops',
  templateUrl: 'coffeeshops.html',
})
export class CoffeeshopsPage {
  url: string;
  coffeeShopsArrNotFixed = [];
  coffeeShopsArry: any;


    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public storage : Storage, public alertCtrl: AlertController) {
    this.url ="https://visitdelawarebackendv2.herokuapp.com/restaurantsInDE/coffee";
      let headers = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      };
      let data: Observable<any> = this.http.get(this.url, headers);
      data.subscribe(result => {
        this.coffeeShopsArry = result;
      });
  
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad CoffeeshopsPage');
    }
  
    addToItinerary(nameOnJson: string, latLongOnJson: string){
      console.log(nameOnJson);
      this.storage.set(nameOnJson, latLongOnJson);
      let alert = this.alertCtrl.create({
        title: 'Location Added',
        subTitle: 'This location was added to your itinerary!',
        buttons: ['OK']
      });
      alert.present();
      console.log(this.storage.length());
    }
  
  }