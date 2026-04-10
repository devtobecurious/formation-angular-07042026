import { Routes } from "@angular/router";
import { AddNewSelfieRf } from "./components/add-new-selfie-rf/add-new-selfie-rf";
import { EditOneSelfie } from "./components/edit-one-selfie/edit-one-selfie";

// /selfies
export const selfiesRoutes: Routes = [
  {
    path: 'add',
    loadComponent: () => import('./components/add-new-selfie-rf/add-new-selfie-rf').then(m => m.AddNewSelfieRf)
  },
  {
    path: 'edit/:id',
    component: EditOneSelfie
  }
];
