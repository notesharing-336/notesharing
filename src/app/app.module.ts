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
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CoursesCardComponent } from './componets/courses-card/courses-card.component';
import { NotePreviewComponent } from './components/note-preview/note-preview.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    NotesComponent,
    ContactComponent,
    AboutusComponent,
    SearchBarComponent,
    CoursesCardComponent,
    NotePreviewComponent
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
        MatTreeModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
