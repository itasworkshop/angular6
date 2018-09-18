import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent }      from './students/students.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { StudentDetailComponent }  from './student-detail/student-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: StudentDetailComponent },  
  { path: 'students', component: StudentsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
