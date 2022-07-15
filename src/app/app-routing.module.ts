import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarDadosContatoComponent } from './atualizar-dados-contato/atualizar-dados-contato.component';
import { SelecionarContratosComponent } from './selecionar-contratos/selecionar-contratos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'atualizar-dados-contato', component: AtualizarDadosContatoComponent },
  { path: 'selecionar-contratos', component: SelecionarContratosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
