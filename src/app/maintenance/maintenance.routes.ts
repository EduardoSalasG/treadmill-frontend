import { Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CreateMaintenancePageComponent } from './pages/create-maintenance-page/create-maintenance-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { MaintenancePageComponent } from './pages/maintenance-page/maintenance-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            { path: 'create', component: CreateMaintenancePageComponent },
            { path: 'list', component: ListPageComponent },
            { path: ':id', component: MaintenancePageComponent },
            { path: '**', redirectTo: 'list' },
        ]
    }
];
