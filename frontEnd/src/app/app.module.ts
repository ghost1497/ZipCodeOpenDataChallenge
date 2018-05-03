import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import {SignupPage} from '../pages/signup/signup';
import {MainPage} from '../pages/main/main';
import { HttpClientModule } from '@angular/common/http';
import { PackagePage } from '../pages/package/package';
import { CustomPage } from '../pages/custom/custom';
import { LaunchPage } from '../pages/launch/launch';
import { ListPage } from '../pages/list/list';
import { CustomProvider } from '../providers/custom/custom.provider';
import { ListProvider } from '../providers/list/list';

//import { SignUpProvider } from '../providers/sign-up/sign-up';


@NgModule({
  declarations: [
    MyApp,
    SignupPage,
    MainPage,
    PackagePage,
    CustomPage,
    LaunchPage,
    ListPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFontAwesomeModule,
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignupPage,
    MainPage,
    CustomPage,
    PackagePage,
    LaunchPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomProvider,
    ListProvider,
   // SignUpProvider,
  ]
})
export class AppModule {}
