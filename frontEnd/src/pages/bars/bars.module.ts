import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarsPage } from './bars';

@NgModule({
  declarations: [
    BarsPage,
  ],
  imports: [
    IonicPageModule.forChild(BarsPage),
  ],
})
export class BarsPageModule {}
