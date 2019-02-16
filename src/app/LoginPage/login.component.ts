
import { Component } from '@angular/core';
import { User } from './login';
import { loginServices } from './login.service';
import { Router } from '@angular/router';
import { LoginStatus } from './loginstatus';


@Component({
    selector : 'login',
    templateUrl  :'login.component.html'
})
export class loginComponent{
    response:LoginStatus;
    user: User = new User();
    router: any;
    constructor(public ur:loginServices, private r:Router){

    }


verify(){
    let url1 = 'http://192.168.100.195:8150/customer/login'
    // this.r.navigate(['dash-board']);
    this.ur.sendToServer(url1,this.user).subscribe(data => {
        this.response = data;

        if(this.response.status = "Successful!") {
            sessionStorage.setItem('name', this.response.name);
            sessionStorage.setItem('customerId', ""+this.response.customerId);
            this.r.navigate(['./user-dashboard']);
           }

else{
    this.user.email="";
    this.user.password="";
    this.router.navigate(['./login']);
    alert("please check your emailid and password")

}
});
}
}