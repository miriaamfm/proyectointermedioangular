import { Component, Input, OnInit } from '@angular/core';
import { EntradaApi } from 'src/app/compartidos/interfaces/entradaApi';

@Component({
  selector: 'app-entrada-api',
  templateUrl: './entrada-api.component.html',
  styleUrls: ['./entrada-api.component.css']
})
export class EntradaApiComponent implements OnInit {
  @Input()
  public entradaApi: EntradaApi;
  constructor() { 
    this.entradaApi={
      titulo:'',
      body:'',
      id:1,
      userId:1
    }
  }

  ngOnInit(): void {
  }

}
