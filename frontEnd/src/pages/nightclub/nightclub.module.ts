import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NightclubPage } from './nightclub';

@NgModule({
  declarations: [
    NightclubPage,
  ],
  imports: [
    IonicPageModule.forChild(NightclubPage),
  ],
})
export class NightclubPageModule {}
