import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuideOnePage } from './guide-one';

@NgModule({
  declarations: [
    GuideOnePage,
  ],
  imports: [
    IonicPageModule.forChild(GuideOnePage),
  ],
})
export class GuideOnePageModule {}
