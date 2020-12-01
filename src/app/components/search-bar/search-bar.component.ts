import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  dataset: string[];
  searchText :string;
  showSearchResults: boolean = true;
  searchResult: string;

  constructor() { 
    this.dataset = [
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

  displaySearchResults(desiredSearchVal: string): void {
    this.searchResult = desiredSearchVal
    this.searchText = ""
   
  }
}
