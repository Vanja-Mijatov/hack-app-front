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

  turnAutomatic(): any {
    return this.http.get('api/controller/turn_on', {headers: this.headers}).pipe(catchError( err => {
      console.log(err);
      return throwError(err);
    }));
  }

  turnOff(): any {
    return this.http.get('api/controller/turn_off', {headers: this.headers}).pipe(catchError( err => {
      console.log(err);
      return throwError(err);
    }));
  }

  feedFish(): any {
    return this.http.get('api/controller/fish_food', {headers: this.headers}).pipe(catchError( err => {
      console.log(err);
      return throwError(err);
    }));
  }

  fishTemperature(data: string): any {
    return this.http.get('api/controller/fish_temperature/' + data, {headers: this.headers}).pipe(catchError( err => {
      console.log(err);
      return throwError(err);
    }));
  }

  filterOn(): any {
    return this.http.get('api/controller/turn_on_filter', {headers: this.headers}).pipe(catchError( err => {
      console.log(err);
      return throwError(err);
    }));
  }

  filterOff(): any {
    return this.http.get('api/controller/turn_off_filter', {headers: this.headers}).pipe(catchError( err => {
      console.log(err);
      return throwError(err);
    }));
  }

  waterPlants(data: string): any {
    return this.http.get('api/controller/plants_water/' + data, {headers: this.headers}).pipe(catchError( err => {
      console.log(err);
      return throwError(err);
    }));
  }
}
