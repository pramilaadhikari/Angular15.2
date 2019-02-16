import { Component } from '@angular/core';

@Component({
    selector: `thankyou`,
    template: `
    <h1>Thank you for registering with us</h1>
    <li><a [routerLink]="['./login']">Click here</a>to Login</li>
    `
})
export class ThankyouComponent {

}