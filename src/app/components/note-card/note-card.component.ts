import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
  studentName: string;
  studentContributions: number;
  studentYear: string;
  studentMajor: string;
  studentRating: number;


  constructor() {
    this.studentName = "Bernard Boadu";
    this.studentContributions = 10;
    this.studentYear = "Senior"
    this.studentMajor = "Computer Science"
    this.studentRating = 2.5
   }

  ngOnInit(): void {
  }

  showNoteContent() {
    console.log("will nagivate to the note preview page")
  }
}
