import { Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CreateSessionPageComponent } from './pages/create-session-page/create-session-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SessionPageComponent } from './pages/session-page/session-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            { path: 'create', component: CreateSessionPageComponent },
            { path: 'list', component: ListPageComponent },
            { path: 'statistics', component: StatisticsPageComponent },
            { path: ':id', component: SessionPageComponent },
            { path: '**', redirectTo: 'list' },
        ]
    }
];
