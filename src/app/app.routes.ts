import { Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(r => r.routes)
    },
    {
        path: 'machine',
        loadChildren: () => import('./machine/machine.routes').then(r => r.routes)
    },
    {
        path: 'maintenance',
        loadChildren: () => import('./maintenance/maintenance.routes').then(r => r.routes)
    },
    {
        path: 'session',
        loadChildren: () => import('./session/session.routes').then(r => r.routes)
    },
    {
        path: '404',
        component: Error404PageComponent
    },
    {
        path: '',
        redirectTo: 'session',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
