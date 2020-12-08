import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.css']
})
export class CoursesCardComponent implements OnInit {

  constructor(private pageRouter: Router) { }

  ngOnInit(): void {
  }

  showCourseDetails() {
    this.pageRouter.navigateByUrl("/course-details");
  }
}
