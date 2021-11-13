import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const primeModule = () => import('./primenumberchart/primenumberchart.module').then(m => m.PrimenumberchartModule);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: primeModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
