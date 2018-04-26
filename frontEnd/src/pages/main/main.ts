import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomPage } from '../custom/custom';
import { PackagePage } from '../package/package';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navParams: NavParams,public navCtrl: NavController) {
  
  }
  goToCustomPage(){
    //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(CustomPage);
    }
    goToPackagePage(){
      //push another page onto the history stack
          //causing the nav controller to animate the new page in
          this.navCtrl.push(PackagePage);
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  

}
