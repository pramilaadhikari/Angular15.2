import { Component } from '@angular/core';
import { Registration } from './registration';
import { RegistrationServices } from './registration.service';
import { Router } from '@angular/router';



@Component({
    selector: 'registration',
    templateUrl: './registration.component.html'
})

export class RegistrationComponent {
  response: Registration;
    user: Registration=new Registration();
  
    

    constructor(private ms: RegistrationServices, private router: Router){

    }
    
  //  keyPress(event: any) {
  //       const pattern = /[0-9\+\-\ ]/;
  //       let inputChar = String.fromCharCode(event.charCode);
  //       if (event.keyCode != 8 && !pattern.test(inputChar)) {
  //         event.preventDefault();
  //       }
  //     }

    store(){
      if(this.user.email!=null  && this.user.firstName!=null){
        let url = "http://192.168.100.195:8150/customer/register"
        this.ms.sendToServer(url,this.user).subscribe(data => {
          this.response = data;

           if(this.response != null) {
            this.router.navigate(['./thankyou']);
           }
            // var check = this.response;
            // if(check =="true"){
            //   this.router.navigate(['./login']);
            // }
          
         
          });
        }
}

// infoMessage = '';
// ngOnInit() {
//     this.route.queryParams
//       .subscribe(params => {
//         if(params.registered !== undefined && params.registered === 'true') {
//             this.infoMessage = 'Registration Successful! Please Login!';
//         }
//       });
// }

}
   