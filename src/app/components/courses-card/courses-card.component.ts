import { state } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.css']
})
export class CoursesCardComponent implements OnInit {

  //would be receiving a course category information from the courses page
  @Input() courseImageSrc: string;
  @Input() courseTitle: string;
  @Input() courseDescription: String;

  constructor(private pageRouter: Router) { }

  ngOnInit(): void {
  }

  /**
   * This function takes the current course category title and 
   * then passes that as a value when routing to the course
   * details page.
   */
  showCourseDetails(courseTitle: string) {
    this.pageRouter.navigateByUrl("/course-details", {state: {data: courseTitle} }); 
  }
}
