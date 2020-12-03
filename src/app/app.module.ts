import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { NotesComponent } from './pages/notes/notes.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CoursesCardComponent } from './components/courses-card/courses-card.component';
import { NotePreviewComponent } from './components/note-preview/note-preview.component';
import { FilterPipe } from './filter.pipe';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TopdashboardComponent } from './components/topdashboard/topdashboard.component';
import { SingleCourseInfoComponent } from './components/single-course-info/single-course-info.component';



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
    NotePreviewComponent,
    FilterPipe,
    MenuBarComponent,
    TopdashboardComponent,
    SingleCourseInfoComponent,
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
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
