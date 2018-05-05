import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StateparkeventsPage } from './stateparkevents';

@NgModule({
  declarations: [
    StateparkeventsPage,
  ],
  imports: [
    IonicPageModule.forChild(StateparkeventsPage),
  ],
})
export class StateparkeventsPageModule {}
