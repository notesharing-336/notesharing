import { CourseCategory } from '../services/courses.service';


/**
 * Constants that represent each course category and what their description is.
 */
export enum CategoryDescription {
    MATHEMATICS = "Calculus, Statistics, Discrete Mathematics, Linear Algebra, Geometry, Real Analysis,Differential Equations, Etc.",
    CHEMISTRY = "General Chemistry, Organic Chemistry, Biochemistry, Environmental Chemistry, Science In Society",
    COMPUTER_SCIENCE = "Web development, Database Management, Programming Languages Concepts, Data Structures and Algorithms",
    HISTORY = "History Of The West, Early America, Women And Gender In Us History, Modern Europe Studies In Ancient And Medieval Europe.",
    ECONOMICS = "Principles Of Microeconomics, Money And Financial Markets, World Poverty And Economic Development, Statistics",
    BIOLOGY = "Human Biology, Living Systems, Human Anatomy, Human Phsiology, Medical Microbiology, Paleontology",
    FINE_ARTS = "Visual Culture, Asian Art, Contemporary Art Music Theory, Music And Global Society World Music",
    BUSINESS = "Managerial Accounting, Financial Accounting, Income Tax, Business Law, Strategic Management, Marketing"
}

  
/**
 * This function returns all the course categories and the needed
 * information needed to render on the courses page.
 */
export function getAllCourseCategory() : CourseCategory[]{
    return [
        { 
        categoryName: "Mathematics",
        description: CategoryDescription.MATHEMATICS,
        categoryImage: "assets/images/mathLogo.jpg",
       
        },

        {
            categoryName: "Chemistry",
            description: CategoryDescription.CHEMISTRY,
            categoryImage: "assets/images/chemistrylogo.jpg",
            
        },

        { 
            categoryName: "Computer Science",
            description: CategoryDescription.COMPUTER_SCIENCE,
            categoryImage: "assets/images/bioLogo.jpg",
        },

        {
            categoryName: "History",
            description: CategoryDescription.HISTORY,
            categoryImage: "assets/images/histLogo.jpg",
        },
    
        { 
            categoryName: "Biology",
            description: CategoryDescription.BIOLOGY,
            categoryImage: "assets/images/bioLogo.jpg",
        },
    
        {
            categoryName: "Economics",
            description: CategoryDescription.ECONOMICS,
            categoryImage: "assets/images/economicsLogo.jpg",
        },

    
        { 
            categoryName: "Fine Arts",
            description: CategoryDescription.FINE_ARTS,
            categoryImage: "assets/images/artLogo.jpg",
        },
    
        {
            categoryName: "Business",
            description: CategoryDescription.BUSINESS,
            categoryImage: "assets/images/businessLogo.jpeg",
        }
    ]       

   
}
