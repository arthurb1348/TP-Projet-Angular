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
        path: 'attributes-binding-lesson',
        loadComponent: () => import('./pages/lessons/attributes-binding-lesson/attributes-binding-lesson').then((m) => m.AttributesBindingLesson),
    },
    {
        path: 'event-binding-lesson',
        loadComponent: () => import('./pages/lessons/event-binding-lesson/event-binding-lesson').then((m) => m.EventBindingLesson),
    },
    {
        path: 'two-way-binding-lesson',
        loadComponent: () => import('./pages/lessons/two-way-binding-lesson/two-way-binding-lesson').then((m) => m.TwoWayBindingLesson),
    },
    {
        path: 'conditional-rendering-lesson',
        loadComponent: () => import('./pages/lessons/conditional-rendering-lesson/conditional-rendering-lesson').then((m) => m.ConditionalRenderingLesson), 
    },
    {
        path: 'list-rendering-lesson',
        loadComponent: () => import('./pages/lessons/list-rendering-lesson/list-rendering-lesson').then((m) => m.ListRenderingLesson),
    },
    {
        path:'signals-lesson',
        loadComponent:()=>import('./pages/lessons/signals-lesson/signals-lesson').then(m=>m.SignalsLesson)
    },

    {
        path: 'exercice-text-interpolation',
        loadComponent: () => import('./pages/exercices/exercice-text-interpolation/exercice-text-interpolation').then((m) => m.ExerciceTextInterpolation),
    },
    {
        path: 'exercice-property-binding',
        loadComponent: () => import('./pages/exercices/property-binding-exercice/property-binding-exercice').then((m) => m.PropertyBindingExercice),
    },
    {
        path: 'exercice-event-binding',
        loadComponent: () => import('./pages/exercices/event-binding-exercice/event-binding-exercice').then((m) => m.EventBindingExercice),
    },
    {
        path: 'exercice-conditional-rendering',
        loadComponent: () => import('./pages/exercices/conditional-rendering-exercice/conditional-rendering-exercice').then((m) => m.ConditionalRenderingExercice),
    },
    {
        path: 'exercice-dynamic-styling',
        loadComponent: () => import('./pages/exercices/dynamic-styling/dynamic-styling').then((m) => m.DynamicStyling),
    },
    {
        path: 'signals-exercice',
        loadComponent: () => import('./pages/exercices/signals-exercice/signals-exercice').then((m) => m.SignalsExercice),
    },

    {
        path: 'correction-text-interpolation',
        loadComponent: () => import('./pages/corrections/text-interpolation-exercice/text-interpolation-exercice').then((m) => m.TextInterpolationExercice),
    },
    {
        path: 'correction-property-binding',
        loadComponent: () => import('./pages/corrections/attributes-binding-exercice/attributes-binding-exercice').then((m) => m.AttributesBindingExercice),
    },
    {
        path: 'correction-event-binding',
        loadComponent: () => import('./pages/corrections/event-binding/event-binding').then((m) => m.EventBinding),
    },
    {
        path: 'correction-conditional-rendering',
        loadComponent: () => import('./pages/corrections/conditional-rendering/conditional-rendering').then((m) => m.ConditionalRendering),
    },
    //! ---------- Le système page Not Found ---------------------------------------------------------------------
    // Dans Angular il faut placer à la fin le path:'**'
    // ! check la doc si ya meilleure manière de faire ou plus simple ? aller explorer analog ?
    {
        path:'**',
        loadComponent:()=>import('./pages/not-found/not-found').then(m=>m.NotFound)
    }
];
