import { NgModule } from '@angular/core';
import { IonicPage, IonicPageModule, NavController, NavParams} from 'ionic-angular';
import { SignupPage } from './signup';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
})
export class SignupPageModule {
  constructor(navParams : NavParams){
  let id = navParams.get('id');
  let name = navParams.get('name');
  }
}
