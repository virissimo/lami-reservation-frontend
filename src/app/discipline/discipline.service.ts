import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Discipline } from './discipline';

@Injectable({ providedIn: 'root' })
export class DisciplineService {
  //URL da API
  private disciplineUrl = 'api/discipline';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getDisciplines(): Observable<Discipline[]> {
    return this.http
      .get<Discipline[]>(this.disciplineUrl)
      .pipe(catchError(this.handleError<Discipline[]>('getDisciplines', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
