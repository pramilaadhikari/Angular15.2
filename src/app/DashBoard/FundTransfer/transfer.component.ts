import { Component } from '@angular/core';
import { Transfer } from './transfer';
import { TransferServices } from './transfer.service';



@Component({
    selector: 'transfer',
    templateUrl: './transfer.component.html'
})

export class TransferComponent {
    user: Transfer=new Transfer();
    response: string;

    constructor(private ms: TransferServices){

    }
    
    // keyPress(event: any) {
    //     const pattern = /[0-9\+\-\ ]/;
    //     let inputChar = String.fromCharCode(event.charCode);
    //     if (event.keyCode != 8 && !pattern.test(inputChar)) {
    //       event.preventDefault();
    //     }
    //   }

    store(){
        let url = "http://localhost:8181/customer/add"
        this.ms.sendToServer(url,this.user).subscribe(data => {
            this.response = data['status'];

    });
}
}
   