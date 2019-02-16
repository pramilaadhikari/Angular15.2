import {Component} from '@angular/core'
//importing product class

//this gets imported when we implement OnInit
import { OnInit } from '@angular/core';
import { AccountDetailsService } from './accountdetails.service';
import { AccountDetails } from './accountdetails';

@Component({
    selector: 'account-details',
    templateUrl: './accountdetails.component.html'
})

export class AccountDetailsComponent implements OnInit{
    details: AccountDetails;
    constructor(private d: AccountDetailsService){

    }
    ngOnInit(){
        this.loadDetails();
     }
    loadDetails()
    {
        let customerId = sessionStorage.getItem("customerId");
        let url = "http://localhost:8150/customer/details/"+customerId;
        this.d.retrieveFromServer(url).subscribe(data=>{

            this.details=data;
            console.log(this.details);
        });
        
    }
  
}
