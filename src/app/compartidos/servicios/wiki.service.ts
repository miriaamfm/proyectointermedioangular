import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikiService {
  private baseURL = 'https://es.wikipedia.org/w/api.php';

  constructor(private http: HttpClient) {}

  search(data: any) {
    return this.http.get(this.baseURL, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        srsearch: data,
        origin: '*',
        srlimit: 100,
      },
    });
  }
}
