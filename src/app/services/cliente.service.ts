import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

const baseURL = "http://localhost:8080/wscliente"

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }
  registraCliente(data:Cliente): Observable<any>{
    return this.http.post(baseURL,data);
  }
}
