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
  }

  getCalculatedCost2(data: any): Observable<{}> {
    
    return this.httpClient.get<any>(this.endpoint, {params: {
      camperOne_name: data.camperOne_name,
      camperOne_total: data.camperOne_total,
      camperTwo_name: data.camperTwo_name,
      camperTwo_total: data.camperTwo_total,
      camperThree_name: data.camperThree_name,
      camperThree_total: data.camperThree_total, 
    }})
  }
}
