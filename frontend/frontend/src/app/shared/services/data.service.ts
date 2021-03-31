import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private endpoint: string = 'https://api.jsonbin.io/b/6063990218592d461f039e2f/1'
  private endpoint: string = 'http://localhost:3000/users'
  private secretKey: string = ''

  private httpHeaders = {
    headers: new HttpHeaders({
      'secret-key': this.secretKey
    })
  }

  constructor(private httpClient: HttpClient) { }

  getCalculatedCost(): Observable<{}> {
    return this.httpClient.get<any>(this.endpoint)
      .pipe(
        catchError(this.handleError<any>('getCalculatedCost',  ''))
      )
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any) => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead


  };
}
}
