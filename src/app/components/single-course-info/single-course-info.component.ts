import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-single-course-info',
  templateUrl: './single-course-info.component.html',
  styleUrls: ['./single-course-info.component.css']
})
export class SingleCourseInfoComponent implements OnInit {

  //inputs that would come from the course-details page
  @Input() detailedCourseTitle: string;
  @Input() professors: string;
  @Input() contributors: string;
  
  constructor(private pageRouter: Router) { }

  ngOnInit(): void {
  }
  
  showNotesPage() {
    this.pageRouter.navigateByUrl("/notes")
  }
}
