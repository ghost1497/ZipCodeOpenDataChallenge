// import { FormControl } from '@angular/forms';
 
// export class AgeValidator {
 
//     static isValid(control: FormControl): any {
    
//        let age: number
//        let  Number.parseInt(control.value);

//         let timeDiff = Math.abs(Date.now() - this.birthdate);
       
//         console.log(timeDiff);


//        this.data.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
//         if(control.value % 1 !== 0){
//             return {
//                 "not a whole number": true
//             };
//         }
 
//         if(control.value < 12){
//             return {
//                 "too young": true
//             };
//         }
 
//         if (control.value > 120){
//             return {
//                 "not realistic": true
//             };
//         }
 
//         return null;
//     }
 
// }