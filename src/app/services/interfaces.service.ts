import { Injectable } from '@angular/core';

/**
 * Refers to things like Mathematics, History, Biology, 
 * etc. which will contain a list of specific courses. 
 * E.g. History would contain the courses HIST 151, HIST 152 etc.
 */
export interface CourseCategory{
  categoryName: string;
  description: string;
  categoryImage: string;
  courses: Course[]
}

/**
 * Refers to a single course. E.g. HIST 153 with a 
 * description of 'Explorations in World History' and
 * category 'History'
 */
export interface Course{
  courseName: string;
  courseDescription: string;
  courseCategoryTitle: string;
  professor: Professor[];
  contributors?: Student[];
  rating?: number;
  comments?: string[];
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
export class InterfacesService {

  constructor() { }
}
