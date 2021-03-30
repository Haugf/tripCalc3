import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private endpoint: string = 'https://api.jsonbin.io/b/6063827a418f307e258585bd'
  private secretKey: string = '$2b$10$qNfg3bDsbFn/f9OOXYDFz.6vTFvPexEEFy91FCnt4odz.73iC6TQW'
  
  private httpHeaders = {
    headers: new HttpHeaders({
      'secret-key': this.secretKey
    })
  }

  constructor(private httpClient:  HttpClient) { }

  getCalculateCost(): Observable<{}> {
      return this.httpClient.get<any>(this.endpoint, this.httpHeaders)
  }
}
