import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemPessoasComponent } from './listagem-pessoas/listagem-pessoas.component';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';

const pessoaRoutes: Routes = [
  { path: 'pessoa', component: ListagemPessoasComponent },
  { path: 'pessoa/novo', component: CadastroPessoasComponent },
  { path: 'pessoa/:id', component: CadastroPessoasComponent },
  { path: '', redirectTo: '/pessoa', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(pessoaRoutes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
