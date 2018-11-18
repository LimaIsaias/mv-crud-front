//import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';


import { PessoaRoutingModule } from './pessoa-routing.module';
import { ListagemPessoasComponent } from '../listagem-pessoas/listagem-pessoas.component';

@NgModule({
  imports: [
    PessoaRoutingModule
  ],
  declarations: [ListagemPessoasComponent]
})
export class PessoaModule { }