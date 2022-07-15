import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Clientes } from '../model/Clientes';
import { ClientesContatos } from '../model/ClientesContatos';
import { ClientesServiceService } from '../service/clientes/clientes-service.service';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { Router } from "@angular/router";
import {MatTableModule} from '@angular/material/table'

@Component({
  selector: 'app-atualizar-dados-contato',
  templateUrl: './atualizar-dados-contato.component.html',
  styleUrls: ['./atualizar-dados-contato.component.css']
})
export class AtualizarDadosContatoComponent implements OnInit {
  formAtualizarContato!: FormGroup;
  public clientes!: Clientes;

  constructor(
    private clientesService: ClientesServiceService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private _router: Router
    ) { }

    ngOnInit(): void {
      this.validation();


    }




  public validation(): any {
    this.formAtualizarContato = this.fb.group({
      nomeContato: ['', [Validators.required]],
      emailContato: ['', [Validators.required]],
      telefoneContato: ['', [Validators.required]]
    })
  }


  atualizarDadosContato(): void {
    const { valid, value } = this.formAtualizarContato;
    if (valid) {
      /*const ClientesContatos: ClientesContatos = {
        cliente: this.clientes,
        nomeContato: value.nomeContato,
        emailContato: value.emailContato,
        telefoneContato: value.telefoneContato
      } as ClientesContatos;*/

      this._router.navigate(['/selecionar-contratos']);

      /*this.clientesService.atualizarDadosContato(ClientesContatos).subscribe(
        {
          next: () => {

            this._router.navigate(['/selecionar-contrato']);


          },
          error: (error) => {
            this.dialog.open(DialogComponent, {
              data: "Não há contratos para o CPF informado",
            });
          }
        }
      )*/
      }
  }

}
