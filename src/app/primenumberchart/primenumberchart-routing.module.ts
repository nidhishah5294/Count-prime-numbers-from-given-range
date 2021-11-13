import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimenumberchartComponent } from './primenumberchart.component';

const routes: Routes = [
  {
    path: '', component: PrimenumberchartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimenumberchartRoutingModule { }
