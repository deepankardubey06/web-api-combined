import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewComponent } from './addnew/addnew.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login/login.component';
import { RefillstatusComponent } from './refillstatus/refillstatus.component';
import { SearchdrugComponent } from './searchdrug/searchdrug.component';
import { SearchdrugidComponent } from './searchdrugid/searchdrugid.component';
import { AuthGuard } from './shared/auth.guard';
import { RoleGuard } from './shared/role.guard';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      {
        path: '',
        component: ListingComponent,
      },
      { path: 'create', component: AddnewComponent },
      { path: 'Edit/:id', component: AddnewComponent },
    ],
    canActivate: [RoleGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'searchdrug', component: SearchdrugComponent },
  { path: 'searchdrugid', component: SearchdrugidComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'refillstatus', component: RefillstatusComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
