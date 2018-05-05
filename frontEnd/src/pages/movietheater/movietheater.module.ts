import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovietheaterPage } from './movietheater';

@NgModule({
  declarations: [
    MovietheaterPage,
  ],
  imports: [
    IonicPageModule.forChild(MovietheaterPage),
  ],
})
export class MovietheaterPageModule {}
