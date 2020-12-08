import { Injectable } from '@angular/core';
import { CategoryDescription, getAllCourseCategory } from '../data/course-category.enum';
import { getAllAvailableCourses } from '../data/courses.enum';

/**
 * Refers to a single course. E.g. HIST 153 with a 
 * description of 'Explorations in World History' and
 * category 'History'
 */
export interface Course{
  courseName: string;
  courseDescription: string;
  courseCategoryTitle: string;
  professors: string[];
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
  id: number;
  contributorId: string;
  courseTitle: string;
  documentname: string;
  documentImage?: string;
  documentURL?: string;
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

  constructor() { }

  retrieveAllCourseCategories() : CourseCategory[] {
    this.courseCategories = getAllCourseCategory();   //static data from the data folder.
    return this.courseCategories;
  }

  retrieveAllCourses() : Course[] {
    this.courses = getAllAvailableCourses();
    return this.courses;
  }

  retrieveAllCoursesByCourseCategory(category: string) : Course[] {
    let filteredCourses: Course[];
    let courses: Course[] = this.retrieveAllCourses();
    if (courses !== undefined || courses !== null) {
      courses.forEach(course => {
        if(course.courseCategoryTitle === category)  {
          filteredCourses.push(course)
        }
      });
    }
    return filteredCourses
  }
}
