import { Course } from '../services/courses.service';

//A constant that holds the description of each specific course
export enum CoursesDescriptions {
    MATH_171 = "CALCLUS I",
    MATH_172 = "CALCULUS II",
    MATH_251 = "DISCRETE MATHEMATICS",
    CHEM_101 = "MOLECULAR WORLD",
    CHEM_103 = "GENERAL CHEMISTRY I",
    CHEM_115 = "CHEMISTRY FOR HEALTH SCIENCES",
    CS_108 = "INTRODUCTION TO COMPUTING",
    CS_112 = "INTRODUCTION TO DATA STRUCTURES",
    CS_336 = "WEB DEVELOPMENT",
    HIST_151 = "HISTORY OF THE WEST AND THE WORLD I",
    HIST_152 = "HISTORY OF THE WEST AND THE WORLD II",
    HIST_153 = "EXPLORATIONS IN WORLD HISTORY"
}

/**
 * This function returns a list containing a sample list of courses
 * and their course details.
 */
export function getAllAvailableCourses() : Course[] {
    return [
        {
            courseName: "MATH 171",
            courseDescription: CoursesDescriptions.MATH_171,
            courseCategoryTitle: "Mathematics",
            professors: ["Scofield, Ferdinard"],
            contributors: ["Nathan Wang, Peter Peng"]
        },
        {
            courseName: "MATH 172",
            courseDescription: CoursesDescriptions.MATH_172,
            courseCategoryTitle: "Mathematics",
            professors: ["Scofield, Ferdinard"],
            contributors: ["Robert Akinie, Chiz Nnodu"]
        },
        {
            courseName: "CHEM 103",
            courseDescription: CoursesDescriptions.MATH_171,
            courseCategoryTitle: "Chemistry",
            professors: ["Debra Freeberg"],
            contributors: ["Jojo Arthur, Kwaku Boateng"]
        },
        {
            courseName: "HIST 151",
            courseDescription: CoursesDescriptions.HIST_151,
            courseCategoryTitle: "History",
            professors: ["Douglas Howard"],
            contributors: ["Bernard Boadu, Alfred Marfo"]
        },
        {
            courseName: "HIST 153",
            courseDescription: CoursesDescriptions.HIST_153,
            courseCategoryTitle: "History",
            professors: ["Douglas Howard", "Patrick Bailey"],
            contributors: ["Chiz Nnodu, Alfred Marfo"]
        },
        {
            courseName: "CS 336",
            courseDescription: CoursesDescriptions.CS_336,
            courseCategoryTitle: "Computer Science",
            professors: ["Victor Norman, Keith Vander Linden"],
            contributors: ["Alfred Marfo, Valeria Martinez"]
        },
        {
            courseName: "CS 112",
            courseDescription: CoursesDescriptions.CS_112,
            courseCategoryTitle: "Computer Science",
            professors: ["Joel Adams", "Victor Norman"],
            contributors: ["Bernard Boadu, Alfred Marfo"]
        },
        {
            courseName: "CS 108",
            courseDescription: CoursesDescriptions.CS_108,
            courseCategoryTitle: "Computer Science",
            professors: ["Victor Norman", "Keith Vander Linden", "Kenneth Arnold"],
            contributors: ["Bernard Boadu, Alfred Marfo"]
        },
    ]
}
  
