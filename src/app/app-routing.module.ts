import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PaginaErrorComponent } from './vistas/paginaNotFound/pagina-error.component';
import { ImagenLocalComponent } from './vistas/imagenes/imagen-local.component';
import { HomeComponent } from './vistas/inicio/home.component';
import { ListadoComponent } from './vistas/listado/listado.component';
import { ListadoEntradasComponent } from './vistas/listado-entradas-propias/listado-entradas.component';
import { ListadoApiComponent } from './vistas/api/listado-api.component';
import { WikiComponent } from './vistas/wiki/wiki.component';

const routes: Routes=[
  {path:'entradapropia', component:ListadoEntradasComponent},
  {path:'entradaejercicio', component:ListadoComponent},
  {path:'imagenes', component:ImagenLocalComponent},
  {path:'api', component:ListadoApiComponent},
  {path:'wiki', component:WikiComponent},
  {path:'home', component:HomeComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'**', component:PaginaErrorComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
