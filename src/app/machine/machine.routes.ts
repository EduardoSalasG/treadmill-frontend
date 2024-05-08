import { Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CreateMachinePageComponent } from './pages/create-machine-page/create-machine-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { MachinePageComponent } from './pages/machine-page/machine-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            { path: 'create', component: CreateMachinePageComponent },
            { path: 'list', component: ListPageComponent },
            { path: ':id', component: MachinePageComponent },
            { path: '**', redirectTo: 'list' },
        ]
    }
];
