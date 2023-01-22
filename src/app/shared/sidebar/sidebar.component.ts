import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() show: boolean | undefined;

  public menu = [{
    name: "Main Item",
    options: [
      { name: "Submenu Item" },
      { name: "Submenu Item" }
    ]
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
