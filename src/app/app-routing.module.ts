import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path        : 'home',
    loadChildren: () => import('./pages/home/page-home.module').then(m => m.PageHomeModule),
    data        : {
      title: 'Home',
      icon : 'fa-file-alt'
    }
  },
  {
    path      : '',
    redirectTo: 'home',
    pathMatch : 'full'
  },
  {
    path      : '**',
    redirectTo: 'home',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        useHash: true
      }
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
