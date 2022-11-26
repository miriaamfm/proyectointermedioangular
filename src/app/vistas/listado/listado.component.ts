import { Component, OnInit } from '@angular/core';
import { Entradaejercicio } from 'src/app/compartidos/interfaces/entradaejercicio';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listadoEntradas: Entradaejercicio[];
  constructor() { 
    this.listadoEntradas = [
      {
        titulo: 'Introduccion a Angular',
        resumen: 'En esta leccion realizaremos una pequeña introduccion al mundo de desarrollo con Angular'
      },
      {
        titulo: 'Typescript como lenguaje para Angular',
        resumen: 'Breve recorrido por el lenguaje de Typescript como base para desarrollar en Angular'
      },
      {
        titulo: 'Componentes en Angular',
        resumen: 'Aprenderemos a usar los componentes en Angular y el por que de su importancia'
      }
    ];
  }

  ngOnInit(): void {
  }
  public mostrarTitulo(titulo:string):void{
    alert(`Entrada seleccionada: ${titulo}.`);
  }

}
