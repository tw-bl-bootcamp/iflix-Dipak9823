import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './Component/log-in/log-in.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { MoviesComponent } from './Component/movies/movies.component';


const routes: Routes = [
  {path:'login',component:LogInComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'movies',component:MoviesComponent}
  ]},
    {path:'',redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
