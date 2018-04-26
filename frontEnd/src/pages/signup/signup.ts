import { Component} from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MainPage } from '../main/main';
import { HttpClient, HttpHeaders} from '@angular/common/http';
//import { Injectable,} from '@angular/core';


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
  //signUpService: SignUpProvider;
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
    //this.signUpForm.value.zipCode =
    this.addProfile();
    this.gotoMainPage();
    console.log("success!")
    console.log(this.signUpForm.value);
    console.log(this.signUpForm.value.wheelChair ? 1 : 0);

    if(this.signUpForm.value.wheelChair) {
      console.log("we need to do something");
    }
  }

  //Error is therefore not allowed access. The response had HTTP status code 415. Think form is not returning data in format I need. zipcode needs to be an number.
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
    gotoMainPage(){
      //push another page onto the history stack
          //causing the nav controller to animate the new page in
          this.navCtrl.push(MainPage);
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  
  }

