import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CharactersModule } from './characters/characters.module';
import { FeaturesComponent } from './features.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FeaturesRoutingModule,
    CharactersModule
  ]
})
export class FeaturesModule { }
