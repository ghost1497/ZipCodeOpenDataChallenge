// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { MainPage } from '../main/main';

// /**
//  * Generated class for the SignupPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-signup',
//   templateUrl: 'signup.html',
// })
// export class SignupPage {
//   name: string;
//   email: string;


// //need to figure out the constructor
//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   // ionViewDidLoad() {
//   //   console.log('ionViewDidLoad SignupPage');
//   // }

//   checkBox(){
//     //
//   }

//   goToMainPage() {
//     this.navCtrl.push(MainPage);
//   }

// }


import { Component} from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MainPage } from '../main/main';
import { HttpClient, HttpHeaders} from '@angular/common/http';
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
  signUpForm: FormGroup;
  submitAttempt: boolean = false;
         url;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public http : HttpClient) {
      console.log('Hello SignUpProvider Provider');
      this.url ="https://visitdelawarebackendv2.herokuapp.com";
  
      this.signUpForm = formBuilder.group({
      name: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      emailAddress: ['',Validators.compose([Validators.required, Validators.email.bind(this)])],
      birthDate:[''],
      zipcode:[Validators.compose([Validators.minLength(5),Validators.maxLength(5), Validators.required])],
      handicapFlag: []
  });
  }
  save(){
    if(!this.signUpForm.valid){
      this.submitAttempt = true;
      return;
    }
    
    this.addProfile();
    this.goToMainPage();
    console.log("success!")
    console.log(this.signUpForm.value);
    console.log(this.signUpForm.value.wheelChair ? 1 : 0);
  }
  
  addProfile(){
    let headers =  {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    this.http.post(this.url +'/' +'profiles', JSON.stringify(this.signUpForm.value), headers)
    .subscribe(data => {
      console.log(data);
  });
  }
    goToMainPage(){
      //push another page onto the history stack
          //causing the nav controller to animate the new page in
          this.navCtrl.push(MainPage);
      }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  
  }