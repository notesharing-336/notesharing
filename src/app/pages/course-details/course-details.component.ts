import { Component, OnInit } from '@angular/core';
import { Course, CoursesService } from 'src/app/services/courses.service';

interface DisplayableCourse {
  detailedTitle: string,
  professors: string;
  contributors: string;
}

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  
  courses : DisplayableCourse[]
  categoryQuery: string;

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    this.categoryQuery = history.state.data; //category sent by courses page
    let unformattedCourses: Course[] = this.courseService.retrieveCoursesByCategory(this.categoryQuery)
    this.courses = this.formatCoursesForDisplay(unformattedCourses);
  }

  /**
   * Takes a course type and formats it in a way that can
   * easily be passed to the single course component to
   * render it
   * @param unformattedCourses: list of courses
   */
  formatCoursesForDisplay(unformattedCourses: Course[]) : DisplayableCourse[]{
    let formattedCourses : DisplayableCourse[] = [];
    unformattedCourses.forEach(course => {
      
      //create a new object that would represent a displayable format of the course
      let formattedCourseObject = {
        detailedTitle: course.courseName,
        professors: course.professors.join(", "),
        contributors: course.contributors.join(", "),
      }

      //push that displayable form into the formatted course list
      formattedCourses.push(formattedCourseObject);
    });

    return formattedCourses;
  } 
}
