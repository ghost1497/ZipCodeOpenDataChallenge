import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
//import { StatusBar } from '@ionic-native/status-bar';
import { NavController } from 'ionic-angular';

import { LaunchPage } from '../pages/launch/launch';

import { MainPage } from '../pages/main/main';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // set the rootPage to the first page we want displayed
  rootPage:any = LaunchPage;

  @ViewChild('myNav') nav: NavController;



  constructor(platform: Platform){//, statusBar: StatusBar) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();


    });
  }
}

