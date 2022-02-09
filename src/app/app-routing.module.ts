import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ SignInComponent } from './pages/sign-in/sign-in.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {ParentComponent}from './components/parent/parent.component'
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  {
    path:'home' ,component:ParentComponent
  },
  {
    path:'signIn',component:SignInComponent
  },
  {
    path:'signUp',component:SignUpComponent
  }
]; 
@NgModule({

  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
