import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficesRoutingModule } from './front-offices-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutComponent } from './Components/about/about.component';
import { CountsComponent } from './Components/counts/counts.component';
import { HeroComponent } from './Components/hero/hero.component';
import { CoursesComponent } from './Components/courses/courses.component';







@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CountsComponent,
    CoursesComponent,
    HeroComponent

  ],
  imports: [
    CommonModule,
    FrontOfficesRoutingModule
  ]
})
export class FrontOfficesModule { }
