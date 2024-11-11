import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/ModelCourse/Course';
import { CoursService } from 'src/app/Service/cours.service';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
})
export class DropdownsComponent implements OnInit {
  public courses: Course[] = [];
  course: Course = new Course();

  constructor(
    private service: CoursService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.service.getCourseById(+id).subscribe(existingCourse => {
          this.course = existingCourse;
        });
      }
    });
  }

  updateCourse() {
    if (this.course && this.course.courseID) {
      this.service.updateCourse(this.course.courseID, this.course).subscribe(
        () => {
          console.log('Course updated successfully');
          // Display success message in the form or navigate with a success message
          this.router.navigate(["/buttons/addc"], { queryParams: { success: true } }); // Consider passing success flag as query param
        },
        (error) => {
          console.error('Error updating course:', error);
        }
      );
    }
  }
}
