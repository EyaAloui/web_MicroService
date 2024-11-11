import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutComponent } from './Components/about/about.component';
import { CoursesComponent } from './Components/courses/courses.component';
import {LoginFrontComponent} from './Components/login-front/login-front.component'
import { CrudcComponent } from './Components/crudc/crudc.component';


const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'home' ,component:HomeComponent},
  {path: 'about' , component:AboutComponent},
  {path: 'courses' , component:CoursesComponent},
  {path: 'LoginFront' , component:LoginFrontComponent},
  {path: 'test' , component:CrudcComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficesRoutingModule { }
