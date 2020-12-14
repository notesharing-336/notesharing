import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
  @Input() studentName: string;
  @Input() studentYear: string;



  constructor() {
   

   }

  ngOnInit(): void {
  }

  showNoteContent() {
    console.log("will nagivate to the note preview page")
  }
}
