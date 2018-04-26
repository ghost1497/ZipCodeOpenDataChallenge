import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomPage } from './custom';

@NgModule({
  declarations: [
    CustomPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomPage),
  ],
})
export class CustomPageModule {}
