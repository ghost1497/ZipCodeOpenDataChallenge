import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FastfoodPage } from './fastfood';

@NgModule({
  declarations: [
    FastfoodPage,
  ],
  imports: [
    IonicPageModule.forChild(FastfoodPage),
  ],
})
export class FastfoodPageModule {}
