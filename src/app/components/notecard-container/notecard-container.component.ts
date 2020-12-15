import { CoursesService } from 'src/app/services/courses.service';
import { Note } from './../../services/courses.service';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-notecard-container',
  templateUrl: './notecard-container.component.html',
  styleUrls: ['./notecard-container.component.css']
})
export class NotecardContainerComponent implements OnInit {
   @Input() categorytitle: string;

  notes: Note[];

  constructor(private noteService: CoursesService) { }

  ngOnInit(): void {

    this.notes = this.noteService.retrieveNotesByCourseName(this.categorytitle);
  }

}
