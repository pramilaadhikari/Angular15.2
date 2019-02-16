
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transfer } from './transfer';


@Injectable()   

export class TransferServices {
users : Transfer[];
    
    constructor(private http:HttpClient){

    }
    sendToServer(url,users) {
        
        return this.http.post(url,users)
        } 
             
        }
    
