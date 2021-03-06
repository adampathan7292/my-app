import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { User } from './user';

const routes: Routes = [
  {
    path:"",redirectTo:"login",pathMatch:"full"
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"signup", component:SignupComponent
  },
  {
    path:"adminDashboard",component:DashboardComponent,canActivate:[AuthGuard]
  },
  {
    path:"userProfile/:id",component:ProfileComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
