import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Course} from "../ModelCourse/Course" ;
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class CoursService {

  private baseUrl = "http://localhost:8089/courses";
  constructor(private HttpClient: HttpClient) { }
  addCourse(data: Course): Observable<Course> {
 
    return this.HttpClient.post<Course>(`${this.baseUrl}/addcourse`, data);

  }
  getAllCourse(): Observable<Course[]> { // Correction : Ajout du type de retour Observable<Course[]>
    return this.HttpClient.get<Course[]>(`${this.baseUrl}/get`); // Correction : Préciser le type de retour
  }
  getCourseById(courseID: number): Observable<Course> {
    return this. HttpClient.get<Course>(`${this.baseUrl}/${courseID}`);
  }
  updateCourse(courseID: number, data: Course): Observable<Course> {
    return this. HttpClient.put<Course>(`${this.baseUrl}/updateCourse/${courseID}`, data);

  }
  public deleteCourse(courseID: number): Observable<void> {
    return this.HttpClient.delete<void>(`${this.baseUrl}/deleteCourse/${courseID}`);
  }


  

  ////////////////////////
  addFile(selectedFile: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', selectedFile);

    return this.HttpClient.post<any>(`${this.baseUrl}/addfile`, formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map(event => this.getUploadProgress(event)),
      catchError(this.handleError)
    );
  }

  

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Une erreur est survenue lors de la tentative d\'ajout du fichier.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = error.message;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


/*uploadFile(file: File): Observable<number> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.HttpClient.post(this.baseUrl + '/upload', formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map(event => this.getUploadProgress(event)),
    );
  }*/

  private getUploadProgress(event: any): number {
    if (event.type === HttpEventType.UploadProgress) {
      const percentDone = Math.round((event.loaded / event.total) * 100);
      return percentDone;
    }
    return 0;
  }

  getFiles(): Observable<any> {
    return this.HttpClient.get<File[]>(this.baseUrl+ '/files');
  }
  public deleteFile(fileID: number): Observable<void> {
    return this.HttpClient.delete<void>(`${this.baseUrl}/deleteFile/${fileID}`);
  }
}
