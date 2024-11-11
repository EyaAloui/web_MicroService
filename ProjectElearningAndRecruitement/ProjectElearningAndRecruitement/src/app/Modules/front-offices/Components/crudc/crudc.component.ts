import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursService } from '../../../../Service/cours.service';
import { Course } from '../../../../ModelCourse/Course';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-crudc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crudc.component.html',
  styleUrl: './crudc.component.scss'
})
export class CrudcComponent implements OnInit {
  public course: Course[] = [];
  imagesList: string[] = [
    '../assets/img/course-1.jpg',
    'assets/img/course-2.jpg',
    'assets/img/course-3.jpg',
    'assets/img/events-1.jpg',
    'assets/img/events-2.jpg',
    'assets/img/course-details-tab-2.png',
    'assets/img/course-details-tab-3.png',
    'assets/img/course-details-tab-4.png',
    'assets/img/course-details-tab-5.png',
    
    // Ajoutez d'autres URLs d'images selon vos besoins
  ];
  constructor(private service : CoursService) {}

  ngOnInit(): void {
    this.getAllCourse();
  }

  private getAllCourse(): void {
    this.service.getAllCourse().subscribe(
      (response: Course[]) => {
        this.course = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
