// src/app/admin/admin-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FormationsListComponent } from './components/formations-list/formations-list.component';
import { InscriptionsListComponent } from './components/inscriptions-list/inscriptions-list.component';
import { FormationFormComponent } from './components/formation-form/formation-form.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AdminAuthGuard], // Protection activée
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'formations', component: FormationsListComponent },
      { path: 'inscriptions', component: InscriptionsListComponent },
      { path: 'formation/new', component: FormationFormComponent },
      { path: 'formation/edit/:id', component: FormationFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }