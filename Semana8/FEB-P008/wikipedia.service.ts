import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  private apiUrl = 'https://www.mediawiki.org/w/api.php';

  constructor(private http: HttpClient) {}

  search(term: string): Observable<any> {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: term,
    };

    return this.http.get(this.apiUrl, { params }).pipe(
      catchError((error) => {
        console.error('Error fetching Wikipedia data:', error);
        return throwError('Something went wrong. Please try again later.');
      })
    );
  }
}
