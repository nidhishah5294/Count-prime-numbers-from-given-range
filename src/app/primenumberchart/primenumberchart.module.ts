import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimenumberchartRoutingModule } from './primenumberchart-routing.module';
import { PrimenumberchartComponent } from './primenumberchart.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrimenumberchartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimenumberchartRoutingModule
  ]
})
export class PrimenumberchartModule { }
