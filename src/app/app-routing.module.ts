import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ListagemPessoasComponent } from './pessoa/listagem-pessoas/listagem-pessoas.component';
import { CadastroPessoasComponent } from './pessoa/cadastro-pessoas/cadastro-pessoas.component';

const routes: Routes = [
  { path: 'pessoa', component: ListagemPessoasComponent },
  { path: 'pessoa/novo', component: CadastroPessoasComponent },
  { path: 'pessoa/:id', component: CadastroPessoasComponent },
  { path: '', redirectTo: '/pessoa', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
