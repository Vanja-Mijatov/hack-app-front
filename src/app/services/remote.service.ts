import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  turnMode(data: string): any {
    return this.http.get('api/turn_on', {headers: this.headers}).pipe(catchError( err => {
      console.log(err);
      return throwError(err);
    }));
  }

  turnOff(data: string) {
    return this.http.get('api/turn_off', {headers: this.headers}).pipe(catchError( err => {
      console.log(err);
      return throwError(err);
    }));
  }

  feedFish(data: string) {
    return this.http.get('api/fish_food', {headers: this.headers}).pipe(catchError( err => {
      console.log(err);
      return throwError(err);
    }));
  }

  fishTemperature(data: string) {
    return this.http.get('api/fish_food', {headers: this.headers}).pipe(catchError( err => {
      console.log(err);
      return throwError(err);
    }));
  }
}
