import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  {
    path: 'customers',
    loadChildren: () => import('./customer-list/customer-card-list.module').then((m) => m.CustomerCardListModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
