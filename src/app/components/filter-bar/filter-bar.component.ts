import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';


@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {
Contributors: string[]= ['Bernard','Chiz', 'Valeria', 'Alfred'];
Professors: string[];
Topics: string[];
Test: string = "Test";
  constructor() { 
    // this.Contributors= ['Bernard','Chiz', 'Valeria', 'Alfred']

    // this.Professors= ['Keith Vanderlinden','V. Norman', 'Derek Schuurman', 'Plantinga']

    // this.Topics= ['CS 262','CS 336', 'CS 108', 'Garbage']
  }
  
  ngOnInit(): void {
  }

}
