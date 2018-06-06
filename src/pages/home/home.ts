import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../Welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  SignOut(){
    this.navCtrl.setRoot(WelcomePage);
  }

}
