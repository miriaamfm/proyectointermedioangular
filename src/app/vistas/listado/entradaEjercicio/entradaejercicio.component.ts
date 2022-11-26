import { Component, Input, OnInit } from '@angular/core';
import { Entradaejercicio } from 'src/app/compartidos/interfaces/entradaejercicio';

@Component({
  selector: 'app-entradaejercicio',
  templateUrl: './entradaejercicio.component.html',
  styleUrls: ['./entradaejercicio.component.css']
})
export class EntradaejercicioComponent implements OnInit {
  @Input()
  public entradaejercicio: Entradaejercicio;
  constructor() {
    this.entradaejercicio = {
      titulo: '',
      resumen: ''
    }
  }
  ngOnInit(): void {
  }

}
