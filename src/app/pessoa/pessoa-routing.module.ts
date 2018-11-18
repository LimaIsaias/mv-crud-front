import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemPessoasComponent } from './listagem-pessoas/listagem-pessoas.component';

const pessoaRoutes: Routes = [
  { path: 'pessoa', component: ListagemPessoasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(pessoaRoutes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
