import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { ImagenLocalComponent } from './vistas/imagenes/imagen-local.component';

import { PaginaErrorComponent } from './vistas/paginaNotFound/pagina-error.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './vistas/inicio/home.component';
import { ListadoComponent } from './vistas/listado/listado.component';
import { EntradaejercicioComponent } from './vistas/listado/entradaEjercicio/entradaejercicio.component';
import { ListadoEntradasComponent } from './vistas/listado-entradas-propias/listado-entradas.component';
import { EntradaPropiaComponent } from './vistas/listado-entradas-propias/entradaPropia/entradapropia.component';
import { ListadoApiComponent } from './vistas/api/listado-api.component';
import { EntradaApiComponent } from './vistas/api/entradaApi/entrada-api.component';
import { BarraNavegacionComponent } from './barraNavegacion/barra-navegacion.component';
import { FormsModule } from '@angular/forms';
import { WikiComponent } from './vistas/wiki/wiki.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    ImagenLocalComponent,
    EntradaejercicioComponent,
    PaginaErrorComponent,
    HomeComponent,
    ListadoComponent,
    ListadoEntradasComponent,
    EntradaPropiaComponent,
    ListadoApiComponent,
    EntradaApiComponent,
    BarraNavegacionComponent,
    WikiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
