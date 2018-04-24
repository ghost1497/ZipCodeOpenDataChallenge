import { Component} from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeValidator } from  './age';
import { MainPage } from '../main/main';

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
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.signUpForm = formBuilder.group({
      fullName: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
     email: [''],
     age:['',AgeValidator.isValid],
     zipCode:['']
    
  });
  }
  
  save(){
    this.submitAttempt = true;
 
    if(!this.signUpForm.valid){
    
    }
    else{
      this.gotoMainPage;
      console.log("success!")
        console.log(this.signUpForm.value);
    }
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

