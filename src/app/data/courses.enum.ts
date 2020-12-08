import { Course } from '../services/courses.service';

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


export function getAllAvailableCourses() : Course[] {
    return [
        {
            courseName: "HIST 151",
            courseDescription: CoursesDescriptions.HIST_151,
            courseCategoryTitle: "Mathematics",
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
            contributors: ["Bernard Boadu, Alfred Marfo, Valeria Martinex"]
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
  
