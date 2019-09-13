import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './Component/log-in/log-in.component';


const routes: Routes = [
  {path:'login',component:LogInComponent},
    {path:'',redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
