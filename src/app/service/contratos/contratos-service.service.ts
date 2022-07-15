import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from "@angular/core";
import { of, Observable,  Subject, throwError, catchError } from "rxjs";
import { ContratosClientes } from '../../model/ContratosClientes';
import { BaseService } from "../base.service";

@Injectable({
  providedIn: 'root'
})
export class ContratosServiceService extends BaseService {
  @Output() contratoEmitter: EventEmitter<ContratosClientes> = new EventEmitter();


  public contrato: Subject<ContratosClientes> = new Subject<ContratosClientes>();
  private baseURL = this.urlService + '/api/contratos';


  constructor(private httpClient: HttpClient) {
    super();
  }


  public retornaContratosCliente(idCliente: string) : Observable<ContratosClientes> {
    var url = this.baseURL + '/retornaContratosCliente/' + idCliente
    return this.httpClient.get<ContratosClientes>(url, this.ObterHeaderJson()).pipe(
      catchError(this.errorHandler));

  }


  public aplicarDescontoAVista(idContrato: string, percentualDesconto: number) : Observable<ContratosClientes> {
    var url = this.baseURL + `/aplicarDescontoAVista/${idContrato}/${percentualDesconto}`
    return this.httpClient.get<ContratosClientes>(url, this.ObterHeaderJson()).pipe(
      catchError(this.errorHandler));

  }

  public aplicarDescontoParcelado(idContrato: string, percentualDesconto: number, numeroParcelas: number) : Observable<ContratosClientes> {
    var url = this.baseURL + `/aplicarDescontoParcelado/${idContrato}/${percentualDesconto}/${numeroParcelas}`
    return this.httpClient.get<ContratosClientes>(url, this.ObterHeaderJson()).pipe(
      catchError(this.errorHandler));

  }





}
