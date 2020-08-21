import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Cinema } from '../models/cinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaWebService {

  baseUrl = 'http://localhost:8080/cinema/angular';

  constructor(private http: HttpClient) { }


  getCinemas(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(this.baseUrl + 'cinemas');
  }

}
