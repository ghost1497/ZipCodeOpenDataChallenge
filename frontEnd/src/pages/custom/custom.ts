import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { ListPage } from '../list/list';

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
   selectedPark = false;
   
  parksItems = [
    {title: 'Parks'},
    {title: 'Coming Soon'},
    {title: 'Coming Soon'},
   
    {title: 'Coffee Shops'},
    {title: 'Coming Soon'},
    {title: 'Coming Soon'},
    {title: 'Hotels'},
    {title: 'Coming Soon'},
    {title: 'Coming Soon'},
  ];
   
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
   /*this method I am working on */
   saveSelection(){
     this.selectedPark = true;
     
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomPage');
  }
  goToListPage(){
    this.navCtrl.push(ListPage);
  }
}
