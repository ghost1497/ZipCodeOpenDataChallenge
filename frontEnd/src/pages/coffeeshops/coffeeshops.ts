import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
 apiKey = "AIzaSyAv5Kq24hQJew5gTEGXgpV2x2uxsnm-HkA";
  url: string;
  coffeeShopsArrNotFixed = [];
  coffeeShopsArry: any[];
 // coffeeShops = Object.keys(this.coffeeShopsArry);

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public storage : Storage) {
    /*backendapplication server*/
    //this.url = "https://visitdelawarebackendv2.herokuapp.com/parksInDE";
   
   /*google places api*/
    this.url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.7489094,-75.5653067&radius=1500&type=restaurant&keyword=coffee&key=" + this.apiKey;
 /*error*/
 /*Failed to load https://maps.googleapis.com/maps/api/place/nearbysearch/
 json?location=39.7489094,-75.5653067&radius=1500&type=restaurant&keyword=coffee&key=AIzaSyAv5Kq24hQJew5gTEGXgpV2x2uxsnm-HkA: 
 Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  Origin 'http://localhost:8100' is therefore not allowed access.
 */
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    this.http.get(this.url, headers).subscribe(result => {
      this.coffeeShopsArry = result['results'];
      console.log(this.coffeeShopsArry);
    });

    // this.parksArr = _.uniq(this.parksArrNotFixed);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoffeeshopsPage');
  }

}
