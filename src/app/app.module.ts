
import * as forms   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { loginComponent } from './LoginPage/login.component';
import { RegistrationServices } from './Registration/registration.service';
import { RegistrationComponent } from './Registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './HomePage/homePage.component';
import { FormsModule } from '@angular/forms';
import { loginServices } from './LoginPage/login.service';
import { DashBoardComponent } from './DashBoard/dashboard.component';
import { AccountDetailsComponent } from './DashBoard/AccountDetails/accountdetails.component';
import { AccountDetailsService } from './DashBoard/AccountDetails/accountdetails.service';
import { AccountStatementComponent } from './DashBoard/AccountStatement/AccState.component';
import { AccountStatementService } from './DashBoard/AccountStatement/AccState.service';
import { AppRoutingModule } from './app-routing.module';
import { ThankyouComponent } from './thankyou.component';
import { TransferComponent } from './DashBoard/FundTransfer/transfer.component';
import { TransferServices } from './DashBoard/FundTransfer/transfer.service';


@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    RegistrationComponent,
    HomePageComponent,
    DashBoardComponent,
    AccountDetailsComponent,
    AccountStatementComponent,
    ThankyouComponent,
    TransferComponent
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,

  
  
    
  ],
  providers: [RegistrationServices, HttpClientModule,loginServices,AccountDetailsService,AccountStatementService,TransferServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
