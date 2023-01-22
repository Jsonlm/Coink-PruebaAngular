import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';


@NgModule({
  declarations: [
    CharactersComponent,
    ListComponent,
    ViewComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CharactersModule { }
