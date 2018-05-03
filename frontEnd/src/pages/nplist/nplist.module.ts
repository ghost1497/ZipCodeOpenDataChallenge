import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NplistPage } from './nplist';

@NgModule({
  declarations: [
    NplistPage,
  ],
  imports: [
    IonicPageModule.forChild(NplistPage),
  ],
})
export class NplistPageModule {}
