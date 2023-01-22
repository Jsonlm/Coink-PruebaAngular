import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/core/models/characters';
import { CharactersService } from "../../../core/services/characters.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public page: number = 0;

  public titles = [
    "Id",
    "Name",
    "Status",
    "Species",
    "Type",
    "Gender"
  ];

  formRyM = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
    type: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
  })
  public dataCharacters: Characters | undefined;

  constructor(
    private charactersService: CharactersService,) {
  }

  ngOnInit(): void {
    let name = this.formRyM.value.name;
    let type = this.formRyM.value.type;

    this.getCharacters(
      this.page,
      name,
      type
    );
  }

  getCharacters(page: number, name: string, type: string) {
    let pageDefault = 1;

    this.page === 0 || this.page === 1 ? this.page = pageDefault : this.page;

    this.charactersService.getCharacters(
      this.page,  //Page
      name,       //name filter
      type        //type filter
    )
      .subscribe((data: Characters) => {
        this.dataCharacters = data;
      });
  }

  clearFilter() {
    this.getCharacters(1, "", "");

    this.formRyM.setValue({ name: '', type: '' });
  }

  applyFilter() {
    this.ngOnInit();
  }

  prev() {
    this.page--;
    this.applyFilter();
  }

  next() {
    this.page++;
    this.applyFilter();
  }
}
