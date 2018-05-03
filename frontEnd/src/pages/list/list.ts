import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListProvider } from '../../providers/list/list';


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
  // listCardsParks = [
  //   {title: 'Parks'},
  //   {title: 'Coming Soon'},
  //   {title: 'Coming Soon'},
  //   {title: 'Coffee Shops'},
  //   {title: 'Coming Soon'},
  //   {title: 'Coming Soon'},
  //   {title: 'Hotels'},
  //   {title: 'Coming Soon'},
  //   {title: 'Coming Soon'},
  // ];

 parks : any[];
 parkEvents = [];
 
//  search:{
//    theType: string;
//    keyword: string;
//  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public listProvider: ListProvider) {
 
  }

  ionViewDidLoad() {
    /*google search api*/
    // this.search = {
    //   theType : 'parks',
    //   keyword: 'parks'
    // }
  
    this.parks = this.listProvider.getItem();
    console.log(this.parks);

    // this.listProvider.getItem(this.search.theType, this.search.keyword).then(data => {
    //   this.parks = data;
    //   console.log(this.parks);
    // });

     this.parkEvents.push(this.listProvider.getParkEvents());
      console.log(this.parks);
    }
  }





