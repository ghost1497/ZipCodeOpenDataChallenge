import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IcecreamshopsPage } from './icecreamshops';

@NgModule({
  declarations: [
    IcecreamshopsPage,
  ],
  imports: [
    IonicPageModule.forChild(IcecreamshopsPage),
  ],
})
export class IcecreamshopsPageModule {}
