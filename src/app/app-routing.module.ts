import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { NotesComponent } from './pages/notes/notes.component';
import { SingleCourseInfoComponent } from './components/single-course-info/single-course-info.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';

const routes: Routes = [
  {path: '', component: FilterBarComponent},
  {path: 'courses', component: CoursesComponent },
  {path: 'notes', component: NotesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'aboutus', component: AboutusComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
