import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginComponent } from './LoginPage/login.component';
import { RegistrationComponent } from './Registration/registration.component';
import { AccountDetailsComponent } from './DashBoard/AccountDetails/accountdetails.component';
import { AccountStatementComponent } from './DashBoard/AccountStatement/AccState.component';
import { ThankyouComponent } from './thankyou.component';
import { DashBoardComponent } from './DashBoard/dashboard.component';
import { TransferComponent } from './DashBoard/FundTransfer/transfer.component';


const routes: Routes = [

  {path: 'login', component:loginComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'accountdetails', component:AccountDetailsComponent},
  {path: 'AccState', component:AccountStatementComponent},
  {path: 'thankyou', component:ThankyouComponent},
  {path: 'user-dashboard', component:DashBoardComponent},
  {path: 'transfer', component:TransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
