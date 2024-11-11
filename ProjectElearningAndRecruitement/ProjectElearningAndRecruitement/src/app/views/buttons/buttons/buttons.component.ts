import { Component } from '@angular/core';
import { Course } from '../../../ModelCourse/Course';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CoursService } from '../../../Service/cours.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  errorMessage: string = '';
  
  course: Course = new Course();
  selectedFile: File | undefined;
  uploadProgress: number | undefined;

  constructor(private service : CoursService) {}
  
  public addCourse(): void {
    this.service.addCourse(this.course).subscribe(
      (response: Course) => {
        console.log(response);
        alert('Course added successfully');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      
      }
      
    );
  }
 
  validateDates(): void {
    if (this.course.startDate && this.course.endDate) {
      if (new Date(this.course.endDate) < new Date(this.course.startDate)) {
        this.errorMessage = 'La date de fin doit être postérieure à la date de début.';
      } else {
        this.errorMessage = ''; // Réinitialiser le message d'erreur s'il n'y a pas d'erreur
      

      }
    }
    
  }
  isSubmitDisabled(): boolean {
    if (this.course.startDate && this.course.endDate) {
      return new Date(this.course.endDate) < new Date(this.course.startDate);
    }
    return false; // Le bouton de soumission n'est pas désactivé par défaut
  }
}


