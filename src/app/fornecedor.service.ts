import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from './Fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  url = "http://localhost:3000/Fornecedor";

  constructor(private http: HttpClient) { }

  getFornecedor() : Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.url);
  }

  save(Fornecedor: Fornecedor) : Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.url, Fornecedor);
  }

  update(Fornecedor: Fornecedor) : Observable<Fornecedor> {
    return this.http.put<Fornecedor>(`${this.url}/${Fornecedor.id}`, Fornecedor);
  }

  delete(Fornecedor: Fornecedor) : Observable<void> {
    return this.http.delete<void>(`${this.url}/${Fornecedor.id}`);
  }
}
