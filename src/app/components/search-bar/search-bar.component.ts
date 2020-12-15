import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  fakeDataSet: string[];    //replaced by a list to hold actual courses titles
  searchText :string;
  searchResult: string;     //would be replace to display cards

  constructor(private router: Router) { 
    //allows the page to reload on the same page
    this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;}
    this.router.onSameUrlNavigation = 'reload';

    this.fakeDataSet = [
        'HIST 151', 
        'BIO 223', 
        'CS 336', 
        'CS 108', 
        'HIST 153',
        'PHIL 153',
        'ENG 101',
        'ENG 102',
        'ENGR 220',
        'PER 103'
      ]
  }

  ngOnInit(): void {
    //this is were you load the search history/frequently searched (MAX 15)
  }

  /**
   * Calls the service class to produces all notes under that 
   * that course title.
   * <code>removes any white spaces and makes it all lowercase"</code>
   * 
   * @param aCourseTitle the course title to be used to retrieve notes
   */
  displaySearchResults(aCourseTitle: string): void {
    let formattedQuery: string = aCourseTitle.split(" ").join("").toLowerCase();
    this.router.navigateByUrl("/course-details", {state: {data: formattedQuery, queryType: "COURSE_DETAIL"} })
    this.searchText = "" //clear the search
   
  }
}
