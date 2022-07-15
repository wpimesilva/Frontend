import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Clientes } from '../model/Clientes';
import { ClientesServiceService } from '../service/clientes/clientes-service.service';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { mascaraCPF, Validacoes } from '../shared/Validacoes';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public clientes = new Clientes();

  public formConsultarCPF = this.fb.group({
    cpf: ['', [Validators.required]],
    });

  public Cpf = this.formConsultarCPF.controls.cpf;

  constructor(
    private _router: Router,
    private clientesService: ClientesServiceService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {

    //this.consultar();
  }

  ngOnInit() {

  }




  public consultar() : void{
    this.clientesService.consultaCPF(this.Cpf.value??"").subscribe(
      {
        next : (Clientes) => {


          this.clientesService.cliente.next(Clientes);

          this.clientesService.clienteEmitter.emit(Clientes);

          this._router.navigate(['/atualizar-dados-contato']);


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
