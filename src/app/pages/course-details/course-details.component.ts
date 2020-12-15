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
  query: string;
  queryDisplay: string;

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    this.query = history.state.data; //the query made when routing to this page
    let queryType: string = history.state.queryType; //category query vs search query
    let unformattedCourses: Course[] = []

    //to know to query for all courses related to a course category
    if (queryType !== null && queryType === "COURSE_CATEGORY"){
      unformattedCourses = this.courseService.retrieveCoursesByCategory(this.query)
      this.queryDisplay = this.query;

    //to know to query for all courses related to a search detail
    } else if (queryType !== null && queryType === "COURSE_DETAIL"){
      unformattedCourses = this.courseService.retrieveCourseByName(this.query)
      this.queryDisplay = unformattedCourses.length !== 0 ? 
          unformattedCourses[0].courseName : this.query + " (NO RESULTS FOUND)";
    }

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
