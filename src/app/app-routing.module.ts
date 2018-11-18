import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ListagemPessoasComponent } from './pessoa/listagem-pessoas/listagem-pessoas.component';


const routes: Routes = [
  { path: '', redirectTo: '/pessoa', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent },
  { path: 'pessoa', component: ListagemPessoasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
