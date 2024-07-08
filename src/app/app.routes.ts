import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { EmployeesComponent } from './employees/employees.component';

export const routes: Routes = [
  {
    path: '', // <your-domain>/
    component:MainContentComponent,
  },
  {
    path: 'employees', // <your-domain>/employees
    component: EmployeesComponent,
  },
];
