import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoffeeshopsPage } from './coffeeshops';

@NgModule({
  declarations: [
    CoffeeshopsPage,
  ],
  imports: [
    IonicPageModule.forChild(CoffeeshopsPage),
  ],
})
export class CoffeeshopsPageModule {}
