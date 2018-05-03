import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CustomProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomProvider {
  // testItems = [
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
  constructor(public http: HttpClient) {
    console.log('Hello CustomProvider Provider');
  }
  
}
