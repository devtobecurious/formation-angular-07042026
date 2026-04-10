import { Routes } from '@angular/router';
import { SelfiesPage } from './pages/selfies.page/selfies.page';
import { selfiesRoutes } from './features/selfies/selfies.routes';

export const routes: Routes = [
  {
    path: 'selfies',
    component: SelfiesPage,
    children: selfiesRoutes
  },
  {
    path: '**',
    redirectTo: 'selfies'
  },
  {
    path: '',
    redirectTo: 'selfies',
    pathMatch: 'full',
  }
];
