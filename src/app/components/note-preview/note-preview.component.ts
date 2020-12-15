import { Inject } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StringDecoder } from 'string_decoder';

@Component({
  selector: 'app-note-preview',
  templateUrl: './note-preview.component.html',
  styleUrls: ['./note-preview.component.css']
})
export class NotePreviewComponent implements OnInit {
url:StringDecoder


  constructor(public dialogRef: MatDialogRef<NotePreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.url = data.url
    }

  ngOnInit(): void {
  }

}
