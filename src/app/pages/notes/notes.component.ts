import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

/* NotesComponent()
* @param: none
* returns: nothing
*/
export class NotesComponent implements OnInit {
categorytitle: string
  constructor() { }

  ngOnInit(): void {

    this.categorytitle = history.state.data
  }

}
