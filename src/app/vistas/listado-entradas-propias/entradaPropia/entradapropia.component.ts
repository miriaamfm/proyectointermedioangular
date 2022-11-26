import { Component, Input, OnInit } from '@angular/core';
import { Entradaejercicio } from 'src/app/compartidos/interfaces/entradaejercicio';

@Component({
  selector: 'app-entradapropia',
  templateUrl: './entradapropia.component.html',
  styleUrls: ['./entradapropia.component.css']
})
export class EntradaPropiaComponent implements OnInit {
  @Input()
  public entradapropia: Entradaejercicio;
  constructor() {
    this.entradapropia = {
      titulo: '',
      resumen: ''
    }
  }
  ngOnInit(): void {
  }

}
