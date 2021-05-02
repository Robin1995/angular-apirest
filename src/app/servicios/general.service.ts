import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Respuesta } from '../interfaces/respuesta';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable()
export class GeneralService {
  filtro = new BehaviorSubject<string>('');
  filtroObservable = this.filtro.asObservable();
  public enviarDatos = new EventEmitter<string>();
  constructor(private http: HttpClient) { }


  getData(url: string) {
    return this.http.get<Respuesta>(url, httpOptions);
  }
  filtar(nombre: string) {
    this.filtro.next(nombre);
  }
}
