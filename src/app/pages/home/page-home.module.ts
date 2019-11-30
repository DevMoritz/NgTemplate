import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page-home.component';

const routes: Routes = [
  {
    path     : '',
    component: PageHomeComponent
  }
];

@NgModule({
  declarations: [PageHomeComponent],
  imports     : [RouterModule.forChild(routes)],
  exports     : [RouterModule]
})
export class PageHomeModule {
}
