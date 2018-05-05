import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the FamilyfriendlyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-familyfriendly',
  templateUrl: 'familyfriendly.html',
})
export class FamilyfriendlyPage {
  url: string;
  iceCreamShopsArrNotFixed = [];
  familyFriendlyArry: any[];


    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public storage : Storage, public alertCtrl: AlertController) {
    this.url ="https://visitdelawarebackendv2.herokuapp.com/restaurantsInDE/Family+Friendly+Restaurants";
      let headers = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      };
      let data: Observable<any> = this.http.get(this.url, headers);
      data.subscribe(result => {
        this.familyFriendlyArry = result['businesses'];
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
    console.log('ionViewDidLoad FamilyfriendlyPage');
  }

}
