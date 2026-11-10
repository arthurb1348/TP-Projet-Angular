import { Routes } from '@angular/router';
// Importation des composants pour les routes.
import { About } from './pages/about/about';


export const routes: Routes = [
    // Route classique vers la page 'about'.
    { path: 'about', component: About },
    // Redirection vers la route 'home' par défaut.
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    // Route avec lazy loading vers la page 'home'.
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    },
    {
        path: 'text-interpolation-lesson',
        loadComponent: () => import('./pages/lessons/text-interpolation-lesson/text-interpolation-lesson').then((m) => m.TextInterpolationLesson),
    },
    {
        path: 'exercice-text-interpolation',
        loadComponent: () => import('./pages/exercices/exercice-text-interpolation/exercice-text-interpolation').then((m) => m.ExerciceTextInterpolation),
    },
    {
        path: 'correction-text-interpolation',
        loadComponent: () => import('./pages/corrections/text-interpolation-exercice/text-interpolation-exercice').then((m) => m.TextInterpolationExercice),
    },
    {
        path: 'attributes-binding-lesson',
        loadComponent: () => import('./pages/lessons/attributes-binding-lesson/attributes-binding-lesson').then((m) => m.AttributesBindingLesson),
    }
];
