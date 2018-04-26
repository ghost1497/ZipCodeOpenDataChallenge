import { HttpClient} from '@angular/common/http';
import { Injectable,} from '@angular/core';


/*
  Generated class for the SignUpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SignUpProvider {
url;
  constructor(public http: HttpClient) {
    console.log('Hello SignUpProvider Provider');
  this.url ="https://visitdelawarebackendv2.herokuapp.com";
  }
    
   addProfile(theObject :any){
 
    return new Promise((resolve, reject) => {this.http.post(this.url +'/' +'profiles', JSON.stringify(theObject))
    .subscribe(res => {
      resolve(res);
    }, (err) => {
      reject(err);
      console.log(theObject);
  });
    });
}
}