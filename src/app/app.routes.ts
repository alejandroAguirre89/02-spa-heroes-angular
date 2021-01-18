/** Librería de angular de rutas */
import { RouterModule, Routes } from '@angular/router';

/** Todos los componentes usados en rutas deben
 * ser importados */
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesFiltroComponent } from './components/heroes-filtro/heroes-filtro.component';


/** el doble asterisco(**) es una ruta especial que se
 * ejecuta cuando no se hace match con ninguna de
 * las rutas declaradas.
 */
const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'heroes-filtro/:filtro', component: HeroesFiltroComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' },
];

/** Exportación de las rutas creadas, adicionando el parametro useHash: true
 * las rutas manejan el hashtag (#)
 * export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
 */
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


