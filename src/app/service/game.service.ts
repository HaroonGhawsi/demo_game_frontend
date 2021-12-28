import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameOption } from '../model/GameOption';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  baseURL: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getGameOptions(): Observable<GameOption[]> {
    return this.http.get<GameOption[]>(this.baseURL);
  }

  addUserSelection(userOption: string): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(userOption);
    return this.http.post(this.baseURL, body, { headers: headers });
  }
}
