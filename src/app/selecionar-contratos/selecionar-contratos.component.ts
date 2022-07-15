import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { Clientes } from '../model/Clientes';
import { ClientesContatos } from '../model/ClientesContatos';
import { ClientesServiceService } from '../service/clientes/clientes-service.service';
import { ContratosClientes } from '../model/ContratosClientes';
import { ContratosServiceService } from '../service/contratos/contratos-service.service';
import { Router } from "@angular/router";
import {MatTableModule} from '@angular/material/table'

@Component({
  selector: 'app-selecionar-contratos',
  templateUrl: './selecionar-contratos.component.html',
  styleUrls: ['./selecionar-contratos.component.css']
})
export class SelecionarContratosComponent implements OnInit {


  formSelecionarContratos!: FormGroup;
  public clientes!: Clientes;
  public contratos!: ContratosClientes;
  public contratosAVista!: ContratosClientes;
  public contratosParcelado!: ContratosClientes;
  public idClientePadrao = "5c74bb2c-b2e1-40a0-af64-3a515e4bfb9e";
  public valorContratoOriginal = 0;
  public idContrato = "";

  constructor(
    private clientesService: ClientesServiceService,
    private contratosService: ContratosServiceService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private _router: Router
    ) { }



    ngOnInit(): void {

      this.clientesService.clienteEmitter.subscribe(next => {
        this.clientes = next;
      });

      this.consultarContratosCliente();



    }

    public preencherContrato(contratos : ContratosClientes){
      this.contratos = contratos;

    }
    public preencherContratoAVista(contratos : ContratosClientes){
      this.contratosAVista = contratos;

    }
    public preencherContratoParcelado(contratos : ContratosClientes){
      this.contratosParcelado = contratos;

    }





  public consultarContratosCliente() : void{
    this.contratosService.retornaContratosCliente(this.idClientePadrao).subscribe(
      {
        next : (contratos) => {


          this.contratosService.contrato.next(contratos);

          this.contratosService.contratoEmitter.emit(contratos);

          this.preencherContrato(contratos);
          this.consultarContratosAVistaCliente(contratos.idContrato!);
          this.consultarContratosParceladoCliente(contratos.idContrato!);


        },
        error : (error) => {
          this.dialog.open(DialogComponent, {
            data: "Não há contratos para o CPF informado",
          });
        }

      }

    );

  }

  public consultarContratosAVistaCliente(idContrato: string) : void{
    this.contratosService.aplicarDescontoAVista(idContrato,70).subscribe(
      {
        next : (contratos) => {


          this.contratosService.contrato.next(contratos);

          this.contratosService.contratoEmitter.emit(contratos);

          this.preencherContratoAVista(contratos);



        },
        error : (error) => {
          this.dialog.open(DialogComponent, {
            data: "Não há contratos para o CPF informado",
          });
        }

      }

    );
  }

    public consultarContratosParceladoCliente(idContrato: string) : void{
      this.contratosService.aplicarDescontoParcelado(idContrato,40,48).subscribe(
        {
          next : (contratos) => {


            this.contratosService.contrato.next(contratos);

            this.contratosService.contratoEmitter.emit(contratos);

            this.preencherContratoParcelado(contratos);
            //this.valorContratoOriginal = this.contratos.valorContratoAtualizado;
            //console.log(this.contratos);


          },
          error : (error) => {
            this.dialog.open(DialogComponent, {
              data: "Não há contratos para o CPF informado",
            });
          }

        }

      );

  }

}
