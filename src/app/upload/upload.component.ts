import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  coursetitle: string;
  year: string;
  Name: string;
  isHovering: boolean;
  isUpload: boolean = false;
  isreadytoupload:boolean = false;

  files: File[] = [];



  togglereadyupload(){
this.isreadytoupload = true
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
