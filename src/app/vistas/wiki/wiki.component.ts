import { Component, OnInit } from '@angular/core';
import { WikiService } from 'src/app/compartidos/servicios/wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent{

  title = 'proyectoIntermedioAngular';
  searchTerm: any;
  results: any = [];

  totalResults: any;
  page: number = 1;
  constructor(private wiki: WikiService){}
  
  onSubmit() {
    this.wiki.search(this.searchTerm).subscribe((res: any) => {
      this.results = res.query.search;

      this.totalResults = res.query.search.length;
      console.log(this.results);
    });
  }
}
