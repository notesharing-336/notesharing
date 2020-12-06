import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  fakeDataSet: string[];    //replaced by a list to hold actual courses titles
  searchText :string;
  searchResult: string;     //would be replace to display cards

  constructor() { 
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
  }

  /**
   * Calls the service class to produces all notes under that 
   * that course title.
   * @param aCourseTitle the course title to be used to retrieve notes
   */
  displaySearchResults(aCourseTitle: string): void {
    this.searchResult = aCourseTitle
    this.searchText = ""
   
  }
}
