import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './components/table/table.component';
import { CharactersService } from '../core/services/characters.service';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent
  ],
  providers: [CharactersService]
})
export class SharedModule { }
