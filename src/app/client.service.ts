import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url = "http://localhost:3000/Client";

  constructor(private http: HttpClient) { }

  getClient() : Observable<Client[]> {
    return this.http.get<Client[]>(this.url);
  }

  save(Client: Client) : Observable<Client> {
    return this.http.post<Client>(this.url, Client);
  }

  update(Client: Client) : Observable<Client> {
    return this.http.put<Client>(`${this.url}/${Client.id}`, Client);
  }

  delete(Client: Client) : Observable<void> {
    return this.http.delete<void>(`${this.url}/${Client.id}`);
  }
}
