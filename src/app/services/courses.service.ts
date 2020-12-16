import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Injectable } from '@angular/core';
import { CategoryDescription, getAllCourseCategory } from '../data/course-category.enum';
import { getAllAvailableCourses, getAllNotes } from '../data/courses.enum';

/**
 * Refers to a single course. E.g. HIST 153 with a
 * description of 'Explorations in World History' and
 * category 'History'
 */
export interface Course{
  courseName: string;
  courseDescription: string;
  courseCategoryTitle: string;
  professors?: string[];
  contributors?: string[];
  rating?: number;
  comments?: string[];
}

/**
 * Refers to things like Mathematics, History, Biology, etc.
 */
export interface CourseCategory{
  categoryName: string;
  description: string;
  categoryImage: string;
}


/**
 * Refers to a single note which would be uploaded by a
 * student. The note references a course title which can
 * be used to look up a course's related information like
 * its rating, contributors and professors. It also
 * includes the document name (e.g. note.pdf) with
 * an image/url if included.
 */
export interface Note {
  studentName: string;
  courseName: string;
  courseCategoryTitle: string;
  path?: string;
  downloadURL?: string;
}

/**
 * Refers to a single professor who can teach multiple
 * courses. E.g. Victor Norman teaches CS 232 and CS 336
 */
export interface Professor {
  firstname: string;
  lastname: string;
  courses: Course[]
}

/**
 * Refers to a student who contributes his/her note. A
 * student information would include things like their
 * contribution number and the courses they have
 * contributed.
 */
export interface Student {
  studentId: string;
  firstname: string;
  lastname: string;
  year: string;
  major?: string;
  rating: number;
  notes: Note[]
  amountContributed: number;
}


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courseCategories: CourseCategory[];
  courses: Course[];
  localcourse: Course[];
  localnote: Note[];

  constructor(public db:AngularFirestore) { 
    this.courses = []
    this.localcourse = []
  }

  /**
   * Retrives all the course categories and its information
   * to allow it to be rendered on the webpage
   */
  retrieveAllCourseCategories() : CourseCategory[] {
    if (this.courseCategories === undefined || this.courseCategories == null) {
      this.courseCategories = getAllCourseCategory();   //static data from the data folder.
    }
    return this.courseCategories;
  }

  /**
   * Retrieves all courses from the database.
   */
  retrieveAllCourses() : Course[] {
    console.log("Courses: ", this.courses, this.courses.length)
    return  this.courses = this.retrieveCourseFromDatabase().concat(getAllAvailableCourses())
    
  }

  /** retrieveCourseFromDatabase() type Course[]
  * @param: none
  * returns: localcourse
  * retrieves individual course from db
  */

  retrieveCourseFromDatabase(): Course[]{
    console.log("getting stuff from")
    this.db.collection<Course>('Courses').valueChanges().subscribe(
      documentRefs => {
      this.localcourse = documentRefs;
      }
    );
    return this.localcourse
  }

  /** retrieveNoteFromDatabase() type Note[]
  * @param: none
  * returns: localnote
  * retrieves individual note from db
  */


  retrieveNoteFromDatabase(): Note[]{
    this.db.collection<Note>('Notes').valueChanges().subscribe(
      documentRefs => {
      this.localnote = documentRefs;
      }
    );
    return this.localnote
  }

  /** retrieveNotesFromDatabase() type Note[]
  * @param: categoryName: string
  * returns: filterednotes
  * retrieves filtered notes from db
  */


  retrieveNotesByCourseName(categoryName: string): Note[]{

    let filteredNotes: Note[] = [];
    let notes: Note[] = this.retrieveNoteFromDatabase().concat(getAllNotes());
    if (notes !== undefined || notes !== null) {
      notes.forEach(note => {
        if(note.courseName === categoryName)  {
          filteredNotes.push(note)
        }
      });
    }
    return filteredNotes
  }


  /**
   * Retrieves all courses based on the category type
   * Example, if the categoryTitle is "Chemisty", it will
   * retrieve only Chemistry related courses like Chem 101,
   * Chem 103, etc.
   * @param categoryTitle the course category for filtering.
   */
  retrieveCoursesByCategory(categoryTitle: string) : Course[] {
    let filteredCourses: Course[] = [];
    let courses: Course[] = this.retrieveAllCourses();
    if (courses !== undefined || courses !== null) {
      console.log(categoryTitle)
      courses.forEach(course => {
        if(course.courseCategoryTitle === categoryTitle)  {
          filteredCourses.push(course)
        }
      });
    }
    return filteredCourses
  }

  /** retrieveCourseByName type Course[]
   * @param: courseName: string
   * returns filterdCourses
   */

  retrieveCourseByName(courseName: string ) : Course[] {
    let filteredCourses: Course[] = [];
    let courses: Course[] = this.retrieveAllCourses();
    if (courses !== undefined || courses !== null) {

      courses.forEach(course => {
        let formattedCourseName: string = course.courseName.split(" ").join("").toLowerCase();
        let searchedRegexCourseName = new RegExp(courseName);
        if(searchedRegexCourseName.test(formattedCourseName))  {
          filteredCourses.push(course)
        }
      });
    }
    return filteredCourses
  }
}
