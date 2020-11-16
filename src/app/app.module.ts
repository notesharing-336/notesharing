import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { NotesComponent } from './pages/notes/notes.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    NotesComponent,
    ContactComponent,
    AboutusComponent
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
        AngularFireAuthModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
