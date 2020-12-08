import { Component, OnInit } from '@angular/core';
import { CourseCategory, CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courseCategories: CourseCategory[]

  constructor(private courseService: CoursesService) { 
  }

  ngOnInit(): void {
    this.courseCategories = this.courseService.retrieveAllCourseCategories();
  }


}
