import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LaunchPage } from '../pages/launch/launch';
import { GuideOnePage } from '../pages/guide-one/guide-one';
import { ListPage } from '../pages/list/list';
import { MainPage } from '../pages/main/main';
import { SignupPage } from '../pages/signup/signup';
import { ItineraryPage } from '../pages/itinerary/itinerary';
import { CustomPage } from '../pages/custom/custom';
import { PackagePage } from '../pages/package/package';
import { NplistPage } from '../pages/nplist/nplist';
import {CoffeeshopsPage} from '../pages/coffeeshops/coffeeshops';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { IcecreamshopsPage } from '../pages/icecreamshops/icecreamshops';
import { BarsPage } from '../pages/bars/bars';
import { FinediningPage } from '../pages/finedining/finedining';
import { FastfoodPage } from '../pages/fastfood/fastfood';
import { FamilyfriendlyPage } from '../pages/familyfriendly/familyfriendly';
import { NightclubPage } from '../pages/nightclub/nightclub';
import { MovietheaterPage } from '../pages/movietheater/movietheater';
import { StateparkeventsPage } from '../pages/stateparkevents/stateparkevents';
import { HandicapPage } from '../pages/handicap/handicap';


@NgModule({
  declarations: [
    MyApp,
    LaunchPage,
    GuideOnePage,
    ListPage,
    MainPage,
    SignupPage,
    ItineraryPage,
    CustomPage,
    PackagePage,
    NplistPage,
    StateparkeventsPage,
    CoffeeshopsPage,
    IcecreamshopsPage,
    BarsPage,
    FinediningPage,
    FastfoodPage,
    FamilyfriendlyPage,
    NightclubPage,
    MovietheaterPage,
    HandicapPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LaunchPage,
    GuideOnePage,
    ListPage,
    MainPage,
    SignupPage,
    ItineraryPage,
    CustomPage,
    PackagePage,
    NplistPage,
    StateparkeventsPage,
    CoffeeshopsPage,
    IcecreamshopsPage,
    BarsPage,
    FinediningPage,
    FastfoodPage,
    FamilyfriendlyPage,
    NightclubPage,
    MovietheaterPage,
    HandicapPage
  ],
  providers: [
    //StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},


  ]
})
export class AppModule {}
