import { Component, OnInit, Input } from '@angular/core';




@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent implements OnInit {

  @Input() public Label: string;
  filtervalues: string[]= ['Bernard','Chiz', 'Valeria', 'Alfred'];

  ngOnInit(): void {
  }

}
