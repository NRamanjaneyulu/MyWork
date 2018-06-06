import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SigInPage } from './sig-in';

@NgModule({
  declarations: [
    SigInPage,
  ],
  imports: [
    IonicPageModule.forChild(SigInPage),
  ],
})
export class SigInPageModule {}
