import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buscar', component: BuscarComponent },
    { path: 'buscar/:texto', component: BuscarComponent },
    { path: 'info/:id/:pag', component: InfoComponent },
    { path: 'info/:id/:pag/:busqueda', component: InfoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const app_routing = RouterModule.forRoot(routes);
