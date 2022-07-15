import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from "@angular/core";
import { of, Observable,  Subject, throwError, catchError } from "rxjs";
import { environment } from 'src/environments/environment';
import { Clientes } from '../../model/Clientes';
import { ClientesContatos } from '../../model/ClientesContatos';
import { BaseService } from "../base.service";

@Injectable({
  providedIn: 'root'
})
export class ClientesServiceService extends BaseService {
  @Output() clienteEmitter: EventEmitter<Clientes> = new EventEmitter();

  public cliente: Subject<Clientes> = new Subject<Clientes>();
  public clienteContatos: Subject<ClientesContatos> = new Subject<ClientesContatos>();
  private baseURL = this.urlService + '/api/clientes';


  constructor(private httpClient: HttpClient) {
    super();
  }



  public consultaCPF(cpf: string) : Observable<Clientes> {
    var url = this.baseURL + '/consultaCPF/' + cpf
    return this.httpClient.get<Clientes>(url, this.ObterHeaderJson()).pipe(
      catchError(this.errorHandler));;
  }

  public atualizarDadosContato(clienteContatos: ClientesContatos) : Observable<ClientesContatos> {
    var url = this.baseURL + '/atualizarDadosContato'
    return this.httpClient.post<ClientesContatos>(url,clienteContatos, this.ObterHeaderJson()).pipe(
      catchError(this.errorHandler));
  }




}
