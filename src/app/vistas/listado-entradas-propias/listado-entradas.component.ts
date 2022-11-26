import { Component, OnInit } from '@angular/core';
import { Entradaejercicio } from 'src/app/compartidos/interfaces/entradaejercicio';

@Component({
  selector: 'app-listado-entradas',
  templateUrl: './listado-entradas.component.html',
  styleUrls: ['./listado-entradas.component.css']
})
export class ListadoEntradasComponent implements OnInit {
  public listadoEntradas: Entradaejercicio[];
  constructor() { 
    this.listadoEntradas = [
      {
        titulo: 'Vacunar a los bebés de meningitis será gratis en toda España antes de 2025',
        resumen: 'La Comisión de Salud Pública ha aprobado este jueves las recomendaciones para vacunar con tres dosis de meningitis B a los bebés a los dos, cuatro y doce meses de edad, que se implantarán en todas las comunidades autónomas a lo largo de 2023 hasta finales del año 2024'
      },
      {
        titulo: 'Así se desarrollarán los lácteos del futuro',
        resumen: 'Como complemento a la producción tradicional, la agricultura celular y la fermentación de precisión ya ayudan a los actores del sector a dirigirse hacia modelos de producción más eficientes y sostenibles'
      },
      {
        titulo: 'La población en España creció hasta los 47,6 millones en la primera mitad de 2022 por la llegada de casi 500.000 migrantes',
        resumen: 'La población de España aumentó en 182.141 personas en la primera mitad de 2022 situándose en 47.615.034 habitantes a 1 de julio de 2022, el máximo de la serie histórica de la estadística de Cifras de Población del Instituto Nacional de Estadística (INE).'
      }
    ];
  }

  ngOnInit(): void {
  }
  public mostrarTitulo(titulo:string):void{
    alert(`Entrada seleccionada: ${titulo}.`);
  }
}
