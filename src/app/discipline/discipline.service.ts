import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Discipline } from './discipline';

@Injectable({ providedIn: 'root' })
export class DisciplineService {
  //URL da API
  private disciplineUrl = '/api/discipline';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  getDisciplines(): Observable<Discipline[]> {
    return this.http
      .get<Discipline[]>(this.disciplineUrl)
      .pipe(catchError(this.handleError<Discipline[]>('getDisciplines', [])));
  }

  addDiscipline(discipline: Discipline): Observable<Discipline> {
    return this.http.post<Discipline>(this.disciplineUrl, discipline, this.httpOptions).pipe(
      catchError(this.handleError<Discipline>('addDiscipline'))
    );
  }

  delete(id: number): Observable<Discipline> {
    const url = `${this.disciplineUrl}/${id}`;
    return this.http.delete<Discipline>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Discipline>('delete'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
