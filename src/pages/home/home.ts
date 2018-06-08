import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../Welcome/welcome';
import { SampleHttpServiceProvider } from '../../providers/sample-http-service/sample-http-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private httpService: SampleHttpServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
    this.getThePosts();
  }

  getThePosts() {
    this.httpService.httpGet('https://jsonplaceholder.typicode.com/posts?userId=1').subscribe(
      response => {
        this.posts = response;
      }, error => {
        console.log(error);
      });
  }

  SignOut(){
    this.navCtrl.setRoot(WelcomePage);
  }

}
