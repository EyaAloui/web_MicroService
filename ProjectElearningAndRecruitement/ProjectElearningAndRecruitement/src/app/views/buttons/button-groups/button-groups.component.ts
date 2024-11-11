import { Course } from './../../../ModelCourse/Course';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { CoursService } from '../../../Service/cours.service';
import { HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';
@Component({
  selector: 'app-button-groups',
  templateUrl: './button-groups.component.html',
  styleUrls: ['./button-groups.component.scss']
})
export class ButtonGroupsComponent implements OnInit {

  public course: Course[] = [];
  criteria: string = '';
  courses: Course[] = [];


  constructor(private service : CoursService ,private router: Router ) {}

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
 
  deleteCourse(courseID: number) {
    if (confirm('Are you sure you want to delete thiseCourse?')) {
      this.service.deleteCourse(courseID).subscribe(
        () => {
          console.log('Course deleted successfully');
          this.getAllCourse();
          alert('Course deleted successfully');
        },
        (error) => {
          console.error('Error deleting Course:', error);
        }
      );
     }
    }
   
   
 
  /*  navigatetoUp(id: number): void {
      this.router.navigate(['/buttons/dropdowns',id]).then(() => {
        // Code à exécuter une fois que la navigation est terminée, si nécessaire
      });
    }*/
    navigatetoUp(id: number) {
      this.router.navigate(['/buttons/dropdowns']).then(() => {
  
  
      });
    }


  navigatetoadd(): void {
    this.router.navigate(['/buttons/addc']).then(() => {
      // Code à exécuter une fois que la navigation est terminée, si nécessaire
    });
  }
    

  public searchCourses(criteria: string): void {
    console.log('Recherche de cours...');
    const results: Course[] = [];
    for (const cours of this.course) {
      if (cours.title && (cours.title.toLowerCase().indexOf(criteria.toLowerCase()) !== -1
          || (cours.description && cours.description.toLowerCase().indexOf(criteria.toLowerCase()) !== -1)
          || (cours.startDate && cours.startDate.toString().toLowerCase().indexOf(criteria.toLowerCase()) !== -1)
          || (cours.endDate && cours.endDate.toString().toLowerCase().indexOf(criteria.toLowerCase()) !== -1)
          || (cours.price && cours.price.toString().indexOf(criteria) !== -1))) {
        results.push(cours);
      }
    }
    this.course = results;
    if (results.length === 0 || !criteria) {
      this.getAllCourse();
    }
  }
  
 

 

  
}
