import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisciplineComponent } from './discipline/discipline.component';
import { NewDisciplineComponent } from './discipline/new-discipline/new-discipline.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'discipline', component: DisciplineComponent },  
  { path: 'new-discipline', component: NewDisciplineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
