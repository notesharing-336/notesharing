import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  dataset: string[];
  searchText :string;

  constructor() { 
    this.dataset = ['hello', 'boy', 'boss', 'toy', 'samplenote']
  }

  ngOnInit(): void {
  }

}
