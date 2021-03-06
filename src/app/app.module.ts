import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';


import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { NotesComponent } from './pages/notes/notes.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CoursesCardComponent } from './components/courses-card/courses-card.component';
import { NotePreviewComponent } from './components/note-preview/note-preview.component';
import { FilterPipe } from './filter.pipe';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TopdashboardComponent } from './components/topdashboard/topdashboard.component';
import { SingleCourseInfoComponent } from './components/single-course-info/single-course-info.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NotecardContainerComponent } from './components/notecard-container/notecard-container.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UploadComponent } from './upload/upload.component';
import { UploadzoneDirective } from './uploadzone.directive';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    NotesComponent,
    ContactComponent,
    AboutusComponent,
    LoginComponent,
    SignupComponent,
    SearchBarComponent,
    CoursesCardComponent,
    NotePreviewComponent,
    FilterPipe,
    MenuBarComponent,
    TopdashboardComponent,
    SingleCourseInfoComponent,
    NoteCardComponent,
    NotecardContainerComponent,
    CourseDetailsComponent,
    UploadComponent,
    UploadzoneDirective,
    UploadTaskComponent,
    UserProfileComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTreeModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MaterialFileInputModule,
    MatProgressBarModule,
    MatDialogModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
