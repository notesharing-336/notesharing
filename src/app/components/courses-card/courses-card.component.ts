import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.css']
})
export class CoursesCardComponent implements OnInit {

  //would be receiving a course title and description for each course category
  @Input() courseImageSrc: string;
  @Input() courseTitle: string;
  @Input() courseDescription: String;

  constructor(private pageRouter: Router) { }

  ngOnInit(): void {
  }

  //TODO: Change this to take arguments where you would pass in category type
  showCourseDetails() {
    this.pageRouter.navigateByUrl("/course-details"); 
  }
}
