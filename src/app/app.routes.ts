import { Routes } from '@angular/router';
import {adminRoleGuard} from "./auth/guards/admin-role.guard";
import {userRoleGuard} from "./auth/guards/user-role.guard";

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/features/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/features/register/register.component').then(c => c.RegisterComponent)
  },
  {
    path: 'books/book-list',
    loadComponent: () => import('./features/books/book-list/book-list.component').then(c => c.BookListComponent),
    // canActivate: [adminRoleGuard]
  }
];
