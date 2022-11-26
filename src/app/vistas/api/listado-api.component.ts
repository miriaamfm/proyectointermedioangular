import { Component, OnInit } from '@angular/core';
import { EntradaApi } from 'src/app/compartidos/interfaces/entradaApi';
import { EntradaService } from 'src/app/compartidos/servicios/entrada.service';

@Component({
  selector: 'app-listado-api',
  templateUrl: './listado-api.component.html',
  styleUrls: ['./listado-api.component.css']
})
export class ListadoApiComponent implements OnInit {

  public listadoEntradas: EntradaApi[];
  constructor(private entradaService: EntradaService) { 
    this.listadoEntradas = [];
  }

  ngOnInit(): void {
    this.recuperarEntradas();
  }
  public mostrarTitulo(titulo:string):void{
    alert(`Entrada seleccionada: ${titulo}.`);
  }

  public recuperarEntradas():void{
    this.entradaService.recuperarEntradas().subscribe(
      (data) =>{
        this.listadoEntradas=data;
      },
      (error) => {
        console.log('Error: ', error);
      },
      () => {
        console.log('Peticion hecha correctamente');
      }
    );
  }
}


