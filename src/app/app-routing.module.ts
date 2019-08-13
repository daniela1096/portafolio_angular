//MODULO ENCARGADO DE LA ESPECIFICACIÓN DE LAS RUTAS
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //El routerModule le dice a angular si son las rutas principales o las rutas hijas
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
 
const app_routes: Routes = [
    { path : '', component: PortafolioComponent },
    { path : 'about', component: AboutComponent },
    { path : 'item/:id', component: ItemComponent },
    { path : 'search/:termino', component: SearchComponent },
    { path : '**', pathMatch:'full', redirectTo: '' }
]


@NgModule({
    imports:[
        RouterModule.forRoot(app_routes, { useHash:true })
    ],
    exports:[
        RouterModule
    ]

})

export class appRoutingModule{

}