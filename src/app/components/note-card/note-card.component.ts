import { NotePreviewComponent } from './../note-preview/note-preview.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
  @Input() studentName: string;
  @Input() studentYear: string;
  @Input() url: string



  constructor(public dialog: MatDialog) {


   }

  ngOnInit(): void {
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(NotePreviewComponent, {data: { url: this.url}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
