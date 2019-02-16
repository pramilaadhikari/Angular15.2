import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  User } from './login';
import { Observable } from 'rxjs';
import { LoginStatus } from './loginstatus';

@Injectable()   

export class loginServices {

    constructor(private http:HttpClient){

    }
    sendToServer(url:string,user:User) : Observable<LoginStatus> {
        
        return this.http.post<LoginStatus>(url,user)
        } 
             
        }
    