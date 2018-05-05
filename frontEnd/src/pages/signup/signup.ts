import { Component} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  submitAttempt: boolean = false;

  name:String;
  email:String;
  zipcode:number;
  birthday:String;
  handicapFlag:boolean;

  url;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    console.log('Hello SignUpProvider Provider');
    this.url = "https://visitdelawarebackendv2.herokuapp.com";
  }
  save() {
    if(this.infoIsValid() == false){
      console.log("Missing Info!")
      return;
    }
    this.addProfile();
    console.log("success!")
  }

  addProfile() {
    let signUpForm = {
      name: this.name,
      emailAddress: this.email,
      birthDate: this.birthday,
      zipcode: this.zipcode,
      handicapFlag: this.handicapFlag
    }
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    this.http.post(this.url + '/' + 'profiles', JSON.stringify(signUpForm), headers)
      .subscribe(signUpForm => {
        console.log(signUpForm);
      });
  }
  goToMainPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(MainPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  infoIsValid(){
    let isValid = true
    if(this.email == null || this.name == null || this.birthday == null || this.zipcode == null){
      isValid = false;
    }
    return isValid;
  }

}
