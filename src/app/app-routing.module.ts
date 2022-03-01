import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeratingComponent } from './homerating/homerating.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'home/:id',component:HomeratingComponent},
{path:'', redirectTo:'/login',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
