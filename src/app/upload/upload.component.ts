import { CoursesService } from './../services/courses.service';

import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  coursecat:string;
  coursetitle: string;
  year: string;
  Name: string;
  isHovering: boolean;
  isUpload: boolean = false;
  courses: any;

  files: File[] = [];

constructor(public db: CoursesService,public dialogRef: MatDialogRef<UploadComponent>){
this.courses = db.retrieveAllCourseCategories();

}

  //shows the upload box after the submit button has been clicked
  toggleupload(){
    this.isUpload = true
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  //upload files when it is dropped when draging
  onDrop(files: FileList) {
    console.log(this.coursetitle)
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }


}
