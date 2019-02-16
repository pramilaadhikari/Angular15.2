// import { AccountStatement } from './Acc-Statement';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AccountStatementComponent } from './AccState.component';

@Injectable() //Dependency Injection
export class AccountStatementService{
    //This class will talk to server

    constructor(private http:HttpClient)
    {
            
    }
    retrieveFromServer(url:string): Observable<AccountStatementComponent[]>
    {
       return this.http.get<AccountStatementComponent[]>(url)
    } 
    

}