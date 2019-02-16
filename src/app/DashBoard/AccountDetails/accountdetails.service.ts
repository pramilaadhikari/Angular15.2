
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';

import { AccountDetails } from './accountdetails';

@Injectable() //Dependency Injection
export class AccountDetailsService{
    //This class will talk to server

    constructor(private http:HttpClient)
    {
            
    }
    retrieveFromServer(url:string): Observable<AccountDetails>
    {
       return this.http.get<AccountDetails>(url)
    } 
    

}