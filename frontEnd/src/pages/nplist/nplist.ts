import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the NplistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nplist',
  templateUrl: 'nplist.html',
})
export class NplistPage {

  url: string;
  parksArr: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.url = "https://visitdelawarebackendv2.herokuapp.com/parksInDE";
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    let data: Observable<any> = this.http.get(this.url, headers);
    data.subscribe(result => {
      this.parksArr = result;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NplistPage');
  }

}
