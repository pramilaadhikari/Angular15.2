
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Registration } from './registration';
import { Observable } from 'rxjs';

@Injectable()   

export class RegistrationServices {
    users : Registration[];
    
    constructor(private http:HttpClient){

    }
    sendToServer(url,users) : Observable<Registration> {
        
        return this.http.post(url,users)
        } 
             
        }
    
