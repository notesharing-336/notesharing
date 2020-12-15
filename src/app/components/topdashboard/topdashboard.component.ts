import { MatDialog } from '@angular/material/dialog';
import { UploadComponent } from './../../upload/upload.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-topdashboard',
  templateUrl: './topdashboard.component.html',
  styleUrls: ['./topdashboard.component.css']
})
export class TopdashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UploadComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
