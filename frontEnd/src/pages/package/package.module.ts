import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackagePage } from './package';

@NgModule({
  declarations: [
    PackagePage,
  ],
  imports: [
    IonicPageModule.forChild(PackagePage),
  ],
})
export class PackagePageModule {}
