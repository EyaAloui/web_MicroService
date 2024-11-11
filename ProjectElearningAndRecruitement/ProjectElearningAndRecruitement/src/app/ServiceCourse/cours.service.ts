
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  private baseUrl = "http://localhost:8089/Course";

  constructor(  private HttpClient: HttpClient) { }
  getAllCourse()
  {
     return this. HttpClient.get(this.baseUrl);

  }
}
