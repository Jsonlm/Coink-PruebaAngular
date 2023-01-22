import { Component, Input, OnInit } from '@angular/core';
import { Characters } from 'src/app/core/models/characters';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() titles: string[] | undefined;

  @Input() items: Characters | undefined;

  private data: Characters | undefined;;

  constructor() {
  }

  ngOnInit(): void {
  }

}
