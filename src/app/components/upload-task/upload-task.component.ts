import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators'


;
@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.css']
})
export class UploadTaskComponent implements OnInit {
  @Input() file: File;
  @Input() courseName: string;
  @Input() studentName:string;
  @Input() year:string;
  @Input() courseCategory:string;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;


  constructor(private storage: AngularFireStorage, private db: AngularFirestore) {

   }

  ngOnInit() {
    this.startUpload();
   
  }

  startUpload() {

    //

    // sets the path to our firebase storage
    const path = `Notes/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket--
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();
/// adds the files in our database : contains the download url,name,path and course
        this.db.collection('Notes/').add( { downloadURL: this.downloadURL, path, courseCategoryTitle: this.courseCategory, courseName:this.courseName, studentName:this.studentName, year: this.year});
      }),
    );

  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}

